# About Page Implementation Plan

**Reference Design:** `About.dc.html`  
**Target Route:** `/about` (`src/app/about/page.tsx`)  
**Related Audit:** [`new_docs/ABOUT_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/ABOUT_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── about/
│       └── page.tsx                               # Main About Route (/about)
└── components/
    └── about/
        ├── AboutPageContent.tsx                   # Client container coordinator
        ├── AboutHero.tsx                          # Bold headline & 2-column narrative
        ├── AboutMissionCards.tsx                  # Team workspace visual + Dark promise card
        ├── AboutValues.tsx                        # 4-card "What we believe" core principles grid
        ├── AboutLeadership.tsx                    # 4-card leadership team showcase
        ├── AboutContactCTA.tsx                    # Dark direct contact & "Book a demo" block
        └── LeaderBioModal.tsx                     # Interactive executive bio modal
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking (COMPLETED)
1. Created `src/app/about/page.tsx` with complete Next.js metadata:
   - Title: `About Us | DentalPulse`
   - Description: `DentalPulse is on a mission to help dental laboratories protect doctor relationships and grow sustainably through customer intelligence.`
   - OpenGraph metadata and canonical URL: `https://dentalpulse.com/about`.
2. Created client container `src/components/about/AboutPageContent.tsx`.
3. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `About` link in the Company column from `/#about` to use Next.js `<Link href="/about">`.
4. Verified production build via `pnpm build` (all 19 static routes compiled with 0 errors) and live HTTP 200 on `http://localhost:3000/about`.

---

### Phase 2: Hero & Mission Showcase Cards (COMPLETED)
1. Created `src/components/about/AboutHero.tsx`:
   - Kicker: `ABOUT DENTAL PULSE` in JetBrains Mono (`#067A47`).
   - Main headline: *"Every dental lab deserves to see its business as clearly as it sees a case."* (`clamp(40px, 5.4vw, 74px)`, line-height 1.02, tracking `-0.04em`).
   - 2-Column narrative detailing the laboratory industry's challenge and why DentalPulse was built.
2. Created `src/components/about/AboutMissionCards.tsx`:
   - Asymmetric 2-element bento grid:
     - Left Panel (spans 2 columns): Technology & lab craftsmanship visualization, CAD/CAM vector blueprint graphic, active intelligence core badge, and nationwide lab partner counter.
     - Right Panel: Signature `#0A0A0A` dark card with neon green ECG pulse emblem, bold *"See clearly. Grow smarter."* slogan, and the core lab promise.
3. Connected components into `src/components/about/AboutPageContent.tsx`.
4. Verified compilation and live HTTP 200 response on `http://localhost:3000/about`.

---

### Phase 3: What We Believe Values Grid (`AboutValues.tsx`) (COMPLETED)
1. Created `src/components/about/AboutValues.tsx`:
   - Section heading: *"What we believe"* (`text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold`).
   - 4-card values grid with hover border darkening and subtle lift:
     - **01. Relationships are the business:** Preserving and growing dentist partnerships.
     - **02. Insight must lead to action:** Directing every metric to clear, prioritized next steps.
     - **03. Built for labs, not adapted:** First-class cases, remakes, turnaround times, and materials.
     - **04. Your data stays yours:** Enterprise-grade security protecting customer data.
2. Connected `AboutValues` into `src/components/about/AboutPageContent.tsx`.
3. Verified compilation and live HTTP 200 response on `http://localhost:3000/about`.

---

### Phase 4: Leadership Team Showcase (`AboutLeadership.tsx`)
1. Create `src/components/about/AboutLeadership.tsx`:
   - Section heading with *"Leadership"* and *"We’re hiring →"* career link.
   - 4 polished executive leadership cards:
     - **Alex Vance** — Co-founder & CEO
     - **Dr. Marcus Sterling** — Co-founder & CTO
     - **Elena Rostova** — Head of Customer Success
     - **Julian Chen** — Head of Product
   - Rich portrait visuals and bio modal trigger support.

---

### Phase 5: Contact Block & Page Assembly
1. Create `src/components/about/AboutContactCTA.tsx`:
   - Dark `#0A0A0A` container with *"Let’s talk about your lab."* headline.
   - High-contrast *"Book a demo"* button.
   - Contact channels: Address, Email (`info@dentalpulseai.com`), and Social links.
2. Create `src/components/about/LeaderBioModal.tsx`:
   - Interactive bio drawer for leadership backgrounds.
3. Assemble in `src/components/about/AboutPageContent.tsx` and connect to `src/app/about/page.tsx`.
4. Verify compilation via `pnpm build` and verify live HTTP 200 checks on `http://localhost:3000/about`.
