# Plane Repository Discovery Coverage Report

## Repository and Revision

- Repository ID: `SRC-PLANE`
- Canonical name: `makeplane/plane`
- Local path: `/home/mustafa/projects/Plane`
- Source URL: `https://github.com/makeplane/plane.git`
- Pinned discovered SHA: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Current SHA: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Branch: `preview`
- Working-tree state: Dirty before and after discovery: modified tracked `setup.sh`; untracked `plane-app/` and `setup-repository.sh`; all excluded from evidence
- Discovery mode: Initial
- Discovery timestamp: `2026-07-26T02:24:20+03:00`
- Lifecycle state: **Complete**

## Mandatory Coverage

| Area | Status | Evidence | Gaps |
|---|---|---|---|
| Repository identity and revision | Pass | [Profile](REPOSITORY-PROFILE.md), [E001](EVIDENCE-MANIFEST.md#e001)–[E003](EVIDENCE-MANIFEST.md#e003) | Dirty worktree explicitly excluded; pinned Git tree is reproducible |
| License and license impact | Pass | [License review](LICENSE-REVIEW.md), [E087](EVIDENCE-MANIFEST.md#e087) | Complete dependency/container/asset SBOM remains explicit adoption-stage unknown |
| Repository structure | Pass | [Profile](REPOSITORY-PROFILE.md#repository-census), [E002](EVIDENCE-MANIFEST.md#e002), [E008](EVIDENCE-MANIFEST.md#e008) | None; all 5,250 tracked paths classified |
| Applications and packages | Pass | [Application map](APPLICATION-MAP.md), [Package map](PACKAGE-MAP.md), [E005](EVIDENCE-MANIFEST.md#e005), [E006](EVIDENCE-MANIFEST.md#e006) | Absent enterprise code bounded |
| Runtime entry points | Pass | [Architecture map](ARCHITECTURE-MAP.md), [E005](EVIDENCE-MANIFEST.md#e005), [E040](EVIDENCE-MANIFEST.md#e040) | Runtime not executed |
| Routes and screens | Pass | [Route/screen map](ROUTE-SCREEN-MAP.md), [E010](EVIDENCE-MANIFEST.md#e010)–[E012](EVIDENCE-MANIFEST.md#e012) | Empty extended route contribution excluded |
| APIs and backend handlers | Pass | [API map](API-MAP.md), [E009](EVIDENCE-MANIFEST.md#e009)–[E024](EVIDENCE-MANIFEST.md#e024) | All route modules inspected; tests are representative, not exhaustive |
| Commands, jobs, events, and integrations | Pass | [API map](API-MAP.md#commands), [Workflow map](WORKFLOW-MAP.md), [E044](EVIDENCE-MANIFEST.md#e044)–[E046](EVIDENCE-MANIFEST.md#e046), [E072](EVIDENCE-MANIFEST.md#e072) | Incomplete integration substrates labeled narrowly |
| Data model and storage | Pass | [Data model](DATA-MODEL.md), [E074](EVIDENCE-MANIFEST.md#e074), [E075](EVIDENCE-MANIFEST.md#e075) | Migrations statically inspected, not applied |
| Authentication and security | Pass | [Auth/security map](AUTH-SECURITY-MAP.md), [E025](EVIDENCE-MANIFEST.md#e025), [E029](EVIDENCE-MANIFEST.md#e029), [E073](EVIDENCE-MANIFEST.md#e073) | Provider/live behavior not executed |
| Authorization and permissions | Pass | [Auth/security map](AUTH-SECURITY-MAP.md#authorization-and-tenancy), [E026](EVIDENCE-MANIFEST.md#e026), [E027](EVIDENCE-MANIFEST.md#e027) | Duplicate/divergent permission copy explicit |
| Tenancy, workspace, or organization behavior | Pass | [Data model](DATA-MODEL.md#core-scope-rules), [E012](EVIDENCE-MANIFEST.md#e012) | Plane’s foreign workspace/project semantics are descriptive only |
| State, cache, and persistence | Pass | [Data model](DATA-MODEL.md#storage-and-client-state), [Dependency map](DEPENDENCY-MAP.md), [E039](EVIDENCE-MANIFEST.md#e039), [E048](EVIDENCE-MANIFEST.md#e048) | General offline sync unknown |
| UI system and navigation | Pass | [UI system](UI-SYSTEM.md), [E030](EVIDENCE-MANIFEST.md#e030), [E034](EVIDENCE-MANIFEST.md#e034)–[E038](EVIDENCE-MANIFEST.md#e038) | Browser rendering not executed |
| Workflows and interaction patterns | Pass | [Workflow map](WORKFLOW-MAP.md) | Cross-service page-mentions contradiction explicit |
| Build and configuration | Pass | [Package map](PACKAGE-MAP.md), [E004](EVIDENCE-MANIFEST.md#e004), [E047](EVIDENCE-MANIFEST.md#e047) | No execution results |
| Deployment and operations | Pass | [Architecture map](ARCHITECTURE-MAP.md#operational-shape), [E049](EVIDENCE-MANIFEST.md#e049)–[E053](EVIDENCE-MANIFEST.md#e053) | Kubernetes implementation is external |
| Dependencies and assets | Pass | [Dependency map](DEPENDENCY-MAP.md), [License review](LICENSE-REVIEW.md), [E061](EVIDENCE-MANIFEST.md#e061)–[E063](EVIDENCE-MANIFEST.md#e063) | Transitive licenses/provenance explicit unknown |
| Tests and fixtures | Pass | [Workflow map](WORKFLOW-MAP.md#build-test-and-delivery), [E054](EVIDENCE-MANIFEST.md#e054)–[E060](EVIDENCE-MANIFEST.md#e060), [E090](EVIDENCE-MANIFEST.md#e090), [E091](EVIDENCE-MANIFEST.md#e091) | Tests not run; no browser/a11y suite; CI does not invoke tests |
| Complete feature catalog | Pass | [Markdown catalog](FEATURE-CATALOG.md), [YAML catalog](FEATURE-CATALOG.yaml) | 161 records; no known unclassified evidence-backed capability |
| Feature evidence links | Pass | [Evidence manifest](EVIDENCE-MANIFEST.md) | Every YAML record has a pinned exact source path and claim |
| Cross-feature dependency map | Pass | [Dependency map](DEPENDENCY-MAP.md) | None blocking |
| Unknowns and contradictions | Pass | [Unknowns](UNKNOWNS.md) | 20 unknowns, 9 contradictions, verified absences and exclusions explicit |
| Change detection | Pass | [Change detection](CHANGE-DETECTION.md) | None; pinned and current SHA match |

## Feature-Class Coverage

Counts overlap because one record can have multiple classifications.

| Feature Class | Inspected | Feature Count | Known Gaps |
|---|---:|---:|---|
| Product | Yes | 66 | No ranking/readiness claim |
| UI and interaction | Yes | 55 | No browser/visual execution |
| Administration | Yes | 11 | Commercial billing behavior excluded |
| Authentication and security | Yes | 34 | OAuth/live integrations not executed |
| Authorization and permissions | Yes | 4 | Duplicate permission modules explicit |
| Organization, workspace, and tenancy | Yes | 12 | Plane scope is workspace/project; no other org hierarchy |
| Data and storage | Yes | 53 | Migration execution and broad offline sync unknown |
| Search and bulk operations | Yes | 7 | Search scale not benchmarked |
| Analytics and reporting | Yes | 8 | Runtime chart/export delivery not executed |
| Notifications and collaboration | Yes | 23 | No general work-item realtime stream |
| Realtime, jobs, and automation | Yes | 24 | Page realtime only; Beat duplicate explicit |
| APIs and integrations | Yes | 33 | Incomplete provider substrates labeled |
| Configuration and feature flags | Yes | 15 | Enterprise configuration excluded |
| Themes, accessibility, and localization | Yes | 20 | LTR-only; no accessibility audit |
| Developer tooling and testing | Yes | 25 | CI test-execution gap explicit |
| Deployment and operations | Yes | 34 | Kubernetes chart external; runtime not deployed |
| Reusable internal capabilities | Yes | 16 | Package coupling recorded |

## Completion Contract Audit

- The source was treated as read-only and all evidence was pinned to a committed revision.
- Identity, remote, branch, SHA, dirty state, license, timestamps, and exclusions are recorded.
- All 5,250 tracked files were classified; all six applications and 15 internal packages were mapped.
- The route census includes all React Router definitions and 394 literal Django declarations/includes.
- Current models, 121 migrations, 18 management commands, Celery task modules/schedule, integrations, storage/state/security/UI/deployment/test surfaces were inspected.
- Markdown and YAML catalogs contain the same 161 unique stable `PLANE-*` IDs.
- All 163 machine-record evidence entries are nonempty and resolve to exact blobs in the pinned Git tree.
- Unknowns, contradictions, verified absences, dependency boundaries, license impact, and change detection are explicit.
- All 18 required artifacts are present; YAML parsing, Markdown links, 91 evidence anchors, 90 referenced anchors, source-SHA, and no-source-mutation checks passed.
- The repository registry and cross-repository index were synchronized only from the validated records.

## Completion Decision

- Decision: **Complete**
- Blocking gaps: None. The coverage contract passes. Recorded unknowns, contradictions, exclusions, and non-execution limits do not leave a tracked repository surface or required feature class uninspected.
- Required next actions: None for initial discovery. A source revision or evidence change triggers delta discovery as defined in [CHANGE-DETECTION.md](CHANGE-DETECTION.md).
