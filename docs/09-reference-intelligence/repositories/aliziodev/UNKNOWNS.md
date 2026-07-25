# Unknowns and Contradictions

## Unknowns

| ID | Area | Status | Evidence boundary / impact |
|---|---|---|---|
| U-001 | Exact package-generated auth routes and middleware stacks | Unknown | Fortify/passkey vendor source is absent. Configuration and UI calls prove feature families, not exact package definitions. |
| U-002 | Live test/build result at pinned SHA | Unknown | Tests were inspected but not executed because discovery treated the source tree as read-only and dependencies were absent. |
| U-003 | Production mail delivery | Unknown | Log mailer is default; no production provider credentials or runtime evidence. |
| U-004 | API token issuance workflow | Unknown | Model/table support exists, but no repository-defined issue/list/revoke UI or endpoint exists. |
| U-005 | Transitive npm and container license bundle | Unknown | Direct packages were checked; transitive/image SBOM is outside tracked metadata. |
| U-006 | QR SVG sanitization/trust guarantee | Unknown | The client inserts server-provided SVG; package/server guarantee is not established in tracked source. |
| U-007 | Database behavior under every configured alternative | Unknown | SQLite local/test and MySQL Compose are configured; MariaDB/PostgreSQL/SQL Server/Redis/SQS/etc. are not tested here. |
| U-008 | Accessibility conformance level | Unknown | Semantic measures exist; no automated/manual WCAG audit is recorded. |
| U-009 | Browser coverage beyond Chromium | Unknown | Playwright config runs Chromium only. |
| U-010 | Account deletion of hypothetical future resources | Unknown | UI wording says all resources; current explicit cascade/cleanup covers tokens, current session, user, and passkeys. |

## Contradictory or Misaligned Evidence

| ID | Statements/evidence | Resolution in catalog |
|---|---|---|
| C-001 | README says database sessions are required for cookie/SPA flow; `SessionController` specifically requires database only for device-session management, while Laravel config lists other session drivers. | Catalog states database is the shipped default and a hard requirement for the browser-session feature; broader cookie-auth necessity is not treated as verified. |
| C-002 | README security section says account deletion sits behind Fortify's password-confirmation window; profile route does not use `RequirePassword`, but the deletion request validates the current password itself. | Catalog records request-level current-password confirmation, not window gating. |
| C-003 | Docker Compose comments label the queue worker as serving verification/reset emails; no repository-defined queued notification/job exists and package internals are absent. | Catalog records worker infrastructure and leaves actual queued mail use unverified. |
| C-004 | Fortify email-verification feature and complete UI are enabled/present, but `User` lacks `MustVerifyEmail` and `MUST_VERIFY_EMAIL` is false. | Catalog names this a dormant, opt-in flow rather than active enforcement. |
| C-005 | Header presents a search icon button, but there is no handler, input, route, results page, or backend search. | Search is recorded as non-functional UI, not a feature. |
| C-006 | Repository includes a full Laravel Blade welcome page, but tracked `/` route returns JSON and active browser welcome is Next.js. | Blade asset is classified as unreachable residual scaffold. |
| C-007 | `web/README.md` gives generic npm/yarn/pnpm/bun create-next-app guidance, while root README and manifests specify pnpm and a decoupled Laravel workflow. | Root executable manifests and root README control the repository map; web README is stale generic scaffold documentation. |
| C-008 | README structure mentions `config/sanctum.php`, but no such tracked file exists. | Sanctum behavior is mapped from bootstrap middleware, env, package defaults, and routes; nonexistent file is not cited. |

## Verified Absences

The complete tracked-tree inspection found no implementation for:

- tenant/workspace/organization/team/membership/invitation concepts;
- roles, permissions, policies, or gates;
- business-domain aggregates;
- search, filtering, sorting, pagination, saved views, or bulk domain operations;
- analytics, reports, charts with data, import, or export;
- comments, mentions, collaboration, realtime channels, or application notifications beyond framework auth mail;
- webhooks or application-specific third-party APIs;
- repository-defined jobs, events, listeners, or schedules;
- localization resources, Arabic, or RTL behavior;
- audit log, structured trace/correlation layer, metrics exporter, or product analytics;
- frontend unit/component tests or backend auth/API feature tests.

[E061](EVIDENCE-MANIFEST.md#e061)
