# NexoraXS Reference Intelligence Registry v0.1

## Purpose

This registry is the central index of external and historical repositories used as implementation references for NexoraXS.

Reference repositories are evidence sources only. They do not override NexoraXS architecture, governance, Constitution, ownership boundaries, security rules, tenancy rules, or product decisions.

## Evidence Status

Every recorded statement must use one of these statuses:

- **Verified** — directly supported by executable source, configuration, tests, runtime output, or repository metadata.
- **Inferred** — strongly indicated by evidence but not directly proven.
- **Unknown** — not yet established.
- **Contradictory** — available evidence conflicts.

## Registered Repositories

| Registry ID | Local Folder | Intended Reference Role | Discovery Priority | Current Status |
|---|---|---|---:|---|
| REF-ALIZIODEV | `/home/mustafa/projects/aliziodev` | Authentication foundation and Laravel/Next integration patterns | 1 | Registered — discovery pending |
| REF-KIRANISM | `/home/mustafa/projects/Kiranism-Shadcn` | UI system, dashboard composition, navigation and shadcn patterns | 2 | Registered — discovery pending |
| REF-PLANE | `/home/mustafa/projects/Plane` | Product workflows, feature decomposition and interaction patterns | 3 | Registered — discovery pending |
| REF-BOXYHQ | `/home/mustafa/projects/BoxyHQ` | SSO, identity and enterprise integration patterns | 4 | Registered — discovery pending |
| REF-STUDIO-ADMIN | `/home/mustafa/projects/studio-admin` | Administration interface patterns | 5 | Registered — discovery pending |
| REF-HR-NEXT | `/home/mustafa/projects/hr-next-nexoraxs` | Internal HR implementation reference | 6 | Registered — discovery pending |
| REF-NEXORAXS-V2 | `/home/mustafa/projects/nexoraxs-v2` | Historical NexoraXS implementation reference | 7 | Registered — discovery pending |

## Repository Record Requirements

Each repository record must eventually include:

1. Canonical repository name and source URL, when available.
2. Local path.
3. Pinned commit SHA or immutable revision.
4. Default branch and repository state.
5. License and license impact.
6. Intended reference role.
7. Explicit exclusions.
8. Discovery report.
9. Feature catalog.
10. Evidence manifest.
11. Known unknowns and contradictions.
12. Adoption history into NexoraXS specifications.

## Discovery Order

The initial discovery sequence is:

1. `aliziodev`
2. `Kiranism-Shadcn`
3. `Plane`
4. `BoxyHQ`
5. Remaining registered repositories

This order prioritizes the already selected authentication foundation, followed by UI patterns, broad product workflows, and enterprise identity.

## Required Output Structure

```text
docs/09-reference-intelligence/
├── REGISTRY.md
├── repositories/
│   ├── aliziodev/
│   ├── kiranism/
│   ├── plane/
│   ├── boxyhq/
│   ├── studio-admin/
│   ├── hr-next-nexoraxs/
│   └── nexoraxs-v2/
└── feature-index/
```

Empty directories are represented by tracked placeholder files until discovery artifacts are created.

## Adoption Boundary

A repository feature may enter Spec Kit only after:

- its repository revision is pinned;
- its evidence is recorded;
- its license impact is reviewed;
- adopted and excluded behavior are explicit;
- NexoraXS architecture remains authoritative;
- a stable reference feature ID is assigned.

The normal handoff is:

```text
Repository Discovery
→ Reference Feature ID
→ Selected Reference Evidence
→ /speckit.specify
→ /speckit.clarify
→ /speckit.plan
→ /speckit.tasks
→ /speckit.implement
```
