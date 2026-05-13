# Research: Core Platform UI QA

**Feature**: `009-core-platform-ui-qa`
**Date**: 2026-05-13

---

## R-001 — Grid Background Source

**Decision**: The visual difference on `/workspaces` comes from three
absolutely-positioned glow blobs rendered inside the page wrapper. No CSS
`background-image` grid or dot pattern exists. No TailwindCSS grid plugin is
installed. The blobs are the sole source of the background inconsistency.

**Rationale**: Code inspection of `app/workspaces/page.tsx` confirms three
`<div>` elements with `pointer-events-none absolute` positioning, large
`blur-3xl` radii, and `opacity-15`–`opacity-20`. The dashboard layout
(`app/dashboard/layout.tsx`) has no equivalent blobs at the layout level.
`globals.css` contains no `background-image` declaration.

**Alternatives considered**:
- CSS background grid: Not present in codebase.
- Tailwind plugin (`bg-grid-*`): Not installed — `package.json` lists only
  `tailwindcss` core.

**Action**: Remove the three glow blob `<div>` elements from
`app/workspaces/page.tsx`. The header and footer glow blobs that may appear
in the logged-in dashboard area are localised to individual cards, not
full-page, so they remain unaffected.

---

## R-002 — Dashboard Ambient Treatment

**Decision**: `/workspaces` drops all full-page decorative blobs. The dashboard
layout stays as-is (plain `bg-[#0a0a0f]`). No blobs are added to the dashboard.

**Rationale**: The dashboard is the reference target. Individual dashboard pages
(e.g., `billing/page.tsx`) contain localised card-level glow blobs for visual
accent — this pattern is correct and intentional. The `/workspaces` page's
full-page blobs are an inconsistency with this localised pattern.

**Alternatives considered**:
- Add blobs to the dashboard layout: Would create a heavier visual treatment
  project-wide; rejected as out of scope and against the "match dashboard" goal.
- Retain blobs on `/workspaces`: Rejected per spec FR-001 (background MUST NOT
  display decorative overlays that differ from the dashboard).

---

## R-003 — Mobile Topbar Left-Padding

**Decision**: The `pl-16` on `Topbar.tsx` is correct but should be verified
visually. If the workspace switcher button overlaps or gets too close to the
hamburger icon at 375 px, increase the padding or add a minimum gap. No code
change required until visual verification confirms an issue.

**Rationale**: At 375 px, `pl-16` (64 px) leaves room for the 36 px hamburger
button (`h-9 w-9`) at `left-4` (16 px). The remaining 12 px gap is tight. If
the workspace switcher button text wraps or the gap looks uncomfortable, the
padding value should increase to `pl-20`.

**Alternatives considered**:
- Use absolute positioning for the hamburger: Would require layout restructure;
  deferred as over-engineering for a padding fix.
- Remove workspace switcher label on mobile: Considered but rejected — the
  workspace name provides essential orientation context.

---

## Summary Table

| ID    | Decision | File(s) Affected |
|-------|----------|-----------------|
| R-001 | Remove 3 glow blob `<div>` elements from workspaces page | `app/workspaces/page.tsx` |
| R-002 | Dashboard layout unchanged; `/workspaces` adopts plain bg | `app/workspaces/page.tsx` |
| R-003 | Verify `pl-16` topbar padding at 375 px; adjust to `pl-20` if tight | `components/dashboard/Topbar.tsx` |
