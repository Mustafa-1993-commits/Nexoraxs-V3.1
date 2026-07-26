
# studio-admin Authentication, Authorization, Tenancy, and Security Map

## Authentication

The repository implements four authentication **UI** screens, Zod/React Hook Form validation, and a Google-branded
button. Login/register submit handlers serialize values—including passwords—into a toast. No provider request,
session, credential verifier, account persistence, logout, password recovery, MFA, OAuth callback, API token, or active
guard exists. Exact evidence: [LoginForm](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/login-form.tsx),
[RegisterForm](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/auth/_components/register-form.tsx),
[disabled proxy](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/proxy.disabled.ts).

## Authorization and Administration

The users and roles screens contain role, permission, system/custom, team, workspace, and review labels. All records are
embedded source data. Restrictions such as disabled system-role edit controls are client presentation only. No policy,
permission evaluator, membership check, ownership guard, route protection, or server mutation exists.

## Tenancy

There is no organization/workspace/team aggregate, tenant ID, membership model, tenant-aware query, isolation boundary,
or public/private/admin enforcement. Workspace and team values in [UserRow](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/users/_components/data.tsx)
are fixture labels only. The header account switcher changes one local persona and does not switch a session or tenant.

## Security Controls and Gaps

- Positive controls: preference allowlisting; form validation; semantic labels; external map response check/cancel guard;
  production console removal.
- Cookie limitation: UI cookies set path/max-age but do not explicitly set Secure, HttpOnly, or SameSite.
- Missing: CSRF boundary, security headers, CSP, rate limiting, token hashing, encryption, secret management, SSRF allowlist,
  webhook signing/replay defense, audit evidence, server validation for domain records, tenant enforcement, and security tests.
- The only external fetch uses a constant HTTPS URL; no user-controlled URL is passed.
