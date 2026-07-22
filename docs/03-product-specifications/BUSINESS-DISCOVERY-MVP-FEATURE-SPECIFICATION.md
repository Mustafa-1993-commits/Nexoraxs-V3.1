# Business Discovery MVP Feature Specification

| Metadata | Value |
| --- | --- |
| Status | Approved Feature Specification Input |
| Readiness blocker | `BD-RDY-D01` |
| Product scope | Optional pre-registration Business Discovery MVP |
| Authority basis | Accepted ADR-042, Core Platform Architecture v1.1 Freeze, Business Discovery Security Threat Model, Business Discovery Permission Catalog, and Business Discovery Policy Readiness Pack |
| Product owner | Product Owner / Human Architecture Authority |
| Date | 2026-07-22 |
| Version | 1.0 |
| Implementation authorization | None |
| Planning authorization | None |
| Code impact | None |
| Supersedes | Nothing |
| Out of scope | Future post-MVP Discovery capabilities |

> **Governance boundary:** This document specifies product behavior. It does not define an API, schema, middleware, infrastructure, implementation plan, task list, or test implementation, and it does not authorize planning or implementation. Later artifacts must preserve every controlling boundary cited here.

## 1. Executive Summary

Business Discovery is an optional, additive, material pre-registration journey branch. It gives a visitor useful, explainable guidance before registration through a temporary, non-canonical `DiscoverySnapshot`. The existing account-first journey remains fully valid. A verified User may claim only their own eligible session, but claim grants no Workspace, Business, Membership, Permission, subscription, entitlement, readiness, OS, or operational authority. After claim, the User must explicitly create or select an authorized Workspace and Business. Accepted evidence enters Business Architect as provenance-bearing Candidate Facts for governed human review; Discovery never publishes Business DNA.

This specification translates the architecture and approved policy inputs into bounded MVP product behavior. It closes `BD-RDY-D01` at the governed Feature Specification level. It permits only the next governance activities—Constitution Check and API/domain/data contract definition. Implementation planning, task creation, and coding remain unauthorized.

## 2. Authority, Scope, and Interpretation

### 2.1 Controlling and supporting sources

| Authority level | Source | Controlling use in this specification |
| --- | --- | --- |
| Accepted ADR | [ADR-042 — Pre-Registration Business Discovery](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), especially “Decision,” “Journey Paths,” “Architecture Boundaries,” and “Governance and Implementation Gates” | Optional material branch; non-canonical session and Snapshot; claim-to-User; explicit target authorization; Candidate Fact pipeline; no implementation authorization |
| Human Architecture Review | [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md), especially “Executive Conclusion” and “Acceptance Criteria Evaluation” | Confirms ADR acceptance with no blocking architecture findings and preserves downstream gates |
| Architecture Freeze | [Core Platform Architecture v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), especially “Business Discovery Architecture Amendment” | Frozen journey, claim, ownership, authorization, privacy, commercial, readiness, and OS boundaries |
| Synchronized journey | [Genesis Customer Journey v1.1](../01-genesis/11-CUSTOMER-JOURNEY.md), especially “Optional Business Discovery-First Journey” and “Account-First Journey” | Both user paths and downstream sequence |
| Readiness evidence | [Business Discovery Readiness Validation](../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md), especially the Level 3 findings | Identifies `BD-RDY-D01` and the remaining delivery-definition gates |
| Security policy input | [Business Discovery Security Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md), especially §§9–16 | Threats, security requirements, trust boundaries, state checkpoints, and residual dependencies |
| Permission policy input | [Business Discovery Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md), especially §§6–15 | Logical actions, exact target scopes, default denials, revalidation, separation of duties, and Audit requirements |
| Consolidated policy input | [Business Discovery Policy Readiness Pack](../02-core-platform/security/BUSINESS-DISCOVERY-POLICY-READINESS-PACK.md), especially §§4–10 and §14 | Privacy, identity, retention, observability, encryption, residency, and abuse-control behavior |
| Core baseline | [Data Ownership](../02-core-platform/04-DATA-OWNERSHIP.md), [Permission Model](../02-core-platform/05-PERMISSION-MODEL.md), and [Security Model](../02-core-platform/08-SECURITY-MODEL.md) | Canonical ownership, explicit authorization, tenant isolation, Security, Audit, and observability rules |
| Supporting Accepted ADRs | [ADR-003](../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md), [ADR-005](../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md), [ADR-014](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md), [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md), [ADR-018](../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md), and [ADR-040](../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md) | Workspace/Business separation, Business DNA scope, human control, Business Architect governance, Core/OS readiness separation, and ownership boundaries |
| Design governance | [Design Philosophy](../10-design-intelligence/01-DESIGN-PHILOSOPHY.md), [Design DNA](../10-design-intelligence/02-DESIGN-DNA.md), [Design Patterns](../10-design-intelligence/05-DESIGN-PATTERNS.md), and [Design Quality Checklist](../10-design-intelligence/DESIGN-QUALITY-CHECKLIST.md) | Guided-density direction, explainability, full-state design, accessibility, responsive parity, and design-quality review expectations |
| Specification governance | [Repository Constitution](../../.specify/memory/constitution.md), [Feature Execution Standard](../11-execution/03-FEATURE-EXECUTION-STANDARD.md), and [Spec Kit Workflow](../11-execution/04-SPEC-KIT-WORKFLOW.md) | Required authority, ownership, Security, localization, compatibility, success, traceability, Constitution Check, and downstream delivery gates |

If this specification conflicts with an applicable Freeze or Accepted ADR, the higher authority controls and the affected requirement stops pending Governance reconciliation. This specification does not reinterpret proposal history as accepted authority.

### 2.2 Product intent

Business Discovery gives a visitor useful, explainable business guidance before registration while preserving:

- optional participation and an uninterrupted account-first path;
- human control over all proposed or inferred facts;
- temporary, purpose-limited, non-canonical Discovery state;
- strict tenant isolation and explicit target authorization;
- the Business Architect Candidate Fact workflow; and
- Business DNA Registry publication authority.

### 2.3 Design-direction approval

The approved MVP design direction is a bounded, guided-density experience that uses progressive disclosure, visible progress, explicit state and recovery messaging, and field-level review. It follows the repository Design DNA and existing guided-flow patterns; it does not approve a new design system, palette, typography, animation system, vendor, framework, or reusable pattern library. No redesign experiment or new Design Memory pattern is authorized by this specification.

The direction is approved only as feature behavior. Final visual composition remains a later design-system input and must not change the architecture, permissions, privacy choices, or acceptance criteria.

## 3. MVP Design Direction

### 3.1 Experience principles

1. **Value before registration.** A visitor can complete questions and see a useful preview before creating an account.
2. **Discovery is optional.** No person is pressured or forced into Discovery; account-first remains visible and usable.
3. **Explainability over opaque inference.** Every inferred proposal exposes its status and a user-understandable explanation or provenance summary.
4. **Progressive disclosure.** Ask only information needed for the current step and reveal complexity when it becomes relevant.
5. **No surprise canonical writes.** Temporary answers and proposals remain outside canonical Business state until explicit authorized import and owner processing.
6. **No silent merge.** Existing and proposed values are compared field by field; conflicts remain visible.
7. **No hidden consent.** Participation, temporary storage, claim/import, account terms, privacy notice, analytics, marketing, and future training/secondary use remain separate.
8. **No role-title privilege.** User-facing availability reflects current action- and target-scoped authorization, never title alone.
9. **Fail safely.** Uncertain identity, ownership, state, target, Permission, residency, or owner outcome blocks the consequential action.
10. **Recover without weakening Security.** Recovery never reduces identity proof, session control, tenant isolation, authorization, expiry, or Audit.
11. **Accessible by default.** Critical flows are keyboard-operable, semantically structured, focus-safe, and assistive-technology usable.
12. **Mobile and desktop parity.** The same decisions, disclosures, Security checks, and recovery paths are available at requirement level.
13. **Minimize sensitive data.** Collect, display, transmit, retain, and expose only the minimum required for the approved purpose.
14. **Make data status unmistakable.** The experience distinguishes user-provided facts, inferred facts, existing canonical facts, accepted Candidate Facts, and published Business DNA.

### 3.2 UX tone

Content must be clear, professional, reassuring, and non-technical for end users. Security and authorization blocks must be explicit enough to guide safe recovery without revealing another User, session, Workspace, Business, Permission, or protected state. The experience must use no coercion, scarcity pressure, obstructive skip pattern, disguised consent, or false promise that a preview is final truth.

### 3.3 Information and interaction direction

- Use a clear beginning, bounded question sequence, preview, identity handoff, target selection, proposal review, import outcome, and recovery structure.
- Show progress without promising an exact duration until the final question inventory is approved.
- Preserve entered answers when safely recoverable; never fabricate saved or imported success.
- Use explicit action labels such as “Continue to preview,” “Create account or log in,” “Claim my Discovery,” “Select Workspace,” “Review proposed facts,” and “Submit accepted facts.” Final localized wording remains deferred.
- Put the account-first and exit choices in understandable, reachable positions; skipping Discovery must not be punitive.
- Use field-level status labels and text/icon combinations rather than color alone.
- Confirm consequential actions and provide a visible result for claim, creation, import, deletion, and support escalation.
- On mobile, stack comparison content without hiding existing values, provenance, decisions, or errors; on desktop, additional space may improve comparison but must not add authority.

### 3.4 Canonical data-status vocabulary

| Status | Meaning shown to the User | Product behavior |
| --- | --- | --- |
| User-provided | Entered or corrected by the person in Discovery | Editable while eligible; remains temporary until accepted into the governed pipeline |
| Inferred | Proposed by an approved rule/model/source from submitted answers | Must be labeled, explained, correctable, rejectable, and non-binding |
| Existing canonical | Current value read from an authorized canonical owner | Read-only in Discovery review; unchanged until its owner accepts a governed change |
| Accepted Candidate Fact | A field proposal explicitly accepted for Business Architect intake | Still proposed evidence; not Business DNA and not canonical truth by acceptance alone |
| Published Business DNA | A governed Business-scoped publication from the Business DNA Registry | Downstream result; never written by Discovery |

## 4. Scope

### 4.1 In scope for the MVP

- Start an anonymous Discovery session.
- Answer guided questions, correct answers, and save bounded temporary progress.
- Resume an eligible session using approved session-control evidence.
- Generate and view a non-binding Discovery preview.
- Distinguish user-provided and inferred facts and explain inference.
- Register or log in through Core Identity and complete required identity verification.
- Claim one’s own valid Discovery session.
- Explicitly select or create an authorized Workspace through Core.
- Explicitly select or create an authorized Business through Core.
- Review field-level existing/proposed values and provenance.
- Accept, reject, or correct individual proposals, including partial acceptance.
- Submit accepted proposals to Business Architect as Candidate Facts.
- Show per-item import outcomes and safely retry eligible failed items.
- Abandon Discovery and delete eligible unclaimed session data.
- Recover from the supported interrupted, expired, denied, and partially completed states.
- Present purpose, privacy, storage, consent, retention, and rights information at relevant decisions.
- Emit the required minimized Audit and Security outcomes.
- Preserve the account-first journey.

### 4.2 Out of scope for the MVP

- Mandatory Discovery or replacement of account-first onboarding.
- Anonymous creation of canonical Workspace, Business, Membership, Permission, or organization state.
- Direct or automatic Business DNA publication.
- Automatic canonical overwrite or silent merge.
- Automatic subscription, plan, entitlement, billing, payment, readiness, OS setup/configuration, or operational-record creation.
- Advanced AI personalization or autonomous business creation.
- Unrestricted external enrichment, web research, scraping, or processor use.
- Training or model improvement from Discovery data.
- Cross-Business or cross-Workspace merge, bulk import, or automatic target choice.
- Automated legal, eligibility, commercial, or entitlement decisions.
- Intentional collection of unsupported special-category, regulated, or minors’ data.
- Offline mode or native mobile applications.
- Shared or collaborative anonymous sessions.
- Consultant, reseller, or multi-party ownership flows.
- Paid Discovery.
- Final Product Recommendation Engine redesign.
- Final question/field inventory, visual design, API, schema, infrastructure, or implementation design.

## 5. Personas and Outcomes

Exactly thirteen product personas are in scope for behavior definition. A persona describes a context, not a Permission grant; the [Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md), especially §§7–11, controls each privileged decision.

| Persona | Goals | Permitted actions | Prohibited actions | Key risks | Success condition |
| --- | --- | --- | --- | --- | --- |
| Anonymous visitor | Explore value before registration | Start, answer, preview, abandon, resume with valid control, delete eligible own unclaimed data | Claim, create canonical entities, import, review Candidate Facts, publish DNA, view canonical Business data | Credential theft, over-collection, coercive registration, loss of progress | Receives an explainable preview or exits safely without canonical effect |
| Verified User | Claim their own preview and continue onboarding | Claim own eligible session; select only authorized targets; use Core creation paths when allowed; propose import with exact authority | Claim another session; import by authentication alone; gain tenant authority from possession | Wrong-account claim, stale identity, implicit authority | Own session is safely claimed and next permitted action is clear |
| Multi-Workspace User | Choose the correct tenant and Business | View only authorized choices and explicitly select one Workspace then one Business | Use an inferred default or import across targets | Cross-tenant selection, remembered-context confusion | Correct authorized target is explicit and revalidated |
| Workspace Owner | Continue Discovery in a Workspace they administer | Only actions separately allowed by current action/target Permission | Treat title as create, import, review, publish, support, or override authority | Over-privilege from title | Allowed actions match exact Permission and target scope |
| Workspace Admin | Assist within their assigned authority | Only explicitly granted create/select/import/review actions | Automatic import, publication, support, or override authority | Role-title assumption | Each action is permitted or denied independently and audibly |
| Employee | Contribute only when explicitly authorized | Claim own session; any later action explicitly granted for exact target | Create/import/review/publish by default | Accidental privilege escalation | Default denial with safe path to request appropriate authority |
| View-only User | Understand available information without mutation | Only separately authorized reads | Create, import, review decision, correction, publication | UI exposing mutation controls or protected facts | Can view only approved fields and cannot mutate state |
| Business Architect Reviewer | Inspect authorized Candidate Facts and provenance | Review exact items/batches within authorized Business and field scope | Accept/reject/correct unless separately authorized; publish DNA | Hidden conflicts, excess field exposure | Can complete governed review without changing publication state |
| Business Architect Approver | Make explicit Candidate Fact decisions | Accept, reject, or correct exact authorized items; partial acceptance | Implicit mass acceptance, silent canonical edit, publication by approval alone | Bulk mistakes, stale target/Permission | Every item has an attributable explicit outcome |
| Business DNA Publisher | Publish governed Business DNA versions | Publish only after complete review, exact Business permission, provenance, and Registry validation | Accept anonymous/Discovery writes; publish incomplete or unauthorized facts | Boundary bypass, wrong Business | Registry publishes only a fully governed authorized version |
| Support Operator | Help recover a bounded case | Case-bound, purpose-bound, approved, least-privilege recovery action | Raw browsing, silent claim reassignment, canonical edit, tenant search, Security power | Support-assisted takeover, overexposure | Safe recovery or escalation occurs without weakened proof or hidden mutation |
| Security Operator | Investigate a scoped Security event | Access minimized incident evidence and request approved containment | Canonical Business/DNA writes; unrelated tenant access | Cross-tenant evidence exposure, privilege misuse | Incident is investigated with attributable, minimized evidence |
| Privacy/Legal Operator | Govern rights, classification, legal basis, and legal hold | Process approved rights/hold decisions within exact scope | General Business editing; unsupported hold or global Legal conclusion | Overbroad hold, rights disclosure to impostor | Decision is scoped, attributable, reversible where applicable, and owner-executed |

## 6. Primary User Journeys

The following twelve journeys are product narratives, not API sequences. Core owners remain responsible for canonical actions, and every protected step uses the [Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md).

### 6.1 Journey A — Discovery-first happy path

| Attribute | Specification |
| --- | --- |
| Preconditions | Visitor has not been required to register; Discovery is available for the applicable locale/jurisdiction; public abuse controls permit entry. |
| Trigger | Visitor chooses **Start Business Discovery**. |
| Steps | 1. Create a temporary anonymous session. 2. Present purpose/storage disclosure. 3. Capture guided answers. 4. Generate a non-binding preview. 5. Visitor chooses register or log in. 6. Core Identity authenticates and verifies the User. 7. User claims the eligible session. 8. User explicitly selects or creates an authorized Workspace. 9. User explicitly selects or creates an authorized Business. 10. Show field-level proposals, conflicts, provenance, and existing values. 11. User accepts, rejects, or corrects each relevant field. 12. Submit accepted evidence to Business Architect Candidate Fact intake. 13. Governed reviewers decide Candidate Facts. 14. A separately authorized publisher may publish Business DNA. 15. Recommendations and Product Hub remain downstream. |
| System responses | Display progress and state; explain inferred facts; confirm identity/claim outcome; show only authorized targets/fields; show per-item import outcome; never state that preview or acceptance is published truth. |
| User decisions | Continue or skip; answer or revise; create account/log in; consent to claim/import where required; choose Workspace and Business; accept/reject/correct each proposal. |
| Failure states | Invalid/expired session, identity incomplete, claim conflict, unavailable target, denied Permission, stale Snapshot, partial import, downstream failure, rate/abuse block. |
| Security checks | Session integrity/expiry/control; verified identity; atomic claim; explicit target selection; current Membership/Permission at execution; owner invariants; replay/idempotency; telemetry minimization. |
| Audit events | Claim attempt/result; consequential target creation/selection; import proposal and per-item outcomes; governed review decisions; publication attempt/result; deletion/recovery/administrative actions where applicable. |
| Completion criteria | Accepted evidence has an explicit Business Architect outcome; any Business DNA publication occurred only through its Registry; the User sees the next permitted step. |

### 6.2 Journey B — Account-first

| Attribute | Specification |
| --- | --- |
| Preconditions | Visitor elects not to use Discovery, Discovery is unavailable, or the session was skipped, abandoned, failed, expired, deleted, or unsupported. |
| Trigger | Visitor chooses **Sign Up / Login** or is safely routed to the normal entry path. |
| Steps | 1. Register or log in. 2. Create or select an authorized Workspace. 3. Create or select an authorized Business. 4. Continue to Business Architect. 5. Governed Business DNA publication. 6. Recommendations. 7. Product Hub. |
| System responses | Do not require a `DiscoverySnapshot`, claim, or import; do not penalize or hide normal onboarding; preserve ordinary owner authorization. |
| User decisions | Authenticate, choose authorized organization context, and complete Business Architect directly. |
| Failure states | Normal identity, target, authorization, or downstream failures independent of Discovery. |
| Security checks | Core Identity, Core Authorization, and owner checks for the account-first journey; no anonymous session is treated as proof. |
| Audit events | Existing account-first consequential events under their canonical owners. |
| Completion criteria | User reaches the permitted Business Architect/onboarding state without Discovery dependency. |

### 6.3 Journeys C–L — Recovery, target, import, and rights variants

| Journey | Preconditions and trigger | Steps and system responses | User decisions | Failure states | Security checks | Audit events | Completion criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **C — Abandon and resume** | Eligible anonymous session; User closes a tab, leaves, or chooses abandon/resume | Save only approved temporary progress; on resume validate secret control, state, integrity, expiry, invalidation, and abuse policy; an explicitly abandoned state may restart rather than silently resume according to later lifecycle detail | Resume, restart, abandon, delete, or use account-first | Missing control, expired/deleted/invalidated session, unsupported device continuity | `BD-SEC-R005`–`R016`; non-enumerating response; no merge/transfer | Minimized lifecycle/security event; no raw answers or credential | Eligible progress resumes safely, or a clear restart/account-first choice is shown |
| **D — Expired session** | Session passes approved expiry; resume/preview/claim attempted | Show expiry without revealing protected content; block resume/claim/import; offer restart, deletion/rights information where relevant, and account-first | Restart Discovery or continue account-first | Expiry evidence uncertain; retained evidence or hold affects deletion | Fail closed; invalidation; rights/hold policy; no token reuse | Expiry/denial and deletion outcome as required | No expired content is claimed or imported; safe alternative is available |
| **E — Wrong signed-in User** | Valid session-control evidence but authenticated User differs from the established claim/continuity context | Block claim; expose no session content or other identity; explain account mismatch generically; offer sign-out/re-authenticate or abandon/restart without transfer | Return to correct account flow, abandon, or use Path B | Attacker repeats attempts; account state uncertain | Current verified identity; continuity proof; replay/abuse detection; no support reassignment | Claim denial with minimized actor/reason/correlation | No cross-User binding; safe recovery requires approved proof |
| **F — Already claimed session** | Claim was already committed; same or different User retries | Reconcile authoritative claim and Audit; same owner may receive safe idempotent outcome; different User receives non-enumerating denial | Same User continues; other User restarts/account-first | Prior commit/Audit outcome uncertain | Atomic one-claim semantics; owner match; no replay transfer | Retry/replay/outcome | Exactly one User binding remains; no duplicate target/import authority |
| **G — Multi-Workspace target selection** | Claimed verified User has more than one authorized Workspace | Show only authorized choices; require explicit Workspace selection, then explicit Business selection/creation; never preselect a fallback; revalidate at use | Select one Workspace and one Business or use permitted Core create path | Stale Membership, revoked Permission, unavailable/moved/archived target | Exact ancestry and action/target scope; field filtering; execution-time revalidation | Consequential selection/denial and creation outcome | One explicit current authorized target is established, or import stays blocked |
| **H — Existing Business with conflicting facts** | Authorized existing Business selected; canonical values overlap proposals | Show existing and proposed values, source type, provenance, conflict status, and authorized fields; keep canonical data unchanged | Accept, reject, or correct each item; leave items undecided | Hidden/inaccessible field, stale canonical value/Snapshot, target/Permission changes | Field-level authorization; freshness; no silent merge; owner validation | Per-item review/import outcome; no raw answer by default | Every submitted item has an explicit authorized decision and provenance |
| **I — Partial acceptance** | Proposal contains multiple reviewable items | Allow independent item decisions; validate each accepted item; reject/correct/leave others; submit only accepted eligible items | Accept selected items and reject/correct/defer others | Batch action obscures scope; item validation/permission differs | Item/batch scope; revalidation per applicable decision; no implicit mass acceptance | Accepted/rejected/corrected/skipped outcomes per item | Committed items and non-committed items are distinguishable; no hidden write |
| **J — Failed import and retry** | Import was submitted and one or more items failed or outcome is uncertain | Reconcile prior owner and Audit outcomes; show committed/failed/skipped/duplicate status; retry only eligible failed items with same meaning, current target, and authority | Retry eligible items, revise/review stale items, or stop | Changed Snapshot/target/Permission, owner unavailable, uncertain commit, duplicate | Idempotency; freshness; current authorization; owner invariants; retry budget | Initial/retry correlation and per-item outcome | No duplicate or hidden write; unresolved items remain explicit |
| **K — Deletion request** | Session controller or verified requester asks to delete eligible data | Verify requester and exact scope; explain working-data, Audit/security evidence, backups, and legal-hold distinctions; owner executes eligible deletion/suppression | Confirm scope or cancel; supply approved proof where needed | Unverified requester, claimed/canonical owner scope, legal hold, policy exception | Rights verification; non-disclosure; legal authority; tombstone/restore suppression | Request, verification class, owner result, exception/hold without deleted content | Eligible working data is deleted/suppressed and outcome is explained accurately |
| **L — Support-assisted recovery** | Ordinary self-service recovery cannot establish a safe outcome; approved support path exists | Create/link exact case; strongly verify requester; limit operator scope/time/fields; require approval/separation where policy says; perform only the approved recovery step; escalate disputes | Supply proof, accept safe alternative, or stop/escalate | Ownership ambiguity, unsupported claim reassignment, expired authority, raw-content request | Deny by default; no manual reassignment; least privilege; full Audit; no canonical edit | Case, operator, approval, scope, action, result, correlation | Recovery succeeds without weakened proof, or remains blocked with a safe escalation record |

## 7. Functional Requirement Register

All 114 functional requirements are normative product requirements. “Must” describes required behavior, not implementation authorization.

### 7.1 Anonymous session — `BD-FR-001` through `BD-FR-010`

| ID | Requirement |
| --- | --- |
| BD-FR-001 | The product must allow an eligible visitor to start Discovery without registration and must keep account-first entry available. |
| BD-FR-002 | Starting Discovery must create only a temporary, purpose-limited anonymous session controlled by an opaque secret credential; the credential must not encode identity or authority. |
| BD-FR-003 | Session lifecycle and integrity must be server-authoritative; browser assertions about state, User, tenant, role, or Permission are untrusted inputs. |
| BD-FR-004 | Anonymous activity must create no canonical Workspace, Business, Business Unit, Branch, Membership, Permission, Business DNA, subscription, entitlement, readiness, OS configuration, billing, or operational record. |
| BD-FR-005 | The product must save only the minimum temporary answers, inference/provenance references, disclosure/consent evidence, and lifecycle/Security metadata required for Discovery. |
| BD-FR-006 | An eligible session may be resumed only after current control, integrity, lifecycle, expiry, invalidation, and abuse checks succeed. |
| BD-FR-007 | The product must apply an approved expiry policy and present an accurate expired state without disclosing protected content or session existence to an unauthorized requester. |
| BD-FR-008 | The product must support explicit invalidation following deletion, compromise, replacement, integrity failure, or approved containment. |
| BD-FR-009 | A visitor must be able to abandon Discovery without creating a canonical or commercial effect and must receive a clear account-first alternative. |
| BD-FR-010 | A session controller must be able to request deletion of eligible own unclaimed working data subject to verified control, retention, rights, backup, and legal-hold policy. |

### 7.2 Guided question flow — `BD-FR-011` through `BD-FR-020`

| ID | Requirement |
| --- | --- |
| BD-FR-011 | The product must present a guided sequence whose questions are tied to the approved preview purpose and final governed question inventory. |
| BD-FR-012 | Each question must identify whether a response is required, optional, unsupported, or conditionally applicable before the User is blocked by it. |
| BD-FR-013 | Input must be validated conceptually for required presence, supported type/shape, safe size/depth, encoding, and allowed purpose before expensive processing. |
| BD-FR-014 | Validation feedback must identify the affected field, describe the correction in understandable language, and preserve unrelated valid answers. |
| BD-FR-015 | The visitor must be able to move backward and correct an earlier answer while the session remains eligible. |
| BD-FR-016 | A change that invalidates later answers or inference must make those dependencies visible and require regeneration or renewed review rather than silently retaining stale output. |
| BD-FR-017 | Incomplete progress must remain explicitly incomplete; the product must not generate a misleading complete preview from missing required evidence. |
| BD-FR-018 | Unsupported answers must be handled through an explanatory fallback, safe omission, or account-first/assisted path and must not be coerced into a false classification. |
| BD-FR-019 | The flow must provide visible progress and current-state feedback without promising an unapproved completion time or exact step count. |
| BD-FR-020 | The flow must enforce approved payload, collection, cost, concurrency, and abuse boundaries while preserving accessible and legitimate use. |

### 7.3 Discovery preview — `BD-FR-021` through `BD-FR-030`

| ID | Requirement |
| --- | --- |
| BD-FR-021 | An eligible session must be able to generate a versioned, temporary, non-canonical `DiscoverySnapshot` preview from current answers and approved inference sources. |
| BD-FR-022 | The preview must clearly distinguish user-provided facts from inferred facts. |
| BD-FR-023 | Each inferred fact must provide a user-understandable explanation or source/provenance summary sufficient for meaningful review. |
| BD-FR-024 | The visitor must be able to correct the underlying answer or proposed value and regenerate affected preview content. |
| BD-FR-025 | The preview must state that it is a non-binding proposal and is not a Business, Business DNA, authoritative classification, subscription decision, entitlement, readiness state, OS configuration, operational record, or binding Recommendation. |
| BD-FR-026 | Preview generation must preserve the Snapshot revision and relevant source/model/rule/template versions needed for later provenance and freshness review. |
| BD-FR-027 | Preview retrieval must expose only the session controller’s eligible content and must use non-enumerating failure behavior. |
| BD-FR-028 | Unsafe, incompatible, poisoned, unsupported, or unavailable inference results must be withheld or identified as unavailable; the product must not fabricate a preview. |
| BD-FR-029 | Preview completion must not select a plan, grant paid access, create an entitlement, bypass Product Hub, mark readiness, configure an OS, or create operational data. |
| BD-FR-030 | The preview must offer clear next choices: register/log in to claim, revise answers, abandon/delete where eligible, or continue account-first without import. |

### 7.4 Registration and login handoff — `BD-FR-031` through `BD-FR-038`

| ID | Requirement |
| --- | --- |
| BD-FR-031 | The handoff to Core Identity must preserve only approved session continuity evidence and must not place raw answers, Snapshot content, or secret credentials in ordinary URLs or telemetry. |
| BD-FR-032 | Registration and login must remain Core Identity-owned and must not be implemented or redefined by Discovery. |
| BD-FR-033 | The product must require current identity verification before final claim and must not infer verification from account existence, browser state, or prior navigation. |
| BD-FR-034 | The handoff must make account switching or an identity mismatch visible before claim and must not reveal session content to the wrong signed-in User. |
| BD-FR-035 | Duplicate-account or duplicate-registration handling must route through Core Identity policy and must not create or merge identities from Discovery evidence. |
| BD-FR-036 | Incomplete verification must preserve a safe `registration_required` or verification-pending outcome; it must not claim or import the session. |
| BD-FR-037 | A failed or abandoned identity handoff must leave the visitor a safe recovery, restart, deletion, or account-first path according to current session policy. |
| BD-FR-038 | Account terms, privacy notice, temporary-storage acknowledgement, claim/import consent, marketing consent, analytics consent where required, and secondary-use consent must remain separately presented and recorded as applicable. |

### 7.5 Claim — `BD-FR-039` through `BD-FR-050`

| ID | Requirement |
| --- | --- |
| BD-FR-039 | Final claim must require a current verified User identity from Core Identity and valid session-control/continuity evidence. |
| BD-FR-040 | A User may claim only their own eligible, active, integrity-valid, unexpired, unclaimed session. |
| BD-FR-041 | Claim must atomically validate eligibility and create at most one session-to-User binding with the required durable outcome and Audit evidence. |
| BD-FR-042 | Claim retry must be idempotent and must return a safe deterministic outcome only to the same verified owner after authoritative reconciliation. |
| BD-FR-043 | Claim must resist replay, double claim, concurrent claim, and reuse; a committed owner outcome controls. |
| BD-FR-044 | Claim binds only to the User and must not bind automatically to a Workspace or Business. |
| BD-FR-045 | Claim must grant no Membership, Permission, subscription, entitlement, readiness, OS, import, publication, commercial, or operational authority. |
| BD-FR-046 | Token possession, URL/browser assertions, analytics identity, or client-provided User/tenant/role identifiers must not alone prove claim ownership. |
| BD-FR-047 | A wrong-account, copied-token, uncertain-identity, expired, invalidated, already-claimed, or ownership-ambiguous attempt must fail closed without protected disclosure. |
| BD-FR-048 | A partially completed, timed-out, rolled-back, or uncertain claim must reconcile owner state and Audit before another attempt; the product must not guess success. |
| BD-FR-049 | Claim denial must present a safe recovery, account switch, restart, support escalation, or account-first choice appropriate to the reason without weakening proof. |
| BD-FR-050 | Claim attempts, success, denial, block, retry, recovery, invalidation, and privileged intervention must produce minimized authoritative Audit evidence without the credential or questionnaire content. |

### 7.6 Workspace and Business target — `BD-FR-051` through `BD-FR-062`

| ID | Requirement |
| --- | --- |
| BD-FR-051 | After claim, the product must require explicit selection or permitted Core-owned creation of one Workspace before Business targeting. |
| BD-FR-052 | The product must show only Workspaces currently visible to the User for the exact selection purpose and must never infer a fallback from last-used state, URL, session, analytics, title, or single-result assumptions. |
| BD-FR-053 | Workspace creation must occur only through Core-owned contracts and exact current creation authority; Discovery does not create or own the Workspace. |
| BD-FR-054 | The product must then require explicit selection or permitted Core-owned creation of one Business whose canonical ancestry belongs to the selected Workspace. |
| BD-FR-055 | Business Unit must never be presented or used as a substitute for Business. |
| BD-FR-056 | Business creation must occur only through the Core Business owner and exact current Workspace-scoped creation authority. |
| BD-FR-057 | Multi-Workspace Users must select one authorized Workspace and one authorized Business; no cross-Workspace selection or import is permitted. |
| BD-FR-058 | Authentication, Workspace selection, Business selection, create authority, import authority, review authority, and publication authority must remain separate decisions. |
| BD-FR-059 | Membership and exact action-/resource-/target-scoped Permission must be current and revalidated at every consequential execution point. |
| BD-FR-060 | Missing, stale, revoked, suspended, expired, inconsistent, or unresolved Membership/Permission/context must deny the action or require safe reselection/refetch. |
| BD-FR-061 | Archived, suspended, deleted, moved, changed, unavailable, or unauthorized Workspace/Business targets must be denied or explicitly reselected through their canonical owner. |
| BD-FR-062 | Target selectors, errors, empty states, and results must not reveal unauthorized Workspace, Business, Membership, or protected field existence. |

### 7.7 Proposal review — `BD-FR-063` through `BD-FR-075`

| ID | Requirement |
| --- | --- |
| BD-FR-063 | The proposal review must require an explicit authorized Business target and must show only fields the current User may review for that purpose. |
| BD-FR-064 | Each reviewable item must distinguish proposed value, existing canonical value when authorized, source type, provenance summary, Snapshot/source version, and conflict status. |
| BD-FR-065 | The product must show a field-level comparison before an existing canonical field can be proposed for change. |
| BD-FR-066 | The User must be able to explicitly accept, reject, or correct each eligible proposal for which they have the corresponding action Permission. |
| BD-FR-067 | Partial acceptance must be supported; batch interaction must preserve each item’s target, decision, failure, and authorization. |
| BD-FR-068 | Rejection must prevent that proposal from import and must leave existing canonical data unchanged. |
| BD-FR-069 | Correction must preserve the distinction between original answer/inference and corrected proposed value and must retain applicable provenance. |
| BD-FR-070 | Undecided, inaccessible, invalid, stale, unsupported, or denied items must not be treated as accepted. |
| BD-FR-071 | Conflicts with canonical Business facts, current Candidate Facts/drafts, and published Business DNA must be identified without exposing unauthorized fields. |
| BD-FR-072 | The product must prohibit silent merge, implicit mass acceptance, newest-wins, Discovery-wins, and automatic canonical overwrite. |
| BD-FR-073 | A changed Snapshot, source version, canonical value, target, Membership, or Permission must cause affected items to be refreshed, withheld, or separately reviewed before submission. |
| BD-FR-074 | Review actions must remain separate from Business DNA publication; reviewer or approver status does not imply publish authority. |
| BD-FR-075 | The review must provide a pre-submission summary of accepted, rejected, corrected, unresolved, skipped, and blocked items and the exact target. |

### 7.8 Candidate Fact import — `BD-FR-076` through `BD-FR-087`

| ID | Requirement |
| --- | --- |
| BD-FR-076 | Import must require an explicit final User submission after field review; preview completion or claim must never auto-import. |
| BD-FR-077 | Import must require current `BD-ACT-017` propose-import authority for the exact selected Workspace, Business, proposal, and applicable items. |
| BD-FR-078 | Accepted evidence must enter only through Business Architect’s governed Candidate Fact intake and must remain proposed evidence rather than truth. |
| BD-FR-079 | Candidate Fact input must preserve user-provided/inferred/corrected classification, Snapshot revision, governed source versions, target, actor, and claim/import correlation as provenance. |
| BD-FR-080 | Discovery, inference, import orchestration, support, and analytics must never write, overwrite, or publish Business DNA directly. |
| BD-FR-081 | Existing canonical data must remain unchanged until its canonical owner accepts a separately authorized, reviewed change through its governed contract. |
| BD-FR-082 | Import must report accepted, rejected, corrected, failed, skipped, duplicate, stale, and withheld outcomes per applicable item. |
| BD-FR-083 | Import and retry must be idempotent for the same actor/service, exact target, Snapshot/source version, normalized proposal, and operation meaning. |
| BD-FR-084 | Partial failure must preserve committed item outcomes, expose a recoverable explicit state, and prevent duplicate or hidden writes on retry. |
| BD-FR-085 | A retry must reconcile the prior owner outcome, revalidate current target/Permission/freshness, honor retry and abuse policy, and retry only eligible items. |
| BD-FR-086 | A stale, incompatible, poisoned, or unsupported Snapshot/source must be withheld, regenerated, corrected, or separately reviewed; it must not be silently imported. |
| BD-FR-087 | Business DNA publication remains a downstream `BD-ACT-024` action requiring separate current Permission, completed governed review, exact Business scope, valid provenance, Registry invariants, and Audit. |

### 7.9 Deletion and rights — `BD-FR-088` through `BD-FR-094`

| ID | Requirement |
| --- | --- |
| BD-FR-088 | An eligible unclaimed session controller must be able to request deletion of temporary working data without first creating an account where approved policy permits. |
| BD-FR-089 | Rights and deletion requests must verify the requester and exact data scope without revealing data existence or content to an unverified requester. |
| BD-FR-090 | The product must explain the difference between deleted eligible working data, retained minimized Audit/Security evidence, temporary backup persistence, and an approved legal-hold exception. |
| BD-FR-091 | Raw rejected content must not be retained indefinitely; only approved minimized decision evidence may remain for Audit, idempotency, duplicate prevention, or permitted suppression. |
| BD-FR-092 | Retained evidence must exclude raw session credentials, keys, secrets, and unnecessary questionnaire content. |
| BD-FR-093 | A deletion outcome must produce minimized proof and the suppression/tombstone evidence required to prevent reactivation after restore without retaining deleted content. |
| BD-FR-094 | Legal hold or deletion exception must require separate approved authority, exact scope, reason, approval, review/release conditions, and Audit; the UI must not imply that a User or support operator can override it. |

### 7.10 Recovery — `BD-FR-095` through `BD-FR-106`

| ID | Requirement |
| --- | --- |
| BD-FR-095 | Browser refresh and accidental tab closure must resume only from current eligible server-authoritative state and valid control evidence. |
| BD-FR-096 | Lost browser state must not be recovered by weakening identity/session proof or by exposing session content through lookup. |
| BD-FR-097 | An expired, deleted, abandoned, or invalidated session must block claim/import and present safe restart, rights, or account-first options as applicable. |
| BD-FR-098 | An account created but not yet verified must remain unable to claim until current verification succeeds. |
| BD-FR-099 | A verified User whose claim was interrupted must receive a reconciled idempotent outcome or a safe explicit block—not a guessed success. |
| BD-FR-100 | An already-claimed session must never transfer on retry; the same owner may receive only the reconciled safe result. |
| BD-FR-101 | Duplicate registration or identity ambiguity must be handled by Core Identity policy and must not merge or reassign Discovery state. |
| BD-FR-102 | A copied credential or different signed-in account must not satisfy ownership; the product must block and offer only approved safe recovery. |
| BD-FR-103 | An interrupted or partial import must expose item outcomes and permit only authorized, fresh, idempotent retry. |
| BD-FR-104 | Revoked Permission or invalid target during recovery must deny the write and require safe reselection, permission resolution, or abandonment. |
| BD-FR-105 | Support-assisted recovery must be case-bound, requester-verified, least-privilege, time-/scope-limited, approved where required, fully audited, and unable to silently reassign claim or edit canonical data. |
| BD-FR-106 | Every recovery route must preserve identity proof, ownership proof, tenant isolation, target authorization, expiry, owner invariants, and Audit. |

### 7.11 Observability and support — `BD-FR-107` through `BD-FR-114`

| ID | Requirement |
| --- | --- |
| BD-FR-107 | User-facing errors must identify a safe next action while avoiding disclosure of another account, session, tenant, target, field, Permission, or policy threshold. |
| BD-FR-108 | Ordinary logs, metrics, traces, analytics, alerts, diagnostics, and support views must use approved allowlists and exclude raw answers, Snapshot content, sensitive inferred facts, secret credentials, tokens, keys, and unnecessary User identifiers. |
| BD-FR-109 | Authoritative Audit must remain separate from ordinary telemetry and must cover the consequential actions defined by Security and Permission policy. |
| BD-FR-110 | Correlation identifiers must be opaque, non-secret, purpose-bound, and must never act as identity, tenant, session-control, or authorization proof. |
| BD-FR-111 | Security monitoring must distinguish original, duplicate, retry, replay, cross-User, cross-tenant, stale-Permission, support, privileged, deletion, hold, backup, and abuse outcomes with minimized evidence. |
| BD-FR-112 | Analytics must use a later approved purpose-bound event inventory, lawful basis/consent where required, aggregation/minimization, tenant isolation, retention control, and no marketing/training reuse. |
| BD-FR-113 | Support entry must create or link an approved case and must not expose raw content or permit claim reassignment, canonical edit, tenant-wide search, or policy override by default. |
| BD-FR-114 | If required Audit, owner, identity, authorization, privacy/residency, or integrity evidence is unavailable, the consequential action must fail closed or remain explicitly unresolved; the product must not fabricate success. |

## 8. Non-Functional Requirement Register

The 38 non-functional requirements are measurable through later contract, review, and test evidence without selecting final technologies or numeric service levels here.

### 8.1 Security — `BD-NFR-001` through `BD-NFR-005`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-001 | **Confidentiality and integrity:** Every protected trust-boundary flow must apply the approved in-transit, at-rest, secret, and integrity controls; an unprotected required flow remains unavailable. |
| BD-NFR-002 | **Fail-closed behavior:** Uncertain identity, ownership, session state, target, Membership, Permission, provenance, residency, owner outcome, or Audit commitment must not become an allowed consequential action. |
| BD-NFR-003 | **Input and content safety:** User and inferred content must remain untrusted display/processing data and must be protected against request-intent, injection, unsafe rendering, pathological payload, replay, and abuse threats. |
| BD-NFR-004 | **Least privilege:** Every human and service action must use exact purpose, action, audience, environment, tenant, target, field, and lifecycle scope; wildcard or title-derived access fails review. |
| BD-NFR-005 | **Secret safety:** Session credentials, service credentials, keys, and tokens must be absent from ordinary URLs, client-visible configuration, documentation values, telemetry, support tools, Audit payloads, prompts, and learning data. |

### 8.2 Privacy and data protection — `BD-NFR-006` through `BD-NFR-010`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-006 | **Purpose limitation:** Every collected or derived field must map to preview, verified claim, authorized Candidate Fact import, required Security/Audit, or an independently approved rights purpose. |
| BD-NFR-007 | **Sensitive by default:** Raw answers, inferred facts, and Snapshot content must receive potentially personal, confidential, or commercially sensitive handling until approved classification states otherwise. |
| BD-NFR-008 | **Consent separation:** Participation, storage, claim/import, account, privacy, analytics, marketing, and secondary-use decisions must be distinguishable, versionable, and independently enforceable where required. |
| BD-NFR-009 | **Lifecycle control:** Eligible data must support purpose-bound retention, expiry, deletion, backup suppression, and legal-hold handling without indefinite raw-content retention. |
| BD-NFR-010 | **Jurisdiction safety:** Processing whose region, processor, legal basis, transfer, residency, or notice authority is absent must remain disabled or fail closed until approved. |

### 8.3 Accessibility — `BD-NFR-011` through `BD-NFR-017`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-011 | Every critical action and decision must be operable by keyboard alone with logical order and no keyboard trap. |
| BD-NFR-012 | Interactive elements must expose programmatic names, roles, states, relationships, and instructions to applicable assistive technology. |
| BD-NFR-013 | Validation and errors must be associated with affected controls, announced at the appropriate time, and summarized without destroying entered work. |
| BD-NFR-014 | Focus must be visible, move predictably after navigation/dialog/error/result changes, and return safely when a temporary surface closes. |
| BD-NFR-015 | Status, source type, conflict, selection, required state, success, and failure must never rely on color alone and must meet the repository’s applicable WCAG 2.2 AA-or-stricter design requirement. |
| BD-NFR-016 | Progress, timeout/expiry, claim, target selection, review, import, and recovery must be understandable to screen-reader and magnification users and must permit sufficient response/recovery under approved policy. |
| BD-NFR-017 | Any abuse challenge or recovery mechanism must offer an accessible alternative; a visual, audio, motion, or CAPTCHA-only path is insufficient. |

### 8.4 Performance, availability, reliability, and recoverability — `BD-NFR-018` through `BD-NFR-024`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-018 | **Performance:** User actions must receive prompt progress, success, or recoverable-pending feedback under the later approved performance profile; no interface may appear to succeed while work is unresolved. |
| BD-NFR-019 | **Cost bounds:** Preview/inference, storage, owner calls, Audit, retries, and batch review must remain within later approved payload, concurrency, queue, and cost controls. |
| BD-NFR-020 | **Availability:** Discovery dependency failure must preserve account-first onboarding and safe access to applicable deletion/rights/recovery entry rather than broadening authority. |
| BD-NFR-021 | **Reliability:** Claim and import outcomes must be reconciled against their authoritative owners; retries must not create duplicate or conflicting writes. |
| BD-NFR-022 | **Recoverability:** Every supported interrupted state must expose either a safe continuation, retry, restart, account-first route, deletion request, or explicit blocked escalation. |
| BD-NFR-023 | **Dependency isolation:** Failure or cost pressure in inference, analytics, Audit, identity, owner services, or support tooling must be isolated and must not corrupt session, tenant, or canonical state. |
| BD-NFR-024 | **Safe degradation:** Degradation must preserve explicit state, tenant isolation, owner invariants, accessibility, Path B, and non-fabricated outcomes. |

### 8.5 Auditability, observability, tenant isolation, and minimization — `BD-NFR-025` through `BD-NFR-028`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-025 | **Auditability:** Consequential decisions must be attributable through authoritative, tamper-evident evidence containing minimized actor/service, target scope, action, result, reason category, time, correlation, and authority source. |
| BD-NFR-026 | **Observability:** Health, latency, state outcome, dependency, replay/duplicate, authorization denial, abuse, and privileged-access signals must be diagnosable without content or secret leakage. |
| BD-NFR-027 | **Tenant isolation:** Active state, selectors, caches, errors, telemetry, analytics, support, Audit, exports, backups, and restored data must preserve exact Workspace/Business/resource isolation. |
| BD-NFR-028 | **Data minimization:** Every product surface, owner flow, event, error, report, and support view must expose no more fields than its approved purpose and current authorization require. |

### 8.6 Internationalization, responsive behavior, and progressive delivery — `BD-NFR-029` through `BD-NFR-033`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-029 | English and Arabic must be first-class from first implementation, with complete translation paths and no hard-coded English-only control or error meaning. |
| BD-NFR-030 | All layouts and interactions must support LTR and RTL using logical direction; data comparison, progress, icons, focus order, and status relationships must remain semantically correct. |
| BD-NFR-031 | Mobile and desktop must provide equivalent decisions, disclosures, authorization, Security, error, accessibility, and recovery behavior; viewport size must not remove a required action or fact. |
| BD-NFR-032 | Browser-support and progressive-enhancement behavior must be defined later; an unsupported capability must fail explicitly and preserve a safe account-first or recovery route. |
| BD-NFR-033 | Locale, direction, formatting, and translated notice version must never become identity, tenant, authorization, or canonical-fact evidence. |

### 8.7 Idempotency, concurrency, supportability, maintainability, and leakage prevention — `BD-NFR-034` through `BD-NFR-038`

| ID | Requirement and qualitative evidence condition |
| --- | --- |
| BD-NFR-034 | Claim, import, retry, deletion, and other repeatable consequential actions must define later idempotency meaning and reconcile concurrent/uncertain outcomes before retry. |
| BD-NFR-035 | Concurrency conflicts must result in one authoritative outcome plus explicit duplicate, stale, partial, failed, or blocked status; last-write-wins is not an acceptable hidden default. |
| BD-NFR-036 | Supportability must use minimized correlation, state, dependency, and reason evidence; raw-content browsing, credential access, or silent mutation is not a diagnostic mechanism. |
| BD-NFR-037 | Later contracts and modules must preserve canonical owner, action, target, purpose, version, failure, retry, and observability semantics without creating shared ownerless business logic. |
| BD-NFR-038 | Contract, UI, analytics, support, and operational evidence must demonstrate that no raw answer, Snapshot content, credential, secret, key, or unauthorized tenant field leaks through normal or error paths. |

## 9. Conceptual Product State Model

These seventeen states are product checkpoints. They are not a final database enum, storage schema, or instruction to overload one aggregate. A later contract may split state across canonical owners while preserving these observable meanings.

| State | Entry condition | Allowed actions | Prohibited actions | Exit conditions | Security evidence | Audit requirement | User-visible status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anonymous_active` | Eligible temporary session created | Answer, revise, save, resume, preview when ready, abandon, delete eligible data | Claim without verification; canonical/target/import actions | Required evidence supports preview; expiry; abandon/delete/invalidate | Session control, integrity, lifecycle, abuse decision | Minimized lifecycle/Security signal only as required | Discovery in progress; temporary |
| `preview_ready` | Current answers produce a valid versioned Snapshot | View/explain/correct/regenerate; register/log in; abandon/delete | Treat preview as truth; create canonical entity; import | Identity handoff; answer/source change; expiry/invalidation | Valid session and Snapshot/source versions | Generation/retrieval outcome without content | Preview ready; non-binding |
| `registration_required` | User elects claim/import but lacks current verified identity | Register, log in, verify, return/abandon/account-first | Claim/import/target writes | Identity verified; abandonment; expiry | Identity handoff and continuity status | Identity-owned evidence; no content | Account/verification required to claim |
| `identity_verified` | Core Identity provides current purpose-appropriate verification | Begin claim; switch/confirm account; abandon | Assume target authority; import | Claim pending/claimed; verification becomes invalid | Verified identity reference and account match | Verification/claim linkage as policy requires | Identity verified; claim not yet complete |
| `claim_pending` | Atomic claim requested but authoritative outcome not yet reconciled | Wait, reconcile, idempotently retry when eligible | Start second semantic claim; select target/import as if claimed | Claimed, claim blocked, invalidated | Current identity, control, claim operation/correlation | Attempt and final reconciled outcome | Claim in progress or outcome being checked |
| `claimed` | One session atomically bound to one verified User | Explicitly select/create Workspace; abandon import; view own eligible proposal | Transfer claim; infer target; import without target/Permission | Target selected; deletion/rights flow; invalidation as policy permits | Claim owner, integrity, current User match | Successful claim | Discovery claimed by signed-in User; no tenant authority |
| `target_selected` | Explicit current authorized Workspace and Business context established | View authorized proposal; reselect; begin review | Cross-target import; rely on stale selection; infer Business Unit | Import review; target invalid/revoked/reselected | Membership/Permission and ancestry evidence | Consequential selection/denial as required | Selected Workspace and Business shown explicitly |
| `import_review` | Authorized field-level review is open for current target/Snapshot | Compare, accept, reject, correct, partially decide, refresh/reselect | Silent merge; implicit mass acceptance; direct publication | Submit accepted items; target/source/Permission changes; abandon | Field access, target, provenance, freshness, decision authority | Review decisions where consequential | Proposals awaiting explicit decisions |
| `import_submitted` | Explicit authorized Candidate Fact intake requested | Wait/reconcile; view safe progress | Modify submitted meaning; duplicate submit; claim success | Imported, partially imported, import failed | Exact target/action, idempotency meaning, owner correlation | Import attempt and owner outcome | Import submitted; outcome pending |
| `imported` | All submitted eligible items have committed explicit owner outcomes | View per-item outcome; continue governed review/downstream journey | Represent Candidate Facts as published DNA | Business Architect/DNA downstream state | Owner outcome, provenance, current read authority | Per-item results | Accepted evidence submitted; not automatically published |
| `partially_imported` | Some items committed and others failed/skipped/stale/denied | View outcomes; retry eligible items; revise/review others | Retry committed items blindly; hide partial result | Imported; import failed; remaining work abandoned | Per-item authoritative reconciliation | Each item and retry outcome | Some items submitted; others need attention |
| `import_failed` | No eligible submission completed or an explicit recoverable failure controls | View safe error; reconcile/retry if eligible; reselect/review/account-first | Claim success; unbounded retry; bypass owner/Audit | Import submitted/imported/partial; abandonment | Failure category, target/Permission freshness, retry budget | Failure and retry correlation | Import did not complete; safe next action shown |
| `expired` | Approved expiry applies | Restart; account-first; applicable deletion/rights information | Resume, preview, claim, import | New session only; deleted/held lifecycle continues separately | Expiry/invalidation evidence | Minimized expiry/denial as required | Session expired; no reuse |
| `abandoned` | Session controller explicitly abandons or policy records abandonment | Restart, account-first, eligible deletion | Silent resume/merge/claim unless later policy explicitly defines eligible reversal | New session; deleted/expired | Control and lifecycle result | Minimized abandonment evidence | Discovery stopped; no canonical effect |
| `invalidated` | Compromise, integrity failure, replacement, containment, or policy invalidates session | Safe restart, account-first, approved recovery/rights | Resume, preview, claim, import | New session or policy resolution; never implicit reactivation | Invalidation authority/reason category | Security/lifecycle evidence | Session no longer usable |
| `claim_blocked` | Claim cannot safely establish identity, control, eligibility, or authoritative outcome | Approved account switch, reconciliation, restart, self-service/support escalation | Transfer, bypass, target selection/import | Claim pending/claimed after proof; invalidated/expired/abandoned | Block reason class, no protected disclosure | Denied/blocked/recovery events | Claim unavailable; safe recovery guidance |
| `deleted` | Eligible working data deletion/suppression completes | View minimized completion statement where authorized; account-first/restart | Resume, preview, claim, restore to active without suppression controls | New session only; retained evidence/backups follow policy | Verified scope, owner outcome, tombstone/suppression | Minimized deletion proof; no deleted content | Eligible Discovery data deleted; exceptions explained |

## 10. Screen and Interaction Inventory

The following twenty-four MVP surfaces define information and behavior, not final visual design. Each must support English/Arabic, LTR/RTL, mobile/desktop parity, keyboard use, semantic structure, visible focus, associated errors, and non-color-only status. Every surface must have an explicit empty/no-eligible-data state, loading or unresolved state, and error/recovery state even when one is expected to be rare; the combined state column below specializes those requirements and later visual design may not omit them.

| # / surface | Purpose and primary actor | Required data | Allowed / prohibited actions | Empty, loading, and error states | Accessibility requirement | Security and privacy note |
| --- | --- | --- | --- | --- | --- | --- |
| 1. Discovery landing / entry | Explain optional value and entry choices; anonymous visitor | Purpose, temporary nature, account-first link, applicable disclosure | Allow start, account-first, privacy details; prohibit coercion or implied consent | Unavailable safely preserves account-first; loading must not hide choices; errors offer retry/Path B | Clear heading, link/button semantics, logical focus/order | No session created until explicit start; public response reveals no tenant/account state |
| 2. Question flow | Capture minimum answers; session controller | Current question, prior eligible answer, requirement status, progress | Answer, revise, next/back, abandon; prohibit unsupported coercion and hidden collection | Empty explains missing/conditional input; loading preserves answer; errors associate with field | Labels/instructions/error association; keyboard; progress semantics | Content treated as sensitive; no ordinary telemetry; validate and limit payload |
| 3. Progress / resume state | Continue eligible temporary work; session controller | Safe progress summary, lifecycle state, resume choices | Resume, restart, abandon/delete, account-first; prohibit cross-session selection | No eligible session uses non-enumerating restart; loading does not expose existence; errors are generic | Announce resume outcome and restored position; focus to current step | Validate control/integrity/expiry; credential never displayed or logged |
| 4. Preview | Show explainable non-binding result; session controller | User-provided/inferred labels, explanation, version, non-binding notice | Review, correct/regenerate, register/log in, abandon/delete; prohibit canonical/import claims | Empty identifies missing evidence; generation has progress; unsafe/unavailable result is withheld | Semantic groups, source labels, expandable explanations keyboard accessible | Minimum own content only; Snapshot absent from analytics/support; no commercial effect |
| 5. Register / login handoff | Move to Core Identity without losing approved continuity; visitor | Safe handoff state, account-first alternative, consent boundaries | Register/log in, return, abandon; prohibit raw content/credential URL transfer | Core unavailable preserves safe state/account-first; duplicate account routes to Identity | Focus and status continuity; accessible external/handoff indication | Core Identity-owned; no browser identity assertion trusted |
| 6. Identity verification pending | Explain verification requirement; authenticated User | Current safe verification status and Core-provided next action | Continue approved verification, retry later, cancel/account-first; prohibit claim | Expired/failed verification remains explicit and content-safe | Status announced; timeout/alternative accessible | No claim until current verification; evidence minimized |
| 7. Claim result | Show committed, denied, blocked, or reconciled claim result; verified User | Safe owner-relative outcome, correlation-safe support reference, next action | Continue to target, retry reconciliation, switch account, restart/support; prohibit transfer | Pending distinguishes unresolved from failure; wrong/already-claimed response non-enumerating | Focus to result heading; clear retry/escape path | No credential/content; claim-to-User only; Audit required |
| 8. Workspace selector | Explicitly choose authorized Workspace; claimed User | Authorized candidates and minimum identity fields | Select, use permitted create handoff, cancel/retry; prohibit fallback/default inference | Empty explains no eligible Workspace and safe create/request path; loading/denial reveal no others | Selection set labeled; current choice announced; keyboard navigable | Current Membership/action filters; tenant-safe enumeration; revalidate later |
| 9. Workspace creation handoff | Route exact creation to Core; authorized User | Core-owned requirements and return context | Enter Core creation, cancel, return; prohibit Discovery creation | Denied/unavailable response remains Core-owned and safe | Handoff, validation, focus return, and errors accessible | Exact create authority; Discovery receives only permitted outcome/reference |
| 10. Business selector | Explicitly choose authorized Business under selected Workspace; claimed User | Selected Workspace, authorized Businesses, lifecycle status as allowed | Select, use permitted create handoff, reselect Workspace; prohibit Business Unit substitution/fallback | Empty, loading, denied, moved/archived cases offer safe action without existence leaks | Grouped relationship and selection status programmatic | Exact ancestry, Membership, action/field scope; revalidate at import |
| 11. Business creation handoff | Route creation to Core Business owner; authorized User | Exact selected Workspace and Core-owned creation context | Enter Core creation, cancel, return; prohibit anonymous/Discovery creation | Denial/unavailability explicit; no synthetic success | Accessible validation and return status | Owner creates; exact Workspace-scoped create Permission; Audit under Core |
| 12. Proposal review | Make field-level human decisions; authorized User/reviewer/approver | Target, source type, proposed/existing value, provenance, conflict, state | View permitted fields; accept/reject/correct if separately authorized; prohibit implicit batch/silent merge | Empty means no eligible proposals; loading protects prior decisions; stale/denied fields withheld | Table/list alternative, labels, keyboard decisions, announced changes | Field filtering; current target/Permission; content absent from ordinary telemetry |
| 13. Conflict comparison | Explain a specific existing/proposed conflict; authorized reviewer | Existing value, proposal, source/provenance, freshness, accessible alternatives | Accept/reject/correct/return where permitted; prohibit hidden existing value exposure | Missing permission hides field; stale data requires refresh; errors preserve decision state | Comparison not dependent on layout/color; reading order explicit | Canonical data remains unchanged; exact field authorization |
| 14. Import confirmation | Confirm exact target and accepted item set; authorized importer | Workspace, Business, accepted/corrected items, skipped/rejected counts, consent/version | Submit, return/edit, cancel; prohibit auto-submit or publication claim | Empty accepted set prevents submit; stale/denied target returns to review | Summary landmarks, item navigation, clear consequence text | Execution-time revalidation; Candidate Fact only; no credential/raw answer in Audit |
| 15. Import result | Show per-item owner outcome; authorized actor | Accepted/rejected/corrected/failed/skipped/duplicate/stale statuses and safe references | Continue, view, retry eligible failures; prohibit blanket success | Pending/uncertain distinct from failed; downstream error preserves explicit state | Result summary and per-item statuses announced; focus to first issue | Read authorization; minimized data; Audit/correlation separate from telemetry |
| 16. Partial import result | Support recovery of mixed outcomes; authorized actor | Committed vs retryable vs blocked items, reasons, freshness/authority needs | Retry eligible, revise, reselect, stop; prohibit retry of committed items blindly | Empty retry set explains resolution path; changed target/Permission blocks | Group outcomes semantically; no color-only status | Reconcile owner outcomes; current authorization and idempotency |
| 17. Expired session | Explain unusable temporary state; visitor | Generic expiry explanation and safe alternatives | Restart, account-first, rights/deletion info as applicable; prohibit resume/claim | It is the terminal error surface; dependency failure must still preserve Path B | Clear heading, no countdown-only meaning, focus to primary safe action | No content or existence details beyond current safe context; credential invalid |
| 18. Claim denied | Explain safe denial/recovery; verified User | Generic reason category and permitted recovery actions | Retry reconciliation, account switch, restart/support; prohibit override/transfer | Uncertain outcome remains pending/blocked, not denied success | Error announced without stealing focus prematurely; actions labeled | Non-enumerating; minimized Audit; abuse controls |
| 19. Wrong account | Prevent cross-User claim; authenticated User | Current-account cue and generic mismatch state | Sign out/re-authenticate, abandon/restart, account-first; prohibit revealing other account/session content | Identity system unavailable blocks claim | Account-switch warning programmatic and explicit | Current verified identity; no content preview; no support reassignment |
| 20. Already claimed | Reconcile one-time claim; verified User | Safe same-owner outcome or generic denial | Same owner continue; other User restart/account-first; prohibit second binding | Uncertain owner result triggers reconciliation | Outcome and next action announced | Atomic owner state controls; replay detection/Audit |
| 21. Deletion confirmation | Confirm eligible scope and consequences; session controller/verified requester | Data categories, eligibility, retained minimized evidence, backups/hold caveats | Confirm/cancel; follow proof flow; prohibit unverified disclosure/hold override | Ineligible/held scope explains safe category; owner unavailable remains pending | Confirmation purpose, consequences, and result accessible | Exact requester/scope proof; no deleted content in completion evidence |
| 22. Recovery entry | Route self-service or approved escalation; affected User | Current safe state/reason, approved options, case reference if created | Retry, account switch, restart, request deletion/support; prohibit weak proof | No safe automated recovery gives explicit blocked/escalation state | Options and required evidence understandable; no inaccessible challenge-only route | Recovery never weakens identity/ownership/authorization; rate controlled |
| 23. Privacy / consent disclosure | Present purpose-specific choices; visitor/User | Current notice/consent type, version, purpose, consequences, links | Acknowledge/accept/decline/withdraw where applicable; prohibit bundled marketing/training inference | Missing required notice/basis disables affected processing; other paths preserved where lawful | Plain language, headings, keyboard controls, language/version visible | Separate records; minimized evidence; jurisdiction selection approved later |
| 24. Support escalation entry | Create bounded recovery/support case; requester | Purpose, exact issue/scope, disclosure, minimum proof, case status | Request escalation, cancel, view safe status; prohibit raw-content upload where unnecessary or override request | Support unavailable gives safe later/self-service route; denied access generic | Form/error/status accessible; alternatives to unavailable channels | Deny by default; case/purpose/scope/time/Audit; no claim reassignment/canonical edit |

## 11. Conceptual Validation Rules

| Validation area | Valid condition | Invalid/stale condition | Required product response | Deferred contract input |
| --- | --- | --- | --- | --- |
| Required answers | All purpose-approved required evidence for the current branch is present | Missing, blank, conditionally invalid, or contradicted | Identify field and correction; preserve valid work; do not claim completeness | Final question inventory and conditional rules |
| Length and payload | Input fits approved type, size, depth, item, encoding, and cost bounds | Oversized, deeply nested, malformed, pathological, or expensive | Reject before expensive work using safe message; record abuse signal where warranted | Exact limits |
| Invalid formats | Value meets the approved semantic format for its field | Unparseable or semantically invalid | Explain expected meaning without publishing implementation regex | Field contract |
| Unsupported values | Value is supported for current MVP purpose and locale/jurisdiction | Unsupported category, regulated/special data, or unknown branch | Explain limitation; allow correction, safe omission, assistance, or account-first | Final taxonomy and policy mapping |
| Stale session/Snapshot | Current lifecycle, answers, source versions, and Snapshot revision align | Expired, invalidated, superseded, changed source/answer, incompatible inference | Block affected preview/import; regenerate, refresh, or restart | Freshness/version contract |
| Claim eligibility | Current verified User, own control evidence, eligible lifecycle, unclaimed state, integrity, replay/idempotency/Audit available | Any proof/state mismatch or uncertain outcome | Fail closed; reconcile or offer safe recovery; no protected disclosure | Claim and concurrency contract |
| Workspace eligibility | Explicit candidate is current, accessible, active, and action-authorized | Missing/stale Membership, unauthorized, suspended, archived, deleted, moved, unresolved | Deny/re-fetch/reselect; no fallback or existence leak | Core owner contract |
| Business eligibility | Explicit Business belongs to selected Workspace and is current/action-authorized | Wrong ancestry, Business Unit substitution, unavailable lifecycle, stale target/Permission | Deny/re-fetch/reselect; preserve no inferred target | Core owner contract |
| Target authorization | Current exact action, Workspace, Business, resource/field scope, owner invariants all succeed | Authentication/title only, stale/revoked evidence, cross-tenant or partial context | Deny at execution; log minimized significant denial | Permission/runtime mapping |
| Candidate Fact conflict | Existing/proposed/source/provenance/freshness are visible to authorized reviewer and explicitly decided | Hidden/stale conflict, missing provenance, implicit/mass decision | Withhold item; refresh/review/correct/reject; no silent merge | Candidate Fact and field contracts |
| Duplicate import | Same semantic operation reconciles to prior item outcomes | Replay, changed meaning, uncertain owner commit, duplicate conflicting request | Return reconciled outcome or block; never duplicate hidden write | Idempotency/concurrency contract |
| Deletion eligibility | Requester and scope verified; data eligible; owner/hold/retention rules allow action | Unverified/ambiguous requester, ineligible owner data, hold or legal exception | Deny or partially process by owner; explain categories safely | Rights/lifecycle contract |
| Support-recovery eligibility | Approved case, requester proof, purpose, exact scope, current operator Permission/approval/time, Audit available | Missing proof/case/authority, claim reassignment request, raw-content overreach | Deny/escalate; no silent recovery or data disclosure | Identity/support procedure |

## 12. Error Taxonomy

Error identifiers describe stable product meanings. Final transport codes, status codes, and localized strings remain contract/design inputs.

| Error ID | Condition | User-message principle | Retryable? | Security disclosure rule | Required Audit | Recovery action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BD-ERR-001 | Invalid session/control/integrity | “This Discovery cannot be opened safely.” | Only after new proof or restart | Do not confirm existence, owner, or failed control element | Minimized anomaly/denial where warranted | Restart, account-first, approved support |
| BD-ERR-002 | Expired session | “This temporary Discovery has expired.” | No; new session only | Reveal no content; no expiry threshold detail useful for probing | Expiry/resume denial as policy requires | Restart or account-first; rights info |
| BD-ERR-003 | Deleted session | “This Discovery is no longer available.” | No | Do not disclose deleted content or retained evidence to unverified requester | Access attempt; prior deletion proof remains separate | Restart/account-first |
| BD-ERR-004 | Already claimed | Same owner: “Your claim was already completed”; otherwise generic unavailable | Same owner may reconcile | Never reveal other User or target | Replay/retry/result | Same owner continue; other User restart |
| BD-ERR-005 | Wrong User/account mismatch | “This account cannot claim this Discovery.” | After approved account change/proof | No other identity/session content | Claim denial/account mismatch | Sign out/re-authenticate, restart, support |
| BD-ERR-006 | Identity not verified/current | “Verify your identity before claiming.” | Yes after Core verification | Do not expose proof details or account existence | Identity/claim denial under owner policy | Complete verification or Path B |
| BD-ERR-007 | Claim conflict/race | “We could not safely complete the claim.” | After reconciliation only | Do not reveal competing actor or timing detail | Attempts and reconciled outcome | Wait/reconcile/idempotent retry/support |
| BD-ERR-008 | Claim interrupted/uncertain | “We are checking whether your claim completed.” | Reconciliation-driven | Never report success until authoritative | Pending/retry/final outcome | Poll/reconcile or approved support |
| BD-ERR-009 | Workspace unavailable | “This Workspace cannot be used right now.” | After refresh/reselection | Do not disclose unauthorized lifecycle/existence | Target denial when consequential | Re-fetch, select/create authorized Workspace |
| BD-ERR-010 | Business unavailable | “This Business cannot be used right now.” | After refresh/reselection | Do not expose unauthorized ancestry/lifecycle | Target denial | Re-fetch/select/create authorized Business |
| BD-ERR-011 | Unauthorized target/action | “You do not have permission for this action.” | After authority changes; current retry no | Do not reveal hidden target/field/role details | Significant action/target denial | Select another authorized target or request access |
| BD-ERR-012 | Stale Membership/Permission | “Your access changed. Refresh before continuing.” | Yes after re-fetch; not using stale proof | Do not reveal grant/revocation internals beyond own safe context | Stale/revoked use | Re-fetch/reselect/re-authenticate if policy requires |
| BD-ERR-013 | Import conflict | “Some proposed facts need review before submission.” | Yes after explicit review | Show only authorized conflicting fields | Per-item blocked outcome | Refresh, compare, accept/reject/correct |
| BD-ERR-014 | Stale Snapshot/source | “This preview changed or is out of date.” | Yes after regenerate/review | No provider internals or hidden canonical data | Stale/withheld item | Regenerate/refresh/review |
| BD-ERR-015 | Duplicate import | “This submission was already received.” | Reconcile, not duplicate | Show only same authorized operation outcome | Duplicate/replay and prior correlation | View reconciled result |
| BD-ERR-016 | Partial failure | “Some items completed; others need attention.” | Eligible failed items only | Per-item authorized status; no hidden fields | Each item and retry | Review outcome, retry eligible items |
| BD-ERR-017 | Downstream owner/service unavailable | “This action is temporarily unavailable; no result was assumed.” | Under retry budget after safe reconciliation | No topology, secret, tenant, or owner-state leak | Dependency/failure outcome as required | Retry later, account-first, preserve explicit state |
| BD-ERR-018 | Rate limited | “Please wait before trying again.” | Yes under approved recovery/window | Do not reveal thresholds or identity/tenant correlation | Abuse/rate signal as policy requires | Wait, accessible recovery/appeal, Path B where safe |
| BD-ERR-019 | Abuse challenge required/failed | “We need an additional safety check.” | Yes through approved accessible route | No score, signal, or attacker-useful detail | Challenge/escalation outcome | Complete accessible challenge or appeal/support |
| BD-ERR-020 | Deletion denied/partially ineligible | “Some requested data cannot be deleted under the current policy.” | After proof/scope/policy change | No content/existence disclosure to unverified requester | Decision, owner, reason category, scope | Verify, refine scope, appeal/review where applicable |
| BD-ERR-021 | Legal hold or approved retention exception | “Some data is temporarily retained under an approved requirement.” | After hold review/release | Disclose only legally approved notice and scope | Hold/exception and rights outcome | Privacy/Legal review/appeal where applicable |
| BD-ERR-022 | Support recovery unavailable/denied | “Support cannot safely complete this recovery.” | After new proof/approved case change | No operator policy, other identity, raw content, or target details | Support case/access denial | Self-service alternative, restart, formal escalation |

## 13. Permission Mapping

This section references—not redefines—the logical actions and permissions in the [Business Discovery Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md), especially §§6–15. `BD-ACT-001`–`005`, `007`, and `008` are public or own-session entry actions governed by ownership, identity, validation, and abuse controls rather than tenant privilege. Every protected or privileged feature-related action is mapped below. The default is denial unless every required input succeeds.

| Catalog action | Logical permission | Feature use | Target scope | Revalidation point | Default-deny behavior |
| --- | --- | --- | --- | --- | --- |
| BD-ACT-006 | `BD-PERM-DELETE-UNCLAIMED-SESSION` | Delete eligible own unclaimed session | Own eligible temporary session | Deletion execution and every restored-data activation | Deny on uncertain control/scope, claimed/ineligible state, hold, or unavailable owner |
| BD-ACT-009 | `BD-PERM-VERIFY-IDENTITY` | Establish current identity-verification result | User identity | Core Identity decision and again when claim executes | Deny claim if verification is stale, mismatched, or unresolved |
| BD-ACT-010 | `BD-PERM-CLAIM-OWN-SESSION` | Claim own valid session | Own session → verified User only | Atomic claim commit | Deny unauthenticated/unverified/wrong-owner/expired/replayed/uncertain claims |
| BD-ACT-011 | `BD-PERM-CLAIM-OWN-SESSION` | Retry interrupted claim | Same claim and verified User | After owner/Audit reconciliation and before retry | Deny different User, changed meaning, or unresolved ownership |
| BD-ACT-012 | `BD-PERM-SELECT-WORKSPACE` | Select explicit Workspace | Exact Workspace | Selection and every downstream protected use | Deny missing/stale Membership/action; never infer fallback |
| BD-ACT-013 | `BD-PERM-CREATE-WORKSPACE` | Core-owned Workspace creation | Exact creation action | Immediately before Core owner executes | Deny title-only, suspended subject, or missing exact create authority |
| BD-ACT-014 | `BD-PERM-SELECT-BUSINESS` | Select explicit Business | Exact Workspace + Business | Selection and every downstream protected use | Deny wrong ancestry, stale access, unavailable target, or hidden field |
| BD-ACT-015 | `BD-PERM-CREATE-BUSINESS` | Core-owned Business creation | Exact Workspace + new Business action | Immediately before Core owner executes | Deny missing create authority, wrong Workspace, or Business Unit substitution |
| BD-ACT-016 | `BD-PERM-VIEW-IMPORT-PROPOSAL` | View field-level proposals/conflicts | Exact Business + permitted fields/items | Every retrieval and field expansion | Deny/omit unauthorized fields; title and prior navigation are insufficient |
| BD-ACT-017 | `BD-PERM-PROPOSE-IMPORT` | Submit accepted evidence as Candidate Facts | Exact Workspace + Business + proposal/items | Immediately before Business Architect intake | Deny stale claim/target/Permission/Snapshot, missing provenance, or cross-tenant scope |
| BD-ACT-018 | `BD-PERM-REVIEW-CANDIDATE-FACT` | Review Candidate Fact | Exact Business + item/batch/fields | Every review retrieval/action | Deny wrong/stale target, role-title-only access, or unavailable conflicts |
| BD-ACT-019 | `BD-PERM-ACCEPT-CANDIDATE-FACT` | Accept proposal item | Exact Business + item | Immediately before each item/batch decision | Deny implicit mass acceptance, missing review/provenance, or stale Permission |
| BD-ACT-020 | `BD-PERM-REJECT-CANDIDATE-FACT` | Reject proposal item | Exact Business + item | Immediately before each decision | Deny implicit batch or missing current item/target authority |
| BD-ACT-021 | `BD-PERM-CORRECT-CANDIDATE-FACT` | Correct proposal item | Exact Business + item | Immediately before correction | Deny silent canonical edit, provenance loss, or stale state |
| BD-ACT-022 | `BD-PERM-RETRY-IMPORT` | Retry eligible failed items | Exact Business + prior proposal/items | After reconciliation and immediately before retry | Deny committed/changed/stale/unauthorized items and unbounded retry |
| BD-ACT-023 | `BD-PERM-VIEW-IMPORT-OUTCOME` | View import result | Exact Business + proposal/items | Every result retrieval | Deny wrong target, revoked access, or unauthorized item/field |
| BD-ACT-024 | `BD-PERM-PUBLISH-BUSINESS-DNA` | Downstream DNA publication | Exact Business + Business DNA version | Immediately before Registry commit | Deny absent separate publish Permission, incomplete review, invalid provenance/invariants |
| BD-ACT-025 | `BD-PERM-REQUEST-DELETION` | Request rights/deletion processing | Exact subject/data; Workspace/Business where applicable | Request verification and every owner execution | Deny unverified requester, ambiguous scope, unauthorized disclosure, or valid exception |
| BD-ACT-026 | `BD-PERM-LEGAL-HOLD` | Apply/change/release deletion exception or legal hold | Exact affected data/tenant/legal record | Every apply/change/release and restore use | Deny title/case alone, missing Legal authority, overbroad or expired scope |
| BD-ACT-027 | `BD-PERM-SUPPORT-ACCESS` + `BD-PERM-APPROVE-RECOVERY` | Support-assisted recovery | Exact approved case, requester, action, fields, time | Every access and recovery action | Deny absent proof/case/approval; no claim reassignment or canonical write |
| BD-ACT-028 | `BD-PERM-VIEW-AUDIT-EVIDENCE` | View minimized Audit evidence | Exact tenant/resource/record/field query | Every lookup/export/query change | Deny unrestricted search, wrong scope, or raw/secret request |
| BD-ACT-029 | `BD-PERM-SECURITY-INVESTIGATE` | Investigate Security event | Exact incident/event/tenant/resource | Every access, scope expansion, or containment request | Deny absent incident/purpose, expired elevation, or canonical write attempt |
| BD-ACT-030 | `BD-PERM-BACKUP-ACCESS` | Policy-governed backup access, not an end-user surface | Exact backup/environment/tenant set | Every read/export/access | Deny browsing, tenant expansion, or missing procedure/JIT approval |
| BD-ACT-031 | `BD-PERM-BACKUP-RESTORE` | Policy-governed restore, not an end-user surface | Exact backup/restore/data-owner scope | Start, material step, and activation | Deny missing suppression plan, independent validation, or correct environment/scope |
| BD-ACT-032 | `BD-PERM-BACKUP-RESTORE` | Reapply deletion suppression after restore | Exact restored data scope | Before any restored data becomes active | Deny missing/stale tombstone or separation-of-duty evidence |
| BD-ACT-033 | `BD-PERM-ADMIN-MAINTENANCE` | Bounded administrative maintenance | Exact action/resource/environment/tenant set | Every action and scope change | Deny wildcard, owner bypass, no Audit, or absent approved change/case |
| BD-ACT-034 | `BD-PERM-OVERRIDE-CLAIM` | Reserved claim override | Exact future recovery case | No execution permitted by this specification | Always deny; no current actor may receive or use this action |
| BD-ACT-035 | `BD-PERM-VIEW-RAW-DISCOVERY-CONTENT` + `BD-PERM-SUPPORT-ACCESS` | Reserved exceptional raw-content view | Exact future case and approved fields | No execution permitted by this specification | Always deny; credentials remain prohibited even under future exceptional authority |

### 13.1 Authorization decision behavior

For every protected action, the product must obtain a fail-closed result equivalent to:

```text
Decision =
  valid subject
  AND required authentication
  AND current identity verification where required
  AND active Membership where required
  AND explicit logical action Permission
  AND exact Workspace scope
  AND exact Business scope where required
  AND resource ownership or target relationship
  AND current resource state
  AND current policy constraints
  AND no blocking deny condition
```

The server-side owning boundary must treat client-supplied identifiers as inputs, not proof. Permission evidence must be refreshed or the action denied when stale. Preview/read authorization never implies write authorization; claim never implies target authorization; review never implies acceptance/correction; and review/approval never implies Business DNA publication.

### 13.2 Separation of duties reflected in the product

- Claim and target authorization are separate steps and confirmations.
- Candidate Fact review and Business DNA publication expose separate actions and outcomes.
- Support recovery and Security investigation use separate case/purpose contexts.
- Deletion processing cannot approve its own legal-hold exception.
- Backup restore remains unavailable for activation until separate deletion-suppression validation succeeds.
- Administrative maintenance does not imply Audit-review or raw-content authority.
- No product affordance may bundle or imply these combinations from a role title.

## 14. Security and Privacy Product Behavior

This section translates the [Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md) and [Policy Readiness Pack](../02-core-platform/security/BUSINESS-DISCOVERY-POLICY-READINESS-PACK.md) into feature-visible behavior. It does not choose controls or providers.

### 14.1 Session and claim behavior

- Session credentials are secret, opaque, and absent from ordinary URLs, display text, referrals, exports, telemetry, support tooling, Audit payloads, prompts, and training data (`BD-SEC-R001`–`R016`; `BD-ENC-R004`–`R006`).
- Browser state is never authoritative for lifecycle, identity, tenant, role, Permission, or claim outcome.
- Claim requires current verified identity, own-session control evidence, atomic one-time binding, replay/concurrency protection, idempotent reconciliation, and minimized Audit (`BD-SEC-R017`–`R029`; `BD-ID-R001`–`R022`).
- Wrong-account and copied-token experiences reveal no session content and offer no transfer or support override.
- Account-first onboarding remains available when Discovery, inference, identity handoff, claim, or abuse-control dependencies fail safely.

### 14.2 Tenant, target, and canonical integrity

- No fallback Workspace, Business, Business Unit, or tenant is inferred (`BD-SEC-R030`–`R040`; `BD-PERM-R001`–`R019`).
- The target and action are revalidated at execution; stale Membership/Permission denies rather than silently proceeding.
- Existing and proposed values are compared field by field; acceptance, rejection, correction, and partial acceptance are explicit (`BD-SEC-R041`–`R055`; `BD-PERM-R020`–`R026`).
- Discovery sends accepted evidence only to Business Architect Candidate Fact intake. Business DNA Registry alone may publish after its separate governance and Permission checks.
- No preview, claim, target selection, acceptance, or import creates a subscription, entitlement, readiness, OS, billing, payment, or operational effect.

### 14.3 Purpose, consent, rights, and lifecycle

- The only architecture-level purposes are optional preview, optional verified claim, and optional authorized import into Business Architect (`BD-PRV-R001`–`R003`).
- Raw answers, inferred facts, and Snapshot content are sensitive by default and field-minimized (`BD-PRV-R004`–`R022`).
- Participation disclosure, temporary-storage acknowledgement, claim/import consent, account terms, privacy notice, analytics consent where required, marketing consent, secondary-use/training consent, and support disclosure remain separate. Marketing and training consent are never inferred.
- Eligible unclaimed working data can expire and be deleted; rejected raw content is not retained indefinitely; retained decision/Audit/Security evidence is minimized and contains no credential (`BD-RET-R001`–`R022`).
- Rights requests require requester/scope proof; deletion statements distinguish working data, minimized evidence, backup persistence, and legal hold. Restore cannot reactivate suppressed/deleted data.
- Actual legal basis, regions, processors, transfer mechanisms, notice wording, and numeric lifecycle values remain pre-implementation approvals (`BD-RES-R001`–`R016`).

### 14.4 Telemetry, analytics, support, and abuse

- Ordinary telemetry may contain only purpose-approved operational metadata; it excludes raw answers, Snapshot content, sensitive inferred facts, credentials, keys, and unnecessary identifiers (`BD-OBS-R001`–`R007`).
- Security monitoring must detect replay/double claim, account mismatch, cross-tenant attempts, stale Permission, enumeration, bot/cost/import abuse, and privileged/support/backup/hold activity (`BD-OBS-R008`–`R014`).
- Analytics is purpose-bound, minimized, tenant-isolated, retention-controlled, and unusable as identity/session/authorization proof or for marketing/training without separate authority (`BD-OBS-R015`–`R018`).
- Support is deny-by-default, case-/purpose-/target-/field-/time-/Permission-/approval-/Audit-bound, and unable to silently reassign claims or edit canonical state (`BD-OBS-R019`–`R024`).
- Every surface receives a later approved anonymous/authenticated/service/privileged risk class, payload/cost/concurrency/retry controls, accessible bot handling, safe degradation, and false-positive recovery (`BD-ABU-R001`–`R022`). No numeric limit is chosen here.

### 14.5 Encryption, residency, and provider boundary

- Protected flows and storage, including backups, require approved confidentiality and integrity controls; required protection failure blocks the operation (`BD-ENC-R001`–`R018`).
- Keys and credentials remain purpose-, environment-, owner-, and access-separated, with later-approved rotation/revocation/incident handling and value-free Audit.
- Active data, telemetry, Audit, Security events, support, backups, inference, analytics, and processors/subprocessors all require an approved jurisdiction/location profile before implementation (`BD-RES-R001`–`R016`).
- An unapproved location, processor, transfer, or Legal decision disables the affected processing; tenant choice cannot override a mandatory restriction.

## 15. Accessibility Requirements

The applicable baseline is the [repository Design DNA](../10-design-intelligence/02-DESIGN-DNA.md), which requires WCAG 2.2 AA or the stricter applicable product, platform, legal, or market requirement. Conformance evidence belongs to later design, plan, and test gates; this specification defines the behavior to be proven.

1. Every entry, question, correction, consent, claim, selector, review, import, deletion, and recovery action must be keyboard-operable.
2. Focus must be visible and must move to the new heading, first invalid field, result summary, or safe recovery action as context requires; it must not be lost after dynamic changes.
3. Pages and regions must use meaningful semantic structure, headings, landmarks, form labels, group labels, and programmatic relationships.
4. Screen-reader names must distinguish user-provided, inferred, canonical, accepted Candidate Fact, conflict, and published statuses.
5. Inline errors must be associated with their controls; an accessible summary must link or move to affected fields without clearing valid data.
6. Color must not be the sole carrier for source, confidence, conflict, selection, required state, success, denial, partial result, or failure.
7. Progress indicators must expose current step/state and completion meaning without depending on animation, color, or an unapproved time estimate.
8. Text and controls must tolerate user scaling and reflow without hiding required comparisons, provenance, consent, errors, or actions.
9. Comparison content must preserve a logical reading order in list, table, mobile, LTR, and RTL presentations.
10. Motion, if later used, must respect reduced-motion preference and must not be required to understand or complete a state change.
11. Timeout, expiry, verification-pending, and claim-pending experiences must communicate status and recovery accessibly; no visual countdown alone may determine access.
12. Any abuse challenge must have an accessible alternative and false-positive recovery. A CAPTCHA-only, audio-only, visual-only, or pointer-only gate is prohibited.
13. Loading, empty, success, partial, error, unauthorized, expired, and unavailable states must be perceivable and announced without repeated disruptive updates.
14. Localized content must remain understandable and complete for assistive-technology users; untranslated identifiers may not replace user-facing instructions.

## 16. Internationalization and Localization

- English and Arabic are first-class languages from first implementation; every user-facing string, error, disclosure, status, and help path must have a governed translation path.
- Arabic uses RTL and English uses LTR. Layout, progress, comparisons, navigation, icons with direction, focus order, and reading order must use logical direction rather than left/right assumptions.
- User-entered Business data remains stored and presented as entered unless a separately governed translation workflow exists. A translated display must never silently change the canonical meaning.
- Locale-neutral facts and identifiers remain semantically stable; localized labels, examples, formatting, and explanations must not create different authorization or classification outcomes.
- Dates, times, numbers, and other locale-sensitive displays must use the active locale and preserve an unambiguous underlying meaning. Time-zone display must not alter expiry or Audit truth.
- Pluralization, grammatical gender where applicable, interpolation, truncation, and text expansion must be handled without hard-coded English sentence structure.
- Consent, disclosure, privacy-notice, and policy acceptance evidence must record the applicable language and version where required; language is not proof of legal basis by itself.
- Jurisdiction-dependent notice selection must follow later approved Legal and residency decisions, not browser locale alone.
- Search, validation, inference, and output must not assume Latin script, English order, or a one-way transliteration.
- Mobile and desktop localized experiences must preserve the same decisions, content status, privacy choices, Security checks, and recovery routes.

## 17. Acceptance Criteria

The following thirty Given/When/Then criteria are product acceptance conditions. They identify required later test evidence but do not create test code or authorize implementation.

| ID | Given | When | Then |
| --- | --- | --- | --- |
| BD-AC-001 | A visitor is on an eligible NexoraXS entry surface | They choose account-first rather than Discovery | They can sign up or log in and continue normal Workspace/Business/Business Architect onboarding without a Snapshot, claim, or import |
| BD-AC-002 | Discovery is available | A visitor chooses Start Discovery | A temporary anonymous session begins without creating an account or any canonical/commercial/operational entity |
| BD-AC-003 | Discovery is unavailable, skipped, abandoned, failed, expired, or unsupported | The visitor continues | The account-first path remains usable and Discovery is not required |
| BD-AC-004 | A visitor has supplied sufficient current answers | The preview is generated | User-provided and inferred facts are distinct, inferred facts have understandable explanation/provenance, and the preview is labeled non-binding/non-canonical |
| BD-AC-005 | An inferred or user-provided proposal is inaccurate | The visitor corrects the relevant answer/value | Affected output is regenerated or marked stale, the correction remains distinguishable, and no canonical fact changes |
| BD-AC-006 | An anonymous visitor has a valid preview but no current verified identity | They attempt final claim | Claim is blocked and the product directs them through Core registration/login and verification without revealing or transferring protected state |
| BD-AC-007 | A verified User has valid own-session control and the session is eligible | They claim it | Exactly one atomic User binding and minimized Audit outcome are established; no Workspace, Business, Membership, Permission, entitlement, or import authority is granted |
| BD-AC-008 | A different signed-in User or copied credential is presented | Claim is attempted | Claim fails closed, reveals no session or other identity content, and offers only approved account-switch/restart/recovery choices |
| BD-AC-009 | A claim was committed or is concurrently submitted | The same or another actor retries | The authoritative owner is reconciled, the same User receives only an idempotent safe outcome, no second binding occurs, and replay is detected/audited |
| BD-AC-010 | A session is claimed | The User proceeds toward import | The product requires explicit Workspace selection and explicit Business selection/creation; it does not infer a fallback tenant or Business Unit |
| BD-AC-011 | A User sees a Workspace or Business option | They select or create the target | Current Membership, exact action, target scope, ancestry, lifecycle, and Core owner rules are validated; unauthorized choices are absent or safely denied |
| BD-AC-012 | A title such as Workspace Owner or Admin is present | A create/import/review/publish action is attempted without exact Permission | The action is denied; title alone creates no privilege |
| BD-AC-013 | A selected existing Business has overlapping canonical facts | Proposal review opens | Each authorized field shows existing and proposed values, source/provenance, and conflict status before a decision |
| BD-AC-014 | Multiple proposals are eligible | The authorized User accepts some and rejects/corrects others | Item decisions remain independent, partial acceptance is preserved, and rejected/unaccepted items are not imported |
| BD-AC-015 | Proposed data conflicts with canonical data | The User submits accepted evidence | No silent merge, newest-wins, Discovery-wins, or canonical overwrite occurs; existing canonical values remain until the canonical owner accepts a governed change |
| BD-AC-016 | Accepted field proposals, valid provenance, current target, and import Permission exist | The User submits import | Only Business Architect Candidate Fact intake receives the accepted evidence and the result states that it is not published Business DNA |
| BD-AC-017 | Discovery, inference, support, or import orchestration attempts a Business DNA write | The boundary is evaluated | The write is prohibited; only a separately authorized Business DNA Publisher through the Registry after governed review may publish |
| BD-AC-018 | Membership or Permission changed after preview/selection | Import, review decision, retry, or publication executes | Current evidence is revalidated and stale/revoked evidence denies the action without fallback target or hidden write |
| BD-AC-019 | Import previously failed or its outcome was uncertain | The authorized User retries | Prior owner outcomes are reconciled, only eligible failed items retry under the same meaning, and no duplicate committed item is created |
| BD-AC-020 | Some import items commit and others fail, skip, duplicate, or become stale | The result is displayed | Per-item outcomes are explicit, committed items are not retried blindly, and eligible unresolved items have a safe recovery path |
| BD-AC-021 | An eligible unclaimed session controller requests deletion | Current control, scope, retention, hold, and owner checks pass | Eligible working data is deleted/suppressed, minimized proof remains, and backup/Audit/legal-hold distinctions are explained accurately |
| BD-AC-022 | A session is expired, deleted, abandoned, or invalidated | Resume, preview, claim, or import is attempted | The consequential action is blocked, no protected content is revealed, and restart/account-first/rights options are shown as applicable |
| BD-AC-023 | Ordinary recovery cannot establish safe ownership | Support-assisted recovery is requested | A case-, requester-, purpose-, target-, field-, time-, Permission-, approval-, and Audit-bound process applies; no silent claim reassignment or canonical edit occurs |
| BD-AC-024 | A normal or failure path emits logs, metrics, traces, analytics, alerts, support data, or Audit | The evidence is inspected | Ordinary telemetry excludes raw answers, Snapshot content, sensitive inferred facts, credentials, keys, and unauthorized tenant fields; Audit remains minimized and separate |
| BD-AC-025 | Participation, storage, claim/import, account, privacy, analytics, marketing, or training choices apply | A choice is shown or recorded | Each applicable purpose is distinct and versioned; marketing/training consent is not inferred from participation, account creation, claim, or import |
| BD-AC-026 | A surface exceeds approved rate, payload, concurrency, retry, cost, or abuse controls | The request is evaluated | It is safely limited/challenged/degraded without revealing thresholds, fabricating success, weakening authorization, blocking accessible recovery, or removing safe Path B where applicable |
| BD-AC-027 | A keyboard or assistive-technology User completes a critical flow | They navigate, validate, compare, decide, recover, or receive an outcome | Every required action is reachable, focus and semantics are correct, errors/statuses are announced, and color/motion alone carries no required meaning |
| BD-AC-028 | The experience is used in English/LTR, Arabic/RTL, mobile, or desktop | The same journey state is exercised | Required facts, decisions, consent, Security checks, target scope, errors, accessibility, and recovery remain equivalent and correctly ordered/localized |
| BD-AC-029 | Discovery preview, claim, target selection, acceptance, or import completes | Commercial/readiness/OS/operational state is inspected | No plan/subscription/entitlement/billing/payment/readiness/OS configuration/operational record was selected, activated, or created by Discovery |
| BD-AC-030 | A consequential action succeeds, fails, is denied, retries, or remains uncertain | Audit and user-visible results are evaluated | The User sees an accurate explicit outcome and authoritative minimized evidence identifies action, actor/service, exact scope, result, reason category, time, correlation, and authority source without raw content or secrets |

## 18. Conceptual Product Objects and Ownership

These concepts support requirement clarity. They are not schema, API, aggregate, or storage decisions.

| Concept | Product meaning | Temporary or canonical | Canonical/decision owner | Write boundary |
| --- | --- | --- | --- | --- |
| Discovery session | Purpose-limited anonymous lifecycle and minimum working state | Temporary | Bounded Discovery capability | Discovery only; no canonical organization authority |
| Raw answer | Visitor-provided temporary response | Temporary until governed Candidate Fact handoff; source evidence thereafter only per policy | Discovery while temporary; later provenance owner per policy | Session controller through Discovery validation |
| Inferred fact | Explainable provisional output derived from answers and governed sources | Temporary/proposed | Discovery while temporary | Approved inference process may propose, never canonically write |
| `DiscoverySnapshot` | Versioned non-canonical preview proposal | Temporary/proposed | Discovery | Discovery revisions only; no Business/DNA authority |
| Consent/disclosure evidence | Purpose- and version-specific acknowledgement/decision evidence | Policy-governed | Privacy/Legal and applicable evidence owner | Approved consent/evidence path only |
| Claim record | Auditable one-session-to-one-verified-User ownership outcome | Authoritative claim evidence, not Business data | Claim owner / Core Identity integration / Audit | Atomic claim owner only |
| Workspace selector | Explicit current target reference | Canonical reference, not owner state | Core Workspace owner | Discovery stores/uses only approved reference; owner controls entity |
| Business selector | Explicit current Business target reference under one Workspace | Canonical reference, not owner state | Core Business Registry | Discovery stores/uses only approved reference; owner controls entity |
| Import proposal | Field-level proposed transfer set and User decisions | Proposed | Discovery orchestration until Business Architect intake | Authorized User decisions; no canonical write |
| Candidate Fact | Provenance-bearing proposed evidence entering governed review | Governed proposed state | Business Architect | Business Architect intake/review only |
| Canonical Business fact | Accepted organization fact | Canonical | Applicable Core Business/organization owner | Canonical owner contract only |
| Published Business DNA | Versioned Business-scoped DNA publication | Canonical/published | Business DNA Registry | Registry after governed review and separate publication authority |
| Audit evidence | Minimized authoritative record of consequential action | Authoritative evidence | Audit | Producing owner emits; Audit controls evidence lifecycle |
| Deletion tombstone/suppression | Minimal evidence preventing deleted data reactivation | Policy-governed control state | Data-lifecycle owner / Platform Operations | Approved deletion/restore lifecycle only |

## 19. Traceability Matrix

The matrix groups sequential requirements by capability while retaining individual IDs in §§7–8. “Downstream contract dependency” names a future contract topic, not a contract created by this specification.

| Feature requirement | Source authority | Threat-model requirement | Permission requirement | Policy requirement | Journey / state | Acceptance criteria | Downstream contract dependency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BD-FR-001–010 — anonymous session | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Anonymous Discovery Session”; [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), “Non-Canonical Discovery Boundary” | BD-SEC-R001–R016, R056–R070 | BD-ACT-001–006; BD-PERM-R007, R010–R012, R038 | BD-PRV-R001–R024; BD-RET-R001–R006, R019–R022; BD-ABU-R001–R005 | Journeys A/C/D/K; `anonymous_active`, `expired`, `abandoned`, `invalidated`, `deleted` | BD-AC-002–004, 021–022 | Session lifecycle, control evidence, deletion, expiry, input limits |
| BD-FR-011–020 — question flow | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “DiscoverySnapshot” and “Privacy, Purpose, and Consent Separation” | BD-SEC-R012–R016, R056–R061, R071–R079 | BD-ACT-003; BD-PERM-R019, R038, R041 | BD-PRV-R001–R016; BD-ABU-R001–R009 | Journey A/C; `anonymous_active` | BD-AC-002, 004–005, 026–028 | Question inventory, conditional validation, payload/cost rules |
| BD-FR-021–030 — preview | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “DiscoverySnapshot” and “Commercial, Readiness, and OS Boundaries” | BD-SEC-R004, R010, R041–R048, R053, R056–R070 | BD-ACT-004; BD-PERM-R019, R023–R026 | BD-PRV-R004–R011; BD-OBS-R001–R007; BD-ABU-R005–R012 | Journey A; `preview_ready` | BD-AC-004–005, 024, 029 | Inference/provenance/freshness and preview-read contract |
| BD-FR-031–038 — identity handoff | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Identity Verification and Claim”; [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), “Claim Boundary” | BD-SEC-R002–R003, R017, R023–R029 | BD-ACT-007–009; BD-PERM-R009, R012, R041 | BD-ID-R001–R008; BD-PRV-R006–R016 | Journeys A/B/E; `registration_required`, `identity_verified` | BD-AC-001, 006, 008, 025 | Core Identity handoff, verification result, consent-version evidence |
| BD-FR-039–050 — claim | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Identity Verification and Claim”; [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), “Claim Boundary” | BD-SEC-R017–R029, R080–R091 | BD-ACT-010–011; BD-PERM-R009–R012, R016, R037–R041 | BD-ID-R009–R022; BD-OBS-R008–R014; BD-ABU-R001–R008 | Journeys A/E/F/L; `identity_verified`, `claim_pending`, `claimed`, `claim_blocked` | BD-AC-006–009, 023, 030 | Atomic claim, idempotency, continuity proof, Audit outcome |
| BD-FR-051–062 — target selection/creation | [ADR-003](../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md); [ADR-040](../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md); [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Workspace and Business Selection” | BD-SEC-R030–R040 | BD-ACT-012–015; BD-PERM-R001–R019, R040–R041 | BD-ID-R012–R015; BD-OBS-R010–R011 | Journeys A/B/G; `claimed`, `target_selected` | BD-AC-010–012, 018 | Workspace/Business owner lookup/create and authorization decisions |
| BD-FR-063–075 — field review | [ADR-014](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md); [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md); [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Human Control and Candidate Fact Pipeline” | BD-SEC-R041–R055 | BD-ACT-016 and BD-ACT-018–021; BD-PERM-R019–R026 | BD-PRV-R004–R008; BD-RET-R004–R007; BD-OBS-R003–R006 | Journeys H/I; `import_review` | BD-AC-013–015, 017–018 | Field inventory, conflicts, review actions, provenance/freshness |
| BD-FR-076–087 — Candidate Fact import | [ADR-005](../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md); [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md); [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), “Candidate Fact Boundary” | BD-SEC-R041–R055, R080–R091 | BD-ACT-017–024; BD-PERM-R016–R026, R035–R041 | BD-RET-R007–R011; BD-OBS-R008–R014, R023 | Journeys A/H/I/J; `import_review`, `import_submitted`, `imported`, `partially_imported`, `import_failed` | BD-AC-013–020, 030 | Candidate Fact intake, idempotency, per-item outcomes, DNA publication boundary |
| BD-FR-088–094 — deletion/rights | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Rights, Audit, Backups, and Legal Hold” | BD-SEC-R062–R070, R080–R091 | BD-ACT-006, BD-ACT-025–026, and BD-ACT-030–032; BD-PERM-R027–R034, R037–R041 | BD-PRV-R017–R024; BD-RET-R001–R022; BD-RES-R005, R009–R011 | Journey K; `deleted` and lifecycle terminal states | BD-AC-021–022, 030 | Rights proof, lifecycle schedule, tombstone, restore, hold decision |
| BD-FR-095–106 — recovery | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Recovery”; [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md), “Recovery Boundary” | BD-SEC-R010–R011, R016–R029, R071–R079, R092–R108 | BD-ACT-011, BD-ACT-022, BD-ACT-025, BD-ACT-027, and BD-ACT-033–035; BD-PERM-R027–R036, R040–R041 | BD-ID-R006–R022; BD-OBS-R019–R024; BD-ABU-R008–R020 | Journeys C–F/J–L; recovery/terminal states | BD-AC-008–009, 018–023, 026 | Identity/recovery, support case, retry, incident handoff |
| BD-FR-107–114 — observability/support | [Core Security Model](../02-core-platform/08-SECURITY-MODEL.md), especially Audit/observability; [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Privacy” and “Governance” | BD-SEC-R068–R070, R071–R108 | BD-ACT-027–035; BD-PERM-R027–R042 | BD-OBS-R001–R024; BD-ENC-R006, R009–R016; BD-RES-R004–R015; BD-ABU-R010–R022 | All journeys/states | BD-AC-023–026, 030 | Event/field inventory, Security detection, support/incident, owner/Audit failure behavior |
| BD-NFR-001–005 — Security | [Core Security Model](../02-core-platform/08-SECURITY-MODEL.md); [Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md), §§3–16 | BD-SEC-R001–R108 | BD-PERM-R001–R042 | BD-ENC-R001–R018; BD-ABU-R001–R022 | All | BD-AC-006–019, 023–026, 030 | Security control profile, secrets, abuse, incident and failure contracts |
| BD-NFR-006–010 — Privacy/lifecycle/residency | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), privacy/rights sections; [Policy Pack](../02-core-platform/security/BUSINESS-DISCOVERY-POLICY-READINESS-PACK.md), §§4, 6, 9 | BD-SEC-R056–R070 | BD-PERM-R027–R034, R037–R041 | BD-PRV-R001–R024; BD-RET-R001–R022; BD-RES-R001–R016 | A/C/D/K/L | BD-AC-021–025, 030 | Legal basis/classification, lifecycle, regions/processors/transfers |
| BD-NFR-011–017 — accessibility | [Genesis Customer Journey](../01-genesis/11-CUSTOMER-JOURNEY.md); [Design DNA](../10-design-intelligence/02-DESIGN-DNA.md) and [Design Quality Checklist](../10-design-intelligence/DESIGN-QUALITY-CHECKLIST.md) | BD-SEC-R072, R079 | BD-PERM-R041 | BD-ABU-R009, R013, R015, R018 | All user journeys and surfaces | BD-AC-026–028 | Accessibility design review and test strategy |
| BD-NFR-018–024 — service quality/recovery | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), recovery/consequences; [v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md) | BD-SEC-R009, R021, R029, R051–R054, R071–R079 | BD-PERM-R016–R017, R035–R041 | BD-OBS-R008–R024; BD-ABU-R004–R022 | All; especially C–F/J–L | BD-AC-009, 018–023, 026, 030 | Performance/capacity, retry, dependency, rollout and recovery contracts |
| BD-NFR-025–028 — Audit/observability/isolation | [Data Ownership](../02-core-platform/04-DATA-OWNERSHIP.md); [Core Security Model](../02-core-platform/08-SECURITY-MODEL.md) | BD-SEC-R030–R040, R067–R070, R077, R080–R108 | BD-PERM-R019, R027–R042 | BD-OBS-R001–R024; BD-RET-R008–R022 | All | BD-AC-024, 030 | Audit and observability event/field/access contracts |
| BD-NFR-029–033 — localization/responsive | [Genesis Customer Journey](../01-genesis/11-CUSTOMER-JOURNEY.md); [Design DNA](../10-design-intelligence/02-DESIGN-DNA.md) | BD-SEC-R067, R072, R079 | BD-PERM-R019, R041 | BD-PRV-R009–R016; BD-ABU-R009, R013, R018 | All | BD-AC-025–028 | Localization, notice-version, direction, browser-support inputs |
| BD-NFR-034–038 — concurrency/supportability | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), claim/import/recovery; [Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md) | BD-SEC-R008–R009, R018–R029, R049–R054, R075–R108 | BD-PERM-R016–R017, R021–R042 | BD-ID-R009–R022; BD-OBS-R001–R024; BD-ABU-R007–R022 | F/J/L; pending/partial/failure states | BD-AC-009, 018–024, 026, 030 | Concurrency/idempotency, telemetry redaction, support and incident contracts |

## 20. Product Decision Register

| Decision ID | Product decision | Rationale and governing evidence | Consequence |
| --- | --- | --- | --- |
| BD-DEC-001 | Discovery is an optional entry, never a universal prerequisite. | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), “Decision” | Path B remains visible and functional in normal and degraded states. |
| BD-DEC-002 | Preview is non-binding and non-canonical. | ADR-042 “DiscoverySnapshot”; v1.1 Freeze non-canonical boundary | No canonical, commercial, readiness, OS, or operational effect. |
| BD-DEC-003 | Registration/login and current identity verification precede final claim. | ADR-042 “Identity Verification and Claim”; BD-SEC-R017–R029 | Anonymous completion alone cannot be imported. |
| BD-DEC-004 | Claim binds only to one verified User. | ADR-042 and v1.1 Freeze claim boundary | Claim grants no target, Membership, Permission, or import authority. |
| BD-DEC-005 | Workspace and Business selection occurs after claim and is explicit. | ADR-003, ADR-040, ADR-042 “Workspace and Business Selection” | No fallback tenant; Business Unit is not a Business substitute. |
| BD-DEC-006 | Proposal review is field-level and distinguishes source/status. | ADR-014; Threat Model BD-SEC-R043–R048 | Users can explain, correct, reject, and partially accept proposals. |
| BD-DEC-007 | Silent merge and automatic canonical overwrite are prohibited. | ADR-042 “Existing Business Import”; BD-SEC-R047–R050 | Existing canonical state remains until owner-authorized change. |
| BD-DEC-008 | Accepted Discovery evidence enters as Candidate Facts only. | ADR-016; v1.1 Freeze Candidate Fact boundary | Candidate Facts remain proposed evidence under governed review. |
| BD-DEC-009 | Discovery never publishes Business DNA. | ADR-005; ADR-016; ADR-042 | Publication remains a separate Registry action and Permission. |
| BD-DEC-010 | Support access is deny-by-default and cannot silently recover by reassignment/edit. | Permission Catalog §§11, 15; Policy Pack §7 | Self-service or strongly governed case-bound recovery is preferred. |
| BD-DEC-011 | Eligible temporary working data supports expiry, abandonment, and deletion. | ADR-042 rights/retention; Policy Pack §6 | Minimized Audit/Security/backups/holds are disclosed separately. |
| BD-DEC-012 | Recovery fails closed when proof or authoritative outcome is uncertain. | ADR-042 “Recovery”; v1.1 Freeze recovery boundary | No guessed success, weakened proof, inferred target, or duplicate write. |

## 21. Constitution Check Inputs

This is not the Constitution Check and does not close `BD-RDY-D02`. It records mandatory inputs the later check must evaluate against [the repository Constitution](../../.specify/memory/constitution.md) and governing templates.

| Check area | Feature-specification input |
| --- | --- |
| Controlling Freeze and Accepted ADRs | Core Platform v1.1 Freeze; ADR-003, ADR-005, ADR-014, ADR-016, ADR-018, ADR-040, ADR-042 |
| Canonical owner and write authority | Discovery owns temporary state only; Core Identity/Authorization/Organization, Business Architect, Business DNA Registry, Audit, Privacy/Legal, Product/subscription, and OS owners retain their boundaries |
| Workspace and organization scope | Exact Workspace and Business; no fallback; Business Unit remains distinct; target and Permission revalidated |
| OS independence and cross-domain contracts | No OS dependency or operational write; owner contracts are required for identity, organization, Candidate Facts, DNA, Audit, and downstream Product Hub |
| Capability/Knowledge/Recommendation/AI boundaries | Inference remains explainable proposal; no direct canonical or DNA write; Recommendations/Product Hub remain downstream |
| Commercial and operational lifecycle | No plan, subscription, entitlement, billing, payment, readiness, OS, or operational effect |
| Security, privacy, Audit, observability | Threat Model, Permission Catalog, Policy Pack, §§14 and 19 of this specification; later contracts/tests must prove controls |
| Arabic/English, RTL/LTR, accessibility | §§15–16 and BD-NFR-011–017, R029–R033; acceptance BD-AC-027–028 |
| Compatibility and migration | Additive optional branch; account-first preserved; no existing canonical data migration defined by this specification |
| Required test evidence | Later risk-based unit/contract/integration/E2E, tenancy, authorization, accessibility, localization, Audit, recovery, and abuse evidence; no tests created here |
| Documentation synchronization | Later contracts, Constitution result, plan/tasks/test/rollout documents, authority/readiness records, and affected product documentation must remain synchronized |

## 22. Success Criteria

The feature direction is successful at specification level when later evidence can demonstrate all of the following without relying on an implementation-specific proxy:

| Success ID | Measurable product outcome |
| --- | --- |
| BD-SC-001 | Every eligible visitor can choose Discovery-first or account-first, and neither path requires the other. |
| BD-SC-002 | No anonymous session, preview, claim, or import creates an unauthorized canonical, commercial, readiness, OS, or operational effect. |
| BD-SC-003 | Every inferred preview fact is visibly distinct from user-provided content and supports explanation and correction. |
| BD-SC-004 | Every successful claim has one verified User owner and grants no target or Permission authority. |
| BD-SC-005 | Every import uses one explicit current authorized Workspace and Business; no fallback or cross-tenant target is possible. |
| BD-SC-006 | Every submitted field has an attributable explicit accepted/corrected decision and provenance; rejected/unresolved items are not imported. |
| BD-SC-007 | Every accepted Discovery item enters Business Architect as Candidate Fact evidence and no Discovery component publishes Business DNA. |
| BD-SC-008 | Every supported interruption produces a safe continuation, retry, restart, account-first, deletion, or blocked escalation outcome without weakened proof. |
| BD-SC-009 | Every ordinary telemetry path excludes raw answers, Snapshot content, credentials, keys, and unauthorized tenant data. |
| BD-SC-010 | Every critical surface supports required keyboard, semantic, focus, error, non-color, English/Arabic, LTR/RTL, and responsive behavior. |
| BD-SC-011 | Every consequential action and denial has the required minimized, tenant-scoped, authoritative evidence and an accurate user-visible outcome. |
| BD-SC-012 | Every deferred design/contract/Legal/implementation choice remains explicitly gated and cannot be mistaken for implementation authorization. |

## 23. Assumptions and Dependencies

### 23.1 Confirmed assumptions

- ADR-042 remains Accepted and Core Platform Architecture v1.1 remains the controlling applicable Freeze.
- The synchronized Customer Journey continues to preserve both paths.
- Security Threat Model (`BD-RDY-P01`), Permission Catalog (`BD-RDY-P02`), and Policy Readiness Pack (`BD-RDY-P03`–`P09`) remain approved policy inputs at their stated architecture-policy level.
- Core Identity, Core Authorization, Core Workspace/Business owners, Business Architect, Business DNA Registry, Audit, Privacy/Legal, and Product/OS owners remain distinct.
- This specification is implementation-neutral and may be invalidated by a later authority change; such a change requires explicit Governance reconciliation.

### 23.2 External dependencies

- Core Identity must later expose an approved current identity-verification and account-status contract.
- Core Authorization and organization owners must later expose exact Workspace/Business visibility, creation, target, Membership, Permission, and lifecycle decisions.
- Business Architect must later define Candidate Fact intake, review, provenance, per-item outcome, idempotency, and failure contracts.
- Business DNA Registry must preserve separate publication Permission and invariant validation.
- Audit/observability owners must later approve event, field, access, retention, correlation, detection, and failure contracts.
- Privacy/Legal and Platform Operations must later approve concrete legal basis, classification, notices, lifecycle values, regions, processors, transfers, encryption/control profiles, support access, and abuse limits before implementation.

## 24. Open Specification Details

The following details are intentionally deferred. “Primary classification” names the next gate that owns the first concrete decision; later artifacts may depend on it too.

| Deferred detail | Current boundary | Primary downstream classification | Additional dependency |
| --- | --- | --- | --- |
| Final question inventory | Must be purpose-limited, minimal, explainable, validated, and avoid unapproved regulated/special data | Constitution Check input | Contract input; Legal approval input |
| Exact user-facing wording | Must preserve tone, non-binding status, consent separation, accessible/localized meaning, and no dark patterns | Design-system input | Legal approval input for notices |
| Final field inventory | Must preserve source type, field authorization, provenance, conflict review, minimization, and owner | Contract input | Constitution Check input |
| Final identity-proof and verification mechanism | Core Identity-owned; current verification before claim; no token-only proof | Contract input | Implementation-plan input; Legal approval input where applicable |
| Session persistence and browser-storage decision | Temporary, secret-safe, deletable, integrity-protected, purpose-limited | Implementation-plan input | Contract input; Constitution Check input |
| Numeric session/working-data expiry values | Must be risk-, purpose-, Legal-, rights-, backup-, and jurisdiction-approved | Legal approval input | Contract input; implementation-plan input |
| Final runtime Permission identifiers and role mappings | Must preserve the logical actions/scopes/denials in the Permission Catalog | Contract input | Constitution Check input |
| Final API shape and versioning | Must preserve owner, scope, authorization, idempotency, failure, Audit, and compatibility boundaries | Contract input | Constitution Check input |
| Final data/schema/storage design | Must preserve temporary/canonical separation, tenant scope, minimization, lifecycle, provenance, suppression, and owners | Contract input | Implementation-plan input |
| Final concurrency and idempotency strategy | Must reconcile claim/import/deletion owner outcomes and prohibit hidden last-write-wins | Contract input | Implementation-plan input |
| Final telemetry, Audit, Security, and analytics event names/fields | Must use approved purpose/field allowlists, separation, tenant isolation, and redaction | Contract input | Legal approval input; implementation-plan input |
| Final numeric rate limits, payload limits, retry budgets, challenges, and cost controls | Must be risk-based, accessible, privacy-approved, monitored, and non-enumerating | Implementation-plan input | Contract input; Legal approval input |
| Final deployment regions, processors, subprocessors, and transfer mechanisms | No affected processing without approved jurisdiction/location/profile | Legal approval input | Implementation-plan input |
| Final UI visual design and components | Must implement §§3, 10, 15, and 16 without changing authority or behavior | Design-system input | Constitution Check input |
| Final browser-support matrix and progressive-enhancement thresholds | Must preserve safe state, accessibility, account-first, and recovery | Constitution Check input | Implementation-plan input |
| Final performance, availability, and operational targets | Must be risk/capacity-based and preserve correctness, Security, and safe degradation | Constitution Check input | Implementation-plan input; rollout input |

## 25. Remaining Delivery-Definition and Authorization Gates

This document changes only `BD-RDY-D01`. It does not close or create the following artifacts identified by the [Readiness Validation](../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md), “Delivery-definition blockers”:

| Gate | Status after this specification | Required closure evidence |
| --- | --- | --- |
| `BD-RDY-D02` — Constitution Check | Open | Approved pre-research and post-design PASS records against controlling authority and this specification |
| `BD-RDY-D03` — API/domain/data contracts | Open | Approved versioned owner/consumer contracts and logical data definitions |
| `BD-RDY-D04` — implementation plan | Open; planning not authorized by this document | Approved plan and design artifacts after prerequisites |
| `BD-RDY-D05` — task breakdown | Open; task creation not authorized | Approved dependency-ordered tasks with traceability after plan |
| `BD-RDY-D06` — test strategy | Open | Approved risk-based test strategy covering policy, tenancy, authorization, journeys, accessibility, localization, Audit, and recovery |
| `BD-RDY-D07` — rollout and operational readiness | Open | Approved staged rollout, rollback, monitoring, incident, support, and release evidence |
| `BD-RDY-I01` — explicit implementation authorization | Open | Dated, scoped Human/Product/Governance authorization citing closure of all required gates |

No code, schema, API, UI implementation, middleware, infrastructure, migration, deployment, subscription/entitlement activation, OS configuration, or operational behavior is authorized.

## 26. `BD-RDY-D01` Closure Decision

### 26.1 Closure criteria evaluation

| Criterion | Result | Evidence in this document |
| --- | --- | --- |
| Design direction is approved | Met | §§2.3 and 3 |
| Scope and out-of-scope are explicit | Met | §4 |
| Personas and journeys are complete | Met | §§5–6 |
| Functional and non-functional requirements are registered | Met | §§7–8 |
| State model is defined | Met | §9 |
| Surfaces and interactions are defined | Met | §10 |
| Permissions are mapped | Met | §13 |
| Security and Privacy behavior is explicit | Met | §14 |
| Validation and errors are defined | Met | §§11–12 |
| Accessibility and localization requirements are present | Met | §§15–16 |
| Given/When/Then acceptance criteria exist | Met | §17 |
| Source-to-requirement traceability exists | Met | §19 |
| Deferred implementation details are explicit | Met | §24 |

### 26.2 Decision

`BD-RDY-D01` is **Closed at the governed Feature Specification level**.

Closure does not:

- close the Constitution Check (`BD-RDY-D02`);
- close API/domain/data contracts (`BD-RDY-D03`);
- create or authorize an implementation plan (`BD-RDY-D04`);
- create or authorize tasks (`BD-RDY-D05`);
- close test or rollout readiness (`BD-RDY-D06`–`D07`);
- select technologies, providers, regions, schemas, APIs, or numeric limits; or
- authorize implementation (`BD-RDY-I01`).

## 27. Validation and Final Conclusion

### 27.1 Specification validation

| Validation item | Result |
| --- | --- |
| Optional Discovery-first and preserved account-first paths | Pass |
| Temporary/non-canonical session and Snapshot | Pass |
| Claim requires verified identity and binds only to User | Pass |
| Explicit Workspace and Business selection; no fallback tenant | Pass |
| Exact target-scoped authorization and execution-time revalidation | Pass |
| Field-level human review, correction, rejection, and partial acceptance | Pass |
| Candidate Fact intake only; no direct Business DNA publication | Pass |
| No commercial, entitlement, readiness, OS, or operational effect | Pass |
| Security, privacy, rights, retention, Audit, backup, legal-hold, support, residency, and abuse boundaries | Pass |
| Accessibility, English/Arabic, RTL/LTR, mobile/desktop behavior | Pass |
| Unique FR, NFR, state, surface, error, and acceptance identifiers | Pass subject to repository validation performed before commit |
| No API, schema, code, middleware, infrastructure, migration, plan, task, or test artifact | Pass |
| Implementation authorization | None |

### 27.2 Final conclusion

`BD-RDY-D01 is closed at the governed Feature Specification level. Business Discovery may proceed to Constitution Check and API/domain/data contract definition. Implementation planning, task creation, and coding remain unauthorized until the remaining delivery-definition gates are complete.`
