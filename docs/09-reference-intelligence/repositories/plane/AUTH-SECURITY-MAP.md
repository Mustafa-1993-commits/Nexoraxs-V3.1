# Plane Authentication and Security Map

## Authentication Surfaces

| Capability | Mechanism | Evidence |
|---|---|---|
| Main app session | Django `SessionAuthentication`, database session, CSRF endpoint/cookie, HTTP-only session cookie | [E010](EVIDENCE-MANIFEST.md#e010), [E025](EVIDENCE-MANIFEST.md#e025) |
| Email/password | Sign-in, sign-up, set/change/forgot/reset password | [E010](EVIDENCE-MANIFEST.md#e010) |
| Magic code/link | Generate, sign in, and sign up; asynchronous email delivery | [E010](EVIDENCE-MANIFEST.md#e010), [E044](EVIDENCE-MANIFEST.md#e044) |
| OAuth | Google, GitHub, GitLab, Gitea, with application and Space variants | [E010](EVIDENCE-MANIFEST.md#e010) |
| Space session | Dedicated Space auth route variants with shared session identity | [E024](EVIDENCE-MANIFEST.md#e024) |
| Instance admin | Separate admin sign-in/bootstrap and `admin-session-id` cookie | [E025](EVIDENCE-MANIFEST.md#e025), [E085](EVIDENCE-MANIFEST.md#e085) |
| External API | `X-Api-Key`, active/non-expired `APIToken`, active user, configurable throttle | [E029](EVIDENCE-MANIFEST.md#e029) |
| Live collaboration | Browser cookie forwarded to Django current-user/page APIs and Hocuspocus `onAuthenticate` | [E041](EVIDENCE-MANIFEST.md#e041) |

Session cookie age defaults to seven days; admin session age defaults to one hour. Cookies are HTTP-only and become secure when secure origins are configured. Password validators and a one-hour reset timeout are configured. [E025](EVIDENCE-MANIFEST.md#e025)

## Authorization and Tenancy

Workspace is the primary tenant/product boundary in Plane. Projects belong to a workspace; most operational models persist both workspace and project identifiers. Active workspace/project membership is enforced in permission classes and querysets. [E012](EVIDENCE-MANIFEST.md#e012), [E026](EVIDENCE-MANIFEST.md#e026), [E074](EVIDENCE-MANIFEST.md#e074)

| Role | Numeric value | Typical verified behavior |
|---|---:|---|
| Admin | `20` | Administrative workspace/project writes, membership, configuration, delete/archive depending on endpoint |
| Member | `15` | Most project/workspace entity writes |
| Guest | `5` | Read/member-limited behavior; project `guest_view_all_features` can widen visible features |

`allow_permission` decorators and DRF permission classes apply role combinations per method/handler. Page permission additionally resolves the page through the requested workspace/project and applies owner/private/public access plus role-sensitive writes. [E026](EVIDENCE-MANIFEST.md#e026)

Public Space APIs use publication anchors rather than accepting arbitrary project IDs. Project publication state and settings are managed through authenticated endpoints. [E024](EVIDENCE-MANIFEST.md#e024)

## Security Controls

- Django CSRF middleware, CORS credentials, configured allowed origins, secure/HTTP-only cookies, password validation, and secret-key placeholder rejection. [E025](EVIDENCE-MANIFEST.md#e025)
- Anonymous auth throttle and API-key rate limit. [E025](EVIDENCE-MANIFEST.md#e025), [E029](EVIDENCE-MANIFEST.md#e029)
- API keys store expiry, active/service flags, description, and last-use metadata; raw-key handling details are in the token model/authentication middleware. [E029](EVIDENCE-MANIFEST.md#e029)
- Uploaded-object endpoints resolve workspace/project membership and signed URL/storage policy; cleanup removes incomplete uploads. [E021](EVIDENCE-MANIFEST.md#e021)
- Webhook delivery validates target hosts/IPs against SSRF policy and supports explicit allowlists; delivery can be deactivated and logged. [E073](EVIDENCE-MANIFEST.md#e073)
- Link metadata crawling performs URL/IP validation, bounded requests, redirect handling, and favicon processing; unit tests cover SSRF advisories and URL security. [E044](EVIDENCE-MANIFEST.md#e044), [E080](EVIDENCE-MANIFEST.md#e080)
- CSV/XLSX export sanitization has unit tests against spreadsheet formula injection. [E071](EVIDENCE-MANIFEST.md#e071), [E080](EVIDENCE-MANIFEST.md#e080)
- Live applies Helmet, restrictive configured CORS, schema validation, authentication checks, response filename sanitization, timeouts/retries, structured error mapping, and graceful shutdown. [E040](EVIDENCE-MANIFEST.md#e040), [E042](EVIDENCE-MANIFEST.md#e042)
- CodeQL scans Python and JavaScript; React Doctor checks security/correctness/accessibility/performance; copyright headers are checked. [E059](EVIDENCE-MANIFEST.md#e059)

## Security-Sensitive Configuration

`SECRET_KEY`, `LIVE_SERVER_SECRET_KEY`, OAuth client secrets, LLM key, SMTP password, S3 credentials, PostHog key, Scout key, analytics key, database/broker URLs, and API tokens are sensitive. Environment examples contain placeholders/defaults and must not be interpreted as safe production values. [E047](EVIDENCE-MANIFEST.md#e047), [E049](EVIDENCE-MANIFEST.md#e049)

`CORS_ALLOW_ALL_ORIGINS` becomes true when no origin list is configured. Live CORS instead rejects all origins when its configured list is empty. This is a deployment-sensitive difference, recorded as `U-010`. [E025](EVIDENCE-MANIFEST.md#e025), [E040](EVIDENCE-MANIFEST.md#e040)

## Contradictions

- `WorkSpaceBasePermission` comments say only admins/owners update workspace settings, but code authorizes Admin and Member roles for `PUT/PATCH` (`C-006`). [E026](EVIDENCE-MANIFEST.md#e026)
- `plane.app.permissions` and `plane.utils.permissions` are duplicate modules with diverging creator membership validation; some external API views import the older copy (`C-003`). [E027](EVIDENCE-MANIFEST.md#e027)
- Space OAuth hooks point to non-`spaces/` provider routes while Space-specific provider routes also exist. The intended callback/session distinction is not documented (`C-007`). [E024](EVIDENCE-MANIFEST.md#e024)

## Test Evidence and Gaps

Pytest contract tests cover app and external API authentication, API tokens, project/member/workspace scope, issue guest scope, page-version scope, deploy-board scope, and file-asset project scope. Security unit tests cover middleware auth, DB routing, retention, storage, URL/SSRF handling, ordering sanitization, and export sanitization. [E054](EVIDENCE-MANIFEST.md#e054), [E080](EVIDENCE-MANIFEST.md#e080)

No tracked browser E2E suite, accessibility audit, OAuth-provider integration test, live WebSocket auth test, webhook live-network test, or exhaustive permission matrix exists at this revision. Existing CI workflows do not invoke the tracked pytest/Vitest suites. [E090](EVIDENCE-MANIFEST.md#e090), [E091](EVIDENCE-MANIFEST.md#e091)
