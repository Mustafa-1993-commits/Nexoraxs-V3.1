# Tasks: Shops App UI QA

**Branch**: `012-shops-app-ui-qa`
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

**Rule**: Inspect first, fix only if a confirmed issue exists. Mark each task
`[x]` with either `PASS` (no change needed) or `FIXED: <what changed>`.

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no blocking dependency)

---

## Phase 1: AGENTS.md Update

- [x] T001 Update `AGENTS.md` SPECKIT block — set current feature to `012-shops-app-ui-qa`; update plan and spec paths accordingly

**Checkpoint**: AGENTS.md reflects the active feature.

---

## Phase 2: Entry Flow Inspection (US1)

- [x] T002 Inspect `apps/shops-app/app/page.tsx` — confirm it contains only a `redirect("/onboarding")` with no client code; confirm no visual flash is possible from the redirect mechanism
- [x] T003 Inspect `apps/shops-app/app/onboarding/page.tsx` — confirm "Continue →" button calls `router.push("/dashboard")` and `setMode(selected)` before navigation; confirm no external `href` values are present (all must be `href="#"` or internal Next.js routes); fix any found

---

## Phase 3: Sidebar Active State Inspection (US2)

- [x] T004 Inspect `apps/shops-app/components/dashboard/Sidebar.tsx` — confirm `usePathname() === item.href` is used for active detection; confirm navItems array includes all six routes: `/dashboard`, `/products`, `/orders`, `/customers`, `/reports`, `/settings`; fix any mismatch
- [x] T005 Visual verify (read Sidebar code) — confirm `nav-item-active` CSS class is applied to the matching link and not to any other; confirm class is not applied globally or by mistake to non-matching items

---

## Phase 4: Mobile Sidebar Inspection (US3)

- [x] T006 Inspect `apps/shops-app/components/dashboard/Sidebar.tsx` — confirm hamburger button is `fixed left-4 top-3.5 z-40` and hidden on `md:` and above; confirm backdrop `div` closes sidebar on click; confirm each `<Link>` has `onClick={() => setIsOpen(false)}`; fix any missing handler
- [x] T007 [P] Inspect `apps/shops-app/components/dashboard/Topbar.tsx` — confirm `pl-16 md:pl-6` (or equivalent) prevents the store pill from being obscured by the hamburger at 375 px; confirm no element causes horizontal overflow on mobile (check for fixed-width elements that could overflow); fix any found

---

## Phase 5: Dashboard Layout Overflow Inspection (US4)

- [x] T008 Inspect `apps/shops-app/app/(app)/dashboard/page.tsx` — scan all grid and flex containers for fixed widths that could overflow at 375 px; confirm orders table wrapper has `overflow-x-auto`; confirm stat card grid uses `sm:grid-cols-2 lg:grid-cols-4` (collapses to 1 column on mobile); confirm quick actions bar uses `flex-wrap`; fix any found
- [x] T009 [P] Inspect `apps/shops-app/app/(app)/layout.tsx` — confirm `md:ml-[260px]` matches the sidebar width exactly; confirm `main` element uses `overflow-y-auto` and no element produces page-level horizontal scroll; fix any found

---

## Phase 6: Mock Data Labels and Links Inspection (US5)

- [x] T010 Inspect `apps/shops-app/app/(app)/dashboard/page.tsx` — text search for "live data", "real-time", "live"; confirm the date sub-label reads "mock data" not "live data"; confirm breadcrumb links use `href="#"`; confirm "View all", "View report" links use `href="#"`; fix any found
- [x] T011 [P] Inspect `apps/shops-app/app/onboarding/page.tsx` — text search for external href values; confirm Documentation and Support footer links use `href="#"` (not real URLs); fix any found
- [x] T012 [P] Inspect `apps/shops-app/components/dashboard/Sidebar.tsx` — confirm "Back to platform" link uses `href="#"`; confirm POS card has no `onClick` or `href` that triggers real navigation

---

## Phase 7: Placeholder Page Consistency Inspection (US5)

- [x] T013 [P] Read all five placeholder pages (`/products`, `/orders`, `/customers`, `/reports`, `/settings`) — confirm each uses `<PlaceholderPage />` from `@/components/dashboard/PlaceholderPage`; confirm each follows the same `chip + h1 + p + <PlaceholderPage />` structure; fix any inconsistency
- [x] T014 [P] Inspect `apps/shops-app/components/dashboard/PlaceholderPage.tsx` — confirm "Foundation release" badge text is present; confirm no "live data" or claim of real data; confirm icon renders via `<Icon />` component (no emoji fallback)

---

## Phase 8: Build Gate

- [x] T015 Run `pnpm lint` in `apps/shops-app` — fix all errors before proceeding
- [x] T016 Run `pnpm --filter shops-app build` — must exit 0; this is the hard success criterion (SC-004)

---

## Dependencies & Execution Order

```
T001 (AGENTS.md) → no deps, run first

T002, T003                   → US1 entry flow
T004, T005                   → US2 sidebar active states
T006, T007 (parallel)        → US3 mobile sidebar + topbar
T008, T009 (parallel)        → US4 dashboard overflow
T010, T011, T012 (parallel)  → US5 mock labels
T013, T014 (parallel)        → US5 placeholder consistency

T015 → T016 (lint then build)
```

All inspection phases (T002–T014) can be run in any order or in parallel — they read
different files. Only the build phase (T015–T016) must come last.

---

## Implementation Strategy

### Fix-First Principle

For every task:
1. Read the relevant file(s)
2. If no issue found → mark `[x] PASS`
3. If issue found → make the minimal fix → re-read to confirm → mark `[x] FIXED: <description>`

### Expected findings from code review (pre-inspection)

Based on reading the 011 implementation:
- T003: Footer links in onboarding may still use `href="#"` — likely PASS
- T010: "mock data" label was applied in the dashboard rewrite — likely PASS
- T012: POS card and back link use `href="#"` — likely PASS
- T008: `overflow-x-auto` on the orders table wrapper needs verification
- T013: All 5 pages use `PlaceholderPage` — likely PASS

### Known risk

The orders table (`<table>`) in `dashboard/page.tsx` may not have an explicit
`overflow-x-auto` wrapper. That is the most likely fix needed in this QA pass.

---

## Notes

- Do not refactor beyond what a fix requires
- Do not add comments unless they document a non-obvious fix
- Commit after the build gate passes
- If a task is PASS with no code change, note it as `PASS` in the task checkbox
