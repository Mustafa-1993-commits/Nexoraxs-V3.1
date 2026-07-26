#!/usr/bin/env python3
"""Validate on-demand Reference Intelligence schemas, objects, indexes, and links."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import unquote

import yaml
from jsonschema import Draft202012Validator, FormatChecker


REQUIRED_ARTIFACTS = {
    "OVERVIEW.md",
    "BUSINESS-RULES.md",
    "WORKFLOW.md",
    "AUTHORIZATION-TENANCY.md",
    "DATA-MODEL.md",
    "BACKEND-FLOW.md",
    "FRONTEND-FLOW.md",
    "DEPENDENCIES.md",
    "QUALITY-SECURITY.md",
    "REUSE-LICENSE.md",
    "EVIDENCE.md",
    "KNOWLEDGE.yaml",
}
INDEX_FILES = {
    "knowledge-objects.yaml",
    "capabilities.yaml",
    "aliases.yaml",
    "relationships.yaml",
    "lifecycle.yaml",
    "stale.yaml",
}
CLAIM_SECTIONS = {
    "business",
    "workflow",
    "authorization_tenancy",
    "data",
    "backend",
    "frontend",
    "dependencies_relationships",
    "quality",
    "reuse_adaptation",
}


class Validation:
    def __init__(self, root: Path) -> None:
        self.root = root.resolve()
        self.docs = self.root / "docs/09-reference-intelligence"
        self.errors: list[str] = []
        self.object_count = 0
        self.fixture_count = 0
        self.evidence_count = 0

    def error(self, message: str) -> None:
        self.errors.append(message)

    @staticmethod
    def load_yaml(path: Path):
        with path.open("r", encoding="utf-8") as handle:
            return yaml.safe_load(handle)

    def schema_validate(self, instance, schema, label: str) -> None:
        validator = Draft202012Validator(schema, format_checker=FormatChecker())
        for issue in sorted(validator.iter_errors(instance), key=lambda item: list(item.path)):
            location = ".".join(str(part) for part in issue.path) or "<root>"
            self.error(f"{label}: {location}: {issue.message}")

    def validate_all_yaml_parses(self) -> None:
        for path in sorted(self.docs.rglob("*.yaml")):
            try:
                self.load_yaml(path)
            except Exception as exc:  # noqa: BLE001 - validation should aggregate parser failures
                self.error(f"{path.relative_to(self.root)}: YAML parse failed: {exc}")

    def validate_indexes(self, index_schema, capability_schema) -> tuple[set[str], set[str]]:
        index_dir = self.docs / "knowledge-index"
        actual = {path.name for path in index_dir.glob("*.yaml")}
        if actual != INDEX_FILES:
            self.error(f"knowledge-index: missing={sorted(INDEX_FILES - actual)} extra={sorted(actual - INDEX_FILES)}")

        indexes = {}
        for name in sorted(INDEX_FILES):
            path = index_dir / name
            if not path.is_file():
                continue
            data = self.load_yaml(path)
            indexes[name] = data
            self.schema_validate(data, index_schema, str(path.relative_to(self.root)))

        capability_ids: set[str] = set()
        for record in indexes.get("capabilities.yaml", {}).get("records", []):
            self.schema_validate(record, capability_schema, f"capabilities:{record.get('capability_id', '<missing>')}")
            capability_id = record.get("capability_id")
            if capability_id in capability_ids:
                self.error(f"duplicate capability ID: {capability_id}")
            capability_ids.add(capability_id)

        object_ids: set[str] = set()
        for repository in indexes.get("knowledge-objects.yaml", {}).get("repositories", []):
            if repository.get("repository_id") == "SRC-SYNTHETIC-FIXTURE":
                self.error("synthetic fixture appears in canonical knowledge-object index")
            for record in repository.get("knowledge_objects", []):
                object_id = record.get("knowledge_object_id")
                if object_id in object_ids:
                    self.error(f"duplicate indexed Knowledge Object ID: {object_id}")
                object_ids.add(object_id)
                if record.get("capability_id") not in capability_ids:
                    self.error(f"{object_id}: unknown capability ID {record.get('capability_id')}")
                path = self.root / record.get("path", "")
                if not path.is_file():
                    self.error(f"{object_id}: indexed path does not exist: {record.get('path')}")

        for record in indexes.get("capabilities.yaml", {}).get("records", []):
            for implementation in record.get("repository_implementations", []):
                for object_id in implementation.get("knowledge_object_ids", []):
                    if object_id not in object_ids:
                        self.error(f"{record.get('capability_id')}: unknown implementation object {object_id}")
            for adaptation in record.get("adaptation_history", []):
                for object_id in adaptation.get("source_knowledge_object_ids", []):
                    if object_id not in object_ids:
                        self.error(f"{record.get('capability_id')}: adaptation references unknown object {object_id}")

        for alias in indexes.get("aliases.yaml", {}).get("aliases", []):
            for capability_id in alias.get("capability_ids", []):
                if capability_id not in capability_ids:
                    self.error(f"alias {alias.get('alias')}: unknown capability ID {capability_id}")

        for relationship in indexes.get("relationships.yaml", {}).get("relationships", []):
            for object_id in relationship.get("knowledge_object_ids", []):
                if object_id not in object_ids:
                    self.error(f"relationship {relationship.get('relationship_id')}: unknown object {object_id}")

        lifecycle = indexes.get("lifecycle.yaml", {})
        lifecycle_repository_ids = {record.get("repository_id") for record in lifecycle.get("repositories", [])}
        registry = (self.docs / "REGISTRY.md").read_text(encoding="utf-8")
        registry_repository_ids = {
            repository_id
            for repository_id in re.findall(
                r"^\| (SRC-[A-Z0-9-]+) \| .* \| Source repository \|",
                registry,
                re.MULTILINE,
            )
        }
        if lifecycle_repository_ids != registry_repository_ids:
            self.error(
                "lifecycle/registry repository mismatch: "
                f"lifecycle={sorted(lifecycle_repository_ids)} registry={sorted(registry_repository_ids)}"
            )

        catalog_by_id = {}
        for catalog_path in sorted((self.docs / "repositories").glob("*/FEATURE-CATALOG.yaml")):
            catalog = self.load_yaml(catalog_path)
            catalog_by_id[catalog.get("repository", {}).get("id")] = catalog
        indexed_repository_ids = {
            record.get("repository_id")
            for record in indexes.get("knowledge-objects.yaml", {}).get("repositories", [])
        }
        if indexed_repository_ids != set(catalog_by_id):
            self.error(
                "knowledge-object index/catalog repository mismatch: "
                f"index={sorted(indexed_repository_ids)} catalogs={sorted(catalog_by_id)}"
            )

        for repository in lifecycle.get("repositories", []):
            repository_id = repository.get("repository_id")
            total = repository.get("cataloged_feature_count", 0)
            understood = repository.get("understood_feature_count", 0)
            coverage = repository.get("understanding_coverage")
            if understood > total:
                self.error(f"{repository.get('repository_id')}: understood count exceeds catalog count")
            expected = None if total == 0 else understood / total
            if coverage != expected:
                self.error(f"{repository.get('repository_id')}: coverage {coverage!r} != {expected!r}")
            if repository.get("state") == "FULLY_UNDERSTOOD" and (total == 0 or understood != total):
                self.error(f"{repository_id}: invalid FULLY_UNDERSTOOD state")
            if repository_id in catalog_by_id:
                catalog_count = len(catalog_by_id[repository_id].get("features", []))
                if total != catalog_count:
                    self.error(f"{repository_id}: lifecycle catalog count {total} != {catalog_count}")
                if understood == 0 and repository.get("state") != "KNOWLEDGE_READY":
                    self.error(f"{repository_id}: zero understood features must initialize as KNOWLEDGE_READY")

        for capability in lifecycle.get("capabilities", []):
            object_id = capability.get("knowledge_object_id")
            if object_id is not None and object_id not in object_ids:
                self.error(f"{capability.get('capability_id')}: lifecycle references unknown object {object_id}")

        stale_ids = {record.get("knowledge_object_id") for record in indexes.get("stale.yaml", {}).get("records", [])}
        unknown_stale = stale_ids - object_ids
        if unknown_stale:
            self.error(f"stale index contains unknown objects: {sorted(unknown_stale)}")
        return object_ids, capability_ids

    def collect_claims(self, data) -> dict[str, dict]:
        claims: dict[str, dict] = {}
        for section_name in CLAIM_SECTIONS:
            section = data.get(section_name, {})
            for value in section.values():
                if not isinstance(value, list):
                    continue
                for claim in value:
                    if not isinstance(claim, dict) or "claim_id" not in claim:
                        continue
                    claim_id = claim["claim_id"]
                    if claim_id in claims:
                        self.error(f"{data['identity']['knowledge_object_id']}: duplicate claim ID {claim_id}")
                    claims[claim_id] = claim
        return claims

    def validate_object(self, path: Path, object_schema) -> str | None:
        data = self.load_yaml(path)
        label = str(path.relative_to(self.root))
        self.schema_validate(data, object_schema, label)
        if not isinstance(data, dict) or "identity" not in data:
            return None

        identity = data["identity"]
        object_id = identity.get("knowledge_object_id")
        fixture = identity.get("fixture") is True
        self.fixture_count += int(fixture)
        self.object_count += int(not fixture)

        actual = {item.name for item in path.parent.iterdir() if item.is_file()}
        if actual != REQUIRED_ARTIFACTS:
            self.error(f"{object_id}: artifact set missing={sorted(REQUIRED_ARTIFACTS - actual)} extra={sorted(actual - REQUIRED_ARTIFACTS)}")

        tracked = [record.get("artifact") for record in data.get("section_tracking", [])]
        expected_sections = REQUIRED_ARTIFACTS - {"KNOWLEDGE.yaml"}
        if len(tracked) != len(set(tracked)) or set(tracked) != expected_sections:
            self.error(f"{object_id}: section tracking does not match the 11 Markdown artifacts")

        claims = self.collect_claims(data)
        evidence_records = data.get("evidence", {}).get("records", [])
        self.evidence_count += len(evidence_records)
        evidence = {}
        for record in evidence_records:
            evidence_id = record.get("evidence_id")
            if evidence_id in evidence:
                self.error(f"{object_id}: duplicate evidence ID {evidence_id}")
            evidence[evidence_id] = record
            for claim_id in record.get("claim_ids", []):
                if claim_id not in claims:
                    self.error(f"{object_id}: evidence {evidence_id} references unknown claim {claim_id}")

        for claim_id, claim in claims.items():
            for evidence_id in claim.get("evidence_refs", []):
                if evidence_id not in evidence:
                    self.error(f"{object_id}: claim {claim_id} references unknown evidence {evidence_id}")
                elif claim_id not in evidence[evidence_id].get("claim_ids", []):
                    self.error(f"{object_id}: evidence {evidence_id} does not list claim {claim_id}")

        for record in data.get("relationships", []):
            for evidence_id in record.get("evidence_refs", []):
                if evidence_id not in evidence:
                    self.error(f"{object_id}: relationship {record.get('relationship_id')} references unknown evidence {evidence_id}")

        if fixture:
            for record in evidence_records:
                evidence_path = self.root / record.get("path", "")
                if not evidence_path.is_file():
                    self.error(f"{object_id}: fixture evidence path missing: {record.get('path')}")
            return object_id

        repository_slug = identity.get("repository_slug")
        catalog_path = self.docs / "repositories" / repository_slug / "FEATURE-CATALOG.yaml"
        if not catalog_path.is_file():
            self.error(f"{object_id}: authoritative catalog missing: {catalog_path.relative_to(self.root)}")
            return object_id

        catalog = self.load_yaml(catalog_path)
        repository = catalog.get("repository", {})
        if repository.get("id") != identity.get("repository_id"):
            self.error(f"{object_id}: repository ID does not match catalog")
        if repository.get("pinned_discovered_sha") != identity.get("pinned_sha"):
            self.error(f"{object_id}: pinned SHA does not match catalog")
        feature_ids = {feature.get("id") for feature in catalog.get("features", [])}
        missing_features = set(identity.get("related_feature_ids", [])) - feature_ids
        if missing_features:
            self.error(f"{object_id}: unknown related feature IDs: {sorted(missing_features)}")

        source = Path(repository.get("local_path", ""))
        if not source.is_dir():
            self.error(f"{object_id}: source repository is unavailable: {source}")
            return object_id
        for record in evidence_records:
            result = subprocess.run(
                ["git", "cat-file", "-t", f"{identity.get('pinned_sha')}:{record.get('path')}"],
                cwd=source,
                capture_output=True,
                text=True,
                check=False,
            )
            if result.returncode or result.stdout.strip() != "blob":
                self.error(f"{object_id}: evidence is not a blob at the pin: {record.get('path')}")
        return object_id

    @staticmethod
    def heading_slug(value: str) -> str:
        value = re.sub(r"<[^>]+>", "", value).strip().lower()
        value = re.sub(r"[^\w\- ]", "", value)
        return re.sub(r" +", "-", value)

    def markdown_anchors(self, path: Path) -> set[str]:
        counts: dict[str, int] = {}
        result: set[str] = set()
        for heading in re.findall(r"^#{1,6}\s+(.+?)\s*#*$", path.read_text(encoding="utf-8"), re.MULTILINE):
            base = self.heading_slug(heading)
            count = counts.get(base, 0)
            counts[base] = count + 1
            result.add(base if count == 0 else f"{base}-{count}")
        return result

    def validate_markdown_links(self) -> None:
        for path in sorted(self.docs.rglob("*.md")):
            text = path.read_text(encoding="utf-8")
            for raw in re.findall(r"(?<!!)\[[^\]]*\]\(([^)]+)\)", text):
                target = raw.strip().strip("<>")
                file_part, separator, fragment = target.partition("#")
                if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", file_part):
                    continue
                if file_part.startswith("/"):
                    # Discovery evidence may use absolute editor links with line
                    # suffixes. They are source evidence, not internal Markdown.
                    continue
                resolved = (path.parent / unquote(file_part)).resolve() if file_part else path
                if not resolved.exists():
                    self.error(f"{path.relative_to(self.root)}: broken link {raw}")
                    continue
                if separator and resolved.suffix.lower() == ".md":
                    if unquote(fragment).lower() not in self.markdown_anchors(resolved):
                        self.error(f"{path.relative_to(self.root)}: broken anchor {raw}")

    def run(self) -> int:
        contracts = self.docs / "contracts"
        object_schema = self.load_yaml(contracts / "REFERENCE-KNOWLEDGE-OBJECT.schema.yaml")
        capability_schema = self.load_yaml(contracts / "REFERENCE-CAPABILITY.schema.yaml")
        index_schema = self.load_yaml(contracts / "REFERENCE-KNOWLEDGE-INDEX.schema.yaml")

        self.validate_all_yaml_parses()
        for name, schema in (
            ("REFERENCE-KNOWLEDGE-OBJECT.schema.yaml", object_schema),
            ("REFERENCE-CAPABILITY.schema.yaml", capability_schema),
            ("REFERENCE-KNOWLEDGE-INDEX.schema.yaml", index_schema),
        ):
            try:
                Draft202012Validator.check_schema(schema)
            except Exception as exc:  # noqa: BLE001 - report all schema defects together
                self.error(f"{name}: invalid JSON Schema: {exc}")
        indexed_objects, _ = self.validate_indexes(index_schema, capability_schema)

        real_objects: set[str] = set()
        object_paths = sorted((self.docs / "repositories").glob("*/knowledge/*/KNOWLEDGE.yaml"))
        fixture_paths = sorted((self.docs / "fixtures").glob("*/knowledge/*/KNOWLEDGE.yaml"))
        for path in object_paths + fixture_paths:
            object_id = self.validate_object(path, object_schema)
            if object_id and path in object_paths:
                real_objects.add(object_id)
        if real_objects != indexed_objects:
            self.error(f"real object/index mismatch: objects={sorted(real_objects)} index={sorted(indexed_objects)}")

        self.validate_markdown_links()
        print(
            f"reference-intelligence: real_objects={self.object_count} "
            f"fixtures={self.fixture_count} evidence={self.evidence_count} errors={len(self.errors)}"
        )
        for error in self.errors:
            print(f"ERROR: {error}")
        return 1 if self.errors else 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path.cwd(), help="NexoraXS repository root")
    return parser.parse_args()


if __name__ == "__main__":
    sys.exit(Validation(parse_args().root).run())
