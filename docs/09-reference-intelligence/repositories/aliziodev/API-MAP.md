# API Map

## Application-Defined HTTP API

All `/api/*` routes below are inside one `auth:sanctum` group. Browser calls traverse the Next same-origin proxy; the Laravel endpoints also accept Sanctum bearer authentication when a valid token exists. No version prefix is defined. [E006](EVIDENCE-MANIFEST.md#e006)

| Method and path | Input | Success | Failure/invariants | Data exposed or changed | Evidence |
|---|---|---|---|---|---|
| `GET /api/user` | Auth context | Serialized authenticated user | 401 through guard | User model with hidden password/TOTP/recovery/remember fields | [E010](EVIDENCE-MANIFEST.md#e010) [E018](EVIDENCE-MANIFEST.md#e018) |
| `DELETE /api/account` | JSON `password` | 204 | Validation error for missing/wrong current password; guard 401 | Deletes all API tokens, invalidates session/CSRF token, deletes user | [E015](EVIDENCE-MANIFEST.md#e015) |
| `GET /api/passkeys` | Auth context | Latest-first array | Guard 401 | Only `id`, `name`, `last_used_at`, `created_at` for current user's relation | [E016](EVIDENCE-MANIFEST.md#e016) |
| `GET /api/sessions` | Auth/session context | Newest-first array | 500 unless session driver is `database`; guard 401 | Current user's `id`, IP, UA, `is_current`, ISO last-active timestamp | [E017](EVIDENCE-MANIFEST.md#e017) |
| `DELETE /api/sessions/others` | JSON `password` | 204 | Current-password validation; guard 401 | Deletes every current-user session except request session; refreshes auth hash | [E017](EVIDENCE-MANIFEST.md#e017) |
| `DELETE /api/sessions/{id}` | Session ID | 204 | 422 for current session; guard 401 | Deletes matching session only when `user_id` is the authenticated user | [E017](EVIDENCE-MANIFEST.md#e017) |

The Laravel root `GET /` returns `{"status":"ok","app":<configured-name>}`. `/up` is registered as the framework health endpoint. [E005](EVIDENCE-MANIFEST.md#e005) [E007](EVIDENCE-MANIFEST.md#e007)

## Next.js HTTP Surface

| Method and path | Security | Behavior | Evidence |
|---|---|---|---|
| `GET|POST|PUT|PATCH|DELETE /api/sanctum/[...path]` | Server-pinned upstream; same-origin browser access; cookie and CSRF behavior delegated to `next-sanctum` | Proxies to Laravel and forwards required request context | [E028](EVIDENCE-MANIFEST.md#e028) |
| `GET /.well-known/passkey-endpoints` | Public | Returns absolute same-origin `enroll` and `manage` URLs | [E036](EVIDENCE-MANIFEST.md#e036) |

## Package-Supplied Auth API

`config/fortify.php` verifies which feature families are enabled and `web/lib/sanctum.ts` verifies frontend activation of passkeys and device sessions. Repository code verifies the payloads supplied by each UI call. Exact package controller/route source is absent, so the route definition itself is not promoted to `Verified`. [E008](EVIDENCE-MANIFEST.md#e008) [E029](EVIDENCE-MANIFEST.md#e029) [E031](EVIDENCE-MANIFEST.md#e031) through [E036](EVIDENCE-MANIFEST.md#e036)

| Family | Repository-defined customization |
|---|---|
| Registration | `CreateNewUser` validates name, email uniqueness, and confirmed default password policy |
| Password reset | Custom SPA URL points to `/reset-password?token=...&email=...`; action hashes new password |
| Password update | Requires `current_password:web`; uses named error bag |
| Profile update | Validates unique email and contains an email-reverification branch when the model implements `MustVerifyEmail` |
| Email verification | Custom temporary signed URL is rewritten to the SPA callback route |
| Login and TOTP | Login and 2FA limits are 5/minute by email+IP and session login ID respectively |
| Passkeys | Frontend and API origin allowlist, RP host, password-confirmed management, six requests/minute |

## Commands, Events, Jobs, Schedules, Webhooks

| Kind | Finding | Evidence |
|---|---|---|
| Command | One closure command: `inspire` | [E057](EVIDENCE-MANIFEST.md#e057) |
| Setup/dev commands | Composer `setup`, `dev`, `test` and package lifecycle scripts | [E046](EVIDENCE-MANIFEST.md#e046) |
| Jobs | Database job/batch/failure schema and worker processes exist; no repository-defined job class | [E024](EVIDENCE-MANIFEST.md#e024) [E044](EVIDENCE-MANIFEST.md#e044) [E061](EVIDENCE-MANIFEST.md#e061) |
| Events/listeners | No repository-defined event or listener; deployment caches the framework event map | [E045](EVIDENCE-MANIFEST.md#e045) [E061](EVIDENCE-MANIFEST.md#e061) |
| Schedules | Scheduler process exists; no schedule is registered in tracked source | [E044](EVIDENCE-MANIFEST.md#e044) [E057](EVIDENCE-MANIFEST.md#e057) |
| Webhooks/realtime | None found | [E061](EVIDENCE-MANIFEST.md#e061) |

## Contract and Compatibility Findings

- API responses are direct model/query results, not explicitly versioned DTOs.
- The session list intentionally conforms to the external `next-sanctum` `DeviceSession` shape.
- Passkey listing narrows columns to avoid returning credentials.
- No OpenAPI/JSON Schema, API versioning, idempotency keys, correlation IDs, or webhook signatures are defined.
- `User` TypeScript adds an index signature and optional properties, so frontend typing is permissive relative to the serialized model. [E010](EVIDENCE-MANIFEST.md#e010) [E016](EVIDENCE-MANIFEST.md#e016) [E017](EVIDENCE-MANIFEST.md#e017) [E043](EVIDENCE-MANIFEST.md#e043)
