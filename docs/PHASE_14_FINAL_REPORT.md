# PHASE 14 FINAL REPORT: MOUSE-RESPONSIVE INTERACTIONS & CAMERA MOVEMENT

**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 14 — Mouse-Responsive Interactions & Camera Movement  
**Date:** October 11, 2026  
**Status:** Complete & Verified  

---

## 1. Interaction Behavior Implemented

1. **Normalized Pointer Coordinates & Boundary Tracking:**
   - Attached discrete hover state detection (`pointerenter`, `pointerleave`, and window `blur`) strictly to the 3D viewport canvas element (`gl.domElement`).
   - Pointer events outside the 3D viewport or across unrelated page content (such as narrative typography and CTA buttons) are ignored, preserving complete button accessibility and page scrolling.
   - Normalized R3F pointer coordinates `[-1, 1]` are mapped to bounded target rotation offsets.

2. **Restrained Object Tilt:**
   - Bounded rotational responses:
     - Pitch ($X$-axis): $\pm 0.10$ radians ($\approx 5.7^\circ$), tilting the sculpture toward the cursor elevation.
     - Yaw ($Y$-axis): $\pm 0.18$ radians ($\approx 10.3^\circ$), orienting the sculpture toward the cursor azimuth.
   - Applied to the parent interactive group ref (`interactiveGroupRef`), ensuring the central beveled monolith, inner core, gyroscopic orbital rings, and satellite micro-spheres tilt harmoniously without clipping or desynchronization.
   - Continuous internal procedural rotations (monolith self-spin, inner facet reverse-spin, gyroscopic ring orbits) continue smoothly within the tilted local frame.

3. **Frame-Rate Independent Exponential Damping:**
   - Continuous interpolation in `useFrame` utilizing:
     $$\text{factor} = 1 - e^{-\lambda \cdot \Delta t}$$
     where $\lambda = 3.8$ (`GRAPHICS_CONFIG.interaction.damping`).
   - Smoothly glides toward target angles without snapping or frame-rate dependency.
   - When the pointer leaves the interactive canvas, target angles reset to $0$, smoothly returning the sculpture to its neutral default orientation without jumps.

---

## 2. Camera Movement Approach

1. **Subtle Camera Parallax:**
   - Perspective camera position ($Z = 5.6$) responds with a restrained offset:
     - Camera $X$ offset: $\pm 0.18$ units (`cameraParallaxX`).
     - Camera $Y$ offset: $\pm 0.12$ units (`cameraParallaxY`).
   - Base camera position (`[0, 0, 5.6]`) is recorded via ref upon scene initialization.
2. **Locked Focal Point Tracking:**
   - After applying smoothed position offsets, `camera.lookAt(0, 0, 0)` keeps the center of the sculpture locked in the viewport.
   - Creates a realistic spatial presence and parallax depth without altering default composition, clipping geometry, or exposing awkward angles.
   - When the cursor exits, the camera smoothly returns to `[0, 0, 5.6]` and aligns directly along the $-Z$ axis.

---

## 3. Reduced-Motion, Touch, and Mobile Behavior

1. **Accessibility & Reduced Motion:**
   - Utilizes `prefersReducedMotion()` (`window.matchMedia('(prefers-reduced-motion: reduce)')`).
   - When reduced motion is enabled, all pointer tracking and camera parallax are completely disabled (`canInteract = false`), maintaining a stable static pose and preventing unwanted movement.
2. **Touch & Coarse Pointer Safeguards:**
   - Evaluates `hasFinePointer()` (`window.matchMedia('(pointer: fine)')`).
   - Touch devices and coarse pointers bypass mouse-responsive rotation and parallax, preventing touch gestures from interfering with vertical page scrolling or element tapping.
3. **Mobile Screen Widths:**
   - When `isMobile` is true (viewport $< 768\text{px}$), interaction remains inactive and retains the compact scale (`0.82`) and reduced sphere count.

---

## 4. Files Changed

* `src/config/graphics.ts`: Defined `InteractionPreferences` interface and added `interaction` configuration (`maxRotationX: 0.10`, `maxRotationY: 0.18`, `cameraParallaxX: 0.18`, `cameraParallaxY: 0.12`, `damping: 3.8`).
* `src/components/3d/webglUtils.ts`: Added `hasFinePointer()` capability detection utility.
* `src/components/3d/hero/HeroScene.tsx`: Implemented pointer-responsive object rotation, camera parallax, exponential damping interpolation, canvas hover boundaries, and safety fallbacks.
* `docs/PHASE_14_FINAL_REPORT.md`: This comprehensive phase report.

---

## 5. Actual Verification Results

| Check / Test | Command / Method | Result | Notes |
| :--- | :--- | :--- | :--- |
| **TypeScript Typecheck** | `npm run typecheck` (`tsc --noEmit`) | **PASS (0 errors)** | Full type safety across interaction configs, Three.js math utils, and components. |
| **Production Build** | `npm run build` (`tsc -b && vite build`) | **PASS (9.50s)** | Clean bundle generated without warnings or chunk errors. |
| **Route Status Checks** | HTTP GET via Node on `http://localhost:5173/` | **PASS (Status 200)** | Verified `/`, `/projects`, all 4 project detail routes, `/about`, `/contact`, and fallback. |
| **Vite Dev Server & HMR** | Vite dev server daemon on port 5173 | **PASS** | Clean HMR updates on `HeroScene.tsx`, `SceneCanvas.tsx`, and `graphics.ts`. |
| **Reduced-Motion Verification** | Logic inspection & `canInteract` guard | **PASS** | When `prefersReducedMotion()` is true, `canInteract` evaluates to false. |
| **Coarse Pointer Safeguard** | Logic inspection & `hasFinePointer()` | **PASS** | Coarse pointer devices evaluate `canInteract` to false, avoiding touch scroll conflicts. |

---

## 6. Unresolved Limitations

* **Automated Browser Screenshot Tooling:** Upstream Playwright driver download is unavailable on this environment (CDN 404); live verification was performed via Vite development server HTTP checks, HMR logs, TypeScript typechecking, and production build validation.
* **Scroll-Linked Camera Trajectories:** Scroll-driven animations, GSAP, and ScrollTrigger remain strictly out of scope for Phase 14 and will be addressed in future phases as scheduled.
