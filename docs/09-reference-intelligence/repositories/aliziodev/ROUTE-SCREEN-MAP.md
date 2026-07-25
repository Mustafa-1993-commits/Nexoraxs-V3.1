# Route and Screen Map

## Next.js Pages

| Route | Route group | Screen/behavior | Guard and transitions | Evidence |
|---|---|---|---|---|
| `/` | public | Auth-aware Laravel welcome/learning page | Shows Dashboard to a user; Login/Register to a guest | [E040](EVIDENCE-MANIFEST.md#e040) |
| `/dashboard` | `(app)` | Responsive shell with four placeholder panels | Optimistic cookie guard plus authoritative server user check | [E030](EVIDENCE-MANIFEST.md#e030) [E040](EVIDENCE-MANIFEST.md#e040) |
| `/settings/profile` | `(app)` | Name/email update and account deletion | App guard; deletion validates current password | [E038](EVIDENCE-MANIFEST.md#e038) |
| `/settings/security` | `(app)` | Password, TOTP, passkey, and session management | App guard plus password-confirmation dialog for the entire content | [E038](EVIDENCE-MANIFEST.md#e038) |
| `/settings/appearance` | `(app)` | Light/dark/system selector | App guard | [E039](EVIDENCE-MANIFEST.md#e039) |
| `/login` | `(auth)` | Passkey or email/password login, remember option, safe return URL | Authenticated users redirect to a same-origin relative target or dashboard | [E031](EVIDENCE-MANIFEST.md#e031) |
| `/register` | `(auth)` | Name/email/password registration | Authenticated users redirect to dashboard | [E032](EVIDENCE-MANIFEST.md#e032) |
| `/forgot-password` | `(auth)` | Password-reset email request | Public auth flow | [E033](EVIDENCE-MANIFEST.md#e033) |
| `/reset-password` | `(auth)` | Token/email-derived password reset | Public auth flow; success returns to login | [E033](EVIDENCE-MANIFEST.md#e033) |
| `/confirm-password` | `(auth)` | Standalone password confirmation | Success goes to dashboard; sensitive settings normally use an inline dialog instead | [E033](EVIDENCE-MANIFEST.md#e033) |
| `/verify-email` | `(auth)` | Resend verification or logout | Redirects a guest to login and an already-verified user to dashboard | [E034](EVIDENCE-MANIFEST.md#e034) |
| `/email/verify/[id]/[hash]` | `(auth)` | Signed-link verification callback | Preserves signed query; unauthenticated user returns through safe login redirect | [E034](EVIDENCE-MANIFEST.md#e034) |
| `/two-factor-challenge` | `(auth)` | TOTP or recovery-code challenge | Entered after password login returns `two-factor-required`; success goes to dashboard | [E035](EVIDENCE-MANIFEST.md#e035) |

## Next.js Route Handlers

| Route | Methods | Result | Evidence |
|---|---|---|---|
| `/api/sanctum/[...path]` | GET, POST, PUT, PATCH, DELETE | Pinned same-origin proxy to `SANCTUM_BASE_URL` | [E028](EVIDENCE-MANIFEST.md#e028) |
| `/.well-known/passkey-endpoints` | GET | JSON `enroll` and `manage` URLs pointing to `/settings/security` | [E036](EVIDENCE-MANIFEST.md#e036) |

## Laravel Application Routes

| Route | Method | Handler | Middleware | Consumer | Evidence |
|---|---|---|---|---|---|
| `/` | GET | JSON closure | web | Status/manual inspection | [E007](EVIDENCE-MANIFEST.md#e007) |
| `/up` | GET | Framework health endpoint | framework bootstrap | Health checking | [E005](EVIDENCE-MANIFEST.md#e005) |
| `/api/user` | GET | `UserController::show` | `auth:sanctum` | `getUser`, `useUser`, auth refresh | [E006](EVIDENCE-MANIFEST.md#e006) [E018](EVIDENCE-MANIFEST.md#e018) |
| `/api/account` | DELETE | `AccountController::destroy` | `auth:sanctum`; current-password validation | Delete-account dialog | [E006](EVIDENCE-MANIFEST.md#e006) [E015](EVIDENCE-MANIFEST.md#e015) |
| `/api/passkeys` | GET | `PasskeyController::index` | `auth:sanctum` | Passkey settings list | [E006](EVIDENCE-MANIFEST.md#e006) [E016](EVIDENCE-MANIFEST.md#e016) |
| `/api/sessions` | GET | `SessionController::index` | `auth:sanctum`; database driver assertion | Session settings list | [E006](EVIDENCE-MANIFEST.md#e006) [E017](EVIDENCE-MANIFEST.md#e017) |
| `/api/sessions/others` | DELETE | `SessionController::destroyOthers` | `auth:sanctum`; current-password validation | Bulk other-session logout | [E006](EVIDENCE-MANIFEST.md#e006) [E017](EVIDENCE-MANIFEST.md#e017) |
| `/api/sessions/{id}` | DELETE | `SessionController::destroy` | `auth:sanctum`; current-user row scope; rejects current ID | Single other-session logout | [E006](EVIDENCE-MANIFEST.md#e006) [E017](EVIDENCE-MANIFEST.md#e017) |

## Package-Registered Backend Route Families

Fortify is configured with no prefix, web middleware, disabled views, and registration, password reset, email verification, profile update, password update, confirmed TOTP, and passkey features. Sanctum supplies its CSRF-cookie endpoint. The repository invokes these families through `next-sanctum`, but the exact vendor route definitions are not tracked because `vendor/` is absent. They are therefore configuration-verified but route-definition-unverified. [E003](EVIDENCE-MANIFEST.md#e003) [E008](EVIDENCE-MANIFEST.md#e008) [E029](EVIDENCE-MANIFEST.md#e029)

Observed frontend/package route families include:

- CSRF cookie acquisition, login, logout, registration;
- forgot/reset/update/confirm password;
- profile-information update;
- verification resend and signed verification;
- TOTP enable, confirm, disable, challenge, QR, secret key, recovery-code list/regeneration;
- passkey login, registration, and deletion.

No exact method/path claim beyond repository-defined routes is marked verified in this discovery.

## Navigation Graph

```text
/
├─ guest → /login → /dashboard or /two-factor-challenge → /dashboard
├─ guest → /register → /dashboard
└─ user → /dashboard

/login
├─ /forgot-password → reset email → /reset-password → /login
├─ /register
└─ passkey login → return target

/dashboard
└─ user menu → /settings/profile
   ├─ /settings/security
   └─ /settings/appearance

email verification link
└─ /email/verify/[id]/[hash]
   ├─ guest → /login?redirect=<signed callback> → callback
   ├─ valid → /dashboard
   └─ invalid/expired → /verify-email
```

## Non-Functional and Dormant Surface

- The app-header search icon is a button with no handler, route, or search implementation. [E041](EVIDENCE-MANIFEST.md#e041)
- Header, card-auth, and split-auth layouts are implemented alternatives but not selected by the active layout wrappers. [E041](EVIDENCE-MANIFEST.md#e041)
- `resources/views/welcome.blade.php` is not rendered by the tracked web route. [E007](EVIDENCE-MANIFEST.md#e007) [E058](EVIDENCE-MANIFEST.md#e058)
- Email-verification pages are reachable, but enforcement is disabled by default. [E010](EVIDENCE-MANIFEST.md#e010) [E034](EVIDENCE-MANIFEST.md#e034)
