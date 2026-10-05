# PHASE 04 — MOBILE UI/UX WIREFRAME SPECIFICATIONS
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 03 of 07  
**File Location:** `docs/PHASE_04_MOBILE_WIREFRAMES.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Handheld Editorial Philosophy & Touch Architecture

### 1.1 Mobile Is Not a Shrunken Desktop
Mobile viewports are architected as **bespoke handheld editorial spaces**. Rather than compressing desktop multi-column layouts into cramped rows, the mobile experience restructures content into a deliberate thumb-reach flow, optimizing for touch precision, one-handed operation, battery conservation, and an implementation target of zero layout shift.

### 1.2 Core Mobile Ergonomics & Physics
1. **The Thumb Zone Rule:** Primary navigational actions, bottom HUD controls, and interactive CTAs are anchored in the lower 45% of the viewport.
2. **Strict Touch Target Dimensions:** Every interactive button, tag, drawer link, and form input enforces a minimum hit area of `48px × 48px` (`min-h-[48px]`).
3. **Zero Horizontal Layout Bleed:** All parent containers enforce `overflow-x: hidden` with fluid text wrapping; horizontal scrolling is strictly reserved for self-contained, swipeable code blocks or data tables with explicit visual cues.
4. **Spatial Battery & GPU Optimization:** The 3D canvas on mobile restricts frame loop ticks, clamps pixel ratio to `Math.min(window.devicePixelRatio, 1.5)`, limits geometric subdivisions, and respects system low-power mode.

---

## 2. Breakpoint Breakdown & Structural Shifts

| Viewport Tier | Exact Width | Device Profiles | Structural Adaptation & Changes |
| :--- | :--- | :--- | :--- |
| **Small Mobile** | `320px` | iPhone SE (1st Gen), Compact Androids | Extreme compact grid: 12px gutters, 28px headline, stacked tags, all CTAs 100% full width. |
| **Standard Mobile**| `375px` | iPhone SE (2nd/3rd Gen), iPhone mini | 16px gutters, 32px headline, compact card padding, touch-optimized card preview. |
| **Modern Baseline**| `390px` | iPhone 14/15/16, Google Pixel 7/8 | 16px gutters, 36px headline, 280px initial 3D canvas height target, standard mobile HUD active. |
| **Large Mobile** | `430px` | iPhone 15/16 Pro Max, Galaxy Ultra | 20px gutters, 40px headline, expanded card padding, rich typography breathing room. |

---

## 3. Mobile Navigation & Drawer Architecture

### 3.1 Mobile Header Bar (`height: 56px`)
- **Fixed Position:** Docked at top (`top: 0`, `z-index: 50`) with `rgba(255, 255, 255, 0.92)` glass ground and `1px solid #E5EAF1` bottom border.
- **Anatomy:**
  - Left: `[AG]` Monogram badge (`32x32px`) + `Abhinash`.
  - Right: Configurable status beacon dot (`8x8px`) + Hamburger menu button (`44x44px` touch hit area).

```
┌────────────────────────────────────────┐
│ [AG] Abhinash             (•)  [≡ MENU]│
└────────────────────────────────────────┘
```

### 3.2 Slide-Down Navigation Drawer (`#mobile-menu`)
- **Trigger:** Tapping `[≡ MENU]` expands the drawer using `translateY(0)` with a duration of `260ms` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Accessibility:** Background page scrolling is locked (`body { overflow: hidden }`), keyboard focus is trapped inside the menu, and `Escape` key closes the drawer with focus restored to the toggle.

```
┌────────────────────────────────────────┐
│ [AG] Abhinash               [✕ CLOSE]  │
├────────────────────────────────────────┤
│                                        │
│  01 // SELECTED WORK           (4) ↗   │
│  02 // TECHNICAL EXPERTISE             │
│  03 // ENGINEERING JOURNEY             │
│  04 // BIOGRAPHY & PRINCIPLES          │
│  05 // INITIATE COLLABORATION          │
│                                        │
│  ────────────────────────────────────  │
│  DIRECT CHANNELS                       │
│  • GitHub (Verified Profile) ↗         │
│  • LinkedIn [REQUIRES CONFIRMATION]    │
│  • Twitter/X [REQUIRES CONFIRMATION]   │
│  • Email [REQUIRES CONFIRMATION]       │
│                                        │
│  ┌───────────────────────────────────┐ │
│  │ [↓] DOWNLOAD RESUME (PDF)         │ │
│  │ [REQUIRES USER CONFIRMATION]      │ │
│  └───────────────────────────────────┘ │
│                                        │
│  Status: [REQUIRES USER CONFIRMATION]  │
│  Timezone: [REQUIRES CONFIRMATION]     │
└────────────────────────────────────────┘
```

---

## 4. Mobile Homepage Wireframe (`/` at 390px Baseline)

```
┌────────────────────────────────────────┐
│ [AG] Abhinash             (•)  [≡ MENU]│
├────────────────────────────────────────┤
│                                        │
│ // CREATIVE FULL STACK DEVELOPER       │
│                                        │
│ Building Digital                       │
│ Experiences.                           │
│ Beyond Ordinary.                       │
│                                        │
│ Engineering scalable web architectures │
│ and choreographing spatial 3D          │
│ interfaces with precision.             │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │                                    │ │
│ │   [ 3D KINETIC MONOLITH CANVAS ]   │ │
│ │   Height: 280px (Initial Target)   │ │
│ │   Touch orbit & gyro damping       │ │
│ │   (Single-finger gesture)          │ │
│ │                                    │ │
│ └────────────────────────────────────┘ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ EXPLORE SELECTED WORK (3)        ↓ │ │
│ └────────────────────────────────────┘ │
│ ┌────────────────────────────────────┐ │
│ │ GET IN TOUCH                     ✉ │ │
│ └────────────────────────────────────┘ │
│                                        │
├────────────────────────────────────────┤
│ // 01. PHILOSOPHY                      │
│                                        │
│ "Most developer portfolios show code.  │
│  I construct digital systems that      │
│  communicate craft."                   │
│                                        │
│ Full-stack software engineering is the │
│ discipline of architecting reliable    │
│ data boundaries paired with tactile    │
│ interfaces.                            │
├────────────────────────────────────────┤
│ // 02. SELECTED WORK (TOP 3 FLAGSHIPS) │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ 01 // WEATHERSENTINEL              │ │
│ │ Real-Time Atmospheric Dashboard    │ │
│ │ ┌────────────────────────────────┐ │ │
│ │ │ [ 16:9 BROWSER MOCKUP ]        │ │ │
│ │ └────────────────────────────────┘ │ │
│ │ Environmental intelligence app     │ │
│ │ providing live weather data,       │ │
│ │ forecasts, and air quality index.  │ │
│ │                                    │ │
│ │ Stack: [React] [Node] [Express]    │ │
│ │ [ EXPLORE CASE STUDY ↗ ]           │ │
│ └────────────────────────────────────┘ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ 02 // CAREERTRACK                  │ │
│ │ Job Application Pipeline Manager   │ │
│ │ ┌────────────────────────────────┐ │ │
│ │ │ [ 16:9 BROWSER MOCKUP ]        │ │ │
│ │ └────────────────────────────────┘ │ │
│ │ Full-lifecycle Kanban stage        │ │
│ │ tracking tool for developers.      │ │
│ │                                    │ │
│ │ Stack: [React] [Node] [Express]    │ │
│ │ [ EXPLORE CASE STUDY ↗ ]           │ │
│ └────────────────────────────────────┘ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ 03 // MAA KAMAKHYA HYDRAULIC       │ │
│ │ Industrial Machinery Platform      │ │
│ │ ┌────────────────────────────────┐ │ │
│ │ │ [ 16:9 BROWSER MOCKUP ]        │ │ │
│ │ └────────────────────────────────┘ │ │
│ │ High-performance equipment        │ │
│ │ catalog and RFQ quotation portal.  │ │
│ │                                    │ │
│ │ Stack: [React] [Node] [Tailwind]   │ │
│ │ [ EXPLORE CASE STUDY ↗ ]           │ │
│ └────────────────────────────────────┘ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ VIEW COMPLETE ARCHIVE (4)        ↗ │ │
│ └────────────────────────────────────┘ │
├────────────────────────────────────────┤
│ // 03. TECHNICAL CAPABILITIES          │
│                                        │
│ [Frontend] [Backend] [Systems & Data]  │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ • HTML5 & Semantic Web             │ │
│ │ • Modern CSS3 / Vanilla CSS        │ │
│ │ • JavaScript (ES6+ Standards)      │ │
│ │ • React Component Modeling         │ │
│ │                                    │ │
│ │ [CONFIRMATION REQUIRED]            │ │
│ │ • TypeScript Architecture          │ │
│ │ • Three.js / R3F Graphics          │ │
│ │ • GSAP Animation Library           │ │
│ └────────────────────────────────────┘ │
├────────────────────────────────────────┤
│ // 04. ENGINEERING TIMELINE            │
│                                        │
│  (●) 2025–PRESENT                      │
│   │  Independent Full Stack & Spatial  │
│   │  Web Development.                  │
│   │                                    │
│  (●) [REQUIRES USER CONFIRMATION]      │
│   │  Computer Science & Engineering    │
│   │  Foundations [Degree/Institution]  │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ [↓] DOWNLOAD RESUME (PDF)          │ │
│ │ [REQUIRES USER CONFIRMATION]       │ │
│ └────────────────────────────────────┘ │
├────────────────────────────────────────┤
│ // 05. INITIATE COLLABORATION          │
│                                        │
│ Have an ambitious engineering project, │
│ role, or challenge? Let's talk.        │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ INITIATE DIRECT INQUIRY ↗          │ │
│ └────────────────────────────────────┘ │
│ ┌────────────────────────────────────┐ │
│ │ ✉ [COPY EMAIL ADDRESS]         [⎘] │ │
│ └────────────────────────────────────┘ │
├────────────────────────────────────────┤
│ FOOTER                                 │
│ © 2026 Abhinash Gupta. All rights res. │
│ Built with React, Vite & Three.js (Pl) │
│                                        │
│ [BOTTOM CLEARANCE BUFFER: pb-24]       │
└────────────────────────────────────────┘
```

---

## 5. Mobile Floating Action HUD (`<MobileHUD />`)

### 5.1 Architecture & Safe-Area Inset
- **Fixed Position:** Docked at bottom of viewport: `bottom: max(16px, env(safe-area-inset-bottom))`.
- **Dimensions:** Width `calc(100vw - 32px)`, max-width `380px`, height `48px`, centered horizontally.
- **Visual Design:** Pure `#FFFFFF` opaque pill, `1px solid #E5EAF1`, elevated shadow `0 8px 24px rgba(16, 24, 39, 0.08)`.
- **Anatomy:**
  - Left Action: `Resume ↓` (`[REQUIRES USER CONFIRMATION: PDF Asset]`).
  - Right Action: `Let's Talk ↗` (Immediate jump to `/contact`).
- **Scroll Collapse Mechanics:**
  - Downward scroll (> 12px delta): Translates downward out of view (`transform: translateY(120%)`, `duration: 250ms`).
  - Upward scroll: Restores instantly (`transform: translateY(0)`, `duration: 180ms`).

```
┌────────────────────────────────────────┐
│  [↓] Resume (PDF)   │   Let's Talk ↗   │
└────────────────────────────────────────┘
```

---

## 6. Mobile Inner-Page Wireframes

### 6.1 Projects Archive (`/projects` at Mobile)
- Header: Condensed title and archive description.
- Controls: Search input full-width (`height: 48px`), horizontal scrollable filter pill bar (`All`, `Web Applications`, `Systems`).
- Cards: Single-column stacked cards for all 4 project candidates (*WeatherSentinel*, *CareerTrack*, *Maa Kamakhya Hydraulic*, *Jay Hanuman Astro*).

### 6.2 Case Study Detail (`/projects/:slug` at Mobile)
- Breadcrumbs: Simplified to `← Back to Projects`.
- Hero: Display title (`28px`), role badge, verified technology pill cloud.
- System Architecture Diagram: Scales to full width with pinch-to-zoom support or horizontal scroll indicator.
- Feature Table: Converts 2-column table into sequential tabs: `[✓ Verified Features]` and `[→ Planned Roadmap]`.
- Navigation: Stacked sticky Previous / Next project buttons.

### 6.3 Contact Form (`/contact` at Mobile)
- Form Fields: Stacked vertically with full 100% width.
- Inputs: Minimum touch height `48px`, `border-radius: 8px`, `font-size: 16px` to prevent iOS auto-zoom on focus.
- Touch Keyboard: Inputs declare proper semantic `inputmode`: `inputmode="email"` for email, `inputmode="text"` for name.
- Submit Button: Full-width sticky-safe button (`height: 52px`).
