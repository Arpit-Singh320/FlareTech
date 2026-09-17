# DESIGN.md — Flaretech

## Direction
Build-in-public robotics. The machine is the proof; the site is a rolling
autobiography of the work. Premium, quiet, dark — but with warmth where the
idea flares.

## Mode
Persuade. One landing page. Primary visitor action: follow the build on X.

## Color
- **Background / foreground**: luxury monochrome (onyx/graphite/platinum)
- **Accent**: warm amber, `hsl(32 50% 78%)` — a small, subtle shift from the
  inherited cream, tying "Flare" into the palette without shouting.
- **Surface roles**: `card`, `popover`, `secondary` in dark graphite; borders
  and rings in warm amber.

## Typography
- **Display**: Space Grotesk, tight tracking, for headlines and build labels
- **Body**: Inter, 300–500, for everything else

## Components
- **SpotlightCard**: primary content surface, subtle mouse-driven glow
- **Aurora**: hero background field, kept in cold white/gray to contrast the
  warm text
- **GridScan**: decorative scan motif over the process section, webcam disabled
- **PillNav**: rounded pill header with logo + nav

## Animation
- Entrance: `fade-in` and `fade-in-up` with controlled delays, one per section
- ShinyText and Shuffle on the hero headline only — the authored first moment
- Hover-lift and spotlight interactions on cards

## Layout
Single scroll page with anchored sections:
- Hero → Pillars → Build log → Process → Roadmap → Contact → Final CTA
- All other routes removed. Catch-all 404 still exists but unused for landing
  flows.

## Signatures
- Amber dot status in the build log and hero
- Build log entries link to real x.com posts
- "Building in public" status line in the footer
