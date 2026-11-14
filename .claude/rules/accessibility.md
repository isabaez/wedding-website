---
paths:
  - "src/app/**/*.js"
  - "src/app/styles/**/*.scss"
---
# Accessibility patterns used here

- **Accordion** (`accordion-item.js`): the toggle is a `<button>` that is the only child of the heading; it carries
  `aria-expanded` (true/false) and `aria-controls` pointing at the panel's `id`. Enter and Space toggle it.
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/ (checked 2026-11-13)
- **Carousel** (the Swiper gallery): previous/next controls are native `<button>`s; the container has
  `aria-roledescription="carousel"` and a label without the word "carousel"; each slide is `role="group"` with
  `aria-roledescription="slide"` and a name. If it auto-rotates, add a pause button first in tab order and stop on
  focus or hover.
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/ (checked 2026-11-13)
- **Form labels** (`floating-label-input.js`): every control has a `<label for>` matching its `id`; hide a label
  visually only with a clip-based class, never `display: none`; don't replace labels with placeholders or `title`.
  Source: https://www.w3.org/WAI/tutorials/forms/labels/ (checked 2026-11-13)
