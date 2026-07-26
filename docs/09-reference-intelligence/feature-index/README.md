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


## SRC-KIRANISM

- **Repository:** `Kiranism/next-shadcn-dashboard-starter`
- **Historical registration alias:** `SRC-KIRANISM-SHADCN` (unused before this discovery)
- **Pinned revision:** `06e83c0b0e937f98184b343b92756ae0cadd7c92`
- **Discovery state:** Complete
- **Lifecycle / understanding:** `KNOWLEDGE_READY`; `0 / 208 (0.0)`
- **Repository evidence:** [profile](../repositories/kiranism/REPOSITORY-PROFILE.md), [catalog](../repositories/kiranism/FEATURE-CATALOG.md), [machine catalog](../repositories/kiranism/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/kiranism/EVIDENCE-MANIFEST.md), [license review](../repositories/kiranism/LICENSE-REVIEW.md), [coverage decision](../repositories/kiranism/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/kiranism/UNKNOWNS.md)
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are evidence-backed at the pinned revision. `partial`, `substrate/seam`, and `configuration-only`
records are intentionally not represented as production-complete behavior.

| Feature ID | Canonical name | Classification | Implementation state |
|---|---|---|---|
| `KIRANISM-PLATFORM-001` | Single-Package Next.js Dashboard Application | product, operations, developer-experience | `implemented` |
| `KIRANISM-PLATFORM-002` | Next.js App Router and Route-Segment Composition | architecture, ui, developer-experience | `implemented` |
| `KIRANISM-PLATFORM-003` | Server and Client Component Partition | architecture, data, reusable-internal | `implemented` |
| `KIRANISM-PLATFORM-004` | Feature-Oriented Source Organization | developer-experience, reusable-internal | `implemented` |
| `KIRANISM-PLATFORM-005` | Root Provider Composition | architecture, ui, data, authentication | `implemented` |
| `KIRANISM-PLATFORM-006` | Configurable Remote Image Allowlist | configuration, security, ui | `configuration-only` |
| `KIRANISM-PLATFORM-007` | Feature Cleanup Utility | developer-experience, automation, reusable-internal | `implemented` |
| `KIRANISM-PLATFORM-008` | Radix-to-Base UI Migration Record | developer-experience, migration, reusable-internal | `configuration-only` |
| `KIRANISM-PLATFORM-009` | Bundled Agent Skill Distribution | developer-experience, automation, reusable-internal | `implemented` |
| `KIRANISM-PLATFORM-010` | English-Only Runtime Baseline | localization, configuration, ui | `implemented` |
| `KIRANISM-SHELL-001` | Protected Dashboard Shell Composition | ui, navigation, authentication | `implemented` |
| `KIRANISM-SHELL-002` | Cookie-Backed Sidebar Open State | ui, personalization, data | `implemented` |
| `KIRANISM-SHELL-003` | Expanded, Collapsed, and Off-Canvas Sidebar | ui, interaction, responsive | `implemented` |
| `KIRANISM-SHELL-004` | Mobile Sheet Navigation | ui, navigation, responsive, accessibility | `implemented` |
| `KIRANISM-SHELL-005` | Keyboard Sidebar Toggle | ui, interaction, accessibility | `implemented` |
| `KIRANISM-SHELL-006` | Sticky Dashboard Header | ui, layout, navigation | `implemented` |
| `KIRANISM-SHELL-007` | Responsive Page Container | ui, layout, reusable-internal | `implemented` |
| `KIRANISM-SHELL-008` | Contextual Information Sidebar | ui, interaction, responsive, reusable-internal | `implemented` |
| `KIRANISM-SHELL-009` | Page Information Content Registry | ui, configuration, developer-experience | `implemented` |
| `KIRANISM-SHELL-010` | Route Progress Indicator | ui, feedback, navigation | `implemented` |
| `KIRANISM-SHELL-011` | Overscroll and Horizontal Overflow Control | ui, responsive, layout | `implemented` |
| `KIRANISM-SHELL-012` | Dashboard Search Control Placement | ui, responsive, navigation | `implemented` |
| `KIRANISM-NAV-001` | Grouped Navigation Configuration | navigation, configuration, reusable-internal | `implemented` |
| `KIRANISM-NAV-002` | Nested Navigation Sections | navigation, ui, interaction | `implemented` |
| `KIRANISM-NAV-003` | Exact-Path Active Navigation State | navigation, ui | `implemented` |
| `KIRANISM-NAV-004` | Client-Side Organization Navigation Filter | navigation, authorization, tenancy | `implemented` |
| `KIRANISM-NAV-005` | Client-Side Role and Permission Navigation Filter | navigation, authorization, security | `implemented` |
| `KIRANISM-NAV-006` | Plan and Feature Navigation Seam | navigation, authorization, configuration | `partial` |
| `KIRANISM-NAV-007` | Shared Sidebar and Command Navigation Source | navigation, reusable-internal | `implemented` |
| `KIRANISM-NAV-008` | Command Palette Navigation | navigation, search, interaction, accessibility | `implemented` |
| `KIRANISM-NAV-009` | Navigation Keyboard Shortcuts | navigation, interaction, accessibility | `implemented` |
| `KIRANISM-NAV-010` | Path-Derived Breadcrumb Fallback | navigation, ui, responsive | `implemented` |
| `KIRANISM-THEME-001` | Light, Dark, and System Color Modes | ui, personalization, theme | `implemented` |
| `KIRANISM-THEME-002` | Ten Named Design Palettes | ui, personalization, theme, reusable-internal | `implemented` |
| `KIRANISM-THEME-003` | Per-Palette Light and Dark Tokens | ui, theme, reusable-internal | `implemented` |
| `KIRANISM-THEME-004` | Server-Validated Active Theme Hydration | ui, theme, data, security | `implemented` |
| `KIRANISM-THEME-005` | Persistent Palette Selection | ui, theme, personalization, data | `implemented` |
| `KIRANISM-THEME-006` | Palette Selector Control | ui, theme, accessibility | `implemented` |
| `KIRANISM-THEME-007` | Animated Theme Mode Toggle | ui, theme, interaction | `implemented` |
| `KIRANISM-THEME-008` | Command Palette Theme Actions | ui, theme, navigation, interaction | `implemented` |
| `KIRANISM-THEME-009` | Multi-Font Theme Registry | ui, theme, assets | `implemented` |
| `KIRANISM-THEME-010` | Global Scrollbar and Base-UI Motion Styling | ui, theme, interaction | `implemented` |
| `KIRANISM-UI-001` | Disclosure Primitive Suite | ui, interaction, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-002` | Dialog and Confirmation Primitive Suite | ui, interaction, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-003` | Menu and Contextual Overlay Primitive Suite | ui, interaction, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-004` | Command and Navigation Primitive Suite | ui, navigation, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-005` | Button and Selection Primitive Suite | ui, forms, interaction, reusable-internal | `implemented` |
| `KIRANISM-UI-006` | Text and Choice Input Primitive Suite | ui, forms, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-007` | Card, Frame, and Alert Display Suite | ui, feedback, reusable-internal | `implemented` |
| `KIRANISM-UI-008` | Avatar and User Identity Presentation | ui, authentication, reusable-internal | `implemented` |
| `KIRANISM-UI-009` | Tabs and Calendar Primitive Suite | ui, forms, interaction, reusable-internal | `implemented` |
| `KIRANISM-UI-010` | Scrollable and Resizable Layout Primitives | ui, layout, responsive, reusable-internal | `implemented` |
| `KIRANISM-UI-011` | Loading and Progress Feedback Primitives | ui, feedback, reusable-internal | `implemented` |
| `KIRANISM-UI-012` | File Preview Composite | ui, forms, interaction, reusable-internal | `implemented` |
| `KIRANISM-UI-013` | Chart Primitive Suite | ui, analytics, reusable-internal | `implemented` |
| `KIRANISM-UI-014` | Specialized Kanban and Notification Primitives | ui, interaction, notification, reusable-internal | `implemented` |
| `KIRANISM-TABLE-001` | Reusable TanStack Data Table | ui, data, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-002` | URL-Synchronized Table State | data, search, navigation, reusable-internal | `implemented` |
| `KIRANISM-TABLE-003` | Manual Server-Mode Table Control | data, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-004` | Debounced Text and Throttled Range Filters | search, interaction, reusable-internal | `implemented` |
| `KIRANISM-TABLE-005` | Validated Multi-Column Sort Parser | data, security, reusable-internal | `implemented` |
| `KIRANISM-TABLE-006` | Sortable Column Header | ui, search, interaction, reusable-internal | `implemented` |
| `KIRANISM-TABLE-007` | Faceted Select and Multi-Select Filter | ui, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-008` | Date and Date-Range Filter | ui, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-009` | Numeric Slider Filter | ui, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-010` | Configurable Table Toolbar | ui, search, reusable-internal | `implemented` |
| `KIRANISM-TABLE-011` | Column Visibility Control | ui, personalization, reusable-internal | `implemented` |
| `KIRANISM-TABLE-012` | Pagination and Selection Summary | ui, data, interaction, reusable-internal | `implemented` |
| `KIRANISM-TABLE-013` | Sticky Header, Horizontal Scroll, and Empty State | ui, responsive, feedback | `implemented` |
| `KIRANISM-TABLE-014` | Data Table Skeleton and Filter Reset | ui, feedback, search, reusable-internal | `implemented` |
| `KIRANISM-FORM-001` | Typed TanStack Form Composition | forms, data, reusable-internal | `implemented` |
| `KIRANISM-FORM-002` | Typed Field Path Accessor | forms, developer-experience, reusable-internal | `implemented` |
| `KIRANISM-FORM-003` | Text and Numeric Field Wrapper | forms, ui, accessibility, reusable-internal | `implemented` |
| `KIRANISM-FORM-004` | Textarea Field Wrapper | forms, ui, accessibility, reusable-internal | `implemented` |
| `KIRANISM-FORM-005` | Select Field Wrapper | forms, ui, accessibility, reusable-internal | `implemented` |
| `KIRANISM-FORM-006` | Boolean Field Wrappers | forms, ui, accessibility, reusable-internal | `implemented` |
| `KIRANISM-FORM-007` | Radio and Slider Field Wrappers | forms, ui, accessibility, reusable-internal | `implemented` |
| `KIRANISM-FORM-008` | File Upload Field Wrapper | forms, ui, data, reusable-internal | `partial` |
| `KIRANISM-FORM-009` | Comprehensive Input Showcase | forms, ui, developer-experience | `implemented` |
| `KIRANISM-FORM-010` | Zod Schema and Field-Level Validation | forms, data, security, reusable-internal | `implemented` |
| `KIRANISM-FORM-011` | Async, Debounced, and Linked Validation Patterns | forms, interaction, developer-experience | `implemented` |
| `KIRANISM-FORM-012` | Nested Object and Dynamic Array Forms | forms, data, developer-experience | `implemented` |
| `KIRANISM-FORM-013` | Multi-Step Product Wizard | forms, workflow, interaction | `implemented` |
| `KIRANISM-FORM-014` | Sheet and Dialog Form Patterns | forms, ui, interaction | `implemented` |
| `KIRANISM-FORM-015` | Accessible Error Focus and Submission State | forms, accessibility, feedback, reusable-internal | `implemented` |
| `KIRANISM-DASH-001` | Parallel Analytics Overview | product, analytics, ui | `implemented` |
| `KIRANISM-DASH-002` | Overview KPI Cards | product, analytics, ui | `implemented` |
| `KIRANISM-DASH-003` | Area Trend Chart | analytics, ui, reusable-internal | `implemented` |
| `KIRANISM-DASH-004` | Bar Trend Chart | analytics, ui, reusable-internal | `implemented` |
| `KIRANISM-DASH-005` | Pie Distribution Chart | analytics, ui, reusable-internal | `implemented` |
| `KIRANISM-DASH-006` | Recent Sales List | analytics, ui | `implemented` |
| `KIRANISM-DASH-007` | Per-Region Analytics Loading States | analytics, ui, feedback | `implemented` |
| `KIRANISM-DASH-008` | Per-Region Analytics Error States | analytics, ui, feedback, observability | `implemented` |
| `KIRANISM-DASH-009` | External Pokémon Query Demonstration | data, integration, ui, developer-experience | `implemented` |
| `KIRANISM-DASH-010` | Icon Registry Showcase | ui, assets, developer-experience | `implemented` |
| `KIRANISM-PRODUCT-001` | Product Listing Screen | product, ui, data | `implemented` |
| `KIRANISM-PRODUCT-002` | Product Search, Category Filter, Sort, and Pagination | product, search, data | `implemented` |
| `KIRANISM-PRODUCT-003` | Product Create and Edit Form | product, forms, workflow | `partial` |
| `KIRANISM-PRODUCT-004` | Product Detail Prefetch and Missing-Record Recovery | product, data, feedback | `implemented` |
| `KIRANISM-PRODUCT-005` | In-Memory Product CRUD | product, data, developer-experience | `partial` |
| `KIRANISM-PRODUCT-006` | Product Query Keys and Mutation Invalidation | product, data, reusable-internal | `implemented` |
| `KIRANISM-PRODUCT-007` | Product Delete Confirmation and Toast Feedback | product, interaction, feedback | `implemented` |
| `KIRANISM-PRODUCT-008` | Product Image Selection Without Persistence | product, forms, data | `partial` |
| `KIRANISM-USER-001` | User Listing Screen | product, ui, data | `implemented` |
| `KIRANISM-USER-002` | User Search, Role Filter, Sort, and Pagination | product, search, data | `implemented` |
| `KIRANISM-USER-003` | User Create and Edit Sheet | product, forms, workflow, ui | `implemented` |
| `KIRANISM-USER-004` | In-Memory User CRUD | product, data, developer-experience | `partial` |
| `KIRANISM-USER-005` | User Query Keys and Mutation Invalidation | product, data, reusable-internal | `implemented` |
| `KIRANISM-USER-006` | User Delete Confirmation and Toast Feedback | product, interaction, feedback | `implemented` |
| `KIRANISM-USER-007` | Demo User Role and Status Presentation | product, ui, data | `implemented` |
| `KIRANISM-KANBAN-001` | Responsive Kanban Board | product, ui, workflow, responsive | `implemented` |
| `KIRANISM-KANBAN-002` | Column Reordering | product, workflow, interaction | `implemented` |
| `KIRANISM-KANBAN-003` | Task Reordering and Cross-Column Movement | product, workflow, interaction | `implemented` |
| `KIRANISM-KANBAN-004` | Mouse, Touch, and Keyboard Drag Sensors | product, interaction, accessibility | `implemented` |
| `KIRANISM-KANBAN-005` | Accessible Drag Announcements | product, accessibility, interaction | `implemented` |
| `KIRANISM-KANBAN-006` | Board-Bounded Drag Motion | product, interaction, reusable-internal | `implemented` |
| `KIRANISM-KANBAN-007` | New Backlog Task Dialog | product, forms, workflow | `partial` |
| `KIRANISM-KANBAN-008` | Process-Local Kanban Store | product, data, state-management | `partial` |
| `KIRANISM-CHAT-001` | Responsive Messenger Layout | product, ui, responsive | `implemented` |
| `KIRANISM-CHAT-002` | Conversation Search and Selection | product, search, interaction | `implemented` |
| `KIRANISM-CHAT-003` | Message Thread Presentation | product, ui, accessibility | `implemented` |
| `KIRANISM-CHAT-004` | Keyboard Message Composer | product, forms, interaction, accessibility | `implemented` |
| `KIRANISM-CHAT-005` | Local Attachment Metadata | product, data, forms | `partial` |
| `KIRANISM-CHAT-006` | Quick Reply Chips | product, interaction, ui | `implemented` |
| `KIRANISM-CHAT-007` | Simulated Contact Auto-Replies | product, workflow, automation | `partial` |
| `KIRANISM-CHAT-008` | Unread Conversation Counters | product, notification, state-management | `implemented` |
| `KIRANISM-CHAT-009` | Accessible Thread Motion and Live Updates | product, accessibility, interaction | `implemented` |
| `KIRANISM-NOTIFY-001` | Header Notification Center | product, notification, ui | `implemented` |
| `KIRANISM-NOTIFY-002` | Tabbed Notification Screen | product, notification, ui | `implemented` |
| `KIRANISM-NOTIFY-003` | Notification Read State | product, notification, state-management | `implemented` |
| `KIRANISM-NOTIFY-004` | Notification Action Routing | product, notification, navigation | `implemented` |
| `KIRANISM-NOTIFY-005` | Notification Empty States | product, notification, feedback | `implemented` |
| `KIRANISM-NOTIFY-006` | Reusable Notification Action Cards | notification, ui, interaction, reusable-internal | `implemented` |
| `KIRANISM-NOTIFY-007` | Process-Local Notification Store | notification, data, state-management | `partial` |
| `KIRANISM-AUTH-001` | Clerk Application Provider | authentication, integration, ui | `implemented` |
| `KIRANISM-AUTH-002` | Clerk Sign-In Screen | authentication, ui | `implemented` |
| `KIRANISM-AUTH-003` | Clerk Sign-Up Screen | authentication, ui, integration | `implemented` |
| `KIRANISM-AUTH-004` | Auth Entry Redirect | authentication, navigation | `implemented` |
| `KIRANISM-AUTH-005` | Session-Aware Root Redirect | authentication, navigation | `implemented` |
| `KIRANISM-AUTH-006` | Dashboard Route Protection | authentication, security, authorization | `implemented` |
| `KIRANISM-AUTH-007` | Dashboard Redirect Guard | authentication, navigation | `implemented` |
| `KIRANISM-AUTH-008` | Clerk User Profile Surface | authentication, account, ui | `implemented` |
| `KIRANISM-AUTH-009` | Clerk Sign-Out Action | authentication, account, ui | `implemented` |
| `KIRANISM-AUTH-010` | Organization Listing and Creation Surface | tenancy, account, administration, ui | `implemented` |
| `KIRANISM-AUTH-011` | Active Organization Switcher | tenancy, account, navigation, ui | `implemented` |
| `KIRANISM-AUTH-012` | Organization Team Profile Surface | tenancy, administration, account, ui | `implemented` |
| `KIRANISM-AUTH-013` | Organization Billing and Pro-Plan Surfaces | tenancy, billing, authorization, ui | `implemented` |
| `KIRANISM-DATA-001` | SSR/Browser Query Client Lifecycle | data, cache, reusable-internal | `implemented` |
| `KIRANISM-DATA-002` | Pending Query Dehydration | data, cache, reusable-internal | `implemented` |
| `KIRANISM-DATA-003` | Global Query Provider and Devtools | data, developer-experience, ui | `implemented` |
| `KIRANISM-DATA-004` | Typed URL Search Parameter Cache | data, navigation, search, reusable-internal | `implemented` |
| `KIRANISM-DATA-005` | Process-Local Faker Data Seeds | data, developer-experience, testing | `partial` |
| `KIRANISM-DATA-006` | Zustand Client Stores | data, state-management, reusable-internal | `partial` |
| `KIRANISM-DATA-007` | Service-Layer Backend Replacement Seam | data, integration, reusable-internal | `substrate/seam` |
| `KIRANISM-DATA-008` | Generic JSON API Client Seam | data, integration, reusable-internal | `substrate/seam` |
| `KIRANISM-DATA-009` | No Durable Application Persistence | data, operations, security | `partial` |
| `KIRANISM-API-001` | Product Collection API | api, data, integration | `partial` |
| `KIRANISM-API-002` | Product Item API | api, data, integration | `partial` |
| `KIRANISM-API-003` | User Collection API | api, data, integration | `partial` |
| `KIRANISM-API-004` | User Item API | api, data, integration | `partial` |
| `KIRANISM-API-005` | Direct Product/User Service Consumption | api, data, architecture | `implemented` |
| `KIRANISM-API-006` | PokeAPI Integration | api, integration, data | `implemented` |
| `KIRANISM-API-007` | GitHub Repository Star Integration | api, integration, ui | `partial` |
| `KIRANISM-API-008` | Sentry Monitoring Tunnel | api, observability, integration | `configuration-only` |
| `KIRANISM-SEC-001` | Dashboard-Only Middleware Protection Boundary | security, authentication, authorization | `partial` |
| `KIRANISM-SEC-002` | Unprotected Mutable Demo APIs | security, api, authorization | `partial` |
| `KIRANISM-SEC-003` | Unvalidated API JSON Bodies | security, api, data | `partial` |
| `KIRANISM-SEC-004` | Client Navigation Visibility Is Not Authorization | security, authorization, navigation | `implemented` |
| `KIRANISM-SEC-005` | Organization-Scoped Billing UI Guard | security, tenancy, billing | `implemented` |
| `KIRANISM-SEC-006` | Theme Cookie Security Attributes | security, data, personalization | `implemented` |
| `KIRANISM-SEC-007` | Sentry Full Trace and Default PII Capture | security, privacy, observability | `configuration-only` |
| `KIRANISM-SEC-008` | Production Console Removal and Image Host Restriction | security, operations, configuration | `configuration-only` |
| `KIRANISM-QUALITY-001` | Global Error Capture | quality, observability, feedback | `implemented` |
| `KIRANISM-QUALITY-002` | Custom Not-Found Recovery | quality, ui, feedback, navigation | `implemented` |
| `KIRANISM-QUALITY-003` | Mutation Failure Toasts | quality, feedback, product | `implemented` |
| `KIRANISM-QUALITY-004` | Code-Level Accessibility Baseline | quality, accessibility, ui | `implemented` |
| `KIRANISM-QUALITY-005` | Reduced-Motion Chat Behavior | quality, accessibility, interaction | `implemented` |
| `KIRANISM-QUALITY-006` | Accessibility-Aware Lint Configuration | quality, accessibility, developer-experience | `configuration-only` |
| `KIRANISM-QUALITY-007` | No Repository Test Harness | quality, testing, developer-experience | `partial` |
| `KIRANISM-DEV-001` | Strict TypeScript Configuration | developer-experience, quality | `configuration-only` |
| `KIRANISM-DEV-002` | Oxlint Static Analysis | developer-experience, quality, accessibility | `configuration-only` |
| `KIRANISM-DEV-003` | Oxfmt and Tailwind Class Sorting | developer-experience, quality, ui | `configuration-only` |
| `KIRANISM-DEV-004` | Staged-File Formatting Hook | developer-experience, quality, automation | `configuration-only` |
| `KIRANISM-DEV-005` | Pre-Push Build Hook | developer-experience, quality, automation | `configuration-only` |
| `KIRANISM-DEV-006` | Bun Lockfile and Frozen Container Installs | developer-experience, build, operations | `configuration-only` |
| `KIRANISM-DEV-007` | Post-Install Cleanup Guidance | developer-experience, automation | `implemented` |
| `KIRANISM-DEV-008` | Shadcn Base Nova Configuration | developer-experience, ui, reusable-internal | `configuration-only` |
| `KIRANISM-DEV-009` | Repository Dashboard Agent Skill | developer-experience, automation, reusable-internal | `implemented` |
| `KIRANISM-DEV-010` | TanStack Form and Query Agent Skills | developer-experience, automation, reusable-internal | `implemented` |
| `KIRANISM-DEV-011` | Next, Shadcn, and Design Agent Skills | developer-experience, automation, reusable-internal | `implemented` |
| `KIRANISM-OPS-001` | Development, Build, and Start Commands | operations, build, developer-experience | `configuration-only` |
| `KIRANISM-OPS-002` | Node 22 Runtime Baseline | operations, build | `configuration-only` |
| `KIRANISM-OPS-003` | Non-Root Node Standalone Container | operations, deployment, security | `implemented` |
| `KIRANISM-OPS-004` | Non-Root Bun Standalone Container | operations, deployment, security | `implemented` |
| `KIRANISM-OPS-005` | Conditional Standalone Build Output | operations, deployment, configuration | `configuration-only` |
| `KIRANISM-OPS-006` | Browser, Node, and Edge Sentry Instrumentation | operations, observability, integration | `configuration-only` |
| `KIRANISM-OPS-007` | Sentry Build Integration and Source Maps | operations, observability, build | `configuration-only` |
| `KIRANISM-OPS-008` | Environment Template | operations, configuration, security | `configuration-only` |
| `KIRANISM-ASSET-001` | Shared Tabler Icon Registry | assets, ui, reusable-internal | `implemented` |
| `KIRANISM-ASSET-002` | Dashboard Screenshot and Vendor Marks | assets, ui | `implemented` |
| `KIRANISM-ASSET-003` | Public Robots Policy | assets, operations, security | `configuration-only` |
| `KIRANISM-ASSET-004` | Public LLM Repository Guide | assets, developer-experience, documentation | `configuration-only` |
| `KIRANISM-UI-015` | Contextual Information Button | ui, interaction, accessibility, reusable-internal | `implemented` |
| `KIRANISM-UI-016` | Reusable React State, Timing, Media, and Ref Utilities | ui, interaction, responsive, reusable-internal | `implemented` |
| `KIRANISM-NAV-011` | Alternative Sidebar Composite Substrates | navigation, ui, reusable-internal | `substrate/seam` |
| `KIRANISM-AUTH-014` | Dormant Mock Authentication Form Substrate | authentication, ui, forms, developer-experience | `substrate/seam` |
| `KIRANISM-QUALITY-008` | Form Card Loading Skeleton Substrate | quality, ui, feedback, reusable-internal | `substrate/seam` |
| `KIRANISM-ASSET-005` | GitHub CTA and Cached Star Button | assets, ui, integration, reusable-internal | `implemented` |

## SRC-HRNEXT

- **Repository:** `frappe/hrms`
- **Pinned revision:** `8be64b735e347fdaaf4db3b045605e9a7a9ba856`
- **Discovery state:** Complete
- **Repository evidence:** [profile](../repositories/hr-next/REPOSITORY-PROFILE.md), [catalog](../repositories/hr-next/FEATURE-CATALOG.md), [machine catalog](../repositories/hr-next/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/hr-next/EVIDENCE-MANIFEST.md), [license review](../repositories/hr-next/LICENSE-REVIEW.md), [coverage decision](../repositories/hr-next/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/hr-next/UNKNOWNS.md)
- **Reference lifecycle:** `KNOWLEDGE_READY`; understanding coverage `0 / 360 (0.0)`; no Knowledge Objects.
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are `Verified` and current at the pinned revision. Partial, substrate/seam, and configuration-only records retain those boundaries.

| Feature ID | Canonical name | Classification | Status |
|---|---|---|---|
| `HRNEXT-PLATFORM-001` | Frappe v17 Application Package | architecture, product, operations | `implemented` |
| `HRNEXT-PLATFORM-002` | ERPNext Hard Runtime Dependency | architecture, integration, data | `implemented` |
| `HRNEXT-PLATFORM-003` | HR and Payroll Module Boundary | architecture, product, data | `implemented` |
| `HRNEXT-PLATFORM-004` | Frappe Desk Administrative Surface | ui, administration, navigation | `implemented` |
| `HRNEXT-PLATFORM-005` | Employee Self-Service PWA | product, ui, responsive, authentication | `implemented` |
| `HRNEXT-PLATFORM-006` | Shift Roster SPA | product, ui, workflow, administration | `implemented` |
| `HRNEXT-PLATFORM-007` | Public Jobs and Application Surface | product, ui, public, forms | `implemented` |
| `HRNEXT-PLATFORM-008` | Hook-Driven Extension Architecture | architecture, reusable-internal, integration | `implemented` |
| `HRNEXT-PLATFORM-009` | Install, Patch, and Migration Lifecycle | operations, data, developer-experience | `implemented` |
| `HRNEXT-PLATFORM-010` | Frappe UI Dual Dependency Boundary | ui, dependency, developer-experience | `partial` |
| `HRNEXT-AUTH-001` | Framework Session Cookie Detection | authentication, security, ui | `partial` |
| `HRNEXT-AUTH-002` | Email and Password Sign-In | authentication, ui, product | `implemented` |
| `HRNEXT-AUTH-003` | OTP Login Continuation | authentication, security, ui | `partial` |
| `HRNEXT-AUTH-004` | Configured Social OAuth Discovery | authentication, integration, security | `implemented` |
| `HRNEXT-AUTH-005` | Password Recovery Request | authentication, notification, ui | `implemented` |
| `HRNEXT-AUTH-006` | Authenticated Password Change | authentication, security, ui | `implemented` |
| `HRNEXT-AUTH-007` | Session Logout | authentication, security, ui | `implemented` |
| `HRNEXT-AUTH-008` | PWA Protected Route Guard | authentication, authorization, navigation | `implemented` |
| `HRNEXT-AUTH-009` | Active Employee Session Binding | authentication, authorization, data | `implemented` |
| `HRNEXT-AUTH-010` | Roster Authentication Redirect | authentication, navigation, ui | `implemented` |
| `HRNEXT-AUTH-011` | Framework-Owned Administrator Authentication Boundary | authentication, administration, security | `partial` |
| `HRNEXT-AUTHZ-001` | Role-Based DocType Permission Matrix | authorization, administration, data | `implemented` |
| `HRNEXT-AUTHZ-002` | Employee Self-Service Record Access | authorization, product, data | `implemented` |
| `HRNEXT-AUTHZ-003` | Department and Named Approver Resolution | authorization, workflow, organization | `implemented` |
| `HRNEXT-AUTHZ-004` | Permission-Aware Document Queries | authorization, api, security | `implemented` |
| `HRNEXT-AUTHZ-005` | Roster Mutation Guards | authorization, workflow, security | `implemented` |
| `HRNEXT-AUTHZ-006` | Workflow-State Action Guarding | authorization, workflow, api | `implemented` |
| `HRNEXT-AUTHZ-007` | Attachment Ownership and Permission Checks | authorization, security, data | `implemented` |
| `HRNEXT-AUTHZ-008` | Apps-Screen Permission Gate | authorization, navigation, administration | `implemented` |
| `HRNEXT-AUTHZ-009` | No Custom Team or Workspace Authorization Model | authorization, tenancy, architecture | `partial` |
| `HRNEXT-ORG-001` | ERPNext Company Scope | organization, data, integration | `implemented` |
| `HRNEXT-ORG-002` | ERPNext Department and Approver Scope | organization, authorization, integration | `implemented` |
| `HRNEXT-ORG-003` | Branch, Designation, Grade, and Employment Filters | organization, search, administration | `implemented` |
| `HRNEXT-ORG-004` | External Site-Level Isolation Boundary | tenancy, security, architecture | `partial` |
| `HRNEXT-API-001` | Current User and Employee Projections | api, authentication, data | `implemented` |
| `HRNEXT-API-002` | Permission-Aware Employee Directory | api, search, organization | `implemented` |
| `HRNEXT-API-003` | PWA HR Settings Projection | api, configuration, product | `implemented` |
| `HRNEXT-API-004` | Notification Resource API | api, notification, data | `implemented` |
| `HRNEXT-API-005` | Attendance Calendar and Request API | api, attendance, calendar | `implemented` |
| `HRNEXT-API-006` | Shift Request and Assignment API | api, attendance, workflow | `implemented` |
| `HRNEXT-API-007` | Leave Balance and Approval API | api, leave, workflow | `implemented` |
| `HRNEXT-API-008` | Expense Claim and Approval API | api, expenses, workflow | `implemented` |
| `HRNEXT-API-009` | Currency and Accounting Defaults API | api, integration, data | `implemented` |
| `HRNEXT-API-010` | Dynamic Form Metadata API | api, forms, authorization | `implemented` |
| `HRNEXT-API-011` | Attachment and PDF API | api, documents, security | `implemented` |
| `HRNEXT-API-012` | Roster Event Aggregation API | api, calendar, search | `implemented` |
| `HRNEXT-API-013` | Roster Schedule Mutation API | api, workflow, automation | `implemented` |
| `HRNEXT-API-014` | Guest Login Configuration API | api, authentication, public | `implemented` |
| `HRNEXT-API-015` | Framework Generic Resource Seam | api, data, dependency | `partial` |
| `HRNEXT-ESS-001` | Responsive Tabbed Mobile Shell | ui, navigation, responsive | `implemented` |
| `HRNEXT-ESS-002` | Employee Home and Quick Links | ui, product, navigation | `implemented` |
| `HRNEXT-ESS-003` | Attendance Dashboard and Check-In | attendance, ui, geolocation | `implemented` |
| `HRNEXT-ESS-004` | Attendance Request Self Service | attendance, forms, workflow | `implemented` |
| `HRNEXT-ESS-005` | Shift Request Self Service | attendance, forms, workflow | `implemented` |
| `HRNEXT-ESS-006` | Shift Assignment Self View | attendance, ui, calendar | `implemented` |
| `HRNEXT-ESS-007` | Leave Balance and Holiday Dashboard | leave, ui, analytics | `implemented` |
| `HRNEXT-ESS-008` | Leave Application Self Service | leave, forms, workflow | `implemented` |
| `HRNEXT-ESS-009` | Expense Claim Dashboard | expenses, ui, analytics | `implemented` |
| `HRNEXT-ESS-010` | Itemized Expense Claim Self Service | expenses, forms, workflow | `implemented` |
| `HRNEXT-ESS-011` | Employee Advance Self Service | expenses, forms, workflow | `implemented` |
| `HRNEXT-ESS-012` | Salary Slip Dashboard and Detail | payroll, ui, documents | `implemented` |
| `HRNEXT-ESS-013` | Team Approval Queues | workflow, authorization, ui | `implemented` |
| `HRNEXT-ESS-014` | Notification Center | notification, ui, navigation | `implemented` |
| `HRNEXT-ESS-015` | Employee Profile Surface | account, ui, data | `implemented` |
| `HRNEXT-ESS-016` | Application Settings and Password Navigation | settings, ui, account | `implemented` |
| `HRNEXT-ESS-017` | Reusable Dynamic Form Composition | forms, ui, reusable-internal | `implemented` |
| `HRNEXT-ESS-018` | Reusable List, Filter, and Request Composition | tables, search, ui, reusable-internal | `implemented` |
| `HRNEXT-ESS-019` | File Upload and Preview | documents, forms, ui | `implemented` |
| `HRNEXT-ESS-020` | Loading, Empty, Error, Confirmation, and Toast Feedback | ui, feedback, quality | `implemented` |
| `HRNEXT-ESS-021` | Installable PWA and Service Worker | pwa, operations, ui | `implemented` |
| `HRNEXT-ESS-022` | Narrow Responsive Employee Layout | responsive, ui, mobile | `implemented` |
| `HRNEXT-ESS-023` | Workflow Action Sheet | workflow, interaction, authorization | `implemented` |
| `HRNEXT-ROSTER-001` | Monthly Employee Shift Grid | calendar, ui, attendance | `implemented` |
| `HRNEXT-ROSTER-002` | Organization and Shift Filters | search, organization, ui | `implemented` |
| `HRNEXT-ROSTER-003` | Holiday, Leave, and Shift Event Overlay | calendar, leave, attendance | `implemented` |
| `HRNEXT-ROSTER-004` | Simple Shift Assignment Creation | attendance, forms, workflow | `implemented` |
| `HRNEXT-ROSTER-005` | Recurring Shift Schedule Assignment | attendance, automation, forms | `implemented` |
| `HRNEXT-ROSTER-006` | Shift Update and Deletion Scopes | attendance, workflow, interaction | `implemented` |
| `HRNEXT-ROSTER-007` | Shift Swap and Range Splitting | attendance, workflow, api | `implemented` |
| `HRNEXT-ROSTER-008` | Frappe Desk Deep Links | navigation, integration, administration | `implemented` |
| `HRNEXT-AUTOMATION-001` | Interview Reminder Scheduling | automation, notification, recruitment | `implemented` |
| `HRNEXT-AUTOMATION-002` | Daily Work Summary Scheduling | automation, notification, collaboration | `implemented` |
| `HRNEXT-AUTOMATION-003` | Automatic Attendance Processing | automation, attendance, jobs | `implemented` |
| `HRNEXT-AUTOMATION-004` | Automatic Shift Schedule Expansion | automation, attendance, jobs | `implemented` |
| `HRNEXT-AUTOMATION-005` | Birthday and Work Anniversary Reminders | automation, notification, employee | `implemented` |
| `HRNEXT-AUTOMATION-006` | Expired Job Opening Closure | automation, recruitment, workflow | `implemented` |
| `HRNEXT-AUTOMATION-007` | Leave Expiry, Encashment, and Earned Allocation | automation, leave, jobs | `implemented` |
| `HRNEXT-AUTOMATION-008` | Queued Payroll Slip Creation and Submission | automation, payroll, jobs | `implemented` |
| `HRNEXT-AUTOMATION-009` | Queued Salary Slip Email Delivery | automation, payroll, notification | `implemented` |
| `HRNEXT-AUTOMATION-010` | Document Event Integration Bus | automation, events, integration | `implemented` |
| `HRNEXT-AUTOMATION-011` | Usage and Activation Telemetry Hooks | automation, observability, analytics | `implemented` |
| `HRNEXT-NOTIFY-001` | Persistent PWA Notifications | notification, data, ui | `implemented` |
| `HRNEXT-NOTIFY-002` | Realtime Resource Invalidation | realtime, notification, data | `implemented` |
| `HRNEXT-NOTIFY-003` | Firebase Push Relay Integration | notification, integration, pwa | `configuration-only` |
| `HRNEXT-NOTIFY-004` | Fixture-Backed Email Notifications | notification, email, workflow | `implemented` |
| `HRNEXT-NOTIFY-005` | Employee and Workflow Reminder Emails | notification, email, automation | `implemented` |
| `HRNEXT-INTEGRATION-001` | ERPNext Employee Master Overrides | integration, employee, data | `implemented` |
| `HRNEXT-INTEGRATION-002` | ERPNext Accounting Integration | integration, accounting, expenses, payroll | `implemented` |
| `HRNEXT-INTEGRATION-003` | ERPNext Loan Repayment Integration | integration, payroll, loans | `implemented` |
| `HRNEXT-INTEGRATION-004` | ERPNext Timesheet and Project Integration | integration, payroll, projects | `implemented` |
| `HRNEXT-INTEGRATION-005` | Social Login Key Integration | integration, authentication, security | `implemented` |
| `HRNEXT-INTEGRATION-006` | Socket.IO Realtime Integration | integration, realtime, ui | `implemented` |
| `HRNEXT-INTEGRATION-007` | India Payroll Regional Overrides | integration, localization, payroll | `implemented` |
| `HRNEXT-INTEGRATION-008` | United Arab Emirates Regional Setup | integration, localization, payroll | `implemented` |
| `HRNEXT-INTEGRATION-009` | Frappe Cloud Subscription and Usage Seam | integration, billing, telemetry | `configuration-only` |
| `HRNEXT-DATA-001` | Metadata-Defined Document Persistence | data, forms, reusable-internal | `implemented` |
| `HRNEXT-DATA-002` | Submitted Document Lifecycle and Amendments | data, workflow, audit | `implemented` |
| `HRNEXT-DATA-003` | Embedded Child-Table Relationship Model | data, reusable-internal, forms | `implemented` |
| `HRNEXT-DATA-004` | MariaDB Development Persistence | data, operations, deployment | `configuration-only` |
| `HRNEXT-DATA-005` | Redis Development Cache and Queue Dependency | data, cache, queues | `configuration-only` |
| `HRNEXT-DATA-006` | Frappe File Attachment Persistence | data, documents, security | `implemented` |
| `HRNEXT-DATA-007` | Client Resource Cache | data, cache, ui | `implemented` |
| `HRNEXT-DATA-008` | Versioned Data Patch Inventory | data, migration, operations | `implemented` |
| `HRNEXT-SEARCH-001` | Configured Frappe Global Search Records | search, navigation, data | `configuration-only` |
| `HRNEXT-SEARCH-002` | Workspace Navigation and Linked Reports | search, navigation, ui | `implemented` |
| `HRNEXT-SEARCH-003` | Report Filter and Export Substrate | search, reports, data | `implemented` |
| `HRNEXT-SEARCH-004` | PWA List Filtering | search, ui, product | `implemented` |
| `HRNEXT-UI-001` | Nine Frappe Desk Workspaces | ui, navigation, administration | `implemented` |
| `HRNEXT-UI-002` | Dashboard Charts and Number Cards | ui, analytics, dashboard | `implemented` |
| `HRNEXT-UI-003` | Script and Report-Builder Tables | ui, reports, tables | `implemented` |
| `HRNEXT-UI-004` | Frappe UI Component Foundation | ui, reusable-internal, dependency | `implemented` |
| `HRNEXT-UI-005` | Ionic Mobile Component Foundation | ui, responsive, interaction | `implemented` |
| `HRNEXT-UI-006` | Tailwind Styling and Theme Tokens | ui, theme, developer-experience | `implemented` |
| `HRNEXT-UI-007` | Organization Chart and Team Updates Pages | ui, organization, collaboration | `implemented` |
| `HRNEXT-UI-008` | Guest Job Application Form | ui, forms, public | `implemented` |
| `HRNEXT-I18N-001` | Gettext Translation Catalog Set | localization, assets, developer-experience | `implemented` |
| `HRNEXT-I18N-002` | Runtime PWA Translation Loader | localization, ui, api | `implemented` |
| `HRNEXT-I18N-003` | Locale-Aware Date Formatting | localization, ui, data | `partial` |
| `HRNEXT-ACCESS-001` | Semantic and Keyboard-Operable Primitive Baseline | accessibility, ui, interaction | `partial` |
| `HRNEXT-ACCESS-002` | Responsive Mobile Navigation | accessibility, responsive, navigation | `implemented` |
| `HRNEXT-ACCESS-003` | No Automated Accessibility Verification | accessibility, testing, quality | `partial` |
| `HRNEXT-SEC-001` | CSRF Token Bootstrapping | security, authentication, api | `implemented` |
| `HRNEXT-SEC-002` | Explicit Guest Method Surface | security, api, public | `implemented` |
| `HRNEXT-SEC-003` | Type-Annotated API Enforcement | security, api, developer-experience | `configuration-only` |
| `HRNEXT-SEC-004` | Roster Filter Allowlisting | security, api, search | `implemented` |
| `HRNEXT-SEC-005` | Private Attachment Flag Preservation | security, documents, data | `implemented` |
| `HRNEXT-SEC-006` | Sensitive OAuth Secret Server-Side Check | security, authentication, integration | `implemented` |
| `HRNEXT-SEC-007` | No Active Custom Authentication Hook | security, authentication, architecture | `partial` |
| `HRNEXT-SEC-008` | User Data Protection Mapping Not Configured | security, privacy, data | `partial` |
| `HRNEXT-SEC-009` | Security Headers and Rate Limits External | security, operations, api | `partial` |
| `HRNEXT-SEC-010` | Semgrep Security and Correctness Gate | security, testing, developer-experience | `configuration-only` |
| `HRNEXT-QUALITY-001` | Backend Domain Test Suite | testing, quality, data | `implemented` |
| `HRNEXT-QUALITY-002` | Three-Way Parallel CI Tests | testing, ci, operations | `configuration-only` |
| `HRNEXT-QUALITY-003` | Coverage Threshold Gate | testing, quality, ci | `configuration-only` |
| `HRNEXT-QUALITY-004` | Backend Test Fixtures and Utilities | testing, data, reusable-internal | `implemented` |
| `HRNEXT-QUALITY-005` | No Vue Test Harness | testing, ui, quality | `partial` |
| `HRNEXT-DEV-001` | Ruff Python Lint and Format | developer-experience, quality, python | `configuration-only` |
| `HRNEXT-DEV-002` | Pre-Commit Quality Hooks | developer-experience, quality, automation | `configuration-only` |
| `HRNEXT-DEV-003` | Vue ESLint and Prettier Configuration | developer-experience, quality, ui | `configuration-only` |
| `HRNEXT-DEV-004` | TypeScript Roster Configuration | developer-experience, quality, typescript | `configuration-only` |
| `HRNEXT-DEV-005` | Vite Dual-App Development and Build | developer-experience, build, ui | `configuration-only` |
| `HRNEXT-DEV-006` | Source Maps for Browser Builds | developer-experience, observability, build | `configuration-only` |
| `HRNEXT-DEV-007` | Translation Generation and Review Automation | developer-experience, localization, ci | `configuration-only` |
| `HRNEXT-DEV-008` | Built Asset Commit Automation | developer-experience, build, ci | `configuration-only` |
| `HRNEXT-DEV-009` | Semantic Commit and Documentation Checks | developer-experience, quality, ci | `configuration-only` |
| `HRNEXT-OPS-001` | Local Bench Docker Stack | operations, deployment, developer-experience | `configuration-only` |
| `HRNEXT-OPS-002` | Bench-Native Site Installation | operations, deployment, developer-experience | `configuration-only` |
| `HRNEXT-OPS-003` | Dual Browser Asset Build | operations, build, ui | `implemented` |
| `HRNEXT-OPS-004` | Multi-Architecture Release Image Workflow | operations, deployment, ci | `partial` |
| `HRNEXT-OPS-005` | GitHub Release and Patch Automation | operations, release, ci | `configuration-only` |
| `HRNEXT-OPS-006` | No Health or Readiness Endpoint | operations, observability, deployment | `partial` |
| `HRNEXT-OPS-007` | No Kubernetes or Infrastructure-as-Code Deployment | operations, deployment, infrastructure | `partial` |
| `HRNEXT-OPS-008` | Scheduled and Queue Runtime Dependency | operations, queues, automation | `partial` |
| `HRNEXT-LICENSE-001` | GPL-3.0-Only Repository License Boundary | license, governance, provenance | `configuration-only` |
| `HRNEXT-DOC-HR-001` | Appointment Letter Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-002` | Appointment Letter content Embedded Data Rows | data, forms, reusable-internal, recruitment | `substrate/seam` |
| `HRNEXT-DOC-HR-003` | Appointment Letter Template Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-004` | Appraisal Record Lifecycle | product, data, forms, performance, workflow | `implemented` |
| `HRNEXT-DOC-HR-005` | Appraisal Cycle Record Lifecycle | product, data, forms, performance | `implemented` |
| `HRNEXT-DOC-HR-006` | Appraisal Goal Embedded Data Rows | data, forms, reusable-internal, performance | `substrate/seam` |
| `HRNEXT-DOC-HR-007` | Appraisal KRA Embedded Data Rows | data, forms, reusable-internal, performance | `substrate/seam` |
| `HRNEXT-DOC-HR-008` | Appraisal Template Record Lifecycle | product, data, forms, performance | `implemented` |
| `HRNEXT-DOC-HR-009` | Appraisal Template Goal Embedded Data Rows | data, forms, reusable-internal, performance | `substrate/seam` |
| `HRNEXT-DOC-HR-010` | Appraisee Embedded Data Rows | data, forms, reusable-internal, hr | `substrate/seam` |
| `HRNEXT-DOC-HR-011` | Attendance Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-012` | Attendance Request Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-013` | Compensatory Leave Request Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-014` | Daily Work Summary Record Lifecycle | product, data, forms, hr | `implemented` |
| `HRNEXT-DOC-HR-015` | Daily Work Summary Group Record Lifecycle | product, data, forms, hr | `implemented` |
| `HRNEXT-DOC-HR-016` | Daily Work Summary Group User Embedded Data Rows | data, forms, reusable-internal, hr | `substrate/seam` |
| `HRNEXT-DOC-HR-017` | Department Approver Embedded Data Rows | data, forms, reusable-internal, hr | `substrate/seam` |
| `HRNEXT-DOC-HR-018` | Designation Skill Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-019` | Earned Leave Schedule Embedded Data Rows | data, forms, reusable-internal, leave | `substrate/seam` |
| `HRNEXT-DOC-HR-020` | Employee Advance Record Lifecycle | product, data, forms, expenses, workflow | `implemented` |
| `HRNEXT-DOC-HR-021` | Employee Attendance Tool Configuration | configuration, administration, data, attendance | `configuration-only` |
| `HRNEXT-DOC-HR-022` | Employee Boarding Activity Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-023` | Employee Checkin Record Lifecycle | product, data, forms, attendance | `implemented` |
| `HRNEXT-DOC-HR-024` | Employee Feedback Criteria Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-025` | Employee Feedback Rating Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-026` | Employee Grade Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-027` | Employee Grievance Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-028` | Employee Health Insurance Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-029` | Employee Onboarding Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-030` | Employee Onboarding Template Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-031` | Employee Performance Feedback Record Lifecycle | product, data, forms, performance, workflow | `implemented` |
| `HRNEXT-DOC-HR-032` | Employee Promotion Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-033` | Employee Property History Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-034` | Employee Referral Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-035` | Employee Separation Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-036` | Employee Separation Template Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-037` | Employee Skill Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-038` | Employee Skill Map Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-039` | Employee Training Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-040` | Employee Transfer Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-041` | Employment Type Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-042` | Exit Interview Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-043` | Expected Skill Set Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-044` | Expense Claim Record Lifecycle | product, data, forms, expenses, workflow | `implemented` |
| `HRNEXT-DOC-HR-045` | Expense Claim Account Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-046` | Expense Claim Advance Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-047` | Expense Claim Detail Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-048` | Expense Claim Type Record Lifecycle | product, data, forms, expenses | `implemented` |
| `HRNEXT-DOC-HR-049` | Expense Taxes and Charges Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-050` | Full and Final Asset Embedded Data Rows | data, forms, reusable-internal, hr | `substrate/seam` |
| `HRNEXT-DOC-HR-051` | Full and Final Outstanding Statement Embedded Data Rows | data, forms, reusable-internal, hr | `substrate/seam` |
| `HRNEXT-DOC-HR-052` | Full and Final Statement Record Lifecycle | product, data, forms, hr, workflow | `implemented` |
| `HRNEXT-DOC-HR-053` | Goal Record Lifecycle | product, data, forms, performance, hierarchy | `implemented` |
| `HRNEXT-DOC-HR-054` | Grievance Type Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-055` | Holiday List Assignment Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-056` | HR Settings Configuration | configuration, administration, data, hr | `configuration-only` |
| `HRNEXT-DOC-HR-057` | Identification Document Type Record Lifecycle | product, data, forms, hr | `implemented` |
| `HRNEXT-DOC-HR-058` | Interest Record Lifecycle | product, data, forms, hr | `implemented` |
| `HRNEXT-DOC-HR-059` | Interview Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-060` | Interview Detail Embedded Data Rows | data, forms, reusable-internal, recruitment | `substrate/seam` |
| `HRNEXT-DOC-HR-061` | Interview Feedback Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-062` | Interview Type Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-063` | Interviewer Embedded Data Rows | data, forms, reusable-internal, recruitment | `substrate/seam` |
| `HRNEXT-DOC-HR-064` | Job Applicant Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-065` | Job Applicant Source Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-066` | Job Offer Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-067` | Job Offer Term Embedded Data Rows | data, forms, reusable-internal, recruitment | `substrate/seam` |
| `HRNEXT-DOC-HR-068` | Job Offer Term Template Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-069` | Job Opening Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-070` | Job Opening Template Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-071` | Job Requisition Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-072` | KRA Record Lifecycle | product, data, forms, performance | `implemented` |
| `HRNEXT-DOC-HR-073` | Leave Adjustment Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-074` | Leave Allocation Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-075` | Leave Application Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-076` | Leave Block List Record Lifecycle | product, data, forms, leave | `implemented` |
| `HRNEXT-DOC-HR-077` | Leave Block List Allow Embedded Data Rows | data, forms, reusable-internal, leave | `substrate/seam` |
| `HRNEXT-DOC-HR-078` | Leave Block List Date Embedded Data Rows | data, forms, reusable-internal, leave | `substrate/seam` |
| `HRNEXT-DOC-HR-079` | Leave Control Panel Configuration | configuration, administration, data, leave | `configuration-only` |
| `HRNEXT-DOC-HR-080` | Leave Encashment Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-081` | Leave Ledger Entry Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-082` | Leave Period Record Lifecycle | product, data, forms, leave | `implemented` |
| `HRNEXT-DOC-HR-083` | Leave Policy Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-084` | Leave Policy Assignment Record Lifecycle | product, data, forms, leave, workflow | `implemented` |
| `HRNEXT-DOC-HR-085` | Leave Policy Detail Embedded Data Rows | data, forms, reusable-internal, leave | `substrate/seam` |
| `HRNEXT-DOC-HR-086` | Leave Type Record Lifecycle | product, data, forms, leave | `implemented` |
| `HRNEXT-DOC-HR-087` | Offer Term Record Lifecycle | product, data, forms, recruitment | `implemented` |
| `HRNEXT-DOC-HR-088` | Overtime Details Embedded Data Rows | data, forms, reusable-internal, attendance | `substrate/seam` |
| `HRNEXT-DOC-HR-089` | Overtime Salary Component Embedded Data Rows | data, forms, reusable-internal, attendance | `substrate/seam` |
| `HRNEXT-DOC-HR-090` | Overtime Slip Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-091` | Overtime Type Record Lifecycle | product, data, forms, attendance | `implemented` |
| `HRNEXT-DOC-HR-092` | Purpose of Travel Record Lifecycle | product, data, forms, expenses | `implemented` |
| `HRNEXT-DOC-HR-093` | PWA Notification Record Lifecycle | product, data, forms, hr | `implemented` |
| `HRNEXT-DOC-HR-094` | Shift Assignment Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-095` | Shift Assignment Tool Configuration | configuration, administration, data, attendance | `configuration-only` |
| `HRNEXT-DOC-HR-096` | Shift Location Record Lifecycle | product, data, forms, attendance | `implemented` |
| `HRNEXT-DOC-HR-097` | Shift Request Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-098` | Shift Schedule Record Lifecycle | product, data, forms, attendance, workflow | `implemented` |
| `HRNEXT-DOC-HR-099` | Shift Schedule Assignment Record Lifecycle | product, data, forms, attendance | `implemented` |
| `HRNEXT-DOC-HR-100` | Shift Type Record Lifecycle | product, data, forms, attendance | `implemented` |
| `HRNEXT-DOC-HR-101` | Skill Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-102` | Skill Assessment Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-103` | Staffing Plan Record Lifecycle | product, data, forms, recruitment, workflow | `implemented` |
| `HRNEXT-DOC-HR-104` | Staffing Plan Detail Embedded Data Rows | data, forms, reusable-internal, recruitment | `substrate/seam` |
| `HRNEXT-DOC-HR-105` | Training Event Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-106` | Training Event Employee Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-107` | Training Feedback Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-108` | Training Program Record Lifecycle | product, data, forms, employee | `implemented` |
| `HRNEXT-DOC-HR-109` | Training Result Record Lifecycle | product, data, forms, employee, workflow | `implemented` |
| `HRNEXT-DOC-HR-110` | Training Result Employee Embedded Data Rows | data, forms, reusable-internal, employee | `substrate/seam` |
| `HRNEXT-DOC-HR-111` | Travel Itinerary Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-112` | Travel Request Record Lifecycle | product, data, forms, expenses, workflow | `implemented` |
| `HRNEXT-DOC-HR-113` | Travel Request Costing Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-114` | Vehicle Log Record Lifecycle | product, data, forms, expenses, workflow | `implemented` |
| `HRNEXT-DOC-HR-115` | Vehicle Service Embedded Data Rows | data, forms, reusable-internal, expenses | `substrate/seam` |
| `HRNEXT-DOC-HR-116` | Vehicle Service Item Record Lifecycle | product, data, forms, expenses | `implemented` |
| `HRNEXT-DOC-PAY-001` | Additional Salary Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-002` | Arrear Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-003` | Bulk Salary Structure Assignment Configuration | configuration, administration, data, payroll | `configuration-only` |
| `HRNEXT-DOC-PAY-004` | Employee Benefit Application Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-005` | Employee Benefit Application Detail Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-006` | Employee Benefit Claim Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-007` | Employee Benefit Detail Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-008` | Employee Benefit Ledger Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-009` | Employee Cost Center Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-010` | Employee Incentive Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-011` | Employee Other Income Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-012` | Employee Tax Exemption Category Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-013` | Employee Tax Exemption Declaration Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-014` | Employee Tax Exemption Declaration Category Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-015` | Employee Tax Exemption Proof Submission Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-016` | Employee Tax Exemption Proof Submission Detail Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-017` | Employee Tax Exemption Sub Category Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-018` | Gratuity Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-019` | Gratuity Applicable Component Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-020` | Gratuity Rule Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-021` | Gratuity Rule Slab Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-022` | Income Tax Slab Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-023` | Income Tax Slab Other Charges Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-024` | Payroll Correction Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-025` | Payroll Correction Child Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-026` | Payroll Employee Detail Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-027` | Payroll Entry Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-028` | Payroll Period Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-029` | Payroll Period Date Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-030` | Payroll Settings Configuration | configuration, administration, data, payroll | `configuration-only` |
| `HRNEXT-DOC-PAY-031` | Retention Bonus Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-032` | Salary Component Record Lifecycle | product, data, forms, payroll | `implemented` |
| `HRNEXT-DOC-PAY-033` | Salary Component Account Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-034` | Salary Detail Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-035` | Salary Slip Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-036` | Salary Slip Leave Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-037` | Salary Slip Loan Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-038` | Salary Slip Timesheet Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-039` | Salary Structure Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-040` | Salary Structure Assignment Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-041` | Salary Withholding Record Lifecycle | product, data, forms, payroll, workflow | `implemented` |
| `HRNEXT-DOC-PAY-042` | Salary Withholding Cycle Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-DOC-PAY-043` | Taxable Salary Slab Embedded Data Rows | data, forms, reusable-internal, payroll | `substrate/seam` |
| `HRNEXT-REPORT-HR-001` | Appraisal Overview | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-002` | Daily Work Summary Replies | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-003` | Employee Advance Summary | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-004` | Employee Analytics | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-005` | Employee Birthday | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-006` | Employee Exits | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-007` | Employee Hours Utilization Based On Timesheet | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-008` | Employee Information | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-009` | Employee Leave Balance | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-010` | Employee Leave Balance Summary | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-011` | Employees working on a holiday | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-012` | Leave Ledger | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-013` | Monthly Attendance Sheet | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-014` | Project Profitability | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-015` | Recruitment Analytics | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-016` | Shift Attendance | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-017` | Unpaid Expense Claim | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-HR-018` | Vehicle Expenses | analytics, reports, tables, search, hr | `implemented` |
| `HRNEXT-REPORT-PAY-001` | Accrued Earnings Report | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-002` | Bank Remittance | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-003` | Employee CTC Break-up | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-004` | Income Tax Computation | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-005` | Income Tax Deductions | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-006` | Professional Tax Deductions | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-007` | Provident Fund Deductions | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-008` | Salary Payments Based On Payment Mode | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-009` | Salary Payments via ECS | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-REPORT-PAY-010` | Salary Register | analytics, reports, tables, search, payroll | `implemented` |
| `HRNEXT-WORKSPACE-001` | Expenses Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-002` | HR Setup Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-003` | Leaves Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-004` | Performance Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-005` | Recruitment Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-006` | Shift & Attendance Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-007` | Tenure Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-008` | Payroll Desk Workspace | ui, navigation, administration | `implemented` |
| `HRNEXT-WORKSPACE-009` | Tax & Benefits Desk Workspace | ui, navigation, administration | `implemented` |

## SRC-STUDIO-ADMIN

- **Repository:** `arhamkhnz/next-shadcn-admin-dashboard`
- **Pinned revision:** `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0`
- **Discovery state:** Complete
- **Reference lifecycle:** `KNOWLEDGE_READY`; understanding coverage `0 / 261 (0.0)`
- **Repository evidence:** [profile](../repositories/studio-admin/REPOSITORY-PROFILE.md), [catalog](../repositories/studio-admin/FEATURE-CATALOG.md), [machine catalog](../repositories/studio-admin/FEATURE-CATALOG.yaml), [evidence manifest](../repositories/studio-admin/EVIDENCE-MANIFEST.md), [license review](../repositories/studio-admin/LICENSE-REVIEW.md), [coverage decision](../repositories/studio-admin/COVERAGE-REPORT.md), [unknowns and exclusions](../repositories/studio-admin/UNKNOWNS.md)
- **Adoption history:** None recorded. Indexing does not select or recommend a feature.

All records below are `Verified`, current at the pinned revision, and governed by the repository evidence links above.
Partial and substrate/seam records do not represent complete backend or production capabilities.

| Feature ID | Canonical name | Implementation status | Classification |
|---|---|---|---|
| `STUDIO-ADMIN-PLATFORM-001` | Single-Package Next.js Dashboard Application | `implemented` | architecture, product, developer-experience |
| `STUDIO-ADMIN-PLATFORM-002` | Next.js App Router Segment Composition | `implemented` | architecture, ui, navigation |
| `STUDIO-ADMIN-PLATFORM-003` | Server and Client Component Partition | `implemented` | architecture, ui, developer-experience |
| `STUDIO-ADMIN-PLATFORM-004` | Static Root Provider Composition | `implemented` | architecture, ui, state |
| `STUDIO-ADMIN-PLATFORM-005` | Root and Dashboard Default Redirects | `implemented` | navigation, product |
| `STUDIO-ADMIN-PLATFORM-006` | Package-Backed Application Metadata | `configuration-only` | configuration, ui |
| `STUDIO-ADMIN-PLATFORM-007` | React Compiler and Production Console Removal | `configuration-only` | configuration, developer-experience, operations |
| `STUDIO-ADMIN-PLATFORM-008` | Disabled Request Proxy Seam | `substrate/seam` | architecture, security, configuration |
| `STUDIO-ADMIN-PLATFORM-009` | English-Only Root Locale Baseline | `configuration-only` | localization, ui, configuration |
| `STUDIO-ADMIN-PLATFORM-010` | Thirty-Two Page Route Surface | `implemented` | product, navigation, ui |
| `STUDIO-ADMIN-SHELL-001` | Responsive Dashboard Application Shell | `implemented` | ui, navigation, responsive |
| `STUDIO-ADMIN-SHELL-002` | Desktop Collapsible Sidebar | `implemented` | ui, navigation, interaction |
| `STUDIO-ADMIN-SHELL-003` | Mobile Sidebar Sheet | `implemented` | ui, navigation, responsive, accessibility |
| `STUDIO-ADMIN-SHELL-004` | Sidebar Variant Selection | `implemented` | ui, personalization, configuration |
| `STUDIO-ADMIN-SHELL-005` | Sidebar Collapse Strategy Selection | `implemented` | ui, personalization, configuration |
| `STUDIO-ADMIN-SHELL-006` | Server-Hydrated Sidebar State Cookie | `implemented` | ui, state, personalization |
| `STUDIO-ADMIN-SHELL-007` | Sidebar Keyboard Toggle | `implemented` | interaction, accessibility, navigation |
| `STUDIO-ADMIN-SHELL-008` | Sticky or Scrolling Header Preference | `implemented` | ui, personalization, configuration |
| `STUDIO-ADMIN-SHELL-009` | Centered or Full-Width Content Preference | `implemented` | ui, personalization, responsive |
| `STUDIO-ADMIN-SHELL-010` | Per-Page Full-Bleed Content Escape | `implemented` | ui, layout, reusable-internal |
| `STUDIO-ADMIN-SHELL-011` | Responsive Dashboard Header Controls | `implemented` | ui, responsive, navigation |
| `STUDIO-ADMIN-SHELL-012` | Static Account Persona Switcher | `partial` | ui, interaction, administration |
| `STUDIO-ADMIN-SHELL-013` | Sidebar User Menu | `partial` | ui, navigation, administration |
| `STUDIO-ADMIN-SHELL-014` | Sidebar Support Card | `partial` | ui, navigation, reusable-internal |
| `STUDIO-ADMIN-SHELL-015` | Standalone Chat Shell | `implemented` | ui, navigation, responsive |
| `STUDIO-ADMIN-SHELL-016` | Standalone Mail Shell | `implemented` | ui, navigation, responsive |
| `STUDIO-ADMIN-SHELL-017` | Breakpoint Detection Hooks | `implemented` | ui, responsive, reusable-internal |
| `STUDIO-ADMIN-NAV-001` | Grouped Sidebar Navigation Configuration | `implemented` | navigation, configuration, reusable-internal |
| `STUDIO-ADMIN-NAV-002` | Nested Navigation Parents | `implemented` | navigation, ui, interaction |
| `STUDIO-ADMIN-NAV-003` | Path-Based Active Navigation State | `implemented` | navigation, ui |
| `STUDIO-ADMIN-NAV-004` | Collapsed Navigation Dropdown Fallback | `implemented` | navigation, ui, responsive |
| `STUDIO-ADMIN-NAV-005` | New and Soon Navigation Badges | `implemented` | navigation, ui |
| `STUDIO-ADMIN-NAV-006` | Disabled Navigation Presentation | `partial` | navigation, ui, accessibility |
| `STUDIO-ADMIN-NAV-007` | New-Tab Authentication Navigation | `implemented` | navigation, interaction |
| `STUDIO-ADMIN-NAV-008` | Command Navigation Palette | `implemented` | navigation, search, interaction, accessibility |
| `STUDIO-ADMIN-NAV-009` | Command/Ctrl+J Search Shortcut | `implemented` | navigation, search, accessibility |
| `STUDIO-ADMIN-NAV-010` | Search Recommendations and Empty State | `implemented` | navigation, search, ui |
| `STUDIO-ADMIN-NAV-011` | Disabled and Coming-Soon Search Exclusion | `implemented` | navigation, search, configuration |
| `STUDIO-ADMIN-NAV-012` | Dormant Secondary and Document Navigation Modules | `substrate/seam` | navigation, reusable-internal |
| `STUDIO-ADMIN-NAV-013` | Dashboard Chat and Mail Preview Handoffs | `implemented` | navigation, ui, interaction |
| `STUDIO-ADMIN-THEME-001` | Light Dark and System Theme Modes | `implemented` | ui, personalization, configuration |
| `STUDIO-ADMIN-THEME-002` | Pre-Hydration Preference Boot | `implemented` | ui, performance, personalization |
| `STUDIO-ADMIN-THEME-003` | System Theme Change Subscription | `implemented` | ui, personalization, interaction |
| `STUDIO-ADMIN-THEME-004` | Four Selectable Theme Presets | `implemented` | ui, personalization, design-system |
| `STUDIO-ADMIN-THEME-005` | Generated Theme Preset Registry | `implemented` | developer-experience, configuration, design-system |
| `STUDIO-ADMIN-THEME-006` | Eighteen Selectable Font Families | `implemented` | ui, personalization, design-system |
| `STUDIO-ADMIN-THEME-007` | Typed Preference Registry | `implemented` | configuration, state, reusable-internal |
| `STUDIO-ADMIN-THEME-008` | Preference Value Validation and Fallback | `implemented` | configuration, state, security |
| `STUDIO-ADMIN-THEME-009` | Client Cookie Preference Persistence | `implemented` | state, personalization, data |
| `STUDIO-ADMIN-THEME-010` | Server Cookie Persistence Adapter | `substrate/seam` | state, data, reusable-internal |
| `STUDIO-ADMIN-THEME-011` | Local Storage Persistence Adapter | `substrate/seam` | state, data, reusable-internal |
| `STUDIO-ADMIN-THEME-012` | DOM Attribute Preference Application | `implemented` | ui, state, design-system |
| `STUDIO-ADMIN-THEME-013` | Zustand Preference Store | `implemented` | state, ui, reusable-internal |
| `STUDIO-ADMIN-THEME-014` | Restore-Defaults Control | `implemented` | ui, personalization, interaction |
| `STUDIO-ADMIN-THEME-015` | Theme Cycle Control | `implemented` | ui, personalization, accessibility |
| `STUDIO-ADMIN-THEME-016` | Semantic CSS Variable Token System | `implemented` | ui, design-system, reusable-internal |
| `STUDIO-ADMIN-THEME-017` | Preset-Aware Shadow Overrides | `implemented` | ui, design-system |
| `STUDIO-ADMIN-THEME-018` | Theme and Layout Control Panel | `implemented` | ui, personalization, configuration |
| `STUDIO-ADMIN-AUTH-001` | Two Login Screen Layouts | `partial` | authentication, ui, product |
| `STUDIO-ADMIN-AUTH-002` | Login Form Validation | `implemented` | authentication, ui, forms |
| `STUDIO-ADMIN-AUTH-003` | Remember-Me Presentation | `partial` | authentication, ui, forms |
| `STUDIO-ADMIN-AUTH-004` | Two Registration Screen Layouts | `partial` | authentication, ui, product |
| `STUDIO-ADMIN-AUTH-005` | Registration Form Validation | `implemented` | authentication, ui, forms |
| `STUDIO-ADMIN-AUTH-006` | Google Sign-In Button Substrate | `substrate/seam` | authentication, integration, ui |
| `STUDIO-ADMIN-AUTH-007` | Unauthorized Access Screen | `implemented` | authorization, ui, navigation |
| `STUDIO-ADMIN-AUTH-008` | Authentication Request Guard Seam | `substrate/seam` | authentication, security, configuration |
| `STUDIO-ADMIN-AUTH-009` | Toast-Only Credential Submission Demo | `partial` | authentication, ui, notification |
| `STUDIO-ADMIN-AUTH-010` | Authentication UI Auto-Complete Semantics | `implemented` | authentication, accessibility, forms |
| `STUDIO-ADMIN-ADMIN-001` | Static User Directory | `partial` | administration, ui, data |
| `STUDIO-ADMIN-ADMIN-002` | User Full-Text Table Search | `implemented` | administration, search, ui |
| `STUDIO-ADMIN-ADMIN-003` | User Role Team Status and Workspace Filters | `implemented` | administration, search, ui |
| `STUDIO-ADMIN-ADMIN-004` | User Sorting Pagination and Row Selection | `implemented` | administration, ui, interaction |
| `STUDIO-ADMIN-ADMIN-005` | User Status and Team Presentation | `implemented` | administration, ui |
| `STUDIO-ADMIN-ADMIN-006` | User Action Menu Substrate | `substrate/seam` | administration, ui, workflow |
| `STUDIO-ADMIN-ADMIN-007` | User Add Export Customize and View Controls | `substrate/seam` | administration, ui, integration |
| `STUDIO-ADMIN-ADMIN-008` | Static Roles and Permissions Directory | `partial` | administration, authorization, data |
| `STUDIO-ADMIN-ADMIN-009` | Role Search and Type Owner Status Filters | `implemented` | administration, authorization, search |
| `STUDIO-ADMIN-ADMIN-010` | Role Sorting Pagination and Selection | `implemented` | administration, authorization, interaction |
| `STUDIO-ADMIN-ADMIN-011` | Role Review Alert | `implemented` | administration, authorization, ui |
| `STUDIO-ADMIN-ADMIN-012` | System-Role Edit Restrictions in UI | `partial` | administration, authorization, ui |
| `STUDIO-ADMIN-ADMIN-013` | Role Action Menu Substrate | `substrate/seam` | administration, authorization, workflow |
| `STUDIO-ADMIN-ADMIN-014` | Permission Sets and Access Reviews Tab Substrate | `substrate/seam` | administration, authorization, ui |
| `STUDIO-ADMIN-ADMIN-015` | Organization and Workspace Labels Without Tenancy Boundary | `partial` | administration, tenancy, data |
| `STUDIO-ADMIN-DASH-001` | Default Dashboard Metric Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-002` | Default Performance Overview Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-003` | Default Subscriber Overview Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-004` | Default Recent Customers Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-005` | CRM KPI Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-006` | CRM Opportunities Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-007` | CRM Pipeline Activity Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-008` | CRM Task Reminder Panel | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-009` | Finance Overview KPIs | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-010` | Finance Income Breakdown | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-011` | Finance Transactions Overview | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-012` | Finance Upcoming Transactions | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-013` | Finance Wallet Summary | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-014` | Finance Balance Distribution | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-015` | Finance Quick Actions | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-016` | Finance Notification Card | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-017` | Analytics KPI Strip | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-018` | Analytics Date and Comparison Toolbar | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-019` | Analytics Realtime Visitors Visualization | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-020` | Analytics Traffic Quality Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-021` | Analytics Top Traffic Sources | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-022` | Analytics Top Pages Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-023` | Productivity Summary Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-024` | Productivity Focus Card | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-025` | Productivity Calendar Panel | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-026` | Productivity Task List | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-027` | Productivity Projects Panel | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-028` | Productivity Quick Actions | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-029` | Productivity Recent Notes | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-030` | Productivity Weekly Summary | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-031` | Productivity Motivational Quote | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-032` | E-Commerce KPI Strip | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-033` | E-Commerce Recent Orders Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-034` | E-Commerce Store Traffic Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-035` | E-Commerce Traffic Sources | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-036` | E-Commerce Inventory Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-037` | E-Commerce Top Products | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-038` | E-Commerce Customer Reviews | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-039` | Academy KPI Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-040` | Academy Class Schedule | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-041` | Academy Assignment Status | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-042` | Academy Upcoming Events | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-043` | Academy Performance Highlights | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-044` | Infrastructure Grouped Environments | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-045` | Infrastructure Health and Resource Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-046` | Infrastructure Status Header | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-047` | Legacy Default KPI Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-048` | Legacy Default Visitor Chart | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-049` | Legacy Proposal Sections Table | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-050` | Legacy Proposal Inline Edit Demo | `partial` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-051` | Legacy CRM Overview Cards | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-052` | Legacy CRM Insight Charts | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-053` | Legacy CRM Operational Panels | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-054` | Legacy CRM Recent Leads Table | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-055` | Legacy Finance KPI Suite | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-056` | Legacy Finance Cash-Flow and Spending Charts | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-057` | Legacy Analytics Risk Overview | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-058` | Legacy Analytics Forecast vs Target | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-059` | Legacy Analytics Coverage Triage | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-060` | Legacy Analytics Revenue Risk Ledger | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-DASH-061` | Legacy Analytics Manager Action Queue | `implemented` | analytics, ui, product |
| `STUDIO-ADMIN-WORKFLOW-001` | Month Week and Day Calendar Views | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-002` | Calendar Previous Today and Next Navigation | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-003` | Calendar Event Count and Range Summary | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-004` | Calendar Source Selector Presentation | `partial` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-005` | Calendar Add-Event Substrate | `substrate/seam` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-006` | Reusable FullCalendar Theme Adapter | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-007` | Five-Column Kanban Board | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-008` | Kanban Cross-Column Task Movement | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-009` | Kanban Column Reordering | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-010` | Kanban Pointer Touch and Keyboard Sensors | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-011` | Kanban Drag Cancel Rollback | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-012` | Kanban Task Detail Cards | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-013` | Kanban Alternate View Controls | `partial` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-014` | Kanban Search Filter Sort and Create Substrate | `substrate/seam` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-015` | Static Task Table | `partial` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-016` | Task Title Search | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-017` | Task Status and Priority Facets | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-018` | Task Table Selection Sorting Visibility and Pagination | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-019` | Task Row Action Substrate | `substrate/seam` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-020` | Responsive Shipment Master-Detail | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-021` | Shipment Status and Cargo Details | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-022` | Shipment Route Map | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-023` | Infrastructure and Shipment Static Domain Types | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-024` | Live Invoice Form Preview | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-025` | Invoice Client Selector | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-026` | Invoice Reference and Date Fields | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-027` | Invoice Line Item Add Remove and Reorder | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-028` | Invoice Tax and Discount Controls | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-029` | Invoice Amount Calculation Utilities | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-030` | Letter Invoice Preview and Scaling | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-031` | Browser Invoice Printing | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-032` | Invoice Print Styles | `implemented` | workflow, ui, interaction |
| `STUDIO-ADMIN-WORKFLOW-033` | Invoice Payment and Business Tab Substrate | `substrate/seam` | workflow, ui, interaction |
| `STUDIO-ADMIN-COMM-001` | Static Mailbox Dataset | `partial` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-002` | Mail Folder and Label Sidebar | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-003` | Mail Pinned and Inbox Groups | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-004` | Mail Selection Store | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-005` | Desktop Resizable Mail Panels | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-006` | Mobile Mail Detail Drawer | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-007` | Mail Message Reader | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-008` | Mail Search Presentation | `partial` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-009` | Mail Action Substrate | `substrate/seam` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-010` | Static Chat Conversation Dataset | `partial` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-011` | Chat Channel and View Sidebar | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-012` | Chat Conversation Selection Store | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-013` | Chat Conversation List Tabs | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-014` | Responsive Chat Thread Navigation | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-015` | Chat Message Timeline and Reactions | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-016` | Reply and Internal Note Composer | `partial` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-017` | Chat Contact Profile | `implemented` | collaboration, ui, interaction |
| `STUDIO-ADMIN-COMM-018` | Chat Action Substrate | `substrate/seam` | collaboration, ui, interaction |
| `STUDIO-ADMIN-UI-001` | Base Form Control Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-002` | Structured Field and Input Group Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-003` | Dialog Sheet Drawer and Alert Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-004` | Menu and Popover Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-005` | Accordion Collapsible Tabs and Toggle Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-006` | Navigation and Wayfinding Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-007` | Command and Combobox Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-008` | Table and Item Presentation Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-009` | Card Badge Avatar and Alert Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-010` | Chart Composition Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-011` | Calendar and Date Range Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-012` | Carousel Resizable and Scroll Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-013` | Feedback State Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-014` | Tooltip Keyboard and Marker Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-015` | Messaging Presentation Suite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-016` | Layout and Media Primitives | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-017` | Tokenized Variant Composition | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-018` | Simple Icon Adapter | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-UI-019` | Date Range Picker Composite | `implemented` | ui, reusable-internal, design-system |
| `STUDIO-ADMIN-DATA-001` | Embedded Screen Fixture Architecture | `partial` | data, architecture, developer-experience |
| `STUDIO-ADMIN-DATA-002` | Zod-Validated Demo Row Schemas | `implemented` | data, validation, reusable-internal |
| `STUDIO-ADMIN-DATA-003` | TanStack Table State Architecture | `implemented` | data, ui, reusable-internal |
| `STUDIO-ADMIN-DATA-004` | Process-Local Zustand Selection Stores | `implemented` | data, state, reusable-internal |
| `STUDIO-ADMIN-DATA-005` | Cookie Utility Boundary | `implemented` | data, state, reusable-internal |
| `STUDIO-ADMIN-DATA-006` | Mail Panel Layout Cookie | `implemented` | data, state, personalization |
| `STUDIO-ADMIN-DATA-007` | Derived Invoice Calculation Model | `implemented` | data, workflow, reusable-internal |
| `STUDIO-ADMIN-DATA-008` | Local-State-Only Kanban Model | `partial` | data, workflow, state |
| `STUDIO-ADMIN-DATA-009` | Preference Storage Strategy Abstraction | `implemented` | data, state, reusable-internal |
| `STUDIO-ADMIN-DATA-010` | No Durable Application Data Store | `configuration-only` | data, architecture, operations |
| `STUDIO-ADMIN-INTEGRATION-001` | World Atlas CDN Map Integration | `implemented` | integration, ui, data |
| `STUDIO-ADMIN-INTEGRATION-002` | GitHub Repository Link | `implemented` | integration, navigation, ui |
| `STUDIO-ADMIN-INTEGRATION-003` | Google Font Delivery | `implemented` | integration, ui, design-system |
| `STUDIO-ADMIN-INTEGRATION-004` | Simple Icons Brand Asset Integration | `implemented` | integration, ui, assets |
| `STUDIO-ADMIN-SECURITY-001` | No Active Authentication Enforcement | `configuration-only` | security, authentication, architecture |
| `STUDIO-ADMIN-SECURITY-002` | No Server Authorization or RBAC Enforcement | `configuration-only` | security, authorization, administration |
| `STUDIO-ADMIN-SECURITY-003` | Validated Preference Allowlist | `implemented` | security, configuration, state |
| `STUDIO-ADMIN-SECURITY-004` | Preference and Sidebar Cookie Limitations | `partial` | security, data, state |
| `STUDIO-ADMIN-SECURITY-005` | Production Console Removal | `configuration-only` | security, operations, configuration |
| `STUDIO-ADMIN-SECURITY-006` | External Map Fetch Error Containment | `implemented` | security, integration, resilience |
| `STUDIO-ADMIN-SECURITY-007` | Credential Toast Exposure | `partial` | security, authentication, ui |
| `STUDIO-ADMIN-A11Y-001` | Code-Level Focus and Semantic Control Baseline | `implemented` | accessibility, ui, reusable-internal |
| `STUDIO-ADMIN-A11Y-002` | Screen-Reader-Only Labels | `implemented` | accessibility, ui |
| `STUDIO-ADMIN-A11Y-003` | Keyboard-Operable Sidebar and Command Palette | `implemented` | accessibility, navigation, interaction |
| `STUDIO-ADMIN-A11Y-004` | Keyboard-Operable Kanban Drag | `implemented` | accessibility, workflow, interaction |
| `STUDIO-ADMIN-A11Y-005` | Responsive Overlay Naming | `implemented` | accessibility, responsive, ui |
| `STUDIO-ADMIN-A11Y-006` | Chart Accessibility Layer Configuration | `implemented` | accessibility, analytics, ui |
| `STUDIO-ADMIN-A11Y-007` | Reduced-Motion Handling Absent | `configuration-only` | accessibility, ui, configuration |
| `STUDIO-ADMIN-A11Y-008` | LTR-Oriented English UI Baseline | `configuration-only` | accessibility, localization, ui |
| `STUDIO-ADMIN-DEV-001` | Strict TypeScript No-Emit Configuration | `configuration-only` | developer-experience, testing, configuration |
| `STUDIO-ADMIN-DEV-002` | Biome Lint Format and Assist Configuration | `configuration-only` | developer-experience, testing, configuration |
| `STUDIO-ADMIN-DEV-003` | UI and Calendar Biome Exclusions | `configuration-only` | developer-experience, testing, configuration |
| `STUDIO-ADMIN-DEV-004` | Tailwind CSS v4 PostCSS Pipeline | `configuration-only` | developer-experience, ui, build |
| `STUDIO-ADMIN-DEV-005` | shadcn Radix Nova Generator Configuration | `configuration-only` | developer-experience, ui, design-system |
| `STUDIO-ADMIN-DEV-006` | npm Lockfile Dependency Pinning | `configuration-only` | developer-experience, build, operations |
| `STUDIO-ADMIN-DEV-007` | Pre-Commit Theme Generation and Lint-Staged Gate | `implemented` | developer-experience, testing, automation |
| `STUDIO-ADMIN-DEV-008` | Theme Preset Code Generator | `implemented` | developer-experience, automation, design-system |
| `STUDIO-ADMIN-DEV-009` | Next Development Build and Start Commands | `configuration-only` | developer-experience, build, operations |
| `STUDIO-ADMIN-DEV-010` | Quality Check and Auto-Fix Commands | `configuration-only` | developer-experience, testing |
| `STUDIO-ADMIN-DEV-011` | Path Alias Architecture | `configuration-only` | developer-experience, architecture |
| `STUDIO-ADMIN-DEV-012` | Contributor and Agent Guidance | `configuration-only` | developer-experience, documentation |
| `STUDIO-ADMIN-DEV-013` | No Project Test Harness | `configuration-only` | testing, developer-experience |
| `STUDIO-ADMIN-DEV-014` | No CI/CD Workflow | `configuration-only` | testing, operations, developer-experience |
| `STUDIO-ADMIN-OPS-001` | Standard Next.js Process Lifecycle | `configuration-only` | operations, deployment, build |
| `STUDIO-ADMIN-OPS-002` | No Tracked Deployment Manifest | `configuration-only` | operations, deployment |
| `STUDIO-ADMIN-OPS-003` | No Health Telemetry or Observability Runtime | `configuration-only` | operations, security, analytics |
| `STUDIO-ADMIN-OPS-004` | No Queue Job Scheduler or Realtime Transport | `configuration-only` | operations, automation, realtime |
