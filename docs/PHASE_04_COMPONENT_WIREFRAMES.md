# PHASE 04 — REUSABLE COMPONENT WIREFRAME SPECIFICATIONS
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 04 of 07  
**File Location:** `docs/PHASE_04_COMPONENT_WIREFRAMES.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Master Component Architectural Standards

Every interface element in the portfolio conforms to a strict component lifecycle, explicit visual hierarchy, multi-state definitions (Default, Hover, Focus, Active, Disabled), and full accessibility compliance (WCAG 2.1 AA).

---

## 2. Global Shell & Navigation Components

### 2.1 Component: Floating Desktop Navbar (`<DesktopNavbar />`)
- **Classification:** Global Persistent Shell Component.
- **Anatomy:**
  ```text
  ┌────────────────────────────────────────────────────────────────────────────────────────────┐
  │ [AG] ABHINASH GUPTA   │   Work   Expertise   Journey   About   Contact   │ (•) Avail  [Resume]│
  └────────────────────────────────────────────────────────────────────────────────────────────┘
  ```
  1. Container: Pill frame (`h-14`, `rounded-full`, `bg-white/85`, `backdrop-blur-md`, `border border-[#E5EAF1]`, `shadow-card`).
  2. Brand Monogram: Square glyph badge (`32x32px`, `bg-[#EEF2F8]`, `text-[#111827]`, `font-bold`).
  3. Nav Links: Flex row with 5 text anchors (Space Grotesk / Inter 500, `text-sm`, `text-[#64748B]`).
  4. Status Beacon: Circular pulse dot (`8x8px`, `#10B981` if active, `#F59E0B` if `[REQUIRES USER CONFIRMATION]`).
  5. Primary Action: Solid dark button (`bg-[#101827]`, `text-white`, `text-xs`, `font-mono`, `px-4`, `py-2`).
- **States:**
  - *Default:* Baseline floating pill at `top: 24px`.
  - *Scrolled (`scrollY > 20px`):* Elevates shadow, compresses top margin to `12px`, height to `50px`.
  - *Hover (Link):* Text transitions to `#111827`, 2px royal blue indicator bottom highlight.
  - *Focus-Visible:* `outline: 2px solid #4169E1`, `outline-offset: 3px`.
- **Accessibility:** Semantic `<nav aria-label="Primary Navigation">`, keyboard tab-index, active page marked with `aria-current="page"`.

---

### 2.2 Component: Mobile Header & Slide-Down Drawer (`<MobileNavigation />`)
- **Classification:** Global Mobile Shell Component (`< 768px`).
- **Anatomy:**
  - Fixed header: Monogram + Wordmark left, Beacon + Hamburger toggle button right (`min-h-[48px]`).
  - Drawer sheet: Full-viewport vertical panel containing semantic anchor stack, social links, resume trigger, and timezone ticker.
- **States:**
  - *Closed:* Hidden with `aria-hidden="true"`, `pointer-events: none`.
  - *Open:* Slides down (`translateY(0)`), background scroll locked (`body { overflow: hidden }`), focus trapped inside drawer, `Escape` key closes drawer.
- **Accessibility:** `role="dialog"`, `aria-modal="true"`, `aria-expanded="true/false"` on toggle button.

---

### 2.3 Component: Mobile Sticky Action HUD (`<MobileHUD />`)
- **Classification:** Reusable Handheld Floating Control Component.
- **Anatomy:**
  ```text
  ┌────────────────────────────────────────┐
  │  [↓] Resume (PDF)   │   Let's Talk ↗   │
  └────────────────────────────────────────┘
  ```
  - Docked pill at `bottom: max(16px, env(safe-area-inset-bottom))`, centered, max width `380px`.
  - Dual actions: Secondary left action (`Resume ↓`), Primary right action (`Let's Talk ↗`).
- **States:**
  - *Active:* Visible on idle and upward scroll.
  - *Collapsed:* On downward scroll (> 12px), auto-hides via `transform: translateY(120%)` with `250ms ease`.

---

## 3. Hero & Content Staging Components

### 3.1 Component: Hero Content Block (`<HeroContentBlock />`)
- **Classification:** Page-Specific Template Component (`/` Homepage).
- **Anatomy:**
  1. Eyebrow: Monospaced metadata tag (`JetBrains Mono`, `text-xs`, uppercase, `text-[#4169E1]`).
  2. Display Headline (H1): Clamped fluid display typography (`Space Grotesk 700`, `text-5xl lg:text-7xl`, `text-[#111827]`).
  3. Lead Subhead: Editorial paragraph (`Inter 400`, `text-lg`, `text-[#64748B]`, max-width `540px`).
  4. Dual Action CTA Group: Primary solid button + Secondary ghost button.
  5. Technology Telemetry Bar: Live verified badge strip.
- **Responsive Behavior:** 7 columns on desktop, stacks vertically above 3D canvas on mobile.

---

### 3.2 Component: 3D Canvas Container (`<SpatialCanvasContainer />`)
- **Classification:** Reusable Spatial Graphics Component.
- **Anatomy:**
  - Outer Wrapper: Bounded viewport container with explicit aspect ratio and initial wireframe target dimensions (`h-[560px]` desktop, `h-[280px]` mobile; to be calibrated during responsive implementation).
  - Three.js WebGL `<canvas>`: Positioned at `z-index: 0` with pointer capture bounded to canvas footprint.
  - Radial Contrast Wash: Layered white-to-transparent scrim behind typography to maintain high contrast (initial design target exceeding WCAG AA requirements; final ratios will be verified during accessibility validation).
  - 2D Accessible Fallback Canvas: Clean SVG vector rendering of beveled polyhedron with radial background gradient for low-end hardware or `prefers-reduced-motion: reduce`.
- **States:**
  - *Loading:* Monospaced progress counter.
  - *Active:* 60 FPS interactive orbit with pointer parallax tracking.
  - *Context Lost:* Instant seamless swap to 2D vector fallback.

---

### 3.3 Component: Section Header (`<SectionHeader />`)
- **Classification:** Universal Reusable Component.
- **Anatomy:**
  ```text
  // 02. SELECTED WORK (TOP 3 FLAGSHIPS)                     [ VIEW COMPLETE ARCHIVE (4) ↗ ]
  ```
  1. Index Eyebrow: `// 02.` in `JetBrains Mono`, `text-[#4169E1]`.
  2. Section Title: `Space Grotesk 700`, `text-2xl lg:text-3xl`, `text-[#111827]`.
  3. Optional Shortcut CTA: Inline link with animated external arrow `↗` aligned to right edge.

---

## 4. Project Showcase Components

### 4.1 Component: Featured Flagship Project Card (`<FlagshipProjectCard />`)
- **Classification:** Reusable Showcase Component (Used for *WeatherSentinel* on Homepage).
- **Anatomy:**
  ```text
  ┌────────────────────────────────────────────────────────────────────────────────────────┐
  │ 01 // WEATHERSENTINEL — ATMOSPHERIC INTELLIGENCE DASHBOARD                             │
  │ ┌─────────────────────────────────────────────────┐  Real-time environmental telemetry │
  │ │ [ 16:9 BROWSER MOCKUP ]                         │  dashboard providing live weather, │
  │ └─────────────────────────────────────────────────┘  forecasts, and air quality index. │
  │ Tech: [React] [Node.js] [Express] [REST API]           [ EXPLORE COMPLETE CASE STUDY ↗ ]│
  └────────────────────────────────────────────────────────────────────────────────────────┘
  ```
  - Full-width container (`bg-white`, `border border-[#E5EAF1]`, `rounded-xl`, `p-8`).
  - Left: 16:9 high-resolution browser preview frame with vector UI artwork.
  - Right: Editorial narrative, challenge context, and verified tech badges.
  - Bottom bar: Action button `Explore Complete Case Study ↗` (`/projects/weathersentinel`).
- **States:**
  - *Hover:* Card elevates `translateY(-4px)`, border darkens to `#CBD5E1`, image zooms `scale: 1.025`, royal blue rim glow `rgba(65, 105, 225, 0.25)`.
  - *Focus-Visible:* `outline: 2px solid #4169E1`, `outline-offset: 4px`.

---

### 4.2 Component: Standard Project Card (`<StandardProjectCard />`)
- **Classification:** Reusable Project Component (Used on Homepage for *CareerTrack*, *Maa Kamakhya Hydraulic*, and in Archive for all 4 candidates).
- **Anatomy:**
  - Card box (`bg-white`, `border border-[#E5EAF1]`, `rounded-xl`, `p-6`).
  - Header: Index + Title (Space Grotesk 600, `text-xl`).
  - 16:9 media container with internal border.
  - Short description: Inter 400 `14px`, 2-line clamp.
  - Tech badge row: JetBrains Mono `12px` pills.
  - Primary button: `Explore Case Study ↗`.
- **States:**
  - *Hover:* Card elevates `translateY(-3px)`, box shadow `--shadow-card-hover`.

---

### 4.3 Component: Project Metadata Row (`<ProjectMetadataRow />`)
- **Classification:** Case Study Detail Component.
- **Anatomy:**
  ```text
  TIMELINE: 2025    ROLE: Full Stack Developer    STATUS: [REQUIRES CONFIRMATION]
  GITHUB: [REQUIRES CONFIRM]    DEMO: [REQUIRES CONFIRM]    TECH: React, Node, Express
  ```
  - Grid of 6 key metadata parameters formatted in `JetBrains Mono` and `Inter`.
  - Verified items rendered in dark text; unverified items rendered with warning badge `[REQUIRES USER CONFIRMATION]`.

---

## 5. Technical Matrix & Journey Components

### 5.1 Component: Technical Capability Column (`<TechCapabilityColumn />`)
- **Classification:** Reusable Matrix Component (3-column on desktop, stacked on mobile).
- **Anatomy:**
  - Card container (`bg-white`, `border border-[#E5EAF1]`, `p-6`, `rounded-xl`).
  - Category header: Monospaced index `01 / FRONTEND & SPATIAL WEB`.
  - Verified bullet list: Green indicator dot + technology title.
  - Unconfirmed section divider: Muted warning header `[CONFIRMATION REQUIRED]`.
  - Unconfirmed bullet list: Amber indicator dot + candidate technology.

---

### 5.2 Component: Timeline Milestone Item (`<TimelineMilestoneItem />`)
- **Classification:** Reusable Journey Component.
- **Anatomy:**
  - Chronological vertical node: Hairline `#E5EAF1` with royal blue circular marker (`12x12px`, `#4169E1`).
  - Date & Period: Monospaced tag `2025–PRESENT`.
  - Milestone Title: Space Grotesk 600 SemiBold.
  - Descriptive Summary: Inter 400 Regular narrative.
  - Placeholder Tag: Explicit marker if academic credential requires user verification.

---

## 6. Form & Feedback Components

### 6.1 Component: Validated Input Field (`<FormTextInput />`)
- **Classification:** Reusable Form Component.
- **Anatomy:**
  - Label: Inter 500 Medium `14px` (`text-[#111827]`), with asterisk for required fields.
  - Input container: Height `48px`, `bg-white`, `border border-[#E5EAF1]`, `rounded-lg`, `px-4`.
  - Error helper text: Inter 400 `12px`, `text-[#DC2626]` with alert icon.
- **States:**
  - *Default:* Border `#E5EAF1`, text `#111827`, placeholder `#94A3B8`.
  - *Focus:* Border `#4169E1`, box shadow `0 0 0 3px rgba(65, 105, 225, 0.12)`.
  - *Error:* Border `#EF4444`, icon displayed on right edge.
  - *Disabled:* Background `#F8FAFC`, cursor `not-allowed`.

---

### 6.2 Component: Click-to-Copy Email Pill (`<CopyEmailPill />`)
- **Classification:** Reusable High-Conversion Utility Component.
- **Anatomy:**
  ```text
  [ ✉ contact@domain.dev   ⎘ Click to Copy ]
  ```
  - Surface: `#EEF2F8` container, `rounded-full`, `px-5`, `py-3`, `border border-[#E5EAF1]`.
  - Interaction: Clicking triggers native `navigator.clipboard.writeText()` and renders an instant toast notification: *"Email address copied to clipboard."*

---

## 7. System State Components

### 7.1 Component: Full-Page Preloader Overlay (`<PreloaderOverlay />`)
- **Classification:** Progressive Enhancement Component.
- **Anatomy:**
  - Full-screen opaque curtain (`bg-[#F6F9FC]`, `z-index: 100`).
  - Interlocking geometric `AG` monogram glyph.
  - Digital progress counter (00% to 100%) in `JetBrains Mono`.
  - Secondary shader compiling ticker.
  - Persistent bypass control: `[ Skip Animation — Esc / Space ]`.
- **Ceiling Rule:** Enforces hard timeout of `2.5 seconds` (`MAX_PRELOADER_TIMEOUT = 2500ms`), dismissing automatically regardless of background asset status.

---

### 7.2 Component: Error State & Fallback Screen (`<ErrorRecoveryCard />`)
- **Classification:** Reusable Error Boundary Component (Used on `/404` and route failures).
- **Anatomy:**
  - Error code display: `404 // NOT FOUND` in Space Grotesk 700.
  - Recovery narrative: Explanation of missing coordinate.
  - Dual action buttons: `Return to Homepage (/)` and `Browse Projects Archive (4)`.
