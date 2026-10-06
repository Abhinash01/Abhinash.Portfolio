# PHASE 05 — DESIGN SYSTEM SPECIFICATION
**Project:** ABHINASH GUPTA — Premium 3D Interactive Developer Portfolio  
**Phase:** 05 (Design System & Token Architecture)  
**Deliverable:** 01 of 05  
**File Location:** `docs/PHASE_05_DESIGN_SYSTEM.md`  
**Baseline Alignment:** Phase 01 (Creative Direction), Phase 02 (Benchmarking), Phase 03 (Information Architecture), Phase 04 (UI/UX Wireframes)  
**Latest Verified Base Commit:** `8c2a30f108aa556c249697e0561e4a8fd1597ee9`  

---

## 1. Executive Philosophy & Aesthetic North Star

### 1.1 Core Aesthetic: Minimal Luxury + Cinematic Spatial Presence
The visual identity of Abhinash Gupta's portfolio is engineered at the intersection of **restrained Swiss editorial typography**, **high-key studio lighting**, and **purposeful 3D spatial computing**.

The system projects quiet engineering authority. It rejects transient web design fads, noisy SaaS dashboard conventions, neon-saturated dark-mode clichés, and gratuitous visual ornament. Every line, border, color shift, and spatial depth cue serves an unambiguous functional purpose: establishing hierarchy, clarifying system architecture, and showcasing engineering craftsmanship.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        DESIGN SYSTEM NORTH STAR                        │
│                                                                        │
│   [ Editorial Restraint ]  ───►  Typographic precision, high contrast, │
│                                  uncluttered white space, clear measure│
│                                                                        │
│   [ Spatial Computing ]    ───►  Physically grounded 3D monolith,      │
│                                  tactile orbit, atmospheric lighting   │
│                                                                        │
│   [ Mechanical Rigor ]     ───►  Crisp 1px borders, verified telemetry,│
│                                  monospaced metadata, zero decoration  │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Ten Tenets of Visual Discipline
1. **Editorial High-Key Ground:** The root canvas is a tailored cool architectural light gray (`#F6F9FC`), punctuated by pure opaque white (`#FFFFFF`) surfaces. This ensures radiant daylight luminosity without harsh eye fatigue.
2. **Deep Typographic Anchors:** Dominant headings and body text leverage an authoritative charcoal-black (`#111827`) and steel slate (`#64748B`), establishing effortless scannability and high visual weight.
3. **Singular Precision Accent:** A single signature royal blue (`#4169E1`) is deployed strictly for interactive focal points, active states, and verified badges. Color is never applied decoratively.
4. **Structural Mechanical Borders:** Content containers are delineated by crisp 1px borders (`#E5EAF1`). Dividers represent concrete semantic boundaries, not decorative frames.
5. **Architectural Radii:** Corner rounding is strictly restrained (4px for badges, 6px to 8px for cards and inputs, 9999px for pill navigation/buttons). Excessively rounded "bubbly" cards are explicitly forbidden.
6. **Subtle Ambient Elevation:** Shadows are nearly imperceptible at rest and reserved for elevation cues (e.g., card hover lift, floating navigation). Muddy, heavy, or multi-colored drop shadows are prohibited.
7. **Zero Gratuitous Glassmorphism:** Translucent frosted glass with backdrop blur is restricted **exclusively** to floating navigation chrome (`rgba(255, 255, 255, 0.92)`). All cards, modals, and drawers use opaque white surfaces to eliminate blur performance penalties.
8. **Subordinate Spatial 3D:** Interactive WebGL viewports are isolated at `z-index: 0` behind readable typography. 3D elements exist to communicate spatial capability and interactive craft—never to occlude technical case study copy.
9. **Zero Fictional Data or Metrics:** All visual slots for project metadata, telemetry counters, and timeline entries represent verifiable engineering milestones. Placeholder badges or fabricated metrics are strictly forbidden.
10. **Accessibility as an Architectural Standard:** High contrast, visible keyboard focus rings (`#4169E1`), 48px minimum touch hit areas, and graceful reduced-motion fallbacks are built into the fundamental token foundation.

---

## 2. System Design Foundations

### 2.1 The Color Hierarchy
The palette enforces strict semantic roles. Colors are never selected ad-hoc:

```text
┌──────────────────┬─────────────────┬────────────────────────────────────────┐
│ Semantic Role    │ Exact Hex       │ Intent & Application                   │
├──────────────────┼─────────────────┼────────────────────────────────────────┤
│ canvas.primary   │ #F6F9FC         │ Root viewport background (architectural)│
│ surface.base     │ #FFFFFF         │ Primary cards, sheets, form panels     │
│ surface.muted    │ #EEF2F8         │ Secondary tags, code blocks, telemetry │
│ surface.contrast │ #101827         │ Deep navy footer, terminal callouts    │
│ text.primary     │ #111827         │ Display H1-H4, primary body, nav labels│
│ text.secondary   │ #64748B         │ Editorial paragraphs, subheaders       │
│ text.tertiary    │ #94A3B8         │ Timestamps, footnotes, placeholders    │
│ text.inverse     │ #FFFFFF         │ Typography over dark surfaces/navy     │
│ accent.primary   │ #4169E1         │ Royal Blue signature, active links, CTAs│
│ accent.hover     │ #3154C4         │ Darkened royal blue interactive state  │
│ accent.subtle    │ #EFF3FE         │ Light blue tint for active pill badges │
│ border.subtle    │ #E5EAF1         │ Standard 1px container dividers        │
│ border.strong    │ #CBD5E1         │ Active input boundaries, card hover    │
│ status.success   │ #059669         │ Verified feature tags, form success    │
│ status.warning   │ #D97706         │ Planned roadmap badges, pending notices│
│ status.error     │ #DC2626         │ Form validation alerts, error feedback │
│ focus.ring       │ #4169E1         │ Accessible 2px offset focus indicator  │
└──────────────────┴─────────────────┴────────────────────────────────────────┘
```

### 2.2 Typographic Hierarchy & Tri-Font Architecture
Three curated typefaces create clear semantic separation across the portfolio:

1. **Display & Headings — `Space Grotesk` (Weights: 500, 600, 700):**  
   Geometric modernism with distinctive mechanical ink traps and wide horizontal rhythm. Used for hero display headlines, section titles, and modal headers.
2. **Editorial & Body — `Inter` (Weights: 400, 500, 600):**  
   World-class legibility, neutral humanist geometry, and optical kerning. Used for case study narratives, paragraphs, form labels, and UI controls.
3. **Technical & Telemetry — `JetBrains Mono` (Weights: 400, 500):**  
   Precision monospaced rhythm with unmistakable distinction between glyphs (`0`/`O`, `1`/`l`). Used for index numerals (`// 01.`), technology pill badges, code blocks, local timestamps, and system telemetry.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHIC ROLE MATRIX                         │
│                                                                        │
│   Space Grotesk 700   ──►  Hero Display (72px/84px), Section H2 (32px) │
│   Inter 400/500       ──►  Editorial Body (16px/18px), Labels (14px)   │
│   JetBrains Mono 500  ──►  Section Indices (`// 02.`), Tech Badges     │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Spacing Rhythm & Spatial Grid
All layout dimensions, paddings, margins, and gaps derive from a strict **4px/8px modular base rhythm**:
- **Micro Spacing (4px, 8px, 12px):** Internal badge padding, icon-to-text gaps, input inner gutters.
- **Component Spacing (16px, 24px, 32px):** Card internal padding, form row spacing, grid column gaps.
- **Section Spacing (48px, 64px, 96px, 128px):** Section top/bottom separation, hero vertical clearance.
- **Cinematic Viewport Spacing (160px, 200px):** Large atmospheric section transitions on ultra-wide viewports.

---

## 3. Surface, Border & Elevation Architecture

### 3.1 Structural Opaque Surfaces
All primary interactive surfaces are rendered as pure, opaque `#FFFFFF` cards over the `#F6F9FC` background. This ensures:
- 100% predictable contrast across dynamic background scrolling.
- Zero WebGL render buffer interference when 3D scenes execute underneath.
- Optimal GPU paint performance across mobile and battery-constrained laptops.

### 3.2 Restrained Border Mechanics
- **Standard Container Border:** `1px solid #E5EAF1`. Provides razor-sharp edge definition.
- **Hover/Interactive Border:** `1px solid #CBD5E1`. Indicates hoverable presence without jarring visual jumps.
- **Active/Focus Border:** `1.5px solid #4169E1`. Explicit selection feedback.

### 3.3 Micro-Elevation & Ambient Shadows
Shadows in the AG-PDS are light, diffuse, and desaturated:
- **Resting Surface:** `0 1px 3px rgba(17, 24, 39, 0.04)`. Barely perceptible edge grounding.
- **Elevated Card (Hover):** `0 12px 24px -4px rgba(17, 24, 39, 0.06), 0 4px 8px -2px rgba(17, 24, 39, 0.03)`. Subtle physical lift.
- **Floating Navigation Bar:** `0 8px 20px -2px rgba(17, 24, 39, 0.06)`. Distinct z-layer separation.

---

## 4. Component Architectural Guidelines

### 4.1 Buttons & Action Controls
The button system balances executive directness with tactile micro-interactions:
- **Primary Action (Solid):** Solid `#4169E1` fill, `#FFFFFF` text, `font-weight: 600`, `border-radius: 9999px` (pill) or `8px` (standard). Reserved for primary conversion goals ("Explore Selected Work", "Send Inquiry").
- **Secondary Action (Ghost / Outline):** Transparent fill, `1px solid #E5EAF1` border, `#111827` text. On hover, background transitions to `#EEF2F8`.
- **High-Contrast Dark Pill:** Solid `#101827` fill, `#FFFFFF` text, subtle radial hover shimmer. Used for the global resume trigger and dark banner CTAs.
- **Magnetic Prototyping Treatment:** Designated primary desktop action buttons support a subtle cursor-attraction vector (`max 6px` offset) during pointer hovering.

### 4.2 Project Card Framework
Project cards must feel like pages from an architectural monograph rather than SaaS dashboard widgets:
- **Flagship 12-Column Hero Card (*WeatherSentinel*):** Asymmetric split: 6 columns 16:9 high-resolution interactive viewport left, 6 columns deep engineering narrative right.
- **Secondary 6-Column Cards (*CareerTrack*, *Maa Kamakhya Hydraulic*):** Balanced 2-column cards featuring 16:9 media headers, architecture specs, verified technology pill cloud, and clear direct case-study links.
- **Archive Editorial Grid (*All 4 Projects*):** Clean 2x2 card grid with consistent aspect ratio, live link shortcuts, and verified badge indicators. No dense data table toggle.

### 4.3 Form Architecture
The contact portal prioritizes conversion simplicity and feedback clarity:
- **Field Layout:** Clean 1-column or 2-column input grid with top-aligned micro-labels (`Inter 500`, `14px`, `#111827`).
- **Input Styling:** Height `48px`, background `#FFFFFF`, border `1px solid #E5EAF1`, radius `8px`, typography `Inter 400` `16px` (preventing mobile iOS browser auto-zoom).
- **Focus Indicator:** Border shifts to `#4169E1` with an outer soft focus ring `0 0 0 3px rgba(65, 105, 225, 0.15)`.
- **Validation Messages:** Clear inline text in `JetBrains Mono 500` `12px` positioned directly below the field. Error: `#DC2626`; Valid: `#059669`.

### 4.4 Global Navigation Bar
- **Desktop:** Floating pill container (`max-width: 1080px`, `height: 56px`), centered at `top: 24px`, background `rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(12px)` and `1px solid #E5EAF1`.
- **Brand Wordmark:** Left-aligned `[AG]` monogram badge (`32x32px`) in deep navy `#101827` with white lettering, alongside `Abhinash`.
- **Navigation Links:** Centered horizontal link group (`Inter 500`, `14px`, `#64748B`), transitioning to `#111827` on hover with an active accent dot.
- **Telemetry Beacon:** Live status dot (pulsing green `#10B981`) indicating "Available for Technical Roles / Contracts".
- **Mobile:** Fixed top bar (`height: 56px`, `z-index: 50`) with hamburger trigger, paired with an accessible full-viewport slide-down drawer and docked bottom mobile HUD.

---

## 5. 3D Spatial Experience Integration System

### 5.1 Layering & Z-Index Separation
To eliminate visual clashes and maintain readability:
- **WebGL Canvas Layer (`z-index: 0`):** Three.js `<canvas>` container with pointer-capture bounded strictly to its rendered perimeter.
- **Readability Scrim Layer (`z-index: 5`):** Subtle radial light wash (`radial-gradient(ellipse 65% 80% at 20% 50%, rgba(246, 249, 252, 0.95) 0%, rgba(246, 249, 252, 0) 100%)`) placed between canvas and foreground typography.
- **Content & Typography Layer (`z-index: 10`):** High-contrast headline text, badges, and interactive CTA buttons.

### 5.2 Initial Wireframe Target Dimensions
Dimensions established in Phase 04 wireframes serve as initial target specifications to be calibrated during responsive implementation:
- **Desktop (`≥ 1024px`):** Target height `560px` in a 5-column hero viewport right.
- **Tablet (`768px – 1023px`):** Target height `380px`, centered 6-column viewport.
- **Mobile (`< 768px`):** Target height `280px`, centered 4-column viewport with clamped DPR `1.5` and gyro/touch damping.

### 5.3 Accessible Fallback & Low-Power Handling
- **2D Vector Fallback:** Clean SVG/CSS rendering of beveled polyhedron with radial lighting gradient for devices lacking WebGL2 support, context loss, or when users configure `prefers-reduced-motion: reduce`.
- **Layout Shift Safeguard:** Fallback container preserves exact matching aspect ratio and height to satisfy the target of zero Cumulative Layout Shift (CLS).

---

## 6. Accessibility & Usability Standards

1. **Text Contrast Targets:** All text pairings target minimum WCAG AA compliance (4.5:1 for body copy, 3:1 for large display copy), with primary `#111827` copy on `#F6F9FC` providing strong baseline legibility. Final ratios will be verified during accessibility validation.
2. **Keyboard Focus Outlines:** Interactive elements enforce `outline: 2px solid #4169E1` with `outline-offset: 2px` under `:focus-visible`.
3. **Touch Targets:** All interactive triggers, links, buttons, and form inputs on touch devices enforce a minimum hit area of `48px × 48px`.
4. **Motion Preference:** When `prefers-reduced-motion: reduce` is active, all cinematic camera animations and continuous 3D rotations transition to static, high-resolution postures.

---

## 7. Implementation Handoff to Future Phases

- **Phase 06 (CSS & Token Architecture):** Will translate these token values and architectural rules into scalable CSS Custom Properties and Tailwind configuration tokens.
- **Phase 07–10 (Component & Spatial Implementation):** Will build React UI and R3F components strictly adhering to the token naming and state specifications codified in Phase 05.
