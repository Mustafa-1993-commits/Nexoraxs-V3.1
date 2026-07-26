# Plane Architecture Map

## Runtime Topology

```text
Browser
  ├─ /                         → web React Router SPA
  ├─ /god-mode/*               → admin React Router SPA
  ├─ /spaces/*                 → space React Router SSR application
  ├─ /api/*, /auth/*, /static* → Django/DRF API
  ├─ /live/*                   → Express/Hocuspocus collaboration service
  └─ object bucket paths       → MinIO/S3-compatible storage

Django API
  ├─ PostgreSQL (+ optional read replica)
  ├─ Redis/Valkey cache and coordination
  ├─ RabbitMQ → Celery worker
  ├─ database-backed Celery Beat schedule
  ├─ S3/MinIO assets
  └─ SMTP, OAuth, OpenAI-compatible LLM, Unsplash, PostHog,
     OpenTelemetry, Scout, and outbound webhooks when configured

Live service
  ├─ authenticated WebSocket collaboration
  ├─ Redis pub/sub and administrative commands
  ├─ Django page/user APIs for authorization and persistence
  └─ Yjs/Tiptap/Hocuspocus document state and PDF generation
```

The proxy and Compose definitions prove the external routing and service graph; application entry points prove the internal runtimes. [E005](EVIDENCE-MANIFEST.md#e005), [E040](EVIDENCE-MANIFEST.md#e040), [E049](EVIDENCE-MANIFEST.md#e049), [E051](EVIDENCE-MANIFEST.md#e051)

## Architectural Layers

| Layer | Primary source | Responsibility |
|---|---|---|
| Route applications | `apps/web/app`, `apps/admin/app`, `apps/space/app` | Route layouts, screens, SSR/client entry points, providers |
| Web feature layer | `apps/web/core/components`, `hooks`, `store`, `services` | Workspace/product behavior, MobX state, API clients, interaction patterns |
| Shared frontend layer | `packages/*` | Editor, UI systems, constants, contracts, services, state, utilities, localization |
| HTTP/API layer | `apps/api/plane/app`, `api`, `space`, `authentication`, `license` | Session app API, API-key public API, public Space API, auth, instance administration |
| Domain/persistence layer | `apps/api/plane/db` | Models, serializers’ persistence targets, migrations, managers, management commands |
| Asynchronous layer | `apps/api/plane/bgtasks`, `plane/celery.py` | Activities, notifications, email, exports, cleanup, automation, webhooks, telemetry |
| Realtime/document layer | `apps/live/src` | Collaboration, document conversion, PDF export, Redis fan-out, API-backed persistence |
| Edge/deployment layer | `apps/proxy`, `deployments/*`, app Dockerfiles | Reverse proxy, images, Compose, AIO, CLI, Kubernetes/Swarm guidance |

## API Boundaries

Plane exposes four distinct Django HTTP surfaces. [E009](EVIDENCE-MANIFEST.md#e009)

- `/api/`: session-authenticated application API used by the main web client.
- `/api/v1/`: API-key contract intended for external clients, including OpenAPI schema routes.
- `/api/public/`: anchor-scoped public Space API.
- `/api/instances/`: separate instance-administration surface with a separate admin session cookie.
- `/auth/`: browser authentication and OAuth entry/callback routes.

The live server exposes `/collaboration/` WebSocket, `POST /convert-document/`, `POST /pdf-export/`, and `GET /health/` under its configurable base path. [E040](EVIDENCE-MANIFEST.md#e040), [E041](EVIDENCE-MANIFEST.md#e041), [E042](EVIDENCE-MANIFEST.md#e042)

## State and Consistency

- PostgreSQL is canonical persistence. UUID primary keys, audit timestamps/actors, soft deletion, and workspace/project-scoped abstract models are shared domain patterns. [E074](EVIDENCE-MANIFEST.md#e074)
- MobX stores coordinate client/server projections; local storage retains selected language, sidebar state, and some display preferences. [E039](EVIDENCE-MANIFEST.md#e039)
- Redis supports Django cache, Celery/coordination surfaces, and live collaboration pub/sub; RabbitMQ is the default Celery broker. [E047](EVIDENCE-MANIFEST.md#e047), [E048](EVIDENCE-MANIFEST.md#e048)
- Yjs/Hocuspocus provides collaborative page document state, with Django API calls used for authentication, initial content, metadata, and durable updates. [E041](EVIDENCE-MANIFEST.md#e041), [E043](EVIDENCE-MANIFEST.md#e043)
- Celery tasks implement asynchronous activities, notifications, exports, webhooks, email, cleanup, versioning, and automation. There is no separate tracked domain-event broker abstraction; model/activity task calls are the observed event-like mechanism. [E044](EVIDENCE-MANIFEST.md#e044), [E081](EVIDENCE-MANIFEST.md#e081)

## Extension and Edition Boundary

Tracked code includes `core` and `extended` modules, CE and EE editor directories, abstract live `PageService`, and UI/type references for capabilities absent from Community routes. Empty `apps/web/app/routes/extended.ts` and abstract provider/service files prove extension points, not executable enterprise behavior. These surfaces are explicitly excluded from full feature claims. [E007](EVIDENCE-MANIFEST.md#e007)

## Operational Shape

The standard Compose topology has web, space, admin, live, API, worker, beat-worker, migrator, PostgreSQL, Valkey, RabbitMQ, MinIO, and proxy services. The AIO image runs migrator, space, API, worker, beat, live, and proxy under Supervisor and expects external database, Redis, RabbitMQ, and S3-compatible services. [E049](EVIDENCE-MANIFEST.md#e049), [E050](EVIDENCE-MANIFEST.md#e050)

The repository also provides a community installation/upgrade/restore CLI bundle, a Swarm script, and a Kubernetes pointer rather than a complete in-repository chart. [E052](EVIDENCE-MANIFEST.md#e052), [E053](EVIDENCE-MANIFEST.md#e053)

## Boundary Contradictions and Unknowns

- The live page service requests `.../pages/{pageId}/mentions/`, but no matching Community Django URL is tracked. PDF mention resolution is therefore contradictory at the repository boundary (`C-005`). [E089](EVIDENCE-MANIFEST.md#e089)
- GitHub/Slack integration models and frontend services/components exist without corresponding Community app API route modules; Jira has a frontend service but no tracked backend route. They are substrate/extension seams, not verified end-to-end integrations. [E072](EVIDENCE-MANIFEST.md#e072)
- Runtime performance, production readiness, and cross-service failure behavior were not executed during read-only static discovery.
