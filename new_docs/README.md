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

---

## 3. Solutions Pages (Role-Based Intelligence)

1. [**Solutions (Lab Owners & C-Suite) Audit (`SOLUTIONS_OWNERS_PAGE_AUDIT.md`)**](SOLUTIONS_OWNERS_PAGE_AUDIT.md)
   - Detailed audit of `Owners.dc.html` (`Solutions — Lab owners & C-suite-html`).
   - Executive scorecard breakdown ($4.86M Revenue, 91.4% Retention, $48.2K LTV, $186K Revenue at risk, segment bars).
   - Executive question cards, dark capabilities section, testimonial quote, and role cross-links.

2. [**Solutions (Lab Owners & C-Suite) Implementation Plan (`SOLUTIONS_OWNERS_IMPLEMENTATION_PLAN.md`)**](SOLUTIONS_OWNERS_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/solutions` and `/solutions/owners`.
   - Component architecture in `src/components/solutions/`.
   - 5-phase rollout roadmap.

3. [**Solutions (Sales & CS Managers) Audit (`SOLUTIONS_MANAGERS_PAGE_AUDIT.md`)**](SOLUTIONS_MANAGERS_PAGE_AUDIT.md)
   - Detailed audit of `Managers.dc.html` (`Solutions — Sales & CS managers-html`).
   - Team performance scorecard breakdown (Rep table: Jordan M., Aisha R., Tom K., Lena S., suggested coaching intervention).
   - "Lead with facts, not hunches" 4-card grid, dark capabilities section, testimonial quote, and role cross-links.

4. [**Solutions (Sales & CS Managers) Implementation Plan (`SOLUTIONS_MANAGERS_IMPLEMENTATION_PLAN.md`)**](SOLUTIONS_MANAGERS_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/solutions/managers`.
   - Modular component architecture in `src/components/solutions/managers/`.
   - 5-phase rollout roadmap.

5. [**Solutions (Sales Representatives) Audit (`SOLUTIONS_SALES_REPS_PAGE_AUDIT.md`)**](SOLUTIONS_SALES_REPS_PAGE_AUDIT.md)
   - Detailed audit of `SalesReps.dc.html` (`Solutions — Sales reps-html`).
   - Mobile phone scorecard mockup (Today's priorities: Lakeside, Riverbend, Dr. Chen with field talking points).
   - "Less time digging. More time with dentists" 4-card grid, dark capabilities section, testimonial quote, and role cross-links.

6. [**Solutions (Sales Representatives) Implementation Plan (`SOLUTIONS_SALES_REPS_IMPLEMENTATION_PLAN.md`)**](SOLUTIONS_SALES_REPS_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/solutions/sales-reps`.
   - Modular component architecture in `src/components/solutions/sales-reps/`.
   - 5-phase rollout roadmap.



