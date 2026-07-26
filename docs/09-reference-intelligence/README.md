# Reference Intelligence

Reference Intelligence is a Git-reviewed engineering encyclopedia for external repositories. It does not own NexoraXS product truth and does not authorize implementation.

## Pipeline

1. [Repository Discovery](REGISTRY.md) inventories a complete registered repository.
2. The [feature index](feature-index/README.md) exposes verified catalog records.
3. [On-Demand Reference Knowledge](REFERENCE-KNOWLEDGE-ARCHITECTURE.md) creates or refreshes a Reference Knowledge Object only for a requested capability.
4. Comparison observes the same capability across repositories.
5. Adaptation creates a separately governed NexoraXS proposal only after explicit intent.

## Contracts and Indexes

- [Reference Knowledge Object Contract](contracts/REFERENCE-KNOWLEDGE-OBJECT-CONTRACT.md)
- [Knowledge Graph and Index Contract](contracts/REFERENCE-KNOWLEDGE-GRAPH-CONTRACT.md)
- [Skill Contracts](contracts/REFERENCE-SKILL-CONTRACTS.md)
- [Knowledge Object Schema](contracts/REFERENCE-KNOWLEDGE-OBJECT.schema.yaml)
- [Canonical Capability Schema](contracts/REFERENCE-CAPABILITY.schema.yaml)
- [Knowledge Index Schema](contracts/REFERENCE-KNOWLEDGE-INDEX.schema.yaml)
- [Knowledge indexes](knowledge-index/README.md)

## Operating Rules

- Discovery and deep understanding remain separate.
- External source repositories are read-only.
- Source observations never override NexoraXS governance.
- No external source code is copied.
- UNDERSTAND and COMPARE do not produce NexoraXS designs.
- ADAPT produces proposals, not approval or runtime code.
- The qualified Reference Knowledge Object is not the canonical Knowledge Engine object.
