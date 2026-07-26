
# studio-admin Application Map

## Application Topology

| Application | Boundary | Runtime | Evidence |
|---|---|---|---|
| studio-admin | Single private root package containing all screens, fixtures, UI, state, and build config | Next.js `16.2.11`, React `19.2.8`, Node/npm scripts | [package.json](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |

There are no workspaces, sibling runtime packages, backend application, mobile application, Storybook application,
worker, CLI runtime, or Git submodule.

## Source Areas

| Area | Files | Verified role |
|---|---:|---|
| `src/app/` | 190 | App Router pages, layouts, screen-local components/data, error surfaces |
| `src/components/` | 63 | 60 UI primitives plus calendar, date-range, and icon composites |
| `src/lib/` | 10 | preferences, cookies, local storage, fonts, class/initial helpers |
| `src/stores/` | 2 | preference provider and store |
| `src/hooks/` | 2 | mobile and large-screen detection |
| `src/styles/` | 4 | three presets and flag-icon CSS |
| `src/config`, `src/data`, `src/navigation` | 3 | application metadata, header personas, navigation |
| `src/scripts`, `src/server` | 3 | theme generation/boot and cookie actions |

## Build and Deployment

- Development/build/start are standard Next scripts in [package scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json).
- React Compiler and production console removal are configured in [next.config.mjs](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/next.config.mjs).
- No container, cloud, IaC, process-supervisor, or health-check configuration is tracked.
- No environment example or declared runtime secret exists.
- No CI/CD workflow is tracked.
