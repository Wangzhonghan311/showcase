---
name: workflow-state-acceptance
description: Validate implemented business state transitions, persistence and versioned outputs against the actual product scope.
---

# Workflow State Acceptance

Identify which states must be real for this product: an offline visual demo, a local persistent workflow, and a production service have different contracts. Do not automatically add backend, payment or account systems to a presentation brief.

Exercise the meaningful transitions using the actual delivered UI and storage where required. Include input rejection and duplicate behavior, edit/submit/return/approve, refresh or restart, and export as applicable. On input change, check whether current approval should expire and whether prior approved snapshots remain stable.

Mock-only checks must not stand in for a real-storage requirement. Maintain separate outcomes for technical checking, observed UI, independent review, user judgment and production dependencies. Retain failures and input versions; do not relax assertions without an explicit scope change.

See [the case](../../cases/state-and-delivery.md).
