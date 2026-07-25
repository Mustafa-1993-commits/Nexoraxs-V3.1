# Feature Catalog

## Repository

- Repository ID: `SRC-ALIZIODEV-LARAVEL-NEXT-STARTER`
- Canonical name: `aliziodev/laravel-next-starter-kit`
- Local path: `/home/mustafa/projects/aliziodev/laravel-next-starter-kit`
- Source URL: `https://github.com/aliziodev/laravel-next-starter-kit.git`
- Pinned discovered SHA: `1f1bc9681c1141802cc8125235195ff904c46e0c`
- Current SHA: `1f1bc9681c1141802cc8125235195ff904c46e0c`
- Discovery state: Complete
- Discovery mode: Initial
- Discovery timestamp: `2026-07-26T01:05:23+03:00`

## Catalog Rules and Defaults

- This catalog includes product, UI, interaction, auth, data, configuration, operations, test, and reusable internal capabilities, including infrastructure-only and dormant capabilities.
- It does not rank, recommend, preselect, copy, or authorize any feature.
- Every record is `Verified` for the narrowly stated capability. Package-internal behavior that cannot be verified from tracked source is kept in Unknowns.
- Unless a record says otherwise: discovered SHA is the pinned SHA above; last verified is the discovery timestamp; stale is `No`; repository-level source license is MIT; reuse and license notes are assessments, not recommendations.

## Feature Summary

| Feature ID | Canonical Name | Classification | Evidence Status | Entry Point | Coupling | Stale |
|---|---|---|---|---|---|---|
| ALNS-PLATFORM-001 | Decoupled Laravel–Next Runtime | product, integration, operations | Verified | Browser → Next proxy → Laravel | High | No |
| ALNS-WEB-001 | Auth-Aware Welcome Page | product, ui | Verified | `/` | Medium | No |
| ALNS-API-001 | Status and Health Endpoints | api, operations | Verified | Laravel `/`, `/up` | Low | No |
| ALNS-AUTH-001 | Same-Origin Sanctum Proxy | authentication, security, integration | Verified | `/api/sanctum/[...path]` | High | No |
| ALNS-AUTH-002 | Request-Cached SSR Auth Hydration | authentication, data | Verified | route-group layouts | High | No |
| ALNS-AUTH-003 | Protected Routes and Safe Return Redirects | authentication, security | Verified | `/dashboard`, `/settings/*`, `/login` | High | No |
| ALNS-AUTH-004 | User Registration | authentication, product | Verified | `/register` | Medium | No |
| ALNS-AUTH-005 | Email/Password Login with Remember Me | authentication, product | Verified | `/login` | Medium | No |
| ALNS-AUTH-006 | User Logout | authentication, product | Verified | user menu, verify-email | Medium | No |
| ALNS-AUTH-007 | Expired or Revoked Session Recovery | authentication, security, interaction | Verified | app layout/focus/login | High | No |
| ALNS-AUTH-008 | Forgot-Password Request | authentication, notification | Verified | `/forgot-password` | Medium | No |
| ALNS-AUTH-009 | Password Reset | authentication, security | Verified | `/reset-password` | Medium | No |
| ALNS-AUTH-010 | Password Confirmation | authentication, security | Verified | security dialog, `/confirm-password` | High | No |
| ALNS-AUTH-011 | Password Update | authentication, security | Verified | `/settings/security` | Medium | No |
| ALNS-AUTH-012 | Profile Update | product, authentication | Verified | `/settings/profile` | Medium | No |
| ALNS-AUTH-013 | Dormant Email-Verification Flow | authentication, notification, configuration | Verified | `/verify-email`, callback | High | No |
| ALNS-AUTH-014 | TOTP Enrollment and Disable | authentication, security | Verified | security settings | High | No |
| ALNS-AUTH-015 | TOTP or Recovery-Code Login Challenge | authentication, security | Verified | `/two-factor-challenge` | High | No |
| ALNS-AUTH-016 | Two-Factor Recovery-Code Management | authentication, security | Verified | security settings | High | No |
| ALNS-AUTH-017 | Passkey Passwordless Sign-In | authentication, security | Verified | `/login` | High | No |
| ALNS-AUTH-018 | Passkey Registration, Listing, and Removal | authentication, security | Verified | security settings, `/api/passkeys` | High | No |
| ALNS-AUTH-019 | Passkey Management Discovery | integration, authentication | Verified | `/.well-known/passkey-endpoints` | Medium | No |
| ALNS-AUTH-020 | Current Authenticated User Projection | api, authentication | Verified | `GET /api/user` | Medium | No |
| ALNS-AUTH-021 | Password-Confirmed Account Deletion | product, security | Verified | profile settings, `DELETE /api/account` | Medium | No |
| ALNS-AUTH-022 | Personal Access Token Data Substrate | authentication, api, data | Verified | model/migration | Medium | No |
| ALNS-SESSION-001 | Browser Session Inventory | security, data, ui | Verified | security settings, `GET /api/sessions` | High | No |
| ALNS-SESSION-002 | Single Other-Session Revocation | security, interaction | Verified | session row, `DELETE /api/sessions/{id}` | High | No |
| ALNS-SESSION-003 | Bulk Other-Session Revocation | security, bulk-operation | Verified | security settings, `DELETE /api/sessions/others` | High | No |
| ALNS-UI-001 | Placeholder Dashboard | product, ui | Verified | `/dashboard` | Low | No |
| ALNS-UI-002 | Responsive Collapsible Sidebar Shell | ui, interaction, personalization | Verified | protected layout | Medium | No |
| ALNS-UI-003 | Alternative Header and Auth Layouts | ui, reusable-internal | Verified | dormant layout components | Medium | No |
| ALNS-UI-004 | Settings Navigation | ui, navigation | Verified | `/settings/*` | Low | No |
| ALNS-UI-005 | User Menu, Avatar, and Initials | ui, interaction | Verified | shell footer/header | Medium | No |
| ALNS-UI-006 | Breadcrumb Navigation | ui, navigation, accessibility | Verified | app headers | Low | No |
| ALNS-UI-007 | Light, Dark, and System Appearance | ui, personalization | Verified | `/settings/appearance` | Medium | No |
| ALNS-UI-008 | Themed Toast Feedback | ui, notification | Verified | global provider | Low | No |
| ALNS-UI-009 | Password Reveal Control | ui, interaction, accessibility | Verified | password fields | Low | No |
| ALNS-UI-010 | Loading, Empty, Validation, and Error States | ui, interaction | Verified | auth/settings flows | Low | No |
| ALNS-UI-011 | Overlay and Menu Primitive Suite | ui, reusable-internal, accessibility | Verified | reusable components | Medium | No |
| ALNS-UI-012 | Form and Control Primitive Suite | ui, reusable-internal, accessibility | Verified | reusable components | Medium | No |
| ALNS-UI-013 | Navigation and Display Primitive Suite | ui, reusable-internal, accessibility | Verified | reusable components | Medium | No |
| ALNS-UI-014 | Presentation Utility Hooks and Formatters | ui, reusable-internal | Verified | hooks/libs | Low | No |
| ALNS-UI-015 | Code-Level Accessibility Baseline | accessibility, ui | Verified | shared and feature components | Medium | No |
| ALNS-I18N-001 | English-Only Locale Baseline | localization, configuration | Verified | root/config/formatters | Medium | No |
| ALNS-DATA-001 | User and Credential Persistence | data, authentication | Verified | migrations/model | High | No |
| ALNS-DATA-002 | Database Session Persistence | data, security | Verified | sessions table/config | High | No |
| ALNS-DATA-003 | Database Cache and Lock Substrate | data, operations | Verified | cache migrations/config | Medium | No |
| ALNS-DATA-004 | Queue, Batch, and Failure Persistence | data, automation | Verified | job migrations/config | Medium | No |
| ALNS-DATA-005 | Configurable Relational Database Backends | data, configuration | Verified | database config | Medium | No |
| ALNS-DATA-006 | Configurable Filesystem Backends | data, configuration | Verified | filesystem config | Low | No |
| ALNS-INTEGRATION-001 | Auth Mail Transport and SPA Links | integration, notification | Verified | mail config/provider | High | No |
| ALNS-OPS-001 | Local Setup and Three-Process Development | developer-experience, operations | Verified | Composer scripts | Medium | No |
| ALNS-OPS-002 | One-Command Compose Topology | deployment, operations | Verified | `docker-compose.yml` | High | No |
| ALNS-OPS-003 | Shared App-Key, Migration, and Cache Bootstrap | deployment, security | Verified | PHP entrypoint | High | No |
| ALNS-OPS-004 | Standalone Non-Root Next Container | deployment, operations | Verified | Next config/Dockerfile | Medium | No |
| ALNS-OPS-005 | Queue Worker and Scheduler Processes | automation, operations | Verified | dev/Compose commands | Medium | No |
| ALNS-OPS-006 | Logging and Health Instrumentation Baseline | operations, configuration | Verified | logging config/bootstrap | Medium | No |
| ALNS-DEV-001 | Backend Pest/PHPUnit Smoke Harness | testing, developer-experience | Verified | `tests/*`, `phpunit.xml` | Low | No |
| ALNS-DEV-002 | Full-Stack Playwright Harness | testing, developer-experience | Verified | `web/playwright.config.ts` | Medium | No |
| ALNS-DEV-003 | Authentication E2E Suite | testing, authentication | Verified | `web/e2e/auth.spec.ts` | Medium | No |
| ALNS-DEV-004 | TOTP E2E Suite | testing, security | Verified | `web/e2e/2fa.spec.ts` | High | No |
| ALNS-DEV-005 | Passkey E2E Suite | testing, security | Verified | `web/e2e/passkey.spec.ts` | High | No |
| ALNS-DEV-006 | Browser-Session E2E Suite | testing, security | Verified | `web/e2e/sessions.spec.ts` | High | No |
| ALNS-DEV-007 | CI Test, Lint, and Format Gates | testing, operations | Verified | `.github/workflows/*` | Medium | No |
| ALNS-DEV-008 | User Factories and Deterministic Seeders | testing, data | Verified | factory/seeders | Low | No |
| ALNS-DEV-009 | Inspire Console Command | developer-experience | Verified | `routes/console.php` | Low | No |
| ALNS-UI-016 | External Learning and Repository Navigation | ui, integration | Verified | welcome/shell links | Low | No |
| ALNS-ASSET-001 | Branding and Static Asset Set | ui, assets | Verified | inline/public assets | Low | No |

## Feature Records

### ALNS-PLATFORM-001 — Decoupled Laravel–Next Runtime

- **Evidence status / classification / purpose:** Verified; product, integration, operations; separates a Laravel auth/data backend from a Next browser/server-rendered frontend.
- **Entry/workflow/implementation:** Browser reaches Next; route proxy and server helpers reach Laravel; nginx/PHP-FPM/MySQL/worker/scheduler form the Compose backend.
- **State/security/config/dependencies:** Cookie/CSRF and user state cross one governed HTTP seam; depends on Next, `next-sanctum`, Laravel, Fortify, Sanctum, configured origins.
- **Tests/evidence:** Full-stack E2E harness; [E005](EVIDENCE-MANIFEST.md#e005), [E028](EVIDENCE-MANIFEST.md#e028), [E044](EVIDENCE-MANIFEST.md#e044), [E049](EVIDENCE-MANIFEST.md#e049).
- **Reuse:** isolation Low; complexity High. **Unknowns/contradictions:** vendor route internals absent; see U-001. **License:** MIT repository plus direct dependency notices.

### ALNS-WEB-001 — Auth-Aware Welcome Page

- **Evidence status / classification / purpose:** Verified; product, UI; presents starter guidance and auth-dependent navigation.
- **Entry/workflow/implementation:** `/` calls request-cached `getUser`; shows Dashboard or Login/Register; contains learning and deploy links plus inline illustration.
- **State/security/config/dependencies:** Read-only user state; no guard; depends on Next Link and auth helper.
- **Tests/evidence:** No direct test; [E040](EVIDENCE-MANIFEST.md#e040).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** none. **Contradictions:** residual Blade welcome is not this active page.

### ALNS-API-001 — Status and Health Endpoints

- **Evidence status / classification / purpose:** Verified; API, operations; exposes JSON application status and framework health.
- **Entry/workflow/implementation:** Laravel `GET /` returns status/name; bootstrap registers `/up`.
- **State/security/config/dependencies:** Public; configured app name; framework health semantics are package-owned.
- **Tests/evidence:** Root 200 smoke test only; [E005](EVIDENCE-MANIFEST.md#e005), [E007](EVIDENCE-MANIFEST.md#e007), [E048](EVIDENCE-MANIFEST.md#e048).
- **Reuse:** isolation High; complexity Low. **Unknowns:** `/up` response body/readiness depth not runtime-verified.

### ALNS-AUTH-001 — Same-Origin Sanctum Proxy

- **Evidence status / classification / purpose:** Verified; authentication, security, integration; keeps browser API traffic on the Next origin.
- **Entry/workflow/implementation:** Catch-all route supports five methods and forwards to server-only `SANCTUM_BASE_URL`; Sanctum stateful middleware renders JSON for API/JSON requests.
- **State/security/config/dependencies:** Cookie mode, CSRF, forwarded Origin/Referer; upstream is not client-selected; depends on `next-sanctum`, Sanctum, env allowlist.
- **Tests/evidence:** Exercised indirectly by all E2E; [E005](EVIDENCE-MANIFEST.md#e005), [E026](EVIDENCE-MANIFEST.md#e026), [E028](EVIDENCE-MANIFEST.md#e028), [E029](EVIDENCE-MANIFEST.md#e029).
- **Reuse:** isolation Low; complexity High. **Unknowns:** exact package retry/header logic is external.

### ALNS-AUTH-002 — Request-Cached SSR Auth Hydration

- **Evidence status / classification / purpose:** Verified; authentication, data; supplies one server-authoritative user read per React render request.
- **Entry/workflow/implementation:** React `cache(baseGetUser)` feeds route-group layouts and initializes `SanctumProvider`.
- **State/security/config/dependencies:** Auth provider is scoped to app/auth groups; public pages avoid it; depends on React RSC and `next-sanctum/server`.
- **Tests/evidence:** Indirect E2E; [E030](EVIDENCE-MANIFEST.md#e030).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** package transport internals.

### ALNS-AUTH-003 — Protected Routes and Safe Return Redirects

- **Evidence status / classification / purpose:** Verified; authentication, security; guards protected pages and preserves valid local return routes.
- **Entry/workflow/implementation:** `proxy.ts` performs optimistic cookie routing; app layout authoritatively checks user; login rejects protocol-relative/external targets.
- **State/security/config/dependencies:** Protects dashboard/settings; redirects invalid sessions with expiry flag; depends on stable cookie name and server user lookup.
- **Tests/evidence:** Login and expiry E2E; [E027](EVIDENCE-MANIFEST.md#e027), [E030](EVIDENCE-MANIFEST.md#e030), [E031](EVIDENCE-MANIFEST.md#e031), [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** matcher behavior outside listed exclusions not separately tested.

### ALNS-AUTH-004 — User Registration

- **Evidence status / classification / purpose:** Verified; authentication, product; creates a user account.
- **Entry/workflow/implementation:** `/register` form → `next-sanctum` → Fortify `CreateNewUser`; validates name, email, uniqueness, password confirmation; hashes password.
- **State/security/config/dependencies:** Writes `users`; rate limit not explicitly configured for registration; depends on Fortify/User/DB.
- **Tests/evidence:** Registration E2E; [E011](EVIDENCE-MANIFEST.md#e011), [E032](EVIDENCE-MANIFEST.md#e032), [E050](EVIDENCE-MANIFEST.md#e050).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** package route details. **Contradictions:** verification is not enforced after registration.

### ALNS-AUTH-005 — Email/Password Login with Remember Me

- **Evidence status / classification / purpose:** Verified; authentication, product; establishes a session with optional remembrance.
- **Entry/workflow/implementation:** `/login` submits email/password/remember; success routes to local target or TOTP challenge.
- **State/security/config/dependencies:** Login limit five/minute per normalized email+IP; depends on Fortify/Sanctum/session.
- **Tests/evidence:** Valid and invalid login E2E; [E009](EVIDENCE-MANIFEST.md#e009), [E031](EVIDENCE-MANIFEST.md#e031), [E050](EVIDENCE-MANIFEST.md#e050).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** remember-cookie duration follows external defaults.

### ALNS-AUTH-006 — User Logout

- **Evidence status / classification / purpose:** Verified; authentication, product; ends the current authenticated experience.
- **Entry/workflow/implementation:** User menu and verification page call client logout, route to login, refresh, and show success/error feedback.
- **State/security/config/dependencies:** Clears client/server auth through `next-sanctum`; depends on provider and session endpoint.
- **Tests/evidence:** Logout E2E; [E031](EVIDENCE-MANIFEST.md#e031), [E034](EVIDENCE-MANIFEST.md#e034), [E041](EVIDENCE-MANIFEST.md#e041), [E050](EVIDENCE-MANIFEST.md#e050).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** exact server invalidation implementation is package-owned.

### ALNS-AUTH-007 — Expired or Revoked Session Recovery

- **Evidence status / classification / purpose:** Verified; authentication, security, interaction; prevents stale protected UI after session loss.
- **Entry/workflow/implementation:** 401 redirect config, app-layout invalid-session redirect, 10-second-throttled focus/visibility refresh, one-time login toast and URL cleanup.
- **State/security/config/dependencies:** Reads auth state and document visibility; hard redirects on missing refreshed user.
- **Tests/evidence:** Expiry toast E2E; [E029](EVIDENCE-MANIFEST.md#e029), [E030](EVIDENCE-MANIFEST.md#e030), [E037](EVIDENCE-MANIFEST.md#e037), [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** focus revalidation itself lacks E2E.

### ALNS-AUTH-008 — Forgot-Password Request

- **Evidence status / classification / purpose:** Verified; authentication, notification; requests a reset link without disclosing account existence in success copy.
- **Entry/workflow/implementation:** `/forgot-password` email form; custom reset notification URL targets SPA.
- **State/security/config/dependencies:** Password broker throttles token generation 60 seconds; mailer required; depends on Fortify/mail.
- **Tests/evidence:** No direct test; [E009](EVIDENCE-MANIFEST.md#e009), [E033](EVIDENCE-MANIFEST.md#e033), [E056](EVIDENCE-MANIFEST.md#e056).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** live delivery.

### ALNS-AUTH-009 — Password Reset

- **Evidence status / classification / purpose:** Verified; authentication, security; consumes reset token/email and writes a new confirmed password.
- **Entry/workflow/implementation:** `/reset-password` reads query, keeps email read-only, submits token/email/password/confirmation, returns to login.
- **State/security/config/dependencies:** Reset token table; default expiry 60 minutes; hashes password.
- **Tests/evidence:** No direct test; [E012](EVIDENCE-MANIFEST.md#e012), [E019](EVIDENCE-MANIFEST.md#e019), [E033](EVIDENCE-MANIFEST.md#e033), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** invalid/expired token UI branch is generic.

### ALNS-AUTH-010 — Password Confirmation

- **Evidence status / classification / purpose:** Verified; authentication, security; reauthenticates before sensitive settings.
- **Entry/workflow/implementation:** Reusable `RequirePassword` checks confirmation status and gates children in a dialog; standalone `/confirm-password` also exists.
- **State/security/config/dependencies:** Default confirmation timeout 10,800 seconds; Fortify management middleware requires confirmation.
- **Tests/evidence:** Security E2E flows all confirm password; [E008](EVIDENCE-MANIFEST.md#e008), [E033](EVIDENCE-MANIFEST.md#e033), [E038](EVIDENCE-MANIFEST.md#e038), [E051](EVIDENCE-MANIFEST.md#e051) through [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation Medium; complexity Medium. **Contradictions:** deletion uses request validation, not this window.

### ALNS-AUTH-011 — Password Update

- **Evidence status / classification / purpose:** Verified; authentication, security; changes an authenticated user's password.
- **Entry/workflow/implementation:** Security form sends current/new/confirmation; action validates current password and hashes new one; UI resets/focuses errors.
- **State/security/config/dependencies:** Writes `users.password`; inside password-confirmed security page.
- **Tests/evidence:** No direct update E2E; [E013](EVIDENCE-MANIFEST.md#e013), [E038](EVIDENCE-MANIFEST.md#e038).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** no session/token revocation after change is evidenced.

### ALNS-AUTH-012 — Profile Update

- **Evidence status / classification / purpose:** Verified; product, authentication; changes name/email.
- **Entry/workflow/implementation:** Profile form hydrates from current user, submits through auth client, maps validation errors, shows saved/toast state.
- **State/security/config/dependencies:** Writes user fields; unique email; reverification branch exists only for a verification-capable model.
- **Tests/evidence:** No direct test; [E014](EVIDENCE-MANIFEST.md#e014), [E038](EVIDENCE-MANIFEST.md#e038).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** avatar field is typed/displayed but not editable/persisted by this source.

### ALNS-AUTH-013 — Dormant Email-Verification Flow

- **Evidence status / classification / purpose:** Verified; authentication, notification, configuration; provides opt-in verification pages, signed callback, resend, and SPA link generation.
- **Entry/workflow/implementation:** `/verify-email` and `/email/verify/[id]/[hash]`; unauthorized callback returns through safe login; invalid link offers resend.
- **State/security/config/dependencies:** Fortify feature enabled, but frontend flag false and `User` does not implement `MustVerifyEmail`.
- **Tests/evidence:** No E2E; [E008](EVIDENCE-MANIFEST.md#e008), [E009](EVIDENCE-MANIFEST.md#e009), [E010](EVIDENCE-MANIFEST.md#e010), [E034](EVIDENCE-MANIFEST.md#e034).
- **Reuse:** isolation Low; complexity High. **Contradictions:** shipped but inactive by default (C-004).

### ALNS-AUTH-014 — TOTP Enrollment and Disable

- **Evidence status / classification / purpose:** Verified; authentication, security; enrolls a TOTP authenticator with required confirmation and permits disable.
- **Entry/workflow/implementation:** Security UI enables, concurrently fetches QR/manual secret, confirms six-digit code, refreshes user; disable clears client setup data.
- **State/security/config/dependencies:** User TOTP fields, password-confirmed management, five/minute challenge limit; depends on Fortify and OTP input.
- **Tests/evidence:** Enrollment E2E; [E008](EVIDENCE-MANIFEST.md#e008), [E020](EVIDENCE-MANIFEST.md#e020), [E035](EVIDENCE-MANIFEST.md#e035), [E051](EVIDENCE-MANIFEST.md#e051).
- **Reuse:** isolation Low; complexity High. **Unknowns:** QR SVG trust boundary U-006.

### ALNS-AUTH-015 — TOTP or Recovery-Code Login Challenge

- **Evidence status / classification / purpose:** Verified; authentication, security; completes password login for a 2FA-enabled user.
- **Entry/workflow/implementation:** `/two-factor-challenge` toggles six-digit OTP and recovery-code modes; success routes to dashboard.
- **State/security/config/dependencies:** Uses pending Fortify login session; rate-limited by login ID.
- **Tests/evidence:** TOTP mode E2E; [E009](EVIDENCE-MANIFEST.md#e009), [E031](EVIDENCE-MANIFEST.md#e031), [E035](EVIDENCE-MANIFEST.md#e035), [E051](EVIDENCE-MANIFEST.md#e051).
- **Reuse:** isolation Low; complexity High. **Unknowns:** recovery-code challenge path lacks E2E.

### ALNS-AUTH-016 — Two-Factor Recovery-Code Management

- **Evidence status / classification / purpose:** Verified; authentication, security; reveals/hides and regenerates single-use recovery codes.
- **Entry/workflow/implementation:** Security card fetches codes, scrolls them into view, renders loading/error/list states, regenerates and refetches.
- **State/security/config/dependencies:** Codes are hidden in model serialization; password-confirmed security area; depends on Fortify.
- **Tests/evidence:** No management E2E; [E010](EVIDENCE-MANIFEST.md#e010), [E020](EVIDENCE-MANIFEST.md#e020), [E035](EVIDENCE-MANIFEST.md#e035).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** copy/download support absent.

### ALNS-AUTH-017 — Passkey Passwordless Sign-In

- **Evidence status / classification / purpose:** Verified; authentication, security; logs in with WebAuthn without a password.
- **Entry/workflow/implementation:** Login detects support, invokes passkey ceremony, silently ignores user cancellation, reports other errors, routes to target.
- **State/security/config/dependencies:** RP/origin allowlist and rate limit; depends on Fortify, Laravel/client passkey packages, WebAuthn.
- **Tests/evidence:** Virtual-authenticator E2E; [E008](EVIDENCE-MANIFEST.md#e008), [E036](EVIDENCE-MANIFEST.md#e036), [E052](EVIDENCE-MANIFEST.md#e052).
- **Reuse:** isolation Low; complexity High. **Unknowns:** non-Chromium and real-hardware coverage.

### ALNS-AUTH-018 — Passkey Registration, Listing, and Removal

- **Evidence status / classification / purpose:** Verified; authentication, security; manages a user's passkeys.
- **Entry/workflow/implementation:** Security list with loading/empty rows; device-name default; browser ceremony; safe list API; destructive remove confirmation.
- **State/security/config/dependencies:** `passkeys` table with user cascade; list exposes metadata only; management password-confirmed.
- **Tests/evidence:** Registration/list E2E; removal not E2E; [E016](EVIDENCE-MANIFEST.md#e016), [E022](EVIDENCE-MANIFEST.md#e022), [E036](EVIDENCE-MANIFEST.md#e036), [E052](EVIDENCE-MANIFEST.md#e052).
- **Reuse:** isolation Low; complexity High. **Unknowns:** exact package create/delete routes.

### ALNS-AUTH-019 — Passkey Management Discovery

- **Evidence status / classification / purpose:** Verified; integration, authentication; advertises passkey enrollment and management location.
- **Entry/workflow/implementation:** Public well-known GET builds absolute same-origin links to security settings.
- **State/security/config/dependencies:** No state; depends on Next request origin.
- **Tests/evidence:** No direct test; [E036](EVIDENCE-MANIFEST.md#e036).
- **Reuse:** isolation High; complexity Low. **Unknowns:** password-manager interoperability not runtime-tested.

### ALNS-AUTH-020 — Current Authenticated User Projection

- **Evidence status / classification / purpose:** Verified; API, authentication; returns the request's authenticated user for SSR/client hydration.
- **Entry/workflow/implementation:** `GET /api/user` → `UserController::show`.
- **State/security/config/dependencies:** `auth:sanctum`; sensitive fields hidden by model; response otherwise directly serializes model.
- **Tests/evidence:** Indirect all auth E2E; [E006](EVIDENCE-MANIFEST.md#e006), [E010](EVIDENCE-MANIFEST.md#e010), [E018](EVIDENCE-MANIFEST.md#e018).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** unversioned response compatibility.

### ALNS-AUTH-021 — Password-Confirmed Account Deletion

- **Evidence status / classification / purpose:** Verified; product, security; permanently deletes the authenticated account.
- **Entry/workflow/implementation:** Profile destructive dialog submits password; controller validates, deletes tokens, logs out, invalidates session, rotates CSRF, deletes user.
- **State/security/config/dependencies:** User-owned state; passkeys cascade; no audit/undo.
- **Tests/evidence:** No E2E; [E015](EVIDENCE-MANIFEST.md#e015), [E022](EVIDENCE-MANIFEST.md#e022), [E038](EVIDENCE-MANIFEST.md#e038).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** “all resources” scope U-010. **Contradictions:** request confirmation, not Fortify window (C-002).

### ALNS-AUTH-022 — Personal Access Token Data Substrate

- **Evidence status / classification / purpose:** Verified; authentication, API, data; supplies Sanctum token traits/table/abilities/expiry fields.
- **Entry/workflow/implementation:** `HasApiTokens` model trait and `personal_access_tokens` migration; API comments acknowledge bearer clients.
- **State/security/config/dependencies:** Polymorphic token storage; deletion revokes user's tokens; depends on Sanctum.
- **Tests/evidence:** No token E2E/API test; [E006](EVIDENCE-MANIFEST.md#e006), [E010](EVIDENCE-MANIFEST.md#e010), [E015](EVIDENCE-MANIFEST.md#e015), [E021](EVIDENCE-MANIFEST.md#e021).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** issuance/list/revoke surface U-004.

### ALNS-SESSION-001 — Browser Session Inventory

- **Evidence status / classification / purpose:** Verified; security, data, UI; lists the user's active browser/device sessions.
- **Entry/workflow/implementation:** API asserts database driver, queries owned rows newest-first, marks current, formats ISO time; UI shows device label/IP/activity.
- **State/security/config/dependencies:** Database `sessions`; `auth:sanctum`; depends on `next-sanctum` DeviceSession contract.
- **Tests/evidence:** Multi-context E2E; [E017](EVIDENCE-MANIFEST.md#e017), [E019](EVIDENCE-MANIFEST.md#e019), [E037](EVIDENCE-MANIFEST.md#e037), [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation Low; complexity High. **Contradictions:** DB driver is hard requirement for this feature, not proven for all SPA auth (C-001).

### ALNS-SESSION-002 — Single Other-Session Revocation

- **Evidence status / classification / purpose:** Verified; security, interaction; logs out one other owned session.
- **Entry/workflow/implementation:** Row confirmation → client session API → scoped delete; API rejects current-session ID.
- **State/security/config/dependencies:** Filters `user_id` and ID; current session excluded in UI/API.
- **Tests/evidence:** No direct E2E; [E017](EVIDENCE-MANIFEST.md#e017), [E037](EVIDENCE-MANIFEST.md#e037).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** deleting nonexistent owned ID also returns 204.

### ALNS-SESSION-003 — Bulk Other-Session Revocation

- **Evidence status / classification / purpose:** Verified; security, bulk operation; logs out all sessions except the current request.
- **Entry/workflow/implementation:** Password-confirmed dialog → `logoutOtherDevices` plus owned-row delete excluding current ID; list refetch.
- **State/security/config/dependencies:** Database sessions and current-password validation.
- **Tests/evidence:** Full E2E; [E017](EVIDENCE-MANIFEST.md#e017), [E037](EVIDENCE-MANIFEST.md#e037), [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation Low; complexity High. **Unknowns:** stale-tab revalidation separately untested.

### ALNS-UI-001 — Placeholder Dashboard

- **Evidence status / classification / purpose:** Verified; product, UI; supplies protected shell content scaffolding.
- **Entry/workflow/implementation:** `/dashboard` renders three aspect cards and one large placeholder using SVG pattern.
- **State/security/config/dependencies:** Protected by app group; no data.
- **Tests/evidence:** Auth E2E lands here; [E040](EVIDENCE-MANIFEST.md#e040), [E050](EVIDENCE-MANIFEST.md#e050).
- **Reuse:** isolation High; complexity Low. **Unknowns:** no actual dashboard behavior.

### ALNS-UI-002 — Responsive Collapsible Sidebar Shell

- **Evidence status / classification / purpose:** Verified; UI, interaction, personalization; provides responsive authenticated navigation.
- **Entry/workflow/implementation:** Active app layout uses inset icon-collapsible sidebar, mobile sheet, tooltip labels, trigger/rail, `Ctrl/Cmd+B`.
- **State/security/config/dependencies:** Seven-day `sidebar_state` cookie; mobile media query; depends on Radix/Tailwind.
- **Tests/evidence:** Indirect E2E through user menu; [E041](EVIDENCE-MANIFEST.md#e041), [E042](EVIDENCE-MANIFEST.md#e042).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** cookie consent/policy not addressed.

### ALNS-UI-003 — Alternative Header and Auth Layouts

- **Evidence status / classification / purpose:** Verified; UI, reusable internal; retains header-based app shell and card/split auth layout options.
- **Entry/workflow/implementation:** Components exist; active wrappers choose sidebar and simple auth layouts.
- **State/security/config/dependencies:** Same nav/user dependencies as active shell; no active route selects alternatives.
- **Tests/evidence:** No tests; [E041](EVIDENCE-MANIFEST.md#e041).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** dormant layouts may drift. **Contradictions:** implementation exists without active entry point.

### ALNS-UI-004 — Settings Navigation

- **Evidence status / classification / purpose:** Verified; UI, navigation; groups Profile, Security, and Appearance.
- **Entry/workflow/implementation:** Local aside with active-path styling, mobile separator, accessible nav label.
- **State/security/config/dependencies:** Uses Next pathname; protected by parent app group.
- **Tests/evidence:** Indirect security E2E; [E041](EVIDENCE-MANIFEST.md#e041).
- **Reuse:** isolation High; complexity Low. **Unknowns:** none.

### ALNS-UI-005 — User Menu, Avatar, and Initials

- **Evidence status / classification / purpose:** Verified; UI, interaction; displays identity and exposes settings/logout.
- **Entry/workflow/implementation:** Responsive dropdown position, avatar image/fallback, Unicode-aware first/last initials, email in menu.
- **State/security/config/dependencies:** Current user from provider; depends on sidebar, Radix dropdown, Next router.
- **Tests/evidence:** Logout E2E; [E041](EVIDENCE-MANIFEST.md#e041), [E043](EVIDENCE-MANIFEST.md#e043), [E050](EVIDENCE-MANIFEST.md#e050).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** avatar source is typed but not managed.

### ALNS-UI-006 — Breadcrumb Navigation

- **Evidence status / classification / purpose:** Verified; UI, navigation, accessibility; renders linked ancestors and current page.
- **Entry/workflow/implementation:** App headers receive breadcrumb arrays; semantic `nav`, list, separators, `aria-current`.
- **State/security/config/dependencies:** Stateless; Next Link and primitive suite.
- **Tests/evidence:** No direct test; [E041](EVIDENCE-MANIFEST.md#e041), [E042](EVIDENCE-MANIFEST.md#e042).
- **Reuse:** isolation High; complexity Low. **Unknowns:** most current pages pass only one crumb.

### ALNS-UI-007 — Light, Dark, and System Appearance

- **Evidence status / classification / purpose:** Verified; UI, personalization; lets users choose visual theme.
- **Entry/workflow/implementation:** Global `next-themes` provider and appearance tabs; active highlight waits for hydration.
- **State/security/config/dependencies:** Client-persisted theme; semantic CSS tokens; system preference.
- **Tests/evidence:** No visual test; [E030](EVIDENCE-MANIFEST.md#e030), [E039](EVIDENCE-MANIFEST.md#e039).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** storage mechanism follows package defaults.

### ALNS-UI-008 — Themed Toast Feedback

- **Evidence status / classification / purpose:** Verified; UI, notification; reports auth/settings success and failures.
- **Entry/workflow/implementation:** Global Sonner toaster inherits resolved theme; feature actions call success/error.
- **State/security/config/dependencies:** In-memory transient client state; depends on Sonner/next-themes.
- **Tests/evidence:** Expired-session toast E2E; [E030](EVIDENCE-MANIFEST.md#e030), [E037](EVIDENCE-MANIFEST.md#e037), [E042](EVIDENCE-MANIFEST.md#e042), [E053](EVIDENCE-MANIFEST.md#e053).
- **Reuse:** isolation High; complexity Low. **Unknowns:** live-region behavior delegated to Sonner.

### ALNS-UI-009 — Password Reveal Control

- **Evidence status / classification / purpose:** Verified; UI, interaction, accessibility; toggles password text visibility.
- **Entry/workflow/implementation:** Shared wrapper changes input type and icon with accessible label.
- **State/security/config/dependencies:** Local boolean state; reveal button excluded from tab order but has focus-visible styles.
- **Tests/evidence:** No direct test; [E038](EVIDENCE-MANIFEST.md#e038).
- **Reuse:** isolation High; complexity Low. **Unknowns:** keyboard discoverability tradeoff.

### ALNS-UI-010 — Loading, Empty, Validation, and Error States

- **Evidence status / classification / purpose:** Verified; UI, interaction; supplies resilient feedback across data/forms.
- **Entry/workflow/implementation:** Spinners, skeletons, empty passkey state, field errors, aggregate alert, pending disabled controls, success markers.
- **State/security/config/dependencies:** Local state and API hook state; no centralized error boundary.
- **Tests/evidence:** Auth invalid credential E2E; code evidence [E031](EVIDENCE-MANIFEST.md#e031) through [E042](EVIDENCE-MANIFEST.md#e042).
- **Reuse:** isolation High; complexity Low. **Unknowns:** sessions list has no explicit empty copy.

### ALNS-UI-011 — Overlay and Menu Primitive Suite

- **Evidence status / classification / purpose:** Verified; UI, reusable internal, accessibility; provides alert dialogs, dialogs, dropdown menus, sheets, and tooltips.
- **Entry/workflow/implementation:** Radix-backed portals/overlays/triggers/content, destructive actions, submenus, checkbox/radio menu items, sheet sides.
- **State/security/config/dependencies:** Component-controlled/uncontrolled state; Radix/Tailwind/Button.
- **Tests/evidence:** Used throughout E2E; [E042](EVIDENCE-MANIFEST.md#e042).
- **Reuse:** isolation High; complexity Medium. **Unknowns:** upstream accessibility guarantees not independently audited.

### ALNS-UI-012 — Form and Control Primitive Suite

- **Evidence status / classification / purpose:** Verified; UI, reusable internal, accessibility; standardizes buttons, checkbox, inputs, labels, OTP, select, toggles.
- **Entry/workflow/implementation:** Variants/sizes, focus/invalid/disabled states, scrollable select, OTP slots, toggle groups.
- **State/security/config/dependencies:** Radix, `input-otp`, CVA, Tailwind.
- **Tests/evidence:** Auth forms and TOTP E2E use subset; [E042](EVIDENCE-MANIFEST.md#e042), [E050](EVIDENCE-MANIFEST.md#e050), [E051](EVIDENCE-MANIFEST.md#e051).
- **Reuse:** isolation High; complexity Medium. **Unknowns:** select/toggle components lack app usage/tests.

### ALNS-UI-013 — Navigation and Display Primitive Suite

- **Evidence status / classification / purpose:** Verified; UI, reusable internal, accessibility; standardizes breadcrumb, collapsible, navigation menu, sidebar, alerts, avatars, badges, cards, separators, skeletons, spinner, toaster.
- **Entry/workflow/implementation:** Semantic data slots and responsive variants; reusable layout/content composition.
- **State/security/config/dependencies:** Radix/Tailwind/Lucide/CVA; sidebar cookie/mobile state.
- **Tests/evidence:** Used across active screens; [E042](EVIDENCE-MANIFEST.md#e042).
- **Reuse:** isolation High; complexity Medium. **Unknowns:** several primitives are unused by product pages.

### ALNS-UI-014 — Presentation Utility Hooks and Formatters

- **Evidence status / classification / purpose:** Verified; UI, reusable internal; provides clipboard, Unicode initials, mobile detection/navigation cleanup, English relative time, UA labels/device names, class merging.
- **Entry/workflow/implementation:** Hooks/libs consumed by 2FA, sessions, passkeys, shell, and primitives.
- **State/security/config/dependencies:** Browser clipboard, matchMedia, navigator UA, Intl; graceful empty/failure paths.
- **Tests/evidence:** No unit tests; [E043](EVIDENCE-MANIFEST.md#e043).
- **Reuse:** isolation High; complexity Low. **Unknowns:** UA matching is deliberately coarse.

### ALNS-UI-015 — Code-Level Accessibility Baseline

- **Evidence status / classification / purpose:** Verified; accessibility, UI; provides semantic names, roles, state attributes, focus treatment, and keyboard-operable primitives.
- **Entry/workflow/implementation:** Labels/sr-only titles, alert/status roles, ARIA state, focus recovery, Radix dialogs/menus, sidebar shortcut.
- **State/security/config/dependencies:** Cross-cutting; depends on component use and Radix.
- **Tests/evidence:** No accessibility suite; [E035](EVIDENCE-MANIFEST.md#e035) through [E043](EVIDENCE-MANIFEST.md#e043).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** WCAG conformance U-008.

### ALNS-I18N-001 — English-Only Locale Baseline

- **Evidence status / classification / purpose:** Verified; localization, configuration; establishes current English-only language behavior.
- **Entry/workflow/implementation:** Root `lang="en"`, Latin font subset, English strings/relative time; Laravel locale env defaults English.
- **State/security/config/dependencies:** No translation resources; shadcn RTL false.
- **Tests/evidence:** No locale/RTL tests; [E025](EVIDENCE-MANIFEST.md#e025), [E030](EVIDENCE-MANIFEST.md#e030), [E043](EVIDENCE-MANIFEST.md#e043), [E060](EVIDENCE-MANIFEST.md#e060).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** none; limitation is explicit.

### ALNS-DATA-001 — User and Credential Persistence

- **Evidence status / classification / purpose:** Verified; data, authentication; stores identity, passwords, verification, TOTP, passkeys, reset tokens, and tokens.
- **Entry/workflow/implementation:** User model plus six migrations and Fortify actions.
- **State/security/config/dependencies:** Unique email, hashed password, hidden secrets, passkey FK cascade; Laravel Eloquent/Fortify/Sanctum.
- **Tests/evidence:** Factory/seeders; [E010](EVIDENCE-MANIFEST.md#e010) through [E024](EVIDENCE-MANIFEST.md#e024), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Low; complexity High. **Unknowns:** package encryption details for TOTP.

### ALNS-DATA-002 — Database Session Persistence

- **Evidence status / classification / purpose:** Verified; data, security; persists web sessions with device metadata.
- **Entry/workflow/implementation:** `sessions` migration/config; auth guard and session-management API consume it.
- **State/security/config/dependencies:** HTTP-only cookie, SameSite Lax, JSON serialization, 120-minute default; database driver default.
- **Tests/evidence:** Session E2E; [E017](EVIDENCE-MANIFEST.md#e017), [E019](EVIDENCE-MANIFEST.md#e019), [E025](EVIDENCE-MANIFEST.md#e025), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation Medium; complexity Medium. **Contradictions:** C-001.

### ALNS-DATA-003 — Database Cache and Lock Substrate

- **Evidence status / classification / purpose:** Verified; data, operations; stores cached values and distributed locks.
- **Entry/workflow/implementation:** Cache/lock migrations and database default; config also defines alternatives/failover.
- **State/security/config/dependencies:** Expiration indexes; class unserialization disabled.
- **Tests/evidence:** No application cache test; [E023](EVIDENCE-MANIFEST.md#e023), [E025](EVIDENCE-MANIFEST.md#e025), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation High; complexity Low. **Unknowns:** no app-level cache use.

### ALNS-DATA-004 — Queue, Batch, and Failure Persistence

- **Evidence status / classification / purpose:** Verified; data, automation; supplies database-backed queue infrastructure.
- **Entry/workflow/implementation:** Jobs/batches/failures migrations; database default; worker processes.
- **State/security/config/dependencies:** Retry/failure config and indexes; no repository-defined job class.
- **Tests/evidence:** No queue test; [E024](EVIDENCE-MANIFEST.md#e024), [E044](EVIDENCE-MANIFEST.md#e044), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation High; complexity Medium. **Contradictions:** queued auth mail not proven (C-003).

### ALNS-DATA-005 — Configurable Relational Database Backends

- **Evidence status / classification / purpose:** Verified; data, configuration; provides connection definitions for SQLite, MySQL, MariaDB, PostgreSQL, and SQL Server.
- **Entry/workflow/implementation:** `DB_CONNECTION` selects default; local/test use SQLite; Compose uses MySQL.
- **State/security/config/dependencies:** Environment-driven URLs/credentials/SSL options; framework DB layer.
- **Tests/evidence:** SQLite CI and MySQL topology only; [E025](EVIDENCE-MANIFEST.md#e025), [E044](EVIDENCE-MANIFEST.md#e044), [E047](EVIDENCE-MANIFEST.md#e047), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation High; complexity Medium. **Unknowns:** U-007.

### ALNS-DATA-006 — Configurable Filesystem Backends

- **Evidence status / classification / purpose:** Verified; data, configuration; supplies private local, public local, and S3 disk definitions.
- **Entry/workflow/implementation:** `FILESYSTEM_DISK` selects default; public link path configured.
- **State/security/config/dependencies:** Local private root default; AWS env for S3.
- **Tests/evidence:** No application file workflow; [E025](EVIDENCE-MANIFEST.md#e025), [E055](EVIDENCE-MANIFEST.md#e055).
- **Reuse:** isolation High; complexity Low. **Unknowns:** storage integration unused.

### ALNS-INTEGRATION-001 — Auth Mail Transport and SPA Links

- **Evidence status / classification / purpose:** Verified; integration, notification; routes password-reset and verification links to the decoupled frontend.
- **Entry/workflow/implementation:** Provider customizes notification URLs; mail config supports SMTP/log/sendmail/array/failover and service credentials.
- **State/security/config/dependencies:** Temporary signed verification link; reset token/email query; log mailer default.
- **Tests/evidence:** No delivery E2E; [E009](EVIDENCE-MANIFEST.md#e009), [E025](EVIDENCE-MANIFEST.md#e025), [E056](EVIDENCE-MANIFEST.md#e056).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** U-003; verification inactive by default.

### ALNS-OPS-001 — Local Setup and Three-Process Development

- **Evidence status / classification / purpose:** Verified; developer experience, operations; initializes and runs the full local stack.
- **Entry/workflow/implementation:** `composer run setup` copies envs, generates key, creates SQLite, migrates, installs web; `composer run dev` starts API, queue listener, Next concurrently.
- **State/security/config/dependencies:** Writes local env/database during use; depends on Composer, PHP, pnpm, concurrently.
- **Tests/evidence:** Script definitions only; [E003](EVIDENCE-MANIFEST.md#e003), [E046](EVIDENCE-MANIFEST.md#e046).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** not executed in discovery.

### ALNS-OPS-002 — One-Command Compose Topology

- **Evidence status / classification / purpose:** Verified; deployment, operations; deploys frontend, API, PHP, worker, scheduler, and MySQL.
- **Entry/workflow/implementation:** Compose publishes only frontend, uses internal service DNS, health dependency, restart policies, DB/app-key volumes.
- **State/security/config/dependencies:** `.env.docker`; MySQL secrets; internal API/data; Docker images.
- **Tests/evidence:** Static config only; [E025](EVIDENCE-MANIFEST.md#e025), [E044](EVIDENCE-MANIFEST.md#e044), [E045](EVIDENCE-MANIFEST.md#e045).
- **Reuse:** isolation Medium; complexity High. **Unknowns:** no runtime deployment evidence; image SBOM.

### ALNS-OPS-003 — Shared App-Key, Migration, and Cache Bootstrap

- **Evidence status / classification / purpose:** Verified; deployment, security; initializes shared Laravel secret and production state before serving.
- **Entry/workflow/implementation:** PHP-FPM generates key once in volume; all PHP processes wait for it/DB; API migrates and caches config/routes/events.
- **State/security/config/dependencies:** Shared secret volume, DB socket check; only PHP-FPM mutates schema/caches.
- **Tests/evidence:** Static shell/Docker evidence; [E045](EVIDENCE-MANIFEST.md#e045).
- **Reuse:** isolation Medium; complexity High. **Unknowns:** concurrent first-boot race/error recovery not tested.

### ALNS-OPS-004 — Standalone Non-Root Next Container

- **Evidence status / classification / purpose:** Verified; deployment, operations; builds a reduced standalone Next runtime.
- **Entry/workflow/implementation:** Multi-stage Node 22 Alpine build, frozen pnpm install, standalone/static/public copy, non-root `nextjs`, telemetry disabled.
- **State/security/config/dependencies:** Build-time relative proxy URL; runtime upstream injected; Next standalone output.
- **Tests/evidence:** CI builds before E2E; [E045](EVIDENCE-MANIFEST.md#e045), [E047](EVIDENCE-MANIFEST.md#e047), [E059](EVIDENCE-MANIFEST.md#e059).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** container image scan absent.

### ALNS-OPS-005 — Queue Worker and Scheduler Processes

- **Evidence status / classification / purpose:** Verified; automation, operations; runs queue and scheduler daemons in development/Compose.
- **Entry/workflow/implementation:** `queue:listen` locally; `queue:work` and `schedule:work` in Compose.
- **State/security/config/dependencies:** Database queue default; shared key/database; no app jobs/schedules.
- **Tests/evidence:** No process test; [E044](EVIDENCE-MANIFEST.md#e044), [E046](EVIDENCE-MANIFEST.md#e046), [E057](EVIDENCE-MANIFEST.md#e057).
- **Reuse:** isolation High; complexity Medium. **Contradictions:** C-003.

### ALNS-OPS-006 — Logging and Health Instrumentation Baseline

- **Evidence status / classification / purpose:** Verified; operations, configuration; configures framework logging channels/levels and a health endpoint.
- **Entry/workflow/implementation:** Stack/single/daily/Slack/Papertrail/stderr/syslog/errorlog/null/emergency channels; `/up`.
- **State/security/config/dependencies:** Environment-driven levels/credentials; logs default to stack/single; no app metrics/tracing.
- **Tests/evidence:** Root smoke only; [E005](EVIDENCE-MANIFEST.md#e005), [E025](EVIDENCE-MANIFEST.md#e025), [E048](EVIDENCE-MANIFEST.md#e048), [E056](EVIDENCE-MANIFEST.md#e056).
- **Reuse:** isolation High; complexity Medium. **Unknowns:** health depth and structured/correlation behavior.

### ALNS-DEV-001 — Backend Pest/PHPUnit Smoke Harness

- **Evidence status / classification / purpose:** Verified; testing, developer experience; provides unit/feature suites and isolated environment.
- **Entry/workflow/implementation:** `composer test`; in-memory SQLite, array cache/mail/session, sync queue; one root-200 feature and true-is-true unit test.
- **State/security/config/dependencies:** Feature `RefreshDatabase` is commented out.
- **Tests/evidence:** Test source itself; [E048](EVIDENCE-MANIFEST.md#e048).
- **Reuse:** isolation High; complexity Low. **Unknowns:** live result U-002; feature coverage is minimal.

### ALNS-DEV-002 — Full-Stack Playwright Harness

- **Evidence status / classification / purpose:** Verified; testing, developer experience; drives Laravel and Next together in Chromium.
- **Entry/workflow/implementation:** Global seeder, serial one-worker suite, server boot/reuse, retry/trace/report configuration.
- **State/security/config/dependencies:** Mutable test DB, seeded users, ports 8000/3000, Chromium only.
- **Tests/evidence:** [E049](EVIDENCE-MANIFEST.md#e049), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** U-002/U-009.

### ALNS-DEV-003 — Authentication E2E Suite

- **Evidence status / classification / purpose:** Verified; testing, authentication; exercises login, rejection, registration, and logout.
- **Entry/workflow/implementation:** Playwright form interaction and URL/visible-user assertions.
- **State/security/config/dependencies:** Dedicated seeded user plus timestamped registration.
- **Tests/evidence:** [E050](EVIDENCE-MANIFEST.md#e050), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Medium; complexity Low. **Unknowns:** no password reset/profile/delete coverage.

### ALNS-DEV-004 — TOTP E2E Suite

- **Evidence status / classification / purpose:** Verified; testing, security; validates TOTP enrollment and challenged re-login.
- **Entry/workflow/implementation:** Computes SHA1 six-digit 30-second code, waits for fresh window after confirmation, asserts challenge/dashboard.
- **State/security/config/dependencies:** Dedicated 2FA user, wall clock, `otpauth`.
- **Tests/evidence:** [E051](EVIDENCE-MANIFEST.md#e051), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Low; complexity High. **Unknowns:** recovery-code path and disable not covered.

### ALNS-DEV-005 — Passkey E2E Suite

- **Evidence status / classification / purpose:** Verified; testing, security; validates registration/list and passwordless login.
- **Entry/workflow/implementation:** CDP WebAuthn virtual authenticator with resident key/user verification; clears cookies before login.
- **State/security/config/dependencies:** Chromium/CDP, seeded user, passkey reset by seeder.
- **Tests/evidence:** [E052](EVIDENCE-MANIFEST.md#e052), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Low; complexity High. **Unknowns:** remove/unsupported/error paths and real authenticators.

### ALNS-DEV-006 — Browser-Session E2E Suite

- **Evidence status / classification / purpose:** Verified; testing, security; validates session listing, bulk revocation, current-session preservation, expiry toast.
- **Entry/workflow/implementation:** Creates isolated second browser context, closes it after login, confirms/revokes others, asserts URL cleanup.
- **State/security/config/dependencies:** Dedicated session user and database sessions.
- **Tests/evidence:** [E053](EVIDENCE-MANIFEST.md#e053), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation Low; complexity Medium. **Unknowns:** single-session and focus refresh not covered.

### ALNS-DEV-007 — CI Test, Lint, and Format Gates

- **Evidence status / classification / purpose:** Verified; testing, operations; runs backend tests, PHP/frontend style checks, and E2E on pushes/PRs.
- **Entry/workflow/implementation:** PHP 8.4/8.5 Pest matrix; Pint; Node 20/pnpm 10 ESLint/Prettier; Chromium E2E and report upload.
- **State/security/config/dependencies:** Read-only GitHub contents permission on test/lint; E2E job has default workflow permissions.
- **Tests/evidence:** Workflow definitions; [E047](EVIDENCE-MANIFEST.md#e047).
- **Reuse:** isolation Medium; complexity Medium. **Unknowns:** current remote run status not queried.

### ALNS-DEV-008 — User Factories and Deterministic Seeders

- **Evidence status / classification / purpose:** Verified; testing, data; generates users and stable test identities.
- **Entry/workflow/implementation:** Factory verified/unverified states; normal seed creates test user; E2E seed upserts three users and clears passkey/TOTP state.
- **State/security/config/dependencies:** Known development passwords; E2E seeder kept separate from normal setup.
- **Tests/evidence:** Global Playwright setup consumes E2E seeder; [E049](EVIDENCE-MANIFEST.md#e049), [E054](EVIDENCE-MANIFEST.md#e054).
- **Reuse:** isolation High; complexity Low. **Unknowns:** none.

### ALNS-DEV-009 — Inspire Console Command

- **Evidence status / classification / purpose:** Verified; developer experience; prints a framework quote.
- **Entry/workflow/implementation:** `php artisan inspire` closure command.
- **State/security/config/dependencies:** No persistence; Laravel `Inspiring`.
- **Tests/evidence:** No test; [E057](EVIDENCE-MANIFEST.md#e057).
- **Reuse:** isolation High; complexity Low. **Unknowns:** none.

### ALNS-UI-016 — External Learning and Repository Navigation

- **Evidence status / classification / purpose:** Verified; UI, integration; links users to Laravel docs, Laracasts, Laravel Cloud, and starter repository/docs.
- **Entry/workflow/implementation:** Welcome page and shell footer/header external anchors; shell links use new tab and `noopener noreferrer`.
- **State/security/config/dependencies:** No API integration; URLs are hard-coded.
- **Tests/evidence:** No direct test; [E040](EVIDENCE-MANIFEST.md#e040), [E041](EVIDENCE-MANIFEST.md#e041).
- **Reuse:** isolation High; complexity Low. **Unknowns:** links may age; no runtime check.

### ALNS-ASSET-001 — Branding and Static Asset Set

- **Evidence status / classification / purpose:** Verified; UI, assets; supplies favicon, Laravel logo/illustration, placeholder pattern, and stock SVGs.
- **Entry/workflow/implementation:** Inline SVG components/page artwork, public assets, app/public favicons, open `robots.txt`.
- **State/security/config/dependencies:** No state; some create-next-app assets and Blade artwork are unused.
- **Tests/evidence:** No asset test; [E040](EVIDENCE-MANIFEST.md#e040), [E041](EVIDENCE-MANIFEST.md#e041), [E058](EVIDENCE-MANIFEST.md#e058).
- **Reuse:** isolation High; complexity Low. **Unknowns:** trademark/branding obligations noted in license review.

## Coverage Notes

- Feature classes inspected: all classes required by the discovery contract.
- Feature classes not yet inspected: none.
- Known catalog gaps: none at the pinned revision; package internals and live execution are explicit unknowns rather than omitted repository features.
- Contradictory evidence: eight bounded contradictions/misalignments are recorded in [UNKNOWNS.md](UNKNOWNS.md).
- Coverage decision: **Complete**; see [COVERAGE-REPORT.md](COVERAGE-REPORT.md).
