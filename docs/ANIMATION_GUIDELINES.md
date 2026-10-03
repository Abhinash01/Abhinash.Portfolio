# ANIMATION GUIDELINES & MOTION DESIGN SYSTEM
**Motion Paradigm:** Physics-Grounded Editorial Choreography  
**Core Technologies:** GSAP v3, ScrollTrigger, Framer Motion, Lenis Smooth Scroll  
**Frame Target:** Consistent 60 FPS (Hardware Accelerated via GPU Transforms)  

---

## 1. Motion Philosophy & The Golden Rules of Easing

Motion in the Abhinash Gupta portfolio serves a singular purpose: **to clarify spatial relationships, provide tangible physical feedback, and evoke luxury through effortless momentum**. It must never feel floaty, sluggish, or gratuitous.

### 1.1 The Core Easing Curves
```typescript
export const MOTION_EASINGS = {
  // Editorial entrance: quick start, ultra-smooth luxurious deceleration
  luxuryDecel: [0.16, 1, 0.3, 1], // Cubic-bezier (GSAP: "power4.out")
  
  // Mechanical snap: responsive UI buttons and modal windows
  snappyOut: [0.25, 1, 0.5, 1],   // (GSAP: "power2.out")
  
  // Dramatic page curtain & preloader reveal
  curtainReveal: [0.76, 0, 0.24, 1], // Exponential S-curve
  
  // Interactive spring physics for cursor & magnetic elements
  magneticSpring: { type: "spring", stiffness: 280, damping: 22 },
};
```

### 1.2 Durations & Timing Hierarchy
- **Micro-interactions (Hover, Focus, Click):** `150ms – 250ms` (Instant feedback)
- **Component Entrances (Card appearance, Accordion):** `400ms – 600ms`
- **Section Reveals & Staggered Typography:** `700ms – 1100ms`
- **Page Transitions & Preloader Dismissal:** `800ms – 1200ms`

---

## 2. Global Scroll Choreography: Lenis Smooth Scroll

To harmonize DOM scrolling with Three.js camera movement, **Lenis** provides momentum-based smooth scrolling without breaking native accessibility or keyboard traversal.

### 2.1 Lenis Configuration
```typescript
export const lenisConfig = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.8,
  infinite: false,
};
```

---

## 3. Typographic & Content Reveal Choreography

### 3.1 Split-Text Editorial Reveal
Headlines do not simply fade in; lines emerge from an overflow-hidden clipping container with staggered vertical translation:
- **GSAP Implementation:** Each line of text is wrapped in an inner `<span>` with `overflow: hidden`.
- **Initial State:** `y: "110%", rotateZ: 2, opacity: 0`.
- **Animate To:** `y: "0%", rotateZ: 0, opacity: 1`, duration: `0.9s`, ease: `power4.out`, stagger: `0.08s`.

### 3.2 Monospaced Telemetry Typewriter Effect
Technical badges (e.g., `// 28.61° N // INITIALIZING`) animate in via a rapid randomized character decrypting scramble over `400ms`, creating an authentic aerospace telemetry feel.

---

## 4. Component Interactions & Micro-Animations

### 4.1 Magnetic Buttons & Interactive Elements
- Key action triggers (e.g., `#nav-cta-contact`, `#btn-scroll-top`, project detail buttons) utilize an attraction field.
- **Physics Behavior:** When the user's cursor approaches within `45px` of the button bounding box, the button magnetically shifts towards the cursor coordinates by `0.35x` delta, with the inner text shifting by `0.5x` delta (creating internal parallax).
- **On Exit:** Elastic spring release back to origin `(0, 0)`.

### 4.2 Bespoke Precision Cursor
- **Structure:** Dual-element cursor:
  1. *Inner Dot:* 6px solid `#111827` circle tracking pointer coordinates with zero lag.
  2. *Outer Follower Ring:* 32px 1px border ring with 120ms lerp smoothing.
- **Contextual State Transformations:**
  - *Over 3D Canvas:* Expands to 64px with text `[ DRAG / EXPLORE ]`.
  - *Over Project Card:* Expands to 72px pill with text `[ VIEW STUDY ↗ ]`.
  - *Over Text Selection / Inputs:* Outer ring scales down to 0; inner dot transforms into a vertical 16px cursor caret.

### 4.3 Image & Case Study Card Hover Transformations
- Project thumbnail cards use an image zoom effect (`scale: 1.0 -> 1.04`, `duration: 700ms`, `ease: "power2.out"`).
- Card container elevates along the Z-plane (`translateY(-4px)`), and a subtle royal blue rim glow (`box-shadow: 0 12px 32px -4px rgba(65, 105, 225, 0.18)`) emerges.

---

## 5. Page Transitions (Barba / React Router + Framer Motion)

When navigating between `/`, `/projects`, `/about`, and `/contact`:
1. **Exit Phase (350ms):**
   - Active page elements scale down slightly (`scale: 0.98`, `opacity: 0`).
   - A clean white curtain overlay wipes up from bottom (`ease: [0.76, 0, 0.24, 1]`).
2. **Transition Buffer (100ms):** Scroll position resets instantly to `(0, 0)`.
3. **Enter Phase (450ms):**
   - Curtain overlay continues upward exit.
   - New page content reveals via staggered split-text and fade-up elements.

---

## 6. Accessibility & Reduced Motion Governance (`prefers-reduced-motion`)

Motion must never compromise comfort or accessibility. We implement a strict system-level check:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- When `prefers-reduced-motion` is active:
  - Lenis smooth scrolling is completely disabled.
  - 3D hero scene camera stays locked at static angle; gyro animations cease.
  - Split-text reveals are replaced with clean, instant opacity fades (`150ms`).
  - Custom cursor is deactivated, reverting immediately to native system cursor.
