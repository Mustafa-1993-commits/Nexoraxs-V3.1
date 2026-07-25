# Dependency Map

## Runtime Dependency Graph

```text
Public/auth pages
  → SanctumProviders
  → next-sanctum config
  → /api/sanctum proxy
  → Laravel Fortify/Sanctum routes
  → User model + database

Protected pages
  → request-cached getUser()
  → /api/user
  → auth:sanctum
  → database session or bearer token

Security settings
  → RequirePassword
  ├─ password update → Fortify action → User
  ├─ 2FA components → Fortify TOTP routes → User TOTP fields
  ├─ passkey components → Fortify/WebAuthn + /api/passkeys → passkeys
  └─ session components → /api/sessions* → sessions

Theme/shell
  → next-themes + Tailwind tokens
  → shadcn/Radix UI primitives
  → Lucide icons
```

[E006](EVIDENCE-MANIFEST.md#e006) [E008](EVIDENCE-MANIFEST.md#e008) [E010](EVIDENCE-MANIFEST.md#e010) [E028](EVIDENCE-MANIFEST.md#e028) through [E043](EVIDENCE-MANIFEST.md#e043)

## Feature Dependencies

| Feature family | Required internal capabilities | Required external packages/services | Failure/absence behavior |
|---|---|---|---|
| Registration/login/logout | Proxy, Sanctum provider, Fortify config/actions, User | Next, `next-sanctum`, Fortify, Sanctum, database | Validation/auth errors stay on forms; unauthenticated APIs return 401 |
| Password recovery | Mail URL customization, password broker, reset UI | Fortify, configured mailer | UI surfaces send/reset failure; default mailer writes to log |
| Email verification | Verification pages, custom signed link, user contract, frontend flag | Fortify, mailer | Disabled by default; invalid link shows recovery link |
| TOTP | Password-confirmation gate, TOTP hook/components, user TOTP columns | Fortify, `input-otp`, authenticator app | Setup errors shown; challenge can switch to recovery code |
| Passkeys | Password-confirmation gate, safe list API, allowed origins, passkey table | Fortify, Laravel Passkeys, `@laravel/passkeys`, `next-sanctum`, WebAuthn browser support | Unsupported browsers hide/disable feature; cancellation is silent |
| Sessions | Database session driver/table, session APIs, UI formatting | Laravel sessions, `next-sanctum`, database | List endpoint aborts 500 on non-database driver; UI shows mutation toast errors |
| Protected shell | `getUser`, app group, auth proxy, sidebar primitives | Next, React, `next-sanctum`, Radix/Tailwind | Redirects to login; invalid session is marked expired |
| Appearance | Global provider, CSS tokens, appearance tabs | `next-themes`, Tailwind | SSR defers selected-tab highlight until mounted |
| Deployment | Images, entrypoint, Compose env, MySQL health | Docker, nginx, PHP image, Node image, MySQL image, Composer, pnpm | PHP waits for key/database; Compose restart policy is `unless-stopped` |

## Data Dependencies

| Consumer | Reads | Writes |
|---|---|---|
| Fortify actions | `users`, reset tokens, session auth context | users/password/reset/verification state |
| Account controller | current user/tokens/session | tokens, current session, user deletion |
| Passkey controller | current user's passkey relation | none |
| Session controller | sessions for current user | owned session rows |
| Next auth provider | current user/auth responses | client auth state |
| Theme provider | system preference/stored theme | browser theme preference |
| Sidebar provider | viewport and sidebar cookie | `sidebar_state` cookie |
| Queue/cache services | job/cache tables | job/cache rows |

## External Runtime Services and Integrations

| Service/integration | Status | Evidence |
|---|---|---|
| MySQL 8 | Active Compose dependency | [E044](EVIDENCE-MANIFEST.md#e044) |
| SQLite | Active local/testing default | [E025](EVIDENCE-MANIFEST.md#e025) [E048](EVIDENCE-MANIFEST.md#e048) |
| SMTP/log/sendmail/SES/Postmark/Resend | Configurable mail transports; log default; no provider-specific application integration | [E025](EVIDENCE-MANIFEST.md#e025) [E056](EVIDENCE-MANIFEST.md#e056) |
| Redis/Memcached/DynamoDB/SQS/Beanstalkd/S3 | Configured alternatives only; no Compose service or application-specific use | [E055](EVIDENCE-MANIFEST.md#e055) |
| GitHub/Laravel docs/Laracasts/Laravel Cloud | Outbound navigation links only | [E040](EVIDENCE-MANIFEST.md#e040) [E041](EVIDENCE-MANIFEST.md#e041) |
| WebAuthn platform authenticator | Active browser integration | [E036](EVIDENCE-MANIFEST.md#e036) [E052](EVIDENCE-MANIFEST.md#e052) |
| Authenticator app | Active user-side TOTP dependency | [E035](EVIDENCE-MANIFEST.md#e035) [E051](EVIDENCE-MANIFEST.md#e051) |

## Build and Tooling Dependencies

- Composer controls backend dependency install, setup, test, autoload, package discovery, and asset publishing. [E003](EVIDENCE-MANIFEST.md#e003) [E046](EVIDENCE-MANIFEST.md#e046)
- pnpm controls the frontend lock/importer, development, build, lint, format, and E2E scripts. [E004](EVIDENCE-MANIFEST.md#e004)
- CI depends on GitHub Actions, setup-php, setup-node, pnpm/action-setup, Playwright browser installation, and artifact upload. [E047](EVIDENCE-MANIFEST.md#e047)
- E2E depends on a mutable test database, seeded users, both runtime servers, Chromium, CDP WebAuthn, and TOTP wall-clock windows. [E049](EVIDENCE-MANIFEST.md#e049) through [E054](EVIDENCE-MANIFEST.md#e054)

## Coupling and Isolation Assessment

| Area | Isolation | Notes |
|---|---|---|
| Pure UI primitives and formatting hooks | High | Mostly framework/UI-library coupled, not domain coupled |
| App shell and settings layouts | Medium | Coupled to Next routing, auth user shape, and shadcn sidebar |
| Account forms | Medium | Coupled to `next-sanctum` APIs and Fortify payload/error conventions |
| Sessions | Low | Coupled to Laravel database-session schema and `next-sanctum` `DeviceSession` contract |
| Passkeys | Low | Coupled across browser package, Fortify route set, Laravel package, RP/origin configuration, and schema |
| TOTP | Low | Coupled to Fortify's endpoint and user-field conventions |
| Same-origin proxy/auth boundary | Low | Central framework-specific integration seam |
| Docker topology | Medium | Portable Compose pattern but assumes nginx/PHP-FPM/MySQL/Node and shared app-key volume |

These are reuse-isolation observations only, not adoption recommendations.

## Absent Cross-Feature Dependencies

No business OS, organization, tenant, payment, product, inventory, order, report, collaboration, webhook, or analytics feature depends on this system because those features do not exist in the source repository.
