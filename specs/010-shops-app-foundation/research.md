# Research: Shops App Foundation

**Feature**: `010-shops-app-foundation`
**Date**: 2026-05-13

---

## R-001 — Mode State Persistence

**Decision**: `sessionStorage` with key `"shops_mode"`, wrapped in `lib/mode.ts`.

**Rationale**: Survives navigation within the browser tab; requires no new packages;
clearly ephemeral (tab-scoped), which matches an onboarding selection that has no
backend yet. A typed wrapper isolates the read/write contract so a future feature
can swap to backend-backed persistence without changing callsites.

**Alternatives considered**:
- React context / URL param: Lost on hard refresh or direct navigation to `/dashboard`.
- `localStorage`: Persists across sessions — unexpected for an in-progress onboarding
  choice.
- No persistence (prop drilling): Impossible across independent page navigations
  in the App Router without a context provider at the root layout level.

---

## R-002 — Route Group vs Flat Layout

**Decision**: Next.js route group `(app)` for all six dashboard-section routes.

**Rationale**: Produces clean URLs (`/dashboard`, `/products`, etc.) while sharing
one `layout.tsx` (sidebar + topbar). This is the canonical App Router pattern for
multi-section SaaS shells.

**Alternatives considered**:
- `dashboard/[section]/page.tsx`: All URLs would nest under `/dashboard/`, deviating
  from the spec's page list.
- Per-page layout import: Duplicates Sidebar and Topbar across six files; violates
  DRY and makes sidebar state (mobile open/close) harder to manage.

---

## R-003 — globals.css Approach

**Decision**: Full rewrite — remove default scaffold styles, write NexoraXS dark
SaaS design tokens.

**Rationale**: The scaffold's CSS custom properties (`--background`, `--foreground`
via `prefers-color-scheme`) and generic `Arial` font stack are incompatible with the
NexoraXS design system. A full rewrite is cleaner than layering overrides on top
of variables the app will never use. The resulting file mirrors core-platform's
`globals.css` structure but lives entirely within `apps/shops-app`.

**Design tokens to include**:
- Dark base: `body { background: #0a0a0f; color: #e5e7eb; }`
- Font: Geist Sans + Geist Mono (via Next.js font loader in `layout.tsx`)
- Utilities: `.gradient-text`, `.card`, `.card-hover`, `.btn-primary`, `.chip`,
  `.nav-item`, `.nav-item-active`
- Scrollbar: custom webkit scrollbar matching core-platform

**Alternatives considered**:
- Partial override: More code, two competing systems, harder to maintain.
- Import from core-platform: Forbidden by FR-013 and Constitution Principle III.

---

## Summary Table

| ID    | Decision | Files Affected |
|-------|----------|---------------|
| R-001 | `sessionStorage` + `lib/mode.ts` typed wrapper | `apps/shops-app/lib/mode.ts`, `app/onboarding/page.tsx`, `app/(app)/dashboard/page.tsx` |
| R-002 | Next.js route group `(app)` for shared layout | `app/(app)/layout.tsx` and all section pages |
| R-003 | Full rewrite of `globals.css` with NexoraXS dark tokens | `apps/shops-app/app/globals.css` |
