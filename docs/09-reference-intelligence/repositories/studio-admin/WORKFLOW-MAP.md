
# studio-admin Workflow and Interaction Map

## Implemented Local Workflows

| Workflow | Entry | State/change | Durable result |
|---|---|---|---|
| Preference change/reset | dashboard header controls | root attributes + Zustand + cookie | UI cookie only |
| Sidebar open/collapse | trigger/rail/Command-B | local state + sidebar cookie | UI cookie only |
| Navigation search | header Search/Command-J | cmdk query + route/new tab | navigation only |
| User/role/task/table exploration | dashboard tables | local filters/sort/selection/page | none |
| Kanban drag | Kanban task/column | local React board/order with cancel rollback | none |
| Calendar navigation | calendar toolbar | FullCalendar controller/date summary | none |
| Shipment selection | logistics list | local selected shipment; responsive detail | none |
| Invoice editing | invoice form | local form + derived preview/totals | browser print only |
| Mail selection/layout | mail list/resizer | local selected ID + panel-size cookie | UI cookie only |
| Chat selection/profile | conversation list/thread | local selected ID and open panels | none |
| Auth form submit | login/register form | validation + credential toast | none |

## Substrate/Unbound Workflows

User and role mutations, export, permission review, calendar creation, Kanban create/import/automation, invoice save/send,
mail delivery/actions/search, chat delivery/actions/AI, finance/productivity quick actions, and dashboard report controls
are presentational controls without an executable application workflow.

## Failure and State Feedback

- Form field validation and error messages are implemented for auth UI.
- Tables and command search have no-results states.
- Mail has hydration loading and no-message states.
- External topology fetch catches errors but exposes no user-facing failure message.
- No network/API mutation loading, unauthorized recovery, retry, conflict, queue, or audit workflow exists.
