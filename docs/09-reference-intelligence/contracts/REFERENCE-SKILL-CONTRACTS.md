# Reference Intelligence Skill Contracts

## Shared Preconditions

All skills:

- resolve repositories through `REGISTRY.md`;
- treat external repositories as read-only;
- use authoritative discovery catalogs and pinned evidence first;
- preserve stable feature IDs;
- distinguish `Verified`, `Inferred`, `Unknown`, and `Contradictory`;
- do not copy source code;
- do not implement NexoraXS runtime features;
- do not treat license analysis as permission to copy;
- stop when required discovery is missing or stale in an affected area.

## `repository-deep-understanding`

Inputs:

- one registered discovered repository;
- one stable feature ID, canonical capability, or unambiguous semantic request;
- explicit or default `UNDERSTAND` mode.

Behavior:

1. resolve catalog and pin;
2. expand aliases and direct/indirect feature dependencies;
3. load discovery evidence;
4. reuse a current object or inspect only necessary pinned source;
5. trace business, workflow, auth/tenancy, data, backend, frontend, dependencies, quality, security, and license;
6. persist or partially refresh one Reference Knowledge Object;
7. update indexes and validate.

Output: source-faithful explanation plus object path, state, staleness, claims, evidence, gaps, and license constraints.

## `reference-feature-retrieval`

The existing selected-reference contract remains supported.

- Lightweight catalog request: return catalog records only.
- Deep implementation question: execute `repository-deep-understanding`.
- Current object: retrieve it after validation.
- Stale object: refresh affected sections.
- Ambiguous capability: return candidate matches before deep analysis.
- Missing discovery: stop and request `full-repository-discovery`.
- Explicit selected-reference request: produce the existing Selected Reference Evidence package; use a current object when deeper fields are needed.

It never performs ADAPT.

## `reference-capability-comparison`

Inputs:

- one canonical capability or semantic request;
- two or more explicitly named discovered repositories.

It obtains current objects on demand and compares observations across business behavior, architecture, workflow, authorization, tenancy, data, backend/frontend, jobs/realtime/integrations, quality/security, coupling, license, evidence, contradictions, and unknowns.

It preserves repository terminology, maps aliases, does not rank unless explicitly requested, and never adapts to NexoraXS.

## `reference-capability-adaptation`

Inputs:

- explicit `ADAPT` intent;
- one or more current Reference Knowledge Objects;
- authoritative NexoraXS architecture/governance;
- target NexoraXS business context.

Output:

- source observations;
- extracted principles;
- rejected foreign assumptions;
- proposed NexoraXS capability, journey, domain model, tenancy, permissions, APIs, backend/frontend, events/jobs/notifications, rollout, tests, risks, approval decisions, and provenance/license statement.

Every design decision is a proposal. The skill performs no runtime implementation, approval, or silent Spec Kit transition.

## Invocation Boundary

```text
catalog lookup -> reference-feature-retrieval
deep source question -> repository-deep-understanding
two-or-more repository comparison -> reference-capability-comparison
explicit NexoraXS proposal -> reference-capability-adaptation
```

See [UNDERSTAND-COMPARE-ADAPT.md](../UNDERSTAND-COMPARE-ADAPT.md) for the normative mode rules.
