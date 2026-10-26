# Integrations Page Implementation Plan

**Reference Design:** `Integrations.dc.html`  
**Target Route:** `/integrations` (`src/app/integrations/page.tsx`)  
**Related Audit:** [`new_docs/INTEGRATIONS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/INTEGRATIONS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── integrations/
│       └── page.tsx                               # Integrations Page Route (/integrations)
└── components/
    └── integrations/
        ├── IntegrationsHero.tsx                   # Centered narrative + Central Data Hub Visual Diagram
        ├── IntegrationsDirectory.tsx              # 4 Categorized Rows (LMS, Accounting, Messaging, CRM)
        ├── IntegrationsHowItWorks.tsx             # Dark #0A0A0A 4-step onboarding workflow
        └── IntegrationsRequestBanner.tsx          # Mint #EEFDF5 "Don't see your system?" request banner
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking (COMPLETED)
1. Created `src/app/integrations/page.tsx` with SEO metadata:
   - Title: `Integrations | DentalPulse`
   - Description: `Plugs into the systems your lab already runs. Seamless integration with lab management systems, accounting tools, and messaging channels.`
2. Updated [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx):
   - Updated `Integrations` nav link from `/#features` to `/integrations`.
3. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `Integrations` link in Platform column to use Next.js `<Link href="/integrations">`.
4. Verified compilation via `npm run build` (15 routes compiled with 0 errors) and HTTP 200 on `http://localhost:3000/integrations`.

---

### Phase 2: Integrations Hero & Central Data Hub Diagram (`IntegrationsHero.tsx`) (COMPLETED)
1. Created [`src/components/integrations/IntegrationsHero.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/integrations/IntegrationsHero.tsx):
   - Kicker: `INTEGRATIONS` (JetBrains Mono, `#067A47`).
   - Headline: *"Plugs into the systems your lab already runs."*
   - Subtext: *"Dental Pulse pulls customer, case and invoice data from your existing tools automatically — so there’s nothing new for your team to key in."*
   - Code-Rendered **Central Data Hub Diagram**:
     * Left Sources: LMS (`Magic Touch, Labstar`), Accounting (`QuickBooks, Xero`).
     * Pulsing green connector stream lines.
     * Central DentalPulse Core Hub (`rounded-[36px] bg-[#0A0A0A]`, neon green heartbeat pulse SVG `#12F095`).
     * Right Channels: CRM (`HubSpot, Salesforce`), Messaging (`WhatsApp, SMS, Email`).
2. Wired `IntegrationsHero` into [`src/app/integrations/page.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/integrations/page.tsx).
3. Verified compilation via `npm run build` and HTTP 200 on `http://localhost:3000/integrations`.

---

### Phase 3: Integration Directory Grid (`IntegrationsDirectory.tsx`) (COMPLETED)
1. Created [`src/components/integrations/IntegrationsDirectory.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/integrations/IntegrationsDirectory.tsx):
   - 4 Categorized rows separated by `#E6E6E6` dividers:
     1. **Lab management systems:** Magic Touch, Labstar, Evident, 3Shape Dental System.
     2. **Accounting & invoicing:** QuickBooks Online, Xero, Sage.
     3. **Messaging channels:** Email, SMS, WhatsApp (with green `#E3FCEF` icon badges).
     4. **Website & CRM:** HubSpot, Salesforce, Open API (with `API` monospace badge).
   - High-contrast card designs with hover states (`hover:border-[#12F095]` and shadow lift).
2. Wired `IntegrationsDirectory` into [`src/app/integrations/page.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/integrations/page.tsx).
3. Verified compilation via `npm run build` (15 routes compiled with 0 errors) and HTTP 200 on `http://localhost:3000/integrations`.

---

### Phase 4: Dark Process Workflow & Onboarding Steps (`IntegrationsHowItWorks.tsx`) (COMPLETED)
1. Created [`src/components/integrations/IntegrationsHowItWorks.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/integrations/IntegrationsHowItWorks.tsx):
   - High-contrast dark `#0A0A0A` background with crisp white typography.
   - Headline: *"Connected and running without IT headaches."*
   - 4 Sequential Process Cards (with `#12F095` neon green accent top border):
     * **STEP 1 — Kick-off call:** We map the systems you use and the metrics that matter most.
     * **STEP 2 — Secure connection:** Our team connects your data sources and imports your history.
     * **STEP 3 — Automatic sync:** Data refreshes continuously in real time — dashboards and alerts stay current.
     * **STEP 4 — Team onboarding:** Role-based training for owners, managers, reps and marketing.
2. Wired `IntegrationsHowItWorks` into [`src/app/integrations/page.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/integrations/page.tsx).
3. Verified compilation via `npm run build` (15 routes compiled with 0 errors) and HTTP 200 on `http://localhost:3000/integrations`.

---

### Phase 5: Request Banner, Page Assembly & Polish (`IntegrationsRequestBanner.tsx`)
1. Create `src/components/integrations/IntegrationsRequestBanner.tsx`:
   - Mint green `#EEFDF5` container with `#BDF5DA` border.
   - Headline: *"Don’t see your system?"*
   - Subtext and action buttons: *"Request an integration"* (`bg-[#0A0A0A]`) and *"Compare plans"* (`border border-[#0A0A0A]`).
2. Assemble all sections in `src/app/integrations/page.tsx` with `<Header />` and `<Footer />`.
3. Validate production build via `npm run build` (15/15 routes compiled with 0 errors) and verify HTTP 200 on `http://localhost:3000/integrations`.
