# Plane Change Detection

## Discovery Record

- Repository ID: `SRC-PLANE`
- Discovery mode: Initial
- Pinned discovered SHA: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Current SHA at final static check: `a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4`
- Branch: `preview`
- Source URL: `https://github.com/makeplane/plane.git`
- Discovery timestamp: `2026-07-26T02:24:20+03:00`
- Baseline predecessor: None

## Initial Baseline

This run creates the first normalized repository knowledge model and feature catalog for `SRC-PLANE`. Because there is no earlier discovered SHA:

- changed files since previous discovery: Not applicable;
- added feature records: all current `PLANE-*` records;
- modified feature records: none;
- removed feature records: none;
- potentially affected prior features: none.

## Worktree Boundary

Dirty worktree content was present before discovery and excluded from the baseline:

- modified tracked `setup.sh`;
- untracked `plane-app/`;
- untracked `setup-repository.sh`.

The baseline is the committed Git tree at the pinned SHA, not the mutable worktree. [E003](EVIDENCE-MANIFEST.md#e003)

## Delta Trigger

The catalog becomes `Stale` if:

- `HEAD` differs from the pinned SHA;
- the evidence path/symbol no longer exists or materially changes;
- license/notice metadata changes;
- an excluded extended integration becomes part of the Community tree;
- a contradiction is resolved in source;
- a source path is rewritten such that evidence cannot be reproduced.

Delta discovery must compare Git trees, map changed files to feature IDs, reverify affected records, update evidence/dependencies/license/unknowns, and rerun coverage before returning to `Complete`.

## Staleness Decision

**Not stale.** At final validation, source `HEAD` still matched the pinned SHA, the pre-existing worktree status was unchanged, all 18 artifacts were present, the YAML parsed, the 161 Markdown/YAML/index feature IDs matched, and the coverage contract passed.
