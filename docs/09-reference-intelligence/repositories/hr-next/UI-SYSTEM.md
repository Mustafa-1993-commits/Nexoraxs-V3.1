# hr-next UI System

## UI Surfaces

- Frappe Desk: metadata-generated forms/lists, nine workspaces, two custom pages, 28 reports, 33 charts, and 32 number cards.
- Employee PWA: Vue 3 + Ionic + Frappe UI + Tailwind with mobile-width layout and bottom tabs.
- Roster: Vue 3 + TypeScript + Frappe UI + Tailwind month grid.
- Public web: jobs listing/generator and guest Job Applicant form.

## Reusable PWA Components

FormView/FormField/FormattedField, ListView/ListItem/ListFiltersActionSheet, RequestPanel/RequestList/RequestActionSheet, WorkflowActionSheet, BaseLayout/BottomTabs, file upload/preview, attendance calendar/check-in, leave/expense/salary cards/tables, empty state, tabs, avatar, links, and dialogs.

## UI Behavior

- Loading, empty, error, toast, confirmation, and sticky-action states are implemented across key PWA workflows.
- Responsive behavior centers a `sm:w-96` employee column while mobile uses the viewport.
- Frappe/Ionic controls supply focus and keyboard primitives, but there is no accessibility audit or automated test.
- Runtime translations use Frappe messages; 36 locale catalogs plus a POT file are present. Day.js locale loading remains TODO.
- No explicit light/dark theme switch is implemented in the PWA or roster; verified CSS variables use a light baseline.

## Desk Analytics Assets

| Asset class | Count |
|---|---:|
| Workspaces | 9 |
| Dashboard charts | 33 |
| Number cards | 32 |
| Reports | 28 |
| Pages | 2 |
| Web forms | 1 |

## Framework Coupling

Desk controls, report export, generic list/form rendering, workflow dialogs, accessibility behavior, and most primitive components are framework or `frappe-ui` dependencies. Discovery records the integration, not their uninspected internals.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
