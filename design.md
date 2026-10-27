---
schema: "design-md/v1.0"
project:
  name: "NEER"
  legal_entity: "NEER Media"
  domain: "https://neermedia.com/"
  lineage_reference: "https://revaastro.com/"
  design_system_name: "The Hydro-Kinetic Monolith"
  version: "5.0.0"
  status: "Authoritative Single Source of Truth"
  theme_polarity: "dark-only"
  archetype: "The Sovereign Alchemist"
  pillars:
    - id: "astro-branding"
      name: "Astro-Branding"
      glyph: "✦"
      route: "/astro-branding"
    - id: "engineered-ai"
      name: "Engineered AI Systems"
      glyph: "●"
      route: "/engineered-ai"
    - id: "commercial-film"
      name: "Commercial Film & Brand Architecture"
      glyph: "◉"
      route: "/commercial-film"
    - id: "hydro-philosophy"
      name: "Philosophy (The Dashavatara Continuum)"
      glyph: "≈"
      route: "/philosophy"

tokens:
  colors:
    budget_ratio:
      obsidian_void_and_vessels: "85% - 92%"
      signal_white_and_mist: "5% - 10%"
      bioluminescent_acid_lime: "3% - 5% (Hard ceiling: 8%)"
    backgrounds:
      void: "#050505"
      true_black: "#000000"
      obsidian: "#0A0A0A"
      vessel: "#111115"
      vessel_alt: "#111111"
      vessel_elevated: "#16161A"
      vessel_glass: "rgba(17, 17, 17, 0.72)"
      input_obsidian: "rgba(5, 5, 5, 0.85)"
      code_vessel: "#070709"
      surface_gradient: "linear-gradient(145deg, rgba(24, 24, 30, 0.92) 0%, rgba(12, 12, 16, 0.96) 100%)"
    accents:
      acid_lime_primary: "#CCFF00"
      acid_lime_live: "#CBF30F"
      acid_lime_alt: "#C9F31D"
      acid_lime_glow: "rgba(204, 255, 0, 0.14)"
      acid_lime_border: "rgba(204, 255, 0, 0.40)"
      acid_lime_surface: "linear-gradient(145deg, rgba(204, 255, 0, 0.07) 0%, rgba(15, 15, 20, 0.96) 100%)"
    text:
      primary: "#FFFFFF"
      soft: "#F5F5F5"
      secondary: "#A1A1AA"
      body_live: "#888888"
      telemetry_muted: "#666670"
      telemetry_zinc: "#71717A"
      on_lime: "#050505"
    borders:
      subtle: "rgba(255, 255, 255, 0.08)"
      icon_orb: "rgba(255, 255, 255, 0.10)"
      input: "rgba(255, 255, 255, 0.12)"
      elevated: "rgba(255, 255, 255, 0.14)"
      hover: "rgba(255, 255, 255, 0.18)"
      active_lime: "rgba(204, 255, 0, 0.40)"
    semantic:
      success_text: "#34D399"
      success_bg: "rgba(16, 185, 129, 0.10)"
      success_border: "rgba(16, 185, 129, 0.30)"
      danger_text: "#F87171"
      danger_bg: "rgba(239, 68, 68, 0.10)"
      danger_border: "rgba(239, 68, 68, 0.35)"
      warning_text: "#FBBF24"
      warning_bg: "rgba(245, 158, 11, 0.10)"
      warning_border: "rgba(245, 158, 11, 0.30)"
    prohibited:
      - "#E5A93C (Solar Brass / Warm Gold / Temple Saffron)"
      - "Literal Aqua / Swimming-Pool / Bottled-Water Blues"
      - "Cyberpunk / Synthwave Purple, Magenta, or Cyan Gradients"
      - "Light-Mode White (#FFFFFF) or Warm Cream Page Backgrounds"

  typography:
    fonts:
      display:
        family: "'Kanit', sans-serif"
        google_fonts_url: "https://fonts.google.com/specimen/Kanit"
        weights: [500, 600, 700, 800]
        default_weight: 700
        letter_spacing: "0.05em"
        wordmark_letter_spacing: "0.08em"
      sans:
        family: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        google_fonts_url: "https://fonts.google.com/specimen/Inter"
        weights: [300, 400, 500, 600, 700]
        default_weight: 400
        line_height_body: 1.65
        max_measure: "65ch"
      mono:
        family: "'JetBrains Mono', monospace"
        google_fonts_url: "https://fonts.google.com/specimen/JetBrains+Mono"
        weights: [400, 500, 600]
        default_weight: 500
        letter_spacing: "0.08em"
        text_transform: "uppercase"

  layout:
    max_width_container: "1280px"
    grid_columns: 12
    vessel_gap_desktop: "24px"
    vessel_gap_large: "32px"
    vessel_gap_mobile: "16px"
    section_padding_y_desktop: "96px"
    section_padding_y_tablet: "64px"
    section_padding_y_mobile: "48px"

  radii:
    vessel_default: "28px"
    vessel_large: "32px"
    vessel_nested: "20px"
    table_row: "16px"
    input: "14px"
    pill: "9999px"
    orb: "50%"

  motion:
    easing_laminar: "cubic-bezier(0.16, 1, 0.3, 1)"
    duration_micro: "250ms"
    duration_vessel: "450ms"
    duration_nav: "450ms"
    hover_translate_y: "-2px to -4px"
---

# NEER — Website Visual Design System (`DESIGN.md`)

This document is the authoritative visual and frontend implementation rulebook for the **NEER** website (`https://neermedia.com/`). It translates the **NEER Master Brand Bible v5.0 (*The Hydro-Kinetic Monolith*)** and the verified production codebase into explicit, deterministic instructions for AI coding agents, frontend engineers, and UI designers.

---

## A. Design Overview and Visual Direction

### 1. Website Name, Nomenclature & Purpose
* **Master Public Brand Mark (Confirmed):** **NEER** (derived from Sanskrit *Nīra* / नीर, meaning pure, primordial life-water). All website headers, hero statements, navigation bars, and section signatures must use the standalone mark **NEER** without generic suffixes ("Agency", "Studio", or "Labs" are strictly prohibited).
* **Legal Entity Attribution (Confirmed):** **NEER Media** is used exclusively in copyright footers, legal notices, privacy/terms documents, and domain references (`https://neermedia.com/`).
* **Commercial Purpose (Confirmed):** NEER operates as an institutional growth and systems architecture partner at the convergence of three disciplines:
  1. **Astro-Branding (`/astro-branding`):** Executive timing, phonetic naming (*Namakarana*), and spatial/archetypal alignment rooted in mathematical Vedic computation (*Gaṇita* / *Jyotisha*), descended from the founder's lineage at `https://revaastro.com/`.
  2. **Engineered AI Systems (`/engineered-ai`):** Deterministic multi-agent workflows, governed Retrieval-Augmented Generation (RAG) pipelines, and enterprise fintech/operational platforms (such as *YourDSA*).
  3. **Commercial Film & Brand Architecture (`/commercial-film`):** Anamorphic cinema production (46+ commercial films produced), 3D/CGI optical pipelines, and tactile hardware/industrial identity systems (such as *AXIS Solution*).

### 2. Core Visual Identity & Brand Personality
* **Conceptual North Star — *The Hydro-Kinetic Monolith* (Confirmed):** Most enterprises build either rigid stone statues that shatter when markets shift or chaotic puddles with zero structural spine. NEER builds **Hydro-Kinetic Monoliths**: sovereign architectures with an unbreakable, load-bearing core (**Monolith** — obsidian geometry, `Kanit 700` uppercase typography, deterministic code) and zero-friction, laminar adaptability (**Neer** — optical refraction, `28px–32px` soft-rounded detached vessels, fluid phase transitions).
* **Brand Persona — *The Sovereign Alchemist* (Confirmed):** Synthesizes **The Scholar-Strategist** (diagnostic, unhurried, surgical), **The Filmmaker-Craftsperson** (obsessed with 65mm/100mm optical physics, chiaroscuro lighting, and frame pacing), and **The Systems Architect** (deterministic, verifiable, anti-hype).

### 3. Target Audience & Desired Visual Experience
* **Intended Audience:** Enterprise founders, C-suite executives, category-defining B2B/industrial leaders, and high-growth fintech/AI operators.
* **Desired Visual Experience:** Stepping onto `neermedia.com` must feel like entering a precision-calibrated nocturnal soundstage and architectural observatory—never a bubbly marketing agency template, a superstitious astrology portal, or a neon cyberpunk SaaS landing page.

### 4. Practical Translation of Aesthetic Descriptors
Vague adjectives like "modern", "minimal", or "premium" are banned from implementation briefs. On `neermedia.com`, our visual direction means:
* **Nocturnal Soundstage Depth:** The page canvas is locked to **Abyssal Obsidian Void (`#050505`)**. At least **85% to 92%** of every viewport consists of deep black and dark charcoal surfaces (`#050505`, `#0A0A0A`, `#111115`) so optical glass specimens and typography float with zero visual clutter.
* **Optical Water Physics (Never Blue Clichés):** Water (*Neer*) is expressed through **Index of Refraction (`IOR 1.333–1.52`)**, dark liquid mercury meniscus tension, smoked optical crystal, razor-sharp `#FFFFFF` specular rim lighting, and internal `#CCFF00` bioluminescent laser caustics—never through blue water splashes, aqua gradients, or cartoon droplets.
* **Soft-Rounded Detached Vessels (Zero Shared Walls):** Every content container is an independent, buoyant droplet (`border-radius: 28px` to `32px`) separated by `24px–32px` channels of open `#050505` void. Containers never share `1px` boxy grid walls.
* **The Visual-First Law:** *"Show the idea. State the essential truth. Explain only what remains unclear."* Every viewport leads with a high-contrast visual specimen, node diagram, or telemetry table (80% visual weight) paired with a concise `Kanit 700` headline (≤8 words) and a compact `Inter` body block capped at **≤65 words**.

---

## B. Design Principles

1. **Enforce the 85 / 10 / 5 Chromatic Discipline (Confirmed):**
   * **85%–92% Obsidian & Charcoal Void** (`#050505`, `#0A0A0A`, `#111115`), **5%–10% Pure Signal White & Mist** (`#FFFFFF`, `#A1A1AA`), and **≤5% Bioluminescent Acid Lime** (`#CCFF00` / `#CBF30F`).
   * *Implementation Impact:* Never flood a section background or large card with `#CCFF00`. Reserve Acid Lime strictly for primary pill CTAs, the `6px` wordmark node, active telemetry badges, focus rings, and single SVG focal nodes.
2. **Maintain One Unified Cross-Pillar Palette — Zero Solar Brass (Confirmed):**
   * Warm gold, temple saffron, and `#E5A93C` (Solar Brass) are permanently banned.
   * *Implementation Impact:* Differentiate `/astro-branding`, `/engineered-ai`, and `/commercial-film` through **iconographic geometry and 3D specimen form** (astrolabe meridian rings vs. polyhedral neural lattices vs. anamorphic lens barrels)—never by introducing gold on Astro pages or purple/cyan on AI pages.
3. **Separate Display Gravity from Editorial Readability (Confirmed):**
   * `Kanit` (`700` Bold, `0.05em` tracking, uppercase) provides monolithic architectural impact on H1/H2 headers and hero KPIs. `Inter` (`400`/`500`/`600`) handles all multi-word card titles, analytical prose, tables, and form controls. `JetBrains Mono` (`500`, uppercase) handles index tags and telemetry.
   * *Implementation Impact:* Never set body paragraphs or long multi-sentence descriptions in `Kanit`.
4. **Preserve Detached Spatial Buoyancy (Confirmed):**
   * Surface tension pulls liquid into rounded, self-contained volumes.
   * *Implementation Impact:* Every card, table row, code block, and badge uses generous border radii (`14px` to `9999px`) and sits in open `#050505` space with `1px solid rgba(255, 255, 255, 0.08)` specular borders.
5. **Move with Laminar Viscosity, Never Spring Bounce (Confirmed):**
   * All UI transitions and scroll reveals obey `--ease-laminar: cubic-bezier(0.16, 1, 0.3, 1)`—rapid hydraulic initiation followed by a long, high-viscosity settle.
   * *Implementation Impact:* Never use elastic overshoot, cartoon bounce keyframes, or jarring instant snaps on layout containers.
6. **Ground Every Service Claim in Verifiable Case Telemetry (Confirmed):**
   * Persona poise requires forensic proof over agency adjectives.
   * *Implementation Impact:* Every service page must include at least two structured case study vessels (*AXIS Solution*, *YourDSA*, *46+ Commercial Films*) formatted as **01 Diagnostic Bottleneck → 02 Monolith Architecture → 03 Verified Commercial Yield**.

---

## C. Colour System

### 1. Master Colour Token Registry

| Token Name | CSS Variable | Exact Value | Epistemic Status | Intended Purpose & Usage | Restrictions |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Abyssal Void** | `--bg-void` / `--neer-bg-void` | `#050505` | Confirmed (Live & Bible) | Main `<body>` background, sticky header backdrop, open channels between cards. | Must occupy ≥85% of viewport with vessel surfaces. Never replace with light backgrounds. |
| **True Black** | `--neer-bg-true-black` | `#000000` | Confirmed (Live) | Deepest recessed well inside macro image frames and modal backdrops. | Avoid using for elevated cards (creates zero depth against `#050505`). |
| **Obsidian Surface** | `--bg-obsidian` / `--neer-bg-obsidian` | `#0A0A0A` | Confirmed (Live) | Secondary section background, scrollbar track, and recessed inner wells. | Pair with `rgba(255,255,255,0.08)` border when used as a container. |
| **Detached Vessel** | `--bg-vessel` / `--neer-bg-vessel` | `#111115` (Alt: `#111111`) | Confirmed (Live & v5.0) | Default card background, navigation pill housing, and drawer grid items. | Always pair with `28px–32px` radius and `1px` subtle border. |
| **Elevated Vessel** | `--bg-elevated` / `--neer-bg-vessel-elevated` | `#16161A` | Confirmed (Live) | Hover-state card surface, nested interactive modules, and active tabs. | Do not nest more than 2 levels of elevation. |
| **Obsidian Glass** | `--neer-vessel-glass` | `rgba(17, 17, 17, 0.72)` | Confirmed (v5.0) | Translucent Bento vessel surface paired with `backdrop-filter: blur(24px)`. | Always provide `#111115` solid fallback. |
| **Vessel Gradient** | `--surface-gradient` | `linear-gradient(145deg, rgba(24,24,30,0.92) 0%, rgba(12,12,16,0.96) 100%)` | Confirmed (v5.0) | Default `.neer-card` fill simulating top-left chiaroscuro specular falloff. | Never substitute with multi-hue neon gradients. |
| **Code / Input Well** | `--neer-bg-code` / `--neer-bg-input` | `#070709` / `rgba(5, 5, 5, 0.85)` | Confirmed (v5.0) | `.code-vessel` background and `.neer-input` form field surface. | Must maintain ≥12:1 contrast with `#FFFFFF` or `#E4E4E7` text. |
| **Acid Lime (Master)** | `--accent-lime` / `--neer-accent-lime` | `#CCFF00` | Confirmed (Brand Lock) | Primary CTA fill, wordmark node, active telemetry tags, focus rings, SVG focal node. | **Hard cap: ≤5%–8% of viewport.** Never use as a full-bleed section background. |
| **Acid Lime (Live)** | `--accent-lime-live` | `#CBF30F` (Alt: `#C9F31D`) | Confirmed (Live CSS) | Production CSS alias for `--accent-lime` on `neermedia.com`. | Map to `--accent-lime` so token usage stays unified. |
| **Acid Lime Glow** | `--accent-lime-glow` | `rgba(204, 255, 0, 0.14)` | Confirmed (v5.0) | Subtle ambient hover halo on `.neer-icon-orb`, `.copy-btn`, and active pills. | Keep alpha between `0.07` and `0.18`; never create opaque neon blobs. |
| **Pure Signal White** | `--text-primary` / `--neer-text-primary` | `#FFFFFF` | Confirmed (Live & Bible) | H1, H2, H3 headings, primary table cell labels, active nav links, SVG primary strokes. | **Never place `#FFFFFF` text on `#CCFF00` background** (1.2:1 contrast fail). |
| **Soft Signal White** | `--text-soft` / `--neer-text-soft` | `#F5F5F5` (Code: `#E4E4E7`) | Confirmed (v5.0) | Hero lead paragraphs (`Body L`), H4 sub-leads, and code block text. | Use on `#050505` or `#070709` backgrounds. |
| **Mist Grey** | `--text-secondary` / `--neer-text-secondary` | `#A1A1AA` | Confirmed (v5.0) | Standard `Inter` body paragraphs, table data cells, and secondary SVG paths. | Minimum font size `12px` (`0.75rem`) to preserve readability. |
| **Live Body Grey** | `--neer-text-body-live` | `#888888` | Confirmed (Live CSS) | Legacy live-site body text token (5.7:1 AA contrast on `#050505`). | Prefer `#A1A1AA` (7.8:1 AAA) on new components for superior legibility. |
| **Telemetry Muted** | `--text-muted` / `--neer-text-telemetry` | `#666670` (Alt: `#71717A`) | Confirmed (v5.0) | Non-interactive `JetBrains Mono` metadata, table column headers, and footer labels. | Use only for short uppercase mono labels (`≥11px`), never long body copy. |
| **Subtle Hairline** | `--border-subtle` / `--neer-border-default` | `rgba(255, 255, 255, 0.08)` | Confirmed (Live & v5.0) | Default `1px` specular border on `.neer-card`, `.neer-pill`, and `.neer-table` cells. | Never use opaque `#FFFFFF` borders on standard cards. |
| **Elevated Hairline** | `--border-elevated` | `rgba(255, 255, 255, 0.14)` | Confirmed (v5.0) | Ghost button borders, input borders (`0.12`), and hover card borders (`0.18`). | Transitions smoothly to `--accent-lime-border` on focus/active. |
| **Active Lime Border** | `--accent-lime-border` / `--neer-border-active` | `rgba(204, 255, 0, 0.40)` | Confirmed (v5.0) | Border for `.neer-card-lime`, `.neer-pill-lime`, `.neer-orb`, and focused inputs. | Reserve for 1 featured card or active state per visual group. |
| **Quarantine Danger** | `--neer-danger-border` / `--neer-danger-text` | Border: `rgba(239, 68, 68, 0.35)` / Text: `#F87171` | Confirmed (v5.0) | Used in `.neer-card-danger`, form validation errors, and negative prompt callouts. | Never use solid bright red fills for large containers; use `rgba(239,68,68,0.08)` tint. |
| **Compliant Success** | `--neer-success-border` / `--neer-success-text` | Border: `rgba(16, 185, 129, 0.30)` / Text: `#34D399` | Confirmed (v5.0) | Used for verified diagnostic states and "DO" governance comparison sub-cards. | Keep subordinate to `#CCFF00`; primary brand actions always use `#CCFF00`. |

### 2. Interactive State Colour Matrix

| Interactive Element | Default State | Hover State | Focus-Visible State | Active / Pressed State | Disabled State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Pill CTA** | Bg: `#CCFF00`, Text: `#050505`, Border: `transparent` | Bg: `#CCFF00`, Text: `#050505`, Shadow: `0 0 28px rgba(204,255,0,0.42)`, `translateY(-2px)` | Outline: `2px solid #FFFFFF`, Offset: `3px`, Shadow: `0 0 0 4px rgba(204,255,0,0.35)` | Bg: `#CBF30F`, `scale(0.98)` | Bg: `rgba(255,255,255,0.06)`, Text: `#666670`, Cursor: `not-allowed` |
| **Secondary Ghost Pill** | Bg: `rgba(255,255,255,0.04)`, Text: `#FFFFFF`, Border: `1px solid rgba(255,255,255,0.14)` | Bg: `rgba(204,255,0,0.08)`, Text: `#CCFF00`, Border: `1px solid rgba(204,255,0,0.45)` | Border: `1px solid #CCFF00`, Shadow: `0 0 0 3px rgba(204,255,0,0.14)` | Bg: `rgba(204,255,0,0.14)` | Bg: `transparent`, Text: `#666670`, Border: `rgba(255,255,255,0.05)` |
| **Utility / Copy Pill (`.copy-btn`)** | Bg: `rgba(204,255,0,0.12)`, Text: `#CCFF00`, Border: `1px solid rgba(204,255,0,0.40)` | Bg: `#CCFF00`, Text: `#050505`, Border: `1px solid #CCFF00` | Shadow: `0 0 0 3px rgba(204,255,0,0.25)` | Bg: `#CBF30F`, Text: `#050505` | Opacity: `0.4`, Pointer-events: `none` |
| **Inline Text Link** | Text: `#CCFF00`, `text-decoration: underline`, `text-underline-offset: 3px` | Text: `#FFFFFF`, Decoration-color: `#CCFF00` | Outline: `1px dashed #CCFF00`, Offset: `2px` | Text: `#CBF30F` | Text: `#666670`, No underline |
| **Obsidian Form Input (`.neer-input`)** | Bg: `rgba(5,5,5,0.85)`, Text: `#FFFFFF`, Border: `1px solid rgba(255,255,255,0.12)` | Border: `1px solid rgba(255,255,255,0.22)` | Border: `1px solid #CCFF00`, Shadow: `0 0 0 3px rgba(204,255,0,0.12)` | Border: `1px solid #CCFF00` | Bg: `rgba(17,17,21,0.5)`, Text: `#666670`, Border: `rgba(255,255,255,0.05)` |

---

## D. Typography System

### 1. Font Families & Loading Specification (Confirmed)
NEER uses a locked three-font Google Fonts architecture. Never substitute with serif fonts, decorative scripts, or generic system display fonts.

```html
<!-- Mandatory Google Fonts Embed in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Kanit:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap" rel="stylesheet">
```

1. **Display & Monolith Headlines — `Kanit` (`https://fonts.google.com/specimen/Kanit`):**
   * **Conceptual Rationale (Confirmed):** Designed by Cadson Demak, *Kanit* means **"Mathematics"** in Thai, derived from Sanskrit ***Gaṇita* (गणित)**—mathematical and astronomical calculation, the foundational science of *Jyotisha* and algorithmic engineering. Paired with **NEER** (Sanskrit ***Nīra* / नीर** — pure life-water), the typography embodies fluid adaptability governed by mathematical precision.
   * **Weights Used:** `700` (Bold — primary display weight), `600` (SemiBold — monumental H3 vessel headers), `800` (ExtraBold — optional hero numerals).
   * **Fallback Stack:** `'Kanit', sans-serif`.
2. **Editorial Body, Card Subheads & UI Controls — `Inter` (`https://fonts.google.com/specimen/Inter`):**
   * **Purpose (Confirmed):** High-x-height neo-grotesque engineered for frictionless reading on `#050505` obsidian surfaces.
   * **Weights Used:** `300` (Light — hero lead), `400` (Regular — body prose), `500` (Medium — nav & interactive controls), `600` (SemiBold — H3/H4 editorial subheads and primary CTA labels), `700` (Bold — inline emphasis and table key cells).
   * **Fallback Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
3. **Telemetry, Index Coordinates & Code — `JetBrains Mono` (`https://fonts.google.com/specimen/JetBrains+Mono`):**
   * **Purpose (Confirmed):** Technical monospace used for section eyebrows (`// 01`), pill badges, coordinate timestamps, and code/prompt vessels.
   * **Weights Used:** `400` (Regular — code blocks), `500` (Medium — telemetry pills and table headers), `600` (SemiBold — `.neer-orb` numerals).
   * **Fallback Stack:** `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.

### 2. Complete Type Scale & Hierarchy Matrix

| Tier / Role | CSS Class / Selector | Font Family & Weight | Desktop Size (`clamp` / `rem`) | Mobile Size | Line-Height | Letter-Spacing | Case & Colour | Max Measure / Word Cap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Wordmark** | `.neer-wordmark` | `Kanit 700` | `1.5rem` (`24px`) nav / `3.5rem` hero | `1.25rem` (`20px`) | `1.0` | `0.08em` (+8%) | UPPERCASE / `#FFFFFF` + `#CCFF00` node | Exact 4 letters: `NEER` |
| **H1 // Hero Monolith** | `.neer-h1`, `h1` | `Kanit 700` | `clamp(2.75rem, 5.5vw, 5.25rem)` (`44px–84px`) | `2.5rem` (`40px`) | `1.04` – `1.08` | `0.05em` (+5%) | UPPERCASE / `#FFFFFF` (key phrase `#CCFF00`) | ≤ 8 words (Hard cap: 10 words) |
| **H2 // Section Header** | `.neer-h2`, `h2` | `Kanit 700` | `clamp(1.85rem, 3.2vw, 3.0rem)` (`30px–48px`) | `1.75rem` (`28px`) | `1.10` – `1.16` | `0.05em` (+5%) | UPPERCASE / `#FFFFFF` | ≤ 10 words |
| **H3 Variant A // Monumental Pillar Title** | `h3.font-display` | `Kanit 600` or `700` | `clamp(1.25rem, 1.8vw, 1.65rem)` (`20px–26px`) | `1.25rem` (`20px`) | `1.20` | `0.03em` – `0.05em` | UPPERCASE / `#FFFFFF` | ≤ 5 words (Pillar cards & KPI callouts) |
| **H3 Variant B // Editorial Vessel Title** | `.neer-h3` | `Inter 600` | `1.125rem` – `1.25rem` (`18px–20px`) | `1.0625rem` (`17px`) | `1.30` | `-0.015em` | Title or Sentence Case / `#FFFFFF` | ≤ 10 words (Multi-word analytical cards) |
| **H4 // Sub-Lead** | `h4` | `Inter 600` | `1.0rem` – `1.125rem` (`16px–18px`) | `1.0rem` (`16px`) | `1.45` | `-0.01em` | Sentence case / `#F5F5F5` or `#E4E4E7` | ≤ 65ch |
| **Body L // Hero Lead** | `.neer-body-lg` | `Inter 300` or `400` | `1.125rem` (`18px`) | `1.0rem` (`16px`) | `1.65` | `0em` | Sentence case / `#F5F5F5` (90% opacity) | `55ch–65ch` (≤ 45 words) |
| **Body M // Standard Prose** | `.neer-body`, `p` | `Inter 400` | `0.9375rem` – `1.0rem` (`15px–16px`) | `0.9375rem` (`15px`) | `1.62` – `1.65` | `0em` | Sentence case / `#A1A1AA` | `60ch–68ch` (≤ 65 words/block) |
| **Body S // Dense Card / Table Cell** | `.text-xs`, `.neer-table td` | `Inter 400` (`600` first col) | `0.75rem` – `0.82rem` (`12px–13.1px`) | `0.75rem` (`12px`) | `1.50` | `0em` | Sentence case / `#A1A1AA` (`#FFFFFF` col 1) | `45ch–55ch` |
| **Telemetry Eyebrow & Pill** | `.neer-mono`, `.neer-pill` | `JetBrains Mono 500` | `0.68rem` – `0.75rem` (`11px–12px`) | `0.68rem` (`11px`) | `1.20` | `0.08em` – `0.10em` | UPPERCASE / `#CCFF00` or `#A1A1AA` | Format: `01 // LABEL` or `CHAPTER 01 // TAG` |
| **Code / Prompt Block** | `.code-vessel` | `JetBrains Mono 400` | `0.75rem` (`12px`) | `0.70rem` (`11.2px`) | `1.55` | `0em` | Exact case / `#E4E4E7` | Horizontal scroll or `pre-wrap` |

### 3. Critical Typographic Governance Rules
* **When to Use H3 Variant A (`Kanit`) vs. H3 Variant B (`Inter`):**
  * Use **H3 Variant A (`Kanit 600/700`, uppercase, `0.03em–0.05em` tracking)** for short, 2-to-4-word architectural pillar titles (`01. ASTRO-BRANDING`, `02. ENGINEERED AI`) and monumental numeric KPIs (`46+ FILMS`, `<400MS`).
  * Use **H3 Variant B (`.neer-h3`, `Inter 600`, `-0.015em` tracking, Title/Sentence case)** for 5-to-10-word analytical card titles (`Soft-Rounded Telemetry Console`, `Signal Preservation in the Deluge`) so dense multi-card grids scan effortlessly without uppercase visual fatigue.
* **Eyebrow Pairing Rule:** Every `H1` and `H2` headline must be preceded (`margin-bottom: 8px–12px`) by a `JetBrains Mono` telemetry eyebrow or `.neer-pill` badge establishing its structural coordinate (e.g., `01 // UDGAMA ORIGIN` or `// 02 // ENGINEERED AI SYSTEMS`).

---

## E. Layout and Grid System

### 1. Overall Layout Philosophy: Detached Vessels in the Void
`neermedia.com` rejects edge-to-edge boxy wireframe tables where adjacent cells share `1px` borders. Instead, layouts are composed of **Detached Bento Vessels** floating inside a `1280px` max-width container over an uninterrupted `#050505` canvas.

### 2. Container, Column & Asymmetric Split Rules
* **Main Container:** `max-width: 1280px` (`80rem`), `width: 100%`, `margin-inline: auto`, horizontal padding `16px` (`1rem`) on mobile, `24px` (`1.5rem`) on tablet (`sm:px-6`), and `32px–48px` on desktop.
* **12-Column CSS Grid (`grid-cols-1 lg:grid-cols-12`):**
  * **7 / 5 Asymmetric Hero Split (`lg:col-span-7` + `lg:col-span-5`):** Left 7 columns house the telemetry pill row, `Kanit 700` H1 monolith statement, `Inter` lead paragraph, and a 3-column mini-vessel strip; right 5 columns house the framed 1:1 or 4:5 optical 3D specimen card.
  * **5 / 7 Specimen-to-Matrix Split (`lg:col-span-5` + `lg:col-span-7`):** Left 5 columns hold a macro visual specimen or stacked methodology cards; right 7 columns hold a 2×2, 2×3, or 2×5 grid of detached law/stage vessels or a full `.neer-table` specification matrix.
  * **4 / 4 / 4 Tri-Partite Pillar Grid (`grid-cols-1 md:grid-cols-3`):** Used for the 3 Commercial Pillars, 3 Persona Dimensions, and 3-Part Sentence/Case Study Architectures.
  * **6 / 6 Binary Governance Split (`grid-cols-1 lg:grid-cols-2`):** Used for side-by-side `DO // COMPLIANT` (`.neer-card-lime`) vs. `DON'T // VIOLATION` (`.neer-card-danger`) comparisons and 2-up Case Study proof cards.

### 3. Standardized Spacing Scale

| Token Name | Value (`rem` / `px`) | Tailwind Equivalent | Approved Usage |
| :--- | :--- | :--- | :--- |
| `--space-1` | `0.25rem` (`4px`) | `gap-1`, `mt-1` | Tight inline gap between eyebrow icon dot and mono text. |
| `--space-2` | `0.5rem` (`8px`) | `gap-2`, `mb-2` | Vertical gap between telemetry eyebrow and H2/H3 heading; table row vertical spacing (`border-spacing: 0 8px`). |
| `--space-3` | `0.75rem` (`12px`) | `gap-3`, `p-3` | Media frame padding around embedded `<img>` specimens (`12px–14px`). |
| `--space-4` | `1.0rem` (`16px`) | `gap-4`, `p-4` | Mobile grid gap; compact card internal padding. |
| `--space-5` | `1.25rem` (`20px`) | `gap-5`, `p-5` | Standard desktop grid gap between dense multi-row vessels (`20px`). |
| `--space-6` | `1.5rem` (`24px`) | `gap-6`, `p-6` | Primary desktop Bento vessel gap (`24px`) and standard card internal padding (`21.6px–24px`). |
| `--space-8` | `2.0rem` (`32px`) | `gap-8`, `p-8` | Large feature vessel internal padding (`28px–32px`) and major sub-section vertical separation. |
| `--space-12` | `3.0rem` (`48px`) | `py-12` | Mobile vertical section padding (`48px`). |
| `--space-16` | `4.0rem` (`64px`) | `py-16` | Tablet vertical section padding (`64px`). |
| `--space-24` | `6.0rem` (`96px`) | `py-24` | Standard desktop vertical section padding (`96px–128px`) between the 5 Acts of a page. |

### 4. Mandatory 5-Act Page Conversion Spine (Confirmed)
Every core page on `neermedia.com` (`/` Homepage, `/philosophy`, `/astro-branding`, `/engineered-ai`, `/commercial-film`) must follow this 5-Act vertical rhythm:
1. **Act 01 — Monolith Hero:** Telemetry coordinate pill + `Kanit 700` declarative thesis + `Inter` lead + optical 3D/video specimen + primary pill CTA.
2. **Act 02 — Diagnostic / Ontological Premise:** Why conventional approaches fail (e.g., *The 6 Laws of Water*, *Gaṇita* temporal audit, or *Chaos In / Architecture Out*).
3. **Act 03 — 3-Stage Methodology Matrix:** Detached numbered vessels (`01 → 02 → 03`) mapping the exact engineering or diagnostic workflow.
4. **Act 04 — Verified Case Study Ledger:** Minimum 2 concrete case study vessels (*AXIS Solution*, *YourDSA*, *46+ Commercial Films*) with quantified telemetry pills.
5. **Act 05 — Sovereign Diagnostic Console:** Interactive obsidian glass intake console (`INITIATE SOVEREIGN DIAGNOSTIC`) + Telemetry Footer.

---

## F. Responsive Design Rules

### 1. Breakpoint System (Confirmed from Tailwind Implementation)

| Breakpoint Token | Min-Width | Target Viewport | Layout & Navigation Behaviour |
| :--- | :--- | :--- | :--- |
| **Base (Mobile)** | `0px` (`<640px`) | Smartphones | Single-column vertical stack (`grid-cols-1`); `16px` horizontal page gutters; `16px` card gaps; compact top header with priority hamburger drawer trigger; horizontal scroll wrapper enabled for wide `.neer-table` matrices. |
| **`sm` (Large Mobile)** | `640px` | Large phones / Phablets | `24px` horizontal gutters (`sm:px-6`); 2-column sub-grids activate for compact law/stage cards (`sm:grid-cols-2`); legal entity subtitle reveals in header. |
| **`md` (Tablet)** | `768px` | Tablets (Portrait) | 3-pillar card grids (`md:grid-cols-3`) and 2-up video/case prompt grids (`md:grid-cols-2`) activate; section vertical padding increases to `64px`. |
| **`lg` (Desktop)** | `1024px` | Laptops & Desktops | Full 12-column asymmetric splits (`lg:grid-cols-12`, `7/5` and `5/7`) activate; 5-column visual variable grids (`lg:grid-cols-5`) activate; `24px` vessel gaps. |
| **`xl` (Wide Desktop)** | `1280px` | Studio Monitors | Full `1280px` (`max-w-7xl`) container locks; inline chapter/pillar quick-jump pill navigation (`xl:flex`) displays in the sticky header alongside the drawer index button. |

### 2. Mobile-Specific Preservation Rules
* **Never Hide Proof or Telemetry on Mobile:** Case study metric pills, epistemic badges, and specimen images must stack cleanly rather than being hidden with `hidden sm:block` (only decorative secondary dividers or redundant keyboard-shortcut hints may hide on mobile).
* **Button & Form Stacking:** Action button bars use `flex-wrap items-center gap-3`; on viewports `<480px`, primary and secondary pill CTAs may expand to `width: 100%` (`justify-center`) with a minimum tap height of `44px`.
* **Table & Code Overflow:** Never allow a table or `<pre>` block to force horizontal page overflow (`body { overflow-x: hidden; }`). Wrap every `.neer-table` in `<div class="overflow-x-auto">` and set `.code-vessel` to `overflow-x: auto; white-space: pre-wrap; word-break: break-word;`.

---

## G. Shapes, Borders, Shadows, and Elevation

### 1. Corner Radius Hierarchy (Confirmed)
* **Large Feature Vessels (`--radius-card-lg: 32px`):** Hero inspection containers, full-width diagnostic consoles, and major Bento wrappers.
* **Standard Detached Vessels (`--radius-card: 28px`):** All `.neer-card`, `.neer-card-lime`, and `.neer-card-danger` containers.
* **Nested Media & Code Vessels (`18px` – `22px`):** `<img>` specimens inside padded cards (`rounded-[20px]` or `rounded-[22px]`) and `.code-vessel` blocks (`20px`).
* **Detached Table Rows (`16px`):** Left cap (`border-top-left-radius: 16px; border-bottom-left-radius: 16px`) on `td:first-child` and right cap on `td:last-child`.
* **Obsidian Form Inputs (`14px`):** `.neer-input` text fields and selectors.
* **Pills & CTAs (`--radius-pill: 9999px`):** All buttons, `.neer-pill` tags, `.tier-badge` indicators, and header navigation controls.
* **Orbs (`--radius-orb: 50%`):** `.neer-orb` (`35.2px × 35.2px` / `2.2rem`), `.neer-icon-orb` (`44px × 44px`), and the `6px` wordmark node.
* **Prohibited Radius:** `0px` (sharp 90-degree corners) is banned on all UI containers and cards.

### 2. Borders, Dividers & Glass Elevation
* **Default Vessel Hairline:** `1px solid rgba(255, 255, 255, 0.08)`—simulates a faint studio rim-light catching the edge of smoked glass.
* **Featured / Active Lime Hairline:** `1px solid rgba(204, 255, 0, 0.40)`—used on `.neer-card-lime` and active pills.
* **Internal Dividers:** Use `1px solid rgba(255, 255, 255, 0.10)` (`border-t border-white/10`) only inside a card to separate main narrative content from a bottom telemetry footer bar. Never use full-bleed `<hr>` lines across the page canvas.
* **Glassmorphism Blur:** Sticky headers (`bg-[#050505]/90 backdrop-blur-xl`), modal overlays (`bg-black/85 backdrop-blur-md`), and translucent vessels (`backdrop-filter: blur(24px)`) use hardware-accelerated backdrop blur.

### 3. Shadows & Bioluminescent Glows
* **No Dark Drop-Shadows on Void:** Because the canvas is `#050505`, black drop-shadows are invisible or muddy. Depth is achieved via surface luminance (`#050505` → `#111115` → `#16161A`) and border opacity (`0.08` → `0.18`).
* **Bioluminescent Lime Glows (Strictly Controlled):**
  * **Wordmark Node:** `box-shadow: 0 0 10px #CCFF00` (nav) / `0 0 16px #CCFF00` (hero).
  * **Primary CTA Hover:** `box-shadow: 0 0 24px rgba(204, 255, 0, 0.45)` (or `0 0 28px rgba(204, 255, 0, 0.38)`).
  * **Icon Orb Hover:** `box-shadow: 0 0 20px rgba(204, 255, 0, 0.14)`.
  * **Input Focus Halo:** `box-shadow: 0 0 0 3px rgba(204, 255, 0, 0.12)`.

---

## H. Component Design System

### 1. Master Brand Wordmark & Lockups (Confirmed)
* **Visual Purpose:** Anchors brand sovereignty in the top-left header, hero signatures, and footer.
* **Primary Nav Lockup Specification:**
  * Typography: `NEER` in `Kanit 700`, uppercase, `font-size: 1.5rem` (`24px`), `letter-spacing: 0.08em`, `color: #FFFFFF`.
  * Terminal Kinetic Node: `6px × 6px` (`w-1.5 h-1.5`) circle (`border-radius: 9999px`), `background: #CCFF00`, `box-shadow: 0 0 10px #CCFF00`, aligned to baseline with `6px` (`gap-1.5`) left clearance.
  * Clear-Space Law: Minimum `2×` the cap-height of the letter `N` on all sides. Minimum digital width: `88px`.
* **System / Legal Lockup (`NEER // MEDIA`):** Appends `<span class="font-mono text-xs text-[#666670]">// MEDIA</span>` for legal footers and documentation headers.
* **Favicon / Avatar Lockup (`N•`):** `32px × 32px` circular `#050505` orb with `1px solid rgba(255,255,255,0.20)` border housing `N` (`Kanit 700`, `14px`, `#FFFFFF`) + `6px` `#CCFF00` dot.

```html
<!-- Canonical NEER Wordmark Component -->
<a href="/" class="inline-flex items-baseline gap-1.5 select-none" aria-label="NEER Home">
  <span class="font-display font-bold text-2xl text-white tracking-[0.08em] uppercase">NEER</span>
  <span class="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
</a>
```

### 2. Smart Scroll-Direction Header & Priority Navigation Drawer (Confirmed)
* **Visual Purpose:** Provides persistent telemetry and instant pillar routing without obstructing vertical cinema/reading immersion.
* **Smart Scroll Behaviour:**
  * Fixed/sticky at top (`z-index: 40`), height `56px–64px`, `background: rgba(5, 5, 5, 0.90)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(255, 255, 255, 0.10)`.
  * **Down-Scroll (`>6px` delta):** Adds `.nav-hidden` (`transform: translateY(-110%)`).
  * **Up-Scroll (`≥6px` delta) or Top of Page:** Adds `.nav-visible` (`transform: translateY(0)`), transitioning over `450ms cubic-bezier(0.16, 1, 0.3, 1)`.
  * **Laminar Progress Filament:** Optional `2px` bottom track (`bg-white/5`) with a `#CCFF00` progress bar indicating scroll or slide completion.
* **Priority Hamburger Drawer Order (Mandatory):**
  When opened, the full-screen or floating glass drawer (`z-index: 50`, `bg-black/85 backdrop-blur-md`) must list NEER's category-defining pillars in this exact priority order:
  1. `01 // ✦ ASTRO-BRANDING` (`.neer-pill-lime` highlight)
  2. `02 // ● ENGINEERED AI SYSTEMS` (`.neer-pill-lime` highlight)
  3. `03 // ◉ COMMERCIAL FILM & BRAND`
  4. `04 // ≈ PHILOSOPHY (DASHAVATARA)`
  5. `05 // VERIFIED CASE LEDGER`

### 3. Buttons & Action Triggers (Confirmed)
All buttons use `border-radius: 9999px` (pill geometry) and transition via `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Variant 1 — Primary Bioluminescent Pill CTA (`.btn-neer-primary` / `.neer-cta-primary`):**
  * Usage: Primary conversion action per viewport (`INITIATE BRAND DIAGNOSTIC →`, `REQUEST SYSTEM DIAGNOSTIC →`). Maximum 1 primary lime CTA per component group.
  * Specs: `background: #CCFF00`, `color: #050505` (strictly black text, never white), `padding: 10px 20px` (`py-2.5 px-5`) or `14px 28px` (hero), `font-family: 'Kanit', sans-serif`, `font-weight: 700`, `letter-spacing: 0.05em`, `text-transform: uppercase`, `font-size: 0.75rem–0.875rem` (`12px–14px`).
  * Hover: `transform: translateY(-2px)`, `box-shadow: 0 0 24px rgba(204, 255, 0, 0.45)`.
* **Variant 2 — Secondary Ghost Glass CTA:**
  * Usage: Secondary actions (`// VIEW CASE TELEMETRY`, `INSPECT THE LEDGER`).
  * Specs: `background: rgba(255, 255, 255, 0.04)`, `color: #FFFFFF`, `border: 1px solid rgba(255, 255, 255, 0.14)`, `border-radius: 9999px`, `padding: 10px 18px`, `font-family: 'JetBrains Mono', monospace`, `font-size: 0.75rem` (`12px`), `letter-spacing: 0.08em`, `text-transform: uppercase`.
  * Hover: `border-color: rgba(204, 255, 0, 0.50)`, `color: #CCFF00`.
* **Variant 3 — Utility Copy / Action Pill (`.copy-btn`):**
  * Usage: Copying code tokens, AI prompts, or system configurations.
  * Specs: `background: rgba(204, 255, 0, 0.12)`, `color: #CCFF00`, `border: 1px solid rgba(204, 255, 0, 0.40)`, `border-radius: 9999px`, `padding: 5px 14px`, `font-family: 'JetBrains Mono', monospace`, `font-size: 0.68rem` (`11px`), `letter-spacing: 0.06em`, `text-transform: uppercase`.
  * Hover: `background: #CCFF00`, `color: #050505`.

### 4. Detached Bento Vessels / Cards (Confirmed)
* **Variant 1 — Standard Detached Vessel (`.neer-card`):**
  * Surface: `background: linear-gradient(145deg, rgba(24,24,30,0.92) 0%, rgba(12,12,16,0.96) 100%)` (or `rgba(17,17,17,0.72)` with `backdrop-filter: blur(24px)`).
  * Border & Radius: `1px solid rgba(255, 255, 255, 0.08)`, `border-radius: 28px`.
  * Padding: `1.35rem 1.5rem` (`21.6px 24px`) for standard cards; `1.5rem–2.0rem` (`24px–32px`) for hero/console vessels.
  * Hover: `border-color: rgba(255, 255, 255, 0.18)` (or `rgba(204, 255, 0, 0.35)` on interactive feature vessels), `transform: translateY(-2px)` to `translateY(-4px)` over `450ms var(--ease-laminar)`.
* **Variant 2 — Featured Acid-Lime Vessel (`.neer-card-lime`):**
  * Surface: `background: linear-gradient(145deg, rgba(204,255,0,0.07) 0%, rgba(15,15,20,0.96) 100%)`.
  * Border: `1px solid rgba(204, 255, 0, 0.40)`, `border-radius: 28px`.
  * Usage: Maximum 1–2 per viewport for the primary focal thesis, active pillar highlight, or "DO // COMPLIANT" governance exemplar.
* **Variant 3 — Quarantine / Violation Vessel (`.neer-card-danger`):**
  * Surface: `background: linear-gradient(145deg, rgba(239,68,68,0.08) 0%, rgba(15,15,20,0.96) 100%)`.
  * Border: `1px solid rgba(239, 68, 68, 0.35)`, `border-radius: 28px`.
  * Usage: "DON'T // VIOLATION" comparison cards, banned lexicon tables, and error states.
* **Variant 4 — Service Case Study Proof Vessel (Confirmed Pattern):**
  * Required on `/astro-branding`, `/engineered-ai`, and `/commercial-film`.
  * Internal Structure: Top 16:9 media specimen (`rounded-2xl border border-white/10`) → Client & Sector `.neer-pill-lime` badge → H3 Case Title → 3-Row Forensic Ledger (**01 Bottleneck Diagnosed**, **02 NEER Monolith Architecture**, **03 Verified Commercial Yield**).

### 5. Telemetry Pills, Badges & Circular Orbs (Confirmed)
* **Telemetry Pill (`.neer-pill`):** `border-radius: 9999px`, `padding: 0.28rem 0.78rem` (`4.5px 12.5px`), `font-family: 'JetBrains Mono', monospace`, `font-size: 0.70rem` (`11.2px`), `letter-spacing: 0.08em`, `text-transform: uppercase`, `background: rgba(255, 255, 255, 0.04)`, `border: 1px solid rgba(255, 255, 255, 0.08)`, `color: #A1A1AA`.
* **Active Lime Pill (`.neer-pill-lime`):** Same geometry with `background: rgba(204, 255, 0, 0.10)`, `border: 1px solid rgba(204, 255, 0, 0.40)`, `color: #CCFF00`.
* **Numbered Sequence Orb (`.neer-orb`):** `35.2px × 35.2px` (`2.2rem × 2.2rem`), `border-radius: 50%`, `background: rgba(204, 255, 0, 0.12)`, `border: 1px solid rgba(204, 255, 0, 0.40)`, `color: #CCFF00`, `font-family: 'JetBrains Mono', monospace`, `font-size: 0.75rem`, `font-weight: 600`.
* **SVG Feature Icon Orb (`.neer-icon-orb`):** `44px × 44px`, `border-radius: 9999px`, `background: rgba(255, 255, 255, 0.03)`, `border: 1px solid rgba(255, 255, 255, 0.10)`, centering a `22px × 22px` monoline SVG. Hover shifts border to `rgba(204, 255, 0, 0.45)` with `0 0 20px rgba(204, 255, 0, 0.14)` glow.

### 6. Sovereign Diagnostic Console & Form Fields (Confirmed)
* **Input Field (`.neer-input`):**
  * Specs: `background: rgba(5, 5, 5, 0.85)`, `border: 1px solid rgba(255, 255, 255, 0.12)`, `border-radius: 14px`, `padding: 12px 16px`, `color: #FFFFFF`, `font-family: 'Inter', sans-serif`, `font-size: 0.875rem` (`14px`), `width: 100%`.
  * Focus State: `outline: none`, `border-color: #CCFF00`, `box-shadow: 0 0 0 3px rgba(204, 255, 0, 0.12)`.
* **Input Label:** Placed above the input (`margin-bottom: 4px`), `font-family: 'JetBrains Mono', monospace`, `font-size: 0.6875rem` (`11px`), `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: #D4D4D8` (`text-zinc-300`).

### 7. Detached Data Tables (`.neer-table` — Confirmed)
* **Visual Purpose:** Presents comparative matrices, design tokens, and diagnostic scorecards without boxy grid walls.
* **CSS Architecture:**
  * `width: 100%`, `border-collapse: separate`, `border-spacing: 0 8px` (creates an `8px` horizontal void channel between every row).
  * Table Headers (`th`): `font-family: 'JetBrains Mono', monospace`, `font-size: 0.68rem` (`11px`), `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: #666670`, `padding: 0.5rem 0.9rem`, `text-align: left`.
  * Table Cells (`td`): `background: rgba(20, 20, 26, 0.88)`, `padding: 0.75rem 0.9rem`, `font-size: 0.82rem` (`13.1px`), `color: #A1A1AA`, `border-top: 1px solid rgba(255, 255, 255, 0.08)`, `border-bottom: 1px solid rgba(255, 255, 255, 0.08)`.
  * First Cell Cap (`td:first-child`): `border-left: 1px solid rgba(255, 255, 255, 0.08)`, `border-top-left-radius: 16px`, `border-bottom-left-radius: 16px`, `color: #FFFFFF`, `font-weight: 600`.
  * Last Cell Cap (`td:last-child`): `border-right: 1px solid rgba(255, 255, 255, 0.08)`, `border-top-right-radius: 16px`, `border-bottom-right-radius: 16px`.

---

## I. Imagery, Illustrations, Icons, and Media

### 1. Art Direction & The 10-Variable Visual Signature (Confirmed)
All photography, 3D renders, and AI-generated specimens on `neermedia.com` must look as if they were shot on the same nocturnal soundstage:
1. **Subject:** Sculptural physical artifacts (suspended liquid-mercury spheres, precision-machined gunmetal astrolabe rings, polyhedral crystal lattices, anodized aluminum hardware tokens, anamorphic cinema lenses). Never use stock office photography, smiling models in sunlit rooms, or cartoon illustrations.
2. **Materiality:** High-density smoked optical glass (`IOR 1.52`), high-viscosity dark ferrofluid/mercury, matte carbon basalt (`#111111`), and satin-anodized gunmetal.
3. **Lighting:** High-contrast chiaroscuro silver-white (`#FFFFFF`) rim lighting paired with a single internal bioluminescent chartreuse (`#CCFF00`) laser caustic refraction (strictly `<5%` of frame area).
4. **Camera & Lens Physics:** Shot on 65mm anamorphic prime or 85mm–100mm macro cinema lens at `f/2.8` shallow depth of field with subtle Kodak Vision3 500T film grain and raytraced reflections.
5. **Background Hygiene:** Seamless matte `#050505` obsidian void so assets seat inside `.neer-card` containers with zero visible bounding-box seams.

### 2. The Single Universal AI Image Brand Style Prompt (Confirmed)
Whenever generating new imagery or 3D visual assets for the website, prepend or append this exact universal style lock:

```text
in the signature NEER Hydro-Kinetic Monolith aesthetic, ultra-minimalist architectural composition set within an abyssal obsidian void (#050505) and matte carbon basalt (#111111) environment, sculpted smoked optical glass and high-viscosity dark ferrofluid liquid surfaces under high-contrast chiaroscuro rim lighting (#FFFFFF), accented with a single razor-thin bioluminescent chartreuse (#CCFF00) laser caustics telemetry node (strictly under 5% of frame), shot on 65mm anamorphic prime lens, f/2.8, subtle Kodak Vision3 500T film grain, hyper-tactile raytraced reflections, 8k photorealistic editorial cinema, zero warm gold, zero cyan-purple neon, zero clutter
```

* **Mandatory Negative Prompt (`--no`):**
  ```text
  --no gold, brass, #E5A93C, warm yellow, saffron, cyan, purple, magenta, neon cyberpunk, blue water splashes, swimming pool aqua, daylight, white background, cartoon, flat vector clipart, stock office workers, zodiac wheel, lotus, garbled text, watermarks
  ```

### 3. Image Framing, Aspect Ratios & Cropping
* **Homepage Hero Specimen:** `1:1` square or `4:5` vertical macro specimen seated inside a `.neer-card p-3` (`12px` padding) with inner image `border-radius: 20px–22px` and `1px solid rgba(255, 255, 255, 0.10)`, accompanied by a bottom telemetry caption bar (`SPECIMEN 01 // HYDRO-KINETIC SPHERE` + `#050505 · #FFFFFF · #CCFF00`).
* **Service Pillar & Case Study Cards:** `16:9` widescreen aspect ratio (`h-44` to `h-52` / `176px–208px` in card grids, `object-cover`, `border-radius: 16px–20px`). Never stretch or distort native aspect ratios.

### 4. Iconography, Pillar Glyphs & SVG Stroke Physics (Confirmed)
NEER never uses filled cartoon icons, multi-colour flat illustrations, or emoji in UI components.
* **Canonical Pillar Glyphs:**
  * `✦` **Astro-Branding:** Celestial Meridian Crosshair + `#CCFF00` planetary focal node.
  * `●` **Engineered AI Systems:** Autonomous Neural Lattice + `#CCFF00` telemetry node.
  * `◉` **Commercial Film:** Anamorphic Aperture Frame + `#CCFF00` tally light.
  * `≈` **Hydro-Philosophy:** Laminar Harmonic Wave + `#CCFF00` surface node.
* **Mandatory SVG Construction Rules:**
  1. **Grid & Stroke:** `viewBox="0 0 24 24"`, `width="22"`, `height="22"`, `fill="none"`, `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
  2. **Tri-Tone Chromatic Hierarchy:** Primary structural paths in `#FFFFFF`, secondary orbital/dashed grid paths in `#A1A1AA`, and **exactly one** focal `<circle>` node filled in `#CCFF00` (`r="1.5"` to `2.5`, `stroke="none"`).
  3. **Vessel Containment:** Wrap every feature icon inside `.neer-icon-orb` (`44px × 44px` circular glass vessel).
  4. **Icon Library Fallback:** If using Lucide or Phosphor icons for utility UI controls (arrows, close `[X]`, copy), enforce `strokeWidth={1.5}` in `#FFFFFF` or `#A1A1AA`—never use solid/duotone fills.

---

## J. Interaction and Motion Guidelines

### 1. The Master Laminar Easing Curve (Confirmed)
All motion on `neermedia.com` is governed by high-viscosity fluid mechanics:
* **CSS Token:** `--ease-laminar: cubic-bezier(0.16, 1, 0.3, 1)`
* **Physical Behaviour:** Movement begins with immediate hydraulic authority (`0.16, 1`) and decelerates over a long, smooth laminar settle (`0.3, 1`)—like heavy liquid mercury coming to rest in an obsidian basin.

### 2. Interaction Timing & State Rules
* **Micro-Interactions (Pills, Copy Buttons, Links):** `250ms cubic-bezier(0.16, 1, 0.3, 1)`.
* **Form Input Focus:** `300ms cubic-bezier(0.16, 1, 0.3, 1)` border colour shift to `#CCFF00` + `3px` halo expansion.
* **Detached Vessel Hover:** `450ms cubic-bezier(0.16, 1, 0.3, 1)` vertical lift (`transform: translateY(-2px)` to `-4px`) + border brightening.
* **View / Tab / Slide Transitions:** `420ms cubic-bezier(0.16, 1, 0.3, 1)` opacity fade (`0 → 1`) + subtle vertical rise (`translateY(10px) → translateY(0)`).

### 3. Background Video & Motion Hygiene
* **Slow-Motion Laminar Loops:** Background video loops must run at 15%–25% real-time fluid velocity (120fps slow-motion macro physics, 6-second seamless loop) with a locked-off camera or imperceptibly slow orbital drift (`≤5 deg/sec`).
* **Prohibited Motion:** Never use elastic/spring bounce physics, chaotic water splashes/foam, handheld camera shake, cursor-hijacking trails, or heavy scroll-jacking that blocks native trackpad momentum.
* **Reduced Motion (`prefers-reduced-motion: reduce`):** Automatically disable vertical hover translations, pause background video loops on their approved static keyframe, and reduce transition durations to `0.01ms`.

---

## K. Accessibility and Readability

### 1. Verified Contrast Standards (WCAG 2.1 Reference)
* **`#FFFFFF` on `#050505` (19.8 : 1):** Exceeds WCAG AAA for all display headings, H3s, and primary labels.
* **`#CCFF00` on `#050505` (16.4 : 1):** Exceeds WCAG AAA for mono telemetry tags, active links, and highlights.
* **`#050505` on `#CCFF00` (16.4 : 1):** Exceeds WCAG AAA for primary pill CTA button labels.
* **`#A1A1AA` on `#111115` (7.1 : 1):** Exceeds WCAG AAA for standard `Inter` body prose inside detached cards.
* **`#666670` on `#050505` (3.6 : 1):** Used strictly for non-essential decorative `JetBrains Mono` coordinate prefixes (`// 01`) and secondary borders; if a mono label conveys essential interactive meaning, use `#A1A1AA` or `#CCFF00`.
* **CRITICAL PROHIBITION:** Never render `#FFFFFF` text on a `#CCFF00` background (contrast ratio is **1.2 : 1**, rendering text illegible). Text on `#CCFF00` surfaces must always be `#050505` or `#000000`.

### 2. Keyboard Navigation, Focus & Touch Targets
* **Visible Focus Indicators:** Never remove focus outlines without providing the NEER focus ring (`border-color: #CCFF00; box-shadow: 0 0 0 3px rgba(204, 255, 0, 0.12);` on inputs, or `2px solid #CCFF00` with `2px` offset on buttons/links).
* **Keyboard Shortcuts & Dismissal:** Modal drawers and overlays must close on `Escape` and trap focus while open. Interactive carousels or slide views must support `ArrowLeft` / `ArrowRight` navigation.
* **Touch Targets:** All interactive buttons, drawer triggers, and form inputs on mobile/tablet must maintain a minimum hit area of `44px × 44px` (or `min-height: 40px` with `≥8px` surrounding clearance).
* **Non-Colour-Only Status:** Every status badge or Do/Don't card pairs colour with an explicit text prefix (`DO //`, `DON'T //`, `01 ESTABLISHED`, `×`, `•`, `✦`).

---

## L. Design Tokens and Naming Conventions

Reuse these exact CSS custom properties and Tailwind configuration keys across all stylesheets and components. Note that both the `--bg-*` shorthand variables and `--neer-*` namespaced aliases exist in the project; keep both synchronized in `:root`.

### 1. Canonical CSS `:root` Variables

```css
:root {
  /* 01. Void & Detached Vessel Surfaces (85%-92% Viewport) */
  --bg-void: #050505;
  --neer-bg-void: #050505;
  --neer-bg-true-black: #000000;
  --bg-obsidian: #0A0A0A;
  --neer-bg-obsidian: #0A0A0A;
  --bg-vessel: #111115;
  --neer-bg-vessel: #111115;
  --bg-elevated: #16161A;
  --neer-bg-vessel-elevated: #16161A;
  --surface-gradient: linear-gradient(145deg, rgba(24, 24, 30, 0.92) 0%, rgba(12, 12, 16, 0.96) 100%);
  --neer-vessel-gradient: var(--surface-gradient);

  /* 02. Typography & Mist Hierarchy (5%-10% Viewport) */
  --text-primary: #FFFFFF;
  --neer-text-primary: #FFFFFF;
  --text-soft: #F5F5F5;
  --neer-text-soft: #F5F5F5;
  --text-secondary: #A1A1AA;
  --neer-text-secondary: #A1A1AA;
  --neer-text-body-live: #888888;
  --text-muted: #666670;
  --neer-text-telemetry: #666670;

  /* 03. Bioluminescent Acid Lime (<=5% Viewport Cap) */
  --accent-lime: #CCFF00;
  --neer-accent-lime: #CCFF00;
  --accent-lime-live: #CBF30F;
  --neer-accent-lime-live: #CBF30F;
  --neer-accent-lime-alt: #C9F31D;
  --accent-lime-glow: rgba(204, 255, 0, 0.14);
  --neer-accent-glow: rgba(204, 255, 0, 0.14);
  --accent-lime-border: rgba(204, 255, 0, 0.40);
  --neer-border-active: rgba(204, 255, 0, 0.40);

  /* 04. Specular Hairline Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --neer-border-default: rgba(255, 255, 255, 0.08);
  --border-elevated: rgba(255, 255, 255, 0.14);

  /* 05. Locked Typography & Hierarchy Tokens */
  --font-display: 'Kanit', sans-serif;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --tracking-display: 0.05em;
  --weight-display: 700;

  /* 06. Detached Spatial & Motion Tokens */
  --radius-card: 28px;
  --radius-card-lg: 32px;
  --radius-pill: 9999px;
  --radius-orb: 50%;
  --ease-laminar: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 2. Canonical `tailwind.config.js` Theme Extension

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Kanit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        display: '0.05em', // Mandatory +5% tracking for Kanit display headlines
      },
      fontWeight: {
        medium: '700', // Anchor display weight for Kanit
      },
      colors: {
        void: '#050505',
        obsidian: '#0A0A0A',
        vessel: '#111115',
        elevated: '#16161A',
        lime: '#CCFF00',
        limeLive: '#CBF30F',
        mist: '#A1A1AA',
        telemetry: '#666670',
      },
      borderRadius: {
        vessel: '28px',
        vesselLg: '32px',
      },
      transitionTimingFunction: {
        laminar: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    }
  }
};
```

---

## M. Consistency Rules

### 1. Global Invariants (Must Never Vary Across Pages)
* **Canvas & Chromatic Ratio:** Every page on `neermedia.com` uses `#050505` as the primary canvas, `#111115` detached vessels, `#FFFFFF`/`#A1A1AA` text, and `#CCFF00` accents capped at `≤5%–8%`.
* **Typography Triumvirate:** `Kanit` (`700`, `0.05em`) for H1/H2 display, `Inter` for body/subheads/controls, and `JetBrains Mono` for telemetry tags.
* **Detached Spatial Grammar:** `28px–32px` card border-radius separated by `20px–32px` open void channels; `9999px` pill buttons and badges.
* **Navigation & Footer:** Smart scroll-direction header with the priority 5-item drawer and `NEER` + `6px` `#CCFF00` wordmark lockup.

### 2. Controlled Pillar-Specific Variations (Permitted Only in Designated Zones)
* **Astro-Branding Quarantine (`/astro-branding` only):** Classical Sanskrit diagnostic terms (*Jyotisha, Lagna, Navamsa D-9, Shadbala, Dasha, Gochar, Namakarana, Shilpa Shastra, Yantra, Vastu, Muhurta*) are permitted **only** on the Astro-Branding page (and must be paired immediately with a 5-word English commercial gloss). They must never leak onto `/engineered-ai` or `/commercial-film`.
* **Dashavatara Evolutionary Continuum (`/philosophy` & Homepage Teaser only):** The 10-stage evolutionary arc (*Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki*) anchors the Philosophy page as an archetypal systems-evolution metaphor—never as religious dogma or literal biology.
* **Pillar Specimen Geometry:**
  * `/astro-branding` uses circular vernier rings, meridian crosshairs (`✦`), and optical crystal Yantra lenses.
  * `/engineered-ai` uses polyhedral meshes, vector node lattices (`●`), and laminar-to-crystal phase transitions.
  * `/commercial-film` uses 65mm anamorphic lens barrels, aperture frames (`◉`), and chiaroscuro liquid waves.

---

## N. Do's and Don'ts

### 1. Visual, Colour & Typography Do's and Don'ts

| Category | DO (Mandatory Implementation Standard) | DON'T (Immediate Quality-Gate Failure) |
| :--- | :--- | :--- |
| **Brand Mark** | Write **NEER** in uppercase `Kanit 700` (`0.08em`) with a single `6px` `#CCFF00` terminal orb; use **NEER Media** only in legal footers. | Never write "NEER Agency", "NEER Studio", "NEER Labs", set the wordmark in lowercase/serif, or color all 4 letters `#CCFF00`. |
| **Colour System** | Maintain 85%–92% `#050505`/`#111115` obsidian void, 5%–10% `#FFFFFF`/`#A1A1AA` text, and ≤5% `#CCFF00` acid lime. | Never introduce `#E5A93C` (Solar Brass), warm gold, temple saffron, literal water-blue/aqua, purple/cyan gradients, or white page backgrounds. |
| **Button Contrast** | Always set primary `#CCFF00` pill button text in `#050505` (16.4:1 AAA contrast). | Never place `#FFFFFF` text on a `#CCFF00` button or badge (1.2:1 contrast failure). |
| **Typography** | Use `Kanit 700` (`0.05em` tracking, uppercase, ≤8–10 words) for H1/H2 headers and `Inter` (`1.65` line-height, ≤65ch) for body prose. | Never set multi-sentence paragraphs in `Kanit`, omit `0.05em` display tracking, or introduce serif/script fonts. |
| **Spatial Layout** | House content in detached soft-rounded vessels (`28px–32px` radius) separated by `24px–32px` channels of `#050505` void. | Never use `0px` sharp boxy containers or merge cards into shared `1px` wireframe grid walls. |
| **Icons & SVGs** | Build icons on a `24×24` grid with `1.5px` monoline round-cap strokes (`#FFFFFF` + `#A1A1AA` + one `#CCFF00` focal node) inside a `44px` `.neer-icon-orb`. | Never use filled cartoon icons, multi-color flat vector clipart, zodiac horoscope wheels, lotus clipart, or water-drop emojis (`💧`). |
| **Imagery** | Use the Single Universal AI Image Brand Style Prompt (smoked optical glass, dark ferrofluid, chiaroscuro rim light, `<5%` `#CCFF00` caustics on `#050505`). | Never use sunlit corporate stock photos, literal blue water splashes, or unapproved AI style formulas. |
| **Motion** | Animate transitions with `--ease-laminar: cubic-bezier(0.16, 1, 0.3, 1)` over `250ms–450ms`. | Never use bouncy elastic spring animations, chaotic parallax, or fast-cut/shaky background videos. |
| **Copy & Proof** | Lead with visual specimens, keep viewport text blocks ≤65 words, and embed 2 quantified Case Studies (*AXIS Solution*, *YourDSA*, *46+ Films*) per service page. | Never use banned AI clichés (*"Where X meets Y"*, *"Not just X, but Y"*, *delve, tapestry, leverage, synergy, holistic*) or ritual/remedial astrology terms (*Pooja, Havan, gemstone remedies*). |

---

## O. Implementation Guidance and Source of Truth

### 1. How AI Coding Agents & Developers Must Use `DESIGN.md`
1. **Pre-Flight Check Before Writing Code:** Before creating or modifying any HTML, React/Next.js component, CSS stylesheet, or Tailwind configuration for `neermedia.com`, load the exact Google Fonts (`Kanit`, `Inter`, `JetBrains Mono`) and inject the `:root` CSS variables and `tailwind.config.js` tokens from **Section L**.
2. **Reuse Established Primitives First:** Assemble new sections using the existing `.neer-card`, `.neer-card-lime`, `.neer-pill`, `.neer-orb`, `.neer-icon-orb`, `.neer-input`, `.neer-table`, and `.code-vessel` classes documented in **Section H** rather than inventing one-off component styles.
3. **Run the 11-Criterion Quality Gate:** Before finalizing any page or PR, audit the output against the binary rules in **Section N** (verifying 0% `#E5A93C` Solar Brass, `Kanit 700` `0.05em` display headers, `Inter` body prose, `28px–32px` detached vessels, and 16.4:1 `#050505`-on-`#CCFF00` CTA contrast).

### 2. Conflict Resolution & Epistemic Source Hierarchy
If a discrepancy arises between legacy drafts, external inspiration, and current files, resolve it strictly in this order of authority:
1. **Explicit User & Constitutional Locks (Highest Authority):**
   * Display font is **Kanit** (`700`, `0.05em` tracking) + **Inter** for body + **JetBrains Mono** for telemetry (supersedes earlier `Unbounded` or `Syne` explorations).
   * `#E5A93C` (Solar Brass) is permanently excluded; the palette is 100% locked to the live website's `#050505` / `#111115` / `#FFFFFF` / `#CCFF00` (`#CBF30F`) system.
   * Master public brand mark is **NEER** (`NEER Media` for legal entity footers only).
   * AI image generation uses the single cohesive **Universal Prefix/Suffix Brand Style Prompt** (Section I.2).
   * The Philosophy page includes the **Why NEER (6 Laws of Water)** ontology and the **10-Stage Dashavatara Continuum**, and every service page includes structured **Case Studies**.
2. **Verified Implementation (`NEER_Brand_Bible_Deck.html` v5.0 & Live `neermedia.com` CSS):**
   * Exact hex values, `.neer-card` gradients, `.neer-table` detached row styling, `.neer-icon-orb` SVG physics, and smart scroll-direction header logic.
3. **Explicitly Flagged Inferences (Where Live Repository Code Was Not Directly Inspected):**
   * *Inferred Standard Breakpoints:* Standard Tailwind CSS v3.4 breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) and fluid `clamp()` type scales are used as the implementation baseline consistent with `NEER_Brand_Bible_Deck.html`.
   * *Inferred Semantic Status Tints:* Muted dark-glass semantic status tokens (`#34D399` emerald for compliant/success states and `#F87171` red for quarantine/error states on `rgba(..., 0.08–0.10)` backgrounds) are derived from the v5.0 governance comparison cards so validation states never clash with `#CCFF00`.
