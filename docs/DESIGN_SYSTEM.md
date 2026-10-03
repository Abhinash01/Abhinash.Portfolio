# DESIGN SYSTEM SPECIFICATION & DESIGN TOKENS
**System Name:** AG-Precision Design System (AG-PDS v1.0)  
**Philosophy:** Editorial Minimal Luxury with Cinematic Spatial Depth  
**Target Platform:** Web (Desktop, Laptop, Tablet, Mobile)  

---

## 1. Color Palette & Token Mathematics

The palette is engineered around high-key studio luminosity, balanced by high-contrast typographic anchors and a rich royal accent blue.

### 1.1 Core Brand & Canvas Tokens

| Token Name | Hex Code | HSL Value | Semantic Role & Application |
| :--- | :--- | :--- | :--- |
| `color-canvas` | `#F6F9FC` | `210°, 43%, 98%` | Primary root viewport background; soft cool architectural canvas |
| `color-surface` | `#FFFFFF` | `0°, 0%, 100%` | Primary opaque card surfaces, modals, drawers (zero blur artifacts) |
| `color-surface-muted` | `#EEF2F8` | `216°, 38%, 95%` | Secondary component surfaces, code block backdrops, pill tags |
| `color-surface-nav-glass` | `rgba(255,255,255,0.85)` | — | Reserved **strictly** for floating top navigation bar |
| `color-text-primary` | `#111827` | `221°, 39%, 11%` | Dominant headers, primary copy, high-contrast labels |
| `color-text-secondary` | `#64748B` | `215°, 16%, 47%` | Body paragraphs, supporting metadata, inactive tab states |
| `color-text-tertiary` | `#94A3B8` | `215°, 20%, 65%` | Subtle timestamps, breadcrumbs, placeholder text |
| `color-accent-blue` | `#4169E1` | `225°, 73%, 57%` | Signature Royal Accent; interactive links, active tabs, focal points |
| `color-accent-hover` | `#3154C4` | `225°, 60%, 48%` | Hover state for accent buttons and interactive links |
| `color-accent-light` | `#EFF3FE` | `225°, 85%, 97%` | Accent badge fills, selected card highlights |
| `color-deep-navy` | `#101827` | `222°, 42%, 11%` | Contrast footer base, terminal callout badges |
| `color-border-subtle` | `#E5EAF1` | `216°, 30%, 92%` | Standard card dividers, hairline borders (1px) |
| `color-border-strong` | `#CBD5E1` | `214°, 32%, 84%` | Active input borders, focused container outlines |

### 1.2 Contrast & Readability Safeguards (3D Hero Overlay)
To ensure 100% text readability over the interactive 3D hero scene:
- The Three.js canvas resides on `z-index: 0` with `pointer-events: none` on the container (only the 3D interaction layer captures designated pointer coordinates).
- Text overlays reside on `z-index: 10`.
- Behind left-aligned hero copy, a subtle white radial light scrim (`radial-gradient(ellipse 65% 80% at 20% 50%, rgba(246, 249, 252, 0.92) 0%, rgba(246, 249, 252, 0) 100%)`) eliminates any visual interference from specular chrome highlights, maintaining a minimum **14.8:1** contrast ratio.

### 1.3 Strict Restraint on Glassmorphism & Decorative Elements
- **Glassmorphism Constraint:** Frosted glass with `backdrop-filter: blur(...)` is restricted **exclusively** to the floating navigation pill. All project cards, modals, and content containers use clean, opaque `#FFFFFF` surfaces with crisp 1px borders.
- **No Decorative Clutter:** No gratuitous floating geometric crosses, noisy matrix dots, or arbitrary neon drop shadows. Every visual line must mark a real content boundary.

---

## 2. Typography System

### 2.1 Font Families
- **Display & Headings:** `'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif`  
  *Characteristics:* Geometric, wide horizontal rhythm, distinctive mechanical modernism.
- **Body & Editorial:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`  
  *Characteristics:* Unsurpassed legibility, neutral humanist geometry, optimal optical kerning.
- **Technical & Code:** `'JetBrains Mono', 'Fira Code', monospace`  
  *Characteristics:* Clear distinction between 0/O and 1/l, programming ligatures, engineering aesthetic.

### 2.2 Responsive Typographic Scale

#### Desktop Scale (Viewport ≥ 1024px)
| Level | Font Size | Line Height | Font Weight | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display-hero` | `84px` (`5.25rem`) | `1.05` | 700 (Bold) | `-0.04em` | Space Grotesk |
| `text-h1` | `56px` (`3.5rem`) | `1.1` | 700 (Bold) | `-0.03em` | Space Grotesk |
| `text-h2` | `40px` (`2.5rem`) | `1.2` | 600 (SemiBold) | `-0.025em` | Space Grotesk |
| `text-h3` | `28px` (`1.75rem`) | `1.3` | 600 (SemiBold) | `-0.02em` | Space Grotesk |
| `text-h4` | `20px` (`1.25rem`) | `1.4` | 600 (SemiBold) | `-0.01em` | Space Grotesk |
| `text-body-lead` | `18px` (`1.125rem`)| `1.65` | 400 (Regular) | `-0.01em` | Inter |
| `text-body-regular`| `15px` (`0.9375rem`)| `1.6` | 400 (Regular) | `0em` | Inter |
| `text-body-small` | `13px` (`0.8125rem`)| `1.5` | 400 (Regular) | `+0.01em` | Inter |
| `text-tech-label` | `12px` (`0.75rem`) | `1.4` | 500 (Medium) | `+0.08em` | JetBrains Mono |
| `text-tech-code` | `13px` (`0.8125rem`)| `1.6` | 400 (Regular) | `0em` | JetBrains Mono |

#### Tablet Scale (768px – 1023px)
| Level | Font Size | Line Height | Font Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| `text-display-hero` | `60px` (`3.75rem`) | `1.1` | 700 | `-0.035em` |
| `text-h1` | `44px` (`2.75rem`) | `1.15` | 700 | `-0.025em` |
| `text-h2` | `32px` (`2.0rem`) | `1.25` | 600 | `-0.02em` |
| `text-h3` | `24px` (`1.5rem`) | `1.3` | 600 | `-0.015em` |
| `text-h4` | `18px` (`1.125rem`)| `1.4` | 600 | `-0.01em` |
| `text-body-lead` | `16px` (`1.0rem`) | `1.6` | 400 | `-0.005em` |
| `text-body-regular`| `14px` (`0.875rem`)| `1.55` | 400 | `0em` |

#### Mobile Scale (< 768px)
| Level | Font Size | Line Height | Font Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| `text-display-hero` | `42px` (`2.625rem`)| `1.12` | 700 | `-0.03em` |
| `text-h1` | `34px` (`2.125rem`)| `1.2` | 700 | `-0.02em` |
| `text-h2` | `26px` (`1.625rem`)| `1.25` | 600 | `-0.015em` |
| `text-h3` | `20px` (`1.25rem`) | `1.35` | 600 | `-0.01em` |
| `text-h4` | `17px` (`1.0625rem`)| `1.4` | 600 | `-0.005em` |
| `text-body-lead` | `15px` (`0.9375rem`)| `1.6` | 400 | `0em` |
| `text-body-regular`| `14px` (`0.875rem`)| `1.5` | 400 | `0em` |

---

## 3. Spacing, Elevation & Layout Grid System

### 3.1 Spatial Scale (8-Point Grid)
```
space-1  : 4px   (0.25rem)  - Micro gaps, pill paddings
space-2  : 8px   (0.5rem)   - Tight icon gaps, compact pill padding
space-3  : 12px  (0.75rem)  - Internal badge padding
space-4  : 16px  (1.0rem)   - Form control padding, mobile container margin
space-6  : 24px  (1.5rem)   - Card internal padding, desktop gutter
space-8  : 32px  (2.0rem)   - Medium content chunk separation
space-12 : 48px  (3.0rem)   - Section header margin
space-16 : 64px  (4.0rem)   - Inter-component block spacing
space-24 : 96px  (6.0rem)   - Tablet section vertical padding
space-32 : 128px (8.0rem)   - Desktop section vertical padding
space-40 : 160px (10.0rem)  - Hero section desktop breathing room
```

### 3.2 Border Radius Scale
```
radius-none : 0px      - Architectural sharp edges, technical monitors
radius-sm   : 4px      - Micro badges, status chips
radius-md   : 8px      - Form inputs, buttons, technical tags
radius-lg   : 14px     - Standard interactive cards, modal windows
radius-xl   : 20px     - Featured hero project containers
radius-full : 9999px   - Pill buttons, round status avatars
```

### 3.3 Shadow System (High-Key Studio Occlusion)
To avoid muddy dark drop shadows on our white canvas, shadows use ultra-fine multi-layered ambient occlusion:

```css
/* Subtle default card elevation */
--shadow-subtle: 
  0 1px 2px rgba(16, 24, 39, 0.04), 
  0 4px 12px rgba(16, 24, 39, 0.03);

/* Hover & Elevated card state */
--shadow-elevated: 
  0 4px 6px -1px rgba(16, 24, 39, 0.05),
  0 12px 24px -4px rgba(16, 24, 39, 0.06),
  0 24px 48px -8px rgba(16, 24, 39, 0.04);

/* Floating 3D HUD / Modal overlay */
--shadow-floating: 
  0 8px 16px rgba(16, 24, 39, 0.06),
  0 24px 48px rgba(16, 24, 39, 0.08),
  0 48px 96px rgba(16, 24, 39, 0.04);

/* Subtle royal blue glow for active states */
--shadow-accent-glow: 
  0 0 0 1px rgba(65, 105, 225, 0.15),
  0 8px 24px -4px rgba(65, 105, 225, 0.25);
```

### 3.4 Responsive Grid & Container Geometry
- **Container Max Width:** `1280px` (`max-w-7xl` centered)
- **Wide Container Max Width:** `1440px` (for expansive project grids)
- **Columns:** 12-column grid system
- **Gutters:**
  - Desktop: `32px`
  - Tablet: `24px`
  - Mobile: `16px`

---

## 4. Component Interaction Tokens

### 4.1 Buttons
- **Primary Action (Solid Navy / Royal):**
  - Background: `#101827`, Text: `#FFFFFF`, Border: `none`, Radius: `8px`.
  - Hover: Background: `#4169E1`, Transform: `translateY(-2px)`, Shadow: `var(--shadow-accent-glow)`.
  - Active: Transform: `translateY(0px)`, Scale: `0.98`.
- **Secondary Action (Ghost / Outline):**
  - Background: `#FFFFFF`, Text: `#111827`, Border: `1px solid #E5EAF1`, Radius: `8px`.
  - Hover: Border-color: `#CBD5E1`, Background: `#F8FAFC`.
- **Magnetic Link Action:**
  - Typography: JetBrains Mono `13px`, Text: `#111827`.
  - Underline: Custom animated SVG stroke expanding from 0% to 100% width on hover.

### 4.2 Cards
- **Card Default:**
  - Background: `#FFFFFF` (Opaque), Border: `1px solid #E5EAF1`, Radius: `14px`, Shadow: `var(--shadow-subtle)`.
- **Card Hover:**
  - Border-color: `rgba(65, 105, 225, 0.35)`, Transform: `translateY(-4px)`, Shadow: `var(--shadow-elevated)`.
  - Image thumbnail scale: `1.03` with smooth 600ms cubic-bezier transition.
