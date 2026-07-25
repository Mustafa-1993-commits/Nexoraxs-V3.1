# Reference Feature Index

This directory will contain only features verified by Repository Discovery from the local candidate source repositories.

A folder name or repository presence does not prove a feature role. Every indexed feature must use a stable feature ID and link to its pinned source revision, executable evidence, license review, discovery report, explicit exclusions, and any later NexoraXS adoption history.

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
