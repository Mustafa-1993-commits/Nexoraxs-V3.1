# Implementation Plan: Core Platform UI QA

**Branch**: `009-core-platform-ui-qa` | **Date**: 2026-05-13 | **Spec**: [spec.md](./spec.md)

## Summary

Visual QA and polish pass scoped exclusively to `apps/core-platform`. Primary
goal: remove the decorative background treatment from `/workspaces` so it
matches the plain dark background of `/dashboard`. Secondary goals: verify
mobile sidebar behaviour, confirm nav active states on all five routes, and
audit responsive layout at 375 px / 768 px / 1280 px viewports. No backend
changes, no new packages, no auth logic.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Next.js 16.2.6, React 19.2.4, TailwindCSS 4.x
**Storage**: N/A
**Testing**: Visual/manual QA — browser dev tools at defined breakpoints
**Target Platform**: Web (desktop + mobile viewports)
**Project Type**: Web application — Next.js App Router, `apps/core-platform` only
**Performance Goals**: No regressions to existing page-load feel; all transitions remain smooth
**Constraints**: No new packages; no changes outside `apps/core-platform`; no inline styles introduced where TailwindCSS classes suffice
**Scale/Scope**: 5 routes reviewed (`/workspaces`, `/dashboard`, `/dashboard/apps`, `/dashboard/billing`, `/dashboard/settings`); 3 breakpoints (375 px, 768 px, 1280 px)

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I — Modular Monolith | ✅ Pass | Only `apps/core-platform` touched; no cross-app imports |
| II — Multi-Tenant Isolation | ✅ N/A | No database tables or queries; pure visual changes |
| III — App Boundary Enforcement | ✅ Pass | No imports from other apps or from `packages/*` (existing imports retained) |
| IV — Type Safety | ✅ Pass | All edits are in `.tsx` files under strict mode; no `any` to be introduced |
| V — SDK-First API Access | ✅ N/A | No new API calls; feature is display-only |
| VI — Spec-Driven Development | ✅ Pass | Spec written and validated before this plan |

**Inline-style note**: The existing codebase uses inline `style={{ background: "..." }}` for gradient blobs. This is a pre-existing pattern. Changes in this QA pass MUST prefer TailwindCSS utilities where possible; new inline styles are acceptable only when the gradient cannot be expressed as a Tailwind class.

No violations detected. Complexity Tracking section omitted.

---

## Project Structure

### Documentation (this feature)

```text
specs/009-core-platform-ui-qa/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── checklists/
│   └── requirements.md
└── tasks.md             ← Phase 2 output (/speckit.tasks — NOT created here)
```

### Source Code (affected files)

```text
apps/core-platform/
├── app/
│   ├── workspaces/
│   │   └── page.tsx          ← PRIMARY: remove grid/glow background treatment
│   ├── dashboard/
│   │   ├── layout.tsx         ← reference background; potentially add ambient glow here
│   │   ├── page.tsx           ← responsive audit
│   │   ├── apps/page.tsx      ← responsive audit
│   │   ├── billing/page.tsx   ← responsive audit
│   │   └── settings/page.tsx  ← responsive audit + tab nav active state
│   └── globals.css            ← audit for any grid/pattern utility; no new classes added
├── components/
│   └── dashboard/
│       ├── Sidebar.tsx        ← mobile open/close; active link state
│       └── Topbar.tsx         ← mobile search-bar visibility; left-padding on mobile
└── AGENTS.md                  ← update SPECKIT active feature marker to 009
```

---

## Phase 0: Research

**Output file**: `specs/009-core-platform-ui-qa/research.md`

### R-001 — Identify the Grid Background Source

**Question**: What exactly produces the "grid background" visual on `/workspaces`?

**Known facts from code review**:
- `workspaces/page.tsx` uses `bg-[#0a0a0f]` (same base as dashboard)
- Three absolutely-positioned glow blobs (blue/purple/cyan) are present
- No CSS `background-image` grid is declared in `globals.css`
- No TailwindCSS grid-background plugin is installed

**Research task**: Run the dev server (`pnpm dev` in `apps/core-platform`),
open `/workspaces`, and inspect the page background in browser DevTools.
Identify whether the visual difference is:
  a. The glow blobs themselves (likely — dashboard has none at the layout level)
  b. A CSS `background-image` with a grid or dot pattern applied somewhere
  c. A Tailwind utility class (e.g., `bg-grid-*`) from a plugin not visible in package.json

**Decision**: The correct removal target is determined by this investigation.
If (a), remove or suppress the glow blobs; if (b) or (c), remove that rule.

### R-002 — Dashboard Ambient Treatment (Consistency Target)

**Question**: Should the dashboard layout gain any ambient glow to match a
potential midpoint aesthetic, or should `/workspaces` simply drop all decorative
background elements?

**Known facts**:
- `dashboard/layout.tsx` uses plain `bg-[#0a0a0f]` with no blobs
- Individual dashboard pages (e.g., `billing/page.tsx`) have localised glow blobs inside cards — these are not full-page

**Decision** (default): `/workspaces` should match the dashboard's background
level, not the other way around. Remove decorative blobs from `/workspaces`
unless they exist elsewhere as a shared ambient pattern.

### R-003 — Mobile Topbar Left-Padding

**Question**: At mobile viewports, `Topbar.tsx` uses `pl-16` to leave room for
the hamburger button rendered by `Sidebar.tsx`. Is this padding correctly sized
and does it create any layout issues at 375 px?

**Research task**: Inspect the topbar at 375 px to confirm the hamburger icon
does not overlap the workspace switcher button and that the topbar items fit
without horizontal overflow.

---

## Phase 1: Design

No data model changes — this feature has no new entities, no schema changes,
and no state beyond what already exists.

No API contracts — no endpoints added, removed, or modified.

### Agent Context Update

Update `AGENTS.md` between the `<!-- SPECKIT START -->` and `<!-- SPECKIT END -->`
markers (currently at lines 446–451):

```markdown
<!-- SPECKIT START -->
**Current feature**: `009-core-platform-ui-qa`
**Plan**: [specs/009-core-platform-ui-qa/plan.md](specs/009-core-platform-ui-qa/plan.md)
<!-- SPECKIT END -->
```

### Quickstart

To verify changes during and after implementation:

```
# From repo root
cd apps/core-platform
pnpm dev
```

Open `http://localhost:3000` (redirects to `/login`). Navigate through:
1. `/login` → sign in → `/workspaces`
2. `/workspaces` → select workspace → `/dashboard`
3. `/dashboard/apps`, `/dashboard/billing`, `/dashboard/settings`

Resize viewport to 375 px, 768 px, 1280 px at each step. Verify against
acceptance scenarios in the spec.
