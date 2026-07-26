# BoxyHQ Authentication and Security Map

## Authentication Boundaries

| Boundary | Verified behavior |
|---|---|
| Application session | NextAuth credentials, GitHub, Google, email magic link, SAML, and IdP-initiated providers; JWT or database sessions |
| Admin authentication | No separate platform/instance-admin identity surface; team OWNER/ADMIN use the normal application session |
| API keys | Team-scoped generation/list/revoke with SHA-256 persistence; no first-party route consumes keys for authentication |
| OAuth/OIDC | GitHub/Google sign-in plus Jackson authorize/token/userinfo/OIDC response broker endpoints |
| SAML | SP-initiated and IdP-initiated flows, SAML/OIDC connection administration, metadata and certificate publication |
| Passwordless | One-hour email magic-link provider |
| MFA | No TOTP, WebAuthn, passkey, recovery-code, or MFA policy implementation found |

## Authorization and Tenancy

Team is the isolation boundary. `throwIfNoTeamAccess` checks session plus slug membership; `throwIfNotAllowed`
applies OWNER/ADMIN/MEMBER resource-action permissions; connection, directory, and API-key guards compare the
selected object to the current team. OWNER and ADMIN receive broad administration rights; MEMBER receives team
read/leave only.

## Security Controls

- bcrypt cost 12; eight-character minimum and bounded input lengths.
- Cryptographically random verification/reset tokens with explicit expirations.
- Optional account confirmation, reCAPTCHA, business-email restriction, and login-attempt lockout.
- NextAuth CSRF tokens on sign-in forms and secure cookie naming on HTTPS.
- HSTS, MIME, frame, CSP, referrer, permissions, and cross-origin headers.
- Zod schemas on first-party account/team/invitation/webhook/billing/session inputs.
- Stripe raw-body signature verification and Jackson directory HMAC verification.
- Secrets read from environment variables; no checked-in production credential is claimed.

## Verified Gaps

- No application rate limiter or request quota.
- No directory-webhook replay window despite a signed timestamp.
- No webhook destination SSRF/private-network protection beyond URL syntax and scheme validation.
- No first-party encryption wrapper for Account OAuth tokens or local secrets; Jackson may populate its own IV/tag fields.
- No MFA, managed secret store, rotation workflow, security audit test, or automated accessibility/security scanner.
- Middleware marks OAuth/SCIM/webhook routes public at the session layer; those protocols depend on their own downstream tokens/signatures.

Contradictions and unresolved deployment properties are enumerated in [UNKNOWNS.md](UNKNOWNS.md).
