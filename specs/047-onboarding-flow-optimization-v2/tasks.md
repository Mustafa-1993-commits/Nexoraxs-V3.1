# Tasks: Target Architecture v2 Alignment

**Input**: Design documents from `specs/047-onboarding-flow-optimization-v2/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/shared-mock-db-contract.md, quickstart.md

**Tests**: No automated test-first/TDD tasks were requested in the specification. Validation is via typecheck, lint/build where available, and the quickstart manual flow.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the alignment scope and confirm current partial implementation before making model changes.

- [X] T001 Review current partial `OSEnablement` and `BusinessUnit` implementation against the contract in `packages/types/src/core.ts`
- [X] T002 Review current mock-db storage and seed coverage for `osEnablements` in `packages/shared/src/mock-db/schema.ts` and `packages/shared/src/mock-db/seed.ts`
- [X] T003 [P] Review Core provider handoff and Product Hub usage paths in `apps/core-platform/lib/store/AppProvider.ts`, `apps/core-platform/lib/commerce-url.ts`, and `apps/core-platform/app/dashboard/apps/page.tsx`
- [X] T004 [P] Review Commerce provider and branch filtering paths in `apps/commerce/lib/store/AppProvider.ts`, `apps/commerce/components/shell/ContextSwitcher.tsx`, and `apps/commerce/app/(commerce)/settings/page.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared contracts, helpers, and compatibility behavior required before user stories can be completed.

**CRITICAL**: No user story work should begin until this phase is complete.

- [X] T005 Update `BusinessUnit` with optional/compatible `industryType` and update `OSEnablement` to use `branchIds: string[]` plus `"locked"` status in `packages/types/src/core.ts`
- [X] T006 Verify `OSEnablement` is exported from the shared type barrel in `packages/types/src/index.ts`
- [X] T007 Update `STORAGE_KEYS.osEnablements` and add i18n-safe Business terminology keys if needed in `packages/shared/src/mock-db/schema.ts`
- [X] T008 Update `emptyDB` and `seedDB` to include `osEnablements`, seeded Business `industryType`, and an active Commerce business-scoped enablement in `packages/shared/src/mock-db/seed.ts`
- [X] T009 Add pure enablement selectors `getWorkspaceOSEnablements`, `getBusinessOSEnablements`, `getCurrentOSEnablement`, and `isOSEnabledForBusiness` in `packages/shared/src/mock-db/selectors.ts`
- [X] T010 Add compatibility helpers for missing `industryType` and missing Commerce enablement in `packages/shared/src/mock-db/selectors.ts`
- [X] T011 Export new selectors/helpers from `packages/shared/src/mock-db/index.ts` and `packages/shared/src/index.ts`
- [X] T012 Update shared mock-db contract notes if implementation decisions require clarification in `specs/047-onboarding-flow-optimization-v2/contracts/shared-mock-db-contract.md`

**Checkpoint**: Shared model and selectors are ready for Core and Commerce integration.

---

## Phase 3: User Story 1 - Workspace, Business, Branch, Subscription, and Enablement Separation (Priority: P1)

**Goal**: A workspace can represent businesses, branches, subscriptions, and enablements without treating subscription as usage.

**Independent Test**: Inspect a workspace with multiple businesses, branches, subscriptions, and enablements and verify Commerce usage comes from `OSEnablement`, not `OSSubscription` alone.

### Implementation for User Story 1

- [X] T013 [US1] Load and persist `osEnablements` in Core runtime state in `apps/core-platform/lib/store/AppProvider.ts`
- [X] T014 [US1] Ensure Core plan/subscription creation creates or reuses a workspace-scoped `OSEnablement` without implying business usage in `apps/core-platform/lib/store/AppProvider.ts`
- [X] T015 [US1] Update Core -> Commerce setup URL generation to include current `OSEnablement` context when available in `apps/core-platform/lib/commerce-url.ts`
- [X] T016 [US1] Keep Product Hub subscription display driven by `OSSubscription` while setup/usage actions can resolve `OSEnablement` in `apps/core-platform/app/dashboard/apps/page.tsx`
- [X] T017 [US1] Load and persist `osEnablements` in Commerce runtime state in `apps/commerce/lib/store/AppProvider.ts`
- [X] T018 [US1] Apply the missing-Commerce-enablements compatibility helper during Commerce handoff/load without clearing existing storage in `apps/commerce/lib/store/AppProvider.ts`
- [X] T019 [US1] Document the sample Mustafa Group subscriptions and enablements in `docs/implementation/target-architecture-v2-alignment.md`

**Checkpoint**: User Story 1 is independently testable from shared state and Product Hub/Commerce handoff.

---

## Phase 4: User Story 2 - Commerce MVP Compatibility with BusinessUnit as Internal Business (Priority: P1)

**Goal**: Existing Commerce MVP flows continue working while user-facing language says Business/Store/Branch.

**Independent Test**: Complete the existing Core -> Commerce flow and verify active Commerce business and branch load, branch context is correct, and no touched UI exposes Business Unit terminology.

### Implementation for User Story 2

- [X] T020 [US2] Keep Commerce current business resolution based on `currentBusinessUnitId` while exposing compatible current enablement data in `apps/commerce/lib/store/AppProvider.ts`
- [X] T021 [US2] Update Commerce `createBusinessUnit` behavior to create/update an active business-scoped `OSEnablement` with `branchIds` compatibility in `apps/commerce/lib/store/AppProvider.ts`
- [X] T022 [US2] Update Commerce `createBranch` and `addBranch` behavior so every new Branch belongs to the current Business and updates related enablement branch IDs when appropriate in `apps/commerce/lib/store/AppProvider.ts`
- [X] T023 [US2] Replace user-facing "BusinessUnit" copy introduced by setup compatibility screens with Business language in `apps/commerce/app/setup/page.tsx`
- [X] T024 [US2] Verify Commerce shell/context switcher labels use Business/Branch language and no "Business Unit" label in `apps/commerce/components/shell/ContextSwitcher.tsx`
- [X] T025 [US2] Verify Core shell/context switcher labels use Business/Branch language and no "Business Unit" label in `apps/core-platform/components/shell/ContextSwitcher.tsx`
- [X] T026 [US2] Ensure Commerce Dashboard, POS, Inventory, Orders, Invoices, Reports, and Settings still filter by active `currentBusinessUnitId` and `currentBranchId` in `apps/commerce/lib/store/AppProvider.ts`

**Checkpoint**: User Story 2 preserves the current Commerce MVP and removes exposed internal terminology from touched surfaces.

---

## Phase 5: User Story 3 - Industry Type vs Commerce Preset Separation (Priority: P2)

**Goal**: Business classification is independent from Commerce preset metadata.

**Independent Test**: Inspect a Commerce-enabled business and verify it has business-level `industryType` while Commerce setup still has `preset`/`presetId`.

### Implementation for User Story 3

- [X] T027 [US3] Add `industryType` handling to Business creation/update paths without replacing `preset`/`presetId` in `apps/core-platform/lib/store/AppProvider.ts`
- [X] T028 [US3] Add `industryType` handling to Commerce business creation path while preserving Commerce preset fields in `apps/commerce/lib/store/AppProvider.ts`
- [X] T029 [US3] Update Commerce setup preset selection so it only changes Commerce setup metadata and does not overwrite Business `industryType` in `apps/commerce/app/setup/page.tsx`
- [X] T030 [US3] Add or reuse a shared fallback mapping from existing preset metadata to display-only industry type for legacy records in `packages/shared/src/mock-db/selectors.ts`
- [X] T031 [US3] Update architecture documentation with explicit Industry Type vs Commerce Preset examples in `docs/implementation/target-architecture-v2-alignment.md`

**Checkpoint**: User Story 3 is independently testable by inspecting Business and Commerce setup records.

---

## Phase 6: User Story 4 - Branch Names Scoped to Business (Priority: P2)

**Goal**: Branch names can repeat across different businesses while remaining scoped within each business.

**Independent Test**: Represent two businesses with a `Nasr City` branch each and verify branch selectors/lists only show branches for the active business.

### Implementation for User Story 4

- [X] T032 [US4] Add a shared branch-name validation helper scoped by `businessUnitId` in `packages/shared/src/mock-db/selectors.ts`
- [X] T033 [US4] Apply business-scoped branch validation to Core branch creation compatibility paths in `apps/core-platform/lib/store/AppProvider.ts`
- [X] T034 [US4] Apply business-scoped branch validation to Commerce `createBranch` and `addBranch` paths in `apps/commerce/lib/store/AppProvider.ts`
- [X] T035 [US4] Ensure Commerce Settings branch creation allows repeated branch names across different businesses but prevents same-business duplicates when validation is active in `apps/commerce/app/(commerce)/settings/page.tsx`
- [X] T036 [US4] Verify active-business switching resets invalid active branches to that business's main/first branch in `apps/commerce/lib/store/AppProvider.ts`
- [X] T037 [US4] Add repeated-branch-name validation steps to `specs/047-onboarding-flow-optimization-v2/quickstart.md`

**Checkpoint**: User Story 4 is independently testable through branch creation and context switching.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Documentation, validation, and cleanup across all stories.

- [X] T038 [P] Scan touched Core and Commerce UI for forbidden user-facing terms using `rg "BusinessUnit|Business Unit|Default Business Unit|\\bBU\\b" apps/core-platform apps/commerce`
- [X] T039 [P] Scan touched app code to confirm no new direct browser-storage reads were added in pages/components using `rg "localStorage|sessionStorage" apps/core-platform apps/commerce`
- [X] T040 [P] Update final implementation notes in `docs/implementation/target-architecture-v2-alignment.md`
- [X] T041 Run Core Platform typecheck with `pnpm --filter core-platform exec tsc --noEmit` from repository root
- [X] T042 Run Commerce typecheck with `pnpm --filter commerce exec tsc --noEmit` from repository root
- [X] T043 Run Core Platform build with `pnpm --filter core-platform build` from repository root
- [X] T044 Run Commerce build with `pnpm --filter commerce build` from repository root
- [X] T045 Run repository lint command, if configured, with `pnpm lint` from repository root
- [X] T046 Execute the manual validation flow in `specs/047-onboarding-flow-optimization-v2/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup and blocks all user stories.
- **US1 (Phase 3)**: Depends on Foundational; recommended MVP slice.
- **US2 (Phase 4)**: Depends on Foundational and should follow US1 if sharing current enablement data.
- **US3 (Phase 5)**: Depends on Foundational; can proceed after shared Business/selector work is complete.
- **US4 (Phase 6)**: Depends on Foundational; can proceed after shared Branch/selector work is complete.
- **Polish (Phase 7)**: Depends on all implemented story phases.

### User Story Dependencies

- **US1 (P1)**: No dependency on other stories after Foundational.
- **US2 (P1)**: Can start after Foundational, but should integrate with US1 enablement resolution for final acceptance.
- **US3 (P2)**: Can start after Foundational; independent of US4.
- **US4 (P2)**: Can start after Foundational; independent of US3.

### Parallel Opportunities

- T003 and T004 can run in parallel.
- T009 and T010 can be developed together after T005-T008.
- US1 Core tasks T013-T016 and Commerce tasks T017-T018 can split after shared selectors are ready.
- US2 UI-copy tasks T023-T025 can run in parallel with provider tasks T020-T022.
- US3 documentation task T031 can run in parallel after T027-T030 are understood.
- US4 settings task T035 and context-switching task T036 can run after T032-T034.
- Polish scans T038-T040 can run in parallel.

---

## Parallel Example: User Story 1

```text
Task: "Update Core provider enablement state in apps/core-platform/lib/store/AppProvider.ts"
Task: "Update Commerce provider enablement state in apps/commerce/lib/store/AppProvider.ts"
Task: "Update Core setup URL context in apps/core-platform/lib/commerce-url.ts"
```

## Parallel Example: User Story 2

```text
Task: "Update Commerce setup user-facing Business copy in apps/commerce/app/setup/page.tsx"
Task: "Verify Commerce context switcher copy in apps/commerce/components/shell/ContextSwitcher.tsx"
Task: "Verify Core context switcher copy in apps/core-platform/components/shell/ContextSwitcher.tsx"
```

## Parallel Example: User Story 3

```text
Task: "Update Core business creation industryType handling in apps/core-platform/lib/store/AppProvider.ts"
Task: "Update Commerce business creation industryType handling in apps/commerce/lib/store/AppProvider.ts"
Task: "Update target architecture docs in docs/implementation/target-architecture-v2-alignment.md"
```

## Parallel Example: User Story 4

```text
Task: "Add business-scoped branch validation helper in packages/shared/src/mock-db/selectors.ts"
Task: "Apply branch validation in Commerce settings in apps/commerce/app/(commerce)/settings/page.tsx"
Task: "Add repeated-branch-name validation steps in specs/047-onboarding-flow-optimization-v2/quickstart.md"
```

---

## Implementation Strategy

### MVP First (US1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete US1 so subscriptions and enablements are separated and handoff remains compatible.
3. Validate the sample workspace/subscription/enablement model.

### Incremental Delivery

1. US1: Establish subscription-to-usage model.
2. US2: Preserve Commerce MVP behavior and user-facing Business terminology.
3. US3: Separate Industry Type from Commerce Preset.
4. US4: Enforce Business-scoped branch naming and filtering.
5. Polish: Run scans, builds, and quickstart.

### Validation Gate

Do not consider the feature complete until typecheck/build checks pass or any failures are documented with exact blocking causes.
