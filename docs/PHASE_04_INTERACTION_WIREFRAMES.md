# PHASE 04 — INTERACTION & BEHAVIORAL WIREFRAME SPECIFICATIONS
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 05 of 07  
**File Location:** `docs/PHASE_04_INTERACTION_WIREFRAMES.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Interaction Intent & Physics Philosophy

The interaction architecture of this portfolio is designed to evoke **tactility, physical mass, and architectural poise**. Micro-interactions are neither gratuitous nor delayed; they provide immediate optical confirmation of user intent, communicate spatial depth, and respect hardware capabilities and accessibility preferences.

### Core Physics Constants
- **Primary Spring Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Fluid spring-damped ease-out with zero unnatural bounce).
- **Mechanical Micro-Transition Duration:** `150ms` to `240ms` for UI elements (buttons, inputs, pills).
- **Spatial Object Parallax Damping:** `lerp(current, target, 0.05)` for mouse pointer response.
- **Scroll Interpolation:** Smooth normalized inertial scrolling via Lenis (damped velocity, non-hijacked wheel events).

---

## 2. Navigation & Header Transitions

### 2.1 Floating Nav Scroll Response
- **Trigger:** Window scroll event delta (`scrollY > 20px`).
- **Behavioral Intent:**
  - Nav container smoothly reduces top offset from `24px` to `12px` and height from `56px` to `50px`.
  - Background surface opacity increases from `85%` to `95%` with an elevated shadow (`0 10px 25px -5px rgba(16, 24, 39, 0.06)`).
  - Transition duration: `240ms`, easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Reverse Trigger (`scrollY <= 20px`):** Smoothly expands back to resting state without sudden jumping.

### 2.2 Navigation Link Hover & Active Indicator
- **Hover Intent:** Link text transitions from secondary `#64748B` to primary `#111827` over `150ms`. An underlying 2px royal blue hairline slides horizontally into view centered beneath the hovered link.
- **Active Page Intent:** The current canonical page link maintains the `#111827` text weight and persistent 2px royal blue bar (`aria-current="page"`).

---

## 3. Project Card Hover & Elevation Physics

### 3.1 Featured Card Elevation (`<FlagshipProjectCard />` & `<StandardProjectCard />`)
```text
Resting State:            Hover State:
┌──────────────────────┐  ┌──────────────────────┐  ▲ -4px Y Elevation
│ [Card Surface]       │  │ [Card Surface]       │  │
│ Border: #E5EAF1      │  │ Border: #CBD5E1      │  │ Shadow: Ambient + Blue Rim Glow
└──────────────────────┘  └──────────────────────┘  ▼
```
- **Translation:** Card elevates `-4px` along the Y-axis over `280ms`.
- **Border & Glow:** Border transitions from subtle `#E5EAF1` to strong `#CBD5E1`. A soft royal blue optical rim glow (`box-shadow: 0 0 0 1px rgba(65, 105, 225, 0.25), 0 12px 30px -8px rgba(16, 24, 39, 0.08)`) activates.
- **Media Scale:** The inner 16:9 vector browser mockup expands smoothly (`scale: 1.025`) over `400ms` with internal clipping (`overflow: hidden`).
- **CTA Icon Action:** The diagonal arrow icon `↗` translates `+2px` right and `-2px` up simultaneously.

---

## 4. Cursor & Magnetic Action Intent

### 4.1 Custom Follower Cursor Intent (Desktop `>= 1024px` Only)
- **Anatomy:** Minimalist outer ring (`diameter: 32px`, `border: 1.5px solid #4169E1`) surrounding a solid inner dot (`diameter: 4px`, `#111827`).
- **Lag Mechanics:** The inner dot tracks cursor `(clientX, clientY)` with zero latency; the outer ring follows with spring-damped lag (`damping: 0.18`).
- **Hover Transformation:**
  - Over standard links: Outer ring expands to `48px`, opacity softens to `30%`.
  - Over project cards: Outer ring morphs into an opaque royal blue pill displaying text: `VIEW CASE STUDY`.
  - Over 3D canvas: Ring morphs into a spatial orbit icon indicating drag capability: `DRAG TO ORBIT`.
- **Touch / Mobile Invariant:** The custom follower cursor is **strictly disabled** on touch devices (`hover: none`) and tablet viewports to prevent interference with native gestures.

### 4.2 Magnetic CTA Intent
- **Buttons Affected:** Primary buttons (`Explore Selected Work`, `Get in Touch`, `Resume ↓`).
- **Mechanics:** When the pointer enters within a `30px` bounding radius of the button, the button center magnetically pulls toward the cursor:
  `deltaX = (mouseX - buttonCenterX) * 0.25; deltaY = (mouseY - buttonCenterY) * 0.25;`
- **Release:** On cursor exit, the button snaps back to its origin with a damped spring over `300ms`.

---

## 5. 3D Spatial Pointer & Parallax Relationship

### 5.1 Mouse Pointer Parallax (Desktop)
- Normalized cursor coordinates `(x: [-1, 1], y: [-1, 1])` drive the 3D scene parameters:
  - Central Polyhedral Monolith tilts gently toward the cursor (maximum rotation: `14 degrees`).
  - Concentric Gyroscope rings experience rotational velocity modulation (cursor velocity temporarily accelerates orbital spin by up to `1.4x`).
  - Floating satellite micro-spheres drift along elliptical trajectories with subtle spring attraction toward cursor position.
- Camera position shifts subtly on X and Y axes (`parallaxOffset: 0.4 units`), creating optical parallax between foreground text and background 3D geometry.

### 5.2 Touch Orbit Interaction (Tablet & Mobile)
- Pointer parallax is replaced by direct single-finger touch dragging across the 3D canvas container.
- Horizontal swipe rotates the sculpture along the Y-axis; vertical swipe tilts along the X-axis.
- Upon finger release, touch momentum decays smoothly with friction (`dampingFactor: 0.05`), returning to gentle autonomous idle rotation.

---

## 6. Scroll Progression & Section Reveal Orchestration

### 6.1 Scroll-Driven Entrance Reveals
- As the user scrolls into each section, elements enter view using an editorial staggered cascade:
  1. Section Index & Eyebrow: Opacity fades in (`0% -> 100%`) with `12px` Y translation over `350ms`.
  2. Display Headline: Enters `80ms` later with crisp text mask reveal.
  3. Content Cards / Matrix Columns: Staggered entry (`stagger: 60ms` per card) from `+20px` Y offset to `0px`.
- **Non-Obtrusive Rule:** Reveals only trigger once per page load to ensure seamless upward re-reading without jarring repeated animations.

---

## 7. Form Interaction & Instant Validation Feedback

### 7.1 Field Focus & Input Progression
- **Input Focus:** Border color transitions from `#E5EAF1` to Royal Blue `#4169E1` in `120ms`. Floating label shrinks to `12px` and elevates above the input frame.
- **Client-Side Live Validation:**
  - Name Field: Checks for minimum 2 characters on blur.
  - Email Field: Validates RFC 5322 regex on blur; displays green checkmark if valid, red alert with specific helper copy if invalid (`"Please provide a valid email format"`).
  - Submit Button: Displays an accessible loading spinner on submit, followed by a transition into a confirmation card.
- **Clipboard Action:** Tapping `<CopyEmailPill />` triggers an immediate toast pill at viewport bottom: `✓ Email copied to clipboard`.

---

## 8. Mobile Drawer & HUD Interaction

### 8.1 Slide-Down Drawer
- Menu toggle (`[≡ MENU]`) morphs into close cross (`[✕ CLOSE]`) using rotational SVG interpolation.
- Drawer sheet unfurls downward (`height: 100dvh`). Links cascade into view with a `40ms` stagger.
- Tapping any internal anchor link instantly closes the drawer and smoothly scrolls to the target section.

### 8.2 Mobile HUD Scroll-Aware Collapse
- Downward scroll (> 12px delta): The floating action HUD translates downward out of view (`transform: translateY(120%)`, duration: `250ms`).
- Upward scroll (> 8px delta) or reaching bottom of page: Restores immediately (`transform: translateY(0)`, duration: `180ms`).

---

## 9. Accessibility, Keyboard & Reduced-Motion Governance

### 9.1 Keyboard Focus Traversal
- All interactive components feature an explicit, high-contrast keyboard focus indicator: `outline: 2px solid #4169E1; outline-offset: 3px;`.
- Tabbing order strictly reflects visual and semantic DOM order. Skip to Content link (`#skip-link`) is the very first focusable element.

### 9.2 Reduced-Motion Behavior (`prefers-reduced-motion: reduce`)
When active:
- All CSS transitions are clamped to instantaneous cuts (`duration: 0.001ms !important`).
- Lenis smooth inertial scrolling is disabled; native instant scrolling is preserved.
- The 3D canvas disables autonomous continuous rotation and pointer tracking, freezing the sculpture at a pristine, photorealistic static hero angle.
- Parallax offsets, button magnetic pulls, and cursor follower rings are completely deactivated.
