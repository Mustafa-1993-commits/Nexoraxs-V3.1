# Reference Knowledge Graph and Index Contract

## Model

The graph is a set of YAML indexes committed to Git. It does not require or imply a graph database. Feature catalogs remain authoritative for repository-specific feature identity; graph indexes are validated projections.

## Canonical Indexes

All files live under `docs/09-reference-intelligence/knowledge-index/`.

| File | Purpose |
|---|---|
| `knowledge-objects.yaml` | Knowledge Object index grouped by repository |
| `capabilities.yaml` | Canonical cross-repository capability records |
| `aliases.yaml` | Normalized alias → canonical capability mappings |
| `relationships.yaml` | Machine-readable typed edges |
| `lifecycle.yaml` | Repository and capability understanding states and coverage |
| `stale.yaml` | Objects or sections requiring refresh |

The synthetic fixture is excluded from these indexes.

## Relationship Predicates

Only these predicates are valid:

- `depends_on`
- `used_by`
- `belongs_to`
- `contains`
- `emits`
- `consumes`
- `secured_by`
- `configured_by`
- `rendered_by`
- `persisted_by`
- `scheduled_by`
- `integrated_with`
- `related_to`

Edges are directional. Add the inverse edge only when it is independently useful and semantically correct; for example, `A depends_on B` may be paired with `B used_by A`.

Every edge records a stable ID, subject, predicate, object, evidence status, applicable repository, Knowledge Object IDs, and evidence references. A graph edge never upgrades its endpoint into canonical NexoraXS truth.

## Canonical Capability Record

Each record follows [REFERENCE-CAPABILITY.schema.yaml](REFERENCE-CAPABILITY.schema.yaml) and supports:

- canonical name and aliases;
- repository implementations;
- repository feature IDs;
- Reference Knowledge Object IDs;
- comparison availability;
- adaptation history;
- provenance.

A canonical capability groups semantically comparable observations. It does not merge foreign data models, permissions, lifecycle states, or domain ownership.

## Index Update Transaction

After a Reference Knowledge Object passes validation:

1. add or update it under the correct repository in `knowledge-objects.yaml`;
2. add or update its canonical capability record;
3. normalize aliases without deleting historical aliases;
4. upsert evidence-backed relationships;
5. recalculate repository numerator, denominator, coverage, and state;
6. remove resolved stale entries or add unresolved ones;
7. validate every index and cross-index reference.

If validation fails, do not publish a partial index update. Keep the capability `UNDERSTANDING_IN_PROGRESS`, `STALE`, or `BLOCKED`.

## Comparison Availability

Set comparison availability:

- `UNAVAILABLE`: fewer than two repository implementations;
- `PARTIAL`: two or more implementations exist but a required object is missing or blocked;
- `AVAILABLE`: two or more current `UNDERSTOOD` objects exist;
- `STALE`: comparison inputs exist but at least one required object is stale.

Availability is not a quality score and does not rank repositories.

## Adaptation History

Adaptation history records proposal identity, path, source object IDs, state, timestamp, and approval reference when one later exists. Creating an ADAPT proposal records `PROPOSED`; it never records `APPROVED` without an external authoritative approval.

## Validation

Index files follow [REFERENCE-KNOWLEDGE-INDEX.schema.yaml](REFERENCE-KNOWLEDGE-INDEX.schema.yaml). Cross-index validation must reject:

- unknown capability or Knowledge Object references;
- duplicate IDs;
- unsupported predicates or lifecycle states;
- coverage numerators larger than denominators;
- `FULLY_UNDERSTOOD` below exact 100% coverage;
- stale objects omitted from `stale.yaml`;
- fixture records in canonical indexes.
