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

### Phase 2: Hero & Why Us Bento Cards (`CareersHero.tsx` & `CareersWhyCards.tsx`)
1. Create `src/components/careers/CareersHero.tsx`:
   - Kicker: `CAREERS` in JetBrains Mono (`#067A47`).
   - Main headline: *"Help an entire industry see clearly."* (`clamp(42px, 5.4vw, 72px)`, line-height 1.03, tracking `-0.04em`).
   - Narrative subtext and *"See open roles"* pill button linking to `#roles`.
2. Create `src/components/careers/CareersWhyCards.tsx`:
   - 3 bento cards grid:
     - **Impact Card (Signature `#0A0A0A` Dark Card):** Kicker `IMPACT` (`#12F095`), *"Your work reaches customers fast"*.
     - **Ownership Card (Clean White Card):** Kicker `OWNERSHIP` (`#067A47`), *"Own problems end to end"*.
     - **Craft Card (Clean White Card):** Kicker `CRAFT` (`#067A47`), *"Care about the details"*.
3. Assemble in `CareersPageContent.tsx` and verify live rendering.

---

### Phase 3: Benefits & Perks Section (`CareersBenefits.tsx`)
1. Create `src/components/careers/CareersBenefits.tsx`:
   - Section heading: *"Benefits & perks"* (`clamp(30px, 3.2vw, 44px)`).
   - 2-column flex layout with 6 high-value benefit cards:
     1. Remote-friendly work (flexible hours, home office stipend)
     2. Comprehensive health coverage (medical, dental, vision, 100% employer-covered)
     3. Unlimited paid time off (wellness days, parental leave)
     4. Learning & growth budget ($2,500 annual stipend)
     5. Top-tier equipment (M3 Max MacBooks or workstation + 4K display)
     6. Annual team offsites (twice-yearly in-person retreats)
2. Assemble in `CareersPageContent.tsx` and verify live rendering.

---

### Phase 4: Open Roles List & Unlisted Callout (`CareersOpenRoles.tsx`)
1. Create `src/components/careers/CareersOpenRoles.tsx`:
   - Heading: *"Open roles"* with department filter tabs (`All`, `Engineering`, `Product & Design`, `Go-To-Market`, `Customer Success`).
   - Interactive role items with title, department, location, type, and *"Apply →"* hover action:
     - Senior Full-Stack Engineer (Next.js & Python)
     - Data Infrastructure Engineer (Pipelines & Integrations)
     - Product Designer (Design Systems & Workflows)
     - Senior Account Executive (Dental Lab Solutions)
     - Laboratory Success Manager
   - "Don’t see your role?" callout card in `#EEFDF5` with `#BDF5DA` border and *"Send us a note"* button.
2. Assemble in `CareersPageContent.tsx` and verify live rendering.

---

### Phase 5: Job Details & Application Modal (`JobApplicationModal.tsx`)
1. Create `src/components/careers/JobApplicationModal.tsx`:
   - Interactive slide-over/modal drawer displaying role details, responsibilities, qualifications, and direct application triggers.
   - Escape key listener, outside click dismiss, and body scroll locking.
2. Finalize assembly in `CareersPageContent.tsx` and verify complete production build (`pnpm build`).
