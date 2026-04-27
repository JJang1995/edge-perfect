# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Sharp Fellas** — a single-page static website for a local knife sharpening business based in East Brunswick, NJ. No build tools, frameworks, or package managers. Edit files directly and open `index.html` in a browser to preview.

## Stack

- Plain HTML, CSS, JavaScript — no bundler or build step
- **Leaflet.js 1.9.4** (via CDN) for the service area map using OpenStreetMap/CartoDB tiles
- No backend — the contact form (`handleSubmit`) is a UI-only mock

## Page Sections (in order)

| Section | id | Notes |
|---|---|---|
| Nav | — | Fixed, transparent → solid on scroll via `.scrolled` class |
| Hero | — | Two-column grid with price cards and CTA |
| Why Us | `#about` | 4 feature cards with shimmer hover effect |
| Process | `#process` | 4 numbered steps |
| Testimonials | `#testimonials` | 3 review cards |
| Service Area | `#service-area` | Leaflet map, 10-mile radius circle centered on `[40.4326, -74.4182]` |
| Contact | `#contact` | Info + form |

## Key Design Tokens (styles.css `:root`)

```
--black: #0a0a0a
--charcoal: #1a1a1a
--steel: #2c2c2c
--gold: #c9a84c
--gold-light: #e8c97a
--white: #f5f5f0
--gray: #888
```

## Scroll Animations

Elements with `.reveal` start invisible and animate in via `IntersectionObserver` in `script.js`. Add `.from-left` or `.from-right` for directional entry. Delay variants: `.reveal-delay-1` through `.reveal-delay-4`. The `.divider` element uses a separate `scaleX` animation.

## Business Details

- Address: 1403 Commons Dr, East Brunswick, NJ 08816
- Phone: (732) 354-9388
- Email: thesharpfellas@gmail.com
- Service: Knife sharpening only, $8 flat per knife regardless of size
- Free delivery for 5+ knives
- Drop-off or pickup at customer location

## Assets

- `nav_icon.png.png` — mascot used in navbar circle
- `favicon.png.png` — browser tab icon (double extension due to how it was saved)
- `hero.gif` — not currently used (hero uses a Giphy embed instead)
