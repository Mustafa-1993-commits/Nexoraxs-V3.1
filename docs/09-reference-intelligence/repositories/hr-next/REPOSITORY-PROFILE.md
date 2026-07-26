# hr-next Repository Profile

## Identity

| Field | Verified value |
|---|---|
| Repository ID | `SRC-HRNEXT` |
| Canonical name | `hr-next` |
| Upstream project | `frappe/hrms` |
| Upstream Git URL | `https://github.com/frappe/hrms.git` |
| Local Git root | `/home/mustafa/projects/hr-next` |
| Default/current branch | `develop` / `develop` |
| Pinned/current SHA | `8be64b735e347fdaaf4db3b045605e9a7a9ba856` |
| Commit time | `2026-07-22T16:23:39+05:30` |
| Commit subject | `Merge pull request #4984 from akhtarmohsin/feat/add-contract-link-in-employee-connections` |
| License | `GPL-3.0-only` |
| Discovery mode/state | `Initial` / `Complete` |
| Reference lifecycle | `KNOWLEDGE_READY` |
| Understanding coverage | `0 / 360 (0.0)` |
| Working tree | Clean before and after; zero untracked paths |
| Tracked paths | `1,570` |

The stale `SRC-HR-NEXT-NEXORAXS` registration pointed to nonexistent `/home/mustafa/projects/hr-next-nexoraxs`. Initial discovery reconciles it to the user-authoritative `SRC-HRNEXT` record and preserves the former ID as a historical registration alias; no prior feature or evidence record used it.

## Repository Topology

- `hrms/`: installable Python/Frappe application, split into `HR` and `Payroll` modules.
- `frontend/`: Vue 3 + Ionic employee self-service PWA built by Vite.
- `roster/`: Vue 3 + TypeScript monthly shift roster built by Vite.
- `frappe-ui`: uninitialized gitlink at `863eaae9ada2edb287fc09fb21d05212bb5eebe9`; external source boundary.
- `docker/`: local MariaDB, Redis, and Frappe Bench development stack.
- `.github/`: CI, lint, translation, release, patch, and image workflows.
- `semgrep/`: repository test-correctness rules.

## Evidence-Backed Inventory

| Area | Count |
|---|---:|
| Frappe DocTypes | 159 (105 parent, 54 child tables) |
| Whitelisted Python methods | 219 (4 guest-callable) |
| Reports | 28 |
| Desk workspaces | 9 |
| Dashboard charts | 33 |
| Number cards | 32 |
| Desk pages | 2 |
| Web forms | 1 |
| Python test files | 124 |
| Translation catalogs/templates | 37 |
| Stable features | 360 |
| Evidence records | 919 |

## Scope Controls

- Source was read only; no checkout, submodule initialization, dependency install, build, test, or generator ran inside it.
- This discovery did not create a Reference Knowledge Object or perform deep understanding.
- `Complete` means repository-inventory coverage passed, not that any capability is selected, recommended, adapted, approved, or fully understood.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
