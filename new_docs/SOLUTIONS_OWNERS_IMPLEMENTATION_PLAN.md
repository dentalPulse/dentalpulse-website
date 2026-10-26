# Solutions (Lab Owners & C-Suite) Implementation Plan

**Reference Design:** `Owners.dc.html`  
**Target Routes:** `/solutions` & `/solutions/owners`  
**Related Audit:** [`new_docs/SOLUTIONS_OWNERS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/SOLUTIONS_OWNERS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   ├── solutions/
│   │   ├── page.tsx                             # Primary Solutions Route
│   │   └── owners/
│   │       └── page.tsx                         # Alias / direct route
└── components/
    └── solutions/
        ├── SolutionsRoleNav.tsx                 # 4-role switcher pill navigation
        ├── SolutionsHero.tsx                    # Executive narrative + Executive Scorecard card
        ├── QuestionsSection.tsx                 # 4 executive question cards with green quotation marks
        ├── ExecutiveCapabilitiesSection.tsx     # Dark #0A0A0A 3-column capabilities grid
        ├── ExecutiveQuoteSection.tsx            # Testimonial quote from lab owner
        ├── SolutionsRolesCrosslink.tsx          # 3 navigation cards to Managers, Sales Reps, Marketing
        └── SolutionsCTA.tsx                     # Closing dark banner: "Run your lab on clarity, not guesswork."
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup, Role Tab Switcher & Navigation (COMPLETED)
1. Create `src/app/solutions/page.tsx` with proper SEO metadata:
   - Title: `Solutions for Lab Owners & C-Suite | DentalPulse`
   - Description: `Complete visibility into lab revenue, retention, customer lifetime value and accounts at risk on a single executive dashboard.`
2. Create `src/components/solutions/SolutionsRoleNav.tsx`:
   - Interactive pill container with 4 roles: `Owners & C-suite` (active), `Managers`, `Sales reps`, `Marketing`.
3. Update [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx) and [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx) to link `"Solutions"` directly to `/solutions`.


---

### Phase 2: Executive Hero & Scorecard Card (`SolutionsHero.tsx`) (COMPLETED)
1. Create `src/components/solutions/SolutionsHero.tsx`:
   - Kicker: `FOR LAB OWNERS & C-SUITE` (JetBrains Mono, `#067A47`).
   - Headline: *"See the health of your whole lab on one screen."*
   - Subtext and conversion buttons ("Book a demo", "Calculate your ROI").
   - Code-rendered **Executive Scorecard** card:
     * Header: `Executive scorecard` + `Year to date`
     * 4 Metric tiles:
       - Revenue: `$4.86M` (`▲ 8.2% YoY`)
       - Customer retention: `91.4%` (`▲ 2.1 pts YoY`)
       - Avg. lifetime value: `$48.2K` (`▲ 3.4% YoY`)
       - Revenue at risk: `$186K` (`18 accounts`)
     * Lifetime value by segment bars:
       - Multi-location DSOs: `92%` bar (`#0A0A0A`) • `$112K`
       - Group practices: `58%` bar (`#067A47`) • `$64K`
       - Solo practices: `30%` bar (`#6FE8B3`) • `$31K`

---

### Phase 3: Executive Questions Grid (`QuestionsSection.tsx`) (COMPLETED)
1. Create `src/components/solutions/QuestionsSection.tsx`:
   - Headline: *"Questions you can finally answer in seconds."*
   - 4 Question cards featuring prominent `#067A47` quotation marks:
     1. Which customers are quietly sending us less work?
     2. Where will revenue land this quarter?
     3. Which segments are worth the most over time?
     4. Is my team acting on the right accounts?

---

### Phase 4: Dark Capabilities & Executive Social Proof
1. Create `src/components/solutions/ExecutiveCapabilitiesSection.tsx`:
   - Dark theme container (`#0A0A0A`, text white).
   - 3 Column grid with `#12F095` neon green icons in `#161616` cards:
     * **One source of truth** (Dashboard icon)
     * **Forecasts you can plan on** (Trending line chart icon)
     * **Growth without more headcount** (Efficiency / scale icon)
2. Create `src/components/solutions/ExecutiveQuoteSection.tsx`:
   - Authentic lab owner quote and attribution.

---

### Phase 5: Role Cross-Links, Executive Conversion CTA & Page Assembly
1. Create `src/components/solutions/SolutionsRolesCrosslink.tsx`:
   - 3 cards linking to Managers, Sales reps, and Marketing.
2. Create `src/components/solutions/SolutionsCTA.tsx`:
   - Dark `#0A0A0A` banner: *"Run your lab on clarity, not guesswork."* with `"Book a demo"` button.
3. Assemble all components in `src/app/solutions/page.tsx` with `<Header />` and `<Footer />`.
4. Validate production build via `npm run build` and verify HTTP 200.
