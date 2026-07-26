# Plane Repository Profile

## Discovery Boundary

- Repository ID: `SRC-PLANE`
- Canonical name: `makeplane/plane`
- Local source: `/home/mustafa/projects/Plane`
- Source URL: `https://github.com/makeplane/plane.git`
- Branch: `preview`
- Pinned discovered revision: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Commit subject: `chore(deps): resolve open Dependabot security alerts (#9456)`
- Commit date: `2026-07-22T00:26:18+05:30`
- Discovery mode: Initial
- Discovery timestamp: `2026-07-26T02:24:20+03:00`
- Lifecycle state: **Complete**
- Source treatment: Read-only; all evidence was read from the pinned Git object database rather than from mutable worktree content.

The source worktree was dirty before discovery: tracked `setup.sh` was modified, and `plane-app/` plus `setup-repository.sh` were untracked. Those three worktree-only surfaces were excluded. No source file was modified. See [E001](EVIDENCE-MANIFEST.md#e001), [E002](EVIDENCE-MANIFEST.md#e002), and [E003](EVIDENCE-MANIFEST.md#e003).

## Identity and Product Boundary

Plane is an AGPL-licensed, multi-application project-management system. At this revision, the tracked Community Edition comprises a React Router workspace application, a React Router instance-admin application, an SSR public Space application, a Django/DRF API, a Node/Hocuspocus collaboration service, and a Caddy proxy. Fifteen internal TypeScript packages provide editor, UI, state, services, types, constants, localization, logging, and tooling capabilities. [E004](EVIDENCE-MANIFEST.md#e004), [E005](EVIDENCE-MANIFEST.md#e005), [E006](EVIDENCE-MANIFEST.md#e006)

The repository deliberately contains `core`/`extended` and CE/EE extension seams. Empty or abstract extended surfaces are not counted as executable enterprise features. GitHub, Slack, Jira, importer, payment, subscription, epic, and other types or models are cataloged only at the narrow substrate level proven by source. [E007](EVIDENCE-MANIFEST.md#e007), [E072](EVIDENCE-MANIFEST.md#e072)

## Repository Census

The pinned tree contains **5,250 tracked files**. `git ls-files -s` for the inspected worktree produced the index fingerprint `01351ee560f9bd87a886285c3317145540a08cae3ff9e0b78c87be27e7100334`; no Git submodule entries were present. [E002](EVIDENCE-MANIFEST.md#e002)

| Disjoint tracked-file class | Count | Treatment |
|---|---:|---|
| Runtime and tooling source | 3,798 | Inspected by application/package, route, symbol, and capability |
| Localization resources | 532 | Language/namespace census and runtime loader inspected |
| Binary/media/font assets | 411 | Counted and mapped by consumer; binary payloads not decoded unless needed |
| Configuration/manifests/locks | 129 | Runtime, build, CI, deployment, and dependency surfaces inspected |
| Database migrations | 121 | Range and schema evolution surface inspected; current models mapped |
| SVG assets | 97 | Counted and mapped as UI/static assets |
| Tests | 71 | Framework, category, and feature coverage inspected |
| Documentation/legal text | 37 | Used as supporting context only, never as sole feature proof |
| Other tracked artifacts | 20 | Environment examples, nginx/supervisor files, maps, and control files classified |
| Styles | 19 | Theme, token, editor, app, and component styles inspected |
| Templates | 15 | Backend email/application templates inspected |
| **Total** | **5,250** | **All tracked paths classified** |

Top-level distribution is `apps/` 3,442 files, `packages/` 1,736, `deployments/` 22, `.github/` 15, with 35 root/control files. [E008](EVIDENCE-MANIFEST.md#e008)

## Version and Working-Tree Notes

- Root JavaScript packages report `1.3.1`; `apps/api/pyproject.toml` reports `0.24.0`. The repository does not state whether these are intentionally independent release lines. This is `C-001`. [E086](EVIDENCE-MANIFEST.md#e086)
- `COPYRIGHT.txt` says “See the LICENSE file,” while the tracked license is `LICENSE.txt`. SPDX headers and package manifests consistently identify AGPL. This is `C-002`. [E087](EVIDENCE-MANIFEST.md#e087)
- Current source `HEAD` equaled the pinned SHA at the final static check. The catalog becomes stale if that changes.

## Discovery Semantics

`Verified` means executable source, configuration, model/migration, tests, or repository metadata directly supports the narrow claim. `Inferred`, `Unknown`, and `Contradictory` are never promoted into verified behavior. Discovery does not rank, recommend, select, copy, or authorize any capability for NexoraXS.
