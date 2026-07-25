---
name: reference-feature-retrieval
description: Retrieve an already discovered feature from a user-selected source repository, validate its evidence and revision status, and prepare a reference package for Spec Kit without implementing it.
---

# Reference Feature Retrieval

This Claude-compatible skill is intentionally kept semantically identical to `.codex/skills/reference-feature-retrieval/SKILL.md`.

Before execution, read and follow:

- `.codex/skills/reference-feature-retrieval/SKILL.md`
- the selected repository discovery workspace under `docs/09-reference-intelligence/repositories/`
- `docs/09-reference-intelligence/contracts/`

Resolve only the repository and feature explicitly selected by the user. Validate the pinned revision and stale status, load all linked evidence and dependencies, expose unknowns and license impact, and prepare the Selected Reference Evidence package for a later Spec Kit handoff.

Do not implement the feature, silently select another source, modify a source repository, copy code automatically, or bypass NexoraXS architecture and governance.
