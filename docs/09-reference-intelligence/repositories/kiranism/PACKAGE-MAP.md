
# Kiranism Shadcn Package and Topology Map

## Tracked Topology

| Path | Tracked files | Role |
|---|---:|---|
| `src/` | 275 | Runtime application |
| `.agents/` | 165 | Agent skill resources |
| `.claude/` | 131 | Mirrored agent skill resources |
| `.migration/` | 34 | Base UI migration records |
| `scripts/` | 13 | Cleanup utility, templates, dev helper |
| `public/` | 6 | Static assets and machine-readable guides |
| `docs/` | 4 | Clerk, forms, navigation, theme guides |
| `.husky/` | 2 | Git hooks |
| root and other config | 23 | Package, lock, build, lint, format, env, license |
| **Total** | **653** | One Git worktree; no submodule |

## Runtime Source Topology

| `src/` boundary | Files | Verified role |
|---|---:|---|
| `components/` | 109 | shell, primitives, composites, forms, themes, navigation |
| `features/` | 72 | feature-specific UI/API/schema/state |
| `app/` | 54 | routes, layouts, handlers, errors, loading/default |
| `styles/` | 12 | global/theme/palette CSS |
| `hooks/` | 10 | table, nav, media, debounce, state helpers |
| `lib/` | 8 | query, parsing, API, formatting, refs, URL state |
| `config/` | 3 | navigation, data table, information content |
| `types/` | 2 | navigation and table types |
| `constants/` | 2 | product/user mock stores |
| instrumentation/proxy | 3 | request/auth and Sentry runtime entries |

## Package Boundary

[package.json](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/package.json) declares one private package named
`next-shadcn-dashboard-starter`. There is no npm/pnpm/yarn workspace, Turbo/Nx configuration, or internal published
package boundary. `bun.lock` is the only lockfile. Package scripts support Next development/build/start, Oxlint,
Oxfmt, Husky preparation, and no test command.

## Tests and Fixtures

No tracked `test`, `tests`, `__tests__`, `*.test.*`, `*.spec.*`, Storybook configuration, Playwright/Cypress/Vitest/Jest
configuration, or test framework dependency exists. Faker-generated runtime demo data is not a deterministic test fixture.
No source checks were executed during discovery because the source repository had to remain byte-for-byte and
working-tree-state unchanged.
