# PHASE 03 — COMPLETE SITEMAP & SECTION ARCHITECTURE
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Deliverable:** 02 of 05  
**File Location:** `docs/PHASE_03_COMPLETE_SITEMAP.md`  

---

## 1. Visual Sitemap Tree & Route Hierarchy

```
[PROPOSED CANONICAL DOMAIN: https://abhinashgupta.dev/ — pending user confirmation]
(Domain-independent root-relative routing architecture)
│
├── / (Root Homepage)
│     ├── #preloader (Optional, Skippable & Time-Bounded Asset/Shader Hydration Overlay)
│     ├── #hero (Interactive 3D Studio Sculpture & Value Prop / Accessible Static Fallback)
│     ├── #intro (Professional Positioning & Engineering Mindset)
│     ├── #featured-work (Curated Showcase of Top Builds)
│     ├── #expertise (Categorized Technical Stack & Architecture Matrix [Verified Skills vs Planned Stack])
│     ├── #about-preview (Personal Background & Philosophy Preview)
│     ├── #journey (Education, Foundations & Milestones [Requires User Confirmation])
│     ├── #contact-cta (High-Impact Collaboration Trigger)
│     └── #global-footer (Global Navigation, Design Concept Telemetry & Timezone)
│
├── /projects (All-Projects Archive & Filterable Catalog)
│     ├── /projects/weathersentinel
│     ├── /projects/careertrack
│     ├── /projects/maa-kamakhya-hydraulic
│     └── /projects/jay-hanuman-astro
│
├── /about (Extended Biography & Engineering Mindset)
│     ├── #bio (Career Backstory & Foundations)
│     ├── #philosophy (Core Software Engineering Principles)
│     ├── #education (Academic Credentials & CS Foundations [Requires User Confirmation])
│     └── #setup (Hardware, Editor & Productivity Tooling)
│
├── /contact (Dedicated Collaboration & Inquiries Portal)
│     ├── #form (Interactive Inquiry Form [Planned Backend Service — Phase 06+])
│     ├── #direct-channels (Direct Email Fallback, GitHub, LinkedIn [Unconfirmed URLs Flagged])
│     └── #availability (Configurable Working Status & Location)
│
└── /* (404 Error State & Fallback Navigation)
```

---

## 2. Evaluation & Rationale for Proposed Routes

### 2.1 Route Evaluation Table

| Route | Classification | Primary Purpose & Justification | Status |
| :--- | :--- | :--- | :--- |
| `/` | Primary Root | The core conversion engine. Showcases the 3D hero scene (with static fallback), featured projects, skills matrix, and contact points in a unified, fluid narrative flow. | **Essential** |
| `/projects` | Dedicated Hub | Archive for technical recruiters wishing to inspect the complete catalog of projects with search, category filtering, and accessible view options. | **Essential** |
| `/projects/:slug` | Deep-Dive Case Studies | 4 dedicated pages for in-depth technical analysis: architecture diagrams, schemas, implemented vs planned features, challenges, and trade-offs. | **Essential** |
| `/about` | Long-form Editorial | In-depth narrative on Abhinash's engineering background, academic roots, systems principles, and developer setup. | **Essential** |
| `/contact` | Inquiry Hub | Dedicated standalone inquiry portal with project scoping options, direct email fallback, and timezone clarity. | **Essential** |
| `/resume` | Standalone Page? | **REJECTED.** A dedicated HTML resume creates content duplication with `/about`. Instead, `/resume.pdf` (`[REQUIRES USER CONFIRMATION: PDF asset to be supplied and verified]`) is accessed directly via modal/download. | **Consolidated** |
| `/skills` | Standalone Page? | **REJECTED.** Skills presented in isolation lack technical credibility. Technical competencies are integrated on `/` and `/about` in context with verified projects. | **Consolidated** |
| `/blog` | Standalone Page? | **OMITTED FOR PHASE 01–06.** Adding an empty or unmaintained blog harms professional credibility. Slated for future roadmap post-launch. | **Deferred** |

---

## 3. Homepage Section-by-Section Specification

The homepage (`/`) is structured to guide visitors through a logical progression: from initial visual engagement (3D hero), to qualitative credibility (intro & projects), to technical proof (skills matrix & milestones), culminating in contact conversion.

---

### Section 01: Preloader Overlay
- **Section ID:** `#preloader` (DOM: `id="preloader-overlay"`)
- **Status:** **Optional / Progressive Enhancement** (Non-blocking asset & shader hydration curtain)
- **Architectural Rules & Guardrails:**
  - **Non-Blocking Execution:** Primary DOM content and navigation landmark structure mount beneath the preloader immediately. Shader compilation and texture uploads must *never* block access to page content or navigation.
  - **Time-Bounded Ceiling:** Implements a strict hard timeout of `2.5 seconds` (`MAX_PRELOADER_TIMEOUT = 2500ms`). When the timer expires, the preloader dismisses immediately, regardless of background asset loading progress.
  - **Immediate Skippability:** A persistent skip button `Skip Animation [Esc / Space]` is visible at all times, with keyboard listeners for immediate manual bypass.
  - **Screen Reader Transparency:** The overlay uses `aria-hidden="true"` so assistive technologies read the underlying semantic landmark elements directly without being trapped in the preloader animation.
- **Visual Presentation:** Geometric interlocking `AG` monogram, 0–100% digital counter, and monospaced status indicator (`INITIALIZING_SHADERS` -> `SYSTEM_READY`).
- **Dependencies:** WebGL context check, asset loading listener, GSAP curtain easing.

---

### Section 02: Hero Experience
- **Section ID:** `#hero` (DOM: `id="hero-section"`)
- **Status:** **Essential** (Signature visual anchor)
- **Purpose:** Immediate visual impact establishing Abhinash's focus on bridging solid software engineering with interactive 3D web design.
- **Main Content:**
  - Status Eyebrow: `// FULL STACK & CREATIVE DEVELOPER // 2026 EDITION`.
  - Main Display Headline: `Building Digital Experiences. Beyond the Ordinary.`
  - Lead Subtitle: *"Engineering scalable web applications and choreographing spatial 3D interfaces with precision and clean architecture."*
  - Interactive 3D Spatial Canvas: Floating liquid chrome & optical glass sculpture on `z-index: 0` with text readability scrim (`linear-gradient(to top, rgba(255,255,255,0.95), transparent)`).
- **Static Hero Fallback (Resilience & Accessibility):**
  - If WebGL is unsupported, disabled, context is lost, or the device is detected as low-tier (`tier: 0`), the 3D canvas is replaced with an elegant high-resolution CSS canvas with an ambient radial gradient (`radial-gradient(ellipse at 50% 40%, #EBF3FF 0%, #F8FAFC 100%)`).
  - Supports `prefers-reduced-motion: reduce`: Disables 3D continuous orbit and floating physics, rendering a pristine static framing.
  - Text legibility, call-to-action buttons, and header navigation remain 100% operational with zero cumulative layout shift (CLS).
- **Primary CTA:** Solid navy button `Explore Selected Work` (`#featured-work`), secondary ghost pill `Get in Touch` (`#contact-cta`).
- **Dependencies:** Three.js / R3F Canvas, JetBrains Mono & Space Grotesk fonts, WebGL capability check.

---

### Section 03: Professional Introduction
- **Section ID:** `#intro` (DOM: `id="intro-section"`)
- **Status:** **Essential** (Establishes technical mindset and architectural philosophy)
- **Purpose:** Articulates the engineering philosophy that drives Abhinash's work without unsupported hyperbole.
- **Main Content:**
  - Editorial blockquote: *"Good software is defined by clarity, maintainability, and fluid user interaction. I design systems that balance robust backend logic with thoughtful frontend craft."*
  - Dual narrative columns explaining the synergy between resilient backend logic and fluid user interfaces.
  - Three core pillars: *Architectural Integrity*, *Fluid UX*, and *Reliable Engineering*.
- **Primary CTA:** Ghost link `Read Extended Story ↗` (`/about`).
- **Dependencies:** Inter typography, smooth scroll anchor.

---

### Section 04: Featured Projects Showcase
- **Section ID:** `#featured-work` (DOM: `id="featured-work-section"`)
- **Status:** **Essential** (The core proof-of-work showcase)
- **Purpose:** Validates engineering capability, system design, and UI polish through top flagship projects.
- **Main Content:**
  - Section Header: `// 02. SELECTED WORK` with shortcut link `View All Projects ↗` (`/projects`).
  - Asymmetric project card grid featuring top builds:
    1. *WeatherSentinel* (Atmospheric Dashboard & Telemetry)
    2. *CareerTrack* (Job Application Pipeline & Tracker)
    3. *Maa Kamakhya Hydraulic* (Industrial Machinery & Equipment Platform)
  - Cards display verified implemented features, tech stack badges, and 16:9 minimalist browser mockups.
  - Unconfirmed metrics, live deployment URLs, and client claims are flagged with `[REQUIRES USER CONFIRMATION]`.
- **Primary CTA:** Card-level buttons `Explore Case Study ↗` (`/projects/:slug`).
- **Dependencies:** Opaque white `#FFFFFF` cards, hover micro-interactions, image assets.

---

### Section 05: Technical Stack & Competency Matrix
- **Section ID:** `#expertise` (DOM: `id="expertise-section"`)
- **Status:** **Essential** (Fast scanning for recruiters and engineering managers)
- **Purpose:** Clear, honest summary of technical competencies, explicitly distinguishing planned portfolio implementation tools from personal competencies requiring user confirmation.
- **Content Partitioning (Planned Architecture vs Personal Competencies):**
  - **Portfolio Implementation Stack (Planned for Site Build):** React 18, Vite, Three.js / React Three Fiber (R3F), Tailwind CSS, GSAP, Lenis Smooth Scroll.
  - **Categorized Competency Matrix [REQUIRES USER CONFIRMATION: Verify exact proficiency levels and verified technologies]**:
    - *Frontend & Spatial Web:* HTML5, CSS3/Vanilla CSS, JavaScript (ES6+), React `[REQUIRES USER CONFIRMATION: TypeScript, Three.js, R3F, GSAP]`.
    - *Backend & APIs:* Node.js, Express, REST APIs `[REQUIRES USER CONFIRMATION: JWT Auth, WebSockets]`.
    - *Data & Tooling:* Git, GitHub `[REQUIRES USER CONFIRMATION: PostgreSQL, MySQL, MongoDB, Docker]`.
- **Primary CTA:** `Explore Code Repositories on GitHub ↗` (opens confirmed profile: `https://github.com/Abhinash01`).
- **Dependencies:** JetBrains Mono badge components, hover highlights.

---

### Section 06: About & Professional Story Preview
- **Section ID:** `#about-preview` (DOM: `id="about-preview-section"`)
- **Status:** **Essential** (Humanizes the engineer and provides career context)
- **Purpose:** Gives technical recruiters a high-level biographical background before directing to `/about`.
- **Main Content:**
  - Editorial portrait mockup in studio lighting `[REQUIRES USER CONFIRMATION: Actual photo asset]`.
  - 2-paragraph narrative summary of education, problem-solving passion, and technical growth.
  - Key academic and foundational highlights.
- **Primary CTA:** Primary button `Read Full Biography & Principles ↗` (`/about`).
- **Dependencies:** High-res portrait asset, 1px border cards.

---

### Section 07: Education & Professional Journey
- **Section ID:** `#journey` (DOM: `id="journey-section"`)
- **Status:** **Essential** (Demonstrates foundational Computer Science grounding)
- **Purpose:** Chronological record of academic foundations and engineering growth.
- **Main Content:**
  - Vertical timeline with royal blue accent nodes (`#4169E1`):
    - *Recent Period:* Independent Full Stack & Creative Developer `[REQUIRES USER CONFIRMATION: Exact dates, title, and verified scope]`.
    - *Foundational Period:* Computer Science & Engineering Education `[REQUIRES USER CONFIRMATION: Exact institution, degree/diploma title, and dates]`.
    - *Continuous Exploration:* Systems design, cloud architectures, interactive 3D graphics `[REQUIRES USER CONFIRMATION: Specific certifications or coursework]`.
- **Primary CTA:** Inline trigger `Download Complete Resume (PDF) ↓` (`/resume.pdf` — `[REQUIRES USER CONFIRMATION: Resume PDF asset to be supplied and verified]`).
- **Dependencies:** Timeline hairline styling (`#E5EAF1`).

---

### Section 08: Verified Achievements & Milestones
- **Section ID:** `#achievements` (DOM: `id="achievements-section"`)
- **Status:** **Optional / Conditional** (Included only where verified facts exist)
- **Purpose:** Highlight hackathon wins, academic honors, or notable milestones without fabrication.
- **Main Content:** Verified academic and competitive milestones. If unverified, this section gracefully collapses into Section 07 to avoid empty placeholders.
- **Primary CTA:** None.
- **Dependencies:** User confirmation of specific awards/milestones (`[REQUIRES USER CONFIRMATION]`).

---

### Section 09: Contact & Collaboration CTA
- **Section ID:** `#contact-cta` (DOM: `id="contact-cta"`)
- **Status:** **Essential** (Primary conversion terminal)
- **Purpose:** Eliminates friction for job offers, contract opportunities, and technical discussions.
- **Main Content:**
  - Headline: `Let's Build Something Meaningful.`
  - Accessible contact form: Name, Email, Project Type dropdown, Message. *(Backend service: Formspree / Resend / Serverless handler — planned for Phase 06+, marked as unverified until implemented and tested).*
  - Direct email fallback button: `[REQUIRES USER CONFIRMATION: Primary Email Address] [Copy 📋]` (provides `mailto:` link as fail-safe fallback).
  - Availability indicator: `[Configurable State: Defaults to REQUIRES USER CONFIRMATION: Status & Visibility]`.
  - Response window notice: `[REQUIRES USER CONFIRMATION: Expected turnaround window, e.g., 24–48 hours]`.
- **Primary CTA:** Form submission button `Send Inquiry ↗`.
- **Dependencies:** Form input validation, toast notification system.

---

### Section 10: Global System Footer
- **Section ID:** `#global-footer` (DOM: `id="global-footer"`)
- **Status:** **Essential** (Closing orientation and copyright)
- **Purpose:** Persistent site closure, social links, system telemetry design concept, and back-to-top control.
- **Main Content:**
  - Monospaced copyright notice: `ABHINASH GUPTA © 2026 // ALL RIGHTS RESERVED`.
  - Location & Local time ticker: `[REQUIRES USER CONFIRMATION: City, Country / Lat-Long Coordinates / Timezone]`.
  - Secondary navigation links: `Home` (`/`), `About` (`/about`), `Projects` (`/projects`), `Contact` (`/contact`).
  - Social channel links: GitHub (`https://github.com/Abhinash01`), LinkedIn (`[REQUIRES USER CONFIRMATION: Profile URL]`), Twitter/X (`[REQUIRES USER CONFIRMATION: Profile URL]`).
  - Design Concept Telemetry Bar (Planned UI Concept): Visual footer styling concept showcasing planned tech stack credits (React 18, Three.js, Tailwind CSS, Lenis); Back-to-Top magnetic button (`#btn-scroll-top`). *(Not claimed as running live telemetry prior to implementation).*
- **Primary CTA:** Magnetic button `Back to Top ↑` (`#hero`).
- **Dependencies:** Timezone formatter, smooth scroll trigger.

---

## 4. Secondary Page Content Architecture

### 4.1 `/projects` — All-Projects Archive
- **Header:** Title `Selected Engineering Projects`, subtitle detailing practical full-stack and web applications.
- **Filter Bar:** Multi-tag filter buttons (`All`, `Full-Stack Systems`, `Enterprise & Commercial`, `Dashboards & Utilities`).
  - Implements keyboard accessible tab stops (`role="radiogroup"` or multi-select pills with `aria-pressed`).
  - Supports touch swiping on mobile viewports.
- **Search Bar:** Client-side search input filtering by project title, keywords, and technologies. Live result counts announced via `aria-live="polite"`. Includes clear reset CTA when zero results match.
- **View Toggle Evaluation (Grid vs Dense Table):**
  - *Utility Rationale:* Technical recruiters and engineering directors frequently need to scan projects rapidly by stack, role, year, and repository status without scrolling through extensive 16:9 imagery. Meanwhile, design-oriented reviewers prefer rich card visuals.
  - *Anti-Decoration Enforcement:* To ensure the toggle provides genuine functional value rather than ornamental fluff:
    - Both views present complete semantic structures (`role="feed"` with article cards vs `role="table"` with sortable column headers).
    - Table view exposes direct GitHub repo links and tech badges in dense rows.
    - Preference is persisted locally (`localStorage.getItem('projects_view_preference')`) to respect user choice across sessions.
- **Cards/Rows:** Displays all four portfolio project candidates — pending individual verification, with verified titles, status badges (`[REQUIRES USER CONFIRMATION: Status]`), and links to `/projects/:slug`. (Portfolio project count maintained at four candidates pending user confirmation of additional projects).

### 4.2 `/projects/:slug` — Individual Case Study
- **Breadcrumbs:** `Home (/) > Projects (/projects) > [Project Name]` with Schema.org `BreadcrumbList`.
- **Header:** Title, classification, timeline, role, GitHub link, Live demo link (`[Flagged if unconfirmed]`).
- **Standardized Content Schema:** Detailed in `PHASE_03_PROJECT_CONTENT_SCHEMA.md` (Problem, Solution, Architecture, Implemented Features, Schema, Trade-offs, Future Roadmap).
- **Distinction of Features:** Strictly marks currently implemented features vs future roadmap items.
- **Next/Prev Navigation:** Seamless pagination linking to the next case study.

### 4.3 `/about` — Extended Biography & Mindset
- **Header:** `About Abhinash Gupta // Systems Thinker & Full Stack Developer`.
- **Narrative Bio:** Detailed journey from early programming interest to full-stack architecture.
- **Principles:** Deep-dive into code modularity, type safety, performance as an aesthetic, and spatial computing.
- **Tooling & Setup:** Hardware, IDE configurations, terminal tools, and productivity workflow.
- **Academic Credentials:** Marked with `[REQUIRES USER CONFIRMATION: Specific degrees, dates, and institutions]`.

### 4.4 `/contact` — Dedicated Contact Portal
- **Header:** `Initiate Contact // Let's Build`.
- **Interactive Form:** Extended fields including timeline expectations and project scope. *(Backend service planned for Phase 06+, marked as unverified until implemented and tested).*
- **Direct Channels:** Direct email (`[REQUIRES USER CONFIRMATION: Email Address]`), LinkedIn messaging (`[REQUIRES USER CONFIRMATION: Profile URL]`), GitHub profile link (`https://github.com/Abhinash01`).
- **Direct Email Fallback:** Click-to-copy button and `mailto:` link to guarantee visitors can reach out even if third-party form services fail or are blocked by browser extensions.
- **Timezone Widget:** Live clock indicating local time and response window (`[REQUIRES USER CONFIRMATION: Location & Primary Response Window, e.g. 24–48 hours]`).

---

## 5. Mobile Navigation & Bottom HUD Architecture (< 768px)

```
┌────────────────────────────────────────────────────────────────────────┐
│                              MOBILE VIEW                               │
│                                                                        │
│  [AG] ABHINASH GUPTA                                         [Menu ☰]  │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                        │
│  [ VIEWPORT CONTENT STREAM ]                                           │
│                                                                        │
│  ────────────────────────────────────────────────────────────────────  │
│  FLOATING BOTTOM HUD:               [ Resume ↓ ]      [ Let's Talk ↗ ] │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Mobile Header Bar (Sticky Top)
- **Height & Layout:** Compact `56px` height, `rgba(255, 255, 255, 0.95)` with `1px solid #E5EAF1`.
- **Branding:** Interlocking `AG` monogram linking to `/`.
- **Menu Trigger:** Accessible button `Menu ☰` (`aria-expanded="false"`, `aria-controls="mobile-nav-drawer"`, `aria-label="Open navigation menu"`).

### 5.2 Mobile Menu Drawer (Modal Sheet)
- **Transition:** Slides down smoothly from the top boundary with spring physics (`stiffness: 300, damping: 24`).
- **Focus Management & Trap:**
  - Upon opening, focus is immediately moved to the first interactive menu link (`Work`).
  - Focus is trapped within the drawer while open (`Tab` cycles through drawer links; `Shift+Tab` cycles backwards).
  - Pressing `Escape` closes the drawer immediately.
  - Upon closing, keyboard focus is restored directly to the `Menu ☰` trigger button.
- **Touch Targets:** Large navigation targets (`Work`, `About`, `Projects`, `Contact`) with `>= 48px` minimum height and `>= 16px` padding.

### 5.3 Floating Bottom HUD Bar
- **Safe-Area Inset Handling:** Docked with dynamic safe-area calculation:
  `bottom: calc(16px + env(safe-area-inset-bottom, 0px))`
  Ensures no collision with the iOS home indicator bar or Android system navigation bar.
- **Scroll-Aware Auto-Hide & Reveal:**
  - **Downward Scroll:** When the user scrolls down actively (delta > 10px), the HUD translates downwards off-screen (`transform: translateY(calc(100% + 24px)); transition: transform 0.25s ease-in-out;`) to maximize unhindered reading area.
  - **Upward Scroll & Rest:** As soon as upward scroll is detected or scroll velocity hits zero at the bottom of the page, the HUD immediately translates back into view (`transform: translateY(0);`).
- **Collision Prevention Margin:**
  - To prevent the HUD from occluding interactive form submit buttons, direct contact copy pills, or footer links, all page containers include a mandatory bottom clearance buffer (`padding-bottom: 96px` / `pb-24`).
- **Action Triggers:**
  - `Resume ↓` (`/resume.pdf` — `[REQUIRES USER CONFIRMATION: PDF asset]`).
  - `Let's Talk ↗` (Smooth-scrolls to `#contact-cta` on `/` or routes to `/contact`).

---

## 6. Performance, Accessibility & Resilience Architecture

### 6.1 Progressive Enhancement & WebGL Decoupling
1. **Decoupled Architecture:** The Three.js WebGL canvas operates on an isolated background layer (`z-index: 0`). The semantic HTML DOM layer mounts on `z-index: 10`.
2. **Zero-Block Navigation:** If WebGL fails to initialize, crashes, or is blocked by client security policies:
   - The site remains 100% readable and navigable.
   - The hero canvas gracefully switches to the high-contrast static CSS studio gradient.
   - No broken canvas borders or error dialogues interrupt user navigation.

### 6.2 Preloader Governance
- Maximum time limit of `2.5s` enforces fast Time to First Meaningful Content.
- `Skip Animation [Esc / Space]` button provides instant manual dismissal.
- The preloader is completely omitted on repeated visits within the same session (`sessionStorage.getItem('preloader_dismissed') === 'true'`).

### 6.3 Reduced-Motion Compliance
- Evaluates `prefers-reduced-motion: reduce`:
  - Three.js camera animations and float mechanics are disabled; camera remains static.
  - Page-level scroll animations and curtain transforms are replaced with instant cut transitions (`duration: 0.01s`).
  - Floating bottom HUD disables spring transitions, using direct opacity toggles instead.

### 6.4 Keyboard & Screen Reader Standard (WCAG 2.1 AA)
- High-contrast keyboard focus indicators (`outline: 2px solid #4169E1; outline-offset: 2px`) on all focusable links, buttons, and form inputs.
- First focusable element on every page is `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>`.
- Single `<h1>` per page with strictly ordered heading hierarchy (`h1` -> `h2` -> `h3`).
- Dynamic route changes announce page titles via an off-screen `aria-live="polite"` region.

### 6.5 Configurable Canonical Domain Architecture
- Default routing relies on environment-agnostic root-relative paths (`/`, `/projects`, `/about`, `/contact`).
- Candidate canonical domain `https://abhinashgupta.dev` is configured via environment variable (`VITE_CANONICAL_DOMAIN`), enabling instant switching upon verified domain purchase without touching template logic or sitemap links.
