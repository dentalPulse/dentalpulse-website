# Reference Website Audit: DentalPulse New Design System

**Reference Document:** `Main.dc.html`  
**Reference Path:** `C:\Users\VUI Live\Downloads\dental pulse website all pages\dental pulse website\Home-html\Main.dc.html`  
**Audit Date:** October 26, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Executive Summary & Design Philosophy

The reference mockup (`Main.dc.html`) establishes a modern, high-conversion SaaS aesthetic tailored specifically for dental laboratories. It shifts DentalPulse from a generic dark-mode landing page to an intentional, high-contrast, multi-theme visual hierarchy:
- **Hero & Key Focus Sections:** Sleek Dark Theme (`#0A0A0A`) with a subtle radial dot grid, accented by electric brand green (`#12F095`) and pulsing EKG heartbeat micro-animations.
- **Narrative, Proof & Feature Sections:** Clean, high-readability Light Theme (`#FFFFFF` with `#F5F5F5` and `#EEFDF5` mint accents) featuring crisp bento grids, tactile borders (`#E6E6E6`), and deep green semantic text (`#067A47`).
- **Footer:** Deep pitch black (`#000000`) with structured 4-column navigation.

---

## 2. Design System & Style Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Usage in Reference |
| :--- | :--- | :--- |
| **Brand Primary Green** | `#12F095` | Neon pulse traces, primary CTA button backgrounds, glow shadows, accent underlines, active live indicator dots |
| **Brand Dark Green** | `#067A47` | Text links, section subheadings/tags on light backgrounds, positive metric growth indicators |
| **Brand Forest Green** | `#06663C` | Highlight text, stat numbers in the Mint Results banner, badge text |
| **Dark Surface Primary** | `#0A0A0A` | Header background, Hero background, How It Works section, Bottom CTA banner, primary dark buttons |
| **Dark Surface Secondary** | `#161616` | Cards inside dark sections (How It Works cards, etc.) |
| **Deep Pitch Black** | `#000000` | Footer background |
| **Light Background Primary**| `#FFFFFF` | Outcomes, Bento features, Roles, Testimonials, Pulse AI card background |
| **Light Background Muted**  | `#F5F5F5` / `#FAFAFA` | Dashboard preview sidebar, subtle card fills, chip backgrounds |
| **Mint Tint Surface**      | `#EEFDF5` | Proven Results banner background, cross-sell recommendation cards |
| **Mint Light Badge**       | `#E3FCEF` | Feature icons circle background, role badge tags |
| **Mint Border**            | `#BDF5DA` | Border for the Proven Results banner |
| **Light Card Border**      | `#E6E6E6` / `#EAEAEA`| Standard 1px card borders in light sections |
| **Dark Card Border**       | `#222222` / `#2A2A2A`| Header bottom border, dark card borders |
| **Heading Text Dark**      | `#0A0A0A` | Primary text on white backgrounds |
| **Body Copy Muted**        | `#5C5C5C` | Secondary text on white backgrounds |
| **Heading Text Light**     | `#FFFFFF` | Primary text on dark backgrounds |
| **Body Copy Light Muted**  | `#BDBDBD` | Secondary text on dark backgrounds |

### 2.2 Typography Scale

* **Primary Body & Headings Font:** `Plus Jakarta Sans`, system-ui, sans-serif
  - Weights used: `400` (regular), `500` (medium), `600` (semibold), `700` (bold), `800` (extrabold)
* **Code, Tags, Indicators & Numbers:** `JetBrains Mono`, monospace
  - Weights used: `500` (medium), `600` (semibold)
  - Letter spacing: `0.06em` to `0.08em` uppercase for section tags (e.g., `PULSE AI`, `THE PROBLEM`, `WHAT CHANGES`, `HOW IT WORKS`, `EVERYTHING YOU NEED TO GROW`)

#### Heading Hierarchy:
- **Hero Title (`h1`):** `clamp(44px, 6.4vw, 92px)`, line-height: `1.0`, letter-spacing: `-0.045em`, font-weight: `800`.
- **Section Titles (`h2`):** `clamp(34px, 3.6vw, 52px)`, line-height: `1.06`, letter-spacing: `-0.03em`, font-weight: `800`.
- **Card Titles (`h3`):** `20px` to `24px`, letter-spacing: `-0.02em`, font-weight: `800` or `700`.
- **Body Text:** `16px`, line-height: `1.6` - `1.65`, color: `#5C5C5C` (light) or `#BDBDBD` (dark).
- **Sub-tags / Kicker:** `13px` monospace, font-weight: `600`, uppercase, letter-spacing: `0.06em`.

### 2.3 Radii & Shadows
- **Button Pill Radius:** `999px` (rounded-full)
- **Small Badges & Chips:** `8px` to `12px`
- **Standard Cards:** `18px` to `24px`
- **Banners & Hero Mockup Frame:** `28px` to `32px`
- **Pulse AI Signature Glow:**
  ```css
  box-shadow: 0 0 0 1px rgba(18,240,149,0.55), 
              0 0 0 8px rgba(18,240,149,0.10), 
              0 40px 90px -20px rgba(18,240,149,0.45);
  ```
- **Dashboard Mockup Shadow:**
  ```css
  box-shadow: 0 0 0 1px #2A2A2A, 0 60px 100px -40px rgba(0,0,0,0.6);
  ```

### 2.4 Animations & Micro-Interactions

```css
@keyframes dpDash {
  to { stroke-dashoffset: -2400; }
}
@keyframes dpFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes dpBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.dp-trace {
  stroke-dasharray: 260 2140;
  animation: dpDash 7s linear infinite;
}
.dp-float { animation: dpFloat 6s ease-in-out infinite; }
.dp-live { animation: dpBlink 1.6s ease-in-out infinite; }
```

---

## 3. Section-by-Section Architectural Inventory

### 1. Navigation Header
- **Theme:** Dark (`#0A0A0A`, bottom border `#222222`)
- **Container:** `max-width: 1240px`, padding: `16px 24px`
- **Logo:** DentalPulse brand logo
- **Nav Links:** `Platform`, `Solutions`, `Integrations`, `ROI`, `Pricing`, `Customers`, `Resources` (text `#E6E6E6`, hover `#12F095`)
- **CTA Actions:**
  - `Log in` text link (`#FFFFFF`, font-weight `600`) -> links to `https://app.dentalpulseai.com`
  - `Book a demo` pill button (bg `#12F095`, text `#0A0A0A`, font-weight `700`, rounded-full)

### 2. Hero Section
- **Theme:** Dark (`#0A0A0A`), pattern: radial dot grid (`28px 28px`, opacity 10%)
- **SVG Animation:** Full-width background EKG pulse line with running green glowing neon tracer (`.dp-trace`).
- **Headline:** *"The AI growth platform built for dental labs."* with curved custom underline accent under "dental labs."
- **Interactive Component - Pulse AI Query Box:**
  - Live pulsing green badge: `• PULSE AI`
  - Input field: *"Ask me anything about your lab’s growth…"*
  - "Ask" button with arrow icon.
  - Quick-prompt selection pills:
    1. *"Which dentists are at risk this month?"*
    2. *"Where can I cross-sell?"*
    3. *"How is my retention trending?"*
  - Dynamic AI simulated response card displaying contextual answers upon interaction.

### 3. Product Preview & Video Tour Section
- **Positioning:** Overlaps hero with `-150px` negative top margin.
- **Mockup Container:** Desktop macOS-style window frame with 3 dots and URL address bar `app.dentalpulseai.com/overview`.
- **Dashboard Interface (High-Fidelity Code Mockup):**
  - **Sidebar:** DentalPulse logo, navigation items (Overview, Customers, Alerts with `18` badge, Game plans, Campaigns, Forecasts, Reports).
  - **Header:** "Lab overview" with 90-day time filter and Export button.
  - **KPI Grid:**
    - Revenue: `$1.42M` (+6.1% vs prior)
    - Active dentists: `312` (+4 net new)
    - Revenue at risk: `$186K` (18 accounts flagged - highlighted state)
    - Avg. customer LTV: `$48.2K` (+3.4% vs prior)
  - **Data Visualizations:**
    - Monthly revenue area chart (This year green curve vs Last year dashed grey line).
    - At-risk accounts card list with High/Med severity badges (Bright Smile Dental, Lakeside Family Dentistry, Park Ave Orthodontics).
    - Cross-sell opportunities cards with estimated revenue uplift (Riverbend Dental +$18K, Oakwood Smiles +$9K, Dr. Chen +$12K).
  - **Product Tour Overlay:** Semi-transparent dark overlay with green play button and badge: *"Watch the product tour • [2:00]"*.

### 4. Partner Logos Strip
- **Theme:** Light
- **Kicker:** `TRUSTED BY GROWING DENTAL LABORATORIES`
- **Content:** Grid of 6 partner dental lab badges.

### 5. The Problem Section
- **Theme:** Light
- **Kicker:** `THE PROBLEM` (JetBrains Mono, `#067A47`)
- **Headline:** *"Stop managing your lab in the dark."*
- **Layout:** 2-column layout (narrative copy on the left; 3 numbered issue cards on the right):
  - `01` - Lost a dentist and didn’t notice until it was too late?
  - `02` - Spending hours pulling numbers out of your lab software?
  - `03` - Leaving revenue on the table with single-category accounts?

### 6. Outcomes Section ("What Changes")
- **Theme:** Light
- **Kicker:** `WHAT CHANGES`
- **Headline:** *"Data visibility that pays for itself three ways."*
- **Layout:** 3-card grid with mint circular icons:
  1. **Increase retention:** Churn prediction, risk alerts, health scores.
  2. **Grow lifetime value:** Category gaps, game plans, forecasting.
  3. **Lower acquisition cost:** Segments, lead management, website tracking.

### 7. How It Works Section
- **Theme:** Dark (`#0A0A0A`)
- **Kicker:** `HOW IT WORKS` (`#12F095`)
- **Headline:** *"From scattered data to the next right move."* + "Explore the platform →"
- **Cards (Dark cards `#161616`):**
  - `01 — Connect`: Bring your data together (Cases, invoices, customers sync).
  - `02 — See`: Get a 360° view of every account (Buying history, trends, remakes).
  - `03 — Act`: Know exactly what to do next (AI flags risks, automates follow-ups).

### 8. Bento Grid Features Section
- **Theme:** Light
- **Kicker:** `EVERYTHING YOU NEED TO GROW`
- **Headline:** *"One platform. Every customer signal."*
- **Bento Card Structure:**
  - **Feature 1:** Churn prediction with risk alerts UI preview.
  - **Feature 2:** Category gap intelligence (matrix of crowns vs implants vs removables).
  - **Feature 3:** Real-time production alerts.
  - **Feature 4:** Revenue forecasting with projection curve SVG.
  - **Feature 5:** Automated workflows with interactive-style step sequence ("No case in 21 days" -> "Task for rep" -> "WhatsApp check-in" -> "Case received").
  - **Feature 6:** Multi-channel campaigns (Email, SMS, WhatsApp pills + Segment chip).

### 9. Proven Results Banner
- **Theme:** Mint container (`#EEFDF5`, border `#BDF5DA`, rounded `28px`)
- **Kicker:** `PROVEN RESULTS`
- **Headline:** *"Grow with Dental Pulse and see it in the numbers."*
- **Metrics Grid:**
  - `20%` more sales (Reps outperform peers)
  - `1–3 mo` to ROI (Measurable results within months)
  - `↑ CLV` higher lifetime value (Stronger relationships)

### 10. Role-Specific Solutions
- **Theme:** Light
- **Kicker:** `BUILT FOR YOUR WHOLE TEAM`
- **Headline:** *"Everyone who keeps your lab growing."*
- **4 Cards:**
  - **Owners & C-Suite:** See the health of your whole lab on one screen.
  - **Managers:** Coach your team with numbers that matter.
  - **Sales Reps:** Walk into every practice knowing what to say.
  - **Marketing:** Reach the right dentist at the right time.

### 11. Customer Testimonials
- **Theme:** Light
- **Headline:** *"Labs love growing with Dental Pulse."*
- **Layout:** 3 testimonial cards featuring quotes, initials badges, names, and titles.

### 12. Bottom Conversion CTA
- **Theme:** Dark (`#0A0A0A`, rounded `32px`, neon green pulse background watermark)
- **Headline:** *"Your lab has the data. Now put it to work."*
- **Subtext:** *"See your own customers in Dental Pulse in a 30-minute walkthrough."*
- **Buttons:**
  - `Book a demo` (`#12F095`, black text, rounded-full)
  - `Calculate your ROI` (bordered outline, white text, rounded-full)

### 13. Footer
- **Theme:** Pitch Black (`#000000`, border `#222222`)
- **Structure:**
  - Left column: DentalPulse Logo + Mission statement.
  - Nav Columns: Platform, Solutions, Company, Contact.
  - Contact Details: 8 The Green, Suite A, Dover, DE 19901, USA | info@dentalpulseai.com | Social icons/links.
  - Bottom bar: Copyright 2026 + Terms of Use + Privacy links.

---

## 4. Preservation & Functional Integration Points

1. **Brand Identity:**
   - Retain current DentalPulse logo assets: `/logo.png`, `/Dental_Pulse_Black.png`, and favicon.
2. **Checkout & Billing Integration:**
   - Retain existing [`CheckoutModal.tsx`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/components/landing/CheckoutModal.tsx) flow and integrate its trigger into the pricing links / CTAs.
   - Retain [`/billing/success`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/billing/success/page.tsx) and [`/billing/cancel`](file:///c:/Users/VUI%20Live/Desktop/dentalpulse-website/src/app/billing/cancel/page.tsx).
3. **App Portal Links:**
   - Wire all "Log in" and dashboard triggers to `https://app.dentalpulseai.com`.
