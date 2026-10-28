# Solutions (Sales & CS Managers) Page Audit

**Reference Source:** `Managers.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Solutions — Sales & CS managers-html\Managers.dc.html`  
**Target Route:** `/solutions/managers` (`src/app/solutions/managers/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Solutions — For Sales & Customer Success Managers** page is a role-specific solution page explaining how sales directors and CS leads coach their laboratory reps with live performance data, monitor account-level alert follow-ups, and automate multi-channel playbooks.

It preserves the exact high-contrast, clean SaaS aesthetic established in DentalPulse:
- **Typography:** `Plus Jakarta Sans` for titles and body, `JetBrains Mono` for uppercase kickers (`FOR SALES & CUSTOMER SUCCESS MANAGERS`).
- **Color Palette:** High-contrast light `#FFFFFF` background, dark `#0A0A0A` capabilities and CTA banners, `#12F095` neon green accents, and `#067A47` semantic greens.
- **High-Impact Code Mockup:** Real-time rendered "Team Performance" card with 4-rep breakdown table (Jordan M., Aisha R., Tom K., Lena S.) detailing Revenue, At-risk account count, Task completion progress bars, and an AI-recommended coaching intervention box for at-risk accounts.

---

## 2. Section-by-Section Architectural Inventory

### 1. Role Switcher Navigation Bar
- **Positioning:** Directly below sticky Header with `pt-7 px-6`.
- **Active Tab:** `Managers` (`bg-[#0A0A0A] text-white px-4.5 py-3 rounded-full font-bold shadow-xs`).
- **Inactive Tabs:**
  - `Owners & C-suite` -> `/solutions`
  - `Sales reps` -> `/solutions/sales-reps`
  - `Marketing` -> `/solutions/marketing`

---

### 2. Managers Hero Section (`ManagersHero.tsx`)
- **Theme:** Light surface (`#FFFFFF`) with generous padding (`pt-10 sm:pt-14 pb-18 sm:pb-24 px-6`).
- **Layout:** 2 Columns (Narrative on left, Team Performance Card on right).
- **Left Column: Narrative:**
  - Kicker: `FOR SALES & CUSTOMER SUCCESS MANAGERS` (JetBrains Mono, `#067A47`, tracking `0.06em`).
  - Headline: *"Coach your team with the numbers that matter."* (`text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtext: *"See every rep’s accounts, alerts and follow-through in one place. Set objectives, assign playbooks and know who needs help — before the month is over."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] leading-[1.6] max-w-[540px] mt-5`).
  - Action Buttons:
    - `Book a demo` (`bg-[#0A0A0A] text-white font-bold px-7 py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm`)
    - `See the platform` (`border border-[#D6D6D6] bg-white text-[#0A0A0A] font-bold px-7 py-4 rounded-full hover:bg-[#F5F5F5] transition-colors` -> links to `/platform`)
- **Right Column: Team Performance UI Mockup Card:**
  - Container: `bg-white border border-[#E6E6E6] rounded-[24px] p-6 sm:p-7 md:p-8 shadow-[0_40px_70px_-45px_rgba(0,0,0,0.45)] text-[#0A0A0A] overflow-x-auto`.
  - Header:
    - Title: `Team performance` (`font-extrabold text-[18px] sm:text-[19px] text-[#0A0A0A]`)
    - Timeframe badge: `This month` (`text-[#5C5C5C] text-[12px] sm:text-[13px] font-semibold bg-[#F5F5F5] px-2.5 py-1 rounded-md`)
  - Table Header: `Rep` | `Revenue` | `At risk` | `Tasks done` (`grid grid-cols-[1.6fr_1fr_1fr_1.2fr] text-[12px] font-bold text-[#5C5C5C] px-3 mt-5 pb-2 border-b border-[#F0F0F0]`).
  - 4 Rep Rows (in `grid grid-cols-[1.6fr_1fr_1fr_1.2fr] items-center p-3 rounded-[12px] bg-[#F5F5F5] text-[14px]`):
    1. **Jordan M. (JM):** Avatar `JM` (`bg-[#0A0A0A] text-[#12F095]`) • `$142K` • `2` at-risk • `92%` bar (`#067A47`).
    2. **Aisha R. (AR):** Avatar `AR` • `$128K` • `3` at-risk • `81%` bar (`#067A47`).
    3. **Tom K. (TK):** Highlighted Warning Row (`border border-[#BDBDBD]`) • Avatar `TK` • `$96K` • `7` at-risk (`font-extrabold text-[#0A0A0A]`) • `44%` bar (`#0A0A0A`).
    4. **Lena S. (LS):** Avatar `LS` • `$117K` • `1` at-risk • `88%` bar (`#067A47`).
  - **Suggested Coaching Box:**
    - Mint highlight box: `bg-[#EEFDF5] border border-[#A7F3D0] rounded-[12px] p-3.5 text-[14px] leading-relaxed text-[#065F46] mt-4`
    - Content: **Suggested:** *Tom has 7 at-risk accounts and open win-back tasks. Schedule a 1:1 and reassign 2 accounts.*

---

### 3. Manager Questions Grid (`ManagersQuestionsSection.tsx`)
- **Theme:** Light surface (`pb-20 sm:pb-28 px-6 bg-white`).
- **Headline:** *"Lead with facts, not hunches."* (`text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] max-w-[720px]`).
- **4 Question Cards (featuring `#067A47` quote marks `“`):**
  1. **Who on my team needs support this week?** — *At-risk load, task completion and pipeline per rep, side by side.*
  2. **Are alerts actually being acted on?** — *Track every alert from flag to follow-up to outcome.*
  3. **Which territories are growing or slipping?** — *Revenue, retention and new accounts by territory and rep.*
  4. **How do I roll out a new playbook?** — *Set objectives once and assign them to the whole team.*

---

### 4. Capabilities Section (`ManagersCapabilitiesSection.tsx`)
- **Theme:** Dark `#0A0A0A` container with white text (`py-24 md:py-28 px-6`).
- **3 Capabilities Grid with `#12F095` neon green icons in `#161616` cards:**
  1. **Team dashboards** (Team / users icon): *Compare reps and territories on the metrics that drive retention and growth.*
  2. **Objectives & task management** (Checklist icon): *Turn goals into tasks that land on the right rep’s list automatically.*
  3. **Automated playbooks** (Lightning icon): *Repeatable processes for onboarding, win-back and cross-selling that run consistently.*

---

### 5. Sales & CS Manager Social Proof (`ManagersQuoteSection.tsx`)
- **Theme:** Light spacious testimonial section (`py-24 sm:py-28 px-6 border-t border-[#F0F0F0] text-center`).
- **Quote:** *“With Dental Pulse, our 1:1s changed overnight. We don't spend time debating what happened last month — we focus immediately on the three accounts that need an intervention today.”*
- **Attribution:** **Marcus Rivera** • VP of Sales & CS, Precision Dental Arts

---

### 6. Role Cross-Links & Bottom Conversion Card (`ManagersCTA.tsx`)
- **3 Role Quick Navigation Cards:**
  1. `For owners & C-suite →` -> `/solutions`
  2. `For sales reps →` -> `/solutions/sales-reps`
  3. `For marketing →` -> `/solutions/marketing`
- **Bottom Conversion CTA Card:**
  - Dark container: `bg-[#0A0A0A] rounded-[32px] p-8 sm:p-14 lg:p-18 text-white relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 shadow-2xl`
  - Headline: *"Give every rep a clear plan for every account."* (`text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-[-0.035em] text-white max-w-[620px]`)
  - CTA Button: `"Book a demo"` (`#12F095` neon green pill)

---

### 7. Footer
- Unified pitch-black `#000000` footer with complete legal and company navigation.
