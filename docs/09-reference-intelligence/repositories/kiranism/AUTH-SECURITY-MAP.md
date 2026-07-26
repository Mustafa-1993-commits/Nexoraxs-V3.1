
# Kiranism Shadcn Authentication and Security Map

## Authentication Boundaries

| Boundary | Verified behavior | Evidence |
|---|---|---|
| Root | Branches on Clerk `userId` into sign-in or overview | [Page](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/page.tsx) |
| Dashboard middleware | Calls `auth.protect()` for `/dashboard(.*)` | [isProtectedRoute](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts) |
| Sign-in/sign-up | Mounts Clerk provider components | [ClerkSignInForm](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/auth/components/sign-in-view.tsx); [ClerkSignUpForm](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/auth/components/sign-up-view.tsx) |
| Profile/sign-out | Mounts Clerk UserProfile and SignOutButton | [UserProfile](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/features/profile/components/profile-view-page.tsx); [SignOutButton](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/layout/app-sidebar.tsx) |
| API handlers | Middleware runs, but `auth.protect()` does not; handlers contain no auth check | [matcher/protected matcher](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/proxy.ts); [POST](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/api/products/route.ts) |

No custom passwordless, forgot/reset, MFA, token/API-key, session administration, domain verification, OAuth/OIDC, SAML,
SCIM, or admin authentication implementation is in repository source. Provider widgets may expose Clerk-managed flows;
their internal behavior is unknown here.

## Authorization and Tenancy

- Clerk organization is the only tenant-like context consumed. Organization listing/switching/profile/billing UI is
  verified in [WorkspacesPage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/workspaces/page.tsx),
  [OrgSwitcher](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/org-switcher.tsx), and
  [TeamPage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/workspaces/team/%5B%5B...rest%5D%5D/page.tsx).
- Navigation checks organization presence, membership permission, or exact membership role on the client. The hook itself
  says this is visibility only: [useFilteredNavItems](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/hooks/use-nav.ts).
- The exclusive page uses Clerk `Show` with `plan: pro`: [ExclusivePage](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/dashboard/exclusive/page.tsx).
- Product/user demo rows have no organization ID, owner, role binding, or isolation boundary.

## Verified Security Controls

- Dashboard authentication at middleware.
- Strictly enumerated HTTPS remote image hosts:
  [images.remotePatterns](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/next.config.ts).
- Server validation of the active palette against a fixed registry:
  [isValidTheme](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx).
- SameSite=Lax and conditional Secure theme preference:
  [setThemeCookie](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/themes/active-theme.tsx).
- Non-root production container users:
  [USER node](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/Dockerfile); [USER bun](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/Dockerfile.bun).
- Production console removal:
  [compiler.removeConsole](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/next.config.ts).
- Client form Zod validation exists, but route handlers do not reuse it.

## Security and Privacy Gaps

- Mutable demo APIs have no authenticated actor, organization scope, permission, rate limit, or validated body.
- No custom CSRF, CSP/security headers, webhook verification/replay protection, SSRF guard, token hashing, encryption,
  audit trail, secret vault, or server-side resource authorization is implemented.
- Sentry config enables `sendDefaultPii` and samples every trace:
  [sentryOptions](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/instrumentation.ts). Policy/consent/redaction are unknown.
- Root layout uses an inline theme-color bootstrap script:
  [dangerouslySetInnerHTML](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/app/layout.tsx); no CSP nonce/header configuration exists.
