
# Kiranism Shadcn Unknowns, Contradictions, and Exclusions

## Unknowns

| ID | Unknown | Evidence boundary / required follow-up |
|---|---|---|
| `U-001` | Exact direct and transitive dependency license obligations beyond the root package were not exhaustively resolved. | Dependency manifests and lockfile were inventoried; legal review remains separate. |
| `U-002` | Clerk session storage, cookie controls, password recovery, MFA, and account-security behavior live in the external provider/package. | Repository source mounts Clerk components but does not implement those internals. |
| `U-003` | Production Clerk organization roles, permissions, domains, membership limits, and dashboard configuration are not in source. | Only client consumption and documentation examples are visible. |
| `U-004` | Clerk Billing plans, prices, entitlements, subscription lifecycle, and payment processing configuration are external. | Source mounts PricingTable and Show only. |
| `U-005` | Whether Clerk keyless mode works for this pinned dependency/configuration was not executed. | The claim exists in env documentation, not repository implementation. |
| `U-006` | The intended authentication and authorization policy for mutable /api/products and /api/users routes is not stated. | They are outside auth.protect and contain no guards. |
| `U-007` | The intended durable database, ORM, cache, object storage, queue, or external backend is unresolved. | Only replacement comments and seams exist. |
| `U-008` | The intended use and handler for WEBHOOK_SECRET is unresolved. | The variable is documented but no tracked webhook route exists. |
| `U-009` | The intended production base URL and consumer for apiClient are unresolved. | No current source import uses it. |
| `U-010` | Sentry organization/project, ingestion, redaction, consent, sampling, retention, and alerting policy are external. | Only SDK configuration is present. |
| `U-011` | The intended production hosting platform is not identified. | Two Docker images exist but no cloud, Kubernetes, Compose, or IaC deployment is tracked. |
| `U-012` | Production secret management and environment injection are not specified. | Only an example env file and Docker build arguments are present. |
| `U-013` | Browser, device, screen-reader, and View Transition compatibility were not executed. | Discovery remained read-only and no test harness exists. |
| `U-014` | Performance, concurrency, load behavior, and bundle-size budgets are not established. | No performance tests or budgets are tracked. |
| `U-015` | Accessibility conformance level and results are unknown. | Code-level patterns and lint rules exist, but no audit or automated accessibility tests do. |
| `U-016` | The intended localization roadmap and RTL behavior are unknown. | Runtime is English-only and uses several physical left/right classes. |
| `U-017` | Third-party font, screenshot, logo, and trademark reuse obligations require asset-specific review. | Root MIT does not resolve trademark questions. |
| `U-018` | Whether the cleanup utility succeeds for every feature combination was not executed. | The script is extensive but has no tracked automated tests. |
| `U-019` | Why several complete primitive and alternative navigation components are unused is not documented. | They may be retained substrate or dead code. |
| `U-020` | The intended behavior of chat audio, video, and conversation-menu controls is unknown. | The labeled buttons have no handlers. |
| `U-021` | The intended storage and delivery behavior for chat attachments is unknown. | Only local metadata is retained. |
| `U-022` | The intended notification ingestion, retention, deletion, and delivery model is unknown. | Notifications are a seeded local store. |
| `U-023` | The intended meaning of the unrendered Kanban Review column label is unknown. | The label registry contains it; initial column state does not. |
| `U-024` | The intended product-image upload and edit workflow is unresolved. | Validation requires an image while mutation data excludes it. |
| `U-025` | Runtime build/lint/type behavior at the pinned revision was not executed. | Executing source-repository tooling could change ignored output and violate the required fingerprint boundary. |

## Contradictions

| ID | Claim or configuration | Conflicting executable fact | Exact evidence |
|---|---|---|---|
| `C-001` | README/public LLM guide describes all features as production-ready and not demo-only. | Executable product/user state is explicitly in-memory mock data; chat, kanban, and notifications are local stores with persistence disabled. | [README.md](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/README.md); [public/llms.txt](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/public/llms.txt); [src/constants/mock-api.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api.ts); [src/features/chat/utils/store.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/utils/store.ts) |
| `C-002` | Public guide says patterns can be copied into production as-is. | The pinned APIs are unprotected/unvalidated, durable persistence is absent, and discovery/license governance forbids copying. | [public/llms.txt](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/public/llms.txt); [src/proxy.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts); [src/app/api/products/route.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/route.ts) |
| `C-003` | Navigation access configuration documentation presents plan/feature as visibility controls. | useFilteredNavItems logs a warning and returns the item visible without evaluating the requirement. | [src/config/nav-config.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/config/nav-config.ts); [docs/nav-rbac.md](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/docs/nav-rbac.md); [src/hooks/use-nav.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-nav.ts) |
| `C-004` | README names Clerk Protect as the exclusive-screen component. | The pinned screen imports and renders Clerk Show. | [README.md](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/README.md); [src/app/dashboard/exclusive/page.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/exclusive/page.tsx) |
| `C-005` | components.json points shadcn generation at app/globals.css. | The tracked runtime stylesheet is src/styles/globals.css and there is no app/globals.css. | [components.json](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/components.json); [src/app/layout.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx); [src/styles/globals.css](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/styles/globals.css) |
| `C-006` | env.example.txt uses NEXT_PUBLIC_SENTRY_DISABLED="false" to represent enabled Sentry. | Source checks only value presence; the non-empty string false enters the disabled branch. | [env.example.txt](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/env.example.txt); [next.config.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/next.config.ts); [src/instrumentation.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts) |
| `C-007` | Product form validation requires exactly one image. | ProductMutationPayload and ProductForm submission omit image, so selected data is never persisted. | [src/features/products/schemas/product.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/schemas/product.ts); [src/features/products/components/product-form.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/components/product-form.tsx); [src/features/products/api/types.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/types.ts) |
| `C-008` | The same required-image schema is used for product edits. | Edit defaultValues sets image to undefined, requiring an unrelated new image before update. | [src/features/products/components/product-form.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/components/product-form.tsx); [src/features/products/schemas/product.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/schemas/product.ts) |
| `C-009` | Kanban title configuration includes a Review column. | Initial state omits the review key and rendering iterates only state keys, so no Review column appears. | [src/features/kanban/components/board-column.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/kanban/components/board-column.tsx); [src/features/kanban/utils/store.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/kanban/utils/store.ts); [src/features/kanban/components/kanban-board.tsx](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/kanban/components/kanban-board.tsx) |
| `C-010` | README/public guide describes end-to-end CRUD and API-layer patterns as real production behavior. | The screens bypass sibling route handlers and call process-local fake service modules directly. | [README.md](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/README.md); [src/features/products/api/service.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/service.ts); [src/features/products/api/queries.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/queries.ts); [src/app/api/products/route.ts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/route.ts) |

## Verified Absences

- No durable database, ORM, migrations, object storage, server cache, queue, scheduler, worker, or event bus.
- No webhook handler, signature/replay verification, health endpoint, export/import pipeline, or realtime transport.
- No project test harness, Storybook, accessibility/visual testing, or CI/CD workflow.
- No custom forgot/reset password, MFA, API key/token, session administration, SSO/SAML/OIDC/SCIM, audit log, or
  instance-admin implementation.
- No localization runtime, translation resources, locale routing, RTL rules, or Arabic surface.
- No server-side authorization/tenant scoping on demo product/user routes or records.

## Discovery Exclusions

- No Knowledge Object or deep-understanding artifact was created.
- No comparison with Plane, BoxyHQ, Laravel Starter, NexoraXS, or any other repository was performed.
- No feature was selected, ranked, recommended, adapted, approved, or implemented.
- No source code, design token file, component, theme, asset, skill, or dependency was copied.
- External provider internals were not reverse-engineered or claimed as repository behavior.
- README, screenshots, dependencies, file names, route names, and public LLM claims were not treated as standalone
  feature proof.
