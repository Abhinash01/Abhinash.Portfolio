# 3D EXPERIENCE SPECIFICATION & ART DIRECTION
**Scene Identifier:** `HeroStudioSpatialScene`  
**Core Technologies:** Three.js / React Three Fiber (`@react-three/fiber`) / Drei (`@react-three/drei`) / Custom GLSL  
**Target Performance:** 60 FPS on Standard Hardware | Graceful 2D Fallback on Low-End / Unsupported Devices  

---

## 1. Creative Concept: "The Kinetic Monolith & Gyroscope"

The hero scene is set inside a high-key, photorealistic white architectural studio canvas (`#F6F9FC`). Centered in 3D space floats a dynamic, multi-layered kinetic sculpture representing the intersection of structural engineering and algorithmic elegance:

```
                  ┌───────────────────────────────┐
                  │      [ STUDIO LIGHTS ]        │
                  │   Key • Fill • Rim • HDR Map  │
                  └───────────────┬───────────────┘
                                  │
                                  ▼
                     ╭─────────────────────────╮
                     │   OUTER CHROMIUM RING   │ ◄── Gyroscopic slow orbit
                     │ ╭─────────────────────╮ │
                     │ │   OPTICAL GLASS     │ │ ◄── Refractive shell
                     │ │ ╭─────────────────╮ │ │
                     │ │ │ CENTRAL CHROME  │ │ │ ◄── Beveled kinetic core
                     │ │ │     MONOLITH    │ │ │
                     │ │ ╰─────────────────╯ │ │
                     │ ╰─────────────────────╯ │
                     ╰─────────────────────────╯
                                  │
                  ┌───────────────┴───────────────┐
                  │   CONTACT SHADOW RECEIVER     │
                  │   Floor plane at y = -2.4     │
                  └───────────────────────────────┘
```

---

## 2. 3D Elements & Architectural Geometry

### 2.1 Main 3D Hero Object: "The Kinetic Core & Dual Gyro-Rings"
- **Primary Core:** A truncated geometric polyhedron with mirror-polished liquid chromium material. The facets reflect the high-key studio environment and user cursor movements.
- **Inner Refractive Shell:** A floating, concentric thin-walled spherical glass shell encapsulating the core, featuring optical thickness, light dispersion, and subtle caustic refractions.
- **Outer Gyro-Rings:** Two interlocked, chamfered metallic rings with an elliptical cross-section rotating at slow counter-velocities on the X and Z axes.

### 2.2 Supporting 3D Ambient Elements
- **Floating Micro-Spheres:** 12 to 16 miniature chromium spheres (radius: `0.04` to `0.08`) orbiting gently in the surrounding space, responding subtly to pointer movement.
- **Translucent Dust Particles:** Translucent silver particles drifting with subtle Brownian motion within a bounded volume (`x: [-5, 5]`, `y: [-3, 3]`, `z: [-4, 2]`), catching specular glints from directional rim lights.
- **Shadow Receiver Plane:** An invisible ground plane at `y = -2.4` utilizing Drei's `<ContactShadows />` to project soft studio contact shadows without costly depth-map rendering.

---

## 3. Lighting & Studio Environment Rig

### 3.1 Illumination Parameters
1. **High-Dynamic-Range Environment (HDR):**
   - High-key studio gradient map (neutral white-to-gray gradient with soft 5500K softbox highlights). Provides clean specular reflections on chrome surfaces.
2. **Key Light (Softbox Left):**
   - Directional / RectArea light positioned at `[-4, 5, 4]`, intensity: `1.8`, color: `#FFFFFF`. Casts primary geometry definition.
3. **Fill Light (Studio Right):**
   - Soft directional light positioned at `[4, 2, 2]`, intensity: `0.8`, color: `#EEF2F8`. Softens deep self-shadows.
4. **Rim / Accent Light (Rear Top):**
   - Positioned at `[0, 6, -5]`, intensity: `2.0`, color: `#4169E1` (Royal Accent tint). Produces a crisp blue-tinted rim highlight along the edges of the chrome rings.
5. **Ambient Studio Floor Bounce:**
   - HemisphereLight with sky color `#FFFFFF` and ground color `#E5EAF1`, intensity: `0.6`.

---

## 4. Material Specifications & Shaders

### 4.1 Liquid Chrome Material (`MeshStandardMaterial`)
```typescript
const chromeMaterial = {
  color: "#FFFFFF",
  metalness: 0.98,
  roughness: 0.04,
  envMapIntensity: 1.5,
};
```

### 4.2 Optical Glass Material (`MeshPhysicalMaterial`)
```typescript
const opticalGlassMaterial = {
  color: "#FFFFFF",
  metalness: 0.05,
  roughness: 0.08,
  transmission: 0.94,       // Physical glass transparency
  thickness: 0.8,           // Refractive depth
  ior: 1.52,                // Index of refraction (crown glass)
  chromaticAberration: 0.04,// Controlled subtle fringe
  attenuationDistance: 1.2,
  attenuationColor: "#F0F4FF",
};
```

---

## 5. Text Readability, Usability & Layering Governance

Crucially, the 3D scene must **never** compromise text readability, link clickability, or document navigation.

### 5.1 Z-Index & DOM Layering
```
┌────────────────────────────────────────────────────────┐
│ DOM Layer (z-index: 10)                                │
│ • Headlines, Copy, Navigation, CTA Buttons             │
│ • Pointer events: auto                                 │
├────────────────────────────────────────────────────────┤
│ Readability Scrim Layer (z-index: 5)                   │
│ • Soft radial gradient wash behind left-aligned text   │
│ • pointer-events: none                                 │
├────────────────────────────────────────────────────────┤
│ WebGL 3D Canvas Layer (z-index: 0)                     │
│ • Three.js canvas container                            │
│ • pointer-events: none (listens via window pointer bus)│
└────────────────────────────────────────────────────────┘
```

### 5.2 Contrast Preservation
- A soft white radial gradient scrim (`radial-gradient(ellipse 65% 80% at 20% 50%, rgba(246, 249, 252, 0.95) 0%, rgba(246, 249, 252, 0) 100%)`) sits between the text layer and 3D canvas.
- Regardless of sculpture rotation or specular highlights, text copy maintains a minimum **14.8:1 contrast ratio**, exceeding WCAG AAA requirements.

### 5.3 Pointer Interaction Model
- The 3D canvas container is set to `pointer-events: none`.
- Pointer coordinates are captured globally from `window.addEventListener('pointermove', ...)` using lerped coordinates.
- This ensures that text selection, button clicks, and mouse interactions with DOM elements are never captured or blocked by the 3D canvas.

---

## 6. Mobile Adaptation & Graceful Fallback Architecture

### 6.1 Mobile Viewport Adaptations (< 768px)
- **Geometry Reduction:** The outer gyro-rings and micro-spheres are culled. Only the central chrome core and glass shell are retained.
- **Camera Offset:** Positioned at `z: 8.2` and `y: 0.8` to leave the bottom half of the mobile viewport clear for the hero headline and CTA buttons.

### 6.2 Low-End Mobile & Performance Detection
```typescript
export function evaluateDeviceTier(): 'high' | 'mid' | 'fallback' {
  // Check WebGL availability
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) return 'fallback';

  // Check hardware constraints
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  if (cores < 4 || memory < 4) return 'fallback';

  // Check user preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'fallback';
  }

  return cores >= 8 && memory >= 8 ? 'high' : 'mid';
}
```

### 6.3 Graceful 2D Fallback Implementation
When `evaluateDeviceTier()` returns `'fallback'`:
1. The Three.js canvas component is **not mounted**, saving JavaScript bundle parsing time and GPU memory.
2. A lightweight `<picture>` element is rendered displaying a high-resolution, photorealistic WebP render of the sculpture.
3. The visual appearance, editorial composition, and typography remain 100% identical.
4. A subtle CSS ambient float animation (`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`) preserves visual life without GPU draw calls.
