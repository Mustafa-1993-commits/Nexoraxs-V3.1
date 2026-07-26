# hr-next Unknowns, Contradictions, Exclusions, and Review Notes

## Counts

- Unknowns: **26**
- Contradictions: **8**
- Knowledge Objects: **0**

## Unknowns

| ID | Record |
|---|---|
| `HRNEXT-U001` | The tracked `frappe-ui` gitlink is uninitialized; its internal source at `863eaae9ada2edb287fc09fb21d05212bb5eebe9` was not inspected. The two Vue apps instead pin published `frappe-ui` package version `0.1.105`, whose parent-repository integration is verified. |
| `HRNEXT-U002` | The exact Frappe Framework revision is not locked in this repository; `pyproject.toml` permits a v17 development range. |
| `HRNEXT-U003` | The exact ERPNext revision is not locked in this repository; `pyproject.toml` permits a v17 development range. |
| `HRNEXT-U004` | Production database engine, topology, replication, and connection-pool settings are deployment-owned and absent. |
| `HRNEXT-U005` | Production Redis topology and worker/scheduler process counts are not defined here. |
| `HRNEXT-U006` | Production object-storage provider and bucket policy are delegated to Frappe deployment configuration. |
| `HRNEXT-U007` | Password hashing, session expiry, cookie flags, and administrator login internals are framework-owned and unavailable at the pinned parent revision. |
| `HRNEXT-U008` | The client handles an OTP continuation returned by Frappe, but enabled MFA methods and enrollment policy are not configured in this repository. |
| `HRNEXT-U009` | HTTP and method-level rate limits are not established by source in this repository. |
| `HRNEXT-U010` | Production security headers and CSP policy are not defined by the application source. |
| `HRNEXT-U011` | Frappe site-level multi-tenancy behavior is an external framework/deployment boundary; this repository defines no workspace or tenant aggregate. |
| `HRNEXT-U012` | No browser automation, component-test, or unit-test harness is present for either Vue application. |
| `HRNEXT-U013` | The presence of 36 `.po` catalogs and one template does not prove translation completeness or quality for any locale. |
| `HRNEXT-U014` | No repository accessibility audit, conformance target, or automated accessibility test is present. |
| `HRNEXT-U015` | Installability and service-worker registration are verified, but offline business-operation coverage is not established. |
| `HRNEXT-U016` | Push-notification retry, deduplication, replay, and delivery guarantees are not defined here. |
| `HRNEXT-U017` | Retention and deletion policy for employee, attendance, leave, payroll, attachment, and notification records is not defined. |
| `HRNEXT-U018` | Backup, restore, disaster-recovery, and recovery-point objectives are deployment-owned and absent. |
| `HRNEXT-U019` | Production log aggregation, metrics, distributed tracing, alerting, and SLOs are not configured here. |
| `HRNEXT-U020` | No application health, readiness, or liveness endpoint is defined in the repository. |
| `HRNEXT-U021` | SMTP, Firebase Cloud Messaging, and social-login provider runtime configuration is external. |
| `HRNEXT-U022` | A complete transitive dependency and asset license audit was not possible from parent source alone. |
| `HRNEXT-U023` | Historical patches are present, but their behavior against every supported pre-v17 database state was not executed. |
| `HRNEXT-U024` | Framework-generated REST/resource endpoints are dependency behavior; only repository-owned whitelisted functions and observed Vue resource calls are cataloged as source-owned APIs. |
| `HRNEXT-U025` | No production Kubernetes, Terraform, Helm, or cloud-platform topology is present. |
| `HRNEXT-U026` | Email templates and scheduled senders exist, but deliverability, bounce processing, suppression, and provider webhooks are not represented. |

## Contradictions

| ID | Record |
|---|---|
| `HRNEXT-C001` | Root `package.json` declares `aworkspaces`, not the standard Yarn `workspaces` key, while scripts manually install and build `frontend` and `roster`. The intended workspace grouping is therefore not active package-manager metadata. |
| `HRNEXT-C002` | README marketing says the product has more than 13 modules, while executable Frappe metadata in `hrms/modules.txt` registers exactly `HR` and `Payroll`; these appear to use different meanings of “module”. |
| `HRNEXT-C003` | The current `develop` package requires Frappe/ERPNext v17 development ranges, while the container-image workflow hard-codes `FRAPPE_BRANCH=version-15` and triggers on `version-15`. That workflow is not evidence of a v17 image path for the pinned revision. |
| `HRNEXT-C004` | Local Docker uses MariaDB 10.8, while CI tests against MariaDB 11.8; database parity is not exact. |
| `HRNEXT-C005` | The PWA navigation guard special-cases `/update-password`, but its router defines `/change-password` and no `/update-password` route. |
| `HRNEXT-C006` | The Payroll workspace fixture contains duplicate link/card rows for the same labels and targets. |
| `HRNEXT-C007` | Pull-request CI ignores JavaScript, Vue, CSS, HTML, and translation-only changes even though two shipped browser applications and translated UI assets use those file classes. |
| `HRNEXT-C008` | README links to `TRADEMARK_POLICY.md`, but that path is absent from the pinned tree; trademark terms cannot be verified from this repository revision. |

## Verified Absences and Exclusions

- No HRMS-owned team, workspace, tenant, membership, RBAC engine, user store, administrator auth store, API-token model, webhook platform, global audit subsystem, object-storage adapter, rate-limit policy, CSP/security-header middleware, health endpoint, Kubernetes/IaC deployment, or Vue test harness.
- No Knowledge Object, deep understanding, cross-repository comparison, feature selection, recommendation, adaptation, product design, runtime code, or source copy was created.
- Frappe, ERPNext, and uninitialized `frappe-ui` internals were not inferred as source-owned behavior.
- README/screenshots/filenames/dependencies were search leads only; conflicting marketing/configuration claims remain labeled.

## Review Notes

The most important review boundaries are dependency ownership (Frappe/ERPNext), GPLv3 and trademark constraints, site-level tenancy being external, absent Vue tests, version-15 release-image drift from v17 develop dependencies, and the missing active Yarn-workspace key.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
