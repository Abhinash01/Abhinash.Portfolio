# RESPONSIVE DESIGN GUIDELINES & MULTI-VIEWPORT SPECIFICATION
**Philosophy:** Purpose-Built Native Adaptations Across All Form Factors  
**Target:** Flawless Consistency from 320px Ultramobile to 4K Ultra-Wide Monitors  
**Theme:** Refined Light-Mode Primary Interface (`#F6F9FC` Canvas, `#FFFFFF` Opaque Surfaces)  

---

## 1. Breakpoint Architecture & Viewport Tiers

| Tier Name | Viewport Range | Primary Devices | Strategic Layout Paradigm |
| :--- | :--- | :--- | :--- |
| **Large Desktop / 4K** | `≥ 1440px` | Studio Displays, 27"–34" Ultrawide | Expansive grid, max container `1440px`, high-depth 3D scene |
| **Standard Desktop** | `1024px – 1439px` | 13"–16" MacBook Pro, Desktop Monitors | Balanced 2-column editorial layouts, 3D interactive hero |
| **Tablet (Landscape/Port)**| `768px – 1023px` | iPad Pro, iPad Air, Galaxy Tab | Consolidated 2-column or stacked cards, touch-optimized UI |
| **Mobile (Large / Standard)**| `375px – 767px` | iPhone 15/16 Pro, Pixel, Galaxy | Single-column editorial stream, bottom-docked touch controls |
| **Small Mobile** | `< 375px` | iPhone SE, compact Androids | Compact typography, zero-margin edge padding safety |

---

## 2. Dedicated Viewport Specifications

### 2.1 Large Desktop (`≥ 1440px`)
- **Container Architecture:** Centered `max-w-[1440px]` with `px-16` padding.
- **3D Hero Integration:** Full fidelity. All 16 floating micro-spheres, dual gyro-rings, and optical glass transmission enabled at `dpr: 2`.
- **Navigation:** Floating horizontal pill menu with complete expanded text labels.
- **Project Grid:** Asymmetrical 12-column architectural arrangement with large 16:9 media viewports.

### 2.2 Standard Desktop (`1024px – 1439px`)
- **Container Architecture:** `max-w-7xl` (`1280px`) with `px-8` to `px-12` padding.
- **Typography:** Baseline desktop scale (`text-display-hero: 84px`, `text-h1: 56px`).
- **3D Hero Scene:** Camera positioned at `z: 6.8`, subtle mouse-driven parallax active, contact shadows active.
- **Cursor:** Custom interactive follower cursor active with contextual text hints.

### 2.3 Tablet (`768px – 1023px`)
- **Container Architecture:** `max-w-3xl` / full width with `px-6` margin.
- **Navigation:** Floating pill consolidates: displays logo, compact status dot, and a refined modal menu drawer trigger (`☰`).
- **Typography:** Tablet scale (`text-display-hero: 60px`, `text-h1: 44px`).
- **3D Hero Scene:** 
  - Central chrome core and glass shell active; micro-spheres reduced to 6 to preserve battery life.
  - Interactive touch rotation: Users can swipe across the 3D canvas with single-finger gesture to rotate the sculpture.
- **Cursor:** Custom follower disabled; native touch gestures take precedence.

### 2.4 Mobile (`< 768px`) — The Mobile-First Creative Standard
*Crucial Rule: Mobile is not a shrunken desktop site; it is a bespoke handheld editorial publication.*

#### Mobile Layout Re-Architecture
- **Hero Composition:** 
  - 3D canvas positioned in upper 40vh of screen with a subtle gradient mask fading into the white canvas.
  - Headline and CTAs anchored in the lower 60vh, perfectly within thumb-reach zone.
  - Primary CTA (`Explore Selected Work`) spans 100% width with large `52px` touch target height.
- **Navigation:**
  - Top header: Minimalist clean bar (`Abhinash Gupta` left, `Menu` right).
  - Bottom Bar (Optional HUD): Floating glass action bar with quick "Talk" trigger and resume link docked safely above iOS Home Indicator (`env(safe-area-inset-bottom)`).
- **Project Cards:**
  - Stacked 1-column cards with solid `#FFFFFF` backgrounds and 1px `#E5EAF1` borders.
  - Screenshots use native mobile aspect ratio `4:3` or `16:10` with high-contrast metadata badges stacked beneath.
  - Swiping horizontally through project screenshots enabled via CSS scroll-snap.
- **Technical Expertise Matrix:**
  - Converts from 3 columns into interactive horizontal swipeable category chips (`Frontend`, `Backend`, `Architecture`), dynamically switching the displayed skill list.
- **Touch Targets:** Strict adherence to `>= 48px × 48px` minimum interactive hit areas.

---

## 3. 3D Scene Adaptive Degradation Matrix

| Viewport / Device Tier | Geometry Triangle Cap | Particle Count | Contact Shadows | Shader Transmission | Pixel Ratio Cap |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **High-End Desktop (M-series / RTX)** | 35,000 | 120 | Full Multi-sample | Full Physical IOR | `2.0` |
| **Standard Laptop / Integrated GPU** | 24,000 | 60 | Standard Blur | Simplified Transmission | `1.5` |
| **Tablet** | 18,000 | 30 | Simplified | Standard Roughness | `1.5` |
| **Mid-Tier Mobile** | 12,000 | 0 (Culled) | Optimized Single Pass | Fast Fresnel Shader | `1.25` |
| **Low-End Mobile / Battery Saver** | Pre-rendered WebP | None | None | CSS Parallax | Native CSS |

---

## 4. Graceful Fallback on Low-End Mobile & Hardware Constraints

On devices with `< 4GB RAM`, `< 4 CPU cores`, or where WebGL is unavailable:
1. **Three.js Bundle Omission:** The 3D script bundle is not downloaded or executed, preventing mobile thread lockup.
2. **Pre-rendered Studio Render:** A high-resolution WebP image of the chrome sculpture is rendered inside a `<picture>` tag with responsive `srcset` support.
3. **Zero Layout Shift:** The container dimensions match the exact aspect ratio of the 3D viewport, guaranteeing `CLS < 0.05`.
4. **Instant Text Usability:** Headline text, buttons, and section links are instantly interactive without waiting for 3D shaders or asset hydration.
