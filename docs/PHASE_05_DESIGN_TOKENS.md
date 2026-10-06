# PHASE 05 — CANONICAL DESIGN TOKENS SPECIFICATION
**Project:** ABHINASH GUPTA — Premium 3D Interactive Developer Portfolio  
**Phase:** 05 (Design System & Token Architecture)  
**Deliverable:** 02 of 05  
**File Location:** `docs/PHASE_05_DESIGN_TOKENS.md`  
**Baseline Alignment:** Phase 01–04 Approved Specifications  
**Latest Verified Base Commit:** `8c2a30f108aa556c249697e0561e4a8fd1597ee9`  

---

## 1. Token Taxonomy & Architecture

The design tokens follow an implementation-neutral, multi-tier hierarchy:
```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           TOKEN ARCHITECTURE                            │
│                                                                         │
│   Tier 1: Global Primitive Tokens   ──►  Raw hex, px, ms, ratios        │
│   Tier 2: Semantic Intent Tokens     ──►  color.surface, space.section   │
│   Tier 3: Component-Scoped Tokens    ──►  component.card.padding         │
└─────────────────────────────────────────────────────────────────────────┘
```

This token architecture will be translated into CSS custom properties and utility classes in Phase 06.

---

## 2. Color Tokens (`color.*`)

### 2.1 Canvas & Surface Tokens
| Token Name | Primitive / Raw Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `color.canvas.primary` | `#F6F9FC` | Global viewport background ground |
| `color.canvas.contrast` | `#101827` | High-contrast viewport sections (footer base, dark banner) |
| `color.surface.base` | `#FFFFFF` | Primary content cards, form containers, dialog surfaces |
| `color.surface.muted` | `#EEF2F8` | Secondary container fill, code blocks, telemetry strips |
| `color.surface.nav` | `rgba(255, 255, 255, 0.92)`| Translucent ground for floating desktop header bar |
| `color.surface.scrim` | `rgba(246, 249, 252, 0.95)`| Readability gradient scrim over 3D hero canvas |
| `color.surface.modal` | `rgba(17, 24, 39, 0.60)` | Dimmed backdrop overlay for mobile navigation drawer |

### 2.2 Typographic Color Tokens
| Token Name | Primitive / Raw Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `color.text.primary` | `#111827` | Headings, hero copy, primary labels, navigation wordmark |
| `color.text.secondary` | `#64748B` | Editorial body copy, project descriptions, subtitle text |
| `color.text.tertiary` | `#94A3B8` | Subtle metadata, timestamps, input placeholders, breadcrumbs |
| `color.text.inverse` | `#FFFFFF` | Text rendered on dark navy surfaces or solid accent buttons |
| `color.text.accent` | `#4169E1` | Interactive inline text links, eyebrow section numbers |

### 2.3 Brand Accent Tokens
| Token Name | Primitive / Raw Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `color.accent.primary` | `#4169E1` | Signature Royal Blue; primary buttons, active states, badges |
| `color.accent.hover` | `#3154C4` | Darkened royal blue for hover feedback |
| `color.accent.active` | `#2544A5` | Pressed/active button state |
| `color.accent.subtle` | `#EFF3FE` | Light blue tint for selected pill filters and active indicators |
| `color.accent.border` | `rgba(65, 105, 225, 0.25)` | Subtle blue hairline outline around active items |

### 2.4 Structural Border Tokens
| Token Name | Primitive / Raw Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `color.border.default` | `#E5EAF1` | Hairline container borders, section dividers, card frames |
| `color.border.muted` | `#F1F5F9` | Inner nested dividers, list item split lines |
| `color.border.hover` | `#CBD5E1` | Card hover border, input hover border |
| `color.border.focus` | `#4169E1` | Active form input boundary, selected state border |

### 2.5 Status & Feedback Tokens
| Token Name | Primitive / Raw Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `color.status.success` | `#059669` | Verified feature badges, valid form confirmation, live beacon |
| `color.status.success.bg`| `#ECFDF5` | Background tint for verified achievement badges |
| `color.status.warning` | `#D97706` | Planned roadmap tags, pending integration notices |
| `color.status.warning.bg`| `#FFFBEB` | Background tint for planned roadmap indicators |
| `color.status.error` | `#DC2626` | Form validation error text, failure banners |
| `color.status.error.bg` | `#FEF2F2` | Background tint for invalid input feedback |
| `color.focus.ring` | `rgba(65, 105, 225, 0.40)` | Accessible 3px outer glow ring under keyboard focus |

---

## 3. Typography Tokens (`type.*`)

### 3.1 Font Families
| Token Name | Font Stack | Semantic Intent |
| :--- | :--- | :--- |
| `type.family.display` | `'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif` | Display headlines, section H1/H2, modal titles |
| `type.family.body` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Narrative paragraphs, form inputs, button labels |
| `type.family.mono` | `'JetBrains Mono', 'Fira Code', monospace` | Indices (`// 01.`), technology tags, code, telemetry |

### 3.2 Font Weights
| Token Name | Numeric Value | Application |
| :--- | :--- | :--- |
| `type.weight.regular` | `400` | Standard body paragraphs, placeholder text |
| `type.weight.medium` | `500` | Navigation links, form labels, technology tags |
| `type.weight.semibold`| `600` | Section subheads, button text, card titles |
| `type.weight.bold` | `700` | Display hero headlines, major section headers |

### 3.3 Typographic Scale Matrix
| Token Name | Font Size | Line Height | Letter Spacing | Font Family | Default Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type.scale.display.hero` | `84px` (`5.25rem`) | `1.05` | `-0.04em` | Space Grotesk | Desktop Hero primary headline |
| `type.scale.display.mobile`| `36px` (`2.25rem`) | `1.15` | `-0.03em` | Space Grotesk | Mobile Hero primary headline |
| `type.scale.h1` | `56px` (`3.50rem`) | `1.10` | `-0.03em` | Space Grotesk | Page titles (Projects Archive, Case Study) |
| `type.scale.h2` | `32px` (`2.00rem`) | `1.20` | `-0.025em`| Space Grotesk | Section headlines (e.g. `Selected Work`) |
| `type.scale.h3` | `24px` (`1.50rem`) | `1.30` | `-0.02em` | Space Grotesk | Project card titles, case study subheads |
| `type.scale.h4` | `20px` (`1.25rem`) | `1.35` | `-0.015em`| Space Grotesk | Architecture pillar cards, modal subheads |
| `type.scale.body.large` | `18px` (`1.125rem`)| `1.60` | `-0.01em` | Inter | Hero narrative lead, blockquote intro |
| `type.scale.body.base` | `16px` (`1.00rem`) | `1.55` | `0em` | Inter | Standard body text, case study copy, form inputs |
| `type.scale.body.small` | `14px` (`0.875rem`)| `1.50` | `0em` | Inter | Form labels, secondary card metadata |
| `type.scale.caption` | `12px` (`0.75rem`) | `1.40` | `+0.01em` | Inter | Timestamps, form validation errors |
| `type.scale.nav` | `14px` (`0.875rem`)| `1.00` | `+0.01em` | Inter | Floating navigation bar link items |
| `type.scale.button` | `15px` (`0.9375rem`)| `1.00` | `+0.015em`| Inter | Button action labels (SemiBold) |
| `type.scale.mono.eyebrow`| `13px` (`0.8125rem`)| `1.20` | `+0.04em` | JetBrains Mono | Section index eyebrows (`// 01. PHILOSOPHY`) |
| `type.scale.mono.tag` | `12px` (`0.75rem`) | `1.20` | `+0.02em` | JetBrains Mono | Technology badges (`TypeScript`, `Node.js`) |
| `type.scale.mono.code` | `13px` (`0.8125rem`)| `1.60` | `0em` | JetBrains Mono | Code blocks, technical architecture specs |

---

## 4. Spacing & Rhythm Tokens (`space.*`)

Based on a strict 4px/8px modular rhythm:

| Token Name | Pixel Value | Rem Equivalent | Target Application |
| :--- | :--- | :--- | :--- |
| `space.0` | `0px` | `0rem` | Reset values |
| `space.1` | `4px` | `0.25rem` | Micro badge padding, inline icon separation |
| `space.2` | `8px` | `0.50rem` | Tag vertical padding, button icon gap |
| `space.3` | `12px` | `0.75rem` | Input horizontal padding, tag horizontal padding |
| `space.4` | `16px` | `1.00rem` | Mobile screen gutter, card inner padding (compact) |
| `space.5` | `20px` | `1.25rem` | Medium card inner padding, mobile section gap |
| `space.6` | `24px` | `1.50rem` | Desktop card inner padding, standard form field gap |
| `space.8` | `32px` | `2.00rem` | Desktop grid column gap, card header separation |
| `space.10` | `40px` | `2.50rem` | Form submit button separation, modal padding |
| `space.12` | `48px` | `3.00rem` | Minor section break, timeline node interval |
| `space.16` | `64px` | `4.00rem` | Standard section top/bottom padding (Mobile) |
| `space.20` | `80px` | `5.00rem` | Standard section top/bottom padding (Tablet) |
| `space.24` | `96px` | `6.00rem` | Major section top/bottom padding (Desktop) |
| `space.32` | `128px`| `8.00rem` | Hero viewport vertical separation (Desktop) |
| `space.40` | `160px`| `10.00rem` | Cinematic page break on ultra-wide viewports |

---

## 5. Sizing & Layout Containment Tokens (`size.*`, `layout.*`)

### 5.1 Container & Layout Boundaries
| Token Name | Pixel Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `layout.max.width` | `1280px` | Maximum outer container width for content grid |
| `layout.nav.width` | `1080px` | Maximum width of floating desktop navigation pill |
| `layout.text.measure`| `680px` | Maximum readable text line length (65–75 characters) |
| `layout.gutter.desktop`| `32px` | Outer horizontal padding for desktop viewports |
| `layout.gutter.tablet` | `24px` | Outer horizontal padding for tablet viewports |
| `layout.gutter.mobile` | `16px` | Outer horizontal padding for standard mobile viewports |

### 5.2 Component Sizing Tokens
| Token Name | Dimension Value | Target Application |
| :--- | :--- | :--- |
| `size.touch.target` | `48px` | Minimum bounding box for all interactive touch hits |
| `size.nav.height` | `56px` | Fixed height of top navigation bar |
| `size.button.height`| `44px` | Standard height for primary and secondary action buttons |
| `size.input.height` | `48px` | Standard height for text inputs and select fields |
| `size.badge.monogram`| `32px` | Dimension of `[AG]` square monogram icon badge |
| `size.beacon.dot` | `8px` | Dimension of pulsing availability status beacon |

---

## 6. Border & Radius Tokens (`border.*`, `radius.*`)

### 6.1 Border Stroke Tokens
| Token Name | Dimension & Style | Target Application |
| :--- | :--- | :--- |
| `border.width.none` | `0px` | Border removal |
| `border.width.thin` | `1px solid` | Default mechanical border for cards, inputs, dividers |
| `border.width.medium`| `1.5px solid` | Active selected border, focused input boundary |
| `border.width.focus` | `2px solid` | High-visibility accessible keyboard focus outline |

### 6.2 Border Radius Tokens
| Token Name | Pixel Value | Semantic Intent & Usage |
| :--- | :--- | :--- |
| `radius.none` | `0px` | Flush full-width dividers, terminal headers |
| `radius.sm` | `4px` | Micro technology pill tags, code snippets, status badges |
| `radius.md` | `6px` | Architecture spec callouts, dropdown menus, tooltips |
| `radius.lg` | `8px` | Standard card surfaces, form inputs, dialog windows |
| `radius.xl` | `12px` | Large hero cards, interactive case study preview containers |
| `radius.full` | `9999px` | Navigation pill, CTA buttons, filter pill chips, status beacon |

---

## 7. Elevation & Shadow Tokens (`shadow.*`)

Shadows remain clean, diffuse, and desaturated:

| Token Name | CSS Shadow Value | Usage Role |
| :--- | :--- | :--- |
| `shadow.none` | `none` | Reset or flat surface |
| `shadow.sm` | `0 1px 2px rgba(17, 24, 39, 0.04)` | Subtle grounding for input fields and tags |
| `shadow.md` | `0 4px 6px -1px rgba(17, 24, 39, 0.05), 0 2px 4px -2px rgba(17, 24, 39, 0.03)` | Base card elevation at resting state |
| `shadow.lg` | `0 12px 24px -4px rgba(17, 24, 39, 0.06), 0 4px 8px -2px rgba(17, 24, 39, 0.03)` | Card hover lift, dropdown menu floating state |
| `shadow.nav` | `0 8px 20px -2px rgba(17, 24, 39, 0.06)` | Floating desktop navigation pill |
| `shadow.focus` | `0 0 0 3px rgba(65, 105, 225, 0.20)` | Outer glow for active input focus |

---

## 8. Opacity & Z-Index Tokens (`opacity.*`, `z.*`)

### 8.1 Opacity Tokens
| Token Name | Value | Semantic Role |
| :--- | :--- | :--- |
| `opacity.0` | `0.00` | Hidden / invisible |
| `opacity.disabled` | `0.40` | Disabled form controls and inactive buttons |
| `opacity.subtle` | `0.60` | Secondary metadata hover state, inactive nav links |
| `opacity.glass` | `0.92` | Translucent ground for floating navigation |
| `opacity.scrim` | `0.95` | White-to-transparent text readability scrim |
| `opacity.100` | `1.00` | Fully opaque card surfaces |

### 8.2 Z-Index Layering Tokens
| Token Name | Integer Value | Structural Layer Role |
| :--- | :--- | :--- |
| `z.background` | `-1` | Root canvas ambient gradients |
| `z.canvas3d` | `0` | Three.js WebGL spatial canvas layer |
| `z.scrim` | `5` | Radial readability gradient scrim over 3D canvas |
| `z.content` | `10` | Foreground typography, cards, grid items, page content |
| `z.sticky` | `30` | In-page sticky tabs or side headers |
| `z.nav` | `40` | Floating top desktop navigation bar |
| `z.hud` | `45` | Docked mobile bottom HUD pill |
| `z.drawer` | `50` | Mobile navigation slide-down drawer |
| `z.modal` | `60` | Fullscreen modal dialogues, image lightboxes |
| `z.preloader` | `100` | Initial brand preloader sequence |

---

## 9. Responsive Breakpoint Tokens (`breakpoint.*`)

| Token Name | Pixel Width | Media Query Range | Representative Device Profile |
| :--- | :--- | :--- | :--- |
| `breakpoint.mobile.sm` | `320px` | `< 375px` | Compact smartphones (iPhone SE 1st Gen) |
| `breakpoint.mobile.std`| `375px` | `375px – 389px` | Standard mobile (iPhone SE 2nd/3rd Gen) |
| `breakpoint.mobile.base`| `390px`| `390px – 429px` | Modern mobile baseline (iPhone 14/15/16) |
| `breakpoint.mobile.lg` | `430px` | `430px – 767px` | Large smartphones (iPhone Pro Max, Galaxy Ultra) |
| `breakpoint.tablet` | `768px` | `768px – 1023px`| iPads, Android tablets, portrait laptop screens |
| `breakpoint.desktop` | `1024px`| `1024px – 1279px`| Standard desktop displays, MacBooks |
| `breakpoint.desktop.lg`| `1280px`| `1280px – 1439px`| Standard widescreen monitors |
| `breakpoint.desktop.xl`| `1440px`| `≥ 1440px` | Cinematic ultra-wide desktop displays |

---

## 10. Motion & Animation Tokens (`motion.*`)

These tokens serve as **design specifications** for future animation choreography:

### 10.1 Duration Tokens
| Token Name | Duration (ms) | Usage Intent |
| :--- | :--- | :--- |
| `motion.duration.instant` | `0ms` | Reduced motion mode, instant zero-delay states |
| `motion.duration.fast` | `150ms` | Micro-interactions: button hover, tag color shifts |
| `motion.duration.standard`| `250ms` | Card elevation lift, input focus ring transition |
| `motion.duration.slow` | `400ms` | Mobile drawer slide, tab content cross-fade |
| `motion.duration.cinematic`| `700ms` | Section entrance reveals, camera angle transitions |

### 10.2 Easing Curves (Design References)
| Token Name | Cubic-Bezier Value | Motion Feel & Application |
| :--- | :--- | :--- |
| `motion.ease.default` | `cubic-bezier(0.16, 1, 0.3, 1)` | Out-quint: snappy entrance, gentle settle (standard UI) |
| `motion.ease.smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)`| Natural mechanical ease for general transitions |
| `motion.ease.inOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric cross-fade for route transitions |
| `motion.ease.spring` | `spring(mass: 1, stiffness: 180, damping: 24)` | Reference spring for magnetic button pull |

---

## 11. 3D Spatial Visual Tokens (`3d.*`)

These visual tokens govern the spatial presence and rendering parameters of the 3D scene:

| Token Name | Target Value | Visual Purpose & Role |
| :--- | :--- | :--- |
| `3d.canvas.height.desktop` | `560px` | Initial wireframe target height on desktop (`≥ 1024px`) |
| `3d.canvas.height.tablet` | `380px` | Initial wireframe target height on tablet (`768px – 1023px`) |
| `3d.canvas.height.mobile` | `280px` | Initial wireframe target height on mobile (`< 768px`) |
| `3d.camera.fov` | `45°` | Architectural perspective field of view |
| `3d.camera.near` | `0.1` | Near clipping plane |
| `3d.camera.far` | `100` | Far clipping plane |
| `3d.dpr.max.desktop` | `2.0` | Maximum device pixel ratio clamp on desktop |
| `3d.dpr.max.mobile` | `1.5` | Battery/GPU clamped device pixel ratio on mobile |
| `3d.monolith.metalness` | `0.10` | Subtle ceramic/metallic hybrid finish |
| `3d.monolith.roughness` | `0.20` | Smooth beveled edges with clean specular highlights |
| `3d.monolith.color` | `#FFFFFF` | High-key neutral sculpture base |
| `3d.orbit.particles.count` | `16` | Micro telemetry nodes orbiting monolith on desktop |
| `3d.orbit.particles.mobile`| `6` | Reduced telemetry nodes orbiting monolith on mobile |
| `3d.scrim.gradient` | `radial-gradient(ellipse 65% 80% at 20% 50%, rgba(246, 249, 252, 0.95) 0%, rgba(246, 249, 252, 0) 100%)` | Contrast preservation scrim under copy |

---

## 12. Component-Scoped Tokens (`component.*`)

### 12.1 Button Tokens
```text
component.button.padding.x      = 24px (space.6)
component.button.padding.y      = 12px (space.3)
component.button.height         = 44px (size.button.height)
component.button.radius         = 9999px (radius.full)
component.button.font           = Inter 600, 15px (type.scale.button)
component.button.primary.bg     = #4169E1 (color.accent.primary)
component.button.primary.color  = #FFFFFF (color.text.inverse)
component.button.ghost.border   = 1px solid #E5EAF1 (color.border.default)
component.button.ghost.color    = #111827 (color.text.primary)
```

### 12.2 Card Tokens
```text
component.card.bg               = #FFFFFF (color.surface.base)
component.card.border           = 1px solid #E5EAF1 (color.border.default)
component.card.radius           = 8px (radius.lg)
component.card.padding.desktop  = 32px (space.8)
component.card.padding.mobile   = 16px (space.4)
component.card.shadow.rest      = shadow.md
component.card.shadow.hover     = shadow.lg
```

### 12.3 Form Input Tokens
```text
component.input.height          = 48px (size.input.height)
component.input.bg              = #FFFFFF (color.surface.base)
component.input.border          = 1px solid #E5EAF1 (color.border.default)
component.input.border.focus    = 1.5px solid #4169E1 (color.border.focus)
component.input.radius          = 8px (radius.lg)
component.input.padding.x       = 16px (space.4)
component.input.font            = Inter 400, 16px (type.scale.body.base)
component.input.label.font      = Inter 500, 14px (type.scale.body.small)
component.input.label.color     = #111827 (color.text.primary)
```
