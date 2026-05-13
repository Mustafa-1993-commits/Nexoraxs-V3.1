# Plan 008 — Landing v2 Motion Polish

**Status:** Draft  
**Date:** 2026-05-13

---

## Approach

Rewrite each landing section in-place (editing existing files), adding two new section files (Platform, CTA). All changes stay inside `apps/landing/src/`. No new npm packages. No config changes.

The visual design system is established in `globals.css` first so every section can consume shared utilities without inline duplication.

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framer Motion | Keep for splash + hero fade-in only | Already installed; existing code uses it there |
| CoreIllustration animations | CSS keyframes only | User spec: "CSS only" animation rule |
| FAQ accordion | `useState` + CSS `max-height` transition | Smooth animation; `details/summary` can't animate smoothly |
| App icons | `lucide-react` (already installed) | Replaces emoji; matches core-platform HTML reference |
| New sections | New files in `src/sections/platform/` and `src/sections/cta/` | Clean separation; page.tsx imports them |
| Glow blobs | Positioned with inline `style` prop | Dynamic sizing; avoids arbitrary Tailwind value sprawl |
| Image logo | Keep `next/image` with existing `/branding/` assets | No new assets needed |

---

## File Change Map

```
apps/landing/src/
  app/
    globals.css              REWRITE  — add design system CSS
    page.tsx                 EDIT     — add Platform + CTA sections
  sections/
    navbar/navbar.tsx        EDIT     — upgrade CTA button style
    hero/hero.tsx            EDIT     — add glow blobs, layout polish
    hero/CoreIllustration.tsx REWRITE — remove Framer Motion, CSS animations
    hero/SplashScreen.tsx    NO CHANGE
    features/features.tsx    REWRITE  — glass cards, lucide icons, safe copy
    sections/platform/       NEW DIR
      platform.tsx           NEW      — platform explanation section
    apps/apps.tsx            REWRITE  — glass cards, lucide icons, color map
    pricing/pricing.tsx      REWRITE  — beta card + placeholder card
    faq/faq.tsx              REWRITE  — client component, useState accordion
    sections/cta/            NEW DIR
      cta.tsx                NEW      — CTA section before footer
    footer/footer.tsx        EDIT     — mono-chip labels, bottom bar polish
```

---

## Section Implementation Notes

### globals.css
Write first. All other sections depend on `.gradient-text`, `.glow-blob`, `.glass-card`, `.glass-card-hover`, `.btn-primary`, `.mono-chip`, and animation keyframes.

### Navbar
One change: replace `bg-blue-600 hover:bg-blue-500` on CTA anchor with `btn-primary` class + `rounded-xl px-4 py-2 text-sm font-medium text-white`.

### Hero
Wrap section in `relative overflow-hidden`. Add two `glow-blob` divs absolutely positioned. Keep `motion.div` wrappers for splashDone fade-in (already there). Add mono chip eyebrow. Update headline to use `gradient-text`. Update CTA button to `btn-primary`. Add 3 trust pills below CTAs.

### CoreIllustration
Full rewrite. Remove all `motion.*` imports. Use:
- `animate-float` on central card
- `animate-float-b/c/d` on satellite cards with inline `style={{ animationDelay }}` if needed
- CSS `transition-transform duration-200` + `hover:-translate-y-1` for hover lift
- `group` + `group-hover:` pattern not needed; plain hover CSS works

### Features
Keep 6-item data array. Replace emoji with lucide-react icon components. Add per-card color accent for the icon box. Wrap each card in `glass-card glass-card-hover`. Add section eyebrow chip.

### Platform (new)
Static section, no `"use client"`. CSS grid: left block = Core Platform feature list, right block = app grid. Connect with a subtle `border-l border-white/10` or thin gradient line CSS trick. No Framer Motion.

### Apps
Keep 5-app data. Add `color` and `icon` (lucide component) to each item. Each card: `glass-card glass-card-hover`, corner glow blob (absolutely positioned inside card with `overflow-hidden`), color icon box.

### Pricing
Two cards side by side (md:grid-cols-2). Beta card: featured with purple glow, `ring-1 ring-purple-500/30`. Checklist with lucide `Check` icon. Future Plans card: simpler, dimmer. Both have CTAs.

### FAQ
`"use client"`. `useState<number | null>(null)` for open index. Map over items; each renders a button (question) + div with `max-h-0 overflow-hidden` / `max-h-96` + `transition-all duration-300`. Chevron: `rotate-180` when open.

### CTA
Static server component. Full-width section, `relative overflow-hidden`. Two glow blobs. Centered headline + sub + two CTA buttons.

### Footer
Add `mono-chip` to section headings (`h4`). Add right-side "Built with NexoraXS" text to bottom bar.

---

## Risk Notes

- **Tailwind v4**: Project uses `@import "tailwindcss"` (v4). Plain CSS classes in `globals.css` work fine alongside Tailwind utilities. No `@layer` needed — raw classes override nothing conflicting.
- **`"use client"` boundary**: FAQ and Navbar already use `"use client"`. Hero already is a client component. New CTA and Platform sections will be server components (no interactivity needed).
- **No layout shifts**: Glow blobs are `pointer-events: none; position: absolute` inside `overflow-hidden` containers — they won't affect layout or scrollbars.
