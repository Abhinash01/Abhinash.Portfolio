# PHASE 04 — DESKTOP UI/UX WIREFRAME SPECIFICATIONS
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 02 of 07  
**File Location:** `docs/PHASE_04_DESKTOP_WIREFRAMES.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Desktop Layout Foundation & Canvas Architecture

- **Primary Viewport Dimensions:** `1440px × 900px` (Optimized baseline across 13"–16" Laptops, Studio Displays, and 4K Ultrawides).
- **Container Architecture:** Centered `max-w-7xl` (`1280px`) with `px-8` (`32px`) to `px-12` (`48px`) margins.
- **Column System:** 12-column symmetrical CSS Grid (`column-gap: 32px`).
- **Base Canvas Tone:** Minimal Luxury Light Ground (`#F6F9FC`) with crisp `#FFFFFF` card planes and 1px mechanical hairlines (`#E5EAF1`).

---

## 2. Desktop Homepage Blueprint (`/`)

The homepage coordinates 11 sequential visual and narrative zones, directly reflecting the approved Information Architecture without extraneous bloat.

### 2.1 Zone 01: Global Floating Navigation Bar (`#main-navigation`)
- **Container:** Floating horizontal pill centered at `top: 24px`, width `1080px`, height `56px`, `border-radius: 9999px`.
- **Surfaces:** `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)`, border: `1px solid #E5EAF1`, shadow: `0 4px 20px rgba(16, 24, 39, 0.04)`.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [AG] ABHINASH GUPTA     │   Work   Expertise   Journey   About   Contact   │  (•) Available  [Resume ↓] │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```
- **Anatomy:**
  1. `[AG]` Brand glyph + `ABHINASH GUPTA` wordmark (`id="nav-brand"`).
  2. Anchor navigation links (`Work`, `Expertise`, `Journey`, `About`, `Contact`).
  3. Status beacon (`[Configurable: Defaults to REQUIRES USER CONFIRMATION]`).
  4. Primary action button `Resume ↓` (`[REQUIRES USER CONFIRMATION: PDF asset to be supplied and verified]`).

---

### 2.2 Zone 02 & 03: Hero Experience & 3D Spatial Canvas (`#hero`)
- **Dimensions:** Full viewport height (`min-height: calc(100vh - 80px)`), max width `1280px`.
- **Grid Layout:** 2-column asymmetric split (7 columns editorial narrative left, 5 columns spatial 3D viewport right).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [ LIVE_COORDINATES: REQUIRES CONFIRMATION // LOCAL TIME: REQUIRES CONFIRMATION ]            │
│                                                                                              │
│  // CREATIVE FULL STACK DEVELOPER // 2026 EDITION                                            │
│                                                                  ┌────────────────────────┐  │
│  Building Digital                                                │                        │  │
│  Experiences. Beyond                                             │  [ 3D KINETIC          │  │
│  the Ordinary.                                                   │    MONOLITH &          │  │
│                                                                  │    GYROSCOPE           │  │
│  Engineering scalable web architectures and choreographing       │    INTERACTIVE         │  │
│  spatial 3D interfaces with precision, clean architecture,       │    CANVAS ]            │  │
│  and verifiable code craftsmanship.                              │                        │  │
│                                                                  │  Three.js / WebGL      │  │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐  │  Pointer-responsive    │  │
│  │ EXPLORE SELECTED WORK ↓  │  │ GET IN TOUCH             ✉   │  │  parallax orbit        │  │
│  └──────────────────────────┘  └──────────────────────────────┘  │  (Static 2D fallback)  │  │
│                                                                  └────────────────────────┘  │
│  [●] VERIFIED TECH: React • Node.js • Express • HTML5/CSS3  [!] 4 CANDIDATE BUILDS ARCHIVED   │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
- **3D Hero Integration:**
  - Canvas layer sits at `z-index: 0` with pointer events scoped to the canvas footprint.
  - Text-safe area receives an imperceptible white-to-transparent gradient wash (`rgba(246, 249, 252, 0.95)` to `transparent`), with the initial design target of maintaining strong contrast exceeding WCAG AA requirements for typography (final contrast will be validated during the accessibility/performance phase).
  - Monolith core tilts in spring-damped parallax responding to mouse movements `(clientX, clientY)`.
  - 3D Viewport Sizing: Initial wireframe target dimensions (e.g. desktop height target `560px`) serve as baseline design targets; final dimensions may be tuned during responsive implementation and performance optimization.

---

### 2.3 Zone 04: Scroll Cue & Telemetry Strip (`#scroll-cue`)
- **Placement:** Centered below the hero text and canvas, height `40px`.
- **Visual:** Monospaced scroll indicator with subtle vertical pulsing hairline:

```
                                    │
                                    ▼ [ SCROLL TO EXPLORE ]
```

---

### 2.4 Zone 05: Professional Positioning & Systems Philosophy (`#intro`)
- **Layout:** Editorial blockquote (7 columns) paired with systems philosophy breakdown (5 columns).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  // 01. PHILOSOPHY & SYSTEMS THINKING                                                        │
│                                                                                              │
│  ┌──────────────────────────────────────────────────┐ ┌────────────────────────────────────┐ │
│  │ "Most developer portfolios show you code.        │ │ SYSTEMS ARCHITECTURE PILLARS       │ │
│  │  I construct digital systems that communicate    │ │ • Resilient Data Boundaries        │ │
│  │  the craft."                                     │ │ • Predictable State Pipelines      │ │
│  │                                                  │ │ • Spatial Web Tactility            │ │
│  │ Full-stack software engineering is not merely    │ │ • Uncompromising 60 FPS Performance│ │
│  │ connecting APIs to databases. It is the art of   │ │                                    │ │
│  │ architecting reliable data boundaries paired with│ │ [ READ EXTENDED BIOGRAPHY ↗ ]      │ │
│  │ responsive, tactile front-end interfaces.        │ │ (/about)                           │ │
│  └──────────────────────────────────────────────────┘ └────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.5 Zone 06: Selected Work Showcase (`#featured-work`)
- **Scope:** Showcases strictly the **top three featured portfolio candidates** on the homepage:
  1. *WeatherSentinel* (Flagship 01 — Full 12-column hero card).
  2. *CareerTrack* (Featured 02 — 6-column side card).
  3. *Maa Kamakhya Hydraulic Website* (Featured 03 — 6-column side card).
- **Archive Link:** Header contains `[ VIEW COMPLETE ARCHIVE (4) ↗ ]` directing to `/projects` where *Jay Hanuman Astro Research Centre* is curated.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  // 02. SELECTED WORK (TOP 3 FLAGSHIPS)                     [ VIEW COMPLETE ARCHIVE (4) ↗ ]  │
│                                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 01 // WEATHERSENTINEL — ATMOSPHERIC INTELLIGENCE DASHBOARD                             │  │
│  │                                                                                        │  │
│  │ ┌─────────────────────────────────────────────────┐  Real-time environmental telemetry │  │
│  │ │                                                 │  dashboard providing live weather, │  │
│  │ │ [ 16:9 BROWSER MOCKUP: WEATHERSENTINEL ]        │  multi-day forecasting, and air    │  │
│  │ │ Clean vector UI preview                         │  quality telemetry with debounced  │  │
│  │ │                                                 │  instant location search.          │  │
│  │ └─────────────────────────────────────────────────┘                                    │  │
│  │ Tech: [React] [Node.js] [Express] [REST API]           [ EXPLORE COMPLETE CASE STUDY ↗ ]│  │
│  └────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                              │
│  ┌──────────────────────────────────────────┐  ┌──────────────────────────────────────────┐  │
│  │ 02 // CAREERTRACK                        │  │ 03 // MAA KAMAKHYA HYDRAULIC             │  │
│  │ Job Application Pipeline Manager         │  │ Industrial Machinery & Equipment Platform│  │
│  │                                          │  │                                          │  │
│  │ ┌──────────────────────────────────────┐ │  │ ┌──────────────────────────────────────┐ │  │
│  │ │ [ 16:9 MOCKUP: CAREERTRACK ]         │ │  │ │ [ 16:9 MOCKUP: MAA KAMAKHYA ]        │ │  │
│  │ └──────────────────────────────────────┘ │  │ └──────────────────────────────────────┘ │  │
│  │ Full-lifecycle application stage tracking│  │ High-performance digital catalog and     │  │
│  │ tool with Kanban stage transitions.      │  │ customer quotation portal for machinery. │  │
│  │                                          │  │                                          │  │
│  │ Stack: [React] [Node.js] [Express] [API] │  │ Stack: [React] [Node.js] [Tailwind CSS]  │  │
│  │ [ EXPLORE CASE STUDY ↗ ]                 │  │ [ EXPLORE CASE STUDY ↗ ]                 │  │
│  └──────────────────────────────────────────┘  └──────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.6 Zone 07: Technical Expertise & Architecture Matrix (`#expertise`)
- **Layout:** 3-column card grid (`#FFFFFF` surfaces, 1px `#E5EAF1` borders).
- **Integrity Rule:** Strictly separates verified competencies from items requiring user verification.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  // 03. TECHNICAL CAPABILITIES & TOOLING                                                      │
│                                                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐  ┌─────────────────────┐ │
│  │ 01 / FRONTEND & SPATIAL WEB  │  │ 02 / BACKEND & SERVICES      │  │ 03 / SYSTEMS & DATA │ │
│  │                              │  │                              │  │                     │ │
│  │ • HTML5 & Semantic Web       │  │ • Node.js Runtime Engine     │  │ • Git & GitHub      │ │
│  │ • Modern CSS3 / Vanilla CSS  │  │ • Express Web Application FW │  │ • Vite Build Tooling│ │
│  │ • JavaScript (ES6+ Standards)│  │ • RESTful API Architecture   │  │ • Modular Component │ │
│  │ • React Component Modeling   │  │                              │  │                     │ │
│  │                              │  │ [CONFIRMATION REQUIRED]      │  │[CONFIRMATION REQ]   │ │
│  │ [CONFIRMATION REQUIRED]      │  │ • JWT Authentication         │  │ • PostgreSQL        │ │
│  │ • TypeScript Architecture    │  │ • WebSocket Real-Time Feeds  │  │ • MongoDB           │ │
│  │ • Three.js / R3F Graphics    │  │ • Production Cloud Deploy    │  │ • Docker Engine     │ │
│  │ • GSAP Animation Library     │  │                              │  │                     │ │
│  └──────────────────────────────┘  └──────────────────────────────┘  └─────────────────────┘ │
│                                                                                              │
│  [ EXPLORE VERIFIED CODE REPOSITORIES ON GITHUB ↗ ]  (https://github.com/Abhinash01)         │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.7 Zone 08: Engineering Timeline & Foundations (`#journey`)
- **Layout:** Vertical chronological spine with royal blue accent nodes (`#4169E1`).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  // 04. ENGINEERING TIMELINE & FOUNDATIONS                                                   │
│                                                                                              │
│     │                                                                                        │
│    (●) 2025–PRESENT // INDEPENDENT FULL STACK & SPATIAL WEB DEVELOPMENT                      │
│     │  Engineering full-stack web applications and interactive 3D interfaces. Documented four│
│     │  candidate web applications exploring API integration, state pipelines, and 3D web.    │
│     │                                                                                        │
│    (●) [REQUIRES USER CONFIRMATION: ACADEMIC COMPUTER SCIENCE & ENGINEERING DEGREE]          │
│     │  Institution: [REQUIRES USER CONFIRMATION: University / College Name]                  │
│     │  Degree: [REQUIRES USER CONFIRMATION: Exact Degree Title & Specialization]              │
│     │  Foundational coursework: Data Structures, Algorithms, Relational Databases, Networks. │
│     │                                                                                        │
│                                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ [↓] DOWNLOAD CURRICULUM VITAE (PDF) — [REQUIRES USER CONFIRMATION: Asset to be verified]│  │
│  └────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.8 Zone 09: About Preview Card (`#about-preview`)
- **Layout:** 2-column balanced layout (5 columns visual profile card, 7 columns narrative).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  // 05. BIOGRAPHICAL CONTEXT                                                                 │
│                                                                                              │
│  ┌─────────────────────────────┐  Bridging Systems Architecture with Spatial Design          │
│  │ [ STUDIO PORTRAIT MOCKUP ]  │                                                             │
│  │ Architectural framing with  │  I am a developer focused on constructing robust full-stack │
│  │ monochrome tonality         │  applications while exploring spatial 3D web technologies.  │
│  │ [CONFIRM: Photo asset]      │  Rooted in Computer Science fundamentals, I design systems  │
│  │                             │  that bridge complex backend APIs with responsive, tactile  │
│  │ Abhinash Gupta              │  front-end experiences.                                     │
│  │ Full Stack Developer        │                                                             │
│  │ [Coordinates: CONFIRM]      │  ┌───────────────────────────────────────────────────────┐  │
│  └─────────────────────────────┘  │ READ COMPLETE BIOGRAPHY & DEVELOPMENT ENVIRONMENT ↗   │  │
│                                   └───────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.9 Zone 10: Contact Invitation CTA Band (`#contact-cta`)
- **Layout:** High-contrast dark container (`#101827` surface, white typography).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                              │
│  // 06. INITIATE COLLABORATION                                                               │
│                                                                                              │
│  Have an ambitious engineering project, technical role,                                      │
│  or architectural challenge? Let's build something exceptional.                              │
│                                                                                              │
│  ┌─────────────────────────────────┐    ┌──────────────────────────────────────────────────┐ │
│  │ INITIATE DIRECT INQUIRY ↗       │    │ ✉ COPY EMAIL: [REQUIRES USER CONFIRMATION]  [⎘]  │ │
│  │ (Directs to /contact page)      │    │ Instant clipboard copy toast notification        │ │
│  └─────────────────────────────────┘    └──────────────────────────────────────────────────┘ │
│                                                                                              │
│  [ Availability: Configurable Beacon ]   [ Estimated Response: 24–48 Hours ]                 │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.10 Zone 11: Global Footer (`#global-footer`)
- **Layout:** 4-column structured directory with bottom legal strip.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  AG // ABHINASH GUPTA           NAVIGATION          PORTFOLIO ARCHIVE    CONNECT             │
│  Full Stack Developer           • Home              • WeatherSentinel    • GitHub ↗ (Verif.) │
│  Creative Web Engineer          • Projects (4)      • CareerTrack        • LinkedIn ↗ [Conf] │
│                                 • About             • Maa Kamakhya Hyd   • Twitter / X [Conf]│
│  [Coordinates: CONFIRM]         • Contact           • Jay Hanuman Astro  • Email [Confirm]   │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  © 2026 Abhinash Gupta. All rights reserved.          Built with React, Vite & Three.js (Pl.)│
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Desktop Projects Archive Wireframe (`/projects`)

### 3.1 Archive Header & Filter Toolbar
- **Purpose:** Full technical catalog of all four portfolio project candidates.
- **Controls:** Debounced search input and category filter pills (`All`, `Web Applications`, `Systems & Portals`).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [GLOBAL FLOATING HEADER]                                                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  ARCHIVE DIRECTORY // 2026 EDITION                                                           │
│  All Projects & Engineering Case Studies                                                     │
│  Four portfolio project candidates exploring full-stack architecture, spatial web design,   │
│  and API systems — pending individual verification.                                          │
│                                                                                              │
│  ┌──────────────────────────────────────────────┐  ┌────────────────────────────────────────┐  │
│  │ 🔍 Search projects by title or stack...     │  │ Filter: [All] [Web] [Systems]          │  │
│  └──────────────────────────────────────────────┘  └────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  EDITORIAL PROJECT SHOWCASE (2x2 GRID)                                                       │
│                                                                                              │
│  ┌──────────────────────────────────────────┐  ┌──────────────────────────────────────────┐  │
│  │ 01 // WEATHERSENTINEL                    │  │ 02 // CAREERTRACK                        │  │
│  │ Atmospheric Intelligence & Telemetry App │  │ Job Application Pipeline Manager         │  │
│  │ ┌──────────────────────────────────────┐ │  │ ┌──────────────────────────────────────┐ │  │
│  │ │ [ 16:9 VECTOR UI MOCKUP PLACEHOLDER] │ │  │ │ [ 16:9 VECTOR UI MOCKUP PLACEHOLDER] │ │  │
│  │ └──────────────────────────────────────┘ │  │ └──────────────────────────────────────┘ │  │
│  │ Real-time weather observations, multi-day│  │ Comprehensive job application tracking   │  │
│  │ forecasts, and air quality indices.      │  │ tool with Kanban stage transitions.      │  │
│  │ Stack: [React] [Node.js] [Express] [API] │  │ Stack: [React] [Node.js] [Express] [API] │  │
│  │ [EXPLORE CASE STUDY ↗]                   │  │ [EXPLORE CASE STUDY ↗]                   │  │
│  └──────────────────────────────────────────┘  └──────────────────────────────────────────┘  │
│                                                                                              │
│  ┌──────────────────────────────────────────┐  ┌──────────────────────────────────────────┐  │
│  │ 03 // MAA KAMAKHYA HYDRAULIC WEBSITE     │  │ 04 // JAY HANUMAN ASTRO RESEARCH CENTRE  │  │
│  │ Industrial Machinery & Quotation Portal  │  │ Cultural Research & Consultation Portal  │  │
│  │ ┌──────────────────────────────────────┐ │  │ ┌──────────────────────────────────────┐ │  │
│  │ │ [ 16:9 VECTOR UI MOCKUP PLACEHOLDER] │ │  │ │ [ 16:9 VECTOR UI MOCKUP PLACEHOLDER] │ │  │
│  │ └──────────────────────────────────────┘ │  │ └──────────────────────────────────────┘ │  │
│  │ Commercial equipment catalog and customer│  │ Cultural research platform and astrology │  │
│  │ quotation request system.                │  │ consultation booking interface.          │  │
│  │ Stack: [React] [Node.js] [Tailwind CSS]  │  │ Stack: [React] [Node.js] [Express]       │  │
│  │ [EXPLORE CASE STUDY ↗]                   │  │ [EXPLORE CASE STUDY ↗]                   │  │
│  └──────────────────────────────────────────┘  └──────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Desktop Project Detail Wireframe (`/projects/:slug`)

### 4.1 Reusable Case Study Specification
Standardized across all four project candidates:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [GLOBAL FLOATING HEADER]                                                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  BREADCRUMB: Home (/) > Projects (/projects) > WeatherSentinel                               │
│                                                                                              │
│  PROJECT 01 // CASE STUDY                                                                    │
│  WeatherSentinel — Real-Time Atmospheric Telemetry Dashboard                                 │
│  Environmental intelligence application delivering live weather observations and forecasts. │
│                                                                                              │
│  TIMELINE: 2025             ROLE: Full Stack Developer      STATUS: [REQUIRES CONFIRMATION]  │
│  GITHUB: [REQUIRES CONFIRM] LIVE DEMO: [REQUIRES CONFIRM]   TECH: React, Node, Express, API  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  01. EXECUTIVE SUMMARY & PROBLEM STATEMENT                                                   │
│  ┌────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ The Challenge: Most weather applications either present overwhelming advertisements or │  │
│  │ fail to provide responsive debounced search across diverse worldwide meteorological    │  │
│  │ stations.                                                                              │  │
│  │ The Objective: Construct a lightweight, clean, real-time dashboard aggregating         │  │
│  │ atmospheric observations with sub-second UI updates.                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  02. SYSTEM ARCHITECTURE & DATA FLOW                                                         │
│                                                                                              │
│     [ Client Browser: React 18 ] ──► [ Express API Proxy ] ──► [ Weather API Service ]       │
│                  ▲                             │                              │              │
│                  └────── Cache Layer / State ◄─┴──────────────────────────────┘              │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  03. VERIFIED IMPLEMENTED FEATURES vs. PLANNED ROADMAP                                       │
│                                                                                              │
│  ┌──────────────────────────────────────┐  ┌──────────────────────────────────────────────┐  │
│  │ [✓] VERIFIED IMPLEMENTED FEATURES    │  │ [→] PLANNED ROADMAP ENHANCEMENTS            │  │
│  │ • Instant location search with debnc │  │ • Interactive WebGL particle precipitation    │  │
│  │ • Real-time temperature & humidity   │  │ • Historical meteorological trend analysis    │  │
│  │ • Multi-day forecast data projection │  │ • Offline PWA caching with Service Workers    │  │
│  │ • Air quality index (AQI) indicators │  │ • Push notification alerts for weather storms │  │
│  └──────────────────────────────────────┘  └──────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  04. TECHNICAL CHALLENGES & ENGINEERING SOLUTIONS                                            │
│  • Bottleneck: API rate limits and redundant network requests during user typing.            │
│  • Solution: Implemented custom client-side debounce utility caching previous query responses│
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  PAGINATION: [← Previous: Jay Hanuman Astro]        [Next: CareerTrack →]                     │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Desktop About Page Wireframe (`/about`)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [GLOBAL FLOATING HEADER]                                                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  BIOGRAPHY & SYSTEMS THINKING                                                                │
│  Abhinash Gupta // Systems Thinker & Creative Full Stack Developer                           │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────┐  01. THE PHILOSOPHY                                       │
│  │ [ ARCHITECTURAL PORTRAIT ]    │  Code as Craft & Spatial Architecture                     │
│  │                               │                                                           │
│  │ Monochrome studio portrait    │  I approach software engineering with a focus on modular  │
│  │ with neutral light background │  systems, crisp type boundaries, and high-performance web │
│  │                               │  graphics. I believe user interfaces should be tactile,   │
│  │ [REQUIRES USER                │  honest, and blindingly fast.                             │
│  │  CONFIRMATION: Photo asset]   │                                                           │
│  │                               │  02. ACADEMIC & CS FOUNDATIONS                            │
│  │ Abhinash Gupta                │  Computer Science & Engineering Fundamentals              │
│  │ Full Stack Developer          │                                                           │
│  │ [City, Country: CONFIRM]      │  Degree: [REQUIRES USER CONFIRMATION: Degree & Institution]│
│  │ [Timezone: CONFIRM]           │  Core coursework: Data Structures, Algorithms, Databases, │
│  │                               │  Systems Architecture, and Software Engineering Principles│
│  └───────────────────────────────┘                                                           │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  03. DEVELOPMENT TOOLING & WORKSPACE ENVIRONMENT                                             │
│  • Editor & Terminal: VS Code / Cursor, JetBrains Mono, zsh/powershell                       │
│  • Core Languages: JavaScript (ES6+), HTML5, CSS3 [REQUIRES CONFIRMATION: TypeScript]        │
│  • Frameworks & Graphics: React, Node.js, Express, Vite, Three.js (Planned)                  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  [↓] DOWNLOAD VERIFIED RESUME (PDF) [REQUIRES USER CONFIRMATION: Asset to be verified]       │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Desktop Contact Page Wireframe (`/contact`)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [GLOBAL FLOATING HEADER]                                                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  LET'S BUILD SOMETHING EXCEPTIONAL                                                           │
│  Open for ambitious technical roles, creative web commissions, and engineering projects.     │
│                                                                                              │
│  ┌─────────────────────────────────────────────────┐  ┌───────────────────────────────────┐  │
│  │ FULL-FEATURED CONTACT FORM                      │  │ DIRECT CONTACT CHANNELS           │  │
│  │                                                 │  │                                   │  │
│  │ Your Full Name *                                │  │ Primary Email:                    │  │
│  │ [ John Doe                                    ] │  │ [REQUIRES USER CONFIRMATION]      │  │
│  │                                                 │  │ [ ⎘ Click to Copy Address ]       │  │
│  │ Your Work Email *                               │  │                                   │  │
│  │ [ recruiter@company.com                       ] │  │ Professional Profiles:            │  │
│  │                                                 │  │ • GitHub: github.com/Abhinash01 (✓)│  │
│  │ Inquiry Nature *                                │  │ • LinkedIn: [REQUIRES CONFIRM]    │  │
│  │ (•) Full-Time Role  ( ) Contract  ( ) Other    │  │ • Twitter/X: [REQUIRES CONFIRM]   │  │
│  │                                                 │  │                                   │  │
│  │ Project Details / Message *                     │  │ Availability Status:              │  │
│  │ [ Tell me about the project scope, timeline... │  │ (•) [REQUIRES USER CONFIRMATION]  │  │
│  │                                               ] │  │                                   │  │
│  │ [ SEND INQUIRY MESSAGE ↗ ]                      │  │ Response Window:                  │  │
│  │ [!] Form backend integration planned Phase 06   │  │ Typically within 24–48 hours      │  │
│  └─────────────────────────────────────────────────┘  └───────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```
