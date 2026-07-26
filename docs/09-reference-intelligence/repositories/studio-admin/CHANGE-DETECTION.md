
# studio-admin Change Detection

## Discovery Boundary

| Field | Value |
|---|---|
| Mode | Initial |
| Discovered at | `2026-07-26T21:07:30+03:00` |
| Pinned discovered SHA | `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` |
| Current SHA at completion | `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` |
| Default/current branch | `main` |
| Working-tree state | one pre-existing unstaged `package-lock.json` modification |
| Changed files since pinned SHA | `package-lock.json` in working tree; excluded from pinned evidence |
| Added feature records | 261 |
| Modified feature records | 0 |
| Removed feature records | 0 |
| Potentially affected prior records | none; initial discovery and no prior catalog |
| Stale | false |

## Read-Only Fingerprint

| Component | Before | After | Result |
|---|---|---|---|
| HEAD | `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` | `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` | identical |
| Git index | `edc527157edf16c0e65def15f39708969291af5a606fcb57614a9e06533af130` | `edc527157edf16c0e65def15f39708969291af5a606fcb57614a9e06533af130` | identical |
| Recursive tree objects | `e8c294c2f364d7a5fca4201318c6cc82f7d8f4148ef79a637c2b25bcc3dae49c` | `e8c294c2f364d7a5fca4201318c6cc82f7d8f4148ef79a637c2b25bcc3dae49c` | identical |
| Tracked diff | `0c412014a4d0a232514711fa60b63b0234e2359fec07fd03c78a67e6a7ac0948` | `0c412014a4d0a232514711fa60b63b0234e2359fec07fd03c78a67e6a7ac0948` | identical |
| Porcelain v2 + untracked | `9027a2f04164a53a12bdefc1c821309ab0ae2a6ba5edc1d05a771f26ee88c098` | `9027a2f04164a53a12bdefc1c821309ab0ae2a6ba5edc1d05a771f26ee88c098` | identical |
| Tracked path set | `581c555029f8056c314b9df9e230031b585500b7907cf5d826761a8ad6c9f2e6` | `581c555029f8056c314b9df9e230031b585500b7907cf5d826761a8ad6c9f2e6` | identical |
| Combined fingerprint | `562e29ba46ef301dc7ddd9c75efe54b3ea46156db65f04ad309de6d4e2bb1687` | `562e29ba46ef301dc7ddd9c75efe54b3ea46156db65f04ad309de6d4e2bb1687` | identical |

The exact pre-existing dirty state remained unchanged. Discovery ran only read-only Git/filesystem operations against the
source repository. No source file, ignored output, dependency tree, index entry, branch, ref, or configuration changed.

## Future Delta Rule

Any later SHA mismatch makes this discovery stale until delta discovery compares changed paths against feature/evidence
dependencies, refreshes affected records, reruns coverage, and records a new fingerprint. Discovery completion does not
create or refresh Knowledge Objects.
