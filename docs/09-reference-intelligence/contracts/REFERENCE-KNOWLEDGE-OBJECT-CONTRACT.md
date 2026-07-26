# Reference Knowledge Object Contract

## Namespace

The contract name in this directory is **Reference Knowledge Object** (`reference-knowledge-object`). It is an external engineering-reference artifact and is not the canonical NexoraXS Knowledge Engine object defined by Governance.

## Identity

- Stable object ID: `RKO-<REPOSITORY-ID-TOKEN>-<CAPABILITY-TOKEN>`.
- Stable canonical capability ID: `CAP-<CAPABILITY-TOKEN>`.
- Repository-specific feature IDs remain unchanged and are listed in `related_feature_ids`.
- The object is immutable with respect to its pinned source revision except for evidence-backed correction or partial refresh.
- Supersession retains the prior object and records the successor ID.

## Persisted Artifact Set

```text
docs/09-reference-intelligence/repositories/<repository-slug>/knowledge/<capability-slug>/
  OVERVIEW.md
  BUSINESS-RULES.md
  WORKFLOW.md
  AUTHORIZATION-TENANCY.md
  DATA-MODEL.md
  BACKEND-FLOW.md
  FRONTEND-FLOW.md
  DEPENDENCIES.md
  QUALITY-SECURITY.md
  REUSE-LICENSE.md
  EVIDENCE.md
  KNOWLEDGE.yaml
```

| Artifact | Required content |
|---|---|
| `OVERVIEW.md` | Identity, purpose, actors, scope, state, staleness, feature closure |
| `BUSINESS-RULES.md` | Rules, invariants, defaults, configuration, limits |
| `WORKFLOW.md` | Entry points, commands, lifecycle, states, transitions, guards, failures, sequence |
| `AUTHORIZATION-TENANCY.md` | Scopes, roles, permissions, membership, ownership, isolation, public/private boundaries |
| `DATA-MODEL.md` | Entities, fields, relationships, constraints, indexes, persistence, cache, deletion, retention, storage |
| `BACKEND-FLOW.md` | Routes, handlers, services, policies, events, listeners, jobs, schedulers, notifications, webhooks, realtime |
| `FRONTEND-FLOW.md` | Pages, layouts, components, forms, state, hooks/services, interactions, UI states, accessibility, localization |
| `DEPENDENCIES.md` | Upstream/downstream relationships, integrations, extension seams, flags |
| `QUALITY-SECURITY.md` | Tests, fixtures, observability, security, gaps, contradictions, unknowns |
| `REUSE-LICENSE.md` | Analysis-only reuse value, coupling, isolation, risk, license, prohibited reuse, clean-room notes |
| `EVIDENCE.md` | Exact source paths, symbols, routes, models, ranges/claims, discovery IDs, confidence |
| `KNOWLEDGE.yaml` | Complete machine-readable record and section/evidence relationships |

## Claim Contract

Every major machine claim contains:

- stable `claim_id`;
- one bounded statement;
- `status`: `Verified`, `Inferred`, `Unknown`, or `Contradictory`;
- `confidence`: `High`, `Medium`, or `Low`;
- evidence record IDs;
- optional notes explaining inference, conflict, or missing evidence.

A `Verified` claim requires at least one exact evidence record. Static source proves code structure and configured behavior, not successful runtime execution. Runtime claims require runtime or test evidence.

## Required Knowledge Domains

`KNOWLEDGE.yaml` follows [REFERENCE-KNOWLEDGE-OBJECT.schema.yaml](REFERENCE-KNOWLEDGE-OBJECT.schema.yaml) and covers, where applicable:

1. identity;
2. business understanding;
3. workflow;
4. authorization and tenancy;
5. data;
6. backend;
7. frontend;
8. dependencies and relationships;
9. quality and security;
10. reuse and adaptation assessment;
11. evidence and claim confidence.

An empty field means not established, not silently not applicable. Markdown must label material unknown or not-applicable fields.

## Source and Evidence Rules

- Open authoritative catalog evidence before original source.
- Read source from the object database at the catalog’s pinned SHA when Git is available.
- Inspect only the dependency closure required for the requested capability.
- Cite paths and symbols; quote no source code.
- Preserve foreign terminology in observations and map aliases separately.
- Carry discovery unknowns, contradictions, exclusions, and license findings into the object.
- Do not upgrade `Inferred`, `Unknown`, or `Contradictory` evidence to `Verified`.

## Section Refresh

Each Markdown artifact has one `section_tracking` entry with:

- lifecycle state;
- source/evidence paths;
- evidence record IDs;
- an evidence fingerprint;
- verification timestamp.

Staleness maps changed evidence paths to section entries. Unaffected sections are retained. Any shared claim or relationship affected by a section refresh is revalidated before the object returns to `UNDERSTOOD`.

## Completion

An object is `UNDERSTOOD` only when:

- all 12 files exist;
- YAML and schema validation pass;
- repository ID and pinned SHA match the authoritative catalog;
- related feature IDs exist;
- all `Verified` claim references resolve;
- real source evidence resolves at the pinned revision;
- internal Markdown links resolve;
- relationship predicates are valid;
- license and prohibited-reuse statements exist;
- lifecycle and indexes are synchronized.

Otherwise use `ANALYSIS_REQUIRED`, `STALE`, or `BLOCKED`.
