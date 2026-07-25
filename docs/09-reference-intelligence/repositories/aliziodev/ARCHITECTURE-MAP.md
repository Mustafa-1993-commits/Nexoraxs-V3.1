# Architecture Map

## Runtime Topology

```text
Browser
  │ same-origin HTTP + cookies + XSRF header
  ▼
Next.js 16 application (:3000)
  ├─ App Router pages and route-group layouts
  ├─ next-sanctum client/provider
  ├─ server-side getUser() with React request cache
  ├─ optimistic proxy.ts route guard
  └─ /api/sanctum/[...path] pinned upstream proxy
         │ cookies + Origin/Referer
         ▼
nginx (:80, internal in Compose)
  ▼
PHP-FPM / Laravel 13
  ├─ Fortify package-registered auth routes
  ├─ Sanctum stateful API middleware
  ├─ application /api routes guarded by auth:sanctum
  ├─ User Eloquent model and auth actions
  └─ mail/cache/session/queue/filesystem services
         │
         ├─ SQLite locally or MySQL 8 in Compose
         ├─ database session/cache/queue tables by default
         ├─ queue worker process
         └─ scheduler process
```

The proxy upstream comes only from server environment configuration; clients do not choose it. The browser uses `/api/sanctum`, while server-side calls use the Laravel origin. [E026](EVIDENCE-MANIFEST.md#e026) [E028](EVIDENCE-MANIFEST.md#e028) [E029](EVIDENCE-MANIFEST.md#e029)

## Architectural Units

| Unit | Responsibility | Entry points | Evidence |
|---|---|---|---|
| Laravel bootstrap | Routes, `/up`, stateful Sanctum middleware, JSON exception rendering | `public/index.php`, `bootstrap/app.php` | [E005](EVIDENCE-MANIFEST.md#e005) |
| Fortify provider/actions | Registers account creation/profile/password/reset actions, auth-link generation, login/2FA limits | provider and four actions | [E009](EVIDENCE-MANIFEST.md#e009) [E011](EVIDENCE-MANIFEST.md#e011) [E012](EVIDENCE-MANIFEST.md#e012) [E013](EVIDENCE-MANIFEST.md#e013) [E014](EVIDENCE-MANIFEST.md#e014) |
| Application API controllers | Current user, account deletion, passkey list, session list/revocation | `/api/user`, `/api/account`, `/api/passkeys`, `/api/sessions*` | [E006](EVIDENCE-MANIFEST.md#e006) |
| Next root | Public welcome UI plus global theme/toast/tooltip providers | `/` | [E030](EVIDENCE-MANIFEST.md#e030) [E040](EVIDENCE-MANIFEST.md#e040) |
| Next auth group | Guest/flow pages with Sanctum context but no group-level guest guard | `/login`, `/register`, reset/verification/2FA pages | [E030](EVIDENCE-MANIFEST.md#e030) |
| Next app group | Server-authorized protected pages plus focus/visibility session revalidation | `/dashboard`, `/settings/*` | [E030](EVIDENCE-MANIFEST.md#e030) [E037](EVIDENCE-MANIFEST.md#e037) |
| UI system | Shells, navigation, auth/settings components, 27 UI primitives, theme tokens | reusable components/layouts/hooks/libs | [E039](EVIDENCE-MANIFEST.md#e039) [E041](EVIDENCE-MANIFEST.md#e041) [E042](EVIDENCE-MANIFEST.md#e042) [E043](EVIDENCE-MANIFEST.md#e043) |
| Operations | Local multi-process dev, CI, standalone frontend, nginx/PHP, DB/worker/scheduler Compose | Composer scripts, workflows, Docker | [E044](EVIDENCE-MANIFEST.md#e044) [E045](EVIDENCE-MANIFEST.md#e045) [E046](EVIDENCE-MANIFEST.md#e046) [E047](EVIDENCE-MANIFEST.md#e047) |

## Request and Trust Boundaries

1. The Next proxy checks for a stable session-cookie name to fast-path protected route navigation. That cookie check is explicitly non-authoritative because guests can also hold a Laravel session. [E027](EVIDENCE-MANIFEST.md#e027)
2. The protected route-group layout calls the Laravel-backed `getUser()` and redirects if it returns no user. This is the server-render boundary for protected pages. [E030](EVIDENCE-MANIFEST.md#e030)
3. Application API routes use `auth:sanctum`; supplied route IDs such as a session ID are additionally constrained to rows owned by the authenticated user. [E006](EVIDENCE-MANIFEST.md#e006) [E017](EVIDENCE-MANIFEST.md#e017)
4. Password confirmation protects the security settings UI and Fortify passkey/2FA management. Account deletion and bulk session logout independently validate the submitted current password. [E008](EVIDENCE-MANIFEST.md#e008) [E015](EVIDENCE-MANIFEST.md#e015) [E017](EVIDENCE-MANIFEST.md#e017) [E038](EVIDENCE-MANIFEST.md#e038)
5. No multi-tenant or organization boundary exists. All domain state is user-scoped. [E010](EVIDENCE-MANIFEST.md#e010) [E019](EVIDENCE-MANIFEST.md#e019) [E061](EVIDENCE-MANIFEST.md#e061)

## State Placement

| State | Owner/storage | Consumers | Evidence |
|---|---|---|---|
| User identity/profile/password | Laravel `users` table and `User` model | Fortify actions, current-user endpoint, Next auth provider | [E010](EVIDENCE-MANIFEST.md#e010) [E019](EVIDENCE-MANIFEST.md#e019) |
| TOTP secret/recovery/confirmation | encrypted/hidden user fields through Fortify trait | 2FA management and challenge UI | [E010](EVIDENCE-MANIFEST.md#e010) [E020](EVIDENCE-MANIFEST.md#e020) [E035](EVIDENCE-MANIFEST.md#e035) |
| Passkeys | `passkeys` table through package relationship | Fortify ceremonies and app list endpoint | [E016](EVIDENCE-MANIFEST.md#e016) [E022](EVIDENCE-MANIFEST.md#e022) |
| Sessions | framework `sessions` table | auth guard, session APIs, session management UI | [E017](EVIDENCE-MANIFEST.md#e017) [E019](EVIDENCE-MANIFEST.md#e019) |
| CSRF/session cookies | browser and Laravel session services | proxy, next-sanctum, Sanctum middleware | [E005](EVIDENCE-MANIFEST.md#e005) [E025](EVIDENCE-MANIFEST.md#e025) [E028](EVIDENCE-MANIFEST.md#e028) |
| Frontend auth state | `SanctumProvider`, initially server-hydrated | auth pages, shell, settings | [E030](EVIDENCE-MANIFEST.md#e030) |
| Theme preference | `next-themes` client persistence | global provider and appearance tabs | [E039](EVIDENCE-MANIFEST.md#e039) |
| Sidebar preference | `sidebar_state` browser cookie, seven-day maximum age | responsive sidebar provider | [E042](EVIDENCE-MANIFEST.md#e042) |
| Cache and queues | configurable stores; database by default | framework services | [E023](EVIDENCE-MANIFEST.md#e023) [E024](EVIDENCE-MANIFEST.md#e024) [E055](EVIDENCE-MANIFEST.md#e055) |

## Boundary Findings

- Backend auth endpoints supplied by Fortify and passkey packages are configured in repository source but their vendor route definitions are not vendored. Exact package route internals are therefore distinguished from application-defined routes in [API-MAP.md](API-MAP.md). [E003](EVIDENCE-MANIFEST.md#e003) [E008](EVIDENCE-MANIFEST.md#e008)
- `resources/views/welcome.blade.php` and its CSS/JS scaffold remain tracked, but `routes/web.php` returns JSON at `/`; no tracked route renders the Blade view. [E007](EVIDENCE-MANIFEST.md#e007) [E058](EVIDENCE-MANIFEST.md#e058)
- A header-based shell is implemented but the exported `AppLayout` selects the sidebar shell. [E041](EVIDENCE-MANIFEST.md#e041)
- Co-deployed processes share the same code and database; there are no internal HTTP service contracts beyond the Next-to-Laravel boundary.
