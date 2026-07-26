
# studio-admin Architecture Map

## Verified Runtime

```text
Next.js 16 App Router / React 19
├── static root provider shell
│   ├── pre-hydration preference boot
│   ├── Zustand preference store
│   ├── tooltips
│   └── Sonner viewport
├── dashboard shell
│   ├── responsive cookie-backed sidebar
│   ├── path-driven navigation + command search
│   ├── layout/theme controls
│   └── 13 current/legacy dashboard and workflow areas
├── standalone chat shell
├── standalone mail shell
├── four authentication UI examples
├── embedded fixture modules / component state
└── one external browser fetch for world-atlas topology
```

## Layer Boundaries

| Layer | Responsibility | Evidence |
|---|---|---|
| App Router | 32 pages, five layouts, redirect/catch-all boundaries | [RootLayout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/layout.tsx); [dashboard Layout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/layout.tsx) |
| Shared shell | Sidebar, header, content inset, layout controls, search, user menus | [sidebar primitives](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/components/ui/sidebar.tsx); [AppSidebar](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/_components/sidebar/app-sidebar.tsx) |
| Screen modules | Dashboards, calendar, kanban, tasks, invoice, logistics, users, roles, mail, chat | [Kanban](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/kanban/_components/kanban.tsx); [MailComponent](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/mail/_components/mail.tsx) |
| Shared UI | 60 tokenized primitives plus date range, calendar adapter, and icon adapter | [button](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/components/ui/button.tsx); [chart](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/components/ui/chart.tsx) |
| State | React local state, three Zustand stores, browser/server cookies | [preferences store](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/stores/preferences/preferences-store.ts); [chat store](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/chat/_components/use-chat.ts) |
| Data | Embedded TypeScript/JSON records and derived calculations | [task records](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/tasks/_components/data.ts); [invoice model](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/invoice/_components/data.ts) |
| External integration | World Atlas CDN, Google fonts, Simple Icons, GitHub link | [map fetch](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/logistics/_components/shipment-route-map.tsx) |

## Runtime Entry Points

- Root document: [RootLayout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/layout.tsx).
- Dashboard shell: [Layout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/layout.tsx).
- Standalone chat: [Layout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/chat/layout.tsx).
- Standalone mail: [Layout](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/mail/layout.tsx).
- Only server-action file: [cookie actions](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/server/server-actions.ts).
- Request proxy is dormant: [disabled proxy](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/proxy.disabled.ts).
- Runtime commands: [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json).

## Negative Runtime Boundaries

There is no active proxy/auth provider, API route handler, database/ORM/migration, backend service, durable cache,
object storage, queue/worker/scheduler, event bus, webhook, websocket/SSE, notification transport, audit store,
observability provider, health endpoint, localization runtime, test harness, CI workflow, or deployment manifest.
These are verified coverage results, not inferred features.
