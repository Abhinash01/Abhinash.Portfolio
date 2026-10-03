# PHASE 03 — USER JOURNEY MAPS & INTERACTION FUNNELS
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Deliverable:** 03 of 05  
**File Location:** `docs/PHASE_03_USER_JOURNEY_MAPS.md`  

---

## 1. User Journey Overview

To ensure that the portfolio serves diverse stakeholders with precision, we mapped **four primary user journeys**. Each journey is designed to minimize cognitive friction, maximize information clarity, and provide direct pathways toward technical evaluation, collaboration, or hiring.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE STAKEHOLDER PERSONAS                       │
├───────────────────────────────────┬────────────────────────────────────┤
│  JOURNEY A: TECHNICAL RECRUITER   │  JOURNEY B: ENGINEERING MANAGER    │
│  • Rapid skills & stack validation│  • Code quality & system design    │
│  • Direct resume access trigger   │  • Architecture diagrams & GitHub  │
│  • Configurable availability check│  • Documented trade-offs & context │
├───────────────────────────────────┼────────────────────────────────────┤
│  JOURNEY C: POTENTIAL CLIENT      │  JOURNEY D: MOBILE VISITOR         │
│  • Commercial delivery & trust    │  • Ergonomic touch navigation      │
│  • Verified project case studies  │  • Fluid scrolling & safe areas    │
│  • Straightforward inquiry channel│  • High-contrast mobile typography │
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. In-Depth User Journey Mappings

---

### Journey A — The Technical Recruiter / Talent Acquisition Specialist
- **Persona Context:** Reviews multiple candidate profiles daily.  
  *(Illustrative Persona Assumption: Evaluates candidate alignment in an estimated 30–45 second rapid-scan window based on industry hiring patterns; this is a design persona reference, not an empirical personal statistic).*
- **Entry Point:** Homepage (`/`) or direct link via professional referral.
- **Navigation Path:**
  1. *Landing on Hero:* Observes headline (`Full Stack & Creative Developer`) and configurable status beacon (`[Configurable State: Defaults to REQUIRES USER CONFIRMATION: Status & Visibility]`).
  2. *Scan Navigation:* Immediately notices the persistent `Resume ↗` trigger in the top-right navigation pill pointing to `/resume.pdf` (`[REQUIRES USER CONFIRMATION: Resume asset]`).
  3. *Scroll to Professional Introduction (`#intro`):* Reads concise 2-sentence summary establishing engineering principles and user experience focus.
  4. *Scan Technical Expertise Matrix (`#expertise`):* Fast-scans categorized competency chips, clearly distinguishing confirmed foundational technologies from planned stack elements and technologies requiring verification (`[REQUIRES USER CONFIRMATION: Specific competencies across TypeScript, Three.js, Node.js, Express, PostgreSQL, MongoDB]`).
  5. *Evaluate Featured Project:* Clicks on *CareerTrack* or *WeatherSentinel* card to view structured case study documentation.
  6. *Trigger Conversion Action:* Clicks `Resume ↗` to view the candidate PDF (once verified asset is provided), or clicks `Get in Touch` (`#contact-cta`) to send an inquiry.
- **Important Decisions Addressed:**
  - *"Does this candidate demonstrate full-stack capabilities?"* (Addressed by `#expertise` matrix separating confirmed vs planned skills, plus documented project schemas).
  - *"Can I easily access their resume to share with a hiring team?"* (Addressed by persistent `Resume ↗` link in the header).
- **Primary Conversion Action:** Accessing `/resume.pdf` (`[REQUIRES USER CONFIRMATION: Resume asset]`) and submitting an inquiry via `#contact-cta` or `/contact`.
- **Potential Friction Points & Architectural Solutions:**
  - *Friction:* Slow-loading 3D scene blocking content access.  
    *Solution & Proposed Target:* Primary DOM content (headings, skills matrix, navigation, resume trigger) mounts immediately; 3D canvas streams asynchronously on a decoupled layer. *Proposed Target:* DOM Interactive `< 1.2s` on desktop broadband, measured via Chrome Lighthouse / Web Vitals.
  - *Friction:* Missing direct contact info or required phone numbers.  
    *Solution:* Direct email address with 1-click copy button (`[REQUIRES USER CONFIRMATION: Primary Email]`) available in header and footer alongside a standard `mailto:` fallback link.

---

### Journey B — The Technical Visitor / Engineering Manager / VP of Engineering
- **Persona Context:** Evaluates technical depth, architectural maturity, code craftsmanship, and problem-solving clarity. Looks for evidence of modular code, structured schemas, and realistic engineering trade-offs.
- **Entry Point:** Direct link to a project case study (e.g., `/projects/careertrack` or `/projects/weathersentinel`).
- **Navigation Path:**
  1. *Land on Case Study (`/projects/:slug`):* Reads Executive Overview and verifies Technology Stack Matrix (distinguishing implemented project stack from future roadmap items).
  2. *Inspect Architectural Flow:* Studies high-level data flow diagram and data entity relationships.
  3. *Review Implemented Features vs. Roadmap:* Validates that implemented capabilities are clearly separated from planned enhancements.
  4. *Examine Technical Challenges:* Reviews documented engineering bottlenecks and applied solutions based strictly on verified project implementation evidence (avoiding unsubstantiated claims of transactions, race-condition handling, or specific database internals unless documented).
  5. *Inspect Repository:* Clicks repository link to view public code on GitHub (`https://github.com/Abhinash01`), with private or unconfirmed repositories flagged `[REQUIRES USER CONFIRMATION]`.
  6. *Return via Breadcrumbs:* Uses `Home (/) > Projects (/projects) > [Project Name]` breadcrumbs to explore the full archive or initiate contact via `/contact`.
- **Important Decisions Addressed:**
  - *"Did the developer understand system architecture and design choices?"* (Addressed by documented trade-offs, schemas, and architecture diagrams).
  - *"Is the code accessible for review?"* (Addressed by direct repository links to verified public GitHub projects).
- **Primary Conversion Action:** Navigating to verified GitHub repository and sending an interview inquiry.
- **Potential Friction Points & Architectural Solutions:**
  - *Friction:* Unverifiable claims or broken repository links.  
    *Solution:* Repository links individually verified against confirmed GitHub repositories (`https://github.com/Abhinash01`). Unconfirmed or private repositories flagged with `[REQUIRES USER CONFIRMATION]`.
  - *Friction:* Vague marketing buzzwords without technical grounding.  
    *Solution:* Standardized case study schema focusing on actual architectural decisions and verified capabilities.

---

### Journey C — The Potential Commercial Client / Agency Partner
- **Persona Context:** Seeking a dependable full-stack developer or creative technologist to build a responsive web application, custom interface, or commercial platform.
- **Entry Point:** Homepage (`/`) or direct commercial referral.
- **Navigation Path:**
  1. *Land on Hero:* Observes modern visual aesthetic, smooth scrolling, and professional value proposition.
  2. *Inspect Commercial Builds:* Scrolls to `#featured-work` or navigates to `/projects` to inspect real-world builds (such as *Maa Kamakhya Hydraulic* or *Jay Hanuman Astro Research Centre*).
  3. *Read About & Mindset (`/about`):* Reviews engineering philosophy, focus on clean architecture, and technical communication.
  4. *Navigate to Contact:* Either scrolls to `#contact-cta` on the homepage or visits `/contact` to submit project scope.
- **Important Decisions Addressed:**
  - *"Can this developer deliver a polished, reliable digital product?"* (Addressed by documented commercial case studies and professional UI standards).
  - *"How can I initiate a project discussion?"* (Addressed by clear inquiry options, direct email fallback, and timezone indicator `[REQUIRES USER CONFIRMATION: Location & Timezone]`).
- **Primary Conversion Action:** Submitting an inquiry on `/contact` or using the direct email fallback.
- **Potential Friction Points & Architectural Solutions:**
  - *Friction:* Complex jargon that obscures practical deliverables.  
    *Solution:* Case studies lead with plain-language problem/solution summaries followed by technical details.
  - *Friction:* Unclear availability, location, or response expectations.  
    *Solution:* Configurable availability beacon and local timezone widget (`[REQUIRES USER CONFIRMATION: Location & Timezone]`), with response turnaround targets clearly marked as proposed targets (`[REQUIRES USER CONFIRMATION: Proposed response window, e.g. 24–48 hours]`). No fabricated commercial guarantees or delivery promises.

---

### Journey D — The Mobile Visitor / Commuting Recruiter
- **Persona Context:** Reviewing portfolio on a mobile device (iOS/Android) during transit. Extremely sensitive to touch responsiveness, thumb ergonomics, safe areas, and readable font sizes.
- **Entry Point:** Mobile browser via LinkedIn, GitHub, or direct shared link.
- **Navigation Path:**
  1. *Land on Mobile Hero:* Responsive layout where 3D canvas acts as ambient background without interfering with vertical touch scrolling. Headline and primary CTA (`Explore Selected Work` -> `#featured-work`) are comfortably positioned within thumb reach.
  2. *Quick Nav via Floating Bottom HUD:* Observes compact bottom HUD with `Resume ↓` (`[REQUIRES USER CONFIRMATION: Resume asset]`) and `Let's Talk ↗` (`#contact-cta`).
  3. *Scroll Through Project Stream:* Swipes down single-column cards with responsive typography and high-contrast styling.
  4. *Tap Project Card:* Navigates to `/projects/:slug` with responsive layout and zero horizontal overflow.
  5. *Access Contact Options:* Taps floating `Let's Talk ↗` to trigger contact shortcut or navigates to dedicated `/contact` page.
- **Important Decisions Addressed:**
  - *"Is the mobile experience responsive, legible, and smooth?"* (Addressed by responsive typography scale, touch-target standards, and capability-aware rendering).
  - *"Can I access resume and contact without hunting through menus?"* (Addressed by persistent bottom HUD actions).
- **Primary Conversion Action:** Accessing resume (`[REQUIRES USER CONFIRMATION: Resume asset]`) or launching native mail client / contact form.
- **Interaction & Ergonomics Rules:**
  - **Pointer vs Touch Modality Separation:**
    - *Desktop:* Canvas pointer interaction is active, responding to cursor movement for subtle parallax and camera rotation, with DOM text sitting on an isolated overlay.
    - *Mobile/Touch:* Touch gestures are reserved for native vertical document scrolling. The canvas container implements passive pointer event handling and `touch-action: pan-y` so vertical swipe gestures scroll naturally without being captured by 3D orbit controls. Desktop pointer interactivity remains completely intact.
  - **Mobile Bottom HUD Collision & Safe Areas:**
    - *Safe-Area Inset Handling:* Positioned with dynamic calculation: `bottom: calc(16px + env(safe-area-inset-bottom, 0px))` to eliminate collision with OS navigation bars.
    - *Scroll-Aware Auto-Collapse:* Translates downward (`translateY(120%)`) during rapid downward scroll to maximize reading area, and re-appears (`translateY(0%)`) on upward scroll or when reaching the bottom of the page.
    - *Bottom Margin Buffer:* All page containers include an `80px–96px` bottom padding buffer (`padding-bottom: 96px`) ensuring the floating HUD never occludes interactive form submit buttons, direct email copy pills, or footer navigation links.
  - **Contact Flow Resilience:** The mobile contact sheet/modal acts as an optional quick shortcut; the full dedicated canonical `/contact` route remains directly accessible via the top mobile menu at all times.
  - **Responsive Layout References:** Viewport height distributions (e.g. 40vh 3D canvas / 60vh content stream) are treated as responsive design reference guidelines across diverse screen ratios, not rigid universal constraints.

---

## 3. Journey Friction Elimination Matrix & Performance Targets

All numerical performance and usability figures represent **proposed engineering targets** with explicit measurement criteria, not claimed achievements prior to implementation:

| Journey | Potential Friction Point | Architectural Countermeasure | Proposed Target & Measurement Method |
| :--- | :--- | :--- | :--- |
| **Recruiter** | Cannot locate resume rapidly. | Direct `Resume ↗` link in persistent floating header on all pages. | **Target: < 3s** to locate and initiate download. *Measured via:* Timed desktop/mobile usability audit. |
| **Recruiter** | Skills buried inside narrative paragraphs. | Dedicated 3-column `#expertise` matrix with instant keyword chips. | **Target: < 10s** to scan relevant stack category. *Measured via:* Persona scannability protocol. |
| **Tech Visitor** | Claims lack empirical verification. | Explicitly separate `Verified Implemented Features` from `Planned Roadmap`. | **Target: 100% verification fidelity.** All repos checked against confirmed GitHub repos; unconfirmed items flagged. |
| **Client** | Form abandonment or third-party service outage. | Client-side input validation with instant visual feedback and copyable direct `mailto:` fallback. | **Target: Zero unrecoverable form abandonment.** Tracked via client-side error telemetry and direct email fallback. |
| **Mobile** | Unresponsive scrolling or battery drain from 3D canvas. | Capability-aware rendering: lightweight CSS static fallback for low-tier devices or `prefers-reduced-motion: reduce`. | **Target: 60 FPS smooth scroll** (minimum acceptable: 30 FPS on low-power devices). *Measured via:* Chrome DevTools Performance trace on mid-tier mobile hardware. |

---

## 4. Canonical Route Consistency

To prevent routing fragmentation, all Phase 03 documentation strictly adheres to these five canonical routes:

| Canonical Route | Route Purpose | Aliases / Redirect Policy |
| :--- | :--- | :--- |
| `/` | Root Homepage (Hero, Featured Work, Expertise, Journey, Contact CTA, Footer) | Standard root |
| `/projects` | Canonical All-Projects Archive & Filterable Catalog | Any reference to `/work` is strictly treated as an optional alias/redirect requiring approval; `/projects` is canonical. |
| `/projects/:slug` | Deep-Dive Project Case Studies (Four Portfolio Project Candidates — Pending Individual Verification) | Direct slug paths (e.g., `/projects/weathersentinel`) |
| `/about` | Extended Biography, Engineering Mindset & Tooling Setup | Canonical about page |
| `/contact` | Dedicated Collaboration & Inquiries Portal | Canonical contact page |
