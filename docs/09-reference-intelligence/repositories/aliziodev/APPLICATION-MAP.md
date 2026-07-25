# Application Map

## Deployable Applications

| Application | Type | Public entry point | Internal entry point | Primary responsibilities | Evidence |
|---|---|---|---|---|---|
| Laravel backend | Headless Laravel 13 application | Local development `http://localhost:8000`; not public in Compose | nginx `api` → PHP-FPM `php:9000` | Fortify/Sanctum auth, account APIs, persistence, mail, sessions, cache, queues, console | [E005](EVIDENCE-MANIFEST.md#e005) [E006](EVIDENCE-MANIFEST.md#e006) [E044](EVIDENCE-MANIFEST.md#e044) |
| Next frontend | Next.js 16 App Router application | `http://localhost:3000` / Compose host port | `frontend:3000` | Pages, SSR auth guard, auth/settings UI, proxy, themes, shell | [E026](EVIDENCE-MANIFEST.md#e026) [E028](EVIDENCE-MANIFEST.md#e028) [E030](EVIDENCE-MANIFEST.md#e030) [E044](EVIDENCE-MANIFEST.md#e044) |

## Backend Application Areas

| Area | Files | Result |
|---|---|---|
| Runtime bootstrap | `artisan`, `public/index.php`, `bootstrap/app.php`, `bootstrap/providers.php` | Web/API/console routing, health endpoint, providers, stateful API middleware, JSON exception policy |
| Auth actions | `app/Actions/Fortify/*` | User creation, password policy, reset, password update, profile update |
| Controllers | `app/Http/Controllers/*` | Current user, password-confirmed deletion, safe passkey list, user-scoped session listing/revocation |
| Model | `app/Models/User.php` | Eloquent authenticatable user with tokens, notifications, TOTP, passkeys |
| Routes | `routes/api.php`, `routes/web.php`, `routes/console.php` | Five application API route patterns, JSON root, `inspire` command |
| Persistence | `database/migrations/*` | Users/reset/session, cache/locks, jobs/batches/failures, TOTP columns, personal tokens, passkeys |
| Fixtures | factory and seeders | Default test user and dedicated E2E users |
| Configuration | `config/*.php`, env examples | Auth, Fortify, passkeys, sessions, data, cache, queue, mail, storage, logging, services |
| Legacy scaffold | `resources/*` | Tracked Blade welcome asset not reached by tracked routes |

Evidence: [E005](EVIDENCE-MANIFEST.md#e005) through [E025](EVIDENCE-MANIFEST.md#e025), [E054](EVIDENCE-MANIFEST.md#e054), [E055](EVIDENCE-MANIFEST.md#e055), [E056](EVIDENCE-MANIFEST.md#e056), [E057](EVIDENCE-MANIFEST.md#e057), [E058](EVIDENCE-MANIFEST.md#e058).

## Frontend Application Areas

| Area | Files | Result |
|---|---|---|
| Root | `web/app/layout.tsx`, `providers.tsx`, `page.tsx` | English metadata/root, global theme/toast/tooltip providers, auth-aware welcome page |
| Protected app group | `web/app/(app)/*` | Server-authenticated dashboard and profile/security/appearance settings |
| Auth group | `web/app/(auth)/*` | Login, registration, password flows, email verification, TOTP challenge |
| Route handlers | `web/app/api/sanctum/[...path]/route.ts`, `.well-known/passkey-endpoints/route.ts` | Same-origin proxy and passkey management discovery |
| Components | `web/components/*` | Account/security flows, shell, navigation, feedback, display utilities |
| UI primitives | `web/components/ui/*` | 27 Tailwind/shadcn/Radix primitives |
| Layouts | `web/layouts/*` | Sidebar and header app shells; simple/card/split auth layouts; settings layout |
| Hooks/libraries/types | `web/hooks/*`, `web/lib/*`, `web/types/index.ts` | Auth config/cache, TOTP data, device/relative formatting, responsive/clipboard/class utilities |
| E2E | `web/e2e/*` | Playwright auth/TOTP/passkey/session suites and fixtures |
| Static assets | `web/public/*`, `web/app/favicon.ico` | Framework starter SVGs and icon |

Evidence: [E026](EVIDENCE-MANIFEST.md#e026) through [E043](EVIDENCE-MANIFEST.md#e043), [E049](EVIDENCE-MANIFEST.md#e049) through [E053](EVIDENCE-MANIFEST.md#e053), [E058](EVIDENCE-MANIFEST.md#e058).

## Process Map

| Process | Command/image | Lifecycle | Application behavior present |
|---|---|---|---|
| Local API | `php artisan serve` | dev | Yes |
| Local queue | `php artisan queue:listen --tries=1` | dev | Infrastructure only; no repository-defined job classes |
| Local web | `pnpm --dir web dev` | dev | Yes |
| Frontend | standalone Next Node server | production | Yes |
| API proxy | nginx Alpine | production | Yes |
| PHP | PHP 8.4 FPM Alpine | production | Yes |
| Queue | `php artisan queue:work --tries=3 --timeout=90 --sleep=3` | production | Infrastructure only in repository source |
| Scheduler | `php artisan schedule:work` | production | No repository-defined schedule |
| Database | MySQL 8 | production | Yes |

[E044](EVIDENCE-MANIFEST.md#e044) [E045](EVIDENCE-MANIFEST.md#e045) [E046](EVIDENCE-MANIFEST.md#e046)

## Not Present

There are no additional apps, monorepo packages, browser extensions, mobile clients, CLI products, admin application, tenant portal, webhooks, or separately versioned internal services. `web` is the only pnpm importer. [E003](EVIDENCE-MANIFEST.md#e003) [E004](EVIDENCE-MANIFEST.md#e004) [E061](EVIDENCE-MANIFEST.md#e061)
