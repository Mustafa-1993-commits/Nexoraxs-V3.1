# Evidence Manifest

## Rules

- Source root: `/home/mustafa/projects/aliziodev/laravel-next-starter-kit`
- Pinned SHA: `1f1bc9681c1141802cc8125235195ff904c46e0c`
- Local links below point to exact source files; ranges/symbols identify the supporting portion.
- README evidence is contextual only and never the sole basis for a verified feature.
- Package internals absent from the tracked repository are not treated as verified implementation evidence.

## Repository and Dependency Evidence

### E001

- **Kind:** repository metadata
- **Evidence:** `git rev-parse`, `git branch --show-current`, `git status --short --branch`, `git remote -v`, `git log -1`
- **Supports:** root path, clean state, branch, remote, SHA, commit date.

### E002

- **Source:** [LICENSE:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/LICENSE:1)
- **Symbols/range:** lines 1–20
- **Supports:** MIT repository license, attribution and notice obligations, warranty disclaimer.

### E003

- **Source:** [composer.json:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/composer.json:1), [composer.lock:1214](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/composer.lock:1214)
- **Symbols/range:** project metadata, require/require-dev, autoload, scripts; locked direct packages.
- **Supports:** backend identity, dependency versions, PSR-4 layout, backend scripts.

### E004

- **Source:** [package.json:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/package.json:1), [web/package.json:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/package.json:1), [web/pnpm-lock.yaml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/pnpm-lock.yaml:1)
- **Symbols/range:** scripts, dependencies, importer resolutions.
- **Supports:** frontend/runtime/tooling package map and exact resolutions.

## Backend Runtime Evidence

### E005

- **Source:** [bootstrap/app.php:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/bootstrap/app.php:8), [bootstrap/providers.php:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/bootstrap/providers.php:3), [public/index.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/public/index.php)
- **Supports:** route/bootstrap entry points, `/up`, stateful API middleware, JSON exception policy, providers.

### E006

- **Source:** [routes/api.php:19](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/routes/api.php:19)
- **Symbols/range:** lines 19–36
- **Supports:** all application API routes and shared `auth:sanctum` middleware.

### E007

- **Source:** [routes/web.php:5](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/routes/web.php:5)
- **Symbols/range:** lines 5–15
- **Supports:** headless intent and JSON root route.

### E008

- **Source:** [config/fortify.php:18](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/fortify.php:18), [config/passkeys.php:16](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/passkeys.php:16)
- **Symbols/range:** Fortify guard/prefix/middleware/limits/passkeys/features/views; passkey RP/origin/secret/timeout/management/throttle.
- **Supports:** configured auth feature families and passkey constraints.

### E009

- **Source:** [app/Providers/FortifyServiceProvider.php:33](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Providers/FortifyServiceProvider.php:33)
- **Symbols/range:** `boot`, lines 33–78
- **Supports:** action bindings, SPA verification/reset URLs, login and TOTP rate limits.

### E010

- **Source:** [app/Models/User.php:18](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Models/User.php:18)
- **Symbols/range:** properties, fillable/hidden attributes, traits, casts; commented `MustVerifyEmail`.
- **Supports:** user model, sensitive field hiding, hashing, auth traits, default email-verification status.

### E011

- **Source:** [app/Actions/Fortify/CreateNewUser.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Actions/Fortify/CreateNewUser.php:12), [app/Actions/Fortify/PasswordValidationRules.php:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Actions/Fortify/PasswordValidationRules.php:8)
- **Supports:** registration validation, uniqueness, confirmed password rules, hashing.

### E012

- **Source:** [app/Actions/Fortify/ResetUserPassword.php:11](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Actions/Fortify/ResetUserPassword.php:11)
- **Supports:** password reset validation and hashing.

### E013

- **Source:** [app/Actions/Fortify/UpdateUserPassword.php:11](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Actions/Fortify/UpdateUserPassword.php:11)
- **Supports:** current-password validation, named errors, password update.

### E014

- **Source:** [app/Actions/Fortify/UpdateUserProfileInformation.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Actions/Fortify/UpdateUserProfileInformation.php:12)
- **Supports:** profile validation/update and conditional reverification branch.

### E015

- **Source:** [app/Http/Controllers/AccountController.php:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Http/Controllers/AccountController.php:8)
- **Supports:** password-confirmed account deletion, token revocation, logout, session invalidation, CSRF rotation.

### E016

- **Source:** [app/Http/Controllers/PasskeyController.php:7](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Http/Controllers/PasskeyController.php:7)
- **Supports:** user-scoped latest-first safe passkey list.

### E017

- **Source:** [app/Http/Controllers/SessionController.php:10](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Http/Controllers/SessionController.php:10)
- **Symbols/range:** `index`, `destroyOthers`, `destroy`
- **Supports:** database session assertion, scoped list/format, single and bulk revocation invariants.

### E018

- **Source:** [app/Http/Controllers/UserController.php:7](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/app/Http/Controllers/UserController.php:7)
- **Supports:** current authenticated user projection.

## Persistence Evidence

### E019

- **Source:** [database/migrations/0001_01_01_000000_create_users_table.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/0001_01_01_000000_create_users_table.php:12)
- **Supports:** users, reset tokens, sessions schemas and indexes.

### E020

- **Source:** [database/migrations/2026_06_27_001017_add_two_factor_columns_to_users_table.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/2026_06_27_001017_add_two_factor_columns_to_users_table.php:12)
- **Supports:** TOTP secret, recovery codes, confirmation timestamp.

### E021

- **Source:** [database/migrations/2026_06_27_001300_create_personal_access_tokens_table.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/2026_06_27_001300_create_personal_access_tokens_table.php:12)
- **Supports:** Sanctum personal-token persistence, abilities, expiry/use timestamps.

### E022

- **Source:** [database/migrations/2026_06_27_043932_create_passkeys_table.php:13](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/2026_06_27_043932_create_passkeys_table.php:13)
- **Supports:** passkey schema, user FK cascade, unique credential ID, metadata.

### E023

- **Source:** [database/migrations/0001_01_01_000001_create_cache_table.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/0001_01_01_000001_create_cache_table.php:12)
- **Supports:** database cache and lock substrate.

### E024

- **Source:** [database/migrations/0001_01_01_000002_create_jobs_table.php:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/migrations/0001_01_01_000002_create_jobs_table.php:12)
- **Supports:** jobs, batches, failures and indexes.

### E025

- **Source:** [.env.example:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/.env.example:1), [.env.docker.example:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/.env.docker.example:8)
- **Supports:** local/Compose defaults for app, locale, database, sessions, URLs, stateful domains, queue, cache, Redis, mail, AWS.

## Frontend Runtime and Feature Evidence

### E026

- **Source:** [web/.env.example:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/.env.example:1)
- **Supports:** public proxy base and server-only Laravel upstream.

### E027

- **Source:** [web/proxy.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/proxy.ts:3)
- **Supports:** optimistic auth-only route patterns, stable cookie, safe return-route preservation, matcher.

### E028

- **Source:** [web/app/api/sanctum/[...path]/route.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/api/sanctum/[...path]/route.ts:3)
- **Supports:** pinned same-origin proxy and supported HTTP methods.

### E029

- **Source:** [web/lib/sanctum.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/sanctum.ts:3)
- **Supports:** cookie mode, passkey/session flags, login/logout redirects, 401 expiry redirect.

### E030

- **Source:** [web/lib/auth.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/auth.ts:4), [web/app/providers.tsx:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/providers.tsx:9), [web/app/(app)/layout.tsx:6](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(app)/layout.tsx:6), [web/app/(auth)/layout.tsx:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/layout.tsx:4), [web/app/layout.tsx:17](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/layout.tsx:17)
- **Supports:** request cache, provider scoping, protected/auth group behavior, global providers, English root metadata.

### E031

- **Source:** [web/app/(auth)/login/page.tsx:7](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/login/page.tsx:7), [web/app/(auth)/login/login-form.tsx:17](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/login/login-form.tsx:17)
- **Supports:** safe login redirect, email/password/remember, 2FA branch, passkey alternative, validation and links.

### E032

- **Source:** [web/app/(auth)/register/page.tsx:6](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/register/page.tsx:6), [web/app/(auth)/register/register-form.tsx:15](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/register/register-form.tsx:15)
- **Supports:** registration route, fields, errors, success redirect, guest handling.

### E033

- **Source:** [web/app/(auth)/forgot-password/page.tsx:14](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/forgot-password/page.tsx:14), [web/app/(auth)/reset-password/page.tsx:15](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/reset-password/page.tsx:15), [web/app/(auth)/confirm-password/page.tsx:13](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/confirm-password/page.tsx:13)
- **Supports:** forgot/reset/standalone confirmation UI workflows.

### E034

- **Source:** [web/lib/email-verification.ts:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/email-verification.ts:1), [web/app/(auth)/verify-email/page.tsx:11](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/verify-email/page.tsx:11), [web/app/(auth)/email/verify/[id]/[hash]/page.tsx:10](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/email/verify/[id]/[hash]/page.tsx:10)
- **Supports:** disabled-by-default flag, resend/logout, signed callback, invalid/unauthorized recovery.

### E035

- **Source:** [web/app/(auth)/two-factor-challenge/page.tsx:19](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(auth)/two-factor-challenge/page.tsx:19), [web/components/manage-two-factor.tsx:15](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/manage-two-factor.tsx:15), [web/components/two-factor-setup-modal.tsx:54](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/two-factor-setup-modal.tsx:54), [web/components/two-factor-recovery-codes.tsx:23](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/two-factor-recovery-codes.tsx:23), [web/hooks/use-two-factor-auth.ts:23](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/hooks/use-two-factor-auth.ts:23)
- **Supports:** TOTP enable/confirm/disable, QR/manual key, challenge modes, recovery-code list/regeneration, error states.

### E036

- **Source:** [web/components/manage-passkeys.tsx:24](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/manage-passkeys.tsx:24), [web/components/passkey-register.tsx:23](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/passkey-register.tsx:23), [web/components/passkey-verify.tsx:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/passkey-verify.tsx:12), [web/components/passkey-item.tsx:23](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/passkey-item.tsx:23), [web/app/.well-known/passkey-endpoints/route.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/.well-known/passkey-endpoints/route.ts:4)
- **Supports:** passkey support detection, login, registration naming/cancellation/errors, list/empty/loading/delete, discovery endpoint.

### E037

- **Source:** [web/components/manage-sessions.tsx:24](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/manage-sessions.tsx:24), [web/components/session-item.tsx:27](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/session-item.tsx:27), [web/components/session-revalidator.tsx:6](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/session-revalidator.tsx:6), [web/components/session-expired-notice.tsx:6](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/session-expired-notice.tsx:6)
- **Supports:** session list, single/bulk UI, device display, focus revalidation, expiry feedback.

### E038

- **Source:** [web/app/(app)/settings/profile/page.tsx:26](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(app)/settings/profile/page.tsx:26), [web/app/(app)/settings/security/page.tsx:27](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(app)/settings/security/page.tsx:27), [web/components/delete-user.tsx:22](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/delete-user.tsx:22), [web/components/require-password.tsx:19](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/require-password.tsx:19)
- **Supports:** profile/password settings, account deletion UI, password-confirmation gate.

### E039

- **Source:** [web/app/(app)/settings/appearance/page.tsx:14](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(app)/settings/appearance/page.tsx:14), [web/components/appearance-tabs.tsx:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/appearance-tabs.tsx:9), [web/app/globals.css:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/globals.css:1)
- **Supports:** light/dark/system selection, hydration behavior, design tokens and base CSS.

### E040

- **Source:** [web/app/page.tsx:5](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/page.tsx:5), [web/app/(app)/dashboard/page.tsx:5](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/(app)/dashboard/page.tsx:5)
- **Supports:** auth-aware welcome page, external learning/deploy links, placeholder dashboard.

### E041

- **Source:** [web/components/app-sidebar.tsx:20](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/app-sidebar.tsx:20), [web/components/app-header.tsx:40](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/app-header.tsx:40), [web/layouts/app-layout.tsx:5](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/layouts/app-layout.tsx:5), [web/layouts/settings/layout.tsx:12](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/layouts/settings/layout.tsx:12), [web/components/user-menu-content.tsx:22](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/user-menu-content.tsx:22)
- **Supports:** active sidebar shell, alternative header shell, navigation, settings menu, user menu, non-functional search button.

### E042

- **Source:** [web/components/ui/sidebar.tsx:27](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/ui/sidebar.tsx:27), [web/components/ui/alert-dialog.tsx:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/ui/alert-dialog.tsx:9), [web/components/ui/dialog.tsx:10](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/ui/dialog.tsx:10), [web/components/ui/dropdown-menu.tsx:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/ui/dropdown-menu.tsx:9), [web/components/ui/input-otp.tsx:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components/ui/input-otp.tsx:9)
- **Additional exact files:** all 27 tracked files under `web/components/ui/`.
- **Supports:** complete UI primitive inventory, sidebar persistence/keyboard/mobile behavior, semantic components.

### E043

- **Source:** [web/hooks/use-clipboard.ts:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/hooks/use-clipboard.ts:1), [web/hooks/use-initials.tsx:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/hooks/use-initials.tsx:1), [web/hooks/use-mobile.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/hooks/use-mobile.ts:3), [web/lib/relative-time.ts:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/relative-time.ts:1), [web/lib/user-agent.ts:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/user-agent.ts:1), [web/lib/utils.ts:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/lib/utils.ts:1), [web/types/index.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/types/index.ts:4)
- **Supports:** clipboard, initials, responsive store, English relative time, UA/device labels, class merge, frontend contract types.

## Operations and Test Evidence

### E044

- **Source:** [docker-compose.yml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/docker-compose.yml:1)
- **Supports:** frontend/api/PHP/worker/scheduler/MySQL services, port exposure, health/dependencies, volumes.

### E045

- **Source:** [docker/php/Dockerfile:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/docker/php/Dockerfile:1), [docker/php/entrypoint.sh:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/docker/php/entrypoint.sh:1), [docker/nginx/default.conf:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/docker/nginx/default.conf:1), [web/Dockerfile:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/Dockerfile:1)
- **Supports:** images/extensions, non-root standalone frontend, nginx routing, shared key, DB wait, migrations/caches.

### E046

- **Source:** [composer.json:47](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/composer.json:47), [package.json:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/package.json:3)
- **Supports:** local setup/dev/test and delegated frontend commands.

### E047

- **Source:** [.github/workflows/tests.yml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/.github/workflows/tests.yml:1), [.github/workflows/lint.yml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/.github/workflows/lint.yml:1), [.github/workflows/e2e.yml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/.github/workflows/e2e.yml:1)
- **Supports:** CI triggers, PHP matrix, lint/format, E2E setup/report.

### E048

- **Source:** [phpunit.xml:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/phpunit.xml:1), [tests/Pest.php:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/tests/Pest.php:1), [tests/Feature/ExampleTest.php:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/tests/Feature/ExampleTest.php:8), [tests/Unit/ExampleTest.php:7](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/tests/Unit/ExampleTest.php:7)
- **Supports:** backend test harness, in-memory test config, two smoke tests, feature DB refresh disabled.

### E049

- **Source:** [web/playwright.config.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/playwright.config.ts:3), [web/e2e/global-setup.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/global-setup.ts:4), [web/e2e/helpers.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/helpers.ts:3)
- **Supports:** Chromium full-stack harness, serialized workers, CI behavior, seeding and login helper.

### E050

- **Source:** [web/e2e/auth.spec.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/auth.spec.ts:4)
- **Supports:** login, invalid credentials, registration, logout E2E.

### E051

- **Source:** [web/e2e/2fa.spec.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/2fa.spec.ts:4)
- **Supports:** TOTP calculation, enrollment, confirmation, logout, challenged login.

### E052

- **Source:** [web/e2e/passkey.spec.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/passkey.spec.ts:4)
- **Supports:** CDP virtual authenticator, passkey registration/list and passwordless login.

### E053

- **Source:** [web/e2e/sessions.spec.ts:4](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/e2e/sessions.spec.ts:4)
- **Supports:** second-session fixture, bulk revocation, current-session survival, expired-session toast.

### E054

- **Source:** [database/factories/UserFactory.php:13](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/factories/UserFactory.php:13), [database/seeders/DatabaseSeeder.php:9](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/seeders/DatabaseSeeder.php:9), [database/seeders/E2eSeeder.php:8](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/database/seeders/E2eSeeder.php:8)
- **Supports:** user factory, default seed, dedicated clean E2E users.

### E055

- **Source:** [config/database.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/database.php), [config/cache.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/cache.php), [config/session.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/session.php), [config/queue.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/queue.php), [config/filesystems.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/filesystems.php)
- **Supports:** database, state, cache, queue, filesystem drivers/defaults/security settings.

### E056

- **Source:** [config/mail.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/mail.php), [config/logging.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/logging.php), [config/services.php](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/config/services.php)
- **Supports:** mail transports, logging channels/levels, service credential configuration.

### E057

- **Source:** [routes/console.php:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/routes/console.php:1)
- **Supports:** `inspire` command and absence of an application schedule in console routes.

### E058

- **Source:** [resources/views/welcome.blade.php:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/resources/views/welcome.blade.php:1), [resources/css/app.css:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/resources/css/app.css:1), [resources/js/app.js:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/resources/js/app.js:1), [public/favicon.ico](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/public/favicon.ico), [public/robots.txt:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/public/robots.txt:1), [web/app/favicon.ico](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/app/favicon.ico), [web/public/file.svg:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/public/file.svg:1), [web/public/globe.svg:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/public/globe.svg:1), [web/public/next.svg:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/public/next.svg:1), [web/public/vercel.svg:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/public/vercel.svg:1), [web/public/window.svg:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/public/window.svg:1)
- **Supports:** residual Laravel welcome scaffold, public crawl rule, static asset inventory.

### E059

- **Source:** [web/next.config.ts:3](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/next.config.ts:3)
- **Supports:** standalone build and React Compiler.

### E060

- **Source:** [web/tsconfig.json:2](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/tsconfig.json:2), [web/eslint.config.mjs:5](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/eslint.config.mjs:5), [web/components.json:1](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/components.json:1), [web/.prettierrc.json](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/web/.prettierrc.json)
- **Supports:** strict TypeScript, lint/format, shadcn preset and RTL false.

### E061

- **Kind:** complete tracked-tree inventory
- **Evidence:** `git ls-files` at pinned SHA (216 paths), per-file classification, directory counts, file-mode and submodule/LFS checks; fingerprint recorded in [REPOSITORY-PROFILE.md](REPOSITORY-PROFILE.md).
- **Supports:** repository-wide coverage and negative/absence findings.

### E062

- **Kind:** exact-version external package metadata
- **Evidence:** npm registry packuments queried read-only on `2026-07-26` for every direct frontend dependency and dev dependency at the locked version.
- **Registry:** [npm registry](https://registry.npmjs.org/)
- **Supports:** direct frontend dependency license identifiers in `LICENSE-REVIEW.md`.

### E063

- **Source:** [composer.lock](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/composer.lock)
- **Symbols/range:** license/version fields for every direct backend and backend-development dependency.
- **Supports:** direct Composer dependency license identifiers.

### E064

- **Source:** [README.md:11](/home/mustafa/projects/aliziodev/laravel-next-starter-kit/README.md:11)
- **Kind:** secondary/contextual documentation
- **Supports:** documented intent, setup/deployment claims, and contradictions checked against executable/config/test evidence.

## Coverage Inventory

| Scope | Tracked files | Inspection method |
|---|---:|---|
| Root metadata/manifests/license/env | 15 | full content; locks parsed and direct resolutions extracted |
| GitHub workflows | 3 | full content |
| Backend app | 13 | full PHP source |
| Bootstrap/routes/config | 19 | full relevant config/source; all env keys inventoried |
| Database | 10 | full migrations/factory/seeders |
| Docker | 4 plus Compose | full content |
| Backend resources/public/storage placeholders/tests | 17 | route reachability, assets/placeholders, full tests |
| Frontend app routes | 18 | full source; large inline SVG treated as asset after behavior inspection |
| Frontend components | 60 | all behavior components full; all 27 primitives inventoried by imports/exports/semantics |
| Frontend hooks/libs/layouts/types | 19 | full source |
| Frontend configs/manifests/assets/E2E | 38 | full config/tests; lock parsed; binary/SVG assets classified |
| **Total** | **216** | complete tracked-tree classification |
