# Solutions (Sales & CS Managers) Implementation Plan

**Reference Design:** `Managers.dc.html`  
**Target Route:** `/solutions/managers` (`src/app/solutions/managers/page.tsx`)  
**Related Audit:** [`new_docs/SOLUTIONS_MANAGERS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/SOLUTIONS_MANAGERS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── solutions/
│       ├── page.tsx                             # Owners & C-Suite Solutions Page (activeRole="owners")
│       └── managers/
│           └── page.tsx                         # Sales & CS Managers Page (activeRole="managers")
└── components/
    └── solutions/
        ├── SolutionsRoleNav.tsx                 # Shared 4-role switcher pill navigation (activeRole prop)
        ├── managers/
        │   ├── ManagersHero.tsx                 # Managers narrative + Team Performance Table Card
        │   ├── ManagersQuestionsSection.tsx     # "Lead with facts, not hunches" 4-card grid
        │   ├── ManagersCapabilitiesSection.tsx  # Dark #0A0A0A 3-column capabilities grid
        │   ├── ManagersQuoteSection.tsx         # Testimonial from Marcus Rivera (VP of Sales & CS)
        │   ├── ManagersRolesCrosslink.tsx       # Cross-links to Owners, Sales Reps, Marketing
        │   └── ManagersCTA.tsx                  # "Give every rep a clear plan for every account." banner
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Role Navigation Linking
1. Create `src/app/solutions/managers/page.tsx` with SEO metadata:
   - Title: `Solutions for Sales & CS Managers | DentalPulse`
   - Description: `Coach your lab team with the numbers that matter. See every rep's accounts, alerts, and follow-through in one place.`
2. Update [`src/components/solutions/SolutionsRoleNav.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRoleNav.tsx):
   - Update `Managers` tab link to `/solutions/managers`.
   - Update `Owners & C-suite` tab link to `/solutions`.
3. Update [`src/components/solutions/SolutionsRolesCrosslink.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/solutions/SolutionsRolesCrosslink.tsx):
   - Update `For managers` link to `/solutions/managers`.
4. Update [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Update `Managers` link to `/solutions/managers`.

---

### Phase 2: Managers Hero & Team Performance Card (`ManagersHero.tsx`)
1. Create `src/components/solutions/managers/ManagersHero.tsx`:
   - Kicker: `FOR SALES & CUSTOMER SUCCESS MANAGERS` (JetBrains Mono, `#067A47`).
   - Headline: *"Coach your team with the numbers that matter."*
   - Subtext and action buttons ("Book a demo", "See the platform" -> `/platform`).
   - Code-rendered **Team Performance** Card:
     * Header: `Team performance` + `This month` pill.
     * Table columns: `Rep` | `Revenue` | `At risk` | `Tasks done`.
     * 4 Rep rows:
       - **Jordan M.** ($142K, 2 at risk, 92% tasks done).
       - **Aisha R.** ($128K, 3 at risk, 81% tasks done).
       - **Tom K.** ($96K, 7 at risk, 44% tasks done — highlighted border tile).
       - **Lena S.** ($117K, 1 at risk, 88% tasks done).
     * Mint coaching box: *Tom has 7 at-risk accounts and open win-back tasks. Schedule a 1:1 and reassign 2 accounts.*

---

### Phase 3: Managers Questions Grid (`ManagersQuestionsSection.tsx`)
1. Create `src/components/solutions/managers/ManagersQuestionsSection.tsx`:
   - Headline: *"Lead with facts, not hunches."*
   - 4 Question cards featuring prominent `#067A47` quotation marks:
     1. Who on my team needs support this week?
     2. Are alerts actually being acted on?
     3. Which territories are growing or slipping?
     4. How do I roll out a new playbook?

---

### Phase 4: Dark Capabilities & Manager Social Proof
1. Create `src/components/solutions/managers/ManagersCapabilitiesSection.tsx`:
   - Dark `#0A0A0A` container with `#12F095` neon green icons in `#161616` cards:
     * **Team dashboards** (Users / team icon)
     * **Objectives & task management** (Checklist icon)
     * **Automated playbooks** (Lightning icon)
2. Create `src/components/solutions/managers/ManagersQuoteSection.tsx`:
   - Authentic lab sales leader quote from Marcus Rivera.

---

### Phase 5: Role Cross-Links, Managers Conversion CTA & Page Assembly
1. Create `src/components/solutions/managers/ManagersRolesCrosslink.tsx`:
   - 3 cards linking to `For owners & C-suite →`, `For sales reps →`, `For marketing →`.
2. Create `src/components/solutions/managers/ManagersCTA.tsx`:
   - Dark `#0A0A0A` banner: *"Give every rep a clear plan for every account."* with `"Book a demo"` button.
3. Assemble all components in `src/app/solutions/managers/page.tsx` with `<Header />` and `<Footer />`.
4. Validate production build via `npm run build` and verify HTTP 200 on `/solutions/managers`.
