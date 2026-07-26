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

## SRC-BOXYHQ

- **Repository:** `boxyhq/saas-starter-kit`
- **Pinned revision:** `abc9b686823cbfb4973c79bc36fea37a3244be6c`
- **Discovery state:** Complete
- **Reference lifecycle:** `KNOWLEDGE_READY`; understanding coverage `0 / 127 (0.0)`
- **Repository evidence:** [profile](../repositories/boxyhq/REPOSITORY-PROFILE.md), [catalog](../repositories/boxyhq/FEATURE-CATALOG.md), [machine catalog](../repositories/boxyhq/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/boxyhq/EVIDENCE-MANIFEST.md), [license review](../repositories/boxyhq/LICENSE-REVIEW.md), [coverage decision](../repositories/boxyhq/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/boxyhq/UNKNOWNS.md)
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are `Verified`, current at the pinned revision, and governed by the repository evidence links above.

| Feature ID | Canonical name | Implementation status | Classification |
|---|---|---|---|
| `BOXYHQ-PLATFORM-001` | Single-Package Full-Stack Next.js Application | `implemented` | product, developer-experience, operations |
| `BOXYHQ-PLATFORM-002` | Public and Session-Protected Route Partition | `implemented` | authentication, security, architecture |
| `BOXYHQ-PLATFORM-003` | Environment-Driven Provider and Team Feature Gates | `implemented` | configuration, authentication, administration |
| `BOXYHQ-PLATFORM-004` | Embedded or Hosted Jackson Adapter Boundary | `substrate/seam` | integration, reusable-internal, configuration |
| `BOXYHQ-PLATFORM-005` | Layered Page, API, OAuth, SCIM, and Webhook Surfaces | `implemented` | architecture, integration, security |
| `BOXYHQ-AUTH-001` | Email and Password Sign-In | `implemented` | authentication, security, product |
| `BOXYHQ-AUTH-002` | Owner Account and Team Registration | `implemented` | authentication, tenancy, product |
| `BOXYHQ-AUTH-003` | Invitation-Aware Account Registration | `implemented` | authentication, tenancy, workflow |
| `BOXYHQ-AUTH-004` | Optional Email Confirmation | `implemented` | authentication, notification, configuration |
| `BOXYHQ-AUTH-005` | Magic-Link Email Authentication | `implemented` | authentication, notification |
| `BOXYHQ-AUTH-006` | GitHub OAuth Sign-In | `implemented` | authentication, integration |
| `BOXYHQ-AUTH-007` | Google OAuth Sign-In | `implemented` | authentication, integration |
| `BOXYHQ-AUTH-008` | Selectable JWT or Database Sessions | `implemented` | authentication, configuration, data |
| `BOXYHQ-AUTH-009` | Database Session Creation for Credential Flows | `implemented` | authentication, security, data |
| `BOXYHQ-AUTH-010` | Custom Sign-Out Across Session Strategies | `implemented` | authentication, security |
| `BOXYHQ-AUTH-011` | Browser Session Inventory | `implemented` | authentication, security, ui |
| `BOXYHQ-AUTH-012` | Individual Browser Session Revocation | `implemented` | authentication, security, ui |
| `BOXYHQ-AUTH-013` | Forgotten-Password Recovery | `implemented` | authentication, security, notification |
| `BOXYHQ-AUTH-014` | Password Reset with Session Invalidation | `implemented` | authentication, security, data |
| `BOXYHQ-AUTH-015` | Authenticated Password Change | `implemented` | authentication, security, ui |
| `BOXYHQ-AUTH-016` | Failed-Login Account Lockout | `implemented` | authentication, security, notification |
| `BOXYHQ-AUTH-017` | Tokenized Account Unlock and Link Renewal | `implemented` | authentication, security, notification |
| `BOXYHQ-AUTH-018` | Optional Business-Email Allowlist Policy | `implemented` | authentication, security, configuration |
| `BOXYHQ-AUTH-019` | Optional reCAPTCHA on Credential Entry Points | `implemented` | authentication, security, integration |
| `BOXYHQ-AUTH-020` | External Identity Account Provisioning and Linking | `implemented` | authentication, integration, data |
| `BOXYHQ-AUTH-021` | Configurable Multi-Method Sign-In Screen | `implemented` | authentication, ui, configuration |
| `BOXYHQ-AUTH-022` | Authenticated-Route Login Redirect with Callback | `implemented` | authentication, navigation, security |
| `BOXYHQ-TEAM-001` | Team Creation and Membership-Scoped Listing | `implemented` | tenancy, product, data |
| `BOXYHQ-TEAM-002` | Team Name, Slug, and Domain Settings | `implemented` | tenancy, administration, data |
| `BOXYHQ-TEAM-003` | Feature-Gated Team Deletion | `implemented` | tenancy, administration, security |
| `BOXYHQ-TEAM-004` | Multi-Team Switching | `implemented` | tenancy, navigation, ui |
| `BOXYHQ-TEAM-005` | Team Selector and Creation Navigation | `implemented` | tenancy, navigation, ui |
| `BOXYHQ-TEAM-006` | Many-to-Many Team Membership Persistence | `implemented` | tenancy, data, authorization |
| `BOXYHQ-TEAM-007` | OWNER, ADMIN, and MEMBER Roles | `implemented` | authorization, tenancy, administration |
| `BOXYHQ-TEAM-008` | Resource-and-Action Permission Matrix | `implemented` | authorization, security, reusable-internal |
| `BOXYHQ-TEAM-009` | Server-Side Team Membership Guard | `implemented` | authorization, security, tenancy |
| `BOXYHQ-TEAM-010` | Team Member Directory | `implemented` | tenancy, administration, ui |
| `BOXYHQ-TEAM-011` | Email Team Invitations | `implemented` | tenancy, notification, workflow |
| `BOXYHQ-TEAM-012` | Shareable Team Invitation Links | `implemented` | tenancy, workflow, ui |
| `BOXYHQ-TEAM-013` | Invitation Domain Restrictions | `implemented` | tenancy, security, workflow |
| `BOXYHQ-TEAM-014` | Pending Invitation Listing and Revocation | `implemented` | tenancy, administration, ui |
| `BOXYHQ-TEAM-015` | Invitation Acceptance for Existing Users | `implemented` | tenancy, workflow, authorization |
| `BOXYHQ-TEAM-016` | Member Removal | `implemented` | tenancy, administration, authorization |
| `BOXYHQ-TEAM-017` | Team Leave with Last-Owner Guard | `implemented` | tenancy, authorization, workflow |
| `BOXYHQ-TEAM-018` | Protected Member Role Changes | `implemented` | authorization, administration, tenancy |
| `BOXYHQ-SSO-001` | Team-Scoped SAML and OIDC Connection Lifecycle | `implemented` | authentication, integration, administration |
| `BOXYHQ-SSO-002` | SAML Metadata Connection Configuration | `implemented` | authentication, integration, configuration |
| `BOXYHQ-SSO-003` | OIDC Discovery or Manual Metadata Configuration | `implemented` | authentication, integration, configuration |
| `BOXYHQ-SSO-004` | SSO Connection Tenant Isolation Guard | `implemented` | authentication, authorization, tenancy |
| `BOXYHQ-SSO-005` | SSO Discovery by User Email or Team Slug | `implemented` | authentication, tenancy, workflow |
| `BOXYHQ-SSO-006` | Multiple Identity Provider Selection | `implemented` | authentication, ui, workflow |
| `BOXYHQ-SSO-007` | Service-Provider-Initiated Enterprise Sign-In | `implemented` | authentication, integration, workflow |
| `BOXYHQ-SSO-008` | Identity-Provider-Initiated Sign-In | `implemented` | authentication, integration, workflow |
| `BOXYHQ-SSO-009` | Jackson OAuth and OIDC Broker Endpoints | `implemented` | authentication, api, integration |
| `BOXYHQ-SSO-010` | Service Provider Configuration and Certificate Publication | `implemented` | authentication, configuration, integration |
| `BOXYHQ-DSYNC-001` | Team Directory Connection Lifecycle | `implemented` | integration, administration, tenancy |
| `BOXYHQ-DSYNC-002` | Directory Provider Catalog | `implemented` | integration, configuration |
| `BOXYHQ-DSYNC-003` | SCIM 2.0 Users and Groups Protocol Endpoint | `implemented` | integration, api, tenancy |
| `BOXYHQ-DSYNC-004` | SCIM Pagination and Filter Forwarding | `implemented` | integration, search, api |
| `BOXYHQ-DSYNC-005` | Directory User Provisioning | `implemented` | integration, tenancy, data |
| `BOXYHQ-DSYNC-006` | Directory User Update, Deactivation, and Reactivation | `implemented` | integration, tenancy, workflow |
| `BOXYHQ-DSYNC-007` | Directory User Deprovisioning and Orphan Cleanup | `implemented` | integration, tenancy, data |
| `BOXYHQ-DSYNC-008` | Directory Group Event Seam | `partial` | integration, data |
| `BOXYHQ-DSYNC-009` | Signed Hosted Directory Event Webhook | `implemented` | integration, security, workflow |
| `BOXYHQ-AUDIT-001` | Retraced Audit Event Reporting | `implemented` | audit, integration, security |
| `BOXYHQ-AUDIT-002` | Team-Scoped Embedded Audit Viewer | `implemented` | audit, ui, authorization |
| `BOXYHQ-AUDIT-003` | Optional External Audit Storage Boundary | `substrate/seam` | audit, configuration, integration |
| `BOXYHQ-WEBHOOK-001` | Team Webhook Endpoint Lifecycle | `implemented` | integration, administration, tenancy |
| `BOXYHQ-WEBHOOK-002` | Selectable Webhook Event Types | `implemented` | integration, configuration, ui |
| `BOXYHQ-WEBHOOK-003` | Member and Invitation Outbound Events | `implemented` | integration, workflow, automation |
| `BOXYHQ-WEBHOOK-004` | Team-to-Svix Application Mapping | `implemented` | integration, tenancy, reusable-internal |
| `BOXYHQ-WEBHOOK-005` | Webhook Management Forms and Feedback | `implemented` | integration, ui, interaction |
| `BOXYHQ-BILLING-001` | Lazy Stripe Customer Provisioning | `implemented` | billing, integration, tenancy |
| `BOXYHQ-BILLING-002` | Stripe Product and Price Synchronization Command | `implemented` | billing, operations, data |
| `BOXYHQ-BILLING-003` | Team Pricing and Subscription Screen | `implemented` | billing, ui, tenancy |
| `BOXYHQ-BILLING-004` | Stripe Checkout Session Creation | `implemented` | billing, integration, workflow |
| `BOXYHQ-BILLING-005` | Stripe Billing Portal Handoff | `implemented` | billing, integration, workflow |
| `BOXYHQ-BILLING-006` | Signed Subscription Webhook Persistence | `implemented` | billing, integration, data |
| `BOXYHQ-ACCOUNT-001` | Profile Name and Conditional Email Update | `implemented` | product, ui, security |
| `BOXYHQ-ACCOUNT-002` | Avatar Upload as Validated Data URL | `implemented` | product, ui, data |
| `BOXYHQ-ACCOUNT-003` | Account Profile Settings Surface | `implemented` | product, ui, navigation |
| `BOXYHQ-UI-001` | Configurable Public Landing Experience | `implemented` | ui, product, configuration |
| `BOXYHQ-UI-002` | Responsive Application Shell | `implemented` | ui, navigation, interaction |
| `BOXYHQ-UI-003` | Contextual Product, Team, and User Navigation | `implemented` | ui, navigation, authorization |
| `BOXYHQ-UI-004` | Reusable Card, Modal, Table, and Form Primitives | `implemented` | ui, reusable-internal, interaction |
| `BOXYHQ-UI-005` | Loading, Empty, Error, and Toast Feedback | `implemented` | ui, interaction, reusable-internal |
| `BOXYHQ-UI-006` | Confirmation-Based Destructive Actions | `implemented` | ui, interaction, security |
| `BOXYHQ-UI-007` | System, Light, and Dark Theme Selection | `implemented` | ui, personalization, configuration |
| `BOXYHQ-UI-008` | English Translation Infrastructure and Key Validation | `partial` | localization, ui, developer-experience |
| `BOXYHQ-UI-009` | Keyboard and Semantic Accessibility Baseline | `partial` | accessibility, ui, interaction |
| `BOXYHQ-UI-010` | Custom Not-Found and Server-Error Pages | `implemented` | ui, operations, product |
| `BOXYHQ-DATA-001` | PostgreSQL and Prisma Persistence | `implemented` | data, operations, reusable-internal |
| `BOXYHQ-DATA-002` | Relational Constraints, Indexes, and Cascades | `implemented` | data, security, operations |
| `BOXYHQ-DATA-003` | Embedded Jackson Store, Index, and TTL Tables | `implemented` | data, integration, reusable-internal |
| `BOXYHQ-DATA-004` | SWR Resource Hooks | `implemented` | data, ui, reusable-internal |
| `BOXYHQ-DATA-005` | Browser Theme State Persistence | `implemented` | data, personalization, ui |
| `BOXYHQ-DATA-006` | Prisma Development Seed and E2E Database Fixtures | `implemented` | data, testing, developer-experience |
| `BOXYHQ-SEC-001` | bcrypt Password Hashing | `implemented` | security, authentication |
| `BOXYHQ-SEC-002` | Cryptographically Random Expiring Tokens | `implemented` | security, authentication, data |
| `BOXYHQ-SEC-003` | Hashed Team API-Key Lifecycle | `partial` | security, api, administration |
| `BOXYHQ-SEC-004` | NextAuth CSRF Tokens on Credential and Magic-Link Forms | `implemented` | security, authentication, ui |
| `BOXYHQ-SEC-005` | HTTP Security Headers and Content Security Policy | `implemented` | security, operations, configuration |
| `BOXYHQ-SEC-006` | Central Zod Request Validation | `implemented` | security, api, reusable-internal |
| `BOXYHQ-SEC-007` | Stripe Raw-Body Signature Verification | `implemented` | security, integration, billing |
| `BOXYHQ-SEC-008` | Environment-Based Secret Injection | `implemented` | security, configuration, operations |
| `BOXYHQ-OBS-001` | Optional OpenTelemetry Counter Metrics | `implemented` | operations, observability, integration |
| `BOXYHQ-OBS-002` | Sentry Client and Server Instrumentation | `implemented` | operations, observability, integration |
| `BOXYHQ-OBS-003` | Optional Mixpanel Page Analytics | `implemented` | analytics, operations, integration |
| `BOXYHQ-OBS-004` | Database-Aware Health Endpoint | `implemented` | operations, api, data |
| `BOXYHQ-NOTIFY-001` | Optional SMTP Email Transport | `implemented` | notification, integration, configuration |
| `BOXYHQ-NOTIFY-002` | Authentication Email Templates and Delivery | `implemented` | notification, authentication, ui |
| `BOXYHQ-NOTIFY-003` | Team Invitation and Welcome Emails | `implemented` | notification, tenancy, workflow |
| `BOXYHQ-NOTIFY-004` | Account Lockout Email | `implemented` | notification, security, authentication |
| `BOXYHQ-NOTIFY-005` | Optional Slack Signup Alerts | `implemented` | notification, integration, operations |
| `BOXYHQ-DEV-001` | npm Development, Build, and Quality Commands | `implemented` | developer-experience, testing, operations |
| `BOXYHQ-DEV-002` | Strict TypeScript, ESLint, and Prettier Toolchain | `implemented` | developer-experience, testing, reusable-internal |
| `BOXYHQ-DEV-003` | Localization Consistency Checker | `implemented` | developer-experience, localization, testing |
| `BOXYHQ-DEV-004` | Jest Unit Test Harness | `implemented` | testing, developer-experience |
| `BOXYHQ-DEV-005` | Playwright End-to-End Harness | `implemented` | testing, developer-experience, ui |
| `BOXYHQ-DEV-006` | Authentication and Team Administration E2E Coverage | `implemented` | testing, authentication, tenancy |
| `BOXYHQ-DEV-007` | GitHub CI Quality and Browser Pipeline | `implemented` | testing, operations, developer-experience |
| `BOXYHQ-OPS-001` | Local PostgreSQL Docker Compose | `implemented` | deployment, operations, data |
| `BOXYHQ-OPS-002` | Heroku Deployment Manifest | `implemented` | deployment, operations, configuration |
| `BOXYHQ-OPS-003` | DigitalOcean App Platform Template | `implemented` | deployment, operations, configuration |
| `BOXYHQ-OPS-004` | Build, Start, and Database Schema Lifecycle | `implemented` | deployment, operations, data |
| `BOXYHQ-OPS-005` | Dry-Run Team Deletion Maintenance Command | `implemented` | operations, tenancy, security |
| `BOXYHQ-OPS-006` | Stripe Catalog Maintenance Command | `implemented` | operations, billing, integration |
