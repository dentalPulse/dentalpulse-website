# Platform Page Implementation Plan

**Target Route:** `/platform` (`src/app/platform/page.tsx`)  
**Reference Source:** `Platform.dc.html` (`C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Platform (How it works)-html\Platform.dc.html`)  
**Audit Reference:** [`new_docs/PLATFORM_PAGE_AUDIT.md`](PLATFORM_PAGE_AUDIT.md)  
**Date:** October 26, 2026  

---

## 1. Architecture & Component Structure

To maintain modularity and high performance, the `/platform` page will be constructed using clean, focused components in a dedicated `src/components/platform/` directory:

```
src/
├── app/
│   └── platform/
│       └── page.tsx                         # Platform Route Page Component
└── components/
    └── platform/
        ├── PlatformHero.tsx                 # Headline, subtext, actions & 4-Pillar Jump Bar
        ├── Customer360Section.tsx           # Pillar 01: Riverbend Dental Profile Card
        ├── PredictiveInsightsSection.tsx    # Pillar 02: Dark Real-Time Alert Feed
        ├── GamePlanSection.tsx              # Pillar 03: Actionable 4-Step Game Plan
        ├── WorkflowsSection.tsx             # Pillar 04: Visual Workflow Sequence Tree
        ├── ArchitecturePipelineSection.tsx  # How It Connects: Sources -> Pulse -> Outcomes
        ├── SecuritySection.tsx              # 4 Security Assurance Cards
        └── PlatformCTA.tsx                  # Dedicated Platform Bottom Conversion Card
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Header Link Integration
1. Create `src/app/platform/page.tsx` with proper Next.js App Router metadata:
   - Title: `Platform & How It Works | DentalPulse`
   - Description: `Complete customer intelligence, predictive insights, and automated workflows built specifically for dental laboratories.`
2. Update [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx) and [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx) to link `"Platform"` directly to `/platform`.

---

### Phase 2: Hero & 4-Pillars Quick Jump Bar (`PlatformHero.tsx`)
1. Create `src/components/platform/PlatformHero.tsx`:
   - Monospace tag: `THE PLATFORM` (`#067A47`).
   - Headline: *"Every customer signal in your lab, turned into a plan of action."*
   - Subtext and conversion buttons ("Book a demo", "View pricing" -> `#book-demo`).
   - 4-column Jump Bar grid with border dividers:
     * `01` Complete customer intelligence (`#c360`)
     * `02` Predictive insights (`#alerts`)
     * `03` Actionable recommendations (`#plan`)
     * `04` Automated workflows (`#auto`)

---

### Phase 3: The 4 Core Product Pillars (COMPLETED)
1. **Pillar 01 — Customer 360 ([`Customer360Section.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/Customer360Section.tsx)):**
   - Narrative on left with green checkmark checklist.
   - Code-rendered Riverbend Dental card on right:
     - Avatar `RD` in black & neon green.
     - `Health 82 • Healthy` mint status pill.
     - 4 Stat tiles ($212K LTV, 148 cases, 2.1% remakes, 6.2d turnaround).
     - Category mix progress bars (Crown 78%, Removables 22%, Implants 0% dashed gap).

2. **Pillar 02 — Predictive Insights ([`PredictiveInsightsSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/PredictiveInsightsSection.tsx)):**
   - Alternating layout (mockup on left, narrative on right).
   - High-fidelity dark alert feed (`#0A0A0A`) with 4 real-time alerts (Lakeside Family Dentistry, Park Ave Orthodontics, Riverbend Dental, Dr. Chen & Associates).

3. **Pillar 03 — Actionable Recommendations ([`GamePlanSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/GamePlanSection.tsx)):**
   - Narrative on left with checklist.
   - Interactive-feel 4-step sequenced playbook for Lakeside Family Dentistry with status indicators and ceramist visit steps.

4. **Pillar 04 — Automated Workflows ([`WorkflowsSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/WorkflowsSection.tsx)):**
   - Alternating layout (tree mockup on left, narrative on right).
   - Visual step sequence with vertical connection lines from `TRIGGER` to `EMAIL`, `TASK`, `WAIT`, and `WHATSAPP`.

---

### Phase 4: Data Pipeline Architecture & Security Assurance (COMPLETED)
1. **Architecture & Connection Pipeline ([`ArchitecturePipelineSection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/ArchitecturePipelineSection.tsx)):**
   - Dark theme container (`#0A0A0A`, text white).
   - 3-column data intelligence flow:
     - **SOURCES:** Lab management, Accounting, CRM, Leads.
     - **CENTERPIECE:** Neon green card (`#12F095`) with DentalPulse brand and *Unify • Predict • Recommend • Automate*.
     - **OUTCOMES:** Retention ↑, LTV ↑, CAC ↓, Reporting hours ↓.
2. **Security & Governance Grid ([`SecuritySection.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/platform/SecuritySection.tsx)):**
   - 4 Cards covering Encryption (TLS 1.3 / AES-256), Role-based access, Enterprise compliance, and Data sovereignty.

---

### Phase 5: Conversion CTA & Page Assembly
1. Build `src/components/platform/PlatformCTA.tsx` with dark `#0A0A0A` banner and "Book a demo" action.
2. Assemble all components in `src/app/platform/page.tsx` with `<Header />` and `<Footer />`.
3. Verify build with `npm run build` and test responsive reflow across desktop, tablet, and mobile.
