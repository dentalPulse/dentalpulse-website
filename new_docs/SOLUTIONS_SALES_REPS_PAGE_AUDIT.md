# Solutions (Sales Representatives) Page Audit

**Reference Source:** `SalesReps.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Solutions — Sales reps-html\SalesReps.dc.html`  
**Target Route:** `/solutions/sales-reps` (`src/app/solutions/sales-reps/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Solutions — For Sales Representatives** page is tailored specifically to outside territory reps, dental account executives, and lab customer managers who need field-ready, high-velocity account intelligence on their mobile devices and laptops.

The page adheres strictly to the DentalPulse design tokens:
- **Typography:** `Plus Jakarta Sans` for headlines and narrative, `JetBrains Mono` for uppercase kickers (`FOR SALES REPRESENTATIVES`).
- **Color Palette:** High-contrast light `#FFFFFF` background, dark `#0A0A0A` capabilities and CTA banners, `#12F095` neon green accents, and `#067A47` semantic greens.
- **High-Impact Code Mockup:** Mobile Phone Bezel (`width: 360px`, `rounded-[44px]`) displaying the field rep's live "Today's Priorities" feed (Lakeside Family Dentistry win-back with September shade talking point, Riverbend Dental cross-sell with implant turnaround talking point, Dr. Chen growth thank you, and bottom app bar).

---

## 2. Section-by-Section Architectural Inventory

### 1. Role Switcher Navigation Bar
- **Positioning:** Directly below sticky Header with `pt-7 px-6`.
- **Active Tab:** `Sales reps` (`bg-[#0A0A0A] text-white px-4.5 py-3 rounded-full font-bold shadow-xs`).
- **Inactive Tabs:**
  - `Owners & C-suite` -> `/solutions`
  - `Managers` -> `/solutions/managers`
  - `Marketing` -> `/solutions/marketing`

---

### 2. Sales Reps Hero Section (`SalesRepsHero.tsx`)
- **Theme:** Light surface (`#FFFFFF`) with generous padding (`pt-10 sm:pt-14 pb-18 sm:pb-24 px-6`).
- **Layout:** 2 Columns (Narrative on left, Mobile Phone Screen Mockup on right).
- **Left Column: Narrative:**
  - Kicker: `FOR SALES REPRESENTATIVES` (JetBrains Mono, `#067A47`, tracking `0.06em`).
  - Headline: *"Walk into every practice knowing what to say."* (`text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtext: *"Start each day with a ranked list of who to call or visit, why it matters and the talking points that win more cases — on your laptop or phone."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] leading-[1.6] max-w-[540px] mt-5`).
  - Action Buttons:
    - `Book a demo` (`bg-[#0A0A0A] text-white font-bold px-7 py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm`)
    - `See the platform` (`border border-[#D6D6D6] bg-white text-[#0A0A0A] font-bold px-7 py-4 rounded-full hover:bg-[#F5F5F5] transition-colors` -> `/platform`)
- **Right Column: Mobile Phone Screen Mockup:**
  - Bezel: `w-[360px] max-w-full bg-[#0A0A0A] rounded-[44px] p-3 shadow-[0_50px_80px_-40px_rgba(0,0,0,0.6)] mx-auto`.
  - Inner Screen: `bg-white rounded-[34px] p-5 sm:p-6 flex flex-col gap-3 text-[#0A0A0A]`.
  - Screen Header:
    - Day: `Thursday` (`text-[13px] text-[#5C5C5C] font-semibold`)
    - Title: `Today's priorities` (`text-[22px] font-extrabold tracking-tight text-[#0A0A0A]`)
    - Rep Avatar: `JM` in black circle with `#12F095` neon text (`w-9 h-9 rounded-full`)
  - 3 Account Priority Cards:
    1. **Lakeside Family Dentistry (Win back):**
       - Badge: `Win back` (`bg-[#0A0A0A] text-white text-[11px] font-bold px-2 py-0.5 rounded-full`)
       - Metric: `No cases in 23 days • LTV $96K`
       - Talking Point: **Talking point:** *Ask about the two shade remakes in September.*
       - Border: `border border-[#BDBDBD]`
    2. **Riverbend Dental (Cross-sell):**
       - Badge: `Cross-sell` (`bg-[#E3FCEF] text-[#06663C] text-[11px] font-bold px-2 py-0.5 rounded-full`)
       - Metric: `Crowns only • est. +$18K/yr implants`
       - Talking Point: **Talking point:** *Share implant turnaround and bring a sample case.*
       - Border: `border border-[#BDF5DA]`
    3. **Dr. Chen & Associates (Thank you):**
       - Badge: `Thank you` (`bg-[#EFEFEF] text-[#0A0A0A] text-[11px] font-bold px-2 py-0.5 rounded-full`)
       - Metric: `Volume up 30% this quarter`
       - Border: `border border-[#E6E6E6]`
  - Bottom Tab Bar:
    - `Today` (active `#067A47`), `Accounts`, `Tasks`, `Ask AI` (`text-[11px] font-bold text-[#5C5C5C] flex justify-around pt-2 border-t border-[#F5F5F5]`).

---

### 3. Sales Reps Questions Grid (`SalesRepsQuestionsSection.tsx`)
- **Theme:** Light surface (`pb-20 sm:pb-28 px-6 bg-white`).
- **Headline:** *"Less time digging. More time with dentists."* (`text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] max-w-[720px]`).
- **4 Question Cards (featuring `#067A47` quote marks `“`):**
  1. **Who should I see first today?** — *A daily list ranked by revenue at stake and opportunity size.*
  2. **What happened since my last visit?** — *Cases, remakes, payments and messages, summarized in one card.*
  3. **What else could this dentist send us?** — *Category gaps compared to similar practices.*
  4. **Did I follow up on everything?** — *Tasks and reminders created for you, automatically.*

---

### 4. Capabilities Section (`SalesRepsCapabilitiesSection.tsx`)
- **Theme:** Dark `#0A0A0A` container with white text (`py-24 md:py-28 px-6`).
- **3 Capabilities Grid with `#12F095` neon green icons in `#161616` cards:**
  1. **Game plan AI coach** (Target bullseye icon): *A recommended sequence of actions for each account to maximise results.*
  2. **Real-time alerts** (Bell / alert icon): *Get notified the moment one of your accounts shows risk or opportunity.*
  3. **One-tap outreach** (Chat / message icon): *Send a WhatsApp, SMS or email straight from the account card, logged automatically.*

---

### 5. Sales Representative Social Proof (`SalesRepsQuoteSection.tsx`)
- **Theme:** Light spacious testimonial section (`py-24 sm:py-28 px-6 border-t border-[#F0F0F0] text-center`).
- **Quote:** *“I used to spend Monday mornings digging through invoices and spreadsheets trying to figure out who was dropping off. Now Dental Pulse gives me my five priority stops before I even finish my coffee.”*
- **Attribution:** **Elena Rostova** • Territory Account Representative, Apex Dental Craft

---

### 6. Role Cross-Links & Bottom Conversion Card (`SalesRepsCTA.tsx`)
- **3 Role Quick Navigation Cards:**
  1. `For owners & C-suite →` -> `/solutions`
  2. `For managers →` -> `/solutions/managers`
  3. `For marketing →` -> `/solutions/marketing`
- **Bottom Conversion CTA Card:**
  - Dark container: `bg-[#0A0A0A] rounded-[32px] p-8 sm:p-14 lg:p-18 text-white relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 shadow-2xl`
  - Headline: *"Have the right conversation with the right dentist at the right time."* (`text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white max-w-[620px]`)
  - CTA Button: `"Book a demo"` (`#12F095` neon green pill)

---

### 7. Footer
- Unified pitch-black `#000000` footer with complete legal and company navigation.
