# Integrations Page Audit

**Reference Source:** `Integrations.dc.html`  
**Reference File Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Integrations-html\Integrations.dc.html`  
**Target Route:** `/integrations` (`src/app/integrations/page.tsx`)  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary

The **Integrations** page demonstrates how DentalPulse connects seamlessly with dental laboratory core systems: Lab Management Systems (LMS), accounting platforms, messaging channels, and CRM/website tracking tools. It reassures dental lab owners, IT leaders, and operators that no manual double-entry or complicated infrastructure change is required.

The page strictly maintains DentalPulse brand and design system consistency:
- **Typography:** `Plus Jakarta Sans` for headings, narrative body copy, and step titles; `JetBrains Mono` for kickers (`INTEGRATIONS`, `STEP 1-4`, `API` badge).
- **Color Palette:** Clean light `#FFFFFF` background, dark `#0A0A0A` process workflow section, `#12F095` neon green step rules and pulse icon, `#067A47` forest green category accents, and `#EEFDF5` / `#BDF5DA` mint request banner.
- **Central Data Hub Diagram:** A code-rendered interactive architecture diagram featuring dashed data source connectors (`Magic Touch / LMS`, `QuickBooks / Accounting`), a central `#0A0A0A` rounded hub with a pulsing `#12F095` heartbeat SVG, and output connectors (`CRM`, `Messaging`).
- **Comprehensive Integration Directory:** Grouped into 4 clear functional categories with high-contrast cards, hover effects, and authentic industry brands (Magic Touch, Labstar, Evident, 3Shape, QuickBooks, Xero, Sage, HubSpot, Salesforce, Open API, Email, SMS, WhatsApp).
- **Zero-Friction 4-Step Onboarding Workflow:** A dark `#0A0A0A` section detailing Kick-off call, Secure connection, Automatic continuous sync, and Role-based team onboarding.
- **High-Converting Request Banner:** A mint green `#EEFDF5` bottom card for labs with custom systems, including CTAs to *"Request an integration"* and *"Compare plans"*.

---

## 2. Section-by-Section Architectural Inventory

### 1. Global Navigation & Route Setup
- **Route:** Dedicated page route at `/integrations` (`src/app/integrations/page.tsx`).
- **Navigation Linking:**
  - Header: Update `Integrations` nav item to `/integrations` (with active state indicator).
  - Footer: Update `Integrations` link in the Platform column to `/integrations`.

---

### 2. Integrations Hero & Central Data Hub (`IntegrationsHero.tsx`)
- **Theme:** Clean white background (`bg-white`), text centered (`py-20 sm:py-24 px-6`).
- **Headline & Copy:**
  - Kicker: `INTEGRATIONS` (JetBrains Mono, 13px, font-semibold, `#067A47`, tracking `0.06em`).
  - Headline: *"Plugs into the systems your lab already runs."* (`text-[38px] sm:text-[48px] lg:text-[62px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0A0A0A]`).
  - Subtitle: *"Dental Pulse pulls customer, case and invoice data from your existing tools automatically — so there’s nothing new for your team to key in."* (`text-[17px] sm:text-[18px] text-[#5C5C5C] max-w-[640px] mx-auto mt-5 leading-[1.6]`).
- **Code-Rendered Central Data Hub Diagram:**
  - Left Connectors (2 dashed pills):
    - LMS (e.g. `Magic Touch / Labstar`)
    - Accounting (e.g. `QuickBooks / Xero`)
    - Pill styling: `w-[130px] h-[64px] border border-dashed border-[#D6D6D6] rounded-[14px] bg-white flex items-center justify-center font-bold text-[14px] text-[#0A0A0A] shadow-xs`.
  - Data Stream Connector Lines:
    - Dashed animated/repeating green gradient lines (`w-12 sm:w-16 h-0.5 bg-[repeating-linear-gradient(90deg,#067A47_0_6px,transparent_6px_12px)]`).
  - Central DentalPulse Engine Hub:
    - `w-[140px] sm:w-[150px] h-[140px] sm:h-[150px] rounded-[36px] bg-[#0A0A0A] flex items-center justify-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] shrink-0 relative`.
    - Neon green heartbeat SVG (`stroke="#12F095" stroke-width="2.4"`).
  - Right Connectors (2 dashed pills):
    - CRM (e.g. `HubSpot / Salesforce`)
    - Messaging (e.g. `WhatsApp / SMS`)

---

### 3. Integration Categories Directory (`IntegrationsDirectory.tsx`)
- **Theme:** Light surface (`pb-24 sm:pb-32 px-6 bg-white`).
- **Container:** `max-w-[1240px] mx-auto flex flex-col gap-12 sm:gap-14`.
- **4 Categorized Rows (separated by `border-t border-[#E6E6E6]` dividers):**
  1. **Lab management systems:**
     - Left Description: *"Cases, products, turnaround and remakes — the core of every customer signal."*
     - Right Cards Grid:
       - **Magic Touch**
       - **Labstar**
       - **Evident**
       - **3Shape Dental System**
  2. **Accounting & invoicing:**
     - Left Description: *"Revenue, payment behaviour and credit — for true lifetime value per dentist."*
     - Right Cards Grid:
       - **QuickBooks Online**
       - **Xero**
       - **Sage Accounting**
  3. **Messaging channels:**
     - Left Description: *"Send campaigns and automated follow-ups where dentists actually read them."*
     - Right Cards Grid (featuring `#E3FCEF` green badges and `#067A47` icons):
       - **Email** (Mail SVG)
       - **SMS** (Smartphone SVG)
       - **WhatsApp** (Chat message SVG)
  4. **Website & CRM:**
     - Left Description: *"Track which practices visit your site and keep contacts in sync."*
     - Right Cards Grid:
       - **HubSpot**
       - **Salesforce**
       - **Open API** (`API` badge in `#E3FCEF` with JetBrains Mono font)

---

### 4. How Connecting Works (`IntegrationsHowItWorks.tsx`)
- **Theme:** Dark `#0A0A0A` background with white text (`py-24 sm:py-28 px-6`).
- **Headline:** *"Connected and running without IT headaches."* (`text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white max-w-[680px]`).
- **4 Sequential Process Cards (with `#12F095` neon green accent top border):**
  1. **STEP 1 — Kick-off call:** We map the systems you use and the metrics that matter most.
  2. **STEP 2 — Secure connection:** Our team connects your data sources and imports your history.
  3. **STEP 3 — Automatic sync:** Data refreshes continuously in real time — dashboards and alerts stay current.
  4. **STEP 4 — Team onboarding:** Role-based training for owners, managers, reps and marketing.

---

### 5. Request an Integration Banner (`IntegrationsRequestBanner.tsx`)
- **Theme:** Mint green card (`bg-[#EEFDF5] border border-[#BDF5DA] rounded-[28px] p-8 sm:p-14 lg:p-16 my-20 sm:my-24 max-w-[1240px] mx-auto`).
- **Headline:** *"Don’t see your system?"* (`text-[28px] sm:text-[36px] font-extrabold text-[#0A0A0A]`).
- **Subtext:** *"Tell us what you use. Growth AI includes API access, and Enterprise plans include unlimited API access and custom connections."*
- **Action Buttons:**
  - *"Request an integration"* (`bg-[#0A0A0A] text-white font-bold px-7 py-4 rounded-full hover:bg-[#222222] transition-colors shadow-sm` -> `https://app.dentalpulseai.com`)
  - *"Compare plans"* (`border border-[#0A0A0A] bg-transparent text-[#0A0A0A] font-bold px-7 py-4 rounded-full hover:bg-black/5 transition-colors` -> `/#book-demo`)

---

## 3. Implementation Verification Checklist
- [ ] Create route `/integrations` (`src/app/integrations/page.tsx`) with comprehensive SEO metadata.
- [ ] Update `Header.tsx` and `Footer.tsx` so all `Integrations` navigation links point to `/integrations`.
- [ ] Code-render the Central Data Hub architecture diagram with animated/styled data connectors.
- [ ] Implement responsive 4-row category directory with brand icons and hover elevations.
- [ ] Implement dark `#0A0A0A` 4-step IT onboarding workflow with `#12F095` top borders.
- [ ] Implement mint green request banner with dual action buttons.
- [ ] Validate production build via `npm run build` (15/15 routes compiled with 0 errors) and verify HTTP 200 on `http://localhost:3000/integrations`.
