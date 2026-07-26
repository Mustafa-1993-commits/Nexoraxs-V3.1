# hr-next Dependency Map

## Runtime Dependencies

| Dependency | Verified use | Coupling/unknown |
|---|---|---|
| Frappe Framework v17 dev range | auth/session, DocTypes, ORM, Desk, web, files, workflows, mail, realtime, cache, jobs, scheduler, translations | Exact revision and internal behavior unpinned |
| ERPNext v17 dev range | Employee/org masters, accounting, projects/tasks/timesheets, payments/journals/bank, loan integration | Required app; exact revision unpinned |
| MariaDB | local and CI persistence | Local 10.8; CI 11.8; production unknown |
| Redis | local cache/queue service | Production topology unknown |
| Vue 3 | PWA and roster | Separate package locks |
| Frappe UI 0.1.105 | resources and UI primitives | Gitlink also tracked but uninitialized |
| Ionic Vue 7 | employee PWA shell | PWA only |
| Vite 5 | two browser builds | Source maps enabled |
| Tailwind 3 | two browser surfaces | Independent configs |
| Firebase 10 | push messaging | Provider configuration external |
| Socket.IO client | realtime invalidation | Frappe Socket.IO server external |
| Day.js | date handling | locale loading incomplete |

## Internal Dependency Relationships

- Payroll depends on HR Employee/attendance/leave concepts and ERPNext accounting/loan masters.
- Leave and attendance depend on Employee, Company, Department, Holiday List, Shift, and approver/workflow configuration.
- Expenses depend on accounting defaults, advances, payments, journals, currencies, and File attachments.
- Recruitment feeds onboarding and Employee master creation.
- Roster depends on Employee, Shift Type/Location/Assignment/Schedule, Leave Application, Holiday List, Frappe resources, and permission checks.
- Employee PWA depends on repository APIs, Frappe generic resources, active Employee binding, translation boot, Socket.IO, and optional push relay.
- Workspaces and reports depend on DocTypes and framework-generated navigation/report execution.

## Extension Seams

Hook maps, class overrides, document events, regional overrides, scheduler entries, global-search configuration, dashboard overrides, setup custom fields, whitelisted methods, PWA composables/components, and roster API/resource boundaries are verified extension seams.

## License and Service Risks

Repository code is GPL-3.0-only. External packages, published `frappe-ui`, icons/images, Frappe/ERPNext, Firebase, social identity providers, SMTP, and hosting retain separate licenses/terms. No source or asset reuse is authorized by this map.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
