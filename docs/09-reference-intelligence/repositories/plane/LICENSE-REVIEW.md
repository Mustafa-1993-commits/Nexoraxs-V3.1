# Plane License Review

## Repository License

- Declared license: GNU Affero General Public License, version 3
- SPDX expression used by source headers: `AGPL-3.0-only`
- License file: `LICENSE.txt`
- Copyright notice: `Copyright (c) 2023-present Plane Software, Inc. and contributors`
- Package manifest label: `AGPL-3.0`

[E087](EVIDENCE-MANIFEST.md#e087), `LICENSE.txt`, `COPYRIGHT.txt`, and package manifests provide the evidence.

## Material Impact

The repository is strong network copyleft, not a permissive reference source. For a modified covered version used for remote network interaction, AGPL section 13 requires a prominent opportunity for remote users to receive Corresponding Source at no charge. Conveyed source/object versions also carry license, source, notice, modification-date, and Appropriate Legal Notices obligations described by the license. This is a factual license constraint, not a recommendation. `LICENSE.txt` sections 4–6 and 13 are the controlling source.

No Plane source code was copied into NexoraXS by this discovery. The artifacts contain names, behavior summaries, paths, symbols, metadata, and evidence references only.

## Capability-Level Impact

All verified feature records inherit `AGPL-3.0-only` repository impact because their implementation evidence is Plane source. Reusing behavior as an independently reimplemented idea is legally different from copying/adapting expression, but the boundary is fact-specific and must be reviewed before adoption. Discovery does not decide that boundary.

Particularly coupled source families include:

- rich editor and collaboration code;
- design-system/component implementations;
- workspace/project/work-item models and API handlers;
- background jobs, webhook/security code, and deployment scripts;
- internal TypeScript packages published only inside this repository.

## Dependency and Asset Impact

The repository declares large JavaScript, Python, and container dependency graphs. The pnpm lock and Python requirements pin versions but do not provide a complete authoritative license inventory. Static image/font/logo assets may have attribution or trademark constraints not expressed by filename alone. Container images add OS/package licenses. [E061](EVIDENCE-MANIFEST.md#e061), [E062](EVIDENCE-MANIFEST.md#e062)

Therefore:

- repository source license: **Reviewed — AGPL-3.0-only, high-impact copyleft**;
- direct/transitive dependency license matrix: **Unknown — no tracked complete report**;
- container/base-image notices: **Unknown**;
- individual third-party asset provenance/trademark permission: **Unknown**;
- dual/commercial licensing availability: **Not established by the pinned source**.

## Notice Contradiction

`COPYRIGHT.txt` and source SPDX headers say “See the LICENSE file,” while the actual tracked file is `LICENSE.txt` (`C-002`). The substantive SPDX/package declarations remain consistent with AGPL; the filename reference is imprecise. [E087](EVIDENCE-MANIFEST.md#e087)

## Required Future Review Boundary

If a feature is later selected, the reference package must re-check the exact pinned files, dependencies, assets, distribution/network-use model, notices, and whether any implementation expression would be copied or adapted. This review neither selects a feature nor grants legal clearance.
