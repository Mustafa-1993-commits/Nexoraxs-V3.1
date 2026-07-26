# hr-next Change Detection

## Discovery Boundary

| Field | Value |
|---|---|
| Mode | Initial |
| Discovered at | `2026-07-26T19:24:35+03:00` |
| Pinned discovered SHA | `8be64b735e347fdaaf4db3b045605e9a7a9ba856` |
| Current SHA at completion | `8be64b735e347fdaaf4db3b045605e9a7a9ba856` |
| Default/current branch | `develop` |
| Changed files since pinned SHA | none |
| Added feature records | 360 |
| Modified feature records | 0 |
| Removed feature records | 0 |
| Potentially affected prior features | none; initial discovery |
| Stale | false |

## Read-Only Fingerprint

| Component | Before | After | Result |
|---|---|---|---|
| HEAD | `8be64b735e347fdaaf4db3b045605e9a7a9ba856` | `8be64b735e347fdaaf4db3b045605e9a7a9ba856` | identical |
| Git index tree | `da711b6eac2d2b89cc81a40fa7b488943deafcc7c32e053bb6d695e4951089d9` | `da711b6eac2d2b89cc81a40fa7b488943deafcc7c32e053bb6d695e4951089d9` | identical |
| Recursive tree listing | `567a75d29a9696ee60292be8e7144ac25e133a9f9866817f49283559b539d098` | `567a75d29a9696ee60292be8e7144ac25e133a9f9866817f49283559b539d098` | identical |
| Tracked diff | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | identical |
| Porcelain v2 + untracked | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | identical |
| Tracked path set | `fa522a51bb08f01b9bae0c2362082015b312bd7049e1efe779900a0dc9827c6f` | `fa522a51bb08f01b9bae0c2362082015b312bd7049e1efe779900a0dc9827c6f` | identical |
| Combined | `20c3e60dcb71cd38476d1a8bab9ada23109ba1f11930591c89f3e05f22636002` | `20c3e60dcb71cd38476d1a8bab9ada23109ba1f11930591c89f3e05f22636002` | identical |

The source working tree was clean with zero untracked paths before and after discovery. No source file, index entry, branch, reference, submodule, generated output, dependency tree, or configuration was changed.

## Future Delta Rule

Any later SHA or fingerprint mismatch makes this discovery stale until delta discovery compares changed paths to evidence and feature dependencies, refreshes affected records, reruns coverage, and records a new before/after fingerprint.
