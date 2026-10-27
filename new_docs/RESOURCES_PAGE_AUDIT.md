# Resources (Blog & Guides) Page Audit

**Reference Source:** `Resources.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Resources (Blog)-html\Resources.dc.html`  
**Target Route:** `/resources` (`src/app/resources/page.tsx`)  
**Audit Date:** October 27, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Resources** page is DentalPulse's educational, content-marketing, and inbound lead-generation hub. It addresses dental laboratory owners, general managers, production heads, and territory sales reps seeking practical tactics on dentist account retention, wallet-share expansion, multi-channel marketing, and lab business KPIs.

The page features:
1. **Asymmetric Hero Header:**
   - Kicker: `RESOURCES` in JetBrains Mono (`#067A47`).
   - Headline: *"Ideas for growing a modern dental lab."* (`clamp(40px, 5vw, 66px)`, tracking `-0.035em`, font-extrabold).
   - Side value-prop column: *"Practical guides on retention, account growth, sales and marketing for lab teams."*
2. **Hero Featured Guide (High-Impact Card):**
   - Responsive horizontal split card (`bg-white`, `border border-[#E6E6E6]`, `rounded-[28px]`, `overflow-hidden`).
   - Left visual panel (`#0A0A0A` dark surface, dynamic DentalPulse heartbeat/pulse SVG line in `#12F095` neon green, and `FEATURED GUIDE` neon badge).
   - Right content panel:
     - Tag: `RETENTION • 9 MIN READ` (`font-mono text-[12px] font-semibold text-[#067A47]`).
     - Headline: *"The early-warning playbook: 7 signals a dentist is about to leave your lab"*.
     - Excerpt: *"From longer gaps between cases to quiet shifts in product mix — what to watch, and what to do about each one."*
     - Action link: *"Read the guide →"*.
3. **Interactive Topic Filter Switcher:**
   - Pill button bar: `All`, `Retention`, `Growth`, `Sales`, `Marketing`, `Guides`.
   - Active pill: `bg-[#0A0A0A] text-white border border-[#0A0A0A] rounded-full font-bold px-[18px] py-[12px]`.
   - Inactive pill: `bg-white text-[#0A0A0A] border border-[#D6D6D6] hover:border-[#0A0A0A] rounded-full font-bold px-[18px] py-[12px]`.
   - Instant client-side filtering of the article grid based on category.
4. **Responsive Resources & Articles Grid:**
   - 3-column auto-fit grid (`minmax(300px, 1fr)`, gap `20px`).
   - 9 initial guides & articles with category-specific vector header graphics, reading times, titles, and *"Read →"* links.
5. **The Lab Growth Brief Newsletter Subscription Banner:**
   - Mint container (`bg-[#EEFDF5]`, `border border-[#BDF5DA]`, `rounded-[28px]`, `padding: clamp(32px, 5vw, 64px)`).
   - Headline: *"The Lab Growth Brief"* + *"One practical idea for retaining and growing dental accounts, delivered monthly."*
   - Interactive work email form with validation and subscription success state.
6. **Global Navigation & Footer Integration:**
   - Connect header navigation item `Resources` to `/resources`.
   - Add active-state highlighting on `/resources`.
   - Update footer Company column `Resources` link to Next.js `<Link href="/resources">`.

---

## 2. Design System Tokens & Specifications

| Token | Reference Value | Implementation in Next.js / Tailwind |
| :--- | :--- | :--- |
| **Primary Typography** | `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800 | Font variable `font-sans` (`Plus_Jakarta_Sans`) |
| **Monospace / Tags** | `JetBrains Mono`, 12px–13px, weight 600, tracking `0.06em` | Font variable `font-mono` (`JetBrains_Mono`) |
| **Background Color** | `#FFFFFF` | `bg-white` |
| **Dark Visual Surface** | `#0A0A0A` | `bg-[#0A0A0A]` |
| **Neon Green Accent** | `#12F095` | `text-[#12F095]`, `bg-[#12F095]`, `stroke-[#12F095]` |
| **Forest Green (Links & Monospace)** | `#067A47` / `#06663C` | `text-[#067A47]`, hover `text-[#06663C]` |
| **Mint Newsletter Surface** | `#EEFDF5` | `bg-[#EEFDF5]` |
| **Mint Newsletter Border** | `#BDF5DA` | `border-[#BDF5DA]` |
| **Mint Input Border** | `#A6EFCB` | `border-[#A6EFCB]` |
| **Light Card Border** | `#E6E6E6` | `border-[#E6E6E6]` |
| **Filter Button Inactive Border** | `#D6D6D6` | `border-[#D6D6D6]` |
| **Muted Body Text** | `#5C5C5C` / `#333333` | `text-[#5C5C5C]` / `text-[#333333]` |
| **Card Radii** | `28px` on featured/newsletter cards; `22px` on post cards; `999px` on pills | `rounded-[28px]`, `rounded-[22px]`, `rounded-full` |
| **Container Width** | `max-width: 1240px` with `padding: 0 24px` | `max-w-[1240px] mx-auto px-6` |

---

## 3. Section-by-Section Architectural Inventory

### 1. Navigation & Route Architecture
- **Route:** `/resources` (`src/app/resources/page.tsx`).
- **Header:** Update `navLinks` in [`Header.tsx`](../src/components/layout/Header.tsx) to map `Resources` from `/#resources` to `/resources`.
- **Active Detection:** `isLinkActive('/resources')` will highlight `Resources` in neon green `#12F095`.
- **Footer:** Update `Resources` in Company column of [`Footer.tsx`](../src/components/layout/Footer.tsx) to `<Link href="/resources">`.

---

### 2. Resources Hero Section (`ResourcesHero.tsx`)
- **Theme:** Clean white surface (`bg-white pt-20 sm:pt-24 pb-12 px-6`).
- **Layout:** Asymmetric 2-column flex row (`max-w-[1240px] mx-auto flex flex-wrap justify-between items-end gap-8`).
- **Left Column:**
  - Kicker: `RESOURCES` (`font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-4`).
  - Heading `h1`: *"Ideas for growing a modern dental lab."* (`text-[40px] sm:text-[54px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A] max-w-[720px]`).
- **Right Column:**
  - Description: *"Practical guides on retention, account growth, sales and marketing for lab teams."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] max-w-[400px] leading-[1.6]`).

---

### 3. Hero Featured Guide Card (`FeaturedGuideCard.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-16 px-6`.
- **Card Shell:** `bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[28px] overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:shadow-xl group cursor-pointer`.
- **Left Visual Graphic Panel (`flex: 1.1`):**
  - Minimum height: `340px`.
  - Surface: `bg-[#0A0A0A] relative overflow-hidden flex items-end p-8`.
  - Graphic: DentalPulse heartbeat pulse SVG path in `#12F095` neon green (`stroke-width: 4`) with baseline `#2A2A2A`.
  - Badge: `FEATURED GUIDE` (`font-mono text-[12px] font-bold text-[#0A0A0A] bg-[#12F095] px-3.5 py-1.5 rounded-full uppercase tracking-wider relative z-10`).
- **Right Content Panel (`flex: 1`):**
  - Padding: `p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-4`.
  - Category & Meta: `RETENTION • 9 MIN READ` (`font-mono text-[12px] font-bold text-[#067A47] tracking-wider uppercase`).
  - Headline `h2`: *"The early-warning playbook: 7 signals a dentist is about to leave your lab"* (`text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors`).
  - Excerpt: *"From longer gaps between cases to quiet shifts in product mix — what to watch, and what to do about each one."* (`text-[16px] sm:text-[17px] text-[#5C5C5C] leading-[1.6]`).
  - Link: *"Read the guide →"* (`font-bold text-[16px] text-[#067A47] group-hover:text-[#06663C] inline-flex items-center gap-1.5 pt-2`).

---

### 4. Interactive Topic Filter & Resources Grid (`ResourcesGrid.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-20 px-6`.
- **Filter Switcher Bar:**
  - Role: `group`, `aria-label="Filter by topic"`.
  - Categories: `All`, `Retention`, `Growth`, `Sales`, `Marketing`, `Guides`.
  - Pill Styles:
    - Active: `bg-[#0A0A0A] text-white border border-[#0A0A0A] rounded-full font-bold text-[14px] px-5 py-3 min-h-[44px] transition-colors shadow-sm`.
    - Inactive: `bg-white text-[#0A0A0A] border border-[#D6D6D6] hover:border-[#0A0A0A] rounded-full font-bold text-[14px] px-5 py-3 min-h-[44px] transition-colors`.
- **3-Column Resources Grid (`minmax(300px, 1fr)`, gap `20px`, `mt-8`):**
  - **9 Articles from reference DCLogic:**
    1. **Retention (6 min):** *"How to spot an at-risk dental account before it churns"*
    2. **Growth (8 min):** *"Share of wallet: finding the categories your dentists send elsewhere"*
    3. **Sales (5 min):** *"A weekly routine for lab sales reps that actually sticks"*
    4. **Marketing (7 min):** *"WhatsApp, SMS or email? Reaching dentists where they read"*
    5. **Retention (6 min):** *"The real cost of losing a dentist — and how to calculate it"*
    6. **Guides (Guide):** *"The dental lab KPI cheat sheet: numbers every owner should track"*
    7. **Growth (5 min):** *"Turning remake data into a retention signal"*
    8. **Sales (6 min):** *"Onboarding new dentists: the first 90 days"*
    9. **Marketing (7 min):** *"Building segments from real buying behaviour"*
  - **Card Anatomy:**
    - Card Shell: `bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group`.
    - Header Graphic: `h-[150px] bg-[#F7F7F7] flex items-center justify-center border-b border-[#EBEBEB] relative overflow-hidden`.
    - Body: `p-6 flex flex-col flex-1 gap-2.5`.
    - Category & Read Time: `font-mono text-[12px] font-bold text-[#067A47] tracking-wider uppercase`.
    - Title: `text-[18px] sm:text-[19px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0A0A0A] group-hover:text-[#067A47] transition-colors`.
    - Footer: *"Read →"* (`mt-auto pt-3 font-bold text-[15px] text-[#067A47] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform`).

---

### 5. Newsletter Banner (`LabGrowthBrief.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-24 px-6`.
- **Banner Shell:** `bg-[#EEFDF5] border border-[#BDF5DA] rounded-[28px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-sm`.
- **Left Narrative:**
  - Headline: *"The Lab Growth Brief"* (`text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-[1.1]`).
  - Subtext: *"One practical idea for retaining and growing dental accounts, delivered monthly."* (`text-[16px] sm:text-[17px] text-[#333333] leading-[1.6] mt-3`).
- **Right Form:**
  - Email input: `placeholder="you@yourlab.com"`, rounded-full, border `#A6EFCB`, background white, text 16px, min-height 52px.
  - Subscribe button: `bg-[#0A0A0A] text-white font-bold rounded-full px-7 min-h-[52px] hover:bg-[#222222] transition-colors`.
  - Interactive state: Submitting validates email format and displays a celebratory confirmation notice (*"You’re subscribed to The Lab Growth Brief!"*).

---

### 6. Interactive Article Reader Modal (`ArticleReaderModal.tsx`)
- Clicking the Featured Guide or any of the 9 article cards opens an interactive reader drawer:
  - Article category badge and reading time.
  - Full title and clinical/operational overview.
  - 3 Core Actionable Takeaways for dental laboratories.
  - Recommended Next Step: *"Book a demo to see this playbook in DentalPulse"*.

---

## 4. Verification & QA Checklist

- [ ] `/resources` route loads with HTTP 200 and zero hydration errors.
- [ ] Header navigation highlights `Resources` when on the `/resources` route.
- [ ] Topic filter toggles dynamically between `All`, `Retention`, `Growth`, `Sales`, `Marketing`, and `Guides`.
- [ ] Responsive behavior tested across mobile (375px), tablet (768px), and desktop (1240px+).
- [ ] Newsletter email form validates work email and provides clear user feedback.
- [ ] Article reader modal opens smoothly with Escape key and outside-click dismissal.
- [ ] Next.js metadata and canonical tags configured for SEO.
