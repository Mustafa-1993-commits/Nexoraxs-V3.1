# BoxyHQ Workflow Map

## Registration and Credential Sign-In

1. Registration validates CAPTCHA, invitation context, work-email policy, input bounds, and uniqueness.
2. It creates the user and either creates an owner team or records the invited account.
3. Optional confirmation sends and consumes a 24-hour verification token.
4. Credential sign-in validates CAPTCHA, lock threshold, confirmation state, and bcrypt password.
5. The selected JWT/database session strategy establishes the application session.

Evidence: [pages/api/auth/join.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/join.ts), [lib/nextAuth.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/lib/nextAuth.ts).

## Enterprise SSO

1. A team admin creates a tenant-scoped SAML or OIDC connection.
2. A user supplies email or team slug; the service discovers eligible team connections.
3. Multiple providers route through an IdP selection screen.
4. Jackson handles authorization and SAML/OIDC response endpoints.
5. NextAuth provisions/links the user and maps requested groups/roles into team membership.
6. IdP-initiated flow exchanges a code for userinfo through the same broker surface.

Evidence: [pages/api/teams/[slug]/sso.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/sso.ts), [pages/api/auth/sso/verify.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/sso/verify.ts),
[lib/nextAuth.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/lib/nextAuth.ts).

## Directory Synchronization

1. An authorized team administrator creates a directory connection.
2. Embedded mode receives SCIM requests directly; hosted mode receives signed events.
3. User create upserts and joins; update changes identity and deactivates/reactivates membership; delete removes
   membership and deletes an otherwise orphaned user.
4. Group protocol traffic can reach Jackson, but application event handling deliberately skips group events.

Evidence: [pages/api/scim/v2.0/[...directory].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/scim/v2.0/[...directory].ts), [lib/jackson/dsyncEvents.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/lib/jackson/dsyncEvents.ts).

## Team Invitation and Membership

Email invitations fix a recipient; link invitations optionally restrict domains. Acceptance validates expiry and
recipient/domain, creates membership with the invitation role, emits Svix/metric records, and consumes email
invitations. Membership removal, leave, and role update enforce ownership invariants.

## Webhooks and Audit

Team admins manage Svix endpoints and supported event filters. Membership/invitation mutations emit outbound
events. Team/member/SSO/directory/webhook changes report optional Retraced audit events; authorized users obtain
team-scoped viewer tokens.

## Billing

Stripe customer creation is lazy. A manual command synchronizes product/price projections; checkout and portal
routes hand off to Stripe; signed subscription webhooks maintain local subscription projections.

## Failure and Recovery Patterns

Handlers normalize most exceptions into JSON errors; UI shows toast/error/loading states. Password reset and
account unlock use expiring tokens. External audit/email/metrics/Slack integrations often become no-ops when
unconfigured. No general job retry, dead-letter, circuit-breaker, or background recovery mechanism is present.
