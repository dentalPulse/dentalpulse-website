# Careers Page Implementation Plan

**Reference Design:** `Careers.dc.html`  
**Target Route:** `/careers` (`src/app/careers/page.tsx`)  
**Related Audit:** [`new_docs/CAREERS_PAGE_AUDIT.md`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/new_docs/CAREERS_PAGE_AUDIT.md)  

---

## 1. Target Component Architecture

```
src/
├── app/
│   └── careers/
│       └── page.tsx                               # Main Careers Route (/careers)
└── components/
    └── careers/
        ├── CareersPageContent.tsx                 # Client container & state coordinator
        ├── CareersHero.tsx                        # Bold headline & narrative hero
        ├── CareersWhyCards.tsx                    # 3-Card bento grid (Impact, Ownership, Craft)
        ├── CareersBenefits.tsx                    # Benefits & perks 6-card showcase
        ├── CareersOpenRoles.tsx                   # Open positions list & unlisted callout banner
        └── JobApplicationModal.tsx                # Interactive job details & application drawer
```

---

## 2. Phased Rollout Roadmap

### Phase 1: Route Setup & Navigation Linking (COMPLETED)
1. Created `src/app/careers/page.tsx` with complete Next.js metadata:
   - Title: `Careers | DentalPulse`
   - Description: `Join the team building the intelligence layer for dental laboratories. Explore open engineering, product, sales, and operations roles.`
   - OpenGraph metadata and canonical URL: `https://dentalpulse.com/careers`.
2. Created client container `src/components/careers/CareersPageContent.tsx`.
3. Updated [`src/components/layout/Footer.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/layout/Footer.tsx):
   - Updated `Careers` link in Company column from `/#careers` to Next.js `<Link href="/careers">`.
4. Updated [`src/components/about/AboutLeadership.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/about/AboutLeadership.tsx):
   - Updated *"We’re hiring →"* link from `/#careers` to `/careers`.
5. Verified production build via `pnpm build` (all 20 static routes compiled with 0 errors) and confirmed live HTTP 200 response on `http://localhost:3000/careers`.

---

### Phase 2: Hero & Why Us Bento Cards (`CareersHero.tsx` & `CareersWhyCards.tsx`) (COMPLETED)
1. Created `src/components/careers/CareersHero.tsx`:
   - Monospace kicker: `CAREERS` in JetBrains Mono (`#067A47`).
   - Main headline: *"Help an entire industry see clearly."* (`text-[40px] sm:text-[54px] lg:text-[72px] font-extrabold leading-[1.03] tracking-[-0.04em]`).
   - Narrative subtext and *"See open roles"* pill button linking to `#roles`.
2. Created `src/components/careers/CareersWhyCards.tsx`:
   - 3-card bento grid:
     - **Impact Card (Signature `#0A0A0A` Dark Card):** Kicker `IMPACT` (`#12F095`), *"Your work reaches customers fast"*, ambient radial glow, and body copy.
     - **Ownership Card (Clean White Card):** Kicker `OWNERSHIP` (`#067A47`), *"Own problems end to end"*, hover lift, and border darkening.
     - **Craft Card (Clean White Card):** Kicker `CRAFT` (`#067A47`), *"Care about the details"*, hover lift, and border darkening.
3. Connected components into `src/components/careers/CareersPageContent.tsx`.
4. Verified compilation and live HTTP 200 response on `http://localhost:3000/careers`.

---

### Phase 3: Benefits & Perks Section (`CareersBenefits.tsx`) (COMPLETED)
1. Created `src/components/careers/CareersBenefits.tsx`:
   - Section heading: *"Benefits & perks"* (`text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold`) and subtitle with quick pillar badges.
   - 2-column flex layout with 6 high-value employee benefits cards featuring custom vector icons and category tags:
     1. **Remote-first culture:** Flexible hours, work from anywhere in US/Canada/EU, home office setup.
     2. **Comprehensive health coverage:** 100% employer-covered premium health, dental, and vision insurance.
     3. **Unlimited paid time off:** Flexible vacation policy with 4-week annual minimum & recharge days.
     4. **$2,500 learning budget:** Annual stipend for technical courses, conferences, and books.
     5. **Top-tier workstation & gear:** Choice of Apple M3 Max MacBook Pro or Linux workstation + 4K display.
     6. **Twice-yearly team offsites:** In-person company retreats in inspiring locations.
2. Connected `CareersBenefits` into `src/components/careers/CareersPageContent.tsx`.
3. Verified compilation via `pnpm build` and confirmed live HTTP 200 response on `http://localhost:3000/careers`.

---

### Phase 4: Open Roles List & Unlisted Callout (`CareersOpenRoles.tsx`) (COMPLETED)
1. Created `src/components/careers/CareersOpenRoles.tsx`:
   - Section heading: *"Open roles"* (`text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold`) with department filter tabs (`All`, `Engineering`, `Product & Design`, `Go-To-Market`, `Customer Success`).
   - 5 dental laboratory intelligence positions with real compensation ranges, location, discipline badges, and interactive "Apply →" action with arrow translation:
     - **Senior Full-Stack Engineer (Next.js & Python)**
     - **Data Infrastructure Engineer (PMS/LMS Integrations)**
     - **Lead Product Designer (Design Systems & Workflows)**
     - **Senior Enterprise Account Executive (Dental Lab Solutions)**
     - **Laboratory Customer Success Manager**
   - "Don’t see your role?" callout card in `#EEFDF5` with `#BDF5DA` border, subtext, and *"Send us a note"* button linking to `careers@dentalpulseai.com`.
2. Connected `CareersOpenRoles` into `src/components/careers/CareersPageContent.tsx` with role selection state.
3. Verified compilation via `pnpm build` (all 20 static routes compiled with 0 errors) and confirmed live HTTP 200 response on `http://localhost:3000/careers`.

---

### Phase 5: Job Details & Application Modal (`JobApplicationModal.tsx`)
1. Create `src/components/careers/JobApplicationModal.tsx`:
   - Interactive slide-over/modal drawer displaying role details, responsibilities, qualifications, and direct application triggers.
   - Escape key listener, outside click dismiss, and body scroll locking.
2. Finalize assembly in `CareersPageContent.tsx` and verify complete production build (`pnpm build`).
