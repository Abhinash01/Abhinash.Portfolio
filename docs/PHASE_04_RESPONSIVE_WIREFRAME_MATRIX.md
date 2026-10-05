# PHASE 04 — RESPONSIVE WIREFRAME MATRIX & BREAKPOINT ARCHITECTURE
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 04 (Complete UI/UX Wireframes)  
**Deliverable:** 06 of 07  
**File Location:** `docs/PHASE_04_RESPONSIVE_WIREFRAME_MATRIX.md`  
**Latest Verified Commit:** `5fd954b3033911d2e9b79b1e5afe5e8d14f05a30`  

---

## 1. Verified Breakpoint Architecture

Grounded directly in [`docs/RESPONSIVE_DESIGN_GUIDELINES.md`](file:///c:/Users/DELL/Desktop/Abhinash/Portfolio/docs/RESPONSIVE_DESIGN_GUIDELINES.md), the responsive layout system enforces five canonical viewport tiers:

| Tier Identifier | Viewport Range | Columns | Grid Gutter | Side Margin | Primary Device Targets |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Large Desktop / 4K** | `≥ 1440px` | 12 | `32px` | `48px` (`px-12`) | 27"–34" Studio Displays, 4K Ultrawides |
| **Standard Desktop** | `1024px – 1439px` | 12 | `24px` | `32px` (`px-8`) | 13"–16" MacBook Pro, Desktop Monitors |
| **Tablet (Landscape/Port)**| `768px – 1023px`| 6 | `20px` | `24px` (`px-6`) | iPad Pro, iPad Air, Galaxy Tab |
| **Mobile (Standard/Large)**| `375px – 767px` | 4 | `16px` | `16px` (`px-4`) | iPhone 14/15/16, Google Pixel, Galaxy |
| **Small Mobile** | `< 375px` (`320px`)| 4 | `12px` | `12px` (`px-3`) | iPhone SE (1st/2nd Gen), Compact Androids |

---

## 2. Master Responsive Section Matrix

The following matrix documents the exact layout adaptation, structural transformations, and priority for every section across all canonical routes:

| Component / Section | Desktop (`≥ 1024px`) | Tablet (`768px – 1023px`) | Mobile (`< 768px`) | Structural Transformation Details | Priority |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Preloader Overlay** (`#preloader`) | Fullscreen curtain; interlocking AG monogram, 0–100% counter, shader ticker. | Same as desktop; scales typography and monogram to 80%. | Same; simplified single-line ticker; prominent top-right `Skip [Esc]` button. | Layout preserved; micro-typography condensed; hard 2.5s timeout strictly enforced across all tiers. | **High** |
| **Global Navigation** (`#main-navigation`)| Floating pill (`1080px`), horizontal link list, beacon dot, dark resume CTA. | Floating bar (`calc(100vw - 48px)`), condensed links, status beacon, hamburger button. | Compact top bar (`h-14`), brand wordmark left, status dot + hamburger toggle right (`min-h-[48px]`). | Horizontal navigation collapses into full-screen slide-down drawer with keyboard focus trapping. | **Critical** |
| **Hero Narrative** (`#hero`) | Left 7-column editorial lockup: display H1 (`72px`), subtitle, dual CTAs. | Full 6-column width stacked above 3D canvas; H1 scales to `48px`. | Full 4-column width; stacked: Eyebrow → H1 (`36px`) → Subtitle → Dual CTAs (100% width). | Transitions from 2-column side-by-side to vertical stack; CTAs expand to full width. | **Critical** |
| **3D Kinetic Monolith** (`#hero-3d`) | Right 5-column spatial viewport (initial wireframe target `h-[560px]`); 16 micro-spheres, pointer parallax. | Centered 6-column viewport (initial wireframe target `h-[380px]`); 6 micro-spheres; touch-orbit active. | Centered 4-column viewport (initial wireframe target `h-[280px]`); clamped DPR `1.5`; single-finger touch orbit. | Vertical height scales down (`560px -> 380px -> 280px` initial targets; calibrated during implementation); mouse parallax converts to touch orbit. | **High** |
| **Scroll Cue** (`#scroll-cue`) | Centered monospaced indicator with pulsing hairline below hero. | Same; offset reduced by 16px. | Hidden on viewports `< 640px` to conserve vertical space. | Disappears on mobile; natural scroll flow replaces explicit cue. | **Low** |
| **Professional Intro** (`#intro`) | 2-column layout: 7-column blockquote left, 5-column architecture pillars right. | Stacked layout: Full-width blockquote on top, 2x2 pillars grid beneath. | Single-column linear flow: Blockquote (`20px`), stacked pillar cards (`p-4`). | 2-column asymmetric grid collapses into a clean vertical reading column. | **Medium** |
| **Featured Flagship** (*WeatherSentinel*) | 12-column hero card: 16:9 media left (6 cols), deep case study details right (6 cols). | Vertical stack: 16:9 media top (6 cols), case study metadata and summary beneath. | Single-column vertical card: 16:9 mockup top, condensed summary, stacked tech badges. | Side-by-side card collapses into stacked image-then-text format; padding reduces to 16px. | **Critical** |
| **Featured Project 02** (*CareerTrack*) | 6-column side card: 16:9 media top, summary and tech badges beneath. | 6-column full-width card: Horizontal media + text layout. | Single-column stacked card: Full-width media, 2-line clamped summary, full-width CTA. | Reconfigures from 2-column half-width into full-width stacked card. | **High** |
| **Featured Project 03** (*Maa Kamakhya*) | 6-column side card: 16:9 media top, summary and tech badges beneath. | 6-column full-width card: Horizontal media + text layout. | Single-column stacked card: Full-width media, 2-line clamped summary, full-width CTA. | Reconfigures from 2-column half-width into full-width stacked card. | **High** |
| **Archive Shortcut Banner** | Inline right-aligned link inside section header: `[ VIEW ARCHIVE (4) ↗ ]`. | Same as desktop; header wraps if title length requires. | Full-width button card at bottom of featured work section (`h-12`). | Transforms from desktop header text shortcut into prominent mobile bottom action button. | **Medium** |
| **Expertise Matrix** (`#expertise`) | 3-column horizontal grid (`Frontend`, `Backend`, `Systems & Data`). | 3-column compact grid or 2+1 layout with condensed bullet spacing. | Horizontal scrollable category tab bar (`[Frontend] [Backend] [Systems]`) with active card. | 3 distinct columns convert to tabbed card switcher on mobile to eliminate long scrolling. | **High** |
| **Journey Timeline** (`#journey`) | Asymmetric timeline: Date/node left, rich milestone card right. | Centered timeline: Spine shifted left (`pl-8`), milestones stacked right. | Left-anchored spine (`pl-6`); condensed date tags, stacked milestone summaries. | Horizontal padding compresses; node spacing tightens from 48px to 24px. | **Medium** |
| **About Preview** (`#about-preview`) | 2-column balanced layout: 5 cols portrait frame, 7 cols narrative copy. | Stacked layout: Portrait frame top (centered), narrative copy beneath. | Single-column flow: Portrait mockup top (`h-64`), bio summary, full-width link. | Side-by-side portrait and narrative collapses into sequential vertical stack. | **Medium** |
| **Contact Invitation CTA** (`#contact-cta`)| Full-width dark container (`#101827`): Headline left, dual buttons right. | Stacked container: Headline top, dual buttons horizontally arranged below. | Stacked container: Headline top, dual buttons stacked vertically (100% width). | Action buttons transition from horizontal row to full-width vertical stack. | **High** |
| **Global Footer** (`#global-footer`) | 4-column structured directory: Brand, Navigation, Projects (4), Social. | 2x2 grid: Brand + Nav (Row 1), Projects + Social (Row 2). | Single-column accordion or stacked list; copyright strip bottom. | Multi-column directory collapses into stacked vertical sections; clearance buffer `pb-24`. | **High** |
| **Mobile Bottom HUD** (`<MobileHUD />`) | Not rendered (`display: none`). | Not rendered on desktop/tablet viewports (`hidden md:block`). | Docked pill at bottom of screen (`bottom: max(16px, env(safe-area-inset-bottom))`). | Dedicated mobile-only component; auto-collapses on scroll down (`translateY(120%)`). | **High** |

---

## 3. Secondary Page Responsive Adaptations

### 3.1 Projects Archive (`/projects`)
- **Desktop:** 2x2 editorial card grid showcasing all 4 project candidates with category filter and search bar.
- **Tablet:** 2-column editorial card grid with fluid responsive aspect ratios.
- **Mobile:** 1-column stacked cards with full-width search input and category filter tabs.

### 3.2 Project Detail Case Study (`/projects/:slug`)
- **Desktop:** Breadcrumbs top, 2-column split header (Hero left, metadata matrix right), full-width architecture diagram, 2-column Verified vs. Planned feature comparison table.
- **Tablet:** Breadcrumbs top, stacked header, responsive architecture diagram with horizontal scroll indicator, stacked feature comparison.
- **Mobile:** Back button (`← Back to Projects`), stacked title and metadata, architecture diagram with pinch-to-zoom support, tabbed feature comparison (`[✓ Verified]` / `[→ Roadmap]`).

### 3.3 Contact Portal (`/contact`)
- **Desktop:** 2-column balanced layout: Left column contains full interactive form (7 cols), Right column contains direct channels, availability beacon, and timezone (5 cols).
- **Tablet:** Stacked layout: Contact narrative and direct channels top, inquiry form below.
- **Mobile:** Single-column flow: Direct email copy pill top, inquiry form fields stacked with 100% width and 48px touch targets, sticky-safe submit button.
