# Tasks: Platform-to-Shops Flow

**Input**: Design documents from `specs/013-platform-to-shops-flow/`
**Branch**: `013-platform-to-shops-flow`
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Research**: [research.md](./research.md) | **Contracts**: [contracts/app-card.md](./contracts/app-card.md)

**Scope**: `apps/core-platform` and `apps/shops-app`. UI-only. No new packages. No cross-app imports. All inter-app links use `href="#"`.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no blocking dependency)
- **[Story]**: User story from spec.md (US1–US5)

---

## Phase 1: Setup

**Purpose**: AGENTS.md update — no code dependencies, run first.

- [x] T001 Update `AGENTS.md` SPECKIT block — set current feature to `013-platform-to-shops-flow`; update plan and spec paths accordingly

**Checkpoint**: AGENTS.md reflects the active feature.

---

## Phase 2: Foundational — App Interface Extension (Core Platform)

**Purpose**: The `App` interface extension in `apps.ts` is a prerequisite for both
T003 (AppCard rendering) and indirectly for the Shops card data. Must complete before
any AppCard or Shops card task.

- [x] T002 Extend `apps/core-platform/lib/mock-data/apps.ts` — add `buttonLabel?: string` and `subtitle?: string` to the `App` interface; update the Shops entry to include `buttonLabel: "Open Shops"` and `subtitle: "Business management · POS · Commerce"`; leave all other entries unchanged

**Checkpoint**: TypeScript compiles cleanly after the interface change.

---

## Phase 3: User Story 1 — "Open Shops" on App Launcher (Priority: P1) 🎯 MVP

**Goal**: The Shops card on Core Platform `/dashboard/apps` shows "Open Shops" button
and a subtitle chip, visually distinguishing it from Coming Soon cards.

**Independent Test**: Open Core Platform `/dashboard/apps`. The Shops card shows
"Open Shops" (not "Open") and a subtitle chip "Business management · POS · Commerce".
Clicking the button produces no navigation error.

- [x] T003 [US1] Update `apps/core-platform/components/dashboard/AppCard.tsx` — read `buttonLabel` and `subtitle` from the `App` prop type (already extended in T002); render `subtitle` as `<span className="chip mt-2 block text-white/40">{subtitle}</span>` between the description and the action area (only when `subtitle` is set); render `buttonLabel ?? "Open"` as the available button text; keep all existing Coming Soon and disabled-state logic unchanged

**Checkpoint**: US1 complete — Shops card shows "Open Shops" + subtitle; other cards unchanged.

---

## Phase 4: User Story 2 — "Enabled Apps" on Core Platform Dashboard (Priority: P2)

**Goal**: Core Platform `/dashboard` shows a small "Enabled apps" card listing Shops
as active, positioned between the metric grid and the activity feed.

**Independent Test**: Open Core Platform `/dashboard`. Below the 4 metric cards and
above the activity feed, a new card titled "Enabled apps" (with `// enabled apps`
chip) shows Shops with an active/green indicator. The section is clearly mock.

- [x] T004 [US2] Update `apps/core-platform/app/dashboard/page.tsx` — add an "Enabled apps" `.card mt-6 p-6` section between the metric grid and the activity feed card; the card contains: a `chip mb-1 text-white/30` label `{"// enabled apps"}`, an `h2` "Active in this workspace", and one row showing the Shops app with a shopping-bag icon, "NexoraXS Shops" name, "Commerce & POS" sub-label, and an emerald `Active` badge; all content is static mock data; no imports from shops-app

**Checkpoint**: US2 complete — "Enabled apps" card visible on `/dashboard`.

---

## Phase 5: User Story 3 — "Back to Platform" in Shops Sidebar (Priority: P1)

**Goal**: The Shops app sidebar header shows a clearly labelled "Back to Platform"
link — not just an icon with a tooltip.

**Independent Test**: Open Shops app `/dashboard`. The sidebar header shows the
back chevron icon AND a visible text label "Back to Platform". Clicking uses
`href="#"` — no error. Visible on both desktop and mobile drawer.

- [x] T005 [US3] Update `apps/shops-app/components/dashboard/Sidebar.tsx` — expand the existing `<a href="#">` back link from an icon-only button to include a visible label: change the content to `<Icon name="chevron-left" className="h-4 w-4 flex-shrink-0" />` + `<span className="text-xs text-gray-400">Back to Platform</span>`; update the `<a>` className to `flex items-center gap-1.5 ...` (add flex layout); remove the now-redundant `title` tooltip (the label makes it self-describing); keep `aria-label="Back to platform"` for screen readers; keep `href="#"`

**Checkpoint**: US3 complete — visible "Back to Platform" label in sidebar header.

---

## Phase 6: User Story 4 — Consistent Naming Across Both Apps (Priority: P2)

**Goal**: "Mustafa's Co." appears in both topbars. Shops branch reads "Maadi Main"
(no interpunct).

**Independent Test**: Core Platform topbar → "Mustafa's Co." ✓ (already set).
Shops app topbar store selector → "Mustafa's Co." ✓ (already set). Branch selector
→ "Maadi Main" (no · separator).

- [x] T006 [P] [US4] Update `apps/shops-app/components/dashboard/Topbar.tsx` — change branch label from `"Maadi · Main"` to `"Maadi Main"` (remove the interpunct `·` and surrounding spaces); confirm store label still reads `"Mustafa&apos;s Co."` — no change needed there

**Checkpoint**: US4 complete — naming consistent; branch label clean.

---

## Phase 7: User Story 5 — No Hardcoded localhost URLs (Priority: P2)

**Goal**: Both apps are confirmed free of `localhost` strings. Onboarding page has
no back link with a hardcoded URL.

**Independent Test**: `grep -r "localhost" apps/core-platform/app apps/core-platform/components apps/shops-app/app apps/shops-app/components` returns zero results.

- [x] T007 [P] [US5] Run `grep -rn "localhost" apps/core-platform/app apps/core-platform/components apps/core-platform/lib apps/shops-app/app apps/shops-app/components apps/shops-app/lib` from repo root — if zero results, mark PASS; if any found, remove or replace with `href="#"`
- [x] T008 [P] [US5] Inspect `apps/shops-app/app/onboarding/page.tsx` — confirm footer links (Documentation, Support) use `href="#"` and no back/return navigation element uses a hardcoded URL; no change expected (confirmed clean in 012 QA)

**Checkpoint**: US5 complete — zero localhost URLs in both apps.

---

## Phase 8: Polish & Build Gate

**Purpose**: Lint both apps, run both production builds.

- [x] T009 Run `pnpm lint` in `apps/core-platform` — fix all errors
- [x] T010 [P] Run `pnpm lint` in `apps/shops-app` — fix all errors
- [x] T011 Run `pnpm --filter core-platform build` — must exit 0
- [x] T012 [P] Run `pnpm --filter shops-app build` — must exit 0

---

## Dependencies & Execution Order

### Phase Dependencies

```
T001 (AGENTS.md)       → no deps
T002 (App interface)   → no deps; blocks T003
T003 (AppCard)         → depends on T002
T004 (Dashboard card)  → no deps on T002/T003 (separate file)
T005 (Sidebar)         → no deps
T006 (Topbar)          → no deps; parallel with T005
T007, T008 (localhost) → no deps; parallel with everything

T009, T010 (lint)      → depend on T003–T008 all complete
T011, T012 (build)     → depend on T009/T010 (lint first)
```

### Parallel Opportunities

```
T001 ─┐
T002 ─┤→ T003           (Core Platform AppCard chain)
T004 ─┘                 (Core Platform dashboard, independent)

T005 ─┐
T006 ─┤                 (Shops sidebar + topbar, independent of core-platform)
T007 ─┤
T008 ─┘

After all above → T009 + T010 (parallel) → T011 + T012 (parallel)
```

### Fastest Sequential Order

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 → T008 → T009 → T010 → T011 → T012
```

---

## Implementation Strategy

### MVP First (US1 + US3 — the primary visual flow)

1. T001 (AGENTS.md)
2. T002 (App interface extension)
3. T003 (AppCard — "Open Shops" button + subtitle)
4. T005 (Sidebar — "Back to Platform" label)
5. **STOP and VALIDATE**: The Core Platform → Shops → Back to Platform visual loop is now representable
6. Continue with T004, T006–T008, then build gates

### Incremental Delivery

1. T001 + T002 + T003 → App Launcher polished
2. + T004 → Dashboard Enabled Apps visible
3. + T005 + T006 → Shops sidebar + topbar polished
4. + T007 + T008 → Quality gate (no localhost)
5. T009–T012 → Both builds pass, feature complete

---

## Notes

- T002 is a TypeScript interface change — run `pnpm tsc --noEmit` in `apps/core-platform` immediately after T002 to catch type errors before proceeding to T003
- T004 uses a shopping-bag icon from `@/components/ui/Icon` — confirm `"shopping-bag"` is in the core-platform `IconName` union before writing the JSX; if not, use a generic icon already in the set (e.g. `"apps"`)
- T005: after expanding the `<a>` to include text, ensure the sidebar header `div` height (`h-16`) still accommodates the wider content — the flex layout should handle it but verify
- T006 is a one-character change ("Maadi · Main" → "Maadi Main") — mark PASS immediately if already correct
- T007/T008 are inspection tasks — if nothing found, mark PASS with no code change
