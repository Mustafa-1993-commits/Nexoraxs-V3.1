# Plane Feature Catalog

## Repository

- Repository ID: `SRC-PLANE`
- Canonical name: `makeplane/plane`
- Local path: `/home/mustafa/projects/Plane`
- Source URL: `https://github.com/makeplane/plane.git`
- Pinned discovered SHA: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Current SHA at catalog generation: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Discovery state: Complete
- Discovery mode: Initial
- Discovery timestamp: `2026-07-26T02:24:20+03:00`

## Catalog Rules and Record Defaults

This catalog contains **161 stable feature records**. It includes product, UI, interaction, admin, auth, permissions, tenancy, data, search, filters, views, workflows, comments, notifications, realtime, jobs, integrations, themes, accessibility, localization, testing, build, deployment, operations, and internal reusable capabilities. It does not rank, recommend, preselect, copy, or authorize any feature.

Every row below is one human-readable feature record with `Verified` evidence status. Its exact purpose, source path/symbol claim, default behavior/state/security/configuration/dependency/test fields, license impact, unknowns, contradictions, and discovery metadata are normalized in [FEATURE-CATALOG.yaml](FEATURE-CATALOG.yaml). Unless a row or the machine record says otherwise:

- source/license: Plane `AGPL-3.0-only`; see [license review](LICENSE-REVIEW.md);
- revision/verification: the pinned SHA and timestamp above; stale `No`;
- tests: no direct tracked test; do not infer coverage from implementation;
- reuse: Plane product/domain code is low-isolation, medium-complexity; this is an assessment, not a recommendation;
- unknowns/contradictions: none record-specific beyond [UNKNOWNS.md](UNKNOWNS.md).

## Feature Summary

| Family | Records | Scope |
|---|---:|---|
| Platform | 3 | Application topology, extension seams, API boundary |
| Authentication | 14 | Sessions, password/magic/OAuth, API tokens, admin auth |
| Workspace/project | 10 | Tenancy, membership, roles, settings, publication |
| Work items | 20 | Core lifecycle, fields, collaboration, history, bulk/drafts |
| Views/search | 11 | Five layouts, filters, views, favorites, search, command palette |
| Cycles/modules/pages/intake | 17 | Planning groupings, documents/realtime, request triage |
| Analytics/notifications/home | 15 | Insights, exports, notification delivery, personal workspace |
| Space/admin | 10 | Public publication and instance administration |
| Integrations | 10 | Webhooks, AI, media, provider substrates, API docs, observability |
| UI/accessibility/localization | 12 | Themes, tokens, primitives, DnD, keyboard, locales |
| Data/jobs | 17 | Persistence/cache/queue/state plus scheduled/background work |
| Operations/developer experience | 22 | Deployment, build, test/tooling, CI, commands |
| **Total** | **161** | Counts do not overlap |

## Feature Records

### Platform

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-PLATFORM-001` | Six-Application Community Runtime | product, operations, integration | Composes web, admin, Space, API, live, and proxy runtimes | [E005](EVIDENCE-MANIFEST.md#e005), [E049](EVIDENCE-MANIFEST.md#e049) |
| `PLANE-PLATFORM-002` | Core and Extended Edition Seams | developer experience, reusable internal | Keeps absent/abstract extended implementations separate from Community code | [E007](EVIDENCE-MANIFEST.md#e007) |
| `PLANE-PLATFORM-003` | Layered HTTP API Surfaces | product, integration, security | Separates session, API-key, public, admin, and auth routes | [E009](EVIDENCE-MANIFEST.md#e009) |

### Authentication and Account Security

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-AUTH-001` | Database Session and CSRF Authentication | authentication, security, data | Session-authenticated browser API with CSRF and HTTP-only cookies | [E025](EVIDENCE-MANIFEST.md#e025) |
| `PLANE-AUTH-002` | Email and Password Sign-In and Registration | authentication, product | Email/password account creation and sign-in | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-003` | Magic-Code Sign-In and Registration | authentication, notification | Email-code generation, sign-in, and sign-up | [E010](EVIDENCE-MANIFEST.md#e010), [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-AUTH-004` | Password Recovery and Update | authentication, security, notification | Forgot/reset, set, and change password | [E010](EVIDENCE-MANIFEST.md#e010), [E025](EVIDENCE-MANIFEST.md#e025) |
| `PLANE-AUTH-005` | Google OAuth Authentication | authentication, integration | Configurable Google OAuth for app and Space | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-006` | GitHub OAuth Authentication | authentication, integration | Configurable GitHub OAuth for app and Space | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-007` | GitLab OAuth Authentication | authentication, integration | Configurable GitLab OAuth for app and Space | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-008` | Gitea OAuth Authentication | authentication, integration | Configurable-host Gitea OAuth for app and Space | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-009` | Session Sign-Out | authentication, security | Separate main and Space sign-out routes | [E010](EVIDENCE-MANIFEST.md#e010) |
| `PLANE-AUTH-010` | Space Authentication Variants | authentication, product | Password, magic, OAuth, and sign-out surfaces for Space | [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-AUTH-011` | Verified Email Address Update | authentication, security, notification | Code generation and verified email replacement | [E028](EVIDENCE-MANIFEST.md#e028) |
| `PLANE-AUTH-012` | Device and Browser Session Metadata | authentication, security, data | Device-to-session persistence and current-session context | [E028](EVIDENCE-MANIFEST.md#e028) |
| `PLANE-AUTH-013` | Personal API Tokens and API-Key Authentication | authentication, security, integration | Token CRUD, expiry/active validation, last-use, X-Api-Key, throttle | [E029](EVIDENCE-MANIFEST.md#e029) |
| `PLANE-AUTH-014` | Separate Instance-Administrator Authentication | authentication, administration, security | Admin bootstrap/sign-in/session under a distinct cookie | [E085](EVIDENCE-MANIFEST.md#e085) |

### Workspaces, Projects, Membership, and Tenancy

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-TENANT-001` | Workspace Lifecycle | product, tenancy, data | Slug check and workspace CRUD | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-TENANT-002` | Workspace Onboarding and Seed Content | product, automation, tenancy | Onboarding plus asynchronous default/sample content | [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-TENANT-003` | Workspace Invitations | product, tenancy, notification | Email invitation, listing, detail, and tokenized join | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-TENANT-004` | Workspace Membership and Roles | authorization, tenancy, administration | Active Admin/Member/Guest membership | [E012](EVIDENCE-MANIFEST.md#e012), [E026](EVIDENCE-MANIFEST.md#e026) |
| `PLANE-TENANT-005` | Workspace Leave and Delete | product, tenancy, security | Member leave and guarded workspace deletion | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-TENANT-006` | Workspace Themes and User Preferences | tenancy, personalization, data | Workspace themes and member view/home/sidebar properties | [E035](EVIDENCE-MANIFEST.md#e035), [E074](EVIDENCE-MANIFEST.md#e074) |
| `PLANE-TENANT-007` | Project Lifecycle and Identifiers | product, tenancy, data | Workspace-scoped unique project identifiers, settings, archive | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-TENANT-008` | Project Invitations Membership and Roles | authorization, tenancy, administration | Project invites, join, roles, active members, leave | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-TENANT-009` | Project Feature and Automation Settings | configuration, product, automation | Feature gates and auto-close/archive thresholds | [E077](EVIDENCE-MANIFEST.md#e077) |
| `PLANE-TENANT-010` | Project Publication and Deploy Boards | product, integration, tenancy | Anchor/settings state for published Space boards | [E012](EVIDENCE-MANIFEST.md#e012), [E024](EVIDENCE-MANIFEST.md#e024) |

### Work Items

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-WORK-001` | Work-Item CRUD and Human Identifiers | product, data | UUID and `PROJECT-SEQUENCE` CRUD/lookup | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-002` | Rich Work-Item Descriptions | product, UI, data | Rich HTML/JSON/binary-compatible descriptions | [E013](EVIDENCE-MANIFEST.md#e013), [E064](EVIDENCE-MANIFEST.md#e064) |
| `PLANE-WORK-003` | Configurable Workflow States | product, configuration, data | State/group CRUD, intake state, default state | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-004` | Work-Item Property Management | product, UI, data | Priority, dates, assignees, labels, estimates, cycle/module | [E013](EVIDENCE-MANIFEST.md#e013), [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-WORK-005` | Parent and Sub-Work-Item Hierarchy | product, data, UI | Parent links plus sub-item list/create/filter | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-006` | Work-Item Relations and Blockers | product, data | Blocker, duplicate, relates-to relationship edges | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-007` | External Links with Metadata Crawling | product, integration, automation | Link CRUD and secure title/favicon resolution | [E073](EVIDENCE-MANIFEST.md#e073) |
| `PLANE-WORK-008` | Work-Item Attachments | product, data, integration | Legacy/v2 attachment upload/list/download/delete | [E013](EVIDENCE-MANIFEST.md#e013), [E021](EVIDENCE-MANIFEST.md#e021) |
| `PLANE-WORK-009` | Work-Item Comments | product, collaboration, UI | Rich comment create/list/edit/delete | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-010` | Issue Comment and Public Vote Reactions | product, collaboration, interaction | Issue/comment emoji reactions and Space votes | [E013](EVIDENCE-MANIFEST.md#e013), [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-WORK-011` | Subscribers and Mention Participants | product, collaboration, notification | Subscribe/unsubscribe and mention-derived participants | [E013](EVIDENCE-MANIFEST.md#e013), [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-WORK-012` | Work-Item Activity History | product, data, automation | Field and collaboration change activity generation | [E081](EVIDENCE-MANIFEST.md#e081) |
| `PLANE-WORK-013` | Work-Item and Description Version History | product, data, automation | Snapshot and rich-description versions | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-014` | Work-Item Archive and Restore | product, data | Archive, archived listing/detail, unarchive | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-015` | Soft Deletion and Retention Purge | data, automation, operations | Soft delete, related-object propagation, scheduled purge | [E074](EVIDENCE-MANIFEST.md#e074), [E082](EVIDENCE-MANIFEST.md#e082) |
| `PLANE-WORK-016` | Bulk Work-Item Operations | product, interaction, data | Bulk label creation, delete, archive | [E013](EVIDENCE-MANIFEST.md#e013) |
| `PLANE-WORK-017` | Workspace Work-Item Drafts | product, data, UI | Draft field persistence and draft-to-issue conversion | [E012](EVIDENCE-MANIFEST.md#e012) |
| `PLANE-WORK-018` | Work-Item Type Data Substrate | data, configuration | Type and project-type persistence behind feature flag | [E074](EVIDENCE-MANIFEST.md#e074), [E077](EVIDENCE-MANIFEST.md#e077) |
| `PLANE-WORK-019` | Per-User Work-Item Display Properties | personalization, data, UI | Persisted filters/layout/group/order/properties | [E074](EVIDENCE-MANIFEST.md#e074) |
| `PLANE-WORK-020` | Quick Create Inline Edit and Peek Interaction | interaction, UI, product | Layout-local create/edit and side/full/modal preview | [E030](EVIDENCE-MANIFEST.md#e030) |

### Views, Filters, Search, and Navigation

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-VIEW-001` | Grouped List Work-Item Layout | UI, interaction, product | Reusable grouped list across six contexts | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-002` | Kanban and Swimlane Work-Item Layout | UI, interaction, product | Groups, subgroups, swimlanes, drag behavior | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-003` | Editable Spreadsheet Work-Item Layout | UI, interaction, product | Property columns and keyboard-aware editable rows | [E030](EVIDENCE-MANIFEST.md#e030), [E038](EVIDENCE-MANIFEST.md#e038) |
| `PLANE-VIEW-004` | Calendar Work-Item Layout | UI, interaction, product | Month/week tiles, date blocks, quick add | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-005` | Gantt Work-Item Layout | UI, interaction, product | Dated work-item timeline | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-006` | Multi-Property Work-Item Filters | search, UI, product | State/project/priority/member/label/cycle/module/date/mention filters | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-007` | Group Sort and Display Configuration | personalization, UI, data | Layout, group/subgroup, order, visible fields and ranges | [E030](EVIDENCE-MANIFEST.md#e030) |
| `PLANE-VIEW-008` | Saved Project and Workspace Views | product, search, data | Persisted scoped filtered views | [E020](EVIDENCE-MANIFEST.md#e020) |
| `PLANE-VIEW-009` | Favorite Items and Folders | personalization, navigation, interaction | Sidebar favorites, groups/folders, reordering | [E032](EVIDENCE-MANIFEST.md#e032) |
| `PLANE-VIEW-010` | Membership-Scoped Global and Entity Search | search, product, security | Multi-entity search under active membership | [E020](EVIDENCE-MANIFEST.md#e020) |
| `PLANE-VIEW-011` | Power-K Command and Navigation Palette | search, interaction, accessibility | Keyboard creation, navigation, entity and preference commands | [E034](EVIDENCE-MANIFEST.md#e034) |

### Cycles

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-CYCLE-001` | Cycle Lifecycle Membership and Transfer | product, data | Cycle CRUD/archive plus add/remove/transfer work items | [E014](EVIDENCE-MANIFEST.md#e014) |
| `PLANE-CYCLE-002` | Active Cycle Progress and Analytics | analytics, product, UI | Productivity, progress, charts and detail analytics | [E014](EVIDENCE-MANIFEST.md#e014) |
| `PLANE-CYCLE-003` | Cycle Favorites Filters and User Properties | personalization, search, product | Favorites, date/status filtering, user properties | [E014](EVIDENCE-MANIFEST.md#e014) |

### Modules

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-MODULE-001` | Module Lifecycle and Work-Item Membership | product, data | Module CRUD/archive and work-item membership | [E015](EVIDENCE-MANIFEST.md#e015) |
| `PLANE-MODULE-002` | Module Status Lead Members and Links | product, collaboration, integration | Status, lead, members, dates, external links | [E015](EVIDENCE-MANIFEST.md#e015) |
| `PLANE-MODULE-003` | Module Progress Gantt Favorites and Filters | analytics, personalization, UI | Progress/timeline, favorites, filters/order/archive | [E015](EVIDENCE-MANIFEST.md#e015) |

### Pages and Realtime Documents

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-PAGE-001` | Project Page Lifecycle | product, data, UI | Create/list/edit/favorite/archive/duplicate/delete | [E016](EVIDENCE-MANIFEST.md#e016), [E031](EVIDENCE-MANIFEST.md#e031) |
| `PLANE-PAGE-002` | Realtime Collaborative Page Editing | realtime, collaboration, product | Authenticated Hocuspocus/Yjs WebSocket editing | [E041](EVIDENCE-MANIFEST.md#e041) |
| `PLANE-PAGE-003` | Page Access and Lock Controls | authorization, collaboration, product | Page access level and lock state | [E016](EVIDENCE-MANIFEST.md#e016), [E026](EVIDENCE-MANIFEST.md#e026) |
| `PLANE-PAGE-004` | Page Version History | data, product, automation | Capture/list/retrieve historical versions | [E016](EVIDENCE-MANIFEST.md#e016), [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-PAGE-005` | Page Outline Assets and Document Information | UI, navigation, product | Outline, actors, metadata, assets, version tabs | [E031](EVIDENCE-MANIFEST.md#e031) |
| `PLANE-PAGE-006` | Rich-Document Format Conversion | reusable internal, integration, data | Validated HTML to editor JSON/binary | [E040](EVIDENCE-MANIFEST.md#e040), [E064](EVIDENCE-MANIFEST.md#e064) |
| `PLANE-PAGE-007` | Authenticated Page PDF Export | product, integration, operations | Metadata/image/mention-aware PDF rendering and errors | [E042](EVIDENCE-MANIFEST.md#e042), [E055](EVIDENCE-MANIFEST.md#e055) |
| `PLANE-PAGE-008` | Debounced Page Title Sync and Persistence | realtime, data, reusable internal | Observed collaborative title changes persisted through API | [E041](EVIDENCE-MANIFEST.md#e041) |

### Intake

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-INTAKE-001` | Project Intake Configuration and Queue | product, configuration, data | Intake CRUD and filtered queue | [E017](EVIDENCE-MANIFEST.md#e017) |
| `PLANE-INTAKE-002` | Intake Submission and Source Metadata | product, data, integration | In-app/public/external source details on intake issues | [E017](EVIDENCE-MANIFEST.md#e017), [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-INTAKE-003` | Intake Accept Reject Snooze and Duplicate Triage | product, workflow, interaction | Five-state triage with snooze and duplicate target | [E017](EVIDENCE-MANIFEST.md#e017) |

### Analytics and Exports

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-ANALYTICS-001` | Workspace and Project Work-Item Analytics | analytics, product, UI | Overview, stats, charts, trends, distributions, tables | [E018](EVIDENCE-MANIFEST.md#e018) |
| `PLANE-ANALYTICS-002` | Saved and Default Analytic Views | analytics, personalization, data | Persisted analytic configurations and default | [E018](EVIDENCE-MANIFEST.md#e018) |
| `PLANE-ANALYTICS-003` | Analytics CSV Email Export | analytics, automation, notification | Segmented/nonsegmented CSV generation and email | [E044](EVIDENCE-MANIFEST.md#e044), [E071](EVIDENCE-MANIFEST.md#e071) |
| `PLANE-ANALYTICS-004` | User Profile Statistics Activity and Export | analytics, product, data | Workload/distributions/graphs/activity download | [E028](EVIDENCE-MANIFEST.md#e028), [E032](EVIDENCE-MANIFEST.md#e032) |
| `PLANE-ANALYTICS-005` | Work-Item Export History and Downloads | analytics, automation, data | Filtered S3 archive export, history, expiry | [E071](EVIDENCE-MANIFEST.md#e071) |

### Notifications

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-NOTIFY-001` | In-App Notification Lifecycle | notification, product, data | List/detail/read/archive/unread/mark-all-read | [E019](EVIDENCE-MANIFEST.md#e019) |
| `PLANE-NOTIFY-002` | Notification Center Filters and Cards | notification, UI, interaction | Full-page/sidebar cards, filters, actions, empty/loading | [E033](EVIDENCE-MANIFEST.md#e033) |
| `PLANE-NOTIFY-003` | User Notification Preferences | notification, personalization, data | Per-user delivery preferences | [E019](EVIDENCE-MANIFEST.md#e019) |
| `PLANE-NOTIFY-004` | Batched Email Notifications | notification, automation, integration | Redis-locked five-minute email batching | [E044](EVIDENCE-MANIFEST.md#e044), [E045](EVIDENCE-MANIFEST.md#e045) |
| `PLANE-NOTIFY-005` | Mention Notification and Subscriber Fan-Out | notification, collaboration, automation | Mention extraction, subscriber addition, recipient fan-out | [E044](EVIDENCE-MANIFEST.md#e044), [E081](EVIDENCE-MANIFEST.md#e081) |

### Home and Personal Workspace

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-HOME-001` | Configurable Workspace Home Dashboard | product, personalization, UI | Greeting/projects/recents/links/stickies widget composition | [E032](EVIDENCE-MANIFEST.md#e032), [E078](EVIDENCE-MANIFEST.md#e078) |
| `PLANE-HOME-002` | Workspace Quick Links | product, navigation, personalization | Quick-link CRUD and home widget | [E078](EVIDENCE-MANIFEST.md#e078) |
| `PLANE-HOME-003` | Recent Visits | personalization, navigation, data | Recent project/page/work-item persistence and display | [E074](EVIDENCE-MANIFEST.md#e074), [E078](EVIDENCE-MANIFEST.md#e078) |
| `PLANE-HOME-004` | Draggable Sticky Notes | product, personalization, interaction | Sticky CRUD/search/reorder | [E032](EVIDENCE-MANIFEST.md#e032), [E078](EVIDENCE-MANIFEST.md#e078) |
| `PLANE-HOME-005` | User Profile Tour Timezone and Week Preferences | personalization, product, data | Profile/settings/onboarding/tour/time/language preferences | [E028](EVIDENCE-MANIFEST.md#e028), [E032](EVIDENCE-MANIFEST.md#e032) |

### Published Space

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-SPACE-001` | Anchor-Scoped Published Project Board | product, tenancy, integration | Public project metadata/settings by anchor | [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-SPACE-002` | Public List and Kanban Browsing | product, UI, search | List/Kanban with state/label/priority filters | [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-SPACE-003` | Public Issue Detail Comments Reactions and Votes | product, collaboration, interaction | Issue detail and authenticated interactions | [E024](EVIDENCE-MANIFEST.md#e024) |
| `PLANE-SPACE-004` | Anchor-Scoped Public Assets and Intake | product, integration, data | Public board assets and intake submission | [E024](EVIDENCE-MANIFEST.md#e024) |

### Instance Administration

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-ADMIN-001` | Instance General Configuration | administration, configuration | Instance identity/signup/workspace controls | [E011](EVIDENCE-MANIFEST.md#e011), [E085](EVIDENCE-MANIFEST.md#e085) |
| `PLANE-ADMIN-002` | Instance Administrator Management | administration, authorization, security | Admin list/current/create/remove | [E085](EVIDENCE-MANIFEST.md#e085) |
| `PLANE-ADMIN-003` | Instance Workspace Administration | administration, tenancy, product | Admin workspace list/create | [E011](EVIDENCE-MANIFEST.md#e011), [E085](EVIDENCE-MANIFEST.md#e085) |
| `PLANE-ADMIN-004` | SMTP Configuration and Test Email | administration, notification, integration | SMTP edit, credentials check, test send | [E011](EVIDENCE-MANIFEST.md#e011), [E085](EVIDENCE-MANIFEST.md#e085) |
| `PLANE-ADMIN-005` | Authentication Provider Configuration | administration, authentication, configuration | Auth toggles and Google/GitHub/GitLab/Gitea config | [E011](EVIDENCE-MANIFEST.md#e011) |
| `PLANE-ADMIN-006` | AI and Image-Storage Configuration | administration, configuration, integration | LLM and S3/MinIO settings | [E011](EVIDENCE-MANIFEST.md#e011), [E047](EVIDENCE-MANIFEST.md#e047) |

### Integrations and External Interfaces

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-INTEGRATION-001` | Versioned Outbound Webhooks | integration, automation, administration | Event selection, version, secret, logs, delivery | [E022](EVIDENCE-MANIFEST.md#e022) |
| `PLANE-INTEGRATION-002` | Webhook and Link SSRF Protection | security, integration, reusable internal | DNS/IP/domain checks and allowlists | [E073](EVIDENCE-MANIFEST.md#e073), [E080](EVIDENCE-MANIFEST.md#e080) |
| `PLANE-INTEGRATION-003` | Workspace and Project AI Assistant | integration, product, configuration | Contextual configured LLM calls | [E009](EVIDENCE-MANIFEST.md#e009), [E047](EVIDENCE-MANIFEST.md#e047) |
| `PLANE-INTEGRATION-004` | Unsplash Image Search | integration, UI, product | Configured Unsplash proxy | [E009](EVIDENCE-MANIFEST.md#e009) |
| `PLANE-INTEGRATION-005` | GitHub Synchronization Substrate | integration, data | Repository/issue/comment sync mappings and UI/service seams | [E072](EVIDENCE-MANIFEST.md#e072) |
| `PLANE-INTEGRATION-006` | Slack Project Synchronization Substrate | integration, data | Project/channel mapping and selector seam | [E072](EVIDENCE-MANIFEST.md#e072) |
| `PLANE-INTEGRATION-007` | Jira Frontend Integration Substrate | integration, reusable internal | Frontend service seam only | [E072](EVIDENCE-MANIFEST.md#e072) |
| `PLANE-INTEGRATION-008` | OpenAPI Schema Swagger UI and ReDoc | integration, developer experience | Configurable external API docs | [E083](EVIDENCE-MANIFEST.md#e083) |
| `PLANE-INTEGRATION-009` | SMTP Email Transport | integration, notification, configuration | Email transport for auth/invites/notifications/exports | [E047](EVIDENCE-MANIFEST.md#e047) |
| `PLANE-INTEGRATION-010` | PostHog OpenTelemetry and Scout Observability | integration, operations, analytics | Events, OTLP metrics, optional APM | [E084](EVIDENCE-MANIFEST.md#e084) |

### UI, Theme, Accessibility, and Localization

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-UI-001` | System Light Dark and High-Contrast Themes | UI, personalization, accessibility | Six appearance selections including two contrast modes | [E035](EVIDENCE-MANIFEST.md#e035) |
| `PLANE-UI-002` | Custom Theme Editing | UI, personalization, configuration | Custom primary/background/dark palette | [E035](EVIDENCE-MANIFEST.md#e035) |
| `PLANE-UI-003` | Theme Configuration Import and Export | UI, personalization, integration | Theme config download/import | [E035](EVIDENCE-MANIFEST.md#e035) |
| `PLANE-UI-004` | Responsive Collapsible Workspace Navigation | UI, navigation, personalization | Switching, menus, quick actions, collapse/peek | [E030](EVIDENCE-MANIFEST.md#e030), [E035](EVIDENCE-MANIFEST.md#e035) |
| `PLANE-UI-005` | Loading Empty Error and Toast Feedback | UI, interaction, reusable internal | Shared and feature-level feedback states | [E037](EVIDENCE-MANIFEST.md#e037) |
| `PLANE-UI-006` | Semantic Design Token and Animation System | UI, reusable internal, configuration | Canvas/surface/layer/status/chart/label/motion tokens | [E035](EVIDENCE-MANIFEST.md#e035) |
| `PLANE-UI-007` | Propel Design-System Suite | UI, reusable internal, accessibility | Primitives, 180 icons, charts, emoji, empty states, Storybook | [E065](EVIDENCE-MANIFEST.md#e065) |
| `PLANE-UI-008` | Shared UI Form Navigation and Sortable Suite | UI, reusable internal, accessibility | Forms/dropdowns/nav/modals/sortable/tables/Storybook | [E066](EVIDENCE-MANIFEST.md#e066) |
| `PLANE-UI-009` | Drag-and-Drop and Sortable Interactions | interaction, UI, reusable internal | Cards/groups/favorites/widgets/stickies and work-item movement | [E030](EVIDENCE-MANIFEST.md#e030), [E066](EVIDENCE-MANIFEST.md#e066) |
| `PLANE-UI-010` | Icons Emoji Pickers and Reactions | UI, interaction, reusable internal | Icon set, emoji selection, reaction display | [E065](EVIDENCE-MANIFEST.md#e065) |
| `PLANE-UI-011` | Code-Level Accessibility and Keyboard Baseline | accessibility, UI, interaction | ARIA/status labels, focus/portal, keyboard/shortcut behavior | [E038](EVIDENCE-MANIFEST.md#e038) |
| `PLANE-UI-012` | Nineteen-Language Localization with LTR Limitation | localization, UI, configuration | i18next/ICU, 19 languages, 28 namespaces, explicit LTR | [E036](EVIDENCE-MANIFEST.md#e036), [E088](EVIDENCE-MANIFEST.md#e088) |

### Data and State

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-DATA-001` | PostgreSQL UUID Audit and Soft-Delete Model Foundation | data, reusable internal | UUID, timestamps, actors, soft deletion | [E074](EVIDENCE-MANIFEST.md#e074) |
| `PLANE-DATA-002` | Workspace and Project Scoped Persistence | data, tenancy, security | Scoped base models and derived workspace | [E074](EVIDENCE-MANIFEST.md#e074) |
| `PLANE-DATA-003` | Redis Cache and Coordination | data, operations, realtime | Backend cache/locks and live pub/sub | [E047](EVIDENCE-MANIFEST.md#e047), [E048](EVIDENCE-MANIFEST.md#e048) |
| `PLANE-DATA-004` | RabbitMQ and Celery Queue Substrate | data, automation, operations | Asynchronous jobs and DB Beat/results | [E047](EVIDENCE-MANIFEST.md#e047), [E049](EVIDENCE-MANIFEST.md#e049) |
| `PLANE-DATA-005` | Database Sessions with Device Context | data, authentication, security | PostgreSQL sessions plus device/user metadata | [E028](EVIDENCE-MANIFEST.md#e028), [E048](EVIDENCE-MANIFEST.md#e048) |
| `PLANE-DATA-006` | S3 and MinIO Object Storage | data, integration, operations | Files/editor assets/exports/images and signed URLs | [E021](EVIDENCE-MANIFEST.md#e021), [E048](EVIDENCE-MANIFEST.md#e048) |
| `PLANE-DATA-007` | Optional PostgreSQL Read Replica | data, operations, configuration | Eligible-read routing with primary writes | [E047](EVIDENCE-MANIFEST.md#e047), [E080](EVIDENCE-MANIFEST.md#e080) |
| `PLANE-DATA-008` | MobX Client State Architecture | data, UI, reusable internal | Feature stores across web/admin/Space | [E039](EVIDENCE-MANIFEST.md#e039), [E068](EVIDENCE-MANIFEST.md#e068) |
| `PLANE-DATA-009` | Browser IndexedDB Service | data, reusable internal | Shared client-side IndexedDB operations | [E067](EVIDENCE-MANIFEST.md#e067) |

### Jobs and Automation

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-JOB-001` | Database-Backed Scheduled Job Registry | automation, operations | Beat schedule for batching/metrics/automation/deletion/cleanup | [E045](EVIDENCE-MANIFEST.md#e045) |
| `PLANE-JOB-002` | Automatic Work-Item Close and Archive | automation, product | Daily threshold-based close/archive | [E044](EVIDENCE-MANIFEST.md#e044), [E077](EVIDENCE-MANIFEST.md#e077) |
| `PLANE-JOB-003` | Asynchronous Activity Generation | automation, data, product | Detailed mutation-to-activity conversion | [E081](EVIDENCE-MANIFEST.md#e081) |
| `PLANE-JOB-004` | Asynchronous Notification and Webhook Fan-Out | automation, notification, integration | Recipient notifications and outbound events | [E081](EVIDENCE-MANIFEST.md#e081) |
| `PLANE-JOB-005` | Asset Copy Metadata and Cleanup Jobs | automation, data, operations | Embedded copies, metadata, incomplete-upload cleanup | [E021](EVIDENCE-MANIFEST.md#e021), [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-JOB-006` | Issue and Page Version Synchronization Jobs | automation, data | Snapshot/description/page version backfill and capture | [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-JOB-007` | Email Invitation and Account Lifecycle Jobs | automation, notification, authentication | Password/magic/invite/activation/email-update mail | [E044](EVIDENCE-MANIFEST.md#e044) |
| `PLANE-JOB-008` | Seed Dummy Telemetry and Recent-Visit Jobs | automation, developer experience, operations | Initial/demo data, metrics/events, recents | [E044](EVIDENCE-MANIFEST.md#e044), [E084](EVIDENCE-MANIFEST.md#e084) |

### Deployment and Operations

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-OPS-001` | Multi-Container Community Deployment | deployment, operations | Apps/workers plus PostgreSQL/Valkey/RabbitMQ/MinIO/proxy | [E049](EVIDENCE-MANIFEST.md#e049) |
| `PLANE-OPS-002` | All-in-One Supervisor Image | deployment, operations | Seven app processes in one image with external data services | [E050](EVIDENCE-MANIFEST.md#e050) |
| `PLANE-OPS-003` | Caddy Base-Path and TLS Proxy | deployment, operations, security | Route/base-path proxy, body/header limits, ACME TLS | [E051](EVIDENCE-MANIFEST.md#e051) |
| `PLANE-OPS-004` | Community Install Start Stop Restart and Upgrade CLI | deployment, operations, developer experience | Deployment lifecycle control | [E052](EVIDENCE-MANIFEST.md#e052) |
| `PLANE-OPS-005` | Backup Restore and Air-Gapped Restore | operations, deployment, data | Connected and offline restore paths | [E052](EVIDENCE-MANIFEST.md#e052) |
| `PLANE-OPS-006` | Docker Swarm Deployment Helper | deployment, operations | Swarm stack helper | [E053](EVIDENCE-MANIFEST.md#e053) |
| `PLANE-OPS-007` | Kubernetes Deployment Pointer | deployment, operations | External chart guidance; no in-tree chart | [E053](EVIDENCE-MANIFEST.md#e053) |
| `PLANE-OPS-008` | Health Checks Structured Logging and Graceful Shutdown | operations, integration | Health response, JSON/request logs, clean connection shutdown | [E040](EVIDENCE-MANIFEST.md#e040), [E084](EVIDENCE-MANIFEST.md#e084) |
| `PLANE-OPS-009` | Environment-Driven Runtime Configuration and Secret Guards | operations, configuration, security | Paths/URLs/services/providers/secrets and insecure-key rejection | [E047](EVIDENCE-MANIFEST.md#e047), [E050](EVIDENCE-MANIFEST.md#e050) |

### Developer Experience, Testing, Build, and Delivery

| Feature ID | Canonical name | Classification | Verified capability | Exact evidence |
|---|---|---|---|---|
| `PLANE-DEV-001` | pnpm and Turborepo Monorepo Orchestration | developer experience, operations | Dependency-ordered build/dev/check/start | [E004](EVIDENCE-MANIFEST.md#e004) |
| `PLANE-DEV-002` | Shared Strict TypeScript Configurations | developer experience, reusable internal | Base/React/Router/Node/library TS configs | [E070](EVIDENCE-MANIFEST.md#e070) |
| `PLANE-DEV-003` | Oxlint Oxfmt Ruff and Pre-Commit Quality Gates | developer experience, testing | JS/TS/Python formatting/linting | [E004](EVIDENCE-MANIFEST.md#e004), [E058](EVIDENCE-MANIFEST.md#e058) |
| `PLANE-DEV-004` | Pytest Unit Contract and Smoke Harness | testing, developer experience | API unit, app/external contract, smoke tests and fixtures | [E054](EVIDENCE-MANIFEST.md#e054), [E079](EVIDENCE-MANIFEST.md#e079), [E080](EVIDENCE-MANIFEST.md#e080) |
| `PLANE-DEV-005` | Live PDF Vitest Harness | testing, developer experience | PDF renderer/effect utility tests | [E055](EVIDENCE-MANIFEST.md#e055) |
| `PLANE-DEV-006` | Tested AST Codemods | developer experience, reusable internal, testing | Function declaration and directive transforms | [E056](EVIDENCE-MANIFEST.md#e056) |
| `PLANE-DEV-007` | UI and Propel Storybook Workbenches | developer experience, UI, testing | Isolated component stories for both libraries | [E065](EVIDENCE-MANIFEST.md#e065), [E066](EVIDENCE-MANIFEST.md#e066) |
| `PLANE-DEV-008` | Affected Frontend Build Format Lint and Type CI | testing, operations, developer experience | Cached affected-project PR gates | [E057](EVIDENCE-MANIFEST.md#e057) |
| `PLANE-DEV-009` | API Ruff CI | testing, operations, developer experience | Python dependency install and Ruff check | [E058](EVIDENCE-MANIFEST.md#e058) |
| `PLANE-DEV-010` | CodeQL React Doctor Copyright and i18n CI | testing, security, accessibility, operations | Static security/quality/notices/locale sync gates | [E059](EVIDENCE-MANIFEST.md#e059) |
| `PLANE-DEV-011` | Container Release and Feature-Preview Pipelines | deployment, operations, developer experience | App/AIO images, releases, feature previews | [E060](EVIDENCE-MANIFEST.md#e060) |
| `PLANE-DEV-012` | Localization Sync and Type Generation Tooling | localization, developer experience, testing | Locale key sync and typed translation keys | [E036](EVIDENCE-MANIFEST.md#e036), [E059](EVIDENCE-MANIFEST.md#e059) |
| `PLANE-DEV-013` | Django Administration and Maintenance Commands | developer experience, administration, operations | 18 user/cache/bucket/version/DB/instance commands | [E046](EVIDENCE-MANIFEST.md#e046) |

## Coverage Notes

- Feature classes inspected: all classes required by the skill and user request.
- Feature classes not inspected: none.
- Machine/human feature ID count: 161 each; exact ID-set parity validated.
- Known gaps: runtime execution, absent enterprise code, complete dependency/container/asset SBOM, and the explicit unknowns in [UNKNOWNS.md](UNKNOWNS.md).
- Contradictory evidence: `C-001` through `C-009` in [UNKNOWNS.md](UNKNOWNS.md).
- Coverage decision: Complete; the artifact, YAML, link, evidence-anchor, exact-blob, ID-parity, source-SHA, no-source-mutation, registry, and index checks passed.
