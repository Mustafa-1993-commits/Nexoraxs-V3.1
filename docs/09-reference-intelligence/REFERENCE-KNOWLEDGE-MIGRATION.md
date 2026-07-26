# Reference Knowledge Layer Migration Note

## Compatibility Goal

This layer is additive. Existing repository discoveries, feature IDs, discovery states, pinned SHAs, evidence manifests, license reviews, catalogs, coverage reports, and the cross-repository feature index remain authoritative and stable.

## Unchanged Behavior

- `full-repository-discovery` retains its complete-inventory scope, 18-artifact contract, lifecycle, evidence rules, and prohibition on feature selection or implementation.
- Existing repository directories are not rewritten.
- Existing `FEATURE-CATALOG.md` and `FEATURE-CATALOG.yaml` records remain the source of feature identity.
- Existing feature IDs are never replaced by capability IDs or Reference Knowledge Object IDs.
- Discovery `Complete` remains a repository-inventory statement, not an understanding-coverage statement.
- Existing Selected Reference Evidence output remains available from `reference-feature-retrieval`.

## Additive Behavior

- New deep requests can create `repositories/<slug>/knowledge/<capability-slug>/`.
- New canonical capability records map, but do not merge, repository-specific feature IDs.
- New lifecycle indexes project understanding without altering discovery lifecycle.
- Retrieval routes deep implementation questions to `repository-deep-understanding`.
- Comparison and adaptation are separate explicit skills and modes.

## Initial Index Migration

The initial index contains no real Reference Knowledge Objects and no canonical capability records. It records:

- `SRC-ALIZIODEV-LARAVEL-NEXT-STARTER`: 68 cataloged features, zero understood;
- `SRC-PLANE`: 161 cataloged features, zero understood;
- other registered source repositories: `NEW`.

The synthetic fixture validates the contract but is excluded from canonical indexes and coverage.

## Backward-Compatible Links

`REGISTRY.md` and the feature index may link to the new architecture and capability index. Those links add navigation only; they do not modify any repository discovery record or feature record.

## Rollback

Because the layer is additive, rollback removes the new skills, contracts, indexes, documentation, and synthetic fixture plus the two navigation links. Existing discoveries remain valid and unchanged.
