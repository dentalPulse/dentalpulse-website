# Careers Page In-Depth Audit

**Reference File:** `Careers.dc.html` (`C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Careers-html\Careers.dc.html`)  
**Target Route:** `/careers` (`src/app/careers/page.tsx`)  
**Design Paradigm:** Minimalist high-contrast typography, signature dark card accents, subtle borders, Plus Jakarta Sans & JetBrains Mono typography, clean micro-interactions, zero placeholder content.

---

## 1. Visual & Section Breakdown

### A. Navigation & Header
- **Reference HTML:** Fixed top navigation with logo, nav links (`Platform`, `Solutions`, `Integrations`, `ROI`, `Pricing`, `Customers`, `Resources`), `Log in` action, and pill CTA `Book a demo`.
- **Existing Codebase:** Reuses standard site `<Header />` with responsive mobile drawer and `/careers` link active state.
- **Action:** Update footer link from `/#careers` to Next.js `<Link href="/careers">`.

---

### B. Careers Hero Section (`CareersHero.tsx`)
- **Structure:**
  - Kicker: `CAREERS` in JetBrains Mono (`font-size: 13px; font-weight: 600; color: #067A47; letter-spacing: 0.06em; text-transform: uppercase`).
  - Main Headline (`h1`):
    - Text: *"Help an entire industry see clearly."*
    - Styling: `font-size: clamp(42px, 5.4vw, 72px); line-height: 1.03; letter-spacing: -0.04em; font-weight: 800; color: #0A0A0A`.
  - Narrative Subtitle:
    - Text: *"We’re a small team building the intelligence layer for dental laboratories. If you like hard problems, real customers and work you can point to, you’ll fit right in."*
    - Styling: `font-size: 19px; line-height: 1.6; color: #5C5C5C; max-width: 640px`.
  - Primary Action Button:
    - Text: *"See open roles"* (smooth scrolls to `#roles`).
    - Styling: `background: #0A0A0A; color: #FFFFFF; font-weight: 700; padding: 16px 28px; border-radius: 999px; margin-top: 8px; transition: all 0.2s; hover:scale(1.02); hover:bg-[#222222]`.

---

### C. Culture & Why Us Bento Grid (`CareersWhyCards.tsx`)
- **Structure:** 3-card grid (`grid-cols-1 md:grid-cols-3 gap-4`).
- **Card 1: Impact (Signature Dark Accent Card)**
  - Background: `#0A0A0A`, text: `#FFFFFF`, `rounded-[22px]`, `p-8`.
  - Kicker: `IMPACT` in `#12F095` (`font-mono text-[13px] font-semibold`).
  - Title: *"Your work reaches customers fast"* (`text-[22px] font-bold tracking-[-0.01em] mt-3.5`).
  - Body: *"Ship features labs use the same week, and hear what they think directly."* (`text-[#BDBDBD] text-[15px] leading-[1.6] mt-2.5`).
- **Card 2: Ownership (Clean White Card)**
  - Background: `#FFFFFF`, border: `1px solid #E6E6E6`, `rounded-[22px]`, `p-8`.
  - Kicker: `OWNERSHIP` in `#067A47` (`font-mono text-[13px] font-semibold`).
  - Title: *"Own problems end to end"* (`text-[22px] font-bold tracking-[-0.01em] mt-3.5`).
  - Body: *"Small team, big scope. Take an idea from customer call to production."* (`text-[#5C5C5C] text-[15px] leading-[1.6] mt-2.5`).
- **Card 3: Craft (Clean White Card)**
  - Background: `#FFFFFF`, border: `1px solid #E6E6E6`, `rounded-[22px]`, `p-8`.
  - Kicker: `CRAFT` in `#067A47` (`font-mono text-[13px] font-semibold`).
  - Title: *"Care about the details"* (`text-[22px] font-bold tracking-[-0.01em] mt-3.5`).
  - Body: *"Like the labs we serve, we believe precision is a form of respect."* (`text-[#5C5C5C] text-[15px] leading-[1.6] mt-2.5`).

---

### D. Benefits & Perks Section (`CareersBenefits.tsx`)
- **Structure:** Two-column flex container (`gap-12`).
  - **Left Narrative Column (`max-w-[400px]`):**
    - Section Heading: *"Benefits & perks"* (`clamp(30px, 3.2vw, 44px)`, `line-height: 1.08; letter-spacing: -0.03em; font-weight: 800`).
    - Subtitle: *"We take care of our team with benefits designed for focus, health, and sustainable high performance."*
  - **Right Grid Column (`repeat(auto-fit, minmax(220px, 1fr))`, `gap-3 sm:gap-4`):**
    - 6 high-value benefit cards (`bg-white`, `border border-[#E6E6E6]`, `rounded-[16px]`, `p-5`, `hover:border-[#BDBDBD]`, `transition-all duration-200`):
      1. **Remote-friendly work:** Work from anywhere in North America or Europe with flexible hours and home office stipend.
      2. **Comprehensive health coverage:** Premium medical, dental, and vision insurance for you and your dependents with 100% employer-covered premiums.
      3. **Unlimited paid time off:** Generous vacation, company-wide wellness days, and parental leave to rest and recharge.
      4. **Learning & growth budget:** $2,500 annual stipend for courses, conferences, certifications, and technical books.
      5. **Top-tier equipment:** Choice of M3 Max MacBook Pro or high-spec workstation, 4K display, and ergonomic setup.
      6. **Annual team offsites:** Twice-yearly in-person company retreats in world-class destinations to align, build, and celebrate.

---

### E. Open Roles List & Unlisted Callout (`CareersOpenRoles.tsx`)
- **Container:** `<section id="roles" className="pb-24 px-6">`
- **Section Heading:** *"Open roles"* (`clamp(30px, 3.2vw, 44px)`, `letter-spacing: -0.03em; font-weight: 800`).
- **Interactive Department Filters:** `All`, `Engineering`, `Product & Design`, `Go-To-Market`, `Customer Success`.
- **Role Items (Interactive Table/List):**
  - Border separator between rows (`border-b border-[#E6E6E6]`, `py-6 px-1`).
  - Hover state with background tint, title color transition (`group-hover:text-[#067A47]`), and animated arrow (`group-hover:translate-x-1`).
  - Roles:
    1. **Senior Full-Stack Engineer (Next.js & Python)** — `Engineering` • `Remote (US / Canada / EU)` • `Full-time`
    2. **Data Infrastructure Engineer (Pipelines & Integrations)** — `Engineering` • `Remote (US / Canada)` • `Full-time`
    3. **Product Designer (Design Systems & Workflows)** — `Product & Design` • `Remote (US / Remote)` • `Full-time`
    4. **Senior Account Executive (Dental Lab Solutions)** — `Go-To-Market` • `Remote (US)` • `Full-time`
    5. **Laboratory Success Manager** — `Customer Success` • `Remote (US)` • `Full-time`
  - Action trigger: "Apply →" opens interactive job modal or triggers direct email application.
- **"Don’t see your role?" Callout Box:**
  - Background: `#EEFDF5`, Border: `1px solid #BDF5DA`, `rounded-[22px]`, `p-8`, flex between text and button.
  - Left: `Don’t see your role?` (`text-[20px] font-bold text-[#0A0A0A]`) + `Tell us how you’d help dental labs grow.` (`text-[#333333] text-[15px] mt-1.5`).
  - Right: `Send us a note` button (`bg-[#0A0A0A] hover:bg-[#222222] text-[#FFFFFF] font-bold py-3.5 px-6 rounded-full transition-colors`) linking to `mailto:careers@dentalpulseai.com?subject=General%20Application%20-%20DentalPulse`.

---

### F. Interactive Role Details & Application Drawer (`JobApplicationModal.tsx`)
- Slide-over or centered modal drawer showing:
  - Role Title, Department, Location, Compensation, and Experience Level.
  - Full Job Description: About DentalPulse, What You'll Do, What We're Looking For, What We Offer.
  - Quick Application Trigger: Direct application form or email pre-configured with candidate template.
  - Accessibility: `Escape` key close, body scroll lock, backdrop click dismiss.

---

## 2. Design Consistency & Typography Audit

| Element | Reference Style | Tailwind Implementation |
|---|---|---|
| **Font Family** | Plus Jakarta Sans, JetBrains Mono | `font-sans`, `font-mono` |
| **Hero Title** | `clamp(42px, 5.4vw, 72px)`, line-height `1.03` | `text-[42px] sm:text-[56px] lg:text-[72px] font-extrabold leading-[1.03] tracking-[-0.04em]` |
| **Section Titles** | `clamp(30px, 3.2vw, 44px)` | `text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em]` |
| **Monospace Kickers** | `13px`, JetBrains Mono, `#067A47` / `#12F095` | `font-mono text-[13px] font-semibold tracking-wider text-[#067A47]` |
| **Dark Accents** | `#0A0A0A` background, `#12F095` pulse green | `bg-[#0A0A0A] text-white`, `text-[#12F095]` |
| **Card Radii** | `22px` for bento/callout, `16px` for perks | `rounded-[22px]`, `rounded-[16px]` |
| **Borders** | `1px solid #E6E6E6`, `#BDF5DA` | `border-[#E6E6E6]`, `border-[#BDF5DA]` |
