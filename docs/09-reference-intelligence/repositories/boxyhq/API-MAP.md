# BoxyHQ API Map

## HTTP and Protocol Surface

| Route | Methods | Boundary | Verified responsibility |
|---|---|---|---|
| `/api/auth/[...nextauth]` | NextAuth methods | Public protocol endpoint | NextAuth provider/session handler; [pages/api/auth/[...nextauth].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/[...nextauth].ts) |
| `/api/auth/custom-signout` | POST | Session | Custom sign-out; [pages/api/auth/custom-signout.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/custom-signout.ts) |
| `/api/auth/forgot-password` | POST | Public | Recovery token/email; [pages/api/auth/forgot-password.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/forgot-password.ts) |
| `/api/auth/join` | POST | Public | Registration; [pages/api/auth/join.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/join.ts) |
| `/api/auth/resend-email-token` | POST | Public | Verification renewal; [pages/api/auth/resend-email-token.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/resend-email-token.ts) |
| `/api/auth/reset-password` | POST | Public token | Password reset; [pages/api/auth/reset-password.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/reset-password.ts) |
| `/api/auth/sso/acs` | POST | Public protocol endpoint | Legacy SAML response proxy; [pages/api/auth/sso/acs.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/sso/acs.ts) |
| `/api/auth/sso/verify` | POST | Public | Email/slug SSO discovery; [pages/api/auth/sso/verify.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/sso/verify.ts) |
| `/api/auth/unlock-account` | POST | Public token | Unlock-link renewal; [pages/api/auth/unlock-account.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/auth/unlock-account.ts) |
| `/api/health` | GET | Public | Database health/version; [pages/api/health.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/health.ts) |
| `/api/hello` | Any | Public | Hello sample; [pages/api/hello.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/hello.ts) |
| `/api/idp` | Any | Middleware-protected | Directory provider list; [pages/api/idp.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/idp.ts) |
| `/api/import-hack` | Any | Middleware-protected | Build-retention shim; [pages/api/import-hack.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/import-hack.ts) |
| `/api/invitations/[token]` | GET | Public token | Invitation lookup; [pages/api/invitations/[token].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/invitations/[token].ts) |
| `/api/oauth/authorize` | GET, POST | Public protocol endpoint | Jackson authorization; [pages/api/oauth/authorize.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/oauth/authorize.ts) |
| `/api/oauth/oidc` | GET | Public protocol endpoint | OIDC response; [pages/api/oauth/oidc.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/oauth/oidc.ts) |
| `/api/oauth/saml` | POST | Public protocol endpoint | SAML response; [pages/api/oauth/saml.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/oauth/saml.ts) |
| `/api/oauth/token` | POST | Public protocol endpoint | OAuth token; [pages/api/oauth/token.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/oauth/token.ts) |
| `/api/oauth/userinfo` | GET | Bearer token | OAuth user info; [pages/api/oauth/userinfo.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/oauth/userinfo.ts) |
| `/api/password` | PUT | Session | Password change; [pages/api/password.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/password.ts) |
| `/api/scim/v2.0/[...directory]` | SCIM methods | Directory bearer secret | Jackson SCIM users/groups; [pages/api/scim/v2.0/[...directory].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/scim/v2.0/[...directory].ts) |
| `/api/sessions` | GET | Session | Session list; [pages/api/sessions/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/sessions/index.ts) |
| `/api/sessions/[id]` | DELETE | Session + ownership | Session revoke; [pages/api/sessions/[id].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/sessions/[id].ts) |
| `/api/teams` | GET, POST | Session | Team list/create; [pages/api/teams/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/index.ts) |
| `/api/teams/[slug]` | GET, PUT, DELETE | Session + membership + permission | Team detail/update/delete; [pages/api/teams/[slug]/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/index.ts) |
| `/api/teams/[slug]/members` | GET, DELETE, PUT, PATCH | Session + membership + permission | Members/list/remove/leave/role; [pages/api/teams/[slug]/members.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/members.ts) |
| `/api/teams/[slug]/invitations` | GET, POST, PUT, DELETE | Mixed session + invitation token | Invitation lifecycle; [pages/api/teams/[slug]/invitations.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/invitations.ts) |
| `/api/teams/[slug]/permissions` | GET | Session + membership | Role permissions; [pages/api/teams/[slug]/permissions.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/permissions.ts) |
| `/api/teams/[slug]/api-keys` | GET, POST | Session + membership + permission | API keys list/create; [pages/api/teams/[slug]/api-keys/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/api-keys/index.ts) |
| `/api/teams/[slug]/api-keys/[apiKeyId]` | DELETE | Session + permission + ownership | API key revoke; [pages/api/teams/[slug]/api-keys/[apiKeyId].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/api-keys/[apiKeyId].ts) |
| `/api/teams/[slug]/sso` | GET, POST, PATCH, DELETE | Session + membership + permission + tenant guard | SSO connections; [pages/api/teams/[slug]/sso.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/sso.ts) |
| `/api/teams/[slug]/dsync` | GET, POST | Session + membership + permission | Directory list/create; [pages/api/teams/[slug]/dsync/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/dsync/index.ts) |
| `/api/teams/[slug]/dsync/[directoryId]` | GET, PATCH, DELETE | Session + permission + tenant guard | Directory detail; [pages/api/teams/[slug]/dsync/[directoryId].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/dsync/[directoryId].ts) |
| `/api/teams/[slug]/webhooks` | GET, POST, DELETE | Session + membership + permission | Webhook lifecycle; [pages/api/teams/[slug]/webhooks/index.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/webhooks/index.ts) |
| `/api/teams/[slug]/webhooks/[endpointId]` | GET, PUT | Session + membership + permission | Webhook detail/update; [pages/api/teams/[slug]/webhooks/[endpointId].ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/webhooks/[endpointId].ts) |
| `/api/teams/[slug]/payments/products` | GET | Session + membership | Products/subscriptions; [pages/api/teams/[slug]/payments/products.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/payments/products.ts) |
| `/api/teams/[slug]/payments/create-checkout-session` | POST | Session + membership | Stripe checkout; [pages/api/teams/[slug]/payments/create-checkout-session.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/payments/create-checkout-session.ts) |
| `/api/teams/[slug]/payments/create-portal-link` | POST | Session + membership | Stripe portal; [pages/api/teams/[slug]/payments/create-portal-link.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/teams/[slug]/payments/create-portal-link.ts) |
| `/api/users` | PUT | Session | Profile update; [pages/api/users.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/users.ts) |
| `/api/webhooks/dsync` | POST | HMAC | Hosted directory events; [pages/api/webhooks/dsync.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/webhooks/dsync.ts) |
| `/api/webhooks/stripe` | POST | Stripe signature | Subscription events; [pages/api/webhooks/stripe.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/webhooks/stripe.ts) |
| `/api/well-known/saml.cer` | GET | Public | SP certificate; [pages/api/well-known/saml.cer.ts](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/api/well-known/saml.cer.ts) |

## Commands, Events, and Protocol Notes

- No OpenAPI document, versioned application API namespace, GraphQL endpoint, RPC surface, or first-party API-key authentication middleware is present.
- Outbound events are `member.created`, `member.removed`, `invitation.created`, and `invitation.removed` through Svix.
- Audit event types cover team, member, invitation, SSO, directory, and webhook changes.
- There are no queue workers, cron/scheduler handlers, realtime transports, or background-job endpoints.
- `pages/api/import-hack.ts` is a build-retention workaround, not a supported product API.
