# hr-next License Review

## Determination

| Item | Finding |
|---|---|
| Root license file | GNU General Public License, version 3 |
| Package declaration | `GPL-3.0` |
| SPDX conclusion for repository source | `GPL-3.0-only` |
| Trademark policy | README links `TRADEMARK_POLICY.md`, but that path is absent at the pinned SHA |
| Source copied into NexoraXS | No |
| Runtime implementation performed | No |

## Impact

GPLv3 is strong copyleft for distribution of covered derivative/combined works. This discovery is factual documentation produced from read-only inspection and contains no copied implementation. It does not authorize copying GPL source, templates, styles, assets, or branding into NexoraXS. Any future independent design must preserve provenance, obtain legal review for planned use, and avoid source-derived expression.

## Dependency and Asset Caveats

Frappe, ERPNext, `frappe-ui`, npm/Python dependencies, fonts/icons/images, Firebase, social providers, SMTP, hosting, and other services have independent terms. The tracked `frappe-ui` gitlink was not inspected. A complete transitive license/SBOM review remains required before any separate adoption decision.

## No Selection

License analysis records constraints only. It does not select, rank, recommend, compare, adapt, approve, or implement any hr-next capability.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
