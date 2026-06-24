# Implementation Plan: Target Architecture v2 Alignment

**Branch**: `047-feat/onboarding-flow-optimization-v2` | **Date**: 2026-06-18 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `specs/047-onboarding-flow-optimization-v2/spec.md`

## Summary

Align the current Core Platform + Commerce MVP data model with Target Architecture v2 by keeping Workspace as the company/group, treating current `BusinessUnit` as the internal Business entity for now, adding `OSEnablement` as the explicit subscription-to-usage relationship, separating Business `industryType` from Commerce-only presets, and preserving existing Commerce business/branch behavior. This is a mock-store/frontend architecture alignment only: no backend work, no UI redesign, and no broad symbol rename.

## Technical Context

**Language/Version**: TypeScript strict mode in Next.js App Router apps  
**Primary Dependencies**: Existing monorepo packages: `@nexoraxs/types`, `@nexoraxs/shared`, Core Platform app, Commerce app  
**Storage**: Existing shared local/session mock data layer in `packages/shared/src/mock-db`; no backend persistence  
**Testing**: `pnpm --filter core-platform exec tsc --noEmit`, `pnpm --filter commerce exec tsc --noEmit`, package/app lint/build checks where available  
**Target Platform**: Browser-based Core Platform and Commerce OS MVP  
**Project Type**: Modular monolith web application with shared packages  
**Performance Goals**: No measurable runtime performance change; existing MVP flows should remain responsive and storage hydration should remain SSR-safe  
**Constraints**: Preserve existing stored demo data with compatibility fallbacks; no direct browser-storage access from pages/components; no imports from `docs/claude.aidesign`; no backend APIs; no microservices; no UI redesign  
**Scale/Scope**: Shared core data model alignment plus Core -> Commerce handoff compatibility, Commerce active business/branch compatibility, documentation, and validation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Business Operating Platform**: PASS. The plan preserves independent OS products and strengthens Workspace -> Business -> Branch separation.
- **Core Platform Boundary**: PASS. Core owns subscriptions and Product Hub context; Commerce business logic remains in Commerce OS.
- **Independent Operating Systems**: PASS. `OSEnablement` makes OS usage explicit without cross-OS dependency.
- **Workspace / Business Unit / Branch Model**: PASS WITH SPEC OVERRIDE. Constitution v1.3 says Business Units are hidden behind a default BU in MVP unless a spec explicitly exposes Business Unit UI. Spec 047 explicitly aligns product language to Business while retaining internal `BusinessUnit`.
- **Multi-Tenant Data Isolation**: PASS. All new/updated records remain workspace-scoped; business/branch scope is explicit where applicable.
- **OS Subscription and Access Model**: PASS. Adds the missing relationship layer between workspace-level subscriptions and usage scope.
- **Pricing and Plan Limits**: PASS. No plan-limit behavior is expanded beyond current MVP data relationships.
- **Commerce OS Boundary**: PASS. Commerce presets remain Commerce-only and do not become cross-OS business classification.
- **Localization / UI Copy**: PASS. User-facing copy must avoid Business Unit terminology.
- **MVP Execution Boundary**: PASS. No backend, no real multi-OS implementation, no full Business Unit management UI, no redesign.

## Project Structure

### Documentation (this feature)

```text
specs/047-onboarding-flow-optimization-v2/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── shared-mock-db-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
packages/
├── types/
│   └── src/core.ts
└── shared/
    └── src/mock-db/
        ├── schema.ts
        ├── seed.ts
        ├── selectors.ts
        └── index.ts

apps/
├── core-platform/
│   ├── lib/store/AppProvider.tsx
│   ├── lib/commerce-url.ts
│   └── app/dashboard/apps/page.tsx
└── commerce/
    ├── lib/store/AppProvider.tsx
    ├── components/shell/ContextSwitcher.tsx
    └── app/(commerce)/

docs/
└── implementation/
    └── target-architecture-v2-alignment.md
```

**Structure Decision**: Use the existing monorepo/shared-package structure. Types and pure mock-store helpers live in shared packages; apps consume them through existing providers. Documentation goes under `docs/implementation/`. No backend or new app is added.

## Complexity Tracking

No constitution violations requiring complexity exceptions.

## Phase 0: Research Summary

See [research.md](./research.md).

## Phase 1: Design Summary

See [data-model.md](./data-model.md), [contracts/shared-mock-db-contract.md](./contracts/shared-mock-db-contract.md), and [quickstart.md](./quickstart.md).

## Post-Design Constitution Check

- **Core/Commerce ownership**: PASS. `OSSubscription` and Product Hub remain Core concerns; Commerce branch/product/order workflows remain Commerce concerns.
- **No backend / no microservices**: PASS. Design targets existing mock data layer only.
- **Business language**: PASS. Product language uses Business while internal `BusinessUnit` remains documented.
- **OS independence**: PASS. Industry type is business-level; Commerce preset remains Commerce-only.
- **Storage/access discipline**: PASS. Contracts require shared selectors/actions and forbid direct page/component storage reads.
