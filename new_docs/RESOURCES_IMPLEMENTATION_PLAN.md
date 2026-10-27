# Resources Page Implementation Plan

**Reference Design:** `Resources.dc.html`  
**Target Route:** `/resources` (`src/app/resources/page.tsx`)  
**Related Audit:** [`new_docs/RESOURCES_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/RESOURCES_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── resources/
│       └── page.tsx                               # Main Resources Route (/resources)
└── components/
    └── resources/
        ├── ResourcesPageContent.tsx               # Client container & modal coordinator
        ├── ResourcesHero.tsx                      # Asymmetric hero title, kicker & description
        ├── FeaturedGuideCard.tsx                  # Large split card: Pulse graphic + Featured Guide
        ├── ResourcesGrid.tsx                      # Interactive topic filter pills + 9-card responsive grid
        ├── LabGrowthBrief.tsx                     # Mint newsletter subscription banner
        └── ArticleReaderModal.tsx                 # Interactive reader modal with actionable takeaways
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking (COMPLETED)
1. Created `src/app/resources/page.tsx` with complete Next.js metadata:
   - Title: `Resources & Guides | DentalPulse`
   - Description: `Practical guides and actionable strategies on dentist account retention, wallet-share expansion, sales routines, and marketing for modern dental laboratories.`
   - OpenGraph metadata and canonical URL: `https://dentalpulse.com/resources`.
2. Created `src/components/resources/ResourcesPageContent.tsx` as the client container.
3. Updated [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx):
   - Updated `Resources` nav link from `/#resources` to `/resources`.
   - Active state highlighting automatically triggers with neon green `#12F095` when on `/resources`.
4. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `Resources` link in the Company column to use Next.js `<Link href="/resources">`.
5. Verified production build via `pnpm build` (all 18 static routes compiled with 0 errors) and live HTTP 200 on `http://localhost:3000/resources`.

---

### Phase 2: Hero & Featured Guide Card (COMPLETED)
1. Created `src/components/resources/ResourcesHero.tsx`:
   - Eyebrow kicker: `RESOURCES` in JetBrains Mono (`#067A47`).
   - Main headline: *"Ideas for growing a modern dental lab."* (`text-[40px] sm:text-[54px] lg:text-[66px] font-extrabold`).
   - Side value-prop text: *"Practical guides on retention, account growth, sales and marketing for lab teams."*
2. Created `src/components/resources/FeaturedGuideCard.tsx`:
   - Split card shell (`bg-white`, `border border-[#E6E6E6]`, `rounded-[28px]`, `overflow-hidden`).
   - Left panel: `#0A0A0A` dark surface, green heartbeat pulse ECG SVG path (`#12F095`), `FEATURED GUIDE` neon badge.
   - Right panel:
     - Tag: `RETENTION • 9 MIN READ`.
     - Title: *"The early-warning playbook: 7 signals a dentist is about to leave your lab"*.
     - Excerpt: *"From longer gaps between cases to quiet shifts in product mix — what to watch, and what to do about each one."*
     - Animated *"Read the guide →"* trigger.
3. Connected components into `src/components/resources/ResourcesPageContent.tsx`.
4. Verified compilation and live HTTP 200 response on `http://localhost:3000/resources`.

---

### Phase 3: Interactive Filter & Resources Grid
1. Create `src/components/resources/ResourcesGrid.tsx`:
   - Interactive topic filter buttons: `All`, `Retention`, `Growth`, `Sales`, `Marketing`, `Guides`.
   - Dynamic active/inactive pill styling matching reference specifications.
   - 9 articles with category tags, read times, titles, and reading links:
     - *How to spot an at-risk dental account before it churns*
     - *Share of wallet: finding the categories your dentists send elsewhere*
     - *A weekly routine for lab sales reps that actually sticks*
     - *WhatsApp, SMS or email? Reaching dentists where they read*
     - *The real cost of losing a dentist — and how to calculate it*
     - *The dental lab KPI cheat sheet: numbers every owner should track*
     - *Turning remake data into a retention signal*
     - *Onboarding new dentists: the first 90 days*
     - *Building segments from real buying behaviour*
   - Dynamic filtering responding to active topic pill clicks.

---

### Phase 4: Newsletter Banner (`LabGrowthBrief.tsx`)
1. Create `src/components/resources/LabGrowthBrief.tsx`:
   - Mint container (`#EEFDF5`, `border border-[#BDF5DA]`, `rounded-[28px]`).
   - Headline: *"The Lab Growth Brief"* + subtext.
   - Interactive work email subscription form with client-side validation and success feedback.

---

### Phase 5: Article Reader Modal & Page Assembly
1. Create `src/components/resources/ArticleReaderModal.tsx`:
   - Interactive reading drawer displaying complete guide summary, clinical challenge, and 3 actionable lab takeaways.
2. Assemble in `src/components/resources/ResourcesPageContent.tsx` and connect to `src/app/resources/page.tsx`.
3. Verify compilation via `pnpm build` and verify live HTTP 200 checks on `http://localhost:3000/resources`.
