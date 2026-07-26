# Reference Intelligence Example Invocations

## Catalog-Only Retrieval

> Use `reference-feature-retrieval` to show the catalog record for Plane’s theme capability.

Expected behavior: resolve candidate feature records and return catalog evidence only. Do not open source or create a Reference Knowledge Object unless the request asks for implementation depth.

## Ambiguous Request

> Find notification support in Plane.

Expected behavior: return candidate feature IDs and aliases first because “notification support” can mean preferences, delivery, inbox UI, mentions, or background jobs. Wait for the user to choose before deep analysis.

## UNDERSTAND

> In UNDERSTAND mode, explain Plane’s notification preference capability end to end.

Expected behavior: resolve the pinned discovery, expand related feature IDs, load catalog evidence first, inspect only necessary pinned source, persist or refresh one Reference Knowledge Object, and return source-faithful findings. Do not propose NexoraXS behavior.

## Reuse Current Knowledge

> Explain the same capability again, including its failure paths.

Expected behavior: validate the existing object’s repository ID, pinned SHA, evidence paths, section fingerprints, and lifecycle. Reuse it when current; refresh only affected sections when stale.

## COMPARE

> In COMPARE mode, compare session revocation across SRC-ALIZIODEV-LARAVEL-NEXT-STARTER and another discovered repository.

Expected behavior: resolve the shared canonical capability, create missing current objects on demand, then compare observations with evidence. Do not rank or adapt.

## ADAPT

> In ADAPT mode, use these current Reference Knowledge Objects to propose an independent NexoraXS session-management design.

Expected behavior: load authoritative NexoraXS governance, separate observations from proposals, reject foreign tenant/role assumptions, include tenancy, authorization, API, backend/frontend, events/jobs, security, rollout, tests, risks, approval decisions, and provenance. Produce no runtime code.

## Missing Discovery

> Understand a capability from an unregistered or undiscovered repository.

Expected behavior: stop and request `full-repository-discovery`. Do not perform an opportunistic partial scan.

## Synthetic Fixture

The [Scheduled Report Delivery fixture](fixtures/synthetic-repository/knowledge/scheduled-report-delivery/OVERVIEW.md) demonstrates the artifact shape only. It is not a discovered repository, is not indexed as real knowledge, and must not be used as product evidence.
