# Plane API Map

## API Surfaces

`apps/api/plane/urls.py` mounts the application API at `/api/`, public Space API at `/api/public/`, instance administration at `/api/instances/`, external API at `/api/v1/`, and authentication at `/auth/`. Optional DRF Spectacular schema, Swagger UI, and ReDoc routes are configuration-gated. [E009](EVIDENCE-MANIFEST.md#e009), [E083](EVIDENCE-MANIFEST.md#e083)

The pinned route census found **394 literal route declarations/includes**. The tables group every route module into coherent families; exact literals and handler symbols are enumerated in [E009](EVIDENCE-MANIFEST.md#e009) through [E024](EVIDENCE-MANIFEST.md#e024).

## Session Application API (`/api/`)

| URL module | Route count | Exact route families / handlers |
|---|---:|---|
| `app/urls/workspace.py` | 41 | slug check; workspace CRUD; invitations/join; members/project-members/leave/current member; workspace views/themes; profile/stats/activity/export/issues; labels/properties/states/estimates/modules/cycles; favorites/groups; drafts/convert; quick links; home preferences; recent visits; stickies; sidebar preferences |
| `app/urls/issue.py` | 40 | issue list/detail/v2; labels and bulk labels; bulk delete/archive; subissues; links; legacy/v2 attachments; history; comments; subscribers/subscribe; issue/comment reactions; user properties; archive/deleted; relations; dates; versions/description versions; metadata; identifier lookup |
| `app/urls/project.py` | 20 | project list/details/detail; identifiers; invitations/join; roles/members/leave/current member; project views; favorites; deploy boards; archive; member preference |
| `app/urls/asset.py` | 18 | workspace/user legacy assets; v2 workspace/user/static/project assets; restore; bulk; status check; duplicate; download |
| `app/urls/cycle.py` | 14 | cycle CRUD; membership; date check; favorites; transfer; properties; archive/list/detail; progress; analytics |
| `app/urls/analytic.py` | 13 | analytics; analytic view CRUD/save/default; export; project stats; workspace/project advanced analytics, stats, charts |
| `app/urls/module.py` | 13 | module CRUD; issue membership from both directions; links; favorites; properties; archive/list/detail |
| `app/urls/page.py` | 11 | summaries/list/detail; favorite; archive; lock; access; binary description; versions; duplicate |
| `app/urls/intake.py` | 10 | intake CRUD; intake issue CRUD; legacy inbox aliases; description versions |
| `app/urls/views.py` | 7 | project views; workspace views; workspace issue composition; favorite views |
| `app/urls/notification.py` | 7 | notification list/detail/read/archive/unread/mark-all-read; preferences |
| `app/urls/estimate.py` | 5 | active project estimate; estimate CRUD; estimate points CRUD |
| `app/urls/webhook.py` | 4 | webhook CRUD; secret regeneration; delivery logs |
| `app/urls/state.py` | 4 | state CRUD; intake state; mark default |
| `app/urls/search.py` | 3 | global search; project issue search; entity search |
| `app/urls/external.py` | 3 | Unsplash; project/workspace AI assistant |
| Other | 5 | API-token CRUD, work-item export, timezones |

Handlers live under matching `apps/api/plane/app/views/*` modules and apply session authentication plus route-specific membership/role guards. [E013](EVIDENCE-MANIFEST.md#e013) through [E022](EVIDENCE-MANIFEST.md#e022), [E026](EVIDENCE-MANIFEST.md#e026)

## External API (`/api/v1/`)

The API-key surface exposes:

- user `me`;
- workspaces and invitation router;
- projects, project summary, archive, and lite projections;
- workspace/project member and lite projections;
- work items/issues by UUID or `PROJECT-SEQUENCE`, search, links, comments, activities, attachments, and relations;
- cycles, cycle issue membership/transfer/archive;
- modules, module issue membership/archive;
- labels, states, estimates/points, intake issues, user/workspace assets, and stickies;
- OpenAPI schema, Swagger UI, and ReDoc.

It retains both `issues` and `work-items` route aliases in the work-item module. API-key authentication uses `X-Api-Key`, validates active/non-expired tokens and users, updates `last_used`, and applies a configurable rate limit. [E023](EVIDENCE-MANIFEST.md#e023), [E029](EVIDENCE-MANIFEST.md#e029), [E083](EVIDENCE-MANIFEST.md#e083)

## Authentication API (`/auth/`)

Exact route families:

- password sign-in/sign-up and Space variants;
- sign-out and Space sign-out;
- CSRF token;
- magic-code generation/sign-in/sign-up and Space variants;
- Google, GitHub, GitLab, and Gitea authorization/callback routes, each with Space variants;
- email availability checks and Space variant;
- forgot/reset password and Space variants;
- change password and set password.

Handlers are separated into application and Space view modules with shared provider implementations. Anonymous authentication endpoints use a dedicated configurable throttle in addition to DRF defaults. [E010](EVIDENCE-MANIFEST.md#e010), [E025](EVIDENCE-MANIFEST.md#e025)

## Public Space API (`/api/public/`)

Anchor routes expose project metadata/settings, issues, cycles, modules, states, labels, members, issue detail, comments, issue/comment reactions, votes, intake submissions, and anchor-scoped assets. Workspace/project administrators manage publication anchors through the session application API. [E024](EVIDENCE-MANIFEST.md#e024)

## Instance Administration (`/api/instances/`)

Exact families include instance root, admin list/current/session/sign-out/detail, configurations, disable-email-feature, admin sign-in/sign-up and initial screen visit, email credential check, workspace slug check, and workspace list/create. They use a separate `admin-session-id` cookie on instance paths. [E025](EVIDENCE-MANIFEST.md#e025), [E085](EVIDENCE-MANIFEST.md#e085)

## Live Service API

See [route map](ROUTE-SCREEN-MAP.md#live-routes). Live authentication forwards the browser cookie to the Django current-user/page APIs and the Hocuspocus authorization hook. PDF export validates the request, fetches page content/metadata/assets/mentions, bounds timeouts/retries, sanitizes the response filename, and returns a PDF. [E040](EVIDENCE-MANIFEST.md#e040), [E042](EVIDENCE-MANIFEST.md#e042)

## Commands

Tracked Django management commands:

`activate_user`, `clear_cache`, `copy_issue_comment_to_description`, `create_bucket`, `create_dummy_data`, `create_instance_admin`, `create_project_member`, `fix_duplicate_sequences`, `reset_password`, `sync_issue_description_version`, `sync_issue_version`, `test_email`, `update_bucket`, `update_deleted_workspace_slug`, `wait_for_db`, `wait_for_migrations`, `configure_instance`, and `register_instance`. [E046](EVIDENCE-MANIFEST.md#e046)

## Jobs, Schedules, and Event-Like Processing

Celery tasks cover analytic export, cleanup/retention, asset copying/metadata/expiry, soft/hard deletion, dummy/seed data, email notifications, telemetry/event tracking, issue export, password/magic/invitation/user emails, issue activity generation, archive/close automation, issue/page versioning, Postgres log persistence, mention notifications, page transactions, recent visits, webhook delivery/model activity, and secure link-title/favicon crawling. [E044](EVIDENCE-MANIFEST.md#e044)

Celery Beat runs five-minute email batching, configurable instance metrics, daily hard deletion and issue automation, and staggered cleanup for exports, unuploaded assets, API/email/webhook logs, page versions, and issue description versions. The schedule contains two differently timed entries for the same exporter-expiry task (`C-004`). [E045](EVIDENCE-MANIFEST.md#e045)

## API Contradictions and Gaps

- `plane.app.permissions` and `plane.utils.permissions` duplicate permission code but differ in creator membership validation and the newer workspace-member guard. Some `/api/v1` views still import the older copy (`C-003`). [E027](EVIDENCE-MANIFEST.md#e027)
- The live service references a page mentions endpoint absent from Community URLs (`C-005`). [E089](EVIDENCE-MANIFEST.md#e089)
- API tests cover representative auth, projects, work items, cycles, modules, labels, assets, member scope, and regression scopes; they do not exhaust all 394 routes. [E054](EVIDENCE-MANIFEST.md#e054)
