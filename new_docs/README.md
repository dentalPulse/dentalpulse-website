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

7. [**Solutions (Marketing Teams) Audit (`SOLUTIONS_MARKETING_PAGE_AUDIT.md`)**](SOLUTIONS_MARKETING_PAGE_AUDIT.md)
   - Detailed audit of `Marketing.dc.html` (`Solutions — Marketing-html`).
   - Interactive segment builder mockup (Implant-ready practices, WHERE/AND query rules, 3-channel campaign performance).
   - "Marketing that shows up in case volume" 4-card grid, dark capabilities section, testimonial quote, and role cross-links.

8. [**Solutions (Marketing Teams) Implementation Plan (`SOLUTIONS_MARKETING_IMPLEMENTATION_PLAN.md`)**](SOLUTIONS_MARKETING_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/solutions/marketing`.
   - Modular component architecture in `src/components/solutions/marketing/`.
   - 5-phase rollout roadmap.

---

## 4. Integrations Page

1. [**Integrations Page Audit (`INTEGRATIONS_PAGE_AUDIT.md`)**](INTEGRATIONS_PAGE_AUDIT.md)
   - Detailed audit of `Integrations.dc.html` (`Integrations-html`).
   - Central data hub diagram (LMS, Accounting, CRM, Messaging connected to DentalPulse engine).
   - 4-category integration directory, dark 4-step IT onboarding workflow, and mint request banner.

2. [**Integrations Implementation Plan (`INTEGRATIONS_IMPLEMENTATION_PLAN.md`)**](INTEGRATIONS_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/integrations` (`src/app/integrations/page.tsx`).
   - Modular component architecture in `src/components/integrations/`.
   - 5-phase rollout roadmap.

---

## 5. Pricing Page

1. [**Pricing Page Audit (`PRICING_PAGE_AUDIT.md`)**](PRICING_PAGE_AUDIT.md)
   - Detailed audit of `Pricing.dc.html` (`Pricing-html`).
   - Interactive monthly/yearly toggle with "2 months free" discount mechanism.
   - 4-tier subscription cards (Starter, Growth, Growth AI, Enterprise), comprehensive 5-category comparison matrix, accordion FAQ, and CheckoutModal integration.

2. [**Pricing Implementation Plan (`PRICING_IMPLEMENTATION_PLAN.md`)**](PRICING_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/pricing` (`src/app/pricing/page.tsx`).
   - Modular component architecture in `src/components/pricing/`.
   - 5-phase rollout roadmap.

---

## 6. Customers Page

1. [**Customers Page Audit (`CUSTOMERS_PAGE_AUDIT.md`)**](CUSTOMERS_PAGE_AUDIT.md)
   - Detailed audit of `Customers.dc.html` (`Customers-html`).
   - 2-column bento box featured case study with 3 neon green metrics (94% retention, $180K revenue recovered, 12 hrs saved).
   - 6-card Wall of Love testimonial grid (white, mint highlight, and signature dark styles).
   - 3-card More Stories deep-dive grid with category badges and lab visual previews.
   - High-impact bottom conversion banner and interactive case study modal specifications.

2. [**Customers Implementation Plan (`CUSTOMERS_IMPLEMENTATION_PLAN.md`)**](CUSTOMERS_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/customers` (`src/app/customers/page.tsx`).
   - Modular component architecture in `src/components/customers/`.
   - 5-phase rollout roadmap.

---

## 7. Resources (Blog & Guides) Page

1. [**Resources Page Audit (`RESOURCES_PAGE_AUDIT.md`)**](RESOURCES_PAGE_AUDIT.md)
   - Detailed audit of `Resources.dc.html` (`Resources (Blog)-html`).
   - Asymmetric hero section, large split featured guide card with heartbeat pulse SVG and neon badge.
   - Interactive topic filter pills (`All`, `Retention`, `Growth`, `Sales`, `Marketing`, `Guides`) with instantaneous state filtering.
   - 9-card responsive article grid with reading times, category tags, and vector headers.
   - Mint newsletter subscription banner (*The Lab Growth Brief*) with email form validation.
   - Interactive article reader drawer modal.

2. [**Resources Implementation Plan (`RESOURCES_IMPLEMENTATION_PLAN.md`)**](RESOURCES_IMPLEMENTATION_PLAN.md)
   - Route mapping for `/resources` (`src/app/resources/page.tsx`).
   - Modular component architecture in `src/components/resources/`.
   - 5-phase rollout roadmap.


