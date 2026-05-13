# Tasks: Core Platform UI QA

**Input**: Design documents from `specs/009-core-platform-ui-qa/`
**Branch**: `009-core-platform-ui-qa`
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Research**: [research.md](./research.md)

**Scope**: `apps/core-platform` only — visual QA and polish, no backend, no new packages.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (touches different files, no blocking dependency)
- **[Story]**: User story this task belongs to (US1–US4)

---

## Phase 1: Setup

**Purpose**: Confirm working baseline before any changes are made.

- [x] T001 Confirm `AGENTS.md` active feature marker reads `009-core-platform-ui-qa` between `<!-- SPECKIT START -->` and `<!-- SPECKIT END -->` at line ~446
- [x] T002 Start dev server (`pnpm dev` in `apps/core-platform`) and manually open all five routes — `/workspaces`, `/dashboard`, `/dashboard/apps`, `/dashboard/billing`, `/dashboard/settings` — confirming each renders without console errors

**Checkpoint**: Dev server is running and all routes are confirmed reachable.

---

## Phase 2: Foundational (No Blocking Prerequisites)

This feature has no foundational infrastructure tasks — all five routes and their
components already exist. User story phases can begin immediately after Setup.

---

## Phase 3: User Story 1 — Workspaces Background (Priority: P1) 🎯 MVP

**Goal**: Remove the full-page glow blobs from `/workspaces` so its background
visually matches the plain dark background of `/dashboard`.

**Independent Test**: Open `/workspaces` at 100% zoom. No blue, purple, or cyan
ambient glow is visible in the background. Navigate to `/dashboard` — the
background colour and ambient feel look identical.

- [x] T003 [US1] Remove the three glow-blob `<div>` elements (blue -left-40/-top-40, purple -right-40/top-1/4, cyan -bottom-40/left-1/3) from `apps/core-platform/app/workspaces/page.tsx`
- [x] T004 [US1] Visually verify `/workspaces` background matches `/dashboard` — no ambient colour bleed, no artefacts, background is uniform `#0a0a0f` at 375 px, 768 px, and 1280 px

**Checkpoint**: User Story 1 is independently testable — background is now consistent.

---

## Phase 4: User Story 2 — Mobile Sidebar Polish (Priority: P1)

**Goal**: Confirm the mobile sidebar opens/closes correctly, does not overflow,
and auto-dismisses on navigation. Fix any issues found.

**Independent Test**: Resize to 375 px. Tap hamburger → sidebar slides in and
backdrop appears. Tap a nav link → sidebar closes and correct page loads. Tap
backdrop → sidebar closes without navigating. Topbar has no horizontal overflow.

- [x] T005 [P] [US2] Audit `apps/core-platform/components/dashboard/Sidebar.tsx` at 375 px: confirm hamburger button (`fixed left-4 top-3.5 z-40`) is visible and not obscured by topbar content; fix z-index or positioning if overlap detected
- [x] T006 [P] [US2] Audit `apps/core-platform/components/dashboard/Topbar.tsx` at 375 px: confirm `pl-16` left-padding gives enough clearance for the hamburger icon; increase to `pl-20` if the workspace switcher button touches or overlaps the hamburger
- [x] T007 [US2] Verify in `Sidebar.tsx` that tapping any nav link calls `setIsOpen(false)` (already wired via `onClick={() => setIsOpen(false)}` on each `<Link>`) — open the sidebar on mobile, tap "Billing", confirm sidebar closes before `/dashboard/billing` renders
- [x] T008 [US2] Verify the backdrop `<div>` in `Sidebar.tsx` covers the full screen at 375 px with no gaps and closes the sidebar on tap; confirm `bg-black/60` opacity is perceptible but not fully opaque

**Checkpoint**: Mobile sidebar opens, closes, and auto-dismisses correctly at 375 px.

---

## Phase 5: User Story 3 — Navigation Active States (Priority: P2)

**Goal**: Confirm the active sidebar link exactly matches the current route on
every `/dashboard/**` page. Fix any discrepancy found.

**Independent Test**: Visit `/dashboard`, `/dashboard/apps`, `/dashboard/billing`,
`/dashboard/settings` in sequence. On each page exactly one sidebar link has the
`nav-item-active` gradient + left-border style. Use browser back/forward — the
active indicator follows the URL correctly.

- [x] T009 [P] [US3] Verify `apps/core-platform/components/dashboard/Sidebar.tsx` active-state logic (`pathname === item.href`) produces the correct highlight for all four routes defined in `apps/core-platform/lib/mock-data/nav-items.ts` (`/dashboard`, `/dashboard/apps`, `/dashboard/billing`, `/dashboard/settings`)
- [x] T010 [P] [US3] Verify `apps/core-platform/components/dashboard/Topbar.tsx` `titles` map returns the correct page title for all four routes; confirm fallback value `"Dashboard"` does not appear on any named route
- [x] T011 [US3] Check browser history navigation (back/forward) keeps sidebar active state in sync — Next.js `usePathname` is reactive so this should work; confirm no stale state

**Checkpoint**: Every route shows the correct and only the correct active nav item.

---

## Phase 6: User Story 4 — Responsive Layout Audit (Priority: P2)

**Goal**: Confirm all five routes render without horizontal overflow, clipped
content, or misaligned elements at 375 px, 768 px, and 1280 px. Fix issues found.

**Independent Test**: DevTools device emulation at each width. No horizontal
scrollbar visible on any page. All interactive elements are reachable by tap/click.

- [x] T012 [P] [US4] Responsive audit `apps/core-platform/app/workspaces/page.tsx` at 375 px / 768 px / 1280 px — check workspace cards, "Continue" button, "New workspace" button, header, and footer; fix any overflow or mis-alignment
- [x] T013 [P] [US4] Responsive audit `apps/core-platform/app/dashboard/page.tsx` at 375 px / 768 px / 1280 px — check metric cards grid (`sm:grid-cols-2 lg:grid-cols-4`), activity feed, and topbar; fix any overflow
- [x] T014 [P] [US4] Responsive audit `apps/core-platform/app/dashboard/apps/page.tsx` at 375 px / 768 px / 1280 px — check app card grid (`sm:grid-cols-2 lg:grid-cols-3`); fix any overflow
- [x] T015 [P] [US4] Responsive audit `apps/core-platform/app/dashboard/billing/page.tsx` at 375 px / 768 px / 1280 px — check plan card + payment card (`lg:grid-cols-3`), button row wrapping, and invoice empty state; fix any overflow
- [x] T016 [P] [US4] Responsive audit `apps/core-platform/app/dashboard/settings/page.tsx` at 375 px / 768 px / 1280 px — check tab nav + content two-column layout (`lg:grid-cols-[220px_1fr]`) stacks correctly on mobile; fix any overflow

**Checkpoint**: All five routes pass the no-overflow / all-content-reachable bar at all three widths.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency pass and quality gate.

- [x] T017 Cross-route visual consistency pass: open all five routes in sequence and confirm typography, spacing, card style, and button style are uniform — no leftover inconsistencies introduced during earlier tasks
- [x] T018 [P] Run `pnpm lint` in `apps/core-platform` — zero errors required before PR
- [x] T019 [P] Run TypeScript check (`pnpm tsc --noEmit`) in `apps/core-platform` — zero errors required before PR

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phases 3–6 (User Stories)**: Depend only on Phase 1 (dev server running)
  - All four user story phases can proceed in priority order or in parallel
- **Phase 7 (Polish)**: Depends on all user story phases being complete

### User Story Dependencies

- **US1 (P1)**: Independent — touches only `app/workspaces/page.tsx`
- **US2 (P1)**: Independent — touches `Sidebar.tsx` and `Topbar.tsx`
- **US3 (P2)**: Independent — read-only audit of `Sidebar.tsx` and `Topbar.tsx` (no conflicts with US2 if edits are separate)
- **US4 (P2)**: Independent — audits individual page files; no shared file conflicts

### Parallel Opportunities

```
Phase 1 complete → all four story phases can proceed

US1:  T003 → T004
US2:  T005, T006 (parallel) → T007 → T008
US3:  T009, T010 (parallel) → T011
US4:  T012, T013, T014, T015, T016 (all parallel)

Phase 7: T017 → T018, T019 (parallel)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (Setup — T001, T002)
2. Complete Phase 3 (US1 — T003, T004)
3. **STOP and VALIDATE**: Background on `/workspaces` matches `/dashboard`
4. This alone resolves the primary visual inconsistency flagged in the spec

### Incremental Delivery

1. Phase 1 + US1 → Core background fix complete (MVP)
2. + US2 → Mobile sidebar confirmed polished
3. + US3 → Active states confirmed correct across all routes
4. + US4 → Full responsive audit complete
5. Phase 7 → Lint + typecheck clean; ready for PR

### Single-Developer Sequential Order

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 → T008 →
T009 → T010 → T011 → T012 → T013 → T014 → T015 → T016 →
T017 → T018 → T019
```

---

## Notes

- Most tasks are audit-and-fix: investigate the current state first, then apply
  the minimal fix needed. Do not refactor beyond what the spec requires.
- [P] tasks touch different files and have no blocking interdependency — they
  can be executed simultaneously if two sessions are available.
- Commit after each user story phase checkpoint.
- No new packages may be introduced. No changes outside `apps/core-platform`.
