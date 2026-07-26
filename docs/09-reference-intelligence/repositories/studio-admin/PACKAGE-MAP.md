
# studio-admin Package and Topology Map

## Tracked Topology

| Path | Files | Role |
|---|---:|---|
| `src/` | 278 | Runtime application and source tooling |
| root configuration/docs/license | 13 | package, lock, Next, TypeScript, Biome, PostCSS, shadcn, guidance |
| `.husky/` | 1 | pre-commit hook |
| `media/` | 1 | dashboard screenshot |
| **Total** | **293** | One worktree; no submodule |

## Package Boundary

[package.json](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) declares one private package named `studio-admin`, version `2.2.0`. There is no npm/pnpm/yarn
workspace, Turbo/Nx configuration, or published internal package boundary. `package-lock.json` is the sole lockfile.

## Dependency Roles

- Runtime UI: Radix/Base UI, shadcn, Lucide, Simple Icons, CVA, clsx, Tailwind merge.
- Tables/forms/state: TanStack Table, React Hook Form, Zod, Zustand.
- Visualization: Recharts, FullCalendar, D3 Geo, TopoJSON.
- Interaction: dnd-kit, Embla, resizable panels, cmdk, Vaul, date-fns.
- Build/tooling: Next, React, TypeScript, Tailwind/PostCSS, Biome, Husky, lint-staged, ts-node.

## Testing and Fixtures

No tracked `test`, `tests`, `__tests__`, `*.test.*`, `*.spec.*`, Storybook, Playwright, Cypress, Vitest, Jest, or test
framework dependency exists. Source-embedded demo records are application fixtures, not test fixtures. Source checks were
not run because they could generate ignored output and violate the required before/after fingerprint contract.
