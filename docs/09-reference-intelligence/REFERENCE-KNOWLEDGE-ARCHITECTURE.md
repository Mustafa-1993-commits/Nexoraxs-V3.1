# On-Demand Reference Knowledge Architecture

## Purpose

This layer turns an already discovered external capability into deeper, source-faithful engineering knowledge only when a user asks for it. It preserves Repository Discovery as the complete inventory authority and keeps comparison and NexoraXS adaptation behind explicit mode boundaries.

The execution pipeline is:

```text
Repository Discovery
  -> Feature Catalog and Evidence
  -> Deep Understanding on demand
  -> Capability Comparison on demand
  -> NexoraXS Adaptation on explicit request only
```

Deep understanding is lazy. Discovery does not create Reference Knowledge Objects for every feature, and this architecture does not reinterpret a discovery `Complete` state as full implementation understanding.

## Authority and Terminology Boundary

The canonical NexoraXS **Knowledge Object** is owned by the Knowledge Engine and is one structured, sourced, versioned unit of platform Knowledge. That runtime concept is defined by the [canonical glossary](../00-governance/glossary/GLOSSARY.md#knowledge-object), [Genesis Knowledge Engine](../01-genesis/05-KNOWLEDGE-ENGINE.md#knowledge-object), and Accepted ADR-009.

This reference-only layer therefore uses the qualified term **Reference Knowledge Object** and the machine type `reference-knowledge-object`. A Reference Knowledge Object:

- is an engineering encyclopedia artifact under `docs/09-reference-intelligence/`;
- is not platform Knowledge, a Knowledge Pack, a Rule, Business DNA, or a runtime aggregate;
- has no runtime owner and grants no write authority;
- cannot be consumed as NexoraXS canonical truth;
- records observations about an external repository at an immutable revision.

The shortened phrase “Knowledge Object” in this directory always means “Reference Knowledge Object” unless a link explicitly points to the canonical platform concept.

## Layers

| Layer | Authority | Mutation Boundary | Output |
|---|---|---|---|
| Repository Discovery | Complete repository inventory at a pinned revision | Discovery artifacts and feature index only | Stable feature records and evidence |
| Deep Understanding | Selected catalog records plus narrowly inspected pinned source | One Reference Knowledge Object and knowledge indexes | Source-faithful end-to-end explanation |
| Capability Comparison | Current Reference Knowledge Objects from two or more repositories | Comparison record and comparison metadata only when requested | Evidence-linked observations and differences |
| Capability Adaptation | Current Reference Knowledge Objects plus authoritative NexoraXS governance | Proposal documents and adaptation history only | Independent NexoraXS design proposal |
| Spec Kit and implementation | Approved NexoraXS specifications and plans | Governed target implementation | Runtime change outside this layer |

No layer may silently advance to the next. UNDERSTAND and COMPARE never produce a NexoraXS design. ADAPT never implements runtime code or approves its own proposals.

## Canonical Paths

The existing Reference Intelligence root remains canonical:

```text
docs/09-reference-intelligence/
  contracts/
  feature-index/
  knowledge-index/
  repositories/<repository-slug>/
    knowledge/<capability-slug>/
  fixtures/
```

Every real Reference Knowledge Object uses the [required artifact structure](contracts/REFERENCE-KNOWLEDGE-OBJECT-CONTRACT.md#persisted-artifact-set). Synthetic fixtures are isolated under `fixtures/` and are excluded from production indexes and understanding coverage.

## Lazy Resolution Flow

1. Resolve the registered repository and its authoritative discovery workspace.
2. Verify that discovery and the machine feature catalog exist.
3. Resolve the capability name through exact IDs, canonical names, and the alias index.
4. Return candidate matches without source inspection when the request is ambiguous.
5. Collect direct feature matches and dependency-linked feature IDs from the catalog and dependency map.
6. Load catalog evidence before opening source.
7. Check the repository knowledge-object index for a current object.
8. Reuse a current object; otherwise mark the capability `ANALYSIS_REQUIRED`.
9. Inspect only source paths needed to close the requested cross-layer trace at the pinned SHA.
10. Persist the Reference Knowledge Object, relationships, aliases, lifecycle state, and staleness fingerprints.
11. Validate schemas, evidence paths, Markdown links, and index consistency before returning the result.

## Refresh and Staleness

Each object records the catalog revision, related feature IDs, exact evidence, and per-section evidence fingerprints. A refresh:

- validates repository ID and pinned SHA first;
- maps changed or missing evidence to affected sections;
- retains unaffected sections and their evidence;
- rewrites only affected sections;
- marks unsupported claims `Unknown`, `Contradictory`, or `STALE` instead of preserving an obsolete `Verified` claim;
- updates lifecycle and stale indexes transactionally.

The [Reference Lifecycle](REFERENCE-LIFECYCLE.md) defines state calculation and the [Knowledge Graph contract](contracts/REFERENCE-KNOWLEDGE-GRAPH-CONTRACT.md) defines index updates.

## Safety and Licensing

All external repositories remain read-only. Analysis may describe behavior, paths, symbols, interfaces, and relationships, but must not copy source code or transfer external domain assumptions into NexoraXS.

License findings are constraints, not permissions. In particular, Plane remains an AGPL-3.0-only external reference. Its license review does not authorize copying, adaptation of protected expression, or runtime incorporation.

## Related Contracts

- [Reference Knowledge Object Contract](contracts/REFERENCE-KNOWLEDGE-OBJECT-CONTRACT.md)
- [Knowledge Graph and Index Contract](contracts/REFERENCE-KNOWLEDGE-GRAPH-CONTRACT.md)
- [Skill Contracts](contracts/REFERENCE-SKILL-CONTRACTS.md)
- [UNDERSTAND, COMPARE, and ADAPT Boundary](UNDERSTAND-COMPARE-ADAPT.md)
- [Reference Lifecycle](REFERENCE-LIFECYCLE.md)
- [Example Invocations](EXAMPLE-INVOCATIONS.md)
- [Migration Note](REFERENCE-KNOWLEDGE-MIGRATION.md)
