# BoxyHQ Route and Screen Map

## User-Facing Routes

The 29 application screens below exclude `_app`, `_document`, and custom error framework pages.

| Route | Source | Verified screen responsibility |
|---|---|---|
| `/` | [pages/index.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/index.tsx) | Landing page or login redirect |
| `/auth/login` | [pages/auth/login.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/login.tsx) | Configurable sign-in methods |
| `/auth/join` | [pages/auth/join.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/join.tsx) | Registration and invited registration |
| `/auth/magic-link` | [pages/auth/magic-link.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/magic-link.tsx) | Magic-link request |
| `/auth/forgot-password` | [pages/auth/forgot-password.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/forgot-password.tsx) | Recovery request |
| `/auth/reset-password/[token]` | [pages/auth/reset-password/[token].tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/reset-password/[token].tsx) | Password reset |
| `/auth/resend-email-token` | [pages/auth/resend-email-token.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/resend-email-token.tsx) | Verification-link renewal |
| `/auth/verify-email` | [pages/auth/verify-email.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/verify-email.tsx) | Verification instruction |
| `/auth/verify-email-token` | [pages/auth/verify-email-token.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/verify-email-token.tsx) | Verification token consumption |
| `/auth/unlock-account` | [pages/auth/unlock-account.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/unlock-account.tsx) | Unlock token and renewal |
| `/auth/sso` | [pages/auth/sso/index.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/sso/index.tsx) | SSO discovery/start |
| `/auth/sso/idp-select` | [pages/auth/sso/idp-select.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/sso/idp-select.tsx) | Identity-provider selection |
| `/auth/idp-login` | [pages/auth/idp-login.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/auth/idp-login.tsx) | IdP-initiated callback |
| `/invitations/[token]` | [pages/invitations/[token].tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/invitations/[token].tsx) | Invitation validation/acceptance |
| `/dashboard` | [pages/dashboard.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/dashboard.tsx) | Authenticated dashboard |
| `/settings/account` | [pages/settings/account.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/settings/account.tsx) | Profile, avatar, email, theme |
| `/settings/security` | [pages/settings/security.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/settings/security.tsx) | Password and browser sessions |
| `/teams` | [pages/teams/index.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/index.tsx) | Team list/creation |
| `/teams/switch` | [pages/teams/switch.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/switch.tsx) | Active-team selection |
| `/teams/[slug]/settings` | [pages/teams/[slug]/settings.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/settings.tsx) | Team identity/deletion |
| `/teams/[slug]/members` | [pages/teams/[slug]/members.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/members.tsx) | Members and invitations |
| `/teams/[slug]/sso` | [pages/teams/[slug]/sso.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/sso.tsx) | SAML/OIDC connection administration |
| `/teams/[slug]/directory-sync` | [pages/teams/[slug]/directory-sync.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/directory-sync.tsx) | Directory administration |
| `/teams/[slug]/audit-logs` | [pages/teams/[slug]/audit-logs.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/audit-logs.tsx) | Retraced viewer |
| `/teams/[slug]/webhooks` | [pages/teams/[slug]/webhooks.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/webhooks.tsx) | Webhook endpoints |
| `/teams/[slug]/api-keys` | [pages/teams/[slug]/api-keys.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/api-keys.tsx) | API-key management |
| `/teams/[slug]/billing` | [pages/teams/[slug]/billing.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/billing.tsx) | Pricing/subscriptions |
| `/teams/[slug]/products` | [pages/teams/[slug]/products.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/teams/[slug]/products.tsx) | Product placeholder surface |
| `/.well-known/saml-configuration` | [pages/well-known/saml-configuration.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/well-known/saml-configuration.tsx) | SP metadata display |

## Framework and Error Pages

- `pages/_app.tsx`: session, theme, translations, toast, Mixpanel, and layout composition ([pages/_app.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/_app.tsx)).
- `pages/_document.tsx`: document shell ([pages/_document.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/_document.tsx)).
- `pages/404.tsx` and `pages/500.tsx`: branded recovery pages ([pages/404.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/404.tsx), [pages/500.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/500.tsx)).

## Navigation

- `AccountLayout` wraps normal authenticated pages with the application shell.
- `AuthLayout` wraps sign-in and recovery flows.
- Team tabs are permission- and feature-aware; header/drawer navigation adapts to route and viewport.
- Loading, unavailable team, unauthorized, empty, validation, and service-error states are represented in the applicable screens.

All 42 API handler files are mapped in [API-MAP.md](API-MAP.md).
