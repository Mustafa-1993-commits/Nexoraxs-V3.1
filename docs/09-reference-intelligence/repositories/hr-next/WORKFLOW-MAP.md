# hr-next Workflow Map

## Major Business Workflows

| Workflow | Entry | Core records/transitions | Side effects |
|---|---|---|---|
| Recruitment | Staffing Plan/Requisition/Opening/public application | Applicant → Interview/Feedback → Offer → Employee | reminders, website publication, analytics |
| Onboarding | template or Job Offer | Onboarding activities/tasks → completed Employee | optional emails, Project/Task coordination |
| Performance | Appraisal Cycle/template/goals | feedback and score collection → appraisal completion | cycle summaries, analytics |
| Attendance | check-in/tool/request | check-in → shift resolution → attendance; request submit/approve | auto-attendance, telemetry, calendar |
| Shift scheduling | request/tool/roster | assignment/schedule create, split, merge, swap, expire | queued long generation, reminders |
| Leave | type/period/policy/allocation | request validation → approval → ledger; adjustment/encashment/expiry | scheduled allocation/expiry, payroll link |
| Expenses | advance/claim/travel/vehicle | submit → approval → payment/accounting | Payment/Journal synchronization |
| Employee lifecycle | onboarding/promotion/transfer/separation/exit/F&F | submitted HR documents update Employee and settlement state | emails, tasks, accounting |
| Payroll | structure/assignment/entry | employee selection → salary slip create/submit → accounting/payment | background jobs, loans, tax, email |
| Benefits/tax | periods/slabs/declarations/proofs/benefits | declaration/application/claim → salary calculations | regional rules, reports |
| Notifications | request/document events | persistent PWA record → unread/read/reference navigation | realtime refresh, optional push/email |

## Failure and Guard Paths

- DocType controllers validate dates, overlaps, balances, status, dependency records, permissions, and submitted-document state.
- Roster rejects unallowlisted filters and unauthorized Employee/Shift operations.
- PWA redirects unauthenticated or non-Employee users and displays resource errors.
- Long work is queued, but production retry/dead-letter/topology behavior is framework/deployment-owned.

## Scheduler Map

- all: interview reminders.
- hourly: daily work summary triggers.
- hourly-long: check-in sync, automatic attendance, recurring shift creation.
- daily: birthdays, anniversaries, daily summaries, interview feedback, expired shifts/openings, attendance telemetry.
- daily-long: leave expiry, leave encashment, earned leave allocation.
- weekly/monthly: advance employee reminders.

## Realtime and Events

Document hooks react to User, Company, Holiday List, Timesheet, Payment, Journal, Employee, Project, Task, request, setup, payroll, and milestone events. PWA cache invalidation and salary/employee changes are published over Frappe realtime.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
