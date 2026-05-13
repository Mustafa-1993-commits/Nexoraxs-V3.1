# Implementation Plan: Shops App UI QA

**Branch**: `012-shops-app-ui-qa` | **Date**: 2026-05-13 | **Spec**: [spec.md](./spec.md)

## Summary

Inspect all eight Shops app routes at three viewport widths, verify each item on the
QA checklist, and apply the minimum code change needed to fix confirmed issues. No new
components, routes, or packages. The implementation stops when all checklist items
pass and `pnpm --filter shops-app build` exits 0.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Next.js 16.2.6, React 19.2.4, TailwindCSS 4.x
**Storage**: N/A
**Testing**: Manual visual QA at 375 px, 768 px, 1280 px + `pnpm --filter shops-app build`
**Target Platform**: Web (desktop + mobile viewports)
**Project Type**: QA pass — fix-only, no new features
**Constraints**: No new packages; no new components (unless extracted from existing code
  as a fix); no new routes; changes are minimal and reversible
**Scale/Scope**: 8 routes × 3 breakpoints; 12 checklist items

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I — Modular Monolith | ✅ Pass | Only `apps/shops-app` touched |
| II — Multi-Tenant Isolation | ✅ N/A | No DB changes |
| III — App Boundary Enforcement | ✅ Pass | No cross-app imports |
| IV — Type Safety | ✅ Pass | All edits in `.tsx`/`.ts`; no `any` |
| V — SDK-First API Access | ✅ N/A | No API calls |
| VI — Spec-Driven Development | ✅ Pass | Spec written before implementation |

---

## Project Structure

### Documentation (this feature)

```text
specs/012-shops-app-ui-qa/
├── plan.md              ← this file
├── spec.md
├── tasks.md
└── checklists/
    └── requirements.md
```

### Source Code (files potentially affected)

Only files where a confirmed issue is found will be modified. Expected candidates:

```text
apps/shops-app/
├── app/
│   ├── (app)/
│   │   ├── dashboard/page.tsx    ← "live data" text; table overflow; link hrefs
│   │   ├── layout.tsx            ← sidebar offset correctness
│   │   └── */page.tsx            ← visual consistency check
│   ├── onboarding/page.tsx       ← link hrefs; entry flow
│   └── globals.css               ← (unlikely, only if a token fix is needed)
└── components/
    └── dashboard/
        ├── Sidebar.tsx           ← active state; mobile behaviour
        └── Topbar.tsx            ← mobile overflow; search disabled state
```

---

## Phase 0: Research

All research for this feature is done during the inspection tasks (T001–T012 in
tasks.md). No external research is required — this is a code + visual audit.

### Inspection Protocol

For each checklist item:
1. Read the relevant source file(s)
2. Open the route in the browser at the specified viewport(s) if a visual check is needed
3. Record: **PASS** (no fix needed) or **FAIL** (describe the exact issue)
4. For FAIL items: write the minimal fix, apply it, re-verify

### Build Gate

After all inspection tasks complete:

```bash
cd apps/shops-app
pnpm lint
pnpm build
```

Both must exit 0 before the feature is considered done.

---

## Phase 1: Design

No new design artifacts are needed. This feature has no new data model, no new API
contracts, and no new component props.

### Agent Context Update

Update `AGENTS.md` between `<!-- SPECKIT START -->` and `<!-- SPECKIT END -->`:

```markdown
<!-- SPECKIT START -->
**Current feature**: `012-shops-app-ui-qa`
**Plan**: [specs/012-shops-app-ui-qa/plan.md](specs/012-shops-app-ui-qa/plan.md)
**Spec**: [specs/012-shops-app-ui-qa/spec.md](specs/012-shops-app-ui-qa/spec.md)
**Branch**: `012-shops-app-ui-qa`
<!-- SPECKIT END -->
```
