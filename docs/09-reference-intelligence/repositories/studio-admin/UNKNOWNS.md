
# studio-admin Unknowns, Contradictions, Absences, and Exclusions

## Unknowns

| ID | Unknown | Evidence boundary / required follow-up |
|---|---|---|
| `U-001` | Exact direct and transitive dependency obligations require legal review beyond manifest inventory. | The pinned lockfile records multiple license families; discovery is not legal advice. |
| `U-002` | The intended production authentication provider, session store, account lifecycle, password recovery, MFA, and logout behavior are unspecified. | Tracked login/register surfaces only validate and toast form data. |
| `U-003` | The intended server authorization model for users, roles, permissions, teams, workspaces, and organization membership is unspecified. | No policy, guard, API, or database boundary exists. |
| `U-004` | The intended tenant hierarchy and isolation key are unspecified. | Workspace/team values occur only in fixture rows. |
| `U-005` | The intended database, ORM, migration, cache, object storage, queue, and durable backend are unspecified. | No corresponding dependency or configuration is tracked. |
| `U-006` | The intended API contract, versioning, validation, authentication, and error model are unspecified. | No route.ts handler or external API client exists. |
| `U-007` | The intended behavior for user add/export/customize/hide/grid and row action controls is unspecified. | Controls have no handlers. |
| `U-008` | The intended behavior for role creation, permission sets, access reviews, and role action menus is unspecified. | The roles screen is local table state over static records. |
| `U-009` | The intended task, kanban, invoice, calendar, infrastructure, logistics, mail, and chat persistence model is unspecified. | All records are source fixtures or local state. |
| `U-010` | The intended meaning and backend source of the analytics screen labeled realtime is unspecified. | The component renders embedded data with no realtime transport. |
| `U-011` | The intended behavior of finance, productivity, academy, e-commerce, infrastructure, and dashboard action buttons is unspecified. | Many controls are presentational only. |
| `U-012` | The intended calendar source filtering and event creation/edit lifecycle are unspecified. | The selector does not filter and Add event has no handler. |
| `U-013` | The intended Kanban list/table views, task create/search/filter/sort/import/template/automation workflows are unspecified. | Only drag operations mutate local board state. |
| `U-014` | The intended invoice save/send/payment/business workflows, validation, currency, and persistence are unspecified. | The form prevents submit and supports only preview/print. |
| `U-015` | The intended mail search, compose, reply, archive, pin, trash, delivery, and synchronization behavior is unspecified. | Mail is static and actions are unbound. |
| `U-016` | The intended chat delivery, presence, attachments, calls, moderation, AI, note storage, and realtime behavior is unspecified. | Chat is static and composer submit only prevents default. |
| `U-017` | The production availability, caching, privacy, and failure policy for the jsDelivr world-atlas dependency is unspecified. | The map fetch has local error containment but no operational policy. |
| `U-018` | The intended production hosting, environment injection, secret management, health checking, telemetry, and rollback model are unspecified. | No deployment or observability manifest exists. |
| `U-019` | Accessibility conformance, screen-reader behavior, browser support, keyboard completeness, and color contrast are untested. | No accessibility test or audit record exists. |
| `U-020` | Localization roadmap, Arabic support, RTL layout behavior, and string extraction are unspecified. | The root is English and components.json sets rtl false. |
| `U-021` | Reduced-motion behavior is unspecified. | No prefers-reduced-motion handling exists. |
| `U-022` | Runtime build, lint, type-check, and browser behavior at the pinned revision were not executed. | Source tooling could write ignored outputs and violate the required source fingerprint boundary. |
| `U-023` | Why secondary/document sidebar modules are retained but unmounted is undocumented. | AppSidebar comments out both modules. |
| `U-024` | The intended semantics of the dashboard coming-soon route versus its page-not-found copy are unspecified. | The route exists but displays not-found language. |
| `U-025` | The intended behavior of top-level disabled navigation links is unclear. | aria-disabled is applied to a Link without click prevention. |
| `U-026` | The dirty package-lock working-tree change is outside the pinned evidence boundary and its author/intention are unknown. | The modification pre-existed discovery and was preserved exactly. |
| `U-027` | Third-party logos, fonts, screenshot media, and trademark obligations require asset-specific review. | Root MIT does not settle third-party trademark or font obligations. |
| `U-028` | Performance, bundle-size, load, concurrency, and browser compatibility budgets are unspecified. | No tests or budgets are tracked. |

## Contradictions

| ID | Claim or presentation | Conflicting executable fact | Exact evidence |
|---|---|---|---|
| `C-001` | Application metadata describes the template as production-ready. | Authentication forms expose submitted credentials in toasts and do not authenticate. | [src/config/app-config.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/config/app-config.ts); [src/app/(main)/auth/_components/login-form.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/login-form.tsx) |
| `C-002` | README describes authentication screens/flows. | Executable login and registration submit only toasts and Google has no handler. | [README.md](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/README.md); [src/app/(main)/auth/_components/register-form.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/register-form.tsx); [src/app/(main)/auth/_components/social-auth/google-button.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/social-auth/google-button.tsx) |
| `C-003` | README roadmap presents role-based access control as planned rather than current. | The current Roles & Permissions screen looks operational but is static UI with no policy enforcement. | [README.md](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/README.md); [src/app/(main)/dashboard/roles/_components/roles.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/roles/_components/roles.tsx) |
| `C-004` | User screen says it manages organization members and access. | User records and action controls have no persistence or server mutation. | [src/app/(main)/dashboard/users/_components/users.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/users/_components/users.tsx); [src/app/(main)/dashboard/users/_components/users-columns.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/users/_components/users-columns.tsx) |
| `C-005` | Roles screen says it manages roles and permissions across the organization. | System-role restrictions and all role actions are client presentation only. | [src/app/(main)/dashboard/roles/_components/roles.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/roles/_components/roles.tsx); [src/app/(main)/dashboard/roles/_components/roles-table/columns.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/roles/_components/roles-table/columns.tsx) |
| `C-006` | Analytics screen labels a visitor panel realtime. | No websocket, SSE, polling, timer, or data fetch supplies realtime updates. | [src/app/(main)/dashboard/analytics/_components/realtime-visitors.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/analytics/_components/realtime-visitors.tsx); [package.json](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `C-007` | Navigation marks a coming-soon item disabled. | Top-level disabled items render a Next Link and do not prevent activation. | [src/navigation/sidebar/sidebar-items.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/navigation/sidebar/sidebar-items.ts); [src/app/(main)/dashboard/_components/sidebar/nav-main.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/_components/sidebar/nav-main.tsx) |
| `C-008` | The /dashboard/coming-soon route is named as a future placeholder. | Its executable page says Page not found. | [src/app/(main)/dashboard/coming-soon/page.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/coming-soon/page.tsx) |
| `C-009` | Theme preset generator documentation says it runs in pre-push. | The tracked hook invoking it is .husky/pre-commit. | [src/scripts/generate-theme-presets.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/scripts/generate-theme-presets.ts); [.husky/pre-commit](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/.husky/pre-commit) |
| `C-010` | Layout preference comments allow multiple persistence modes and emphasize SSR consistency. | Every active preference, including both SSR-sensitive sidebar settings, currently uses client-cookie. | [src/lib/preferences/preferences-config.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/lib/preferences/preferences-config.ts) |
| `C-011` | A remember-me label promises 30 days. | The demo creates no session and persists no remember state. | [src/app/(main)/auth/_components/login-form.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/login-form.tsx) |
| `C-012` | User search displays a Command-K hint. | The user screen registers no Command-K listener; the actual global palette uses Command-J. | [src/app/(main)/dashboard/users/_components/users.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/users/_components/users.tsx); [src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/_components/sidebar/search-dialog.tsx) |

## Verified Absences

- No active authentication provider, session lifecycle, password recovery, MFA, SSO, OAuth callback, API token, or account persistence.
- No server authorization policy, RBAC guard, tenant membership check, tenant isolation key, or instance-admin boundary.
- No API route handler, REST/GraphQL contract, webhook, import/export implementation, or server data service.
- No database, ORM, migration, durable cache, object storage, queue, worker, scheduler, event bus, websocket, or SSE transport.
- No notification delivery provider, audit event store, log stream, metrics, tracing, or health endpoint.
- No localization runtime, translation resources, locale routing, RTL runtime, Arabic surface, or reduced-motion branch.
- No project test file, test command, test framework, Storybook, accessibility harness, E2E tool, or CI/CD workflow.
- No Docker, Compose, Kubernetes, Helm, Terraform, cloud deployment, or process-supervisor manifest.

## Discovery Exclusions

- No Knowledge Object or deep-understanding artifact was created.
- No comparison with Laravel Starter, Plane, BoxyHQ, Kiranism, hr-next, NexoraXS, or another repository was performed.
- No feature was selected, ranked, recommended, adapted, approved, or implemented.
- No source code, component, theme, asset, dependency, or design token was copied.
- The pre-existing `package-lock.json` modification was not inspected as pinned source evidence and was not changed.
- README, screenshots, dependency names, file names, route names, component names, and marketing text were not standalone proof.
