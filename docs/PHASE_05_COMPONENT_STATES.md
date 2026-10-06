# PHASE 05 — COMPONENT STATES SPECIFICATION
**Project:** ABHINASH GUPTA — Premium 3D Interactive Developer Portfolio  
**Phase:** 05 (Design System & Token Architecture)  
**Deliverable:** 03 of 05  
**File Location:** `docs/PHASE_05_COMPONENT_STATES.md`  
**Baseline Alignment:** Phase 04 Wireframes & Interaction Specifications  
**Latest Verified Base Commit:** `8c2a30f108aa556c249697e0561e4a8fd1597ee9`  

---

## 1. Executive State Architecture

Every interactive component across the portfolio defines a comprehensive, deterministic matrix of visual states:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        COMPONENT STATE LIFECYCLE                       │
│                                                                        │
│   [ Default / Rest ] ──► [ Hover ] ──► [ Focus-Visible ] ──► [ Active ]│
│           │                                                    │       │
│           ▼                                                    ▼       │
│     [ Disabled ]                                          [ Loading ]  │
│                                                                │       │
│                                                  ┌─────────────┴─────┐ │
│                                                  ▼                   ▼ │
│                                             [ Success ]          [ Error ]
└────────────────────────────────────────────────────────────────────────┘
```

These specifications establish exact visual attributes without implementing runtime code, enabling precise translation in future development phases.

---

## 2. Global Navigation States

### 2.1 Desktop Floating Navigation Bar
- **Default (At Rest, Top of Page):**
  - Dimensions: `max-w-[1080px]`, `h-[56px]`, `px-6`.
  - Background: `rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(12px)`.
  - Border: `1px solid #E5EAF1`.
  - Radius: `9999px` (pill).
  - Shadow: `0 8px 20px -2px rgba(17, 24, 39, 0.06)`.
- **Scrolled State (Pinned During Scroll):**
  - Background: `rgba(255, 255, 255, 0.96)`.
  - Shadow: `0 12px 28px -4px rgba(17, 24, 39, 0.09)`.
  - Border: `1px solid #CBD5E1`.
- **Navigation Links (Individual Items):**
  - *Default:* `color: #64748B`, `font-size: 14px`, `font-weight: 500`.
  - *Hover:* `color: #111827`, subtle background pill tint `rgba(238, 242, 248, 0.60)`.
  - *Active / Current Route:* `color: #111827`, `font-weight: 600`, with a solid `4px × 4px` accent indicator dot (`#4169E1`) centered directly below the link text.
  - *Focus-Visible:* `outline: 2px solid #4169E1`, `outline-offset: 2px`, `border-radius: 4px`.
- **Status Beacon Dot:**
  - *Rest:* Green `#10B981`, `size: 8px × 8px`, `border-radius: 9999px`.
  - *Pulse Animation (Design Reference):* Ambient ring expanding to 16px with decaying opacity from `0.6` to `0.0`.

### 2.2 Mobile Navigation Trigger & Drawer
- **Hamburger Button (Top Bar):**
  - *Default:* `size: 44px × 44px` hit target, transparent background, two horizontal 1.5px lines (`#111827`).
  - *Hover:* Background `rgba(238, 242, 248, 0.80)`.
  - *Active / Open:* Top line rotates `45deg`, bottom line rotates `-45deg`, morphing into an architectural close icon `✕`.
- **Mobile Drawer Panel:**
  - *Closed:* `transform: translateY(-100%)`, `opacity: 0`, `pointer-events: none`.
  - *Open:* `transform: translateY(0)`, `opacity: 1`, background `#FFFFFF`, full viewport overlay (`z-index: 50`).

---

## 3. Button System States

### 3.1 Primary Action Button (Solid Royal Blue)
*Example: "Explore Selected Work", "Send Inquiry"*

| State | Background | Text Color | Border | Shadow / Glow | Transform / Motion | Cursor |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Default** | `#4169E1` | `#FFFFFF` | None (`0px`) | `0 1px 2px rgba(17, 24, 39, 0.04)` | `translateY(0)` | `pointer` |
| **Hover** | `#3154C4` | `#FFFFFF` | None (`0px`) | `0 4px 12px rgba(65, 105, 225, 0.25)` | `translateY(-1px)` | `pointer` |
| **Active / Pressed**| `#2544A5` | `#FFFFFF` | None (`0px`) | `0 1px 2px rgba(17, 24, 39, 0.10)` | `translateY(1px) scale(0.98)` | `pointer` |
| **Focus-Visible**| `#4169E1` | `#FFFFFF` | None | `0 0 0 3px rgba(65, 105, 225, 0.35)` | `translateY(0)` | `pointer` |
| **Disabled** | `#EEF2F8` | `#94A3B8` | `1px solid #E5EAF1`| None | `translateY(0)` | `not-allowed` |
| **Loading** | `#3154C4` | Transparent | None | None | Spinning monospaced indicator | `wait` |

### 3.2 Secondary Action Button (Ghost / Outline)
*Example: "Get in Touch", "View Architecture"*

| State | Background | Text Color | Border | Shadow | Transform | Cursor |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Default** | `transparent` | `#111827` | `1px solid #E5EAF1` | None | `translateY(0)` | `pointer` |
| **Hover** | `#EEF2F8` | `#111827` | `1px solid #CBD5E1` | `0 2px 6px rgba(17, 24, 39, 0.04)` | `translateY(-1px)` | `pointer` |
| **Active / Pressed**| `#E2E8F0` | `#111827` | `1px solid #94A3B8` | None | `translateY(1px) scale(0.98)` | `pointer` |
| **Focus-Visible**| `transparent` | `#111827` | `1.5px solid #4169E1`| `0 0 0 3px rgba(65, 105, 225, 0.20)`| `translateY(0)` | `pointer` |
| **Disabled** | `transparent` | `#94A3B8` | `1px solid #F1F5F9` | None | `translateY(0)` | `not-allowed` |

### 3.3 High-Contrast Dark Pill Button (Deep Navy)
*Example: Navigation Resume Trigger, Hero Dark Banner CTA*

| State | Background | Text Color | Border | Shadow / Shimmer |
| :--- | :--- | :--- | :--- | :--- |
| **Default** | `#101827` | `#FFFFFF` | `1px solid #101827` | `0 2px 4px rgba(16, 24, 39, 0.15)` |
| **Hover** | `#1E293B` | `#FFFFFF` | `1px solid #334155` | `0 6px 16px rgba(16, 24, 39, 0.25)` |
| **Active** | `#0B1120` | `#FFFFFF` | `1px solid #0B1120` | `translateY(1px)` |
| **Focus-Visible**| `#101827` | `#FFFFFF` | `1.5px solid #4169E1`| `0 0 0 3px rgba(65, 105, 225, 0.35)` |

### 3.4 Text & Inline Action Links
*Example: Case Study links, "View Complete Archive (4) ↗"*

- **Default:** `color: #4169E1`, `font-weight: 500`, inline arrow icon `↗` at neutral angle.
- **Hover:** `color: #3154C4`, underline decoration (`1px solid #3154C4`), arrow icon offsets `translate(2px, -2px)`.
- **Focus-Visible:** `outline: 2px solid #4169E1`, `outline-offset: 2px`, `border-radius: 2px`.
- **Active:** `color: #2544A5`.

---

## 4. Project Card States

### 4.1 Flagship 12-Column Hero Card (*WeatherSentinel*)
- **Default (Rest):**
  - Background: `#FFFFFF`.
  - Border: `1px solid #E5EAF1`.
  - Radius: `12px`.
  - Shadow: `shadow.md` (`0 4px 6px -1px rgba(17, 24, 39, 0.05)`).
  - Media container: Crisp 16:9 frame with `1px solid #E5EAF1` inner boundary.
- **Hover:**
  - Border: Transitions to `1px solid #CBD5E1`.
  - Shadow: Elevates to `shadow.lg` (`0 12px 24px -4px rgba(17, 24, 39, 0.06)`).
  - Media zoom: Media preview scales gently to `1.02` with overflow clipped.
  - Case Study CTA arrow shifts `+3px` rightward.
- **Focus-Visible (Container or Primary Link):**
  - `outline: 2px solid #4169E1`, `outline-offset: 4px`.
- **Active / Click:**
  - Card scales momentarily to `0.995` before executing navigation.

### 4.2 Secondary 6-Column Cards (*CareerTrack*, *Maa Kamakhya Hydraulic*)
- **Default (Rest):**
  - Background: `#FFFFFF`, border: `1px solid #E5EAF1`, radius: `8px`, shadow: `shadow.md`.
- **Hover:**
  - Background: `#FFFFFF`, border: `1px solid #CBD5E1`, shadow: `shadow.lg`.
  - Action link shifts color to `#3154C4`.
- **Focus-Visible:**
  - Outer focus ring: `outline: 2px solid #4169E1`, `outline-offset: 3px`.

### 4.3 Archive 2x2 Editorial Cards (*All 4 Projects*)
- **Default:** Clean card with 16:9 header image, title (`Space Grotesk 600`, `20px`), category badge, technology pills, and live link button.
- **Hover:** Card border deepens to `#CBD5E1`, media scales `1.02`, title color shifts to `#4169E1`.
- **Focus-Visible:** `outline: 2px solid #4169E1`, `outline-offset: 3px`.

---

## 5. Project Filter Pill States

*Used on `/projects` archive for category segmentation (`All`, `Web Applications`, `Systems`):*

| State | Background | Text Color | Border | Indicator / Badge |
| :--- | :--- | :--- | :--- | :--- |
| **Inactive (Rest)** | `#FFFFFF` | `#64748B` | `1px solid #E5EAF1` | Count badge `#EEF2F8` |
| **Inactive (Hover)**| `#EEF2F8` | `#111827` | `1px solid #CBD5E1` | Count badge `#E2E8F0` |
| **Active / Selected**| `#111827` | `#FFFFFF` | `1px solid #111827` | Count badge `#334155` |
| **Focus-Visible** | Inactive/Active | Current color | Border matches | `outline: 2px solid #4169E1`, `offset: 2px` |
| **Disabled** | `#F8FAFC` | `#94A3B8` | `1px solid #F1F5F9` | `opacity: 0.50`, `not-allowed` |

---

## 6. Form System & Input Field States

### 6.1 Text Inputs & Textarea (`<input />`, `<textarea />`)

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        FORM FIELD STATE MATRIX                         │
│                                                                        │
│   [ Default ]  ──►  Border: #E5EAF1, Bg: #FFFFFF, Text: #111827        │
│   [ Hover ]    ──►  Border: #CBD5E1, Bg: #FFFFFF                       │
│   [ Focus ]    ──►  Border: #4169E1, Glow: 0 0 0 3px rgba(65,105,225) │
│   [ Valid ]    ──►  Border: #059669, Inline Check: ✓ Verified          │
│   [ Invalid ]  ──►  Border: #DC2626, Inline Error: ⚠ Message           │
│   [ Disabled ] ──►  Border: #F1F5F9, Bg: #F8FAFC, Text: #94A3B8       │
└────────────────────────────────────────────────────────────────────────┘
```

#### Detailed Attribute Breakdown:
- **Default (Rest):**
  - Height: `48px` (inputs), min-height `140px` (textarea).
  - Background: `#FFFFFF`.
  - Border: `1px solid #E5EAF1`.
  - Border Radius: `8px`.
  - Text: `Inter 400`, `16px`, `#111827`.
  - Placeholder: `Inter 400`, `16px`, `#94A3B8`.
- **Hover State:**
  - Border: `1px solid #CBD5E1`.
- **Focus State (`:focus-visible`):**
  - Border: `1.5px solid #4169E1`.
  - Box Shadow: `0 0 0 3px rgba(65, 105, 225, 0.18)`.
  - Outline: `none`.
- **Filled State (Valid Content Present):**
  - Text: `#111827`.
  - Border: `1px solid #E5EAF1`.
- **Error / Invalid State:**
  - Border: `1.5px solid #DC2626`.
  - Background: `#FEF2F2`.
  - Focus Ring (if focused during error): `0 0 0 3px rgba(220, 38, 38, 0.20)`.
  - Helper Message: `JetBrains Mono 500`, `12px`, `#DC2626` accompanied by clear semantic warning text.
- **Success / Validated State:**
  - Border: `1.5px solid #059669`.
  - Helper Message: `JetBrains Mono 500`, `12px`, `#059669` with inline check indicator.
- **Disabled State:**
  - Background: `#F8FAFC`.
  - Border: `1px solid #F1F5F9`.
  - Text: `#94A3B8`.
  - Cursor: `not-allowed`.

### 6.2 Form Submit Button Lifecycle
- **Idle (Ready):** Solid Royal Blue button labeled "Send Message ✉".
- **Submitting (Loading):**
  - Background: `#3154C4`.
  - Text: Replaced by animated loading spinner or monospaced progress string `[ TRANSMITTING... ]`.
  - Pointer: Disabled (`pointer-events: none`).
- **Success State:**
  - Background: `#059669` (Forest Green).
  - Label: `✓ Message Delivered Successfully`.
  - Auto-reverts to idle after 4000ms.
- **Error State:**
  - Background: `#DC2626` (Crimson).
  - Label: `⚠ Transmission Failed — Retry`.
  - Form inputs retain filled user values so input is never lost.

---

## 7. Interactive 3D Spatial Canvas States

While 3D components are implemented in Phase 08–10, their visual states are formally defined here:

- **Loading State:**
  - Viewport displays clean monospaced telemetry counter: `[ 3D SPATIAL ASSETS: 0–100% ]` centered over `#F6F9FC` ground.
- **Active State (Normal WebGL):**
  - Smooth 60 FPS interactive orbit with pointer parallax tracking.
  - Orbit damping: Soft kinetic settle upon pointer release.
- **Context Lost / Low Power:**
  - Instant zero-layout-shift swap to 2D vector fallback (SVG beveled polyhedron with radial lighting).
- **Reduced Motion (`prefers-reduced-motion: reduce`):**
  - Canvas renders static hero composition at optimal camera angle without continuous rotation or pointer parallax.
