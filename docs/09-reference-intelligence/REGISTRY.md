# NexoraXS Local Repository Inventory v0.1

## Purpose

This inventory records the actual repositories currently present in the local workspace at `/home/mustafa/projects`.

`Nexoraxs-V3.1` is the active target repository being built. The other folders are local candidate source repositories that may be inspected by Repository Discovery. Their roles, capabilities, licenses, and suitability are not considered verified until discovery evidence is produced.

Nothing in this inventory makes an external or historical repository authoritative over NexoraXS architecture, governance, Constitution, ownership boundaries, security, tenancy, or product decisions.

## Evidence Status

Every discovered statement must use one of these statuses:

- **Verified** — directly supported by executable source, configuration, tests, runtime output, or repository metadata.
- **Inferred** — strongly indicated by evidence but not directly proven.
- **Unknown** — not yet established.
- **Contradictory** — available evidence conflicts.

## Local Workspace Inventory

| Inventory ID | Local Folder | Classification | Discovery State | Verified Role |
|---|---|---|---|---|
| TARGET-NEXORAXS-V3-1 | `/home/mustafa/projects/Nexoraxs-V3.1` | Active target repository | Active development | NexoraXS implementation target |
| SRC-ALIZIODEV | `/home/mustafa/projects/aliziodev` | Candidate source repository | Not inspected | Unknown |
| SRC-BOXYHQ | `/home/mustafa/projects/BoxyHQ` | Candidate source repository | Not inspected | Unknown |
| SRC-HR-NEXT-NEXORAXS | `/home/mustafa/projects/hr-next-nexoraxs` | Candidate source repository | Not inspected | Unknown |
| SRC-KIRANISM-SHADCN | `/home/mustafa/projects/Kiranism-Shadcn` | Candidate source repository | Not inspected | Unknown |
| SRC-NEXORAXS-V2 | `/home/mustafa/projects/nexoraxs-v2` | Candidate source repository | Not inspected | Unknown |
| SRC-PLANE | `/home/mustafa/projects/Plane` | Candidate source repository | Not inspected | Unknown |
| SRC-STUDIO-ADMIN | `/home/mustafa/projects/studio-admin` | Candidate source repository | Not inspected | Unknown |

## Classification Rules

### Active Target Repository

`Nexoraxs-V3.1` is where approved NexoraXS specifications and implementation changes are made.

### Candidate Source Repository

A candidate source repository is locally available for read-only inspection. Before discovery, do not assume that it is:

- an authentication foundation;
- a UI foundation;
- an architecture reference;
- a feature authority;
- safe to copy from;
- license-compatible;
- complete or production-ready.

Repository Discovery must determine its actual contents and useful capabilities from evidence.

## Repository Discovery Record Requirements

Each candidate source record must eventually include:

1. Canonical repository name and source URL, when available.
2. Local path.
3. Pinned commit SHA or immutable revision.
4. Current branch and working-tree state.
5. License and license impact.
6. Verified architecture and runtime entry points.
7. Verified capabilities and feature records.
8. Explicit unknowns, contradictions, and exclusions.
9. Discovery report.
10. Feature catalog.
11. Evidence manifest.
12. Any later adoption history into NexoraXS specifications.

## Discovery Selection

There is no permanent discovery priority encoded by this inventory.

For each discovery run, select one candidate source explicitly based on the current NexoraXS need. The selected repository must be inspected before any role or capability is assigned to it.

The first pilot repository can be chosen after the local branch is downloaded and the actual repositories are available to Codex or Claude for local inspection.

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

The repository directories are storage locations for future evidence-backed discovery artifacts. Their existence does not assign a verified role to the corresponding local source.

## Adoption Boundary

A discovered source feature may enter Spec Kit only after:

- the source repository revision is pinned;
- the feature and its source evidence are verified;
- license impact is reviewed;
- adopted and excluded behavior are explicit;
- NexoraXS architecture remains authoritative;
- a stable reference feature ID is assigned.

The normal handoff is:

```text
Local Candidate Source
→ Repository Discovery
→ Verified Capability / Reference Feature ID
→ Selected Reference Evidence
→ /speckit.specify
→ /speckit.clarify
→ /speckit.plan
→ /speckit.tasks
→ /speckit.implement in Nexoraxs-V3.1
```
