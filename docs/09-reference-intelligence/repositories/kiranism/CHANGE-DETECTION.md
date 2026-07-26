
# Kiranism Shadcn Change Detection

## Discovery Boundary

| Field | Value |
|---|---|
| Mode | Initial |
| Discovered at | `2026-07-26T18:49:42+03:00` |
| Pinned discovered SHA | `06e83c0b0e937f98184b343b92756ae0cadd7c92` |
| Current SHA at completion | `06e83c0b0e937f98184b343b92756ae0cadd7c92` |
| Default/current branch | `main` |
| Changed files since pinned SHA | none |
| Added feature records | 208 |
| Modified feature records | 0 |
| Removed feature records | 0 |
| Potentially affected prior records | none; initial discovery and no prior catalog |
| Stale | false |

## Read-Only Fingerprint

| Component | Before | After | Result |
|---|---|---|---|
| HEAD | `06e83c0b0e937f98184b343b92756ae0cadd7c92` | `06e83c0b0e937f98184b343b92756ae0cadd7c92` | identical |
| Git index | `3533ff60920be8350c79ef6909ff5098e1fa5d0833b4dd8df65825417a5deb1b` | `3533ff60920be8350c79ef6909ff5098e1fa5d0833b4dd8df65825417a5deb1b` | identical |
| Recursive tree objects | `88b139ff6de192fdec92e5e1938f93e3ce75c2cff3564eeeee680933babd9c4a` | `88b139ff6de192fdec92e5e1938f93e3ce75c2cff3564eeeee680933babd9c4a` | identical |
| Tracked diff | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | identical |
| Porcelain v2 + untracked | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | identical |
| Tracked path set | `53673dc3e25140bdafc8a05835f66635491ca7c2cd537cfadfa8e09c1dc1f2e3` | `53673dc3e25140bdafc8a05835f66635491ca7c2cd537cfadfa8e09c1dc1f2e3` | identical |
| Combined fingerprint | `7cb785f0e385c477062e011b3bdb2a365a5e3efe2964f815f9a8b126cea510cf` | `7cb785f0e385c477062e011b3bdb2a365a5e3efe2964f815f9a8b126cea510cf` | identical |

The source working tree was clean with zero untracked paths before and after discovery. No source file, ignored output,
index entry, dependency tree, branch, reference, configuration, or generated artifact was changed.

## Future Delta Rule

Any later SHA mismatch makes this discovery stale until delta discovery compares changed paths to evidence/feature
dependencies, refreshes affected records, reruns coverage, and records a new before/after fingerprint. Discovery
completion does not create or refresh Knowledge Objects.
