---
name: reference-feature-retrieval
description: Retrieve authoritative catalog data or a selected-reference evidence package from an already discovered repository, and route deep implementation questions to current on-demand Reference Knowledge Objects. Use for feature lookup, selected reference handoff, or deep retrieval; preserve stable feature IDs, handle ambiguity and staleness, and never implement or adapt NexoraXS.
---

# Reference Feature Retrieval

## Purpose

Retrieve an already discovered feature from a known source repository. Preserve the existing Selected Reference Evidence contract while adding lazy routing to Reference Knowledge Objects for questions deeper than the catalog.

## Inputs

- Registered source repository ID or name.
- Stable feature ID, unambiguous feature name, or semantic capability request.
- Request depth: catalog-only, selected-reference handoff, or deep implementation question.
- Optional target NexoraXS concern for compatibility questions only.

## Preconditions

1. The repository is registered.
2. The repository has an authoritative discovery workspace and machine catalog.
3. The pinned revision, evidence, license, coverage, unknowns, and stale status are known.
4. Selected-reference output requires explicit user selection; never silently substitute a source.

If discovery is missing, stop and request `full-repository-discovery`.

## Route by Request Depth

### Catalog-Only

For list, lookup, summary, purpose, classification, or entry-point questions:

1. resolve exact feature IDs, canonical names, and aliases;
2. return authoritative catalog fields and discovery evidence links;
3. do not inspect original source;
4. do not create a Reference Knowledge Object.

### Ambiguous Capability

When multiple catalog records or aliases match:

1. return candidate repository, feature ID, canonical name, classification, and match reason;
2. ask the user to choose;
3. stop before deep source inspection.

### Deep Implementation Question

For end-to-end workflow, authorization, tenancy, data model, backend/frontend, job, realtime, integration, failure, quality, or security questions:

1. read `.codex/skills/repository-deep-understanding/SKILL.md`;
2. find a current object in `knowledge-index/knowledge-objects.yaml`;
3. validate and retrieve it when current;
4. invoke the deep-understanding workflow when missing;
5. refresh only affected sections when stale;
6. return the current object findings in `UNDERSTAND` mode.

Never route a deep question to ADAPT.

### Selected Reference Evidence

When the user explicitly selects a repository feature for later Spec Kit use:

1. resolve the exact repository and stable feature ID;
2. load profile, catalog record, evidence manifest, dependency map, license review, coverage report, unknowns, and change detection;
3. validate the local source revision against the pin;
4. use a current Reference Knowledge Object when the handoff requires fields beyond the catalog;
5. produce the backward-compatible Selected Reference Evidence package.

## Selected Reference Evidence Output

Keep these fields:

- selected repository ID and name;
- stable feature ID and canonical name;
- pinned discovered SHA and current SHA;
- current/stale status;
- feature purpose and behavior;
- user-visible entry points;
- source evidence paths and symbols;
- frontend and backend implementation map;
- data, state, permission, tenancy, and workflow behavior;
- internal and external dependencies;
- tests and validation evidence;
- license impact;
- unknowns and contradictions;
- explicit adopted behavior;
- explicit excluded behavior;
- NexoraXS compatibility questions;
- readiness for Spec Kit handoff.

“Adopted behavior” records the user’s explicit selection for specification consideration; it is not an approved design or implementation.

## Stale Handling

When current source, catalog, or object evidence differs:

1. read repository `CHANGE-DETECTION.md`;
2. identify affected feature IDs and object sections;
3. require delta discovery when catalog impact is possible or unknown;
4. refresh only isolated affected object sections after catalog authority is current;
5. allow retrieval with a stale warning only when evidence proves the requested records are unaffected.

Never present stale knowledge as current.

## Prohibited Behavior

- Do not implement or adapt the feature.
- Do not edit a source repository.
- Do not copy source code.
- Do not silently choose a repository or feature.
- Do not bypass NexoraXS architecture or governance.
- Do not hide license, security, tenancy, dependency, unknown, or contradiction impact.
- Do not infer that visual or conceptual similarity authorizes copying.

## Spec Kit Boundary

```text
User selects repository feature
  -> Reference Feature Retrieval
  -> current catalog and optional Reference Knowledge Object
  -> Selected Reference Evidence
  -> /speckit.specify
```

This skill ends before Spec Kit and does not create runtime code. The source remains reference evidence; NexoraXS remains authoritative.
