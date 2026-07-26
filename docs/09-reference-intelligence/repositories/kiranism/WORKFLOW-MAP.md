
# Kiranism Shadcn Workflow Map

## Authentication and Organization

1. Root reads Clerk auth and redirects to sign-in or overview:
   [Page](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/page.tsx).
2. Clerk handles mounted sign-in/sign-up UI:
   [SignInViewPage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/auth/components/sign-in-view.tsx).
3. Dashboard middleware protects dashboard descendants:
   [clerkMiddleware](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts).
4. User chooses/creates an organization, then opens provider-owned team management:
   [WorkspacesPage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/workspaces/page.tsx).
5. Billing requires an active organization; Pro content uses provider plan UI:
   [BillingPage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/billing/page.tsx),
   [ExclusivePage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/exclusive/page.tsx).

## Product and User Demo CRUD

1. Server page parses URL state and prefetches query options.
2. HydrationBoundary transfers query state to a client listing.
3. `useSuspenseQuery` renders a reusable manual-mode data table.
4. Forms validate client values and call mutation options.
5. Service modules mutate process-local arrays; mutation success invalidates feature query keys.
6. Toasts report success/failure; product create/edit navigates back, user form closes its sheet.

Evidence: [product Page](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/product/page.tsx),
[product mutations](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/api/mutations.ts),
[UserFormSheet](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/users/components/user-form-sheet.tsx).
The sibling API handlers are a separate demo surface and are not used by these screens.

## Table Interaction

URL query state controls page, page size, text/facet filters, and sorting. Table callbacks update URL state with debounce
or throttle, reset page on filter changes, and use manual pagination/filter/sort modes. Evidence:
[useDataTable](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-data-table.ts).

## Kanban

Zustand supplies columns; dnd-kit sensors reorder columns/tasks and move tasks across columns; a bounded modifier keeps
drag overlays within the board. New tasks are prepended to backlog. No edit/delete/persistence path exists. Evidence:
[Kanban](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/kanban.tsx),
[useTaskStore](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/kanban/utils/store.ts).

## Chat

Selecting a conversation clears unread state. Enter sends local message content and attachment metadata; Shift+Enter adds
a newline. A fixed response is added after a delay, unread state increments for inactive conversations, the thread scrolls,
and a live region announces the latest message. Evidence:
[Messenger](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/components/messenger.tsx),
[ChatArea](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/chat/components/chat-area.tsx).

## Notifications

Seeded notifications appear in a five-item header center and full tabbed page. Users mark one/all read or activate known
route actions. State is process-local; no ingestion/delivery service exists. Evidence:
[NotificationCenter](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/notifications/components/notification-center.tsx),
[useNotificationStore](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/notifications/utils/store.ts).

## Forms

Typed contexts wrap field components; touched state drives errors; form errors announce and focus the first invalid field.
Examples cover basic inputs, async/debounced and dependent validation, nested arrays, multi-step validation, and sheet/dialog
submission. Evidence: [form composition](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/form-context.tsx),
[advanced patterns](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/forms/components/advanced-form-patterns.tsx).

## Commands, Jobs, Events, Realtime

The repository has build/lint/format/cleanup commands, but no application command bus, queue, worker, scheduled job,
domain-event listener, webhook flow, websocket, or SSE behavior. Simulated chat replies use browser `setTimeout`; they are
not background jobs or realtime transport.
