# BoxyHQ Application Map

## Deployable Applications

| Application | Evidence | Status | Notes |
|---|---|---|---|
| Next.js web/API runtime | [package.json scripts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/package.json) | Implemented | UI and API share one process on port 4002. |
| PostgreSQL service | [docker-compose.yml](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/docker-compose.yml) | Development/runtime dependency | Local Compose defines only PostgreSQL. |
| Mock SAML test service | [.github/workflows/main.yml](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/.github/workflows/main.yml) | Test-only | CI service for SSO E2E coverage. |

There is no monorepo workspace, separate worker, scheduler, websocket process, instance-admin app, mobile app,
or standalone Jackson service in the tracked topology. Hosted Jackson is an external runtime selected through
configuration.

## Page-Router Application Areas

| Area | Paths | Verified responsibility |
|---|---|---|
| Public and auth | `pages/index.tsx`, `pages/auth/`, `pages/invitations/` | Landing, registration, sign-in, recovery, email verification, SSO, invitation acceptance |
| Account | `pages/settings/` | Profile and security/session self-service |
| Team administration | `pages/teams/` | Teams, members, settings, SSO, directory sync, audit, webhooks, API keys, billing |
| Protocol/API | `pages/api/` | 42 handler files across auth, team, OAuth, SCIM, webhook, and health surfaces |
| Shared UI | `components/` | 97 tracked component files |
| State hooks | `hooks/` | 12 SWR/permission/theme hooks |
| Service/data | `lib/`, `models/`, `prisma/` | 46 library files, 12 model modules, schema/migrations/seed |

## Non-Application Utilities

`delete-team.js` is an interactive dry-run-first cleanup utility; `sync-stripe.js` synchronizes catalog data;
`check-locale.js` and `find-dupe-locale.js` inspect translations. These are commands, not additional runtimes.
