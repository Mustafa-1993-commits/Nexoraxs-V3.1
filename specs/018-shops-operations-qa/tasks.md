# Tasks: Shops Operations QA

**Input**: Design documents from `specs/018-shops-operations-qa/`
**Branch**: `018-shops-operations-qa`
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Research**: [research.md](./research.md)

**Scope**: `apps/shops-app` only. QA/polish only. Fix only confirmed issues. No new packages. No new components.

**Audit findings** (from research.md):
- ✅ **FIX**: Reports bar chart bars render at 0px — `height: X%` inside auto-height wrapper
- ✅ **FIX**: Customer card contact text overflows at 375px — no `truncate` class
- 7 other areas **PASS** — no action needed

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no blocking dependency)
- **[Story]**: User story from spec.md (US1–US5)

---

## Phase 1: Setup

- [X] T001 Update `AGENTS.md` SPECKIT block — set current feature to `018-shops-operations-qa`; update plan and spec paths accordingly

**Checkpoint**: AGENTS.md reflects the active feature.

---

## Phase 2: No Foundational phase

Fixes are independent; no shared blocking prerequisite. Proceed directly to user story phases.

---

## Phase 3: User Story 1 — Routes Render Correctly (Priority: P1) 🎯 MVP

**Goal**: The `/reports` bar chart renders visible bars at correct heights. All five routes load without rendering bugs.

**Independent Test**: Open `/reports`. Inspect the bar chart using browser DevTools — each bar `div` has a computed `height` greater than 0px (e.g., Mon bar ≈ 79px, Fri bar ≈ 162px). The chart is visually readable with 7 bars of varying heights.

- [X] T002 [P] [US1] Fix bar chart in `apps/shops-app/app/(app)/reports/page.tsx` — in the `weekData.map(...)` loop, add `style={{ height: "100%" }}` to the bar wrapper div (`<div className="flex w-full items-end">`), making it `<div className="flex w-full items-end" style={{ height: "100%" }}>`, so the bar's `height: X%` has a definite reference; do not change any other part of the chart, the outer container, the column divs, or the label spans

**Checkpoint**: US1 fix applied — inspect the reports bar chart with DevTools and confirm each bar has a rendered height greater than 0px.

---

## Phase 4: User Story 2 — Mobile Layout at 375px (Priority: P1)

**Goal**: Customer card text (name, contact, last order) truncates rather than overflowing the card boundary at 375px.

**Independent Test**: At 375px viewport, open `/customers`. Each customer card's text column (name, contact, last order) truncates with an ellipsis — no text spills outside the card or pushes the spend/badge column off-screen.

- [X] T003 [P] [US2] Fix customer text truncation in `apps/shops-app/app/(app)/customers/page.tsx` — in the customer info `<div className="min-w-0 flex-1">` section, add `truncate` class to each of the three text divs: `<div className="truncate text-sm font-semibold text-white">`, `<div className="truncate text-xs text-gray-500">`, `<div className="truncate text-xs text-gray-400">`; the `min-w-0` on the parent `flex-1` div is already present and required for `truncate` to work — do not remove it; no structural changes

**Checkpoint**: US2 fix applied — at 375px, customer names and emails truncate with ellipsis.

---

## Phase 5: User Story 3 — Controls Are Visual-Only (Priority: P1)

**Goal**: Confirm by code inspection that all search inputs, filter controls, and action buttons across all five pages are non-functional. No code change expected.

**Independent Test**: Inspect `disabled` attributes and `onClick` absence on all interactive-looking elements in products, orders, customers, reports, settings pages.

- [X] T004 [P] [US3] Inspect all five pages for non-functional controls — read `apps/shops-app/app/(app)/products/page.tsx` (verify `disabled` on search input and "Add product" button), `apps/shops-app/app/(app)/settings/page.tsx` (verify `disabled` on "Save changes" button and "Invite member" button; verify "Edit" chip has no onClick and uses `cursor-not-allowed`; verify Advanced toggles are static `span` elements); mark **PASS — no change needed** if all elements are correctly inert; if any element has an active `onClick` or missing `disabled`, fix it minimally

**Checkpoint**: US3 verified — all interactive-looking elements are correctly non-functional; mark PASS or document fix.

---

## Phase 6: User Story 4 — Mock Data Labelling and Content Quality (Priority: P2)

**Goal**: Confirm mock labels present, no external URLs, badge colours consistent. No code change expected.

**Independent Test**: Grep for localhost/external URLs. Visually confirm mock labels on each page header. Check badge colour maps in products and orders.

- [X] T005 [P] [US4] Inspect all five pages for content quality — run `grep -rn "localhost\|href=\"http\|href='http" apps/shops-app/app/\(app\)/` from repo root (expect zero results); read the header section of each page file and confirm at least one mock indicator (amber mono text or chip label) is present in the JSX; read `statusColor` maps in products and orders pages and confirm: Active→emerald, Low Stock→amber, Paid→emerald, Refund→rose, Pending→amber; read `segmentColor` map in customers page and confirm: VIP→purple, Regular→blue, New→emerald; mark **PASS — no change needed** for each passing check; fix any failure minimally

**Checkpoint**: US4 verified — zero external URLs, all pages have mock labels, badge colours consistent; mark PASS or document fix.

---

## Phase 7: User Story 5 — Sidebar Active States and Topbar (Priority: P2)

**Goal**: Confirm sidebar active state logic covers all five routes. Confirm Topbar is unchanged and responsive. No code change expected.

**Independent Test**: Read Sidebar nav item hrefs and confirm they match the five route paths. Read Topbar to confirm branch reads from sessionStorage and is unchanged.

- [X] T006 [P] [US5] Inspect `apps/shops-app/components/dashboard/Sidebar.tsx` — read the `operations` array and confirm it contains entries for `/dashboard`, `/products`, `/orders`, `/customers`, `/reports`; read the `configure` array and confirm it contains `/settings`; confirm `isActive = pathname === item.href` is the active state logic; confirm all nav items use `onClick={() => setIsOpen(false)}` so the mobile sidebar closes on navigation; mark **PASS — no change needed** if correct; also inspect `apps/shops-app/components/dashboard/Topbar.tsx` — confirm `branch` is read via `useSyncExternalStore` + `getBranch()` (from Fix #2 of 016-onboarding-flow-qa) and is not hardcoded "Maadi Main"; mark PASS or fix if regression found

**Checkpoint**: US5 verified — sidebar active state correct for all 5 routes; Topbar reads branch dynamically; mark PASS or document fix.

---

## Phase 8: Build Gate

**Purpose**: Confirm zero errors after both fixes. Run lint, tsc, and build sequentially.

- [X] T007 Run `pnpm lint` in `apps/shops-app` — fix all errors
- [X] T008 Run `pnpm tsc --noEmit` in `apps/shops-app` — must exit 0
- [X] T009 Run `pnpm --filter shops-app build` — must exit 0; confirm `/products`, `/orders`, `/customers`, `/reports`, `/settings` all appear in build output

---

## Dependencies & Execution Order

### Phase Dependencies

```
T001 (AGENTS.md)       → no deps
T002 (bar chart fix)   → [P] with T003–T006 (different files)
T003 (truncation fix)  → [P] with T002, T004–T006 (different files)
T004 (controls verify) → [P] with T002, T003 (inspection only)
T005 (labels verify)   → [P] with T002, T003 (inspection only)
T006 (sidebar verify)  → [P] with T002, T003 (inspection only)
T007 (lint)            → depends on T002 + T003 complete
T008 (tsc)             → [P] with T007 (can run alongside)
T009 (build)           → depends on T007 + T008 both passing
```

### Parallel Opportunities

```
T001

T002 ─┐
T003 ─┤
T004 ─┤  (all fully parallel — different files / inspection only)
T005 ─┤
T006 ─┘

→ T007 + T008 (parallel) → T009
```

### Fastest Sequential Order

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 → T008 → T009
```

---

## Implementation Strategy

### MVP First (US1 + US2 — the two confirmed fixes)

1. T001 (AGENTS.md)
2. T002 (bar chart fix) + T003 (truncation fix) — parallel
3. **STOP and VALIDATE**: Open `/reports` with DevTools — bars have height > 0. Open `/customers` at 375px — text truncates.
4. T004 + T005 + T006 (inspections) — parallel
5. T007 + T008 (parallel) → T009

### Verification-First Approach

For T004, T005, T006 — read the code before writing any fix. If the code matches the expected behaviour, mark PASS immediately with no code change. Only write a fix when a discrepancy is confirmed.

---

## Notes

- T002: The `style={{ height: "100%" }}` addition must go on the **bar wrapper** div (`<div className="flex w-full items-end">`), not on the outer column div or the bar itself. Position within the JSX: it is the direct parent of the blue bar `div`.
- T003: The `truncate` class requires the parent to have `min-w-0` to work inside flexbox. The parent already has `min-w-0 flex-1` — do not remove it.
- T004–T006: These are inspection tasks. If everything passes, mark as `[x]` immediately without writing any code.
- T007+T008: Run both in parallel — lint checks style/imports, tsc checks types. Both must pass before T009.
- T009: The build output should list all five routes. If any is missing, investigate the corresponding page file for a syntax or import error.
