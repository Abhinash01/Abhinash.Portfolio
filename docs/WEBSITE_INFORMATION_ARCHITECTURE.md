# WEBSITE INFORMATION ARCHITECTURE & USER JOURNEYS
**System:** Multi-Route SPA (Vite + React Router v6)  
**UX Objective:** Flawless Narrative Flow, Zero Friction Navigation, Fast Discovery  

---

## 1. Global Sitemap & Routing Taxonomy

The portfolio is structured as a high-performance single-page application with dedicated deep-linkable URLs for exhaustive case studies and secondary views.

```
/ (Root)
│
├── / (Homepage — Multi-Section Interactive Experience)
│     ├── #preloader (Asset & Shader Hydration Gate)
│     ├── #hero (Cinematic 3D Spatial Environment)
│     ├── #intro (Personal Philosophy & Value Proposition)
│     ├── #featured-work (Curated Flagship Case Studies)
│     ├── #expertise (Interactive Technical Stack & Architecture)
│     ├── #about (Backstory, Engineering Mindset, Philosophy)
│     ├── #journey (Education, Milestones, Career Timeline)
│     ├── #contact (Interactive Inquiries & Direct Comm Channels)
│     └── #footer (Global Metadata, Legal, Social Links)
│
├── /projects (Comprehensive Project Archive & Filterable Showcase)
│     ├── /projects/weathersentinel (WeatherSentinel Case Study)
│     ├── /projects/careertrack (CareerTrack Case Study)
│     ├── /projects/maa-kamakhya-hydraulic (Maa Kamakhya Hydraulic Case Study)
│     └── /projects/jay-hanuman-astro (Jay Hanuman Astro Centre Case Study)
│
├── /about (Extended Biography, Engineering Principles, Hardware/Dev Setup)
│
└── /contact (Dedicated Inquiries Hub, Interactive Booking & Direct Links)
```

---

## 2. Page Specifications & Content Taxonomy

### 2.1 The Homepage (`/`)
- **Primary Goal:** Immediate engagement and conversion of recruiters, managers, and clients through refined visual craft, verified full-stack projects, and clear contact triggers.
- **Section Progression:**
  1. **Preloader:** Precision numeric percentage ticker (00% to 100%), WebGL shader compilation check, and subtle brand monogram unveil.
  2. **Navigation Bar:** Fixed floating glass pill with logo mark, section shortcuts, available-for-work status beacon, and "Get in Touch" primary action.
  3. **Hero Section:** High-key studio canvas housing the interactive 3D metallic sculpture, editorial headline, micro-telemetry, and quick CTA links.
  4. **Personal Introduction:** Editorial statement explaining Abhinash's focus on engineering resilience and modern UI craftsmanship.
  5. **Featured Projects:** The core proof-of-work showcase featuring deep interactive cards for top builds.
  6. **Technical Expertise & Stack:** Interactive matrix categorizing Frontend, Backend, Databases, and Architecture.
  7. **About Section:** Narrative overview detailing background, problem-solving philosophy, and technical curiosity.
  8. **Education & Journey:** Chronological milestone timeline covering academic foundations and technical milestones.
  9. **Contact Section:** High-conversion contact form, direct email copy button, timezone indicator, and verified social links.
  10. **Footer:** Monospaced system telemetry, copyright notice, back-to-top magnetic button, and live local time (`Asia/Kolkata`).

### 2.2 The All-Projects Archive (`/projects`)
- **Primary Goal:** For hiring managers wishing to review Abhinash's complete body of work.
- **Components:**
  - Multi-tag category filter (`All`, `Full-Stack Systems`, `Enterprise & Commercial`, `Dashboards & Utilities`).
  - Search input with instant client-side filtering.
  - Card/Table toggle view (Card view for visual exploration; Table/List view for dense, fast technical review).

### 2.3 Individual Project Case Study Route (`/projects/:slug`)
- **Primary Goal:** Deep-dive technical validation demonstrating engineering rigor.
- **Uniform Case Study Structure:**
  1. *Hero Header:* Title, one-line summary, project scope, role, timeline, and live links (GitHub + Production URL).
  2. *Key Technical Specifications:* Core stack, database model, API architecture, and functional scope.
  3. *Problem Statement:* The core operational friction or workflow challenge addressed.
  4. *Project Objectives:* Concrete benchmarks established prior to building.
  5. *System Architecture & Data Flow:* Component and database relationship breakdown.
  6. *Verified Implemented Features:* Detailed breakdowns of currently working functionality.
  7. *Planned Enhancements (Roadmap):* Slated future improvements.
  8. *Technical Challenges & Trade-offs:* Frank discussion of engineering hurdles and decisions made.
  9. *Measurable Outcomes & Learnings:* Practical results, engineering lessons, and architectural improvements.
  10. *Next / Previous Project Navigation:* Seamless continuity between studies.

### 2.4 The Extended About Route (`/about`)
- In-depth background, engineering values, workspace setup, books that shaped his thinking, and philosophy on code craftsmanship.

### 2.5 The Dedicated Contact Route (`/contact`)
- Extended contact form with project scope selectors, direct email, LinkedIn, and GitHub links.

---

## 3. User Journey Paths & Funnel Architecture

### 3.1 Persona A: The Technical Recruiter / Talent Scout
```
[ Land on Hero ] ──► [ See Clean Typography & Title ] ──► [ Scroll to Featured Projects ]
         │                                                            │
         ▼                                                            ▼
[ Scan Tech Expertise Matrix ] ◄───────────────────────── [ Click Case Study ]
         │                                                            │
         ▼                                                            ▼
[ Click "Contact / Resume" CTA ] ──► [ Direct Email / Form Submission ]
```
- **Primary Need:** Rapid validation of skills (React, TypeScript, Node.js, Databases), project credibility, and easy communication.
- **Design Adaptation:** Sticky navigation with direct "Contact" button and immediate resume trigger.

### 3.2 Persona B: The Engineering Manager / VP of Engineering
```
[ Land on Hero ] ──► [ Review 3D Performance & Readability ] ──► [ Jump to Case Study ]
                                                                          │
                                                                          ▼
[ Review System Architecture & Database Schema ] ◄────────────────────────┘
         │
         ▼
[ Open Verified GitHub Repository ] ──► [ Inspect Clean Code & Types ]
         │
         ▼
[ Send Direct Inquiry for Engineering Role ]
```
- **Primary Need:** Evidence of architectural maturity, clean code, error handling, and performance optimization.
- **Design Adaptation:** Clear architecture diagrams, tech stack tags, and direct GitHub links on every project.

### 3.3 Persona C: The Creative Director / Agency Partner
```
[ Land on Hero ] ──► [ Interact with 3D Monolith ] ──► [ Experience Smooth Lenis Scroll ]
         │                                                      │
         ▼                                                      ▼
[ Observe Micro-interactions & Typographic Polish ] ◄───────────┘
         │
         ▼
[ Book Discovery Call for Flagship Web Experience ]
```
- **Primary Need:** High visual taste, bespoke interactions, and smooth animations that push web standards.
- **Design Adaptation:** High-key lighting, kinetic 3D scene, and refined GSAP choreography.
