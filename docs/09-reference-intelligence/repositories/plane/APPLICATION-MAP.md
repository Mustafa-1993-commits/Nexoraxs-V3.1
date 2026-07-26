# Plane Application Map

## Deployable Applications

| Application | Files | Runtime/entry point | Verified responsibility | Primary evidence |
|---|---:|---|---|---|
| `apps/web` | 2,342 | React Router/Vite, client-rendered; `app/root.tsx`, `app/routes.ts` | Authenticated workspace/project product application | [E005](EVIDENCE-MANIFEST.md#e005), [E010](EVIDENCE-MANIFEST.md#e010) |
| `apps/api` | 701 | Django ASGI/WSGI; `plane/asgi.py`, `plane/wsgi.py`, `manage.py` | App API, public API, Space API, auth, instance admin, persistence, jobs | [E009](EVIDENCE-MANIFEST.md#e009), [E074](EVIDENCE-MANIFEST.md#e074) |
| `apps/space` | 213 | React Router SSR; `app/root.tsx`, `app/routes.ts` | Published project/issue browsing and public interaction | [E008](EVIDENCE-MANIFEST.md#e008), [E024](EVIDENCE-MANIFEST.md#e024) |
| `apps/admin` | 126 | React Router/Vite client app; `app/root.tsx`, `app/routes.ts` | Instance administrators, provider/email/AI/storage configuration, workspace administration | [E011](EVIDENCE-MANIFEST.md#e011), [E085](EVIDENCE-MANIFEST.md#e085) |
| `apps/live` | 56 | Node/Express/WebSocket; `src/start.ts`, `src/server.ts` | Page collaboration, document conversion, PDF export, health | [E040](EVIDENCE-MANIFEST.md#e040) |
| `apps/proxy` | 4 | Caddy | Base-path routing, body-size limit, TLS/ACME configuration, bucket proxy | [E051](EVIDENCE-MANIFEST.md#e051) |

## Main Web Application

`apps/web/app` defines the route tree and providers. `apps/web/core` contains 1,677 feature/store/service files. Major component groups include issues (331), Power-K (81), workspace (70), pages (67), projects (47), modules (47), cycles (44), inbox (41), settings (42), Gantt (39), home (32), workspace notifications (30), estimates (23), and analytics (35). The counts are structural evidence; behavior claims are tied to their route, component, service, and backend sources. [E008](EVIDENCE-MANIFEST.md#e008), [E030](EVIDENCE-MANIFEST.md#e030)

Web runtime state is primarily MobX. Feature services call `/api/` through shared API service abstractions; the route layer supplies workspace/project context and loading/error boundaries. [E039](EVIDENCE-MANIFEST.md#e039), [E067](EVIDENCE-MANIFEST.md#e067)

## Django API Application

`apps/api/plane` contains:

| Area | Files | Purpose |
|---|---:|---|
| `app` | 112 | Session-authenticated web application API |
| `api` | 49 | API-key `/api/v1` contract and schema |
| `authentication` | 47 | Password, magic-code, OAuth, Space auth |
| `space` | 29 | Public anchor-scoped APIs |
| `license` | 37 | Instance configuration/admin API and telemetry |
| `db` | 178 | Models, migrations, managers, commands |
| `bgtasks` | 34 | Celery tasks |
| `utils` | 71 | Export, filtering, permissions copy, URL/storage/security helpers |
| `tests` | 66 | Pytest unit, contract, and smoke sources |
| `settings` | 8 | Common, production, test, storage, Redis, database routing |

There are 394 literal Django route declarations/includes across all URL modules, 276 view/controller classes, 190 serializer classes, 87 persisted model/manager/enum classes, and 121 numbered migrations (`0001` through `0121`). Counts describe the pinned tree and do not imply equal public stability. [E009](EVIDENCE-MANIFEST.md#e009), [E074](EVIDENCE-MANIFEST.md#e074), [E075](EVIDENCE-MANIFEST.md#e075)

## Space Application

Space is server-rendered and has only three functional route shapes plus a catch-all. Its component/store surface proves list and Kanban browsing, state/label/priority filters, issue peek/detail, comments, emoji reactions, votes, theme control, and sign-in/sign-up forms. The backing API is anchor-scoped and has project metadata/settings, issues, cycles, modules, states, labels, members, intake, assets, comments, reactions, and votes. [E012](EVIDENCE-MANIFEST.md#e012), [E024](EVIDENCE-MANIFEST.md#e024)

## Admin Application

Admin routes cover home/sign-in, general configuration, workspace list/create, email, authentication plus Google/GitHub/GitLab/Gitea provider pages, AI, and image storage. It has distinct user, instance, workspace, and theme stores and calls `/api/instances/`. [E011](EVIDENCE-MANIFEST.md#e011), [E085](EVIDENCE-MANIFEST.md#e085)

## Live Application

The live app composes Express, `express-ws`, Hocuspocus, Yjs, Redis, Tiptap/editor transformations, and Django API services. It applies Helmet, CORS, compression, JSON logging, request validation, a configurable base path, a 404 handler, and graceful shutdown. [E040](EVIDENCE-MANIFEST.md#e040)

Only PDF renderer/effect utilities have tracked live-service tests; WebSocket authentication, persistence, Redis fan-out, title sync, and controller integration have no tracked tests. [E055](EVIDENCE-MANIFEST.md#e055)

## Source-Only Exclusions

- Dirty `setup.sh`, untracked `plane-app/`, and untracked `setup-repository.sh`.
- Generated build output, dependency directories, caches, runtime databases, and secrets.
- Enterprise implementation referenced by abstract `extended` files but absent from the pinned tree.
- README-only or type-only labels without executable/config/model evidence.
