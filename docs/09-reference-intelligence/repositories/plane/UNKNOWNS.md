# Plane Unknowns, Contradictions, and Exclusions

## Unknowns

| ID | Status | Unknown | Evidence boundary |
|---|---|---|---|
| U-001 | Unknown | Runtime behavior/performance and production readiness of the pinned revision | Static read-only discovery; builds/tests/services not executed |
| U-002 | Unknown | Exact end-to-end test pass/fail state | Tracked pytest/Vitest suites were not executed |
| U-003 | Unknown | Browser compatibility and visual behavior across all routes | No tracked browser E2E/visual suite |
| U-004 | Unknown | WCAG conformance, screen-reader results, and focus behavior across complete workflows | Code-level semantics exist; no accessibility audit/suite |
| U-005 | Unknown | Complete transitive dependency, container, and asset license/SBOM obligations | No tracked complete report |
| U-006 | Unknown | Enterprise/extended implementation behavior | Extended implementations are absent/abstract/empty in this Community tree |
| U-007 | Unknown | End-to-end GitHub, Slack, Jira, and importer behavior in Community Edition | Models/services/types exist without a complete Community route/workflow |
| U-008 | Unknown | Billing screen behavior and commercial state | Route/components exist, but no verified Community commercial backend contract |
| U-009 | Unknown | General offline synchronization beyond page badges and IndexedDB utility | No repository-wide offline protocol found |
| U-010 | Unknown | Intended production policy when Django CORS origins are empty | Backend enables all origins; live rejects all origins |
| U-011 | Unknown | OAuth provider live callback behavior, account-link conflicts, and token refresh | Provider implementations statically inspected; no integration test/runtime |
| U-012 | Unknown | Full webhook retry/backoff guarantees against real networks | Task source inspected; no live-network test |
| U-013 | Unknown | Complete authorization matrix for all 394 literal route declarations | Representative guards/tests inspected; no exhaustive matrix/test |
| U-014 | Unknown | Data-migration execution and upgrade success from every historical release | 121 migrations statically inspected, not applied |
| U-015 | Unknown | Whether JavaScript `1.3.1` and Python `0.24.0` versions are intentionally independent | No tracked release-version policy found |
| U-016 | Unknown | UI-library migration policy between `@plane/ui` and `@plane/propel` | Both are active; no completion/deprecation policy found |
| U-017 | Unknown | Exact telemetry data policy/consent semantics | Metrics/event code and flags exist; policy/legal text outside code not established |
| U-018 | Unknown | Kubernetes deployment implementation | Repository contains a README pointer, not an in-tree chart |
| U-019 | Unknown | Search scale beyond query limits and database indexes at production volumes | Query source inspected; no benchmark |
| U-020 | Unknown | Notification snooze persistence | UI contains a snooze option surface but no matching Community notification URL was verified; not cataloged as a full feature |

## Contradictions

| ID | Status | Conflicting evidence | Decision |
|---|---|---|---|
| C-001 | Contradictory | Root/apps/packages report version `1.3.1`; API `pyproject.toml` reports `0.24.0` | Record both; do not infer one canonical product version |
| C-002 | Contradictory | Notices refer to `LICENSE`; tracked file is `LICENSE.txt` | License content/SPDX governs; record filename mismatch |
| C-003 | Contradictory | `plane.app.permissions` and `plane.utils.permissions` duplicate logic but diverge; external API views import both families | Map imports per handler; do not claim one uniform permission implementation |
| C-004 | Contradictory | Celery Beat contains two schedule keys for the same exporter-expiry task at 01:30 and 03:45 | Record duplicate scheduling; runtime effect not inferred |
| C-005 | Contradictory | Live `fetchUserMentions` calls `pages/{id}/mentions/`; no Community page URL matches | Page/PDF mention integration remains partial |
| C-006 | Contradictory | Workspace permission comment says only admins/owners update; code allows Admin and Member | Code behavior is verified; comment is stale/imprecise |
| C-007 | Contradictory | Space OAuth hooks navigate to general provider paths while Space-specific provider URL variants exist | Record both; intended session/callback distinction unknown |
| C-008 | Contradictory | Localization is multi-language, but direction setter is absent and shared CSS forces `ltr` | Catalog multi-language as verified and RTL as unsupported |
| C-009 | Contradictory | Pytest/Vitest commands and tests exist; tracked CI workflows invoke none of them | Test harness exists; CI execution is absent |

## Verified Absences and Limitations

- No tracked browser E2E, visual-regression, or automated accessibility test suite.
- No RTL locale or direction switching; shared CSS explicitly sets LTR.
- No general work-item realtime stream; realtime source is page/document collaboration.
- No complete Community GitHub/Slack/Jira integration API workflow.
- No complete Community import route/UI workflow despite importer substrate.
- No in-tree Kubernetes chart.
- No tracked complete dependency-license/SBOM report.
- No recommendation, feature selection, NexoraXS implementation, or copied source.

## Exclusions

- Modified worktree `setup.sh`.
- Untracked `plane-app/` and `setup-repository.sh`.
- Generated outputs, caches, dependency directories, local secrets, runtime databases.
- Enterprise code not present in the pinned commit.
- README-only marketing claims, unused names, and type-only capability labels without executable/model/config proof.
- Assets as functional features unless a source consumer is verified.

## Gap Disposition

These unknowns and contradictions are bounded knowledge at the pinned Community revision. They do not conceal uninspected tracked areas. The coverage decision evaluates census completeness separately from product readiness or adoption suitability.
