# Business Discovery API / Domain / Data Contracts

| Metadata | Value |
| --- | --- |
| Status | **Approved Contract Definition Input** |
| Readiness blocker | **BD-RDY-D03** |
| Scope | Optional pre-registration Business Discovery MVP |
| Reviewed artifact | [Business Discovery MVP Feature Specification](../03-product-specifications/BUSINESS-DISCOVERY-MVP-FEATURE-SPECIFICATION.md) |
| Constitution status | **Approved-with-conditions** |
| Authority basis | Accepted ADR-042, Core Platform Architecture v1.1 Freeze, completed Business Discovery Constitution Check, Core API/Event architecture, and approved Security, Permission, and Policy inputs |
| Product owner | Product Owner / Human Architecture Authority |
| Date | 2026-07-23 |
| Version | 1.0 |
| Implementation authorization | **None** |
| Planning authorization | **None** |
| Code impact | **None** |
| Supersedes | Nothing |
| Out of scope | Implementation technology and post-MVP capabilities |

> **Governance boundary:** This document defines technology-independent meanings and owner
> contracts. It creates no physical API route, wire schema, database schema, migration, code,
> infrastructure, plan, task, test, deployment, or runtime authority. API/domain/data contract
> definition does not authorize implementation planning or implementation.

## 1. Authority, Interpretation, and Contract Principles

### 1.1 Authority basis

| Authority level | Source | Contract effect |
| --- | --- | --- |
| Frozen authority | [Core Platform Architecture v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md) | Controls the optional paths, temporary state, claim, ownership, authorization, Candidate Fact, Privacy, commercial, readiness, and OS boundaries. |
| Accepted ADR authority | [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md), [ADR-003](../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md), [ADR-005](../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md), [ADR-014](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md), [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md), [ADR-018](../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md), [ADR-035](../00-governance/ADR/ADR-035-technology-independent-compatible-contracts.md), [ADR-036](../00-governance/ADR/ADR-036-contract-first-api-architecture.md), [ADR-038](../00-governance/ADR/ADR-038-append-only-audit-history.md), and [ADR-040](../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md) | Preserves canonical scope, human authority, owner-controlled mutation, compatible contracts, append-only Audit, and Core/OS separation. |
| Governance review | [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md), [Business Discovery Readiness Validation](../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md), and [Business Discovery Constitution Check](../00-governance/reviews/BUSINESS-DISCOVERY-CONSTITUTION-CHECK.md) | Confirms architecture acceptance, readiness staging, D02 closure, eight mandatory D03 conditions, and 21 contract deferrals. |
| Product authority input | [Business Discovery MVP Feature Specification](../03-product-specifications/BUSINESS-DISCOVERY-MVP-FEATURE-SPECIFICATION.md) | Defines the approved product journeys, behavior, states, validation, errors, permissions, and acceptance outcomes. |
| Core milestone baseline | [Data Ownership](../02-core-platform/04-DATA-OWNERSHIP.md), [Permission Model](../02-core-platform/05-PERMISSION-MODEL.md), [Security Model](../02-core-platform/08-SECURITY-MODEL.md), [Event Architecture](../02-core-platform/06-EVENT-ARCHITECTURE.md), and [API Philosophy](../02-core-platform/07-API-PHILOSOPHY.md) | Supplies owner, scope, authorization, request, error, idempotency, event, versioning, Audit, and compatibility rules. |
| Approved bounded policy input | [Security Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md), [Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md), and [Policy Readiness Pack](../02-core-platform/security/BUSINESS-DISCOVERY-POLICY-READINESS-PACK.md) | Supplies binding feature-specific Security, Permission, Privacy, Identity, lifecycle, telemetry, encryption, residency, and abuse constraints. |
| Genesis and Constitution | [Customer Journey](../01-genesis/11-CUSTOMER-JOURNEY.md), [Canonical Glossary](../00-governance/glossary/GLOSSARY.md), and [NexoraXS Constitution](../../.specify/memory/constitution.md) | Preserves both journeys, canonical terminology, contract-first evolution, accessibility, localization, and delivery gates. |

When this document conflicts with a Freeze or Accepted ADR, the higher authority controls and the
affected contract stops for Governance reconciliation. Proposal history is not treated as
Accepted authority. Logical field and operation names below describe stable meaning; they are not
final runtime names.

### 1.2 Binding contract principles

| Contract ID | Binding principle |
| --- | --- |
| BD-CON-001 | Anonymous Discovery creates no canonical Workspace, Business, Membership, Permission, Business DNA, commercial, readiness, OS, or operational record. |
| BD-CON-002 | Anonymous session answers, previews, and lifecycle state are temporary working data, never canonical customer truth. |
| BD-CON-003 | Claim atomically binds custody of one eligible session to one verified User only. |
| BD-CON-004 | Claim grants no Workspace, Business, Membership, Permission, subscription, entitlement, readiness, OS, or operational authority. |
| BD-CON-005 | Workspace and Business targets are explicit, independently selected, and verified against canonical Core owners. |
| BD-CON-006 | No fallback, remembered, inferred, URL-provided, or browser-asserted tenant or Business may authorize an operation. |
| BD-CON-007 | The owning domain revalidates current Membership, Permission, target state, and resource scope at every protected mutation. |
| BD-CON-008 | Accepted Discovery proposals enter Business Architect only as provenance-bearing Candidate Facts. |
| BD-CON-009 | Discovery cannot publish or write Business DNA directly. |
| BD-CON-010 | Silent merge, implicit bulk acceptance, and automatic canonical overwrite are prohibited. |
| BD-CON-011 | Provenance, source version, proposal version, actor decision, and target context remain attributable across import. |
| BD-CON-012 | User-provided and inferred facts remain distinguishable through preview, proposal, Candidate Fact, and review. |
| BD-CON-013 | Every retryable mutation declares semantic idempotency scope, duplicate behavior, and conflicting-reuse behavior. |
| BD-CON-014 | Optimistic version, stale-state, race, uncertain-outcome, and current-read behavior are explicit. |
| BD-CON-015 | Uncertain identity, custody, state, target, authorization, owner commit, Legal, or Security status fails closed or remains visibly pending. |
| BD-CON-016 | Authoritative Audit and operational telemetry are separate contracts and neither substitutes for the other. |
| BD-CON-017 | Contracts expose and retain the minimum authorized content; credentials, raw answers, Snapshot content, and Candidate Fact values are excluded from ordinary telemetry. |
| BD-CON-018 | Recovery never weakens identity proof, session control, tenant isolation, current authorization, expiry, or Audit. |
| BD-CON-019 | Deletion propagation, retained evidence, legal hold, backup suppression, partial completion, and proof are explicit owner states. |
| BD-CON-020 | Technology, protocol, persistence, vendor, region, processor, algorithm, and final numeric policy remain deferred unless a stable business contract requires their meaning. |

## 2. Domain Boundary

Business Discovery is a bounded Core capability for temporary pre-registration discovery,
claim-request orchestration, target-selection orchestration, field-level proposal review, and
Candidate Fact import orchestration.

| Contract ID | Boundary decision |
| --- | --- |
| BD-CON-021 | Its purpose is to provide an optional, explainable preview and an authorized path for confirmed evidence into Business Architect. |
| BD-CON-022 | It owns temporary session lifecycle, temporary answers/inferences, preview revisions, proposal decisions, temporary consent evidence, and orchestration state. |
| BD-CON-023 | Core Identity owns User authentication and verification; Discovery stores only bounded references and cannot create or redefine User identity. |
| BD-CON-024 | Core Workspace and Business owners create and mutate canonical organization identity; Discovery may request owner operations but owns no organization record. |
| BD-CON-025 | Business Architect owns Candidate Fact intake, review, correction, rejection, acceptance, pipeline state, and governed publication preparation. |
| BD-CON-026 | Business DNA Registry alone owns published Business DNA and its versions; Discovery has no publication command. |
| BD-CON-027 | Business Brain and Recommendation owners remain downstream of governed Business DNA; Discovery preview is not a canonical Recommendation. |
| BD-CON-028 | Product Hub, subscriptions, plans, entitlements, billing, setup, readiness, and activation remain outside Discovery and receive no mutation from these contracts. |
| BD-CON-029 | Operating Systems own operational behavior and data; Discovery creates no OS configuration, readiness, or operational fact and requires no OS dependency. |
| BD-CON-030 | Cross-boundary work uses versioned owner commands, queries, results, and committed facts; shared deployment never permits direct table or private-model access. |

### 2.1 Dependencies

Upstream dependencies are Core Identity/verification, Core Authorization, Core Workspace/Business
owners, approved notice/localization context, Security/abuse controls, and canonical clock/version
evidence. Downstream dependencies are Business Architect, Audit, deletion orchestration,
observability, approved support handling, and—only after governed Business DNA—Recommendations and
Product Hub.

Prohibited responsibilities include canonical identity or organization writes, Business DNA
publication, Permission decisions on behalf of Core Authorization, legal-basis invention,
subscription/entitlement mutation, OS setup, operational records, marketing reuse, model training,
and cross-tenant composition.

## 3. Aggregate and Conceptual Entity Model

These eleven types are conceptual contract models, not tables, records, wire schemas, ORM types,
or final aggregate implementation. A reference is an opaque owner reference unless explicitly
described otherwise.

Conceptually, `DiscoverySession`, `ProposalSet`, `ImportOperation`, `DeletionRequest`, and
`SupportRecoveryCase` are lifecycle/consistency roots. `DiscoveryAnswer`, `DiscoveryPreview`,
`ClaimRecord`, `TargetSelection`, and `ProposalItem` are root-owned children or evidence objects.
`CandidateFactEnvelope` is a boundary object whose accepted intake becomes Business
Architect-owned; it is never a Discovery-owned canonical Business aggregate.

### 3.1 `DiscoverySession` aggregate

| Contract ID | Conceptual fields | Contract meaning |
| --- | --- | --- |
| BD-CON-031 | `discovery_session_id`, `public_reference`, `session_status`, `created_at`, `updated_at`, `expires_at`, `invalidated_at`, `abandoned_at`, `deleted_at`, `claimed_at`, `claimed_by_user_id`, `claim_version`, `consent_context`, `locale_context`, `jurisdiction_context`, `current_step`, `completion_state`, `preview_version`, `optimistic_version`, `source_context`, `risk_flags`, `lifecycle_evidence_reference` | Aggregate root for temporary Discovery state. `discovery_session_id` is an internal stable identifier. `public_reference` is a non-secret support/display correlation and never authorizes access. Status/timestamps/versions are lifecycle state; claim fields are custody; consent/locale/jurisdiction/source are evidence context; step/completion/preview are mutable product state; risk flags and lifecycle references are restricted Security/lifecycle evidence. Creation identity is immutable; lifecycle timestamps become immutable facts once set; current step, completion, preview and optimistic versions are controlled mutable state. Raw session credentials, risk detail, identifiers, answers, and inferred content are prohibited from ordinary telemetry. |

The raw anonymous session-control credential is not a general entity field. It is secret proof
handled through an approved credential mechanism; only a protected, non-reversible control
reference or verification outcome may be retained where policy permits.

### 3.2 Remaining conceptual types

| Contract ID | Type | Required conceptual fields | Contract meaning |
| --- | --- | --- | --- |
| BD-CON-032 | `DiscoveryAnswer` | `question_id`, `answer_value`, `answer_type`, `answer_source`, `supplied_at`, `corrected_at`, `sensitivity_class`, `validation_status`, `locale`, `provenance_reference` | Temporary session child. Value is sensitive-by-default, mutable only through eligible answer correction, and excluded from ordinary telemetry/Audit. Question/source identity and provenance remain attributable. |
| BD-CON-033 | `DiscoveryPreview` | `preview_id`, `preview_version`, `generated_at`, `provided_facts`, `inferred_facts`, `explanations`, `confidence_category`, `warnings`, `non_binding_notice_version`, `consent_context_reference` | Versioned, temporary, non-canonical snapshot for preview and proposal generation. It is not Business DNA, a Recommendation, or authority for a write. |
| BD-CON-034 | `ClaimRecord` | `claim_id`, `discovery_session_id`, `user_id`, `claim_attempt_id`, `claim_status`, `requested_at`, `resolved_at`, `identity_verification_reference`, `prior_custody_state`, `resulting_custody_state`, `denial_reason`, `idempotency_key`, `Audit_reference` | One attempt/outcome record for atomic custody binding. Secret proof is not stored in it. Denial reasons are controlled categories, not attacker-useful detail. |
| BD-CON-035 | `TargetSelection` | `Workspace_id`, `Business_id`, `selected_by_user_id`, `selected_at`, `authorization_context`, `permission_snapshot_reference`, `target_state_snapshot`, `revalidation_required` | Temporary explicit selection. A snapshot is evidence only, never current authorization. Selection creates no Membership, Permission, or canonical relationship. |
| BD-CON-036 | `ProposalSet` | `proposal_set_id`, `discovery_session_id`, `target_business_id`, `generated_at`, `source_preview_version`, `source_session_version`, `proposal_items`, `proposal_set_status`, `optimistic_version` | Versioned review aggregate for one exact Business. It cannot span Workspaces or Businesses and cannot mutate the target. |
| BD-CON-037 | `ProposalItem` | `proposal_item_id`, `field_identifier`, `proposed_value`, `proposed_value_type`, `source_type`, `provenance_reference`, `inferred_or_provided`, `existing_canonical_value_reference`, `comparison_status`, `user_decision`, `corrected_value`, `decision_at`, `decision_by_user_id`, `conflict_reason`, `eligibility_status` | Field-level proposal and explicit human decision. Values are sensitive; existing values remain owner references or authorized projections. Decision history is attributable and cannot imply publication. |
| BD-CON-038 | `CandidateFactEnvelope` | `candidate_fact_id`, `target_business_id`, `field_identifier`, `proposed_value`, `source_context`, `provenance`, `submitted_by_user_id`, `submitted_at`, `originating_session_id`, `originating_proposal_item_id`, `authorization_context`, `review_status`, `lifecycle_status`, `Business Architect reference` | Provenance-bearing intake request/receipt under Business Architect ownership. A Discovery-created client reference is not canonical Candidate Fact identity until Business Architect accepts the intake contract. |
| BD-CON-039 | `ImportOperation` | `import_operation_id`, `proposal_set_id`, `target_business_id`, `requested_by_user_id`, `submitted_items`, `accepted_items`, `rejected_items`, `failed_items`, `result_status`, `requested_at`, `completed_at`, `idempotency_key`, `retry_of_operation_id`, `stale_snapshot_status`, `transaction_reference`, `Audit_reference` | Long-running or immediate logical operation recording per-item owner outcomes. It is not one cross-domain database transaction. |
| BD-CON-040 | `DeletionRequest` | `deletion_request_id`, `discovery_session_id`, `requester_context`, `verification_reference`, `request_scope`, `request_status`, `requested_at`, `resolved_at`, `legal_hold_status`, `retained_evidence_reference`, `propagation_status` | Rights/lifecycle orchestration record. It exposes category/status, not deleted content, and separates working-data deletion from minimized retained evidence. |
| BD-CON-041 | `SupportRecoveryCase` | `support_case_id`, `discovery_session_id`, `requester_user_id`, `case_status`, `recovery_reason`, `evidence_reference`, `support_operator_id`, `authorization_reference`, `opened_at`, `resolved_at`, `recovery_outcome`, `Audit_reference` | Case-, purpose-, scope-, and time-bound recovery evidence. It grants no raw-content browsing, claim reassignment, tenant mutation, or canonical edit. |

## 4. Ownership and Custody

### 4.1 Ownership and authority matrix

| Type | Logical owner | Custodian | Mutation authority | Read authority | Canonical status | Tenant scope | Lifecycle/deletion authority | Audit authority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DiscoverySession | Discovery capability | Anonymous controller, then claimed User for custody only | Discovery owner under lifecycle guards | Own controller/User; bounded support/security by case | Temporary/non-canonical | None before claim; no Workspace attachment after claim | Discovery under Privacy/Legal policy | Audit owns consequential records |
| DiscoveryAnswer | Discovery capability | Session custody | Discovery owner from eligible own input | Own controller/User; authorized review only after target filtering | Temporary/non-canonical | Session; later target proposal context only | Discovery until lawful import/expiry/deletion | Values excluded from Audit by default |
| DiscoveryPreview | Discovery capability | Session custody | Discovery generation/correction workflow | Own controller/User | Temporary/non-canonical | Session only | Discovery | Generation/outcome metadata only |
| ClaimRecord | Discovery claim owner; Audit owns Audit Record | Verified User relationship | Claim transaction only | Same User; restricted security/support | Authoritative custody evidence, not Business fact | User only, not Workspace/Business | Policy-controlled evidence; not ordinary session content | Audit Service |
| TargetSelection | Discovery orchestration | Claimed User | Explicit select/reselect after owner query | Selected User and approved services | Temporary evidence only | Exact Workspace and Business references | Discovery; invalidates on state/permission change | Privileged outcome as policy requires |
| ProposalSet | Discovery capability | Claimed User in selected target | Field decision operations only | Exact authorized target/fields | Temporary/proposed | One Workspace/Business | Discovery until import/expiry/deletion policy | Decision/outcome metadata |
| ProposalItem | Discovery capability until submitted | Decision actor | Authorized accept/reject/correct | Exact authorized field scope | Proposed | One Business/field | Discovery; imported provenance transfers under owner policy | Decision Audit, no raw value by default |
| CandidateFactEnvelope | Business Architect after accepted intake | Business Architect pipeline | Business Architect owner only | Authorized reviewer/approver | Proposed owner-domain evidence, not published DNA | One Business | Business Architect/Privacy policy | Business Architect producer; Audit owns record |
| ImportOperation | Discovery orchestration; item outcomes from Business Architect | Requesting User relationship | Discovery operation state; Business Architect owns item commit | Exact authorized actor/support | Operation evidence; not canonical Business fact | One Business | Owner-specific policy | Audit owns consequential history |
| DeletionRequest | Privacy/right owner plus affected data owners | Verified requester relationship | Authorized rights workflow and each data owner | Verified requester; Privacy/Legal | Authoritative request evidence, not source content | Exact subject/session/scope | Each owner; Legal controls hold | Audit Service |
| SupportRecoveryCase | Support case owner | Verified requester/case team | Approved support workflow only | Case-scoped authorized operators/requester | Authoritative case evidence, no Business ownership | Exact case/session/User | Support/Privacy policy | Audit Service |

### 4.2 Lifecycle ownership overlay

| Lifecycle view | Owner and custody | Scope | Mutation/deletion/Audit consequence |
| --- | --- | --- | --- |
| Anonymous working state | Discovery owns temporary state; valid controller evidence permits bounded custody actions | Session only; no Workspace or Business | Discovery lifecycle guards; eligible deletion/expiry; no canonical write; minimized lifecycle/Security evidence |
| Claimed working state | Discovery still owns temporary state; one verified User is recorded as custodian | User binding only; target remains unselected or temporary | No claim transfer; rights/deletion policy applies; claim Audit is authoritative and separate |
| Imported evidence state | Business Architect owns accepted Candidate Facts; Discovery owns only operation/result references | Exactly one authorized Workspace/Business context | Business Architect lifecycle/rights control; Discovery cannot delete or rewrite owner data; per-item Audit/provenance remains |
| Retained-evidence state | Audit, Security, Privacy/Legal, support, or deletion owner controls its minimized evidence | Exact actor/subject/scope and purpose | No raw working content by default; owner retention/hold/rights rules apply; correction uses new evidence rather than historical rewrite |

### 4.3 Custody-state rules

| Contract ID | Custody state | Binding rule |
| --- | --- | --- |
| BD-CON-042 | Anonymous custody | Possession of valid session-control evidence permits only eligible own-session actions; it proves neither User identity nor tenant authority. |
| BD-CON-043 | Claim eligibility | Verified authentication, current identity verification, eligible lifecycle, valid continuity/recovery proof, latest required version, and no conflicting claim are mandatory. |
| BD-CON-044 | Claimed custody | Successful claim records one immutable User binding; later Workspace/Business selection remains a separate authorization decision. |
| BD-CON-045 | Wrong User | An account mismatch fails closed without revealing the other User, target, content, or exact ownership state. |
| BD-CON-046 | Already claimed | Same-User semantic retry returns the committed outcome; a different User receives a non-enumerating denial and no transfer. |
| BD-CON-047 | Terminal custody | Expired, invalidated, abandoned, or deleted sessions cannot be claimed; abandonment may permit policy-approved restart/deletion, while deletion is terminal. |
| BD-CON-048 | Support custody | Support may inspect minimized case evidence only; support never becomes session custodian and cannot browse raw content or reassign claim. |
| BD-CON-049 | Tenant non-transfer | Custody never transfers to a Workspace or Business. Target references are operation context, not ownership of the session. |
| BD-CON-050 | Claim reversibility | MVP claim is irreversible as a custody fact. It may be invalidated for Security handling, but not rolled back, reassigned, or transferred; a dispute follows approved recovery/governance without rewriting history. |
| BD-CON-051 | Lifecycle evidence | Every custody transition records prior/result state, actor or controller class, time, version, result/reason category, correlation, and authoritative Audit reference where consequential. |

## 5. State Machine Contract

These are contract-level checkpoints, not one persistence enum or one overloaded aggregate.
Invalid transitions fail closed and do not manufacture success.

| Contract ID / state | Entry preconditions | Allowed operations | Prohibited operations | Guards and valid next states | Authorization / idempotency / Audit | User-visible outcome |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-052 `anonymous_active` | New eligible session; valid control proof | Resume, answer, save, abandon, delete, generate preview when sufficient | Claim, target, import, canonical write | Integrity/current version; → `preview_ready`, `abandoned`, `expired`, `invalidated`, `deleted` | Own-control; saves idempotent by answer/version; creation/security events | Active progress |
| BD-CON-053 `preview_ready` | Current answers and preview committed | Read/regenerate preview, correct answers, register/login, abandon/delete | Target/import/publication | Current preview/session versions; → `anonymous_active`, `registration_required`, terminal states | Own-control; preview generation idempotent by source version; Audit metadata | Non-binding preview |
| BD-CON-054 `registration_required` | User elects claim path | Register/login handoff, return, abandon/delete | Claim before verified identity | Safe handoff/continuity; → `identity_verified`, `preview_ready`, terminal states | Identity owner handles auth; no tenant authority; handoff telemetry only | Registration or login required |
| BD-CON-055 `identity_verified` | Current verified User and eligible session | Request claim, account switch, abandon/delete if eligible | Target/import before claim | Verification and continuity current; → `claim_pending`, `claim_blocked`, terminal states | Verified User; claim key required; attempt Audit | Ready to claim |
| BD-CON-056 `claim_pending` | Claim request accepted for evaluation | Read/reconcile outcome; same-semantic retry | New conflicting claim, target/import | Atomic owner decision; → `claimed`, `claim_blocked`, terminal states | User-only; idempotent; request/outcome Audit mandatory | Pending, never false success |
| BD-CON-057 `claimed` | Atomic User binding committed | Select/create Workspace then Business, request rights/recovery | Claim transfer, implicit target, import without target | Same User/current session; → `target_selected`, `claim_blocked`, `deleted` only where policy permits | Claim creates no tenant authority; same-result retry; success Audit | Claimed by current User |
| BD-CON-058 `target_selected` | Exact authorized Workspace and Business selected | Validate/reselect target, generate proposal set | Import on stale/unverified target | Fresh target/Permission; → `import_review`, `claimed`, `claim_blocked` | Current action/target authorization; selection correlation/Audit as required | Exact target visible |
| BD-CON-059 `import_review` | Current ProposalSet and authorized comparison | Accept/reject/correct items, refresh, submit accepted set | Silent/bulk implicit acceptance, DNA write | Field scope, versions, provenance; → `import_submitted`, `target_selected`, terminal/error state | Per-action Permission; decision idempotency; decision Audit | Field-level review |
| BD-CON-060 `import_submitted` | Nonempty accepted eligible set; execution authorization passes | Read/reconcile operation | Blind resubmit or decision mutation in submitted version | Business Architect outcomes; → `imported`, `partially_imported`, `import_failed` | Import semantic key; submission/outcome Audit | Pending/processing |
| BD-CON-061 `imported` | All submitted eligible items have committed owner outcomes | View result; continue governed Business Architect journey | Re-import same items as new; direct DNA publication | New changed proposal requires new version/review | Duplicate returns same outcome; completion Audit | Imported as Candidate Facts only |
| BD-CON-062 `partially_imported` | Mixed committed/rejected/failed/skipped outcomes | View per-item result; retry eligible failed items | Roll back committed items or blindly retry all | Fresh target/Permission/proposal; → `import_submitted`, `imported`, `import_failed` | Retry links prior operation; per-item Audit | Partial result with next actions |
| BD-CON-063 `import_failed` | No eligible item committed or operation safely failed | Read result; retry eligible operation; revise/reselect | Assume success or bypass cause | Reconcile uncertainty first; → `import_submitted`, `import_review`, `target_selected` | Same key for same meaning; failure Audit | Failed without hidden write |
| BD-CON-064 `expired` | Expiry policy applies | Restart/account-first; rights action if applicable | Resume, claim, import | Terminal for session work; deletion workflow may follow | No mutation except owner lifecycle; expiry/denial evidence as policy | Expired |
| BD-CON-065 `abandoned` | Controller explicitly abandons | Restart/account-first; eligible deletion | Resume/claim unless policy expressly reactivates via a new valid state transition | Default terminal; → `deleted` only | Own-control; abandonment idempotent; lifecycle evidence | Abandoned |
| BD-CON-066 `invalidated` | Integrity, Security, policy, or owner invalidation | Approved recovery/restart/account-first/deletion where eligible | Resume, claim, import | Fail closed; no reactivation without separately approved recovery result | Security owner evidence; Audit where consequential | Unavailable safely |
| BD-CON-067 `claim_blocked` | Claim/target proof cannot be safely established | Reconcile, account switch, approved recovery, restart | Target/import/override | Fresh proof required; → prior eligible state or terminal state | No weaker recovery; denial/recovery Audit | Claim or continuation blocked |
| BD-CON-068 `deleted` | Eligible working data deletion committed or suppression effective | Read minimized completion evidence if authorized; restart/account-first | Resume, preview, claim, import, disclose deleted content | Terminal; restored copies must remain suppressed | Verified request; idempotent deletion; Audit remains separate | Deleted/unavailable |

## 6. Claim Transaction Contract

### 6.1 Preconditions and transaction semantics

| Contract ID | Binding claim contract |
| --- | --- |
| BD-CON-069 | The session must exist in a claim-eligible, non-expired, non-deleted, non-invalidated, unclaimed state; the contract reveals no existence detail before control proof. |
| BD-CON-070 | The current actor must be authenticated and identity-verified through Core Identity; browser, URL, role title, token possession alone, or client User ID is insufficient. |
| BD-CON-071 | The request must carry valid session-control continuity or an approved recovery result, current consent/notice context where required, and the latest session/claim version. |
| BD-CON-072 | No conflicting claim may be in progress; the request carries an idempotency context bound to User, session, operation, version, and normalized meaning. |
| BD-CON-073 | Claim performs an atomic compare-and-transition or equivalent owner-controlled concurrency decision: either one User custody binding commits with its authoritative outcome, or no custody transition commits. |
| BD-CON-074 | Replay and races cannot create a second transition. Same-User/same-meaning retries reconcile to the committed result; conflicting User or meaning fails closed. |
| BD-CON-075 | Stable outcomes are `claimed`, `already_claimed_same_User`, `already_claimed_other_User`, `expired`, `invalidated`, `deleted`, `identity_unverified`, `stale_version`, `concurrency_conflict`, `recovery_required`, `rate_limited`, or `Security_challenge_required`. |
| BD-CON-076 | Claim creates only User custody evidence. It creates no Workspace/Business authority, Membership, Permission, entitlement, canonical Business fact, or Business DNA write. |
| BD-CON-077 | Claim attempt and final outcome are authoritative Audit facts. If commit outcome is uncertain, the API returns pending/reconciliation-required and must not invite a new semantic claim. |

## 7. Target Authorization Contract

### 7.1 Authorization context envelope

| Contract ID | Envelope / rule |
| --- | --- |
| BD-CON-078 | The conceptual authorization context contains `user_id`, `Workspace_id`, `Business_id`, `logical_permission`, `action_id`, `resource_or_field_scope`, `target_state`, `membership_state`, `entitlement_context` when relevant, `verification_context`, `evaluated_at`, `decision`, `denial_reason`, `evidence_reference`, and owner/correlation context. |
| BD-CON-079 | Workspace and Business are selected explicitly; creation is a handoff to Core owner contracts. Multi-Workspace Users must choose one authorized Workspace, and Business Unit is never substituted for Business. |
| BD-CON-080 | A permission snapshot is evidence only. The owner re-reads/revalidates Membership, exact action, resource/field scope, ancestry, lifecycle, and target at execution; stale, revoked, archived, suspended, deleted, inaccessible, cross-Workspace, cross-Business, or fallback context denies safely. |

Authentication never implies authorization. Entitlement context is included only when a later
owner operation legitimately requires it; Discovery claim and Candidate Fact import do not gain
authority from commercial state.

## 8. Proposal, Candidate Fact, and Import Contracts

### 8.1 Proposal and comparison

| Contract ID | Binding contract |
| --- | --- |
| BD-CON-081 | A ProposalSet is generated for one claimed session, one explicit Business, one current preview/session version, and the authorized field inventory only. |
| BD-CON-082 | Each ProposalItem preserves whether its value is user-provided, inferred, or corrected, plus an explanation and immutable source/provenance reference. |
| BD-CON-083 | Existing canonical value is obtained from the canonical owner through an authorized read/reference and is never copied more broadly than the comparison purpose requires. |
| BD-CON-084 | Accept, reject, and correct are distinct field-level decisions with actor, time, version, exact target, and current Permission. Partial acceptance is valid; no decision is inferred from visibility or omission. |
| BD-CON-085 | A changed preview, proposal version, target, Permission, field eligibility, or canonical value marks the affected item stale/conflicted and requires refresh and renewed human decision. |
| BD-CON-086 | Unsupported, sensitive, or regulated fields are withheld or rejected by policy. Silent merge, implicit bulk acceptance, automatic overwrite, and hidden conflict resolution are prohibited. |

### 8.2 Candidate Fact envelope

| Contract ID | Binding contract |
| --- | --- |
| BD-CON-087 | Candidate Fact intake carries identity/reference, exact Business, field identifier, value and value type, provenance and source versions, provided/inferred/corrected classification, explicit user decision, submitting User, current authorization context, source session/proposal, created time, lifecycle/review status, conflict context, and evidence reference. |
| BD-CON-088 | Candidate Facts cannot write or publish Business DNA, claim truth, lose provenance, cross Business/Workspace scope, be reused outside the approved target/purpose, or silently correct canonical facts. Business Architect validates and owns intake. |

### 8.3 Import operation

| Contract ID | Binding contract |
| --- | --- |
| BD-CON-089 | Import eligibility requires claimed custody, exact active target, nonempty accepted/corrected eligible item set, current proposal/session/canonical snapshots, current target-scoped Permission, consent/purpose evidence, and an idempotency context. |
| BD-CON-090 | Partial import is explicitly permitted by authority. Each item receives an atomic owner outcome; the operation may be `submitted`, `imported`, `partially_imported`, `rejected`, `import_failed`, `duplicate_success`, `stale_snapshot`, `unauthorized`, `target_unavailable`, `invalid_payload`, or `recovery_required`. Committed items are not rolled back merely because another item fails. |
| BD-CON-091 | A semantic duplicate returns prior authorized per-item outcomes. Retry includes only eligible failed/uncommitted items, links `retry_of_operation_id`, revalidates everything, and cannot duplicate Candidate Facts. |
| BD-CON-092 | Discovery submits accepted evidence through the Business Architect owner contract and records its result; no shared transaction, direct database write, DNA publication, recommendation, or commercial/OS effect is implied. |

## 9. Idempotency Contract

No numeric idempotency window or storage mechanism is selected. Retention class must be long
enough for the approved retry/reconciliation risk and later policy.

| Contract ID / operation | Semantic scope and key | Duplicate behavior | Conflict and Audit behavior |
| --- | --- | --- | --- |
| BD-CON-093 Start session | Anonymous controller/device context plus one explicit start intent | Return same eligible start outcome where safe; a new intentional start creates a distinct session | Conflicting/replayed creation is rate/abuse evaluated; session-created Audit/telemetry policy applies |
| BD-CON-094 Save answer | Session, question, normalized answer meaning, expected session version | Same value/version converges; later correction creates new version | Same key/different value rejects; record Security signal only when warranted |
| BD-CON-095 Generate preview | Session plus exact answer/source versions and generation purpose | Return/read same preview version | Changed source/answer creates a new preview version; generation outcome correlated |
| BD-CON-096 Claim | Verified User, session, claim operation, expected version, normalized claim meaning | Same User/meaning returns committed or pending reconciled outcome | Different User/meaning denies; attempts/outcome audited |
| BD-CON-097 Target selection | User, claimed session, exact Workspace/Business, selection action/version | Same current selection converges | Changed target meaning requires a new key and fresh authorization; significant outcome audited |
| BD-CON-098 Proposal decision | User, ProposalItem, decision type/value, proposal version | Same decision converges to same decision version | Same key/different decision rejects; decision Audit remains attributable |
| BD-CON-099 Import | User, ProposalSet/version, Business, exact submitted item meanings | Return prior operation/per-item outcomes; no duplicate Candidate Fact | Changed items/target/version reject or form a new reviewed operation; submission/outcome audited |
| BD-CON-100 Deletion request | Verified requester, session/scope, rights purpose, request version | Return same request/propagation state | Broader/different scope requires new verified request; request/outcome audited |
| BD-CON-101 Support recovery action | Case, operator, approved action, target, authorization/evidence version | Return prior action outcome where safe | Different action/scope denies or requires new approval; every attempt/action audited |

## 10. Concurrency and Stale-State Contract

| Contract ID / race | Detection | Required behavior | User outcome / retry / Audit |
| --- | --- | --- | --- |
| BD-CON-102 Session update race | `optimistic_version` mismatch | Fail closed; re-read and preserve no uncommitted overwrite | Show changed progress; reapply explicit correction; significant anomaly only |
| BD-CON-103 Claim race | Claim/custody version or in-progress conflict | One atomic winner; all others reconcile or deny | Pending/same-owner result/generic denial; all attempts/outcome audited |
| BD-CON-104 Answer update race | Question/session version mismatch | Do not last-write-wins silently | Show current answer and require explicit choice; no unsafe retry |
| BD-CON-105 Preview mismatch | Answer/source/preview version differs | Withhold stale preview for import; regenerate | Explain refresh; generation/stale outcome metadata |
| BD-CON-106 Permission revocation | Current owner evaluation differs from evidence snapshot | Deny mutation and discard no prior canonical data | Refresh/request access/reselect; denial audited where consequential |
| BD-CON-107 Business state change | Owner lifecycle/version changed | Deny or require target reselection | Safe unavailable/reselect result; target denial correlation |
| BD-CON-108 Canonical fact change | Existing-value/source version differs | Mark item conflicted/stale; require new comparison/decision | Show authorized current/proposed view; conflict decision audited |
| BD-CON-109 ProposalSet race | Proposal/item optimistic version mismatch | Reject conflicting decision/submission; no implicit merge | Refresh decisions; retain attributable earlier outcomes |
| BD-CON-110 Import race | Operation/item owner receipt or idempotency conflict | Reconcile per item; never duplicate committed Candidate Fact | Pending/duplicate/partial result; submission and reconciliation audited |
| BD-CON-111 Deletion/recovery race | Deletion tombstone, hold, claim, import, or support state changed | Deletion/hold/security precedence is owner-evaluated; fail closed on ambiguity | Pending/partial/denied with safe scope; rights/support Audit |
| BD-CON-112 Ambiguous downstream outcome | Timeout/failure after owner may have committed | Query by operation/idempotency reference before retry | `recovery_required`/pending; never report success or issue blind retry; Audit correlation mandatory |

## 11. Conceptual API Resource and Operation Model

Operations are protocol-neutral capabilities, not HTTP routes, RPC methods, framework handlers,
or final public API commitments. All use the common envelopes in §12, stable errors in §13,
current owner validation, compatible versioning, and safe localized message codes.
For compactness in the operation tables, `ERR-###` means `BD-CON-ERR-###`, and `AUD-###` means
`BD-AUD-###`; no separate identifier family is created by the shorthand.

### 11.1 Discovery session operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-113 `CreateDiscoverySession` | Start optional Discovery; anonymous visitor | Approved purpose/notice available; abuse policy permits; no identity/tenant authority | Request context + notice/locale → session reference, `anonymous_active`, version, allowed actions | Start-intent semantics; none → `anonymous_active` | ERR-025–027, ERR-032 | AUD-001; no answer/credential in response telemetry; secret control proof handled separately |
| BD-CON-114 `ReadEligibleSession` | Read minimum own state; anonymous controller or claimed User | Valid control or verified same-User custody; lifecycle eligible | Session context/expected version → safe session status/progress/version | Read-only; no transition | ERR-001–008, ERR-012 | No raw Audit by default; tenant/content minimization and non-enumeration |
| BD-CON-115 `ResumeDiscoverySession` | Resume eligible work; own controller/User | Integrity, lifecycle, control/custody, expiry, risk checks | Session/control context → current state, version, allowed next actions | Resume semantic key; state unchanged or terminal result | ERR-001–008, ERR-012, ERR-025–027 | AUD-002; no existence/content disclosure on failed proof |
| BD-CON-116 `UpdateDiscoveryAnswers` | Save/correct own temporary answers; controller/User | Eligible session and question; expected version; payload/purpose/abuse validation | Question/value/source/locale/version → validation result and new session version | Per-answer key; `anonymous_active` remains or invalidates prior preview | ERR-001–005, ERR-012, ERR-025–027 | Raw value excluded from Audit/telemetry; sensitivity and provenance retained in working data |
| BD-CON-117 `AbandonDiscoverySession` | Stop Discovery; controller/User | Eligible control/custody; not deleted | Session/version → `abandoned` and safe next actions | Same request converges; eligible state → `abandoned` | ERR-001, ERR-003–005, ERR-012 | Lifecycle evidence; no canonical effect |
| BD-CON-118 `RequestUnclaimedSessionDeletion` | Delete eligible unclaimed working data; controller | Valid control, unclaimed state, eligibility, no approved hold | Scope/verification/version → DeletionRequest and propagation state | Deletion key; eligible state → pending then `deleted` | ERR-001–005, ERR-012, ERR-028–029, ERR-032 | AUD-017–019; no content in proof; backups remain suppressed on restore |

### 11.2 Preview operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-119 `GenerateDiscoveryPreview` | Generate explainable non-binding preview; controller/User | Sufficient valid answers, current sources, purpose/consent context, cost/abuse permit | Session/answer/source versions → preview reference/version, labels, explanations, warnings | Same source versions converge; `anonymous_active` → `preview_ready` | ERR-001–005, ERR-012, ERR-023, ERR-025–027 | AUD-003; no preview content in ordinary telemetry; provider inputs minimized |
| BD-CON-120 `ReadDiscoveryPreview` | Read own current preview; controller/User | Valid custody/control and preview version | Preview reference/version → authorized preview and notices | Read-only; state remains `preview_ready` | ERR-001–005, ERR-012, ERR-019, ERR-023 | No raw Audit by default; content excluded from analytics/support |
| BD-CON-121 `RegenerateDiscoveryPreview` | Replace stale preview after correction; controller/User | Current eligible answers/source and changed source meaning | Session/versions/purpose → new immutable preview revision | New revision for changed source; prior retained only per policy | ERR-001–005, ERR-012, ERR-019, ERR-023, ERR-025 | AUD-003 with new version; no hidden overwrite of prior evidence |

### 11.3 Claim operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-122 `RequestClaim` | Bind eligible session to verified User | §§4.3 and 6 preconditions; `BD-PERM-CLAIM-OWN-SESSION`; no tenant scope | Claim/session/identity/version/idempotency context → ClaimRecord/outcome | Atomic; `identity_verified` → `claim_pending` → `claimed` or blocked/terminal | ERR-001–012, ERR-025–027, ERR-032 | AUD-004–007; credential never enters payload/Audit; wrong User non-enumerating |
| BD-CON-123 `ReadClaimOutcome` | Reconcile pending/prior own claim; verified User | Same User, claim/session reference, safe proof | Claim attempt/operation reference → committed, pending, or denied safe result | Read-only reconciliation; no new claim | ERR-001–012, ERR-024–027, ERR-032 | Correlated to prior Audit; no other-User details |
| BD-CON-124 `RetryEligibleClaim` | Retry/reconcile same semantic claim; verified User | Same meaning/key; recovery budget; no conflicting User/meaning | Original claim context + current version → same or reconciled result | Must reuse semantic key; never creates second transition | ERR-006–012, ERR-024–027, ERR-032 | AUD-004–006/016; replay/race signals minimized |
| BD-CON-125 `EnterClaimRecovery` | Enter approved identity/custody recovery; verified requester | Normal proof insufficient but approved recovery category exists | Requester/session/reason/minimum evidence → recovery state/next action | Recovery intent idempotent; no custody change by entry | ERR-001–012, ERR-025–027, ERR-030–031 | AUD-020–023 as applicable; no manual reassignment/raw browsing |

### 11.4 Target-selection operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-126 `ListEligibleWorkspaces` | Return minimum selectable Workspaces; claimed User | Current User; list/select action policy; no fallback | User/action/page context → bounded authorized Workspace references | Read-only; no selection | ERR-013, ERR-015, ERR-017, ERR-024–027 | Tenant-safe filtering; existence and fields minimized; telemetry counts only |
| BD-CON-127 `ListEligibleBusinesses` | Return minimum Businesses within explicit Workspace; claimed User | Explicit authorized Workspace, current Membership/action | Workspace/action/page context → bounded authorized Business references | Read-only; no inferred target | ERR-013–017, ERR-024–027 | Ancestry verified; no cross-Workspace data |
| BD-CON-128 `SelectTarget` | Select exact Workspace and Business; claimed User | Both targets explicit/current; select permissions; Business ancestry | Authorization context + targets/version → TargetSelection/version | Same target converges; `claimed` → `target_selected` | ERR-013–018, ERR-024–027 | AUD-008 when privileged; snapshots are evidence only |
| BD-CON-129 `ValidateTarget` | Revalidate target for review/mutation; claimed User/service | Exact current action, target, Membership, Permission, lifecycle | Target/action/resource scope → current allow/deny evidence | Read/decision only; invalid selection returns to `claimed`/reselection | ERR-013–018, ERR-024–027 | AUD-009 for consequential denial; no hidden target disclosure |
| BD-CON-130 `HandoffToCoreCreation` | Request Core Workspace or Business creation handoff; verified User | Exact Core create action; Workspace context required for Business | Owner request context + creation intent → Core operation/reference/result | Core defines idempotency; no Discovery-created entity | ERR-013–018, ERR-024–027, ERR-032 | Core owns Audit; Discovery stores minimum correlation/result; no Business Unit substitution |

### 11.5 Proposal operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-131 `GenerateProposalSet` | Build field-level proposals for exact target; claimed User | Valid target, preview/session/current canonical reads, permitted fields | Target + preview/session/source versions → ProposalSet/version | Same inputs converge; `target_selected` → `import_review` | ERR-013–020, ERR-023–027 | AUD-010; content stays out of telemetry; source/field filtering |
| BD-CON-132 `ReadProposalSet` | Read current authorized comparison; User/reviewer/approver | Exact Business and field-level read authority; current version | ProposalSet/version/field selection → authorized items/comparisons | Read-only | ERR-014–020, ERR-023–027 | Existing/proposed values exposed only to exact field scope |
| BD-CON-133 `AcceptProposalItem` | Explicitly accept one item for submission; authorized actor | `BD-PERM-ACCEPT-CANDIDATE-FACT`, current item/target/Permission | Item/version/decision → new decision version/status | Per-item decision key; remains `import_review` | ERR-015–021, ERR-023–027 | AUD-011; no implicit batch or DNA effect |
| BD-CON-134 `RejectProposalItem` | Explicitly reject one item; authorized actor | `BD-PERM-REJECT-CANDIDATE-FACT`, current item/target | Item/version/reason category → decision version/status | Per-item decision key | ERR-015–021, ERR-023–027 | AUD-011; raw rejected content not copied into Audit |
| BD-CON-135 `CorrectProposalItem` | Record explicit corrected proposal; authorized actor | `BD-PERM-CORRECT-CANDIDATE-FACT`, validation/provenance/current target | Item/version/corrected value/source → new item/decision version | Same correction converges; changed meaning uses new key | ERR-015–021, ERR-023–027 | AUD-011; corrected value sensitive, telemetry-prohibited |
| BD-CON-136 `SubmitSelectedProposals` | Freeze exact accepted/corrected set for import; authorized importer | Nonempty eligible set; current target/Permission/versions/consent | ProposalSet + selected item versions → ImportOperation reference/status | Import semantic key; `import_review` → `import_submitted` | ERR-015–027, ERR-032 | AUD-012; payload minimized to Candidate Fact evidence |

### 11.6 Import operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-137 `CreateImportOperation` | Hand accepted evidence to Business Architect; authorized importer/service | §8.3 eligibility and execution-time target authorization | Import request + CandidateFactEnvelopes → owner receipts/per-item pending outcomes | Same semantic operation reconciles; state becomes submitted then terminal/partial | ERR-015–027, ERR-032 | AUD-012–015; no direct DNA/canonical overwrite |
| BD-CON-138 `ReadImportResult` | Read authorized operation/per-item result; requester/reviewer | Exact Business/read scope and operation relationship | Operation reference → per-item committed/rejected/failed/skipped/duplicate status | Read-only | ERR-014–018, ERR-024–025, ERR-032 | Outcome fields minimized; Audit reference distinct from telemetry |
| BD-CON-139 `RetryEligibleImport` | Retry only uncommitted eligible items; authorized importer | Prior reconciled result, eligible items, fresh proposal/target/Permission | Prior operation + eligible item set/current context → new linked operation/result | New retry ID linked to original; duplicates reconcile | ERR-015–027, ERR-032 | AUD-016 plus normal import events; never retry committed item blindly |

### 11.7 Recovery and support operations

| Contract ID / operation | Purpose and actor | Preconditions / authorization | Input → output | Idempotency / transition | Errors | Audit, Privacy, and Security |
| --- | --- | --- | --- | --- | --- | --- |
| BD-CON-140 `InitiateRecovery` | Start approved self-service recovery; controller/verified requester | Supported recovery reason, minimum proof, rate/abuse permit | State/reason/requester evidence → recovery reference/options | Same intent converges; no direct custody/target mutation | ERR-001–012, ERR-024–031 | AUD-016/020 as applicable; never weakens proof |
| BD-CON-141 `ReadRecoveryState` | Read own safe recovery outcome; verified requester/controller | Relationship/proof to recovery reference | Recovery reference → current safe state/next actions | Read-only | ERR-001–012, ERR-024–031 | No other identity, operator, raw evidence, or Security rule disclosure |
| BD-CON-142 `CreateSupportCase` | Escalate an approved recovery problem; verified requester | Self-service insufficient; support purpose/disclosure available | Exact issue/scope/minimum evidence → SupportRecoveryCase reference/status | Case intent idempotent; no claim/target mutation | ERR-024–031, ERR-032 | AUD-020; case-, purpose-, field-, and time-bound; raw content deny-by-default |

## 12. Common Input and Output Envelopes

Envelope names are conceptual and do not select serialization or protocol.

| Contract ID | Envelope | Required meaning |
| --- | --- | --- |
| BD-CON-143 | Request context | `request_id`, `actor_context`, `session_context`, `target_context`, `idempotency_context`, `locale_context`, `jurisdiction_context`, `client_context`, `expected_version`, `consent_context_reference`, contract version, correlation, and causation where applicable. Client identifiers are inputs to verification, never proof. |
| BD-CON-144 | Success result | `operation_id`, `resource_reference`, `resulting_state`, `version`, stable `user_message_code`, `Audit_reference` where authorized, warnings, and `next_allowed_actions`. It never reports success before the owner outcome is known or safely reconciled. |
| BD-CON-145 | Error result | `error_code`, `error_category`, `retryable`, stable `user_message_code`, `recovery_action`, `Security_disclosure_level`, `correlation_reference`, safe `current_state`/`expected_state`, minimized `target_reference`, and `Audit_reference` where authorized. Generic errors contain no raw answer, preview, proposal, Candidate Fact, credential, internal stack, provider, or unauthorized target detail. |

## 13. Error Contract Register

Error codes are stable machine meanings; localized prose, transport status, and protocol mapping
remain later contract implementation. “Audit” below means minimized authoritative evidence when
the event is consequential or Security-relevant.

| Error ID | Category / condition | Retryable | User-safe message principle | Disclosure boundary | Recovery / Audit / applicability |
| --- | --- | --- | --- | --- | --- |
| BD-CON-ERR-001 | Session / invalid or unproved session | Only with new proof or restart | Cannot open safely | Do not confirm existence, owner, or failed proof | Restart/account-first/support; security denial; session ops |
| BD-CON-ERR-002 | Session / expired | New session only | Temporary Discovery expired | No content or threshold detail | Restart/account-first/rights; lifecycle evidence; session/claim |
| BD-CON-ERR-003 | Session / deleted | No | Discovery unavailable | No deleted content/evidence to unverified actor | Restart/account-first; access attempt as policy; all reads/claim |
| BD-CON-ERR-004 | Session / abandoned | New session unless approved state permits otherwise | Discovery was left and cannot continue | No content beyond safe own context | Restart/account-first/deletion; lifecycle; resume/claim |
| BD-CON-ERR-005 | Session / invalidated | Only approved recovery | Cannot continue safely | No integrity/risk detail | Recovery/restart; Security Audit; all session mutations |
| BD-CON-ERR-006 | Claim / already claimed by same User | Reconcile only | Claim already completed | Same-User safe outcome only | Continue/read outcome; replay Audit; claim |
| BD-CON-ERR-007 | Claim / already claimed by another User | No transfer | Cannot claim this Discovery | No other User or target detail | Restart/account-first/dispute path; denial Audit; claim |
| BD-CON-ERR-008 | Claim / wrong signed-in User | After safe account change | This account cannot claim | No other identity/session content | Re-authenticate/restart/support; denial Audit; claim |
| BD-CON-ERR-009 | Identity / not verified | After verification | Verify identity before claiming | No proof internals | Core verification/Path B; claim denial; claim |
| BD-CON-ERR-010 | Claim / claim in progress | Reconcile | Claim outcome is being checked | No competing request detail | Read/reconcile; attempt Audit; claim |
| BD-CON-ERR-011 | Claim / concurrency conflict | After reconciliation | Could not safely complete claim | No winner/timing detail | Reconcile/retry same key/support; all attempts Audit |
| BD-CON-ERR-012 | State / stale session version | After fresh read | Discovery changed; refresh | No hidden state detail | Re-read/reapply; anomaly as needed; session/claim |
| BD-CON-ERR-013 | Target / Workspace unavailable | After refresh/reselection | Workspace cannot be used now | No unauthorized existence/lifecycle detail | Re-fetch/reselect/create if allowed; target outcome |
| BD-CON-ERR-014 | Target / Business unavailable | After refresh/reselection | Business cannot be used now | No unauthorized ancestry/lifecycle detail | Re-fetch/reselect/create if allowed; target/import |
| BD-CON-ERR-015 | Authorization / Workspace denied | After authority change | Not permitted for this Workspace action | No hidden Workspace/member detail | Select another/request access; denial Audit |
| BD-CON-ERR-016 | Authorization / Business denied | After authority change | Not permitted for this Business action | No hidden Business/field detail | Select another/request access; denial Audit |
| BD-CON-ERR-017 | Authorization / stale or revoked Permission | After fresh evaluation | Access changed; refresh | No grant/revocation internals | Re-fetch/reselect; denial Audit; protected actions |
| BD-CON-ERR-018 | Target / lifecycle or ancestry changed | After fresh read | Target changed and must be selected again | No protected lifecycle detail | Reselect; target Audit; target/proposal/import |
| BD-CON-ERR-019 | Proposal / ProposalSet or item stale | After regeneration/review | Proposal changed or is out of date | No unauthorized field/source detail | Refresh/regenerate/review; proposal/import |
| BD-CON-ERR-020 | Conflict / canonical fact changed | After new comparison | Existing information changed | Only currently authorized field comparison | Re-read/redecide; conflict Audit; proposal/import |
| BD-CON-ERR-021 | Validation / invalid proposal decision | After correction | Decision cannot be applied | No unsupported/regulated detail beyond safe guidance | Correct/skip/review; decision denial; proposal |
| BD-CON-ERR-022 | Import / semantic duplicate | Reconcile, not repeat | Submission already received | Only same authorized operation outcome | Read prior result; replay Audit; import |
| BD-CON-ERR-023 | Preview/import / stale Snapshot | After regenerate/review | Preview is out of date | No provider/source internals | Regenerate and re-review; stale outcome; preview/import |
| BD-CON-ERR-024 | Import / partial outcome | Eligible failed items only | Some items completed; others need attention | Per-item status only within field scope | Review/retry eligible; per-item Audit; import |
| BD-CON-ERR-025 | Dependency / downstream unavailable or uncertain | After reconciliation/budget | Temporarily unavailable; no result assumed | No topology/provider/tenant detail | Reconcile/retry later/Path B; failure Audit where consequential |
| BD-CON-ERR-026 | Abuse / rate limited | After approved window/recovery | Wait before trying again | No thresholds/signals | Wait/accessible appeal/Path B; abuse evidence |
| BD-CON-ERR-027 | Abuse / Security challenge required | Through accessible challenge | Additional safety check required | No score/signal | Complete accessible challenge/appeal; Security evidence |
| BD-CON-ERR-028 | Rights / deletion ineligible or partial | After proof/scope/policy change | Some requested data cannot be deleted | No content to unverified requester | Verify/refine/appeal; deletion decision Audit |
| BD-CON-ERR-029 | Rights / legal hold | After authorized review/release | Some data is retained under an approved requirement | Legally approved scope only | Privacy/Legal review; hold Audit |
| BD-CON-ERR-030 | Recovery / unavailable or insufficient proof | With new proof/path | Recovery cannot be completed safely | No proof/risk/operator detail | Restart/account-first/formal escalation; recovery Audit |
| BD-CON-ERR-031 | Support / unauthorized or unapproved case | After valid case/authority | Support cannot perform this action | No operator policy/tenant/content detail | Self-service/new approved case; access denial Audit |
| BD-CON-ERR-032 | Assurance / required Audit or telemetry boundary failure | Audit: reconciliation; telemetry: later | Action cannot be confirmed safely, or service is degraded | No internal pipeline detail | Critical mutation pending/blocked; noncritical telemetry failure degrades safely; operational incident correlation |

## 14. Logical Data Contract

| Contract ID | Binding data rule |
| --- | --- |
| BD-CON-146 | Every logical data group declares owner, scope, sensitivity, lifecycle, write authority, deletion/rights behavior, telemetry eligibility, encryption, and residency dependency; physical tables, types, indexes, and partitioning are not defined here. |

| Logical group | Canonical? / owner | Scope and sensitivity | Mutation authority | Retention/deletion/rights | Telemetry eligibility | Protection/residency |
| --- | --- | --- | --- | --- | --- | --- |
| Session metadata | Temporary / Discovery | Session; potentially personal/security-sensitive | Discovery lifecycle owner | Expiry/deletion; minimized custody evidence may remain | Coarse state/result only; no credential/risk detail | Encrypt in transit/at rest; region approval required |
| Answer content | Non-canonical / Discovery | Session; sensitive-by-default | Own eligible input through Discovery | Delete/expire unless lawfully imported provenance requires bounded evidence | Prohibited | Strong field/access minimization; residency/provider assessment |
| Preview content | Non-canonical / Discovery | Session; commercially sensitive | Discovery generation/revision | Delete with source working data subject to approved exception | Prohibited | Same as answers; no support/analytics copying |
| Custody evidence | Authoritative custody evidence / Discovery; Audit separate | User/session; Security-sensitive | Claim owner only | Policy retention; rights access verified; credentials excluded | Result/category only | Restricted access, encryption, residency assessment |
| Target context | Temporary evidence / Discovery; targets canonical in Core | Exact User/Workspace/Business; confidential | Explicit selection; owner evaluation | Invalidate/reselect; retain minimized Audit where required | Minimized outcome only | Tenant isolation and encryption |
| Proposal data | Proposed/non-canonical / Discovery | One Business/field; sensitive | Authorized field decisions | Delete/expire under policy; imported provenance handled by BA | Prohibited values/content | Field-level authorization, encryption, residency |
| Candidate Fact data | Proposed owner data / Business Architect | One Business/field; sensitive | Business Architect only | BA/Privacy lifecycle and rights | Values prohibited; outcome/category only | Owner encryption/residency policy |
| Import data | Operation evidence / Discovery + owner receipts | One Business; confidential | Discovery operation state; BA item outcome | Retain minimum reconciliation/provenance per policy | Counts/result categories only | Tenant isolation, encryption, residency |
| Audit evidence | Canonical append-only / Audit Service | Actor/scope/action/result; restricted | Audit Service append/correction-by-new-record | Legal/Audit retention; not working-data deletion | Never analytics source; operational health separate | Strong access, encryption, residency/legal hold |
| Telemetry metadata | Non-canonical / observability/analytics owner | Purpose-limited minimized metadata | Approved producer/collector | Approved short lifecycle by category | It is telemetry; forbidden content applies | Tenant-safe pseudonymous/minimized handling |
| Consent evidence | Authoritative policy evidence / consent owner | User/session/purpose/version/locale/jurisdiction | Approved consent/notice workflow | Rights/legal-basis retention; withdrawal adds history | Status/version only where lawful | Encryption, residency, Legal approval |
| Deletion evidence | Authoritative request/suppression evidence / rights owners | Requester/session/scope; restricted | Approved rights workflow/owners | Retained minimum proof/tombstone; no deleted content | Status/category only | Encryption, backup suppression, residency |
| Support evidence | Authoritative case evidence / Support owner; Audit separate | Case/User/session; highly restricted | Approved case workflow only | Case policy/rights/hold; minimize raw evidence | Aggregate support metrics only | Time/scope access, encryption, residency |

## 15. Domain and Integration Event Contract

| Contract ID | Binding event rule |
| --- | --- |
| BD-CON-147 | Events announce committed owner facts only. They are versioned, minimized, scoped, duplicate-tolerant, non-authorizing, and never counterfeit commands; exact event names, serialization, broker, delivery guarantee, and retention remain deferred. |

| Conceptual committed fact | Owner / boundary | Minimum permitted meaning | Prohibited payload or effect |
| --- | --- | --- | --- |
| Session lifecycle changed | Discovery / internal domain contract | Session reference, prior/result state, version, occurred time, correlation | Credential, answers, preview, risk detail; no tenant authority |
| Preview revision generated | Discovery / internal domain contract | Session/preview reference, version, outcome/category | Preview/fact content; no Recommendation meaning |
| Session claim committed | Discovery claim owner / approved Core integration only when required | Session reference, User reference, custody version, result, correlation | Credential, identity proof detail, Workspace/Business binding |
| Target selection validated | Discovery orchestration / internal contract | User/session, exact target references, action, result/version | Permission internals or authority persistence |
| Proposal decision committed | Discovery / internal domain contract | Proposal/item reference, decision category, actor reference, version | Proposed/existing value in ordinary event |
| Import submitted | Discovery / Business Architect command-result boundary | Operation, Business, item references/count, authorization/correlation | Raw session credential, unrelated answers, DNA publication command |
| Candidate Fact intake accepted/rejected | Business Architect / owner result or Integration Event | Operation/item/Candidate Fact references, outcome, owner version | Canonical truth claim, Business DNA payload |
| Deletion propagation changed | Affected data owner / deletion orchestration | Request/owner/category/status/version/correlation | Deleted content or legal detail beyond approved category |
| Support recovery action committed | Support owner / Audit integration | Case/action/result/actor/target reference | Raw Discovery content or manual claim reassignment |

Consumers apply source verification, current authorization for any follow-up, idempotency, subject
version/ordering rules, and tenant isolation. Event delivery never proves current Permission or
reverses a source fact.

## 16. Audit Event Contract

| Contract ID | Binding Audit rule |
| --- | --- |
| BD-CON-148 | Consequential events are submitted to the authoritative append-only Audit Service with actor/service, exact scope, action, subject/reference, time, result/reason category, contract version, correlation/causation, and authority source; raw answers, previews, Candidate Fact values, credentials, and unrestricted free text are prohibited by default. |

| Audit ID | Event | Actor and target | Outcome/reason | Required metadata | Prohibited metadata | Retention/access/correlation |
| --- | --- | --- | --- | --- | --- | --- |
| BD-AUD-001 | Session created | Anonymous class/service; session | Created/denied category | Session ref, purpose/notice version, time, request correlation | Credential, answers, fingerprint detail | Security/lifecycle class; restricted; request correlation |
| BD-AUD-002 | Session resumed | Controller/User; session | Allowed/denied | Session ref, state/version, actor class, time | Credential/content | Security class as required; same request/session correlation |
| BD-AUD-003 | Preview generated | Controller/User/service; preview/session | Generated/withheld/failed | References, source versions, notice version, time | Preview/fact content | Lifecycle/quality class; restricted |
| BD-AUD-004 | Claim requested | Verified User; session | Pending/denied | User/session/attempt refs, identity-result ref, version, time | Credential/proof detail | Audit retention; claim correlation |
| BD-AUD-005 | Claim succeeded | Verified User; session | Claimed | Claim/User/session refs, prior/result custody, version, time | Credential, tenant target | Append-only; strict claim correlation |
| BD-AUD-006 | Claim denied | User/actor class; session | Safe reason category | Attempt/session/User ref where safe, reason, version | Other User/risk detail | Security/Audit class; correlation |
| BD-AUD-007 | Identity verification outcome referenced | Core Identity service; claim | Current verified/not verified/error ref | Verification reference/version/time/provider class if approved | Verification secret/evidence payload | Identity policy; claim correlation |
| BD-AUD-008 | Target selected | User; Workspace/Business refs | Selected/reselected | Exact references, action, version, time | Target content/Permission internals | Tenant-isolated; target correlation |
| BD-AUD-009 | Target authorization denied | User/service; target/action | Reason category | Actor, target ref if safe, action, current-evaluation ref | Hidden target or policy internals | Security/Audit class; request correlation |
| BD-AUD-010 | Proposal generated | User/service; ProposalSet/Business | Generated/withheld/failed | References, source versions, eligible item count | Values/existing content | Business-scoped restricted access |
| BD-AUD-011 | Proposal decision recorded | Authorized actor; item/Business | Accepted/rejected/corrected | Item ref, decision, actor, version, target, time | Proposed/corrected value by default | Business-scoped append-only; item correlation |
| BD-AUD-012 | Import submitted | User; operation/Business | Submitted/denied | Operation/proposal/item refs or counts, target, authorization ref | Candidate values/answers | Business-scoped; operation correlation |
| BD-AUD-013 | Import completed | BA service/User context; operation | Imported | Per-item refs/outcomes, BA receipts, time | Values/content | Append-only; operation/item correlation |
| BD-AUD-014 | Import partially completed | BA service/User context; operation | Partial | Committed/failed/skipped item refs, reason categories | Values/content | Append-only; retry correlation |
| BD-AUD-015 | Import failed | Service/User context; operation | Failed/uncertain | Operation/item refs, safe cause category, owner status | Stack/provider/values | Security/operations access as appropriate |
| BD-AUD-016 | Retry requested | User/service; prior/new operation | Allowed/denied/reconciled | Prior/new refs, eligible item refs, idempotency correlation | Values/key secret | Operation correlation; replay detection |
| BD-AUD-017 | Deletion requested | Verified requester; session/scope | Pending/denied | Request/scope/verification refs, time, policy version | Content/credential | Rights/Audit retention; request correlation |
| BD-AUD-018 | Deletion completed | Owner service; request/scope | Completed/partial | Owner/category statuses, suppression version, time | Deleted content | Append-only proof; propagation correlation |
| BD-AUD-019 | Deletion denied | Owner/Legal service; request | Denied/partial/held | Safe reason, owner/category, decision authority | Legal detail/content beyond approval | Rights/Legal restricted access |
| BD-AUD-020 | Legal hold applied | Privacy/Legal actor; exact scope | Applied/denied | Authority ref, scope/category, start/version, approver | Raw content/general tenant search | Legal retention; restricted; hold correlation |
| BD-AUD-021 | Support recovery opened | Requester/support service; case/session | Opened/denied | Case/purpose/scope/requester refs, time | Raw content/proof payload | Support/Audit retention; case correlation |
| BD-AUD-022 | Support action performed | Authorized operator; case/action | Succeeded/denied | Operator, case, exact action/field/time, approval ref | Raw answers/credential | Append-only; strict case correlation/access |
| BD-AUD-023 | Support recovery closed | Operator/service; case | Resolved/blocked/escalated | Outcome category, actor, time, linked actions | Raw evidence/content | Case retention; correlation |
| BD-AUD-024 | Abuse control triggered | Security service; actor/session/operation class | Limited/challenged/blocked | Signal category, scope class, policy version, time | Detection model/credential/raw content | Security retention/access; incident correlation |
| BD-AUD-025 | Rate limit triggered | Boundary/service; actor/scope class | Limited/bypassed-by-approved-authority | Operation/scope class, policy/version, time | Numeric internals or cross-tenant correlation data | Security/operations class |
| BD-AUD-026 | Security challenge issued | Security service; actor/session/operation | Issued/passed/failed/expired | Challenge reference/type class, outcome, time | Secret, score, proof payload | Security access; request/incident correlation |

## 17. Telemetry Contract

| Contract ID | Binding telemetry rule |
| --- | --- |
| BD-CON-149 | Analytics, operational logs/metrics/traces, Security events, authoritative Audit, and support evidence are separate purpose-bound channels with separate owners, allowlists, access, lifecycle, and failure behavior. No channel may be repurposed as another or become an identity/authorization source. |

| Telemetry category | Permitted minimum | Prohibited content | Purpose, access, lifecycle, and failure |
| --- | --- | --- | --- |
| Product analytics | Coarse funnel stage, outcome category, locale class, approved pseudonymous/session-safe correlation, abandonment category | Raw answer, preview, Candidate Fact, credential, full User/tenant identity, free text | Approved funnel purpose and lawful basis; aggregated/restricted; bounded retention; failure never authorizes extra collection |
| Operational health | Service/operation class, duration category, result/error category, dependency class, correlation, resource pressure | Customer content, token, secret, authorization evidence payload | Reliability/availability; operations access; short approved lifecycle; noncritical collection failure degrades safely |
| Error-rate monitoring | Stable safe error code, operation, retry category, coarse scope, correlation | Localized prose as machine policy, stack in customer response, raw input | Detect systemic failure; restricted operations/Security access |
| Latency category | Operation/dependency and approved duration bucket | Payload or exact sensitive target detail | Performance diagnosis; no final SLA inferred |
| Funnel-stage measurement | Entered/completed/skipped/expired/claimed/import-stage categories | Identity correlation before lawful claim, content, hidden consent | Purpose-bound product measurement; no marketing/training reuse |
| Accessibility diagnostics | Surface/error mode, assistive capability category only where approved, completion/failure category | Disability inference, keystrokes, content, user profiling | Improve accessibility under Privacy review; opt/lawful basis as required |
| Safe abandonment measurement | State category, voluntary/system cause category, recovery availability | Answer or preview content, exact Security reason | Product recovery; no coercive retargeting |
| Security and abuse metrics | Denial/replay/race/rate/challenge categories, approved risk aggregates | Detection logic, raw credential/content, unrestricted cross-tenant linkage | Security detection; restricted access/retention; incident handoff |
| Support metrics | Case category, queue/outcome/duration category, approved aggregate | Raw case evidence, answers, credentials, target content | Support quality/capacity; no case access from metric |

Every telemetry field requires an owner, purpose, classification, tenant-isolation treatment,
access role, lifecycle, and documented reason. Final event names and field inventory remain an
open rollout/implementation input.

## 18. Deletion and Retention Contract

| Contract ID | Binding lifecycle rule |
| --- | --- |
| BD-CON-150 | Deletion is an owner-coordinated, idempotent, status-bearing propagation contract that separates eligible working data, imported owner data, minimized Audit/security evidence, backup suppression, and legal hold; no numeric schedule or unsafe backup mutation is selected here. |

### 18.1 Eligibility and owner effects

| Data/state | Deletion contract |
| --- | --- |
| Eligible unclaimed session | Verified session controller may request deletion of answers, previews, proposal working data, and eligible metadata; the session becomes inaccessible and suppression evidence remains minimized. |
| Claimed session working data | Verified User may request deletion subject to purpose, import, rights, Security, Audit, and Legal rules; custody evidence may remain minimized where policy requires. |
| Imported state | Discovery may delete its eligible copies/references but cannot delete Business Architect Candidate Facts or canonical Business facts. It sends a scoped rights/deletion request to the owner where law/policy requires and reports separate owner outcomes. |
| Rejected content | Raw rejected content is not retained indefinitely. Minimum decision/idempotency/suppression evidence may remain without secret credential or unnecessary value. |
| Audit/security evidence | Not silently deleted with working data. Audit/Legal/Security owners apply approved rights, retention, correction-by-new-record, and hold policy to minimized evidence. |
| Legal hold | Exact approved authority, subject/category/scope, start, review, release, and Audit are required. Hold never expands unrelated access or content collection. |
| Backups | Normal deletion does not mutate immutable media unsafely. Restore must reapply tombstones/equivalent suppression before data becomes active or available. |
| Processors/providers | Each approved processor receives a scoped request/status contract. Partial propagation remains visible and retryable/escalated; no completion proof is issued while required owner status is unknown. |

### 18.2 Propagation states and proof

Conceptual propagation states are `requested`, `verified`, `owner_pending`, `partially_completed`,
`completed`, `denied`, `held`, and `escalated`. Each owner reports category, scope, result,
version, time, retry/escalation status, and correlation without returning deleted content.
Completion proof identifies processed categories, retained-evidence categories, temporary backup
persistence, legal-hold exception where disclosure is approved, and unresolved owner categories.
It never contains raw data or secret proof.

Deletion of temporary answers and derived previews does not silently remove accepted Candidate
Facts, published Business DNA, or existing canonical Business data. Those owners handle rights
requests under their own lawful authority. Final retention durations, backup cycles, provider
schedules, and jurisdictional timelines remain external approvals.

## 19. Privacy and Consent Contract

| Contract ID | Binding Privacy/consent rule |
| --- | --- |
| BD-CON-151 | Processing context carries purpose, notice/consent type and version, language/locale, jurisdiction selection, actor/session reference, decision/time, withdrawal status, and lawful-basis reference without asserting one global legal basis or controller/processor allocation. |

Contract-separated purposes are:

- optional Discovery participation and temporary storage;
- optional claim/import consent or acknowledgement where required;
- account terms and privacy notice;
- analytics consent or other approved basis where required;
- marketing consent;
- model-training or secondary-use consent; and
- support-access disclosure where required.

Marketing, training, secondary use, unrestricted analytics, or cross-purpose reuse is never
inferred from Discovery participation. Declining an optional purpose disables only that purpose
unless an approved lawful dependency requires otherwise; claim/import stops safely when its
required policy evidence is absent. Withdrawal adds an attributable state and triggers applicable
owner actions without falsely claiming already lawful processing was erased.

Access, correction, deletion, objection, restriction, portability, withdrawal, and review/appeal
requests use verified requester and owner-specific contracts. Special-category, minors',
regulated-industry, sanctioned-jurisdiction, controller/processor, processor-location, and
cross-border rules remain Privacy/Legal decisions. Required approval absence fails closed for the
affected processing while preserving account-first or other lawful paths.

## 20. Integration Contracts

| Contract ID | Binding integration rule |
| --- | --- |
| BD-CON-152 | Each integration is a versioned owner/consumer contract with explicit trust, actor/tenant/resource context, minimum input/output, current owner authorization, stable failure, retry/idempotency, Audit correlation, and prohibited coupling; no consumer gains source ownership or private data access. |

| Integration | Responsibility and input → output | Trust and authorization | Failure, retry, idempotency | Minimization, Audit, and prohibited coupling |
| --- | --- | --- | --- | --- |
| Core Identity / verification | Authenticate/verify User; identity request context → verified status/reference/version | Trust verified service identity; Discovery cannot assert User/verification | Fail closed; retry only through Identity policy; verification reference is idempotent evidence | No proof payload; correlate claim; no Identity table access |
| Core Workspace service | List/create/read Workspace identity; User/action context → authorized refs/owner operation | Current Membership/create/select action; owner decides | Safe unavailable/deny; Core idempotency for create | Minimum identity/lifecycle; Core Audit; no Discovery write |
| Core Business service | List/create/read Business under Workspace; target/action → authorized refs/result | Exact Workspace ancestry and Business action | Safe unavailable/deny/reselect; Core idempotency | Minimum fields; Core Audit; Business Unit not substituted |
| Core Authorization | Evaluate action/scope; actor/targets/resource/field/lifecycle → current allow/deny evidence | Workload identity; owner validates decision context/currentness | Fail closed; re-fetch stale evidence; no cached permanent grant | No policy internals in client; denial Audit as required; no title inference |
| Business Architect | Accept Candidate Fact envelopes and expose review outcomes; import operation → per-item receipts/status | Exact Business/action/field authorization and BA invariants | Per-item partial outcomes; idempotent item/operation intake; reconcile ambiguity | Minimum values/provenance; BA/Audit correlation; no BA private model access |
| Business DNA Registry | Publish governed DNA after BA approval; BA-owned publication request → publication result | Separate publisher permission and Registry validation | Discovery does not call publication; Registry owns retry/versioning | No Discovery write or publication authority |
| Recommendation service | Consume governed DNA/decisions; published owner facts → advisory Recommendations | Downstream authorized query/event | Independent failure; no impact on Discovery import commit | No preview-as-Recommendation or Business truth transfer |
| Audit Service | Append authoritative Audit Record; minimized event → record/reference/result | Approved producer/service identity and exact scope | Critical producer follows §23.3; duplicate event identity converges | No raw content/credential; append-only; transport log not Audit |
| Telemetry/observability | Collect approved fields; allowlisted metadata → accepted/dropped/health status | Workload identity, purpose and field policy | Noncritical failure degrades safely; bounded retry; no mutation dependency | No content/secret; telemetry not Audit/authorization |
| Deletion orchestration | Coordinate owners/providers; verified scoped request → owner propagation statuses | Rights authority, subject proof, owner scope, hold policy | Eventual propagation permitted; retry/escalate partial/unknown | No data payload beyond reference/category; Audit all consequential states |
| Support case management | Create/manage bounded case; verified request/minimum evidence → case/action status | Case, purpose, field, time, operator permission/approval | Deny default; idempotent case/action; escalate disputed ownership | No raw browsing/claim reassignment/canonical edit |
| Security/abuse controls | Evaluate boundary risk; minimized signals/context → allow/limit/challenge/deny | Security policy/service identity; authorization still separate | Fail safe; accessible challenge/appeal; distributed correlation under Privacy | No risk model leakage; Security Audit; no tenant mutation |
| Localization/notice service | Resolve approved language/jurisdiction notice; locale/purpose/version context → notice reference/content | Approved source/version and jurisdiction policy | Missing required notice blocks affected processing; retry/fallback only if legally valid | Preserve meaning/version; no hard-coded English or invented Legal text |

## 21. Transactional Guarantees

| Contract ID | Binding transaction rule |
| --- | --- |
| BD-CON-153 | Atomicity applies within each canonical owner boundary. Cross-owner work uses explicit operation states, idempotent commands/results, per-item outcomes, committed facts, reconciliation, and compensation where approved; no distributed database transaction or technology is selected. |

| Operation | Required guarantee | Partial/eventual behavior | Compensation/reconciliation and fail-closed rule |
| --- | --- | --- | --- |
| Claim | **Atomic required** for one session-to-one-User custody transition | Partial success prohibited | Query authoritative claim outcome; never create second binding; uncertain result stays pending |
| Target selection | Atomic temporary selection update; canonical target unchanged | Owner list/read may fail independently | Invalidate/reselect; no fallback; mutation waits for current revalidation |
| Proposal decision | Atomic per ProposalItem decision/version | Different items may be decided independently | Version conflict requires refresh; no implicit batch rollback/acceptance |
| Import submission | Atomic creation of operation intent and exact submitted item set within Discovery | Owner handoff/per-item outcomes may be partial | Reconcile by operation/item IDs; do not report blanket success |
| Candidate Fact creation | Atomic per Business Architect intake item or owner-declared compatible batch | Partial item acceptance is permitted and explicit | Same item identity/idempotency prevents duplicates; failed items remain retryable only if eligible |
| Deletion request | Atomic request/scope record; owner propagation eventual | Partial completion permitted and visible | Retry/escalate outstanding owners; suppression prevents resurrection; no false completion |
| Support recovery action | Atomic per approved case action | Multi-step case may be pending/escalated | No claim reassignment or canonical compensation; disputed outcome escalates and remains audited |

## 22. Security Invariants

| Invariant ID | Invariant |
| --- | --- |
| BD-INV-001 | No anonymous action creates or mutates a canonical Workspace, Business, Membership, Permission, Business DNA, commercial, readiness, OS, or operational record. |
| BD-INV-002 | No claim commits without a current verified User and valid session-control or approved recovery evidence. |
| BD-INV-003 | Claim binds custody to User only and grants no tenant, target, Permission, entitlement, readiness, or operational authority. |
| BD-INV-004 | No Workspace or Business is inferred as fallback, default, remembered authority, or URL/browser proof. |
| BD-INV-005 | No protected mutation executes without current exact action-, target-, resource-, and field-scoped Permission from the owner boundary. |
| BD-INV-006 | No import crosses Workspace scope. |
| BD-INV-007 | No ProposalSet, import, or Candidate Fact crosses Business scope. |
| BD-INV-008 | Discovery cannot write or publish Business DNA directly. |
| BD-INV-009 | No canonical Business fact is silently merged, overwritten, or changed by proposal acceptance. |
| BD-INV-010 | Provenance, source version, provided/inferred status, actor decision, and target context cannot be stripped from imported evidence. |
| BD-INV-011 | Raw answers, preview content, Candidate Fact values, credentials, tokens, and unrestricted free text never enter ordinary telemetry. |
| BD-INV-012 | Support cannot mutate custody, target, canonical facts, or Discovery content without an approved exact case action; manual claim reassignment remains prohibited. |
| BD-INV-013 | Deletion cannot bypass a valid approved legal hold, and legal hold cannot be applied without approved scoped authority and Audit. |
| BD-INV-014 | A replayed or raced claim cannot cause a second custody transition. |
| BD-INV-015 | A duplicate or retried import cannot create duplicate Candidate Facts. |
| BD-INV-016 | Stale Membership, Permission, target, proposal, or canonical version cannot authorize mutation. |
| BD-INV-017 | No recovery, challenge, support, administrative, or degraded path uses weaker identity, ownership, tenant-isolation, authorization, expiry, or Audit rules than the normal path. |

## 23. Compatibility, Assurance, and Implementation Boundaries

| Contract ID | Binding assurance rule |
| --- | --- |
| BD-CON-154 | Contract version and source-data version are distinct. Compatible additive evolution preserves owner, meaning, scope, authorization, lifecycle, idempotency, errors, field sensitivity, and consumer tolerance; breaking change requires governed version, migration, deprecation, and consumer transition. |
| BD-CON-155 | Operation results, errors, state meanings, next actions, notice references, and field semantics support Arabic/English, RTL/LTR, keyboard and assistive-technology use, stable nonlocalized machine meaning, locale/version traceability, and accessible non-CAPTCHA-only recovery. |
| BD-CON-156 | If authoritative Audit acceptance is required for claim, import, deletion, legal hold, support recovery, or administrative action and cannot be durably established, the action fails closed or remains pending for reconciliation. Ordinary telemetry failure never fabricates success and may degrade noncritical operation only under approved policy. |
| BD-CON-157 | All sensitive groups require approved in-transit/at-rest protection, secret separation, workload identity, key access/rotation/revocation policy, residency/processor approval, field minimization, and incident handling; algorithms, vendors, regions, processors, and key schedules remain open. |
| BD-CON-158 | This package selects no physical route, protocol, payload serialization, database/schema/type, queue, transaction technology, storage engine, middleware, framework, vendor, topology, algorithm, numeric policy, implementation task, test, or deployment. |

## 24. Traceability Matrix

| Contract section / IDs | Feature Specification | Constitution condition/deferral | Authority / policy | Permission / threat input | Planning dependency | Test dependency |
| --- | --- | --- | --- | --- | --- | --- |
| Principles BD-CON-001–020 | FS §§1–4, 14, 20 | C01, C08 | FZ §§3–14; ADR-042 | PC principles; TM objectives | Preserve exclusions/authority | Negative architecture-boundary scenarios |
| Domain BD-CON-021–030 | FS §§2, 18 | Aggregate/integration boundary | ADR-003/005/016/018/040; DO | TM ownership threats | Module/owner allocation | Owner/consumer contract isolation |
| Entities BD-CON-031–041 | FS §§9, 18, 24 | Entity/value objects, logical data | ADR-035; Glossary; PP | TM assets; PC scopes | Logical-to-implementation mapping | Validation/classification/provenance |
| Custody BD-CON-042–051 | FS §§7.1, 7.5, 9 | C02, C05; session custody | FZ §§4–5, 9, 11 | PC claim rules; TM R018–R029 | Identity/session design | Wrong User, replay, terminal states |
| States BD-CON-052–068 | FS §9 | State guards | ADR-042/FZ conceptual states | TM state checkpoints | State ownership/recovery design | Every valid/invalid transition |
| Claim BD-CON-069–077 | FS BD-FR-039–050 | C02; claim transaction | FZ §5; API Philosophy | BD-PERM-CLAIM; TM claim requirements | Atomic owner/reconciliation design | Race, replay, uncertain outcome |
| Authorization BD-CON-078–080 | FS §§7.6, 13 | C03; auth context | ADR-003/034; PM | PC actions/denies; TM tenant threats | Owner-decision integration | No fallback, stale/revoked/cross-tenant |
| Proposal/import BD-CON-081–092 | FS BD-FR-063–087 | C04; stale/Candidate/provenance | ADR-014/016; FZ §6 | PC review/import; TM integrity | BA contracts and item outcomes | Conflict, partial, duplicate, no DNA write |
| Idempotency BD-CON-093–101 | FS BD-NFR-034 | Idempotency deferral | API Philosophy §5.17; ADR-016/036 | TM replay controls | Key/outcome storage design | Same/conflicting retry cases |
| Concurrency BD-CON-102–112 | FS BD-NFR-035 | C02/C04; concurrency | C VIII–IX; DO/API | TM race/TOCTOU | Version/reconciliation mechanisms | Races and ambiguous commits |
| Operations BD-CON-113–142 | FS journeys, FRs, surfaces | API resources/semantics | ADR-036; API Philosophy | PC action map; TM entry points | Surface allocation/consumer design | Operation contract/negative tests |
| Envelopes BD-CON-143–145 | FS §§11–12 | Request/response/errors | API Philosophy §§5.10, 5.14 | TM disclosure; PP minimization | Protocol mapping later | Stable errors/no leakage |
| Error register ERR-001–032 | FS BD-ERR-001–022 | Error-code deferral | SM/API safe failure | PC deny rules; TM detection | Transport/localization mapping | Retry/disclosure/recovery |
| Data BD-CON-146 | FS §18 | Logical schema | DO; PP classifications | TM assets | Physical data design later | Scope/rights/encryption |
| Events BD-CON-147 | FS §§7.11, 18 | Integration boundaries | Event Architecture | TM service boundary | Publication consistency later | Duplicate/order/payload minimization |
| Audit BD-CON-148, AUD-001–026 | FS §§6–7, 14 | C06; Audit schema | ADR-038; SM | TM R080–R091; PC §14 | Audit producer/commit design | Presence, minimization, tamper evidence |
| Telemetry BD-CON-149 | FS BD-FR-107–114 | C06; telemetry inventory | C IX; PP §7 | TM observability threats | Final event/field inventory | Forbidden fields and failure degradation |
| Deletion BD-CON-150 | FS BD-FR-088–094 | C05; retention/deletion propagation | FZ §9; PP §6 | PC rights/hold; TM privacy | Owner/provider/suppression design | Partial propagation/restore suppression |
| Privacy BD-CON-151 | FS §§14.3, 16 | C07 | ADR-042; PP §§4, 9 | PC scope; TM privacy threats | Legal/notice/provider approvals | Purpose/consent/locale/jurisdiction |
| Integration BD-CON-152 | FS §§18, 23 | Integration contracts | ADR-035/036/040 | TM trust boundaries | Dependency/failure design | Owner, auth, idempotency, failure |
| Transactions BD-CON-153 | FS claim/import/delete | Transaction guarantees | DO; API/Event Architecture | TM race/partial threats | Owner consistency mechanisms | Atomic/partial/reconciliation |
| Invariants INV-001–017 | FS ACs and §14 | C01–C08 | FZ/Accepted ADRs | PC/TM/PP controls | Mandatory plan gates | Mandatory negative/security suite |
| Assurance BD-CON-154–158 | FS §§15–16, 24–27 | C01, C06–C08 | ADR-035; Constitution X–XI | PP P06–P08 | Compatibility/accessibility/security planning | Localization/accessibility/compatibility |

## 25. Constitution Check Conditions and Deferral Closure

### 25.1 Eight approval conditions

| Condition | Summary | Resolving contract sections | Status | Remaining owner / blocker impact |
| --- | --- | --- | --- | --- |
| BD-CC-C01 | Preserve deferrals; no new owner, policy, technology, vendor, region, processor, or numeric value | §§1–3, 23, 26 | **Resolved** at contract level | Planning/Legal/Security must retain open-decision classifications; blocks affected implementation, not D03 closure |
| BD-CC-C02 | Authoritative session custody, atomic one-User claim, idempotency, replay/race, uncertainty, safe disclosure | §§4–6, 9–10, 13 | **Resolved** at contract level | Implementation mechanism and tests remain D04/D06 inputs |
| BD-CC-C03 | Exact actor, identity, Workspace, Business, action/field, current Membership/Permission/lifecycle; no merged permission | §§7, 11.4, 20, 22 | **Resolved** at contract level | Runtime identifier mapping remains implementation input; cannot broaden PC semantics |
| BD-CC-C04 | Candidate Fact envelope, provenance, conflict/current view, per-item outcomes, stale state, idempotency, partial retry, separate publication | §§8–10, 11.5–11.6, 20–22 | **Resolved** at contract level | Business Architect physical contract and tests remain later |
| BD-CC-C05 | Claimed/unclaimed lifecycle, expiry/deletion, rejection evidence, propagation, backup suppression, hold, recovery | §§4–5, 14, 18, 21 | **Partially resolved** | Contract semantics complete; Privacy/Legal schedules, provider/backup procedures, and implementation evidence remain implementation blockers |
| BD-CC-C06 | Audit/telemetry/support separation, minimization, tenant scope, failure, case/purpose/field/time bounds | §§16–17, 20, 23 | **Partially resolved** | Contract categories/events complete; final telemetry inventory, support tooling, Audit commit mechanism, and rollout evidence remain blockers |
| BD-CC-C07 | Purpose/version/locale/jurisdiction evidence; Legal fail-closed; no invented Legal allocation | §§12, 14, 18–20, 23 | **Partially resolved** | Contract fields/behavior complete; jurisdiction, controller/processor, region/provider, notice text, and lawful-basis approvals remain implementation blockers |
| BD-CC-C08 | Account-first compatibility, safe errors, accessibility/localization, additive evolution, optional Discovery | §§1, 11–13, 23–24 | **Resolved** at contract level | Final design/protocol/test evidence remains D04/D06; account-first cannot regress |

**Condition totals:** 5 resolved, 3 partially resolved, 0 deferred. A partial status means
the governed contract is defined but an external approval or implementation evidence remains; it
does not leave the D03 contract meaning ambiguous.

### 25.2 Twenty-one D02 contract deferrals

| D02 deferral | Resolution in this package | Contract-level result | Remaining non-contract detail |
| --- | --- | --- | --- |
| Aggregate boundaries | §§2–4 | Resolved | Physical module/storage placement |
| Entity/value objects | §3 | Resolved | Physical types/schema |
| Session custody | §4 | Resolved | Credential/session mechanism |
| Claim transaction | §6 | Resolved | Transaction technology |
| State-transition guards | §5 | Resolved | Runtime state representation |
| Idempotency | §9 | Resolved | Storage mechanism/window |
| Concurrency | §10 | Resolved | Lock/version technology |
| Stale Snapshot | §§8, 10 | Resolved | Freshness implementation |
| Candidate Fact envelope | §8.2 | Resolved | Physical BA schema/protocol |
| Provenance | §§3, 8, 14 | Resolved | Registry/storage implementation |
| Target authorization context | §7 | Resolved | Runtime permission identifiers/evaluator |
| API resource boundaries | §11 | Resolved | Protocol/routes |
| Request/response semantics | §§11–12 | Resolved | Serialization/status mapping |
| Error codes | §13 | Resolved | Transport/localized text |
| Logical data definitions | §§3, 14 | Resolved | Physical schema |
| Retention hooks | §18 | Resolved contractually | Durations/owner/provider procedures |
| Audit event schema | §16 | Resolved contractually | Serialization/commit mechanism |
| Telemetry inventory | §17 | Resolved by category/allowlist boundary | Final event/field names |
| Integration boundaries | §20 | Resolved | Physical service/module topology |
| Transactional guarantees | §21 | Resolved | Technology/mechanism |
| Deletion propagation | §18 | Resolved contractually | Provider/backup implementation and schedules |

## 26. Open Contract and Implementation Decisions

| Contract ID | Open item | Classification | Why it remains open / closure owner |
| --- | --- | --- | --- |
| BD-CON-159 | The items below remain intentionally open and cannot be inferred from this package. | Governed deferral | Each requires its named downstream authority; absence blocks affected implementation, not D03 contract closure. |

| Open item | Classification | Required later evidence |
| --- | --- | --- |
| Final question inventory and wording | Design-system input; Legal input where notices/sensitivity apply | Approved product/content inventory with accessibility/localization review |
| Final field inventory and canonical mappings | Data-model implementation input; Legal input | Owner-approved field/provenance/classification mapping |
| Exact runtime permission identifiers and assignments | Security input; implementation-plan input | Permission Catalog-conformant runtime mapping and owner approval |
| Exact identity verification mechanism | Security input; implementation-plan input | Approved Identity/Recovery technical design and threat treatment |
| Physical session/credential storage | Infrastructure input; Security input | Approved protected storage/credential design |
| Physical schema, types, indexes, and migrations | Data-model implementation input | D04 design and later authorized migration plan |
| Final API protocol, surface placement, routes, transport statuses, and serialization | API implementation input | Contract-conformant API design/version review |
| Final concurrency mechanism | Implementation-plan input; data-model implementation input | Owner consistency/reconciliation design |
| Final idempotency storage and retention mechanism | Implementation-plan input; Security input | Approved key/outcome storage and lifecycle |
| Final retention, deletion, backup, and legal-hold durations/procedures | Legal input; rollout input | Jurisdiction-approved schedules and operational procedures |
| Final rate limits, retry budgets, challenge thresholds, and abuse algorithms | Security input; rollout input | Approved abuse-control profile and false-positive recovery |
| Final Event, Audit, telemetry, and message names/field inventory | API implementation input; rollout input | Registered contracts/allowlists and observability review |
| Final regions, residency, processors, subprocessors, and transfer mechanisms | Legal input; infrastructure input | Privacy/Legal and Security approval |
| Final encryption algorithms, key service, separation, rotation, and emergency procedure | Security input; infrastructure input | Approved cryptographic/key-management design |
| Final support tooling, operator workflow, and user-notice behavior | Rollout input; Legal input | Approved support-access and recovery runbook |
| Final performance, availability, recovery, and capacity targets | Implementation-plan input; rollout input | Approved measurable service objectives and capacity model |

## 27. `BD-RDY-D03` Closure Decision

| Contract ID | Closure decision |
| --- | --- |
| BD-CON-160 | `BD-RDY-D03` is **closed at the governed API/domain/data contract level** because the bounded context, conceptual models, custody, ownership, state guards, claim, authorization, proposal, Candidate Fact, import, idempotency, concurrency, conceptual operations, envelopes, errors, logical data, Events, Audit, telemetry, deletion, Privacy, integrations, transactional guarantees, Security invariants, traceability, and D02 conditions are defined. Open physical/Legal/Security/operational decisions remain visible and continue to block their affected downstream authorization. |

Closure does not:

- create or approve physical APIs, routes, schemas, migrations, events, storage, infrastructure, or code;
- approve an implementation plan or close `BD-RDY-D04`;
- create or approve tasks or close `BD-RDY-D05`;
- create tests or close `BD-RDY-D06`;
- complete rollout/operational readiness or close `BD-RDY-D07`; or
- grant explicit implementation authorization or close `BD-RDY-I01`.

The next permitted activity is an implementation-planning **readiness review** using this package.
That review is not permission to create or approve an implementation plan unless separately
authorized by Governance.

## 28. Validation and Final Conclusion

### 28.1 Validation record

| Validation item | Result |
| --- | --- |
| Exactly one new contract document in task scope | Pass |
| Required authorities and direct API/Event conventions read | Pass — §1.1 |
| Bounded context and prohibited responsibilities | Pass — §2 |
| Eleven conceptual aggregate/entity types | Pass — §3 |
| Ownership and custody matrix | Pass — §4 |
| Seventeen product states and guards | Pass — §5 |
| Atomic User-only claim semantics | Pass — §6 |
| Explicit target/no-fallback/current-Permission context | Pass — §7 |
| Proposal, Candidate Fact, partial import, and provenance | Pass — §8 |
| Nine idempotency classes | Pass — §9 |
| Eleven concurrency/stale-state cases | Pass — §10 |
| Thirty conceptual operations with complete semantics | Pass — §11 |
| Request, success, and error envelopes | Pass — §12 |
| Thirty-two unique error contracts | Pass — §13 |
| Logical data groups and lifecycle/protection | Pass — §14 |
| Domain/Integration Event boundary | Pass — §15 |
| Twenty-six unique Audit event contracts | Pass — §16 |
| Telemetry allow/deny and channel separation | Pass — §17 |
| Deletion/retention/backup/hold propagation | Pass — §18 |
| Privacy/consent/jurisdiction boundary | Pass — §19 |
| Thirteen integration boundaries | Pass — §20 |
| Seven transactional guarantees | Pass — §21 |
| Seventeen unique Security invariants | Pass — §22 |
| All eight Constitution conditions addressed | Pass — §25.1 |
| All 21 D02 contract deferrals resolved at contract level | Pass — §25.2 |
| Traceability and open decisions | Pass — §§24, 26 |
| Direct Business DNA publication prohibited | Pass — BD-CON-009, BD-CON-026, BD-CON-088, BD-INV-008 |
| Anonymous canonical writes prohibited | Pass — BD-CON-001, BD-INV-001 |
| Claim-to-User only and no tenant authority | Pass — BD-CON-003–004, BD-CON-073–076, BD-INV-002–003 |
| Physical API/schema/code/plan/task/test authorization | None |

### 28.2 Final conclusion

> **BD-RDY-D03 is closed at the governed API/domain/data contract level. The Business Discovery
> bounded context, custody, ownership, state, claim, authorization, proposal, Candidate Fact,
> import, idempotency, concurrency, API semantics, logical data, Audit, telemetry, deletion,
> integration, and Security contracts are defined sufficiently to proceed to implementation
> planning readiness review. Physical API design, schema implementation, planning, task
> creation, testing, and coding remain unauthorized.**

This contract package changes no Feature Specification, Constitution Check, ADR, Freeze,
Customer Journey, register, proposal, policy, source code, commercial state, entitlement,
readiness state, OS configuration, or operational behavior.
