# TECHNOLOGY STACK & ARCHITECTURE DECISION RECORDS (ADR)
**Project:** Abhinash Gupta — Ultimate 3D Developer Portfolio  
**Status:** Approved for Implementation (Effective Phase 06 Scaffolding)  
**Roadmap Alignment:**  
- **Phase 01:** Creative Direction & Brand Identity (Current)  
- **Phase 02:** Competitor Research & Visual Benchmarking (Next Phase)  
- **...**  
- **Phase 06:** Project Scaffolding & Setup (Implementation Begins Here)  

---

## 1. Technology Compatibility & Architecture Overview

Before any code is scaffolded in future phases, the software stack has been analyzed for version synergy, peer dependencies, and runtime stability.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VIEWPORT & RUNTIME LAYER                        │
│             Lenis Smooth Scroll v1.1  •  Window Event Bus              │
├───────────────────────────────────┬────────────────────────────────────┤
│           2D DOM LAYER            │           3D WEBGL LAYER           │
│   React 18.3.x  •  TypeScript 5.x │   Three.js r165+  •  R3F v8.16.x   │
│   Tailwind CSS v3.4 (AG-PDS Tokens)│  Drei v9.100+ (Verified R3F v8)   │
│   Framer Motion v11 (Transitions) │   Custom GLSL Vertex & Fragment    │
│   GSAP v3.12 & ScrollTrigger      │   Canvas Context: WebGL2           │
├───────────────────────────────────┴────────────────────────────────────┤
│                           ROUTING & STATE                              │
│              React Router v6.23+  •  Zustand v4.5 (UI Store)           │
├────────────────────────────────────────────────────────────────────────┤
│                     BUILD, BUNDLE & CODE HYDRATION                     │
│               Vite 5.x (ESBuild + Rollup Async Chunking)               │
├────────────────────────────────────────────────────────────────────────┤
│                       TESTING & QUALITY PIPELINE                       │
│           Vitest v1.6 (Unit Tests)  •  Playwright v1.45 (E2E)          │
├────────────────────────────────────────────────────────────────────────┤
│                         HOSTING & CI/CD ENGINE                         │
│                    GitHub Repository  ──►  Vercel Edge                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Core Decisions & Architectural Rationales

---

### ADR-01: Core UI Framework — React 18 LTS vs React 19 Compatibility
- **Decision:** Lock to **React 18 LTS** (`react@^18.3.1`, `react-dom@^18.3.1`).
- **Compatibility Analysis:**
  - React Three Fiber (`@react-three/fiber` v8.x) and `@react-three/drei` (v9.x) are engineered and tested around the React 18 reconciler.
  - While React 19 is in active development, upstream 3D libraries (Three.js wrappers, fiber reconcilers, camera controls) frequently encounter peer-dependency warnings and reconciler breaking changes on React 19.
  - Locking to React 18 LTS guarantees 100% stable compatibility with R3F, Drei, GSAP, and Framer Motion with zero peer dependency conflicts.
- **Consequences:** Maximum ecosystem stability, no hacky `--legacy-peer-deps` flags required during Phase 06 scaffolding.

---

### ADR-02: Build Tooling & Bundler — Vite 5.x
- **Decision:** `vite@^5.4.0` with `@vitejs/plugin-react`.
- **Alternatives Evaluated:** Next.js (SSG/App Router), Webpack.
- **Rationale:** 
  - For a high-fidelity client-rendered 3D WebGL experience, server-side rendering (SSR) introduces `window is not defined` workarounds and hydration mismatches.
  - Vite offers instant HMR via native ES modules, blazing fast builds, and effortless code-splitting of heavy 3D modules.
- **Consequences:** High development velocity, minimal configuration, clean edge deployment.

---

### ADR-03: Styling Engine — Tailwind CSS v3.4
- **Decision:** `tailwindcss@^3.4.0` with PostCSS and Autoprefixer.
- **Rationale:**
  - Tailwind v3.4 provides a stable, battle-tested plugin and config ecosystem (`tailwind.config.js`).
  - Seamlessly imports our AG-PDS design tokens (`color-canvas`, `color-accent-blue`, Space Grotesk, Inter, JetBrains Mono) directly into utility classes without runtime overhead.
- **Consequences:** Tiny production CSS bundle (< 15KB gzipped), rapid and predictable styling.

---

### ADR-04: 3D Graphics Engine — Three.js + React Three Fiber + Drei
- **Decision:** `three@^0.165.0`, `@react-three/fiber@^8.16.8`, `@react-three/drei@^9.106.0`.
- **Rationale:**
  - Three.js is the premier standard for browser WebGL.
  - R3F offers a clean declarative syntax that manages scene graph lifecycles cleanly within React components.
  - Drei provides essential production utilities (`<ContactShadows />`, `<Environment />`, `<AdaptiveDpr />`) out-of-the-box.
- **Consequences:** Low-overhead 3D architecture with automatic memory disposal patterns.

---

### ADR-05: Motion & Scroll Synchronization — GSAP v3 + Lenis
- **Decision:** `gsap@^3.12.5`, `ScrollTrigger`, and `lenis@^1.1.0`.
- **Compatibility Analysis:**
  - Lenis and GSAP ScrollTrigger integrate smoothly through official adapter patterns:
    ```typescript
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    ```
  - Eliminates scroll stutter across Windows trackpads, high-refresh rate displays, and mobile touch events.
- **Consequences:** Consistent, smooth scroll velocity and frame-synchronized 3D camera docking.

---

### ADR-06: Testing Strategy — Vitest + Playwright
- **Decision:** `vitest@^1.6.0` (Unit/Component testing) and `@playwright/test@^1.45.0` (End-to-End & a11y).
- **Rationale:**
  - Vitest runs natively in Vite without transpilation delays.
  - Playwright conducts real-browser automated audits across Chromium, Firefox, and WebKit to verify WebGL canvas mounting, fallback triggers, keyboard focus management, and WCAG AA compliance.

---

### ADR-07: Future Phase Roadmap Alignment
- **Phase 01:** Creative Direction & Branding.
- **Phase 02:** Competitor Research & Visual Benchmarking.
- **Phase 03:** Information Architecture & Sitemap.
- **Phase 04:** Complete UI/UX Wireframes.
- **Phase 05:** Design System.
- **Phase 06:** Project Scaffolding & Setup (Installing dependencies and initializing the Vite project).
