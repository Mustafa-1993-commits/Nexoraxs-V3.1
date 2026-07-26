# Plane Data Model

## Persistence Baseline

The Django data layer uses PostgreSQL and 121 numbered migrations from `0001_initial.py` through `0121_alter_estimate_type.py`. Most domain records inherit UUID primary keys, creation/update timestamps, creator/updater references, and soft deletion. `ProjectBaseModel` and `WorkspaceBaseModel` derive workspace scope from their owning project when applicable. [E074](EVIDENCE-MANIFEST.md#e074), [E075](EVIDENCE-MANIFEST.md#e075)

An optional read replica is supported through a database router. Redis backs Django cache and coordination. Database-backed sessions are extended with device information; S3/MinIO stores uploaded assets. [E047](EVIDENCE-MANIFEST.md#e047), [E048](EVIDENCE-MANIFEST.md#e048)

## Canonical Model Groups

| Group | Models / enums | Scope and relationships |
|---|---|---|
| Identity | `User`, `Profile`, `Account`, `SocialLoginConnection`, `Device`, `DeviceSession`, custom `Session` | Email-centered user identity, provider accounts/tokens, profile/preferences, device/session metadata |
| Workspace | `Workspace`, `WorkspaceMember`, `WorkspaceMemberInvite`, `Team`, `WorkspaceTheme`, `WorkspaceUserProperties`, `WorkspaceUserLink`, `WorkspaceHomePreference`, `WorkspaceUserPreference` | Workspace is the top product scope; membership/invitations carry Admin/Member/Guest numeric roles |
| Project | `Project`, `ProjectMemberInvite`, `ProjectMember`, `ProjectIdentifier`, `ProjectDeployBoard`, `ProjectPublicMember`, `ProjectUserProperty` | Project belongs to one workspace; membership is separately active and role-scoped |
| Work item | `Issue`, `IssueSequence`, `IssueAssignee`, `IssueLabel`, `IssueLink`, `IssueAttachment`, `IssueActivity`, `IssueComment`, `IssueSubscriber`, `IssueReaction`, `CommentReaction`, `IssueVote`, `IssueBlocker`, `IssueRelation`, `IssueMention`, `IssueVersion`, `IssueDescriptionVersion` | Work item belongs to project/workspace; relation tables normalize collaboration, structure, and history |
| Draft | `DraftIssue`, `DraftIssueAssignee`, `DraftIssueLabel`, `DraftIssueModule`, `DraftIssueCycle` | Workspace draft optionally projects into work-item fields before conversion |
| Workflow fields | `State`, `StateGroup`, `Label`, `Estimate`, `EstimatePoint`, `IssueType`, `ProjectIssueType` | Project/workspace configuration and work-item classification |
| Cycles | `Cycle`, `CycleIssue`, `CycleUserProperties` | Time-bound project grouping and per-user view properties |
| Modules | `Module`, `ModuleMember`, `ModuleIssue`, `ModuleLink`, `ModuleUserProperties`, `ModuleStatus` | Project grouping with lead/members/status/links |
| Views/analytics | `IssueView`, `AnalyticView`, `UserFavorite`, `UserRecentVisit` | Saved filters/layouts, analytic configurations, navigation favorites, recents |
| Pages | `Page`, `ProjectPage`, `PageLabel`, `PageLog`, `PageVersion`, `Description`, `DescriptionVersion` | Workspace page linked to projects; binary/rich description, access/lock/version/log data |
| Intake | `Intake`, `IntakeIssue`, `IntakeIssueStatus`, `SourceType` | Project intake configuration and triage state; intake entry wraps an `Issue` |
| Notifications | `Notification`, `UserNotificationPreference`, `EmailNotificationLog` | In-app recipient state, preferences, email-batching/delivery log |
| API/audit | `APIToken`, `APIActivityLog` | API-key credentials, expiry/last-use, request activity |
| Assets | `FileAsset` | Workspace/user/project/entity-scoped uploaded-object metadata and upload state |
| Export/import | `ExporterHistory`, `Importer` | Export lifecycle/filter/file metadata; importer persistence substrate |
| Integrations | `Integration`, `WorkspaceIntegration`, `GithubRepository`, `GithubRepositorySync`, `GithubIssueSync`, `GithubCommentSync`, `SlackProjectSync` | Integration registry and GitHub/Slack synchronization substrate |
| Webhooks | `Webhook`, `WebhookLog`, `ProjectWebhook` | Workspace webhook config/version/secret/events and delivery records |
| Personal | `Sticky` | User/workspace note with ordering/properties |
| Publication | `DeployBoard` and `ProjectDeployBoard` | Public anchor/settings substrate for Space |

Exact class definitions are inventoried in [E074](EVIDENCE-MANIFEST.md#e074).

## Core Scope Rules

- `WorkspaceMember` and `ProjectMember` are independent; both have `is_active`.
- Numeric role choices are Admin `20`, Member `15`, Guest `5`.
- Project network is Secret `0` or Public `2`.
- Project identifiers and names are unique inside a workspace while not soft-deleted; identifiers are uppercased.
- Project-scoped records copy `workspace` from `project` on save.
- Client-provided workspace slug/project UUID is checked by permission/queryset code; it is not accepted as membership proof. [E012](EVIDENCE-MANIFEST.md#e012), [E026](EVIDENCE-MANIFEST.md#e026), [E074](EVIDENCE-MANIFEST.md#e074)

## Work-Item State

`Issue` owns name, rich descriptions, priority, sequence, dates, state, parent, estimate, project/workspace, creators and archival/closure fields. Join models own assignees, labels, modules/cycles, subscribers, reactions, comments, links, relations, attachments, and versions. Activity tasks derive append-style history records from changes. [E013](EVIDENCE-MANIFEST.md#e013), [E081](EVIDENCE-MANIFEST.md#e081)

State groups include backlog, unstarted, started, completed, and cancelled semantics in the state model/constants. A project selects a default state and can designate an intake state. Estimates can use points or category-style values; migration `0121` changes estimate type. [E074](EVIDENCE-MANIFEST.md#e074), [E075](EVIDENCE-MANIFEST.md#e075)

## Intake State

`IntakeIssueStatus` is:

| Value | State |
|---:|---|
| `-2` | Pending |
| `-1` | Rejected |
| `0` | Snoozed |
| `1` | Accepted |
| `2` | Duplicate |

The model also stores snooze time, duplicate target, source, source email, external source/ID, and extra JSON. UI and handlers implement accept, decline, snooze/unsnooze, duplicate, open/closed filters, and deletion guards. [E017](EVIDENCE-MANIFEST.md#e017)

## Storage and Client State

- `FileAsset` plus v2 asset APIs support create/upload, status, restore, duplicate, bulk association, download, metadata extraction, signed URLs, and cleanup of never-uploaded assets. [E021](EVIDENCE-MANIFEST.md#e021)
- `Description`/`DescriptionVersion`, `PageVersion`, and issue versions retain rich-document/version history with scheduled retention cleanup. [E016](EVIDENCE-MANIFEST.md#e016), [E045](EVIDENCE-MANIFEST.md#e045)
- MobX stores normalize server projections for workspaces, projects, issues, cycles, modules, pages, notifications, themes, and public Space data. [E039](EVIDENCE-MANIFEST.md#e039)
- `@plane/services` includes an IndexedDB service, but no repository-wide canonical offline synchronization contract was found. Offline/syncing badges exist for pages; broader offline behavior is unknown. [E031](EVIDENCE-MANIFEST.md#e031), [E067](EVIDENCE-MANIFEST.md#e067)

## Data Lifecycle

Soft deletion sets `deleted_at` and queues recursive related-object soft deletion; a scheduled hard-delete task purges data after configurable retention. Separate scheduled cleanup covers API logs, email logs, webhook logs, page versions, issue-description versions, expired exports, and unuploaded assets. [E044](EVIDENCE-MANIFEST.md#e044), [E045](EVIDENCE-MANIFEST.md#e045), [E082](EVIDENCE-MANIFEST.md#e082)

## Data Unknowns and Contradictions

- Importer models/utilities and integration-sync models are persisted substrate without a complete Community route/workflow.
- The exact database schema must be derived by applying all migrations; migrations were statically inspected but not executed.
- No data-retention user-facing policy text was found; configurable/backend retention behavior is verified, legal policy is unknown.
- Root/API version numbers differ (`C-001`); migration compatibility across those version labels is not documented in tracked source.
