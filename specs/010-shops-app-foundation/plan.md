# Implementation Plan: Shops App Foundation

**Branch**: `010-shops-app-foundation` | **Date**: 2026-05-13 | **Spec**: [spec.md](./spec.md)

## Summary

Build the initial UI shell for `apps/shops-app` from the bare Next.js scaffold.
Deliverables: root redirect, a 3-mode onboarding page, a dashboard layout with
sidebar and topbar, and six placeholder section pages. No backend, no API calls,
no auth, no new packages. Visual style follows the NexoraXS dark SaaS aesthetic
implemented independently within the Shops app.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Next.js 16.2.6, React 19.2.4, TailwindCSS 4.x
**Storage**: `sessionStorage` — ephemeral client-side mode persistence only
**Testing**: Visual/manual QA — browser dev tools at defined breakpoints
**Target Platform**: Web (desktop + mobile viewports, 375 px and above)
**Project Type**: Web application — Next.js App Router, `apps/shops-app` only
**Performance Goals**: Standard page-load expectations; all transitions smooth
**Constraints**: No new packages; no code imported from `apps/core-platform`;
  all changes contained within `apps/shops-app`
**Scale/Scope**: 8 routes total (`/`, `/onboarding`, `/dashboard`, `/products`,
  `/orders`, `/customers`, `/reports`, `/settings`); 3 breakpoints (375 px,
  768 px, 1280 px)

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I — Modular Monolith | ✅ Pass | `apps/shops-app` is a defined isolated module; this feature initialises it |
| II — Multi-Tenant Isolation | ✅ N/A | No database tables or queries; pure UI shell |
| III — App Boundary Enforcement | ✅ Pass | FR-013 explicitly forbids imports from `apps/core-platform`; all shared primitives self-contained |
| IV — Type Safety | ✅ Pass | TypeScript strict mode; all new files `.tsx`/`.ts`; no `any` |
| V — SDK-First API Access | ✅ N/A | No API calls in this feature |
| VI — Spec-Driven Development | ✅ Pass | Spec written and validated before this plan |

No violations. Complexity Tracking section omitted.

---

## Project Structure

### Documentation (this feature)

```text
specs/010-shops-app-foundation/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── contracts/
│   └── routes.md        ← Phase 1 output (UI route contracts)
├── checklists/
│   └── requirements.md
└── tasks.md             ← Phase 2 output (/speckit.tasks)
```

### Source Code (files to create / modify)

```text
apps/shops-app/
├── app/
│   ├── globals.css              ← REWRITE: dark SaaS design tokens + utilities
│   ├── layout.tsx               ← UPDATE: metadata, fonts, dark background body
│   ├── page.tsx                 ← REPLACE: redirect to /onboarding
│   ├── onboarding/
│   │   └── page.tsx             ← CREATE: 3-mode selection page (client component)
│   └── (app)/                   ← CREATE: route group — shared sidebar/topbar layout
│       ├── layout.tsx           ← CREATE: Sidebar + Topbar shell
│       ├── dashboard/
│       │   └── page.tsx         ← CREATE: mode-aware dashboard placeholder
│       ├── products/
│       │   └── page.tsx         ← CREATE: placeholder
│       ├── orders/
│       │   └── page.tsx         ← CREATE: placeholder
│       ├── customers/
│       │   └── page.tsx         ← CREATE: placeholder
│       ├── reports/
│       │   └── page.tsx         ← CREATE: placeholder
│       └── settings/
│           └── page.tsx         ← CREATE: placeholder
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx          ← CREATE: nav + mobile drawer
│   │   └── Topbar.tsx           ← CREATE: app identity + user indicator
│   └── onboarding/
│       └── ModeCard.tsx         ← CREATE: selectable mode option card
└── lib/
    └── mode.ts                  ← CREATE: sessionStorage read/write helpers
```

**Structure Decision**: Next.js route group `(app)` wraps the six dashboard-section
routes so they share a single layout (sidebar + topbar) without `/(app)/` appearing
in the URL. The `/onboarding` page sits outside the group and renders full-page.

---

## Phase 0: Research

**Output file**: `specs/010-shops-app-foundation/research.md`

### R-001 — Mode State Persistence

**Question**: How should the selected onboarding mode be stored and read by the dashboard?

**Decision**: Use `sessionStorage` with a typed key (`"shops_mode"`) for persistence.
React state alone is insufficient — navigation away from `/onboarding` to `/dashboard`
creates a fresh render that would lose the selection. `localStorage` would persist
across sessions unexpectedly for an onboarding choice that has no backend backing yet.

**Rationale**: `sessionStorage` lives for the browser tab session, matches user
expectation for a "just chosen" selection, and requires zero new packages.
A thin wrapper (`lib/mode.ts`) isolates the read/write so it can be swapped to a
backend-backed approach in a future feature without changing callsites.

### R-002 — Route Group vs Flat Layout

**Question**: Should dashboard-section pages share a layout via a route group `(app)`
or a flat parent directory like `dashboard/`?

**Decision**: Use Next.js route group `(app)`. This allows `/dashboard`, `/products`,
`/orders`, `/customers`, `/reports`, and `/settings` to appear at the URL root level
while sharing one sidebar/topbar layout file.

**Alternatives considered**:
- Flat nesting under `/dashboard/**`: Would produce URLs like `/dashboard/products`,
  which diverges from the spec's page list and would require changing later.
- No layout nesting (layout per page): Duplicates sidebar/topbar in every file.

### R-003 — globals.css Approach

**Question**: Rewrite `globals.css` entirely or extend the default scaffold styles?

**Decision**: Full rewrite. The default scaffold uses CSS custom properties for
`light`/`dark` via `prefers-color-scheme` and a generic system font stack. The Shops
app needs the NexoraXS dark-first palette, Geist font tokens, and design-system
utilities (`.card`, `.btn-primary`, `.chip`, `.nav-item`, `.nav-item-active`,
`.gradient-text`) that mirror core-platform's globals.css — but live independently
in `apps/shops-app` with no shared import.

---

## Phase 1: Design

No data model — there are no persistent entities. Mode selection is ephemeral
session state, not a storable domain object.

### Agent Context Update

Update `AGENTS.md` between `<!-- SPECKIT START -->` and `<!-- SPECKIT END -->`:

```markdown
<!-- SPECKIT START -->
**Current feature**: `010-shops-app-foundation`
**Plan**: [specs/010-shops-app-foundation/plan.md](specs/010-shops-app-foundation/plan.md)
**Spec**: [specs/010-shops-app-foundation/spec.md](specs/010-shops-app-foundation/spec.md)
**Branch**: `010-shops-app-foundation`
<!-- SPECKIT END -->
```

### Quickstart

```bash
cd apps/shops-app
pnpm dev
# Runs at http://localhost:3001 (or next available port)
```

Verification path:
1. `/` → redirects to `/onboarding`
2. Select a mode → confirm → `/dashboard` — mode name visible in body
3. Click all sidebar links → each placeholder page loads correctly
4. Resize to 375 px → sidebar hidden, hamburger visible; resize to 1280 px → sidebar pinned
