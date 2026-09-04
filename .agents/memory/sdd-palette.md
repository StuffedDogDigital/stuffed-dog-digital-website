---
name: SDD palette & layout rules
description: Stuffed Dog Digital site color usage rules and the sticky-pin overflow gotcha
---

## Color usage (user-locked)
- Bone #F2F0E9 canvas, black spine nav, charcoal #3A3A3A, cool gray #6C7075.
- Deep green #1E5F4A: buttons, eyebrow labels, section backgrounds ONLY.
- **Never use green for inline text emphasis** — user rejected it explicitly. All text-emphasis highlights use bright blue #0A6CFF.
- Cyan #19E6E6: interaction only (active nav pip, hovers, focus rings, motto).
- Watermelon red #FC0200: scroll-film ending + "Refreshingly human." handoff section.

**Why:** user gave explicit direction ("Green should not be used to highlight").

## Sticky-pin gotcha
`overflow-x: hidden` on body/#root or any ancestor breaks `position: sticky` for all pinned scroll sections (TheStory, ScrollFilm). Use `overflow-x: clip` instead.

**How to apply:** any mobile/overflow fix on this site must use `clip`, never `hidden`.
