# Business Discovery Permission Catalog

| Metadata | Value |
| --- | --- |
| Status | **Approved Permission Policy Input** |
| Scope | Discovery session, claim, Workspace/Business targeting, Candidate Fact import, review, publication, deletion, recovery, support, and administration |
| Readiness blocker | **BD-RDY-P02** |
| Authority basis | Accepted ADR-042, Core Platform Architecture v1.1 Freeze, and Business Discovery Security Threat Model |
| Permission owner | Core Authorization / Human Architecture Authority |
| Date | 2026-07-22 |
| Version | 1.0 |
| Implementation authorization | **None** |
| Code impact | **None** |
| Review cadence | Before specification approval and after material authorization-model change |
| Supersedes | Nothing |

## 1. Approval Posture and Purpose

This document is the approved, authoritative logical Permission policy for the bounded Business
Discovery scope. It closes
[BD-RDY-P02](../../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md)
only at the Permission-policy level by defining logical actions, subjects, targets, scopes,
preconditions, evaluation rules, deny rules, separation of duties, privileged access, service
access, freshness, and Audit obligations.

It is subordinate to the controlling Freeze and Accepted ADRs. It refines the deferrals in the
[Core Permission Model](../05-PERMISSION-MODEL.md) only for Business Discovery; it does not create
a global role catalog, global direct-grant model, global deny language, or platform-wide
Delegation capability.

This catalog is technology-neutral. Its identifiers are policy references, not approved runtime
strings. It defines no endpoint, API, schema, table, middleware, route, UI, framework, vendor,
infrastructure, migration, specification, plan, task, test, or runtime behavior. It grants no
authority to specify, plan, or implement Business Discovery.

## 2. Authority Basis

| Authority | Permission effect used here |
| --- | --- |
| [Accepted ADR-042](../../00-governance/ADR/ADR-042-pre-registration-business-discovery.md) | Fixes claim-to-User only, explicit Workspace/Business targets, current target Permission, separate import/review/publication actions, human review, safe failure, and no implementation authority. |
| [Core Platform Architecture v1.1 Freeze §§4–9](../../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md) | Freezes non-canonical Discovery, explicit target selection, no fallback tenant, execution-time revalidation, Candidate Fact governance, owner boundaries, and exact-Permission deferral. |
| [Business Discovery Security Threat Model](./BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md) | Supplies the approved P01 threats and controls for title-based privilege, stale authorization, cross-tenant import, confused deputy, support/administrative misuse, service credentials, and Audit. |
| [Core Permission Model §§3–6](../05-PERMISSION-MODEL.md) | Requires scoped RBAC with approved ABAC constraints, default no access, no hierarchy inheritance, current canonical attributes, owner authorization, and auditable critical access changes. |
| [Core Data Ownership §§3–5](../04-DATA-OWNERSHIP.md) | Preserves one canonical writer, owner-controlled changes, target-owner revalidation, provenance, idempotency, and read-model non-authority. |
| [Core Security Model §§3–5](../08-SECURITY-MODEL.md) | Requires least privilege, explicit trust, tenant isolation, safe denial, protected service/administrative boundaries, minimized Audit, and no implicit privilege. |
| [Synchronized Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md) | Preserves optional Discovery-first and account-first paths, verified claim, authorized targets, Candidate Fact import, and no direct Business DNA publication. |
| [ADR-003](../../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md), [ADR-004](../../00-governance/ADR/ADR-004-genesis-organization-hierarchy.md), and [ADR-034](../../00-governance/ADR/ADR-034-explicit-tenant-and-resource-scope.md) | Fix Workspace as tenant, distinguish Workspace/Business/Business Unit, and require explicit tenant/resource context for every protected operation. |
| [ADR-014](../../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md), [ADR-016](../../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md), and [ADR-005](../../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md) | Preserve human authority, Business Architect Candidate Fact governance, and Business-scoped Business DNA publication. |
| [ADR-038](../../00-governance/ADR/ADR-038-append-only-audit-history.md) and [ADR-040](../../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md) | Preserve append-only Audit and Core organization identity ownership without transferring OS or canonical write authority. |

Repository search found no existing approved Permission catalog, role catalog, authorization
matrix, support-access policy, or emergency-access policy that already resolves this feature’s
action grants. Existing milestone and Freeze sources explicitly defer those details. This catalog
therefore makes the smallest bounded policy decision needed for P02 and leaves P03–P09 open.

## 3. Frozen Permission Principles

The following principles control every action and matrix entry in this catalog:

1. **Authentication is not authorization.** Identity proof does not grant tenant or resource access.
2. **Role title alone never grants an action.** `Workspace Owner`, `Workspace Admin`, employee,
   reviewer, publisher, support, Security, Legal, backup, or service labels are inputs at most.
3. Every privileged action requires an explicit action decision from the proper owner.
4. Every target-sensitive action requires current target-scoped authorization.
5. Workspace and Business scopes are distinct; access to one does not imply the other.
6. No fallback tenant, Workspace, Business, Business Unit, or resource may be inferred.
7. A multi-Workspace User explicitly selects one currently authorized Workspace.
8. Import into an existing Business requires exact Permission for that Business.
9. Authorization is revalidated when the protected action executes.
10. Missing, stale, revoked, suspended, inconsistent, or unresolved Membership or Permission
    evidence fails closed.
11. Claim binds only to the verified User and grants no Workspace, Business, Membership,
    Permission, subscription, entitlement, readiness, OS, import, publication, or operational
    authority.
12. Business Architect owns Candidate Fact intake and governed review decisions.
13. Business DNA Registry publication remains a separate action and decision.
14. Support access is never implied by an operational, Workspace, Business, or reviewer role.
15. Administrative override requires a separately permitted action, approved policy, approval,
    narrow scope, expiry, and authoritative Audit.
16. Within this bounded catalog, a blocking deny condition takes precedence over an otherwise
    applicable allow. This is a Business Discovery evaluation rule, not a global repository
    explicit-deny model.
17. Temporary Discovery ownership never creates canonical write authority.
18. Authorization decisions are auditable with minimized references and never require raw
    answers, Snapshot content, secret session credentials, secrets, or keys in Audit.

Public and own-session actions remain subject to lifecycle, purpose, control-evidence, abuse, and
data-protection rules. “Public” does not mean unvalidated or unrestricted.

## 4. Logical Permission Vocabulary

### 4.1 Naming and refinement rule

Logical identifiers use `BD-PERM-<ACTION>` solely for architecture and policy traceability. Final
runtime names may be refined later, but refinement MUST preserve the action, owner, subject,
target type, Workspace/Business scope, preconditions, deny behavior, and Audit semantics. A broad
wildcard, `admin`, `owner`, `all`, tenant-wide super-permission, or one combined
`manage-discovery` grant MUST NOT replace the separation below.

### 4.2 Logical permission catalog

| Logical permission | Action meaning | Primary decision owner | Required scope | Grant posture |
| --- | --- | --- | --- | --- |
| `BD-PERM-START-DISCOVERY` | Start one temporary anonymous Discovery | Discovery under Security/Privacy policy | Public purpose and abuse context | Public-policy action; not tenant authority |
| `BD-PERM-RESUME-OWN-SESSION` | Resume the controlled temporary session | Discovery | Own temporary session | Possession plus valid control/lifecycle evidence |
| `BD-PERM-SUBMIT-OWN-ANSWER` | Submit/correct an answer in the controlled session | Discovery | Own temporary session | Session-scoped only |
| `BD-PERM-GENERATE-OWN-PREVIEW` | Generate/retrieve a provisional preview | Discovery | Own temporary session | Session-scoped only |
| `BD-PERM-ABANDON-OWN-SESSION` | Abandon the controlled session | Discovery | Own temporary session | Session-scoped only |
| `BD-PERM-DELETE-UNCLAIMED-SESSION` | Delete eligible unclaimed temporary data | Discovery / lifecycle owner | Own eligible temporary session | Session-control and policy eligibility required |
| `BD-PERM-REGISTER-ACCOUNT` | Request account registration | Core Identity | Identity transaction | Core Identity policy action |
| `BD-PERM-LOGIN` | Request authentication | Core Identity | User identity transaction | Core Identity policy action |
| `BD-PERM-VERIFY-IDENTITY` | Complete required identity verification | Core Identity | User identity | Core Identity proof only; no target authority |
| `BD-PERM-CLAIM-OWN-SESSION` | Claim or safely retry one eligible session | Claim owner / Core Identity | Own temporary session → verified User | One-time, User-only binding |
| `BD-PERM-SELECT-WORKSPACE` | Select one authorized Workspace context | Workspace owner / Core Authorization | Exact Workspace | Active relationship and disclosure-safe selector |
| `BD-PERM-CREATE-WORKSPACE` | Request Workspace creation through Core | Core Workspace Management | New Workspace action for verified User | Core-owned creation policy required |
| `BD-PERM-SELECT-BUSINESS` | Select one authorized Business target | Core Business Registry / Authorization | Exact Business and parent Workspace | Current target relationship required |
| `BD-PERM-CREATE-BUSINESS` | Request Business creation through Core | Core Business Registry | Selected Workspace and new Business action | Exact Workspace-scoped creation authority |
| `BD-PERM-VIEW-IMPORT-PROPOSAL` | View field-level proposed/existing values | Business Architect / canonical field owners | Exact Business and permitted fields | Read is separately filtered; no mutation |
| `BD-PERM-PROPOSE-IMPORT` | Submit accepted Discovery evidence as Candidate Fact proposal | Business Architect | Exact Workspace, Business, Snapshot and proposal | Current target/action Permission |
| `BD-PERM-REVIEW-CANDIDATE-FACT` | Review one item or authorized batch | Business Architect | Exact Business and Candidate Fact item/batch | Review only; no decision/publication implication |
| `BD-PERM-ACCEPT-CANDIDATE-FACT` | Accept one proposed fact | Business Architect | Exact Business and Candidate Fact item | Explicit field decision |
| `BD-PERM-REJECT-CANDIDATE-FACT` | Reject one proposed fact | Business Architect | Exact Business and Candidate Fact item | No canonical mutation |
| `BD-PERM-CORRECT-CANDIDATE-FACT` | Correct one proposed fact with provenance | Business Architect | Exact Business and Candidate Fact item | Correction remains proposed/reviewed evidence |
| `BD-PERM-RETRY-IMPORT` | Retry failed eligible import items idempotently | Business Architect | Exact Business, proposal/batch and prior outcome | Current reauthorization and reconciliation |
| `BD-PERM-VIEW-IMPORT-OUTCOME` | View permitted per-item import outcomes | Business Architect | Exact Business and proposal/batch | Field/result filtering required |
| `BD-PERM-PUBLISH-BUSINESS-DNA` | Publish governed Business DNA | Business DNA Registry | Exact Business and publishable review state | Separate highest-consequence decision |
| `BD-PERM-REQUEST-DELETION` | Request deletion/rights handling | Privacy/lifecycle owner | Verified subject and exact data scope | Request only; not self-approved exception |
| `BD-PERM-LEGAL-HOLD` | Apply, change, release, or approve a deletion exception | Privacy/Legal owner | Exact legal-hold/deletion scope | Separately approved legal authority |
| `BD-PERM-APPROVE-RECOVERY` | Approve/perform policy-defined recovery step | Core Identity / recovery owner | Exact User, session and support case | Reserved until P04/P06 approval |
| `BD-PERM-VIEW-AUDIT-EVIDENCE` | View minimized authorized Audit evidence | Audit Service | Exact tenant, subject/action and record set | Purpose- and field-scoped |
| `BD-PERM-SECURITY-INVESTIGATE` | Investigate one Security event/incident scope | Core Security | Exact Security event, tenant and purpose | No canonical Business mutation |
| `BD-PERM-SUPPORT-ACCESS` | Access an approved support case and minimized diagnostics | Support Governance / resource owner | Exact support case, User/tenant/target and purpose | Deny by default pending P06 |
| `BD-PERM-BACKUP-ACCESS` | Access one approved backup copy for procedure | Platform Operations / data owners | Exact backup, environment and tenant set | Exceptional, separated, audited |
| `BD-PERM-BACKUP-RESTORE` | Restore one approved backup and validate suppression | Platform Operations / data owners | Exact backup, environment and tenant set | Dual-control/suppression conditions apply |
| `BD-PERM-ADMIN-MAINTENANCE` | Perform one approved maintenance action | Canonical/operations owner | Exact action, resource, environment and tenant | JIT/exceptional posture |
| `BD-PERM-OVERRIDE-CLAIM` | Request an exceptional claim reassignment/override | Core Identity / Human authority | Exact claim, Users and recovery case | **Not grantable until P04/P06 policy expressly approves it** |
| `BD-PERM-VIEW-RAW-DISCOVERY-CONTENT` | View raw answers/Snapshot through privileged tooling | Data owner / Privacy/Legal / Security | Exact fields, session/User, case and purpose | **Not grantable by default; exceptional authority remains P03/P06** |

There are 34 distinct logical permissions. Reusing a logical permission for retry is allowed only
where the operation has identical owner, subject, target, and idempotent meaning; otherwise the
separate action identifier controls.

## 5. Subjects and Persona Outcomes

| Subject/persona | Default posture | Permitted logical outcome | Explicitly not implied |
| --- | --- | --- | --- |
| Anonymous visitor | Session-scoped public-policy access | Start, answer, preview, abandon, delete eligible own unclaimed session | Claim, canonical data, target access, create/import/review/publish |
| Verified User | Authenticated but target-denied by default | Claim own eligible session; select/create/propose only with exact decisions | Session possession or Authentication as tenant authority |
| Workspace Owner | Title is non-authoritative | Only actions explicitly granted for exact scope | Automatic create/import/review/publish/support/admin access |
| Workspace Admin | Title is non-authoritative | Only exact scoped actions | Automatic import, review, publication, support, Security, or override |
| Employee | Deny privileged Discovery actions by default | Explicitly granted, scoped action only | Create/import/review/publish from employment/title |
| View-only User | Read-only within exact existing grants | Permitted filtered reads only | Create, import, review mutation, publication, support/admin action |
| Multi-Workspace User | No default Workspace | Explicitly choose one authorized Workspace and Business | Last-used, first, URL, token, analytic, or inferred fallback tenant |
| Business Architect Reviewer | Review-specific | Review authorized Candidate Facts/fields in one Business | Accept/reject/correct or publish unless separately granted |
| Business Architect Approver | Decision-specific | Accept, reject, correct within explicit Business/item scope | Publication, support, Security, legal, backup, or admin access |
| Business DNA Publisher | Publication-specific | Publish only complete governed review for exact Business | Candidate Fact approval, Discovery import, or raw-content access |
| Support Operator | Deny by default | Approved case-linked, purpose/time/field-limited support action | Raw browsing, claim reassignment, deletion override, tenant action |
| Security Operator | Deny except investigation duty | Minimized Security/Audit evidence for exact event/scope | Canonical Business write, routine support, legal hold, publication |
| Privacy/Legal Operator | Policy/right-specific | Rights and legal-hold decisions through approved process | General editing, claim, import, publication, or Security override |
| Backup Operator | Deny except approved procedure | Exact backup access/restore step with separation and Audit | Active-data browsing, suppression bypass, tenant expansion |
| System Service | Non-human least privilege | One contract-bound service action and exact resource scope | Platform-wide wildcard, User role/title, cross-tenant authority |
| Compromised or malicious authenticated User | Treat requests as hostile inputs | Only decisions that still pass current owner evaluation | Benefit of doubt, cached access, hidden target existence |
| Suspended User | Deny protected actions | Only policy-approved identity/rights/recovery path | Claim, target, import, review, publish, support, admin |
| User with revoked Membership | Deny Workspace/Business actions | Reselect another currently authorized context or rights path | Continued target access from earlier selection |
| User with stale Permission evidence | Deny or re-fetch | Proceed only after current canonical decision succeeds | Silent continuation from cached/UI/projection evidence |

### 5.1 Mandatory persona rules

- The anonymous visitor has only own-session lifecycle capabilities and no canonical read or write.
- The verified User claims only that User’s valid session; copied credential possession alone is
  insufficient where P04 requires continuity proof.
- Workspace Owner and Workspace Admin titles never produce an `Allow` without the exact action,
  scope, target, lifecycle, and owner decision.
- Employees default to denial for create/import/review/publication; view-only Users are denied all
  mutations.
- Multi-Workspace Users have no inferred default.
- Reviewer, approver, and publisher actions remain separately grantable.
- Support, Security, Privacy/Legal, backup, and system-service authority is specialized and never
  inherited from customer operational roles.

## 6. Target and Scope Catalog

| Target type | Canonical owner | Allowed scope dimensions | Required selector | Tenant-isolation rule | Forbidden inference | Revalidation rule |
| --- | --- | --- | --- | --- | --- | --- |
| Own temporary session | Discovery temporary owner | Session purpose, lifecycle, control evidence, anonymous/claimed User | Opaque session reference resolved server-side | No Workspace exists before target selection; never expose another session | Token possession as identity, User, tenant, role, or Permission | Every resume, write, preview, claim, delete, recovery |
| User identity | Core Identity | Exact User, account/verification/session status, purpose | Current authenticated/verified principal or approved rights/recovery subject | Identity alone grants no Workspace | Browser User ID, email knowledge, session link, support assertion | Claim, recovery, rights, privileged action |
| Selected Workspace | Core Workspace Management / Authorization | Workspace, Membership, requested action, lifecycle | Explicit Workspace identifier resolved canonically | Exactly one Workspace per decision; no sibling visibility | Last-used, first available, URL, title, Snapshot, analytics | Selection, create target action, Business selection, every write |
| Selected Business | Core Business Registry / Authorization | Workspace, Business, ancestry, action, lifecycle | Explicit Business identifier under selected Workspace | One exact Business; other Businesses remain denied | Business Unit as Business, label match, prior target, recommendation | Selection, proposal view/import, review, publication |
| Candidate Fact item | Business Architect | Workspace, Business, Candidate Fact ID, field, action, state/version | Exact item resolved by owner | Item must belong to authorized Business | Batch membership or field visibility as decision authority | View/review/accept/reject/correct and retry |
| Candidate Fact batch | Business Architect | Workspace, Business, proposal/batch, item set, source/version | Exact batch plus owner-expanded item set | Every item remains Business- and field-authorized | Batch grant as blanket item or future publication authority | Proposal, review, retry, outcome retrieval |
| Published Business DNA | Business DNA Registry | Workspace, Business, DNA identity/snapshot, publication action | Exact Business DNA identity resolved from Business | Business-scoped only; no Workspace aggregate write | Candidate acceptance, Reviewer title, DiscoverySnapshot as publishable truth | Every publication attempt and governed correction |
| Audit record | Core Audit Service | Workspace, applicable Business/resource, actor/service, action, subject, purpose | Exact query purpose and permitted record/field set | Tenant-filter before result; cross-tenant search exceptional only | Support/Security title as universal Audit access | Every lookup/export and privileged query change |
| Deletion request | Privacy/lifecycle owner | Requester/subject, data categories, purpose, owner, state, hold | Verified request and explicit data scope | No other User/session/tenant disclosure | Session knowledge as rights proof; broad “delete all” without resolution | Submission, validation, execution, exception decision |
| Legal-hold record | Privacy/Legal / Audit | Authority, jurisdiction, subject/data scope, start/review/release state | Exact approved hold identifier and authority | Hold cannot expand across tenants/data by convenience | Operator title, support case, investigation as legal authority | Apply, change, review, release, restore interaction |
| Security event | Core Security / source owner | Event/incident, tenant/resource, actor/service, purpose | Exact event/incident reference and authorized investigation scope | Evidence views remain tenant-safe and content-minimized | Alert receipt as canonical or cross-tenant authority | Every view, enrichment, containment, closure action |
| Backup copy | Platform Operations with data owners | Backup, environment, tenant set, data owners, restore purpose | Exact backup identifier and approved restore/change record | Restore/access remains tenant/data-owner scoped | Infrastructure access as data authorization; backup as current truth | Access, restore start, activation, tombstone reconciliation |
| Support case | Support Governance / affected owner | Case, requester, User, tenant/resource, purpose, fields, time | Exact approved case and verified requester linkage | Case opens no unrelated tenant/resource access | Ticket text, operator title, customer-provided ID as proof | Every access/action, scope/purpose/time change, closure |

There are 13 distinct target types. Workspace scope never substitutes for Business scope, and
Business scope never transfers Candidate Fact or Business DNA ownership.

## 7. Conceptual Authorization Decision Model

```text
Decision =
Subject validity
AND authentication state
AND identity verification where required
AND active Membership where required
AND explicit action Permission
AND exact Workspace scope
AND exact Business scope where required
AND resource ownership or target relationship
AND current resource state
AND current policy constraints
AND no blocking deny condition
```

Evaluation MUST fail closed. Identity, tenant, target, ancestry, lifecycle, and Permission evidence
comes from canonical owners or an approved freshness-bounded source; browser-provided identity,
role, Workspace, Business, resource, or policy assertions are untrusted inputs. A cached or earlier
decision cannot outlive its approved freshness or authorize a later consequential operation.

Preview, claim, target selection, import proposal, Candidate Fact review, Candidate Fact decision,
and Business DNA publication are distinct decisions. Claim establishes only the User binding;
preview never authorizes a write; review never implies acceptance; acceptance never implies
publication. The owner may reject early or late, and a blocking deny always wins within this
Business Discovery policy.

## 8. Action Catalog

“Audit” below means authoritative, minimized Audit where the action is consequential; ordinary
session/security telemetry does not become an Audit Record. A logical `Allow` is never created by
this table alone: the subject, owner, target, state, and all preconditions must still resolve.

| Action ID | Action | Logical permission | Actor | Authentication required? | Identity verification required? | Workspace scope | Business scope | Resource ownership condition | Preconditions | Allowed outcome | Explicit deny conditions | Revalidation point | Audit requirement | Sensitive-data exposure rule | Downstream policy dependency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-ACT-001 | Start anonymous Discovery | `BD-PERM-START-DISCOVERY` | Anonymous visitor | No | No | None | None | Discovery temporary owner creates only bounded state | Current disclosure/purpose; valid input; abuse controls | One temporary session; no canonical entity | Unsupported purpose, abuse/rate decision, integrity/dependency failure | Session creation | Minimized Security/lifecycle event; no credential/content | Return no tenant/account data; credential treated as secret | P03, P09 |
| BD-ACT-002 | Resume own anonymous Discovery | `BD-PERM-RESUME-OWN-SESSION` | Session controller | No | No | None | None | Discovery validates own-session control | Valid secret control, active lifecycle, integrity, expiry | Resume only that eligible session | Missing/invalid/copied evidence, expired/abandoned/deleted/invalidated, enumeration risk | Every resume | Security outcome for anomaly/denial; no credential/content | Only permitted own fields; non-enumerating denial | P04, P06, P09 |
| BD-ACT-003 | Submit answer to own session | `BD-PERM-SUBMIT-OWN-ANSWER` | Session controller | No | No | None | None | Discovery owns temporary answer capture | Valid own session, current state, purpose, input and abuse checks | Store/update minimum answer in temporary state | Invalid control/state/input, expiry, replay/rate violation | Every submission | No raw answer in Audit; safe lifecycle/security signal only | Never expose another session or ordinary telemetry content | P03, P04, P09 |
| BD-ACT-004 | Generate own preview | `BD-PERM-GENERATE-OWN-PREVIEW` | Session controller | No | No | None | None | Discovery owns provisional Snapshot generation | Valid own state, source/version and abuse/cost controls | Return non-canonical preview | Invalid/stale state, unsafe provider/result, expired session, abuse decision | Every generation/retrieval | Source/version/outcome class only where required | Minimum own preview; no telemetry/support copy | P03, P06, P09 |
| BD-ACT-005 | Abandon own session | `BD-PERM-ABANDON-OWN-SESSION` | Session controller | No | No | None | None | Discovery owns temporary lifecycle | Valid session control or safe non-enumerating abandonment | Mark abandoned under lifecycle policy; no canonical effect | Wrong session, uncertain scope, legal/policy constraint | Abandon execution | Lifecycle outcome without content/credential | Reveal no prior/other-session content | P04, P05 |
| BD-ACT-006 | Delete eligible own unclaimed session | `BD-PERM-DELETE-UNCLAIMED-SESSION` | Session controller | No | No | None | None | Discovery/lifecycle owner validates deletion eligibility | Own valid control, unclaimed eligible state, rights/hold policy | Delete/suppress eligible temporary working data | Claimed/other/uncertain session, invalid proof, approved hold/retention exception | Deletion execution and restore | Deletion decision/result; no content/credential | Non-enumerating result; minimized retained evidence | P03, P04, P05 |
| BD-ACT-007 | Register account | `BD-PERM-REGISTER-ACCOUNT` | Visitor | No | No | None | None | Core Identity owns registration | Core Identity policy, abuse and safe-account handling | Core-owned registration state only | Invalid proof/input, suspended/blocked identity, abuse decision | Registration transaction | Core Identity Security/Audit policy | No account enumeration or Discovery content transfer by default | P04, P09 |
| BD-ACT-008 | Log in | `BD-PERM-LOGIN` | User | No prior session | No before successful flow | None | None | Core Identity owns authentication | Approved identity proof and account state | Authenticated User session; no target authority | Failed proof, suspended/blocked account, abuse decision | Authentication transaction | Core Identity Security/Audit policy | Non-enumerating safe response | P04, P09 |
| BD-ACT-009 | Verify identity | `BD-PERM-VERIFY-IDENTITY` | Authenticated/registration subject | Core Identity context | Action produces verification | None | None | Core Identity alone writes verification state | Approved proof, current account/session, purpose | Current verified-identity result only | Failed/stale/mismatched proof, wrong account, policy block | Verification decision and claim execution later | Verification result/reference; no secret evidence value | Expose minimum result only | P03, P04, P06 |
| BD-ACT-010 | Claim own valid session | `BD-PERM-CLAIM-OWN-SESSION` | Verified User | Yes | Yes | None; claim grants none | None; claim grants none | Claim owner binds session to verified User only | Current identity, valid own control/continuity, eligible state, replay/idempotency and Audit | Atomic one-session-to-one-User claim | BD-DENY-001–007, uncertain commit/Audit, abuse block | Atomic claim execution | Attempt/result/actor/correlation/reason; no credential/content | No other User/session content or tenant data | P04, P06, P09 |
| BD-ACT-011 | Retry own interrupted claim | `BD-PERM-CLAIM-OWN-SESSION` | Same verified User | Yes | Yes | None | None | Claim owner reconciles existing outcome | Same User, current proof, idempotency key/meaning, owner/Audit reconciliation | Return same safe outcome or complete one atomic claim | Different User, stale/invalid session, already owned by another, unresolved evidence | Every retry after state reconciliation | Retry/replay/outcome; no credential/content | Safe deterministic result to same owner only | P04, P06, P09 |
| BD-ACT-012 | Select Workspace | `BD-PERM-SELECT-WORKSPACE` | Claimed/verified User with exact access | Yes | Yes | Exact selected Workspace | None yet | Workspace owner supplies current lifecycle; Authorization decides access | Explicit selector, current active Membership/action, tenant-safe listing | Establish temporary explicit Workspace context | BD-DENY-008–012, stale/revoked/unavailable context | Selection and every downstream use | Selection/denial where consequential; exact scope/reason class | Return only authorized candidates/fields | P04, P06 |
| BD-ACT-013 | Create Workspace through Core | `BD-PERM-CREATE-WORKSPACE` | Verified User with Core creation authority | Yes | Yes | New Workspace creation action | None | Core Workspace Management alone creates | Current identity/account, explicit create action, Core policy, Audit availability | Core creates one Workspace; Discovery gains no ownership | Missing create authority, suspended subject, invalid input/policy, unrecordable outcome | Core owner execution | Attempt/result/new reference under Core policy | No unrelated Workspace discovery | P03, P04, P06 |
| BD-ACT-014 | Select Business | `BD-PERM-SELECT-BUSINESS` | User authorized for exact Business | Yes | Yes | Explicit selected Workspace | Exact selected Business | Business Registry supplies identity/ancestry/lifecycle; Authorization/resource owner decides | Explicit selector, active Membership, exact Business relationship/action | Establish temporary explicit Business target | BD-DENY-009–015, wrong ancestry, no field visibility | Selection and every downstream use | Target selection/denial; minimized identifier and reason | Return only authorized Businesses/fields | P04, P06 |
| BD-ACT-015 | Create Business through Core | `BD-PERM-CREATE-BUSINESS` | User with exact Workspace-scoped creation authority | Yes | Yes | Exact selected Workspace | New Business action | Core Business Registry alone creates | Active Membership, exact create Permission, Workspace lifecycle, owner invariants | Core creates Business under exact Workspace | BD-DENY-009–015; Business Unit substitution; invalid owner context | Core owner execution | Attempt/result/new reference and authority source | No sibling/unauthorized Business disclosure | P03, P04, P06 |
| BD-ACT-016 | View import proposals for selected Business | `BD-PERM-VIEW-IMPORT-PROPOSAL` | Authorized target User/reviewer | Yes | Yes | Exact selected Workspace | Exact selected Business | Business Architect and canonical field owners authorize reads | Current Membership, exact read/action/field access, target/proposal state | Show permitted existing/proposed/conflict fields | Wrong target, stale/revoked access, hidden field, unsupported state | Every retrieval and field expansion | Sensitive read Audit where policy requires | Field-filtered; no raw source beyond approved need | P03, P05, P06 |
| BD-ACT-017 | Propose Discovery import | `BD-PERM-PROPOSE-IMPORT` | Verified User with exact import authority | Yes | Yes | Exact selected Workspace | Exact selected Business | Business Architect alone accepts Candidate Fact input | Valid claim, explicit target, current Permission, fresh Snapshot/source, field confirmation, provenance | Create provenance-bearing Candidate Fact proposal only | BD-DENY-009–020; cross-tenant, stale, silent merge, missing provenance | Immediately before owner command executes | Proposed/denied/per-item result; no raw answer by default | Minimum accepted fields/provenance only | P03, P04, P05, P06 |
| BD-ACT-018 | Review Candidate Fact | `BD-PERM-REVIEW-CANDIDATE-FACT` | Business Architect Reviewer with exact scope | Yes | Yes | Exact Workspace | Exact Business/item or batch | Business Architect owns review state | Current review Permission, field access, target/item state, conflicts/provenance available | Record review observation/checkpoint; no accept/publish implication | Stale/wrong target, hidden field, role title only, conflict unavailable | Every review retrieval/action | Reviewer/action/item/result reference as policy requires | Minimum field content; no unrelated Candidate Facts | P03, P05, P06 |
| BD-ACT-019 | Accept Candidate Fact | `BD-PERM-ACCEPT-CANDIDATE-FACT` | Business Architect Approver with exact scope | Yes | Yes | Exact Workspace | Exact Business/item | Business Architect owns decision state; canonical owner retains final write | Current accept Permission, explicit field review, conflict/provenance/state, human intent | Mark item accepted for governed pipeline; partial acceptance allowed | Wrong/stale target, missing field decision/provenance, bulk implicit acceptance, conflict hidden | Immediately before each item/batch decision | Accept decision, actor, item, result, authority; no raw answer | Only reviewed field and necessary comparison | P03, P05, P06 |
| BD-ACT-020 | Reject Candidate Fact | `BD-PERM-REJECT-CANDIDATE-FACT` | Business Architect Approver with exact scope | Yes | Yes | Exact Workspace | Exact Business/item | Business Architect owns rejection state | Current reject Permission, explicit item, current state | Mark item rejected; canonical data unchanged | Wrong/stale target, implicit batch, missing item/state, no current Permission | Immediately before each decision | Rejection outcome/reason category; minimized evidence | No raw rejected content in Audit by default | P03, P05, P06 |
| BD-ACT-021 | Correct Candidate Fact | `BD-PERM-CORRECT-CANDIDATE-FACT` | Business Architect Approver with exact scope | Yes | Yes | Exact Workspace | Exact Business/item | Business Architect owns corrected proposal; canonical owner controls eventual fact | Current correct Permission, explicit field, provenance/source distinction, current state | Create corrected provenance-bearing proposed value | Wrong target, silent canonical edit, provenance loss, stale state | Immediately before correction | Correction/action/item/source/result references | Minimum field visibility; corrected value stays protected | P03, P05, P06 |
| BD-ACT-022 | Retry failed import | `BD-PERM-RETRY-IMPORT` | Authorized importer/service | Yes or approved service identity | Yes for human actor | Exact Workspace | Exact Business/proposal/items | Business Architect reconciles and owns retry | Current action/target Permission, prior per-item outcome, idempotency, freshness | Retry eligible failed items without duplicates | Stale/revoked access, wrong target, changed meaning/source, unresolved prior commit | Immediately before retry execution | Retry, prior/current outcome and correlation | No broader field/content exposure than original authorized action | P04, P05, P06, P09 |
| BD-ACT-023 | View import outcome | `BD-PERM-VIEW-IMPORT-OUTCOME` | Authorized importer/reviewer | Yes | Yes | Exact Workspace | Exact Business/proposal/items | Business Architect owns result; Audit remains separate evidence | Current read Permission and exact relationship to proposal/target | View permitted accepted/rejected/failed/skipped/duplicate outcomes | Wrong target, revoked access, hidden field, outcome not owned | Every retrieval | Sensitive read Audit where required | Per-item result filtering; no raw answer by default | P03, P05, P06 |
| BD-ACT-024 | Publish Business DNA | `BD-PERM-PUBLISH-BUSINESS-DNA` | Separately authorized Business DNA Publisher | Yes or approved service with accountable actor | Yes for human actor | Exact Workspace | Exact Business/DNA identity | Business DNA Registry alone publishes | Current publish Permission, complete governed review, valid provenance/versions, owner invariants, Audit | Publish governed Business DNA version | BD-DENY-014/015/018–020; incomplete review; missing Audit | Immediately before Registry commit | Attempt/success/denial, actor/service, Business, version, result | No raw questionnaire content/credential | P03, P05, P06, P07 |
| BD-ACT-025 | Request deletion | `BD-PERM-REQUEST-DELETION` | Verified subject/session controller | As required by target | As required by P03/P04 | Exact Workspace when applicable | Exact Business when applicable | Privacy/lifecycle owner validates subject, scope, eligibility | Verified requester/control, explicit categories/owners, hold/retention assessment | Create/process scoped rights request; no automatic exception override | Unverified/wrong subject, ambiguous scope, approved hold, disclosure risk | Request validation and each owner execution | Request/verification/result/owner; no deleted content | Do not reveal data existence to unverified requester | P03, P04, P05, P06 |
| BD-ACT-026 | Approve deletion exception or legal hold | `BD-PERM-LEGAL-HOLD` | Privacy/Legal Operator with approved authority | Yes | Strong verification under policy | Exact affected Workspace(s) | Exact affected Business/data where applicable | Privacy/Legal owns authority decision; data owners execute | Valid legal authority, documented purpose/scope/review/release, separation and Audit | Apply/change/release narrowly scoped hold/exception | BD-DENY-024/026/027; title/case alone; overbroad or expired authority | Every apply/change/release and restore use | Full minimized authority/approver/scope/result history | No raw content unless separately necessary/approved | P03, P05, P06, P08 |
| BD-ACT-027 | Perform support-assisted recovery | `BD-PERM-SUPPORT-ACCESS` + `BD-PERM-APPROVE-RECOVERY` | Authorized Support/Identity recovery operators | Yes | Strong operator and requester proof | Exact Workspace if already established | Exact Business only if recovery requires and authorizes it | Core Identity/recovery owner controls identity/claim; support only orchestrates | Approved case, verified requester, exact purpose/scope, dual approval where required, current policy | Perform only approved recovery step; never create hidden target authority | BD-DENY-021–023/027; missing P04/P06 approval; uncertain ownership | Every access and recovery action | Case, operator, approver, action, outcome, correlation | Minimized diagnostics; raw content denied by default | P03, P04, P06, P07 |
| BD-ACT-028 | View minimized Audit evidence | `BD-PERM-VIEW-AUDIT-EVIDENCE` | Authorized Audit consumer | Yes | Strong verification for privileged consumer | Exact Workspace | Exact Business/resource where applicable | Audit Service authorizes records/fields | Exact purpose, record/query scope, current Permission, tenant filter | Return minimized permitted evidence | Wrong tenant/subject, title-only, unrestricted search, raw/secret request | Every lookup/export/query change | Audit lookup itself attributable where policy requires | No raw answers, Snapshot, credentials, keys; minimized identifiers | P03, P05, P06, P08 |
| BD-ACT-029 | Investigate Security event | `BD-PERM-SECURITY-INVESTIGATE` | Security Operator | Yes | Strong verification | Exact affected Workspace(s) | Exact affected Business/resource where known | Security owns investigation; canonical owners retain writes | Approved incident/event, purpose, least scope, current operator grant | Inspect minimized evidence; initiate approved containment requests | No event/case, expired elevation, target expansion, canonical write attempt | Every access/scope expansion/containment request | Investigator, case/event, scope, action, result | Content minimized; cross-tenant view requires separate authority | P03, P06, P07, P08 |
| BD-ACT-030 | Access backup copy | `BD-PERM-BACKUP-ACCESS` | Backup Operator | Yes | Strong verification | Exact included Workspace set | Exact included Business/data-owner set | Platform Operations/data owners authorize backup access | Approved procedure/change, purpose, environment, exact backup, JIT/elevation, Audit | Access only required backup metadata/data under procedure | BD-DENY-025/027; no approval; tenant expansion; browsing purpose | Every access/export/read | Operator, approver, backup, tenant set, purpose, result | No general browsing/export; protected data remains scoped | P03, P05, P06, P07, P08 |
| BD-ACT-031 | Restore backup | `BD-PERM-BACKUP-RESTORE` | Backup Operator plus independent validator | Yes | Strong verification | Exact restore Workspace set | Exact restore Business/data-owner set | Platform Operations performs; data owners validate activation | Approved restore, integrity/version, environment, tenant scope, tombstone/suppression plan, separation | Restore remains quarantined until reconciliation passes | BD-DENY-025/027; missing suppression/validation; wrong environment/scope | Start, material step, activation | Full restore/approval/reconciliation/result history | Minimum operator exposure; no post-restore bypass | P03, P05, P06, P07, P08 |
| BD-ACT-032 | Reapply deletion tombstone after restore | `BD-PERM-BACKUP-RESTORE` | Independent data-lifecycle validator/service | Approved service/operator identity | Strong verification for human | Exact restored Workspace set | Exact restored Business/data scope | Data-lifecycle owners validate suppression before activation | Restore state, authoritative tombstones/holds, exact scope, independent evidence | Suppress deleted data and certify activation eligibility | Missing/stale tombstone, uncertain scope, same actor self-approves where separation required | Before restored data becomes active | Suppression/reconciliation/validator/result | No deleted content disclosed; identifiers minimized | P03, P05, P06, P07, P08 |
| BD-ACT-033 | Perform administrative maintenance | `BD-PERM-ADMIN-MAINTENANCE` | Authorized owner/operator/service | Yes | Strong verification for human | Exact Workspace/tenant set | Exact Business/resource set | Canonical/operations owner controls each action | Approved change/case, JIT scope/time, owner contract, separation, Audit availability | One bounded maintenance action | BD-DENY-015/021/022/027/029; wildcard, no Audit, owner bypass | Every action and scope change | Requester/operator/approver/purpose/scope/result/post-review | No general browsing or secret/raw-content access | P03, P06, P07, P08 |
| BD-ACT-034 | Reassign or override claim | `BD-PERM-OVERRIDE-CLAIM` | No actor by default; future exact recovery authority only | Yes | Strong verified identities for all required parties | None unless separately established | None | Core Identity/claim owner only; support cannot own | **Prohibited until P04/P06 expressly approve authority, proof, dual control, scope, evidence, limits, and recovery** | Default outcome is denial; future policy may permit one governed correction | Any current request, title, token, support case, emergency access, missing Audit | At request and owner execution | Denied/attempted override; future permitted action fully audited | Reveal no session content or other User identity | P03, P04, P06, P07 |
| BD-ACT-035 | View raw Discovery content through support tools | `BD-PERM-VIEW-RAW-DISCOVERY-CONTENT` + `BD-PERM-SUPPORT-ACCESS` | No actor by default; future exceptional approved operator only | Yes | Strong verification | Exact Workspace if claimed/established | Exact Business only if separately relevant | Discovery/data owner controls fields; support never owns content | **Prohibited by default; P03/P06 must establish exceptional necessity, legal basis, case, fields, approval, time, masking, Audit, and review** | Default outcome is denial; exceptional future view is minimum fields only | No case/purpose/authority, title-only, cross-tenant search, credential/secret, ordinary support need | Every field access and scope/time change | Full access/approval/result; never record raw value in Audit | Credentials always prohibited; content strictly field/purpose limited | P03, P05, P06, P07, P08 |

## 9. Permission Matrix

Matrix values mean:

- **Allow:** the bounded public/own-session action may proceed only after its non-role control,
  lifecycle, purpose, and abuse conditions pass;
- **Conditional:** no persona title grants access; the exact logical permission and every condition
  in §§7–8 must pass;
- **Deny:** the persona/action combination is denied by this policy; and
- **Not applicable:** the persona is not an actor for that operation.

| Action ID | Logical permission | Anonymous visitor | Verified User | Workspace Owner | Workspace Admin | Employee | View-only User | Multi-Workspace User | BA Reviewer | BA Approver | DNA Publisher | Support Operator | Security Operator | Privacy/Legal Operator | Backup Operator | System Service | Scope | Conditions | Default result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-ACT-001 | `START-DISCOVERY` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Not applicable | Public/temporary | Acting as visitor; disclosure, validation, abuse policy | Allow only as bounded public action |
| BD-ACT-002 | `RESUME-OWN-SESSION` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Not applicable | Own session | Valid control, lifecycle, integrity, expiry | Conditional |
| BD-ACT-003 | `SUBMIT-OWN-ANSWER` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Not applicable | Own session | Valid control/state/input; title irrelevant | Conditional |
| BD-ACT-004 | `GENERATE-OWN-PREVIEW` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Own session | Valid state/purpose/source; service only narrow inference duty | Conditional |
| BD-ACT-005 | `ABANDON-OWN-SESSION` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Own session | Valid control or approved lifecycle service | Conditional |
| BD-ACT-006 | `DELETE-UNCLAIMED-SESSION` | Allow | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Conditional | Deny | Conditional | Own eligible session | Control/rights proof, unclaimed state, hold/retention policy | Conditional |
| BD-ACT-007 | `REGISTER-ACCOUNT` | Allow | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Conditional | Identity transaction | Core Identity and abuse policy | Conditional |
| BD-ACT-008 | `LOGIN` | Allow | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Conditional | Identity transaction | Core Identity proof/account/abuse policy | Conditional |
| BD-ACT-009 | `VERIFY-IDENTITY` | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | User identity | Core Identity policy; produces no target authority | Conditional |
| BD-ACT-010 | `CLAIM-OWN-SESSION` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Own session → User | Verified same User, continuity, eligibility, atomic/Audit | Deny |
| BD-ACT-011 | `CLAIM-OWN-SESSION` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Same claim | Same owner and operation; reconcile/idempotent retry | Deny |
| BD-ACT-012 | `SELECT-WORKSPACE` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Workspace | Explicit selector, active relationship, current action | Deny |
| BD-ACT-013 | `CREATE-WORKSPACE` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Deny | Core creation action | Exact Core authority; no title-derived grant | Deny |
| BD-ACT-014 | `SELECT-BUSINESS` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business | Explicit selector, Workspace ancestry, current access | Deny |
| BD-ACT-015 | `CREATE-BUSINESS` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Workspace/new Business | Current create authority through Core owner | Deny |
| BD-ACT-016 | `VIEW-IMPORT-PROPOSAL` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business/fields | Current read/field scope; no mutation implication | Deny |
| BD-ACT-017 | `PROPOSE-IMPORT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business/proposal | Claim, target, permission, confirmation, provenance | Deny |
| BD-ACT-018 | `REVIEW-CANDIDATE-FACT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Deny | Exact Business/item/batch | Separate current review permission and field scope | Deny |
| BD-ACT-019 | `ACCEPT-CANDIDATE-FACT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Deny | Conditional | Conditional | Deny | Deny | Deny | Deny | Deny | Exact Business/item | Explicit current accept permission and human decision | Deny |
| BD-ACT-020 | `REJECT-CANDIDATE-FACT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Deny | Conditional | Conditional | Deny | Deny | Deny | Deny | Deny | Exact Business/item | Explicit current reject permission and human decision | Deny |
| BD-ACT-021 | `CORRECT-CANDIDATE-FACT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Deny | Conditional | Conditional | Deny | Deny | Deny | Deny | Deny | Exact Business/item | Explicit current correct permission; provenance retained | Deny |
| BD-ACT-022 | `RETRY-IMPORT` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business/items | Current authority, unchanged meaning, reconciliation/idempotency | Deny |
| BD-ACT-023 | `VIEW-IMPORT-OUTCOME` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business/proposal | Current read/field/result scope | Deny |
| BD-ACT-024 | `PUBLISH-BUSINESS-DNA` | Deny | Conditional | Conditional | Conditional | Conditional | Deny | Conditional | Deny | Deny | Conditional | Deny | Deny | Deny | Deny | Conditional | Exact Business/DNA | Separate publish permission, complete review, Registry invariants | Deny |
| BD-ACT-025 | `REQUEST-DELETION` | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Exact subject/data | Verified control/identity, scope, rights/hold policy | Conditional |
| BD-ACT-026 | `LEGAL-HOLD` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Deny | Conditional | Exact hold/data scope | Approved legal authority, separation, review/release, Audit | Deny |
| BD-ACT-027 | `SUPPORT-ACCESS` + `APPROVE-RECOVERY` | Deny | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Conditional | Deny | Not applicable | Not applicable | Conditional | Exact support/recovery case | P04/P06 approval, requester proof, exact action, separation | Deny |
| BD-ACT-028 | `VIEW-AUDIT-EVIDENCE` | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Conditional | Exact tenant/records/fields | Exact purpose/query permission; field/tenant filtering | Deny |
| BD-ACT-029 | `SECURITY-INVESTIGATE` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Conditional | Deny | Conditional | Exact event/incident/tenant | Approved investigation, least scope, no canonical write | Deny |
| BD-ACT-030 | `BACKUP-ACCESS` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Conditional | Conditional | Conditional | Exact backup/environment/tenant set | Approved procedure, JIT, purpose, Audit | Deny |
| BD-ACT-031 | `BACKUP-RESTORE` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Conditional | Conditional | Exact backup/restore scope | Approval, integrity, suppression plan, independent validation | Deny |
| BD-ACT-032 | `BACKUP-RESTORE` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Conditional | Conditional | Exact restored data scope | Independent tombstone/hold reconciliation before activation | Deny |
| BD-ACT-033 | `ADMIN-MAINTENANCE` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Conditional | Conditional | Conditional | Conditional | Conditional | Exact action/resource/environment | JIT, owner authority, approval, separation, Audit | Deny |
| BD-ACT-034 | `OVERRIDE-CLAIM` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Exact future recovery case | Reserved and not grantable until P04/P06 approval | Deny |
| BD-ACT-035 | `VIEW-RAW-DISCOVERY-CONTENT` + `SUPPORT-ACCESS` | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Deny | Exact future exceptional case/fields | Reserved; P03/P06 exceptional authority required | Deny |

The matrix does not create role contents. Every `Conditional` cell means “possible only through a
separate exact grant and all owner checks,” never “granted because the column title applies.”

## 10. Explicit Deny Rules

These deny rules take precedence over an otherwise matching Business Discovery grant. Denial
responses reveal only the minimum safe category, and a denial never triggers a fallback target.

| Deny ID | Trigger | Decision | Response behavior | Audit event | Information-disclosure rule | Recovery path |
| --- | --- | --- | --- | --- | --- | --- |
| BD-DENY-001 | Claim attempted without Authentication | Deny claim | Return safe registration/login requirement | Claim denied; reason category only | Reveal no session/account existence or content | Authenticate through Core Identity |
| BD-DENY-002 | Claim attempted without current verified identity | Deny claim | Keep session unclaimed; fail closed | Claim denied—verification required | Reveal no other account/session detail | Complete approved verification under P04 |
| BD-DENY-003 | User attempts to claim a session not proved as their eligible session | Deny claim | Do not bind, transfer, or disclose | Claim ownership denial/security signal | Do not identify current/other owner | Approved same-User recovery or restart |
| BD-DENY-004 | Session expired, abandoned, deleted, invalidated, corrupted, or otherwise ineligible | Deny resume/claim/import | Return non-enumerating unavailable/restart outcome | Lifecycle/claim denial as policy requires | Do not expose former content/state detail | Start fresh or Path B; rights path where applicable |
| BD-DENY-005 | Session already claimed | Deny a new claim | Safe idempotent result only to same verified owner; otherwise deny | Replay/already-claimed outcome | Never reveal owning User or content | Same-owner reconciliation under P04 |
| BD-DENY-006 | Copied credential/token without sufficient continuity or ownership proof | Deny or step-up | Block content and binding pending approved proof | Claim/recovery risk event | Token possession reveals nothing additional | P04-approved continuity/recovery or invalidate/restart |
| BD-DENY-007 | Signed-in User differs from intended/established User | Deny claim/recovery | Warn safely; no transfer | Identity mismatch/claim denial | Do not disclose other account/session content | Switch to correct account through P04 or restart |
| BD-DENY-008 | Workspace would be inferred from last use, URL, Snapshot, title, analytics, first result, or system default | Deny target establishment | Require explicit safe selection | Target-selection denial/anomaly where material | Do not enumerate inferred Workspace | Present only authorized selector or create path |
| BD-DENY-009 | Active Workspace Membership/approved service relationship is absent | Deny Workspace/Business protected action | No fallback or partial access | Authorization denial with minimized scope/reason | Do not reveal tenant/resource existence | Select another authorized Workspace or obtain governed grant |
| BD-DENY-010 | Membership evidence is stale, unresolved, inconsistent, or beyond approved freshness | Deny or re-fetch | Re-resolve from canonical owner; never proceed silently | Significant stale decision/denial | Do not disclose target while unresolved | Fresh canonical evaluation |
| BD-DENY-011 | Required Permission is revoked, expired, missing, suspended, or inconsistent | Deny action | Preserve source/canonical state | Authorization denial and revocation-use signal where required | Reveal no unauthorized fields/existence | Governed grant/review; retry only after current decision |
| BD-DENY-012 | Requested Workspace differs from authorized/selected Workspace | Deny and clear unsafe context | Require explicit authorized reselection | Cross-context/tenant attempt | Do not reveal either unauthorized Workspace | Reselect safely; Security escalation if malicious |
| BD-DENY-013 | Requested Business differs from authorized/selected Business or ancestry is invalid | Deny and preserve source state | Require explicit target reselection | Business/ancestry denial | Do not reveal unauthorized Business/fields | Reselect through owner; correct context |
| BD-DENY-014 | Workspace, Business, Candidate Fact, claim, or related target is archived, suspended, deleted, moved, changed, unavailable, or not in an allowed lifecycle | Deny target action | No guessed replacement; return safe state | Lifecycle denial; significant changes audited by owner | Minimum lifecycle category only when authorized | Authorized reselection or owner-governed recovery |
| BD-DENY-015 | A role/persona title, hierarchy position, invitation, route, or UI state is the only claimed authority | Deny | Require exact action and scope decision | Privilege/bypass attempt where consequential | Do not disclose target/data | Obtain explicit governed grant if eligible |
| BD-DENY-016 | Action would read/write/import across Workspace tenants | Deny and alert | Fail closed before data access/write | Cross-tenant attempt and Security handoff | Reveal no other-tenant existence or content | None in same operation; incident review; correct tenant selection |
| BD-DENY-017 | Import lacks exact current Business-scoped Permission, selected target, valid ancestry, or permitted fields | Deny proposal/import/retry | Preserve claim, Snapshot, Candidate Facts, and canonical data | Import denied with target/action/result reference | Do not expose existing/proposed unauthorized fields | Obtain exact grant/reselect; revalidate and retry |
| BD-DENY-018 | Business DNA publication lacks separate publication Permission, complete governed review, provenance, valid state, or Registry invariants | Deny publication | Preserve review state; publish nothing | Publication denied with reason category | No unauthorized DNA/content disclosure | Complete review/obtain grant/correct provenance, then re-evaluate |
| BD-DENY-019 | Discovery, anonymous state, support, inference, analytics, or import orchestration attempts direct Business DNA write | Deny and treat as boundary violation | Block owner contract; preserve canonical DNA | High-severity boundary/security event | Do not echo payload/content | Security/architecture investigation; use Candidate Fact pipeline |
| BD-DENY-020 | Import/review would silently merge, overwrite canonical data, mass-accept without explicit review, or lose provenance | Deny affected items/action | Preserve current data and explicit prior outcomes | Import/review denial and attempted outcome | Show only authorized comparison fields | Field review, correction, explicit decisions, owner contract |
| BD-DENY-021 | Support access lacks approved case, verified requester, purpose, exact target/fields, time bound, Permission, approval, or Audit | Deny support access/action | Provide escalation path without content | Support denial/access attempt | Reveal no session/customer/tenant data | Establish P06-approved case and authority |
| BD-DENY-022 | Raw answer, Snapshot, inferred content, secret, or credential access lacks explicit exceptional authority | Deny | Mask/withhold; never place value in denial/Audit | Privileged-content access denial | Confirm no content/existence beyond safe category | P03/P06 exceptional process; credentials remain prohibited |
| BD-DENY-023 | Claim reassignment/override lacks an approved P04/P06 recovery policy and exact owner authority | Deny | No manual mutation or support bypass | Override attempt, actor/case/result | Do not identify bound User/content | Approved identity recovery or future governed policy |
| BD-DENY-024 | Deletion override/exception lacks verified authority, exact scope, approved retention/hold basis, separation, or Audit | Deny exception | Continue eligible deletion; preserve safe evidence | Exception denial/action trail | No protected legal/content detail to unauthorized actor | Privacy/Legal review under P03/P05 |
| BD-DENY-025 | Backup restore/access lacks exact backup/environment/tenant authority, integrity, tombstone/suppression, independent validation, or Audit | Deny or quarantine restore | Do not activate restored data | Backup/restore denial and control failure | No backup content or tenant enumeration | Correct procedure, reapproval, reconcile suppression, retry |
| BD-DENY-026 | Legal hold is asserted without approved legal authority, documented scope, review/release conditions, or separation | Deny hold action | Do not suspend deletion by assertion alone | Hold denial/attempt; Legal/Security escalation as needed | Minimize legal and subject details | Obtain P03/P05-approved authority/process |
| BD-DENY-027 | Consequential administrative, support, recovery, permission, hold, backup, import, or publication action cannot produce required Audit | Deny or remain explicitly unresolved | Never report successful commit without evidence | Audit availability/integrity failure event through safe path | No sensitive payload in fallback telemetry | Restore Audit capability/reconcile owner state before retry |
| BD-DENY-028 | Permission evidence is cached beyond approved freshness or changed between preview/selection and execution | Deny or re-fetch | Re-evaluate owner state; no TOCTOU continuation | Stale/changed authorization outcome | Avoid revealing target change unless actor remains authorized | Fresh decision; repeat review where authority-sensitive |
| BD-DENY-029 | System service lacks workload identity, exact action, audience, purpose, tenant/resource scope, caller/actor distinction, current relationship, or replay protection | Deny service call | Reject before owner mutation; consider credential containment | Service authorization denial/security event | No target/tenant/internal detail beyond safe contract error | Correct grant/context; rotate/revoke if compromise suspected |
| BD-DENY-030 | Required decision input is missing, contradictory, unresolved, or subject to an active blocking deny | Deny | Fail closed; no implicit allow, fallback, partial privilege, or invented default | Significant denial with safe reason category | Minimum safe information only | Resolve through canonical owner/policy/Governance, then re-evaluate |

There are 30 deny rules. Deny outcomes themselves do not prove that a target exists, and repeated
denials remain subject to P06/P09 monitoring and abuse policy.

## 11. Separation of Duties

Separation is semantic and scope-aware. Merely assigning two titles, using two screens, or calling
two services does not establish independence if the same principal, credential, approval chain,
or conflict of interest controls both decisions.

| Duty boundary | Required separation | Must never be granted implicitly | Permitted relationship | Approval/Audit consequence |
| --- | --- | --- | --- | --- |
| Claim vs target authorization | Claim proves one User binding only; Workspace/Business selection and action Permission are new owner decisions | Claim must not include select/create/import grants | Same User may later request target access only through current evaluation | Claim and target decisions have distinct evidence/correlation |
| Candidate Fact review vs Business DNA publication | Review/accept/reject/correct belong to Business Architect; publication belongs to Registry | Reviewer/Approver role must not contain publication by implication; Publisher role must not contain review decisions | A person may hold separately approved grants only if policy permits and conflict review is explicit; high-risk cases may require distinct principals | Separate actions, grants, revalidation, versions, and Audit events |
| Support recovery vs Security investigation | Support serves a verified case; Security investigates threats | Support access must not confer investigation/cross-tenant search; investigation must not confer claim reassignment | Security may review minimized support evidence through exact event/case authority | Case purpose and incident purpose remain separate and attributable |
| Deletion processing vs legal-hold approval | Data owner executes eligible deletion; Privacy/Legal approves hold/exception | Processor/operator must not self-create legal basis or hold | Owner may pause only on an approved scoped hold | Apply/release/exception and deletion outcomes recorded separately |
| Backup restore vs deletion-suppression validation | Restore operator performs approved recovery; independent lifecycle owner/validator confirms tombstones/holds before activation | Restore access must not authorize suppression bypass or self-certification where separation is required | Automation may validate if independently controlled and attributable | Restore remains quarantined until separate validation evidence succeeds |
| Administrative maintenance vs Audit review | Operator performs one change; Audit/Security reviewer assesses evidence | Maintenance access must not modify/delete its Audit or self-close required review | Same team may participate only with distinct scoped responsibilities and evidence | Full action plus independent/post-use review for privileged changes |
| Policy ownership vs runtime execution | Human/Privacy/Security/domain authority approves policy; canonical owner executes it | Runtime operator/service cannot invent grants, exceptions, legal authority, or policy values | Approved versioned policy may be enforced automatically by the owner | Policy version/authority and execution result remain traceable |

The following combinations are specifically forbidden as implicit bundles:

- `CLAIM-OWN-SESSION` + any Workspace/Business/import Permission;
- `REVIEW/ACCEPT/REJECT/CORRECT-CANDIDATE-FACT` + `PUBLISH-BUSINESS-DNA`;
- `SUPPORT-ACCESS` + `OVERRIDE-CLAIM`, `VIEW-RAW-DISCOVERY-CONTENT`, cross-tenant search, or
  canonical write;
- `REQUEST-DELETION` + `LEGAL-HOLD` approval;
- `BACKUP-RESTORE` + suppression bypass or unreviewed activation;
- `ADMIN-MAINTENANCE` + alteration/deletion of authoritative Audit; and
- any customer role + Security, Legal, backup, support, or platform-wide service authority.

## 12. Delegation, Elevation, and Emergency Access

The Core Permission Model does not approve a general User-to-User Delegation feature. This catalog
does not create one. Until a later governed policy expressly approves Delegation, a User cannot
lend a grant, transfer a decision, re-delegate, share a session, or authorize another User by
assertion.

If a later approved policy introduces bounded Delegation or elevation for this scope, all of the
following are mandatory:

1. the grantor must currently possess authority to delegate the exact action and must not delegate
   more than that authority;
2. the delegate, action, Workspace, Business, target/resource, purpose, maximum duration, start,
   expiry, approval, re-delegation prohibition, and revocation path must be explicit;
3. delegation remains subject to every owner check, deny rule, lifecycle state, field filter,
   separation-of-duties rule, and execution-time revalidation;
4. delegation never transfers canonical ownership and never creates cross-tenant access;
5. temporary elevation and just-in-time access must be non-standing, purpose-bound, minimum-scope,
   approved where required, automatically expiring, revocable, monitored, and reviewed;
6. emergency/break-glass access requires an identified incident or safety purpose, strong
   Authentication, exact scope, separate approval where feasible, short policy-defined duration,
   conspicuous monitoring, authoritative Audit, automatic expiry, and mandatory post-use review;
7. break-glass cannot bypass verified identity, tenant isolation, canonical owner validation,
   Audit, Privacy/Legal constraints, legal hold authority, or deletion suppression;
8. no emergency or delegated access may permit a direct Discovery-to-Business-DNA write;
9. revocation/expiry takes effect at the next protected decision and forces revalidation; stale
   grants fail closed; and
10. grant, approval, use, denial, scope change, expiry, revocation, and post-use review are audited
    without raw content or secret credentials.

`BD-PERM-OVERRIDE-CLAIM` and `BD-PERM-VIEW-RAW-DISCOVERY-CONTENT` remain reserved, non-grantable
identifiers. Naming them makes denial and future review traceable; it does not authorize them.

## 13. Permission Freshness and TOCTOU Control

No prior UI, route, preview, selection, token, read model, Audit record, role label, or cached result
is sufficient proof for a later action. Stale evidence is denied or re-fetched from its canonical
owner; the operation never silently proceeds, and the safe denial avoids target enumeration.

| Revalidation point | Required current evidence | TOCTOU rule | Failure outcome | Audit/telemetry posture |
| --- | --- | --- | --- | --- |
| Claim execution | Verified User/account, session control/state/expiry, one-time claim state, Audit availability | Recheck atomically at commit | `claim_blocked`/invalidated; no binding | Attempt/result/reason category; no credential/content |
| Workspace creation | User/account state and Core create authority/policy | Core owner decides at creation commit | No Workspace created | Consequential attempt/result under Core policy |
| Business creation | Active Membership, exact Workspace, create Permission, Workspace lifecycle | Business owner checks immediately before create | No Business created; no Business Unit substitution | Attempt/result/Workspace reference |
| Workspace selection/use | Active Membership, selector visibility, Workspace lifecycle | Revalidate at selection and every protected downstream operation | Deny/reselect; no fallback | Significant selection/denial; tenant-safe telemetry |
| Business selection/use | Active Membership, Business relationship/ancestry/lifecycle and exact action | Revalidate at selection and each proposal/read/write | Deny/reselect; preserve source state | Target selection/denial reference |
| Import proposal | Claim/User, target, Membership, exact import Permission, Snapshot/source/current data, field confirmation | Recheck immediately before Business Architect intake | No proposal/partial canonical write | Import proposed/denied and per-item result |
| Candidate Fact review | Reviewer grant, target/item/batch/field visibility, current state | Recheck every retrieval and review action | Withhold fields/action | Review/denial as policy requires |
| Accept/reject/correct | Exact per-action grant, Business/item state, conflict/provenance, human intent | Recheck immediately before each item or explicit batch decision | No item mutation; return explicit denial | Separate decision/result per applicable item |
| Import retry | Current actor/service, target/action grant, prior outcome, idempotent operation meaning | Reconcile prior commit, then reauthorize before retry | Preserve committed outcomes; no duplicate | Retry/replay/reconciliation evidence |
| Business DNA publication | Publisher grant, Business/DNA state, complete review, provenance/version, Registry invariants, Audit | Registry rechecks immediately before publication commit | Publish nothing; preserve review state | Attempt/success/denial and published version |
| Deletion/rights action | Requester proof, exact subject/data scope, eligibility, retention/hold and owner state | Revalidate at request, decision, and each owner execution | No disclosure or incorrect deletion | Request/decision/owner result |
| Support recovery | Operator grant, requester proof, case/purpose/scope/time, approval, current User/session state | Recheck every access and recovery step | Deny/escalate; no reassignment | Case/operator/action/outcome |
| Legal hold apply/change/release | Legal authority, scope, policy version, approval, review/release state | Recheck at every hold transition and affected deletion/restore | No unapproved hold/exception | Authority/approver/scope/result |
| Backup access/restore | Operator/service, change approval, backup/environment/tenant scope, integrity, holds/tombstones, validator | Recheck access, restore start, material steps, and activation | Deny/quarantine; never activate unsuppressed data | Full access/restore/reconciliation history |
| Administrative maintenance | Operator/service, JIT grant, purpose, exact resource/tenant/environment, owner and Audit state | Recheck every action and scope/time extension | Deny/stop; preserve owner state | Operator/approver/purpose/action/result |

Significant denials include cross-tenant attempts, stale/revoked grants, claim mismatch, privileged
access, publication denial, restore suppression failure, and repeated bypass attempts. P06/P09 must
define their monitoring/alert thresholds without recording sensitive payloads.

## 14. Audit Requirements

### 14.1 Mandatory event inventory

| Audit event | When required | Minimum evidence | Prohibited content |
| --- | --- | --- | --- |
| Claim attempted | Every final claim request | Actor/User reference, session-safe reference, time, correlation, result pending | Credential, answers, Snapshot content |
| Claim succeeded | Atomic committed claim | User, safe claim/session reference, result, authority/policy version, correlation | Credential or questionnaire content |
| Claim denied | Consequential denial/block/replay/mismatch | Actor if known, safe reference, reason category, time/correlation | Other User identity, session content, secret |
| Target selected | Consequential Workspace/Business selection | Actor, exact authorized scope/reference, action, time/correlation | Unauthorized candidates/fields |
| Target denied | Wrong/stale/revoked/cross-context target attempt | Actor, safe target class/reference where permitted, reason category | Target existence/detail if unauthorized |
| Workspace created | Core owner commits creation | Actor/service, Workspace reference, authority source, result | Unnecessary registration/Discovery content |
| Business created | Core owner commits creation | Actor/service, Workspace and Business references, authority source, result | Raw Discovery content |
| Import proposed | Business Architect accepts proposal | Actor/service, Business, proposal/Snapshot/source versions, result/correlation | Raw answers by default; credential always |
| Candidate Fact reviewed | Material review/checkpoint | Reviewer, Business/item or batch reference, action/result | Unneeded value/content |
| Candidate Fact accepted | Each item or explicit authorized batch outcome | Approver, Business/item, source/provenance reference, result | Raw answer/content by default |
| Candidate Fact rejected | Each item or explicit authorized batch outcome | Approver, Business/item, minimized reason category, result | Raw rejected content by default |
| Candidate Fact corrected | Each correction | Actor, Business/item, source/provenance/version references, result | Secret or unnecessary prior/current value |
| Import failed | Per-item/batch consequential failure | Actor/service, Business/proposal/items, failure category, committed-outcome references | Sensitive payload/internal secret detail |
| Import retried | Every consequential retry | Actor/service, prior/new correlation, idempotent operation reference, result | Payload duplicate/raw content |
| Publication attempted | Every Registry publication request | Actor/service, Business/DNA/review/provenance versions, result pending | Raw questionnaire content |
| Publication succeeded | Registry commit | Actor/service, Business, published version, review/provenance references, result | Raw source content/credential |
| Publication denied | Registry denial | Actor/service, Business-safe reference, reason category, result | Hidden Business DNA fields |
| Deletion requested | Valid/attempted rights request as policy requires | Requester/subject-safe references, scope/categories, verification result, time | Raw content or excess identity proof |
| Deletion completed | Each owner/scope completion | Owner, subject/data scope, tombstone/evidence reference, result | Deleted content |
| Legal hold applied | Every valid hold | Authority, approver, exact scope, policy version, review conditions, time | Unnecessary legal/customer content |
| Legal hold removed | Release/expiry | Authority, approver, exact scope, prior hold, result/time | Unnecessary legal/customer content |
| Support access | Every access/action | Operator, case, verified purpose, exact scope/fields, approval, duration, result | Raw values by default; credentials/secrets always |
| Recovery action | Every support/Identity recovery step | Requester/operator, case, proof class, action, scope, result, correlation | Secret proof values/content |
| Backup access | Every privileged access/export | Operator/service, approval, backup/environment/tenant set, purpose, result | Backup data/content/credentials |
| Backup restore | Start, material step, reconciliation, activation/abort | Operator/service/approver/validator, backup/scope, tombstone/hold result, outcome | Restored content/keys |
| Administrative override | Attempt, denial, approval, execution, expiry | Requester/operator/approver, case/purpose, exact action/scope, result | Raw content/secrets |
| Permission grant | Creation or material change | Grantor/approver, grantee, logical action, exact scope/target, start/expiry, authority | Secrets/content |
| Delegation/elevation | Attempt/approval/use/scope change | Grantor, delegate, approver, action/scope/purpose/time, result | Sensitive resource content |
| Permission expiry | Automatic/manual expiry | Grant/grantee/action/scope, effective time, result | Content |
| Permission revocation | Requested/committed revocation | Revoker/approver, grantee/action/scope, reason category, effective time | Content |
| Post-use review | JIT/break-glass/privileged review completion | Reviewer, grant/use records, findings/result/follow-up | Raw customer content by default |

### 14.2 Audit invariants

Every authoritative Audit Record contains or safely references the action, accountable actor and
calling service where applicable, exact Workspace/Business/resource scope, target/subject, result,
safe reason category, timestamp, correlation/causation, source owner, and governing Permission or
policy version. Evidence is append-only or tamper-evident under the Audit owner; correction creates
a later record.

Audit access is itself Permission-controlled and tenant-scoped. Audit MUST NOT contain raw answers,
DiscoverySnapshot content, unnecessary inferred facts, secret session credentials, passwords,
tokens, keys, or service secrets by default. An exceptional content policy remains P03/P05/P06
work and cannot authorize credentials. Audit and ordinary logs/metrics/traces remain distinct.

## 15. Support and Administrative Access

Support and administrative access is deny-by-default and must satisfy all of the following before
any permitted action:

- an explicit approved case/change/incident linkage and purpose;
- strong current operator identity and exact logical action Permission;
- verified requester where a customer recovery or rights action is involved;
- exact tenant, Workspace, Business, session/User, resource, field, environment, and time scope as
  applicable;
- least privilege, masking/minimization, approval, separation, expiry, and revocation;
- full authoritative Audit and post-use review where required; and
- user notification where a later approved Privacy/Support policy requires it.

There is no general raw-content browsing. Support cannot manually reassign a claim, override
deletion, create legal authority, edit canonical Business facts, publish Business DNA, or search
across tenants. Cross-tenant Security or Legal work requires its own separate event/authority,
scope, approval, field filtering, and Audit; a support case is not sufficient.

## 16. System-service Permissions

A system service is a distinct non-human principal and never inherits a User, Workspace title, or
internal-network trust. Every service action requires:

1. approved workload identity and current service status;
2. exact calling service, target service, audience, purpose, environment, contract/version, and
   logical action;
3. exact Workspace, Business, target/resource, and caller/actor distinction where tenant data or a
   User-directed action is involved;
4. least privilege and no platform-wide wildcard;
5. no User impersonation unless a separately approved delegated-authority contract preserves the
   accountable User and is narrower than both User and service authority;
6. current owner authorization and revalidation at every protected execution;
7. purpose-bound credential/secret management, rotation, revocation, compromise response, and no
   secret value in telemetry or Audit;
8. replay, duplicate, idempotency, and confused-deputy protection;
9. correlation/causation and authoritative Audit for consequential actions; and
10. fail-closed behavior on missing identity, audience, scope, policy, owner, dependency, or Audit.

Services may orchestrate claim, selection, import, Audit, deletion, restore, or publication only
through their owners’ contracts. A service cannot review or approve a human-controlled Candidate
Fact, create a Permission, broaden tenant scope, or publish Business DNA merely because it is an
internal component.

## 17. Permission Requirement Register

These requirements are binding inputs to later policies and delivery artifacts. A specification,
contract, plan, task, test, or implementation choice may not weaken or silently merge them.

| Requirement ID | Binding Permission requirement | Primary owner | Downstream closure |
| --- | --- | --- | --- |
| BD-PERM-R001 | Authentication and Authorization MUST remain separate decisions for every protected operation. | Core Authorization / every owner | P04, contracts, tests |
| BD-PERM-R002 | Protected actions MUST default to denial unless every required decision input succeeds. | Core Authorization / every owner | Contracts, tests |
| BD-PERM-R003 | Role, persona, hierarchy, invitation, route, UI, and job title MUST NOT grant an action by themselves. | Core Authorization | Role mapping, tests |
| BD-PERM-R004 | Every privileged action MUST have an exact logical action decision; broad wildcard substitution is prohibited. | Core Authorization / action owner | Runtime naming, contracts |
| BD-PERM-R005 | Every target-sensitive action MUST resolve exact target/resource scope and its canonical owner. | Resource owner | Contracts, tests |
| BD-PERM-R006 | Workspace and Business scopes MUST remain distinct and canonical ancestry MUST be validated. | Workspace/Business owners | Contracts, tests |
| BD-PERM-R007 | No fallback tenant, Workspace, Business, Business Unit, resource, or target MAY be inferred after absence, ambiguity, or denial. | Discovery / resource owners | P04, specification, tests |
| BD-PERM-R008 | A multi-Workspace User MUST explicitly select one currently authorized Workspace and then an authorized Business or Core-owned creation path. | Workspace/Business owners | Specification, tests |
| BD-PERM-R009 | Final claim MUST require a current verified User identity from Core Identity. | Core Identity / claim owner | P04 |
| BD-PERM-R010 | Claim MUST authorize only the eligible session proved as the verified User’s own session. | Core Identity / claim owner | P04, tests |
| BD-PERM-R011 | Claim MUST bind only to User and MUST NOT create or grant Workspace, Business, Membership, Permission, subscription, entitlement, readiness, OS, import, publication, or operational authority. | Claim owner / Core owners | P04, contracts, tests |
| BD-PERM-R012 | Session/token possession, browser assertions, analytics, and client-provided identifiers MUST NOT be identity, tenant, target, or Permission proof. | Security / every owner | P04, P06, P09, tests |
| BD-PERM-R013 | Workspace/Business protected actions MUST require an active Membership or approved exact service relationship where applicable. | Core Authorization | Contracts, tests |
| BD-PERM-R014 | Missing, stale, unresolved, inconsistent, suspended, or revoked Membership evidence MUST fail closed. | Core Authorization | P04, contracts, tests |
| BD-PERM-R015 | Missing, stale, unresolved, inconsistent, expired, suspended, or revoked Permission evidence MUST fail closed. | Core Authorization / resource owner | Contracts, tests |
| BD-PERM-R016 | Authorization MUST be revalidated at every execution point in §13; preview/navigation/read decisions are insufficient for a later write. | Resource owner | Contracts, tests |
| BD-PERM-R017 | The canonical resource owner MUST perform the final action and invariant decision even after boundary or service checks succeed. | Every canonical owner | Contracts, tests |
| BD-PERM-R018 | Workspace and Business creation MUST occur only through their Core owners and exact creation authority; Discovery MUST NOT create them directly. | Workspace/Business owners | P04, contracts, tests |
| BD-PERM-R019 | Collection, field, selector, conflict, Audit, support, and result reads MUST be field-filtered and tenant-scoped to the exact permitted purpose. | Every reader/owner | P03, P06, contracts, tests |
| BD-PERM-R020 | Candidate Fact intake/review MUST remain Business Architect-owned and separate from Business DNA publication. | Business Architect / DNA Registry | Contracts, tests |
| BD-PERM-R021 | Review, accept, reject, correct, retry, view outcome, and publish MUST remain independently authorized action classes. | Business Architect / DNA Registry | Contracts, tests |
| BD-PERM-R022 | Partial acceptance MUST remain possible; a batch action MUST preserve explicit item scope, decisions, failures, and authorization. | Business Architect | Specification, contracts, tests |
| BD-PERM-R023 | Candidate Fact proposal, correction, review, retry, and publication evidence MUST preserve source/provenance/version integrity. | Business Architect / DNA Registry | P03, P05, contracts |
| BD-PERM-R024 | Silent merge, implicit mass acceptance, and canonical overwrite without explicit authorized field review MUST be denied. | Business Architect / canonical owners | Specification, contracts, tests |
| BD-PERM-R025 | Business DNA publication MUST require its separate current publication Permission, exact Business, complete governed review, provenance, Registry invariants, and Audit. | Business DNA Registry | P05, P06, contracts, tests |
| BD-PERM-R026 | Discovery, anonymous state, support, inference, analytics, and import orchestration MUST NOT directly write, overwrite, or publish Business DNA. | Business DNA Registry / Security | Contracts, tests |
| BD-PERM-R027 | Support access MUST be deny-by-default and require an approved case, requester proof where applicable, purpose, exact scope/fields, time, Permission, approval, and Audit. | Support Governance / Core Authorization | P03, P04, P06 |
| BD-PERM-R028 | Raw Discovery content through support/administrative tools MUST be denied by default; credentials/secrets are always excluded. | Data owner / Privacy / Security | P03, P06, P07 |
| BD-PERM-R029 | Claim override, deletion exception, legal hold, backup restore, and other administrative actions MUST require their separate owner policy, authority, approval, scope, separation, expiry/review, and Audit. | Human/Legal/Security/domain authorities | P03–P07 |
| BD-PERM-R030 | User-to-User Delegation MUST remain disabled until a later governed policy defines and approves every boundary in §12. | Core Authorization / Human authority | P04, P06 |
| BD-PERM-R031 | Temporary elevation, JIT, and break-glass MUST be least-privilege, non-standing, time/purpose/target-bound, revocable, monitored, audited, and post-reviewed. | Security Governance / Core Authorization | P06, P07 |
| BD-PERM-R032 | Support recovery and Security investigation MUST remain separate purposes and grants; neither implies claim reassignment or canonical write. | Support / Security / Core Identity | P04, P06 |
| BD-PERM-R033 | Deletion processing and legal-hold/exception approval MUST be separate, with approved legal authority controlling any suspension. | Privacy/Legal / data owners | P03, P05 |
| BD-PERM-R034 | Backup restore MUST remain quarantined until independently controlled deletion-tombstone/hold suppression is revalidated and audited. | Platform Operations / data owners | P05, P06, P07, P08 |
| BD-PERM-R035 | Every system service MUST use least-privilege workload identity, exact action/audience/purpose/environment, explicit tenant/resource scope, current owner revalidation, replay controls, and Audit. | Core Identity / Security / target owner | P06, P07, contracts, tests |
| BD-PERM-R036 | A service MUST NOT impersonate a User or receive broad tenant/platform access without a separately approved, narrower delegated-authority contract. | Core Authorization / Security | P04, P07, contracts |
| BD-PERM-R037 | Authorization and consequential action Audit MUST include minimized actor/service, exact scope/target, action, result, reason category, time, correlation, and authority source. | Audit / producing owners | P05, P06, contracts |
| BD-PERM-R038 | Audit MUST NOT contain raw answers, Snapshot content, unnecessary inferred facts, session credentials, tokens, secrets, or keys by default. | Audit / Privacy / Security | P03, P05, P06, P07 |
| BD-PERM-R039 | Permission grant, change, delegation/elevation, use where required, expiry, and revocation MUST be attributable and auditable. | Core Authorization / Audit | P05, P06 |
| BD-PERM-R040 | A blocking deny in §10 MUST override an otherwise applicable Business Discovery allow; unresolved context MUST NOT become access. | Core Authorization / every owner | Contracts, tests |
| BD-PERM-R041 | Denials, selectors, errors, and retries MUST avoid disclosing unauthorized account, session, Workspace, Business, Candidate Fact, DNA, Audit, backup, or support-case existence/content. | Security / every owner | P04, P06, P09, contracts, tests |
| BD-PERM-R042 | This catalog MUST NOT be interpreted as approval of runtime strings, role contents, APIs, schemas, middleware, specification, planning, or implementation. | Human Architecture Authority / Governance | All later gates |

There are 42 unique Permission requirements.

## 18. Downstream Dependencies

This catalog closes no blocker other than P02. Its rules constrain, but do not replace, the
following approvals and delivery artifacts.

| Downstream item | Status after this catalog | Permission input supplied | Required later closure evidence |
| --- | --- | --- | --- |
| `BD-RDY-P03` — Privacy/Legal | Open | Field/purpose restrictions; rights/hold/support/exception scopes; minimized Audit | Approved classification, legal basis, consent/notice, rights, secondary-use, operator/provider rules |
| `BD-RDY-P04` — Identity, Claim, and Recovery | Open | Verified own-session claim; claim-to-User only; recovery/override denial; account/continuity boundaries | Approved verification, continuity, recovery proof, claim states, support recovery, failure/Audit policy |
| `BD-RDY-P05` — Retention, Backup, Legal Hold, and Rights | Open | Deletion/hold duties, backup/suppression separation, evidence minimization | Approved schedules, rights workflow, hold authority, Audit lifecycle, backup access/restore/suppression policy |
| `BD-RDY-P06` — Observability, Logging, Analytics, and Support Access | Open | Denial/security/Audit events, support case/field/approval rules, privileged access review | Approved event/field allowlists, alerts, access/retention, support workflow, break-glass and incident handoff |
| `BD-RDY-P07` — Encryption and Key Management | Open | Service/operator/backup/credential boundaries and no-secret evidence rules | Approved encryption, key/secret custody, service credentials, rotation, revocation, recovery and incident controls |
| `BD-RDY-P08` — Residency and Jurisdiction | Open | Exact tenant/data/operator/backup scope and Legal authority dependencies | Approved jurisdiction, residency, transfer, processor, backup and support-location matrix |
| `BD-RDY-P09` — Abuse Prevention and Rate Limiting | Open | Public/claim/selector/permission-denial/service action classes and safe denial requirements | Approved risk dimensions, controls, thresholds/strategies, privacy constraints, monitoring, response and recovery |
| Feature Specification | Not authorized | Thirty-five actions, persona/target outcomes, deny rules, requirements and policy dependencies | Approved feature specification only after P03–P09 and other required policy inputs close |
| API/domain/data contracts | Not authorized | Owner, subject/action/target context, revalidation, Audit, idempotency and failure semantics | Approved versioned owner contracts without changing this policy meaning |
| Test Strategy | Not authorized | Positive/negative matrix, deny, tenancy, TOCTOU, SoD, support, service and Audit obligations | Approved risk-based authorization/security test strategy |
| Rollout and Operational Readiness | Not authorized | Grant/revoke/elevation review, monitoring, privileged access, restore, incident and residual control needs | Approved rollout/support/access-review/incident/rollback evidence |

Final runtime identifiers and role mappings remain later contract/policy work. They may refine
spelling and assignment mechanics but cannot merge actions, infer grants from titles, weaken
scope, or override this catalog’s deny/separation rules.

## 19. `BD-RDY-P02` Closure Disposition

`BD-RDY-P02` is closed at the Permission-policy level because this approved policy input:

- defines all 35 required action classes and their logical permissions, actors, owner conditions,
  scopes, preconditions, allowed outcomes, denials, revalidation, Audit, exposure, and dependencies;
- defines 34 distinct logical Permission identifiers without claiming final runtime strings;
- defines all 19 required subjects/personas and their default outcomes;
- defines all 13 target types, canonical owners, selectors, tenant rules, forbidden inferences, and
  revalidation requirements;
- provides a complete persona/action matrix with no title-based implicit `Allow`;
- defines 30 explicit deny rules and scoped deny precedence;
- defines mandatory execution-time freshness and TOCTOU controls;
- defines seven separation-of-duty boundaries and forbidden implicit combinations;
- bounds support, administrative, delegated/elevated, emergency, and system-service access;
- defines authoritative, minimized Audit requirements and grant/revocation traceability; and
- records every downstream blocker and closure dependency.

Closure is deliberately bounded. It does **not**:

- make policy readiness complete;
- close Privacy/Legal, Identity and Recovery, Retention and Backup, Observability and Support
  Access, Encryption and Key Management, Residency and Jurisdiction, or Abuse-Control blockers;
- create final runtime Permission strings, roles, direct grants, middleware, policy engine, API,
  schema, endpoint, UI, infrastructure, implementation mechanism, or global Delegation model;
- authorize a feature specification, Constitution Check, API/domain/data contract, implementation
  plan, task breakdown, test artifact, rollout, or planning activity; or
- authorize code, migrations, deployment, commercial/entitlement activation, readiness, OS
  configuration, or operational behavior.

## 20. Validation and Final Permission Statement

This catalog was checked against Accepted ADR-042, its Human Architecture Review, the synchronized
journey, Core Platform Architecture v1.1 Freeze, Core Permission/Data Ownership/Security models,
the approved Business Discovery Security Threat Model, and supporting Accepted ADRs. It preserves:

- Authentication/Authorization separation and default denial;
- verified own-session claim and claim-to-User only;
- explicit Workspace and Business selection with no fallback tenant;
- exact current target-scoped authorization and execution-time revalidation;
- denial on stale/revoked Membership or Permission;
- Business Architect Candidate Fact authority, human review, partial acceptance, and provenance;
- separate Business DNA publication and prohibition of direct Discovery publication;
- specialized, deny-by-default support/administrative/service authority and separation of duties;
- tenant-safe, content-minimized, tamper-evident Audit; and
- no specification, planning, code, commercial, entitlement, readiness, OS, or operational effect.

> **Conclusion:** BD-RDY-P02 is closed at the Permission-policy level. Policy readiness remains incomplete because Privacy/Legal, Identity and Recovery, Retention and Backup, Observability and Support Access, Encryption and Key Management, Residency and Jurisdiction, and Abuse-Control approvals remain outstanding. Specification, planning, and implementation remain unauthorized.
