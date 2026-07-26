# Plane Workflow Map

## Authentication and Onboarding

1. User chooses password, magic-code, or configured OAuth authentication.
2. Django creates/loads the database session; the web app fetches current user and instance configuration.
3. New users complete profile/onboarding and create or join a workspace.
4. Workspace creation seeds default states, labels, sample/project content asynchronously when applicable.
5. Invitation links join workspace/project membership with the invited role.

Failure states include disabled signup/provider, invalid credentials/code/token, duplicate email/slug, inactive membership/user, expired reset/API token, and provider callback failures. [E010](EVIDENCE-MANIFEST.md#e010), [E012](EVIDENCE-MANIFEST.md#e012), [E044](EVIDENCE-MANIFEST.md#e044)

## Workspace and Project Administration

- Workspace admins/members manage details according to endpoint role guards; admins manage invitations/membership and deletion.
- Projects have identifier, network, lead/default assignee, timezone, default state, estimate, archive/close automation thresholds, and Boolean feature gates.
- Project invitations and direct membership are separate; leave/archive/publication/favorite operations have dedicated endpoints.
- Instance admins configure service-wide signup/auth/email/AI/storage settings and can list/create workspaces. [E011](EVIDENCE-MANIFEST.md#e011), [E012](EVIDENCE-MANIFEST.md#e012), [E085](EVIDENCE-MANIFEST.md#e085)

## Work-Item Lifecycle

```text
quick add / full create / draft / intake acceptance / external API
  → sequence and project identifier
  → state, priority, dates, assignees, labels, estimate
  → optional parent, cycle, module, links, relations, attachments
  → comments, mentions, subscribers, reactions
  → asynchronous activity + notification + webhook tasks
  → archive/unarchive or soft delete
  → scheduled hard deletion after retention
```

Users can edit from detail or inline list/Kanban/spreadsheet/calendar/Gantt contexts, use quick actions, bulk label/delete/archive, reorder/group via drag-and-drop, and open peek or routed details. [E013](EVIDENCE-MANIFEST.md#e013), [E030](EVIDENCE-MANIFEST.md#e030), [E081](EVIDENCE-MANIFEST.md#e081)

## Filters, Search, and Views

Work-item filters cover project, state/group, priority, assignee, creator, labels, cycles, modules, start/due dates, and mentions. Display configuration covers layout, grouping/subgrouping, ordering, properties, subissues, empty groups, and calendar range. Saved project views and workspace views persist configurations; favorites/folders personalize navigation. [E020](EVIDENCE-MANIFEST.md#e020), [E030](EVIDENCE-MANIFEST.md#e030)

Global search queries workspaces, projects, work items, cycles, modules, pages, views, and intake records under membership scope, with optional project scoping. Power-K adds command/navigation search. [E020](EVIDENCE-MANIFEST.md#e020), [E034](EVIDENCE-MANIFEST.md#e034)

## Cycle Workflow

Create/edit/delete cycle → validate dates → add/remove or transfer work items → favorite/personalize → inspect active productivity/progress and analytics → archive/unarchive. Cycle list filters cover dates/status; cycle issue views reuse the common layouts. [E014](EVIDENCE-MANIFEST.md#e014)

## Module Workflow

Create/edit/delete module with status, lead, members, dates → add/remove work items → manage module links → favorite/personalize → inspect progress/Gantt/analytics → archive/unarchive. [E015](EVIDENCE-MANIFEST.md#e015)

## Page Workflow

Create page → link to project → edit collaboratively through Hocuspocus/Yjs → persist binary description and metadata through Django → track versions and page transactions → manage access/lock/favorite/archive/duplicate → inspect outline/assets/info/version history → export PDF. [E016](EVIDENCE-MANIFEST.md#e016), [E031](EVIDENCE-MANIFEST.md#e031), [E041](EVIDENCE-MANIFEST.md#e041), [E042](EVIDENCE-MANIFEST.md#e042)

The live-service mentions lookup has no matching Community route; PDF mention resolution remains contradictory (`C-005`). [E089](EVIDENCE-MANIFEST.md#e089)

## Intake Workflow

Create/configure project intake → receive an in-app/public submission as an intake-wrapped work item → filter open/closed status → accept, reject, snooze/unsnooze, or mark duplicate → accepted item enters normal project workflow; duplicate links to its target. [E017](EVIDENCE-MANIFEST.md#e017), [E024](EVIDENCE-MANIFEST.md#e024)

## Collaboration and Notification

Work-item/comment edits and mentions generate activity and notification tasks. Recipients receive in-app notification cards and optional batched email according to preferences. Users can filter notifications, mark one/all read, archive, and inspect unread state. Issue subscribers and mentioned members participate in delivery. [E019](EVIDENCE-MANIFEST.md#e019), [E033](EVIDENCE-MANIFEST.md#e033), [E044](EVIDENCE-MANIFEST.md#e044)

Page realtime collaboration is separate from work-item notifications and uses WebSocket/Redis/Yjs. No general work-item realtime event stream was found.

## Analytics and Export

Workspace/project analytics select duration, projects, axes, segments, and filters to render overview, created-vs-resolved, priority, trend, distribution, and tabular insights. Analytic configurations can be saved/defaulted. CSV export runs asynchronously and emails the result. Profile activity and work-item export have separate flows. [E018](EVIDENCE-MANIFEST.md#e018), [E071](EVIDENCE-MANIFEST.md#e071)

## Public Space

An authenticated project administrator configures a publication anchor/settings. Visitors load the anchor-scoped board, switch list/Kanban, filter by state/label/priority, open issue detail, authenticate when required, and interact through comments/reactions/votes. Public intake can create submissions; assets resolve through anchor-scoped endpoints. [E024](EVIDENCE-MANIFEST.md#e024)

## Webhook Workflow

Workspace admin creates a versioned webhook with event selection/secret → model activity queues delivery → target URL passes DNS/IP/domain SSRF checks → request is sent and logged → failures/retries/deactivation are recorded → secret can be regenerated and logs viewed. [E022](EVIDENCE-MANIFEST.md#e022), [E073](EVIDENCE-MANIFEST.md#e073)

## Background and Scheduled Work

Celery worker processes notifications, activities, emails, exports, asset operations, versions, webhooks, telemetry, seed data, recent visits, and link metadata. Beat schedules notification batching, metrics, automation, hard deletion, and retention cleanup. [E044](EVIDENCE-MANIFEST.md#e044), [E045](EVIDENCE-MANIFEST.md#e045)

## Build, Test, and Delivery

- pnpm/Turbo builds apps/packages and runs affected format/lint/type tasks.
- Django uses pytest unit/contract/smoke categories; live and codemods use Vitest.
- Storybook exists for Propel and UI.
- CI runs frontend build/format/lint/types, API Ruff lint, i18n sync, CodeQL, React Doctor, copyright checks, version checks, container builds/releases, and feature deployment.
- No tracked CI job invokes pytest or Vitest (`C-009`); no browser E2E suite is tracked. [E054](EVIDENCE-MANIFEST.md#e054) through [E060](EVIDENCE-MANIFEST.md#e060), [E091](EVIDENCE-MANIFEST.md#e091)

Tests/builds were not executed during read-only discovery because they can generate caches/build artifacts and depend on external services. Static test/build coverage is complete; runtime results remain unknown.
