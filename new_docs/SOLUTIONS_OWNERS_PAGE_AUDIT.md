# Solutions Page Audit: For Lab Owners & C-Suite

**Reference Source:** `Owners.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\AppData\Local\Temp\ca0e16e3-d17d-4755-a41a-958c02497bfe_Solutions ΓÇö Lab owners & C-suite-html.zip.bfe\Owners.dc.html`  
**Target Route:** `/solutions` (with `/solutions/owners` alias/subroute)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Solutions — For Lab Owners & C-Suite** page is an executive-level value proposition page demonstrating how dental lab owners, CEOs, and executives gain full business visibility, predict quarterly revenue, prevent silent account churn, and scale without bloating sales headcount.

The page adheres to the established DentalPulse design system:
- **Typography:** `Plus Jakarta Sans` for titles and body, `JetBrains Mono` for uppercase kicker tags (`FOR LAB OWNERS & C-SUITE`).
- **Color Palette:** High-contrast crisp white surfaces (`#FFFFFF`), executive dark surfaces (`#0A0A0A` / `#161616`), neon green accents (`#12F095`), semantic forest green (`#067A47` / `#06663C`), and subtle borders (`#E6E6E6`).
- **High-Impact Code Mockup:** Real-time rendered "Executive Scorecard" card showcasing revenue ($4.86M), customer retention (91.4%), average LTV ($48.2K), revenue at risk ($186K across 18 accounts), and category progress bars for LTV by practice segment.

---

## 2. Section-by-Section Architectural Inventory

### 1. Role Switcher Navigation Bar
- **Positioning:** Placed directly beneath the sticky Header with `pt-7 px-6`.
- **Container:** Rounded pill nav wrapper `bg-[#EFEFEF] border border-[#E6E6E6] rounded-full p-1 inline-flex flex-wrap gap-1 text-[14px] font-bold`.
- **4 Role Tabs:**
  1. `Owners & C-suite` — **Active State:** `bg-[#0A0A0A] text-white px-4.5 py-3 rounded-full font-bold shadow-xs`
  2. `Managers` — `text-[#0A0A0A] px-4.5 py-3 rounded-full hover:text-[#067A47] transition-colors`
  3. `Sales reps` — `text-[#0A0A0A] px-4.5 py-3 rounded-full hover:text-[#067A47] transition-colors`
  4. `Marketing` — `text-[#0A0A0A] px-4.5 py-3 rounded-full hover:text-[#067A47] transition-colors`

---

### 2. Executive Hero Section (`SolutionsHero.tsx`)
- **Theme:** Light surface (`#FFFFFF`) with generous padding (`py-14 md:py-20 px-6`).
- **Layout:** 2 Columns (Narrative on left, Executive Scorecard on right).
- **Left Column: Narrative:**
  - Kicker: `FOR LAB OWNERS & C-SUITE` (JetBrains Mono, `#067A47`, tracking `0.06em`).
  - Headline: *"See the health of your whole lab on one screen."* (`text-[40px] sm:text-[50px] lg:text-[62px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtext: *"Revenue, retention, customer lifetime value and the accounts putting them at risk — without waiting for month-end reports or chasing your team for numbers."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] leading-[1.6] max-w-[540px] mt-5`).
  - Action Buttons:
    - `Book a demo` (`bg-[#0A0A0A] text-white font-bold px-7 py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm`)
    - `Calculate your ROI` (`border border-[#D6D6D6] bg-white text-[#0A0A0A] font-bold px-7 py-4 rounded-full hover:bg-[#F5F5F5] transition-colors`)
- **Right Column: Executive Scorecard UI Mockup:**
  - Container: `bg-white border border-[#E6E6E6] rounded-[24px] p-7 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] text-[#0A0A0A]`.
  - Header:
    - Title: `Executive scorecard` (`font-extrabold text-[18px] text-[#0A0A0A]`)
    - Pill / Timeframe: `Year to date` (`text-[#5C5C5C] text-[13px] font-semibold`)
  - 4 Metric Tiles Grid (2x2):
    1. **Revenue:** `$4.86M` • `▲ 8.2% YoY` (`text-[#067A47] font-bold text-[12px]`)
    2. **Customer retention:** `91.4%` • `▲ 2.1 pts YoY` (`text-[#067A47] font-bold text-[12px]`)
    3. **Avg. lifetime value:** `$48.2K` • `▲ 3.4% YoY` (`text-[#067A47] font-bold text-[12px]`)
    4. **Revenue at risk:** `$186K` • `18 accounts` (Bordered accent tile: `border border-[#BDBDBD] bg-[#F5F5F5] text-[#0A0A0A]`)
  - **Lifetime Value by Segment Bars:**
    - Subtitle: `Lifetime value by segment` (`text-[14px] font-bold text-[#0A0A0A] mt-6 mb-3`)
    - Row 1: **Multi-location DSOs** • `92%` bar (`bg-[#0A0A0A]`) • `$112K`
    - Row 2: **Group practices** • `58%` bar (`bg-[#067A47]`) • `$64K`
    - Row 3: **Solo practices** • `30%` bar (`bg-[#6FE8B3]`) • `$31K`

---

### 3. Executive Questions Grid (`QuestionsSection.tsx`)
- **Theme:** Light surface (`pb-24 px-6`).
- **Headline:** *"Questions you can finally answer in seconds."* (`text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] max-w-[720px]`).
- **4 Question Cards (Responsive 4-column grid):**
  1. `“` (**Which customers are quietly sending us less work?**) — *Ranked list of declining accounts with the revenue at stake.*
  2. `“` (**Where will revenue land this quarter?**) — *AI forecast with the accounts driving any gap to plan.*
  3. `“` (**Which segments are worth the most over time?**) — *Lifetime value by practice type, territory and product line.*
  4. `“` (**Is my team acting on the right accounts?**) — *See alerts, follow-ups and outcomes across every rep.*

---

### 4. Capabilities Section (`ExecutiveCapabilitiesSection.tsx`)
- **Theme:** Dark `#0A0A0A` container with white text (`py-24 px-6`).
- **3 Capabilities Grid:**
  1. **One source of truth:**
     - Icon: Grid / Dashboard layout icon (`#12F095` in `#161616` container)
     - Text: *Sales, retention, remakes and turnaround in one dashboard everyone trusts — no more conflicting spreadsheets.*
  2. **Forecasts you can plan on:**
     - Icon: Trending chart line icon
     - Text: *Revenue forecasting and churn prediction help you staff, budget and invest with confidence.*
  3. **Growth without more headcount:**
     - Icon: Dollar / scale efficiency icon
     - Text: *Keep more of the customers you have and grow them — cheaper than buying new ones.*

---

### 5. Executive Social Proof Section (`ExecutiveQuoteSection.tsx`)
- **Theme:** Light spacious testimonial section (`py-24 px-6 text-center`).
- **Quote:** *"Before Dental Pulse, I didn’t know an account was leaving until two months after their last case. Now we see the drop in week two and step in before the relationship is lost."*
- **Attribution:** **David Vance** • Owner & CEO, Apex Dental Craft

---

### 6. Role Cross-Links & Bottom Conversion Card (`SolutionsCTA.tsx`)
- **Theme:** Light section with dark closing card (`pb-26 px-6`).
- **3 Role Quick Navigation Cards:**
  1. `For managers →` (`border border-[#E6E6E6] rounded-[18px] p-6 font-bold flex justify-between items-center text-[#0A0A0A] hover:border-[#12F095]`)
  2. `For sales reps →`
  3. `For marketing →`
- **Bottom Executive CTA Card:**
  - Dark container: `bg-[#0A0A0A] text-white rounded-[32px] p-10 sm:p-16 lg:p-20 flex flex-wrap justify-between items-center gap-8 shadow-2xl relative overflow-hidden`
  - Headline: *"Run your lab on clarity, not guesswork."* (`text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-[-0.035em] text-white max-w-[620px]`)
  - CTA Button: `"Book a demo"` (`bg-[#12F095] text-[#0A0A0A] font-extrabold px-8 py-4 rounded-full hover:bg-[#00df83] shadow-lg`)

---

### 7. Footer
- Unified pitch-black `#000000` footer with full company and legal navigation.
