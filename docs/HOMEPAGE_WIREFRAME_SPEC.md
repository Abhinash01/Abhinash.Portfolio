# HOMEPAGE WIREFRAME & COMPONENT SPECIFICATIONS
**Target Page:** `/` (Index Route)  
**Layout Model:** Editorial Fluid Single-Page Flow with Lenis Smooth Scroll  
**Container Architecture:** `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`  
**Interface Theme:** Primary Minimal Luxury Light Interface (`#F6F9FC` canvas, `#FFFFFF` opaque surfaces)  

---

## 1. Section 01: Preloader (`#preloader`)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                     [ AG MONOGRAM GLYPH ]                      │
│                                                                │
│                   ABHINASH GUPTA // ARCHITECT                  │
│                     [██████████░░░░] 74%                       │
│                   INITIALIZING SHADERS & MESH                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Hydrate WebGL textures, compile shaders, verify critical fonts, and provide a clean curtain-raiser.
- **Content:**
  - Geometric interlocking `AG` vector glyph.
  - Digital progress counter (00% to 100%) formatted in `JetBrains Mono`.
  - Secondary status ticker: `COMPILED_VERTEX_BUFFERS` -> `INITIALIZED_CAMERA_RIG` -> `SYSTEM_READY`.
- **Interactions:**
  - On 100% completion, the preloader smoothly splits vertically or fades with a custom cubic-bezier curve (`ease: [0.76, 0, 0.24, 1]`, duration: 750ms).
- **DOM ID:** `id="preloader-overlay"`, progress element: `id="preloader-counter"`.

---

## 2. Section 02: Floating Navigation Bar (`#navbar`)

```
┌────────────────────────────────────────────────────────────────┐
│  [AG] ABHINASH GUPTA      • Projects  • Stack  • Journey      │
│  CREATIVE FULL STACK      • About     • Contact      [TALK ↗]  │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Persistent orientation and instant global access.
- **Layout:** Floating glass pill docked `24px` from viewport top, centered, max width `1080px`.
- **Visual Treatment:** `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)`, border: `1px solid #E5EAF1`, subtle ambient shadow. *(Note: This is the ONLY element using glassmorphism on the page to prevent visual clutter).*
- **Content Elements:**
  - Left: Brand monogram + Name `ABHINASH GUPTA` + micro-title.
  - Center: Nav links (`Work`, `Expertise`, `About`, `Journey`, `Contact`).
  - Right: Live status badge (green pulsing indicator dot: `Available`) + Magnetic CTA button (`Let's Connect`).
- **Interactions:** Magnetic cursor snap, smooth section scrolling, mobile slide-down drawer.
- **DOM ID:** `id="main-navigation"`, CTA button: `id="nav-cta-contact"`.

---

## 3. Section 03: Hero Section (`#hero`)

```
┌────────────────────────────────────────────────────────────────┐
│  [ LIVE_METRICS: 28.61° N // NEW DELHI // TARGET 60 FPS ]      │
│                                                                │
│  ABHINASH GUPTA                   ╭─────────────────────────╮  │
│  CREATIVE FULL STACK              │   INTERACTIVE 3D        │  │
│  DEVELOPER                        │   CHROMIUM & GLASS      │  │
│                                   │   GYROSCOPE SCULPTURE   │  │
│  Building Digital Experiences.    │   (OR GRACEFUL WEBP     │  │
│  Beyond the Ordinary.             │    FALLBACK ON LOW-END) │  │
│                                   ╰─────────────────────────╯  │
│  [ EXPLORE SELECTED WORK ↓ ]      [ GET IN TOUCH ↗ ]           │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Create an immediate emotional impression and position Abhinash as a serious full-stack engineering creative.
- **Usability & Readability Architecture:**
  - **Z-Index Strategy:** Three.js canvas container is strictly `z-index: 0` with `pointer-events: none` so text selection, links, and buttons on `z-index: 10` are 100% unimpeded.
  - **Readability Scrim:** A subtle white radial wash behind headline typography guarantees a minimum 14.8:1 contrast ratio against chrome specular highlights.
- **Content Elements:**
  - Metadata eyebrow: `[ CREATIVE FULL STACK DEVELOPER // 2026 EDITION ]`.
  - Main Display Headline: `Building Digital Experiences. Beyond the Ordinary.`
  - Lead subhead: *"Engineering scalable web architectures and choreographing spatial 3D interfaces with uncompromising craftsmanship."*
  - Dual CTAs: Primary dark navy button `Explore Selected Work` (`#featured-work`), secondary ghost pill `Get in Touch` (`#contact`).
- **DOM ID:** `id="hero-section"`, 3D Canvas wrapper: `id="hero-3d-canvas-container"`.

---

## 4. Section 04: Personal Introduction (`#intro`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 01. PHILOSOPHY                                             │
│                                                                │
│  "Most developer portfolios are built to show you code.        │
│   I build digital systems that make you feel the craft."       │
│                                                                │
│  Full-stack software engineering is not merely connecting      │
│  APIs to databases. It is the art of building resilient,      │
│  secure, and scalable backends, paired with responsive,        │
│  fluid, and intuitive frontend interfaces.                     │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Establish voice, professional philosophy, and engineering values.
- **Layout:** Large editorial blockquote (Space Grotesk, 36px desktop) with two-column narrative layout below.
- **Visual Treatment:** Opaque white surfaces (`#FFFFFF`) with subtle 1px border (`#E5EAF1`) highlighting core values: *Architectural Integrity*, *Fluid Spatial UX*, and *Reliable Performance*. (No frosted glass).
- **DOM ID:** `id="intro-section"`.

---

## 5. Section 05: Featured Projects Showcase (`#featured-work`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 02. SELECTED WORK (3 FEATURED)       [ VIEW ARCHIVE (4) ↗ ]│
│                                                                │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ 01 // WEATHERSENTINEL (FEATURED FLAGSHIP 01)              │ │
│  │ Weather Dashboard & Environmental Telemetry Application   │ │
│  │ [React] [Node] [Express] [API]     [EXPLORE CASE STUDY ↗] │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌───────────────────────────────┐  ┌────────────────────────┐ │
│  │ 02 // CAREERTRACK             │  │ 03 // MAA KAMAKHYA HYD │ │
│  │ Job Application Pipeline      │  │ Industrial Machinery   │ │
│  │ Tracking & Analytics Tool     │  │ Catalog & RFQ Portal   │ │
│  │ [React] [Node] [Express] [TS] │  │ [React] [Node] [Tailw] │ │
│  │ [EXPLORE CASE STUDY ↗]        │  │ [EXPLORE CASE STUDY ↗] │ │
│  └───────────────────────────────┘  └────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Deliver verifiable evidence of engineering capability and product design.
- **Layout:** Asymmetric editorial grid showcasing top 3 featured builds (large hero card for flagship #1, side-by-side cards for #2 & #3), with direct link to the 4-candidate archive.
- **Visual Treatment:** Solid opaque `#FFFFFF` card surfaces, 1px `#E5EAF1` border, hover elevation with royal blue rim glow, interactive image zoom (`scale: 1.03`). No blurry glassmorphism.
- **DOM ID:** `id="featured-work-section"`.

---

## 6. Section 06: Technical Expertise & Architecture Matrix (`#expertise`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 03. TECHNICAL CAPABILITIES                                 │
│                                                                │
│  [ FRONTEND & 3D ]   [ BACKEND & APIS ]   [ ARCHITECTURE & DB ]│
│  • React             • Node.js / Express  • PostgreSQL / MySQL │
│  • TypeScript        • REST APIs          • MongoDB            │
│  • Three.js / R3F    • JWT Auth           • Git / GitHub       │
│  • Tailwind CSS      • WebSockets         • Vite Tooling       │
│  • GSAP Motion       • Middleware Systems • Responsive Design  │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Fast, categorized scanning for technical recruiters and engineering managers.
- **Layout:** 3-column architectural card matrix with interactive hover highlighting.
- **Visual Treatment:** Monospaced skill chips with clean typography and categorical grouping on opaque `#FFFFFF` containers.
- **DOM ID:** `id="expertise-section"`.

---

## 7. Section 07: Narrative About Section (`#about`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 04. THE ARCHITECT                                          │
│                                                                │
│  ┌───────────────────────────┐  Abhinash Gupta is a creative   │
│  │                           │  full-stack developer driven by │
│  │   [ EDITORIAL PORTRAIT    │  building web applications that │
│  │     MOCKUP IN STUDIO ]    │  balance robust architectures   │
│  │                           │  with smooth digital craft.     │
│  │                           │                                 │
│  └───────────────────────────┘  [ READ EXTENDED STORY ↗ ]      │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Humanize the engineer, present career motivation, and establish professional credibility.
- **Layout:** 2-column layout (Left: Editorial portrait; Right: Biography, core engineering principles, and credentials).
- **DOM ID:** `id="about-section"`.

---

## 8. Section 08: Education & Professional Journey (`#journey`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 05. CHRONOLOGY & MILESTONES                                │
│                                                                │
│  ──○ 2024–PRESENT // INDEPENDENT FULL STACK & CREATIVE DEV    │
│    Building client web systems, interactive tools, & 3D UIs.   │
│                                                                │
│  ──○ 2022–2024 // COMPUTER SCIENCE & ENGINEERING FOUNDATIONS   │
│    Data structures, algorithms, relational database systems.   │
│                                                                │
│  ──○ TECHNICAL RIGOR & CONTINUOUS LEARNING                     │
│    Modern React architectures, TypeScript, WebGL spatial UIs.  │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Present academic grounding and career milestones honestly.
- **Layout:** Vertical timeline with hairline connection line (`#E5EAF1`) and royal blue node markers (`#4169E1`).
- **DOM ID:** `id="journey-section"`.

---

## 9. Section 09: Interactive Contact Section (`#contact`)

```
┌────────────────────────────────────────────────────────────────┐
│  // 06. INITIATE CONTACT                                       │
│  LET'S BUILD SOMETHING EXTRAORDINARY.                          │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Your Name          [                             ]       │  │
│  │ Email Address      [                             ]       │  │
│  │ Project Type       [ Full-Stack / Web App / Consultation]│  │
│  │ Message            [                             ]       │  │
│  │                    [ TRANSMIT INQUIRY ↗ ]                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  Direct: contact@abhinashgupta.dev • Location: New Delhi, IN   │
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Frictionless communication point for job offers, contract engagements, and collaborations.
- **Layout:** High-impact callout with integrated accessible form, immediate copy-to-clipboard email pill, and live timezone display.
- **DOM ID:** `id="contact-section"`, form: `id="contact-inquiry-form"`.

---

## 10. Section 10: System Footer (`#footer`)

```
┌────────────────────────────────────────────────────────────────┐
│  ABHINASH GUPTA © 2026 // ALL RIGHTS RESERVED                  │
│  [ REACT 18 • THREE.JS • TAILWIND • LENIS ]    [ BACK TO TOP ↑]│
└────────────────────────────────────────────────────────────────┘
```
- **Purpose:** Closure, technical credits, accessibility declaration, and legal notice.
- **Layout:** Deep navy (`#101827`) banner with white monospaced metadata and quick back-to-top magnetic button.
- **DOM ID:** `id="global-footer"`, back-to-top button: `id="btn-scroll-top"`.
