# hr-next Package Map

## Package and Module Inventory

| Boundary | Contents | Evidence-backed count/role |
|---|---|---|
| Root Python package | `pyproject.toml`, `hrms/` | Frappe app requiring Python >=3.10, Frappe/ERPNext v17 dev ranges |
| HR module | `hrms/hr/` | 116 DocTypes, 18 reports, 8 workspaces, pages/web form/charts/cards |
| Payroll module | `hrms/payroll/` | 43 DocTypes, 10 reports, 1 workspace, charts/cards/notifications |
| Employee PWA package | `frontend/` | Vue/Ionic app; independent manifest and Yarn lock |
| Roster package | `roster/` | Vue/TypeScript app; independent manifest and Yarn lock |
| External gitlink | `frappe-ui` | Gitlink `863eaae9...`; uninitialized and not inspected |
| Repository tooling | `.github/`, `docker/`, `semgrep/` | CI, local stack, release and static analysis |

## Python/Internal Modules

`hrms/api`, `controllers`, `mixins`, `overrides`, `regional`, `utils`, `patches`, `templates`, `www`, `public`, and `workspace_sidebar` provide reusable boundaries around APIs, domain coordination, PWA notification mixins, ERPNext extensions, localization, caching/helpers, migrations, templates, web routes, assets, and Desk navigation.

## Dependency Boundary

- Root `package.json` has a misspelled `aworkspaces` key; scripts, not Yarn workspaces, orchestrate the two apps.
- Each Vue app pins `frappe-ui@0.1.105`; the tracked gitlink is not required to prove those manifest-level dependencies.
- No Python lockfile pins exact Frappe/ERPNext commits.

## Test Topology

| Area | Test evidence |
|---|---:|
| Controllers | 1 Python test file |
| HR | 94 Python test files |
| Payroll | 27 Python test files |
| Cross-cutting/roster utilities | 2 Python test files |
| PWA/roster JavaScript or browser tests | 0 |

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
