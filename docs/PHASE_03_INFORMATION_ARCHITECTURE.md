# PHASE 03 — GLOBAL INFORMATION ARCHITECTURE SPECIFICATION
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Status:** Approved Specification  
**Classification:** Structural Architecture & Navigation Playbook  

---

## 1. Architectural Vision & Core Principles

The Information Architecture (IA) for the **Abhinash Gupta** portfolio organizes complex full-stack engineering artifacts, 3D spatial experiences, and career credentials into an intuitive, zero-friction digital flagship.

### 1.1 Guiding Architectural Principles
1. **The Three-Click Maximum:** Any key technical credential, live demo, verified GitHub repository, or contact point must be discoverable in **two clicks or fewer** from any entry point.
2. **Dual-Audience Optimization:** 
   - *For Recruiters & Hiring Managers:* Instant scannability, prominent technical skill matrices, one-click resume access, and verified project outcomes.
   - *For Directors of Engineering & Technical Peers:* Direct access to deep-dive case studies, architecture diagrams, database schemas, code trade-offs, and GitHub repositories.
3. **Radical Structural Lean-ness:** Avoid creating unnecessary stub routes (e.g., separate pages for "Skills" or "Achievements") that disperse content and increase navigation overhead. Essential information is consolidated into high-impact, cohesive routes.
4. **Resilient Decoupling:** The 3D WebGL hero spatial environment serves as an atmospheric visual enhancement docked beneath the DOM layer, completely decoupled from page navigation. Navigation remains 100% accessible, responsive, and functional even if WebGL is disabled or unsupported.

---

## 2. Global Navigation Architecture

The global navigation system provides persistent spatial orientation across all screen sizes while preserving the minimalist luxury aesthetic established in Phase 01.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              DESKTOP VIEW                              │
│                                                                        │
│  [AG] ABHINASH GUPTA       Work   About   Stack   Contact              │
│  Creative Full Stack       ───────────────────────        [Talk ↗]     │
│                            • Live Beacon: Available       Resume ↗     │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Desktop Navigation
- **Form Factor:** Floating glass pill docked `24px` below the top viewport boundary, centered horizontally with `max-width: 1080px`.
- **Materiality:** `rgba(255, 255, 255, 0.85)` surface with `backdrop-filter: blur(16px)` and a subtle `1px solid #E5EAF1` border. *(Confirmed: The ONLY element utilizing frosted glass on the site).*
- **Component Anatomy (Left to Right):**
  1. *Brand Identity Anchor:* Interlocking geometric `AG` monogram and wordmark `ABHINASH GUPTA`, linking directly to `/`.
  2. *Primary Nav Links:* Four high-priority targets:
     - `Work` (Links to `/projects` or smooth-scrolls to `#featured-work` when on homepage).
     - `About` (Links to `/about`).
     - `Expertise` (Smooth-scrolls to `#expertise` on homepage, or deep-links `/about#expertise`).
     - `Contact` (Links to `/contact` or smooth-scrolls to `#contact`).
  3. *Recruiter Fast-Lane Controls:*
     - *Availability Beacon:* Small pulsing green dot (`#059669`) with label `Available for Work`.
     - *Resume Trigger:* Direct link `Resume ↗` that opens the verified PDF in a new tab with `rel="noopener noreferrer"`, avoiding unnecessary intermediate pages.
     - *Primary Action CTA:* Solid navy button `Let's Talk` (`#101827`, hover: `#4169E1`) directing to `/contact`.

### 2.2 Active Route & Scroll Position Indicators
- **Active Page Link:** Decorated with a subtle royal blue indicator node (`4px` diameter `#4169E1`) positioned directly beneath the active label.
- **Scroll Spy (Homepage):** When scrolling through the single-page flow on `/`, the navigation bar dynamically activates the link corresponding to the section currently crossing the viewport threshold (`IntersectionObserver` at 40% vertical offset).

### 2.3 Evaluation of Dropdowns
- **Architectural Decision:** **No complex multi-level dropdowns are permitted.**
- **Rationale:** With only 5 curated project case studies and a tightly focused sitemap, dropdown menus introduce unnecessary mobile touch friction, keyboard trap risks, and hover-delay lag. Direct links provide superior accessibility and faster discovery.

### 2.4 Mobile Navigation Architecture (< 768px)
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
- **Top Bar (Sticky):** Clean, compact `56px` height. Displays `AG` monogram left and an accessible `Menu ☰` button right (`aria-expanded="false"`, `aria-controls="mobile-nav-drawer"`).
- **Slide-Down Drawer:** Full-width modal sheet sliding down with spring physics (`stiffness: 300, damping: 24`). Features large 24px navigation targets spaced at `>= 48px` touch heights.
- **Floating Bottom HUD Bar:** Positioned `16px` above the iOS home indicator (`env(safe-area-inset-bottom)`). Provides two instantaneous thumb-friendly actions:
  - `Resume ↓` (Direct PDF download/view).
  - `Let's Talk ↗` (Primary contact trigger).

### 2.5 Breadcrumbs for Deep-Linked Case Studies (`/projects/:slug`)
To ensure visitors arriving directly from external links (e.g., GitHub READMEs or recruiter emails) never lose spatial context:
- Located immediately above the case study hero header:
  `Home (/) > Projects (/projects) > WeatherSentinel`
- Rendered in `JetBrains Mono`, 12px, `#64748B`, with active project name highlighted in `#111827`.
- Implements Schema.org `BreadcrumbList` structured data.

### 2.6 Global Footer Navigation
The footer (`#global-footer` on light-mode canvas with inverted `#101827` base) provides exhaustive secondary orientation:
- **Column 1 (Identity):** Wordmark, title, current location (`New Delhi, India // 28.61° N, 77.20° E`), live local time (`Asia/Kolkata`).
- **Column 2 (Navigation):** Direct links to `Home`, `About`, `All Projects`, `Contact`, `Resume`.
- **Column 3 (Projects):** Direct shortcuts to all 5 verified project case studies.
- **Column 4 (Social & Verification):** Verified links to GitHub, LinkedIn, Twitter/X, and Email.
- **System Telemetry Bar:** Built with React 18, Three.js, Tailwind CSS, Lenis; Back-to-Top magnetic button (`#btn-scroll-top`).

### 2.7 404 & Fallback Navigation
- **Dedicated Route:** `/*` renders an accessible, light-mode `404 Not Found` state.
- **Visuals:** High-key minimal studio layout, Space Grotesk headline `404 // ROUTE_NOT_FOUND`, and explanatory copy.
- **Recovery Actions:**
  - Primary button: `Return to Homepage (/)`.
  - Secondary button: `Browse Projects (/projects)`.
  - Monospaced diagnostic trace confirming requested URL.

---

## 3. URL Architecture & Routing Strategy

### 3.1 Core Route Catalog

| Route Path | Primary Page Title | Primary Intent & Content | Canonical URL |
| :--- | :--- | :--- | :--- |
| `/` | `Abhinash Gupta — Creative Full Stack Developer` | Flagship single-page overview with interactive 3D hero, featured builds, skills matrix, bio preview, and contact. | `https://abhinashgupta.dev/` |
| `/projects` | `Selected Projects Archive — Abhinash Gupta` | Filterable catalog of all engineering builds with category toggles and search. | `https://abhinashgupta.dev/projects` |
| `/projects/:slug` | `[Project Name] — Case Study & Architecture` | Deep-dive technical breakdown with 12-point engineering schema and architecture flow. | `https://abhinashgupta.dev/projects/:slug` |
| `/about` | `About & Engineering Philosophy — Abhinash Gupta` | Complete biography, technical mindset, academic background, career timeline, hardware/dev setup. | `https://abhinashgupta.dev/about` |
| `/contact` | `Contact & Collaboration — Abhinash Gupta` | Dedicated inquiry portal with client form, direct email copy button, and PGP key. | `https://abhinashgupta.dev/contact` |

### 3.2 Canonical URL & Slug Conventions
- **Lowercase Only:** All URLs are strictly lowercase alphanumeric with hyphens (`kebab-case`).
- **Trailing Slash Policy:** **Strict No Trailing Slash** (e.g., `/projects`, never `/projects/`). Consistent server-side 301 redirection normalizes all trailing slash requests.
- **Verified Project Slugs:**
  1. `/projects/weathersentinel`
  2. `/projects/careertrack`
  3. `/projects/hospital-appointment-system`
  4. `/projects/maa-kamakhya-hydraulic`
  5. `/projects/jay-hanuman-astro`

### 3.3 Evaluation of Candidate Standalone Routes
- **Should "Resume" be a standalone route (`/resume`)?**
  - *Decision:* **No.** A dedicated HTML resume page creates duplicate content issues with `/about` and often looks like an unstyled document. Instead, `resume.pdf` is hosted at `/resume.pdf` and opened directly via a modal viewer or new tab, ensuring recruiters get the exact printable document they require.
- **Should "Skills / Stack" be a standalone route (`/skills`)?**
  - *Decision:* **No.** Technical recruiters want to see skills *in context* with the projects that utilize them. The Technical Expertise Matrix is prominently featured on both the Homepage (`/#expertise`) and the About page (`/about#expertise`).
- **Should "Experience / Achievements" be a standalone route (`/experience`)?**
  - *Decision:* **No.** Fragmenting career history into tiny pages creates navigation friction. Academic foundations and professional chronology belong together on `/about#journey` and the homepage timeline.

---

## 4. Content Relationship Model (CRM)

To ensure that project metadata, skill tags, and personal profiles remain 100% consistent across multiple views without duplication, the content architecture is structured as a normalized relational schema.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CENTRALIZED CONTENT ENTITY                      │
│                                                                        │
│   ┌──────────────────┐               ┌──────────────────────────────┐  │
│   │  PROFILE ENTITY  │               │      PROJECT ENTITY (5)      │  │
│   │  • Bio           │               │  • Title, Slug, Classification│  │
│   │  • Coordinates   │               │  • Implemented vs Roadmap    │  │
│   │  • Availability  │               │  • Architecture Diagram      │  │
│   └────────┬─────────┘               │  • Repos & Demos             │  │
│            │                         └──────────────┬───────────────┘  │
│            ▼                                        ▼                  │
│   ┌──────────────────┐               ┌──────────────────────────────┐  │
│   │  SKILLS ENTITY   │◄──────────────┤      TECH STACK JUNCTION     │  │
│   │  • Category      │               │  • React, TS, Node, Postgres │  │
│   │  • Proficiency   │               └──────────────────────────────┘  │
│   └──────────────────┘                                                 │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Cross-Page Content Distribution Matrix

| Content Entity | Homepage (`/`) | Projects Archive (`/projects`) | Project Detail (`/projects/:slug`) | About (`/about`) | Contact (`/contact`) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Personal Bio & Positioning** | Summary Headline | — | Author Attribution | Full Biography | Contact Context |
| **Featured Projects** | Top Flagships (Cards) | All 5 Projects | Cross-links (Next/Prev) | Mentioned in Story | — |
| **Technical Stack Matrix** | High-level Categories | Filterable Tag Cloud | Specific Stack Employed | Complete Tooling List| Relevant Project Type|
| **Architecture Blueprints**| — | — | Full Visual Schematic | Systems Philosophy | — |
| **Career Timeline** | Key Milestones | — | Project Timeline | Complete Chronology | — |
| **Contact Channels** | Quick Form + Email | Footer Link | Inquiry Trigger | Direct Reach-out | Comprehensive Form |

### 4.2 Centralized Content Configuration Concept (For Future Phase 06)
In Phase 06, all project data, biographies, and taxonomy tags will be stored in a typed TypeScript configuration module (`src/data/portfolioData.ts`), ensuring a **Single Source of Truth (SSOT)**:
- Editing a project's technology stack or GitHub URL in one file automatically updates the Homepage card, the Archive grid, and the Case Study page simultaneously.

---

## 5. SEO & Discoverability Architecture

### 5.1 Page-Level Metadata Specifications
- **Dynamic Title Pattern:**  
  `[Page / Project Title] — Abhinash Gupta | Creative Full Stack Developer`
- **Meta Description Standard:**  
  140–160 character concise summaries focused on verified skills, real-world builds, and engineering capabilities.
- **OpenGraph & Twitter Image Cards:**  
  Standardized `1200x630` aspect ratio graphics showcasing the high-key studio aesthetic, bold typography, and verified project titles.

### 5.2 Structured Data (Schema.org) Taxonomy
- **Root (`/`):** Implements `Person` schema with `knowsAbout`, `jobTitle`, `alumniOf`, and `sameAs` links to verified GitHub and LinkedIn profiles.
- **Project Detail (`/projects/:slug`):** Implements `SoftwareSourceCode` and `CreativeWork` schemas with `programmingLanguage`, `codeRepository`, and `runtimePlatform`.
- **Breadcrumbs:** Implements `BreadcrumbList` on all secondary pages to provide Google search result enhancements.

---

## 6. Accessibility & Navigation Governance (WCAG 2.1 AA)

1. **Semantic Landmark Roles:** Every page is structured with standard HTML5 landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, and `<footer>`.
2. **Accessible Skip Link:** The very first focusable DOM element is a high-contrast skip button:
   `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to primary content</a>`.
3. **Keyboard Focus Hierarchy:**
   - Modals and mobile drawers trap keyboard focus while active and dismiss via `Escape` key, restoring focus to the triggering element.
   - All interactive controls maintain visible, high-contrast focus rings (`outline: 2px solid #4169E1; outline-offset: 2px`).
4. **Accessible Route Announcements:** On client-side route transitions, an `aria-live="polite"` region announces the new page title to assistive screen readers (`e.g., "Navigated to Projects Archive"`).
