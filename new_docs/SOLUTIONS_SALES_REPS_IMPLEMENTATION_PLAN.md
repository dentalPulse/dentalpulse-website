# Solutions (Sales Representatives) Implementation Plan

**Reference Design:** `SalesReps.dc.html`  
**Target Route:** `/solutions/sales-reps` (`src/app/solutions/sales-reps/page.tsx`)  
**Related Audit:** [`new_docs/SOLUTIONS_SALES_REPS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/SOLUTIONS_SALES_REPS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── solutions/
│       ├── page.tsx                               # Owners & C-Suite Solutions Page (activeRole="owners")
│       ├── managers/
│       │   └── page.tsx                           # Sales & CS Managers Page (activeRole="managers")
│       └── sales-reps/
│           └── page.tsx                           # Sales Representatives Page (activeRole="sales-reps")
└── components/
    └── solutions/
        ├── SolutionsRoleNav.tsx                   # Shared 4-role switcher pill navigation (activeRole prop)
        └── sales-reps/
            ├── SalesRepsHero.tsx                  # Rep narrative + Mobile Phone Screen Card Mockup
            ├── SalesRepsQuestionsSection.tsx      # "Less time digging. More time with dentists" 4-card grid
            ├── SalesRepsCapabilitiesSection.tsx   # Dark #0A0A0A 3-column capabilities grid
            ├── SalesRepsQuoteSection.tsx          # Testimonial from Elena Rostova (Territory Rep)
            ├── SalesRepsRolesCrosslink.tsx        # Cross-links to Owners, Managers, Marketing
            └── SalesRepsCTA.tsx                   # "Have the right conversation..." banner
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Role Navigation Linking
1. Create `src/app/solutions/sales-reps/page.tsx` with SEO metadata:
   - Title: `Solutions for Sales Representatives | DentalPulse`
   - Description: `Walk into every dental practice knowing what to say. Start each day with a ranked list of priority stops and talking points.`
2. Update [`src/components/solutions/SolutionsRoleNav.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRoleNav.tsx):
   - Update `Sales reps` tab link to `/solutions/sales-reps`.
3. Update [`src/components/solutions/SolutionsRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRolesCrosslink.tsx) & [`src/components/solutions/managers/ManagersRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/managers/ManagersRolesCrosslink.tsx):
   - Update `For sales reps` link to `/solutions/sales-reps`.
4. Update [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Update `Sales reps` link under Solutions column to `/solutions/sales-reps`.

---

### Phase 2: Sales Reps Hero & Mobile Phone Mockup Card (`SalesRepsHero.tsx`)
1. Create `src/components/solutions/sales-reps/SalesRepsHero.tsx`:
   - Kicker: `FOR SALES REPRESENTATIVES` (JetBrains Mono, `#067A47`).
   - Headline: *"Walk into every practice knowing what to say."*
   - Subtext and action buttons ("Book a demo", "See the platform" -> `/platform`).
   - Code-rendered **Mobile Phone Screen Mockup**:
     * Phone bezel (`width: 360px`, `rounded-[44px]`, shadow).
     * Screen header: `Thursday` • `Today's priorities` • Avatar `JM`.
     * 3 Priority account cards:
       - **Lakeside Family Dentistry** (Win back, 23 days no cases, shade remake talking point).
       - **Riverbend Dental** (Cross-sell, crowns only, implant turnaround talking point).
       - **Dr. Chen & Associates** (Thank you, volume up 30%).
     * Phone bottom navigation bar (`Today`, `Accounts`, `Tasks`, `Ask AI`).

---

### Phase 3: Sales Reps Questions Grid (`SalesRepsQuestionsSection.tsx`)
1. Create `src/components/solutions/sales-reps/SalesRepsQuestionsSection.tsx`:
   - Headline: *"Less time digging. More time with dentists."*
   - 4 Question cards featuring prominent `#067A47` quotation marks:
     1. Who should I see first today?
     2. What happened since my last visit?
     3. What else could this dentist send us?
     4. Did I follow up on everything?

---

### Phase 4: Dark Capabilities & Field Rep Social Proof
1. Create `src/components/solutions/sales-reps/SalesRepsCapabilitiesSection.tsx`:
   - Dark `#0A0A0A` container with `#12F095` neon green icons in `#161616` cards:
     * **Game plan AI coach** (Target bullseye icon)
     * **Real-time alerts** (Bell / alert icon)
     * **One-tap outreach** (Chat / message icon)
2. Create `src/components/solutions/sales-reps/SalesRepsQuoteSection.tsx`:
   - Authentic territory rep quote from Elena Rostova.

---

### Phase 5: Role Cross-Links, Sales Reps Conversion CTA & Page Assembly
1. Create `src/components/solutions/sales-reps/SalesRepsRolesCrosslink.tsx`:
   - 3 cards linking to `For owners & C-suite →`, `For managers →`, `For marketing →`.
2. Create `src/components/solutions/sales-reps/SalesRepsCTA.tsx`:
   - Dark `#0A0A0A` banner: *"Have the right conversation with the right dentist at the right time."* with `"Book a demo"` button.
3. Assemble all components in `src/app/solutions/sales-reps/page.tsx` with `<Header />` and `<Footer />`.
4. Validate production build via `npm run build` and verify HTTP 200 on `/solutions/sales-reps`.
