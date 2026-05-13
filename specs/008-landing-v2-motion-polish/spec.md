# Spec 008 — Landing v2 Motion Polish

**Status:** Draft  
**Author:** Mustafa Mohamed  
**Date:** 2026-05-13  
**Scope:** `apps/landing` — frontend only, no backend, no auth

---

## 1. Goal

Upgrade the NexoraXS landing page from its current functional-but-plain state to a premium, dark, visually rich marketing page that matches the design language established in the core-platform shell (spec 005–006).

The HTML reference (`docs/NexoraXS Platform.html`) defines the visual system: glow blobs, glass cards, gradient text, mono chips, and the `#0a0a0f` dark base.

---

## 2. Constraints

| Rule | Detail |
|------|--------|
| Scope | `apps/landing` only |
| New packages | None |
| CDN / external scripts | None |
| Google Fonts | None (Geist already loaded via Next.js) |
| Framer Motion | Already installed — allowed |
| Animation style | CSS-first; Framer Motion only for existing splash/hero fade-in |
| Backend | None touched |
| Auth logic | None touched |

---

## 3. Copy Rules (MVP-safe)

**Remove:**
- SOC 2 Ready
- 99.99% SLA
- Multi-region

**Replace with:**
- Modular SaaS architecture
- Workspace-based platform
- Built for future apps

**Do not include:**
- Fake partner marquee
- External links to HTML files
- Any claim of live production readiness

---

## 4. Design System (from HTML reference)

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Card border | `rgba(255,255,255,0.08)` |
| Card background | `rgba(255,255,255,0.03)` |
| Card radius | `20px` |
| Gradient text | `120deg → #3b82f6 → #8b5cf6 → #06b6d4` |
| Primary button | `135deg → #3b82f6 → #6366f1` + blue glow shadow |
| Glow blob | `blur(120px)`, opacity `0.18–0.28`, animated pulse |
| Mono chip | Geist Mono, `10px`, uppercase, `0.1em` letter-spacing |

---

## 5. Page Sections

### 5.1 Navbar *(minor polish)*
- Keep existing structure and logo images
- Upgrade CTA button to `btn-primary` gradient style
- Ensure mobile menu stays functional

### 5.2 Hero *(full rewrite)*
- Dark premium layout: full-viewport, two-column on desktop
- Mono eyebrow chip above headline: `// platform`
- Gradient text on key headline word(s)
- Sub-headline with safe MVP copy
- Two CTAs: primary gradient button + ghost outline button
- Soft trust pills below CTAs (3 items, no fake claims)
- Glow blobs: one blue (top-left), one purple (bottom-right)
- Right column: `CoreIllustration` with CSS-only float animation

### 5.3 Core Illustration *(full rewrite — CSS only)*
- Central "CORE" card (dark glass, rounded-3xl, purple glow shadow)
- 4 app satellite cards at corners: Shops, Clinics, Maintenance, Restaurants
- Each card: icon + label, glass style, unique color accent
- All float animations via CSS keyframes (`@keyframes float`, delays staggered)
- Hover: CSS `transform: translateY(-4px)` + `transition`
- No Framer Motion in this component

### 5.4 Features / "Why NexoraXS" *(rewrite)*
- Rename section visually to "Everything your business needs"
- 6 glass cards in a 3-column grid
- Each card: gradient icon box (lucide-react icon, not emoji) + title + body
- Hover: border brightens, card lifts 2px
- Safe feature claims only:
  1. Modular Architecture
  2. Shared Authentication
  3. Workspace Management
  4. Multi-Tenant Isolation
  5. Cloud-Native Infrastructure
  6. AI-Ready Platform

### 5.5 Platform Explanation *(new section)*
- Headline: "One Core. Many Apps."
- Sub: explain Core Platform + app satellite model
- Visual: horizontal architecture diagram (CSS grid)
  - Left: Core Platform block (auth, workspaces, billing, launcher)
  - Right: App tiles (Shops, Clinics, Maintenance, Restaurants, CRM)
  - Connecting line/arrows in CSS
- Safe copy only, no live URLs

### 5.6 Apps / App Launcher Cards *(rewrite)*
- Section headline: "Our Apps"
- Each card: glass style, colored corner glow blob, icon (lucide-react), name, tagline, description
- App color map: Shops=blue, Clinics=emerald, Maintenance=orange, Restaurants=pink, CRM=cyan
- "Coming Soon" badge: `border border-white/10 bg-white/5 text-gray-400 mono-chip`
- Hover: `glass-card-hover` lift + border brightens

### 5.7 Pricing Preview *(rewrite)*
- Two-card layout: "Beta Early-Bird" (featured) + a simple "Future Plans" placeholder
- Beta card: glass + purple glow, gradient headline, feature checklist (4 items)
- CTA button on each card
- No fake price numbers; Beta card shows "Free during beta"

### 5.8 FAQ Accordion *(rewrite — client component)*
- Convert to `"use client"` with `useState` for open/close tracking
- CSS `max-height` transition for smooth expand (no JS animation library)
- 6 existing questions, update answers to match MVP-safe copy
- Chevron rotates on open via CSS `transition-transform`

### 5.9 CTA Section *(new)*
- Full-width dark panel with subtle gradient border-top
- Glow blobs: blue top-right, purple bottom-left
- Headline: "Start building your business today"
- Sub copy (1 line, safe)
- Primary CTA + ghost secondary CTA

### 5.10 Footer *(polish)*
- Keep existing link groups and email contacts
- Add mono-chip section labels
- Bottom bar: copyright left, "Built with NexoraXS" right (no external links)
- Subtle `border-t border-white/5` separator above bottom bar

---

## 6. CSS Additions to `globals.css`

```
.gradient-text        — gradient clip text
.glow-blob            — absolute, blur(120px), pointer-events:none
.glass-card           — border + bg + radius + backdrop-blur
.glass-card-hover     — transition + hover lift + border brighten
.btn-primary          — gradient bg + blue glow shadow + hover lift
.mono-chip            — Geist Mono, 10px, uppercase, letter-spacing

@keyframes float      — translateY 0 → -14px → 0, 6s
@keyframes float-b    — 5s, delay 0.8s
@keyframes float-c    — 7s, delay 1.4s
@keyframes float-d    — 4.5s, delay 0.3s
@keyframes pulse-blob — opacity 0.15 → 0.28, 5s
@keyframes fade-up    — opacity+translateY, 0.6s
@keyframes scale-in   — opacity+scale, 0.5s
```

---

## 7. Build Verification

After all edits:
```
pnpm --filter landing build
```
Must produce zero TypeScript errors and zero build errors.
