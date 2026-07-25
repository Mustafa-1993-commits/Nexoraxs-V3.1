# Repository Profile

## Identity

| Field | Value | Evidence |
|---|---|---|
| Repository ID | `SRC-ALIZIODEV-LARAVEL-NEXT-STARTER` | [Registry](../../REGISTRY.md) |
| Canonical name | `aliziodev/laravel-next-starter-kit` | [E003](EVIDENCE-MANIFEST.md#e003) |
| Classification | Source repository; reference evidence only | [Registry](../../REGISTRY.md) |
| Local path | `/home/mustafa/projects/aliziodev/laravel-next-starter-kit` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Source URL | `https://github.com/aliziodev/laravel-next-starter-kit.git` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Branch | `main` tracking `origin/main` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Pinned discovered SHA | `1f1bc9681c1141802cc8125235195ff904c46e0c` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Current SHA at completion | `1f1bc9681c1141802cc8125235195ff904c46e0c` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Commit date | `2026-07-02T16:14:10+07:00` | [E001](EVIDENCE-MANIFEST.md#e001) |
| Working-tree state | Clean; no tracked, untracked, or ignored-file claims were used as evidence | [E001](EVIDENCE-MANIFEST.md#e001) |
| Tracked files | 216; no submodules, LFS pointers, or special tracked modes | [E061](EVIDENCE-MANIFEST.md#e061) |
| Tree fingerprint | SHA-256 of `git ls-files -s`: `deeec24457eff28028180296dbcf8ec5b74c16cbc76ae0074053bc990509a3eb` | [E061](EVIDENCE-MANIFEST.md#e061) |
| Discovery mode | Initial | This artifact |
| Inspected at | `2026-07-26T01:05:23+03:00` | This artifact |
| Lifecycle state | **Complete** | [Coverage decision](COVERAGE-REPORT.md#completion-decision) |

## System Summary

The repository is a decoupled starter system with two deployable application runtimes:

- a headless Laravel 13 API using Fortify, Sanctum, passkeys, Eloquent, framework sessions, cache, queue, mail, and console infrastructure; and
- a Next.js 16 App Router frontend using React 19, `next-sanctum`, a same-origin API proxy, server-side user hydration, client auth flows, a settings surface, and a reusable shadcn/Radix/Tailwind UI layer.

The browser-facing production topology exposes only the Next.js container. The Next route handler proxies browser requests to an internal nginx/PHP-FPM Laravel service. MySQL, a queue worker, and a scheduler are internal Compose services. [E005](EVIDENCE-MANIFEST.md#e005) [E028](EVIDENCE-MANIFEST.md#e028) [E044](EVIDENCE-MANIFEST.md#e044)

This is an authentication/account starter rather than a tenant-aware business application. It has one `User` aggregate and contains no organization, workspace, tenant, membership, role, permission, policy, product-domain, analytics, search, collaboration, webhook, import, export, or realtime domain implementation. Absence claims are based on the complete tracked-file inventory, route set, models, migrations, controllers, and frontend entry points. [E006](EVIDENCE-MANIFEST.md#e006) [E010](EVIDENCE-MANIFEST.md#e010) [E019](EVIDENCE-MANIFEST.md#e019) [E061](EVIDENCE-MANIFEST.md#e061)

## Technology and Runtime Baseline

| Area | Verified baseline | Evidence |
|---|---|---|
| Backend language/runtime | PHP `^8.4`; Laravel Framework `v13.17.0` | [E003](EVIDENCE-MANIFEST.md#e003) |
| Backend auth | Fortify `v1.37.2`, Sanctum `v4.3.2`, Laravel Passkeys `v0.2.1` | [E003](EVIDENCE-MANIFEST.md#e003) |
| Frontend | Next.js `16.2.9`, React/React DOM `19.2.4`, TypeScript `5.9.3` | [E004](EVIDENCE-MANIFEST.md#e004) |
| UI | Tailwind `4.3.1`, shadcn `4.12.0`, Radix UI `1.6.0`, Lucide `1.21.0` | [E004](EVIDENCE-MANIFEST.md#e004) |
| Local persistence default | SQLite; database sessions/cache/queue | [E025](EVIDENCE-MANIFEST.md#e025) [E055](EVIDENCE-MANIFEST.md#e055) |
| Container persistence | MySQL 8 and named volumes | [E044](EVIDENCE-MANIFEST.md#e044) |
| Testing | Pest/PHPUnit smoke tests; Playwright Chromium full-stack E2E | [E048](EVIDENCE-MANIFEST.md#e048) [E049](EVIDENCE-MANIFEST.md#e049) |
| CI | Pest on PHP 8.4/8.5, Pint, ESLint, Prettier, Playwright | [E047](EVIDENCE-MANIFEST.md#e047) |

## Scope and Strengths

- The auth boundary is layered: optimistic cookie routing, an authoritative server-component user check, and `auth:sanctum` on application APIs. [E006](EVIDENCE-MANIFEST.md#e006) [E027](EVIDENCE-MANIFEST.md#e027) [E030](EVIDENCE-MANIFEST.md#e030)
- The same-origin proxy pins its upstream and forwards state needed for Sanctum SPA authentication, avoiding a browser-to-API CORS dependency. [E005](EVIDENCE-MANIFEST.md#e005) [E028](EVIDENCE-MANIFEST.md#e028)
- The security settings cover password changes, password-confirmation gating, TOTP, recovery codes, passkeys, and device sessions. [E035](EVIDENCE-MANIFEST.md#e035) [E036](EVIDENCE-MANIFEST.md#e036) [E037](EVIDENCE-MANIFEST.md#e037) [E038](EVIDENCE-MANIFEST.md#e038)
- E2E tests exercise login, registration, logout, TOTP, WebAuthn through a virtual authenticator, browser-session revocation, and expired-session feedback. [E050](EVIDENCE-MANIFEST.md#e050) [E051](EVIDENCE-MANIFEST.md#e051) [E052](EVIDENCE-MANIFEST.md#e052) [E053](EVIDENCE-MANIFEST.md#e053)
- The Compose topology includes automated key generation, database readiness waiting, migrations, framework caches, non-root Next runtime, and internal-only API/data services. [E044](EVIDENCE-MANIFEST.md#e044) [E045](EVIDENCE-MANIFEST.md#e045)

## Limits

- Email verification routes and pages are present, but enforcement and notification behavior are disabled by the default `User` contract and frontend flag. [E010](EVIDENCE-MANIFEST.md#e010) [E034](EVIDENCE-MANIFEST.md#e034)
- The dashboard is a visual placeholder, and the header search button has no handler or search surface. [E040](EVIDENCE-MANIFEST.md#e040) [E041](EVIDENCE-MANIFEST.md#e041)
- Backend tests are template smoke tests; feature-level backend API, authorization, validation, and persistence tests are absent. [E048](EVIDENCE-MANIFEST.md#e048)
- The root language and user-visible strings are English-only; the shadcn configuration explicitly has RTL disabled. [E039](EVIDENCE-MANIFEST.md#e039) [E060](EVIDENCE-MANIFEST.md#e060)
- No repository-local application jobs, events, listeners, scheduled tasks, policies, gates, or domain integrations exist. Infrastructure for several of these concerns is configured but not exercised by repository-defined behavior. [E024](EVIDENCE-MANIFEST.md#e024) [E044](EVIDENCE-MANIFEST.md#e044) [E057](EVIDENCE-MANIFEST.md#e057) [E061](EVIDENCE-MANIFEST.md#e061)

## Authority Boundary

All records in this workspace are external reference evidence. They do not define NexoraXS canonical identity, tenancy, ownership, authorization, lifecycle, data, or implementation choices. No feature is selected or recommended by this discovery.
