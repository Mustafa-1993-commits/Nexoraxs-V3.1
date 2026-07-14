# Refactoring Standard

## 1. Purpose

This standard defines how NexoraXS evolves existing code without unnecessary rewriting, architectural drift, or loss of legacy compatibility. It adopts the frontend audit conclusion: the repository is structurally viable but boundary-unstable, and safe incremental reconciliation is possible.

Refactoring changes structure while preserving approved behavior unless a separate product/design specification authorizes behavior change.

## 2. Non-Negotiable Rules

- No repository-wide rewrite is recommended or authorized.
- Characterize behavior before changing high-risk code.
- Preserve current routes, user journeys, storage keys, IDs, and facade contracts until migration is approved.
- Do not combine a refactor, redesign, architecture change, and data migration in one hidden scope.
- Do not directly rename `BusinessUnit` to `Business`, create duplicate canonical truth, or delete the legacy flow.
- Do not promote legacy `OSEnablement` into future architecture.
- Do not move business logic into shared packages to make extraction easier.
- Do not change an owner while moving a file.
- Keep rollback possible at every phase.
- Refactoring acceptance is based on evidence, not smaller file count.

## 3. Refactor Classification

Use the audit vocabulary:

| Classification | Execution treatment |
|---|---|
| Keep | Protect; change only for an approved feature or proven defect |
| Improve | Make bounded quality/structure changes with tests |
| Reconcile | Create a governed compatibility plan before changing the boundary |
| Legacy-compatible | Retain until replacement and migration are proven |
| Remove later | Do not delete until consumers, replacement, and rollback are clear |
| Missing | Add only through an approved feature/plan |

Do not use “rewrite” unless evidence proves the code is unusable and no safe migration path exists. Such a claim requires independent review.

## 4. Refactoring Intake

Every proposed refactor records:

- problem and file-level evidence;
- current behavior and consumers;
- audit classification;
- architectural and code owner;
- intended structural outcome and explicit behavior non-goals;
- compatibility dependencies;
- risk and blast radius;
- characterization coverage;
- migration/rollback needs;
- measurable completion criteria.

Aesthetic preference, newer framework fashion, or duplicate-looking code alone is insufficient.

## 5. Incremental Refactoring Method

1. **Inventory:** map routes, imports, stores, hooks, clients, types, storage, mocks, tests, and runtime consumers.
2. **Characterize:** add tests for observable current behavior, including defects intentionally preserved until separately fixed.
3. **Create a seam:** define the smallest stable owner-facing interface behind existing consumers.
4. **Add compatibility:** adapt current implementation to the seam without changing persisted state or UI.
5. **Move one responsibility:** relocate/partition logic while preserving owner and contract.
6. **Dual verify:** compare old and new behavior where feasible.
7. **Switch reversibly:** use an approved bounded cutover.
8. **Observe:** verify regressions, performance, audit/telemetry, and user outcomes.
9. **Deprecate:** mark old paths and retain them for the approved compatibility window.
10. **Remove later:** delete only when no required consumer/rollback dependency remains.

## 6. Phase A — Characterization and Safety Tests

**Goal:** make existing behavior visible before structural change.

**Priority areas:** Core onboarding, Product Hub handoff, BusinessUnit-as-Business behavior, context switching, POS totals, tenant-scope rejection, Commerce setup, inventory/transfer/return, invoice history, and current redirects.

**Required evidence:** routes and visible behavior; provider methods; storage keys/IDs; Arabic/English states; accessibility behavior; expected defects/limitations; repeatable test commands.

**Rollback:** no production behavior changes in this phase. Revert only new tests if they are invalid, not because they expose a defect.

## 7. Phase B — Boundary Stabilization

**Goal:** define stable Core and Commerce page-facing client/facade contracts without changing UI, routes, storage, or visible behavior.

**Required treatment:**

- preserve `useApp` consumer imports initially;
- inventory and assign every provider operation to its owner;
- stop adding Core-to-Commerce and Commerce-to-Core writes;
- keep the old provider behind compatibility adapters;
- make context/authorization requirements explicit even while mocks cannot enforce production security.

**Validation:** contract tests, route/E2E parity, hydration/redirect/toast behavior, and no new cross-owner operation.

**Rollback:** switch consumers back to the prior facade implementation as one bounded unit; keep storage unchanged.

## 8. Phase C — Mock/Client Abstraction Reconciliation

**Goal:** make browser mocks one adapter of stable owner clients so Laravel can replace them later.

**Required treatment:**

- partition domain behavior out of generic `packages/shared` behind its owner;
- retain generic storage and utility compatibility where needed;
- recompute/validate canonical Commerce results at the owner boundary;
- define mock and future SDK contract parity;
- preserve leaf UI contracts.

**Validation:** same contract suite against mock implementations; E2E parity; totals/rounding/stock/document/report regression; failure-state UI.

**Rollback:** retain mock client and legacy schema; disable the new adapter without changing pages.

## 9. Phase D — Business and Business Unit Compatibility Preparation

**Goal:** prepare—but do not execute—the migration from the legacy synonym implementation to the frozen hierarchy.

**Requires:** a separate approved Spec Kit feature tracing ADR-004, ADR-034, ADR-040, Core/Commerce freezes, and the audit compatibility register.

**Must inventory:** types, stores, keys, IDs, URLs, context, onboarding, Product Hub, setup, documents, mock data, tests, Branch ancestry, Business DNA scope, access, and plan limits.

**Validation plan:** deterministic ancestry, exactly one owner, compatibility reads, explicit context, idempotent mapping, tenant authorization, historical records, fixture/version reconciliation, and rollback rehearsal.

**Forbidden:** direct rename, duplicate Business truth, destructive one-way migration, or use of a UI label as canonical evidence.

## 10. Phase E — Later Governed Migrations

**Goal:** execute separately approved migrations after required decisions and contracts exist.

Examples include Laravel integration, secure Core-to-Commerce handoff, auth/session replacement, organization write protocol, commercial/operational lifecycle reconciliation, deprecated helper/name removal, and storage cleanup.

Each migration requires owner approval, versioned contracts, reversible rollout, audit/observability, reconciliation, backward compatibility, and production rollback gates. Architecture changes additionally require Governance.

## 11. Legacy Compatibility

Legacy-compatible code is a supported transition surface, not preferred architecture and not disposable debt.

For each item maintain:

- exact location and consumer inventory;
- current behavior and user label;
- underlying model/store/key;
- reason it must remain;
- replacement and migration prerequisite;
- read/write compatibility strategy;
- test coverage;
- deprecation owner and review date;
- safe removal criteria.

Current protected examples include BusinessUnit-as-Business storage, `OSEnablement` rows, local/session storage keys, seeded IDs, query handoff, mock auth, current `useApp` page seam, and raw-storage E2E assertions.

## 12. Architecture Reconciliation

When implementation conflicts with the freeze:

1. identify the code and exact authoritative statement;
2. classify current behavior using the audit vocabulary;
3. stop changes at that boundary;
4. preserve working compatibility;
5. write a feature specification for alignment;
6. obtain ADR/architecture action only if the desired target changes the freeze;
7. plan migration, dual validation, and rollback;
8. update implementation and documentation together.

Do not edit historical architecture to make current code appear compliant.

## 13. Regression Prevention

Every refactor uses, as applicable:

- characterization snapshots/behavior assertions;
- unit and contract tests at new seams;
- integration tests for owner, tenant, authorization, and persistence;
- critical-route E2E tests;
- Arabic/English and RTL/LTR regression;
- accessibility and focus regression;
- performance/bundle/rendering baselines;
- fixture and storage compatibility tests;
- migration dry-run, reconciliation, and rollback tests;
- logs/metrics/traces for production comparison.

Testing internals alone is insufficient; preserve observable contracts.

## 14. Do-Not-Touch First-Phase Register

Protect during the first refactoring phase:

- separate Landing, Core Platform, and Commerce apps;
- current Commerce route group and URLs;
- Product Hub journey;
- Commerce setup and operational UI;
- inventory, transfer, movement, return, and invoice-history behavior;
- `tests/e2e/commerce-044.spec.ts` behavior;
- current storage keys, seeded IDs, and BusinessUnit compatibility data;
- `useApp` imports in leaf pages;
- shared UI primitives and import paths;
- address separation and direction-switching foundations.

Changes to these need direct problem evidence and a separate approved scope.

## 15. Refactor Definition of Done

A refactor is complete when behavior and owner boundaries are preserved or explicitly migrated, all consumers are accounted for, tests pass, performance/accessibility/localization do not regress, compatibility and rollback are proven, documentation is synchronized, deprecation is explicit, and no hidden product or architecture change was introduced.
