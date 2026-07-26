# hr-next Architecture Map

## Runtime Context

```text
Browser
├── Frappe Desk (/app and configured workspaces)
├── Employee PWA (/hrms/*)
├── Shift roster (/hr/roster)
└── Public jobs/job application
        ↓ session + CSRF + whitelisted/resource calls + Socket.IO
Frappe Framework v17 dependency
        ↓ installed app hooks, DocTypes, controllers, reports, scheduler
HRMS app
├── HR module
└── Payroll module
        ↓ required application and extended masters
ERPNext v17 dependency
        ↓ framework persistence/cache/jobs/files/mail
Relational database + Redis + workers/scheduler + external delivery services
```

## Ownership Boundary

HRMS owns its 159 DocType definitions, controllers, report logic, fixtures, workspaces, two Vue applications, whitelisted methods, schedules, and hooks. Frappe owns authentication internals, sessions, generic REST/resource handlers, workflow engine, File mechanics, mail, realtime transport, queues, scheduler runner, Desk primitives, site isolation, and persistence abstraction. ERPNext owns Employee, Company, Department, Branch, Designation, User-facing accounting masters, Projects, Tasks, Timesheets, Payments, Journals, bank records, and loans that HRMS extends.

## Entry Points

| Entry | Source |
|---|---|
| Desk app | `hrms/hooks.py:add_to_apps_screen`, home `/desk/hr-setup` |
| Employee PWA | `frontend/src/main.js`, history base `/hrms` |
| Roster | `roster/src/main.ts`, history base `/hr/roster` |
| Public jobs | `hrms/www/jobs/index.py` |
| Public job application | `hrms/hr/web_form/job_application/job_application.json` |
| Python app install | `hrms/install.py:after_install` |
| Scheduled jobs | `hrms/hooks.py:scheduler_events` |
| Document listeners | `hrms/hooks.py:doc_events` |

## Cross-Layer Flows

- PWA requests use Frappe UI resource helpers plus repository whitelisted methods; session/CSRF behavior remains framework-owned.
- Frappe DocType metadata supplies forms, persistence, permissions, state, and generic API substrate; repository controllers add invariants and side effects.
- Payroll and expenses cross into ERPNext accounting by guarded Payment Entry and Journal Entry hooks.
- Realtime cache invalidation publishes site/user events and reloads PWA resources.
- Long roster and payroll work uses `frappe.enqueue`; recurring work is registered through scheduler hooks.

## Boundaries That Must Not Be Overstated

- No HRMS-owned workspace/tenant/team aggregate exists.
- Employee and organization masters are extended dependencies, not HRMS-owned canonical implementations.
- Generic Frappe APIs, auth internals, deployment security headers, rate limits, storage provider, and production operations are not present in this source.
- The uninitialized `frappe-ui` gitlink is an external dependency boundary; published package usage is verified from both Vue manifests.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
