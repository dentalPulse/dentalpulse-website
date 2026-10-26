# Platform Page Audit: DentalPulse Internal Platform Architecture

**Reference Source:** `Platform.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Platform (How it works)-html\Platform.dc.html`  
**Target Route:** `/platform` (`src/app/platform/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Platform** page is a deep-dive product architecture page explaining how DentalPulse unifies lab data and translates it into operational growth. It demonstrates four core pillars of the software:
1. **Customer 360** (Unifying data into actionable profiles)
2. **Predictive Insights** (Early warning churn flags and upsell opportunities)
3. **Actionable Recommendations** (Account-specific game plans)
4. **Automated Workflows** (Hands-free multi-channel nurture playbooks)

It follows the clean, high-contrast, modern SaaS design system established in the redesign:
- **Typography:** `Plus Jakarta Sans` for titles and body, and `JetBrains Mono` for uppercase kicker tags (`THE PLATFORM`, `01 — CUSTOMER 360`, `02 — PREDICTIVE INSIGHTS`, etc.).
- **Palette:** High-readability white surfaces `#FFFFFF`, dark surfaces `#0A0A0A` / `#161616`, neon green `#12F095`, forest green `#06663C`, and subtle `#E6E6E6` borders.
- **Rich Visual Artifacts:** Real UI code mockups representing customer profiles, alert feeds, game plan step lists, workflow connectors, and a 3-column data intelligence pipeline.

---

## 2. Section-by-Section Architectural Inventory

### 1. Platform Hero & Quick-Jump Pillars
- **Theme:** Light (`#FFFFFF`) with bottom border
- **Kicker:** `THE PLATFORM` (JetBrains Mono, `#067A47`)
- **Headline:** *"Every customer signal in your lab, turned into a plan of action."*
- **Subtext:** *"Dental Pulse unifies customer, case, sales and production data, then uses AI to tell sales, marketing and customer success what to do — and when."*
- **Action Buttons:**
  - `Book a demo` (`bg-[#0A0A0A] text-white px-6 py-3.5 rounded-full font-bold`)
  - `View pricing` / `Learn more` (`border border-[#D6D6D6] px-6 py-3.5 rounded-full font-bold`)
- **4 Pillars Jump Bar (Grid card container with 1px border dividers):**
  - `01` — **Complete customer intelligence** (*A 360° view of every account*) -> links to `#c360`
  - `02` — **Predictive insights** (*Spot risks and opportunities early*) -> links to `#alerts`
  - `03` — **Actionable recommendations** (*Know exactly what to do next*) -> links to `#plan`
  - `04` — **Automated workflows** (*Nurture every dentist, consistently*) -> links to `#auto`

---

### 2. Pillar 01 — Customer 360 (`#c360`)
- **Layout:** 2 Columns (Text on left, UI Mockup on right)
- **Kicker:** `01 — CUSTOMER 360`
- **Headline:** *"Know every dentist like your best rep does."*
- **Narrative Copy:** *"Buying history, case mix, remakes, turnaround, payment behaviour and every touchpoint — in one profile your whole team shares."*
- **Checklist with Green Check Icons:**
  - Customer database & CRM built for labs
  - Category breakdown: what they buy and what they don’t
  - Lifetime value and health score for each account
- **High-Fidelity Riverbend Dental Profile Card:**
  - Avatar badge: `RD` with black background and neon green text
  - Clinic info: Riverbend Dental, Dr. Maria Lopez, Customer since 2019, Territory North
  - Health status tag: `Health 82 • Healthy` (Mint `#E3FCEF` badge)
  - 4 Stat tiles (`bg-[#F5F5F5] rounded-xl p-3.5`):
    - Lifetime value: `$212K`
    - Cases (90d): `148`
    - Remake rate: `2.1%`
    - Avg. turnaround: `6.2 d`
  - Category Mix horizontal progress bars:
    - Crown & bridge: `78%` (green bar `#067A47`)
    - Removables: `22%` (green bar `#067A47`)
    - Implants: `0%` (dashed border showing revenue opportunity)

---

### 3. Pillar 02 — Predictive Insights (`#alerts`)
- **Layout:** 2 Columns Alternating (UI Mockup on left, Text on right)
- **Kicker:** `02 — PREDICTIVE INSIGHTS`
- **Headline:** *"Hear the warning signs while there’s still time."*
- **Narrative Copy:** *"Dental Pulse learns each dentist’s normal rhythm and flags meaningful changes — drops in volume, longer gaps between cases, rising remakes, or growth worth acting on."*
- **Checklist:**
  - Churn prediction for every account
  - Cross-sell and upsell opportunity detection
  - Alerts routed to the right rep automatically
- **High-Fidelity Dark Alert Feed Card (`bg-[#0A0A0A]`):**
  - Header: Alerts (Updated 6:00 AM)
  - 4 Real-time alerts in dark cards (`#161616`, border `#2A2A2A`):
    - White indicator: **Churn risk • Lakeside Family Dentistry** (*No cases in 23 days. Usual gap is 4 days. Lifetime value $96K.*)
    - White indicator: **Quality risk • Park Ave Orthodontics** (*Remakes up 3x this month — mostly aligners. Flag for QC review.*)
    - Neon green indicator: **Opportunity • Riverbend Dental** (*Strong crown volume, no implant cases. Similar accounts spend $18K/yr on implants.*)
    - Neon green indicator: **Growth • Dr. Chen & Associates** (*Case volume up 30% this quarter. Good moment to introduce digital workflow.*)

---

### 4. Pillar 03 — Actionable Recommendations (`#plan`)
- **Layout:** 2 Columns (Text on left, UI Mockup on right)
- **Kicker:** `03 — ACTIONABLE RECOMMENDATIONS`
- **Headline:** *"A game plan for every account, not another report."*
- **Narrative Copy:** *"The AI business assistant turns insights into a sequence of next steps — who to call, what to offer and when to follow up."*
- **High-Fidelity Game Plan Card Mockup:**
  - Header: `Game plan • Lakeside Family Dentistry` with black pill tag `Win-back`
  - 4-Step Action Checklist:
    1. Active Step (Mint highlight `#EEFDF5`, checkmark): **Call Dr. Shah’s office manager** (*Ask about the last two cases — both had shade remakes.*)
    2. Step 2 (Green numbered ring `2`): **Offer a free shade-matching consult** (*Book your ceramist for a 20-minute visit this week.*)
    3. Step 3 (Grey numbered ring `3`): **Send pickup reminder via WhatsApp** (*Automated, 3 days after the visit.*)
    4. Step 4 (Grey numbered ring `4`): **Review volume in 30 days** (*Dental Pulse will remind you and report the result.*)

---

### 5. Pillar 04 — Automated Workflows (`#auto`)
- **Layout:** 2 Columns Alternating (UI Mockup on left, Text on right)
- **Kicker:** `04 — AUTOMATED WORKFLOWS`
- **Headline:** *"Consistent follow-up, without the manual effort."*
- **Narrative Copy:** *"Set up playbooks once for onboarding, win-back and cross-selling. Dental Pulse runs them across email, SMS, WhatsApp and rep tasks."*
- **Checklist:**
  - Pre-built playbooks for dental lab milestones
  - Multi-channel delivery across email, SMS and WhatsApp
  - Automated task generation for field and inside reps
- **High-Fidelity Visual Workflow Tree (`bg-[#F2F2F2] rounded-[22px]`):**
  - Trigger step: `TRIGGER` (dark pill) -> **New dentist sends first case**
  - Connector line
  - Step 1: `EMAIL` (mint badge) -> **Welcome pack + lab contact sheet**
  - Connector line
  - Step 2: `TASK` (mint badge) -> **Rep check-in call after case delivery**
  - Connector line
  - Step 3: `WAIT` (mint badge) -> **14 days — if no second case…**
  - Connector line
  - Step 4: `WHATSAPP` (mint badge) -> **Friendly nudge with pickup booking link**

---

### 6. Architecture / Data Intelligence Pipeline
- **Theme:** Dark Container (`bg-[#0A0A0A]`, text white)
- **Kicker:** `HOW IT CONNECTS` (`#12F095`)
- **Headline:** *"The intelligence layer for your lab."*
- **3-Stage Architecture Pipeline Grid:**
  - **Left Column (SOURCES):**
    - Lab management system (Magic Touch, LabTrac, etc.)
    - Accounting & invoicing (QuickBooks, Xero)
    - CRM & contacts
    - Website & leads
  - **Centerpiece (DENTAL PULSE):**
    - High-glow neon green card (`bg-[#12F095] text-[#0A0A0A] rounded-[22px] p-8 text-center`)
    - Brand logo + tagline: *Unify • Predict • Recommend • Automate*
  - **Right Column (OUTCOMES):**
    - `↑` Customer retention
    - `↑` Lifetime value per dentist
    - `↓` Cost to acquire customers
    - `↓` Hours spent on reporting
- **Bottom Action:** *"See all integrations →"*

---

### 7. Security Section
- **Theme:** Light
- **Headline:** *"Secure by design."*
- **Subtext:** *"Your customer data is your lab’s most valuable asset. We treat it that way."*
- **4 Security Assurance Cards:**
  1. **Encryption:** End-to-end encryption in transit (TLS 1.3) and at rest (AES-256).
  2. **Role-based access:** Owners, managers and reps see only the accounts and permissions they need.
  3. **Compliance:** Enterprise standards ensuring HIPAA and SOC 2 data governance.
  4. **Your data stays yours:** Export anytime with transparent retention policies.

---

### 8. Platform Bottom CTA & Footer
- **CTA:** Dark `#0A0A0A` banner with headline *"See your own lab’s data in Dental Pulse."* and `"Book a demo"` pill.
- **Footer:** Unified Pitch Black `#000000` footer with full navigation.
