# Solutions (Marketing) Implementation Plan

**Reference Design:** `Marketing.dc.html`  
**Target Route:** `/solutions/marketing` (`src/app/solutions/marketing/page.tsx`)  
**Related Audit:** [`new_docs/SOLUTIONS_MARKETING_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/SOLUTIONS_MARKETING_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── solutions/
│       ├── page.tsx                               # Owners & C-Suite Solutions Page (activeRole="owners")
│       ├── managers/
│       │   └── page.tsx                           # Sales & CS Managers Page (activeRole="managers")
│       ├── sales-reps/
│       │   └── page.tsx                           # Sales Representatives Page (activeRole="sales-reps")
│       └── marketing/
│           └── page.tsx                           # Marketing Teams Page (activeRole="marketing")
└── components/
    └── solutions/
        ├── SolutionsRoleNav.tsx                   # Shared 4-role switcher pill navigation (activeRole prop)
        └── marketing/
            ├── MarketingHero.tsx                  # Narrative + Segment Builder & Multi-Channel Campaign Card Mockup
            ├── MarketingQuestionsSection.tsx      # "Marketing that shows up in case volume" 4-card grid
            ├── MarketingCapabilitiesSection.tsx   # Dark #0A0A0A 3-column capabilities grid
            ├── MarketingQuoteSection.tsx          # Testimonial from Sarah Jenkins (Head of Marketing)
            ├── MarketingRolesCrosslink.tsx        # Cross-links to Owners, Managers, Sales Reps
            └── MarketingCTA.tsx                   # "Turn customer data into campaigns that convert." banner
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Role Navigation Linking (COMPLETED)
1. Created `src/app/solutions/marketing/page.tsx` with SEO metadata:
   - Title: `Solutions for Marketing Teams | DentalPulse`
   - Description: `Campaigns that reach the right dentist at the right time. Build segments from real buying behaviour, launch multi-channel campaigns, and track real case volume.`
2. Updated [`src/components/solutions/SolutionsRoleNav.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRoleNav.tsx):
   - Updated `Marketing` tab link to `/solutions/marketing`.
3. Updated Crosslink Components:
   - [`src/components/solutions/SolutionsRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRolesCrosslink.tsx)
   - [`src/components/solutions/managers/ManagersRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/managers/ManagersRolesCrosslink.tsx)
   - [`src/components/solutions/sales-reps/SalesRepsRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/sales-reps/SalesRepsRolesCrosslink.tsx)
   - Pointed all `For marketing` links directly to `/solutions/marketing`.
4. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `Marketing` link under Solutions column to `/solutions/marketing`.
5. Verified production build (`npm run build` — 14 routes compiled) and HTTP 200 on `http://localhost:3000/solutions/marketing`.

---

### Phase 2: Marketing Hero & Segment Builder Mockup Card (`MarketingHero.tsx`) (COMPLETED)
1. Created [`src/components/solutions/marketing/MarketingHero.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/marketing/MarketingHero.tsx):
   - Kicker: `FOR MARKETING TEAMS` (JetBrains Mono, `#067A47`).
   - Headline: *"Campaigns that reach the right dentist at the right time."*
   - Subtext and action buttons:
     - *"Book a demo"* (linking to `https://app.dentalpulseai.com`)
     - *"See Growth plan"* (linking to `/platform`)
   - Code-rendered **Segment Builder & Multi-Channel Campaign Card**:
     * Card header: `Segment — Implant-ready practices` with `42 dentists` green pill badge (`#06663C` on `#E3FCEF`).
     * Query Predicate Rules:
       - `WHERE` (JetBrains Mono) `Crown & bridge cases` `> 20 / month`
       - `AND` (JetBrains Mono) `Implant cases` `= 0 in last 6 months`
       - `AND` (JetBrains Mono) `Health score` `≥ 70`
     * Campaign Performance Breakdown:
       - Title: `Campaign — Implant launch`
       - 3 Metrics: Day 0 Email (`48% opened`), Day 3 WhatsApp (`71% read`), 30-day Result (`9 first implant cases` highlighted in mint).
2. Wired `MarketingHero` into [`src/app/solutions/marketing/page.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/solutions/marketing/page.tsx).
3. Verified compilation via `npm run build` and HTTP 200 on `http://localhost:3000/solutions/marketing`.

---

### Phase 3: Marketing Questions Grid (`MarketingQuestionsSection.tsx`)
1. Create `src/components/solutions/marketing/MarketingQuestionsSection.tsx`:
   - Headline: *"Marketing that shows up in case volume."*
   - 4 Question cards featuring prominent `#067A47` quotation marks:
     1. **Who is ready for our new product line?** — *Segments built from what dentists actually buy — and don't.*
     2. **Did that campaign bring in cases?** — *Tie opens and clicks to real orders and revenue.*
     3. **Which practices are visiting our website?** — *Website tracking turns anonymous visits into warm leads.*
     4. **Who should we prospect next?** — *Profile your best accounts and find practices that look like them.*

---

### Phase 4: Dark Capabilities & Marketer Social Proof
1. Create `src/components/solutions/marketing/MarketingCapabilitiesSection.tsx`:
   - Dark `#0A0A0A` container with `#12F095` neon green icons in `#161616` badges:
     * **Customer segments** (Team / users icon)
     * **Campaign builder** (Mail / envelope icon)
     * **Revenue attribution** (Trending chart / analytics arrow icon)
2. Create `src/components/solutions/marketing/MarketingQuoteSection.tsx`:
   - Testimonial from Sarah Jenkins (Head of Marketing, Lumina Dental Craft).

---

### Phase 5: Role Cross-Links, Marketing Conversion CTA & Page Assembly
1. Create `src/components/solutions/marketing/MarketingRolesCrosslink.tsx`:
   - 3 cards linking to `For owners & C-suite →` (`/solutions`), `For managers →` (`/solutions/managers`), `For sales reps →` (`/solutions/sales-reps`).
2. Create `src/components/solutions/marketing/MarketingCTA.tsx`:
   - Dark `#0A0A0A` banner: *"Turn customer data into campaigns that convert."* with `"Book a demo"` button and neon green pulse watermark.
3. Assemble all components in `src/app/solutions/marketing/page.tsx` with `<Header />`, `<SolutionsRoleNav activeRole="marketing" />`, and `<Footer />`.
4. Validate production build via `npm run build` (14/14 routes compiled with 0 errors) and verify HTTP 200 on `http://localhost:3000/solutions/marketing`.
