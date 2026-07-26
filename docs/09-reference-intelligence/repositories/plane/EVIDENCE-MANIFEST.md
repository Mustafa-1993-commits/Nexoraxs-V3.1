# Plane Evidence Manifest

## Evidence Rules

All source paths are relative to `/home/mustafa/projects/Plane` and were read at commit `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4` with `git show`, `git grep`, or `git ls-tree`. A path/symbol supports only the claim stated here. README evidence is contextual and is never the sole proof for a verified feature.

### E001

- Kind: Git repository metadata
- Source: `.git` object/ref metadata; commands `git remote get-url origin`, `git branch --show-current`, `git rev-parse HEAD`, `git show -s --format=fuller HEAD`
- Exact evidence: remote `https://github.com/makeplane/plane.git`; branch `preview`; SHA `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`; commit date/subject recorded in the profile.
- Supports: Repository identity and immutable discovery pin.

### E002

- Kind: Git tree/index census
- Source: `git ls-tree -r --name-only HEAD`, `git ls-files -s`, `git submodule status`
- Exact evidence: 5,250 tracked files; index-list fingerprint `01351ee560f9bd87a886285c3317145540a08cae3ff9e0b78c87be27e7100334`; no submodules.
- Supports: Complete tracked-file boundary and census.

### E003

- Kind: Git working-tree status
- Source: `git status --short --branch`, `git status --porcelain=v2`
- Exact evidence: tracked `setup.sh` modified; `plane-app/` and `setup-repository.sh` untracked before discovery.
- Supports: Dirty-state disclosure and worktree-only exclusion.

### E004

- Kind: Build/workspace configuration
- Source: `package.json` (`scripts`, `engines`, `packageManager`, `lint-staged`); `pnpm-workspace.yaml`; `turbo.json`; `.husky/pre-commit`
- Supports: pnpm/Turbo workspace, Node requirement, task graph, pre-commit format/lint.

### E005

- Kind: Runtime application manifests/entry points
- Source: `apps/{web,admin,space,live}/package.json`; `apps/api/{manage.py,plane/asgi.py,plane/wsgi.py}`; `apps/proxy/Caddyfile.ce`
- Supports: Six deployable application runtimes.

### E006

- Kind: Package manifests
- Source: `packages/*/package.json`
- Exact evidence: 15 internal package names, descriptions, exports, scripts, and versions.
- Supports: Internal package inventory.

### E007

- Kind: Extension boundary source
- Source: `apps/web/app/routes/extended.ts`; `apps/admin/providers/extended.tsx`; `apps/space/hooks/oauth/extended.tsx`; `apps/live/src/services/page/extended.service.ts`; `packages/editor/src/{ce,ee}`
- Supports: Core/extended and CE/EE seams; absence of executable Community extended routes.

### E008

- Kind: Tree census
- Source: full `git ls-tree` path classification
- Exact evidence: application/package counts, 3,798 source/tooling files, 532 locale resources, 121 migrations, 71 tests, 508 binary/SVG assets, and remaining classes totaling 5,250.
- Supports: Repository coverage and asset census.

### E009

- Kind: Root/API URL configuration
- Source: `apps/api/plane/urls.py`; every `apps/api/plane/{app,api,space,authentication,license,web}/urls*.py`
- Exact evidence: 394 literal `path`/`re_path` declarations/includes; root prefixes `/api/`, `/api/public/`, `/api/instances/`, `/api/v1/`, `/auth/`.
- Supports: Complete route-module census and API surface separation.

### E010

- Kind: Web/auth routes and handlers
- Source: `apps/web/app/routes/core.ts` (`coreRoutes`); `apps/api/plane/authentication/urls.py`; `apps/api/plane/authentication/views/{app,space}`; `apps/api/plane/authentication/provider`
- Supports: Main screen tree, legacy redirects, password/magic/OAuth/auth routes.

### E011

- Kind: Admin routes/screens
- Source: `apps/admin/app/routes.ts`; `apps/admin/app/(all)/(dashboard)/**`; `apps/admin/store/*`
- Supports: Admin sign-in, general/workspace/email/auth/AI/storage screens and state.

### E012

- Kind: Workspace/project source
- Source: `apps/api/plane/app/urls/{workspace,project}.py`; `apps/api/plane/app/views/{workspace,project}`; `apps/api/plane/db/models/{workspace,project,deploy_board}.py`; matching web route/components/services/stores
- Supports: Workspace/project CRUD, membership, invitation, role, settings, publication, archive, preferences.

### E013

- Kind: Work-item source
- Source: `apps/api/plane/app/urls/issue.py`; `apps/api/plane/app/views/issue/*`; `apps/api/plane/db/models/{issue,label,state,estimate,draft,issue_type}.py`; `apps/web/core/components/issues/**`; `apps/web/core/services/issue/**`; `apps/web/core/store/issue/**`
- Supports: Work-item lifecycle, properties, collaboration, hierarchy, relations, assets, bulk/archive/version behavior.

### E014

- Kind: Cycle source
- Source: `apps/api/plane/app/urls/cycle.py`; `apps/api/plane/app/views/cycle/*`; `apps/api/plane/db/models/cycle.py`; `apps/web/core/components/cycles/**`
- Supports: Cycle CRUD, membership/transfer, favorites/properties, archive, progress/analytics.

### E015

- Kind: Module source
- Source: `apps/api/plane/app/urls/module.py`; `apps/api/plane/app/views/module/*`; `apps/api/plane/db/models/module.py`; `apps/web/core/components/modules/**`
- Supports: Module CRUD, status/lead/member fields, issue membership, links, favorites, archive, progress/Gantt.

### E016

- Kind: Page API/data source
- Source: `apps/api/plane/app/urls/page.py`; `apps/api/plane/app/views/page/*`; `apps/api/plane/db/models/{page,description}.py`
- Supports: Page lifecycle, access, lock, binary description, versions, favorite/archive/duplicate.

### E017

- Kind: Intake source
- Source: `apps/api/plane/app/urls/intake.py`; `apps/api/plane/app/views/intake/base.py`; `apps/api/plane/db/models/intake.py` (`IntakeIssueStatus`); `apps/web/core/components/inbox/**`
- Supports: Intake configuration, pending/rejected/snoozed/accepted/duplicate triage, filters and actions.

### E018

- Kind: Analytics source
- Source: `apps/api/plane/app/urls/analytic.py`; `apps/api/plane/app/views/analytic/**`; `apps/api/plane/db/models/analytic.py`; `apps/web/core/components/analytics/**`
- Supports: Workspace/project analytics, analytic views, charts/filters, export entry.

### E019

- Kind: Notification source
- Source: `apps/api/plane/app/urls/notification.py`; `apps/api/plane/app/views/notification/base.py`; `apps/api/plane/db/models/notification.py`
- Supports: Notification list/detail/read/archive/unread/mark-all-read and preferences.

### E020

- Kind: Search/view source
- Source: `apps/api/plane/app/urls/{search,views}.py`; `apps/api/plane/app/views/search/base.py` (`GlobalSearchEndpoint`); `apps/api/plane/db/models/view.py`; `apps/web/core/components/{views,workspace/views}`
- Supports: Membership-scoped global/entity/project search and saved project/workspace views.

### E021

- Kind: Asset source
- Source: `apps/api/plane/app/urls/asset.py`; `apps/api/plane/app/views/asset/{base,v2}.py`; `apps/api/plane/db/models/asset.py`; `apps/api/plane/bgtasks/{file_asset_task,storage_metadata_task,copy_s3_object}.py`; `apps/web/core/services/file.service.ts`
- Supports: Workspace/user/project assets, upload status, restore, duplicate, bulk, download, metadata, cleanup.

### E022

- Kind: Webhook source
- Source: `apps/api/plane/app/urls/webhook.py`; `apps/api/plane/app/views/webhook/base.py`; `apps/api/plane/db/models/webhook.py`; `apps/api/plane/bgtasks/webhook_task.py`; `apps/web/core/components/web-hooks/**`
- Supports: Webhook CRUD, secret regeneration, delivery/log lifecycle.

### E023

- Kind: External public API source
- Source: `apps/api/plane/api/urls/**`; `apps/api/plane/api/views/**`; `apps/api/plane/api/middleware.py`
- Supports: `/api/v1` API-key contract for users, projects, members, work items, cycles, modules, states, labels, estimates, intake, assets, stickies.

### E024

- Kind: Space/public source
- Source: `apps/space/app/routes.ts`; `apps/space/components/**`; `apps/space/store/**`; `apps/api/plane/space/urls/**`; `apps/api/plane/space/views/**`
- Supports: SSR Space board, public project/issue/intake/asset APIs, filters/layouts, comments/reactions/votes, auth forms.

### E025

- Kind: Authentication/security configuration
- Source: `apps/api/plane/settings/common.py`; `apps/api/plane/middleware/admin_session.py`; `apps/api/plane/throttles/authentication.py`; `apps/api/.env.example`
- Supports: DRF defaults, session/admin cookies, CSRF/CORS, password reset/validation, throttles, secret handling.

### E026

- Kind: Active permission code
- Source: `apps/api/plane/app/permissions/{base,workspace,project,page}.py`; imports from `apps/api/plane/app/views/**`
- Supports: Workspace/project/page membership and role enforcement; code/comment mismatch `C-006`.

### E027

- Kind: Contradictory permission copies
- Source: `apps/api/plane/utils/permissions/**`; `apps/api/plane/app/permissions/**`; imports in `apps/api/plane/api/views/{invite,member}.py`
- Exact evidence: app `allow_permission` adds active-workspace membership validation for creator mode; utils copy does not; app adds `WorkspaceMemberPermission`.
- Supports: `C-003` duplicated/divergent permission implementation.

### E028

- Kind: User/session models and API
- Source: `apps/api/plane/db/models/{user,device,session,social_connection}.py`; `apps/api/plane/app/urls/user.py`; matching views/serializers
- Supports: User/profile/account, email update, device/session, onboarding/tour, profile dashboard.

### E029

- Kind: API-token authentication
- Source: `apps/api/plane/db/models/api.py`; `apps/api/plane/app/urls/api.py`; `apps/api/plane/api/middleware.py` (`APIKeyAuthentication`); `apps/api/plane/middleware/api_authentication.py`; token tests
- Supports: Token CRUD, expiry/active checks, `X-Api-Key`, last-use, rate limit, activity logs.

### E030

- Kind: Main UI feature source
- Source: `apps/web/core/components/issues/**`; `apps/web/core/components/workspace/**`; `apps/web/core/components/base-layouts/**`
- Supports: Multi-layout work-item UI, filters/display properties, quick actions, peek modes, responsive navigation.

### E031

- Kind: Page UI source
- Source: `apps/web/core/components/pages/**`; `apps/web/core/services/page/**`; `apps/web/core/store/pages/**`
- Supports: Page list/editor, outline, assets/info, version history, lock/archive/favorite/export, sync/offline states.

### E032

- Kind: Home/profile/personal UI source
- Source: `apps/web/core/components/{home,profile,stickies}/**`; `apps/web/core/components/workspace/sidebar/**`
- Supports: Home widgets, quick links, recents, profile analytics/activity, stickies, favorites/navigation.

### E033

- Kind: Notification UI
- Source: `apps/web/core/components/workspace-notifications/**`; `apps/web/core/services/notification.service.ts`; notification store
- Supports: Notification center/sidebar cards, filters, read/archive controls and empty/loading states.

### E034

- Kind: Command palette source
- Source: `apps/web/core/components/power-k/**`
- Supports: Context-aware commands, global shortcuts, navigation/entity/preference menus, keyboard handling.

### E035

- Kind: Theme/token source
- Source: `packages/constants/src/themes.ts`; `packages/tailwind-config/{variables,index,animations}.css`; `apps/web/core/components/core/theme/**`; `apps/web/core/store/theme.store.ts`; `apps/api/plane/db/models/workspace.py` (`WorkspaceTheme`)
- Supports: System/light/dark/high-contrast/custom themes, token system, theme import/export, sidebar persistence.

### E036

- Kind: Localization source
- Source: `packages/i18n/src/constants/{language,namespaces}.ts`; `packages/i18n/src/core/{instance,set-language}.ts`; `packages/i18n/scripts/*`; 532 `packages/i18n/src/locales/*/*.json`
- Supports: 19 languages, 28 namespaces, English fallback, language persistence, sync/type generation.

### E037

- Kind: UI libraries
- Source: `packages/propel/src/**`; `packages/ui/src/**`; their Storybook configuration
- Supports: Shared primitive suites, icons/charts/empty states, feedback and Storybook.

### E038

- Kind: Accessibility source patterns
- Source: `apps/web/core/components/power-k/core/shortcut-handler.ts`; Power-K modal components; `packages/propel/src/{menu,portal,skeleton,switch,combobox}/**`; `packages/ui/src/dropdowns/**`; `packages/i18n/src/locales/*/accessibility.json`
- Supports: ARIA/status labels, keyboard interactions, focus/portal patterns, accessibility strings.

### E039

- Kind: Client state/services
- Source: `apps/web/core/store/**`; `apps/web/core/services/**`; `apps/space/store/**`; `apps/admin/store/**`; `packages/shared-state/src/**`
- Supports: MobX state architecture and API service/store partitioning.

### E040

- Kind: Live server runtime
- Source: `apps/live/src/{start,server,env,hocuspocus}.ts`; `apps/live/src/controllers/**`
- Supports: Express/Hocuspocus runtime, middleware, four routes, CORS, Helmet, compression, graceful shutdown.

### E041

- Kind: Collaboration implementation
- Source: `apps/live/src/lib/auth.ts`; `apps/live/src/extensions/{database,redis,title-sync,force-close-handler}.ts`; `apps/live/src/services/page/**`
- Supports: Cookie-backed Hocuspocus auth, Redis pub/sub, API-backed page persistence/title sync.

### E042

- Kind: PDF export implementation
- Source: `apps/live/src/controllers/pdf-export.controller.ts`; `apps/live/src/services/pdf-export/**`; `apps/live/src/lib/pdf/**`; `apps/live/src/schema/pdf-export.ts`
- Supports: Authenticated validated page PDF generation, metadata/assets, errors/timeouts, sanitized filename.

### E043

- Kind: Page binary service boundary
- Source: `apps/live/src/services/page/{core,project-page,handler}.ts`; `apps/api/plane/app/views/page/base.py`
- Supports: Fetch/update page details and binary descriptions through Django.

### E044

- Kind: Background-task source
- Source: all `apps/api/plane/bgtasks/*.py`; `apps/api/plane/license/bgtasks/telemetry_metrics.py`
- Supports: Full Celery task inventory described in API/workflow maps.

### E045

- Kind: Scheduled job configuration
- Source: `apps/api/plane/celery.py` (`app.conf.beat_schedule`)
- Supports: Five-minute notification batching, metrics, daily automation/deletion/cleanup; duplicated exporter task `C-004`.

### E046

- Kind: Management commands
- Source: `apps/api/plane/db/management/commands/*.py`; `apps/api/plane/license/management/commands/*.py`
- Supports: 18 named administration/maintenance commands.

### E047

- Kind: Backend runtime configuration
- Source: `apps/api/plane/settings/{common,database,redis,storage,production,test}.py`; `apps/api/.env.example`
- Supports: PostgreSQL, optional read replica, Redis, RabbitMQ/Celery, storage, SMTP, OAuth, AI, telemetry configuration.

### E048

- Kind: Storage/cache/session implementation
- Source: `apps/api/plane/settings/{storage,redis,database}.py`; `apps/api/plane/db/models/{asset,session,device}.py`
- Supports: S3/MinIO, Redis cache, database session/device metadata, read replica.

### E049

- Kind: Multi-container deployment
- Source: `deployments/cli/community/docker-compose.yml`; `deployments/cli/community/variables.env`
- Supports: Web/space/admin/live/API/worker/beat/migrator/PostgreSQL/Valkey/RabbitMQ/MinIO/proxy topology and environment.

### E050

- Kind: All-in-one deployment
- Source: `deployments/aio/community/{Dockerfile,start.sh,supervisor.conf,variables.env,README.md}`
- Supports: AIO process topology, external-service requirements, first-boot secret generation.

### E051

- Kind: Edge proxy
- Source: `apps/proxy/{Caddyfile.ce,Caddyfile.aio.ce,Dockerfile.ce}`
- Supports: `/spaces`, `/god-mode`, `/live`, `/api`, `/auth`, static/bucket and web routing; body limit; TLS/ACME.

### E052

- Kind: Installation/restore scripts
- Source: `deployments/cli/community/{install.sh,restore.sh,restore-airgapped.sh,migration-0.13-0.14.sh,README.md,build.yml}`
- Supports: Community install/start/stop/restart/upgrade/backup-restore/air-gapped operational tooling.

### E053

- Kind: Orchestration alternatives
- Source: `deployments/swarm/community/swarm.sh`; `deployments/kubernetes/community/README.md`
- Supports: Swarm helper; Kubernetes is documentation/pointer rather than an in-tree chart.

### E054

- Kind: API tests
- Source: 66 files under `apps/api/plane/tests/**`; `apps/api/pytest.ini`; `apps/api/plane/tests/{README,TESTING_GUIDE}.md`
- Supports: Pytest unit/contract/smoke structure and representative API/app scope tests.

### E055

- Kind: Live tests
- Source: `apps/live/tests/lib/pdf/pdf-rendering.test.ts`; `apps/live/tests/services/pdf-export/effect-utils.test.ts`; `apps/live/vitest.config.ts`
- Supports: PDF rendering/effect utility tests; absence of other live tests.

### E056

- Kind: Codemod tests
- Source: `packages/codemods/tests/{function-declaration,remove-directives}.spec.ts`; codemod sources/config
- Supports: Two tested AST codemods.

### E057

- Kind: Frontend CI
- Source: `.github/workflows/pull-request-build-lint-web-apps.yml`
- Supports: Affected format, build, lint, type checks with pnpm/Turbo caches.

### E058

- Kind: API CI
- Source: `.github/workflows/pull-request-build-lint-api.yml`
- Supports: Python 3.12 dependency install and Ruff check; workflow uses `ruff check --fix`.

### E059

- Kind: Quality/security CI
- Source: `.github/workflows/{codeql,react-doctor,copyright-check,i18n-sync-check,check-version}.yml`
- Supports: CodeQL Python/JavaScript, React Doctor, SPDX copyright, i18n sync, version-change gates.

### E060

- Kind: Build/release/deploy CI
- Source: `.github/workflows/{build-branch,feature-deployment}.yml`
- Supports: Six app images, AIO, multi-arch/release assets, feature preview build/deployment.

### E061

- Kind: Python dependencies
- Source: `apps/api/pyproject.toml`; `apps/api/requirements/{base,production,test,development}.txt`; `apps/api/requirements.txt`
- Supports: Declared Django/DRF/database/cache/queue/storage/integration/telemetry/test dependency inventory.

### E062

- Kind: JavaScript dependencies
- Source: root `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, application/package manifests
- Supports: Pinned catalogs, React/React Router/MobX/Tiptap/Hocuspocus/i18next/UI/tooling dependency inventory.

### E063

- Kind: Package tree
- Source: `git ls-tree` for `packages/*`
- Supports: Package file counts, internal source group census, reusable-capability boundaries.

### E064

- Kind: Editor package
- Source: `packages/editor/src/**`; `packages/editor/package.json`
- Supports: Rich/document editor, transforms, extensions, collaboration and reusable editor behaviors.

### E065

- Kind: Propel package
- Source: `packages/propel/src/**`; `packages/propel/.storybook/**`; package manifest
- Supports: Current design-system component/icon/chart/empty-state suite and Storybook.

### E066

- Kind: UI package
- Source: `packages/ui/src/**`; `packages/ui/.storybook/**`; package manifest
- Supports: Shared forms/dropdowns/navigation/sortable/table/display primitives and Storybook.

### E067

- Kind: Service package
- Source: `packages/services/src/**`; `apps/web/core/services/**`
- Supports: Shared API/auth/file/live/IndexedDB/domain service abstractions and app-specific clients.

### E068

- Kind: Shared-state package
- Source: `packages/shared-state/src/**`; package manifest
- Supports: Cross-application MobX stores/helpers.

### E069

- Kind: Constants/types/utils packages
- Source: `packages/{constants,types,utils}/src/**`
- Supports: Shared contracts, constants, filters, formatting, validation, routing and domain helpers.

### E070

- Kind: Tooling/helper packages
- Source: `packages/{decorators,hooks,logger,tailwind-config,typescript-config}/**`
- Supports: Express decorators, shared hooks/logger, tokens/animations, TypeScript baselines.

### E071

- Kind: Export/import source
- Source: `apps/api/plane/app/urls/exporter.py`; `apps/api/plane/app/views/exporter/base.py`; `apps/api/plane/bgtasks/{export_task,analytic_plot_export,exporter_expired_task}.py`; `apps/api/plane/utils/exporters/**`; `apps/web/core/components/exporter/**`; `apps/api/plane/db/models/{exporter,importer}.py`
- Supports: Active issue/analytics export and history; importer only as substrate; formula sanitization tests.

### E072

- Kind: Integration substrate
- Source: `apps/api/plane/db/models/integration/**`; `apps/web/core/components/integration/**`; `apps/web/core/services/integrations/**`; Community URL module census
- Supports: GitHub/Slack models and GitHub/Slack/Jira frontend seams; absence of corresponding Community integration routes.

### E073

- Kind: Webhook/link SSRF security
- Source: `apps/api/plane/bgtasks/{webhook_task,work_item_link_task}.py`; `apps/api/plane/tests/unit/bg_tasks/{test_ssrf_advisories,test_url_security,test_work_item_link_task}.py`; webhook environment keys
- Supports: DNS/IP/domain validation, allowlists, safe crawling/delivery, security tests.

### E074

- Kind: Current model source
- Source: all `apps/api/plane/db/models/**/*.py`; `apps/api/plane/db/mixins.py`
- Exact evidence: 87 model/manager/enum classes; UUID/audit/soft-delete and workspace/project scope patterns.
- Supports: Data-model map.

### E075

- Kind: Migration inventory
- Source: `apps/api/plane/db/migrations/0001_initial.py` through `0121_alter_estimate_type.py`
- Supports: 121-step schema evolution range.

### E076

- Kind: Product context
- Source: `README.md`
- Supports: Naming/context only when paired with executable evidence; not a sole feature source.

### E077

- Kind: Project feature configuration
- Source: `apps/api/plane/db/models/project.py` (`Project` fields); project settings feature routes/screens
- Supports: cycles/modules/views/pages/intake/time-tracking/issue-type/guest feature flags and automation thresholds.

### E078

- Kind: Home/preferences APIs
- Source: lower workspace routes in `apps/api/plane/app/urls/workspace.py`; matching views/models; `apps/web/core/components/home/**`
- Supports: Quick links, home preferences, recents, stickies, sidebar preferences.

### E079

- Kind: Domain contract tests
- Source: `apps/api/plane/tests/contract/{api,app}/test_{issues,cycles,projects,labels,modules_lite,issue_notifications,workspace_app,project_app}.py`
- Supports: Representative domain API behavior and scope.

### E080

- Kind: Security/regression tests
- Source: `apps/api/plane/tests/unit/**`; scope-specific contract tests for assets, pages, deploy boards, member activity, guest issues
- Supports: SSRF, sanitization, storage, retention, ordering, auth and scope regression evidence.

### E081

- Kind: Activity/model task dispatch
- Source: `apps/api/plane/bgtasks/issue_activities_task.py`; `notification_task.py`; `webhook_task.py` (`model_activity`)
- Supports: Activity, notification, and webhook fan-out from model mutations.

### E082

- Kind: Retention configuration/tests
- Source: `apps/api/plane/bgtasks/{cleanup_task,deletion_task,file_asset_task,exporter_expired_task}.py`; `apps/api/plane/tests/unit/settings/test_retention.py`
- Supports: Configurable hard deletion and cleanup retention.

### E083

- Kind: OpenAPI
- Source: `apps/api/plane/api/urls/schema.py`; conditional schema setup in `apps/api/plane/settings/common.py`; `drf-spectacular` dependency
- Supports: Configurable schema, Swagger UI and ReDoc.

### E084

- Kind: Telemetry/observability
- Source: `apps/api/plane/license/bgtasks/telemetry_metrics.py`; `apps/api/plane/bgtasks/{event_tracking_task,logger_task}.py`; OpenTelemetry/Scout/PostHog settings
- Supports: Metrics push, event tracking, structured/persisted logging, optional APM.

### E085

- Kind: Instance admin backend
- Source: `apps/api/plane/license/{urls.py,models,api/views,api/serializers}/**`; admin frontend
- Supports: Instance admin bootstrap/session/configuration/admin/workspace APIs.

### E086

- Kind: Contradictory version metadata
- Source: root/application/package `package.json` (`1.3.1`); `apps/api/pyproject.toml` (`0.24.0`)
- Supports: `C-001` undocumented version-line mismatch.

### E087

- Kind: License notice mismatch
- Source: `COPYRIGHT.txt`; tracked `LICENSE.txt`; source SPDX headers
- Supports: `C-002` “LICENSE” vs `LICENSE.txt` naming mismatch.

### E088

- Kind: Directionality evidence
- Source: `packages/i18n/src/constants/language.ts`; `packages/i18n/src/core/set-language.ts`; `packages/tailwind-config/variables.css` (`direction: ltr`)
- Supports: No RTL locale/dir management and explicit LTR styling (`C-008`).

### E089

- Kind: Cross-service contradiction
- Source: `apps/live/src/services/page/core.service.ts` (`fetchUserMentions`); complete Community page URL census in `apps/api/plane/app/urls/page.py`
- Supports: `C-005` live caller references absent Community `pages/{id}/mentions/` endpoint.

### E090

- Kind: Test census
- Source: full tracked tree search for test/spec/test directories
- Exact evidence: 67 API test-related files including guides/config, two live test files, two codemod test files; no tracked web/admin/space browser or component test files.
- Supports: Test coverage boundary.

### E091

- Kind: CI/test contradiction
- Source: all `.github/workflows/*.yml`; package/pytest test commands
- Exact evidence: tracked workflows do not invoke `pytest`, `vitest`, or `pnpm turbo run test`.
- Supports: `C-009` tests exist but are not run by tracked CI.
