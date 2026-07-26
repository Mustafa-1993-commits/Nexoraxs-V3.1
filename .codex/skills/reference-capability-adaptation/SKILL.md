---
name: reference-capability-adaptation
description: Produce an independent, governance-aligned NexoraXS capability design from one or more current Reference Knowledge Objects only after explicit ADAPT intent. Use when the user asks to adapt, translate, or propose a reference capability for NexoraXS; separate observations from proposals, preserve architecture and tenancy, include provenance and license constraints, and never implement runtime code or approve the proposal.
---

# Reference Capability Adaptation

## Entry Gate

Run only for explicit `ADAPT` intent. If the user asks to understand or compare, stop at that mode. Never infer adaptation from a catalog lookup, selected reference, reuse assessment, or ranking request.

## Read Before Acting

Read:

1. `docs/99-architecture-freeze/`;
2. applicable Accepted ADRs and the canonical glossary under `docs/00-governance/`;
3. applicable Genesis and approved milestone baselines;
4. `.specify/memory/constitution.md`;
5. `AGENTS.md`;
6. `docs/09-reference-intelligence/UNDERSTAND-COMPARE-ADAPT.md`;
7. the current Reference Knowledge Objects and their evidence/license sections.

Stop at any architectural contradiction. Do not invent an owner, lifecycle, permission, tenant model, or default.

## Preconditions

Require:

- explicit target NexoraXS business context;
- one or more schema-valid, current `UNDERSTOOD` objects;
- current pinned evidence and license review;
- an identified owning NexoraXS domain and applicable organization scope.

Refresh stale objects through `repository-deep-understanding`. Do not adapt blocked, stale, or unsupported claims as fact.

## Separate the Output

Maintain three explicit partitions:

1. **Observed source behavior** — cited Reference Knowledge Object claims only.
2. **Extracted principles** — technology- and domain-neutral lessons, without copied expression.
3. **Proposed NexoraXS design** — independent decisions labeled `Proposal`.

List rejected source-specific assumptions separately.

## Preserve NexoraXS Boundaries

Apply, where relevant:

- Laravel backend and Next.js frontend implementation choices;
- Workspace → Business → Business Unit → Department/Branch context;
- server-side tenant isolation and explicit resource authorization;
- one canonical write owner and contract-based cross-domain access;
- OS independence;
- queues with idempotency, retry, timeout, failure, audit, and observability;
- private object storage and authorized delivery;
- governed APIs, Events, jobs, notifications, integrations, and realtime;
- Arabic/English, RTL/LTR, accessibility, loading, empty, error, unauthorized, and recovery states;
- security, privacy, Audit, logs, metrics, traces, health, correlation, and data minimization;
- backward-compatible contracts, migrations, rollout, and required tests.

Reject foreign branding, tenant hierarchy, role names, permission semantics, lifecycle, domain ownership, database access, infrastructure defaults, and source-specific identifiers unless an authoritative NexoraXS decision intentionally retains them.

## Required Output

Produce:

- mode `ADAPT` and explicit proposal status;
- source observations with object/claim/evidence provenance;
- extracted principles;
- rejected source-specific assumptions;
- proposed capability purpose and NexoraXS user journey;
- owning domain, canonical write owner, and scope;
- proposed domain model;
- tenancy and authorization boundary;
- roles and permissions;
- API and contract design;
- backend services/use cases;
- frontend routes, components, state, interactions, accessibility, and localization;
- events, jobs, schedulers, notifications, webhooks, realtime, and storage;
- migration and rollout;
- tests and acceptance evidence;
- security, Audit, privacy, and observability;
- risks, unknowns, contradictions, and decisions requiring approval;
- provenance and license statement.

All design choices remain proposals until approved through the normal governance and Spec Kit workflow.

## Persistence

When the user requests a persisted proposal, store it under:

`docs/09-reference-intelligence/adaptations/<capability-slug>/<adaptation-id>.md`

Update only the canonical capability’s `adaptation_history` with state `PROPOSED`. Never record `APPROVED` without an external approval reference.

## Prohibitions

- Do not copy or translate source code.
- Do not preserve foreign names by default.
- Do not modify any source repository.
- Do not implement NexoraXS runtime code.
- Do not create or approve a feature specification automatically.
- Do not silently advance to `/speckit.specify`.
- Do not state that a license permits copying unless authoritative legal review says so.

End by listing approval decisions and the next governed step; do not execute it.
