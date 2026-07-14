# Frontend-First Policy

## 1. Purpose

NexoraXS currently develops user-facing product features frontend first. The purpose is to validate business workflow, information hierarchy, terminology, states, accessibility, bilingual behavior, and client boundaries before feature-specific backend implementation hardens the wrong experience.

Frontend first does not mean frontend owns canonical business decisions, authorization, or production truth. It means the feature's UI and owner-facing contract mature before Laravel implementation.

## 2. Policy Statement

For a user-facing feature:

```text
Approved business problem and architecture
  -> UX/design proposal
  -> frontend behavior with deterministic mock client
  -> UI validation
  -> UI Freeze
  -> versioned API contract planning
  -> Laravel implementation
  -> contract parity and integration
  -> production release
```

No feature-specific backend implementation begins before UI maturity and UI Freeze. Logical ownership, security requirements, domain invariants, and contract needs are defined earlier; only the backend implementation is deferred.

## 3. Applicability

This policy applies to current Core Platform and Commerce OS user-facing feature development and later approved user-facing products.

It does not force a UI phase onto:

- urgent security or data-integrity remediation;
- backend-only production incidents;
- non-user-facing operational maintenance;
- previously approved backend contract work required to keep production safe.

Those cases still require an approved specification, plan, tests, review, migration/rollback where applicable, and explicit Product Owner/Architect disposition. They are not a loophole for feature backend work.

## 4. Mock Data First

The first functional UI uses deterministic, versioned mock data behind an app-owned client/facade.

Mocks must:

- represent approved entities, states, scopes, permissions, errors, latency, empty/partial data, and representative scale;
- preserve current legacy-compatible keys/IDs where required;
- simulate owner behavior without claiming production security;
- be resettable and test-isolated;
- support contract tests that a later Laravel client must also pass;
- avoid direct component access to storage or broad shared mock internals.

Mock convenience must not invent canonical schema or resolve Deferred Decisions.

## 5. Frontend Maturity

A frontend is mature when all applicable evidence exists:

- business flow and acceptance scenarios are approved;
- architecture owner and context are correct;
- current behavior and compatibility are characterized;
- Design Proposal and Design Quality Checklist pass;
- primary and edge workflows are usable with representative mocks;
- loading, empty, partial, stale, error, unauthorized, unavailable, success, and recovery states are complete;
- Arabic/RTL and English/LTR are validated;
- keyboard, focus, screen reader, contrast, zoom, responsive, dark, motion, and performance behavior pass;
- component and client boundaries are stable;
- analytics, audit, security, and observability requirements are identified;
- stakeholder usability and Product Owner acceptance are recorded;
- unresolved findings are non-blocking and explicitly owned.

Visual polish alone is not UI maturity.

## 6. UI Freeze

UI Freeze locks the approved frontend contract for backend integration:

- task flow and information hierarchy;
- user-visible terminology and state distinctions;
- routes/navigation handoff where in scope;
- component interaction semantics;
- client/facade operations and data/error states;
- validation and acceptance behavior;
- Arabic/English and accessibility expectations;
- approved Design Memory IDs;
- known legacy compatibility.

UI Freeze is a feature delivery state, not an Architecture Freeze and not a promise that pixels can never change. Material change after UI Freeze reopens design, contract, tests, and approval.

## 7. UX Validation

Before UI Freeze, validate with:

- realistic task walkthroughs and acceptance scenarios;
- Product Owner and owner-domain review;
- representative users or accountable proxies where available;
- Arabic/RTL and English/LTR content review;
- accessibility review with keyboard and assistive technology;
- responsive/device and operational-context testing;
- state/failure/recovery exercises;
- current-route and legacy compatibility regression tests;
- performance assessment with representative data volume.

Record findings, decisions, and Design Memory outcomes. Rejected and deferred options remain traceable.

## 8. API Contracts Later

Architecture-level logical contracts and owner boundaries are known before design. Concrete API contracts are finalized after UI maturity so they support validated behavior without exposing UI shape as a database model.

The contract must define:

- canonical owner and operation purpose;
- actor and Workspace/Business/Business Unit/Department/Branch/OS/resource scope;
- request/response and error semantics;
- authorization and validation ownership;
- versioning, compatibility, idempotency, correlation, timeout, retry, and failure behavior;
- pagination/filter/sort and representative scale where applicable;
- audit and observability requirements;
- migration/deprecation and rollback;
- mapping between mock/client types and backend DTOs without duplicating truth.

The UI must not dictate physical tables or ORM models.

## 9. Backend Integration Later

After UI Freeze:

1. approve the API/integration plan;
2. implement Laravel behind the owner boundary;
3. create/complete `packages/sdk` clients and `packages/auth` helpers only within their allowed roles;
4. run the same contract suite against mock and Laravel clients;
5. enforce server-side tenancy, authorization, invariants, calculations, audit, and observability;
6. integrate one bounded vertical slice;
7. verify parity, failure isolation, migration, and rollback;
8. retain the mock adapter until real-client acceptance is complete;
9. cut over through an approved reversible release plan.

## 10. Frontend Boundary Rules

- Pages and components consume app-owned hooks/clients/facades.
- Components do not import browser storage or mock databases directly.
- Apps never import from another app.
- `packages/ui` remains presentation-only.
- `packages/sdk` remains client/fetch mapping only.
- `packages/auth` remains authentication/session helpers only.
- `packages/types` remains shared contracts/types only.
- `packages/shared` remains context-neutral utilities; it does not own domain rules.
- Canonical calculations are validated by the owning domain, even if the UI previews them.

## 11. Current Repository Compatibility

The current `useApp` facades, routes, storage keys, seeded IDs, BusinessUnit-as-Business legacy behavior, `OSEnablement` rows, Commerce setup/operations UI, and Core-to-Commerce handoff remain protected until separate approved features migrate them.

Frontend-first work must not extend the existing cross-owner provider behavior. The first bounded change is characterization and owner-scoped client/facade stabilization, as recommended by the frontend audit.

## 12. No-Backend-Before-UI-Maturity Gate

Backend implementation is blocked when any of the following remains unresolved:

- UX flow or state model is unapproved;
- UI/client contract is unstable;
- canonical owner or scope is ambiguous;
- required design, accessibility, localization, security, or product acceptance is missing;
- mock behavior cannot express acceptance and failure states;
- migration/rollback is undefined;
- a Deferred Decision would be guessed.

An exception requires a documented non-feature rationale and explicit Product Owner, Architect, and engineering approval. It cannot change architecture or reduce production safety.

## 13. Completion Standard

Frontend-first is complete only when Laravel can replace the mock client through the stable boundary without rewriting route components or approved interaction behavior, and both implementations satisfy the same acceptance and contract evidence.
