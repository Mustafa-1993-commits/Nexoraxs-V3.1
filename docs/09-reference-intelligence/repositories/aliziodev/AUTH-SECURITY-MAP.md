# Authentication and Security Map

## Authentication Modes

| Mode | Evidence-backed behavior | Evidence |
|---|---|---|
| First-party SPA cookie | Sanctum `statefulApi()`; browser calls same-origin Next proxy; stable session cookie; CSRF handled by `next-sanctum` | [E005](EVIDENCE-MANIFEST.md#e005) [E025](EVIDENCE-MANIFEST.md#e025) [E028](EVIDENCE-MANIFEST.md#e028) [E029](EVIDENCE-MANIFEST.md#e029) |
| Server rendering | Request-cached `getUser()` calls Laravel and seeds the scoped provider | [E030](EVIDENCE-MANIFEST.md#e030) |
| Bearer token | User model and token table support Sanctum tokens; no repository-defined issuance UI/endpoint | [E010](EVIDENCE-MANIFEST.md#e010) [E021](EVIDENCE-MANIFEST.md#e021) |
| Passwordless passkey | WebAuthn sign-in through Fortify/Laravel Passkeys and browser package | [E008](EVIDENCE-MANIFEST.md#e008) [E036](EVIDENCE-MANIFEST.md#e036) |
| TOTP second factor | Confirmed TOTP setup, login challenge, and recovery codes | [E008](EVIDENCE-MANIFEST.md#e008) [E035](EVIDENCE-MANIFEST.md#e035) |

## Security Controls

| Control | Implementation | Evidence |
|---|---|---|
| API authentication | All application `/api` routes use `auth:sanctum` | [E006](EVIDENCE-MANIFEST.md#e006) |
| Protected screens | Optimistic session-cookie routing plus authoritative server `getUser()` | [E027](EVIDENCE-MANIFEST.md#e027) [E030](EVIDENCE-MANIFEST.md#e030) |
| Open-redirect defense | Login accepts only single-slash same-origin relative redirect strings | [E031](EVIDENCE-MANIFEST.md#e031) |
| Password storage | Hashing in account actions plus model `hashed` cast | [E010](EVIDENCE-MANIFEST.md#e010) [E011](EVIDENCE-MANIFEST.md#e011) [E012](EVIDENCE-MANIFEST.md#e012) [E013](EVIDENCE-MANIFEST.md#e013) |
| Validation | Required/length/email/unique/confirmed rules; current-password checks | [E011](EVIDENCE-MANIFEST.md#e011) through [E015](EVIDENCE-MANIFEST.md#e015) |
| Rate limits | Login and 2FA at five/minute; passkey family six/minute | [E008](EVIDENCE-MANIFEST.md#e008) [E009](EVIDENCE-MANIFEST.md#e009) |
| Passkey origin control | RP ID from API host; allowed frontend/API origins; user handle secret; timeout | [E008](EVIDENCE-MANIFEST.md#e008) |
| Sensitive serialization | Password, TOTP secret/codes, remember token hidden | [E010](EVIDENCE-MANIFEST.md#e010) |
| Passkey disclosure minimization | List API selects safe metadata only | [E016](EVIDENCE-MANIFEST.md#e016) |
| Session ownership | Session list/delete filters by authenticated user; current-session deletion rejected | [E017](EVIDENCE-MANIFEST.md#e017) |
| Password confirmation | Security page dialog and Fortify management middleware; independent checks for deletion/bulk logout | [E008](EVIDENCE-MANIFEST.md#e008) [E015](EVIDENCE-MANIFEST.md#e015) [E017](EVIDENCE-MANIFEST.md#e017) [E038](EVIDENCE-MANIFEST.md#e038) |
| Session expiry recovery | 401 redirect configuration, server invalid-session redirect, focus/visibility refresh, one-time toast | [E029](EVIDENCE-MANIFEST.md#e029) [E030](EVIDENCE-MANIFEST.md#e030) [E037](EVIDENCE-MANIFEST.md#e037) |
| Proxy SSRF reduction | Proxy upstream is server environment, not user input | [E028](EVIDENCE-MANIFEST.md#e028) |
| Cookie controls | HTTP-only true, SameSite Lax, configurable secure/domain/partitioning | [E055](EVIDENCE-MANIFEST.md#e055) |
| Production secret | App key generated once into a named volume and shared by PHP processes | [E045](EVIDENCE-MANIFEST.md#e045) |
| Internal services | Only frontend publishes a host port in Compose | [E044](EVIDENCE-MANIFEST.md#e044) |
| Dotfile blocking | nginx denies dotfile access except `.well-known` | [E045](EVIDENCE-MANIFEST.md#e045) |

## Authorization and Tenancy

There is authentication and user-resource scoping but no general authorization system:

- no policies, gates, roles, permissions, teams, organizations, workspaces, memberships, invitations, or tenant identifiers;
- all users can access the same settings capabilities for their own account;
- route input session IDs are constrained by authenticated `user_id`;
- passkey relation/list is obtained through the authenticated user.

[E006](EVIDENCE-MANIFEST.md#e006) [E016](EVIDENCE-MANIFEST.md#e016) [E017](EVIDENCE-MANIFEST.md#e017) [E061](EVIDENCE-MANIFEST.md#e061)

## Consequential Actions

| Action | Confirmation | Persistence effect | Audit/observability |
|---|---|---|---|
| Delete account | Current password in request | Tokens deleted, session invalidated, user deleted | UI toast only; no append-only audit |
| Update password | Current password | Password changed | UI toast only |
| Enable/disable 2FA | Password-confirmation window; setup also confirms TOTP | User 2FA fields | UI toast only |
| Add/remove passkey | Password-confirmed management middleware | Passkey row | UI toast only |
| Revoke all other sessions | Current password | Session rows deleted | UI toast only |
| Revoke one session | Confirmation dialog | One owned session row deleted | UI toast only |

[E015](EVIDENCE-MANIFEST.md#e015) [E017](EVIDENCE-MANIFEST.md#e017) [E035](EVIDENCE-MANIFEST.md#e035) [E036](EVIDENCE-MANIFEST.md#e036) [E038](EVIDENCE-MANIFEST.md#e038)

## Security Unknowns and Gaps

- No CSP, HSTS, explicit security-header policy, request correlation, audit log, anomaly detection, MFA recovery audit, or credential-change notification is defined.
- Account deletion text promises deletion of all resources; only tokens, current session, the user row, and FK-cascaded passkeys are explicitly evidenced.
- The proxy matcher excludes `api`, static/image/favicon, and PNG patterns; other public asset matching behavior follows Next middleware conventions and was not runtime-tested.
- Direct bearer-token issuance/revocation workflows are absent despite the token substrate.
- Email verification is not enforced at the pinned revision.
- A QR SVG returned by the auth API is inserted with `dangerouslySetInnerHTML`; its trust/sanitization guarantees are delegated to the package/server response and not proven by repository-local tests. [E035](EVIDENCE-MANIFEST.md#e035)
