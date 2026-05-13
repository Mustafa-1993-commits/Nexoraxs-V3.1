# Tasks: Shops App Foundation

**Input**: Design documents from `specs/010-shops-app-foundation/`
**Branch**: `010-shops-app-foundation`
**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Research**: [research.md](./research.md) | **Contracts**: [contracts/routes.md](./contracts/routes.md)

**Scope**: `apps/shops-app` only — new UI shell from bare Next.js scaffold. No backend, no new packages.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (touches different files, no blocking dependency)
- **[Story]**: User story this task belongs to (US1–US4)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Replace the bare scaffold with the NexoraXS dark SaaS foundation that all user stories depend on.

- [x] T001 Rewrite `apps/shops-app/app/globals.css` — replace default scaffold styles with NexoraXS dark SaaS tokens: `body { background: #0a0a0f; color: #e5e7eb; }`, Geist font variables, `.gradient-text`, `.card`, `.card-hover`, `.btn-primary`, `.chip`, `.nav-item`, `.nav-item-active`, custom webkit scrollbar
- [x] T002 Update `apps/shops-app/app/layout.tsx` — set metadata title to "NexoraXS Shops", import Geist Sans + Geist Mono from `next/font/google`, apply font CSS variables to `<html>`, set `body` to `min-h-full antialiased bg-[#0a0a0f] text-white`
- [x] T003 Create `apps/shops-app/lib/mode.ts` — typed `sessionStorage` wrapper: export `type ShopsMode = "business" | "store" | "both"`, `setMode(mode: ShopsMode): void`, `getMode(): ShopsMode | null`, `clearMode(): void`

**Checkpoint**: Dark background and font load correctly. `lib/mode.ts` compiles without errors.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the shared layout shell — Sidebar and Topbar — that all dashboard-section user stories require.

- [x] T004 Create `apps/shops-app/components/layout/Sidebar.tsx` — client component; fixed 64-wide desktop sidebar (`md:translate-x-0`); hamburger button (`fixed left-4 top-3.5 z-40 md:hidden`); slide-in mobile drawer with backdrop; nav links array `[{label, href, icon}]` for Dashboard/Products/Orders/Customers/Reports/Settings; active state via `usePathname() === href` applying `nav-item-active` class; auto-close on link tap; NexoraXS Shops logo/wordmark in header; "NexoraXS Shops" beta card at bottom
- [x] T005 Create `apps/shops-app/components/layout/Topbar.tsx` — sticky topbar `h-16 border-b border-white/5 bg-[#0a0a0f]/85 backdrop-blur-xl`; `pl-16 md:px-6` left padding for mobile hamburger clearance; workspace/app label "NexoraXS Shops" on left; search input hidden on mobile (`hidden md:flex`); user pill "MA / Owner" on right
- [x] T006 Create route group directory `apps/shops-app/app/(app)/` and `apps/shops-app/app/(app)/layout.tsx` — renders `<Sidebar />` and `<Topbar />` wrapping `{children}` with `flex min-h-screen bg-[#0a0a0f]` and `md:ml-64` main content offset

**Checkpoint**: Navigate to `/dashboard` (even before dashboard page exists) — sidebar and topbar render, hamburger works on mobile, active state highlights correctly.

---

## Phase 3: User Story 1 — Root Redirect (Priority: P1) 🎯 MVP

**Goal**: Eliminate the Next.js default page; root `/` immediately sends users to `/onboarding`.

**Independent Test**: Open the Shops app at `/`. The browser URL changes to `/onboarding` without any intermediate content visible from `/`.

- [x] T007 [US1] Replace `apps/shops-app/app/page.tsx` — remove all default scaffold JSX; add `import { redirect } from "next/navigation"` and `export default function Home() { redirect("/onboarding"); }` (server component, no `"use client"`)

**Checkpoint**: US1 complete — root redirects to `/onboarding` in one page load.

---

## Phase 4: User Story 2 — Onboarding Mode Selection (Priority: P1)

**Goal**: Deliver the 3-mode onboarding page; user selects a mode and navigates to `/dashboard`.

**Independent Test**: Open `/onboarding`. Three mode cards visible. Select one → active state shows. Click confirm → browser goes to `/dashboard`. Refresh `/onboarding` with no prior selection → confirm button is disabled.

- [x] T008 [US2] Create `apps/shops-app/components/onboarding/ModeCard.tsx` — client component props: `mode: ShopsMode`, `title: string`, `description: string`, `selected: boolean`, `onSelect: (mode: ShopsMode) => void`; renders a button with border highlight when `selected`; icon optional; dark SaaS card style matching `.card` class
- [x] T009 [US2] Create `apps/shops-app/app/onboarding/page.tsx` — `"use client"` page; `useState<ShopsMode | null>(null)` for selection; render page header with NexoraXS Shops logo/wordmark and tagline; render three `<ModeCard>` instances for "Business Management" / "Online Store" / "Both" with their descriptions from the spec Assumptions; "Continue →" button disabled when `selected === null`, calls `setMode(selected)` then `router.push("/dashboard")` on click; support link footer

**Checkpoint**: US2 complete — full onboarding flow works end-to-end.

---

## Phase 5: User Story 3 — Dashboard with Mode Context (Priority: P1)

**Goal**: Dashboard shows the selected mode name and a "getting started" area. Renders gracefully when no mode is stored.

**Independent Test**: Complete onboarding with "Online Store" → confirm → dashboard body shows "Online Store" prominently. Open `/dashboard` directly without onboarding → page renders without errors, shows neutral fallback state.

- [x] T010 [US3] Create `apps/shops-app/app/(app)/dashboard/page.tsx` — server-compatible wrapper that reads mode via `getMode()` from `lib/mode.ts`; display mode name in a `gradient-text` heading or chip; show "Getting Started" section with 3-4 placeholder next-step cards (e.g. "Add your first product", "Configure your store"); show a neutral "Complete onboarding to get started" prompt when `getMode()` returns null; no fake tables or order lists

**Checkpoint**: US3 complete — dashboard renders correctly with and without a stored mode.

---

## Phase 6: User Story 4 — Section Placeholder Pages (Priority: P2)

**Goal**: All five section routes render with correct heading and placeholder body. Active sidebar link matches the current route on every page.

**Independent Test**: Navigate to `/products`, `/orders`, `/customers`, `/reports`, `/settings` via the sidebar. Each page loads with the correct section title. The sidebar active link matches. No 404s, no blank pages.

- [x] T011 [P] [US4] Create `apps/shops-app/app/(app)/products/page.tsx` — section heading "Products", `chip` label `// products`, placeholder body with "Coming soon" card explaining feature
- [x] T012 [P] [US4] Create `apps/shops-app/app/(app)/orders/page.tsx` — section heading "Orders", `chip` label `// orders`, placeholder body with "Coming soon" card
- [x] T013 [P] [US4] Create `apps/shops-app/app/(app)/customers/page.tsx` — section heading "Customers", `chip` label `// customers`, placeholder body with "Coming soon" card
- [x] T014 [P] [US4] Create `apps/shops-app/app/(app)/reports/page.tsx` — section heading "Reports", `chip` label `// reports`, placeholder body with "Coming soon" card
- [x] T015 [P] [US4] Create `apps/shops-app/app/(app)/settings/page.tsx` — section heading "Settings", `chip` label `// settings`, placeholder body with "Coming soon" card

**Checkpoint**: US4 complete — all six sidebar routes render. Active states match on each.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Responsive verification, lint, typecheck, and visual consistency pass.

- [x] T016 Responsive audit — open all 8 routes at 375 px, 768 px, 1280 px; confirm no horizontal overflow, sidebar drawer works on mobile, topbar does not overflow; fix any issues in `Sidebar.tsx`, `Topbar.tsx`, or page files
- [x] T017 [P] Run `pnpm lint` in `apps/shops-app` — zero errors required
- [x] T018 [P] Run `pnpm tsc --noEmit` in `apps/shops-app` — zero TypeScript errors required
- [x] T019 Update `AGENTS.md` SPECKIT marker — already done in plan phase; verify `<!-- SPECKIT START -->` block reads `010-shops-app-foundation`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (Foundational)**: Depends on Phase 1 (globals.css + layout.tsx must exist)
- **Phases 3–6 (User Stories)**: Depends on Phase 2 (Sidebar + Topbar + route group layout)
  - US1 (T007) and US2 (T008–T009) can proceed in parallel after Phase 2
  - US3 (T010) depends on US2 completing (mode must be settable)
  - US4 (T011–T015) depends on Phase 2 only — independent of US1/US2/US3
- **Phase 7 (Polish)**: Depends on all user story phases

### User Story Dependencies

- **US1 (P1)**: Independent of US2/US3/US4 — single file replacement
- **US2 (P1)**: Independent of US1/US3/US4 — needs Phase 2 layout only
- **US3 (P1)**: Reads mode written by US2 — depends on US2 completing
- **US4 (P2)**: Depends on Phase 2 (route group layout) — independent of US1/US2/US3

### Parallel Opportunities

```
Phase 1: T001, T002, T003 (all touch different files — run in parallel)

Phase 2: T004, T005 in parallel → T006 depends on both
  T004 ─┐
        ├─→ T006
  T005 ─┘

After Phase 2:
  T007 (US1) ─── independent, single task
  T008 (US2) ─→ T009 (US2) ─→ T010 (US3)
  T011–T015 (US4) ─── all 5 in parallel (separate files)

Phase 7: T017, T018 in parallel → T016 before both
```

---

## Implementation Strategy

### MVP First (US1 + US2 + US3 — the core onboarding loop)

1. Complete Phase 1 (T001–T003) — dark scaffold
2. Complete Phase 2 (T004–T006) — layout shell
3. Complete Phase 3 (T007) — root redirect
4. Complete Phase 4 (T008–T009) — onboarding page
5. Complete Phase 5 (T010) — dashboard
6. **STOP and VALIDATE**: Full onboarding loop works end-to-end
7. This delivers a working, branded app shell users can navigate

### Incremental Delivery

1. Phase 1 + Phase 2 → Dark scaffold + layout shell
2. + US1 → Root redirect
3. + US2 → Onboarding with mode selection
4. + US3 → Mode-aware dashboard
5. + US4 → All 6 sidebar pages work
6. Phase 7 → Lint + typecheck + responsive verification; PR ready

### Fastest Sequential Order

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 →
T008 → T009 → T010 → T011 → T012 → T013 → T014 → T015 →
T016 → T017 → T018 → T019
```

---

## Notes

- T004 (`Sidebar.tsx`) is the most complex task — icon names can be inline SVGs or simple emoji for the foundation; replace with a proper icon component later
- T008 (`ModeCard.tsx`) and T009 (`onboarding/page.tsx`) work best implemented together in the same session
- T011–T015 are five nearly identical files — implement all five in one pass
- No imports from `apps/core-platform` — every utility must be declared locally
- Do not install new packages — use only what is already in `apps/shops-app/package.json`
