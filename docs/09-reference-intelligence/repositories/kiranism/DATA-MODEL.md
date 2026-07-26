
# Kiranism Shadcn Data and State Model

## Durable Model

There is no durable application data model. No database schema, migration, ORM, repository, server cache, object-storage
adapter, queue store, audit store, or retention process is tracked. The only persistent preferences verified in repository
code are browser/provider-managed theme mode and the client-written active-theme/sidebar cookies.

## Process-Local Entities

| Entity | Fields/relationships | State behavior | Exact evidence |
|---|---|---|---|
| Product | id, photo URL, name, description, created/updated timestamps, price, category | 20 Faker records; in-memory CRUD; no relationship/constraint/index | [Product and fakeProducts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api.ts) |
| User demo row | id, first/last name, email, phone, status, role, timestamps | 50 Faker records; in-memory CRUD; unrelated to Clerk identity | [User and fakeUsers](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api-users.ts) |
| Kanban task | UUID/id, title, priority, description, assignee, due date; belongs to map-key column | Zustand memory; add/reorder/move; no edit/delete/persistence | [Task and KanbanState](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/kanban/utils/store.ts) |
| Conversation/message | contact identity/status, messages, quick replies, auto replies; message attachments metadata | Zustand memory; simulated incoming/outgoing messages | [chat types](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/utils/types.ts); [ChatState](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/utils/store.ts) |
| Notification | id, title, body, status, timestamp, actions | Zustand memory; mark read/all, remove/add functions | [Notification and store](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/notifications/utils/store.ts) |

## Query and URL State

- [getQueryClient](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/lib/query-client.ts) creates per-server clients and one browser singleton,
  sets `staleTime` to 60 seconds, and dehydrates pending queries.
- [searchParams](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/lib/searchparams.ts) types page, page size, name, category, role, and sort URL state.
- [useDataTable](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-data-table.ts) treats pagination, sorting, filters, row selection,
  visibility, and pinning as controlled table state.
- Product/user mutation options invalidate feature query-key roots after mutation; they do not establish durable writes.

## Browser and Provider State

| State | Storage/boundary | Evidence |
|---|---|---|
| active palette | `active_theme` cookie, one year, SameSite=Lax, conditional Secure | [setThemeCookie](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/themes/active-theme.tsx) |
| light/dark/system | next-themes client state/local storage | [ThemeProvider wrapper](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/themes/theme-provider.tsx) |
| sidebar open | `sidebar_state` cookie, seven days | [setOpen](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/sidebar.tsx) |
| Clerk user/org/session/billing | external provider state consumed through hooks/components | [OrgSwitcher](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/org-switcher.tsx) |

## Constraints and Gaps

There are no database constraints, relationships, indexes, soft deletion, retention, object storage, cache invalidation
across processes, or concurrency controls. Product/user identifiers use `records.length + 1`, so deletion can permit ID
reuse/collision in a long-lived process. These are demo limitations, not production data guarantees.
