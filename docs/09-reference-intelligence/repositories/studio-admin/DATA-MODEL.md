
# studio-admin Data and State Model

## Persistence Boundaries

| Boundary | State | Data |
|---|---|---|
| Source fixtures | partial/demo | users, roles, tasks, mail, chat, shipments, invoice defaults, calendar events, dashboard rows |
| React state | ephemeral | table controls, Kanban board/order, open panels, screen filters, calendar selectors |
| Zustand | ephemeral | mail selection, chat selection; preference state is persisted separately |
| Browser cookies | durable presentation preference | seven preferences, sidebar open state, mail panel sizes |
| Server cookie actions | narrow state seam | generic cookie read/write and typed preference read |
| External browser data | transient | world-atlas topology for shipment map |
| Database/cache/object storage | absent | no durable application record store |

## Domain-Shaped Records

| Record | Fields/relationships | Evidence |
|---|---|---|
| User row | identity, role, teams, status, workspace, joined date | [UserRow](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/users/_components/data.tsx) |
| Role | name, description, type, owner, members, permission count, status, review date | [Role](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/roles/_components/roles-table/data.ts) |
| Task | ID, title, status, label, priority | [taskSchema](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/tasks/_components/data.ts) |
| Kanban task | column, team, priority, progress, owner, due date, insight counts | [Task and BoardState](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/kanban/_components/types.ts) |
| Invoice | from/to parties, reference/dates, tax, discount, line items | [InvoiceFormValues](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/invoice/_components/data.ts) |
| Shipment | status/mode/route, locations, customer, handling, cargo, progress | [Shipment](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/logistics/_components/shipment-data.ts) |
| Mail | sender/recipients, subject/body, timestamp, folders/labels, attachments | [Mail](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/mail/_components/data.tsx) |
| Conversation | contact profile and message records | [Conversation](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/chat/_components/data.ts) |

These shapes are fixture/view models, not canonical persisted entities. There are no migrations, constraints, indexes,
foreign keys, tenant keys, soft deletion, retention policy, encryption-at-rest boundary, or object-storage lifecycle.
