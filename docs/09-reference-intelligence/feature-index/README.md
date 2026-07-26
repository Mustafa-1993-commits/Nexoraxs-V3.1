# Reference Feature Index

This directory will contain only features verified by Repository Discovery from the local candidate source repositories.

A folder name or repository presence does not prove a feature role. Every indexed feature must use a stable feature ID and link to its pinned source revision, executable evidence, license review, discovery report, explicit exclusions, and any later NexoraXS adoption history.

Cross-repository semantic capabilities and lazy Reference Knowledge Objects are indexed separately in the [Reference Knowledge indexes](../knowledge-index/README.md). This feature index remains authoritative for stable repository feature IDs.

## SRC-ALIZIODEV-LARAVEL-NEXT-STARTER

- **Repository:** `aliziodev/laravel-next-starter-kit`
- **Pinned revision:** `1f1bc9681c1141802cc8125235195ff904c46e0c`
- **Discovery state:** Complete
- **Repository evidence:** [profile](../repositories/aliziodev/REPOSITORY-PROFILE.md), [catalog](../repositories/aliziodev/FEATURE-CATALOG.md), [machine catalog](../repositories/aliziodev/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/aliziodev/EVIDENCE-MANIFEST.md), [license review](../repositories/aliziodev/LICENSE-REVIEW.md), [coverage decision](../repositories/aliziodev/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/aliziodev/UNKNOWNS.md)
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are `Verified`, current at the pinned revision, and governed by the repository evidence links above.

| Feature ID | Canonical name | Classification |
|---|---|---|
| `ALNS-PLATFORM-001` | Decoupled Laravel–Next Runtime | product, integration, operations |
| `ALNS-WEB-001` | Auth-Aware Welcome Page | product, UI |
| `ALNS-API-001` | Status and Health Endpoints | API, operations |
| `ALNS-AUTH-001` | Same-Origin Sanctum Proxy | authentication, security, integration |
| `ALNS-AUTH-002` | Request-Cached SSR Auth Hydration | authentication, data |
| `ALNS-AUTH-003` | Protected Routes and Safe Return Redirects | authentication, security |
| `ALNS-AUTH-004` | User Registration | authentication, product |
| `ALNS-AUTH-005` | Email/Password Login with Remember Me | authentication, product |
| `ALNS-AUTH-006` | User Logout | authentication, product |
| `ALNS-AUTH-007` | Expired or Revoked Session Recovery | authentication, security, interaction |
| `ALNS-AUTH-008` | Forgot-Password Request | authentication, notification |
| `ALNS-AUTH-009` | Password Reset | authentication, security |
| `ALNS-AUTH-010` | Password Confirmation | authentication, security |
| `ALNS-AUTH-011` | Password Update | authentication, security |
| `ALNS-AUTH-012` | Profile Update | product, authentication |
| `ALNS-AUTH-013` | Dormant Email-Verification Flow | authentication, notification, configuration |
| `ALNS-AUTH-014` | TOTP Enrollment and Disable | authentication, security |
| `ALNS-AUTH-015` | TOTP or Recovery-Code Login Challenge | authentication, security |
| `ALNS-AUTH-016` | Two-Factor Recovery-Code Management | authentication, security |
| `ALNS-AUTH-017` | Passkey Passwordless Sign-In | authentication, security |
| `ALNS-AUTH-018` | Passkey Registration, Listing, and Removal | authentication, security |
| `ALNS-AUTH-019` | Passkey Management Discovery | integration, authentication |
| `ALNS-AUTH-020` | Current Authenticated User Projection | API, authentication |
| `ALNS-AUTH-021` | Password-Confirmed Account Deletion | product, security |
| `ALNS-AUTH-022` | Personal Access Token Data Substrate | authentication, API, data |
| `ALNS-SESSION-001` | Browser Session Inventory | security, data, UI |
| `ALNS-SESSION-002` | Single Other-Session Revocation | security, interaction |
| `ALNS-SESSION-003` | Bulk Other-Session Revocation | security, bulk operation |
| `ALNS-UI-001` | Placeholder Dashboard | product, UI |
| `ALNS-UI-002` | Responsive Collapsible Sidebar Shell | UI, interaction, personalization |
| `ALNS-UI-003` | Alternative Header and Auth Layouts | UI, reusable internal |
| `ALNS-UI-004` | Settings Navigation | UI, navigation |
| `ALNS-UI-005` | User Menu, Avatar, and Initials | UI, interaction |
| `ALNS-UI-006` | Breadcrumb Navigation | UI, navigation, accessibility |
| `ALNS-UI-007` | Light, Dark, and System Appearance | UI, personalization |
| `ALNS-UI-008` | Themed Toast Feedback | UI, notification |
| `ALNS-UI-009` | Password Reveal Control | UI, interaction, accessibility |
| `ALNS-UI-010` | Loading, Empty, Validation, and Error States | UI, interaction |
| `ALNS-UI-011` | Overlay and Menu Primitive Suite | UI, reusable internal, accessibility |
| `ALNS-UI-012` | Form and Control Primitive Suite | UI, reusable internal, accessibility |
| `ALNS-UI-013` | Navigation and Display Primitive Suite | UI, reusable internal, accessibility |
| `ALNS-UI-014` | Presentation Utility Hooks and Formatters | UI, reusable internal |
| `ALNS-UI-015` | Code-Level Accessibility Baseline | accessibility, UI |
| `ALNS-I18N-001` | English-Only Locale Baseline | localization, configuration |
| `ALNS-DATA-001` | User and Credential Persistence | data, authentication |
| `ALNS-DATA-002` | Database Session Persistence | data, security |
| `ALNS-DATA-003` | Database Cache and Lock Substrate | data, operations |
| `ALNS-DATA-004` | Queue, Batch, and Failure Persistence | data, automation |
| `ALNS-DATA-005` | Configurable Relational Database Backends | data, configuration |
| `ALNS-DATA-006` | Configurable Filesystem Backends | data, configuration |
| `ALNS-INTEGRATION-001` | Auth Mail Transport and SPA Links | integration, notification |
| `ALNS-OPS-001` | Local Setup and Three-Process Development | developer experience, operations |
| `ALNS-OPS-002` | One-Command Compose Topology | deployment, operations |
| `ALNS-OPS-003` | Shared App-Key, Migration, and Cache Bootstrap | deployment, security |
| `ALNS-OPS-004` | Standalone Non-Root Next Container | deployment, operations |
| `ALNS-OPS-005` | Queue Worker and Scheduler Processes | automation, operations |
| `ALNS-OPS-006` | Logging and Health Instrumentation Baseline | operations, configuration |
| `ALNS-DEV-001` | Backend Pest/PHPUnit Smoke Harness | testing, developer experience |
| `ALNS-DEV-002` | Full-Stack Playwright Harness | testing, developer experience |
| `ALNS-DEV-003` | Authentication E2E Suite | testing, authentication |
| `ALNS-DEV-004` | TOTP E2E Suite | testing, security |
| `ALNS-DEV-005` | Passkey E2E Suite | testing, security |
| `ALNS-DEV-006` | Browser-Session E2E Suite | testing, security |
| `ALNS-DEV-007` | CI Test, Lint, and Format Gates | testing, operations |
| `ALNS-DEV-008` | User Factories and Deterministic Seeders | testing, data |
| `ALNS-DEV-009` | Inspire Console Command | developer experience |
| `ALNS-UI-016` | External Learning and Repository Navigation | UI, integration |
| `ALNS-ASSET-001` | Branding and Static Asset Set | UI, assets |

## SRC-PLANE

- **Repository:** `makeplane/plane`
- **Pinned revision:** `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- **Discovery state:** Complete
- **Repository evidence:** [profile](../repositories/plane/REPOSITORY-PROFILE.md), [catalog](../repositories/plane/FEATURE-CATALOG.md), [machine catalog](../repositories/plane/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/plane/EVIDENCE-MANIFEST.md), [license review](../repositories/plane/LICENSE-REVIEW.md), [coverage decision](../repositories/plane/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/plane/UNKNOWNS.md)
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are `Verified`, current at the pinned revision, and governed by the repository evidence links above. Substrate records are not represented as complete end-to-end integrations.

| Feature ID | Canonical name | Classification |
|---|---|---|
| `PLANE-PLATFORM-001` | Six-Application Community Runtime | product, operations, integration |
| `PLANE-PLATFORM-002` | Core and Extended Edition Seams | developer-experience, reusable-internal, configuration |
| `PLANE-PLATFORM-003` | Layered HTTP API Surfaces | product, integration, security |
| `PLANE-AUTH-001` | Database Session and CSRF Authentication | authentication, security, data |
| `PLANE-AUTH-002` | Email and Password Sign-In and Registration | authentication, product |
| `PLANE-AUTH-003` | Magic-Code Sign-In and Registration | authentication, notification |
| `PLANE-AUTH-004` | Password Recovery and Update | authentication, security, notification |
| `PLANE-AUTH-005` | Google OAuth Authentication | authentication, integration |
| `PLANE-AUTH-006` | GitHub OAuth Authentication | authentication, integration |
| `PLANE-AUTH-007` | GitLab OAuth Authentication | authentication, integration |
| `PLANE-AUTH-008` | Gitea OAuth Authentication | authentication, integration |
| `PLANE-AUTH-009` | Session Sign-Out | authentication, security |
| `PLANE-AUTH-010` | Space Authentication Variants | authentication, product |
| `PLANE-AUTH-011` | Verified Email Address Update | authentication, security, notification |
| `PLANE-AUTH-012` | Device and Browser Session Metadata | authentication, security, data |
| `PLANE-AUTH-013` | Personal API Tokens and API-Key Authentication | authentication, security, integration |
| `PLANE-AUTH-014` | Separate Instance-Administrator Authentication | authentication, administration, security |
| `PLANE-TENANT-001` | Workspace Lifecycle | product, tenancy, data |
| `PLANE-TENANT-002` | Workspace Onboarding and Seed Content | product, automation, tenancy |
| `PLANE-TENANT-003` | Workspace Invitations | product, tenancy, notification |
| `PLANE-TENANT-004` | Workspace Membership and Roles | authorization, tenancy, administration |
| `PLANE-TENANT-005` | Workspace Leave and Delete | product, tenancy, security |
| `PLANE-TENANT-006` | Workspace Themes and User Preferences | tenancy, personalization, data |
| `PLANE-TENANT-007` | Project Lifecycle and Identifiers | product, tenancy, data |
| `PLANE-TENANT-008` | Project Invitations Membership and Roles | authorization, tenancy, administration |
| `PLANE-TENANT-009` | Project Feature and Automation Settings | configuration, product, automation |
| `PLANE-TENANT-010` | Project Publication and Deploy Boards | product, integration, tenancy |
| `PLANE-WORK-001` | Work-Item CRUD and Human Identifiers | product, data |
| `PLANE-WORK-002` | Rich Work-Item Descriptions | product, ui, data |
| `PLANE-WORK-003` | Configurable Workflow States | product, configuration, data |
| `PLANE-WORK-004` | Work-Item Property Management | product, ui, data |
| `PLANE-WORK-005` | Parent and Sub-Work-Item Hierarchy | product, data, ui |
| `PLANE-WORK-006` | Work-Item Relations and Blockers | product, data |
| `PLANE-WORK-007` | External Links with Metadata Crawling | product, integration, automation |
| `PLANE-WORK-008` | Work-Item Attachments | product, data, integration |
| `PLANE-WORK-009` | Work-Item Comments | product, collaboration, ui |
| `PLANE-WORK-010` | Issue Comment and Public Vote Reactions | product, collaboration, interaction |
| `PLANE-WORK-011` | Subscribers and Mention Participants | product, collaboration, notification |
| `PLANE-WORK-012` | Work-Item Activity History | product, data, automation |
| `PLANE-WORK-013` | Work-Item and Description Version History | product, data, automation |
| `PLANE-WORK-014` | Work-Item Archive and Restore | product, data |
| `PLANE-WORK-015` | Soft Deletion and Retention Purge | data, automation, operations |
| `PLANE-WORK-016` | Bulk Work-Item Operations | product, interaction, data |
| `PLANE-WORK-017` | Workspace Work-Item Drafts | product, data, ui |
| `PLANE-WORK-018` | Work-Item Type Data Substrate | data, configuration |
| `PLANE-WORK-019` | Per-User Work-Item Display Properties | personalization, data, ui |
| `PLANE-WORK-020` | Quick Create Inline Edit and Peek Interaction | interaction, ui, product |
| `PLANE-VIEW-001` | Grouped List Work-Item Layout | ui, interaction, product |
| `PLANE-VIEW-002` | Kanban and Swimlane Work-Item Layout | ui, interaction, product |
| `PLANE-VIEW-003` | Editable Spreadsheet Work-Item Layout | ui, interaction, product |
| `PLANE-VIEW-004` | Calendar Work-Item Layout | ui, interaction, product |
| `PLANE-VIEW-005` | Gantt Work-Item Layout | ui, interaction, product |
| `PLANE-VIEW-006` | Multi-Property Work-Item Filters | search, ui, product |
| `PLANE-VIEW-007` | Group Sort and Display Configuration | personalization, ui, data |
| `PLANE-VIEW-008` | Saved Project and Workspace Views | product, search, data |
| `PLANE-VIEW-009` | Favorite Items and Folders | personalization, navigation, interaction |
| `PLANE-VIEW-010` | Membership-Scoped Global and Entity Search | search, product, security |
| `PLANE-VIEW-011` | Power-K Command and Navigation Palette | search, interaction, accessibility |
| `PLANE-CYCLE-001` | Cycle Lifecycle Membership and Transfer | product, data |
| `PLANE-CYCLE-002` | Active Cycle Progress and Analytics | analytics, product, ui |
| `PLANE-CYCLE-003` | Cycle Favorites Filters and User Properties | personalization, search, product |
| `PLANE-MODULE-001` | Module Lifecycle and Work-Item Membership | product, data |
| `PLANE-MODULE-002` | Module Status Lead Members and Links | product, collaboration, integration |
| `PLANE-MODULE-003` | Module Progress Gantt Favorites and Filters | analytics, personalization, ui |
| `PLANE-PAGE-001` | Project Page Lifecycle | product, data, ui |
| `PLANE-PAGE-002` | Realtime Collaborative Page Editing | realtime, collaboration, product |
| `PLANE-PAGE-003` | Page Access and Lock Controls | authorization, collaboration, product |
| `PLANE-PAGE-004` | Page Version History | data, product, automation |
| `PLANE-PAGE-005` | Page Outline Assets and Document Information | ui, navigation, product |
| `PLANE-PAGE-006` | Rich-Document Format Conversion | reusable-internal, integration, data |
| `PLANE-PAGE-007` | Authenticated Page PDF Export | product, integration, operations |
| `PLANE-PAGE-008` | Debounced Page Title Sync and Persistence | realtime, data, reusable-internal |
| `PLANE-INTAKE-001` | Project Intake Configuration and Queue | product, configuration, data |
| `PLANE-INTAKE-002` | Intake Submission and Source Metadata | product, data, integration |
| `PLANE-INTAKE-003` | Intake Accept Reject Snooze and Duplicate Triage | product, workflow, interaction |
| `PLANE-ANALYTICS-001` | Workspace and Project Work-Item Analytics | analytics, product, ui |
| `PLANE-ANALYTICS-002` | Saved and Default Analytic Views | analytics, personalization, data |
| `PLANE-ANALYTICS-003` | Analytics CSV Email Export | analytics, automation, notification |
| `PLANE-ANALYTICS-004` | User Profile Statistics Activity and Export | analytics, product, data |
| `PLANE-ANALYTICS-005` | Work-Item Export History and Downloads | analytics, automation, data |
| `PLANE-NOTIFY-001` | In-App Notification Lifecycle | notification, product, data |
| `PLANE-NOTIFY-002` | Notification Center Filters and Cards | notification, ui, interaction |
| `PLANE-NOTIFY-003` | User Notification Preferences | notification, personalization, data |
| `PLANE-NOTIFY-004` | Batched Email Notifications | notification, automation, integration |
| `PLANE-NOTIFY-005` | Mention Notification and Subscriber Fan-Out | notification, collaboration, automation |
| `PLANE-HOME-001` | Configurable Workspace Home Dashboard | product, personalization, ui |
| `PLANE-HOME-002` | Workspace Quick Links | product, navigation, personalization |
| `PLANE-HOME-003` | Recent Visits | personalization, navigation, data |
| `PLANE-HOME-004` | Draggable Sticky Notes | product, personalization, interaction |
| `PLANE-HOME-005` | User Profile Tour Timezone and Week Preferences | personalization, product, data |
| `PLANE-SPACE-001` | Anchor-Scoped Published Project Board | product, tenancy, integration |
| `PLANE-SPACE-002` | Public List and Kanban Browsing | product, ui, search |
| `PLANE-SPACE-003` | Public Issue Detail Comments Reactions and Votes | product, collaboration, interaction |
| `PLANE-SPACE-004` | Anchor-Scoped Public Assets and Intake | product, integration, data |
| `PLANE-ADMIN-001` | Instance General Configuration | administration, configuration |
| `PLANE-ADMIN-002` | Instance Administrator Management | administration, authorization, security |
| `PLANE-ADMIN-003` | Instance Workspace Administration | administration, tenancy, product |
| `PLANE-ADMIN-004` | SMTP Configuration and Test Email | administration, notification, integration |
| `PLANE-ADMIN-005` | Authentication Provider Configuration | administration, authentication, configuration |
| `PLANE-ADMIN-006` | AI and Image-Storage Configuration | administration, configuration, integration |
| `PLANE-INTEGRATION-001` | Versioned Outbound Webhooks | integration, automation, administration |
| `PLANE-INTEGRATION-002` | Webhook and Link SSRF Protection | security, integration, reusable-internal |
| `PLANE-INTEGRATION-003` | Workspace and Project AI Assistant | integration, product, configuration |
| `PLANE-INTEGRATION-004` | Unsplash Image Search | integration, ui, product |
| `PLANE-INTEGRATION-005` | GitHub Synchronization Substrate | integration, data |
| `PLANE-INTEGRATION-006` | Slack Project Synchronization Substrate | integration, data |
| `PLANE-INTEGRATION-007` | Jira Frontend Integration Substrate | integration, reusable-internal |
| `PLANE-INTEGRATION-008` | OpenAPI Schema Swagger UI and ReDoc | integration, developer-experience |
| `PLANE-INTEGRATION-009` | SMTP Email Transport | integration, notification, configuration |
| `PLANE-INTEGRATION-010` | PostHog OpenTelemetry and Scout Observability | integration, operations, analytics |
| `PLANE-UI-001` | System Light Dark and High-Contrast Themes | ui, personalization, accessibility |
| `PLANE-UI-002` | Custom Theme Editing | ui, personalization, configuration |
| `PLANE-UI-003` | Theme Configuration Import and Export | ui, personalization, integration |
| `PLANE-UI-004` | Responsive Collapsible Workspace Navigation | ui, navigation, personalization |
| `PLANE-UI-005` | Loading Empty Error and Toast Feedback | ui, interaction, reusable-internal |
| `PLANE-UI-006` | Semantic Design Token and Animation System | ui, reusable-internal, configuration |
| `PLANE-UI-007` | Propel Design-System Suite | ui, reusable-internal, accessibility |
| `PLANE-UI-008` | Shared UI Form Navigation and Sortable Suite | ui, reusable-internal, accessibility |
| `PLANE-UI-009` | Drag-and-Drop and Sortable Interactions | interaction, ui, reusable-internal |
| `PLANE-UI-010` | Icons Emoji Pickers and Reactions | ui, interaction, reusable-internal |
| `PLANE-UI-011` | Code-Level Accessibility and Keyboard Baseline | accessibility, ui, interaction |
| `PLANE-UI-012` | Nineteen-Language Localization with LTR Limitation | localization, ui, configuration |
| `PLANE-DATA-001` | PostgreSQL UUID Audit and Soft-Delete Model Foundation | data, reusable-internal |
| `PLANE-DATA-002` | Workspace and Project Scoped Persistence | data, tenancy, security |
| `PLANE-DATA-003` | Redis Cache and Coordination | data, operations, realtime |
| `PLANE-DATA-004` | RabbitMQ and Celery Queue Substrate | data, automation, operations |
| `PLANE-DATA-005` | Database Sessions with Device Context | data, authentication, security |
| `PLANE-DATA-006` | S3 and MinIO Object Storage | data, integration, operations |
| `PLANE-DATA-007` | Optional PostgreSQL Read Replica | data, operations, configuration |
| `PLANE-DATA-008` | MobX Client State Architecture | data, ui, reusable-internal |
| `PLANE-DATA-009` | Browser IndexedDB Service | data, reusable-internal |
| `PLANE-JOB-001` | Database-Backed Scheduled Job Registry | automation, operations |
| `PLANE-JOB-002` | Automatic Work-Item Close and Archive | automation, product |
| `PLANE-JOB-003` | Asynchronous Activity Generation | automation, data, product |
| `PLANE-JOB-004` | Asynchronous Notification and Webhook Fan-Out | automation, notification, integration |
| `PLANE-JOB-005` | Asset Copy Metadata and Cleanup Jobs | automation, data, operations |
| `PLANE-JOB-006` | Issue and Page Version Synchronization Jobs | automation, data |
| `PLANE-JOB-007` | Email Invitation and Account Lifecycle Jobs | automation, notification, authentication |
| `PLANE-JOB-008` | Seed Dummy Telemetry and Recent-Visit Jobs | automation, developer-experience, operations |
| `PLANE-OPS-001` | Multi-Container Community Deployment | deployment, operations |
| `PLANE-OPS-002` | All-in-One Supervisor Image | deployment, operations |
| `PLANE-OPS-003` | Caddy Base-Path and TLS Proxy | deployment, operations, security |
| `PLANE-OPS-004` | Community Install Start Stop Restart and Upgrade CLI | deployment, operations, developer-experience |
| `PLANE-OPS-005` | Backup Restore and Air-Gapped Restore | operations, deployment, data |
| `PLANE-OPS-006` | Docker Swarm Deployment Helper | deployment, operations |
| `PLANE-OPS-007` | Kubernetes Deployment Pointer | deployment, operations |
| `PLANE-OPS-008` | Health Checks Structured Logging and Graceful Shutdown | operations, integration |
| `PLANE-OPS-009` | Environment-Driven Runtime Configuration and Secret Guards | operations, configuration, security |
| `PLANE-DEV-001` | pnpm and Turborepo Monorepo Orchestration | developer-experience, operations |
| `PLANE-DEV-002` | Shared Strict TypeScript Configurations | developer-experience, reusable-internal |
| `PLANE-DEV-003` | Oxlint Oxfmt Ruff and Pre-Commit Quality Gates | developer-experience, testing |
| `PLANE-DEV-004` | Pytest Unit Contract and Smoke Harness | testing, developer-experience |
| `PLANE-DEV-005` | Live PDF Vitest Harness | testing, developer-experience |
| `PLANE-DEV-006` | Tested AST Codemods | developer-experience, reusable-internal, testing |
| `PLANE-DEV-007` | UI and Propel Storybook Workbenches | developer-experience, ui, testing |
| `PLANE-DEV-008` | Affected Frontend Build Format Lint and Type CI | testing, operations, developer-experience |
| `PLANE-DEV-009` | API Ruff CI | testing, operations, developer-experience |
| `PLANE-DEV-010` | CodeQL React Doctor Copyright and i18n CI | testing, security, accessibility, operations |
| `PLANE-DEV-011` | Container Release and Feature-Preview Pipelines | deployment, operations, developer-experience |
| `PLANE-DEV-012` | Localization Sync and Type Generation Tooling | localization, developer-experience, testing |
| `PLANE-DEV-013` | Django Administration and Maintenance Commands | developer-experience, administration, operations |
