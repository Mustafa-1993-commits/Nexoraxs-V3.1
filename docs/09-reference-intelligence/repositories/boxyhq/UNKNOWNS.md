# BoxyHQ Unknowns, Contradictions, and Exclusions

## Unknowns and Verified Absences

1. Production deployment topology, scaling model, and process supervision are not defined beyond platform templates.
2. Retraced retention, export, log-stream delivery, and exact search/filter semantics are external or package-opaque.
3. Svix retry, signing, replay, retention, and delivery guarantees are external-service behavior.
4. Hosted Jackson storage encryption, secret rotation, availability, and tenancy controls are outside this tree.
5. No authoritative dependency, container-image, or asset license inventory is present.
6. No MFA/TOTP/WebAuthn/passkey implementation exists; whether this is planned is unknown.
7. No platform-level super-admin authentication or administration surface exists.
8. No domain ownership verification workflow exists; Team.domain is syntax-validated and unique only.
9. No application rate limiting or abuse quota exists.
10. No general webhook destination SSRF/private-network defense exists in first-party code.
11. No cache, queue, scheduler, worker, realtime transport, or dead-letter mechanism exists.
12. No object storage exists; avatar data is persisted in the User row.
13. No scheduled expiration cleanup is present for reset, verification, invitation, or Jackson TTL data.
14. No OpenAPI/GraphQL or versioned first-party application API contract exists.
15. No first-party API route authenticates using the managed ApiKey record.
16. Group provisioning effects are not implemented in the application directory-event handler.
17. Only English localization is configured; no RTL behavior exists.
18. No automated accessibility, security, dependency-license, or performance test gate exists.
19. The source test/build suite was inspected but not executed because discovery treats the source checkout as read-only.
20. Production secret storage, rotation, and incident-response practices are deployment-specific.
21. Whether the product placeholder page under `/teams/[slug]/products` is intended for future product functionality is unknown.

## Contradictions

1. README.md labels billing/subscriptions as coming soon, but Stripe billing routes, models, UI, sync, and webhooks are implemented.
2. README.md says the default authentication options are email and GitHub, while `lib/env.ts` defaults to `github,credentials`.
3. README.md says Playwright supports Chromium and Firefox, while `playwright.config.ts` defines only Chromium.
4. API-key UI copy claims API authentication, but no pinned first-party route consumes `getApiKey`.
5. SSO update checks the `create` action instead of the available `update` action in `pages/api/teams/[slug]/sso.ts`.
6. SSO deletion reports audit CRUD `c` rather than delete CRUD `d`.
7. Request-time team deletion removes the relational team without the external cleanup implemented by `delete-team.js`.
8. Directory webhook signatures include a timestamp but do not reject old timestamps or replays.
9. The middleware CSP uses `frame-ancestors 'none'`, while `next.config.js` also declares `X-Frame-Options: SAMEORIGIN`.
10. The SSO verification invalid-request response uses a string `error`, while the SSO page reads `error.message`.
11. NextAuth redirects email-provider verification requests to `/auth/verify-request`, but no page implements that configured route.

## Exclusions

- Branding and README marketing statements were not treated as implemented features.
- Dependency names were leads only; first-party call paths or configuration were required.
- Package-owned UI internals were not reverse-engineered or claimed as first-party behavior.
- Absent capability classes were inspected and recorded; they were not converted into fictional feature records.
- No feature was selected, ranked, recommended, compared, adapted, or implemented.
