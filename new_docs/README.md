# DentalPulse Website Redesign Documentation (`new_docs`)

This directory houses the comprehensive architectural audits and step-by-step implementation plans for redesigning the DentalPulse website based on the reference design mockups.

---

## 1. Homepage / Main Website Redesign

1. [**Reference Website Audit (`REFERENCE_AUDIT.md`)**](REFERENCE_AUDIT.md)
   - Detailed analysis of the homepage reference HTML (`Main.dc.html`).
   - Complete design system breakdown: Color palette tokens, typography scales (`Plus Jakarta Sans` & `JetBrains Mono`), radii, shadows, and SVG animations (`dpDash`, `dpBlink`, `dpFloat`).
   - Section-by-section breakdown of all 13 components, data structures, and interactive states.
   - Asset and branding retention guidelines.

2. [**Redesign & Implementation Plan (`REDESIGN_IMPLEMENTATION_PLAN.md`)**](REDESIGN_IMPLEMENTATION_PLAN.md)
   - Component-by-component mapping between current codebase and new design.
   - Phased implementation roadmap.
   - Integration plan for [`CheckoutModal.tsx`](../src/components/landing/CheckoutModal.tsx), `/billing/success`, and `/billing/cancel`.

---

## 2. Platform & Internal Product Pages

1. [**Platform Page Audit (`PLATFORM_PAGE_AUDIT.md`)**](PLATFORM_PAGE_AUDIT.md)
   - Architectural audit of `Platform.dc.html` (`Platform (How it works)-html`).
   - Deep-dive into all 4 product pillars: Customer 360, Predictive Insights, Actionable Recommendations, and Automated Workflows.
   - Visual mockups audit: Riverbend profile card, dark real-time alert feed, 4-step game plan checklist, and visual workflow tree.
   - Architecture pipeline & security grid specifications.

2. [**Platform Implementation Plan (`PLATFORM_IMPLEMENTATION_PLAN.md`)**](PLATFORM_IMPLEMENTATION_PLAN.md)
   - Dedicated Next.js App Router route: `/platform` (`src/app/platform/page.tsx`).
   - Modular component structure in `src/components/platform/`.
   - Phased execution plan from hero jump bar to pipeline diagrams and conversion CTAs.
