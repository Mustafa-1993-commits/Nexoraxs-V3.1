
# Kiranism Shadcn Application Map

## Application Topology

| Application | Boundary | Runtime | Evidence |
|---|---|---|---|
| Next Shadcn dashboard | Single private package; all public, auth, dashboard, API, and observability surfaces | Next.js `16.2.6`, React `19.2.4`, Node/Bun production options | [package manifest](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/package.json); [root layout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx) |

There are no workspace declarations, sibling packages, backend service, mobile app, Storybook app, worker, or CLI runtime.
The 296 tracked files under `.agents/` and `.claude/` are coding-agent resources, not deployed application packages;
[skills-lock.json](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/skills-lock.json) records their upstream sources and hashes.

## Runtime Areas

| Area | Role | State | Evidence |
|---|---|---|---|
| `src/app` | Route layouts, pages, error/loading/default files, API handlers | implemented | [RootLayout](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx) |
| `src/features` | Products, users, dashboard, forms, chat, kanban, notifications, auth/profile, query demo | implemented/partial | [ProductListing](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/products/components/product-listing.tsx) |
| `src/components` | Shared shell, primitive/composite UI, form fields, themes, navigation | implemented/substrate | [AppSidebar](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/app-sidebar.tsx) |
| `src/hooks`, `src/lib` | URL/table/query/navigation/state utilities | implemented/substrate | [useDataTable](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-data-table.ts) |
| `src/constants` | Process-local Faker data | demo/partial | [fakeProducts](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/constants/mock-api.ts) |
| `scripts` | Cleanup/removal and development-start guidance | tooling | [FEATURES](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/scripts/cleanup.js) |
| `.migration` | Base UI migration documentation | historical tooling | [migration record](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.migration/project.md) |
| `.agents`, `.claude` | Mirrored coding-agent skill distributions | developer tooling | [dashboard skill](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.agents/skills/kiranism-shadcn-dashboard/SKILL.md) |

## Build and Deployment

- Node 22 and Bun-lock dependency resolution: [.nvmrc](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.nvmrc),
  [bun.lock](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/bun.lock).
- Node non-root standalone image: [Dockerfile](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/Dockerfile).
- Bun non-root standalone image: [Dockerfile.bun](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/Dockerfile.bun).
- No Docker Compose, Kubernetes, Terraform, Helm, cloud app manifest, or health-check endpoint is tracked.
- `.github` contains only [FUNDING.yml](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.github/FUNDING.yml); no CI/CD workflow exists.
