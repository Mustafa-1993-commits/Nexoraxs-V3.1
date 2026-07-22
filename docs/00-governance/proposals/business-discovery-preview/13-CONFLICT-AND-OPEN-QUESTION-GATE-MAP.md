# Business Discovery Preview — Conflict and Open Question Gate Map

**Status:** Proposed for Authority Review

## 1. Purpose and Preservation Boundary

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Artifact type | Non-authoritative conflict and Open Question gate-planning index |
| Review owner | Nexoraxs Architecture Governance |
| Governing conflict source | [Wave 1 Authority and Impact Crosswalk §4](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md#4-conflict-register) |
| Governing Open Question source | [Wave 1 Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md) |
| Batch plan | [Authority Integration Batch Plan](./11-AUTHORITY-INTEGRATION-BATCH-PLAN.md) |

> **No-resolution boundary:** This file indexes when an item may first be considered by a future
> separately authorized human review. It does not resolve, defer, close, merge, rename, reprioritize,
> or change the status of any conflict or Open Question. An earliest gate is not authorization for
> that gate, and appearance in a batch is not a decision.

`AIB` identifiers are Wave 4 planning references only. They are not accepted Governance IDs,
canonical enums, runtime states, database values, API values, workflows, state machines,
implementation requirements, or engineering tasks.

## 2. Conflict Preservation Map

The status text is preserved from Wave 1. The Wave 3 human decision confirms that every conflict
remains open with its existing status. Wave 4 makes no change.

| Conflict ID | Conflict | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| BDP-C01 | Freeze-first versus Genesis-ultimate precedence | **Human decision required**. | AIB-01; then every authority-class, ADR, Freeze, and readiness batch | Separate AIB-01 Human Architecture Review | Open — unchanged |
| BDP-C02 | Frozen account-first journey versus pre-registration Discovery | **Human decision required**. | AIB-01, AIB-08, AIB-09, conditionally AIB-10/AIB-11 | AIB-01 may classify the change path; substantive journey consideration begins no earlier than AIB-08 | Open — unchanged |
| BDP-C03 | Direct-answer-to-Business-DNA wording versus Candidate Fact pipeline | **Proposed resolution**; authority wording still needs human disposition. | AIB-02, AIB-03, AIB-08, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| BDP-C04 | Proposal-first lifecycle versus detailed documentation in the same wave | **Resolved by existing authority for Wave 1**; later-wave approval remains open. | AIB-01 and every batch-specific authorization | Separate AIB-01 Human Architecture Review for future sequencing | Later progression remains gated; status unchanged |
| BDP-C05 | Unsupported numeric scores and setup-time claims | **Proposed resolution**; model decision remains open. | AIB-05, AIB-07, AIB-09 | Separate AIB-05 Human Architecture Review | Open — unchanged |
| BDP-C06 | Canonical Recommendation lifecycle versus provisional guidance | **Proposed resolution**; human terminology decision required. | AIB-02, AIB-05, AIB-06, AIB-09 | Separate AIB-05 Human Architecture Review after applicable AIB-02 evidence | Open — unchanged |
| BDP-C07 | Missing anonymous session, claim, import, retention, and privacy authority | **Human decision required**. | AIB-03, AIB-04, AIB-09 | Separate AIB-03 or AIB-04 Human Architecture Review within its subject scope | Open — unchanged |
| BDP-C08 | Persona labels versus deferred permissions and delegation | **Resolved by existing authority at principle level**; detailed routing requires human decisions. | AIB-04, AIB-08, AIB-09 | Separate AIB-04 Human Architecture Review | Detailed decisions remain open; status unchanged |
| BDP-C09 | Conditional verification versus deferred mechanisms | **Proposed resolution**; mechanism remains open. | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| BDP-C10 | Deferred privacy, retention, deletion, anonymization, residency, export, and legal hold | **Human decision required**. | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| BDP-C11 | Product Hub coordination versus Operating System ownership | **Resolved by existing authority** at boundary level. | AIB-06, AIB-07, AIB-08, AIB-09 | Separate AIB-06 or AIB-07 Human Architecture Review within its subject scope | Detailed routing remains open; status unchanged |
| BDP-C12 | Duplicate or legacy journey and master-architecture documents | **Human decision required** for cleanup; current authority selection is resolved by Freeze. | AIB-01, AIB-12 | Separate AIB-12 Human Architecture Review after AIB-01 evidence | Open — unchanged |
| BDP-C13 | Marketplace as recurring destination | **Proposed resolution**. | AIB-06, AIB-08, AIB-09 | Separate AIB-06 Human Architecture Review | Open — unchanged |
| BDP-C14 | Canonical Nexoraxs product identity terminology | **Resolved by existing authority** for category; spelling governance requires clarification. | AIB-02, AIB-09 | Separate AIB-02 Human Architecture Review | Clarification remains open; status unchanged |
| BDP-C15 | Business Health Snapshot (working term) versus Business DNA Snapshot | **Human decision required**. | AIB-02, AIB-03, AIB-05, AIB-09 | Separate AIB-02 Human Architecture Review | Open — unchanged |

### 2.1 Explicitly preserved primary tensions

- **BDP-C01 remains open:** Wave 4 does not select Freeze-first or Genesis-ultimate precedence and
  does not prescribe which source changes first.
- **BDP-C02 remains open:** the current frozen account-first journey remains controlling; Wave 4
  does not approve the pre-registration Discovery branch or a Genesis change.

## 3. Open Question Gate Index

The following 50 entries preserve the identifiers and current statuses from the Wave 1 register.
`Earliest possible consideration gate` means the first candidate human-review boundary where the
question's evidence may be examined. It does not answer the question or authorize the batch.

### 3.1 Governance and precedence

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-GOV-001 | Controlling precedence and correction path | **Open — human decision required** | AIB-01; all later batches depend on its outcome or explicit authorized deferral | Separate AIB-01 Human Architecture Review | Open — unchanged |
| OQ-GOV-002 | Genesis amendment, successor Core baseline, both, or another change class | **Open — human decision required** | AIB-01, AIB-08, AIB-09, AIB-10 | AIB-01 may classify options; source-specific consideration begins no earlier than AIB-08 | Open — unchanged |
| OQ-GOV-003 | Exact files and scope for a future detailed documentation wave | **Open — human decision required** | Every future batch authorization; especially AIB-08 through AIB-12 | Separate batch-specific Human Architecture Review after AIB-01 | Open — unchanged |
| OQ-GOV-004 | Legacy duplicate journey and master-document treatment | **Open — human decision required** | AIB-12 | Separate AIB-12 Human Architecture Review | Open — unchanged |

### 3.2 Product and journey

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-PRD-001 | Measurable value and question-success criteria | **Open — human decision required** | AIB-08, AIB-09 | Separate AIB-08 Human Architecture Review | Open — unchanged |
| OQ-PRD-002 | Whether and when email may be requested before account creation | **Open — human decision required** | AIB-04, AIB-08, AIB-09 | Separate AIB-04 Human Architecture Review for privacy/identity evidence | Open — unchanged |
| OQ-PRD-003 | Existing authenticated User Discovery and import scope | **Open — human decision required** | AIB-03, AIB-04, AIB-08, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| OQ-PRD-004 | Resume with no Workspace or no Business | **Open — human decision required** | AIB-03, AIB-08, AIB-09 | Separate AIB-03 Human Architecture Review for formal-context evidence | Open — unchanged |
| OQ-PRD-005 | Skip, abandonment, restart, and replacement behavior | **Open — human decision required** | AIB-04, AIB-08, AIB-09 | Separate AIB-04 Human Architecture Review for lifecycle/privacy evidence | Open — unchanged |

### 3.3 Ontology and terminology

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-ONT-001 | Canonical acceptability of Business Discovery Preview and Business Health Snapshot (working term) | **Open — human decision required** | AIB-02; then AIB-05, AIB-08, AIB-09 | Separate AIB-02 Human Architecture Review | Open — unchanged |
| OQ-ONT-002 | Terms across answer, inference, Discovery Evidence, Candidate Fact, claim, and import | **Open — human decision required** | AIB-02, AIB-03, AIB-04, AIB-09 | Separate AIB-02 Human Architecture Review | Open — unchanged |
| OQ-ONT-003 | Product-name spelling and capitalization rule | **Open — human decision required** | AIB-02, AIB-12 | Separate AIB-02 Human Architecture Review | Open — unchanged |

### 3.4 Identity and account lifecycle

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-ID-001 | Conditional identity-verification policy | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-ID-002 | Account, verification, social-login conflict, and recovery mechanisms | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-ID-003 | Storage-free operation and cross-device recovery | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |

### 3.5 Authorization and persona routing

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-AUT-001 | Import, review, correction, rejection, and publication Permission authority | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-AUT-002 | Workspace/Business selector and active-context behavior | **Open — human decision required** | AIB-03, AIB-04, AIB-08, AIB-09 | Separate AIB-03 Human Architecture Review for formal-context evidence | Open — unchanged |
| OQ-AUT-003 | Invitation, consultant, partner, reseller, and delegation authority | **Open — human decision required** | AIB-04, AIB-08, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |

### 3.6 Anonymous ownership and claim

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-SES-001 | Proof of anonymous Discovery-session control | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-SES-002 | Duplicate, concurrent, expired, disputed, replayed, failed, or already-owned claim outcomes | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-SES-003 | Multiple active sessions and replacement relationship | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-SES-004 | Persistence and expiry policy for resume | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-SES-005 | Concurrent anonymous-edit handling | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-SES-006 | Claimed-but-never-imported lifecycle | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |

### 3.7 Evidence import and Business DNA conflict

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-IMP-001 | Import eligibility and deterministic outcome semantics | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| OQ-IMP-002 | Interaction with existing draft/Candidate Facts and concurrent editors | **Open — human decision required** | AIB-03, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| OQ-IMP-003 | Import into a Business with published Business DNA | **Open — human decision required** | AIB-03, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| OQ-IMP-004 | Target Business changes before import | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-03 Human Architecture Review | Open — unchanged |
| OQ-IMP-005 | Rejection authority and evidence/provenance retention | **Open — human decision required** | AIB-03, AIB-04, AIB-09 | Separate AIB-03 Human Architecture Review with AIB-04 evidence | Open — unchanged |
| OQ-IMP-006 | Rules, Knowledge, inference, and Snapshot version lineage | **Open — human decision required** | AIB-03, AIB-05, AIB-09 | Separate AIB-03 Human Architecture Review with AIB-05 evidence | Open — unchanged |

### 3.8 Privacy, Security, and data lifecycle

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-PRV-001 | Data classification, purpose/legal basis, analytics, and marketing consent | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-PRV-002 | Configurable retention and expiry policy | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-PRV-003 | Deletion, anonymization, access, correction, export, Audit, backup, and legal hold | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-PRV-004 | Anonymous Business Health Snapshot (working term) email/export | **Open — human decision required** | AIB-02, AIB-04, AIB-08, AIB-09 | Separate AIB-04 Human Architecture Review after terminology evidence | Open — unchanged |
| OQ-PRV-005 | Residency, transfer, encryption/key, access, backup, and processor requirements | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |
| OQ-PRV-006 | Logs, analytics, traces, support, AI context, Audit, and learning use | **Open — human decision required** | AIB-04, AIB-09 | Separate AIB-04 Human Architecture Review | Open — unchanged |

### 3.9 Snapshot behavior

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-SNP-001 | Pending, failure, timeout, insufficiency, contradiction, and limited result | **Open — human decision required** | AIB-04, AIB-05, AIB-08, AIB-09 | Separate AIB-05 Human Architecture Review with applicable AIB-04 evidence | Open — unchanged |
| OQ-SNP-002 | Snapshot staleness and regeneration, labeling, or withholding | **Open — human decision required** | AIB-05, AIB-09 | Separate AIB-05 Human Architecture Review | Open — unchanged |
| OQ-SNP-003 | Snapshot version and viewed, claimed, and imported evidence differences | **Open — human decision required** | AIB-02, AIB-03, AIB-05, AIB-09 | Separate AIB-03 Human Architecture Review after terminology evidence | Open — unchanged |
| OQ-SNP-004 | Unsupported, multi-model, missing-knowledge, and weak-evidence handling | **Open — human decision required** | AIB-05, AIB-08, AIB-09 | Separate AIB-05 Human Architecture Review | Open — unchanged |

### 3.10 Confidence and Recommendation semantics

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-REC-001 | Provisional guidance versus canonical Recommendation lifecycle | **Open — human decision required** | AIB-02, AIB-05, AIB-06, AIB-09 | Separate AIB-05 Human Architecture Review after terminology evidence | Open — unchanged |
| OQ-REC-002 | Evidence-strength/confidence calculation and display | **Open — human decision required** | AIB-05, AIB-09 | Separate AIB-05 Human Architecture Review | Open — unchanged |
| OQ-REC-003 | Guidance/Recommendation staleness and regeneration/retirement | **Open — human decision required** | AIB-05, AIB-06, AIB-09 | Separate AIB-05 Human Architecture Review | Open — unchanged |
| OQ-REC-004 | Setup-effort estimation model and permission to display | **Open — human decision required** | AIB-05, AIB-07, AIB-09 | Separate AIB-05 Human Architecture Review with AIB-07 evidence | Open — unchanged |
| OQ-REC-005 | Business Health concept, ownership, and terminology | **Open — human decision required** | AIB-02, AIB-05, AIB-09 | Separate AIB-02 Human Architecture Review; model consideration no earlier than AIB-05 | Open — unchanged |

### 3.11 Ecosystem and readiness

| Open Question ID | Preserved subject | Unchanged current status | Future batch dependencies | Earliest possible consideration gate | Wave 4 result |
|---|---|---|---|---|---|
| OQ-ECO-001 | Existing Core Workspace Ready evaluation point after import/review | **Open — confirmation required; no criterion change authorized** | AIB-03, AIB-07, AIB-08, AIB-09, conditionally AIB-11 | Separate AIB-07 Human Architecture Review with Core evidence | Open — unchanged; no criterion change |
| OQ-ECO-002 | Product Hub/Marketplace recurring relationship | **Open — human decision required** | AIB-06, AIB-08, AIB-09 | Separate AIB-06 Human Architecture Review | Open — unchanged |
| OQ-ECO-003 | Commercial, entitlement, installation, activation, and setup failure routing | **Open — human decision required** | AIB-07, AIB-08, AIB-09, conditionally AIB-11 | Separate AIB-07 Human Architecture Review | Open — unchanged |
| OQ-ECO-004 | Product Hub presentation before canonical Recommendation conditions | **Open — human decision required** | AIB-05, AIB-06, AIB-08, AIB-09 | Separate AIB-05 Human Architecture Review with AIB-06 evidence | Open — unchanged |
| OQ-ECO-005 | Selection of a non-recommended Operating System | **Open — human decision required** | AIB-05, AIB-06, AIB-07, AIB-09 | Separate AIB-06 Human Architecture Review with AIB-07 evidence | Open — unchanged |

## 4. Preservation Counts

| Register | Expected count | Individually indexed | Status changes in Wave 4 | Resolutions in Wave 4 |
|---|---:|---:|---:|---:|
| Conflict IDs | 15 | 15 | 0 | 0 |
| Open Question IDs | 50 | 50 | 0 | 0 |

## 5. Gate-use Rules

- A batch-specific gate may consider only the items mapped to its explicitly authorized scope.
- A future decision must quote the current status and record whether an item is resolved,
  explicitly deferred, or remains open; no result may be inferred.
- A resolution that would change authority requires the separately authorized governance path
  applicable to that source.
- A deferred question retains its stable ID, owner, risk, and evidence requirement.
- Rejection of a proposed answer leaves the current Open Question and controlling authority intact.
- Wave 4 does not authorize any batch-specific gate, authority edit, ADR disposition, Freeze
  successor, readiness action, or implementation step.

Related Wave 4 artifacts:

- [Authority Integration Batch Plan](./11-AUTHORITY-INTEGRATION-BATCH-PLAN.md)
- [Authority Evidence and Prerequisite Matrix](./12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md)
- [Wave 4 Traceability and Human Review Register](./14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md)
