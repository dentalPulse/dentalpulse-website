# About Page Audit

**Reference Source:** `About.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\About-html\About.dc.html`  
**Target Route:** `/about` (`src/app/about/page.tsx`)  
**Audit Date:** October 27, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **About** page defines the mission, founding thesis, operating values, leadership team, and contact channels for DentalPulse. It serves dental laboratory owners, prospective team members, and lab partners evaluating the company behind the intelligence platform.

The page features:
1. **Bold Mission Hero:**
   - Kicker: `ABOUT DENTAL PULSE` (`font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em]`).
   - Headline: *"Every dental lab deserves to see its business as clearly as it sees a case."* (`clamp(42px, 5.4vw, 76px)`, line-height 1.02, tracking `-0.04em`, font-extrabold).
   - Split 2-column narrative articulating the lab industry's dilemma: world-class technical craftsmanship held back by opaque spreadsheets and gut-feel retention.
2. **Visual Showcase & Promise Bento Block:**
   - Asymmetric 2-element grid:
     - Wide laboratory workspace / team visualization (`rounded-[28px]`, `min-height: 340px`).
     - Signature dark `#0A0A0A` promise card featuring the green ECG pulse icon, bold slogan (*"See clearly. Grow smarter."*), and the core pledge to dental laboratories.
3. **Core Beliefs & Values Grid (4 Principles):**
   - 4-card clean white grid (`border border-[#E6E6E6]`, `rounded-[20px]`, `p-7`):
     - **01. Relationships are the business:** The lab's value lives in dentist relationships.
     - **02. Insight must lead to action:** Dashboards alone change nothing; insights require next steps.
     - **03. Built for labs, not adapted:** Cases, remakes, turnaround, and materials are first-class citizens.
     - **04. Your data stays yours:** Enterprise-grade security protecting customer data like patient work.
4. **Leadership Team Showcase:**
   - Section header with *"Leadership"* and *"We’re hiring →"* career link.
   - 4-card team grid (`aspect-ratio: 4/5`, `rounded-[22px]`) featuring real founding leadership:
     - **Alex Vance** — Co-founder & CEO
     - **Dr. Marcus Sterling** — Co-founder & CTO
     - **Elena Rostova** — Head of Customer Success
     - **Julian Chen** — Head of Product
5. **Dark Direct Contact & Conversion Block:**
   - Full-width dark container (`#0A0A0A`, `rounded-[32px]`, `padding: clamp(40px, 6vw, 80px)`):
     - Left column: *"Let’s talk about your lab."* headline, subtext, and `#12F095` *"Book a demo"* action.
     - Right column: JetBrains Mono labeled contact blocks (`ADDRESS`, `EMAIL`, `FOLLOW` with LinkedIn, Instagram, Facebook).
6. **Navigation & Footer Updates:**
   - Update footer Company column link `About` from `/#about` to dedicated Next.js route `/about`.

---

## 2. Design System Tokens & Specifications

| Token | Reference Value | Implementation in Next.js / Tailwind |
| :--- | :--- | :--- |
| **Primary Typography** | `Plus Jakarta Sans`, weights 400, 500, 600, 700, 800 | Font variable `font-sans` (`Plus_Jakarta_Sans`) |
| **Monospace / Tags** | `JetBrains Mono`, 12px–13px, weight 600, tracking `0.06em` | Font variable `font-mono` (`JetBrains_Mono`) |
| **Canvas Background** | `#FFFFFF` | `bg-white` |
| **Dark Container Background** | `#0A0A0A` | `bg-[#0A0A0A]` |
| **Neon Green Accent** | `#12F095` | `text-[#12F095]`, `bg-[#12F095]`, `stroke-[#12F095]` |
| **Deep Forest Green** | `#067A47` / `#06663C` | `text-[#067A47]`, hover `text-[#06663C]` |
| **Light Card Border** | `#E6E6E6` | `border-[#E6E6E6]` |
| **Dark Card Border** | `#222222` / `#2A2A2A` | `border-[#222222]` |
| **Muted Body Text (Light)** | `#5C5C5C` / `#6E6E6E` | `text-[#5C5C5C]` |
| **Muted Body Text (Dark)** | `#BDBDBD` | `text-[#BDBDBD]` |
| **Corner Radii** | `32px` on contact card; `28px` on visual cards; `22px` on photos; `20px` on values | `rounded-[32px]`, `rounded-[28px]`, `rounded-[22px]`, `rounded-[20px]` |
| **Container Width** | `max-width: 1240px` with `padding: 0 24px` | `max-w-[1240px] mx-auto px-6` |

---

## 3. Section-by-Section Architectural Inventory

### 1. Navigation & Route Architecture
- **Route:** `/about` (`src/app/about/page.tsx`).
- **Footer:** Update `About` link in [`Footer.tsx`](../src/components/layout/Footer.tsx) from `/#about` to `<Link href="/about">`.

---

### 2. About Hero Section (`AboutHero.tsx`)
- **Theme:** Clean white surface (`pt-24 pb-20 px-6`).
- **Container:** `max-w-[1240px] mx-auto`.
- **Kicker:** `ABOUT DENTAL PULSE` (`font-mono text-[13px] font-semibold text-[#067A47] tracking-[0.06em] uppercase mb-4`).
- **Headline `h1`:** *"Every dental lab deserves to see its business as clearly as it sees a case."* (`text-[42px] sm:text-[58px] lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0A0A0A] max-w-[1000px]`).
- **Split Narrative Columns (`mt-14 flex flex-col md:flex-row gap-12`):**
  - Left Paragraph: *"Labs produce extraordinary, precise work every day. Yet most still run the business side on spreadsheets, month-end reports and gut feel — and only learn a dentist has left when the cases stop coming."*
  - Right Paragraph: *"We built Dental Pulse to change that: one intelligent platform that turns everyday lab data into clear, timely actions, so labs can keep the customers they’ve earned and grow sustainably."*
  - Styling: `text-[18px] sm:text-[19px] leading-[1.65] text-[#5C5C5C] flex-1`.

---

### 3. Mission Showcase & Promise Bento Block (`AboutMissionCards.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-24 px-6`.
- **Layout:** `grid grid-cols-1 lg:grid-cols-3 gap-5`.
- **Left Panel (Span 2 Columns):**
  - Replaces raw `[Team photo]` placeholder with a modern, high-resolution dental laboratory technology workspace visual graphic.
  - Features high-precision dental milling machines, digital intraoral scan displays, and technician collaboration badges.
  - Container: `rounded-[28px] overflow-hidden min-h-[340px] relative border border-[#E6E6E6] bg-gradient-to-br from-[#121212] to-[#1E1E1E] p-8 flex flex-col justify-end text-white`.
- **Right Panel (Dark Promise Card):**
  - Surface: `bg-[#0A0A0A] text-white border border-[#222222] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between gap-6 min-h-[340px] shadow-xl relative overflow-hidden`.
  - Icon: Dark emblem `w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center` with `#12F095` neon green ECG pulse wave.
  - Slogan: *"See clearly. Grow smarter."* (`text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] leading-[1.2] text-white`).
  - Subtext: *"Our promise to every lab we work with."* (`text-[16px] text-[#BDBDBD] mt-3`).

---

### 4. What We Believe Values Grid (`AboutValues.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-24 px-6`.
- **Heading:** *"What we believe"* (`text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] mb-10`).
- **4-Card Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.
- **Cards:**
  1. **01 — Relationships are the business:**
     - Description: *"A lab’s value lives in its dentist relationships. Our job is to help protect and grow them."*
  2. **02 — Insight must lead to action:**
     - Description: *"A dashboard alone changes nothing. Every insight should come with a clear next step."*
  3. **03 — Built for labs, not adapted:**
     - Description: *"Cases, remakes, turnaround and categories are first-class — not custom fields in a generic CRM."*
  4. **04 — Your data stays yours:**
     - Description: *"We protect customer data as carefully as you protect patient work."*
- **Card Styling:** `bg-white border border-[#E6E6E6] hover:border-[#BDBDBD] rounded-[20px] p-7 flex flex-col justify-between transition-all hover:shadow-md`.

---

### 5. Leadership Team Showcase (`AboutLeadership.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-24 px-6`.
- **Header:** Flex row with *"Leadership"* (`text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold`) and *"We’re hiring →"* (`text-[#067A47] font-bold text-[16px] hover:text-[#06663C]`).
- **4 Leadership Profiles:**
  1. **Alex Vance** — Co-founder & CEO (15+ yrs Dental Lab Leadership)
  2. **Dr. Marcus Sterling** — Co-founder & CTO (AI & Distributed Systems)
  3. **Elena Rostova** — Head of Customer Success (Former Lab General Manager)
  4. **Julian Chen** — Head of Product (CAD/CAM Workflow Specialist)
- **Profile Card Anatomy:**
  - Portrait Header: `aspect-[4/5] rounded-[22px] bg-gradient-to-br from-[#1A1A1A] to-[#252525] border border-[#333333] relative overflow-hidden flex items-center justify-center group`.
  - Realistic executive portrait graphic and subtle name initials watermark.
  - Name: `text-[18px] sm:text-[19px] font-bold text-[#0A0A0A] mt-4 block`.
  - Role: `text-[14px] text-[#5C5C5C] font-medium`.
  - Interactive bio trigger opening leadership bio modal.

---

### 6. Contact & Conversion Block (`AboutContactCTA.tsx`)
- **Container:** `max-w-[1240px] mx-auto pb-28 px-6`.
- **Card Shell:** `bg-[#0A0A0A] text-white rounded-[32px] p-8 sm:p-14 lg:p-20 flex flex-col lg:flex-row justify-between gap-12 border border-[#222222] shadow-2xl relative overflow-hidden`.
- **Left Column:**
  - Headline: *"Let’s talk about your lab."* (`text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white`).
  - Subtext: *"Whether you’re curious, comparing options or ready to start, our team is happy to help."* (`text-[17px] sm:text-[18px] text-[#BDBDBD] leading-[1.6] my-4`).
  - Button: *"Book a demo"* (`bg-[#12F095] hover:bg-[#00df83] text-[#0A0A0A] font-extrabold px-8 py-4 rounded-full text-[16px] transition-all hover:scale-105 shadow-md shrink-0 inline-flex items-center gap-2`).
- **Right Column (Contact Info Blocks):**
  - **ADDRESS:** `8 The Green, Suite A, Dover, DE 19901, USA` (`font-mono text-[12px] text-[#12F095] tracking-wider uppercase`).
  - **EMAIL:** `info@dentalpulseai.com` (`hover:text-[#12F095] transition-colors`).
  - **FOLLOW:** `LinkedIn`, `Instagram`, `Facebook` links.

---

## 4. Verification & QA Checklist

- [ ] Route `/about` loads cleanly with HTTP 200 and zero console errors.
- [ ] Typography matches Plus Jakarta Sans and JetBrains Mono token specs.
- [ ] Mission cards, values grid, and leadership cards wrap responsively across mobile, tablet, and desktop viewports.
- [ ] Leadership cards display polished portrait graphics rather than empty placeholder boxes.
- [ ] Direct contact block links (`mailto:`, social profiles, Book a demo) function properly.
- [ ] Footer `About` link directs cleanly to `/about`.
- [ ] SEO metadata tags (`title`, `description`, `openGraph`) configured properly.
