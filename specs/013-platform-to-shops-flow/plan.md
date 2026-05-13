# Implementation Plan: Platform-to-Shops Flow

**Branch**: `013-platform-to-shops-flow` | **Date**: 2026-05-13 | **Spec**: [spec.md](./spec.md)

## Summary

Polish the visual connection between Core Platform and Shops App. Changes span two
apps but are all UI-only — no backend, no real routing, no new packages. Key
deliverables: "Open Shops" button on the App Launcher card, "Enabled apps" section
on the Core Platform dashboard, a visible "Back to Platform" label in the Shops
sidebar, consistent workspace/store naming, and a confirmed zero-`localhost` codebase.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode), both apps
**Primary Dependencies**: Next.js 16.2.6, React 19.2.4, TailwindCSS 4.x
**Storage**: N/A — all data is inline mock constants
**Testing**: `pnpm --filter core-platform build` + `pnpm --filter shops-app build` (both must exit 0)
**Target Platform**: Web (desktop + mobile)
**Project Type**: UI polish across two Next.js apps in a monorepo
**Performance Goals**: No regressions to build time or runtime
**Constraints**: No new packages; no cross-app imports; no real URL navigation between
  apps; all inter-app links use `href="#"`; no `localhost` strings in source files
**Scale/Scope**: 5 files modified across 2 apps; no new routes

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I — Modular Monolith | ✅ Pass | Changes are self-contained in each app; no cross-app imports |
| II — Multi-Tenant Isolation | ✅ N/A | No DB changes; pure UI |
| III — App Boundary Enforcement | ✅ Pass | No imports from one app to the other; each app stays isolated |
| IV — Type Safety | ✅ Pass | All changes in `.tsx`/`.ts` under strict mode; interface updates are additive |
| V — SDK-First API Access | ✅ N/A | No API calls |
| VI — Spec-Driven Development | ✅ Pass | Spec written and validated before this plan |

No violations. Complexity Tracking omitted.

---

## Project Structure

### Documentation (this feature)

```text
specs/013-platform-to-shops-flow/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── contracts/
│   └── app-card.md      ← Phase 1 output (AppCard prop contract)
├── checklists/
│   └── requirements.md
└── tasks.md             ← /speckit.tasks output
```

### Source Code (files to modify)

```text
apps/core-platform/
├── lib/mock-data/apps.ts                     ← ADD: href, subtitle, buttonLabel fields to App interface + Shops entry
├── components/dashboard/AppCard.tsx          ← UPDATE: render buttonLabel, subtitle; use href on button
└── app/dashboard/page.tsx                    ← ADD: "Enabled apps" card after metric cards

apps/shops-app/
├── components/dashboard/Sidebar.tsx          ← UPDATE: back link to show visible "Back to Platform" label
└── components/dashboard/Topbar.tsx           ← UPDATE: branch label "Maadi · Main" → "Maadi Main"
```

**No files created.** All changes are surgical edits to existing files.

---

## Phase 0: Research

**Output file**: `specs/013-platform-to-shops-flow/research.md`

### R-001 — AppCard Extension Strategy

**Question**: How should the AppCard component be extended to support a custom button
label and subtitle for Shops, without affecting Coming Soon cards?

**Decision**: Add two optional fields to the `App` interface:
- `buttonLabel?: string` — overrides the default "Open" button text when set
- `subtitle?: string` — renders a small secondary descriptor below the description

The Shops entry in `mockApps` populates both. All other entries leave them unset —
the component falls back to existing behaviour. This is the smallest, most reversible
change.

**Alternatives considered**:
- Separate `ShopsCard` component: More code, harder to maintain when AppCard evolves.
- Conditional by `id === "shops"` inside AppCard: Works but couples the component to
  a specific data value — harder to extend for future apps.

### R-002 — "Open Shops" Button as href or button

**Question**: Should the "Open Shops" affordance be an `<a href="#">` or a
`<button type="button">`?

**Decision**: Keep it as `<button type="button">` with no `onClick` — consistent with
the existing AppCard pattern. The spec allows either; a button with no handler is the
cleanest "visual-only" approach without implying a navigable link.

**Alternatives considered**:
- `<a href="#">`: Looks like a link; right-click "Open in new tab" opens `#`. For an
  app launcher, a button is more semantically correct.

### R-003 — "Enabled Apps" Card Placement on Dashboard

**Question**: Where on the Core Platform `/dashboard` page should the Enabled Apps
card appear?

**Decision**: Between the metric cards and the activity feed — after the 4-column
metric grid, before the `.card mt-6` activity card. This mirrors the page's
information hierarchy: metrics first, then context, then activity.

### R-004 — Back to Platform Label Approach in Shops Sidebar

**Question**: The current Shops sidebar back link is an icon-only button with a
`title` tooltip. Should the visible text label appear inline or as a separate element?

**Decision**: Expand the existing `<a>` to show the icon plus a visible text label
"Back to Platform" using `hidden lg:inline` (desktop only) so the narrow mobile
drawer does not get cluttered. The `aria-label` and `title` are retained. On mobile,
the icon alone remains the affordance (the title tooltip still conveys the meaning
on hover/focus).

**Alternatives considered**:
- Always-visible label: Works but makes the sidebar header taller on mobile.
- Separate row below the logo: Breaks the existing compact header layout.

---

## Phase 1: Design

No data model — no new persistent entities.

### Agent Context Update

Update `AGENTS.md` between `<!-- SPECKIT START -->` and `<!-- SPECKIT END -->`:

```markdown
<!-- SPECKIT START -->
**Current feature**: `013-platform-to-shops-flow`
**Plan**: [specs/013-platform-to-shops-flow/plan.md](specs/013-platform-to-shops-flow/plan.md)
**Spec**: [specs/013-platform-to-shops-flow/spec.md](specs/013-platform-to-shops-flow/spec.md)
**Branch**: `013-platform-to-shops-flow`
<!-- SPECKIT END -->
```

### Quickstart

```bash
# Core Platform
cd apps/core-platform && pnpm dev
# http://localhost:3000

# Shops App (separate terminal)
cd apps/shops-app && pnpm dev
# http://localhost:3001
```

Verification path:
1. Core Platform `/dashboard` → "Enabled apps" card shows Shops
2. Core Platform `/dashboard/apps` → Shops card shows "Open Shops" button + subtitle
3. Shops app `/dashboard` → sidebar shows "Back to Platform" label (desktop)
4. Shops app topbar → branch shows "Maadi Main" (no interpunct)
5. Both builds pass: `pnpm --filter core-platform build` + `pnpm --filter shops-app build`
