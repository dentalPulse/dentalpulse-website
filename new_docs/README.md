# DentalPulse Website Redesign Documentation (`new_docs`)

This directory houses the comprehensive architectural audit and step-by-step implementation plan for redesigning the DentalPulse website based on the reference design mockup (`Main.dc.html`).

---

## Documents in this Directory

1. [**Reference Website Audit (`REFERENCE_AUDIT.md`)**](REFERENCE_AUDIT.md)
   - Detailed analysis of the reference HTML (`Main.dc.html`).
   - Complete design system breakdown: Color palette tokens, typography scales (`Plus Jakarta Sans` & `JetBrains Mono`), radii, shadows, and SVG animations (`dpDash`, `dpBlink`, `dpFloat`).
   - Section-by-section breakdown of all 13 components, data structures, and interactive states.
   - Asset and branding retention guidelines.

2. [**Redesign & Implementation Plan (`REDESIGN_IMPLEMENTATION_PLAN.md`)**](REDESIGN_IMPLEMENTATION_PLAN.md)
   - Component-by-component mapping between current codebase and new design.
   - 10-phase safe implementation roadmap ensuring zero downtime or regression.
   - Integration plan for [`CheckoutModal.tsx`](../src/components/landing/CheckoutModal.tsx), `/billing/success`, and `/billing/cancel`.
   - Responsive design strategy for desktop, tablet, and mobile breakpoints.
