# Business Discovery Security Threat Model

| Metadata | Value |
| --- | --- |
| Status | **Approved Security Policy Input** |
| Scope | Business Discovery pre-registration, claim, target selection, import, and recovery |
| Readiness blocker | **BD-RDY-P01** |
| Authority basis | Accepted ADR-042 and Core Platform Architecture v1.1 Freeze |
| Security owner | Core Security / Human Architecture Authority |
| Date | 2026-07-22 |
| Version | 1.0 |
| Implementation authorization | **None** |
| Code impact | **None** |
| Review cadence | Before specification approval and after material architecture change |
| Supersedes | Nothing |

## 1. Approval Posture and Purpose

This document is the approved architecture-level Security threat model for Business Discovery. It
closes [BD-RDY-P01](../../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md) only at
the Security threat-model level by identifying assets, actors, trust boundaries, data flows,
threats, abuse cases, mandatory controls, owners, and residual risks.

It is binding Security policy input to later Permission, Privacy/Legal, Identity and recovery,
retention and backup, observability and support-access, encryption and key-management, residency,
abuse-control, specification, contract, test, and rollout work. It does not close those downstream
gates and does not grant authority to specify, plan, or implement the feature.

This model is technology-neutral. It defines no framework, provider, protocol, API, schema, UI,
token format, cookie choice, storage engine, numeric expiry or retention value, infrastructure,
migration, implementation plan, task, test, or runtime behavior.

## 2. Authority Basis

| Authority | Security effect used here |
| --- | --- |
| [Accepted ADR-042](../../00-governance/ADR/ADR-042-pre-registration-business-discovery.md) | Fixes optional Discovery, temporary non-canonical state, verified atomic claim, claim-to-User only, explicit target authorization, Candidate Fact import, human control, privacy boundaries, safe recovery, and no implementation authorization. |
| [Core Platform Architecture v1.1 Freeze](../../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md) | Freezes the claim, ownership, tenant-isolation, Candidate Fact, Privacy/Audit/backup/legal-hold, recovery, commercial, readiness, and OS boundaries. |
| [ADR-042 Human Architecture Review](../../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) | Records zero architecture blockers and requires a Security threat model plus later Identity, Permission, Privacy, retention, observability, and implementation gates. |
| [Business Discovery Readiness Validation](../../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md) | Defines BD-RDY-P01 closure evidence and the still-open P02–P09 and delivery/authorization blockers. |
| [Synchronized Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md) | Preserves optional Discovery-first and account-first paths and prohibits anonymous canonical creation or direct Business DNA publication. |
| [Core Security Model](../08-SECURITY-MODEL.md) | Supplies fail-closed security, explicit trust, secret protection, session/token, tenant isolation, Audit, API, data-protection, and incident-response principles. |
| [Core Permission Model](../05-PERMISSION-MODEL.md) | Requires default deny, Authentication/Authorization separation, explicit scope, current resource-owner checks, and no title-based authority. |
| [Core Data Ownership](../04-DATA-OWNERSHIP.md) | Preserves one canonical writer, owner contracts, Candidate Fact/Business DNA separation, provenance, idempotency, and recoverable partial failure. |
| [Core API Philosophy](../07-API-PHILOSOPHY.md) | Requires contract-first boundaries, safe errors, bounded input/query cost, idempotency, rate controls, and owner authorization. |
| [Core Observability](../09-OBSERVABILITY.md) | Requires tenant-safe correlated signals, no secrets or protected payloads in telemetry, Audit distinction, detection, and incident handoff. |
| [Core Deployment Model](../10-DEPLOYMENT-MODEL.md) | Supplies backup, restore, disaster-recovery, service-identity, environment, and fail-safe availability principles without choosing infrastructure. |
| Supporting Accepted ADRs | [ADR-003](../../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md), [ADR-005](../../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md), [ADR-014](../../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md), [ADR-016](../../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md), [ADR-018](../../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md), [ADR-034](../../00-governance/ADR/ADR-034-explicit-tenant-and-resource-scope.md), [ADR-036](../../00-governance/ADR/ADR-036-contract-first-api-architecture.md), [ADR-038](../../00-governance/ADR/ADR-038-append-only-audit-history.md), and [ADR-040](../../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md) preserve tenant, ownership, human-control, pipeline, API, Audit, readiness, and Core/OS boundaries. |

The historical [Edge Case and Recovery Matrix](../../00-governance/proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md)
was used only as non-authoritative provenance. Its mechanisms and proposed states were not treated
as accepted policy.

## 3. Threat-model Method

The method combines:

1. asset identification and CIA requirements;
2. legitimate-actor and attacker modeling;
3. trust-boundary and entry-point analysis;
4. conceptual data-flow analysis;
5. STRIDE classification—Spoofing, Tampering, Repudiation, Information Disclosure, Denial of
   Service, and Elevation of Privilege;
6. misuse and abuse-case analysis;
7. Security/Privacy overlap analysis;
8. qualitative inherent and residual risk rating;
9. mandatory control and owner mapping; and
10. residual-risk and downstream-dependency tracking.

### 3.1 Risk scale

Risk is qualitative because the repository contains no approved numeric scoring model, likelihood
data, loss model, or thresholds. Inherent risk assumes no feature-specific controls. Residual risk
assumes every mandatory requirement in this model is correctly designed, approved, implemented,
tested, monitored, and operated; it is not evidence that those controls exist.

| Level | Meaning |
| --- | --- |
| Critical | Could directly compromise verified identity, cross a tenant boundary, seize claim ownership, corrupt canonical Business/Business DNA, expose broad sensitive data, or destroy trustworthy Audit with severe impact. A mitigation path and accountable owner are mandatory before later specification approval. |
| High | Could materially expose sensitive information, subvert a consequential workflow, create sustained abuse/cost, or impair recovery/availability. Required controls must be defined before specification approval. |
| Medium | Material but bounded impact or an attack requiring stronger preconditions; controls and monitoring remain mandatory before implementation. |
| Low | Limited impact with straightforward containment; record and monitor without displacing higher risks. |

No risk is accepted merely because this document assigns a residual level. The named acceptance
owner must approve residual risk in the appropriate downstream policy or delivery gate.

## 4. System Scope and Security Objectives

### 4.1 In-scope journey

```text
Anonymous visitor
→ Temporary Discovery session
→ Answer capture
→ Inference and DiscoverySnapshot generation
→ Preview
→ Registration or login
→ Identity verification
→ Claim
→ Workspace selection or creation
→ Business selection or creation
→ Field-level review
→ Candidate Fact import proposal
→ Business Architect governed review
→ Business DNA publication
→ Recovery, expiry, deletion, support, Audit, and backup handling
```

The account-first path remains available without a Discovery session. Discovery completion has no
subscription, entitlement, readiness, OS configuration, billing, payment, or operational-data
effect.

### 4.2 Security objectives

- Preserve confidentiality of secret session credentials and potentially personal, confidential,
  or commercially sensitive Discovery content.
- Preserve integrity of lifecycle state, identity verification, claim binding, target selection,
  Permission evidence, Candidate Facts, provenance, human decisions, publication, and Audit.
- Preserve availability while preventing anonymous or authenticated denial-of-wallet and abusive
  consumption.
- Fail closed without account, session, tenant, Business, or resource enumeration.
- Keep claim, Authentication, Workspace/Business targeting, Authorization, import, review, and
  publication as separate decisions.
- Preserve human correction, rejection, partial acceptance, and Business Architect governance.
- Preserve deletion, expiry, minimized evidence, backup suppression, legal-hold authority, and
  safe recovery without weakening identity or tenant isolation.

## 5. Asset Register

Sensitivity labels in this table are threat-model handling levels, not a replacement for the
future Privacy/Legal classification required by BD-RDY-P03.

| ID | Asset | Owner | Sensitivity | Integrity requirement | Availability requirement | Confidentiality requirement | Allowed writers | Prohibited writers | Retention concern | Key threat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A01 | Anonymous session credential | Discovery under Core Security policy | Secret | Exact, unforgeable association to one session purpose | Available only while valid | Never exposed outside necessary session-control boundary | Approved credential issuer/validator only | Browser scripts beyond approved need, analytics, logs, support, Audit, other services | Short purpose-bound life; revoke/invalidate | Guessing, leakage, replay |
| A02 | Anonymous session lifecycle state | Discovery temporary owner | Restricted | Server-authoritative, monotonic where required, race-safe | Supports safe resume/expiry/deletion | Do not expose another session's existence or state | Discovery lifecycle boundary | Browser assertions, analytics, downstream canonical domains | Expiry, abandonment, invalidation, deletion | Forged state or rollback |
| A03 | Raw user answers | Discovery temporary owner | Potentially sensitive | Preserve answer/source/version; reject unauthorized modification | Available for approved preview/claim only | Minimize field exposure; exclude ordinary telemetry | Anonymous controller under session boundary; approved correction path | Inference provider except minimum contract, support, analytics, unrelated services | Purpose-limited expiry/deletion | Over-collection or leakage |
| A04 | Inferred facts | Discovery temporary owner | Potentially sensitive | Distinguish from user input; pin source/model/rule version | Available for preview and review while eligible | Same or stricter handling as source answers | Approved inference boundary; user correction cannot masquerade as inference | Analytics, support, direct canonical owners before review | Expire/delete unless imported as approved provenance | Poisoning, hidden inference |
| A05 | DiscoverySnapshot | Discovery temporary owner | Potentially sensitive | Versioned, non-canonical, tamper-evident meaning | Available only in eligible lifecycle | No ordinary logs, traces, analytics, support, prompts, or training | Discovery snapshot boundary | Browser state, canonical Business/DNA owners, downstream services except approved proposal flow | Expiry/deletion; stale-version control | Tampering or treatment as truth |
| A06 | Consent and disclosure evidence | Discovery under Privacy/Legal policy | Confidential | Version, purpose, actor/session, time, outcome preserved | Available for rights/Audit need | Minimized; no answer content or credential | Approved consent/disclosure recorder | Marketing, analytics, support, inference provider | Policy-specific proof vs minimization | Consent conflation or repudiation |
| A07 | Identity verification state | Core Identity | Restricted security state | Current, authentic, purpose-appropriate result | Available for claim decision | Expose only result/evidence reference needed | Core Identity only | Discovery, browser, support, analytics | Identity policy | Verification bypass or stale result |
| A08 | Claim record | Discovery claim boundary; Audit owns authoritative evidence | Confidential security evidence | Atomic one-session/one-User outcome; immutable history | Available for idempotent recovery | No credential or answer content | Claim owner and Audit through governed contract | Browser, support override, Workspace/Business domains | Claim/resume and Audit policy | Double claim or rollback |
| A09 | User binding | Discovery claim state references Core User | Confidential | One eligible session binds to one verified User only | Available for owner-safe recovery | Never disclose other User identity | Atomic claim boundary | Workspace/Business selection, support manual reassignment, browser | Claim lifecycle policy | Cross-user binding corruption |
| A10 | Workspace selection | Discovery orchestration; Core Workspace is canonical | Tenant-sensitive | Explicit, current, canonically validated | Available for target flow | Disclose only authorized candidates | Verified User selection; Core owner creation contract | Fallback inference, session token, role title | Temporary selection vs canonical Workspace lifecycle | Wrong-tenant selection |
| A11 | Business selection | Discovery orchestration; Core Business Registry is canonical | Tenant-sensitive | Explicit target and ancestry; current lifecycle | Available for import review | Disclose only authorized Businesses/fields | Verified authorized User; Core owner creation contract | Fallback inference, Business Unit substitution, browser assertion | Temporary selection vs canonical Business lifecycle | Cross-Business import |
| A12 | Membership and Permission evidence | Core Authorization and resource owner | Restricted security state | Current, target/action-scoped, attributable | Available at decision and execution | Minimum decision detail only | Core Authorization/resource owner | Discovery, UI, role labels, stale caches | Per policy; must support revocation | Stale or forged authorization |
| A13 | Candidate Fact proposals | Business Architect | Confidential business data | Field-level values, outcome, provenance, idempotency preserved | Available for governed review | Target-Business scoped | Business Architect through approved import/review contracts | Discovery direct write, Business DNA Registry bypass, other tenants | Business Architect policy | Silent/duplicate import |
| A14 | Existing canonical Business data | Core Business Registry or applicable canonical fact owner | Confidential canonical data | Owner-controlled; no silent overwrite | Available to authorized field review | Target/field-limited disclosure | Canonical owner only | Discovery, inference, support, analytics, import orchestration | Canonical lifecycle | Unauthorized overwrite/disclosure |
| A15 | Business Architect review state | Business Architect | Confidential workflow state | Accepted/rejected/corrected/failed/skipped outcomes distinct | Resumable and idempotent | Target-Business scoped | Authorized reviewers through Business Architect | Discovery, analytics, support, direct DNA publisher | Pipeline and retention policy | Mass acceptance or state tampering |
| A16 | Published Business DNA | Business DNA Registry | Highly sensitive canonical data | Published history and provenance immutable as governed | Available to authorized downstream owners | Business-scoped and Permission-filtered | Business DNA Registry after governed review | Discovery, anonymous actors, inference provider, support, analytics | Published-history policy | Direct publication or corruption |
| A17 | Provenance | Business Architect and Business DNA Registry by lifecycle | Confidential evidence | Source, version, inference, review, and publication lineage intact | Available for review/explanation/Audit | Minimized to authorized consumers | Owning pipeline/registry | Discovery after handoff, analytics, support, untrusted provider | Must balance explanation and deletion policy | Forgery or loss |
| A18 | Audit records | Core Audit Service | Restricted append-only evidence | Tamper-evident/append-only; corrections are new records | Highly available for investigation | Permission-controlled, tenant-scoped, content-minimized | Audit Service from authorized producers | Source domains after emission, support, operators without policy | Legal/retention policy; no credentials/raw answers by default | Missing, forged, or mutable Audit |
| A19 | Security events | Source Security/Observability owners | Restricted telemetry | Accurate type, outcome, source, time, correlation | Available for detection/response | No secret/content; tenant-safe | Approved signal producers | Attackers, arbitrary clients, untrusted integrations | Observability policy | Suppression or tampering |
| A20 | Analytics events | Analytics Intake | Purpose-limited | Accurate event meaning; never identity/authorization evidence | Available for approved funnel measurement | No raw answers, Snapshot, credentials, or unauthorized linkage | Approved analytics producers | Discovery content, support, marketing without authority | Consent/purpose/retention policy | Re-identification or exfiltration |
| A21 | Support-access records | Audit owner; Support under policy | Restricted evidence | Actor, purpose, approval, scope, access, outcome preserved | Available for review/incident | No unnecessary content | Authorized support tooling and Audit | Individual operator alteration, Discovery, analytics | Support/Audit policy | Untraced browsing or takeover |
| A22 | Deletion tombstones | Data-lifecycle owner under Privacy/Legal policy | Restricted lifecycle state | Durable enough to prevent resurrection; scoped correctly | Available during restore/reconciliation | Do not expose deleted content or requester identity unnecessarily | Approved deletion/restore controllers | Application flows, support override, analytics | Backup/rights/legal-hold lifecycle | Removal or bypass on restore |
| A23 | Backup copies | Storage/Platform Operations with data owners | Highly sensitive | Integrity/version compatibility; deletion suppression honored | Restorable under approved recovery | Encrypted/access-controlled under later policy | Approved backup/restore process only | Application, support, analysts, unapproved operators | Backup expiry/legal hold | Exposure or resurrection |
| A24 | Rate-limit and abuse-control state | API Gateway/Security | Restricted security state | Accurate counters/signals and scope | Available at every exposed boundary | Do not leak thresholds or sensitive correlation | Approved abuse-control components | Client, Discovery domain logic, support bypass | Abuse/observability policy | Evasion, poisoning, denial to legitimate users |
| A25 | Secrets and cryptographic keys | Future approved Security/Platform owner | Secret | Authentic, lifecycle-controlled, non-exported except approved need | Available to authorized workload only | Never in code, docs, payloads, telemetry, support | Approved secret/key lifecycle owner | Application users, support, analytics, logs, inference provider | Rotation/revocation/backup policy | Extraction or misuse |
| A26 | Service-to-service trust credentials | Core Identity/Security implementation owner | Secret | Caller, audience, purpose, lifecycle authentic | Available to approved workload | Minimum audience and no tenant data embedded as authority | Approved workload-identity owner | User/browser, unrelated service, logs, support | Rotation/revocation/incident policy | Credential theft/confused deputy |

## 6. Actor and Attacker Model

| ID | Actor | Trust posture | Legitimate capability or attacker goal | Primary security concern |
| --- | --- | --- | --- | --- |
| AC01 | Anonymous visitor | Unauthenticated, untrusted input | Start, answer, preview, abandon, delete eligible unclaimed session | Session control is not identity or tenant authority |
| AC02 | Legitimate verified User | Authenticated, not automatically authorized | Claim own session and select authorized context | Identity verification does not grant Workspace/Business authority |
| AC03 | Workspace Owner | Authenticated title; exact Permission still required | Perform permitted Workspace/Business actions | Title-based implicit privilege |
| AC04 | Workspace Admin | Authenticated title; exact Permission still required | Administer only granted actions | Automatic import or publication authority |
| AC05 | Employee | Authenticated, default deny for create/import | Use expressly granted actions | Privilege creep or role assumptions |
| AC06 | View-only User | Authenticated read-limited | View authorized data only | Mutation through hidden or reused entry points |
| AC07 | Multi-Workspace User | Authenticated across distinct tenant contexts | Explicitly select one authorized Workspace/Business | Cross-tenant context confusion |
| AC08 | Support operator | Privileged only under future approved policy | Explain/recover within scoped support authority | Social engineering, browsing, manual reassignment |
| AC09 | Security operator | Privileged Security responsibility | Detect, contain, revoke, investigate | Excessive access or unreviewed emergency action |
| AC10 | Privacy/Legal operator | Specialized policy/rights authority | Decide rights, hold, retention, disclosure | Unverified requester or overbroad hold/access |
| AC11 | Internal service | Authenticated non-human principal | Perform one contract-bound responsibility | Implicit trust, confused deputy, service credential theft |
| AC12 | Compromised browser | Hostile client context | Steal/tamper with session and content | XSS, extensions, local persistence, device sharing |
| AC13 | Malicious anonymous attacker | Unauthenticated adversary | Guess, enumerate, flood, steal, poison, exhaust cost | Public-boundary abuse and credential attack |
| AC14 | Authenticated malicious User | Authenticated adversary | Claim/import outside owned scope or exploit retries | Authentication mistaken for authorization |
| AC15 | Cross-tenant attacker | External or tenant adversary | Read/write another Workspace or Business | Tenant isolation failure |
| AC16 | Insider with excessive access | Privileged adversary | Browse, alter, reassign, suppress, extract | Separation of duties and attributable access |
| AC17 | Automated bot | Automated untrusted actor | Flood sessions, answers, inference, registration, claim | Distributed availability and denial-of-wallet |
| AC18 | Credential thief | Possesses stolen account/session/service secret | Impersonate User/session/service | Proof continuity, revocation, anomaly detection |
| AC19 | Replay attacker | Captures valid request or credential | Reuse claim/import/publish/delete operation | Idempotency, freshness, one-time semantics |
| AC20 | Token-link recipient | Receives credential intentionally or accidentally | View or claim another person's session | Token possession cannot be sufficient proof |
| AC21 | Compromised downstream integration | Untrusted/compromised provider or consumer | Exfiltrate, poison, impersonate, or replay | Minimal data, service authorization, containment |
| AC22 | Backup or log reader | Authorized or illicit infrastructure reader | Inspect stored copies or telemetry | Content/secrets exposure and cross-tenant leakage |

## 7. Trust-boundary Register

| ID | Trust boundary | Data crossing | Trust assumption | Verification required | Failure mode | Mandatory control |
| --- | --- | --- | --- | --- | --- | --- |
| TB01 | Browser ↔ public Discovery endpoint | Start/resume, answers, preview requests, session credential | Browser and input are untrusted | Credential validity, request integrity, size/type, rate/abuse, lifecycle | Reject safely without enumeration or canonical creation | R001–R016, R071–R079 |
| TB02 | Discovery runtime ↔ anonymous session store | Credential reference, state, answers, inference, Snapshot metadata | Store does not confer integrity or owner authority by itself | Purpose, integrity, state/version, expiry, access identity | Fail closed; invalidate or recover without content disclosure | R004–R010, R056–R070 |
| TB03 | Discovery ↔ processing/inference boundary | Minimum answers, source references, inferred proposals | Provider/service is least-privilege and potentially compromisable | Approved source/version, payload minimization, output validation, tenant/session isolation | Withhold result, label failure, do not create canonical state | R044, R046, R053, R056, R069, R101–R108 |
| TB04 | Browser ↔ authentication system | Registration/login/verification proof | Browser assertions are untrusted | Core Identity proof, account state, anti-enumeration, abuse controls | No verified state; continue Path B/recovery safely | R017, R027, R071–R079 |
| TB05 | Authentication ↔ verified identity state | Current verification result/reference | Only Core Identity owns identity truth | Authenticity, freshness, purpose, account status | Claim blocked; no session content disclosed | R017, R027–R029 |
| TB06 | Browser/Discovery ↔ claim orchestration | Session-control evidence, verified User reference, claim request | Token possession alone is insufficient | Identity, continuity, state, expiry, replay, atomicity | `claim_blocked`/`invalidated`; no partial binding | R017–R029 |
| TB07 | Discovery ↔ Core Identity | User/session verification and claim identity reference | Discovery cannot write User identity | Service identity, audience, minimum result, correlation | Block claim; isolate dependency failure | R017, R023, R027, R101–R105 |
| TB08 | Discovery ↔ Core Authorization | Membership/Permission decisions | Prior/cached result is not permanent authority | Current actor/action/target/scope and owner result | Deny without target disclosure | R030–R040 |
| TB09 | Discovery ↔ Workspace/Business Core contracts | Lookup, create/select request, lifecycle/ancestry result | Discovery orchestrates but never owns canonical entity | Service/User authority, tenant ancestry, exact action, current lifecycle | Deny/reselect; no fallback or direct write | R031–R040 |
| TB10 | Discovery ↔ Business Architect | Accepted field proposals and provenance | Import is Candidate Fact intake, not publication | User/target Permission, Snapshot freshness, field decision, idempotency, provenance | Preserve source/canonical state; per-item failure | R041–R055 |
| TB11 | Business Architect ↔ Business DNA Registry | Reviewed publishable facts and provenance | Only Registry publishes after governed review | Publication Permission, review completeness, Business scope, versions | No publication; retain governed review outcome | R041–R055 |
| TB12 | Runtime ↔ Audit pipeline | Minimized consequential-action evidence | Audit owner is authoritative; telemetry is not Audit | Producer identity, scope, event type, result, correlation, content allowlist | Consequential action fails/deferred where Audit is mandatory | R080–R091 |
| TB13 | Runtime ↔ logs/metrics/traces | Operational outcomes, safe references, timings | Telemetry stores/readers are not trusted for business content | Redaction/allowlist, tenant-safe access, correlation | Drop unsafe field/signal; preserve required Audit separately | R058, R066, R080–R091 |
| TB14 | Runtime ↔ analytics | Purpose-approved minimized funnel events | Analytics is not identity, authorization, or canonical truth | Purpose/consent, event allowlist, unlinkability/linkage authority | Do not emit; continue core journey when possible | R056–R070 |
| TB15 | Runtime ↔ support tools | Masked diagnostic/context references | Support has no implicit claim/import/tenant authority | Operator identity, purpose, approval, scope, requester verification, Audit | Deny or escalate; never disclose content | R064, R092–R100 |
| TB16 | Runtime/storage ↔ backup systems | Protected active data, tombstones, versions | Backup is untrusted for current deletion/authorization state | Access, encryption policy, integrity, version, restore suppression | Do not activate restore until reconciliation succeeds | R062–R065, R103–R105 |
| TB17 | Production ↔ administrative access | Diagnostics, security/rights/maintenance actions | Privilege is exceptional, scoped, and attributable | Strong identity, exact role/action, approval, time/purpose, Audit | Deny; break-glass only under approved policy | R092–R100 |
| TB18 | Service ↔ service | Identity, context, command/query/result | Internal placement creates no implicit trust | Workload identity, audience, contract, tenant, authorization, correlation | Reject, isolate, revoke credential when suspected | R101–R108 |
| TB19 | Tenant ↔ tenant | Shared platform execution/storage/telemetry | No tenant may observe or affect another | Canonical Workspace, ancestry, target, query/write filters, owner authorization | Fail closed, alert, incident handoff | R030–R040, R084–R091 |
| TB20 | Active data ↔ deletion/backup lifecycle | Deletion request, tombstone, retained evidence, backup restore | Deletion is not complete until lifecycle rules are applied | Requester proof, eligibility, hold, evidence minimization, restore suppression | Withhold disclosure/restore; preserve only approved evidence | R060–R065 |

## 8. Entry-point Register

Every entry point is untrusted until its applicable identity, session, purpose, tenant, target,
Permission, lifecycle, input, rate, and owner checks succeed.

| ID | Entry point | Primary caller | Protected assets/actions | Mandatory security posture |
| --- | --- | --- | --- | --- |
| EP01 | Start Discovery | Anonymous visitor/bot | A01–A06, A24 | Disclosure, minimized creation, anti-enumeration, limits, no canonical state |
| EP02 | Resume Discovery | Anonymous visitor/token recipient | A01–A05 | Credential plus valid state/continuity, expiry, no owner disclosure |
| EP03 | Submit answer | Anonymous visitor/compromised browser | A03–A05 | Integrity, type/size/content validation, CSRF/XSS defense, limits |
| EP04 | Generate preview | Anonymous visitor/bot | A03–A05, provider boundary | Cost control, source/version validation, safe degraded result |
| EP05 | Register | Anonymous visitor/bot | A07 | Core Identity security, anti-enumeration, abuse controls |
| EP06 | Login | User/credential thief | A07 | Core Identity proof, credential-stuffing controls, safe errors |
| EP07 | Verify identity | User/attacker | A07 | Current approved verification; no Discovery-defined bypass |
| EP08 | Claim session | Verified User/replay attacker | A01–A09, A18 | Atomic one-time claim, continuity, replay/race defense, Audit |
| EP09 | Select Workspace | Claimed User | A10, A12 | Explicit current membership/Permission and tenant-safe listing |
| EP10 | Create Workspace | Verified User | A10, canonical Workspace | Core-owned action Permission; no Discovery direct write |
| EP11 | Select Business | Authorized User | A11–A14 | Exact Business scope, ancestry/lifecycle, no fallback |
| EP12 | Create Business | Authorized User | A11, canonical Business | Core-owned action Permission; Business Unit not substitute |
| EP13 | Propose import | Authorized User/service | A05, A10–A17 | Snapshot freshness, target/action authorization, field decisions, provenance |
| EP14 | Review Candidate Facts | Authorized reviewer | A13–A17 | Target-scoped Permission, conflict visibility, no hidden values |
| EP15 | Accept Candidate Fact | Authorized reviewer | A13–A17 | Explicit per-field decision, current authorization, Audit |
| EP16 | Reject Candidate Fact | Authorized reviewer | A13–A18 | Explicit outcome, no canonical mutation, minimized evidence |
| EP17 | Correct Candidate Fact | Authorized reviewer | A13–A17 | Provenance-preserving correction and owner validation |
| EP18 | Publish Business DNA | Separately authorized publisher | A15–A18 | Business Architect completion and Registry publication Permission only |
| EP19 | Retry claim | Verified User/replay attacker | A01–A09 | Idempotent existing outcome, current proof, no double bind |
| EP20 | Retry import | Authorized User/service | A10–A18 | Reauthorization, idempotency, per-item reconciliation, no replay overwrite |
| EP21 | Delete unclaimed session | Session controller/impostor | A01–A06, A22 | Control proof, eligibility, safe no-disclosure response, tombstone/evidence |
| EP22 | Request deletion | User/rights requester/impostor | A03–A06, A08, A17–A23 | Rights identity/control proof, scope, hold/retention hierarchy |
| EP23 | Support-assisted recovery | User/social engineer/support operator | A01–A12, A21 | Approved policy only, separation of duties, no manual reassignment, Audit |
| EP24 | Audit lookup | Authorized operator/tenant User | A18 | Exact Permission, tenant/subject scope, purpose, query minimization, Audit |
| EP25 | Analytics emission | Internal service/integration | A19–A20 | Allowlisted event, no content/credential, purpose/consent, no identity authority |
| EP26 | Backup restoration | Platform operator/automation | A22–A23 | Approval, integrity/version, tenant safety, tombstone suppression, Audit |
| EP27 | Administrative maintenance | Security/operator/service | A01–A26 | Least privilege, separation, JIT/break-glass policy, change approval, Audit |

## 9. Conceptual Data-flow Model

This is a logical Security model, not an API or deployment design. “Protected channel” means the
later approved mechanism must provide confidentiality, integrity, peer authenticity, and safe
failure appropriate to the classification and trust boundary.

| Flow ID | Source | Destination | Data | Purpose | Authentication | Authorization | Encryption requirement | Logging rule | Retention rule | Failure behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DF01 | Anonymous browser | Discovery boundary | Start request, disclosure version, abuse signals | Create purpose-limited session | None; new session control established only after validation | Public action under abuse/purpose policy | Protected channel; secret returned only through approved mechanism | Outcome/correlation only; no credential/content | Session policy; no hidden canonical record | Reject/degrade without enumeration or canonical creation |
| DF02 | Session-controlled browser | Discovery | Answer and current state reference | Capture minimum questionnaire evidence | Valid anonymous session control | Session/lifecycle/purpose only | Protected channel; protected storage later required | Size/type/outcome only; no answer | Temporary expiry/deletion policy | Reject invalid item; preserve prior valid state |
| DF03 | Discovery | Inference boundary | Minimum answers, source/version and purpose context | Generate inferred proposals and Snapshot inputs | Approved service identity | Contract/purpose/minimum-data authorization | Protected service channel and later at-rest policy | Provider/version/outcome/cost class; no content | No provider reuse; temporary policy | Withhold/label failure; no fabricated result |
| DF04 | Discovery | Session-controlled browser | Minimized preview and proposal distinctions | Show DiscoverySnapshot | Valid anonymous session control | Eligible state and field exposure | Protected channel; browser handling policy pending | Retrieval outcome only; no Snapshot | Temporary policy | No content if state/control uncertain |
| DF05 | Browser | Core Identity | Registration/login proof | Establish or recover User identity | Core Identity mechanism | Identity operation policy; no tenant authority | Core Identity protection policy | Minimized auth/security event | Identity policy | Safe error; do not reveal account existence |
| DF06 | Core Identity | Claim orchestration | Verified User/result reference and freshness | Permit claim evaluation | Authenticated Core Identity service/result | Purpose-limited verification consumption | Protected service channel | Result/reference/correlation only | Identity and claim evidence policy | Block claim when invalid, stale, or unavailable |
| DF07 | Browser/Discovery | Claim owner and Audit | Session-control evidence, verified User reference, idempotency/correlation | Atomically bind eligible session to User | Verified User plus session-control proof | Claim-own-session action only | Protected channel; credential never enters evidence | Claim attempt/result, no credential/content | Claim/Audit policy | `claim_blocked`/`invalidated`; deterministic retry |
| DF08 | Claimed User/Discovery | Core Authorization/Workspace owner | User, Workspace query/selection or create request | Establish explicit Workspace context | Verified User/service context | Current membership and exact action Permission | Protected owner contract | Decision/outcome/correlation, tenant-safe | Owner/Audit policy | Deny or reselect; never infer fallback |
| DF09 | Claimed User/Discovery | Core Authorization/Business owner | Workspace, Business query/selection or create request | Establish explicit Business target | Verified User/service context | Exact Workspace/Business action and ancestry | Protected owner contract | Decision/outcome/correlation, tenant-safe | Owner/Audit policy | Deny/reselect without resource disclosure |
| DF10 | Discovery | Business Architect | Accepted field proposals, provenance, Snapshot/source versions, target | Create Candidate Fact import proposal | Verified User plus approved service identity | Current exact target/action Permission revalidated | Protected owner contract | Counts/outcomes/references only; no raw content | Business Architect/provenance policy | Per-item failed/skipped; no canonical overwrite |
| DF11 | Authorized reviewer | Business Architect | Accept/reject/correct decisions | Govern Candidate Facts | Verified current User | Review/action/target-scoped Permission | Protected channel | Per-action Audit correlation; content-minimized | Pipeline/Audit policy | No state change when uncertain; safe retry |
| DF12 | Business Architect | Business DNA Registry | Reviewed publishable facts and provenance | Publish governed Business DNA | Approved service and accountable actor context | Separate publication Permission and owner invariants | Protected owner contract | Publication result/references; no raw answers | Published-history/Audit policy | No publication; preserve review state |
| DF13 | Runtime owner | Audit Service | Actor/service, scope, action, subject reference, time, correlation, result | Append authoritative evidence | Approved producer identity | Event-type/source contract | Protected service channel | Audit is the record; producer logs only correlation | Approved Audit policy | Consequential action fails/deferred when evidence mandatory |
| DF14 | Runtime owner | Analytics Intake | Allowlisted minimized funnel event | Measure approved journey behavior | Approved producer identity | Purpose/consent/event policy | Protected service channel | Event type and safe context only | Analytics policy | Drop event; never block safe core action unless required |
| DF15 | Controller/rights process | Discovery/data owners | Verified deletion request, scope, eligibility, tombstone | Delete eligible working data | Session control or verified rights identity | Rights/purpose/hold eligibility | Protected channel and storage handling | Request/result/reference; no deleted content | Retain only approved minimized evidence | No disclosure/deletion on uncertain requester or scope |
| DF16 | Backup system/operator | Data owners | Versioned backup, tombstones/suppression, restore metadata | Recover trustworthy active data | Approved workload/operator identity | Restore approval, environment, tenant, owner scope | Protected backup/restore handling under P07 | Access/restore/reconciliation Audit | Backup/hold/expiry policy | Do not activate until integrity and suppression pass |
| DF17 | User/support operator | Support boundary/owning domain | Minimized diagnostic references and recovery request | Assist without taking ownership | Verified requester and operator under future policy | Exact support action, purpose, scope, approval | Protected support channel | Every access/action attributable and audited | Support/Audit policy | Deny/escalate; never manually reassign claim |

## 10. Threat Register

The controls cited below are mandatory requirements in §11. Detection and response describe
required Security outcomes, not selected products or runbooks.

| Threat ID | Threat | STRIDE category | Asset | Actor | Entry point | Trust boundary | Inherent risk | Required controls | Detection | Response | Residual risk | Owner | Downstream dependency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-SEC-T001 | Guess or brute-force an anonymous session credential | S/I | A01–A05 | AC13/AC17 | EP02/EP08 | TB01/TB06 | High | R001, R006–R011, R015, R071–R079 | Non-enumerating failure, guess-rate and anomaly signals | Throttle/block, invalidate affected session, investigate | Medium — distributed attempts remain possible | Security / Discovery / API Gateway | P04, P09, test strategy |
| BD-SEC-T002 | Leak credential through URL, referrer, logs, screenshots, browser history, clipboard, analytics, traces, support, or Audit | I | A01 | AC12/AC20/AC22 | EP01–EP04/EP23–EP25 | TB01/TB13–TB15 | High | R002, R003, R005, R058, R064, R080–R091 | Secret-scanning/redaction violations and suspicious resume/claim | Revoke/invalidate, contain telemetry/support exposure, incident handoff | Medium — screenshots/clipboard remain user-device risks | Security / Discovery / Observability | P04, P06, P07 |
| BD-SEC-T003 | Fix or swap a session so one visitor operates another session | S/T | A01–A05 | AC13/AC18 | EP01/EP02 | TB01/TB02 | High | R001, R004, R010, R016, R024–R026 | State/continuity mismatch and abnormal session transitions | Block, rotate/invalidate, require restart or approved recovery | Medium | Discovery / Security | P04, API/data contracts |
| BD-SEC-T004 | Hijack an active or abandoned session through device sharing, copied link, or token transfer | S/I | A01–A05 | AC12/AC18/AC20 | EP02–EP04/EP08 | TB01/TB06 | High | R002–R010, R016, R023–R029 | Context change, suspicious resume/claim, already-claimed mismatch | Withhold content, invalidate or require stronger approved recovery | High — compromised/shared endpoints cannot be eliminated | Security / Core Identity / Discovery | P04, P06, P09 |
| BD-SEC-T005 | Replay or race claim requests to double-claim one session | S/T/R | A01/A02/A08/A09/A18 | AC19/AC14 | EP08/EP19 | TB06/TB12 | Critical | R008, R009, R018, R021–R026, R083 | Duplicate/idempotency conflict, concurrent state/version mismatch | Commit one outcome, deny/replay safe result, alert on cross-User race | Medium | Discovery claim owner / Audit / Security | P04, contracts, test strategy |
| BD-SEC-T006 | Reuse expired, abandoned, deleted, or invalidated session evidence | S/T | A01–A05/A22 | AC13/AC19 | EP02/EP08/EP19 | TB01/TB02/TB20 | High | R006, R007, R010, R016, R024, R060–R065 | Lifecycle violation and tombstone hit | Deny without disclosure; invalidate and preserve minimized evidence | Low | Discovery / Data lifecycle owner | P04, P05 |
| BD-SEC-T007 | Steal content/credential from insecure browser persistence or malicious extension | I/S | A01–A05 | AC12/AC18 | EP02–EP04 | TB01 | High | R003, R005, R013, R016, R023 | Context anomalies and credential reuse; client compromise is only partly observable | Invalidate, require approved recovery, advise safe restart | High — end-user device remains outside full platform control | Security / Discovery | P04, P06, P07 |
| BD-SEC-T008 | Tamper with client answers, inferred facts, Snapshot, or lifecycle state and present it as server truth | T/E | A02–A05 | AC12/AC13 | EP03/EP04/EP13 | TB01–TB03/TB10 | High | R004, R014, R041–R047, R053 | Integrity/version mismatch and impossible transition | Reject payload/state; preserve prior valid state; alert on repeated attempts | Low | Discovery / Business Architect | Contracts, test strategy |
| BD-SEC-T009 | Use CSRF to submit, delete, claim, select, import, or decide without intended user action | S/T | A02–A13/A22 | AC13 | EP03/EP08–EP22 | TB01/TB06/TB09/TB10 | High | R012, R018, R023, R031, R041, R060 | Origin/intent failure and anomalous cross-site request | Reject; preserve state; invalidate when compromise suspected | Low | Security / every entry-point owner | Specification, contracts, test strategy |
| BD-SEC-T010 | Use XSS to steal credential/content or perform actions in the victim context | S/I/E | A01–A17 | AC12/AC13 | EP01–EP23 | TB01 | Critical | R003, R013, R014, R058, R064, R101 | Client-security violations, anomalous actions and content probes | Block/contain, revoke sessions, incident response and exposure assessment | Medium — undiscovered client defects remain possible | Security / experience owner | Specification, P06, test strategy |
| BD-SEC-T011 | Enumerate whether a session, account, Workspace, Business, claim, or target exists | I | A01/A07–A12 | AC13/AC14 | EP02/EP05–EP12/EP19 | TB01/TB04/TB06/TB08/TB09 | Medium | R011, R017, R027, R030, R040, R071 | Response-shape/timing review and enumeration-rate signals | Normalize safe response, throttle, investigate patterns | Low | Security / Identity / Authorization | P04, P09 |
| BD-SEC-T012 | Claim without verified identity or bypass verification freshness/account state | S/E | A07–A09 | AC13/AC14/AC18 | EP07/EP08 | TB04–TB07 | Critical | R017–R020, R027–R029, R101–R105 | Claim attempted with missing/stale/mismatched verification | Block claim; contain identity incident; preserve no partial binding | Medium | Core Identity / Security / Discovery | P04, P07 |
| BD-SEC-T013 | Claim under the wrong signed-in account or after confusing account switch | S/T | A07–A09 | AC02/AC14/AC20 | EP06–EP08/EP19 | TB04–TB07 | High | R017, R022–R029 | Account/session continuity mismatch and explicit switch signal | Warn/block without content disclosure; require correct-account recovery/restart | Medium | Core Identity / Discovery / Product | P04, specification |
| BD-SEC-T014 | Duplicate registration creates account confusion or leaks account existence | S/I | A07/A08 | AC13/AC17 | EP05/EP06 | TB04 | Medium | R017, R027, R071–R079 | Duplicate/failure patterns without account detail | Route through Core Identity recovery; no second claim | Low | Core Identity / Security | P04, P09 |
| BD-SEC-T015 | Corrupt session-to-User binding through partial claim, rollback, or non-atomic Audit/state commit | T/R/E | A08/A09/A18 | AC11/AC19/AC21 | EP08/EP19 | TB06/TB07/TB12 | Critical | R018, R021, R024–R026, R083, R089 | State/Audit reconciliation, impossible split outcome | Fail one transaction boundary safely; reconcile without reassignment | Medium | Discovery claim owner / Audit | P04, contracts, test strategy |
| BD-SEC-T016 | Replay a successful claim to disclose or transfer its outcome | S/I/T | A08/A09 | AC19/AC20 | EP08/EP19 | TB06 | High | R008, R009, R021, R024–R026 | Claimed-state replay and cross-User mismatch | Return safe idempotent outcome only to same owner; otherwise deny | Low | Discovery / Core Identity | P04, API contracts |
| BD-SEC-T017 | Use support or weak recovery to take over claim/session ownership | S/E | A01–A09/A21 | AC08/AC16/AC18 | EP23/EP27 | TB15/TB17 | Critical | R023, R028, R064, R092–R100 | Recovery attempts, operator/user mismatch, approval anomalies | Stop action, revoke access, incident/escalation; never manually reassign | High — social engineering and insider risk remain | Support Governance / Security / Core Identity | P04, P06, incident policy |
| BD-SEC-T018 | Credential stuffing against login/claim increases account takeover impact | S/D | A07–A09 | AC17/AC18 | EP06–EP08 | TB04/TB06 | High | R017, R027, R071–R079, R086 | Auth/claim failure correlation and anomaly detection | Throttle/challenge under approved policy, revoke/contain, notify through policy | Medium | Core Identity / Security / API Gateway | P04, P09 |
| BD-SEC-T019 | Treat Authentication, membership, or role title as authorization | E | A10–A16 | AC03–AC06/AC14 | EP09–EP18 | TB08–TB11 | Critical | R030–R040, R041, R054 | Owner denial mismatch and privileged-action review | Deny at owner; alert on bypass attempt; review Permission grants | Low | Core Authorization / canonical owners | P02, contracts, test strategy |
| BD-SEC-T020 | Infer fallback or select wrong Workspace/Business, including multi-Workspace confusion | S/T/I | A10–A14 | AC07/AC14 | EP09–EP13 | TB08/TB09/TB19 | Critical | R031–R036, R040 | Explicit-selection evidence mismatch and cross-context anomaly | Deny/reselect; disclose no unauthorized target; no fallback | Low | Core Authorization / Workspace/Business owners | P02, specification |
| BD-SEC-T021 | Use stale Membership/Permission, revoked access, preview-only check, or TOCTOU gap at execution | E/T | A12–A17 | AC14/AC19 | EP13–EP20 | TB08–TB11/TB19 | Critical | R033, R036–R040, R041, R054 | Authorization decision/version and execution-time mismatch | Deny/revalidate; preserve claim/source and canonical data | Medium | Resource owners / Core Authorization | P02, contracts, test strategy |
| BD-SEC-T022 | Import into another tenant or Business | E/T/I | A10–A17 | AC14/AC15 | EP11–EP20 | TB09–TB11/TB19 | Critical | R030–R041, R048–R055, R085 | Cross-Workspace/Business attempt and ancestry mismatch | Fail closed, alert and incident handoff, no partial write | Low | Business Architect / Core Authorization / Security | P02, P06, contracts |
| BD-SEC-T023 | Exploit a confused deputy in Discovery or an internal service to act with broader authority | E/S | A10–A18/A26 | AC11/AC21 | EP09–EP20/EP27 | TB07–TB12/TB18 | Critical | R030, R033, R037–R041, R101–R108 | Caller/audience/actor/target mismatch and service anomaly | Reject, revoke credential, isolate service, investigate affected tenants | Medium | Security / service and resource owners | P02, P07, contracts |
| BD-SEC-T024 | Create Workspace or Business without exact owner authorization | E/T | A10/A11/A14 | AC02/AC14 | EP10/EP12 | TB09 | High | R030–R040 | Owner contract denial/bypass signal | Deny, preserve no partial entity, Audit attempts as policy requires | Low | Workspace/Business owners | P02, contracts |
| BD-SEC-T025 | Escalate privilege through support tools or administrative selectors | E/I | A10–A21 | AC08/AC16 | EP23/EP27 | TB15/TB17 | High | R064, R092–R100 | Operator access/selection anomalies and approval mismatch | Revoke/contain, Audit review, incident and access recertification | Medium | Support/Security/Core Authorization | P02, P06 |
| BD-SEC-T026 | Write anonymous answers/Snapshot directly to Business DNA or bypass Business Architect | T/E | A03–A05/A13–A17 | AC11/AC14/AC21 | EP13/EP18 | TB10/TB11 | Critical | R041–R055 | Contract-path violation and publication source/provenance check | Reject, prevent publication, incident/reconciliation if attempted | Low | Business Architect / Business DNA Registry | Contracts, test strategy |
| BD-SEC-T027 | Silently overwrite canonical data or mass-accept without field-level human review | T/E/R | A13–A17 | AC03/AC04/AC14 | EP13–EP18 | TB10/TB11 | Critical | R042, R045–R055, R083 | Missing per-field decision/conflict evidence and unusual acceptance pattern | Stop import/publication, preserve canonical data, require governed review | Medium | Business Architect / Business DNA Registry | P02, specification, test strategy |
| BD-SEC-T028 | Forge/lose provenance or tamper with inferred facts/source versions | T/R | A04/A05/A13/A17 | AC13/AC21 | EP04/EP13/EP20 | TB03/TB10 | High | R043, R044, R046, R053, R101–R108 | Source/version validation failure and provenance gap | Withhold affected proposal, invalidate Snapshot/import, investigate provider | Medium | Discovery / Business Architect | P03, contracts, test strategy |
| BD-SEC-T029 | Hide conflicts with existing Business data or current Candidate Facts | T/I | A13–A15 | AC11/AC14 | EP13–EP17 | TB10 | High | R045, R047–R050 | Conflict-comparison completeness and review anomalies | Stop affected items; require explicit comparison and decision | Low | Business Architect | Specification, contracts, test strategy |
| BD-SEC-T030 | Duplicate, replay, or non-idempotently retry import | T/R/D | A13–A18 | AC19/AC11 | EP13/EP20 | TB10/TB12 | High | R051, R052, R054, R083 | Idempotency conflict, duplicate provenance/source fingerprint | Return prior outcome/reconcile; never create duplicate Candidate Facts | Low | Business Architect / Audit | Contracts, test strategy |
| BD-SEC-T031 | Leave inconsistent canonical/Candidate Fact state after partial import failure | T/R | A13–A18 | AC11/AC21 | EP13/EP20 | TB10/TB12 | High | R048, R051, R052, R054, R089 | Per-item outcome/Audit reconciliation and invariant check | Preserve committed outcomes, mark failed/skipped, authorized retry only | Medium | Business Architect / Audit | Contracts, P05, test strategy |
| BD-SEC-T032 | Import a stale Snapshot or revoked inference/source version as current truth | T | A04/A05/A13/A17 | AC14/AC21 | EP13/EP20 | TB03/TB10 | High | R043, R046, R053 | Freshness/source-version mismatch | Withhold/regenerate/review; never silently upgrade source meaning | Medium | Discovery / Business Architect | P03, contracts |
| BD-SEC-T033 | Publish Business DNA without separate required Permission or complete review | E/T | A15–A18 | AC03/AC04/AC14/AC11 | EP18 | TB11/TB12 | Critical | R041, R042, R045, R054, R055, R083 | Publication-source, Permission, review-state and Audit checks | Deny publication; contain/reconcile any owner breach | Low | Business DNA Registry / Core Authorization | P02, contracts, test strategy |
| BD-SEC-T034 | Poison inference sources or manipulate inference to generate harmful facts | T/I | A04/A05/A13/A17 | AC13/AC21 | EP03/EP04 | TB03 | High | R043, R044, R046, R053, R101–R108 | Source/version integrity, anomalous output and validation failure | Isolate source/provider, withhold outputs, require human correction/review | High — provider/content compromise cannot be fully eliminated | Discovery inference owner / Security | P03, P07, test strategy |
| BD-SEC-T035 | Over-collect or reuse data for marketing, model training, or unrestricted secondary purpose | I/R | A03–A06/A20 | AC11/AC16/AC21 | EP01–EP04/EP25 | TB02/TB03/TB14 | High | R056–R061, R067–R070 | Data/purpose inventory violations and unapproved event/provider use | Stop processing, isolate data, rights/incident assessment | Medium | Privacy/Legal / Discovery / Analytics | P03, P05, P06 |
| BD-SEC-T036 | Put raw answers, Snapshot content, inferred sensitive data, credentials, or secrets in logs/metrics/traces/Audit | I | A01/A03–A05/A18–A20/A25 | AC11/AC22 | EP01–EP27 | TB12–TB14 | Critical | R002, R003, R058, R066, R080–R091 | Redaction/allowlist failure, secret/content scanning | Stop emission/access, revoke secrets, purge where policy permits, incident response | Medium | Security / Observability / Audit / all producers | P05, P06, P07 |
| BD-SEC-T037 | Expose excessive session/content data to support | I/E | A01–A09/A13/A17/A21 | AC08/AC16 | EP23/EP27 | TB15/TB17 | High | R064, R092–R100 | Sensitive support-view access and field-access anomalies | Revoke/contain, Audit investigation, notify through approved policy | Medium | Support Governance / Privacy / Security | P06 |
| BD-SEC-T038 | Link anonymous analytics to canonical identity before permitted claim/consent | I | A01/A03–A05/A07/A20 | AC11/AC16/AC21 | EP25 | TB14 | High | R057–R059, R066–R070 | Identity-linkage/data-lineage policy violation | Stop/delete or separate under policy; Privacy incident assessment | Medium | Analytics / Privacy/Legal | P03, P06 |
| BD-SEC-T039 | Retain temporary/rejected data beyond purpose or fail valid deletion/expiry | I/R | A03–A06/A22 | AC11/AC16 | EP21/EP22/EP27 | TB02/TB20 | High | R056, R060–R065, R069 | Age/state/deletion reconciliation and policy exception review | Delete eligible data, apply tombstone, investigate retained copies | Medium | Privacy/Legal / data owners | P03, P05 |
| BD-SEC-T040 | Apply legal hold without approved authority or beyond documented scope | E/I/R | A03–A06/A17–A23 | AC10/AC16 | EP22/EP27 | TB17/TB20 | High | R061–R065, R096–R100 | Hold authorization/scope/expiry review | Block/release unauthorized hold, Audit and legal escalation | Medium | Privacy/Legal / Audit / Security | P03, P05 |
| BD-SEC-T041 | Restore backup data that resurrects deleted/expired sessions or removed content | T/I | A03–A06/A22/A23 | AC11/AC16/AC22 | EP26 | TB16/TB20 | High | R062, R063, R065, R103–R105 | Restore/tombstone reconciliation and post-restore scans | Keep restore inactive, reapply suppression/delete, investigate | Medium | Platform Operations / Privacy / data owners | P05, P07, test strategy |
| BD-SEC-T042 | Disclose or delete data for an unverified rights requester | S/I/T | A03–A09/A17–A23 | AC13/AC18 | EP21/EP22 | TB20 | High | R060–R065 | Requester/control mismatch and repeated rights probing | Deny without disclosure; preserve safe evidence; escalate policy path | Low | Privacy/Legal / Security / data owners | P03, P05 |
| BD-SEC-T043 | Expose sensitive inference or hidden attributes beyond field-level need | I | A04/A05/A13/A17 | AC11/AC14/AC21 | EP04/EP13–EP17/EP23 | TB03/TB10/TB15 | High | R056–R070 | Field/purpose allowlist and overexposure review | Withhold/redact affected fields, incident/privacy assessment | Medium | Discovery / Business Architect / Privacy | P03, P06 |
| BD-SEC-T044 | Flood anonymous sessions through bots or distributed rate-limit evasion | D | A02/A24 | AC13/AC17 | EP01/EP02 | TB01 | High | R015, R071–R079 | Volume, distribution, resource/cost anomaly | Throttle/challenge/degrade under approved policy; protect legitimate Path B | Medium — distributed abuse remains possible | API Gateway / Security / Discovery | P09, rollout readiness |
| BD-SEC-T045 | Exhaust inference cost through answer/preview automation (denial of wallet) | D | A03–A05/A24 | AC13/AC17 | EP03/EP04 | TB01/TB03 | High | R014, R015, R071–R079, R106 | Cost/request/session anomaly and provider saturation | Limit/degrade/queue safely, suspend abusive context, isolate provider | Medium | Discovery / Security / Platform Operations | P09, observability, rollout |
| BD-SEC-T046 | Brute-force registration, verification, claim, or recovery | S/D | A01/A07–A09/A24 | AC17/AC18 | EP05–EP08/EP19/EP23 | TB04/TB06/TB15 | High | R011, R017, R023, R071–R079 | Correlated failure, velocity, distributed-pattern detection | Throttle/block/escalate; preserve safe recovery for legitimate user | Medium | Core Identity / Security / Support | P04, P09 |
| BD-SEC-T047 | Flood imports/retries to exhaust queues, Audit, storage, or owner capacity | D | A13/A18/A19/A24 | AC14/AC17/AC19 | EP13/EP20 | TB10/TB12/TB18 | High | R051, R052, R071–R079, R083, R106 | Retry/idempotency/queue/Audit/storage saturation | Backpressure, reject duplicate work, degrade safely, incident escalation | Medium | Business Architect / Platform Operations / Security | P09, contracts, rollout |
| BD-SEC-T048 | Submit oversized/pathological input or exploit unsafe deserialization | T/D/E | A02–A05/A11/A13 | AC13/AC14 | EP01–EP20 | TB01/TB03/TB09/TB10 | High | R014, R071, R073, R079, R101, R108 | Validation/size/cost/parser failure and crash signals | Reject before domain processing, isolate dependency, investigate exploit | Low | API Gateway / entry-point owner / Security | P09, contracts, test strategy |
| BD-SEC-T049 | Dependency outage or timeout produces false success, unsafe retry, or lost deletion/recovery | D/T | A02–A23 | AC21 | EP01–EP27 | TB03/TB05/TB07–TB18 | Medium | R025, R051, R052, R077–R079, R089, R106 | Dependency health, timeout, retry and reconciliation signals | Fail closed/degrade, preserve explicit state, resume idempotently | Medium | Every boundary owner / Platform Operations | P06, contracts, rollout |
| BD-SEC-T050 | Deny deletion/recovery or abuse support recovery to exhaust operators | D/E | A01–A09/A21/A22 | AC13/AC17/AC18 | EP21–EP23 | TB15/TB20 | High | R023, R060–R065, R071–R079, R092–R100 | Rights/recovery volume and operator anomaly | Queue/prioritize under approved policy, throttle abuse, preserve rights path | Medium | Privacy/Legal / Support / Security | P04, P05, P09 |
| BD-SEC-T051 | Omit, mutate, delete, or forge authoritative Audit evidence | T/R/E | A18 | AC11/AC16/AC21 | EP08/EP13–EP27 | TB12/TB17 | Critical | R080–R091, R096–R100 | Audit integrity/availability, sequence/source and reconciliation checks | Fail/defer consequential action; contain producer/operator; preserve evidence | Medium | Audit / Security / producing owners | P05, P06, contracts |
| BD-SEC-T052 | Record secrets, raw answers, or excessive content in Audit | I | A01/A03–A05/A18 | AC11/AC22 | EP08/EP13–EP27 | TB12 | High | R003, R058, R080–R085, R091 | Audit content allowlist/scanning and exceptional-policy review | Stop producer, protect access, revoke secret, policy-led remediation | Medium | Audit / Security / Privacy | P05, P06, P07 |
| BD-SEC-T053 | Inconsistent timestamps, duplicate events, or missing correlation hide causality | R/T | A18/A19 | AC11/AC21 | EP08/EP13–EP27 | TB12–TB14/TB18 | Medium | R082–R090 | Time/correlation/idempotency quality checks | Mark uncertainty, reconcile from owners, correct with later evidence | Low | Audit / Observability / source owners | P06, contracts |
| BD-SEC-T054 | Leak one tenant's data through logs, traces, metrics, dashboards, alerts, or analytics | I/E | A19/A20 | AC15/AC16/AC22 | EP24/EP25/EP27 | TB13/TB14/TB19 | Critical | R058, R066–R070, R084–R091 | Cross-tenant access/query/signal tests and runtime detection | Remove access, contain data, incident/privacy response, review affected tenants | Medium | Observability / Analytics / Security | P06, P03, test strategy |
| BD-SEC-T055 | Suppress alerts or tamper with logs to hide attack or failure | T/R | A19/A21 | AC16/AC21 | EP27 | TB13/TB17/TB18 | High | R085–R091, R096–R100 | Signal-source gaps, integrity/access and independent Audit correlation | Contain operator/service, restore signals, incident investigation | Medium | Security / Observability / Audit | P06, incident policy |
| BD-SEC-T056 | Perform operator actions without traceability or fail to detect replay/cross-tenant attempts | R/E | A18/A19/A21 | AC08/AC09/AC16 | EP23/EP24/EP27 | TB12/TB15/TB17 | High | R083–R100 | Coverage checks, privileged-action review, replay/tenant alerting | Block unrecorded action; investigate and recertify access | Medium | Security / Audit / Support | P06, incident policy |
| BD-SEC-T057 | Abuse excessive support access or browse production data | I/E | A01–A23 | AC08/AC16 | EP23/EP24/EP27 | TB15/TB17 | Critical | R064, R092–R100 | JIT/purpose/field access and anomalous browsing review | Revoke/contain, preserve Audit, incident/privacy response | High — trusted-insider misuse remains possible | Support Governance / Security / Privacy | P02, P06, incident policy |
| BD-SEC-T058 | Manually reassign claim or bypass User verification | S/T/E | A07–A09/A21 | AC08/AC09/AC16 | EP23/EP27 | TB15/TB17 | Critical | R017–R029, R092–R100 | Claim mutation path and privileged override detection | Prohibit/rollback through governed recovery only; revoke and investigate | Medium | Core Identity / Security / Support Governance | P04, P06 |
| BD-SEC-T059 | Override deletion or impose/release legal hold without authority | T/E/R | A03–A06/A17–A23 | AC10/AC16 | EP22/EP26/EP27 | TB16/TB17/TB20 | High | R060–R065, R092–R100 | Rights/hold approval, scope and operator review | Stop action, restore approved state, legal/security escalation | Medium | Privacy/Legal / Security / Audit | P03, P05 |
| BD-SEC-T060 | Access backups or extract session/service secrets and keys | I/S/E | A01/A23/A25/A26 | AC16/AC22 | EP26/EP27 | TB16–TB18 | Critical | R065, R092–R108 | Backup/secret access, export, rotation and anomaly signals | Revoke/rotate, isolate backup/service, incident and tenant assessment | High — privileged infrastructure compromise remains | Security / Platform Operations | P05, P07, incident policy |
| BD-SEC-T061 | Use unreviewed emergency access or defeat separation of duties | E/R | A01–A26 | AC09/AC16 | EP23/EP26/EP27 | TB15–TB17 | High | R092–R100 | Break-glass/JIT approval, duration and post-use review | Terminate access, incident review, recertify/discipline as policy requires | Medium | Security Governance / Human authority | P02, P06 |
| BD-SEC-T062 | Compromised identity provider issues/accepts false verified identity | S/E | A07–A09/A25/A26 | AC21 | EP05–EP08 | TB04/TB05/TB07 | Critical | R017, R027–R029, R086, R101–R108 | Provider integrity/health, anomalous verification/claim and independent signals | Suspend claim path, revoke trust, incident/failover under approved policy | High — external identity compromise remains | Core Identity / Security | P04, P07, rollout |
| BD-SEC-T063 | Compromised inference provider exfiltrates data or returns manipulated facts | I/T | A03–A05/A17/A25/A26 | AC21 | EP04 | TB03/TB18 | Critical | R043, R044, R056–R059, R067–R070, R101–R108 | Provider/version/policy anomalies, output validation and egress monitoring | Stop provider use, withhold/invalidate outputs, rotate credentials, incident | High — provider compromise remains | Discovery inference owner / Security / Privacy | P03, P07, P08, rollout |
| BD-SEC-T064 | Compromised storage service exposes or tampers with session/Snapshot/backup data | I/T | A01–A06/A22/A23 | AC21/AC22 | EP01–EP04/EP26 | TB02/TB16/TB18 | Critical | R004, R056–R065, R101–R108 | Integrity/access/restore anomalies and independent reconciliation | Isolate storage, invalidate sessions, restore safely, incident/privacy response | High — storage control-plane compromise remains | Platform Operations / Security / data owners | P05, P07, P08 |
| BD-SEC-T065 | Compromised analytics provider exfiltrates or correlates anonymous/customer data | I | A19/A20/A25/A26 | AC21 | EP25 | TB14/TB18 | Critical | R057–R059, R066–R070, R101–R108 | Event inventory/egress/linkage and provider anomalies | Stop emission, revoke trust/credentials, Privacy/Security incident | High — third-party analytics compromise remains | Analytics / Privacy / Security | P03, P06, P07, P08 |
| BD-SEC-T066 | Vulnerable or malicious dependency/package compromises runtime or build | T/E/I | A01–A26 | AC21 | EP01–EP27 | TB01–TB18 | High | R101–R108 | Dependency provenance/vulnerability/integrity and runtime anomaly | Block/revoke/update through governed process, isolate and investigate | High — unknown supply-chain defects remain | Security / Engineering Governance | Contracts, test strategy, rollout |
| BD-SEC-T067 | Steal service credential and impersonate Discovery or an owner | S/E | A25/A26 and reachable assets | AC18/AC21 | EP01–EP27 | TB07–TB18 | Critical | R092, R098, R101–R108 | Caller/audience anomaly, secret-use and cross-scope attempts | Revoke/rotate, isolate service, incident and affected-state reconciliation | High — credential compromise remains until detected | Security / Core Identity / service owners | P07, P06, incident policy |
| BD-SEC-T068 | Forge a webhook or asynchronous callback if later introduced | S/T/R | A04/A13/A18/A19 | AC13/AC21 | Future contract only | TB18 | Medium | R101–R108 | Source/signature/replay/version validation and delivery anomalies | Reject, revoke destination/credential, investigate; no state change | Low | Source owner / API/Event Governance | Contracts, P07, P09 |
| BD-SEC-T069 | Use prompt/template injection to exfiltrate context or manipulate inference | I/T/E | A03–A05/A17/A25/A26 | AC13/AC21 | EP03/EP04 | TB03/TB18 | High | R043, R044, R056–R059, R101–R108 | Input/output policy, tool/context boundary and exfiltration anomaly | Withhold output, isolate provider/template, invalidate affected Snapshot | Medium | Discovery inference owner / Security | P03, P07, test strategy |
| BD-SEC-T070 | Compromised downstream integration corrupts Candidate Facts or exfiltrates data | I/T/E | A13–A20/A25/A26 | AC21 | EP13–EP20/EP25 | TB10–TB14/TB18 | Critical | R030–R055, R080–R091, R101–R108 | Service/contract/provenance/tenant anomaly and owner reconciliation | Reject/isolate/revoke, preserve owner state, incident and replay review | High — authorized integration compromise remains | Business Architect / Security / affected owner | P02, P06, P07, contracts, rollout |

## 11. Mandatory Security Requirements

The requirements below are binding inputs to every downstream artifact. They refine, but do not
replace, ADR-042, Core Platform v1.1 Freeze §§4–12, Core Security §§3–5, Core Permission §§3–5,
Core API §§3–5, Core Observability §§3–5, and Core Data Ownership §§3–5. A specification or design
that cannot satisfy a requirement must stop and obtain governed review; it may not silently waive
the requirement.

### 11.1 Session security

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R001 | The anonymous session MUST use an opaque, high-entropy, purpose-bound credential whose value does not encode User, Workspace, Business, role, subscription, or Permission authority. | Discovery / Security | P04, P07, contracts, tests |
| BD-SEC-R002 | The credential MUST be treated as a secret and MUST NOT appear in an ordinary URL, referrer-capable location, page title, export, screenshot workflow, clipboard workflow, or other avoidable disclosure surface. | Discovery / Security / UX owner | P04, P06, specification |
| BD-SEC-R003 | Raw session credentials MUST NOT enter logs, metrics, traces, analytics, support tools, Audit payloads, Events, prompts, errors, learning data, or training data. | Every producer / Security | P06, P07, tests |
| BD-SEC-R004 | Session lifecycle, answer, inference, and Snapshot integrity MUST be enforced by server-authoritative state; browser-provided lifecycle, identity, target, and role assertions are untrusted inputs. | Discovery | Contracts, tests |
| BD-SEC-R005 | The browser persistence mechanism remains deferred, but the later approved decision MUST minimize exposure, define same-device/cross-device behavior, support deletion, and meet the approved Identity, Privacy, and Security policies. | Security / Discovery / Privacy | P03, P04, P05, P07 |
| BD-SEC-R006 | Every session MUST expire under a risk- and purpose-approved policy; no numeric duration is selected here. | Discovery / Privacy / Security | P04, P05 |
| BD-SEC-R007 | Expiry, deletion, compromise, replacement, integrity failure, and approved administrative containment MUST support explicit invalidation. | Discovery / Security | P04, P05, incident policy |
| BD-SEC-R008 | One eligible session MUST have at most one successful claim outcome and MUST NOT be reused to create a second binding. | Discovery claim owner | P04, contracts, tests |
| BD-SEC-R009 | Session and claim operations MUST resist replay, double claim, duplicate submission, and concurrent races through a later approved idempotency and concurrency contract. | Discovery / API Governance | P04, contracts, tests |
| BD-SEC-R010 | Resume, preview, claim, deletion, and recovery MUST validate current session state, integrity, expiry, invalidation, and applicable control evidence. | Discovery | P04, P05, contracts |
| BD-SEC-R011 | Session/account/resource failure responses MUST be non-enumerating and, where timing could reveal existence, designed to avoid a meaningful timing oracle. | Security / Identity / API Governance | P04, P09, contracts, tests |
| BD-SEC-R012 | Every browser-originated state-changing operation MUST use approved anti-CSRF or equivalent request-intent controls appropriate to its delivery mechanism. | Security / entry-point owner | Specification, contracts, tests |
| BD-SEC-R013 | The experience MUST apply approved XSS and content-injection defenses, minimize credential/content exposure to script, and treat user/inference content as untrusted display data. | Security / UX owner | Specification, P07, tests |
| BD-SEC-R014 | Inputs MUST be type-, shape-, size-, depth-, encoding-, and content-validated before expensive or domain processing; unsupported or pathological input MUST fail safely. | API Gateway / entry-point owner | P09, contracts, tests |
| BD-SEC-R015 | Anonymous session creation, resume, answer, preview, and deletion entry points MUST be protected by risk-based rate and abuse controls without making the limit state an authorization source. | API Gateway / Security / Discovery | P09, observability, tests |
| BD-SEC-R016 | Abandonment, device sharing, multiple sessions, restart, and resume MUST keep attempts distinguishable; no session may be silently merged, transferred, or selected as another person's evidence. | Discovery / Security | P04, P05, specification |

### 11.2 Claim security

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R017 | A current verified User identity from Core Identity MUST be required before final claim; Discovery MUST NOT define or bypass verification. | Core Identity / Discovery | P04, tests |
| BD-SEC-R018 | Claim MUST atomically validate and bind one eligible session to one verified User together with the required durable outcome and Audit evidence. | Discovery claim owner / Audit | P04, contracts, tests |
| BD-SEC-R019 | Claim MUST bind only to the verified User. | Discovery claim owner | P04, contracts, tests |
| BD-SEC-R020 | Claim MUST NOT bind automatically to a Workspace or Business and MUST NOT create Membership, Permission, entitlement, subscription, readiness, OS state, or import authority. | Discovery / Core owners | P02, P04, tests |
| BD-SEC-R021 | Claim MUST be idempotent under retry and return only a safe deterministic outcome to the same verified owner. | Discovery claim owner | P04, contracts, tests |
| BD-SEC-R022 | Claim attempt, success, denial, block, invalidation, retry, recovery, and privileged intervention MUST be auditable without the credential or questionnaire content. | Discovery / Audit | P04, P06, contracts |
| BD-SEC-R023 | Token possession alone MUST NOT establish claim ownership where the approved Identity/recovery policy requires continuity or additional control proof. | Core Identity / Security | P04 |
| BD-SEC-R024 | Account switching or identity mismatch MUST be made explicit and MUST block claim without revealing session content or the other account. | Core Identity / Discovery / Product | P04, specification, tests |
| BD-SEC-R025 | Claim MUST fail closed on uncertain identity, control, state, integrity, expiry, replay, race, dependency outcome, or Audit commitment. | Discovery claim owner | P04, contracts, tests |
| BD-SEC-R026 | Replay, already-claimed, and concurrent claim responses MUST neither transfer ownership nor reveal another User; one committed owner outcome controls. | Discovery claim owner | P04, contracts, tests |
| BD-SEC-R027 | Verification and account status MUST be current and purpose-appropriate when claim executes; a stale browser/navigation result is insufficient. | Core Identity | P04, contracts |
| BD-SEC-R028 | Support MUST NOT manually assign/reassign claim or weaken identity/session proof unless a separately approved recovery policy expressly defines the action, authority, evidence, limits, and Audit. | Core Identity / Support Governance | P04, P06 |
| BD-SEC-R029 | Partial claim, rollback, timeout, and uncertain-commit recovery MUST reconcile the owner state and Audit outcome before retry; they MUST NOT guess which side succeeded. | Discovery / Audit | P04, contracts, tests |

### 11.3 Authorization and tenant isolation

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R030 | Authentication, identity verification, claim, Membership, role title, Permission, target selection, import, review, and publication MUST remain separate decisions. | Core Authorization / all owners | P02, contracts, tests |
| BD-SEC-R031 | The User MUST explicitly select or create an authorized Workspace after claim; no Workspace may be inferred from session, URL, last-used state, title, or analytics. | Workspace owner / Discovery | P02, specification |
| BD-SEC-R032 | The User MUST explicitly select or create an authorized Business before import; no Business or Business Unit may be used as an inferred fallback. | Business owner / Discovery | P02, specification |
| BD-SEC-R033 | Every protected action MUST require its exact current action-, resource-, target-, and Workspace-scoped Permission from the proper owner. | Core Authorization / resource owner | P02 |
| BD-SEC-R034 | Authorization MUST be revalidated when create, import, Candidate Fact decision, and Business DNA publication execute; preview/navigation checks are not sufficient. | Resource owner | P02, contracts, tests |
| BD-SEC-R035 | Missing, stale, revoked, suspended, expired, inconsistent, or unresolved Membership/Permission/context MUST result in denial. | Core Authorization / resource owner | P02, tests |
| BD-SEC-R036 | Workspace Owner, Workspace Admin, Employee, view-only, invitation, consultant, partner, or support labels MUST NOT confer implicit create, import, review, or publication authority. | Core Authorization | P02 |
| BD-SEC-R037 | A fallback tenant, Workspace, Business, or resource MUST NOT be selected after failure or ambiguity. | Discovery / resource owners | P02, specification, tests |
| BD-SEC-R038 | Suspended, deleted, archived, moved, changed, or unauthorized targets MUST be denied or explicitly reselected through the canonical owner. | Workspace/Business owners | P02, contracts |
| BD-SEC-R039 | Internal services MUST present their own authenticated identity, audience, purpose, caller/actor distinction, tenant, target, and contract context; no component may act as an unbounded confused deputy. | Security / service and resource owners | P02, P07, contracts |
| BD-SEC-R040 | Collections, selectors, errors, support tools, diagnostics, caches, and projections MUST apply the same or narrower tenant/resource filtering and MUST NOT disclose unauthorized existence. | Every reader / API Governance | P02, P06, contracts, tests |

### 11.4 Candidate Fact and Business DNA integrity

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R041 | Accepted Discovery evidence MUST enter only through Business Architect's governed Candidate Fact intake contract. | Business Architect | Contracts, tests |
| BD-SEC-R042 | Discovery, anonymous state, inference, import orchestration, support, and analytics MUST NOT write, overwrite, or publish Business DNA directly. | Business DNA Registry | Contracts, tests |
| BD-SEC-R043 | User answers, inferred facts, corrections, and canonical values MUST remain distinguishable. | Discovery / Business Architect | Specification, contracts |
| BD-SEC-R044 | Candidate Fact input MUST preserve the originating answer/inference classification, DiscoverySnapshot revision, governed source/model/rule/template version, and relevant claim/import correlation as provenance. | Discovery / Business Architect | P03, contracts |
| BD-SEC-R045 | Existing and proposed values and conflicts MUST be presented for field-level human review before acceptance. | Business Architect / Product | Specification, tests |
| BD-SEC-R046 | Authorized Users MUST be able to correct and reject proposed facts, and partial acceptance MUST remain possible. | Business Architect | Specification, tests |
| BD-SEC-R047 | Conflicts with canonical Business data, current Candidate Facts/drafts, and published Business DNA MUST be identified without exposing fields the reviewer may not access. | Business Architect / canonical owners | P02, contracts, tests |
| BD-SEC-R048 | Silent merge, newest-wins, Discovery-wins, and canonical overwrite without explicit authorized review MUST be prohibited. | Business Architect / canonical owners | Contracts, tests |
| BD-SEC-R049 | Import MUST record accepted, rejected, corrected, failed, skipped, duplicate, and stale outcomes per applicable item. | Business Architect / Audit | P05, contracts |
| BD-SEC-R050 | Existing canonical data MUST remain unchanged until the canonical owner accepts an authorized, reviewed change through its contract. | Canonical owner | Contracts, tests |
| BD-SEC-R051 | Import and retry MUST be idempotent for the same caller, target, Snapshot/source version, normalized proposal, and operation meaning. | Business Architect / API Governance | Contracts, tests |
| BD-SEC-R052 | Partial failure MUST preserve committed per-item outcomes, expose an explicit recoverable state, and avoid duplicate or hidden writes on retry. | Business Architect | Contracts, tests |
| BD-SEC-R053 | Snapshot and inference/source freshness/compatibility MUST be checked before import; stale evidence MUST be withheld, regenerated, or separately reviewed. | Discovery / Business Architect | P03, contracts |
| BD-SEC-R054 | Duplicate, replayed, or conflicting import/publication requests MUST be detected, reauthorized, reconciled, and audited without bypassing current owner invariants. | Business Architect / Business DNA Registry | P02, contracts, tests |
| BD-SEC-R055 | Business DNA publication MUST require the separate current publication Permission, complete governed Business Architect review, correct Business scope, valid provenance, and Registry invariants. | Business DNA Registry / Core Authorization | P02, contracts, tests |

### 11.5 Privacy and data protection

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R056 | Collection and use MUST be limited to optional preview, verified claim, and optional authorized import into Business Architect. | Privacy/Legal / Discovery | P03 |
| BD-SEC-R057 | Only the minimum answers, inference/provenance references, disclosure/consent evidence, and lifecycle/Security metadata required for that purpose MAY be processed. | Discovery / Privacy | P03 |
| BD-SEC-R058 | Raw answers, inferred facts, and DiscoverySnapshot content MUST be treated as potentially personal, confidential, or commercially sensitive until approved classification says otherwise. | Privacy/Legal / every processor | P03 |
| BD-SEC-R059 | Participation disclosure, temporary-storage acknowledgement, claim/import consent, account terms, privacy notice, marketing consent, analytics consent where required, and future training/secondary-use consent MUST remain separate. | Privacy/Legal / Product | P03 |
| BD-SEC-R060 | Marketing consent MUST NOT be inferred from participation, storage, registration, claim, import, or analytics choice. | Product / Privacy | P03 |
| BD-SEC-R061 | Training, learning, model improvement, profiling, or unrelated secondary use MUST NOT occur without separate approved purpose, legal basis/consent, minimization, access, retention, and Governance authority. | Privacy/Legal / Data Governance | P03, P08 |
| BD-SEC-R062 | Eligible unclaimed working data MUST support abandonment, expiry, invalidation, and deletion; rejected raw content MUST NOT be retained indefinitely. | Discovery / Privacy | P05 |
| BD-SEC-R063 | Restored data MUST reapply deletion tombstones or equivalent suppression before becoming active. | Platform Operations / data owners | P05, P07, tests |
| BD-SEC-R064 | Rights/deletion/export/recovery requests MUST verify the requester and exact scope without disclosing content or existence to an unverified requester. | Privacy/Legal / Security / data owners | P03, P04, P05 |
| BD-SEC-R065 | Legal hold MUST require approved legal authority, documented scope, attributable approval, review/release conditions, and minimized retained data. | Privacy/Legal / Audit | P03, P05 |
| BD-SEC-R066 | Support access MUST expose only the minimum approved fields for one verified purpose and scope and MUST be attributable, time/purpose-bound, Permission-controlled, and audited. | Support Governance / Privacy / Security | P06 |
| BD-SEC-R067 | Field-level responses, selectors, errors, previews, imports, diagnostics, and exports MUST minimize exposure according to current identity, purpose, tenant, target, and Permission. | Every owner | P02, P03, contracts |
| BD-SEC-R068 | Logs, metrics, traces, analytics, support, Audit, prompts, and learning datasets MUST use explicit allowlists/redaction and MUST exclude credentials, raw answers, Snapshot content, and unnecessary inferred content. | Security / Observability / Audit / Analytics | P06, P07 |
| BD-SEC-R069 | Anonymous analytics MUST be purpose-approved and minimized; its identifier MUST NOT become identity, session-control, tenant, or authorization evidence or link to canonical identity without approved claim/consent authority. | Analytics / Privacy | P03, P06 |
| BD-SEC-R070 | Retention, deletion, backup, support, provider, and analytics handling MUST follow approved classification, legal basis, residency, rights, and lifecycle policies; this model selects no values or jurisdictional conclusion. | Privacy/Legal / Data Governance | P03, P05, P08 |

### 11.6 Abuse and availability controls

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R071 | Risk-based anonymous and authenticated rate limits MUST cover session, answer, inference, registration, verification, claim, recovery, selector, import, review, deletion, support, and administrative entry points. | API Gateway / Security / owners | P09 |
| BD-SEC-R072 | Bot and automation controls MUST distinguish abusive automation from permitted accessibility and recovery use and MUST preserve the account-first path where safe. | Security / Product | P09, specification |
| BD-SEC-R073 | Cost controls MUST bound inference/provider/queue/storage/Audit consumption per approved risk dimensions without treating commercial state as Permission. | Discovery / Platform Operations | P09 |
| BD-SEC-R074 | Payload, collection, query, nesting, source, and generated-output cost MUST be bounded and validated before expensive processing. | API Gateway / owners | P09, contracts |
| BD-SEC-R075 | Retries MUST use budgets, backoff/degradation policy, idempotency, and current revalidation; a client MUST NOT create an unbounded retry storm. | API Governance / owners | P09, contracts |
| BD-SEC-R076 | Queues, dependencies, storage, Audit, and provider capacity MUST use backpressure/isolation and MUST fail safely before integrity or tenant isolation is weakened. | Platform Operations / owners | P09, rollout |
| BD-SEC-R077 | Security monitoring MUST detect anomalous session creation, credential guessing, claim/recovery failures, cross-tenant attempts, import retries, cost spikes, and privileged use. | Security / Observability | P06, P09 |
| BD-SEC-R078 | IP, device, account, session, Workspace, and behavioral correlation MAY be used only under approved Privacy/Legal authority, minimization, retention, and anti-discrimination controls. | Security / Privacy | P03, P09 |
| BD-SEC-R079 | Safe degradation MUST preserve explicit state, Path B, deletion/rights access, tenant isolation, and owner invariants; denial-of-wallet defense MUST NOT fabricate success or silently drop consequential work. | Product / Platform Operations / owners | P09, rollout |

### 11.7 Audit, detection, and response

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R080 | Authoritative Audit events MUST cover claim, target selection/creation where consequential, import proposal, accept, reject, correct, publication, deletion, recovery, rights/hold action, backup restore, and administrative/support access. | Audit / producing owners | P05, P06, contracts |
| BD-SEC-R081 | Audit MUST NOT contain raw answers, Snapshot content, secret credentials, keys, or unnecessary inferred facts by default; any exceptional content requires explicit approved policy. | Audit / Privacy / Security | P05, P06 |
| BD-SEC-R082 | Audit evidence MUST be append-only or otherwise tamper-evident under Audit authority; corrections/reversals MUST create later evidence. | Audit | P05, P06 |
| BD-SEC-R083 | Audit records MUST identify or safely reference actor/service, Workspace/applicable scope, source owner, action, subject, time, correlation, result, and relevant version without becoming the business-data owner. | Audit / producing owners | P05, contracts |
| BD-SEC-R084 | Correlation and causation identifiers MUST connect boundary, owner, dependency, Audit, retry, replay, and incident evidence without carrying Authorization or secret content. | Observability / Audit / owners | P06, contracts |
| BD-SEC-R085 | Detection MUST distinguish original, duplicate, retry, replay, correction, rollback, partial outcome, cross-tenant attempt, and administrative action. | Security / Observability / Audit | P06, P09 |
| BD-SEC-R086 | Alerts MUST exist for verified-identity/claim anomalies, replay/double claim, cross-tenant attempts, service/secret misuse, provider compromise indicators, Audit integrity/availability failure, and privileged-access anomalies. | Security / Observability | P06, incident policy |
| BD-SEC-R087 | Alert evidence MUST be tenant-safe and content-minimized and MUST identify severity, affected boundary, owner, and incident handoff without exposing secrets. | Observability / Security | P06 |
| BD-SEC-R088 | Confirmed or suspected compromise MUST hand off to an approved incident process capable of containment, revocation, evidence preservation, tenant-scope assessment, safe recovery, and governed correction. | Security / incident owner | P06, P07, rollout |
| BD-SEC-R089 | Operator, support, backup, recovery, deletion, hold, secret/key, and credential lifecycle actions MUST be attributable and audited. | Audit / Security / Platform Operations | P05, P06, P07 |
| BD-SEC-R090 | Security-relevant clocks and event ordering evidence MUST be sufficiently synchronized and versioned for claim/import/Audit reconciliation; the implementation mechanism remains deferred. | Platform Operations / Audit | P06, contracts |
| BD-SEC-R091 | If required Audit evidence cannot be established, a consequential claim/import/publication/administrative action MUST fail or remain explicitly unresolved rather than report success. | Producing owner / Audit | P05, P06, contracts, tests |

### 11.8 Administrative security

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R092 | Support, Security, Privacy/Legal, platform, and service operators MUST receive least privilege for one approved responsibility and scope. | Core Authorization / operator owner | P02, P06 |
| BD-SEC-R093 | Claim reassignment, identity recovery, Permission administration, deletion/hold, backup restore, secret/key access, and incident actions MUST use separation of duties where risk requires it. | Security Governance / Human authority | P02, P04–P07 |
| BD-SEC-R094 | Privileged access SHOULD be just-in-time, purpose-bound, time-bounded, and non-standing where the approved mechanism supports it; any standing access requires explicit justification and review. | Security Governance | P02, P06 |
| BD-SEC-R095 | Break-glass access MUST be separately approved, narrowly scoped, time-limited, monitored, fully audited, and reviewed after use; it MUST NOT silently override tenant, identity, or canonical-owner invariants. | Security Governance / Human authority | P02, P06, incident policy |
| BD-SEC-R096 | Privileged actions MUST record requester/operator, approver where required, purpose, scope, affected asset, result, time, correlation, and follow-up without secret/content overcollection. | Audit / operator owner | P05, P06 |
| BD-SEC-R097 | No operator or support role MAY manually reassign a Discovery claim or bypass identity proof outside an approved recovery policy and exact authorized owner action. | Core Identity / Security | P04, P06 |
| BD-SEC-R098 | Unreviewed production browsing, unrestricted data search, bulk export, and cross-tenant diagnostics MUST be prohibited. | Security / Privacy / Support Governance | P02, P06 |
| BD-SEC-R099 | Secrets, keys, service credentials, backup credentials, and privileged configuration MUST use an approved owned lifecycle for access, rotation, revocation, replacement, recovery, and incident response without recording the value. | Security / Platform Operations | P07 |
| BD-SEC-R100 | Privileged roles, grants, service access, support access, emergency use, and operator activity MUST undergo periodic and event-driven access review under the future approved policy. | Security Governance / Core Authorization | P02, P06 |

### 11.9 Service and supply-chain security

| Requirement ID | Binding requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-SEC-R101 | Every service call MUST authenticate the calling workload and validate intended audience, purpose, contract/version, environment, and caller identity. | Core Identity / Security / target owner | P07, contracts |
| BD-SEC-R102 | Internal placement, network location, shared runtime, package import, or possession of a credential MUST NOT imply tenant or resource authorization. | Security / target owner | P02, P07, contracts |
| BD-SEC-R103 | External identity, inference, analytics, storage, support, and other providers MUST receive only the minimum data and capability required by an approved contract and policy. | Contract owner / Privacy / Security | P03, P06–P08 |
| BD-SEC-R104 | Dependencies, packages, templates, models, providers, and deployment artifacts MUST have approved provenance, version, integrity, vulnerability, update, compatibility, and revocation controls before implementation authorization. | Security / Engineering Governance | Contracts, test strategy, rollout |
| BD-SEC-R105 | Service credentials MUST be owner-, audience-, purpose-, environment-, and lifecycle-scoped; compromise MUST support revocation, rotation, containment, and affected-context review. | Security / Core Identity | P07, incident policy |
| BD-SEC-R106 | External/service dependency failure MUST use timeouts, bounded retries, isolation, explicit degraded state, and safe recovery without fabricating success or bypassing owner checks. | Platform Operations / service owners | P06, contracts, rollout |
| BD-SEC-R107 | Provider/service egress MUST be purpose-allowlisted and monitored under approved Privacy/Security policy; no provider may reuse data, call unrestricted tools, or broaden tenant scope. | Security / Privacy / provider owner | P03, P06–P08 |
| BD-SEC-R108 | Deserialization, template, prompt, model/tool, webhook, Event, and callback inputs MUST be treated as untrusted, contract-validated, bounded, replay-aware, and unable to invoke an unapproved canonical write. | API/Event/AI Governance / target owner | P07, P09, contracts, tests |

## 12. Abuse-case Register

These cases describe intentional misuse paths. They complement, rather than replace, the threat register and mandatory requirements.

| Abuse ID | Attacker goal | Preconditions | Attack path | Impacted assets | Prevention | Detection | Response | Residual concern |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-ABUSE-001 | Exhaust capacity through mass anonymous session creation | Public start endpoint | Automate session creation across addresses/devices | A02, A24, service capacity | R006, R016, R071–R079 | Creation velocity, distributed-pattern, cost, queue, and storage alerts | Throttle/challenge/isolate sources, preserve safe Path B, tune controls under Privacy authority | Distributed low-and-slow abuse remains difficult to distinguish from legitimate demand |
| BD-ABUSE-002 | Harvest valid session credentials | Weak generation, enumeration, leakage, or compromised client | Guess, enumerate, scrape, or extract credentials and test resume/claim | A01–A05 | R001–R005, R011, R013–R015 | Non-enumerating failure metrics, credential-use anomalies, source/device changes | Invalidate/rotate affected sessions, contain leak, preserve evidence, notify under policy | A compromised endpoint may expose a credential before detection |
| BD-ABUSE-003 | Transfer control by sharing a claim link or credential | User exposes credential to another person | Recipient resumes or attempts claim from another context | A01–A09 | R002–R005, R017–R029 | Continuity/account-change/risk anomalies and failed claim evidence | Block or step up proof, invalidate safely, offer approved recovery | Legitimate device transfer and malicious sharing can look similar |
| BD-ABUSE-004 | Steal a session from browser history or referrer | Credential placed in URL or exposed by navigation | Read history/referrer/screenshot/clipboard and replay | A01–A05 | R002–R005, R008–R010 | Leak scanning and anomalous resume/claim context | Invalidate/rotate session, remediate source, incident assessment | Compromised local device remains outside complete platform control |
| BD-ABUSE-005 | Claim under an unintended account after account switching | Multiple accounts or stale browser auth context | Authenticate as User B while believing User A is active, then claim | A07–A09 | R017–R020, R025–R029 | Account-context change and claim anomaly | Require explicit confirmation/step-up, block uncertain claim, approved recovery | Human account confusion cannot be fully eliminated |
| BD-ABUSE-006 | Import Discovery evidence into another tenant | Authenticated attacker has or guesses another target identifier | Select/forge Workspace or Business and invoke import | A10–A16 | R030–R040, R041–R055 | Cross-tenant denials, scope mismatch, owner-contract Audit | Deny, contain, review affected tenant, revoke access if malicious | Compromised highly privileged tenant account retains bounded risk |
| BD-ABUSE-007 | Continue using stale or revoked Permission | Permission changes after preview or selection | Race/retry import with cached authorization evidence | A10–A16 | R032–R036, R051–R055 | Decision-version mismatch and execution-time denial | Deny/reselect/re-review, invalidate cached decision, Audit attempted use | Small revocation propagation windows require policy and contract bounds |
| BD-ABUSE-008 | Poison inferred facts and downstream review | Attacker controls inputs, source, prompt/template, or provider | Craft answers/content to create misleading inference and provenance | A03–A05, A13, A17 | R043–R055, R101–R108 | Source/version anomaly, review conflict, provider quality/security signals | Quarantine source/Snapshot, regenerate, require human correction, incident review | Convincing but false content may survive automated checks |
| BD-ABUSE-009 | Force a silent canonical overwrite | Import or owner boundary omits field review/current-value check | Submit mass/hidden acceptance or exploit retry/default merge | A13–A16 | R041–R055 | Diff, outcome, provenance, bulk-action, and owner-write Audit | Stop publication, preserve canonical state, reconcile/reverse through owner | Authorized malicious reviewers may approve bad facts |
| BD-ABUSE-010 | Abuse rejection suppression to hide a valid future proposal | Minimized rejection evidence controls repeated presentation | Repeatedly reject or forge suppression context for a field/source | A13, A17–A18 | R046, R049, R062, R080–R085 | Unusual rejection/suppression patterns and provenance mismatch | Remove invalid suppression through governed correction; preserve decision evidence | Minimization can reduce forensic detail and must be policy-balanced |
| BD-ABUSE-011 | Take over a claim through support recovery | Social engineering or excessive support privilege | Persuade/operator-coerce reassignment or bypass proof | A01–A09, A21 | R064, R066, R092–R100 | Recovery/operator anomaly, dual-control and access-review evidence | Deny or suspend, revoke access, incident investigation, approved user recovery | Sophisticated social engineering and insider collusion remain |
| BD-ABUSE-012 | Delete or disclose data as an impostor | Weak rights-request verification | Submit deletion/export/recovery request using partial session or identity data | A03–A09, A18, A22 | R064–R065, R080–R100 | Failed proof, unusual rights requests, operator anomalies | Fail closed, preserve minimized evidence, notify/incident under policy | Strong verification may create user-friction and recovery tradeoffs |
| BD-ABUSE-013 | Resurrect deleted working data through backup restore | Restore occurs without tombstone/suppression replay | Activate restored session/answers/Snapshot after valid deletion | A02–A05, A22–A23 | R062–R065, R080, R089 | Restore reconciliation and tombstone-application checks | Quarantine restore, reapply suppression, delete active copy, investigate | Immutable backups can retain encrypted copies until approved expiry |
| BD-ABUSE-014 | Exhaust inference cost or capacity | Public answer/preview generation and expensive provider | Create many complex/pathological inputs, retries, or distributed sessions | A03–A05, A24 | R071–R079 | Per-risk-dimension cost, latency, provider, queue, and retry alerts | Shed/defer abusive load, bound output, isolate provider, preserve safe recovery | Distributed denial-of-wallet remains an ongoing operational risk |
| BD-ABUSE-015 | Exfiltrate sensitive content through analytics | Overbroad event schema or malicious integration/operator | Put answers/Snapshot/credential in analytics properties or correlate identity early | A01, A03–A05, A20 | R058–R061, R068–R070, R101–R107 | Schema allowlist violations, egress and access anomalies | Block event, revoke integration/access, delete under policy, incident assessment | Provider compromise and derived re-identification remain |
| BD-ABUSE-016 | Use a stolen service credential to cross boundaries | Service secret compromise or overbroad audience/scope | Call Identity, Authorization, organization, Audit, or import contracts as service | A07–A19, A25–A26 | R039–R040, R099, R101–R108 | Workload/audience/tenant anomalies, secret-use and owner-denial alerts | Revoke/rotate, isolate workload, deny calls, assess tenants and replay | Compromise within a valid scope can cause damage before containment |
| BD-ABUSE-017 | Browse customer Discovery data as an insider | Standing or excessive production/support/backup access | Search, export, inspect, or correlate sessions without an approved purpose | A03–A05, A18–A23 | R066, R092–R100 | Privileged query/export/access-review anomalies | Revoke access, preserve evidence, investigate, notify under policy | Authorized access cannot eliminate deliberate insider misuse |

## 13. Conceptual Security State Checkpoints

These checkpoints constrain transitions and recovery. They are not final database enums and MUST NOT be implemented as one overloaded aggregate merely because they appear in one table.

| Security checkpoint | Allowed actors | Allowed actions | Prohibited actions | Required evidence | Security exit condition | Audit requirement |
| --- | --- | --- | --- | --- | --- | --- |
| `anonymous_active` | Anonymous visitor; bounded Discovery service | Answer, resume, abandon, delete eligible working data | Claim, target selection, canonical write, import | Valid secret session control, integrity-protected active lifecycle, current purpose/disclosure | Preview becomes safely derivable, or expiry/abandon/delete/invalidate occurs | Security lifecycle events; no raw content in Audit |
| `preview_ready` | Session controller; bounded Discovery service | Retrieve minimized preview, correct answers, register/login, abandon/delete | Treat Snapshot as canonical, claim without verification, import | Valid session, Snapshot revision/provenance, non-expired state | Registration required or revised/terminal state | Preview-generation/security anomalies only; content excluded |
| `registration_required` | Session controller; Core Identity | Register/login and verify identity; retain bounded session | Claim/import before verified identity | Valid session continuity plus authentication transaction context | Verified identity or safe return/expiry/abandon | Identity boundary events under Identity authority; no credential value |
| `identity_verified` | Verified User; Core Identity; claim orchestrator | Initiate claim with explicit account context | Infer target tenant, grant Permission, claim another User's session | Fresh verified User identity, valid session control, continuity/risk evidence | Atomic claim begins, is blocked, or session invalidates/expires | Verification reference and claim initiation correlation |
| `claim_pending` | Verified User; claim orchestrator; Audit | Atomically validate and bind session to User | Parallel winner, partial success reported as claim, Workspace/Business binding | Current identity, session state/expiry/control, idempotency/replay guard, Audit availability | Exactly one committed claim or explicit blocked/invalid state | Attempt, result, actor, correlation, reason class; no credential/content |
| `claimed` | Bound verified User | Inspect claim result; begin authorized target selection | Reclaim/transfer; automatic target/Permission/import | Immutable/authoritative claim record binding one User; current auth session | Explicit authorized target selected, deletion/right action, or safe recovery | Claim success and consequential recovery actions |
| `target_selected` | Bound User with current target-scoped Permission | Review proposals, change/reselect valid target, initiate import review | Fallback tenant, stale/unauthorized target, canonical write | Explicit Workspace and Business identifiers, Membership/Permission decision and version, active target | Import review established after execution-time revalidation, or deny/reselect | Target selection/change, authorization decision reference |
| `import_review` | Authorized reviewer; Business Architect | Field review, correct, accept, reject, partial accept | Silent merge, mass hidden acceptance, direct DNA publication | Current target Permission, Snapshot/source freshness, field conflicts, provenance, current canonical values | Per-item import outcomes committed or explicit failure/partial state | Review actions and per-item result classes without raw content by default |
| `imported` | Authorized User; Business Architect; separately authorized publisher | Governed Candidate Fact review and later Registry publication | Treat import as published truth; replay import without idempotency/authorization | Provenance-bearing per-item outcomes, current Candidate Fact state, owner Audit | Governed publish, correction/rejection, or no further action | Import completion; publication audited separately by owner |
| `expired` | Discovery service; verified requester under approved rights/recovery policy | Explain expiry safely; delete/suppress eligible working data; start fresh | Resume/claim/import expired state | Authoritative expiry decision and lifecycle evidence | Deleted/suppressed or new independent session | Expiry/security lifecycle evidence; content excluded |
| `invalidated` | Discovery/Security owner; verified requester where applicable | Safe restart, deletion/rights path, incident/recovery handling | Resume, claim, import, credential reuse | Invalidation reason class, owner action/correlation, retained minimized security evidence | Deleted/suppressed or governed incident/recovery resolution | Invalidation and privileged action if any |
| `claim_blocked` | Verified User; Identity/Security/recovery owner | Correct account context, supply approved proof, retry within policy, abandon/delete | Support bypass, weaken proof, reveal whether another User owns session | Blocking reason class, current identity/session evidence, retry budget | Valid atomic retry, invalidation, expiry, abandonment, deletion | Attempts, outcome, risk/recovery/operator actions |
| `import_failed` | Bound User with current Permission; Business Architect | Inspect safe outcome, correct/reselect, idempotently retry | Assume no writes without reconciliation; bypass current authorization | Per-item transaction/idempotency result, target status, current Permission, correlation | Retry succeeds, partial state identified, or proposal remains unapplied | Failure and retry/reconciliation evidence |
| `partially_imported` | Authorized reviewer; Business Architect | Reconcile committed items, retry failed items idempotently, reject remainder | Reapply accepted items; hide mixed result; publish incomplete state without governed review | Durable per-item outcomes/provenance, current Permission/target, idempotency evidence | Remaining items reach explicit terminal/review state | Each accepted/rejected/failed/skipped/duplicate outcome and reconciliation |
| `deleted` | Privacy/data owner; verified requester; authorized backup/restore operator | Maintain tombstone/suppression and minimized permitted evidence | Reactivate working data, disclose content, use for inference/analytics/training | Verified request or expiry authority, deletion result, tombstone/suppression, hold assessment | Terminal for working data; later backup expiry/hold release under policy | Deletion decision/result and privileged restore/hold actions; no raw content |

## 14. Control Ownership Matrix

The threat model assigns control responsibility but does not manufacture the outstanding approval artifacts. “Blocks specification” means the named approval is required before the feature specification can be approved, not that policy drafting must wait.

| Control area | Primary owner | Supporting owner | Required approval | Closure artifact | Blocks specification? | Blocks implementation? |
| --- | --- | --- | --- | --- | --- | --- |
| Identity | Core Identity | Core Security, Product | Human Architecture / Security | Approved identity-verification policy and contract requirements | Yes | Yes |
| Claim | Core Identity / Discovery claim orchestrator | Audit, Core Security | Human Architecture / Security | Approved identity, claim, continuity, replay, and recovery policy | Yes | Yes |
| Session lifecycle | Discovery capability | Core Security, Privacy/Legal | Security and Privacy/Legal | Approved lifecycle, expiry, invalidation, deletion, and storage policy | Yes | Yes |
| Authorization | Core Authorization | Resource owners, Core Security | Governance / Security | Approved Permission catalog and evaluation rules | Yes | Yes |
| Workspace/Business selection | Core Organization/Business | Core Authorization, Discovery | Domain owners / Security | Target-selection contract and authorization rules | Yes | Yes |
| Candidate Fact import | Business Architect | Discovery, canonical owners, Audit | Business Architect owner / Security | Import contract, provenance, idempotency, conflict, and review requirements | Yes | Yes |
| Business DNA publication | Business DNA Registry | Business Architect, Core Authorization | Registry owner / Human Architecture | Publication contract and separate Permission decision | Yes | Yes |
| Privacy | Privacy/Legal | Security, Product, all processors | Privacy/Legal | Approved classification, purpose, legal basis, consent, rights, and provider rules | Yes | Yes |
| Retention | Privacy/Legal / data owners | Audit, Platform Operations | Privacy/Legal | Approved retention, deletion, rejection-evidence, hold, and disposal policy | Yes | Yes |
| Audit | Audit owner | Security, producing domains | Governance / Security / Privacy | Approved event inventory, minimization, integrity, access, and lifecycle policy | Yes | Yes |
| Observability | Observability owner | Security, Privacy/Legal, service owners | Security / Privacy | Approved logs/metrics/traces/alerts/correlation policy | Yes | Yes |
| Abuse prevention | Core Security / API Gateway | Product, Privacy/Legal, service owners | Security / Privacy | Approved risk dimensions, limits, bot/cost/retry controls, and response rules | Yes | Yes |
| Encryption | Core Security / Platform Operations | Data and contract owners | Security / Privacy | Approved in-transit/at-rest/field/backup encryption requirements | Yes | Yes |
| Key management | Core Security / Platform Operations | Identity, service owners | Security | Approved key/secret ownership, storage, rotation, revocation, recovery, and Audit policy | Yes | Yes |
| Residency | Privacy/Legal / Data Governance | Platform Operations, provider owners | Privacy/Legal | Approved jurisdiction, residency, transfer, and provider constraints | Yes | Yes |
| Support access | Support Governance | Core Authorization, Security, Privacy, Audit | Security / Privacy / Support owner | Approved support purpose, data view, verification, approval, session, and Audit policy | Yes | Yes |
| Backup restoration | Platform Operations / data owners | Privacy/Legal, Security, Audit | Security / Privacy | Approved backup retention, access, restore, tombstone/suppression, and test policy | Yes | Yes |
| Incident response | Core Security | Identity, Privacy/Legal, Audit, affected owners | Security / Governance | Approved severity, ownership, containment, evidence, notification, recovery, and review playbook | Yes | Yes |

## 15. Residual-risk Register

Required controls reduce risk but cannot eliminate every threat at the architecture level. No Critical residual risk is accepted by this document. High residual risks require the named owner’s explicit acceptance or further treatment before implementation authorization.

| Residual risk ID | Residual risk | Residual level | Acceptance owner | Required monitoring | Contingency | Blocks specification? | Blocks implementation? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BD-SEC-RR01 | A compromised end-user device, browser, extension, or shared-device user can observe answers or steal a credential before platform controls detect it. | High | Core Security / Product / Privacy | Context changes, credential anomalies, XSS/client-integrity signals, claim failures | Invalidate/rotate session, block claim, approved identity recovery, user/incident response | No, if the policy decision and test obligations are carried into the specification | Yes, until P04, P06, P07 and client/security test controls are approved |
| BD-SEC-RR02 | A copied session credential may be used before claim even when it is secret and high entropy. | Medium | Core Security / Core Identity | Concurrent/context-changing resume and claim attempts | Step up proof, block/invalidate, approved continuity recovery | No | Yes, until P04 and P09 define sufficient ownership continuity and abuse treatment |
| BD-SEC-RR03 | A malicious authenticated tenant member with legitimate limited access may manipulate proposals or exploit ambiguous grants. | Medium | Core Authorization / Workspace authority / Business Architect | Permission denials, unusual target/import/review patterns, access reviews | Revoke grants, deny/reconcile import, investigate actor and affected target | No | Yes, until P02 and test evidence are approved |
| BD-SEC-RR04 | A compromised identity provider or verification channel can issue or falsely assert a verified identity. | High | Core Identity / Core Security | Provider assurance, anomalous verification/claim, credential and callback integrity | Suspend claim, revoke trust/credentials, alternate approved verification, incident review | No, if the dependency and failure posture are specified | Yes, until P04, P07 and incident/dependency controls are approved |
| BD-SEC-RR05 | A compromised inference provider may exfiltrate answers or generate targeted malicious facts. | High | Discovery/inference owner / Core Security / Privacy | Provider egress, source/model/version, output anomaly, review conflict | Isolate/revoke provider, quarantine/regenerate Snapshots, assess disclosure | No, if provider boundaries are explicit | Yes, until P03, P07, P08 and provider/contract/test approvals exist |
| BD-SEC-RR06 | A privileged operator may misuse valid access or collude to bypass controls. | High | Security Governance / Human Architecture Authority | JIT/break-glass/support use, privileged queries, dual-control and access-review anomalies | Revoke access, preserve evidence, investigate, notify/remediate under approved policy | No | Yes, until P02, P06 and separation-of-duties/access-review controls are approved |
| BD-SEC-RR07 | Backup media or restore infrastructure may expose retained data or reactivate deleted data. | High | Platform Operations / Privacy/Legal / Core Security | Backup access, restore reconciliation, tombstone/suppression checks, key use | Isolate restore/media, revoke access/keys, reapply suppression, assess rights/notification | No | Yes, until P05, P07 and P08 are approved and restore controls tested |
| BD-SEC-RR08 | Distributed bots can evade single-dimension limits and impose capacity or inference cost. | Medium | Core Security / Platform Operations / Product | Cross-dimension creation, cost, latency, queue, provider and retry anomalies | Adaptive throttling/challenge, isolate expensive work, safe degradation | No | Yes, until P09 and rollout capacity/response evidence exist |
| BD-SEC-RR09 | Inference poisoning can produce plausible but false proposals that a human reviewer mistakenly accepts. | High | Business Architect / inference owner / Human Architecture Authority | Source/version anomalies, corrections, conflicts, post-import quality signals | Quarantine source, halt publication, governed correction, affected-Business review | No, if provenance/review requirements remain binding | Yes, until source governance, P03, contracts and tests establish treatment/acceptance |
| BD-SEC-RR10 | Unknown or changing jurisdictional obligations may alter legal basis, residency, rights, retention, or support/provider handling. | High | Privacy/Legal / Data Governance | Jurisdiction inventory, legal/regulatory change review, provider/residency drift | Restrict/disable affected processing, segregate/relocate under approved decision, notify as required | Yes, where the target jurisdiction or lawful operating boundary cannot be established | Yes, until P03 and P08 approve the applicable operating scope |

## 16. Downstream Blockers and Dependencies

This document is a binding Security policy input to later governed work. It does not replace or close any of the following readiness blockers or delivery artifacts.

| Downstream item | Status after this model | Threat-model input | Required later closure evidence |
| --- | --- | --- | --- |
| `BD-RDY-P02` — Permission Catalog | Open | R030–R055, R092–R100; action/target/owner boundaries | Approved logical catalog, exact identifiers, resource scopes, evaluation/denial rules, role mapping, review evidence |
| `BD-RDY-P03` — Privacy/Legal | Open | A03–A06/A18–A23, T035–T043, R056–R070, RR05/R07/R10 | Approved classification, purpose/legal basis, disclosures/consents, rights, provider/use rules, jurisdiction decisions |
| `BD-RDY-P04` — Identity, Claim, and Recovery Policy | Open | T001–T018, R001–R029, state checkpoints, RR01/R02/R04 | Approved verification assurance, continuity/recovery proof, account switching, support recovery, claim failure and incident rules |
| `BD-RDY-P05` — Retention and Backup Policy | Open | R049, R062–R065, R080–R091, RR07 | Approved lifecycle values/triggers, deletion, rejection evidence, Audit, legal hold, backup expiry/restore suppression, test evidence |
| `BD-RDY-P06` — Observability and Support Access Policy | Open | T035–T043/T051–T061, R066/R068/R077/R080–R100 | Approved event/field allowlists, alerts, correlation, support views/workflow, access review, incident handoff |
| `BD-RDY-P07` — Encryption and Key Management | Open | A01/A03–A05/A23/A25/A26, T062–T070, R099/R101–R108, RR01/R04–RR07 | Approved encryption boundaries, key/secret owners, storage, audience/scope, rotation, revocation, recovery and evidence |
| `BD-RDY-P08` — Residency and Jurisdiction | Open | R070/R078/R103/R107, RR05/R07/R10 | Approved data-location, transfer, provider, backup, support and jurisdiction-specific constraints |
| `BD-RDY-P09` — Abuse Prevention and Rate Limiting | Open | T044–T050, R006/R016/R071–R079, abuse cases, RR02/R08 | Approved risk dimensions, anonymous/authenticated limits, bot/cost/queue/retry controls, privacy guardrails and response |
| Feature Specification | Not authorized by this model | All requirements, states, trust boundaries, abuse cases, residual risks | Approved spec after all required policy inputs and Constitution Check prerequisites exist |
| API/Domain/Data Contracts | Not authorized by this model | Data flows, R017–R055/R080–R108, idempotency and failure rules | Versioned owner contracts defining context, authorization, lifecycle, errors, provenance, idempotency, Audit and compatibility |
| Test Strategy | Not authorized by this model | Threats, controls, abuse cases, states, residual-risk contingencies | Approved security/authorization/tenancy/privacy/recovery/abuse/Audit/backup test strategy and evidence plan |
| Rollout and Operational Readiness | Not authorized by this model | Detection, incident, dependency, degradation and residual-risk requirements | Approved capacity, monitoring, incident, provider, backup/restore, rollback, support and risk-acceptance evidence |

Dependency order remains governed by the [Business Discovery Readiness Validation](../../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md): Security inputs feed the Permission, Privacy/Legal, Identity/Recovery, Retention/Backup, Observability/Support, Encryption/Key, Residency, and Abuse-control approvals; those approved policies then constrain specification, contracts, planning, tests, and rollout. This threat model does not authorize skipping or collapsing those gates.

## 17. `BD-RDY-P01` Closure Disposition

`BD-RDY-P01` is closed at the Security threat-model level because this approved policy input:

- identifies the assets and their owners, sensitivity, required properties, writers, lifecycle concerns, and key threats;
- defines actors, attackers, entry points, data flows, and all twenty required trust boundaries;
- registers STRIDE threats and explicit abuse cases across the complete Discovery-to-publication and lifecycle scope;
- defines mandatory controls with unique requirement identifiers and accountable owners;
- records conceptual Security checkpoints, failure posture, detection, response, and Audit requirements;
- records residual risks, acceptance owners, monitoring, contingencies, and downstream dependencies; and
- provides a required mitigation path for every Critical inherent threat; no Critical inherent threat is left without controls, detection, response, an owner, or residual-risk treatment.

Closure is deliberately bounded. It does **not**:

- close `BD-RDY-P02` through `BD-RDY-P09`;
- make policy readiness complete;
- authorize a feature specification, Constitution Check, API/domain/data contract, implementation plan, task breakdown, test artifact, or rollout;
- select a framework, provider, storage mechanism, token format, authentication mechanism, database, API, schema, UI, infrastructure, expiry value, retention value, rate limit, encryption algorithm, or key product; or
- authorize code, migrations, deployment, subscription/entitlement activation, readiness, OS configuration, or operational behavior.

## 18. Validation and Final Security Statement

This model was checked against the Accepted ADR, Human Architecture Review, synchronized journey, Core Platform Architecture v1.1 Freeze, Core Security/Permission/Data Ownership baselines, supporting Accepted ADRs, and the readiness blocker definition. It preserves these invariant outcomes:

- claim requires verified identity, is atomic/auditable/replay-resistant, and binds only to `User`;
- authentication never substitutes for Workspace/Business target authorization;
- tenant and owning-domain checks are server-side and are revalidated at execution;
- Discovery and anonymous data cannot write canonical Business or publish Business DNA;
- accepted evidence enters only as provenance-bearing Candidate Facts through Business Architect and human review;
- credentials, raw answers, inferred content, and DiscoverySnapshot content are excluded from ordinary telemetry and Audit payloads by default;
- privacy purpose, deletion, Audit, backup-restoration suppression, legal hold, support, and incident boundaries remain policy-governed; and
- no commercial, entitlement, readiness, OS, operational-data, code, or implementation effect is created.

> **Conclusion:** BD-RDY-P01 is closed at the Security threat-model level. Policy readiness remains incomplete because Permission, Privacy/Legal, Identity and Recovery, Retention and Backup, Observability, Encryption, Residency, and Abuse-Control approvals remain outstanding. Implementation remains unauthorized.
