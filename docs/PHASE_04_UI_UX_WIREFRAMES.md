# PHASE 04 — MASTER UI/UX WIREFRAME SPECIFICATION
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 01 of 07  
**File Location:** `docs/PHASE_04_UI_UX_WIREFRAMES.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Executive Wireframe Philosophy & Global Framework

### 1.1 Architectural Philosophy
This wireframe specification serves as the structural source of truth for the digital space of **Abhinash Gupta**. Grounded in the architectural tenets established in Phase 01 (Creative Direction), Phase 02 (Benchmarking), and Phase 03 (Information Architecture), this document translates strategic positioning into rigorous visual-spatial blueprints.

The interface adheres to an **editorial high-key light aesthetic** (`#F6F9FC` canvas with `#FFFFFF` opaque surfaces, `#E5EAF1` mechanical borders, `#111827` deep neutral text, and `#4169E1` royal blue precision accents). It deliberately avoids design clichés—such as illegible blurred glassmorphism, oversaturated neon glows, and uncalibrated oversized typography—in favor of structural discipline, clear content boundaries, and purposeful spatial computing.

### 1.2 Core Wireframe Principles
1. **Content-First Hierarchical Staging:** Typography and verifiable artifacts govern the layout. Interactive 3D graphics act as atmospheric anchors that reinforce narrative rather than decorative obstacles.
2. **Zero-Friction Recruiter Scannability:** Technical decision-makers (recruiters, engineering directors) must be able to evaluate technical stacks, project architectures, and contact channels within 5 to 30 seconds without navigating complex 3D gates.
3. **Spatial & 2D Coexistence:** WebGL viewports are strictly isolated on layer `z-index: 0` with `pointer-events: none` under typography, reserving pointer capture exclusively for direct canvas manipulation zones.
4. **Honest Engineering Separation:** The wireframe system strictly enforces visual boundaries between verified implemented features and future roadmap enhancements across all project entities.

---

## 2. Page Hierarchy & Global Shell Architecture

### 2.1 Canonical Route Hierarchy
The site architecture adheres to five canonical, root-relative routes:
* **`/` (Root Homepage):** The unified conversion and narrative engine.
* **`/projects` (Projects Archive):** The comprehensive technical catalog of all four candidate builds.
* **`/projects/:slug` (Individual Project Deep-Dive):** The standardized 12-section technical case study.
* **`/about` (Engineering Mindset & Biography):** Extended background, systems philosophy, and setup.
* **`/contact` (Inquiry & Collaboration Hub):** Direct engagement portal with verified channels.
* **`/*` (404 Error Recovery):** Fast-path spatial return to active routes.

### 2.2 Global Shell Blueprint
The viewport shell consists of three persistent vertical zones:
1. **Top Floating Island (`#main-navigation`):** Docked `24px` from viewport top (desktop), centered, width `min(1080px, calc(100vw - 48px))`.
2. **Main Dynamic Viewport (`#main-content`):** Landmark `<main>` wrapping page-specific flows with standardized horizontal margin safety.
3. **Bottom Global Anchor (`#global-footer`):** Architectural boundary with directory sitemap, timezone ticker, and social channels.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ [VIEWPORT CANVAS: #F6F9FC]                                                                   │
│                                                                                              │
│       ┌──────────────────────────────────────────────────────────────────────────────┐       │
│       │ [GLOBAL NAV] AG // ABHINASH GUPTA   • Work • Stack • Journey • About [TALK ↗]│       │
│       └──────────────────────────────────────────────────────────────────────────────┘       │
│                                                                                              │
│ ──────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                              │
│                                   <main id="main-content">                                   │
│                                                                                              │
│                                    [DYNAMIC PAGE CONTENT]                                    │
│                                                                                              │
│ ──────────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ <footer id="global-footer">                                                              │ │
│ │ AG // ABHINASH GUPTA        NAVIGATION        PROJECTS ARCHIVE       DIRECT CONTACT      │ │
│ │ Systems Thinker             • Homepage        • WeatherSentinel      • GitHub (Verified) │ │
│ │ Creative Full Stack         • Projects        • CareerTrack          • LinkedIn [Confirm]│ │
│ │                             • About           • Maa Kamakhya Hyd     • Twitter [Confirm] │ │
│ │ [Coordinates: CONFIRM]      • Contact         • Jay Hanuman Astro    • Email [Confirm]   │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Global Navigation Structure

### 3.1 Desktop Floating Navigation Bar
- **Purpose:** Instant spatial orientation, global section jumping, availability status, and primary action.
- **User Goal:** Rapid access to work samples, resume, or contact without scrolling back to the top.
- **Layout:** Floating pill (`height: 56px`), backdrop filter `blur(16px)` on `rgba(255, 255, 255, 0.85)` surface, 1px border `#E5EAF1`, rounded `9999px`.
- **Anatomy:**
  - `[AG]` Brand glyph + `ABHINASH GUPTA` wordmark (`id="nav-brand"`).
  - Centered navigation links (`id="nav-links"`): `Work` (`#featured-work`), `Expertise` (`#expertise`), `Journey` (`#journey`), `About` (`/about`), `Contact` (`/contact`).
  - Right utility group: Availability status beacon (`[Configurable: REQUIRES USER CONFIRMATION]`) + Primary button `Resume ↓` (`[REQUIRES USER CONFIRMATION: Resume PDF asset to be verified]`).

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [AG] ABHINASH GUPTA     │   Work   Expertise   Journey   About   Contact   │  (•) Available  [Resume ↓] │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Mobile Navigation & Slide-Down Drawer
- **Mobile Header (`< 768px`):** Edge-to-edge compact bar (`height: 56px`, `px-6`).
  - Left: `[AG]` Monogram + `Abhinash`.
  - Right: Configurable availability dot + Hamburger trigger (`44x44px` minimum touch target).
- **Slide-Down Drawer (`#mobile-menu`):** Opaque `#FFFFFF` panel with focus trap, full semantic links, social shortcuts, and persistent `Close [Esc]` button.

---

## 4. Homepage Master Wireframe (`/`)

The homepage coordinates 8 sequential sections into an editorial and conversion progression:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  SECTION 01: PRELOADER (Progressive Enhancement / Skippable / 2.5s Timeout Ceiling)          │
│  [ AG MONOGRAM ]  ABHINASH GUPTA // SYSTEM INITIALIZATION [████████░░] 78% [Skip Esc]        │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 02: HERO EXPERIENCE (#hero)                                                         │
│                                                                                              │
│  // CREATIVE FULL STACK DEVELOPER // 2026 EDITION                                            │
│                                                                  ┌────────────────────────┐  │
│  Building Digital                                                │                        │  │
│  Experiences. Beyond                                             │  [ 3D KINETIC          │  │
│  the Ordinary.                                                   │    MONOLITH &          │  │
│                                                                  │    GYROSCOPE           │  │
│  Engineering scalable web applications and choreographing        │    SCULPTURE ]         │  │
│  spatial 3D interfaces with precision, clean architecture,       │                        │  │
│  and verifiable code craftsmanship.                              │  (Pointer-responsive   │  │
│                                                                  │   interactive orbit    │  │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐  │   with 2D fallback)    │  │
│  │ EXPLORE SELECTED WORK ↓  │  │ GET IN TOUCH             ✉   │  │                        │  │
│  └──────────────────────────┘  └──────────────────────────────┘  └────────────────────────┘  │
│                                                                                              │
│  [●] VERIFIED STACK: React • Node.js • Express • HTML5/CSS3  [!] 4 CANDIDATE BUILDS ARCHIVED │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 03: PROFESSIONAL POSITIONING (#intro)                                               │
│                                                                                              │
│  // 01. PHILOSOPHY & SYSTEMS THINKING                                                        │
│  "Most developer portfolios show code. I construct digital systems that communicate craft."  │
│                                                                                              │
│  Software engineering is the discipline of architecting reliable data boundaries, robust    │
│  RESTful APIs, and predictable state lifecycles, surfaced through tactile, fluid interfaces. │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 04: FEATURED PROJECTS SHOWCASE (#featured-work)                                     │
│                                                                                              │
│  // 02. SELECTED WORK (TOP 3 FLAGSHIPS)                     [ VIEW COMPLETE ARCHIVE (4) ↗ ]  │
│                                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 01 // WEATHERSENTINEL — ATMOSPHERIC INTELLIGENCE DASHBOARD                             │  │
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
│  │ ┌──────────────────────────────────────┐ │  │ ┌──────────────────────────────────────┐ │  │
│  │ │ [ 16:9 MOCKUP: CAREERTRACK ]         │ │  │ │ [ 16:9 MOCKUP: MAA KAMAKHYA ]        │ │  │
│  │ └──────────────────────────────────────┘ │  │ └──────────────────────────────────────┘ │  │
│  │ Full-lifecycle application stage tracking│  │ High-performance digital catalog and     │  │
│  │ tool with Kanban stage transitions.      │  │ customer quotation portal for machinery. │  │
│  │ Stack: [React] [Node.js] [Express] [API] │  │ Stack: [React] [Node.js] [Tailwind CSS]  │  │
│  │ [ EXPLORE CASE STUDY ↗ ]                 │  │ [ EXPLORE CASE STUDY ↗ ]                 │  │
│  └──────────────────────────────────────────┘  └──────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 05: TECHNICAL EXPERTISE & ARCHITECTURE MATRIX (#expertise)                          │
│                                                                                              │
│  // 03. TECHNICAL CAPABILITIES & TOOLING                                                      │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐  ┌─────────────────────┐ │
│  │ 01 / FRONTEND & SPATIAL WEB  │  │ 02 / BACKEND & SERVICES      │  │ 03 / SYSTEMS & DATA │ │
│  │ • HTML5 & Semantic Web       │  │ • Node.js Runtime Engine     │  │ • Git & GitHub      │ │
│  │ • Modern CSS3 / Vanilla CSS  │  │ • Express Web Application FW │  │ • Vite Build Tooling│ │
│  │ • JavaScript (ES6+ Standards)│  │ • RESTful API Architecture   │  │ • Modular Component │ │
│  │ • React Component Modeling   │  │                              │  │                     │ │
│  │ [CONFIRMATION REQUIRED]      │  │ [CONFIRMATION REQUIRED]      │  │[CONFIRMATION REQ]   │ │
│  │ • TypeScript Architecture    │  │ • JWT Authentication         │  │ • PostgreSQL        │ │
│  │ • Three.js / R3F Graphics    │  │ • WebSocket Real-Time Feeds  │  │ • MongoDB           │ │
│  │ • GSAP Animation Library     │  │ • Cloud Production Hosting   │  │ • Docker Container  │ │
│  └──────────────────────────────┘  └──────────────────────────────┘  └─────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 06: ABOUT & PROFESSIONAL STORY PREVIEW (#about-preview)                             │
│                                                                                              │
│  ┌─────────────────────────────┐  Bridging Systems Architecture with Spatial Design          │
│  │ [ STUDIO PORTRAIT MOCKUP ]  │  Rooted in foundational Computer Science principles, I build│
│  │ Monochrome architectural    │  applications prioritizing clean data boundaries, modular   │
│  │ framing [CONFIRM: Photo]    │  architecture, and high-performance tactile interfaces.    │
│  │ Abhinash Gupta              │                                                             │
│  │ Full Stack Developer        │  ┌───────────────────────────────────────────────────────┐  │
│  │ [Coordinates: CONFIRM]      │  │ READ FULL BIOGRAPHY & ENGINEERING PRINCIPLES ↗        │  │
│  └─────────────────────────────┘  └───────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 07: DEVELOPMENT JOURNEY & TIMELINE (#journey)                                       │
│                                                                                              │
│  // 04. ENGINEERING TIMELINE & FOUNDATIONS                                                   │
│     │                                                                                        │
│    (●) 2025–PRESENT // INDEPENDENT FULL STACK & SPATIAL WEB DEVELOPMENT                      │
│     │  Engineering full-stack web applications and interactive 3D interfaces. Documented four│
│     │  candidate web applications exploring API integration, state pipelines, and 3D web.    │
│     │                                                                                        │
│    (●) [REQUIRES USER CONFIRMATION: ACADEMIC COMPUTER SCIENCE & ENGINEERING DEGREE]          │
│     │  Institution: [REQUIRES USER CONFIRMATION: University / College Name]                  │
│     │  Degree: [REQUIRES USER CONFIRMATION: Exact Degree Title & Dates]                      │
│     │                                                                                        │
│  ┌────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ [↓] DOWNLOAD CURRICULUM VITAE (PDF) — [REQUIRES USER CONFIRMATION: Asset to be verified]│  │
│  └────────────────────────────────────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  SECTION 08: CONTACT INVITATION CTA (#contact-cta)                                           │
│                                                                                              │
│  // 05. INITIATE COLLABORATION                                                               │
│  Have an ambitious engineering project, technical role, or architectural challenge?          │
│                                                                                              │
│  ┌─────────────────────────────────┐    ┌──────────────────────────────────────────────────┐ │
│  │ INITIATE DIRECT INQUIRY ↗       │    │ ✉ COPY EMAIL: [REQUIRES USER CONFIRMATION]  [⎘]  │ │
│  │ (Directs to /contact page)      │    │ Instant clipboard copy toast notification        │ │
│  └─────────────────────────────────┘    └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Projects Archive Master Wireframe (`/projects`)

### 5.1 Purpose & User Goal
The Projects Archive is the authoritative inventory for deep technical evaluation. It presents all **four portfolio project candidates**:
1. *WeatherSentinel* (`/projects/weathersentinel`)
2. *CareerTrack* (`/projects/careertrack`)
3. *Maa Kamakhya Hydraulic Website* (`/projects/maa-kamakhya-hydraulic`)
4. *Jay Hanuman Astro Research Centre* (`/projects/jay-hanuman-astro`)

### 5.2 Archive Wireframe Blueprint
```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  [GLOBAL FLOATING HEADER]                                                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│  ARCHIVE HEADER & FILTER CONTROLS                                                            │
│                                                                                              │
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

## 6. Project Detail Reusable Case Study Wireframe (`/projects/:slug`)

### 6.1 Reusable 12-Section Specification
Every project detail page follows this standardized architecture:
1. **Breadcrumbs:** `Home (/) > Projects (/projects) > [Project Title]`.
2. **Hero Header:** Monospaced index, display title, classification, role, year, and status badge.
3. **Action Bar:** Direct GitHub repository button (`[Flagged if unconfirmed]`) + Live Production Demo (`[Flagged if unconfirmed]`).
4. **Primary UI Media Viewport:** 16:9 high-resolution architectural frame.
5. **Executive Summary & Problem Statement:** Contextual engineering breakdown.
6. **Project Objectives:** Bulleted technical criteria for success.
7. **Verified Implemented Tech Stack Matrix:** Frontend, backend, and tooling.
8. **System Architecture & Data Flow Diagram:** Clean vector flow schematic.
9. **Verified Implemented Features vs. Planned Roadmap:** Two-column strict comparison table.
10. **Technical Challenges & Applied Solutions:** Documented bottleneck and resolution.
11. **Media & Interface Gallery:** Detail mockups of core workflows.
12. **Pagination & Recovery:** Previous Project, Return to Archive, Next Project.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│  BREADCRUMB: Home (/) > Projects (/projects) > WeatherSentinel                               │
│                                                                                              │
│  PROJECT 01 // CASE STUDY                                                                    │
│  WeatherSentinel — Real-Time Atmospheric Telemetry                                           │
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

## 7. About Page Master Wireframe (`/about`)

### 7.1 Purpose & Narrative Architecture
The About page provides qualitative proof of engineering capability, Computer Science fundamentals, and tooling discipline:
- **01. Narrative Biography:** Background, early programming curiosity, and evolution into full-stack and spatial development.
- **02. Engineering Principles:** Modular systems, typed contracts, performance as an aesthetic, and respectful UX.
- **03. Academic Foundations:** Formal Computer Science education details (`[REQUIRES USER CONFIRMATION: Institution & Degree details]`).
- **04. Developer Workspace:** Hardware configuration, VS Code/Cursor environment, terminal setup, and favorite monospaced fonts (`JetBrains Mono`).
- **05. Resume Download Action:** High-contrast CTA triggering `/resume.pdf` (`[REQUIRES USER CONFIRMATION]`).

---

## 8. Contact Page Master Wireframe (`/contact`)

### 8.1 Purpose & Conversion Architecture
- **Left Column: Full Inquiry Form (`#form`):**
  - Full Name (`<input type="text">`).
  - Work Email (`<input type="email">`).
  - Inquiry Type Radio Group: `Full-Time Engineering Role`, `Client Web Platform`, `Technical Consultation`, `Other`.
  - Project Scope / Message (`<textarea>` 5 rows).
  - Explicit Note: `[Planned Backend Service: Integration in Phase 06+]`.
- **Right Column: Direct Channels & Status (`#direct-channels`):**
  - Primary Inquiries Email: `[REQUIRES USER CONFIRMATION: Email Address]` with instant copy pill.
  - Confirmed Code Profile: GitHub (`https://github.com/Abhinash01`).
  - Professional Network: LinkedIn (`[REQUIRES USER CONFIRMATION: Profile URL]`).
  - Public Updates: Twitter/X (`[REQUIRES USER CONFIRMATION: Profile URL]`).
  - Availability Status Beacon & Response Window (`Typically 24–48 hours`).

---

## 9. 3D Spatial Composition & Safe Zones

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ [HERO VIEWPORT COORDINATE GRID: 1280px × 720px]                                              │
│                                                                                              │
│ ┌──────────────────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ TEXT-SAFE ZONE (Z-Index: 10)                 │ │ 3D INTERACTION ZONE (Z-Index: 0 / Auto) │ │
│ │ • Eyebrow index tag                          │ │                                         │ │
│ │ • Display Headline H1                        │ │        [ KINETIC MONOLITH &             │ │
│ │ • Lead descriptive copy                      │ │          GYROSCOPIC SCULPTURE ]         │ │
│ │ • Interactive CTA buttons                    │ │                                         │ │
│ │                                              │ │ • Orbit center at [X: 2.2, Y: 0, Z: 0]  │ │
│ │ [Pointer events: AUTO]                       │ │ • Camera at [X: 0, Y: 0, Z: 6.8]        │ │
│ │ [Initial target: >WCAG AA contrast wash]     │ │ • Pointer capture bounded to canvas     │ │
│ └──────────────────────────────────────────────┘ └─────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Text-Safe Zone:** Occupies left 58% on desktop (`x: [0, 740px]`). Contains an invisible radial contrast scrim (`rgba(246, 249, 252, 0.95)` to `transparent`) with the initial design target of maintaining strong contrast exceeding WCAG AA requirements against dynamic specular reflections (final contrast will be validated during the accessibility/performance phase).
- **3D Interaction Zone:** Occupies right 42% on desktop. Pointer movement triggers subtle parallax tilt and gyroscopic velocity variation.
- **3D Viewport Target Dimensions:** Desktop height target ~`560px`, Tablet target ~`380px`, Mobile target ~`280px` are initial wireframe target dimensions rather than immutable requirements; final dimensions may be tuned during responsive implementation and performance optimization.
- **Accessibility & Static Fallback:** If WebGL fails context creation or `prefers-reduced-motion: reduce` is enabled, the 3D canvas is replaced with an ambient high-resolution CSS canvas rendering an SVG vector representation of the polyhedron with the implementation target of preventing layout shift when loading or replacing the 3D experience (final Core Web Vitals will be validated during the performance phase).

---

## 10. Cross-Page Consistency Rules
1. **Container Widths:** All canonical page containers share a unified `max-w-7xl` (`1280px`) limit with `px-6` (mobile), `px-8` (tablet), and `px-12` (desktop) padding.
2. **Section Hairlines:** All horizontal section dividers use `border-top: 1px solid #E5EAF1`.
3. **Card Borders & Radius:** Every card uses a solid `#FFFFFF` fill, `border: 1px solid #E5EAF1`, and `border-radius: 12px` (desktop) or `8px` (mobile).
4. **Typography Scales:** Display headlines strictly use *Space Grotesk*, body text uses *Inter*, and technical parameters use *JetBrains Mono*.
