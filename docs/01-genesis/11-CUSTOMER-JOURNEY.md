# Customer Journey

Version: 1.1

Status: Foundation — amended by Accepted ADR-042

Owner: Nexoraxs

Amendment date: 2026-07-22

Amendment authority: [ADR-042 — Pre-Registration Business Discovery](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md)

Human Architecture Review: [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md)

Implementation authorization: None

Freeze synchronization: Pending — blocks implementation

---

# Purpose

This document defines the complete customer journey inside Nexoraxs.

Every screen, workflow, recommendation and Operating System must support this journey.

The customer journey is the primary UX blueprint of the platform.

---

# Core Philosophy

Customers should never feel they are configuring software.

Customers should feel they are building their business.

---

# Journey Overview

Accepted [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md)
adds Business Discovery as an **optional additive material pre-registration journey branch**.
It does not replace the existing account-first journey.

## Path A — Optional Discovery-first

```text
Visitor
→ Start Business Discovery
→ Temporary anonymous session
→ Guided business questions
→ Discovery preview
→ Create account or log in
→ Verify identity
→ Claim Discovery session
→ Select or create an authorized Workspace
→ Select or create an authorized Business
→ Review and confirm proposed facts
→ Import accepted evidence into Business Architect Candidate Facts
→ Governed human review
→ Publish Business DNA
→ Recommendations
→ Product Hub
```

## Path B — Existing account-first

```text
Visitor
→ Sign Up / Login
→ Create or select Workspace
→ Create or select Business
→ Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
```

Both paths converge on the existing downstream journey:

```text
Product Hub
→ Select OS and Plan
→ OS-Specific Setup
→ Operational Dashboard
→ Daily Operations
→ Growth
→ Marketplace
→ Expansion
```

## Business Discovery amendment rules

- Discovery-first is optional. Direct signup, login, skip, abandonment, failure, expiry, or an
  unsupported Discovery outcome continues through Path B without requiring a
  `DiscoverySnapshot`, claim, or import.
- No anonymous canonical Workspace, Business, Business Unit, Branch, Membership, Business DNA,
  subscription, entitlement, readiness, Operating System configuration, or operational record is
  created.
- A `DiscoverySnapshot` is temporary, provisional, and non-canonical.
- Claim requires verified identity, binds only to the verified User, and grants no Workspace,
  Business, Membership, Permission, or import authority.
- Workspace and Business creation or selection uses Core-owned boundaries and requires current,
  target-scoped authorization.
- Accepted evidence enters Business Architect as provenance-bearing Candidate Facts and remains
  subject to field-level human review. Discovery never publishes directly to Business DNA.
- Discovery completion, claim, and import have no subscription, entitlement, readiness,
  Operating System, billing, payment, or operational effect.
- This amendment synchronizes the Customer Journey with Accepted ADR-042. It does not amend any
  Architecture Freeze and does not authorize implementation. A separately governed Freeze
  amendment or successor and readiness validation remain required before implementation.

---

# Phase 1
## Discover

The customer visits Nexoraxs.

The goal is trust.

The customer should understand:

• What Nexoraxs is.

• Why it is different.

• Why it understands businesses.

The visitor may optionally start the bounded Business Discovery preview described in Path A, or
continue directly to account creation through Path B.

---

# Phase 2
## Sign Up / Login

The customer creates an account or returns to an existing account.

Authentication is the only concern at this phase.

---

# Phase 3
## Create Workspace

Customer creates a Workspace with minimal information.

The mandatory Workspace entitlement is created with it.

The entitlement is not independently billed during MVP.

---

# Phase 4
## Create Business Identity

The customer creates the Business that will own Business DNA.

This platform identity establishes the Business name and operating context.

OS-specific legal, billing, tax, or document identity remains part of the selected Operating System setup.

---

# Phase 5
## Business Architect

The platform starts a conversation about the selected Business.

Examples:

What type of business do you operate?

How many employees?

Do you have branches?

Do you sell products, services, or both?

Do you manage inventory?

What are your goals?

The conversation should feel natural.

Never like a wizard.

---

# Phase 6
## Core Business DNA

Business Architect evidence enters as Candidate Facts. Only facts that complete the governed
human review and publication pipeline update the Business DNA of the selected Business.

Anonymous answers and `DiscoverySnapshot` content never update Business DNA directly. Imported
Discovery evidence remains a proposal, preserves provenance, and may be corrected, rejected, or
partially accepted before publication.

Core Business DNA contains the minimum knowledge required to generate initial recommendations.

Each additional Business completes its own Business Architect experience and owns separate Business DNA.

---

# Phase 7
## Recommendations

Business Brain analyzes the selected Business DNA, Knowledge, Rules, Country, Goals, and Business Stage.

The platform recommends:

Business improvements

Capabilities

Automations

Dashboards

Reports

It may map those recommendations to Operating Systems, plans, or Marketplace assets as implementation options.

Every recommendation includes an explanation.

At this point the Workspace is Core Workspace Ready and may enter Product Hub.

It is not yet Operating System Ready.

---

# Phase 8
## Product Hub

Product Hub opens in the context of the selected Business.

An explicitly identified Workspace view may aggregate recommendations across Businesses without replacing their individual Business DNA.

Only relevant Operating Systems and implementation options are highlighted.

---

# Phase 9
## Select OS and Plan

The customer selects an Operating System and one canonical plan:

Starter / starter

Pro / pro

Business / business

Enterprise / enterprise

The selection creates the Operating System subscription and begins installation.

Any active Operating System subscription includes Core Platform entitlement during MVP.

---

# Phase 10
## OS-Specific Setup

The selected Operating System owns its setup experience.

Setup selects or creates the operational Business Unit inside the Business.

It then collects only the information required by that Operating System and configures its modules, workflows, permissions, and operational defaults.

When setup, configuration, and activation are complete, the Operating System is Operating System Ready.

---

# Phase 11
## Operational Dashboard

The customer enters the selected Operating System dashboard.

Daily operations begin only after Operating System Ready.

Business Brain continuously observes permitted usage and improves recommendations.

---

# Phase 12
## Growth and Marketplace

Business Brain detects growth, risks, expansion, automation opportunities, and new capability needs.

Customers may purchase, install, and activate relevant Marketplace assets.

Knowledge Pack content remains shared and immutable while its activation and applicability remain scoped to the Workspace and optionally the selected Business.

---

# Customer Feelings

Every stage should create one emotion.

Discover

↓

Curiosity

Create Workspace and Business Identity

↓

Confidence

Business Architect

↓

Understanding

Recommendations

↓

Trust

Core Workspace Ready

↓

Relief

Operating System Ready

↓

Productivity

Growth

↓

Excitement

Marketplace

↓

Expansion

---

# Golden Rule

The customer should never think:

"I am configuring software."

The customer should always feel:

"I am building my business."

---

# Revision History

| Version | Date | Change | Authority | Implementation effect |
|---|---|---|---|---|
| 1.0 | Historical foundation | Original account-first Customer Journey | Genesis foundation | Historical baseline preserved |
| 1.1 | 2026-07-22 | Added the optional Discovery-first material branch; preserved account-first; corrected the Business DNA handoff to the Candidate Fact pipeline | [Accepted ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md) and its [Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) | None; Freeze synchronization and readiness validation remain pending |
