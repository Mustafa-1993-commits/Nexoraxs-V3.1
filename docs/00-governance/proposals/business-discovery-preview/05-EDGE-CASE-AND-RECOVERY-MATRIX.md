# Business Discovery Edge Case and Recovery Matrix

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Review owner | Nexoraxs Architecture Governance |
| Reviewed Wave 1 commit | `53183fd48cb1828dd0424a41b1194729d82c5616` |
| Human review evidence | [Human Architecture Review Decision](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md) |
| Journey proposal | [Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md) |
| Decision matrix | [Journey Decision Matrix](./04-JOURNEY-DECISION-MATRIX.md) |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — **Proposed** |

> **Non-authoritative review-aid notice:** This matrix is a review aid only. It is not approved
> detailed documentation, a normative state machine, an interaction or recovery contract, a test
> oracle, an implementation specification, or a persistence model. If the proposal is later
> approved, every edge condition must be revalidated through an explicitly authorized
> documentation wave rather than promoted automatically.

> **Conceptual-state notice:** Discovery Progress, Snapshot Status, Lifecycle Status, Claim Status,
> Import Status, and Replacement relationship/status are independent conceptual dimensions used
> only to discuss effects. Labels are examples only, unreserved, non-canonical,
> non-persistent, and not approved API terms, schema values, or state-machine contracts.

> **Package-wide logical-owner disclaimer:** Every Logical Owner or ownership-handoff label in the
> Wave 2 package is a review construct only. It does not define or change canonical domain
> ownership, service ownership, bounded contexts, data ownership, deployment ownership, or
> implementation responsibility. Controlling Accepted authority remains unchanged.

> **Package-wide identifier disclaimer:** `JY`, `JD`, and `EC` identifiers are review
> cross-references only. They are not workflows, state machines, APIs, persistence models, runtime
> behavior, contracts, tests, or implementation specifications.

## 1. Matrix Rules

The `proposed safe review outcome` is the narrow, non-authoritative boundary that Wave 2 offers for
review without selecting the deferred mechanism or policy. `Recovery or continuation` lists
possible customer-safe routes, not mandatory transitions. No row is intended to define retention
periods, proof mechanisms, cookies, tokens, encryption, storage, support Permissions, formulas, or
retry protocols.

An Open Question marked against a row remains open even when the row identifies a safe boundary.
`Human decision` means a later owner decision is needed before detailed documentation or
implementation; **Yes** does not make the edge case unsafe to review in this proposal.

## 2. Discovery Participation and Continuity

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-DIS-001 | Visitor at Marketing Entry | Discovery is skipped | Route directly to Create Account or Sign In | Snapshot, claim, or import step is inferred | Continue account-first journey | Progress only | Marketing Website | Do not create hidden Discovery data | BDP-C02; OQ-PRD-005 | No for safe boundary; journey authority remains open |
| EC-DIS-002 | Discovery in progress | Visitor interrupts or pauses | Preserve only what future policy permits and explain resume availability honestly | Mark completed or fabricate a result | Resume, restart, account-first, or abandon under approved policy | Progress; Lifecycle | Proposed Discovery capability | Purpose limitation and unintended persistence | OQ-PRD-005; OQ-SES-004; OQ-PRV-002 | Yes |
| EC-DIS-003 | Discovery in progress | Browser closes unexpectedly | Do not imply completion; protect any permitted temporary evidence | Silent publication, import, or account linkage | Same-device resume if approved; otherwise restart or account-first | Progress; Lifecycle | Proposed Discovery capability | Local/session exposure and expiry | OQ-ID-003; OQ-SES-004 | Yes |
| EC-DIS-004 | Visitor chooses Discovery | Cookies or local storage are unavailable or declined | Offer a reduced non-persistent path or account-first continuation | Covert tracking or blocking all value without review | Continue without resume; restart; Create Account or Sign In | Progress; Lifecycle | Proposed Discovery capability / Privacy | Consent, tracking, accessibility, data loss | OQ-ID-003; OQ-PRV-001 | Yes |
| EC-DIS-005 | Visitor has more than one possible session | Multiple anonymous sessions exist | Keep sessions distinguishable pending explicit policy | Silent merge, replacement, or selection | Present approved choice, preserve relationships, or restart | Progress; Lifecycle; Replacement | Proposed Discovery capability | Cross-session disclosure and excess retention | OQ-SES-003; OQ-PRV-002 | Yes |
| EC-DIS-006 | Same visitor uses different devices | A possible session is sought on another device | Require a future-approved secure recovery/claim boundary | Treat a client-supplied identifier as proof | Continue separately, use approved recovery, or restart | Lifecycle; Claim; Replacement | Core Identity and Access / proposed Discovery capability | Enumeration, replay, session theft | OQ-ID-003; OQ-SES-001; OQ-SES-004 | Yes |
| EC-DIS-007 | One session is open in multiple contexts | Concurrent edits occur | Detect or surface ambiguity under a future concurrency policy | Silent last-write-wins or mixed provenance | Reconcile explicitly, reject stale change, or preserve revisions if approved | Progress; Snapshot; Replacement | Proposed Discovery capability | Integrity and unauthorized concurrent access | OQ-SES-005; OQ-SNP-003 | Yes |
| EC-DIS-008 | A question or completion action was submitted | Duplicate submission occurs | Return or recover to one deterministic logical outcome under future policy | Duplicate evidence, results, claims, or imports | Show existing outcome or safe retry after policy validation | Progress; Snapshot | Proposed Discovery capability | Replay and duplicate processing | OQ-SES-002; OQ-SNP-003 | Yes |
| EC-DIS-009 | Visitor abandoned an earlier session | Visitor starts again later | Keep restart explicit and preserve any replacement relationship allowed by policy | Treat the new session as silent continuation or erase history without policy | Start new Discovery; optionally resolve the earlier session later | Progress; Lifecycle; Replacement | Proposed Discovery capability | Hidden retention and session confusion | OQ-PRD-005; OQ-SES-003; OQ-PRV-002 | Yes |

## 3. Snapshot and Evidence Sufficiency

Every use of **Business Health Snapshot (working term)** below means non-canonical presentation. It
is not a Business DNA Snapshot, Business DNA, or a canonical Recommendation and grants no
readiness state.

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-SNP-001 | Discovery evidence collection has reached a reviewable point | Snapshot generation remains pending | Identify pending status without blocking account-first continuation | False success or invented result | Wait only by customer choice, resume, retry later, receive limited summary, or continue without Snapshot | Snapshot; Lifecycle | Proposed Discovery capability | Avoid unnecessary retention during pending work | OQ-SNP-001; OQ-PRV-002 | Yes |
| EC-SNP-002 | Snapshot generation was attempted | Generation fails or times out | Explain the limitation without claiming canonical output | Fabricated Snapshot, confidence, or fit | Safe retry, minimum follow-up, limited summary, or continue without Snapshot | Snapshot | Proposed Discovery capability / Observability | The proposed error boundary would avoid disclosing evidence or internals | OQ-SNP-001; OQ-PRV-006 | Yes |
| EC-SNP-003 | Evidence exists | Evidence is insufficient | State that more evidence is needed or limit the result | Infer final truth or force product guidance | Ask only minimum necessary follow-up, limited summary, or continue without Snapshot | Progress; Snapshot | Proposed Discovery capability | Data minimization and pressure to overshare | OQ-PRD-001; OQ-SNP-001; OQ-SNP-004 | Yes |
| EC-SNP-004 | Evidence exists | Evidence is contradictory | Preserve contradiction as uncertainty for review | Pick a fact silently or calculate unsupported confidence | Ask clarifying question, limited summary, or continue without Snapshot | Progress; Snapshot | Proposed Discovery capability | Misrepresentation and provenance loss | OQ-SNP-001; OQ-REC-002 | Yes |
| EC-SNP-005 | A result or inference was generated | applicable Rules or Knowledge changed | Retain original version context and treat freshness as unresolved | Present old guidance as current or silently change what was seen | Label/withhold, regenerate by approved policy, or continue without result | Snapshot; Import | Knowledge/Rules owners / proposed Discovery capability | Explainability and version lineage | OQ-IMP-006; OQ-SNP-002; OQ-SNP-003 | Yes |
| EC-SNP-006 | Business Health Snapshot (working term) was previously available | Snapshot is assessed as stale | Make staleness visible or withhold the result | Claim current fit, evidence strength, or Recommendation | Regenerate, re-review, resume questions, or continue without Snapshot under future policy | Snapshot; Lifecycle | Proposed Discovery capability | Old business information and misleading guidance | OQ-SNP-002; OQ-REC-003 | Yes |
| EC-SNP-007 | Visitor edits evidence after seeing a result | Displayed result and current answers diverge | Preserve which version produced the displayed result | Import a different set as if it produced that result | Regenerate or mark result stale; import only eligible versioned evidence | Progress; Snapshot; Import | Proposed Discovery capability / Business Architect | Provenance, disclosure, and consent scope | OQ-SNP-003; OQ-IMP-006 | Yes |
| EC-SNP-008 | Discovery covers an unsupported or multi-model Business | Knowledge/Rules cannot support a reliable full result | State the coverage limitation | Force one business model or product funnel | Limited summary, minimum follow-up, or continue without guidance | Snapshot | Proposed Discovery capability / Knowledge owner | Bias, exclusion, misleading classification | OQ-SNP-004; OQ-REC-002 | Yes |

## 4. Account and Identity Resolution

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-ID-001 | Visitor reaches Create Account or Sign In | Account already exists | Offer safe Sign In or recovery without exposing account details | Account enumeration or duplicate linkage | Sign In, approved recovery, or leave | Claim remains unchanged | Core Identity and Access | Enumeration and takeover | Core Security §5.4; OQ-ID-002 | Yes for mechanism |
| EC-ID-002 | Anonymous Discovery exists | Account is created after Discovery | Keep account creation distinct from session claim | Automatic claim, import, or Business creation | Resolve conditional verification, context, then claim if applicable | Claim; Lifecycle | Core Identity and Access | Unintended identity linkage | OQ-ID-001; OQ-SES-001; BDP-C07 | Yes |
| EC-ID-003 | A session may be associated with a different identity context | Customer signs in to a different account | Require separate proof and reveal no other-account information | Silent session reassignment | Claim recovery/dispute, continue without claim, or sign out | Claim | Core Identity and Access | Cross-account disclosure and takeover | OQ-ID-002; OQ-SES-001; OQ-SES-002 | Yes |
| EC-ID-004 | Authenticated User is continuing | Verification is delayed, expired, or not required | Apply the future-approved conditional identity policy | Assume universal verification or bypass required proof | Approved recovery; wait/exit; or continue when trusted/not required | Claim remains unresolved until applicable proof | Core Identity and Access | Account security and excessive friction | BDP-C09; OQ-ID-001; OQ-ID-002 | Yes |

## 5. Session Claim

For review purposes, the proposal treats Claim as resolution of authorized control of an anonymous
Discovery session only. It would neither select a Business nor authorize import.

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-CLM-001 | Authenticated User attempts claim | Session is already claimed | Return a non-disclosing deterministic outcome under future policy | Reassign to the current account or reveal owner | Continue without claim, approved recovery, or dispute path | Claim | Core Identity and Access | Ownership disclosure and takeover | OQ-SES-002 | Yes |
| EC-CLM-002 | Claim is possible | Claim proof or session eligibility has expired | Deny safely without deleting or exposing data outside policy | Extend expiry silently or import anyway | Restart, approved recovery, or continue official journey | Lifecycle; Claim | Core Identity and Access / proposed Discovery capability | Replay and retention | OQ-SES-002; OQ-SES-004; OQ-PRV-002 | Yes |
| EC-CLM-003 | Claim is attempted | Claim fails | Leave Business and Business DNA unchanged | Partial ownership or hidden attachment | Retry/recover only through approved policy; continue without claim | Claim | Core Identity and Access | Failure leakage and brute force | OQ-SES-001; OQ-SES-002 | Yes |
| EC-CLM-004 | Prior claim operation exists | Claim request is replayed | Return or deny against one deterministic outcome | Create a new owner or bypass proof | Show safe existing outcome or require approved recovery | Claim | Core Identity and Access | Replay, idempotency, enumeration | OQ-SES-002 | Yes |
| EC-CLM-005 | Two equivalent claim requests occur | Duplicate claim | Resolve consistently without duplicate attachment | Two owners or two imports | Return existing outcome or enter recovery/dispute | Claim | Core Identity and Access | Concurrency and ownership integrity | OQ-SES-002 | Yes |
| EC-CLM-006 | Ownership is contested or evidence conflicts | Claim is disputed | Stop reassignment and protected disclosure | Choose the latest claimant silently | Future-approved dispute/recovery; continue without import | Claim | Core Identity and Access / Security | Account takeover and sensitive business evidence | OQ-SES-001; OQ-SES-002 | Yes |
| EC-CLM-007 | Claim completed | Import is never requested or completed | Keep claim and import distinct; apply future lifecycle policy | Treat claim as Business attachment or indefinite retention | Import later if eligible/authorized, delete/request deletion, or expire under policy | Claim; Import; Lifecycle | Core Identity and Access / proposed Discovery capability / Privacy | Purpose drift and indefinite linkage | OQ-SES-006; OQ-PRV-002 | Yes |

## 6. Workspace, Business, and Target Context

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-CTX-001 | Authenticated User needs formal context | Workspace is unavailable, invalid, suspended, or unauthorized | Deny protected continuation and preserve Discovery separately under policy | Create/use an unauthorized default Workspace | Recover context, create under existing authority, or continue later | Import remains not performed | Workspace owner / Identity and Access | Tenant isolation and resource authorization | ADR-003; ADR-034; OQ-AUT-002 | Yes for routing detail |
| EC-CTX-002 | User has multiple authorized Workspaces | Context must be chosen | Require explicit selection or confirmation | Pick last-used or first Workspace as proof of authorization | Select an authorized Workspace or leave | Import | Workspace owner / Navigation | Cross-tenant attachment | ADR-003; ADR-034; OQ-AUT-002 | Yes |
| EC-CTX-003 | Authorized Workspace exists | No formal Business exists | Keep evidence unimported until a Business is created under authority | Attach to Workspace or create Business DNA | Create Business, defer import, or continue without evidence | Import | Organization Registry | Canonical hierarchy and authorization | ADR-004; ADR-005; OQ-PRD-004 | Yes for resume UX |
| EC-CTX-004 | User has multiple authorized Businesses | Target is needed | Require explicit eligible target selection and current authorization | Infer target from Entry Intent, session, or hierarchy | Select one authorized Business, decline import, or leave | Import | Organization Registry / Authorization owner | Cross-Business disclosure and write | ADR-034; OQ-AUT-002 | Yes |
| EC-CTX-005 | A target was previously selected | Business is deleted, archived, suspended, or changed before import | Revalidate existence, lifecycle, and authorization; do not import | Fall back to another Business or restore target silently | Reselect if allowed, defer, or continue without import | Import | Organization Registry / Authorization owner | Invalid-target and tenant-boundary writes | OQ-IMP-004 | Yes |

## 7. Evidence Import

For review purposes, the proposed Import path would depend on a formal Business and current
target-Business authorization. It could introduce only draft or Candidate Fact evidence into the
governed Business Architect pipeline; the proposal would not treat Import as publication of
Business DNA.

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-IMP-001 | Eligible evidence and target are proposed | Import authorization is denied | Leave target and source unchanged; explain denial safely | Reveal protected target details or import partially | Select another authorized target, continue without import, or leave | Import | Target authorization owner / Business Architect | Least privilege and tenant isolation | ADR-034; OQ-AUT-001; OQ-AUT-002 | Yes for Permission |
| EC-IMP-002 | Prior import failed or outcome is uncertain | Import is retried | Revalidate authorization, eligibility, freshness, and prior outcome | Assume retry safety or duplicate Candidate Facts | Return deterministic prior outcome or use future-approved retry | Import | Business Architect | Replay, duplicate writes, and provenance | OQ-IMP-001 | Yes |
| EC-IMP-003 | Equivalent evidence was already imported | Duplicate import occurs | Preserve one governed logical outcome and source lineage | Duplicate facts or publication | Identify prior outcome; allow review without another canonical write | Import | Business Architect | Idempotency and audit integrity | OQ-IMP-001 | Yes |
| EC-IMP-004 | An import operation does not complete wholly | Partial import is observed or suspected | Publish nothing and surface a recoverable governed status | Treat partial data as confirmed/published | Reconcile through owner-approved recovery or continue without affected evidence | Import | Business Architect | Integrity, hidden partial write, auditability | OQ-IMP-001 | Yes |
| EC-IMP-005 | Evidence was eligible earlier | Evidence is stale when import is attempted | Preserve original versions and withhold/review/re-evaluate per future policy | Import stale inference as current confirmed truth | Refresh, import only eligible source evidence, or decline | Snapshot; Import | Proposed Discovery capability / Business Architect | Explainability and outdated guidance | OQ-IMP-006; OQ-SNP-002 | Yes |
| EC-IMP-006 | Official Business Architect already has draft evidence | Imported evidence agrees with or duplicates it | Keep sources distinguishable until governed review | Silent overwrite or provenance collapse | Present agreement/duplicate for review or decline import | Import | Business Architect | Evidence integrity and authorized editor context | OQ-IMP-002 | Yes |
| EC-IMP-007 | Official draft contains Candidate Facts | Imported evidence conflicts with draft facts | Surface the conflict for authorized review | Newest-wins or Discovery-wins merge | Confirm, correct, reject, or defer through Business Architect | Import | Business Architect | Misleading evidence and concurrent editor changes | OQ-IMP-002; OQ-IMP-005 | Yes |
| EC-IMP-008 | Business has published Business DNA | New Discovery evidence conflicts | Preserve the published Business DNA Snapshot unchanged | Direct overwrite, automatic republish, or readiness change | Disallow or open governed review/draft path if later approved | Import | Business Architect / Business DNA owner | Canonical integrity and history | BDP-C03; OQ-IMP-003; OQ-IMP-005 | Yes |
| EC-IMP-009 | Imported evidence reaches Review Checkpoint | User rejects all imported evidence | Continue Business Architect without using it as confirmed truth | Treat rejection as confirmation or erase required history automatically | Continue official pipeline; retain/remove working evidence only under policy | Import; Business Architect state remains governed | Business Architect | Privacy minimization versus Audit/provenance | OQ-IMP-005; OQ-PRV-003 | Yes |

## 8. Privacy, Consent, Delegated Context, and Experience Quality

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-PRV-001 | Anonymous evidence may exist | Anonymous deletion request is made | Route through future-approved proof and rights policy without disclosure | Delete/export based only on a supplied identifier or ignore the request | Verify under approved mechanism; delete/anonymize/deny as policy requires | Lifecycle | Privacy/Legal / Security / data owner | Requester proof, backups, Audit, legal hold | BDP-C10; OQ-PRV-002; OQ-PRV-003 | Yes |
| EC-PRV-002 | Authenticated evidence or imported lineage exists | Deletion or export request is made | Apply owner, privacy, Audit, and legal constraints separately | Delete canonical/Audit evidence or export unauthorized Business data | Route to applicable rights process; preserve required minimal Audit | Lifecycle; Import | Privacy/Legal / data owners / Audit | Scope, authorization, lineage, legal hold | ADR-038; OQ-PRV-003; OQ-IMP-005 | Yes |
| EC-PRV-003 | Anonymous result is presented | Visitor requests email or export | Treat delivery as unresolved and separate from account/marketing consent | Send sensitive business information or enroll marketing implicitly | Withhold, use a later-approved export/delivery path, or Create Account or Sign In | Snapshot; Lifecycle | Product / Privacy / Security | Identity linkage and wrong-recipient disclosure | OQ-PRD-002; OQ-PRV-004 | Yes |
| EC-PRV-004 | Visitor uses Discovery | Marketing consent is declined | Preserve service path to the extent allowed by future purpose policy | Treat participation as marketing consent or reduce canonical rights | Continue non-marketing journey or account-first path | No canonical state | Product / Privacy | Consent separation and dark patterns | OQ-PRV-001 | Yes for full purpose model |
| EC-PRV-005 | User follows invitation entry | Invitation is present, invalid, expired, or for another identity | Resolve invitation and authorization under existing/future authority | Route automatically through Owner acquisition or infer Business access | Invitation recovery, authorized destination, or safe denial | Claim/Import only if separately applicable | Identity and Access / invitation owner | Identity mismatch and unauthorized context | BDP-C08; OQ-AUT-003 | Yes |
| EC-PRV-006 | Consultant, partner, or reseller acts for a client | Client context or delegation is absent, changed, or disputed | Require explicit current client authority | Claim client session or import based on archetype/relationship label | Client action, approved delegation, safe denial, or unprotected exploration | Claim; Import | Client Business authorization owner / Identity and Access | Delegation, revocation, lingering access | OQ-AUT-003 | Yes |
| EC-PRV-007 | Any proposed customer-facing step | Accessibility or localization degrades | Evaluate and remediate against applicable Accepted authority; preserve a safe alternative | Let this proposal invent policy or treat degraded critical flow as success | Accessible recovery/alternate route or stop protected action safely | No canonical state | Owning UX boundary | Exclusion, privacy during assistance, semantic errors | AGENTS.md §12; OQ-ONT-003 where terminology applies | No for accepted obligations; detailed design later |
| EC-PRV-008 | Customer requests support | Support intervention is considered | Require future-approved identity, scope, least privilege, and Audit | Give support implicit claim/import/Business authority | Explain, route, or perform only separately authorized action | Any affected dimension remains owner-controlled | Support governance / owning domain | Social engineering, excessive access, Audit | OQ-AUT-001; OQ-AUT-003; OQ-PRV-006 | Yes |

## 9. Recommendations, Product Hub, Commercial, and Operating Systems

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-DOWN-001 | Provisional guidance or governed Recommendation exists | Guidance/Recommendation becomes stale or unavailable | Label/withhold according to owner authority; keep provisional and canonical outputs distinct | Present stale provisional guidance as a canonical Recommendation | Resume governed evidence/recommendation path or continue exploring | Snapshot only for provisional presentation | Discovery owner or Recommendation owner, as applicable | Misleading consequential advice and lineage | BDP-C06; OQ-REC-001; OQ-REC-003 | Yes |
| EC-DOWN-002 | Authorized customer reaches Product Hub | Product Hub is unavailable or owner projections are partial | Explain limitation and preserve owner states | Recreate owner facts or show false readiness/access | Retry/return later, Marketplace if separately authorized, or owner-specific recovery | No Discovery dimension changes | Product Hub | Leakage through cached/partial projections | ADR-019; ADR-020; OQ-ECO-002 | Yes for detailed recovery |
| EC-DOWN-003 | Customer enters commercial journey | Subscription or trial is unavailable, pending, failed, or expires | Route to Billing/Subscription owner without changing Business DNA or Core readiness | Equate payment with Permission, activation, or readiness | Owner-specific recovery or continue exploring | No Discovery dimension changes | Billing/Subscription | Payment privacy and false entitlement | ADR-021; ADR-022; OQ-ECO-003 | Yes |
| EC-DOWN-004 | Entitlement/install/setup journey has begun | Installation, setup, or activation fails or is abandoned | Route to the applicable owner and preserve separate lifecycle facts | Mark Operating System Ready or alter Core readiness | Resume owner-specific installation/setup/activation step | No Discovery dimension changes | Marketplace/Product Hub/Operating System according to accepted boundary | Authorization and operational-data separation | ADR-018; ADR-023 through ADR-026; OQ-ECO-003 | Yes |
| EC-DOWN-005 | Customer revisits available capabilities/products | Marketplace is used before or after adoption | Treat Marketplace as a recurring authorized destination without transferring ownership | Make Marketplace terminal-only or let it own external canonical facts | Return to Product Hub, Marketplace, or applicable owner under current context | No Discovery dimension changes | Marketplace / Product Hub | Context reauthorization and asset entitlement | BDP-C13; ADR-027; ADR-028; OQ-ECO-002 | Yes for exact routing |

## 10. Audit, Observability, Abandonment, and Restart

| ID | Starting context | Trigger | Proposed safe review outcome | Outcome rejected for proposal review | Recovery or continuation | Conceptual dimensions affected | Logical owner (review construct) | Security / privacy concern | Authority / conflict / Open Question | Human decision |
|---|---|---|---|---|---|---|---|---|---|---|
| EC-OPS-001 | A consequential claim/import/review action is attempted | Required Audit evidence cannot be established | Fail or defer the consequential action according to owning authority | Report success without required Audit evidence | Retry owner-controlled operation or continue without the action | Claim or Import remains safely unresolved/failed conceptually | Owning domain / Audit owner | Non-repudiation, incident investigation, data minimization | ADR-038; OQ-PRV-006 | Yes for detailed recovery |
| EC-OPS-002 | Any journey dependency is unhealthy | Observability is missing or unreliable | Avoid false health/success claims and isolate the affected dependency | Log sensitive evidence broadly or mask canonical failure | Limited experience, safe retry, owner escalation, or account-first continuation | Affected conceptual dimension only | Owning domain / Observability owner | Telemetry leakage and invisible failure | Core Observability; OQ-PRV-006; OQ-SNP-001 | Yes |
| EC-OPS-003 | Visitor or User elects to stop | Safe abandonment is requested | End the active interaction without creating canonical state | Coerce completion or imply deletion beyond policy | Later restart/resume only under approved lifecycle rules | Progress; Lifecycle; Replacement | Proposed Discovery capability | Retention expectations and consent withdrawal | OQ-PRD-005; OQ-PRV-002 | Yes |
| EC-OPS-004 | Prior session cannot or should not resume | Customer restarts later | Create a distinguishable new attempt under future policy | Reuse stale/other-person evidence silently | New optional Discovery or direct account-first path | Progress; Lifecycle; Replacement | Proposed Discovery capability | Cross-session linkage and stale evidence | OQ-SES-003; OQ-SNP-002 | Yes |

## 11. Boundary Summary

Across every edge condition, the proposal intends the following review boundaries:

- Discovery creates no Workspace, Business, Membership, Business DNA, canonical Recommendation,
  subscription, entitlement, installation, activation, `Core Workspace Ready`, or
  `Operating System Ready` state.
- The proposal would not treat Claim as a substitute for target-Business authorization or Import.
- The proposal would not treat Import as a substitute for review, confirmation, publication,
  Recommendation generation, or readiness evaluation.
- The proposal would not treat failure as creating a canonical or readiness outcome.
- The proposal would not treat persona labels as granting a role or Permission.
- Deferred identity, privacy, data-lifecycle, scoring, and recovery choices remain Open Questions.

This matrix cannot be promoted automatically into Genesis, a Freeze, detailed UX, test cases, an
implementation plan, or runtime behavior.

## 12. Related Documents

- [Human Architecture Review Decision](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md)
- [Wave 1 Proposal](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md)
- [Wave 1 Authority and Impact Crosswalk](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md)
- [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md)
- [Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md)
- [Journey Decision Matrix](./04-JOURNEY-DECISION-MATRIX.md)
- [ADR-042 — Proposed](../../ADR/ADR-042-pre-registration-business-discovery.md)
- [Core Platform Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md)
- [Core Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md)
- [Core Security Model](../../../02-core-platform/08-SECURITY-MODEL.md)
- [Core Observability](../../../02-core-platform/09-OBSERVABILITY.md)
- [Product Hub Genesis](../../../01-genesis/13-PRODUCT-HUB.md)
- [Operating System Lifecycle](../../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md)
- [Marketplace Genesis](../../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md)
