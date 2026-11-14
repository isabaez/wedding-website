---
paths:
  - "src/app/**/*.js"
  - "src/app/styles/**/*.scss"
---
# Accessibility patterns used here

- **Accordion** (`accordion-item.js`): the toggle is a `<button>` that is the only child of the heading; it carries
  `aria-expanded` (true/false) and `aria-controls` pointing at the panel's `id`; the panel is `inert` while collapsed
  and has no `role="region"` (8 panels on /information; the APG advises against regions past about 6). Enter and
  Space toggle it. Always-open items (`disableToggle`) have no button, only the heading.
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/ (checked 2026-11-13)
- **Carousel** (the Swiper carousels: the /gallery page and `image-gallery.js`): the container has
  `aria-roledescription="carousel"` and a label without the word "carousel" (`ImageGallery` also gives it
  `role="region"`, which the label needs); each slide is `role="group"` with `aria-roledescription="slide"` and a
  name. The /gallery page has native previous/next `<button>`s. `ImageGallery` has none, by the dev's choice (#48):
  arrow keys move it, and clicking a side slide centres it (`slideToClickedSlide`), the single-pointer alternative to
  swiping (WCAG 2.5.7). Keep Swiper's Keyboard `pageUpDown` off so Page Up / Page Down still scroll the page. If a
  carousel auto-rotates, add a pause button first in tab order and stop on focus or hover.
  Source: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/ (checked 2026-11-13)
- **Focus indicator**: every `:focus-visible` element gets the `focus-ring` mixin (`_variables.scss`, applied in
  `base.scss`): a white outline over a black band, so it holds 3:1 on black and on light images. Never set
  `outline: none`; a visually hidden control (opacity 0, never `display: none`) puts `@include focus-ring` on its
  label. Leave room for the ring inside `overflow: hidden` containers.
  Source: https://www.w3.org/WAI/WCAG22/Techniques/css/C40 (checked 2026-11-14)
- **Live region** (`live-region.js`): a message that appears after load (an error, a confirmation) goes inside a
  `LiveRegion` that is already in the page, `urgent` (`role="alert"`) for errors and `role="status"` otherwise. When
  new content replaces the focused control (the RSVP thank-you), move focus to its heading with `tabIndex={-1}`.
  Source: https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19 and
  https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22 (checked 2026-11-14)
- **Reduced motion**: `base.scss` cuts every CSS transition and animation under `prefers-reduced-motion: reduce`, so
  CSS motion needs nothing extra. Motion CSS can't reach (`requestAnimationFrame`, Web Animations, a library's own
  timing such as Swiper's `speed`) checks `usePrefersReducedMotion()`. Scroll effects done with `position: fixed`
  (`ParallaxBreak`) switch to `position: absolute` under reduced motion. Never auto-play motion longer than 5 seconds
  without a pause control.
  Source: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html (checked 2026-11-14)
- **Form labels** (`floating-label-input.js`): every control has a `<label for>` matching its `id`; hide a label
  visually only with a clip-based class, never `display: none`; don't replace labels with placeholders or `title`.
  Source: https://www.w3.org/WAI/tutorials/forms/labels/ (checked 2026-11-13)
