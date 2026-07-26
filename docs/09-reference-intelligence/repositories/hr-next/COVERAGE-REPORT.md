# hr-next Repository Discovery Coverage Report

## Repository and Revision

- Repository ID/name: `SRC-HRNEXT` / `hr-next`
- Local path: `/home/mustafa/projects/hr-next`
- Source URL: `https://github.com/frappe/hrms.git`
- Pinned/current SHA: `8be64b735e347fdaaf4db3b045605e9a7a9ba856`
- Default/current branch: `develop`
- Working-tree state: clean before and after; zero untracked paths
- Discovery mode/state: `Initial` / `Complete`
- Discovery timestamp: `2026-07-26T19:24:35+03:00`
- Reference lifecycle: `KNOWLEDGE_READY`
- Understanding coverage: `0 / 360 (0.0)`

## Mandatory Coverage

| Area | Status | Evidence | Gaps |
|---|---|---|---|
| Repository identity and revision | Pass | [REPOSITORY-PROFILE.md](REPOSITORY-PROFILE.md) | None |
| License and license impact | Pass | [LICENSE-REVIEW.md](LICENSE-REVIEW.md) | Transitive dependency/asset review remains explicit |
| Repository structure | Pass | [PACKAGE-MAP.md](PACKAGE-MAP.md) | Uninitialized gitlink treated as external dependency boundary |
| Applications and packages | Pass | [APPLICATION-MAP.md](APPLICATION-MAP.md) | None |
| Runtime entry points | Pass | [ARCHITECTURE-MAP.md](ARCHITECTURE-MAP.md) | Framework internals external |
| Routes and screens | Pass | [ROUTE-SCREEN-MAP.md](ROUTE-SCREEN-MAP.md) | Route contradiction recorded |
| APIs and backend handlers | Pass | [API-MAP.md](API-MAP.md) | Generic Frappe APIs external |
| Commands, jobs, events, integrations | Pass | [WORKFLOW-MAP.md](WORKFLOW-MAP.md) | Production worker topology unknown |
| Data model and storage | Pass | [DATA-MODEL.md](DATA-MODEL.md) | External masters/storage provider explicit |
| Authentication and security | Pass | [AUTH-SECURITY-MAP.md](AUTH-SECURITY-MAP.md) | Framework/deployment controls explicit |
| Authorization and permissions | Pass | [AUTH-SECURITY-MAP.md](AUTH-SECURITY-MAP.md) | No HRMS tenant model; external site isolation |
| Organization/tenancy behavior | Pass | [AUTH-SECURITY-MAP.md](AUTH-SECURITY-MAP.md) | Dependency ownership explicit |
| State, cache, persistence | Pass | [DATA-MODEL.md](DATA-MODEL.md) | Production topology unknown |
| UI system and navigation | Pass | [UI-SYSTEM.md](UI-SYSTEM.md) | Framework primitive internals external |
| Workflows and interactions | Pass | [WORKFLOW-MAP.md](WORKFLOW-MAP.md) | None |
| Build and configuration | Pass | [DEPENDENCY-MAP.md](DEPENDENCY-MAP.md) | Version/image contradiction explicit |
| Deployment and operations | Pass | [APPLICATION-MAP.md](APPLICATION-MAP.md) | Production/IaC absence verified |
| Dependencies and assets | Pass | [DEPENDENCY-MAP.md](DEPENDENCY-MAP.md) | External license review remains |
| Tests and fixtures | Pass | [PACKAGE-MAP.md](PACKAGE-MAP.md) | Vue test absence verified; tests not executed |
| Complete feature catalog | Pass | [FEATURE-CATALOG.md](FEATURE-CATALOG.md) | 360 stable records |
| Feature evidence links | Pass | [EVIDENCE-MANIFEST.md](EVIDENCE-MANIFEST.md) | 919/919 resolve |
| Cross-feature dependency map | Pass | [DEPENDENCY-MAP.md](DEPENDENCY-MAP.md) | None |
| Unknowns and contradictions | Pass | [UNKNOWNS.md](UNKNOWNS.md) | 26 unknowns; 8 contradictions |
| Change detection | Pass | [CHANGE-DETECTION.md](CHANGE-DETECTION.md) | Source fingerprint identical |

## Feature-Class Coverage

| Feature class | Inspected | Evidence-backed count | Known gaps |
|---|---:|---:|---|
| Product/HR/Payroll | Yes | 109 | External Employee/org masters explicit |
| UI and interaction | Yes | 60 | Framework primitive internals external |
| Administration/settings | Yes | 23 | Desk implementation external |
| Authentication/security | Yes | 18 | Frappe internals unknown |
| Authorization/permissions | Yes | 15 | Site isolation external |
| Organization/tenancy | Yes | 7 | No HRMS tenant aggregate |
| Data/storage/cache | Yes | 190 | Production storage topology unknown |
| Search/filters/tables | Yes | 38 | Global engine external |
| Reports/analytics/dashboard | Yes | 32 | Framework export behavior external |
| Notifications/realtime | Yes | 12 | Delivery guarantees unknown |
| Jobs/queues/automation | Yes | 16 | Worker topology external |
| APIs/integrations | Yes | 24 | Generic APIs external |
| Themes/accessibility/localization | Yes | 6 | No a11y audit; date locale TODO |
| Testing/developer tooling | Yes | 7 | No Vue test harness |
| Deployment/operations | Yes | 15 | No production/IaC topology |
| Reusable internal capabilities | Yes | 61 | Dependency coupling recorded |

## Completion Decision

- Decision: **Complete**
- Mandatory areas: `24 / 24 Pass`
- Stable feature records: `360`
- Human/machine Feature ID parity: `360 / 360`
- Evidence records resolving at pinned SHA: `919 / 919`
- Unknowns: `26`; contradictions: `8`
- Source before/after fingerprint: identical
- Knowledge Objects: `0`; understanding coverage: `0.0`
- Missing applicable feature classes: none; external dependency boundaries, verified absences, partial seams, and configuration-only behavior are recorded.
- Blocking discovery gaps: none. The uninitialized gitlink is an external package-source boundary rather than uninspected parent-repository implementation; both consuming manifests and the gitlink identity are recorded.

`Complete` means repository inventory coverage passed. It does not mean any capability is deeply understood, selected, ranked, recommended, compared, adapted, approved, production-ready, or implemented in NexoraXS.
