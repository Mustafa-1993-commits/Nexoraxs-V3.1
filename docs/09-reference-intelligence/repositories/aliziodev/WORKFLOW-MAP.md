# Workflow Map

## Registration

1. Guest visits `/register`; an already-authenticated user is redirected.
2. UI submits name, email, password, and confirmation through `next-sanctum`.
3. `CreateNewUser` validates required fields, email uniqueness, and password policy, then hashes and creates the user.
4. The UI shows success and navigates to `/dashboard`.
5. Email verification is not enforced by default.

[E011](EVIDENCE-MANIFEST.md#e011) [E032](EVIDENCE-MANIFEST.md#e032) [E050](EVIDENCE-MANIFEST.md#e050)

## Password Login and Logout

1. Login derives a safe return target and redirects an already-authenticated user.
2. The UI offers passkey login first, then email/password with Remember Me.
3. Password login returns either authenticated success or `two-factor-required`.
4. A normal login navigates to the target; a TOTP account goes to `/two-factor-challenge`.
5. Logout is initiated from the user menu, clears auth through the client, and returns to `/login`.

Invalid credentials stay on the form with an error. Login is limited to five attempts per email/IP key per minute. [E009](EVIDENCE-MANIFEST.md#e009) [E031](EVIDENCE-MANIFEST.md#e031) [E050](EVIDENCE-MANIFEST.md#e050)

## Password Recovery

1. Guest submits an email at `/forgot-password`.
2. The response is deliberately phrased as “if the account exists.”
3. The backend notification URL targets the SPA reset screen with token and email.
4. `/reset-password` reads the query, keeps email read-only, accepts a confirmed password, and returns to login after success.

[E009](EVIDENCE-MANIFEST.md#e009) [E012](EVIDENCE-MANIFEST.md#e012) [E033](EVIDENCE-MANIFEST.md#e033)

## Email Verification (Dormant by Default)

1. When enabled, the backend creates a temporary signed API URL and rewrites it to the SPA callback path.
2. An unauthenticated callback redirects through `/login?redirect=<same-origin callback>`.
3. The callback replays ID, hash, expiry, and signature and refreshes the user.
4. Invalid/expired links offer the resend screen.
5. The resend screen allows resending or logout.

Default `MUST_VERIFY_EMAIL` is false and `User` does not implement `MustVerifyEmail`, so this workflow is shipped but not enforced. [E009](EVIDENCE-MANIFEST.md#e009) [E010](EVIDENCE-MANIFEST.md#e010) [E034](EVIDENCE-MANIFEST.md#e034)

## Security Settings Gate

1. App-group auth first establishes the user.
2. `/settings/security` asks Fortify whether the password-confirmation window is current.
3. Until confirmed, a modal masks all security settings.
4. Correct password reveals password, TOTP, passkey, and session management; closing navigates back.

[E038](EVIDENCE-MANIFEST.md#e038)

## TOTP Enrollment and Login

1. User enables 2FA.
2. UI fetches QR SVG and manual secret concurrently.
3. User scans/copies secret and enters a six-digit TOTP.
4. Backend confirms, frontend refreshes user, and recovery codes become available.
5. On later password login, the user enters a new TOTP or switches to a recovery-code input.
6. User may view, hide, and regenerate recovery codes or disable 2FA.

Failures preserve an error state; setup can be resumed when data remains loaded. E2E covers enrollment and a fresh-window login challenge. [E035](EVIDENCE-MANIFEST.md#e035) [E051](EVIDENCE-MANIFEST.md#e051)

## Passkeys

1. Login UI detects browser support and hides passkey login if unsupported.
2. Passwordless sign-in invokes a WebAuthn ceremony; browser cancellation is silent.
3. Security settings fetch the user's safe passkey metadata and render loading/empty/list states.
4. Registration suggests a browser/OS name, prevents dialog close mid-ceremony, and refreshes the list on success.
5. Removal requires a confirmation dialog and refreshes the list.
6. `/.well-known/passkey-endpoints` advertises the security settings as enrollment/management UI.

E2E verifies resident-key/user-verification registration and passwordless login with a virtual authenticator. [E036](EVIDENCE-MANIFEST.md#e036) [E052](EVIDENCE-MANIFEST.md#e052)

## Browser Sessions

1. Security settings loads sessions from the database session table.
2. API labels the current session and returns IP, UA, and ISO last activity.
3. UI derives browser/platform and mobile/desktop icons.
4. User may confirm deletion of one non-current session.
5. User may submit the current password to revoke all other sessions.
6. Other tabs revalidate on focus/visibility; a missing user hard-redirects to an expired-session login.
7. Login displays a one-time expiry toast and cleans the query string.

The API refuses direct current-session deletion through the session route. E2E covers bulk revocation and the expiry notice, not the single-session button or stale-tab focus event. [E017](EVIDENCE-MANIFEST.md#e017) [E037](EVIDENCE-MANIFEST.md#e037) [E053](EVIDENCE-MANIFEST.md#e053)

## Profile, Password, and Deletion

- Profile update edits name/email and renders field validation. A verification resend subflow is conditionally present only when verification is enabled.
- Password update requires the current password, clears fields after success, and focuses the relevant invalid field.
- Account deletion opens a destructive dialog, validates the password, revokes tokens, invalidates the current session, regenerates CSRF, deletes the user, and returns to login.

[E013](EVIDENCE-MANIFEST.md#e013) [E014](EVIDENCE-MANIFEST.md#e014) [E015](EVIDENCE-MANIFEST.md#e015) [E038](EVIDENCE-MANIFEST.md#e038)

## Appearance and Shell

- User selects Light, Dark, or System; `next-themes` applies a class and persists the preference.
- Desktop shell supports sidebar collapse; mobile uses a sheet; sidebar state is stored in a seven-day cookie.
- Settings pages share local navigation and breadcrumbs.

[E039](EVIDENCE-MANIFEST.md#e039) [E041](EVIDENCE-MANIFEST.md#e041) [E042](EVIDENCE-MANIFEST.md#e042)

## Build, Test, and Deployment

```text
composer run setup
  → copy envs → generate key → create SQLite → migrate → pnpm install

composer run dev
  → Laravel dev server + queue listener + Next dev server

CI
  → Pest PHP 8.4/8.5
  → Pint + ESLint + Prettier
  → full-stack Playwright Chromium

Compose boot
  → build frontend/PHP → generate shared APP_KEY
  → wait for MySQL → migrate → cache config/routes/events
  → run php-fpm + worker + scheduler
```

[E044](EVIDENCE-MANIFEST.md#e044) through [E049](EVIDENCE-MANIFEST.md#e049)
