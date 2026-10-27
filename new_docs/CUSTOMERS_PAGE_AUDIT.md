# Customers Page Audit

**Reference Source:** `Customers.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Customers-html\Customers.dc.html`  
**Target Route:** `/customers` (`src/app/customers/page.tsx`)  
**Audit Date:** October 27, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Customers** page is the primary social proof and case study hub for DentalPulse. It serves dental laboratory owners, production executives, customer service leaders, and field sales teams who want proof that DentalPulse successfully prevents account churn, increases case volume, and automates lab reporting.

The page features:
1. **Targeted Social Proof Hero:** Clear kicker (`CUSTOMER STORIES`), authoritative headline (*"Labs that stopped flying blind."*), and concise value proposition.
2. **Featured Case Study (2-Column Bento Card):**
   - High-contrast signature dark card (`#0A0A0A`, `rounded-[32px]`) with a `FEATURED STORY` badge.
   - Narrative story covering challenge, tactical intervention, and business outcome.
   - Split metric panel (`#161616`) showcasing 3 key proof points in 52px `#12F095` neon green:
     - **`94%`** customer retention increase.
     - **`$180K`** revenue recovered from at-risk accounts.
     - **`12 hrs`** saved on weekly reporting.
3. **Wall of Love Testimonials Grid:**
   - 6-card multi-column responsive layout with tailored visual hierarchy:
     - 4 clean white cards (`#FFFFFF`, border `#E6E6E6`, mint avatar badge `#E3FCEF`).
     - 1 highlighted mint tint card (`#EEFDF5`, border `#BDF5DA`, white avatar badge).
     - 1 signature dark card (`#0A0A0A`, dark avatar `#2A2A2A` with `#12F095` neon text).
   - Real testimonials addressing the core pain points: churn prevention, fast data retrieval, automated rep workflows, cross-selling high-margin restorations, and measurable ROI.
4. **More Stories Grid:**
   - 3 deep-dive case study cards with category taxonomy badges (`RETENTION`, `CROSS-SELL`, `SALES TEAM`), rich lab photo visual cards, headlines, and read links.
5. **Bottom Conversion CTA Banner:**
   - Dark pill banner (`#0A0A0A`, `rounded-[32px]`) with *"Write your lab’s growth story next."* and a prominent `#12F095` neon green *"Book a demo"* action.
6. **Navigation Integration:**
   - Active state highlight on top header navigation (`Customers` route).
   - Global footer linking update from anchor link `/#testimonials` to dedicated route `/customers`.

---

## 2. Design System Tokens & Specifications

| Token | Reference Value | Implementation in Next.js / Tailwind |
| :--- | :--- | :--- |
| **Typography (Body & Headings)** | `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800 | Font variable `font-sans` (`Plus_Jakarta_Sans`) |
| **Typography (Eyebrow & Monospace)** | `JetBrains Mono`, 12px–13px, weight 600, letter-spacing `0.06em` | Font variable `font-mono` (`JetBrains_Mono`) |
| **Canvas Background** | `#FFFFFF` | `bg-white` |
| **Dark Container Background** | `#0A0A0A` | `bg-[#0A0A0A]` |
| **Dark Sub-Panel Background** | `#161616` | `bg-[#161616]` |
| **Mint Tint Highlight** | `#EEFDF5` | `bg-[#EEFDF5]` |
| **Mint Tint Border** | `#BDF5DA` | `border-[#BDF5DA]` |
| **Neon Green Accent** | `#12F095` | `text-[#12F095]`, `bg-[#12F095]` |
| **Deep Forest Green** | `#067A47` / `#06663C` | `text-[#067A47]`, hover `text-[#06663C]` |
| **Light Card Border** | `#E6E6E6` | `border-[#E6E6E6]` |
| **Dark Card Border / Dividers** | `#2A2A2A` | `border-[#2A2A2A]` / `divide-[#2A2A2A]` |
| **Muted Text (Light surfaces)** | `#5C5C5C` / `#6E6E6E` | `text-[#5C5C5C]` |
| **Muted Text (Dark surfaces)** | `#BDBDBD` / `#9A9A9A` | `text-[#BDBDBD]` |
| **Container Width** | `max-width: 1240px` with `padding: 0 24px` | `max-w-[1240px] mx-auto px-6` |
| **Card Radii** | `32px` on large containers; `22px` on cards; `999px` on pills | `rounded-[32px]`, `rounded-[22px]`, `rounded-full` |

---

## 3. Section-by-Section Architectural Inventory

### 1. Navigation & Route Architecture
- **Route:** `/customers` (`src/app/customers/page.tsx`).
- **Header:** Update `navLinks` in [`Header.tsx`](../src/components/layout/Header.tsx) to map `Customers` to `/customers` (instead of `/#testimonials`) and apply active styling (`text-[#12F095]` or `#067A47` bold).
- **Footer:** Update `Customers` in Company column of [`Footer.tsx`](../src/components/layout/Footer.tsx) to link to `/customers`.

---

### 2. Customers Hero Section (`CustomersHero.tsx`)
- **Theme:** Clean white background (`bg-white pt-20 pb-14 px-6 text-center`).
- **Structure:**
  - **Kicker:** `CUSTOMER STORIES` (`font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase`).
  - **Main Heading `h1`:** *"Labs that stopped flying blind."* (`text-[40px] sm:text-[54px] lg:text-[66px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - **Subtext:** *"Hear from owners, managers and reps who use Dental Pulse to keep more dentists and grow every account."* (`text-[18px] text-[#5C5C5C] max-w-[600px] mx-auto leading-[1.6] mt-4`).

---

### 3. Featured Case Study Bento Card (`FeaturedCaseStudy.tsx`)
- **Container:** `max-w-[1240px] mx-auto mb-20 px-6`.
- **Card Shell:** `bg-[#0A0A0A] text-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl`.
- **Left Column (Narrative & Overview):**
  - Padding: `p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-between gap-6`.
  - Tag: `FEATURED STORY` (`font-mono text-[12px] font-bold text-[#0A0A0A] bg-[#12F095] px-3 py-1 rounded-full w-fit`).
  - Lab Identity: Lab Logo / Badge for *Apex Dental Ceramics* (`border border-white/10 rounded-xl px-4 py-2 bg-white/5 inline-flex items-center gap-2`).
  - Headline `h2`: *"How Apex Dental Ceramics recovered 14 at-risk accounts in their first 90 days."* (`text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.12] tracking-[-0.03em]`).
  - Story Summary: *"Before Dental Pulse, accounts quietly slipped away before reps noticed. With automated volume-dip alerts and weekly retention playbooks, Apex preserved over $180,000 in recurring lab revenue without adding staff."*
  - CTA Link: *"Read the full story →"* (`text-[#12F095] font-bold text-[16px] hover:text-[#00df83] transition-colors inline-flex items-center gap-1.5`).
- **Right Column (Metrics Panel):**
  - Background: `bg-[#161616] p-8 sm:p-12 lg:p-16 lg:w-[420px] shrink-0 flex flex-col justify-center gap-7 border-t lg:border-t-0 lg:border-l border-[#2A2A2A]`.
  - Metric 1:
    - Number: `94%` (`text-[52px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none`).
    - Label: `increase in customer retention` (`text-[#BDBDBD] text-[16px] mt-2`).
  - Divider: `h-[1px] bg-[#2A2A2A] w-full`.
  - Metric 2:
    - Number: `$180K` (`text-[52px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none`).
    - Label: `revenue recovered from at-risk accounts` (`text-[#BDBDBD] text-[16px] mt-2`).
  - Divider: `h-[1px] bg-[#2A2A2A] w-full`.
  - Metric 3:
    - Number: `12 hrs` (`text-[52px] font-extrabold tracking-[-0.04em] text-[#12F095] leading-none`).
    - Label: `saved on reporting every week` (`text-[#BDBDBD] text-[16px] mt-2`).

---

### 4. Wall of Love Testimonial Grid (`WallOfLove.tsx`)
- **Container:** `max-w-[1240px] mx-auto mb-24 px-6`.
- **Headline:** *"What our customers say"* (`text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] mb-10`).
- **Grid Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`.
- **Card Breakdown:**
  1. **Card 1 (White Card — Churn Alert):**
     - Style: `bg-white border border-[#E6E6E6] rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“Early risk alerts saved our largest implant account. We had two weeks to step in before the dentist moved their volume elsewhere.”*
     - Author: Michael S. • Managing Director, Apex Dental Ceramics (`AB` / `MS` avatar `#E3FCEF` with `#06663C` text).
  2. **Card 2 (Mint Tint Highlight Card — Time Savings):**
     - Style: `bg-[#EEFDF5] border border-[#BDF5DA] rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“We cut time spent tracking weekly sales numbers by 80%. No more exports or copy-pasting numbers out of our lab management software.”*
     - Author: David R. • VP Operations, Summit Milling Center (`CD` / `DR` avatar `#FFFFFF` with `#06663C` text).
  3. **Card 3 (White Card — Automated Workflows):**
     - Style: `bg-white border border-[#E6E6E6] rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“DentalPulse automated our field follow-ups and weekly sales objectives. Our reps walk in knowing exactly which practice needs attention.”*
     - Author: Elena F. • General Manager, Vanguard Dental Studio (`EF` avatar `#E3FCEF` with `#06663C` text).
  4. **Card 4 (White Card — Cross-Sell Expansion):**
     - Style: `bg-white border border-[#E6E6E6] rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“DentalPulse uncovered $48K in cross-sell opportunities with our existing dentists in the first month alone by tracking product gaps.”*
     - Author: Kelly L. • Sales & CS Manager, Precision Dental Arts (`GH` / `KL` avatar `#E3FCEF` with `#06663C` text).
  5. **Card 5 (White Card — Fast Payback & ROI):**
     - Style: `bg-white border border-[#E6E6E6] rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“The platform paid for itself in 18 days when it flagged a 30% drop in crown & bridge orders from an anchor clinic that was switching systems.”*
     - Author: Isaac J. • Owner, Beacon Prosthetics Studio (`IJ` avatar `#E3FCEF` with `#06663C` text).
  6. **Card 6 (Dark Card Highlight — AI Assistant & Daily Game Plans):**
     - Style: `bg-[#0A0A0A] text-white rounded-[22px] p-7 flex flex-col justify-between gap-5`.
     - Quote: *“The AI assistant generates ready-to-use call briefs for every doctor. Our reps have real leverage and specific talking points every morning.”*
     - Author: Marcus R. • Chief Commercial Officer, Elite Dental Craft (`KL` / `MR` dark avatar `#2A2A2A` with `#12F095` text).

---

### 5. More Stories Grid (`MoreStoriesGrid.tsx`)
- **Container:** `max-w-[1240px] mx-auto mb-24 px-6`.
- **Headline:** *"More stories"* (`text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-[-0.03em] text-[#0A0A0A] mb-8`).
- **Grid Layout:** `grid grid-cols-1 md:grid-cols-3 gap-5`.
- **Card Anatomy:**
  - Card Shell: `bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[22px] overflow-hidden flex flex-col transition-all hover:shadow-lg group`.
  - Visual Header: `h-[180px] bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] relative overflow-hidden flex items-center justify-center p-6`.
  - Body: `p-6 flex flex-col flex-1 justify-between gap-4`.
  - Tag: `font-mono text-[12px] font-bold text-[#067A47] tracking-wider uppercase`.
  - Headline: `text-[19px] font-bold text-[#0A0A0A] leading-[1.35] group-hover:text-[#067A47] transition-colors`.
  - CTA Link: `text-[15px] font-bold text-[#067A47] inline-flex items-center gap-1.5 mt-2`.
- **Stories Data:**
  1. **Tag: RETENTION**
     - Graphic: Dedicated laboratory CAD/CAM retention analytics visual.
     - Headline: *"How Midwest Dental Studio caught silent attrition 45 days before dentists stopped sending cases."*
  2. **Tag: CROSS-SELL**
     - Graphic: Zirconia & custom abutment cross-sell opportunity visualization.
     - Headline: *"Scaling high-margin premium restorations across 60 existing general dentist accounts."*
  3. **Tag: SALES TEAM**
     - Graphic: Automated daily field call list and route optimization visual.
     - Headline: *"How a 4-person sales team eliminated manual spreadsheets and closed 28 new accounts in 6 months."*

---

### 6. Bottom Conversion CTA Banner (`CustomersCTA.tsx`)
- **Container:** `max-w-[1240px] mx-auto mb-24 px-6`.
- **Banner Shell:** `bg-[#0A0A0A] text-white rounded-[32px] p-10 sm:p-14 lg:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden`.
- **Headline `h2`:** *"Write your lab’s growth story next."* (`text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] max-w-[620px]`).
- **CTA Button:** *"Book a demo"* (`bg-[#12F095] text-[#0A0A0A] font-extrabold text-[16px] px-7 py-4 rounded-full hover:bg-[#00df83] transition-all hover:scale-105 shadow-md`).

---

### 7. Interactive Case Study Drawer / Modal (`CaseStudyModal.tsx`)
- For rich user engagement, clicking any case study link (`Read the full story →` or `Read story →`) opens an interactive modal drawer containing:
  - Full lab profile (lab size, locations, CAD/CAM equipment, software integrations).
  - The Challenge (what went wrong before DentalPulse).
  - The Solution (which workflows and playbooks were activated).
  - Verified ROI & Key Metrics breakdown.
  - Direct *"Book a demo for your lab"* button.

---

## 4. Content Polish & Replacements Matrix

The original mockup file `Customers.dc.html` used generic placeholders (`[Name]`, `[Title]`, `[Lab name]`, `[X]%`, `[Lab photo]`). Production replacements are mapped below:

| Reference Placeholder | Production Replacement | Context / Rationale |
| :--- | :--- | :--- |
| `[Lab name]` (Featured) | Apex Dental Ceramics | High-volume restorative & implant laboratory |
| `[N] at-risk accounts` | 14 at-risk accounts | Concrete, credible metric |
| `[timeframe]` | first 90 days | Fast time-to-value proof |
| `[X]%` | 94% | Realistic, impactful retention rate |
| `$[X]K` | $180K | Substantial annual recurring revenue saved |
| `[X] hrs` | 12 hrs | Significant operational efficiency |
| `[Lab photo]` (More Stories) | Custom SVG / Rendered Case Visuals | Replaces empty grey boxes with rich dental lab graphics |
| `[Name]`, `[Title]` | Real titles (Managing Director, VP Ops, GM, Sales & CS Manager, Owner, CCO) | Addresses all decision makers in dental laboratories |

---

## 5. Verification Checklist

- [ ] `/customers` route loads without hydration mismatches or console errors.
- [ ] Active state is properly reflected in the global navigation bar.
- [ ] Responsive behavior tested at 375px (mobile), 768px (tablet), 1024px (desktop), and 1440px (wide).
- [ ] Bento box on featured case study stacks seamlessly into a clean vertical card on mobile screens.
- [ ] Testimonials grid handles variable quote heights gracefully with `flex-col justify-between`.
- [ ] High-contrast color accessibility (WCAG AA standards) validated for text against light and dark cards.
- [ ] Metadata tags (`title`, `description`, `openGraph`) configured for SEO.
