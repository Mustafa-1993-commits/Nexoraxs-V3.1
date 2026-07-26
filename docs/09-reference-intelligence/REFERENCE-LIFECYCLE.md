# Reference Knowledge Lifecycle

## Separate Lifecycles

Repository Discovery keeps its existing lifecycle unchanged. The states below are an additional projection for on-demand understanding and do not rewrite `REGISTRY.md`, discovery coverage, or feature catalog state.

## Repository-Level States

| State | Meaning |
|---|---|
| `NEW` | Registered source repository without sufficient discovery artifacts or catalog. |
| `DISCOVERED` | Repository inspection exists, but a complete authoritative feature catalog is not available. |
| `CATALOGED` | A machine feature catalog exists at a pinned revision, but source/evidence readiness has not been validated for deep analysis. |
| `KNOWLEDGE_READY` | Catalog, pinned revision, source object, and evidence paths are available; no current object covers a cataloged feature yet. |
| `PARTIALLY_UNDERSTOOD` | At least one cataloged feature is covered by a current `UNDERSTOOD` object, but coverage is below 100%. |
| `FULLY_UNDERSTOOD` | Every cataloged feature is covered by at least one current `UNDERSTOOD` object and no covered object is stale or blocked. |

Discovery `Complete` normally permits `CATALOGED` or `KNOWLEDGE_READY`; it never implies `FULLY_UNDERSTOOD`.

## Capability-Level States

| State | Meaning |
|---|---|
| `CATALOGED` | One or more authoritative feature records match the capability; no deep request is pending. |
| `ANALYSIS_REQUIRED` | A deep request exists and no current object satisfies it. |
| `UNDERSTANDING_IN_PROGRESS` | Narrow source inspection and object construction are active. |
| `UNDERSTOOD` | The object passes schema, evidence, link, relationship, and staleness validation. |
| `STALE` | Repository/catalog/evidence change may invalidate one or more claims or sections. |
| `SUPERSEDED` | A successor object intentionally replaces this object while history remains preserved. |
| `BLOCKED` | Required source, evidence, licensing, dependency, or contradiction prevents a defensible object. |

Allowed transitions are:

```text
CATALOGED -> ANALYSIS_REQUIRED -> UNDERSTANDING_IN_PROGRESS -> UNDERSTOOD
UNDERSTOOD -> STALE -> UNDERSTANDING_IN_PROGRESS -> UNDERSTOOD
UNDERSTOOD -> SUPERSEDED
ANALYSIS_REQUIRED | UNDERSTANDING_IN_PROGRESS | STALE -> BLOCKED
BLOCKED -> ANALYSIS_REQUIRED
```

## Understanding Coverage

Coverage is feature based so one object may aggregate a capability spread across several related feature IDs.

```text
understood feature IDs =
  union(related_feature_ids from current UNDERSTOOD objects)
  intersect(authoritative catalog feature IDs)

understanding coverage =
  count(understood feature IDs) / count(authoritative catalog feature IDs)
```

Rules:

- Count each catalog feature ID once.
- Exclude fixture, stale, superseded, and blocked objects.
- Record both numerator and denominator; never rely on a rounded percentage.
- Use `0.0` when the catalog exists but no object is current.
- Use `null` when no authoritative denominator exists.
- Enter `FULLY_UNDERSTOOD` only when numerator equals denominator and every object contributing coverage is current.

## Staleness Detection

An object becomes `STALE` when any applicable condition is true:

- repository ID or pinned SHA no longer matches the authoritative catalog;
- discovery is `Stale`, `Partial`, or otherwise no longer authoritative for the object;
- a required evidence path or Git blob is missing;
- a related feature record changes identity, evidence, dependency, unknown, contradiction, or license data;
- a referenced object is stale in a way that affects the capability;
- the object or index schema version is unsupported;
- a section evidence fingerprint no longer matches its inputs.

Current source `HEAD` differing from the pinned SHA follows the repository `CHANGE-DETECTION.md` decision. Retained Git objects alone do not make an affected catalog current.

## Partial Refresh

Each object tracks the evidence paths and evidence fingerprint for every Markdown section. Refresh only sections whose evidence closure changed, then:

1. revalidate cross-section claims and relationships;
2. update timestamps and fingerprints for affected sections;
3. retain unchanged section history;
4. update the object, alias, relationship, lifecycle, and stale indexes together;
5. return to `UNDERSTOOD` only after all validation passes.

If impact cannot be isolated, refresh the complete object. If required evidence is unavailable, use `BLOCKED`; do not guess.

## Initialized State

At creation of this layer:

- `SRC-ALIZIODEV-LARAVEL-NEXT-STARTER` is `KNOWLEDGE_READY` with `0 / 68` feature coverage.
- `SRC-PLANE` is `KNOWLEDGE_READY` with `0 / 161` feature coverage.
- no real Reference Knowledge Objects exist;
- the synthetic fixture is excluded from lifecycle coverage.
