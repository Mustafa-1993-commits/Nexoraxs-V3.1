---
name: reference-feature-retrieval
description: Retrieve an already discovered feature from a user-selected source repository, validate its evidence and revision status, and prepare a reference package for Spec Kit without implementing it.
---

# Reference Feature Retrieval

## Purpose

Retrieve an already discovered feature from a known source repository after the user explicitly selects it.

Example selection:

> Use the Theme System from Plane.

This skill prepares verified reference evidence for a later Spec Kit handoff. It does not perform implementation.

## Inputs

- Registered source repository ID or name.
- Stable feature ID or unambiguous feature name.
- Optional target NexoraXS concern for context.

## Preconditions

1. The repository has an existing discovery workspace.
2. The feature exists in `FEATURE-CATALOG.md` and `FEATURE-CATALOG.yaml`.
3. The feature record has source evidence.
4. The pinned discovered revision and stale status are known.
5. The user selected the repository and feature. Do not silently substitute another source.

## Required Behavior

1. Resolve the exact repository and stable feature ID.
2. Load the repository profile, feature record, evidence manifest, dependency map, license review, coverage report, unknowns, and change-detection record.
3. Validate that the local source revision still matches the pinned discovered revision.
4. Report whether the knowledge is current, partial, contradictory, or stale.
5. Retrieve linked source files, symbols, routes, screens, components, hooks, state, services, APIs, backend handlers, models, migrations, jobs, events, integrations, tests, configuration, permissions, tenancy behavior, and dependencies.
6. Identify missing evidence, unresolved dependencies, and license constraints.
7. Produce a Selected Reference Evidence package suitable for `/speckit.specify`.
8. Preserve explicit adopted and excluded behavior.

## Prohibited Behavior

- Do not implement the feature.
- Do not edit the source repository.
- Do not copy source code automatically.
- Do not silently choose a different repository or feature.
- Do not bypass NexoraXS architecture or governance.
- Do not hide license, security, tenancy, or dependency impact.
- Do not present stale knowledge as current.
- Do not infer that visual similarity authorizes copying.

## Required Output

Produce a concise selected-reference record containing:

- selected repository ID and name;
- stable feature ID and canonical name;
- pinned discovered SHA and current SHA;
- current/stale status;
- feature purpose and behavior;
- user-visible entry points;
- source evidence paths and symbols;
- frontend and backend implementation map;
- data, state, permission, tenancy, and workflow behavior;
- internal and external dependencies;
- tests and validation evidence;
- license impact;
- unknowns and contradictions;
- explicit adopted behavior;
- explicit excluded behavior;
- NexoraXS compatibility questions;
- readiness for Spec Kit handoff.

## Stale Knowledge Handling

When the current SHA differs from the pinned discovered SHA:

1. Do not continue as if the catalog is current.
2. Read `CHANGE-DETECTION.md`.
3. Identify whether changed files may affect the selected feature.
4. Require delta discovery when impact is possible or unknown.
5. Allow retrieval only with a clear stale warning when evidence proves the changes are unrelated.

## Spec Kit Boundary

The normal handoff is:

```text
User selects repository feature
→ Reference Feature Retrieval
→ Selected Reference Evidence
→ /speckit.specify
→ /speckit.clarify
→ /speckit.plan
→ /speckit.tasks
→ /speckit.implement in Nexoraxs-V3.1
```

This skill ends before `/speckit.specify` and does not create runtime code.

## Authority Boundary

The source implementation is reference evidence, not NexoraXS authority. `Nexoraxs-V3.1` remains authoritative for governance, Constitution, architecture, domain ownership, tenancy, security, product behavior, and implementation decisions.
