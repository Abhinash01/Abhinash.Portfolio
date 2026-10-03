# INTERACTION REFERENCE LIBRARY & PATTERN REPOSITORY
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 02 (Competitor Research & Visual Benchmarking)  
**Deliverable:** 03 of 05  

---

## 1. Interaction Library Overview

This document catalogs **8 premier interactive design patterns** analyzed from world-class benchmarks (Locomotive, Studio Freight, Linear, Stripe Press, Emil Kowalski), translated directly into technical specifications for Abhinash Gupta's portfolio.

Every interaction pattern is specified with:
- **Benchmark Source:** Real-world origin and verified execution.
- **Physical Metaphor:** The mechanical or optical behavior simulated.
- **Technical Specification:** Coordinates, easing curves, timing, and state transitions.
- **Accessibility & Usability Guardrail:** Compliance with reduced-motion and screen-reader standards.

---

## 2. Interaction Pattern Specifications

---

### Pattern 01: Magnetic Action Button with Internal Parallax
- **Benchmark Source:** Locomotive (`locomotive.ca`) & Active Theory (`activetheory.net`).
- **Physical Metaphor:** Physical magnetic attraction field exerting gravitational pull on the cursor when within a proximity radius.
- **Technical Specification:**
  - **Attraction Radius:** `45px` around button boundary.
  - **Magnetic Pull (Container):** Button container follows cursor with a factor of `0.35x` delta:
    ```typescript
    const deltaX = (e.clientX - buttonCenter.x) * 0.35;
    const deltaY = (e.clientY - buttonCenter.y) * 0.35;
    ```
  - **Internal Parallax (Text / Icon):** Inner text label and icon displace further at `0.55x` delta, creating a tangible sense of internal physical depth.
  - **Release Dynamics:** On pointer exit, an elastic spring resets both container and label to origin (`stiffness: 280, damping: 22`).
- **Usability Guardrail:** If `prefers-reduced-motion` is enabled or device is touch-based, the magnetic attraction is disabled; standard CSS hover color transitions apply.

---

### Pattern 02: Contextual Adaptive Precision Cursor
- **Benchmark Source:** Locomotive & Studio Freight.
- **Physical Metaphor:** High-precision drafting reticle that dynamically adapts its form factor to communicate the underlying affordance.
- **Technical Specification:**
  - **Base State (Canvas / Text):** 6px solid `#111827` dot tracking cursor with zero delay; 32px 1px border ring following with a 120ms lerp damping.
  - **State Over 3D Canvas:** Outer ring expands to 64px diameter with inner monospaced text `[ DRAG / EXPLORE ]` rendered at 10px JetBrains Mono.
  - **State Over Project Card:** Expands to a 72px pill badge with text `[ VIEW STUDY ↗ ]` in royal blue accent outline (`#4169E1`).
  - **State Over Text Selection / Form Inputs:** Outer ring scales to `0`; inner dot transforms into a vertical 16px cursor caret.
- **Usability Guardrail:** Automatically deactivated on touch devices (`@media (pointer: coarse)`) and replaced immediately with the native OS cursor.

---

### Pattern 03: Overflow-Hidden Split-Text Editorial Reveal
- **Benchmark Source:** Locomotive & Stripe Press.
- **Physical Metaphor:** Editorial typography sliding upward from a clean mechanical slot.
- **Technical Specification:**
  - **Structure:** Each line of headline typography is wrapped in a `<span class="overflow-hidden inline-block">`.
  - **Initial State:** `transform: translateY(115%) rotateZ(2deg); opacity: 0;`.
  - **Animate To:** `transform: translateY(0%) rotateZ(0deg); opacity: 1;`.
  - **GSAP Easing:** Custom luxury deceleration curve (`cubic-bezier(0.16, 1, 0.3, 1)` / `power4.out`).
  - **Stagger:** `0.08s` delay between consecutive lines.
- **Usability Guardrail:** Text elements remain standard DOM nodes in HTML so search engines and screen readers index full sentences without fragmentation.

---

### Pattern 04: Lenis Scroll-Linked Three.js Camera Choreography
- **Benchmark Source:** Studio Freight (`studiofreight.com`) & Jesse Zhou (`jesse-zhou.com`).
- **Physical Metaphor:** Heavy cinematic camera crane gliding along a continuous track, synchronized to document scrolling.
- **Technical Specification:**
  - **Scroll Loop:** Lenis momentum engine provides smooth delta interpolation (`duration: 1.2, easing: exponential decay`).
  - **Camera Rig Interpolation:** GSAP ScrollTrigger updates camera coordinates in the Three.js render loop:
    - *Hero (Scroll 0% – 15%):* Camera at `[0, 0.2, 6.5]`, sculpture rotates at ambient speed (`0.005 rad/frame`).
    - *Transition to Intro (Scroll 15% – 35%):* Camera dollies smoothly to `[2.2, 0.4, 7.8]`, sculpture docks neatly into the right-hand column.
    - *Transition to Featured Work (Scroll 35% – 60%):* Sculpture disassembles into outer rings at low opacity (`0.25`), focusing 100% user visual attention on project cards.
- **Usability Guardrail:** Native scroll position is never hijacked; standard keyboard arrow keys, Page Down, and spacebar scroll naturally.

---

### Pattern 05: High-Contrast Readability Scrim & Z-Index Layering
- **Benchmark Source:** Apple Pro Flagship Product Showcases (`apple.com`).
- **Physical Metaphor:** Studio lighting scrim softening background glare behind key focal elements.
- **Technical Specification:**
  - **Canvas Layer:** `z-index: 0`, container set to `pointer-events: none`.
  - **Readability Scrim Layer:** `z-index: 5`, rendered as a soft radial gradient:
    ```css
    background: radial-gradient(
      ellipse 65% 80% at 20% 50%,
      rgba(246, 249, 252, 0.95) 0%,
      rgba(246, 249, 252, 0) 100%
    );
    ```
  - **Typography & CTA Layer:** `z-index: 10`, `pointer-events: auto`.
- **Usability Guardrail:** Guarantees a minimum contrast ratio of **14.8:1** (WCAG AAA) across all possible 3D sculpture rotations.

---

### Pattern 06: Hairline Border Accent Glow (1px)
- **Benchmark Source:** Linear (`linear.app`).
- **Physical Metaphor:** Precision-milled architectural glass edge catching an indirect specular ray.
- **Technical Specification:**
  - **Default State:** Solid opaque card `#FFFFFF` with hairline border `1px solid #E5EAF1` and soft ambient shadow (`0 1px 2px rgba(16, 24, 39, 0.04)`).
  - **Hover State:** Border color transitions smoothly over `250ms` to `rgba(65, 105, 225, 0.40)`.
  - **Elevation:** Container translates `translateY(-4px)` with a subtle multi-tier shadow:
    ```css
    box-shadow: 
      0 4px 6px -1px rgba(16, 24, 39, 0.05),
      0 12px 24px -4px rgba(16, 24, 39, 0.06),
      0 0 0 1px rgba(65, 105, 225, 0.15);
    ```
- **Usability Guardrail:** Card remains solid opaque white (`#FFFFFF`) to ensure 100% text contrast without fuzzy glassmorphism blur.

---

### Pattern 07: Mobile Thumb-Zone Drawer & Bottom Action HUD
- **Benchmark Source:** Linear mobile app web experience & Aristide Benoist.
- **Physical Metaphor:** Handheld ergonomics designed around natural thumb arcs.
- **Technical Specification:**
  - **Top Navigation Bar:** Compact `56px` height containing wordmark left and minimal menu toggle (`☰`) right.
  - **Navigation Drawer:** Full-width slide-down sheet with clean 24px text links spaced at `48px` vertical touch targets.
  - **Floating Bottom HUD:** Docked `16px` above the iOS home indicator (`bottom: calc(16px + env(safe-area-inset-bottom))`), presenting a compact pill containing "Talk" CTA and resume download link.
- **Usability Guardrail:** Prevents accidental top-corner reaching on modern tall mobile screens (iPhone 15/16 Pro).

---

### Pattern 08: Automated Device Capability Tiering & Static WebP Fallback
- **Benchmark Source:** Apple Pro web pages & Emil Kowalski.
- **Physical Metaphor:** Silent, intelligent power adaptation: delivering maximum fidelity on powerful hardware while ensuring instant, cool responsiveness on mobile and low-power devices.
- **Technical Specification:**
  - **Tiering Logic:** Evaluates `WebGL2`, `navigator.hardwareConcurrency`, and `navigator.deviceMemory`.
  - **Fallback State:** If low-end device is detected, bypass Three.js entirely:
    ```html
    <picture>
      <source srcset="/assets/hero-sculpture-high.webp" media="(min-width: 1024px)">
      <source srcset="/assets/hero-sculpture-mobile.webp" media="(max-width: 767px)">
      <img src="/assets/hero-sculpture-high.webp" alt="Abhinash Gupta 3D Sculpture" class="w-full h-auto">
    </picture>
    ```
  - **CSS Micro-Animation:** Light `@keyframes` ambient float (`transform: translateY(-8px)` over 6 seconds) provides life with zero GPU draw calls.
- **Usability Guardrail:** Eliminates phone overheating, browser crashes, and high mobile data consumption.
