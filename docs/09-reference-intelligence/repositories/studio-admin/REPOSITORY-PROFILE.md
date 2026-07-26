
# studio-admin Repository Profile

## Identity

| Field | Verified value | Evidence |
|---|---|---|
| Repository ID | `SRC-STUDIO-ADMIN` | Requested registration |
| Canonical name | studio-admin | Requested registration |
| Upstream project | `arhamkhnz/next-shadcn-admin-dashboard` | Local `origin` and [package metadata](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| Upstream Git URL | `https://github.com/arhamkhnz/next-shadcn-admin-dashboard.git` | Local `origin` |
| Local read-only path | `/home/mustafa/projects/studio-admin` | Git root verified with `git rev-parse --show-toplevel` |
| Default/current branch | `main` | `refs/remotes/origin/HEAD -> refs/remotes/origin/main`; local branch `main` |
| Pinned/current SHA | `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` | Git `HEAD` and immutable object boundary |
| Commit timestamp | `2026-07-22T23:27:29+05:30` | Git commit metadata |
| Commit subject | `chore: update deps` | Git commit metadata |
| Root license | `MIT` | [LICENSE](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/LICENSE) |
| Discovery mode/state | `Initial` / `Complete` | [coverage contract](COVERAGE-REPORT.md) |
| Reference lifecycle | `KNOWLEDGE_READY` | [lifecycle index](../../knowledge-index/lifecycle.yaml) |
| Understanding coverage | `0 / 261 (0.0)` | No Knowledge Object exists |

## Source State

- Source tree was already dirty before discovery: exactly one unstaged tracked modification, `package-lock.json`; zero staged or untracked paths.
- Porcelain-v2 entry before and after: `1 .M N... 100644 100644 100644 16b93960e736477054f35c72dbbf51ebcd227c64 16b93960e736477054f35c72dbbf51ebcd227c64 package-lock.json`.
- Tracked files: `293`; tracked runtime/config files under `src/`: `278`.
- Submodules: none.
- Before/after fingerprint: `562e29ba46ef301dc7ddd9c75efe54b3ea46156db65f04ad309de6d4e2bb1687` / `562e29ba46ef301dc7ddd9c75efe54b3ea46156db65f04ad309de6d4e2bb1687` — identical.
- Behavioral evidence was read from `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0:<path>`, so the pre-existing working-tree change was not treated as discovered source.
- No install, build, lint, formatter, cleanup, dependency, branch, index, reference, or write operation ran in the source repository.

## Topology

The pinned repository is one private Next.js 16 / React 19 application. `src/app` contains 190 route and screen files,
`src/components` contains 63 shared files (60 under `components/ui`), and no sibling application, workspace package,
backend service, worker, or deployment package is tracked.

## Discovery Boundary

This is repository-wide discovery only. It does not select, rank, recommend, compare, deeply understand, adapt, approve,
or implement any capability. README text, screenshots, names, dependencies, routes, and components were search leads.
Verified behavior is separated from partial UI, substrate/seams, configuration-only capabilities, absences, unknowns,
and contradictions. No source code or Knowledge Object was copied or generated.
