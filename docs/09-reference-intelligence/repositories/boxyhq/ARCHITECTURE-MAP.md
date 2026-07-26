# BoxyHQ Architecture Map

## Runtime Shape

```text
Browser
  -> Next.js Pages Router UI (`pages/**/*.tsx`)
  -> middleware session/public-path partition
  -> Next.js API handlers (`pages/api/**/*.ts`)
     -> model/reusable libraries (`models/`, `lib/`)
     -> Prisma -> PostgreSQL
     -> optional Jackson / Retraced / Svix / Stripe / SMTP / Slack / telemetry services
```

The application shell is composed in [pages/_app.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/_app.tsx); protected routing and headers are in
[middleware.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/middleware.ts); the database boundary is [prisma/schema.prisma](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/prisma/schema.prisma).

## Layers

| Layer | Paths | Responsibility |
|---|---|---|
| Browser pages | `pages/**/*.tsx` | Public landing, auth, account, teams, SSO, directory, audit, webhooks, billing |
| Presentation | `components/`, `styles/`, `public/` | Layouts, shell, forms, tables, dialogs, feedback, email templates, assets |
| Client state | `hooks/` | SWR data retrieval, permission checks, invitation and theme state |
| HTTP/protocol | `pages/api/` | Session APIs, team APIs, OAuth/OIDC/SAML, SCIM, webhooks, health |
| Application services | `lib/` | Auth, policy, validation, Jackson adapters, email, audit, webhook, metrics, billing |
| Persistence | `models/`, `prisma/` | Prisma accessors, PostgreSQL schema, migrations, seed |
| Delivery/operations | `.github/`, `.do/`, `app.json`, `Procfile`, scripts | CI, deployment metadata, maintenance |

## Boundary Findings

- Team is the tenant-like application boundary; most team operations require session, membership, resource permission, and object ownership checks.
- Jackson may run embedded against the same PostgreSQL database or behind an authenticated hosted HTTP boundary.
- Retraced and Svix own audit-viewer/storage and webhook-delivery behavior when enabled; their internals are not present.
- No first-party cache, queue, scheduler, realtime transport, object storage, or separate admin application is present.
- API keys are managed and hashed, but first-party API authentication consumption is only a seam.

## Cross-Layer Flows

Detailed verified sequences are in [WORKFLOW-MAP.md](WORKFLOW-MAP.md), API ownership is in
[API-MAP.md](API-MAP.md), and dependency relationships are in [DEPENDENCY-MAP.md](DEPENDENCY-MAP.md).
