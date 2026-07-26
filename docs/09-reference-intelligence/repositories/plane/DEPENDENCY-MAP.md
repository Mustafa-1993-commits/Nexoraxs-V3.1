# Plane Dependency Map

## Runtime Dependency Graph

```text
web ─────────────┐
admin ───────────┼──HTTP/session──> api ──> PostgreSQL
space ───────────┘                  │ ├──> Redis/Valkey
                                   │ ├──> RabbitMQ/Celery worker + beat
live ──HTTP/cookie─────────────────>│ ├──> S3/MinIO
  ├──WebSocket/Yjs/Hocuspocus       │ ├──> SMTP/OAuth/LLM/Unsplash
  └──Redis pub/sub──────────────────┘ └──> webhooks/telemetry/APM

proxy → web, admin, space, live, api, and object storage
```

[E040](EVIDENCE-MANIFEST.md#e040), [E047](EVIDENCE-MANIFEST.md#e047), [E049](EVIDENCE-MANIFEST.md#e049), [E051](EVIDENCE-MANIFEST.md#e051)

## Application-to-Package Matrix

| Consumer | Principal internal dependencies |
|---|---|
| `web` | constants, editor, hooks, i18n, logger, Propel, services, shared-state, Tailwind config, types, UI, utils |
| `admin` | constants, hooks, i18n, Propel/UI, services, shared-state, Tailwind config, types, utils |
| `space` | constants, editor, hooks, i18n, Propel/UI, services, shared-state, Tailwind config, types, utils |
| `live` | decorators, editor transforms, logger, services/types, shared TS config |
| Internal packages | types/constants/utils form the broad base; UI/Propel/editor/services build above them |

Exact dependency declarations are in application/package manifests. [E006](EVIDENCE-MANIFEST.md#e006), [E062](EVIDENCE-MANIFEST.md#e062)

## Feature Dependency Chains

| Feature family | Internal dependencies | Runtime dependencies |
|---|---|---|
| Authentication | User/session/account models, auth handlers, instance config, client providers | PostgreSQL, email for magic/reset, OAuth providers when enabled |
| Workspace/project | Membership/role permissions, workspace/project models, web stores/services | PostgreSQL; Celery/email for invitations/seed |
| Work items | Project membership, state/label/estimate models, issue services/stores, editor | PostgreSQL, Celery; S3 for assets; webhook/email optional |
| Layouts/views | Work-item list API, view/member properties, shared filters/types/UI | Browser/MobX; API/PostgreSQL |
| Cycles/modules | Project/work items, shared layouts, favorites/properties | API/PostgreSQL |
| Pages | Page/project/access models, editor, live services, page API | PostgreSQL, Redis, live service, S3 |
| Intake | Project/work-item models, intake state, issue editor/components | API/PostgreSQL; Space for public intake |
| Notifications | Activity/mention extraction, preferences, issue data | Celery, Redis locks/cache, SMTP for email |
| Analytics/export | Work-item queries, filters, chart/UI packages, exporter history | PostgreSQL, Celery, S3, SMTP |
| Space | Deploy/publication anchor, public API, shared UI/editor | SSR app, API, S3; session auth for writes |
| Webhooks | Model activity, serializers, webhook config/logs | Celery, DNS/network, SSRF allowlists |
| Instance admin | License/instance config models, separate admin session, admin UI | PostgreSQL and configured external providers/services |

## External Runtime Services

| Service | Requirement | Configuration/evidence |
|---|---|---|
| PostgreSQL | Required canonical database | `DATABASE_URL` or component settings; Compose PostgreSQL 15.7 |
| Redis/Valkey | Cache/coordination and live pub/sub | `REDIS_URL`; Compose Valkey 7.2.11 |
| RabbitMQ | Default Celery broker | `AMQP_URL` or component settings; Compose RabbitMQ 3.13.6 |
| S3-compatible storage | Required for production-style uploads/exports; MinIO bundled option | AWS/MinIO keys and bucket |
| SMTP | Optional/configurable email delivery | instance settings/environment |
| OAuth providers | Optional Google/GitHub/GitLab/Gitea auth | provider IDs/secrets/hosts and enable flags |
| LLM endpoint | Optional AI assistant | provider/model/base/key |
| Unsplash | Optional image search | access key |
| PostHog | Optional event tracking | host/key |
| OpenTelemetry/Scout | Optional metrics/APM | OTLP/Scout settings |
| Webhook targets | Optional outbound integration | per-workspace config plus SSRF allowlists |

[E047](EVIDENCE-MANIFEST.md#e047), [E049](EVIDENCE-MANIFEST.md#e049), [E061](EVIDENCE-MANIFEST.md#e061)

## Direct Dependency Families

### JavaScript

React 18, React Router 7, Vite, MobX, Tiptap/ProseMirror, Hocuspocus/Yjs, i18next/ICU, Tailwind, Base UI/Radix/headless primitives, DnD, Recharts, Zod, Effect, Axios/SWR, Express/WebSocket, Redis, Helmet/CORS/compression, Sharp, React PDF, Storybook, Vitest, Oxlint/Oxfmt, TypeScript, pnpm, and Turbo. Versions are pinned in the pnpm catalog/lock. [E062](EVIDENCE-MANIFEST.md#e062)

### Python

Django 4.2.30, DRF 3.15.2, psycopg/PostgreSQL, Redis/django-redis, Celery/django-celery-beat/results, CORS headers, Whitenoise, django-filter/storages, Uvicorn/Channels, OpenAI, Slack SDK, PostHog, OpenTelemetry, Scout, boto3, requests/urllib3, cryptography, PyJWT, DRF Spectacular, nh3/lxml, openpyxl, and pytest tooling. [E061](EVIDENCE-MANIFEST.md#e061)

## Coupling Findings

- Main product features are tightly coupled to Plane workspace/project/role semantics and cannot be treated as generic contracts.
- Layout/filter/editor/design-system packages are more isolated, but still carry Plane types/tokens and AGPL source-license impact.
- Live collaboration is highly coupled across cookie/session auth, page API shapes, Redis protocol, Yjs document format, and Django persistence.
- Public Space depends on publication anchors and does not prove a generic anonymous tenancy model.
- GitHub/Slack/Jira/importer surfaces are incomplete Community seams and must not be represented as end-to-end dependencies.

## Dependency Unknowns

- No complete generated SBOM or dependency-license report is tracked.
- Container base-image transitive packages and their notices are not inventoried here.
- Live/provider failure behavior was not executed.
- Optional services may be configured through instance database settings in addition to environment variables; precedence is not uniformly documented.
