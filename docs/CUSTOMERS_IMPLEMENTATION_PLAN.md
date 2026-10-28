# Customers Page Implementation Plan

**Reference Design:** `Customers.dc.html`  
**Target Route:** `/customers` (`src/app/customers/page.tsx`)  
**Related Audit:** [`new_docs/CUSTOMERS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/CUSTOMERS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── customers/
│       └── page.tsx                               # Main Customers Route (/customers)
└── components/
    └── customers/
        ├── CustomersPageContent.tsx               # Client container & modal coordinator
        ├── CustomersHero.tsx                      # Hero title, kicker & value proposition
        ├── FeaturedCaseStudy.tsx                  # 2-column bento card: Apex Dental Ceramics narrative + 3 neon stats
        ├── WallOfLove.tsx                         # 6-card multi-tone testimonial grid
        ├── MoreStoriesGrid.tsx                    # 3-card case study deep dive grid (Retention, Cross-Sell, Sales Team)
        ├── CustomersCTA.tsx                       # Dark conversion banner: "Write your lab's growth story next."
        └── CaseStudyModal.tsx                     # Interactive case study viewer modal
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking (COMPLETED)
1. Created `src/app/customers/page.tsx` with complete Next.js metadata:
   - Title: `Customers & Case Studies | DentalPulse`
   - Description: `See how dental laboratories use DentalPulse to prevent doctor churn, grow high-margin case volume, and automate lab sales workflows.`
   - OpenGraph metadata and canonical URL: `https://dentalpulse.com/customers`.
2. Created `src/components/customers/CustomersPageContent.tsx` as the client container.
3. Updated [`src/components/layout/Header.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Header.tsx):
   - Updated `Customers` nav link from `/#testimonials` to `/customers`.
   - Added `usePathname` active state styling (active link highlighted with neon green `#12F095`) on both desktop and mobile navigation drawers.
4. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `Customers` link in the Company column to use Next.js `<Link href="/customers">`.
5. Verified production build via `pnpm build` (all 17 static routes compiled with 0 errors) and live HTTP 200 on `http://localhost:3000/customers`.

---

### Phase 2: Hero & Featured Case Study Bento Card (COMPLETED)
1. Created `src/components/customers/CustomersHero.tsx`:
   - Eyebrow kicker: `CUSTOMER STORIES` in JetBrains Mono (`#067A47`).
   - Main headline: *"Labs that stopped flying blind."*
   - Subtext: *"Hear from owners, managers and reps who use Dental Pulse to keep more dentists and grow every account."*
2. Created `src/components/customers/FeaturedCaseStudy.tsx`:
   - 2-Column asymmetric bento card in dark container (`#0A0A0A`, `rounded-[32px]`, `border border-[#222222]`).
   - Left narrative column:
     - `FEATURED STORY` badge in `#12F095` neon green.
     - Apex Dental Ceramics branded badge (`High-Volume Full-Service Lab • 42 Techs`).
     - Headline: *"How Apex Dental Ceramics recovered 14 at-risk accounts in their first 90 days."*
     - Clear narrative overview and animated `Read the full story →` link.
   - Right metric panel (`#161616`):
     - **`94%`** — `increase in customer retention`
     - **`$180K`** — `revenue recovered from at-risk accounts`
     - **`12 hrs`** — `saved on reporting every week`
     - Separated by clean `#2A2A2A` dividers.
3. Connected components into `src/components/customers/CustomersPageContent.tsx`.
4. Verified compilation and live HTTP 200 response on `http://localhost:3000/customers`.

---

### Phase 3: Wall of Love Testimonial Grid (`WallOfLove.tsx`) (COMPLETED)
1. Created `src/components/customers/WallOfLove.tsx`:
   - Section heading: *"What our customers say"* (`text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold`).
   - 6 distinct testimonial cards in a responsive 3-column grid matching the reference styling:
     - **Card 1 (White):** Early risk alerts & churn prevention (*Michael S., Apex Dental Ceramics* — `MS` mint avatar).
     - **Card 2 (Mint `#EEFDF5`, border `#BDF5DA`):** Time saved on reports (*David R., Summit Milling Center* — `DR` white avatar).
     - **Card 3 (White):** Automated sales workflows (*Elena F., Vanguard Dental Studio* — `EF` mint avatar).
     - **Card 4 (White):** Cross-selling high-margin cases (*Kelly L., Precision Dental Arts* — `KL` mint avatar).
     - **Card 5 (White):** ROI & 18-day payback (*Isaac J., Beacon Prosthetics Studio* — `IJ` mint avatar).
     - **Card 6 (Dark `#0A0A0A`):** AI daily game plans (*Marcus R., Elite Dental Craft* — `MR` dark avatar with `#12F095` text).
2. Connected `WallOfLove` into `src/components/customers/CustomersPageContent.tsx`.
3. Verified live HTML rendering and responsiveness on `http://localhost:3000/customers`.

---

### Phase 4: More Stories Grid (`MoreStoriesGrid.tsx`) (COMPLETED)
1. Created `src/components/customers/MoreStoriesGrid.tsx`:
   - Section heading: *"More stories"* (`text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold`).
   - 3 deep-dive case cards with dedicated category badges, rich vector graphic headers, lab identification, and hover animation:
     - **RETENTION:** At-risk volume dip alert visual + *"How Midwest Dental Studio caught silent doctor attrition 45 days before dentists stopped sending cases"* (+$126K preserved revenue).
     - **CROSS-SELL:** Opportunity matrix visual + *"Scaling high-margin premium zirconia restorations across 60 existing general dentist accounts"* (+34% case value growth).
     - **SALES TEAM:** Field route playbook visual + *"How a 4-person sales team eliminated manual spreadsheets and closed 28 new accounts in 6 months"* (28 new clinic accounts).
   - Interactive hover lift, border transitions, and `Read story →` animated triggers.
2. Connected `MoreStoriesGrid` into `src/components/customers/CustomersPageContent.tsx`.
3. Verified live HTML rendering on `http://localhost:3000/customers`.

---

### Phase 5: Conversion Banner, Modal & Page Assembly (COMPLETED)
1. Created `src/components/customers/CustomersCTA.tsx`:
   - Dark conversion container (`#0A0A0A`, `rounded-[32px]`, `border border-[#222222]`, `shadow-2xl`).
   - Headline: *"Write your lab’s growth story next."* (`text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold`).
   - Subtext explaining the 30-day impact.
   - High-contrast *"Book a demo"* button (`#12F095`) linked directly to `/#book-demo`.
2. Created `src/components/customers/CaseStudyModal.tsx`:
   - Interactive deep-dive dialog with backdrop blur and escape key listener.
   - Detailed case studies for all stories (Apex Dental Ceramics, Midwest Dental Studio, Summit Milling Center, Vanguard Dental Arts).
   - Structured sections: Challenge, DentalPulse Playbook, Verified ROI Metrics, Quote callout, and *"Book a demo"* action.
3. Assembled the complete architecture inside `src/components/customers/CustomersPageContent.tsx`.
4. Verified end-to-end production build (`pnpm build` passed with 0 errors across all 17 routes) and live HTTP 200 checks on `http://localhost:3000/customers`.

---

## 3. Verification & Quality Assurance

1. **Build Validation:** Run `npm run build` or `pnpm build` to guarantee type safety and zero route errors.
2. **Visual Inspection:** Verify layout in browser against `Customers.dc.html` on both desktop and mobile resolutions.
3. **Link Testing:** Confirm all links (Book demo, Log in, Read story) function smoothly.
