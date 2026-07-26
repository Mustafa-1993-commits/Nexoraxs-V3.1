---
name: reference-capability-comparison
description: Compare the same capability across two or more already discovered repositories using current Reference Knowledge Objects and pinned evidence. Use for explicit COMPARE requests about shared concepts, behavior, architecture, workflow, auth, tenancy, data, frontend/backend, quality, coupling, or license differences; do not adapt to NexoraXS or declare a winner unless explicitly requested.
---

# Reference Capability Comparison

## Purpose

Compare evidence-backed observations for one canonical capability across two or more explicitly named discovered repositories. Never adapt the result to NexoraXS.

## Read Before Acting

Read:

- `docs/09-reference-intelligence/REFERENCE-KNOWLEDGE-ARCHITECTURE.md`;
- `docs/09-reference-intelligence/UNDERSTAND-COMPARE-ADAPT.md`;
- `docs/09-reference-intelligence/contracts/REFERENCE-KNOWLEDGE-GRAPH-CONTRACT.md`;
- `docs/09-reference-intelligence/knowledge-index/`;
- `.codex/skills/repository-deep-understanding/SKILL.md`.

## Preconditions

Require:

- explicit `COMPARE` intent or an unambiguous comparison request;
- one capability or semantic request;
- two or more named registered repositories;
- authoritative discovery for every repository.

Return catalog candidates before deep analysis when the capability is ambiguous in any repository. Stop and request discovery for a missing repository.

## Workflow

1. Resolve one canonical capability name and preserve repository-specific aliases.
2. Resolve each repository’s matching feature IDs from its catalog.
3. Load the capability and alias indexes.
4. Locate current Reference Knowledge Objects for every implementation.
5. Invoke `repository-deep-understanding` in `UNDERSTAND` mode for missing or stale objects.
6. Exclude blocked inputs from current claims and label the comparison `PARTIAL`.
7. Build an evidence-linked matrix without merging repository terminology or domain models.
8. Update comparison availability in the canonical capability record after validation.

## Required Comparison Dimensions

Compare, where evidenced:

- shared concepts and business purpose;
- business behavior, defaults, limitations, and workflows;
- architecture and cross-layer boundaries;
- authorization, roles, permissions, membership, tenancy, and ownership;
- entities, relationships, persistence, cache, retention, and object storage;
- APIs, services, events, jobs, schedules, notifications, webhooks, realtime, and integrations;
- pages, components, forms, state, interaction, accessibility, and localization;
- dependencies, extension seams, feature flags, and coupling;
- tests, observability, security controls, gaps, contradictions, and unknowns;
- license and provenance constraints.

For every major row, cite the contributing object claim IDs and source evidence.

## Rules

- Compare observations only.
- Preserve each repository’s words and map aliases explicitly.
- Do not treat absence of evidence as evidence of absence.
- Do not claim runtime behavior from static source.
- Do not rank, score, recommend, or declare a winner unless the user explicitly requests it.
- A requested ranking remains COMPARE and does not authorize ADAPT.
- Do not copy source code.
- Do not modify source repositories.
- Do not produce NexoraXS architecture, Spec Kit artifacts, or runtime code.

## Output

Return:

- mode `COMPARE`;
- canonical capability and alias mapping;
- repository IDs, pinned SHAs, feature IDs, object IDs, and freshness;
- comparison matrix across every applicable dimension;
- shared concepts and repository-specific differences;
- evidence, confidence, unknowns, contradictions, and license constraints;
- comparison availability and blocked inputs.

End with an explicit statement that no adaptation or recommendation was performed.
