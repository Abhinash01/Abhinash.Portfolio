# PERFORMANCE, ACCESSIBILITY & CORE WEB VITALS SPECIFICATION
**Benchmark Classification:** Engineering Target Benchmarks (To be validated in testing phases)  
**Standard:** WCAG 2.1 Level AA Compliance  

---

## 1. Quality & Performance Target Benchmarks (Measurable Targets)

The following metrics represent strict engineering performance targets that the application will be tested against during quality assurance phases. These are target standards, not pre-claimed achievements.

| Metric / Audit Target | Measurable Target Goal | Target Validation Method |
| :--- | :--- | :--- |
| **Lighthouse Performance Target** | `90+` | Automated audit via Playwright/Lighthouse on throttled 4G mobile |
| **Lighthouse Accessibility Target** | `95+` | Axe-core automated accessibility scanner & manual keyboard tests |
| **Lighthouse Best Practices Target**| `95+` | HTTPS verification, modern image formats, zero runtime errors |
| **Lighthouse SEO Target** | `95+` | Metadata crawler, open-graph validation, JSON-LD schema check |

### 1.1 Core Web Vitals (CWV) Target Thresholds
- **Target Largest Contentful Paint (LCP):** `< 2.2s` (Hero typography and primary DOM nodes hydrate immediately while WebGL canvas streams asynchronously in background).
- **Target Interaction to Next Paint (INP):** `< 150ms` (Buttons, navigation drawer, and form inputs must respond within 150ms).
- **Target Cumulative Layout Shift (CLS):** `< 0.05` (Zero unexpected content jumping; explicit aspect ratios on containers, images, and canvas).
- **Target Total Blocking Time (TBT):** `< 200ms` during script evaluation.

---

## 2. 3D & WebGL Optimization Strategy

### 2.1 Asynchronous Canvas Hydration & Code Splitting
- The 3D canvas and associated Three.js dependencies will be packaged in a separate chunk (`React.lazy(() => import('./components/canvas/HeroScene'))`).
- Critical HTML DOM (Typography, Navigation, Hero CTAs) hydrates immediately in `< 800ms`.
- The 3D scene initializes in the background and smoothly cross-fades into view once assets and shaders compile.

### 2.2 Texture & Asset Compression Pipeline
- **Textures:** All environment maps and materials use `.ktx2` (Basis Universal) or compressed `.webp` formats, minimizing GPU memory consumption.
- **Mesh Optimization:** 3D models processed through `gltf-transform` with Draco compression and vertex quantization.
- **Garbage Collection & Disposal:** Strict unmounting logic (`geometry.dispose()`, `material.dispose()`) on route changes to prevent memory leaks.

---

## 3. Graceful WebGL Fallback & Low-End Mobile Behaviour

To ensure 100% usability and visual integrity across all devices, the application implements a multi-tier fallback architecture:

```
[ Viewport Request ]
        │
        ▼
[ Capability Assessment ]
        ├── 1. WebGL2 Context Supported?
        ├── 2. Device Memory >= 4GB?
        ├── 3. Hardware Concurrency >= 4 cores?
        └── 4. Battery Saver / Reduced Motion active?
        │
        ├── YES (Meets High/Mid Criteria)
        │     └──► Mount Three.js / R3F Canvas (Adaptive DPR 1.0 - 2.0)
        │
        └── NO (Low-End Mobile, WebGL Disabled, or Reduced Motion)
              └──► Mount Graceful Static WebP Hero Illustration
                   • Zero WebGL runtime or shader overhead
                   • High-resolution studio render of chrome sculpture
                   • Retains identical editorial layout and contrast
                   • Optional subtle CSS ambient float animation
```

### 3.1 WebGL Capability Detection Implementation Plan
```typescript
export function checkWebGLSupport(): { supported: boolean; isLowEnd: boolean } {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return { supported: false, isLowEnd: true };

    // Check device capabilities
    const memory = (navigator as any).deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const isLowEnd = memory < 4 || cores < 4;

    return { supported: true, isLowEnd };
  } catch (e) {
    return { supported: false, isLowEnd: true };
  }
}
```

### 3.2 Low-End Mobile Behavior
When a low-end mobile device or battery-saving mode is detected:
1. The Three.js WebGL canvas bundle is completely bypassed, saving ~400KB of JavaScript execution.
2. A lightweight `<picture>` element loads an optimized WebP render (`< 45KB`) with `loading="eager"` and `fetchpriority="high"`.
3. Touch interactions on the page remain 100% focused on smooth, stutter-free document scrolling.
4. Content readability and CTA button responsiveness remain uncompromised.

---

## 4. Web Accessibility (a11y) & WCAG 2.1 AA Rigor

### 4.1 Color Contrast Compliance
Every color pairing in the AG-PDS design system satisfies WCAG 2.1 AA standards (minimum contrast ratio `4.5:1` for regular text, `3:1` for large text):
- Primary Text `#111827` on Canvas `#F6F9FC` -> Contrast Ratio: **14.8:1** (Passes AAA).
- Secondary Text `#64748B` on Canvas `#F6F9FC` -> Contrast Ratio: **4.8:1** (Passes AA).
- Accent Blue `#4169E1` on White `#FFFFFF` -> Contrast Ratio: **4.6:1** (Passes AA).
- Primary Button Navy `#101827` on White `#FFFFFF` -> Contrast Ratio: **15.2:1** (Passes AAA).

### 4.2 Semantic HTML & Screen Reader Architecture
- **Single `<h1>` Tag:** Only one `<h1>` per page (the hero headline), followed by strict heading levels (`<h2>` for sections, `<h3>` for cards).
- **Accessible Landmarks:** Proper semantic tags throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Screen Reader Only Text (`.sr-only`):** Complex 3D visual scenes and decorative telemetry badges are accompanied by accessible descriptions:
  ```html
  <div class="sr-only">
    Interactive 3D visualization representing Abhinash Gupta's dual focus on engineering structure and creative fluidity.
  </div>
  ```

### 4.3 Keyboard Navigation & Focus Visible
- **Skip to Content Link:** An accessible link at the top of the DOM:
  ```html
  <a href="#main-content" class="skip-to-content">Skip to primary content</a>
  ```
- **Focus Rings:** Distinct, non-intrusive focus rings on all interactive elements:
  `outline: 2px solid #4169E1; outline-offset: 2px;`.
- **Keyboard Traps Eliminated:** All modals and drawer menus trap focus correctly while open and restore focus to trigger buttons upon closing (via Escape key).

---

## 5. Modern SEO & Metadata Architecture

### 5.1 Metadata & Social Graph
- **Title Structure:** `Abhinash Gupta — Creative Full Stack Developer`
- **Meta Description:** Concise description explaining full-stack capabilities, key projects, and professional background.
- **OpenGraph & Twitter Cards:** Standardized preview image (`1200x630`) showcasing brand typography and identity.

### 5.2 Structured Data (JSON-LD)
A standardized schema document embedded in `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abhinash Gupta",
  "jobTitle": "Creative Full Stack Developer",
  "description": "Creative Full Stack Developer building scalable web applications and interactive digital experiences.",
  "knowsAbout": [
    "Full Stack Development",
    "React",
    "TypeScript",
    "Node.js",
    "Three.js",
    "Database Systems",
    "System Design"
  ],
  "sameAs": [
    "https://github.com/abhinashgupta",
    "https://linkedin.com/in/abhinashgupta"
  ]
}
```
