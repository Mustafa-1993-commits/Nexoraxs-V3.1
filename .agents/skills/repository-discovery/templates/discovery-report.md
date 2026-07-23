# Repository Discovery Report — <Repository Name>

## Discovery Summary

- **Repository code**: `<CODE>`
- **Canonical URL**: <URL>
- **Pinned revision**: `<full commit SHA>`
- **Branch/tag**: <branch/tag>
- **Discovery date**: <YYYY-MM-DD>
- **Requested scope**: Full repository | Bounded subsystem
- **Discovery status**: Complete | Partial | Blocked
- **License**: <identifier and evidence path>
- **Preview status**: Running | Partially running | Not run | Blocked

## Scope

### Inspected

- <area>

### Excluded or Blocked

- <area and reason>

## Repository Profile

- Product purpose:
- Repository status:
- Primary languages:
- Frameworks:
- Package managers/workspace tools:
- Deployable applications/services:
- Databases and storage:
- External services:

## Structural Map

| Area | Role | Entry points | Ownership/dependency notes |
|---|---|---|---|
| `<path>` | <role> | `<path or symbol>` | <notes> |

## Runtime Map

Document each major runtime chain:

```text
Entry point
  -> route/handler
  -> service/use case
  -> model or external dependency
  -> observable result
```

## Feature Catalog Summary

| Feature ID | Feature | Category | Status | Adoption classification | Primary evidence |
|---|---|---|---|---|---|
| `<CODE-CATEGORY-001>` | <name> | <category> | Verified | behavior-reference | `<path>` |

Detailed records live under `features/`.

## Cross-Cutting Surfaces

### Authentication, Authorization, and Tenancy

<Verified model, evidence, and unknowns.>

### Persistence and State

<Models, schemas, migrations, stores, state machines, and ownership.>

### APIs, Events, Jobs, and Integrations

<Runtime communication surfaces.>

### Configuration and Feature Flags

<How behavior is enabled, configured, or environment-dependent.>

### Tests and Quality Evidence

<Test layout, representative coverage, and limitations.>

### UX and Preview Evidence

<Navigation, local URLs, seed requirements, screenshots, and blocked flows.>

## Dependency and License Review

- High-impact dependencies:
- Copyleft or attribution considerations:
- Dependencies unsuitable for direct reuse:
- Unknown license areas:

## NexoraXS Compatibility Summary

### Potentially Useful

- <feature or pattern>

### Requires Native Rewrite

- <feature or pattern and reason>

### Rejected

- <foreign architecture, ownership, security, tenancy, lifecycle, or license assumption>

## Coverage

| Category | Status | Evidence or limitation |
|---|---|---|
| Structure | Complete | <evidence> |
| Runtime entry points | <status> | <evidence> |
| Navigation | <status> | <evidence> |
| Routes and APIs | <status> | <evidence> |
| Persistence and state | <status> | <evidence> |
| Authentication and permissions | <status> | <evidence> |
| Background processing | <status> | <evidence> |
| Integrations | <status> | <evidence> |
| Tests | <status> | <evidence> |
| Configuration and flags | <status> | <evidence> |
| License and dependencies | <status> | <evidence> |
| Preview | <status> | <evidence> |

## Counts

- Verified features:
- Inferred features:
- Unknown features:
- Contradictory features:
- Rejected adoption candidates:

## Risks and Unknowns

- <risk or unresolved question>

## Recommended Next Feature Audits

1. `<FEATURE-ID>` — <reason>
2. `<FEATURE-ID>` — <reason>

## Next Step

<Exact next action. Do not start implementation from this report alone.>