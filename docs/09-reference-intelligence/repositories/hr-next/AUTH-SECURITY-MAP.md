# hr-next Authentication and Security Map

## Authentication

| Capability | Verified implementation | Boundary |
|---|---|---|
| Session | PWA reads Frappe `user_id` cookie; resources confirm authentication | Cookie flags/expiry/session storage external |
| Password login | Calls Frappe `login` and supports password-reset response | Password hashing and lock policy external |
| OTP | Client continues returned OTP challenge | Enrollment and enabled methods external |
| Social OAuth | Guest endpoint lists only configured providers with usable server-side secret | Provider lifecycle belongs to Frappe Social Login Key |
| Recovery/change/logout | Calls Frappe user reset/update/logout methods | Server internals external |
| Roster | Loads current user or redirects to Frappe login | No separate roster auth store |
| Admin | Frappe Desk authentication | No HRMS-specific administrator auth |

## Authorization

- DocType fixtures configure operation- and role-level permissions for Employee, HR User, HR Manager, System Manager, approver, interviewer, fleet, accounts, project, and other roles.
- PWA APIs derive current employee and distinguish self records from approval queues.
- Approvers resolve through Employee and Department configuration or Frappe Workflow state rules.
- Roster mutations enforce Employee read and Shift Assignment create/write/delete/cancel checks.
- File operations check parent and File permissions.
- Apps-screen visibility calls an HRMS permission function.
- Client route/nav visibility is not represented as sufficient server authorization.

## Organization and Tenancy

Company, Department, Branch, Designation, Employee Grade, Employment Type, and reporting relationships scope data and filters. These masters are ERPNext/Frappe dependencies. No HRMS-owned team, workspace, membership, tenant identifier, or cross-site tenancy model exists. Frappe site isolation is external and therefore Unknown.

## Security Controls and Gaps

| Area | Finding |
|---|---|
| CSRF | Tokens injected into PWA and roster HTML contexts |
| API types | Type annotations required; test validator configured |
| Input filtering | Roster filters allowlisted; Frappe method typing/permissions used |
| Secrets | OAuth secret decrypted server-side only; other provider secrets external |
| Files | Parent permission checks and private flag |
| Static analysis | Ruff, Semgrep, AST/YAML/conflict checks |
| Rate limiting | Unknown/external |
| CSP/headers | Unknown/external |
| User-data redaction map | Commented example only; not configured |
| Retention/audit | DocType track/change metadata varies; global policy unknown |

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
