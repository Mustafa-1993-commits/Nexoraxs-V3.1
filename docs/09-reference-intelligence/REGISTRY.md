# NexoraXS Local Repository Inventory v0.2

## Purpose

This inventory records the actual repositories currently present in the local workspace at `/home/mustafa/projects`.

`Nexoraxs-V3.1` is the active target repository being built. Every other listed folder is a local source repository scheduled for full, evidence-backed repository discovery. No source repository is assigned a specialty, preferred use, or implementation role before that full discovery is completed.

Nothing in this inventory makes any source repository authoritative over NexoraXS architecture, governance, Constitution, ownership boundaries, security, tenancy, or product decisions.

## Evidence Status

Every discovered statement must use one of these statuses:

- **Verified** — directly supported by executable source, configuration, tests, runtime output, or repository metadata.
- **Inferred** — strongly indicated by evidence but not directly proven.
- **Unknown** — not yet established.
- **Contradictory** — available evidence conflicts.

## Discovery Lifecycle

Each registered source repository uses one lifecycle state:

- **Not Started** — registered but not yet inspected.
- **Inventory** — identity, path, revision, branch, working-tree state, and license presence are recorded.
- **Discovery In Progress** — repository-wide inspection is underway.
- **Partial** — useful evidence exists, but required repository areas or feature classes remain uncovered.
- **Coverage Review** — required artifacts exist and are being checked against the completion contract.
- **Complete** — all completion criteria are satisfied at the pinned revision.
- **Stale** — the repository revision changed after discovery or evidence is no longer current.

A repository may enter **Complete** only after the coverage report passes. A repository must become **Stale** when its current revision differs from the last discovered revision unless delta discovery proves that no cataloged knowledge is affected.

## Local Workspace Inventory

| Inventory ID | Local Folder | Classification | Discovery State |
|---|---|---|---|
| TARGET-NEXORAXS-V3-1 | `/home/mustafa/projects/Nexoraxs-V3.1` | Active target repository | Active development |
| SRC-ALIZIODEV-LARAVEL-NEXT-STARTER | `/home/mustafa/projects/aliziodev/laravel-next-starter-kit` | Source repository | Complete |
| SRC-BOXYHQ | `/home/mustafa/projects/BoxyHQ` | Source repository | Complete |
| SRC-HR-NEXT-NEXORAXS | `/home/mustafa/projects/hr-next-nexoraxs` | Source repository | Not Started |
| SRC-KIRANISM-SHADCN | `/home/mustafa/projects/Kiranism-Shadcn` | Source repository | Not Started |
| SRC-NEXORAXS-V2 | `/home/mustafa/projects/nexoraxs-v2` | Source repository | Not Started |
| SRC-PLANE | `/home/mustafa/projects/Plane` | Source repository | Complete |
| SRC-STUDIO-ADMIN | `/home/mustafa/projects/studio-admin` | Source repository | Not Started |

`/home/mustafa/projects/aliziodev` is a container directory, not a source repository. Every repository placed beneath it must be registered separately.

## Classification Rules

### Active Target Repository

`Nexoraxs-V3.1` is where approved NexoraXS specifications and implementation changes are made.

### Source Repository

A source repository is locally available for read-only inspection and must be understood as a complete system before any part of it is selected as a reference.

Do not pre-classify a source repository as being for authentication, UI, SSO, administration, workflows, architecture, or any other specialty.

Do not limit discovery to the feature that first made the repository interesting.

Repository Discovery must inspect the repository as a whole, including its architecture, applications, packages, modules, runtime entry points, routes, APIs, data model, authentication, authorization, tenancy, state, UI system, navigation, workflows, background processing, integrations, configuration, build system, deployment, tests, dependencies, assets, conventions, strengths, weaknesses, unknowns, contradictions, and license.

## Complete Feature Catalog Semantics

A complete feature catalog means every evidence-backed feature or reusable capability discovered in the repository, not only major, visible, interesting, or currently desired features.

The catalog must include, when present:

- user-facing product features;
- UI and interaction features;
- administrative features;
- authentication and security capabilities;
- authorization and permission behavior;
- organization, workspace, tenant, and membership behavior;
- data, storage, state, caching, and persistence capabilities;
- search, filtering, sorting, pagination, saved views, and bulk operations;
- reporting, analytics, dashboards, charts, and exports;
- notifications, communication, comments, mentions, and activity history;
- jobs, queues, events, scheduled operations, and realtime behavior;
- integrations, webhooks, APIs, import, and export;
- configuration, feature flags, personalization, themes, accessibility, and localization;
- developer tooling, testing, build, deployment, and operations;
- reusable internal platform capabilities.

Discovery must not stop after identifying one useful feature and must not preselect, rank, or recommend features for NexoraXS.

## Full Repository Discovery Requirements

Each source repository must eventually have a complete discovery record containing:

1. Canonical repository name and source URL, when available.
2. Local path.
3. Pinned commit SHA or immutable revision.
4. Current branch and working-tree state.
5. License and license impact.
6. Repository structure and application/package map.
7. Architecture and runtime entry points.
8. Routes, APIs, commands, jobs, events, and integrations.
9. Data model, storage, state, authentication, authorization, and tenancy behavior.
10. UI system, navigation, workflows, screens, and interaction patterns.
11. Build, deployment, configuration, dependencies, assets, and tests.
12. Complete feature catalog with stable IDs and source evidence.
13. Cross-feature and cross-module dependency map.
14. Strengths, weaknesses, unknowns, contradictions, and exclusions.
15. Evidence manifest and coverage statement.
16. Any later adoption history into NexoraXS specifications.
17. Change-detection data for initial and delta discovery.

Reading only README files, package manifests, or directory trees is never sufficient for **Complete** status.

## Required Artifact Set

Every repository workspace supports this normalized artifact set:

```text
REPOSITORY-PROFILE.md
ARCHITECTURE-MAP.md
APPLICATION-MAP.md
PACKAGE-MAP.md
ROUTE-SCREEN-MAP.md
API-MAP.md
DATA-MODEL.md
AUTH-SECURITY-MAP.md
UI-SYSTEM.md
WORKFLOW-MAP.md
FEATURE-CATALOG.md
FEATURE-CATALOG.yaml
DEPENDENCY-MAP.md
EVIDENCE-MANIFEST.md
LICENSE-REVIEW.md
COVERAGE-REPORT.md
UNKNOWNS.md
CHANGE-DETECTION.md
```

## Completion Criteria

A source repository may be marked **Complete** only when all of the following are true:

- repository identity and pinned revision are recorded;
- branch and working-tree state are recorded;
- structure, applications, and packages are inspected;
- runtime entry points are mapped;
- routes and screens are mapped;
- APIs, commands, jobs, events, and integrations are inspected;
- data, storage, auth, authorization, tenancy, and state are inspected;
- UI, navigation, and workflows are inspected;
- build, deployment, configuration, dependencies, assets, and tests are inspected;
- the complete feature catalog is generated;
- every verified feature links to source evidence;
- cross-feature dependencies are mapped;
- license impact is reviewed;
- unknowns and contradictions are explicit;
- the coverage report passes the completion threshold.

## Change Detection

Each discovery must record:

- pinned discovered SHA;
- current SHA;
- discovery timestamp;
- changed files since the discovered revision;
- potentially affected features;
- added, removed, and modified feature records;
- whether the discovery is stale.

Delta discovery may update only affected knowledge, but an outdated catalog must never be presented as current.

## Discovery Execution

There is no permanent specialty or feature role encoded for any source repository.

Discovery may be executed one repository at a time for practical reasons, but each run targets full-repository understanding rather than a narrow feature extraction.

The order of execution is operational only and does not imply that one repository is more authoritative or belongs to a specific NexoraXS concern.

## Required Output Structure

```text
docs/09-reference-intelligence/
├── REGISTRY.md
├── contracts/
├── repositories/
│   ├── aliziodev-laravel-next-starter/
│   ├── boxyhq/
│   ├── hr-next-nexoraxs/
│   ├── kiranism/
│   ├── nexoraxs-v2/
│   ├── plane/
│   └── studio-admin/
└── feature-index/
```

Each repository directory stores its complete, evidence-backed knowledge model. The directory must not be treated as a feature-specific workspace.

## On-Demand Reference Knowledge

Repository Discovery remains the complete inventory layer. Deeper capability analysis is lazy and follows the additive [On-Demand Reference Knowledge Architecture](REFERENCE-KNOWLEDGE-ARCHITECTURE.md).

Understanding state and coverage are tracked separately in the [Reference Knowledge Lifecycle](REFERENCE-LIFECYCLE.md) and [knowledge indexes](knowledge-index/README.md). Discovery `Complete` does not mean `FULLY_UNDERSTOOD`, and no Reference Knowledge Object is generated merely because a feature is cataloged.

## Adoption Boundary

Only after a repository has been fully discovered may individual capabilities or features be selected as implementation references.

A discovered feature may enter Spec Kit only after:

- the source repository revision is pinned;
- the repository-level discovery is complete enough to understand the feature in context;
- the feature and its source evidence are verified;
- dependencies and surrounding behavior are understood;
- license impact is reviewed;
- adopted and excluded behavior are explicit;
- NexoraXS architecture remains authoritative;
- a stable reference feature ID is assigned.

The normal handoff is:

```text
Local Source Repository
→ Full Repository Discovery
→ Repository Knowledge Model
→ Complete Feature Catalog
→ Cross-Repository Search and User Selection
→ Reference Feature Retrieval
→ Deep Understanding on demand when required
→ Selected Reference Evidence
→ /speckit.specify
→ /speckit.clarify
→ /speckit.plan
→ /speckit.tasks
→ /speckit.implement in Nexoraxs-V3.1
```
