---
name: repository-deep-understanding
description: Build or refresh a source-faithful Reference Knowledge Object for one capability in an already discovered repository. Use when a user asks how a cataloged feature works end to end, needs implementation knowledge beyond the feature catalog, or requests UNDERSTAND mode; inspect pinned source narrowly, persist evidence-backed knowledge, and never implement or adapt NexoraXS.
---

# Repository Deep Understanding

## Purpose

Explain one requested capability end to end from an authoritative discovery catalog and narrowly inspected pinned source. Create or refresh one Reference Knowledge Object; do not perform repository-wide discovery, comparison, adaptation, or implementation.

## Read Before Acting

Read:

1. `docs/09-reference-intelligence/REFERENCE-KNOWLEDGE-ARCHITECTURE.md`;
2. `docs/09-reference-intelligence/UNDERSTAND-COMPARE-ADAPT.md`;
3. `docs/09-reference-intelligence/REFERENCE-LIFECYCLE.md`;
4. `docs/09-reference-intelligence/contracts/REFERENCE-KNOWLEDGE-OBJECT-CONTRACT.md`;
5. `docs/09-reference-intelligence/contracts/REFERENCE-KNOWLEDGE-GRAPH-CONTRACT.md`;
6. the selected repository’s profile, catalogs, evidence manifest, dependency map, license review, coverage report, unknowns, and change detection.

Use “Reference Knowledge Object” for this artifact. Never redefine the canonical NexoraXS Knowledge Engine object.

## Preconditions

Require:

- a registered repository with an authoritative machine feature catalog;
- a pinned SHA and local source path;
- a stable feature ID, unambiguous capability, or semantic request that can be resolved from catalog evidence;
- discovery evidence sufficient to bound the source inspection.

If discovery is missing, stop and request `full-repository-discovery`. If discovery is stale in an affected area, require delta discovery. Never opportunistically scan an undiscovered repository.

## Resolve the Capability

1. Resolve repository ID and repository slug from `REGISTRY.md`.
2. Validate the catalog repository ID, pinned SHA, discovery state, and license record.
3. Match exact feature IDs first, then canonical names and aliases.
4. Consult `knowledge-index/aliases.yaml` for existing canonical capability aliases.
5. Return candidate matches and stop before source inspection when resolution is ambiguous.
6. Build the related feature closure from:
   - directly matched feature records;
   - catalog `dependencies.internal_features`;
   - reverse dependents in the catalog;
   - dependency-map edges;
   - routes, services, models, jobs, events, UI state, and tests explicitly linked by those records.
7. Record why every indirectly related feature ID entered the closure. Do not expand into unrelated repository areas.

## Reuse or Refresh

Check `knowledge-index/knowledge-objects.yaml` before opening source.

For an existing object:

1. validate object schema and required files;
2. validate repository ID and pinned SHA against the catalog;
3. validate related feature IDs and evidence paths;
4. inspect repository `CHANGE-DETECTION.md`;
5. compare section evidence paths and fingerprints;
6. reuse the object when current;
7. refresh only affected sections when staleness is isolated;
8. refresh the complete object when impact cannot be isolated;
9. use `BLOCKED` when required evidence is unavailable or contradictory beyond a defensible boundary.

Never present stale content as current.

## Inspect Source Narrowly

When no current object satisfies the request:

1. set the capability lifecycle to `ANALYSIS_REQUIRED`, then `UNDERSTANDING_IN_PROGRESS`;
2. snapshot the source repository SHA and working-tree status;
3. open catalog evidence first;
4. read committed files from the pinned Git object whenever possible;
5. follow only required cross-layer dependencies;
6. inspect applicable routes, handlers, services, policies, models, migrations, jobs, events, listeners, integrations, frontend routes/components/state, tests, and configuration;
7. recheck the source snapshot after analysis.

Treat the source as read-only. Do not run commands that generate source caches, dependencies, builds, databases, or other mutations unless the user separately authorizes a safe read-only validation plan.

## Build the Object

Persist the exact 12-file structure under:

`docs/09-reference-intelligence/repositories/<repository-slug>/knowledge/<capability-slug>/`

Cover every applicable field in the contract:

- identity and staleness;
- business purpose, actors, journeys, rules, invariants, defaults, configuration, limitations;
- workflow entry points, actions, states, transitions, guards, failures, sequence;
- authorization, tenancy, membership, ownership, and public/private boundaries;
- data, persistence, cache, deletion, retention, and object storage;
- backend routes, services, policies, events, jobs, notifications, webhooks, realtime;
- frontend routes, components, forms, state, interactions, UI states, accessibility, localization;
- dependencies, integrations, extension seams, and flags;
- tests, observability, security, gaps, contradictions, and unknowns;
- analysis-only reuse, coupling, risk, license, prohibited reuse, and independent reimplementation notes;
- exact evidence and confidence for every major claim.

Use only `Verified`, `Inferred`, `Unknown`, and `Contradictory`. Static code does not prove successful runtime behavior. Quote no source code.

## Update Indexes Transactionally

After the object validates:

1. update `knowledge-objects.yaml`;
2. add or update the canonical capability record;
3. update aliases;
4. upsert typed relationships;
5. recalculate lifecycle counts and coverage;
6. update the stale index;
7. validate all cross-index references.

Do not leave partial index changes when validation fails. Synthetic fixtures never enter canonical indexes.

## Validate

Run:

```bash
python3 .codex/skills/repository-deep-understanding/scripts/validate_reference_intelligence.py --root .
```

Also run `git diff --check` and the applicable repository/source no-mutation checks.

## Output

Return:

- mode `UNDERSTAND`;
- repository, capability, related feature IDs, and pinned SHA;
- object ID, path, lifecycle, and staleness;
- source-faithful findings by layer;
- evidence status and confidence;
- unknowns, contradictions, limitations, and license constraints;
- validation results.

Do not recommend, compare, adapt, create Spec Kit artifacts, or implement NexoraXS.
