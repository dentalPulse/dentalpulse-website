# DentalPulse Redesign & Implementation Plan

**Reference Source:** `Main.dc.html` (`C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Home-html\Main.dc.html`)  
**Target Project:** `dentalpulse-website`  
**Date:** October 26, 2026  
**Auditor & Architect:** Antigravity AI Assistant  

---

## 1. Project Objectives & Core Principles

1. **Visual Fidelity to Reference:** Replicate the typography, color palette, responsive layout, spacing, and micro-interactions of the reference design (`Main.dc.html`) with pixel-level precision.
2. **Brand & Asset Preservation:** Preserve the official DentalPulse logo (`/logo.png`, `/Dental_Pulse_Black.png`) and application assets without distortion or displacement.
3. **Safe Functional Replacement:** Preserve all existing functional routes (`/billing/success`, `/billing/cancel`), metadata routes (`/robots.txt`, `/sitemap.xml`), and the comprehensive [`CheckoutModal.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/CheckoutModal.tsx) Stripe checkout integration.
4. **Clean Next.js App Router Architecture:** Transition existing landing components into modular, typed React components using Tailwind CSS and scoped CSS animations, with no legacy baggage.

---

## 2. Component Mapping: Old vs. New Redesign

| Existing Component | Redesigned Component | Action & Scope |
| :--- | :--- | :--- |
| [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx) | [`Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx) | Rebuilt with Dark Theme (`#0A0A0A`, border `#222222`), updated nav links (`Platform`, `Solutions`, `Integrations`, `ROI`, `Pricing`, `Customers`, `Resources`), mobile slide-down drawer, preserved logo. |
| [`src/components/landing/Hero.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Hero.tsx) | [`Hero.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Hero.tsx) | Rebuilt with animated EKG pulse trace, headline with curved underline accent, and interactive **Pulse AI** search & prompt card with sample response states. |
| [`src/components/landing/ProductPreview.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProductPreview.tsx) | [`ProductPreview.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProductPreview.tsx) | Rebuilt with high-fidelity macOS browser frame, interactive dashboard mockup (Sidebar, KPIs, Revenue Chart, At-Risk Accounts, Cross-Sell Opportunities), and "Watch product tour" play button overlay. |
| *(New Section)* | [`src/components/landing/PartnerLogos.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/PartnerLogos.tsx) | New partner labs social proof strip ("Trusted by growing dental laboratories"). |
| *(New Section)* | [`src/components/landing/ProblemSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProblemSection.tsx) | Split section: "Stop managing your lab in the dark" with 3 numbered pain-point cards. |
| [`src/components/landing/ValueProposition.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ValueProposition.tsx) | [`OutcomesSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/OutcomesSection.tsx) | Replaces ValueProp with "Data visibility that pays for itself three ways" (Retention, Lifetime value, Acquisition cost). |
| *(New Section)* | [`src/components/landing/HowItWorks.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/HowItWorks.tsx) | Dark section (`#0A0A0A`) with 3 cards: `01 — Connect`, `02 — See`, `03 — Act`. |
| [`src/components/landing/Features.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Features.tsx) | [`FeaturesBento.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/FeaturesBento.tsx) | Replaces old features with modern Bento Grid layout (Churn prediction, Category gaps, Alerts, Forecasting curve, Automated workflow pills, Campaigns). |
| [`src/components/landing/ProvenResults.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProvenResults.tsx) | [`ProvenResults.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProvenResults.tsx) | Rebuilt with Mint container (`#EEFDF5`, border `#BDF5DA`) with stats `20%`, `1–3 mo`, `↑ CLV`. |
| *(New Section)* | [`src/components/landing/RolesSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/RolesSection.tsx) | 4 Role cards: Owners & C-Suite, Managers, Sales Reps, Marketing. |
| [`src/components/landing/Testimonials.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Testimonials.tsx) | [`Testimonials.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Testimonials.tsx) | Rebuilt with clean white quote cards, avatar badges, and customer attribution. |
| [`src/components/landing/BottomCTA.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/BottomCTA.tsx) | [`BottomCTA.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/BottomCTA.tsx) | Dark rounded card (`#0A0A0A`, `32px` radius) with neon pulse watermark, "Book a demo" & "Calculate your ROI" CTAs. |
| [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx) | [`Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx) | Rebuilt with Pitch Black theme (`#000000`, border `#222222`), 4 structured columns (Platform, Solutions, Company, Contact) and social channels. |
| [`src/components/landing/Pricing.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Pricing.tsx) | [`Pricing.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Pricing.tsx) | Restyled to match new font family (`Plus Jakarta Sans`), colors, and seamlessly trigger the `CheckoutModal`. |
| [`src/components/landing/CheckoutModal.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/CheckoutModal.tsx) | Preserved | **Zero breakage guarantee**: Keeps all existing tier calculation logic, seat adjustment, Stripe checkout endpoints. |

---

## 3. Phased Implementation Roadmap

### Phase 1: Typography, Global CSS & Design Tokens
1. **Google Fonts Integration:**
   - Configure `Plus Jakarta Sans` and `JetBrains Mono` in [`src/app/layout.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/layout.tsx) via `next/font/google`.
2. **Animation & Color Utility Setup:**
   - Add `@keyframes dpDash`, `@keyframes dpFloat`, `@keyframes dpBlink` and utility classes (`.dp-trace`, `.dp-live`, `.dp-float`) to [`src/app/globals.css`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/globals.css).
   - Configure Tailwind color aliases if required (`#12F095`, `#067A47`, `#06663C`, `#0A0A0A`, `#161616`, `#EEFDF5`, `#BDF5DA`).

### Phase 2: Navigation & Header
1. Update [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx):
   - Dark background `#0A0A0A`, border `#222222`.
   - Desktop nav with links matching reference: `Platform`, `Solutions`, `Integrations`, `ROI`, `Pricing`, `Customers`, `Resources`.
   - "Log in" link to `https://app.dentalpulseai.com` + "Book a demo" pill CTA button (`#12F095`).
   - Responsive mobile burger menu with slide-out overlay.
   - Preserves `/logo.png`.

### Phase 3: Hero & Interactive Pulse AI
1. Update [`src/components/landing/Hero.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Hero.tsx):
   - Dark theme `#0A0A0A` with radial dot grid (`28px 28px`).
   - SVG EKG pulse with animated `.dp-trace` neon line.
   - Extrabold headline with hand-drawn SVG underline under "dental labs."
   - **Interactive Pulse AI component:**
     - Real-time text input state (`q`, `answer`, `hasAnswer`).
     - Quick prompt chips:
       * *"Which dentists are at risk this month?"*
       * *"Where can I cross-sell?"*
       * *"How is my retention trending?"*
     - Simulated AI answer box that appears when clicking prompt chips or clicking "Ask".

### Phase 4: Product Preview & High-Fidelity Dashboard Mockup
1. Update [`src/components/landing/ProductPreview.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProductPreview.tsx):
   - Overlap positioning (`-mt-36` on desktop).
   - macOS browser chrome with URL `app.dentalpulseai.com/overview`.
   - Full code-rendered dashboard preview:
     * Sidebar with DentalPulse branding, icons, and notification badge (`18`).
     * KPI row: Revenue ($1.42M), Active Dentists (312), Revenue at risk ($186K highlighted), Avg LTV ($48.2K).
     * Area chart SVG (Green vs Grey dashed comparison).
     * At-risk dental accounts list with status badges.
     * Cross-sell opportunities with projected revenue increases.
   - Glassmorphic Play button overlay with modal / video preview interaction.

### Phase 5: Narrative & Architecture Sections (Problem, Outcomes, How It Works)
1. Build [`src/components/landing/PartnerLogos.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/PartnerLogos.tsx):
   - "Trusted by growing dental laboratories" grid.
2. Build [`src/components/landing/ProblemSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProblemSection.tsx):
   - "Stop managing your lab in the dark" narrative + 3 numbered pain-point cards.
3. Build [`src/components/landing/OutcomesSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/OutcomesSection.tsx):
   - "Data visibility that pays for itself three ways" (3 cards with mint icon circles).
4. Build [`src/components/landing/HowItWorks.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/HowItWorks.tsx):
   - Dark section `#0A0A0A` with 3 step cards (Connect, See, Act).

### Phase 6: Bento Features, Proven Results & Roles
1. Build [`src/components/landing/FeaturesBento.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/FeaturesBento.tsx):
   - Responsive Bento Grid covering Churn prediction, Category gaps, Real-time alerts, Forecasting curve, Automated workflows, and Campaigns.
2. Update [`src/components/landing/ProvenResults.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/ProvenResults.tsx):
   - Mint container (`#EEFDF5`, `#BDF5DA`) with stats: `20%`, `1–3 mo`, `↑ CLV`.
3. Build [`src/components/landing/RolesSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/RolesSection.tsx):
   - 4 role cards with monospace kickers and "Learn more →" links.

### Phase 7: Social Proof, CTA & Pitch Black Footer
1. Update [`src/components/landing/Testimonials.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/Testimonials.tsx):
   - Customer quote cards with avatars and clinic attributions.
2. Update [`src/components/landing/BottomCTA.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/BottomCTA.tsx):
   - Dark rounded card (`#0A0A0A`) with watermark EKG SVG and conversion buttons.
3. Update [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Pitch black `#000000` with 4 organized columns (Platform, Solutions, Company, Contact), social icons, and copyright line.

### Phase 8: Page Assembly & Checkout Integration
1. Update [`src/app/page.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/page.tsx):
   - Wire all new components in sequential order matching the reference design.
   - Maintain seamless access to `Pricing` and `CheckoutModal`.
2. Verify [`/billing/success`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/billing/success/page.tsx) and [`/billing/cancel`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/billing/cancel/page.tsx) to ensure header/footer changes display smoothly.

### Phase 9: Responsive Testing & Quality Assurance
1. **Desktop Viewport (1240px+):** Verify alignment, maximum container bounds, and hover interactions.
2. **Tablet Viewport (768px – 1024px):** Verify grid column wraps, bento card reflows, and dashboard preview scaling.
3. **Mobile Viewport (< 768px):** Verify hamburger menu behavior, font clamp scaling, touch targets, and mobile padding.
4. **Build & Lint Verification:** Run `npm run build` or `next lint` to ensure zero compilation or hydration issues.
