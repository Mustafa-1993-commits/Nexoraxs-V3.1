# Research: Platform-to-Shops Flow

**Feature**: `013-platform-to-shops-flow`
**Date**: 2026-05-13

---

## R-001 — AppCard Extension Strategy

**Decision**: Add optional `buttonLabel?: string` and `subtitle?: string` to the
`App` interface in `apps/core-platform/lib/mock-data/apps.ts`. Populate them on
the Shops entry only. AppCard renders them when present; falls back to defaults
("Open" / no subtitle) otherwise.

**Rationale**: Smallest additive change. No conditionals on `id`. No new component.
Existing Coming Soon cards are unaffected (they render the disabled state regardless
of new optional fields).

**Alternatives considered**:
- `id === "shops"` conditional inside AppCard: Couples component to data identity.
- Separate ShopsCard component: Over-engineering for a one-card difference.

---

## R-002 — Button vs Link for "Open Shops"

**Decision**: `<button type="button">` with no `onClick` handler — visual-only, same
as existing AppCard pattern. No `href` attribute; no navigation side-effect.

**Rationale**: The spec permits either approach. A button is semantically appropriate
for a launcher action; an `<a href="#">` would imply navigability and invite
right-click "Open in new tab" confusion.

---

## R-003 — Enabled Apps Card Position

**Decision**: Insert after the metric card grid, before the activity feed card, in
`apps/core-platform/app/dashboard/page.tsx`. New element:
`<div className="card mt-6 p-6">` with chip label, heading, and one Shops row.

**Rationale**: Information hierarchy: metrics (what's happening) → enabled apps
(what's configured) → activity (what happened). Placing it here reads naturally.

---

## R-004 — Back to Platform Label in Shops Sidebar

**Decision**: Expand the existing `<a href="#">` icon-only back button to include
`<span className="hidden lg:inline text-xs text-gray-400 ml-1">Back to Platform</span>`.
The icon remains on mobile; the text label appears on desktop.

**Rationale**: Minimal change to the existing header structure. Mobile sidebar
drawer width (260 px) can accommodate the label, but `hidden lg:inline` avoids
visual density issues on narrower breakpoints.

Actually — on review: 260 px is wide enough. The label can always be visible
without `lg:` restriction. Use `text-xs text-gray-400` with `truncate` safety.
Final decision: always-visible short label.

---

## R-005 — Branch Label Formatting

**Decision**: Change "Maadi · Main" to "Maadi Main" in Shops Topbar (remove the
interpunct `·` separator). The interpunct visually suggests two separate fields
rather than one compound location name.

**Alternatives considered**:
- Keep interpunct: Cosmetically distinct but spec calls for cleaner presentation.
- Use em-dash "Maadi — Main": Too heavy for a small chip label.

---

## Summary Table

| ID | Decision | File |
|----|----------|------|
| R-001 | Add `buttonLabel?` + `subtitle?` to App interface; populate on Shops | `lib/mock-data/apps.ts` |
| R-002 | Keep as `<button type="button">` (no href, no onClick) | `components/dashboard/AppCard.tsx` |
| R-003 | Enabled Apps card after metric grid, before activity feed | `app/dashboard/page.tsx` |
| R-004 | Always-visible "Back to Platform" text label next to icon | `components/dashboard/Sidebar.tsx` |
| R-005 | Branch label "Maadi · Main" → "Maadi Main" | `components/dashboard/Topbar.tsx` |
