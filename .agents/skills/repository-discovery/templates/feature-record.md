# <FEATURE-ID> — <Feature Name>

## Record

- **Repository**: <name and code>
- **Revision**: `<full commit SHA>`
- **Category**: <category>
- **Discovery status**: Verified | Inferred | Unknown | Contradictory
- **Adoption classification**: behavior-reference | pattern-reference | component-candidate | concept-only | reject | unknown

## Purpose

<What user or business need this feature serves.>

## Verified Behavior

<Describe only behavior established by evidence. Separate inference and unknowns below.>

## Primary Journey

1. <Actor and starting state>
2. <Action>
3. <System response>
4. <Result>

## Implementation Surfaces

### User Experience

- Routes:
- Navigation:
- Screens:
- Components:
- Loading, empty, error, unauthorized, and recovery states:

### Runtime and Domain

- APIs/handlers:
- Services/use cases:
- Models/schemas:
- State transitions:
- Events/jobs/commands:
- Feature flags/configuration:
- Integrations:

### Security and Scope

- Authentication:
- Roles and permissions:
- Tenant or organization scope:
- Sensitive-data handling:

## Evidence

| Status | Claim | Evidence type | Path | Symbol/lines | Notes |
|---|---|---|---|---|---|
| Verified | <claim> | executable-source | `<path>` | `<symbol or lines>` | <notes> |

All evidence is pinned to revision `<full commit SHA>`.

## Tests and Runtime Proof

- Tests:
- Fixtures/seeds:
- Stories/examples:
- Local preview status:
- Local URL:
- Required services:
- Screenshot/video paths:

## Dependency and License Notes

- Direct dependencies:
- External services:
- License impact:
- Attribution requirements:

## Engineering Analysis

- Coupling:
- Complexity:
- Risks:
- Unknowns:
- Contradictions:

## NexoraXS Adoption Analysis

### Retain

<User-visible behavior or bounded pattern worth preserving.>

### Rewrite

<Reference implementation details that must be redesigned natively for NexoraXS.>

### Reject

<Foreign ownership, tenancy, lifecycle, security, architecture, or dependency assumptions that must not be imported.>

### Boundary Check

- Canonical organization:
- Ownership/write owner:
- Core Platform vs OS boundary:
- Cross-domain contracts:
- Authorization and tenant isolation:
- Intelligence ordering:
- Lifecycle separation:
- Localization/accessibility/Audit/observability:

## Recommended Next Step

<Deeper repository audit, comparison, rejection, or preparation for `/speckit.specify`.>