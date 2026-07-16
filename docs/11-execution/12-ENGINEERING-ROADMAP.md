# NexoraXS Engineering Roadmap

## 1. Purpose

This roadmap sequences engineering maturity for the current repository and future approved product work. It does not generate product features, approve future Operating Systems, set dates, or modify frozen architecture.

The current implementation priority remains Frontend Foundation, Core Platform, and Commerce OS. Later phases are conditional planning horizons. Backend integration follows UI maturity per approved vertical slice; Production follows verified integration and release readiness.

## 2. Roadmap Rules

- Every phase uses the Development Lifecycle and Spec Kit Workflow.
- Architecture availability does not equal implementation authorization.
- Future OS phases require their own approved architecture/product scope before feature work.
- Marketplace is a Core Platform bounded context, not an independent OS.
- Construction is a future reference without a separately frozen product milestone; no feature/workflow is authorized here.
- No phase may resolve Deferred Decisions or bypass migration and compatibility.
- Frontend-first does not move canonical authority to the UI.
- A phase exits on evidence, not elapsed time.

## 3. Current Phase — Frontend Foundation

**Status:** active foundation/reconciliation horizon.

**Objective:** make continued frontend development safe without rewriting working applications.

**Priority outcomes:**

- characterize Core onboarding, Product Hub handoff, context, POS totals, and legacy compatibility;
- preserve separate Landing, Core, and Commerce apps and current routes;
- stabilize owner-scoped Core/Commerce client facades behind current `useApp` seams;
- stop extending cross-owner provider/shared-domain behavior;
- strengthen shared presentation primitives without premature consolidation;
- complete repeatable lint/type/test/build quality tasks through a dedicated feature;
- make Arabic/English, RTL/LTR, accessibility, dark, responsive, states, and performance first-class acceptance evidence;
- protect storage keys, seeded IDs, BusinessUnit-as-Business behavior, and `OSEnablement` compatibility.

**Recommended first Spec Kit feature:** Frontend Boundary Stabilization and Legacy BusinessUnit Compatibility Characterization, as defined by the audit.

**Exit gate:** characterized behavior, stable owner facades, no new cross-owner writes, CI-suitable quality evidence, and no UI rewrite.

## 4. Next Phase — Core Platform

**Architectural status:** frozen shared platform; current product scope requires feature-level approval.

**Objective:** mature Core-owned frontend journeys and client boundaries without absorbing OS workflows.

**Engineering focus:**

- Core identity/session and Workspace/organization context boundaries;
- onboarding and Product Hub composition through owner projections;
- subscription/product access/readiness distinction without inventing `OSEnablement` successor semantics;
- team/access, localization, settings, audit/notification participation;
- secure setup handoff design and contracts only after UI maturity;
- Core mock clients prepared for eventual Laravel integration.

**Exit gate:** Core UI/client boundaries are approved and contract-ready; tenant/authorization requirements are testable; OS setup remains OS-owned.

## 5. Next Phase — Commerce OS

**Architectural status:** frozen independent OS; current product scope requires feature-level approval.

**Objective:** mature Commerce operational frontend and owner validation while preserving current behavior.

**Engineering focus:**

- setup, module-driven navigation, and Business Unit/Branch context;
- POS owner validation for totals/tax/payment/order effects;
- catalog, inventory, transfer, return, document, customer, and report boundaries;
- operational density, keyboard workflows, failure/recovery, and performance;
- Commerce-owned mock client and API-contract readiness;
- preservation of presets as recommendations/configuration, not parallel workflows.

**Exit gate:** Commerce core workflows are independently usable, characterized, accessible/bilingual, owner-correct, and ready for bounded Laravel integration without UI rewrite.

## 6. Conditional Phase — Healthcare

**Status:** future OS concept; no implementation authorization from this roadmap.

**Entry prerequisites:** approved Healthcare architecture milestone, business validation, product scope, privacy/safety requirements, Design Intelligence work, and Spec Kit feature approval.

**Engineering objective if activated:** establish an independently usable Healthcare OS through frontend-first slices while preserving Healthcare/Commerce ownership boundaries.

**Exit gate:** defined by the future approved milestone and feature plans.

## 7. Conditional Phase — HR

**Status:** future OS concept; no implementation authorization from this roadmap.

**Entry prerequisites:** approved HR architecture/product scope and explicit separation of Core User/Workspace Member/OS access from HR employee-domain ownership.

**Engineering objective if activated:** mature privacy-safe HR frontend slices, then owner contracts/backend integration after UI Freeze.

**Exit gate:** defined by the future approved milestone and feature plans.

## 8. Conditional Phase — Construction

**Status:** future reference only; no separately frozen Construction OS baseline.

**Entry prerequisites:** full Discovery, architecture/governance lifecycle, product validation, ownership model, and approved specification.

**Engineering objective if activated:** determined only after those prerequisites. This roadmap does not approve project, site, work-package, field, inspection, or progress workflows.

**Exit gate:** cannot be defined as implementation work until architecture and product scope exist.

## 9. Conditional Phase — Marketplace

**Architectural status:** frozen Core Platform bounded context; not an OS. Executable scope still requires feature authorization.

**Objective:** when prioritized, implement governed asset discovery and lifecycle surfaces without transferring external asset ownership.

**Engineering focus if activated:** asset/publisher/version/trust/certification/compatibility/dependency/commercial/entitlement/installation/activation/update/removal states; search/recommendation participation; secure and observable lifecycle boundaries.

**Exit gate:** Marketplace UI and client contracts preserve frozen publication-path and external-owner rules, pass Design/Execution checks, and remain within Core.

## 10. Cross-Cutting Phase — Backend Integration

**Status:** follows UI maturity per approved vertical slice; not a single big-bang final rewrite.

Although listed after product horizons, backend integration may begin for an approved mature Core or Commerce slice without waiting for unapproved future OSs. It must never begin for a user-facing feature before that feature's UI Freeze.

**Objective:** replace mock clients with Laravel implementations through stable owner contracts.

**Sequence:**

1. UI Freeze and contract approval;
2. `packages/sdk` client boundary and `packages/auth` helper boundary as needed;
3. Laravel owner implementation with server-side tenant/authorization/invariants;
4. contract parity against mock and real clients;
5. audit, observability, failure, security, and performance validation;
6. migration rehearsal and reversible cutover;
7. retain mock/test adapters until acceptance and rollback conditions close.

**Priority blockers requiring separate decisions/specs:** canonical Business/Business Unit migration, organization write protocol, legacy `OSEnablement` treatment, secure Core-to-Commerce handoff, and broad state-ownership separation.

**Exit gate:** real clients replace mocks without route-component rewrite, all contract/tenant/security/migration tests pass, and rollback is proven.

## 11. Final Phase — Production

**Objective:** operate approved Core/Commerce and later authorized product slices safely and sustainably.

**Readiness requirements:**

- release candidate freeze and approvals;
- production-safe identity, tenant authorization, privacy, audit, observability, backup/recovery, and incident handling;
- tested migrations and rollbacks;
- Arabic/English, RTL/LTR, accessibility, performance, responsive, dark, and critical-journey evidence;
- support/runbooks and release documentation;
- health/business signals and accountable operators;
- post-release learning loop into specs, Design Memory, and future features.

**Exit gate:** production verification complete, no unresolved release blocker, and operational ownership accepted.

## 12. Cross-Phase Engineering Workstreams

| Workstream | Ongoing requirement |
|---|---|
| Architecture/governance | Authority trace, one owner, ADR/Freeze discipline |
| Product | Validated problem, measurable value, bounded scope |
| Design | Approved UX, Design Memory, bilingual/accessibility quality |
| Boundary stabilization | App ownership, client/facade contracts, no cross-owner writes |
| Mock/backend parity | Deterministic mocks, versioned contracts, no UI rewrite |
| Quality engineering | Characterization, unit/component/contract/integration/E2E/non-functional tests |
| Security/operations | Tenant isolation, authorization, privacy, audit, observability, recovery |
| Documentation | Same-change synchronization and historical integrity |
| Release | Feature freeze, migration, rollback, verification, learning |

## 13. Phase Entry Gate

A phase or vertical slice starts only when:

- business priority and scope are approved;
- architecture status and owner are explicit;
- no authority conflict or Deferred Decision blocks it;
- design/research prerequisites are identified;
- required feature specification is approved;
- dependencies, migration, rollback, test, and specialist owners are available.

## 14. Phase Exit Gate

A phase or slice exits only when its approved outcomes are delivered, required quality and Constitution checks pass, owner boundaries and compatibility hold, documentation/Design Memory are synchronized, no blocking finding remains, and the next phase can consume a stable contract without guessing.

## 15. Roadmap Change Control

Product Owner may reprioritize approved feature work within frozen architecture. Architect validates boundary impact. Any new OS, ownership, canonical model, lifecycle, or frozen guarantee follows Governance. Update this roadmap when sequencing or readiness criteria materially change; never rewrite past phase evidence to imply work was complete earlier.
