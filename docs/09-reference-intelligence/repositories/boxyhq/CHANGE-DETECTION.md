# BoxyHQ Change Detection

## Discovery Boundary

| Field | Value |
|---|---|
| Mode | Initial |
| Discovered at | `2026-07-26T18:05:54+03:00` |
| Pinned discovered SHA | `abc9b686823cbfb4973c79bc36fea37a3244be6c` |
| Current SHA at completion | `abc9b686823cbfb4973c79bc36fea37a3244be6c` |
| Default/current branch | `main` |
| Changed files since pinned SHA | none |
| Added feature records | 127 |
| Modified feature records | 0 |
| Removed feature records | 0 |
| Potentially affected prior features | none; initial discovery |
| Stale | false |

## Read-Only Fingerprint

| Component | Before | After | Result |
|---|---|---|---|
| HEAD | `abc9b686823cbfb4973c79bc36fea37a3244be6c` | `abc9b686823cbfb4973c79bc36fea37a3244be6c` | identical |
| Git index/tree | `fe0b07ad023ede81213f023ec2b38495eb5e8073165c5955397cc3ed6f44ec3c` | same | identical |
| Tracked diff | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | same | identical |
| Porcelain v2 + untracked | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | same | identical |
| Combined | `3af55031eabeed8439585961697b569e48cc35a81ef3f06ba1546ca3b187d1d3` | same | identical |

The source working tree was clean with zero untracked paths before and after discovery. No source file, index
entry, branch, reference, generated output, dependency tree, or configuration was changed.

## Future Delta Rule

Any later SHA mismatch makes this discovery stale until delta discovery compares changed paths to evidence and
feature dependencies, refreshes affected records, reruns coverage, and records a new before/after fingerprint.
