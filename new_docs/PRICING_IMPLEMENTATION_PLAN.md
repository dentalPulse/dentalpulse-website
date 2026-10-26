# Pricing Page Implementation Plan

**Reference Design:** `Pricing.dc.html`  
**Target Route:** `/pricing` (`src/app/pricing/page.tsx`)  
**Related Audit:** [`new_docs/PRICING_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/PRICING_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── pricing/
│       └── page.tsx                               # Main Pricing Route (/pricing)
└── components/
    └── pricing/
        ├── PricingHero.tsx                        # Centered header + Monthly/Yearly toggle
        ├── PricingCardsGrid.tsx                   # 4 Tiered Plan Cards (Starter, Growth, Growth AI, Enterprise)
        ├── PricingCompareTable.tsx                # Comprehensive 5-category Feature Comparison Matrix
        ├── PricingFAQ.tsx                         # 5-item Accordion FAQ component
        └── PricingCTA.tsx                         # Dark #0A0A0A "Not sure which plan fits?" conversion banner
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking
1. Create `src/app/pricing/page.tsx` with SEO metadata:
   - Title: `Pricing | DentalPulse`
   - Description: `Pricing that grows with your lab. Transparent plans for dental laboratory customer intelligence, marketing automation, and AI predictive insights.`
2. Update [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx):
   - Update `Pricing` nav link from `/#book-demo` to `/pricing`.
3. Update [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Update `Pricing` link in Platform column to use Next.js `<Link href="/pricing">`.

---

### Phase 2: Pricing Hero & Interactive Billing Toggle (`PricingHero.tsx`)
1. Create `src/components/pricing/PricingHero.tsx`:
   - Kicker: `PRICING` (JetBrains Mono, `#067A47`).
   - Headline: *"Pricing that grows with your lab."*
   - Subtext: *"Four plans, one platform. Start with the visibility your team needs today, then add depth as you grow to more locations, more reps and more dentists to keep close."*
   - Interactive Billing Period Switcher:
     * `Monthly` button.
     * `Yearly` button with green `2 months free` badge (`#BDF5DA` / `#06663C`).
     * State passed down to plan cards for dynamic pricing updates.

---

### Phase 3: Subscription Plan Cards Grid & CheckoutModal Integration (`PricingCardsGrid.tsx`)
1. Create `src/components/pricing/PricingCardsGrid.tsx`:
   - 4 Tiered plan cards with responsive styling:
     * **Starter:** $499/mo ($416/mo yearly), 3 users included, essential CRM & tracking.
     * **Growth (Most Popular):** $799/mo ($666/mo yearly), 5 users included, dark `#0A0A0A` card with `#12F095` neon green badge and checkmarks.
     * **Growth AI:** $999/mo ($833/mo yearly), 10 users included, AI predictive suite.
     * **Enterprise:** Custom group pricing, unlimited users, dedicated success manager.
   - Wire plan buttons to launch the interactive [`CheckoutModal.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/CheckoutModal.tsx) with the selected plan and billing period.

---

### Phase 4: Feature Comparison Table & FAQ Accordion (`PricingCompareTable.tsx` & `PricingFAQ.tsx`)
1. Create `src/components/pricing/PricingCompareTable.tsx`:
   - 5-Column feature comparison matrix (`Features`, `Starter`, `Growth`, `Growth AI`, `Enterprise`).
   - 5 Grouped categories: `USERS & ACCESS`, `CUSTOMER INTELLIGENCE`, `MARKETING`, `AI`, and `SUPPORT`.
   - Distinct green checkmarks (`#067A47`), dashes, and specific metrics (user counts, API access levels).
2. Create `src/components/pricing/PricingFAQ.tsx`:
   - 2-Column layout: headline on left, 5 accordion items on right.
   - Verified answers covering user definitions, annual savings, setup timelines, plan switches, and lab management integrations.

---

### Phase 5: Conversion CTA Banner, Page Assembly & Polish (`PricingCTA.tsx`)
1. Create `src/components/pricing/PricingCTA.tsx`:
   - Dark `#0A0A0A` banner: *"Not sure which plan fits?"* with SVG neon pulse watermark.
   - Dual action buttons: *"Book a demo"* (`bg-[#12F095]`) and *"Calculate ROI"* (`border border-[#3A3A3A]`).
2. Assemble all sections in `src/app/pricing/page.tsx` with `<Header />` and `<Footer />`.
3. Validate production build via `npm run build` (16/16 routes compiled with 0 errors) and verify HTTP 200 on `http://localhost:3000/pricing`.
