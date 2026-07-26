
# Kiranism Shadcn API and Integration Map

## Next Route Handlers

| Method | Route | Verified behavior | Security/data boundary | Exact evidence |
|---|---|---|---|---|
| GET | `/api/products` | List/search/filter/sort/page mock products | public demo | [src/app/api/products/route.ts — GET](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/route.ts) |
| POST | `/api/products` | Create a process-local product | public demo; body unvalidated | [src/app/api/products/route.ts — POST](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/route.ts) |
| GET | `/api/products/:id` | Get a process-local product or 404 | public demo | [src/app/api/products/[id]/route.ts — GET](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/%5Bid%5D/route.ts) |
| PUT | `/api/products/:id` | Update a process-local product or 404 | public demo; body unvalidated | [src/app/api/products/[id]/route.ts — PUT](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/%5Bid%5D/route.ts) |
| DELETE | `/api/products/:id` | Delete a process-local product or 404 | public demo | [src/app/api/products/[id]/route.ts — DELETE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/%5Bid%5D/route.ts) |
| GET | `/api/users` | List/search/filter/sort/page mock users | public demo | [src/app/api/users/route.ts — GET](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/users/route.ts) |
| POST | `/api/users` | Create a process-local user | public demo; body unvalidated | [src/app/api/users/route.ts — POST](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/users/route.ts) |
| PUT | `/api/users/:id` | Update a process-local user or 404 | public demo; body unvalidated | [src/app/api/users/[id]/route.ts — PUT](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/users/%5Bid%5D/route.ts) |
| DELETE | `/api/users/:id` | Delete a process-local user or 404 | public demo | [src/app/api/users/[id]/route.ts — DELETE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/users/%5Bid%5D/route.ts) |

The product/user UI does **not** call these handlers. Query options call
[product service](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/service.ts) and
[user service](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/users/api/service.ts) directly, and those services call module-memory
stores. The generic [apiClient](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/lib/api-client.ts) is a complete but unused substrate for a
future `/api` boundary.

## External HTTP and Provider Integrations

| Integration | Verified repository behavior | Boundary | Evidence |
|---|---|---|---|
| Clerk | Provider components, middleware protection, organization/billing/account UI | Provider internals and dashboard config external | [ClerkProvider](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/providers.tsx); [clerkMiddleware](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts) |
| Sentry | Conditional browser/Node/edge instrumentation and build integration | Ingestion, retention, org/project external | [register](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts); [withSentryConfig](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/next.config.ts) |
| PokeAPI | Server/client TanStack query demonstration | Public external API | [pokemonOptions](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/react-query-demo/api/queries.ts) |
| GitHub API | Fetches repository star count on sign-up; falls back to zero | Public external API | [GitHub fetch](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/auth/sign-up/%5B%5B...sign-up%5D%5D/page.tsx) |
| Google fonts | Loads configured families through Next font integration | Build/runtime behavior depends on Next font | [font configuration](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/themes/font.config.ts) |

## Absent Backend Classes

No OpenAPI/GraphQL/RPC schema, API versioning, API key/token surface, rate limiter, CSRF implementation, server-side
Zod body validation, webhook handler/signature verification, queue/job/event bus, scheduler, email/SMS delivery, websocket,
SSE, export/import, or health endpoint is tracked.
