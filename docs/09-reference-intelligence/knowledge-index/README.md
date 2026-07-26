# Reference Knowledge Indexes

These YAML files are machine-readable, Git-reviewable projections of on-demand Reference Knowledge Objects. They do not replace repository feature catalogs or the feature index.

- [knowledge-objects.yaml](knowledge-objects.yaml): objects grouped by repository
- [capabilities.yaml](capabilities.yaml): canonical cross-repository capability records
- [aliases.yaml](aliases.yaml): alias resolution
- [relationships.yaml](relationships.yaml): typed relationship edges
- [lifecycle.yaml](lifecycle.yaml): repository/capability understanding state and coverage
- [stale.yaml](stale.yaml): refresh work queue

All files validate against [REFERENCE-KNOWLEDGE-INDEX.schema.yaml](../contracts/REFERENCE-KNOWLEDGE-INDEX.schema.yaml). Capability records additionally validate against [REFERENCE-CAPABILITY.schema.yaml](../contracts/REFERENCE-CAPABILITY.schema.yaml).

The indexes start empty of real Reference Knowledge Objects. Completed discovery makes a repository `KNOWLEDGE_READY`; it does not make the repository `FULLY_UNDERSTOOD`.
