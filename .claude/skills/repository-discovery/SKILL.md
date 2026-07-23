---
name: repository-discovery
description: Use when examining an external or internal repository to understand its architecture, features, runtime behavior, evidence paths, dependencies, tests, licensing, and reusable implementation references before specification or adoption work.
---

# Repository Discovery — Claude Adapter

The canonical skill is:

```text
.agents/skills/repository-discovery/SKILL.md
```

Before performing repository discovery, read and follow the canonical skill in full, including:

```text
.agents/skills/repository-discovery/references/discovery-schema.md
.agents/skills/repository-discovery/templates/discovery-report.md
.agents/skills/repository-discovery/templates/feature-record.md
```

Do not maintain an independent Claude-specific discovery process in this file. The `.agents` version is the single NexoraXS-authored source of truth for this skill.

Claude-specific behavior:

1. Use planning and parallel read-only analysis where it improves coverage.
2. Keep the examined repository unchanged.
3. Mark verified facts, inferences, unknowns, and contradictions explicitly.
4. Produce artifacts that conform to the canonical schema.
5. Stop before NexoraXS implementation; hand selected evidence to Spec Kit only after discovery is complete.