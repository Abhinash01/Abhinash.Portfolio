# PHASE 03 — COMPLETE SITEMAP & SECTION ARCHITECTURE
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Deliverable:** 02 of 05  
**File Location:** `docs/PHASE_03_COMPLETE_SITEMAP.md`  

---

## 1. Visual Sitemap Tree & Route Hierarchy

```
[PROPOSED CANONICAL DOMAIN: https://abhinashgupta.dev/ — pending confirmation]
(Domain-independent root-relative structure)
│
├── / (Root Homepage)
│     ├── #preloader (Asset & Shader Hydration Curtain)
│     ├── #hero (Cinematic 3D Studio Sculpture & Value Prop)
│     ├── #intro (Professional Positioning & Engineering Mindset)
│     ├── #featured-work (Curated Showcase of Top Builds)
│     ├── #expertise (3-Column Technical Stack & Architecture Matrix)
│     ├── #about-preview (Personal Background & Design Philosophy)
│     ├── #journey (Education, Foundations & Milestones)
│     ├── #contact-cta (High-Impact Collaboration Trigger)
│     └── #global-footer (Global Navigation, Telemetry Concept & Timezone)
│
├── /projects (All-Projects Archive & Filterable Catalog)
│     ├── /projects/weathersentinel
│     ├── /projects/careertrack
│     ├── /projects/hospital-appointment-system
│     ├── /projects/maa-kamakhya-hydraulic
│     └── /projects/jay-hanuman-astro
│
├── /about (Extended Biography & Engineering Mindset)
│     ├── #bio (Detailed Career Backstory)
│     ├── #philosophy (Core Software Engineering Principles)
│     ├── #education (Academic Credentials & CS Foundations)
│     └── #setup (Hardware, Editor & Productivity Tooling)
│
├── /contact (Dedicated Collaboration & Inquiries Portal)
│     ├── #form (Interactive Inquiry Form [Planned Backend Service])
│     ├── #direct-channels (Direct Email, GitHub, LinkedIn [Unconfirmed URLs Flagged])
│     └── #availability (Configurable Working Status & Location)
│
└── /* (404 Error State & Fallback Navigation)
```

---

## 2. Evaluation & Rationale for Proposed Routes

### 2.1 Route Evaluation Table

| Route | Classification | Primary Purpose & Justification | Status |
| :--- | :--- | :--- | :--- |
| `/` | Primary Root | The core conversion engine. Showcases the 3D hero scene, top projects, skills matrix, and contact points in a unified, fluid narrative flow. | **Essential** |
| `/projects` | Dedicated Hub | Archive for technical recruiters wishing to inspect the complete catalog of projects with search and category filtering. | **Essential** |
| `/projects/:slug` | Deep-Dive Case Studies | 5 dedicated pages for in-depth technical analysis: architecture diagrams, schemas, implemented features, challenges, and trade-offs. | **Essential** |
| `/about` | Long-form Editorial | Deep narrative on Abhinash's engineering background, academic roots, systems principles, and developer setup. | **Essential** |
| `/contact` | Inquiry Hub | Dedicated standalone inquiry portal with project scoping options, direct email, and timezone clarity. | **Essential** |
| `/resume` | Standalone Page? | **REJECTED.** A dedicated HTML resume creates content duplication with `/about`. Instead, `/resume.pdf` (`[REQUIRES USER CONFIRMATION: PDF asset to be supplied]`) is accessed directly via modal/download. | **Consolidated** |
| `/skills` | Standalone Page? | **REJECTED.** Skills presented in isolation lack technical credibility. Technical expertise is integrated on `/` and `/about`. | **Consolidated** |
| `/blog` | Standalone Page? | **OMITTED FOR PHASE 01–06.** Adding an empty or half-filled blog harms professional credibility. Slated for future roadmap post-launch. | **Deferred** |

---

## 3. Homepage Section-by-Section Specification

The homepage (`/`) is structured to guide visitors through a logical progression: from initial emotional immersion (3D hero), to qualitative credibility (intro & projects), to technical proof (skills matrix & milestones), culminating in contact conversion.

---

### Section 01: Preloader Overlay
- **Section ID:** `#preloader` (DOM: `id="preloader-overlay"`)
- **Status:** **Essential** (Hydration gate for 3D shaders, fonts, and assets)
- **Purpose:** Compiles WebGL shaders, validates font assets, and provides a clean brand curtain-raiser.
- **Main Content:** Geometric interlocking `AG` monogram, real-time 0–100% digital counter, and monospaced status ticker (`INITIALIZING_SHADERS` -> `SYSTEM_READY`).
- **Primary CTA:** Auto-dismisses upon 100% asset hydration or manual click on `Skip Animation [Space]`.
- **Dependencies:** WebGL context check, asset loading listener, GSAP curtain easing.

---

### Section 02: Hero Experience
- **Section ID:** `#hero` (DOM: `id="hero-section"`)
- **Status:** **Essential** (Signature visual anchor)
- **Purpose:** Immediate visual impact establishing Abhinash as a serious creative developer who bridges systems engineering with cinematic 3D interaction.
- **Main Content:**
  - Status Eyebrow: `// CREATIVE FULL STACK DEVELOPER // 2026 EDITION`.
  - Main Display Headline: `Building Digital Experiences. Beyond the Ordinary.`
  - Lead Subtitle: *"Engineering scalable web architectures and choreographing spatial 3D interfaces with uncompromising craftsmanship."*
  - Interactive 3D Spatial Canvas: Floating liquid chrome & optical glass sculpture on `z-index: 0` with text readability scrim.
- **Primary CTA:** Solid navy button `Explore Selected Work` (`#featured-work`), secondary ghost pill `Get in Touch` (`#contact`).
- **Dependencies:** Three.js / R3F Canvas, JetBrains Mono & Space Grotesk fonts, WebGL fallback check.

---

### Section 03: Professional Introduction
- **Section ID:** `#intro` (DOM: `id="intro-section"`)
- **Status:** **Essential** (Establishes qualitative voice and architectural philosophy)
- **Purpose:** Articulates the engineering philosophy that drives Abhinash's work.
- **Main Content:**
  - Editorial blockquote: *"Most developer portfolios are built to show you code. I build digital systems that make you feel the craft."*
  - Dual narrative columns explaining the synergy between resilient backend logic and fluid frontend interfaces.
  - Three core pillars: *Architectural Integrity*, *Fluid Spatial UX*, and *Zero-Compromise Reliability*.
- **Primary CTA:** Ghost link `Read Extended Story ↗` (`/about`).
- **Dependencies:** Inter typography, smooth scroll anchor.

---

### Section 04: Featured Projects Showcase
- **Section ID:** `#featured-work` (DOM: `id="featured-work-section"`)
- **Status:** **Essential** (The core proof-of-work showcase)
- **Purpose:** Validates engineering capability, system design, and UI polish through top flagship projects.
- **Main Content:**
  - Section Header: `// 02. SELECTED WORK` with shortcut link `View All Projects ↗` (`/projects`).
  - Asymmetric project card grid featuring 3 top builds:
    1. *WeatherSentinel* (Atmospheric Dashboard & Telemetry)
    2. *CareerTrack* (Job Application Pipeline & Tracker)
    3. *Hospital Appointment Management System* (Clinical Scheduling Portal)
  - Cards display verified implemented features, tech stack badges, and 16:9 minimalist browser mockups.
- **Primary CTA:** Card-level buttons `Explore Case Study ↗` (`/projects/:slug`).
- **Dependencies:** Opaque white `#FFFFFF` cards, hover micro-interactions, image assets.

---

### Section 05: Technical Expertise Matrix
- **Section ID:** `#expertise` (DOM: `id="expertise-section"`)
- **Status:** **Essential** (Fast scanning for recruiters and engineering managers)
- **Purpose:** Categorized, transparent summary of technical competencies.
- **Main Content:**
  - 3-column architectural matrix:
    - *Column 1: Frontend & 3D Web* (React, TypeScript, Three.js, R3F, Tailwind CSS, GSAP).
    - *Column 2: Backend & Systems* (Node.js, Express, REST APIs, JWT Auth, WebSockets).
    - *Column 3: Architecture & Data* (PostgreSQL, MySQL, MongoDB, Git, Vite, System Design).
- **Primary CTA:** `Explore Code Repositories on GitHub ↗` (opens `https://github.com/Abhinash01`).
- **Dependencies:** JetBrains Mono badge components, hover highlights.

---

### Section 06: About & Professional Story Preview
- **Section ID:** `#about-preview` (DOM: `id="about-preview-section"`)
- **Status:** **Essential** (Humanizes the engineer and provides career context)
- **Purpose:** Gives technical recruiters a high-level biographical background before directing to `/about`.
- **Main Content:**
  - Editorial portrait mockup in studio lighting.
  - 2-paragraph narrative summary of education, problem-solving passion, and continuous mastery.
  - Key credentials summary.
- **Primary CTA:** Primary button `Read Full Biography & Principles ↗` (`/about`).
- **Dependencies:** High-res portrait asset, 1px border cards.

---

### Section 07: Education & Professional Journey
- **Section ID:** `#journey` (DOM: `id="journey-section"`)
- **Status:** **Essential** (Demonstrates foundational Computer Science grounding)
- **Purpose:** Chronological record of academic foundations and engineering growth.
- **Main Content:**
  - Vertical timeline with royal blue accent nodes (`#4169E1`):
    - *2024–Present:* Independent Full Stack & Creative Developer.
    - *2022–2024:* Computer Science & Engineering Foundations.
    - *Continuous Mastery:* Systems design, cloud architectures, advanced spatial WebGL.
- **Primary CTA:** Inline trigger `Download Complete Resume (PDF) ↓` (`/resume.pdf` — `[REQUIRES USER CONFIRMATION: PDF asset to be supplied]`).
- **Dependencies:** Timeline hairline styling (`#E5EAF1`).

---

### Section 08: Verified Achievements & Milestones
- **Section ID:** `#achievements` (DOM: `id="achievements-section"`)
- **Status:** **Optional / Conditional** (Included only where verified facts exist)
- **Purpose:** Highlight hackathon wins, academic honors, or notable milestones without fabrication.
- **Main Content:** Verified academic and competitive milestones. If unverified, this section gracefully collapses into Section 07 to avoid empty placeholders.
- **Primary CTA:** None.
- **Dependencies:** User confirmation of specific awards/milestones.

---

### Section 09: Contact & Collaboration CTA
- **Section ID:** `#contact-cta` (DOM: `id="contact-section"`)
- **Status:** **Essential** (Primary conversion terminal)
- **Purpose:** Eliminates friction for job offers, freelance contracts, and technical discussions.
- **Main Content:**
  - Headline: `Let's Build Something Extraordinary.`
  - Accessible contact form: Name, Email, Project Type dropdown, Message. *(Backend service: Formspree / Resend — planned for Phase 06+).*
  - Direct email pill button: `[REQUIRES USER CONFIRMATION: Primary Email Address] [Copy 📋]`.
  - Availability indicator: `[Configurable State: Defaults to REQUIRES USER CONFIRMATION: Status & Visibility]`.
- **Primary CTA:** Form submission button `Transmit Inquiry ↗`.
- **Dependencies:** Form input validation, toast notification system.

---

### Section 10: Global System Footer
- **Section ID:** `#footer` (DOM: `id="global-footer"`)
- **Status:** **Essential** (Closing orientation and copyright)
- **Purpose:** Persistent site closure, social links, system telemetry, and back-to-top control.
- **Main Content:**
  - Monospaced copyright notice: `ABHINASH GUPTA © 2026 // ALL RIGHTS RESERVED`.
  - Location & Local time ticker: `[REQUIRES USER CONFIRMATION: Location, Timezone & Coordinates]`.
  - Secondary navigation links: `Home`, `About`, `Projects`, `Contact`.
  - Social channel links: GitHub (`https://github.com/Abhinash01`), LinkedIn / X (`[REQUIRES USER CONFIRMATION: Profile URLs]`).
  - Planned Design Concept Telemetry Bar: Visual styling concept showcasing planned tech stack credits (React 18, Three.js, Tailwind CSS, Lenis); Back-to-Top magnetic button (`#btn-scroll-top`). *(Not claimed as running live telemetry prior to implementation).*
- **Primary CTA:** Magnetic button `Back to Top ↑` (`#hero`).
- **Dependencies:** Timezone formatter, smooth scroll trigger.

---

## 4. Secondary Page Content Architecture

### 4.1 `/projects` — All-Projects Archive
- **Header:** Title `Selected Engineering Projects`, subtitle detailing practical full-stack applications.
- **Filter Bar:** Multi-tag filter buttons (`All`, `Full-Stack Systems`, `Enterprise & Commercial`, `Dashboards & Utilities`).
- **Search Bar:** Client-side search input filtering by project title, keywords, and technologies.
- **View Toggle:** Grid view (default, 16:9 cards) / Dense table view (for fast recruiter scanning).
- **Cards/Rows:** Displays all 5 verified projects with status badges, verified features, and links to `/projects/:slug`.

### 4.2 `/projects/:slug` — Individual Case Study
- **Breadcrumbs:** `Home > Projects > [Project Name]`.
- **Header:** Title, classification, timeline, role, GitHub link, Live demo link.
- **12-Point Content Schema:** Detailed in `PHASE_03_PROJECT_CONTENT_SCHEMA.md`.
- **Next/Prev Navigation:** Seamless pagination linking to the next case study.

### 4.3 `/about` — Extended Biography & Mindset
- **Header:** `About Abhinash Gupta // Systems Thinker & Digital Artisan`.
- **Narrative Bio:** Detailed journey from early programming interest to full-stack architecture.
- **Principles:** Deep-dive into code modularity, type safety, performance as an aesthetic, and spatial computing.
- **Tooling & Setup:** Hardware, IDE configurations, terminal tools, and productivity workflow.

### 4.4 `/contact` — Dedicated Contact Portal
- **Header:** `Initiate Contact // Let's Build`.
- **Interactive Form:** Extended fields including timeline expectations and budget tiers (for consulting). *(Backend service planned for Phase 06+).*
- **Direct Channels:** Direct email (`[REQUIRES USER CONFIRMATION]`), LinkedIn messaging (`[REQUIRES USER CONFIRMATION]`), GitHub profile link (`https://github.com/Abhinash01`).
- **Timezone Widget:** Live clock indicating local time and response window (`[REQUIRES USER CONFIRMATION: Location & Primary Response Window]`).
