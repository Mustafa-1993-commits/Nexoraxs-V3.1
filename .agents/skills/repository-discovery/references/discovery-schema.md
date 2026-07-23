# Repository Discovery Schema v0.1

This schema defines the minimum fields required for evidence-backed repository discovery artifacts.

## Repository Profile

```yaml
schema_version: "0.1"
repository:
  code: PLANE
  name: Plane
  canonical_url: https://github.com/example/repository
  upstream_owner: example
  local_path: /absolute/or/workspace/path
  branch: main
  tag: null
  commit_sha: full-commit-sha
  discovered_at: YYYY-MM-DD
  discovery_scope: full-repository
  status: active
license:
  identifier: AGPL-3.0-only
  evidence_path: LICENSE
runtime:
  preview_status: not-run
  local_urls: []
  limitations: []
technology:
  languages: []
  frameworks: []
  package_managers: []
  workspace_tools: []
```

## Feature Record

Every file under `features/` must contain these fields.

```yaml
schema_version: "0.1"
feature:
  id: PLANE-ONBOARDING-001
  name: Workspace onboarding
  category: onboarding
  status: verified
  adoption_classification: behavior-reference
  purpose: Short user or business purpose.
source_revision:
  repository_code: PLANE
  commit_sha: full-commit-sha
behavior:
  summary: Verified behavior summary.
  primary_actors: []
  primary_journey: []
  state_transitions: []
surfaces:
  routes: []
  navigation: []
  screens: []
  components: []
  apis: []
  services: []
  events: []
  jobs: []
  commands: []
  models: []
  migrations: []
  permissions: []
  feature_flags: []
  configuration: []
  integrations: []
verification:
  source_evidence: []
  tests: []
  fixtures: []
  documentation_evidence: []
  runtime_evidence: []
preview:
  status: not-run
  url: null
  prerequisites: []
  seed_or_fixture: null
  screenshot_paths: []
  video_paths: []
analysis:
  dependencies: []
  coupling: unknown
  complexity: unknown
  risks: []
  unknowns: []
  contradictions: []
license:
  reuse_notes: []
  attribution_required: unknown
nexoraxs:
  retained_behavior: []
  rewritten_behavior: []
  rejected_behavior: []
  boundary_conflicts: []
  recommended_next_step: repository-audit
```

## Evidence Entry

Use this structure for important claims:

```yaml
- status: verified
  claim: The application exposes a workspace creation route.
  evidence_type: executable-source
  path: apps/web/app/create-workspace/page.tsx
  symbol_or_section: CreateWorkspacePage
  lines: "12-84"
  revision: full-commit-sha
  notes: null
```

Allowed `status` values:

- `verified`
- `inferred`
- `unknown`
- `contradictory`

Allowed `evidence_type` values:

- `executable-source`
- `configuration`
- `migration-or-schema`
- `test`
- `fixture-or-seed`
- `runtime-observation`
- `documentation-only`
- `release-note`

## Discovery Manifest

```yaml
schema_version: "0.1"
repository_code: PLANE
revision: full-commit-sha
discovery_status: partial
scope:
  requested: full-repository
  inspected: []
  excluded: []
counts:
  verified_features: 0
  inferred_features: 0
  unknown_features: 0
  rejected_features: 0
coverage:
  structure: pending
  runtime_entry_points: pending
  navigation: pending
  routes_and_apis: pending
  persistence_and_state: pending
  authentication_and_permissions: pending
  background_processing: pending
  integrations: pending
  tests: pending
  configuration_and_flags: pending
  license_and_dependencies: pending
  preview: pending
limitations: []
artifacts:
  repository_profile: repository-profile.md
  structural_map: structural-map.md
  runtime_map: runtime-map.md
  feature_catalog: feature-catalog.md
  dependency_and_license_review: dependency-and-license-review.md
  coverage_report: coverage-report.md
  feature_directory: features/
```

Allowed coverage values:

- `complete`
- `partial`
- `not-applicable`
- `blocked`
- `pending`

## Feature ID Rules

Format:

```text
<REPOSITORY-CODE>-<CATEGORY>-<NNN>
```

Rules:

1. Repository code uses stable uppercase ASCII letters and digits.
2. Category uses stable uppercase singular or collective terminology.
3. Sequence is three digits and never reused.
4. Renaming a feature does not change its ID.
5. Splitting a feature creates new IDs and records the original ID as provenance.
6. Merging features retains redirects from retired IDs.
7. IDs identify encyclopedia records, not source classes, routes, or issues.