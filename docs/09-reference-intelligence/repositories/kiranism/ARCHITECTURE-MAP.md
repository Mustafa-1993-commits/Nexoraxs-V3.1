
# Kiranism Shadcn Architecture Map

## Verified Runtime

The pinned repository is one private Next.js 16 App Router application, not a monorepo. The root
[RootLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx) composes URL state, theme mode, active palette, Clerk,
TanStack Query, toast, and route-progress providers. The protected
[DashboardLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/layout.tsx) adds KBar, the responsive sidebar, sticky header,
page content, and contextual information sidebar.

```text
Next.js App Router
├── public/legal/auth routes
├── Clerk proxy middleware
│   └── auth.protect only /dashboard/**
├── dashboard shell
│   ├── sidebar + organization/account controls
│   ├── header + command trigger + theme + notifications
│   ├── page/feature modules
│   └── information rail
├── server-prefetched TanStack Query screens
│   └── client HydrationBoundary consumers
├── process-local demo services/stores
│   ├── products and users: module-memory Faker records
│   └── kanban, chat, notifications: Zustand memory
└── route handlers
    └── public demo product/user APIs over the same module-memory stores
```

## Layer Boundaries

| Layer | Responsibility | Exact evidence |
|---|---|---|
| App Router | Layouts, pages, redirects, parallel routes, route handlers | [RootLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx); [OverviewLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/overview/layout.tsx) |
| Shared shell | Header, page container, sidebar, information rail | [Header](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/header.tsx); [PageContainer](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/page-container.tsx) |
| Feature modules | UI, queries, mutations, service seams, schemas, local stores | [product service](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/service.ts); [chat store](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/utils/store.ts) |
| Shared UI | Base UI/shadcn-style primitives, composites, forms, table, chart, kanban | [sidebar primitives](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/sidebar.tsx); [form composition](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/tanstack-form.tsx) |
| Configuration | Navigation, information content, data-table settings, themes | [navGroups](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/config/nav-config.ts); [THEMES](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/themes/theme.config.ts) |
| Local demo data | Product/user in-memory records and client stores | [fakeProducts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api.ts); [fakeUsers](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api-users.ts) |
| External providers | Clerk, Sentry, PokeAPI, GitHub stars, Google fonts | [ClerkProvider](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/providers.tsx); [Sentry registration](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts) |

## Runtime Entry Points

- Root document/provider entry: [RootLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx).
- Request proxy: [clerkMiddleware](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts).
- Dashboard shell: [DashboardLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/layout.tsx).
- Browser observability: [client Sentry initialization](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation-client.ts).
- Node/edge observability: [register](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts).
- Production commands: [scripts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/package.json).

## Non-Implemented Runtime Classes

No database/ORM/migrations, queue/worker/scheduler, websocket/SSE/realtime transport, object storage, email/SMS service,
webhook handler, health endpoint, export pipeline, audit log, localization runtime, or project test harness is present.
These absences are coverage results, not inferred feature records.
