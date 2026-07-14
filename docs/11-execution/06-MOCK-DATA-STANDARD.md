# Mock Data Standard

## 1. Purpose

This standard defines how NexoraXS uses mock data for frontend-first development and how mocks transition to Laravel without rewriting the UI. Mocks are temporary executable test data and behavior, not canonical architecture or a production security model.

## 2. Mock Ownership

Every mock artifact has two owners:

- **Domain owner:** accountable for the meaning, invariants, and operations represented.
- **Test/implementation owner:** accountable for fixture quality, determinism, reset, and maintenance.

Core mocks remain Core-scoped. Commerce mocks remain Commerce-scoped. A shared storage adapter may store both temporarily for compatibility, but that does not create shared domain ownership.

`packages/shared` may provide generic deterministic utilities and the legacy storage adapter during migration. It must not become the permanent owner of Commerce calculations, Core lifecycle decisions, organization rules, or cross-domain writes.

## 3. Mock Types

| Type | Purpose | Constraint |
|---|---|---|
| Fixture | Deterministic records for states and tests | Versioned, non-sensitive, owner-correct |
| Scenario | Named arrangement for a workflow or edge case | Trace to acceptance criteria |
| Mock client | In-memory/browser implementation of an owner-facing client | Same external contract as later real client |
| Fake service/repository | Behavior-rich test implementation | Use only when the approved boundary is actually service/repository-shaped |
| Stub | Fixed response for a narrow dependency | Must not conceal owner behavior needed by the test |
| Failure simulator | Timeout, error, stale, partial, unauthorized, or unavailable behavior | Deterministic and selectable |

“Fake repository” does not mandate a Repository Pattern. NexoraXS prefers the smallest stable client/facade boundary already supported by the application. Do not add generic layers solely to rename mocks.

## 4. Stable Client/SDK Boundary

The UI must depend on an app-owned interface such as:

```text
Page/component
  -> app hook/facade
  -> owner client contract
       -> mock adapter now
       -> packages/sdk Laravel client later
```

The boundary defines user-required operations and owner-valid results/errors. It does not expose raw local-storage collections, backend tables, ORM models, or another app's internal state.

`packages/sdk` is the future client-only home for versioned API calls, transport mapping, and standardized errors. It does not own domain decisions. `packages/auth` supplies Core-aligned auth/session helpers only.

## 5. Fixture Standard

Every fixture set must define:

- stable fixture/scenario version;
- owning domain and source requirement;
- Workspace and applicable Business, Business Unit, Department, Branch, OS, actor, and resource IDs;
- locale, direction, currency, timezone, and formatting context where relevant;
- permission and lifecycle states;
- relationships and invariants;
- expected calculations/outcomes;
- reset and isolation behavior;
- legacy compatibility dependencies;
- limitations and production differences.

Fixtures must include representative Arabic and English content, long labels, empty/minimum/maximum states, invalid/unauthorized references, and realistic volume appropriate to the feature.

Never use real credentials, personal data, secrets, or copied customer data.

## 6. Behavior Standard

A mock client may model:

- success and owner-valid validation;
- loading/latency and cancellation behavior;
- empty, stale, partial, conflict, timeout, unavailable, and retry states;
- authorization outcomes for UX testing;
- deterministic calculations needed to exercise UI;
- versioned contract and compatibility scenarios.

It must clearly document that production authorization, concurrency, transaction integrity, encryption, audit durability, and server-enforced tenant isolation are not proven by browser mock behavior.

## 7. Mock Lifecycle

| State | Definition | Exit condition |
|---|---|---|
| Proposed | Needed by an approved feature | Owner and contract identified |
| Active | Drives frontend and acceptance tests | UI Freeze and contract stable |
| Contract-locked | Expected behavior shared with real client | Laravel parity suite passes |
| Dual-validation | Mock and Laravel run the same contract/acceptance evidence | Real client accepted and rollback ready |
| Compatibility | Retained for tests, demos, offline development, or rollback | Explicit consumer and expiry review |
| Deprecated | No longer primary; replacement documented | All required consumers migrated |
| Removed | Safe deletion approved | No consumer, fixture, test, or rollback dependency remains |

Do not delete a mock because a backend endpoint exists. Remove it only after parity, migration, and retained test needs are reviewed.

## 8. Current Legacy Mock Treatment

The current browser mock plane is **Legacy-compatible** and protected while boundaries stabilize:

- `packages/shared/src/mock-db/storage.ts` centralizes persistence and remains temporarily.
- Existing storage keys, seeded IDs, session keys, and raw-storage E2E assertions remain stable.
- BusinessUnit-as-Business data remains unchanged until its dedicated migration.
- Existing `OSEnablement` rows remain compatibility data; they do not define future architecture.
- Current `useApp` imports in leaf pages remain the replacement seam.
- Core/Commerce provider cross-owner writes and domain behavior in `packages/shared` must not be extended.

Refactoring begins with characterization, then changes internals behind stable page-facing behavior.

## 9. Mock Data Location Rules

- Domain fixture and behavior modules should live with the owning app/client implementation unless genuinely contract-shared.
- Generic storage/reset/ID/test helpers may be shared when context-neutral.
- Presentation examples may live with component documentation but cannot simulate canonical ownership.
- Tests reference named scenarios, not arbitrary mutations of a global fixture plane.
- No ordinary UI component imports mock fixtures, mock database barrels, or storage directly.

Physical relocation of current files requires a scoped refactoring specification and compatibility tests; this document does not authorize moving them.

## 10. Contract Parity

The mock and Laravel clients must agree on:

- operation names and intent;
- input/output types and version;
- organization/resource scope;
- validation and error categories;
- pagination, filtering, sorting, and concurrency semantics where applicable;
- idempotency and correlation;
- unauthorized/forbidden/not-found distinction without information leakage;
- timeout, retry, partial failure, and unavailable behavior;
- data freshness and projection semantics;
- deprecation and compatibility behavior.

Contract tests run against both adapters. UI acceptance tests must be runnable with either adapter for the integration scope.

## 11. Transition to Laravel

### Phase 1 — Characterize

Protect current UI, routes, state, calculations, storage, and legacy behavior with tests.

### Phase 2 — Stabilize owner facades

Separate Core and Commerce page-facing operations behind interfaces without changing visible behavior or storage.

### Phase 3 — Reconcile mock ownership

Move owner validation behind the correct facade and remove new direct component/shared-domain access. Keep compatibility exports where required.

### Phase 4 — Define versioned API contract

After UI Freeze, specify Laravel operations, context, authorization, errors, idempotency, audit, observability, and compatibility.

### Phase 5 — Implement real client

Add the Laravel client through `packages/sdk` and Core auth/session helpers through `packages/auth`, preserving app-owned interfaces.

### Phase 6 — Dual validate

Run contract, acceptance, tenant, authorization, calculation, localization, accessibility, and failure tests against both adapters.

### Phase 7 — Reversible cutover

Select the real client through approved configuration/release control, monitor parity and errors, and retain mock rollback until acceptance completes.

### Phase 8 — Deprecate deliberately

Retain mocks required for deterministic tests and local UI work. Remove obsolete compatibility only after consumer inventory and migration approval.

## 12. No-UI-Rewrite Guarantee

Backend transition is acceptable only when route/page components retain their approved user behavior and consume the same stable facade. A component rewrite is not allowed merely because Laravel response shapes differ.

Transport differences are mapped in the SDK/client adapter. If a real backend constraint proves the approved contract invalid, stop and reopen specification, design, and plan; do not leak the backend schema into UI components.

## 13. Mock Review Checklist

- [ ] Domain and test owners identified.
- [ ] Scenario traces to requirements and acceptance criteria.
- [ ] Deterministic reset and isolation exist.
- [ ] Correct tenant/organization/resource identifiers are represented.
- [ ] Arabic/English, RTL/LTR, accessibility-relevant, and edge data exist.
- [ ] UI consumes an app-owned facade, not storage.
- [ ] No duplicate canonical model or Deferred Decision is introduced.
- [ ] Production security limitations are documented.
- [ ] Contract parity and Laravel replacement strategy are defined.
- [ ] Compatibility, deprecation, removal, and rollback criteria are recorded.
