# Component Governance

## 1. Purpose

This document governs ownership, creation, composition, reuse, evolution, and quality of NexoraXS UI components. It does not authorize code changes or require immediate consolidation of existing components.

The frontend audit found a viable but boundary-unstable foundation: app boundaries are useful, current shells and routes must be protected, shared UI usage is incomplete, and some app-local duplication exists. Governance therefore favors incremental adoption and characterization over forced rewriting.

## 2. Ownership Model

| Location/owner | Allowed responsibility | Forbidden responsibility |
|---|---|---|
| `packages/ui` | Presentation primitives, shared accessible components, token-bound variants, layout primitives | Business rules, domain data, OS decisions, API calls, tenant context ownership |
| Core Platform app | Core-owned compositions and product surfaces | OS operational components or business decisions |
| An OS app | OS-owned workflow compositions and domain presentation | Another OS's workflow or canonical decisions |
| Marketplace surface | Marketplace-specific compositions within its Core bounded context | Pretending Marketplace is a separate OS or owning external canonical definitions contrary to freeze |
| `packages/types` | Shared TypeScript types/contracts only | Runtime behavior or business policy |
| `packages/shared` | Context-neutral utilities/constants only | Ownerless business logic or UI components |
| `packages/auth` | Shared authentication/session helpers only | Authorization policy ownership or domain workflow |
| `packages/sdk` | API/client/fetch abstraction and transport-safe mapping | UI rendering or canonical business decisions |

A component's owner is determined by responsibility, not by the number of apps that could import it.

## 3. Component Classes

### 3.1 Primitive

Low-level, accessible building blocks such as Button, Input, Checkbox, Dialog, Tabs, Badge, and Tooltip. Primitives belong in `packages/ui` when reused and proven stable.

### 3.2 Pattern component

A reusable presentation composition such as PageHeader, EmptyState, DataTable shell, FormField, or StatusSummary. It may live in `packages/ui` only when its semantics remain domain-neutral.

### 3.3 Domain component

A composition that knows an owner-specific concept or workflow, such as stock status, entitlement summary, or order actions. It remains in the owning app/domain even when visually similar to another component.

### 3.4 Feature component

A screen- or flow-specific composition. It stays close to the feature until repeated use and stable semantics justify extraction.

### 3.5 Shell component

Navigation, context, and layout components may share primitives while remaining owner-specific compositions. Similar Core and Commerce shells are not sufficient evidence for immediate consolidation.

## 4. Shared Component Admission Test

A component may enter `packages/ui` only when all are true:

- at least two valid consumers share the same interaction semantics, not only appearance;
- it accepts presentation data and callbacks rather than domain stores or services;
- it has no knowledge of OS, route, permission string, canonical model, or business rule;
- it works in Arabic/RTL and English/LTR, light/dark, keyboard, screen reader, zoom, and supported viewports;
- variants are bounded and named by visual/interaction intent, not by product names;
- its dependency and bundle impact are understood;
- documentation and tests define the contract;
- extraction has a compatible migration and rollback plan.

If these conditions are not met, keep the component app-local.

## 5. OS-Specific Components

OS-specific components may:

- encode owner-approved domain terminology and presentation;
- compose shared primitives into domain workflows;
- consume OS-owned clients, hooks, projections, and state;
- expose density and interaction suitable for the OS task.

They must not:

- import code from another app;
- write another owner's state;
- move business rules into `packages/ui` to enable reuse;
- create a visually shared component that masks different semantics;
- make the OS dependent on another OS's component library.

## 6. Naming

- Name primitives by conventional control role: `Button`, `Dialog`, `DataTable`.
- Name compositions by user-visible responsibility: `ContextSwitcher`, `ReadinessSummary`, `AssetCompatibilityPanel`.
- Avoid storage or legacy names in user-facing component copy.
- Keep canonical model names in contracts where architecture requires them; do not infer a rename from the UI label.
- Do not use product prefixes in shared primitive names merely to create stylistic forks.
- Mark deprecated names explicitly and do not reintroduce `shops-app`, `restaurants-app`, or other deprecated product labels in new code.

## 7. Composition

- Prefer small, semantic primitives composed at the owner boundary.
- Use slots/children for structure and explicit props for meaningful states.
- Avoid boolean-prop explosions; use a bounded variant model.
- Keep data acquisition, authorization decisions, business validation, and mutation outside presentation-only components.
- Pass resolved permission/state to UI; do not teach shared UI how to decide it.
- Maintain server-component boundaries by adding client behavior only where interaction requires it.

## 8. Variants

Variants describe stable intent such as:

- visual emphasis: primary, secondary, quiet, danger;
- size/density: compact, standard, comfortable;
- state: informational, success, warning, danger, neutral;
- layout: inline, stacked, responsive.

Do not create variants named after a Business Preset, OS, customer, or single screen in `packages/ui`. A variant that changes behavior, accessibility, or business semantics is a separate component or domain composition—not a styling switch.

## 9. Tokens

- Components consume semantic tokens, not hard-coded color, spacing, radius, elevation, typography, z-index, or motion values.
- Product personalities map approved accent roles without redefining state semantics.
- Token changes require light/dark, RTL/LTR, accessibility, visual-regression, and consumer-impact review.
- Current theme files are compatibility evidence. Duplicate or older tokens are reconciled only through a scoped specification and migration—not by silent cleanup.
- No Skill-generated palette or font becomes a token source automatically.

## 10. Reusability Decision

Use this order:

1. Reuse an existing approved component unchanged.
2. Compose existing primitives in the owning app.
3. Add an accessible bounded variant when semantics remain identical.
4. Create an app-local component for domain-specific behavior.
5. Propose a shared component only after repeated semantics are proven.
6. Deprecate an older component only with replacement, migration, compatibility, and removal criteria.

Reuse is not achieved by moving code into a shared package. It is achieved when ownership and semantics remain correct for every consumer.

## 11. Accessibility Contract

Every component must define:

- semantic role and accessible name;
- keyboard behavior and focus management;
- disabled, readonly, required, invalid, selected, expanded, busy, and live state as applicable;
- target size and contrast;
- screen-reader announcements for dynamic outcomes;
- RTL/LTR ordering and directional-icon behavior;
- reduced-motion behavior;
- zoom/reflow and high-contrast behavior;
- an accessible alternative for complex visual interaction.

Accessibility behavior is part of the component API and cannot be removed by a consumer variant.

## 12. Performance Contract

- Keep primitives dependency-light and tree-shakeable where the stack permits.
- Avoid importing application stores, large charting libraries, or feature data into shared primitives.
- Lazy-load expensive secondary experiences without hiding core content.
- Prevent unnecessary rerenders in operational high-frequency surfaces.
- Reserve layout space for asynchronous content to limit shift.
- Measure bundle, interaction, rendering, and list/table behavior proportionate to expected scale.
- Performance optimization must not remove semantics, focus, feedback, or accessibility.

## 13. Documentation and Testing

Every shared component needs:

- purpose and non-purpose;
- owner and status;
- props/slots and allowed variants;
- usage and anti-usage examples;
- Arabic/RTL, English/LTR, light/dark, responsive examples;
- keyboard and screen-reader behavior;
- loading/error/empty handling where relevant;
- unit/interaction/accessibility tests;
- consumer compatibility and deprecation notes.

Domain components need owner-specific behavior tests and must use the governing app's terminology and permission semantics.

## 14. Component Lifecycle

| State | Meaning |
|---|---|
| Candidate | A need or pattern is observed; no shared contract approved |
| Proposed | Contract, evidence, consumers, and migration are documented |
| Approved | Design/system owners approve use within stated scope |
| Adopted | Component is documented, tested, and used by approved consumers |
| Deprecated | Replacement exists; warnings and migration path are documented |
| Removed | All approved consumers migrated and compatibility window closed |

Breaking changes require a proposal, consumer inventory, versioning strategy, migration plan, validation, and rollback.

## 15. Current Repository Treatment

During the first design-system work:

- protect working Core and Commerce shells, routes, and characterized interactions;
- do not merge visually similar app components before semantic equivalence is proven;
- do not move mock-domain behavior into `packages/ui`;
- keep legacy-compatible naming or mock flows until a governed replacement and migration exist;
- improve shared primitives incrementally behind stable interfaces;
- classify deprecated shared assets for later removal rather than deleting them opportunistically.

## 16. Governance Gate

A component change is ready only when ownership is explicit, reuse is justified, semantics are stable, accessibility and performance contracts pass, bilingual/dark/responsive states pass, current consumers remain compatible, documentation is synchronized, and any material design change has approved proposal and specification references.
