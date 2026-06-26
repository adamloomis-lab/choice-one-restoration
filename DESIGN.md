---
name: Renew Home Exteriors — Design System
source: Google Stitch project "Elite Roofing Visual Design" (projects/16227936518613317429)
rendered_theme: light
---

# Renew Home Exteriors — Design System

Synthesized from the Stitch design (rendered HTML + screenshots in `_stitch-reference/`).
NOTE: the Stitch project *metadata* describes a dark/orange "Industrial Precision" theme, but the
**actual rendered pages are a LIGHT theme with a bold red accent** (`class="light"` in the HTML).
The rendered design is the source of truth — build light + red.

## Brand & Voice
High-contrast, bold, industrial-leaning. Targets homeowners and commercial property
managers who value structural integrity and premium execution. Copy is authoritative and
heavy-duty: "RAISING THE STANDARD OF EXTERIORS", "PRECISION ENGINEERED. BATTLE TESTED.",
"THE IRONCLAD GUARANTEE", "MASTERY IN EXECUTION". Avoid soft/delicate flourishes.

## Color Palette (from rendered tailwind.config)
| Token | Hex | Use |
|-------|-----|-----|
| primary | `#ED1C24` | Bold Red — CTAs, accents, rules, active nav |
| on-primary | `#FFFFFF` | text/icons on red |
| secondary | `#969696` | Silver Gray — borders, secondary text |
| background | `#FFFFFF` | page background |
| on-background | `#000000` | near-black headlines/body |
| surface-variant | `#F5F5F5` | card / band fills |
| on-surface-variant | `#4A4A4A` | muted body text |
| outline | `#969696` | strong borders |
| outline-variant | `#E0E0E0` | hairline borders |
| surface-container-low | `#FAFAFA` | subtle section fill |
| surface-container-high | `#EEEEEE` | elevated fill |
Dark sections (footer, hero overlays, "STORM DAMAGE") use near-black `#0A0A0A`/`#000000`
with white text and red accents.

## Typography
- **Headlines:** Montserrat 700/800/900 — heavy, architectural, often UPPERCASE, tight tracking.
- **Body:** Inter 400/500/700 — clean, neutral, highly readable.
- **Labels / eyebrows:** JetBrains Mono 700 — uppercase, wide letter-spacing, "spec-sheet" feel.
- **Icons:** Material Symbols Outlined (replaced with lucide-react in the build).

## Shape & Depth
- **Sharp / minimal rounding** — `0.25rem` default radius max; prefer 0 on big blocks, buttons, images.
- 1–2px solid borders (outline-variant `#E0E0E0` hairline, or red) to define structure.
- Hard, near-zero-blur shadows; no soft organic shadows.

## Layout & Spacing
- 12-col grid, generous gutters, big-block sections that span 6 or 12 cols.
- Large vertical section gaps (~120px desktop) so imagery breathes.
- 8px spacing scale.
- Container max-width ~1240px, centered.

## Components
- **Buttons:** rectangular, sharp. Primary = solid red fill, white uppercase label, often with a
  trailing arrow. Secondary = gray/black outline, dark label.
- **Eyebrow label:** small uppercase mono, red, above section headlines (e.g. "RENEW EXTERIOR RESTORATION").
- **Cards:** no soft shadow; 1px `#E0E0E0` border; bold uppercase headers; red icon.
- **Stat / trust band:** big red numerals ("20+"), mono labels.
- **Before/After:** "THE TRANSFORMATION" slider on Home, "TRANSFORMED!" testimonial on Contact.
- **CTA band:** full-width red block, white headline, white-on-red + outline button pair.

## Pages (from Stitch)
1. **Home** — hero "RAISING THE STANDARD OF EXTERIORS" → precision/stats band → Ironclad Guarantee →
   THE TRANSFORMATION before/after → "READY FOR A BETTER BUILD?" CTA.
2. **Services** — RESIDENTIAL SYSTEMS (Architectural Shingles, Standing Seam Metal, Slate & Concrete
   Tile) → COMMERCIAL SOLUTIONS (TPO & PVC Membranes) → STORM DAMAGE RESTORATION → "START YOUR BUILD" CTA.
3. **Portfolio** — "MASTERY IN EXECUTION" gallery grid → "READY FOR ARCHITECTURAL SUPERIORITY?" CTA.
4. **Contact** — "READY TO RENEW YOUR HOME?" + REQUEST A PROFESSIONAL ESTIMATE form (Name, Email, Phone,
   Project Type, Property Address, Project Details) → HQ block, testimonial.

## Build notes
- Forms route to **Go High Level** (client CRM), NOT Netlify Forms — embed/iframe or webhook.
- Real client email: `info@renewestimate.com`. Phone/street address are TODO (Stitch used placeholders).
- Service area: NE Ohio — Akron, Barberton, Canton, Elyria, Cuyahoga Falls (full local-SEO pages).
- Logo: red roof + gray house on charcoal, white "RENEW HOME EXTERIORS" wordmark.
