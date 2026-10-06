# PHASE 05 — RESPONSIVE DESIGN SYSTEM SPECIFICATION
**Project:** ABHINASH GUPTA — Premium 3D Interactive Developer Portfolio  
**Phase:** 05 (Design System & Token Architecture)  
**Deliverable:** 04 of 05  
**File Location:** `docs/PHASE_05_RESPONSIVE_DESIGN_SYSTEM.md`  
**Baseline Alignment:** Phase 04 Responsive Wireframe Matrix & Mobile Specifications  
**Latest Verified Base Commit:** `8c2a30f108aa556c249697e0561e4a8fd1597ee9`  

---

## 1. Executive Responsive Architecture

The AG-PDS responsive framework rejects superficial "shrink-and-stack" downscaling. Instead, it defines **three deliberate ergonomic modes**:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        RESPONSIVE ADAPTATION TIERS                     │
│                                                                        │
│   [ Desktop Tier ]  (≥ 1024px)   ──►  Cinematic 12-column editorial,   │
│                                       mouse parallax, 560px 3D target  │
│                                                                        │
│   [ Tablet Tier ]   (768–1023px) ──►  6-column stacked architecture,   │
│                                       touch orbit, 380px 3D target     │
│                                                                        │
│   [ Mobile Tier ]   (< 768px)    ──►  Thumb-zone 4-column stream,      │
│                                       docked HUD, 280px 3D target      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Breakpoint Matrix & Device Profiles

| Breakpoint Tier | Min Width | Max Width | Target Device Archetypes | Ergonomic Driver |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Compact** | `320px` | `374px` | iPhone SE (1st Gen), compact Androids | Extreme space conservation; 100% full-width actions |
| **Mobile Standard**| `375px` | `389px` | iPhone SE (2nd/3rd Gen), iPhone mini | One-handed reachability; 16px gutters |
| **Mobile Baseline**| `390px` | `429px` | iPhone 14/15/16, Google Pixel 7/8 | Primary mobile testing standard; 280px initial 3D height |
| **Mobile Large** | `430px` | `767px` | iPhone Pro Max, Galaxy S24 Ultra | Expanded editorial breathing room; 20px gutters |
| **Tablet** | `768px` | `1023px` | iPad (Standard & Mini), Surface in portrait | Dual-column hybrid; touch + stylus ergonomics |
| **Desktop Base** | `1024px`| `1279px` | 13" MacBooks, standard business laptops | Asymmetric 12-column grid; floating navigation pill |
| **Desktop Wide** | `1280px`| `1439px` | 15"/16" MacBooks, 24" external monitors | Canonical layout benchmark; 1280px max container |
| **Desktop Cinema** | `1440px`| `∞` | 27"+ 4K displays, ultra-wide studio setups| Cinematic breathing room; auto-centered container |

---

## 3. Typographic Scaling Matrix

To maintain proportional visual authority across screen sizes without arbitrary jumps:

| Typographic Level | Desktop (`≥ 1024px`) | Tablet (`768px – 1023px`) | Mobile (`< 768px`) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `84px` (`5.25rem`) | `56px` (`3.50rem`) | `36px` (`2.25rem`) | `1.05 – 1.15` | `-0.04em` |
| **Page H1** | `56px` (`3.50rem`) | `40px` (`2.50rem`) | `28px` (`1.75rem`) | `1.10 – 1.20` | `-0.03em` |
| **Section H2** | `32px` (`2.00rem`) | `28px` (`1.75rem`) | `24px` (`1.50rem`) | `1.20 – 1.25` | `-0.025em`|
| **Card / Item H3** | `24px` (`1.50rem`) | `22px` (`1.375rem`)| `20px` (`1.25rem`) | `1.30` | `-0.02em` |
| **Subhead H4** | `20px` (`1.25rem`) | `18px` (`1.125rem`)| `18px` (`1.125rem`)| `1.35` | `-0.015em`|
| **Lead Paragraph** | `18px` (`1.125rem`)| `16px` (`1.00rem`) | `16px` (`1.00rem`) | `1.60` | `-0.01em` |
| **Body Base** | `16px` (`1.00rem`) | `16px` (`1.00rem`) | `15px` (`0.9375rem`)| `1.55` | `0em` |
| **Body Small** | `14px` (`0.875rem`)| `14px` (`0.875rem`)| `13px` (`0.8125rem`)| `1.50` | `0em` |
| **Monospaced Eyebrow**| `13px` (`0.8125rem`)| `12px` (`0.75rem`) | `11px` (`0.6875rem`)| `1.20` | `+0.04em` |
| **Technology Tag** | `12px` (`0.75rem`) | `12px` (`0.75rem`) | `11px` (`0.6875rem`)| `1.20` | `+0.02em` |

---

## 4. Spacing & Container Scaling

| Spatial Dimension | Desktop (`≥ 1024px`) | Tablet (`768px – 1023px`) | Mobile (`< 768px`) |
| :--- | :--- | :--- | :--- |
| **Outer Viewport Gutter** | `32px` (`space.8`) | `24px` (`space.6`) | `16px` (`space.4`) |
| **Max Content Container** | `1280px` (`layout.max.width`) | `100% fluid` | `100% fluid` |
| **Hero Section Padding-Y** | `128px` (`space.32`) | `80px` (`space.20`) | `48px` (`space.12`) |
| **Standard Section Padding-Y**| `96px` (`space.24`) | `64px` (`space.16`) | `48px` (`space.12`) |
| **Card Inner Padding** | `32px` (`space.8`) | `24px` (`space.6`) | `16px` (`space.4`) |
| **Grid Column Gap** | `32px` (`space.8`) | `24px` (`space.6`) | `16px` (`space.4`) |
| **Footer Clearance Buffer** | `48px` (`space.12`) | `48px` (`space.12`) | `96px` (`pb-24` for Mobile HUD) |

---

## 5. Grid Structure & Layout Transformations

### 5.1 Grid Columns
- **Desktop (`≥ 1024px`):** 12-column asymmetric grid. Enables side-by-side hero lockups (7 cols text + 5 cols 3D canvas), asymmetric case studies (6 cols media + 6 cols narrative), and balanced 3-column architecture cards (4 cols each).
- **Tablet (`768px – 1023px`):** 6-column unified grid. Transitions hero to stacked 6-column blocks; cards convert to 2-column or full-width blocks.
- **Mobile (`< 768px`):** 4-column single-stream column. All content stacks sequentially to maintain optimal linear reading flow.

---

## 6. Component-Specific Responsive Behaviors

### 6.1 Global Navigation System
- **Desktop:** Floating centered pill (`1080px × 56px`), anchored `24px` below top viewport with horizontal links, telemetry beacon, and dark resume CTA button.
- **Tablet:** Full-width floating bar (`calc(100vw - 48px) × 56px`), condensed navigation links, hamburger menu toggle when width demands.
- **Mobile:** Fixed top bar (`height: 56px`, `z-index: 50`) featuring monogram brand logo left, availability beacon + hamburger trigger right. Clicking hamburger opens full-screen slide-down modal drawer with large touch-friendly links (`min-height: 48px`).
- **Mobile HUD:** Docked floating pill at bottom center (`bottom: max(16px, env(safe-area-inset-bottom))`) providing instant access to `[Selected Work]` and `[Let's Talk]`. Collapses cleanly on scroll-down to maximize viewing area.

### 6.2 Button System Adaptations
- **Desktop:** Inline, content-fitted width with minimum horizontal padding of `24px` and height of `44px`.
- **Tablet:** Flexible width matching column alignments.
- **Mobile:** Primary and secondary call-to-action buttons expand to **100% full width**, stacked vertically with a minimum touch hit height of `48px`.

### 6.3 Project Cards Adaptation
- **Flagship Card (*WeatherSentinel*):**
  - *Desktop:* 12-column split (6 cols 16:9 interactive viewport left, 6 cols technical case study narrative right).
  - *Tablet:* Vertical stack (16:9 media preview top, deep architecture details below).
  - *Mobile:* Compact stacked card (16:9 mockup header, 2-line clamped summary, stacked technology tags, 100% full-width case study CTA button).
- **Secondary Cards (*CareerTrack*, *Maa Kamakhya Hydraulic*):**
  - *Desktop:* 6-column side-by-side cards.
  - *Tablet / Mobile:* Single-column full-width stacked cards.
- **Projects Archive (`/projects`):**
  - *Desktop:* 2x2 editorial card grid featuring all 4 approved candidates with category filter pills and live search.
  - *Tablet:* 2-column card grid with fluid responsive image frames.
  - *Mobile:* 1-column single-stream cards with full-width search input and horizontal swipeable category pills.

### 6.4 Form System Adaptation
- **Desktop:** 2-column layout on `/contact`: left column hosts interactive inquiry form (7 cols), right column displays direct email copy pill, availability status, and timezone (5 cols).
- **Tablet:** Stacked layout with contact channels on top and inquiry form beneath.
- **Mobile:** Single-column sequential stream. All inputs enforce `height: 48px`, `width: 100%`, and `font-size: 16px` (strictly avoiding iOS auto-zoom behavior on input focus). Sticky-safe submit button at bottom.

---

## 7. 3D Spatial Canvas Responsive Adaptation

Dimensions established in Phase 04 wireframes serve as initial target specifications to be calibrated during responsive implementation:

| Metric / Parameter | Desktop (`≥ 1024px`) | Tablet (`768px – 1023px`) | Mobile (`< 768px`) |
| :--- | :--- | :--- | :--- |
| **Canvas Height (Initial Target)**| `560px` | `380px` | `280px` |
| **Spatial Placement** | Right 5-column hero block | Centered 6-column block | Centered 4-column block |
| **Interaction Mode** | Pointer cursor parallax tracking | Single-finger touch orbit | Single-finger touch orbit + gyro damping |
| **Device Pixel Ratio (DPR)** | Clamped to `2.0` | Clamped to `1.5` | Clamped to `1.5` (battery safeguard) |
| **Orbit Particles** | 16 micro-spheres | 6 micro-spheres | 6 micro-spheres (reduced vertex load) |
| **Frame Loop Throttling** | 60 FPS full loop | 60 FPS full loop | Dynamic throttling on idle/off-screen |

---

## 8. Touch & Handheld Ergonomics

1. **Strict 48px Touch Minimum:** All clickable elements (buttons, filter chips, navigation links, form inputs) enforce an absolute minimum bounding area of `48px × 48px`.
2. **Thumb Zone Alignment:** Frequent actions on mobile (e.g., Explore Work, Contact, Drawer triggers) are placed in the lower 45% of the viewport.
3. **Zero Horizontal Layout Shift:** All parent page containers enforce `overflow-x: hidden` with fluid wrapping to eliminate horizontal scroll drift.
