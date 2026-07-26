
# Kiranism Shadcn Dependency and Coupling Map

## Runtime Dependency Groups

| Concern | Direct dependencies | Verified consumers |
|---|---|---|
| Framework | Next `16.2.6`, React/React DOM `19.2.4`, TypeScript `5.7.2` | [App Router root](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx) |
| UI foundation | Base UI, Tailwind 4, CVA, clsx, tailwind-merge, tw-animate, Tabler icons | [Button](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/button.tsx); [global styles](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/styles/globals.css) |
| Auth/tenant/billing | Clerk Next.js | [middleware](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts); [OrgSwitcher](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/org-switcher.tsx) |
| Data/cache | TanStack Query + Devtools, nuqs, match-sorter, Faker | [query client](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/lib/query-client.ts); [mock store](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api.ts) |
| Tables/forms | TanStack Table, TanStack Form, Zod | [table hook](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-data-table.ts); [form API](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/tanstack-form.tsx) |
| Interaction | dnd-kit, Zustand, Motion, Sonner, cmdk/KBar, date-fns, dropzone, resizable panels | [kanban](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/kanban.tsx); [KBar](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/kbar/index.tsx) |
| Visualization | Recharts | [AreaGraph](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/overview/components/area-graph.tsx) |
| Observability | Sentry Next.js | [Sentry register](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts) |

All exact version constraints are in [package.json](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/package.json) and resolved packages in
[bun.lock](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/bun.lock). Dependency license resolution is an explicit unknown; package presence is not used
as product-feature evidence.

## Cross-Layer Feature Dependencies

| Capability | Upstream dependencies | Downstream consumers/coupling |
|---|---|---|
| Dashboard shell | Clerk, cookies, KBar, sidebar/infobar primitives, nav config | every dashboard page |
| Navigation | navGroups → Clerk membership hooks → sidebar/KBar | exact route strings and provider organization state |
| Product/user screens | server URL parsers → Query client → feature queries/services → in-memory records → table/forms | coupled to response field names and process-local store |
| Data table | TanStack Table + nuqs + parser/metadata types + UI filter primitives | product and user listing |
| Form system | TanStack Form contexts + wrapper fields + Zod + UI controls | product/user/example forms |
| Kanban | dnd-kit generic primitive + Zustand task store + feature presentation | local state shape and item IDs |
| Chat | Zustand store + Motion + file preview + local static data | no backend seam |
| Notifications | Zustand store + notification card + router | fixed action IDs/routes |
| Themes | next-themes + palette cookie/provider + CSS token files + fonts + KBar actions | whole application/provider styling |
| Auth/organization/billing | Clerk provider/middleware/components/hooks | dashboard access, sidebar identity, nav visibility, org/billing screens |

## Coupling and Isolation Assessment

- UI primitives and hooks are source-level reusable capabilities but remain coupled to Tailwind semantic tokens, Base UI
  wrapper shapes, shared aliases, Tabler icons, and React/Next conventions.
- Product/user query and table patterns are structurally separated, but current service and response shapes are coupled to
  mock records and contain no authorization/tenancy/persistence contract.
- Clerk surfaces are strongly coupled to provider components, hooks, dashboard configuration, and provider billing semantics.
- Chat/kanban/notification behavior is cohesive in feature folders but has no persistence/integration boundary.
- No isolation rating is a recommendation. Any later reuse requires explicit retrieval/deep understanding and license,
  security, accessibility, localization, tenancy, and architecture review.
