# PHASE 03 — GLOBAL INFORMATION ARCHITECTURE SPECIFICATION
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Status:** Approved Specification (Accuracy Corrections Applied)  
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
4. **Domain Independence:** The architecture is designed around root-relative paths (`/`, `/projects`, `/about`, `/contact`), allowing seamless deployment to any verified canonical domain or staging environment without routing coupling.
5. **Resilient Decoupling:** The 3D WebGL hero spatial environment serves as an atmospheric visual enhancement docked beneath the DOM layer, completely decoupled from page navigation. Navigation remains 100% accessible, responsive, and functional even if WebGL is disabled or unsupported.

---

## 2. Global Navigation Architecture

The global navigation system provides persistent spatial orientation across all screen sizes while preserving the minimalist luxury aesthetic established in Phase 01.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              DESKTOP VIEW                              │
│                                                                        │
│  [AG] ABHINASH GUPTA       Work   About   Stack   Contact              │
│  Creative Full Stack       ───────────────────────        [Talk ↗]     │
│                            • Status: [Configurable]       Resume ↗     │
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
     - `Contact` (Links to `/contact` or smooth-scrolls to `#contact-cta`).
  3. *Recruiter Fast-Lane Controls:*
     - *Availability Beacon (Configurable):* Dynamic status indicator (e.g., pulsing green dot `#059669` when active). Content state is strictly configurable via data settings; defaults to `[REQUIRES USER CONFIRMATION: Status & Visibility]` (can be configured to "Available for Select Opportunities", "Consulting Only", or toggled off).
     - *Resume Trigger:* Direct link `Resume ↗` pointing to `/resume.pdf` (`[REQUIRES USER CONFIRMATION: Resume PDF asset to be supplied and verified]`), opening in a browser viewer or download modal.
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
- **Floating Bottom HUD Bar:** Positioned safely above the iOS home indicator:
  - **Safe-Area Inset Handling:** Styled with `bottom: calc(16px + env(safe-area-inset-bottom, 0px))` to eliminate collision with OS navigation bars.
  - **Scroll-Aware Auto-Hide Behavior:** To be formally specified in Phase 04 wireframes; translates downward (`translateY(120%)`) during rapid downward scrolling to maximize viewport reading room, and immediately re-appears (`translateY(0%)`) on upward scrolling or when reaching the page bottom.
  - **Collision Prevention:** Adds a bottom margin buffer (`mb-24`) to page footers and form submit buttons so the floating HUD never occludes interactive form elements, submit buttons, or footer links.
  - **Action Triggers:** Houses `Resume ↓` (`[REQUIRES USER CONFIRMATION: PDF asset]`) and `Let's Talk ↗`.

### 2.5 Breadcrumbs for Deep-Linked Case Studies (`/projects/:slug`)
To ensure visitors arriving directly from external links (e.g., GitHub READMEs or recruiter emails) never lose spatial context:
- Located immediately above the case study hero header:
  `Home (/) > Projects (/projects) > [Project Name]`
- Rendered in `JetBrains Mono`, 12px, `#64748B`, with active project name highlighted in `#111827`.
- Implements Schema.org `BreadcrumbList` structured data.

### 2.6 Global Footer Navigation
The footer (`#global-footer` on light-mode canvas with inverted `#101827` base) provides exhaustive secondary orientation:
- **Column 1 (Identity):** Wordmark, title, location: `[REQUIRES USER CONFIRMATION: Location & Coordinates]`, local time ticker: `[REQUIRES USER CONFIRMATION: Timezone e.g. IST]`.
- **Column 2 (Navigation):** Direct links to `Home`, `About`, `All Projects`, `Contact`, `Resume`.
- **Column 3 (Projects):** Direct shortcuts to all 5 project case studies.
- **Column 4 (Social Channels):** Links to GitHub (`https://github.com/Abhinash01`), LinkedIn (`[REQUIRES USER CONFIRMATION: Profile URL]`), Twitter/X (`[REQUIRES USER CONFIRMATION: Profile URL]`), and Email (`[REQUIRES USER CONFIRMATION: Email Address]`). *(Note: Only confirmed links are active; placeholders require user verification).*
- **Design Concept Telemetry Bar (Planned UI Concept):** Visual footer styling concept showcasing planned tech stack credits (React 18, Three.js, Tailwind CSS, Lenis); Back-to-Top magnetic button (`#btn-scroll-top`). *(Not claimed as running live telemetry prior to implementation).*

### 2.7 404 & Fallback Navigation
- **Dedicated Route:** `/*` renders an accessible, light-mode `404 Not Found` state.
- **Visuals:** High-key minimal studio layout, Space Grotesk headline `404 // ROUTE_NOT_FOUND`, and explanatory copy.
- **Recovery Actions:**
  - Primary button: `Return to Homepage (/)`.
  - Secondary button: `Browse Projects (/projects)`.
  - Diagnostic trace confirming requested route.

---

## 3. URL Architecture & Routing Strategy

### 3.1 Core Route Catalog
All paths are defined as **root-relative** to maintain complete independence from domain naming. A proposed canonical domain (`abhinashgupta.dev`) is noted as a candidate, pending confirmed ownership.

| Route Path | Primary Page Title | Primary Intent & Content | Canonical Route |
| :--- | :--- | :--- | :--- |
| `/` | `Abhinash Gupta — Creative Full Stack Developer` | Flagship single-page overview with interactive 3D hero, featured builds, skills matrix, bio preview, and contact. | `/` `[Proposed Domain: https://abhinashgupta.dev/]` |
| `/projects` | `Selected Projects Archive — Abhinash Gupta` | Filterable catalog of all engineering builds with category toggles and search. | `/projects` |
| `/projects/:slug` | `[Project Name] — Case Study & Architecture` | Deep-dive technical breakdown with 12-point engineering schema and architecture flow. | `/projects/:slug` |
| `/about` | `About & Engineering Philosophy — Abhinash Gupta` | Complete biography, technical mindset, academic background, career timeline, hardware/dev setup. | `/about` |
| `/contact` | `Contact & Collaboration — Abhinash Gupta` | Dedicated inquiry portal with client form, direct email copy button [Planned Form Backend / PGP: REQUIRES USER CONFIRMATION]. | `/contact` |

### 3.2 Canonical URL & Slug Conventions
- **Lowercase Only:** All URLs are strictly lowercase alphanumeric with hyphens (`kebab-case`).
- **Trailing Slash Policy:** **Strict No Trailing Slash** (e.g., `/projects`, never `/projects/`). Consistent server-side 301 redirection normalizes all trailing slash requests.
- **Candidate Project Slugs:**
  1. `/projects/weathersentinel`
  2. `/projects/careertrack`
  3. `/projects/hospital-appointment-system`
  4. `/projects/maa-kamakhya-hydraulic`
  5. `/projects/jay-hanuman-astro`

### 3.3 Evaluation of Candidate Standalone Routes
- **Should "Resume" be a standalone route (`/resume`)?**
  - *Decision:* **No.** A dedicated HTML resume page creates duplicate content issues with `/about`. Instead, the resume asset (`/resume.pdf` — `[REQUIRES USER CONFIRMATION: PDF asset to be supplied]`) is opened directly in a browser tab or modal viewer.
- **Should "Skills / Stack" be a standalone route (`/skills`)?**
  - *Decision:* **No.** Technical recruiters evaluate skills *in context* with the projects that use them. The Technical Expertise Matrix is prominently featured on both the Homepage (`/#expertise`) and the About page (`/about#expertise`).
- **Should "Experience / Achievements" be a standalone route (`/experience`)?**
  - *Decision:* **No.** Academic foundations and career milestones belong together on `/about#journey` and the homepage timeline.

---

## 4. Content Relationship Model (CRM)

The content architecture is structured as a normalized relational schema to maintain consistency across all views without hardcoded duplication.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CENTRALIZED CONTENT ENTITY                      │
│                                                                        │
│   ┌──────────────────┐               ┌──────────────────────────────┐  │
│   │  PROFILE ENTITY  │               │      PROJECT ENTITY (5)      │  │
│   │  • Bio           │               │  • Title, Slug, Classification│  │
│   │  • [Coordinates] │               │  • Implemented vs Roadmap    │  │
│   │  • [Status Flag] │               │  • Architecture Diagram      │  │
│   └────────┬─────────┘               │  • Repos & Demos (Confirmed) │  │
│            │                         └──────────────┬───────────────┘  │
│            ▼                                        ▼                  │
│   ┌──────────────────┐               ┌──────────────────────────────┐  │
│   │  SKILLS ENTITY   │◄──────────────┤      TECH STACK JUNCTION     │  │
│   │  • Category      │               │  • React, TS, Node, Postgres │  │
│   │  • Stack Items   │               └──────────────────────────────┘  │
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
| **Contact Channels** | Form + Direct Link | Footer Link | Inquiry Trigger | Direct Reach-out | Comprehensive Form |

---

## 5. SEO & Discoverability Architecture

### 5.1 Page-Level Metadata Specifications
- **Dynamic Title Pattern:**  
  `[Page / Project Title] — Abhinash Gupta | Creative Full Stack Developer`
- **Meta Description Standard:**  
  140–160 character concise summaries focused on verified skills, real-world builds, and engineering capabilities.
- **OpenGraph & Twitter Image Cards:**  
  Standardized `1200x630` aspect ratio graphics showcasing the high-key studio aesthetic, bold typography, and verified project titles.

### 5.2 Structured Data (Schema.org) Taxonomy (Strictly Verified Only)
To comply with search engine guidelines, JSON-LD schemas include **strictly verified profile data**, omitting unconfirmed handles:
- **Root (`/`):** Implements `Person` schema:
  - `name`: "Abhinash Gupta"
  - `jobTitle`: "Creative Full Stack Developer"
  - `sameAs`: Includes verified GitHub repository (`https://github.com/Abhinash01/Abhinash.Portfolio.git`). *(LinkedIn and Twitter URLs added only upon user confirmation)*.
- **Project Detail (`/projects/:slug`):** Implements `SoftwareSourceCode` and `CreativeWork` schemas with verified tech stack parameters.
- **Breadcrumbs:** Implements `BreadcrumbList` on all secondary pages to provide search engine navigational clarity.

---

## 6. Accessibility & Navigation Governance (WCAG 2.1 AA)

1. **Semantic Landmark Roles:** Every page is structured with standard HTML5 landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, and `<footer>`.
2. **Accessible Skip Link:** The very first focusable DOM element is a high-contrast skip button:
   `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to primary content</a>`.
3. **Keyboard Focus Hierarchy:**
   - Modals and mobile drawers trap keyboard focus while active and dismiss via `Escape` key, restoring focus to the triggering element.
   - All interactive controls maintain visible, high-contrast focus rings (`outline: 2px solid #4169E1; outline-offset: 2px`).
4. **Accessible Route Announcements:** On client-side route transitions, an `aria-live="polite"` region announces the new page title to assistive screen readers (`e.g., "Navigated to Projects Archive"`).
