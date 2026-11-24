---
name: StickerUp by Publistudio
description: Stickers de verdad sobre un mostrador negro: ámbar, blanco troquelado y rotulación italic de taller.
colors:
  amber: "#FFB806"
  amber-deep: "#E19F2A"
  ink: "#000000"
  night: "#111111"
  night-line: "#2A2A2A"
  paper: "#FFFFFF"
  mist: "#F5F4F1"
  line: "#E2E0DA"
  soft-dark: "#4A4A4A"
  soft-light: "#BDBDBD"
typography:
  display:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontFeature: "italic, uppercase"
  headline:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.6
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 300
    lineHeight: 1.375
  label:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  chip: "16px"
  box: "22px"
  bubble: "26px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "96px"
  gutter-mobile: "20px"
  gutter-desktop: "40px"
  container: "1280px"
components:
  button-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13.6px 30.4px"
    height: "52px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13.6px 30.4px"
    height: "52px"
  card-product:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.box}"
    padding: "32px"
  card-product-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
  card-product-deep:
    backgroundColor: "{colors.amber-deep}"
    textColor: "{colors.ink}"
  card-product-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
  chip-order:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "4px 40px 4px 16px"
  chip-order-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
  panel-message:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    rounded: "{rounded.bubble}"
    padding: "32px 24px 24px"
---

# Design System: StickerUp by Publistudio

## Overview

**Creative North Star: "The Die-Cut Counter"**

The page is the front counter of a sticker shop that is also a signage studio. Black is the counter, white is the backing paper, amber is the vinyl. Everything that matters is either a real sticker (white border, soft offset shadow, slightly rotated) or a surface cut like one: sections meet along a row of triangular die-cut teeth, cards are 22px tiles, buttons are pills wearing a white cut ring. It is recognisable with the text removed.

Density is generous and phone-first. Sections alternate black, amber, white, black, amber, white, mist, black so the eye gets a rest between loud moments, and each section carries one big italic headline and one idea. Headlines shout in Rubik 900 italic capitals; everything else speaks quietly in Hanken Grotesk Light. The voice is the workshop's: direct, voseo, no adjectives where a material would do.

The system rejects the torn-paper look, hand-lettered script and yellow-with-blue palettes, and it rejects the generic row of equal cards under a headline (the product grid is deliberately uneven, one tall tile beside four others).

**Key Characteristics:**
- Black ground, white and amber sections, one chromatic color (amber) plus its deep sibling.
- Stickers are drawn SVG objects with a thick white border and a soft drop shadow, never photographs or emoji.
- Die-cut teeth as the section seam; lightning bolt as the single repeated mark.
- Pills for actions, 22px tiles for content, no sharp rectangles except section bands.
- Motion is one gesture: things get stuck on, lift on hover, and slide as tape.

## Colors

Three voices only: black and white do the work, amber is the action and the field, deep amber is a quiet second tile. No tints of amber in UI beyond the holographic sticker gradient.

### Primary
- **Sticker Amber** (#FFB806): the logo color. Fills the thin top bar, the product tape, the Steps section, primary buttons, the highlighted word in a headline, focus ring, and selection. Text on it is always black.

### Secondary
- **Deep Amber** (#E19F2A): one product tile and the magnet sticker body, plus the holographic gradient. Never a text color and never a button fill.

### Neutral
- **Cut-Vinyl Black** (#000000): page ground, header, hero, order section, footer, and all text on light surfaces.
- **Night Panel** (#111111): the one raised surface on black (message bubble, notes field).
- **Night Hairline** (#2A2A2A): borders and the ring around night surfaces and the footer rule.
- **Backing Paper White** (#FFFFFF): light sections, die-cut rings, sticker borders, text on black.
- **Mist Sheet** (#F5F4F1): quiet product tiles and the FAQ band.
- **Sheet Line** (#E2E0DA): defined as a token, reserved for hairlines on light surfaces; not yet used in the build.
- **Soft Graphite** (#4A4A4A): secondary text on white and mist.
- **Soft Silver** (#BDBDBD): secondary text on black.

### Named Rules
**The Amber-Is-Never-Text-On-White Rule.** Amber on black is a headline highlight; amber on white is only ever a fill under black text. Contrast (AA) is the reason, and PRODUCT.md records it as a commitment.

**The Hard-Seam Rule.** Sections change color completely at a die-cut edge. No gradients between sections.

## Typography

**Display Font:** Rubik (italic, weights 800 and 900; open stand-in for Coolvetica Bold Italic, with system-ui fallback)
**Body Font:** Hanken Grotesk (300 default, 400 and 500 for emphasis, 700 loaded; with system-ui fallback)

**Character:** A fat, slanted, uppercase sign-painter voice over a light, neutral grotesk. The contrast of 900 against 300 is the whole pairing.

### Hierarchy
- **Display** (900 italic uppercase, clamp(3.4rem, 9.4vw, 6rem), 0.95): hero title and closing call (clamp 3rem to 6rem). The hero caps at 96px.
- **Headline** (900 italic uppercase, clamp(2.6rem, 6vw, 4.5rem), 0.95): every section h2, max-width 12 to 16ch.
- **Title** (900 italic uppercase, 1.875 to 2.25rem on small tiles, 3rem to 3.75rem on the tall tile, 0.95): product and finish names, step titles at 1.5rem.
- **Lead** (300, 1.25rem to 1.5rem, 1.375): hero subtitle and section intros, 34 to 46ch.
- **Body** (300, 1.0625rem, 1.6): running text; secondary copy goes to 400 at 1rem to 1.125rem; FAQ answers 400 at 1.125rem, max 60ch.
- **Label** (800 italic uppercase, 1.05rem, -0.01em): buttons and chips; the order sentence reuses it at 800 italic, not uppercase, clamp(1.45rem, 3.3vw, 2.25rem).

### Named Rules
**The Two-Weights Rule.** Display is 900 (labels 800), body is 300. Nothing sits in between; emphasis inside body text steps up to 400 or 500, never to bold display.

**The Balance Rule.** Headings use text-wrap: balance and paragraphs text-wrap: pretty; headlines break by design, with a max-width in ch, not by accident.

## Layout

A single 1280px container (20px gutters on phones, 40px from 768px up) holding full-bleed colored section bands. Vertical rhythm is 96px (py-24) between content and band edge, 112px on the last band before a dark seam, with 48 to 64px between a headline block and its content. The hero fills the viewport minus the bar and header (100svh minus 6.75rem), a 1.05fr/1fr split with text left and a rotated sticker cluster right; it stacks on phones with the cluster below. Products use a 6-column grid at md: one tall tile (3 cols, 2 rows) beside two 3-col tiles, then three 2-col tiles, with 20px gaps. Steps and Finishes are 1, 2, then 4 columns. The FAQ is 1fr/1.6fr with the title left. The order composer is 1.35fr/1fr: sentence left, message and send button right. Breakpoints used: 768px and 1024px; the header nav appears at 768px.

## Elevation & Depth

Depth is physical, not atmospheric: every raised thing is a sticker on a surface. The recurring recipe is a hard-edged ring (a spread-only box-shadow in white, or black on white surfaces) plus one soft offset shadow pushed down and to the right (6px 10px). Flat surfaces (tiles, sections, panels) carry no shadow at all; the one exception is the night panel, which gets a 3px hairline ring and nothing else.

### Shadow Vocabulary
- **Die-cut ring, amber button** (`box-shadow: 0 0 0 4px #fff, 6px 10px 18px rgba(0,0,0,.45)`): primary buttons. The ink button uses .35 alpha.
- **Sticker drop** (`filter: drop-shadow(6px 10px 12px rgba(0,0,0,.5))`): every SVG sticker.
- **Chip ring** (`0 0 0 3px #fff, 4px 6px 10px rgba(0,0,0,.45)`): order chips and inputs; step badges use the same shape at .3 alpha.
- **Black ring on white** (`0 0 0 5px #000, 6px 10px 16px rgba(0,0,0,.25)`): finish swatches, where a white ring would vanish.
- **Focus** (`outline: 3px solid #000; outline-offset: 2px; box-shadow: 0 0 0 6px #ffb806`): a double ring that reads on black, white and amber.

### Named Rules
**The Sticker-Not-Card Rule.** Only things that are stickers (buttons, chips, badges, swatches, SVG art) get a ring and an offset shadow. Tiles, bands and panels stay flat.

**The Ring-Contrasts-The-Ground Rule.** The ring is white on dark or amber grounds and black on white ones.

## Shapes

Round and cut. Actions are full pills (999px); chips are 16px; content tiles are 22px; the message bubble is 26px with one tight 6px corner at bottom left, like a speech tail. Sections are rectangular bands separated by a die-cut edge: a 20px row of 40px-wide downward triangles, masked from an inline SVG and filled with the next section's color (the --cut variable). The seam hangs 19px past its section. Sticker silhouettes are drawn objects (bolt, circle, label with a peeled corner, rounded square with dashed edge, holographic disc, magnet) each with a 12 to 24px white border. The lightning bolt is the only repeated glyph: in the tape, on the circular and holographic stickers, and as the troquelado shape.

The brand book's cut-corner box is not used on tiles in the shipped build; tiles are rounded. The peeled-corner label sticker is the only cut-corner form that landed.

## Components

### Buttons
- **Shape:** full pill (999px), min-height 52px (44px in header and cards), 800 italic uppercase label.
- **Amber (primary):** amber fill, black text, 4px white ring and soft offset shadow; padding 13.6px by 30.4px. Used for every WhatsApp action on black and the Send button.
- **Ink:** black fill, white text, same ring at lower alpha; used on light tiles where amber would clash.
- **Ghost:** transparent, 3px inset currentColor outline; the secondary action on black.
- **Hover / Focus:** lifts translate(-2px, -3px) and tilts -1deg over .25s with an expo-out curve; active presses down 1px; focus is the double ring. Reduced motion removes the transition.

### Product Cards
- **Corner Style:** 22px; padding 24px on phones, 32px at sm.
- **Background:** one of five flat tones: black, amber, mist, deep amber, white with a 3px black inset ring. The tall tile is black.
- **Content:** a rotated SVG sticker pinned top-right, name in title style, one-line blurb, finishes joined with a middle dot, one "Pedir" button (amber on the black tile, ink elsewhere).

### Order Sentence (signature)
The order form is a fill-in sentence set in 800 italic: "Quiero [100] [troquelados] de [5 cm] en acabado [mate]". Each blank is a native select styled as a chip (amber for numbers and sizes, white for product and finish) with a white ring, a chevron drawn in SVG, and optional free inputs for custom values. Beside it a night-panel bubble shows the exact message, with the matching sticker leaning over its top edge, and the amber Send button below.

### Steps
Four columns under a dashed 3px black top rule; each has a black numbered circle in amber with the badge ring, a title and a short line.

### Finishes
Four 160px round swatches, each ringed in 5px black with an offset shadow, drawn in CSS (matte, glossy streak, checker with dashed cut line, holographic conic gradient).

### FAQ
Native details in a stack with 3px black rules; the toggle is a black circle with an amber plus that rotates 45 degrees when open.

### Navigation
Sticky black header (72px, 95% opacity with blur), logo left at 56px high, four text links in 400 weight that turn amber on hover from 768px, amber WhatsApp button right. Phones show logo and button only. Above it, a one-line amber bar in black 500-weight small text.

### Product Tape
An amber band of 800 italic uppercase product names separated by black bolts, scrolling at 38s linear and pausing on hover.

### Sticker Set
Six inline SVG stickers (troquelado bolt, circular badge, label, transparent, holographic, magnet) on a 200-unit grid, white-bordered, with the soft drop shadow. In the hero they land with a one-time "stick" animation (.9s, staggered .05 to .54s).

## Do's and Don'ts

### Do:
- **Do** put WhatsApp on every action: each button carries a prefilled message; the number lives in one config file.
- **Do** alternate section grounds (hero black, tape amber, products white, order black, steps amber, finishes white, FAQ mist, closing black) and join them with the die-cut edge in the incoming section's color.
- **Do** draw new products as SVG stickers with a white border and the (6px 10px 12px) drop shadow, tilted 4 to 12 degrees.
- **Do** keep text on amber black, text on black white or Soft Silver (#BDBDBD), and secondary text on white Soft Graphite (#4A4A4A).
- **Do** keep touch targets at 44px minimum and honor reduced motion by stopping the tape, the landing animation and the button transition.
- **Do** set every headline in 900 italic uppercase with 0.95 line-height and a ch-based max-width.

### Don't:
- **Don't** put amber text on white or mist.
- **Don't** put rings or offset shadows on tiles, bands or panels; they belong to stickers.
- **Don't** use hard (zero-blur) offset shadows; the shadow is soft.
- **Don't** use torn-paper edges, script lettering or a blue companion to the amber.
- **Don't** use photographs, stock imagery, invented reviews, figures or prices; show the product as drawn stickers and materials.
- **Don't** line up identical cards in a row under a headline; vary tile size and tone.
- **Don't** set body copy above weight 400 or display below 800.
