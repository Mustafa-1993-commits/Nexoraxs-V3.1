# Plane Package Map

## Workspace and Build

The repository is a private pnpm 11.3/Turborepo 2.9 workspace requiring Node `>=22.18.0`. Root tasks orchestrate build, development, start, clean, format, lint, types, and fixes; Turbo declares dependency-aware builds and checks with remote cache disabled. Pre-commit formatting/linting uses Husky and `lint-staged`. [E004](EVIDENCE-MANIFEST.md#e004), [E062](EVIDENCE-MANIFEST.md#e062)

Root release version is `1.3.1`. All JavaScript applications and most internal packages share it; `@plane/decorators` is `0.1.0`, and the Django project metadata is `0.24.0`. See `C-001`. [E086](EVIDENCE-MANIFEST.md#e086)

## Internal Packages

| Package | Files | Verified capability | Important internal/external dependencies | Evidence |
|---|---:|---|---|---|
| `@plane/constants` | 64 | Shared endpoint, filter, auth, analytics, project, work-item, view, theme, notification, and UI constants | Types consumed throughout apps | [E069](EVIDENCE-MANIFEST.md#e069) |
| `@plane/decorators` | 9 | Express controller and HTTP/WebSocket method decorators used by live server | Express metadata/reflection patterns | [E070](EVIDENCE-MANIFEST.md#e070) |
| `@plane/editor` | 238 | Tiptap/ProseMirror rich editor, document transforms, extensions, menus, uploads, mentions, tables, code, collaboration bindings | Tiptap, Yjs, Hocuspocus, React | [E064](EVIDENCE-MANIFEST.md#e064) |
| `@plane/hooks` | 9 | Cross-application React hooks | React/browser APIs | [E070](EVIDENCE-MANIFEST.md#e070) |
| `@plane/i18n` | 553 | i18next/ICU runtime, 19 languages, 28 namespaces, type/sync tooling | i18next, react-i18next, ICU | [E036](EVIDENCE-MANIFEST.md#e036) |
| `@plane/logger` | 8 | Shared structured logger and Express request middleware | Pino-compatible logging stack | [E070](EVIDENCE-MANIFEST.md#e070) |
| `@plane/propel` | 397 | Current design system: primitives, 180 icons, charts, empty states, emoji, menus, portals, tables, and Storybook | Base UI/Radix-style primitives, Recharts, Storybook | [E065](EVIDENCE-MANIFEST.md#e065) |
| `@plane/services` | 59 | Shared API, auth, workspace, project, work-item, cycle, module, intake, file, dashboard, live, IndexedDB, and admin services | Axios, Effect/shared types | [E067](EVIDENCE-MANIFEST.md#e067) |
| `@plane/shared-state` | 21 | Cross-app MobX stores and store helpers | MobX | [E068](EVIDENCE-MANIFEST.md#e068) |
| `@plane/tailwind-config` | 7 | Shared Tailwind CSS tokens, semantic canvas/surface/layer palettes, contrast variants, and animations | Tailwind CSS | [E035](EVIDENCE-MANIFEST.md#e035) |
| `@plane/types` | 123 | Shared TypeScript contracts for product, auth, analytics, filters, pages, notifications, instance admin, and extension seams | TypeScript only | [E069](EVIDENCE-MANIFEST.md#e069) |
| `@plane/typescript-config` | 7 | Base, React, React Router, Node library, and Next-oriented TypeScript configurations | TypeScript | [E070](EVIDENCE-MANIFEST.md#e070) |
| `@plane/ui` | 135 | Older/shared UI controls: auth forms, dropdowns, sortable/table/form/navigation/display primitives, Storybook | React, headless primitives, DnD | [E066](EVIDENCE-MANIFEST.md#e066) |
| `@plane/utils` | 97 | General and domain-oriented formatting, filtering, routing, theme, validation, editor, work-item, permission, and URL helpers | Shared types/constants | [E069](EVIDENCE-MANIFEST.md#e069) |
| `@plane/codemods` | 9 | Two AST codemods for function declarations and directive removal, with Vitest tests | jscodeshift/Vitest | [E056](EVIDENCE-MANIFEST.md#e056) |

## Application Package Dependencies

- `web`, `admin`, and `space` use React 18, React Router 7, Vite, Tailwind, MobX, i18next, the internal UI/Propel/editor/services/types packages, and browser interaction libraries. [E062](EVIDENCE-MANIFEST.md#e062)
- `live` uses Express, `express-ws`, Helmet, CORS, compression, Hocuspocus, Yjs, Redis, Effect, Zod, React PDF, Sharp, the internal editor/decorators/logger/services/types packages, and Vitest. [E040](EVIDENCE-MANIFEST.md#e040), [E062](EVIDENCE-MANIFEST.md#e062)
- `api` uses Django 4.2, DRF, PostgreSQL/psycopg, Redis, Celery, RabbitMQ, Channels, S3 storage, OpenAI, Slack SDK, PostHog, OpenTelemetry, Scout, DRF Spectacular, and security/sanitization libraries. [E061](EVIDENCE-MANIFEST.md#e061)

## Python Dependency Groups

`apps/api/pyproject.toml` separates base, production, test, and development groups. Base includes Django/DRF, database/cache/queue/storage, OAuth/integration, telemetry, spreadsheet, HTML sanitization, crypto/JWT, and API schema dependencies. Production adds Gunicorn. Tests add pytest, pytest-django/cov/xdist/mock, Factory Boy, Freezegun, Coverage, and HTTPX. [E061](EVIDENCE-MANIFEST.md#e061)

## Package Boundary Findings

- `@plane/editor`, `@plane/propel`, and `@plane/ui` are reusable packages but remain coupled to Plane tokens, types, state, or domain conventions in parts of their APIs.
- `@plane/types` includes extension/domain names without matching Community runtime features. A type is not treated as proof that the feature ships.
- The repository contains both `@plane/ui` and the newer/larger `@plane/propel`; their coexistence is verified, but no tracked migration-completion policy establishes which is globally canonical.
- Direct dependency versions are pinned through pnpm catalogs and Python requirement files. Dependency licenses are not recorded by the lockfiles; a complete transitive/container SBOM remains an explicit license unknown.
