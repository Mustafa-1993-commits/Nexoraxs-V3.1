# Plane Route and Screen Map

## Web Application

The Community route tree is defined by `apps/web/app/routes/core.ts`; `extended.ts` contributes no routes. React Router SSR is disabled for web. [E010](EVIDENCE-MANIFEST.md#e010)

| Route pattern | Screen/workflow | Backing capability |
|---|---|---|
| `/` | Sign-in/home entry | Session, password, magic-code, OAuth authentication |
| `/sign-up` | Account creation | User registration |
| `/accounts/forgot-password` | Forgot password | Reset email |
| `/accounts/reset-password` | Reset password | Token/password reset |
| `/accounts/set-password` | Set password | Password setup |
| `/create-workspace` | Workspace creation | Workspace slug/details |
| `/onboarding` | User/workspace onboarding | Profile and workspace initialization |
| `/invitations` | Cross-workspace invitations | Invitation acceptance |
| `/workspace-invitations` | Workspace invitation processing | Membership join |
| `/:workspaceSlug` | Workspace home | Widgets, recents, links, projects |
| `/:workspaceSlug/active-cycles` | Active cycles | Cycle progress/productivity |
| `/:workspaceSlug/analytics/:tabId` | Analytics | Overview and work-item insights |
| `/:workspaceSlug/browse/:workItem` | Identifier-based work-item lookup | Browse/detail |
| `/:workspaceSlug/drafts` | Workspace drafts | Draft CRUD/conversion |
| `/:workspaceSlug/notifications` | Notification center | Read/archive/filter |
| `/:workspaceSlug/profile/:userId[/…]` | Profile overview, issue views, activity | Stats, workload, activity export |
| `/:workspaceSlug/stickies` | Sticky notes | Note CRUD and drag ordering |
| `/:workspaceSlug/workspace-views[/:globalViewId]` | Workspace saved views | Cross-project filtered views |
| `/:workspaceSlug/projects` | Project list | Project CRUD/favorites |
| `/:workspaceSlug/projects/archives` | Archived projects | Project restoration/list |
| `/:workspaceSlug/projects/:projectId/issues` | Project work items | Multi-layout work-item view |
| `/:workspaceSlug/projects/:projectId/issues/:issueId` | Work-item detail | Fields, comments, activity, relations, assets |
| `/:workspaceSlug/projects/:projectId/cycles[/:cycleId]` | Cycle list/detail | Cycle lifecycle and analytics |
| `/:workspaceSlug/projects/:projectId/modules[/:moduleId]` | Module list/detail | Module lifecycle, links, progress |
| `/:workspaceSlug/projects/:projectId/views[/:viewId]` | Saved view list/detail | Filtered work-item views |
| `/:workspaceSlug/projects/:projectId/pages[/:pageId]` | Page list/editor | Realtime collaborative documents |
| `/:workspaceSlug/projects/:projectId/intake` | Intake/inbox | Request triage |
| `/:workspaceSlug/projects/:projectId/archives/{issues,cycles,modules}` | Archive screens | Archived entity handling |
| `/:workspaceSlug/settings` | Workspace details | Settings/delete |
| `/:workspaceSlug/settings/members` | Workspace members | Roles/invitations/removal |
| `/:workspaceSlug/settings/billing` | Billing extension surface | CE screen exists; commercial behavior not verified |
| `/:workspaceSlug/settings/exports` | Export history/form | Work-item export |
| `/:workspaceSlug/settings/webhooks[/:webhookId]` | Webhook list/detail | Delivery configuration/logs |
| `/:workspaceSlug/settings/projects/:projectId` | Project details | Project configuration |
| `…/members` | Project members | Project roles/invitations |
| `…/features/{cycles,modules,views,pages,intake}` | Feature toggles | Project Boolean feature gates |
| `…/{states,labels,estimates}` | Field configuration | Work-item schema/configuration |
| `…/automations` | Auto-close/archive | Month thresholds |
| `/settings/profile/:profileTabId` | Personal settings | Profile, preferences, security/API token surfaces |

Legacy redirects normalize old project-settings, analytics, API-token, inbox, sign-up/sign-in/register, profile, and account-settings paths. [E010](EVIDENCE-MANIFEST.md#e010)

## Admin Application

Admin is mounted by the proxy at `/god-mode/`; its configured base path is environment-driven. [E011](EVIDENCE-MANIFEST.md#e011), [E051](EVIDENCE-MANIFEST.md#e051)

| Route | Screen |
|---|---|
| `/` | Instance-admin sign-in or bootstrap |
| `/general` | Instance name/domain/signup/workspace controls and general configuration |
| `/workspace` | Instance workspace list/administration |
| `/workspace/create` | Administrator-created workspace |
| `/email` | SMTP configuration and test email |
| `/authentication` | Authentication overview/toggles |
| `/authentication/google` | Google OAuth configuration |
| `/authentication/github` | GitHub OAuth configuration |
| `/authentication/gitlab` | GitLab OAuth configuration |
| `/authentication/gitea` | Gitea OAuth/host configuration |
| `/ai` | LLM provider/model/key configuration |
| `/image` | S3/MinIO image storage configuration |
| `*` | Admin 404 |

## Space Application

The proxy mounts Space at `/spaces/`; React Router SSR is enabled. [E012](EVIDENCE-MANIFEST.md#e012)

| Route | Screen |
|---|---|
| `/` | Space landing/instance context |
| `/:workspaceSlug/:projectId` | Project-publication entry/redirect context |
| `/issues/:anchor` | Published project board with list/Kanban layouts, filters, issue detail, comments/reactions/votes |
| `*` | Space 404 |

Space authentication forms can switch sign-in/sign-up and password/unique-code modes, with OAuth hooks for Google, GitHub, GitLab, and Gitea. [E024](EVIDENCE-MANIFEST.md#e024)

## Live Routes

| Method/transport | Effective route under `LIVE_BASE_PATH` | Handler |
|---|---|---|
| WebSocket | `/collaboration/` | `CollaborationController.handleConnection` |
| POST | `/convert-document/` | `DocumentController.convertDocument` |
| POST | `/pdf-export/` | `PdfExportController.exportToPdf` |
| GET | `/health/` | `HealthController.healthCheck` |

All unmatched live routes return JSON 404. [E040](EVIDENCE-MANIFEST.md#e040)

## Navigation and Interaction Entry Points

The workspace sidebar exposes workspace switching, project lists, favorites/folders, quick actions, help, and a user menu. Power-K provides global creation, navigation, context actions, preferences, and entity-opening menus. Work-item views expose quick-add, quick actions, drag operations, and peek/full-page detail. [E030](EVIDENCE-MANIFEST.md#e030), [E034](EVIDENCE-MANIFEST.md#e034)

## Explicit Route Exclusions

- Empty `apps/web/app/routes/extended.ts` adds no Community routes.
- Types/components without an active route or executable backend are not elevated into full features.
- The source does not contain a tracked browser E2E route suite; route mapping is static.
