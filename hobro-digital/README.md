# NEER — CTA, connecting hands and footer (local study)

A local, standalone page: the **“Got Project?” CTA** reproduced from the
`section.stickers` block of `https://hobro.digital/` (NEER colours and fonts),
followed by the **binary hands** and the **glass footer**. Nothing is deployed.

## Source

- URL: https://hobro.digital/
- Selector: `main#content > section.stickers.stickers-box-js`
- Captured: 2026-10-28

## Copy

The intro copy from the reference (headline, paragraph, “Vision / Clarity / Flow /
Execution”) has been removed — the page now opens with the CTA:

> Got Project?
> LET’S TALK → PING US

## What changed

| Reference | Local study |
|---|---|
| Background `#000` | `#050505` (NEER void) |
| Body text `#fff` | `#FFFFFF` headings, `#A1A1AA` secondary |
| White CTA arcs | `#CCFF00` |
| Reference Lottie | Reimplemented in **Kanit** on the same 4.57 s sequence |
| PPNeueMontreal (display) | **Kanit** 600/700 |
| AkkuratMono (labels) | **Inter** 500, uppercase, +0.08em tracking |
| `/contact/` CTA | `https://neermedia.com/reach-us/` |

## Motion

1. **CTA arc hover** — 4 arcs per side; on hover each translates
   `-90% × (3 − i)` and fades to `1 − 0.2 × i`, `0.4s`, stagger `0.1s`,
   ease `cubic-bezier(0.5, 0, 0.05, 1)` (the reference's `tooltip` CustomEase).
   The right group is rotated 180°.
2. **CTA text morph** — reimplemented in **Kanit** on the reference's 4.57 s
   timeline: **LET’S TALK** → transition → **PING US** → transition →
   **LET’S TALK**. The original Lottie's lettering is baked vector shapes in a
   different typeface, so it could not inherit the branding font.
3. **Cursor tooltip** — a lime pill reading `START " + "` follows the cursor
   with `gsap.quickTo(..., power3)`; on mobile it becomes a static
   “Tap To START …” pill.

## Files

```
index.html      structure: CTA, hands, footer
styles.css      layout, tokens, CTA/morph, hands, glass logo
script.js       CTA morph, tooltip, hands binary/ripple, back-to-top
hands-data.js   base64 hands image (canvas-safe from file://)
footer-bg.js    /home-v2 "grainient" shader (raw WebGL2)
logo-glass.js   GlassSurface port (shape trace, refraction, rim/glow) + magnet
serve.mjs       optional dependency-free local server
assets/         NEER logo + hands source image
README.md       this file
```

## Preview

Open `index.html` directly in Chrome, or run:

```bash
node serve.mjs --open
```

Everything is local, so **`file://` works**; the server is optional.
Scroll through the page: **CTA → hands → footer**. Hard-refresh (`Ctrl+F5`) after
edits.

## Hands + footer

### Hands

- The Creation-of-Adam hands from anthracitestudio.be are sampled into a
  **binary-character field** on black — lime `0/1` glyphs, mist for the dim cells.
- **Full-bleed, fluid, cropped to the hands**: the script measures the glyph
  bounding box in the source image once, then sizes the section to that band
  (`width × bbox ratio`, min 140 px, max 72 vh) and samples only that region. No
  letterboxed black above or below, so the CTA → hands gap stays ~72 px.
  Narrow screens hit the 140 px floor, which zooms slightly and crops the arms.
- **Connecting intro**: when the section enters view, characters reveal from both
  outer edges inward over ~1.8 s, meeting at the fingertips.
- **Water ripple**: pointer movement adds decaying rings that displace and
  brighten the binary characters; a click drops a stronger splash. Ripples are
  additive (max 6) so they interfere like water.
- **Performance**: 2D canvas only. It draws during the intro and while ripples
  are alive, then **stops the rAF loop**; it also pauses off-screen via
  IntersectionObserver. DPR is capped at 2.
- **Reduced motion**: static field, no intro, no ripples.

### Footer

- madebykota-inspired layout: contact, Index, Socials, a divider, an enormous
  **NEER logo**, and a bottom row with copyright / legal / back-to-top.
- **Background**: the live `/home-v2` hero backdrop (the “grainient” — flowing
  Oklab bands `#050507 → #111116 → #26262e`, 40° direction, silk shading, fine
  grain) ported into `footer-bg.js` as a raw WebGL2 fullscreen shader, with no
  sphere and no word. It renders at half resolution, ~30 fps, and only while the
  footer is on screen; reduced motion gets one static frame, and a missing WebGL2
  context falls back to the page black.
- **Connected to the hands**: the canvas rises `clamp(160px, 22vh, 320px)` above
  the footer top (`--bg-rise`) and its mask fades from transparent there, so the
  grey starts right under the hands and the two sections read as one.
- **Glass logo**: the wordmark is a port of the React Bits `GlassSurface`
  component (JS + CSS variant) to vanilla JS, applied to the logo mask:
  1. **Shape trace** — `logo-glass.js` rasterises the NEER path and builds a
     signed-distance field (Felzenszwalb distance transform, blur, shading).
  2. **Refraction** — the distance field becomes a displacement map; an SVG
     filter runs three `feDisplacementMap` passes with R/G/B offsets and screens
     them together inside `backdrop-filter: url(#neer-glass)`. The backdrop bends
     only near the letterform edges (chromatic fringing included), the centre is
     untouched, so the animated background is fully visible through the mark.
  3. **Rim + glow** — `shade()` masks from the same field paint a thin rim
     (`rgba(255,255,255,.08)`) and a soft ambient glow (`rgba(255,255,255,.1)`).
  The body carries a transparent black tint (`rgba(0,0,0,.34)`) instead of a
  white frost, and there is no hover glow. The mark is `min(90vw, 2400px)` wide.
- **Cropped logo** — `.footer__logo` is a 15.24 / 2.712 box (80% of the glyph
  band, y 0.82 → 4.21), `overflow: hidden`, with a mask that fades the bottom
  into the footer: only the top 80% of the letterforms is visible, the rest is
  cut off.
- **Magnetic logo** — pointer movement over the wordmark pulls it toward the
  cursor (max 16 px / 12 px) with `gsap` `power3`, and it springs back to place
  on leave with `elastic.out`. The transform is applied to `.footer__logo` (the
  crop box) rather than the artwork, so the logo never slides under its own
  clipped edge. Disabled for `prefers-reduced-motion`.
- **Legal row above the logo** — © 2026 NEER Media, Privacy Policy, Terms of
  Service and the back-to-top button sit above the mark; no horizontal dividers.
- **Intro removed** — the sticker block, the paragraph, “Vision / Flow” and the
  “Scroll to reveal” spacer are gone; the page starts at the CTA.
- **Index** starts at Astro-Branding (no Home entry).
- **Spacing**: CTA bottom padding `clamp(2.5rem, 5vw, 6.25rem)` and footer
  `margin-top: clamp(2.5rem, 5vw, 6.25rem)` — 72 px at 1440, never above 100 px.
- Contact: `connect@neermedia.com`; “Book a 30-minute call” → `/reach-us/`.
- Socials: Instagram, LinkedIn, X, Facebook (live URLs).
- Back-to-top uses Lenis when present, otherwise smooth `window.scrollTo`.
- **Route note**: only `/`, `/astro-branding/` and `/reach-us/` return 200 today;
  the other sitemap routes are used so the footer is complete for launch.

## Asset note

- `assets/hands-source.webp` is the anthracite hands image, used only to derive
  the binary field. It is embedded as base64 in `hands-data.js` so the canvas
  stays untainted on `file://` (the webp itself is not loaded at runtime).
- `assets/neer-logo-light.svg` is NEER’s own logo, pulled from
  `neermedia.com/wp-content/uploads/2024/10/neer-logo-light.svg`. It is used as
  the fallback `<img>` and as the source for the glass mask/trace.
- The arcs are inline SVGs, recoloured with `currentColor`.
- The hands image is a reference asset for this internal study. Replace it with
  NEER-owned or licensed artwork before this goes anywhere public.

## Integration notes (when it goes live)

- Target: `/home-v2/` (page ID 19308). That page currently renders **no footer**;
  the hands + footer are appended after all content.
- Recommended deploy: an mu-plugin on `wp_footer`, guarded by `is_page(19308)`,
  plus CSS/JS assets under `wp-content/uploads/neer-home-v2/` excluded from
  WP Rocket combine/delay. Clear the WP Rocket cache for the page afterwards.
- The footer is written as a standalone block so it can be reused across pages.
- **Do not add Lenis in production.** The live site already runs
  GSAP + ScrollSmoother/ScrollTrigger; adding Lenis would create a second scroll
  authority. Use the existing scroll stack instead.
- Reuse the site's global GSAP 3.11.4 rather than loading a second copy.
- The hands canvas is 2D-only. The footer backdrop adds one half-resolution
  WebGL2 context; on the live site, reuse the existing hero renderer where
  possible, or swap it for a static frame if the budget is tight.
- The glass wordmark adds an SVG filter (three displacement passes). Measured
  headless at ~60 fps with it enabled; if a low-end device suffers, drop the
  `.is-glass-surface` class and the plain frosted fallback takes over.

## Responsible use

This is an internal design study. The CTA copy and the hands image belong to the
reference sites; do not publish them without permission. Rebuild the assets and
re-author the copy before release.
