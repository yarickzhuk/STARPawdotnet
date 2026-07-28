# DESIGN.md — STARPaw.net v2, "Vitrage of the Clan"

Approved design system for the second visual version of the site. This file is
read automatically by Claude Design on re-import, and by Claude Code at the
start of every session. It does not change any route, filename, or piece of
site text — only the visual layer, per `HANDOFF.md` task D-01.

## Direction

Medieval stained glass and illuminated manuscript, played completely straight
over absurdist cat drama. Deep, saturated color — cinnabar, ultramarine,
gold — on a dark ground. Every section opens with a large illuminated
initial. The joke lives in the gap between a sacred visual register and
ridiculous content (a Berrynose joke set like scripture is funnier for it,
not undercut by it): **never soften the form to make the content read as
"more of a joke."**

## Color

| Token | Hex | Role |
|---|---|---|
| `--night` | `#0B0A12` | page ground |
| `--panel` | `#161320` | glass tile base |
| `--panel-2` | `#1D1828` | glass tile, top of gradient |
| `--lead` | `#050506` | borders / dividers ("caming") |
| `--leadhi` | `rgba(255,255,255,.14)` | inset top highlight on panels |
| `--parchment` | `#F3E8D6` | primary text on dark |
| `--parchdim` | `#CDBFA8` | secondary text / captions |
| `--roasts` | `#D75B5B` | Roasts — cinnabar, candle-flame red |
| `--files` | `#79C98C` | Files — emerald, cathedral glass green |
| `--atlas` | `#D5A447` | Atlas — old gold, icon-frame gold |
| `--herbs` | `#9476BD` | Herbs — amethyst, poison-berry purple |
| `--about` | `#7FA0C9` | About — ultramarine-adjacent blue |

Every section token also has a `-ink` pair (e.g. `--roasts-ink: #1C0808`) —
the dark, near-black text color used *on top of* that section's bright
background (buttons, active nav pill, badges). Never put light parchment
text on a bright section color; contrast fails and it reads as unfinished.

**Compatibility:** all v1 custom-property names (`--bg`, `--ink`, `--white`,
`--ember`, `--mint`, `--sun`, `--lilac`, `--sky`, `--green`, `--red`) still
exist and now point at the vitrage tokens above, so any inline
`style="...var(--ember)..."` left over from v1 markup repaints correctly with
zero HTML changes. New markup should reach for the canonical names
(`--roasts`, `--files`, `--atlas`, `--herbs`, `--about`) directly.

Ambient per-page accent: `js/layout.js` sets `body[data-accent="roasts|files|
atlas|herbs|about"]` from the same section key already passed to
`STARPAW_LAYOUT.mount()`. CSS reads it as `--accent` / `--accent-ink` for
glow washes, tag-pill outlines, etc. — one wire-up, no page-by-page markup.

## Type

| Role | Stack | Use |
|---|---|---|
| Display | `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif` | headlines, illuminated initials, all-caps labels |
| Body | `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | paragraphs, nav, buttons |
| Mono | `"Courier New", Courier, monospace` | stats, marginalia, system readouts |

No web-font services — this is the same locally/system-available stack v1
already used (`CLAUDE.md` hard rule: no external font services).

## Lead lines (caming)

| Weight | px | Use |
|---|---|---|
| Hairline | 2px | tag pills, fine dividers |
| Standard caming | 4px | header/footer borders, card default |
| Heavy frame | 8px | rose window outer ring, hero frames |

## Components

- **`.pill` / `.btn` / `.badge`** — unchanged shapes (pill radius `47px`),
  now dark glass (`--panel-2`) with a `2px solid var(--lead)` line instead of
  a black line on white. Bright-background variants (`.btn-ember`, `.badge-
  sun`, `.pill.active`, `.pill.random`, ...) use the matching `*-ink` color
  for text, never `--parchment`.
- **`.card` / `.card-lg` / `.card-sm`** — dark glass gradient tile
  (`--panel-2` → `--panel`), lead border, and an asymmetric radius
  (`28px 28px 10px 10px`) so cards read as a cut pane of glass, not a rounded
  rectangle.
- **`.illuminated-cap`** — the drop-cap block used for the first letter of a
  hero headline. Added by `js/layout.js`'s `initIlluminatedCaps()` at load
  time by wrapping the first character of `.hero-title`/`.hero-title-lg` in a
  `<span>` — purely additive; a heading with JS disabled just renders as
  plain text, per the accessibility/degradation rule below.
- **`.rose-window`** — the four-color conic-gradient roundel used on the
  homepage hero, standing in for "all four glows visible at once, like a
  cathedral window."
- **`.portrait-frame`** — the arch-clipped (`clip-path: polygon(...)`)
  container for character full-height portraits. See **Portraits** below.
- **`.spoiler-card`** with `.sealing` / `.opening` — the CLASSIFIED /
  spoiler block. Sealed by default; `js/spoilers.js` plays a ~420ms
  `glaze-shut` / `glaze-open` clip-path animation instead of an
  expand/collapse, so it reads as lead closing over glass rather than an
  accordion.
- **`.shard-enter`** — generic entrance utility (`js/layout.js`'s
  `initShardAssembly()` adds it to cards/pills as they scroll into view via
  `IntersectionObserver`, with `--shard-i` staggering each element ~60ms
  apart). Elements are fully visible by default with no JS; this only adds
  motion on top.
- **`.shimmer`** — a very subtle (±2% opacity, mixed via `0.55↔0.9`), slow
  (4s) breathing loop for "glass catching light." Never a hard flash.

## Portraits

The brief calls for full-height, icon-flat, frontal stained-glass portraits
per character, with bespoke iconography for four of them:

- **Jayfeather** — looks past the viewer (blind), near-monochrome slate.
- **Starpaw** — the glass behind him has already cracked/come apart.
- **Steelpaw** — cold metallic tones against the otherwise warm glass.
- **Millie** — the warmest, calmest palette, and total unawareness.

**Scope decision made in this pass:** this implementation ships those four
as hand-built flat SVG stained-glass icons (`js/portraits.js`), not
photographic/AI-generated raster art — this session has no image-generation
tool available, and flat vector shapes with thick black leading are, if
anything, closer to the actual stained-glass reference than a photoreal
render would be. **The question of where final raster portraits come from
(commission / AI / collage) is still open and undecided** — per
`HANDOFF.md`, that's a human decision, not made here. The SVG icons are
production-safe placeholders: swapping in a real raster portrait later means
replacing the contents of `.portrait-frame`, nothing structural.

Every other roster character (Amberpaw, Nightpaw, Ashpaw, Rustpaw, Ivypool,
Berrynose) gets a generic frontal roundel-in-diamond placeholder tinted with
the page's ambient `--accent`, not a missing image — per the "must degrade
gracefully" rule below.

## Motion

| Token | Value |
|---|---|
| Shard assembly | ~900ms per element, staggered 60ms — cards/pills compose in on scroll |
| Cursor shimmer | 4s ease-in-out loop, ±2% opacity — never a full flash |
| Spoiler glaze / seal | 420ms ease — lead frame closes/opens over text |
| Page transition | ~800ms `--ease-glass` — per-section cross-document break/reform, see below |
| Reduced motion | all of the above → instant/no-op, via `prefers-reduced-motion: reduce` |

**Page-to-page transitions:** the brief describes a bespoke "break and
reform" animation per section (Roasts cracks and reassembles, Files
tiles in, Atlas folds like shutters, Herbs bleeds and resettles). Implemented
via the cross-document View Transitions API (`@view-transition { navigation:
auto; }` in `css/style.css`) — no router, no build step, no JS required.
Each section gets a named `::view-transition-old(root)` /
`::view-transition-new(root)` pair keyed off the *arriving* page's
`body[data-accent]` (that's the document whose stylesheet governs a
cross-document transition): Roasts fractures the outgoing view along jagged
`clip-path` cracks with a red `drop-shadow` glow and reverses on the way in;
Files reveals/hides in a stepped `mask-image` sweep (`steps(6, jump-end)`)
for a "tiling in" feel; Atlas does a `perspective`/`rotateY` shutter-fold
hinged on the left edge; Herbs blurs, oversaturates, and hue-shifts outward
like ink in water before resettling. All four run ~800ms on the existing
`--ease-glass` curve, a new `--t-transition` token in the 700–900ms band
next to the other motion tokens. The entire `@view-transition` rule (and
therefore the whole feature) lives inside
`@media (prefers-reduced-motion: no-preference)`, so it's never engaged —
not just visually neutralized — under reduced motion, and browsers without
cross-document view-transition support (Firefox, older Safari) simply don't
parse the at-rule and fall back to a plain instant navigation with zero
visual regression. Not testable in this environment (no way to drive a real
cross-document navigation across engines here); needs a human check in
Chrome/Edge (support exists) and Firefox/Safari (confirm graceful
degradation) before calling it done.

## Hard limits (carried over from `CLAUDE.md`, unchanged by this pass)

- HTML, CSS, and plain JS only. No build step, no npm, no frameworks, no
  animation libraries.
- No external font services.
- Routes and filenames unchanged; no new sections.
- Everything that moves stops under `prefers-reduced-motion: reduce`.
- Raster art must degrade: if an image fails to load, the page stays
  readable (this is why placeholders are inline SVG, not `<img>` with no
  `alt`/fallback).
