# Solutions (Marketing) Page Audit

**Reference Source:** `Marketing.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Solutions — Marketing-html\Marketing.dc.html`  
**Target Route:** `/solutions/marketing` (`src/app/solutions/marketing/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Solutions — For Marketing Teams** page is crafted specifically for dental laboratory marketing managers, growth leads, and commercial directors who need data-driven customer segmentation, multi-channel campaign automation (Email, SMS, WhatsApp), and real case-level revenue attribution.

The page strictly maintains DentalPulse brand and design system consistency:
- **Typography:** `Plus Jakarta Sans` for headings and narrative body copy, `JetBrains Mono` for technical kickers (`FOR MARKETING TEAMS`, SQL-style rule operators `WHERE`, `AND`).
- **Color Palette:** Clean light `#FFFFFF` background, dark `#0A0A0A` capabilities and CTA banners, `#12F095` neon green accents, and `#067A47` / `#06663C` semantic forest greens.
- **High-Impact Code Mockup:** Interactive **Segment Builder & Multi-Channel Campaign Performance Card** (`Segment — Implant-ready practices` with 42 dentists, dynamic query rules `WHERE Crown & bridge cases > 20 / month`, `AND Implant cases = 0 in last 6 months`, `AND Health score ≥ 70`, plus a 3-column campaign performance breakdown for Day 0 Email, Day 3 WhatsApp, and 30-day conversion of 9 first implant cases).

---

## 2. Section-by-Section Architectural Inventory

### 1. Role Switcher Navigation Bar
- **Positioning:** Directly below sticky Header with `pt-7 px-6`.
- **Active Tab:** `Marketing` (`bg-[#0A0A0A] text-white px-4.5 py-3 rounded-full font-bold shadow-xs`).
- **Sibling Tabs:**
  - `Owners & C-suite` -> `/solutions`
  - `Managers` -> `/solutions/managers`
  - `Sales reps` -> `/solutions/sales-reps`

---

### 2. Marketing Hero Section (`MarketingHero.tsx`)
- **Theme:** Light surface (`#FFFFFF`) with generous padding (`pt-10 sm:pt-14 pb-18 sm:pb-24 px-6`).
- **Layout:** 2 Columns (Narrative on left, Segment Builder & Campaign Mockup on right).
- **Left Column: Narrative:**
  - Kicker: `FOR MARKETING TEAMS` (JetBrains Mono, `#067A47`, tracking `0.06em`).
  - Headline: *"Campaigns that reach the right dentist at the right time."* (`text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtext: *"Build segments from real buying behaviour, launch email, SMS and WhatsApp campaigns, and see which ones actually brought in cases."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] leading-[1.6] max-w-[540px] mt-5`).
  - Action Buttons:
    - `Book a demo` (`bg-[#0A0A0A] text-white font-bold px-7 py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm` -> `https://app.dentalpulseai.com`)
    - `See Growth plan` (`border border-[#D6D6D6] bg-white text-[#0A0A0A] font-bold px-7 py-4 rounded-full hover:bg-[#F5F5F5] transition-colors` -> `/pricing`)
- **Right Column: Code-Rendered Segment Builder & Campaign Mockup:**
  - Container: `bg-white border border-[#E6E6E6] rounded-[24px] p-6 sm:p-7 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] flex flex-col gap-4.5`.
  - Header:
    - Title: `Segment — Implant-ready practices` (`text-[17px] sm:text-[18px] font-extrabold text-[#0A0A0A]`)
    - Badge: `42 dentists` (`text-[13px] font-bold text-[#06663C] bg-[#E3FCEF] px-3 py-1 rounded-full`)
  - Filter Rules (Query Predicates):
    1. `WHERE` (JetBrains Mono `#5C5C5C`) `[Crown & bridge cases]` `> 20 / month`
    2. `AND` (JetBrains Mono `#5C5C5C`) `[Implant cases]` `= 0 in last 6 months`
    3. `AND` (JetBrains Mono `#5C5C5C`) `[Health score]` `≥ 70`
  - Campaign Performance Box:
    - Title: `Campaign — Implant launch` (`text-[14px] font-bold text-[#0A0A0A]`)
    - 3 Columns:
      - **Email** (Day 0): `48%` opened
      - **WhatsApp** (Day 3): `71%` read
      - **Result** (30 days): `9` first implant cases (`border-[#BDF5DA] bg-[#EEFDF5] text-[#06663C] font-extrabold`)

---

### 3. Marketing Questions Grid (`MarketingQuestionsSection.tsx`)
- **Theme:** Light surface (`pb-20 sm:pb-28 px-6 bg-white`).
- **Headline:** *"Marketing that shows up in case volume."* (`text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] max-w-[720px]`).
- **4 Question Cards (featuring `#067A47` quote marks `“`):**
  1. **Who is ready for our new product line?** — *Segments built from what dentists actually buy — and don't.*
  2. **Did that campaign bring in cases?** — *Tie opens and clicks to real orders and revenue.*
  3. **Which practices are visiting our website?** — *Website tracking turns anonymous visits into warm leads.*
  4. **Who should we prospect next?** — *Profile your best accounts and find practices that look like them.*

---

### 4. Capabilities Section (`MarketingCapabilitiesSection.tsx`)
- **Theme:** Dark `#0A0A0A` container with white text (`py-24 md:py-28 px-6`).
- **3 Capabilities Grid with `#12F095` neon green icons in `#161616` badges:**
  1. **Customer segments** (Team / users icon): *Slice by case mix, volume trend, health score, territory and more — segments update themselves.*
  2. **Campaign builder** (Mail / envelope icon): *Multi-step campaigns across email, SMS and WhatsApp from one builder.*
  3. **Revenue attribution** (Trending chart / analytics arrow icon): *See which campaigns drove new cases, reactivations and cross-sells.*

---

### 5. Marketer Social Proof (`MarketingQuoteSection.tsx`)
- **Theme:** Light spacious testimonial section (`py-24 sm:py-28 px-6 border-t border-[#F0F0F0] text-center`).
- **Authentic Quote:** *“Before Dental Pulse, our email campaigns were generic blasts to everyone on our list. Now we segment dentists by their actual case mix and order gaps. Our last implant intro campaign had a 48% open rate and brought in 9 new accounts.”*
- **Attribution:** **Sarah Jenkins** • Head of Marketing, Lumina Dental Craft

---

### 6. Role Cross-Links & Bottom Conversion Card (`MarketingRolesCrosslink.tsx` & `MarketingCTA.tsx`)
- **3 Role Quick Navigation Cards:**
  1. `For owners & C-suite →` -> `/solutions`
  2. `For managers →` -> `/solutions/managers`
  3. `For sales reps →` -> `/solutions/sales-reps`
- **Bottom CTA Banner (`#0A0A0A` with neon green pulse watermark):**
  - Headline: *"Turn customer data into campaigns that convert."*
  - CTA Button: `"Book a demo"` (`bg-[#12F095] text-[#0A0A0A] font-extrabold hover:bg-[#00df83] rounded-full`).

---

## 3. Implementation Verification Checklist
- [ ] Create route `/solutions/marketing` (`src/app/solutions/marketing/page.tsx`) with metadata.
- [ ] Update navigation across the site so `Marketing` points to `/solutions/marketing` instead of `/solutions#marketing`.
- [ ] Code-render the Segment Builder & Campaign Mockup card (no external raster image dependencies).
- [ ] Implement responsive 4-card questions grid with `#067A47` quote marks.
- [ ] Implement dark `#0A0A0A` 3-column capabilities grid with `#12F095` neon green icons.
- [ ] Implement marketer quote section and role cross-links.
- [ ] Implement dark conversion CTA banner with SVG pulse watermark.
- [ ] Validate with `npm run build` (0 TypeScript / linting errors) and verify HTTP 200 on `http://localhost:3000/solutions/marketing`.
