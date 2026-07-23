# NexoraXS Local Repository Inventory v0.1

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

## Local Workspace Inventory

| Inventory ID | Local Folder | Classification | Discovery State |
|---|---|---|---|
| TARGET-NEXORAXS-V3-1 | `/home/mustafa/projects/Nexoraxs-V3.1` | Active target repository | Active development |
| SRC-ALIZIODEV | `/home/mustafa/projects/aliziodev` | Source repository | Full discovery pending |
| SRC-BOXYHQ | `/home/mustafa/projects/BoxyHQ` | Source repository | Full discovery pending |
| SRC-HR-NEXT-NEXORAXS | `/home/mustafa/projects/hr-next-nexoraxs` | Source repository | Full discovery pending |
| SRC-KIRANISM-SHADCN | `/home/mustafa/projects/Kiranism-Shadcn` | Source repository | Full discovery pending |
| SRC-NEXORAXS-V2 | `/home/mustafa/projects/nexoraxs-v2` | Source repository | Full discovery pending |
| SRC-PLANE | `/home/mustafa/projects/Plane` | Source repository | Full discovery pending |
| SRC-STUDIO-ADMIN | `/home/mustafa/projects/studio-admin` | Source repository | Full discovery pending |

## Classification Rules

### Active Target Repository

`Nexoraxs-V3.1` is where approved NexoraXS specifications and implementation changes are made.

### Source Repository

A source repository is locally available for read-only inspection and must be understood as a complete system before any part of it is selected as a reference.

Do not pre-classify a source repository as being for authentication, UI, SSO, administration, workflows, architecture, or any other specialty.

Do not limit discovery to the feature that first made the repository interesting.

Repository Discovery must inspect the repository as a whole, including its architecture, applications, packages, modules, runtime entry points, routes, APIs, data model, authentication, authorization, tenancy, state, UI system, navigation, workflows, background processing, integrations, configuration, build system, deployment, tests, dependencies, assets, conventions, strengths, weaknesses, unknowns, contradictions, and license.

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

A repository discovery is not complete merely because one useful feature has been found. The repository must be understood and documented as a whole.

## Discovery Execution

There is no permanent specialty or feature role encoded for any source repository.

Discovery may be executed one repository at a time for practical reasons, but each run targets full-repository understanding rather than a narrow feature extraction.

The order of execution is operational only and does not imply that one repository is more authoritative or belongs to a specific NexoraXS concern.

## Required Output Structure

```text
docs/09-reference-intelligence/
├── REGISTRY.md
├── repositories/
│   ├── aliziodev/
│   ├── boxyhq/
│   ├── hr-next-nexoraxs/
│   ├── kiranism/
│   ├── nexoraxs-v2/
│   ├── plane/
│   └── studio-admin/
└── feature-index/
```

Each repository directory stores its complete, evidence-backed knowledge model. The directory must not be treated as a feature-specific workspace.

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
→ Cross-Repository Search and Selection
→ Selected Reference Evidence
→ /speckit.specify
→ /speckit.clarify
→ /speckit.plan
→ /speckit.tasks
→ /speckit.implement in Nexoraxs-V3.1
```
