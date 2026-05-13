# Tasks 008 — Landing v2 Motion Polish

**Status:** Pending  
**Date:** 2026-05-13

---

## Task List

- [ ] **T1** — `globals.css` — Add design system CSS (gradient-text, glow-blob, glass-card, btn-primary, mono-chip, all keyframes + animate-* classes)

- [ ] **T2** — `navbar/navbar.tsx` — Upgrade CTA anchor to `btn-primary` style; keep all existing nav logic untouched

- [ ] **T3** — `hero/CoreIllustration.tsx` — Full rewrite: remove Framer Motion, add CSS keyframe float animations (animate-float / animate-float-b/c/d) on center card + 4 satellite app cards; add lucide-react icons to satellite cards; CSS hover lift

- [ ] **T4** — `hero/hero.tsx` — Add glow blobs to section wrapper; add mono eyebrow chip; update headline with gradient-text span; add 3 trust pills below CTAs; upgrade CTA buttons to btn-primary / ghost styles

- [ ] **T5** — `features/features.tsx` — Replace emoji with lucide-react icons in colored icon boxes; wrap cards in glass-card + glass-card-hover; add section eyebrow chip; keep 6 safe feature items

- [ ] **T6** — `sections/platform/platform.tsx` (NEW FILE) — Platform explanation section: "One Core. Many Apps." headline; CSS grid showing Core Platform block vs App tiles; safe copy; no client directive needed

- [ ] **T7** — `apps/apps.tsx` — Add lucide-react icons + color map to each app; glass-card + glass-card-hover; corner glow blob inside card; Coming Soon badge uses mono-chip style

- [ ] **T8** — `pricing/pricing.tsx` — Two-card layout (Beta Early-Bird featured + Future Plans placeholder); Beta card has purple glow + gradient headline + Check checklist; Future Plans card is dimmer placeholder; both have CTA buttons

- [ ] **T9** — `faq/faq.tsx` — Convert to `"use client"`; replace details/summary with useState accordion; CSS max-height transition for smooth open/close; chevron rotates on open; keep 6 existing Q&A items with MVP-safe copy

- [ ] **T10** — `sections/cta/cta.tsx` (NEW FILE) — CTA section: relative + overflow-hidden wrapper; two glow blobs; centered headline + sub; primary + ghost CTA buttons; server component

- [ ] **T11** — `footer/footer.tsx` — Add mono-chip style to section headings; add "Built with NexoraXS" to bottom bar right side; keep all existing links and logo image

- [ ] **T12** — `app/page.tsx` — Import and place Platform section (after Features, before Apps) and CTA section (after FAQ, before Footer)

- [ ] **T13** — `pnpm --filter landing build` — Verify zero TypeScript errors and clean build

---

## Order

T1 → T2, T3, T4, T5, T6, T7, T8, T9, T10, T11 (parallel after T1) → T12 → T13

T1 must be first (globals.css defines classes used in all other tasks).  
T12 after T6 and T10 (new files must exist before import).  
T13 always last.
