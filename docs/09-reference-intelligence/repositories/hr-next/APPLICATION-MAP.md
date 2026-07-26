# hr-next Application Map

## Applications and Surfaces

| Surface | Technology | Entry/base | Verified responsibilities | Boundary |
|---|---|---|---|---|
| Frappe app | Python, Frappe, ERPNext | `hrms/hooks.py` | HR/Payroll DocTypes, reports, Desk workspaces/pages, APIs, schedules, events, fixtures | Depends on Frappe/ERPNext v17 ranges |
| Employee PWA | Vue 3, Ionic 7, Frappe UI, Vite, Tailwind | `frontend/src/main.js`, `/hrms` | Employee login, profile, attendance, shifts, leave, expenses, advances, salary, approvals, notifications | Employee-bound; framework session/resource APIs |
| Roster | Vue 3, TypeScript, Frappe UI, Vite, Tailwind | `roster/src/main.ts`, `/hr/roster` | Month roster, filters, shift create/update/delete/split/swap/schedule | Authenticated; guarded roster API |
| Frappe Desk | Framework UI + repository fixtures/scripts | `/app`, nine workspaces | Administration, forms, lists, reports, charts, cards, setup | Desk/auth mechanics external |
| Public web | Frappe web templates/forms | jobs routes and `job_application` | Published jobs and guest applicant intake | Frappe website engine external |

## Build and Deployment

Root Yarn scripts install and build `frontend` and `roster` explicitly. Both output into `hrms/public` and copy HTML entries to `hrms/www`. Local Compose provides MariaDB 10.8, Redis, and one Frappe Bench container. GitHub Actions tests backend logic on MariaDB 11.8, lints and scans source, generates translations/assets, and builds version-15 multi-architecture images on its release path.

## Operations Findings

- No production database, Redis, object-storage, proxy, worker-count, backup, monitoring, health-check, Kubernetes, or IaC topology is defined.
- The release image workflow's version-15 branch is inconsistent with the pinned develop branch's v17 dependency range.
- No Vue test harness is defined, and pull-request backend CI ignores UI-only file classes.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
