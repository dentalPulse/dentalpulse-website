# Pricing Page Audit

**Reference Source:** `Pricing.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Pricing-html\Pricing.dc.html`  
**Target Route:** `/pricing` (`src/app/pricing/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Pricing** page is a core conversion engine for DentalPulse. It serves dental lab owners and executives evaluating clear, transparent SaaS subscription tiers for lab customer intelligence, marketing automation, and AI predictive insights.

The page features:
1. **Interactive Monthly / Yearly Billing Toggle** with a highlighted `"2 months free"` green badge for annual plans.
2. **4 Tiered Subscription Plans:**
   - **Starter ($499/mo or $416/mo yearly):** Essential CRM, analytics, customer database, lead and task management (3 users included).
   - **Growth ($799/mo or $666/mo yearly — "Most popular"):** Signature dark `#0A0A0A` card with `#12F095` neon green badge, multi-channel marketing (Email, SMS, WhatsApp), customer segments, campaign builder, and marketing automation (5 users included).
   - **Growth AI ($999/mo or $833/mo yearly):** AI insights, revenue forecasting, churn prediction, AI assistant, and API access (10 users included).
   - **Enterprise (Custom):** Multi-location labs and lab groups, unlimited users, unlimited API access, and dedicated customer success manager.
3. **Comprehensive Feature Comparison Matrix:** Side-by-side table categorized into `USERS & ACCESS`, `CUSTOMER INTELLIGENCE`, `MARKETING`, `AI`, and `SUPPORT` with clear checkmarks and dashes.
4. **Interactive Accordion FAQ Section:** Answers to the most critical commercial questions (user definition, annual discounts, setup timeline, plan changes, integrations).
5. **Dark Conversion Banner:** *"Not sure which plan fits?"* with *"Book a demo"* and *"Calculate ROI"* CTAs.
6. **Seamless Modal Checkout Integration:** Direct integration with the existing 6-step interactive [`CheckoutModal.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/CheckoutModal.tsx) pre-loaded with selected plan and billing cadence.

---

## 2. Section-by-Section Architectural Inventory

### 1. Navigation & Route Setup
- **Target Route:** `/pricing` (`src/app/pricing/page.tsx`).
- **Header & Footer Linking:**
  - Header: Update `Pricing` nav item from `/#book-demo` to `/pricing`.
  - Footer: Update `Pricing` link in Platform column to use Next.js `<Link href="/pricing">`.

---

### 2. Pricing Hero & Billing Cadence Toggle (`PricingHero.tsx`)
- **Theme:** Clean white surface (`bg-white py-20 sm:py-24 px-6 text-center`).
- **Typography & Copy:**
  - Kicker: `PRICING` (JetBrains Mono, 13px, font-semibold, `#067A47`, tracking `0.06em`).
  - Headline: *"Pricing that grows with your lab."* (`text-[38px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtext: *"Four plans, one platform. Start with the visibility your team needs today, then add depth as you grow to more locations, more reps and more dentists to keep close."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] max-w-[640px] mx-auto mt-4 leading-[1.6]`).
- **Interactive Billing Period Toggle:**
  - Pill switcher: `bg-[#EFEFEF] border border-[#E6E6E6] p-1 rounded-full inline-flex mt-6`.
  - Monthly button: active state `bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full font-bold text-[15px]`.
  - Yearly button: active state with green incentive badge:
    - Text: `Yearly`
    - Badge: `2 months free` (`bg-[#BDF5DA] text-[#06663C] text-[12px] font-bold px-2.5 py-0.5 rounded-full ml-1.5`).

---

### 3. Subscription Plan Cards Grid (`PricingCardsGrid.tsx`)
- **Theme:** Light container with 4 responsive cards (`max-w-[1240px] mx-auto pb-24 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch`).
- **Plan 1: Starter**
  - Card style: `bg-white border border-[#E6E6E6] rounded-[24px] p-7 flex flex-col justify-between`.
  - Header: `Starter` • *"The essential view of your customers and pipeline."*
  - Price: Monthly `$499/mo` (billed monthly) | Yearly `$416/mo` (billed yearly `$4,990/yr`).
  - Seat limit: `Includes 3 users • +$25/extra user/mo` (`bg-[#F5F5F5] rounded-[10px] p-2.5 font-semibold text-[13.5px]`).
  - CTA Button: *"Choose Starter"* (`border border-[#0A0A0A] bg-white text-[#0A0A0A] font-bold rounded-full py-3.5 hover:bg-[#F5F5F5] transition-colors`).
  - Included Features: CRM, Dashboard & analytics, Customer database, Lead management, Task management, Website tracking.
- **Plan 2: Growth (Highlighted / Most Popular)**
  - Card style: `bg-[#0A0A0A] text-white border border-[#0A0A0A] rounded-[24px] p-7 flex flex-col justify-between shadow-[0_40px_70px_-40px_rgba(0,0,0,0.6)] relative`.
  - Header: `Growth` with `Most popular` badge (`bg-[#12F095] text-[#0A0A0A] text-[12px] font-extrabold px-2.5 py-1 rounded-full`).
  - Subtext: *"Reach every dentist with targeted, automated campaigns."*
  - Price: Monthly `$799/mo` (billed monthly) | Yearly `$666/mo` (billed yearly `$7,990/yr`).
  - Seat limit: `Includes 5 users • +$25/extra user/mo` (`bg-[#161616] rounded-[10px] p-2.5 font-semibold text-[13.5px] text-[#E6E6E6]`).
  - CTA Button: *"Choose Growth"* (`bg-[#12F095] text-[#0A0A0A] font-extrabold rounded-full py-3.5 hover:bg-[#00df83] transition-colors shadow-sm`).
  - Included Features (with `#12F095` neon green checkmarks): Everything in Starter, plus Email marketing, SMS marketing, WhatsApp marketing, Customer segments, Campaign builder, Marketing automation.
- **Plan 3: Growth AI**
  - Card style: `bg-white border border-[#E6E6E6] rounded-[24px] p-7 flex flex-col justify-between`.
  - Header: `Growth AI` • *"Predict churn and forecast revenue with AI."*
  - Price: Monthly `$999/mo` (billed monthly) | Yearly `$833/mo` (billed yearly `$9,990/yr`).
  - Seat limit: `Includes 10 users • +$25/extra user/mo` (`bg-[#F5F5F5] rounded-[10px] p-2.5 font-semibold text-[13.5px]`).
  - CTA Button: *"Choose Growth AI"* (`bg-[#0A0A0A] text-white font-bold rounded-full py-3.5 hover:bg-[#222222] transition-colors`).
  - Included Features: Everything in Growth, plus AI insights, Revenue forecasting, Churn prediction, AI business assistant, API access (limited).
- **Plan 4: Enterprise**
  - Card style: `bg-[#F9F9F9] border border-[#E6E6E6] rounded-[24px] p-7 flex flex-col justify-between`.
  - Header: `Enterprise` • *"For multi-location labs and lab groups."*
  - Price: `Custom` • *"Tailored to your lab group"*.
  - Seat limit: `Unlimited users` (`bg-white rounded-[10px] p-2.5 font-semibold text-[13.5px] border border-[#E6E6E6]`).
  - CTA Button: *"Talk to sales"* (`border border-[#0A0A0A] text-[#0A0A0A] font-bold rounded-full py-3.5 hover:bg-black/5 transition-colors` -> `https://app.dentalpulseai.com`).
  - Included Features: Everything in Growth AI, plus Unlimited API access, Dedicated success manager, All plans included.

---

### 4. Feature Comparison Matrix (`PricingCompareTable.tsx`)
- **Theme:** Clean white table in an overflow container (`max-w-[1240px] mx-auto pb-24 px-6`).
- **Headline:** *"Compare plans"* (`text-[30px] sm:text-[38px] font-extrabold tracking-[-0.03em]`).
- **Table Structure:** 5 Columns (`Features`, `Starter`, `Growth`, `Growth AI`, `Enterprise`).
- **Feature Categories:**
  1. **USERS & ACCESS:** Users included (3 / 5 / 10 / Unlimited), Extra users ($25/mo / $25/mo / $25/mo / Included), API access (— / — / Limited / Unlimited).
  2. **CUSTOMER INTELLIGENCE:** CRM & customer database (✓ / ✓ / ✓ / ✓), Dashboard & analytics (✓ / ✓ / ✓ / ✓), Lead & task management (✓ / ✓ / ✓ / ✓).
  3. **MARKETING:** Email, SMS & WhatsApp marketing (— / ✓ / ✓ / ✓), Customer segments (— / ✓ / ✓ / ✓), Campaign builder & automation (— / ✓ / ✓ / ✓).
  4. **AI:** AI insights & business assistant (— / — / ✓ / ✓), Revenue forecasting (— / — / ✓ / ✓), Churn prediction (— / — / ✓ / ✓).
  5. **SUPPORT:** Dedicated success manager (— / — / — / ✓).

---

### 5. Frequently Asked Questions (`PricingFAQ.tsx`)
- **Theme:** Clean 2-column layout (`max-w-[1240px] mx-auto pb-24 px-6 flex flex-col lg:flex-row gap-12`).
- **Left:** *"Questions, answered."* + *"Can’t find what you need? [Email our team](mailto:info@dentalpulseai.com)."*
- **Right:** 5 Interactive Accordion FAQ items:
  1. **What counts as a user?** — Anyone on your team who logs in to Dental Pulse — owners, managers, reps or marketers. Each plan includes a set number of users; add more at $25 per user per month.
  2. **Is there a discount for paying yearly?** — Yes. Yearly billing gives you two months free on any plan.
  3. **How long does setup take?** — Most labs are fully connected within 48 to 72 hours. Our onboarding team handles the data import and historical sync so your team can hit the ground running without IT headaches.
  4. **Can I change plans later?** — Yes — upgrade or adjust your plan anytime as your lab grows. Upgrades take effect immediately with prorated billing, and you can switch between monthly and annual plans at renewal.
  5. **Do you integrate with my lab management software?** — Most likely. We integrate with Magic Touch, Labstar, Evident, 3Shape, and offer an Open API. See [Integrations](/integrations) or ask us during your demo.

---

### 6. Conversion CTA Banner (`PricingCTA.tsx`)
- **Theme:** Dark `#0A0A0A` banner with rounded corners (`rounded-[32px]`) and neon green pulse watermark.
- **Headline:** *"Not sure which plan fits?"*
- **Subtext:** *"We’ll recommend one based on your team size and goals."*
- **Dual Action CTAs:**
  - *"Book a demo"* (`bg-[#12F095] text-[#0A0A0A] font-extrabold`)
  - *"Calculate ROI"* (`border border-[#3A3A3A] text-white font-bold` -> `/#results` or `/platform`)

---

## 3. Implementation Verification Checklist
- [ ] Create route `/pricing` (`src/app/pricing/page.tsx`) with SEO metadata.
- [ ] Update `Header.tsx` and `Footer.tsx` so all `Pricing` navigation links point to `/pricing`.
- [ ] Implement Hero section with interactive Monthly / Yearly toggle (supporting "2 months free" discount calculations).
- [ ] Implement 4 plan cards with responsive styling, Growth "Most popular" dark card, and plan selection triggers.
- [ ] Connect "Choose Plan" buttons to the existing interactive `CheckoutModal` component.
- [ ] Implement comprehensive side-by-side feature comparison table across all 5 functional categories.
- [ ] Implement interactive FAQ accordion component with verified answers.
- [ ] Implement dark conversion CTA banner with SVG pulse watermark.
- [ ] Validate production build via `npm run build` (16/16 routes compiled with 0 errors) and verify HTTP 200 on `http://localhost:3000/pricing`.
