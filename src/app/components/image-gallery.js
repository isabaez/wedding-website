'use client';
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "@styles/image-gallery.scss";
import usePrefersReducedMotion from "@hooks/use-prefers-reduced-motion";

// Swiper's loop needs more slides than are in view (3 above 1024px, plus one on each side to loop into), so a
// shorter list is repeated until it has at least this many.
const MIN_LOOP_SLIDES = 6;

// The gap between slides, in px. Keep in step with --gap in image-gallery.scss (Swiper's spaceBetween takes a number,
// not a CSS variable); the breakpoint matches its media query.
const GAP_SMALL = 16;
const GAP_LARGE = 32;
const LARGE_BREAKPOINT = 1025;
const BREAKPOINTS = { [LARGE_BREAKPOINT]: { spaceBetween: GAP_LARGE } };
// Arrow keys move the carousel while it's in view. Page Up / Page Down stay with the page: Swiper would otherwise
// take them, and a reader paging down /italy would get stuck cycling slides.
const KEYBOARD = { enabled: true, onlyInViewport: true, pageUpDown: false };

// A full-width carousel of 5:4 images that always loops, with an optional centred caption under each image and a
// thin progress bar under the slides. Up to 1024px one slide is in view with its neighbours peeking at the sides;
// above that, three. Swiping, arrow keys (Keyboard module) and clicking a side slide move it; there are no
// previous/next buttons and no autoplay.
// slides: [{ src, alt, caption? }]. label: the carousel's accessible name (don't include the word "carousel").
export default function ImageGallery({ slides, label }) {
  const progressFillRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const slideCount = slides.length;

  if (slideCount === 0) {
    return null;
  }

  const repeats = Math.max(1, Math.ceil(MIN_LOOP_SLIDES / slideCount));
  const renderedSlides = Array.from({ length: repeats }, (unused, copy) =>
    slides.map((slide, position) => ({ ...slide, position, isCopy: copy > 0 }))
  ).flat();

  // The progress bar follows the real slide, so it fills once per pass through the list (copies included) and
  // resets when the loop wraps. It's drawn here rather than with Swiper's progressbar pagination, whose total would
  // count the copies, and set straight on the element: a React re-render on every slide change hands Swiper new
  // props mid-transition, and it then sometimes stops responding to the next swipe or key press.
  const updateProgress = (swiper) => {
    const progress = ((swiper.realIndex % slideCount) + 1) / slideCount;
    progressFillRef.current.style.transform = `scaleX(${progress})`;
  };

  return (
    <div className="image-gallery">
      <Swiper
        className="image-gallery__slider"
        modules={[A11y, Keyboard]}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={GAP_SMALL}
        breakpoints={BREAKPOINTS}
        // base.scss's reduced-motion rule already cuts Swiper's inline transition-duration; speed 0 also makes Swiper
        // switch slides at once instead of waiting for transitionend. 300 is Swiper's default.
        speed={prefersReducedMotion ? 0 : 300}
        keyboard={KEYBOARD}
        a11y={{
          // A region, so screen readers announce the label and "carousel" (both are ignored on a plain div).
          containerRole: "region",
          containerRoleDescriptionMessage: "carousel",
          containerMessage: label,
          itemRoleDescriptionMessage: "slide",
          // Slides are labelled below by their place in the real list; Swiper's own label would count the copies.
          slideLabelMessage: "",
        }}
        // Clicking or tapping a neighbouring slide brings it to the centre: the single-pointer alternative to
        // swiping (WCAG 2.5.7), since the carousel has no previous/next buttons.
        slideToClickedSlide={true}
        onRealIndexChange={updateProgress}
      >
        {renderedSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="image-gallery__slide"
            aria-label={`${slide.position + 1} of ${slideCount}`}
            // Copies exist only so the loop works: screen readers get each image once. They hold nothing focusable;
            // if slides ever get links or buttons, copies need inert as well.
            aria-hidden={slide.isCopy || undefined}
          >
            <figure className="image-gallery__figure">
              <Image
                className="image-gallery__image"
                src={slide.src}
                alt={slide.alt}
                width={1000}
                height={800}
                sizes={`(min-width: ${LARGE_BREAKPOINT}px) 33vw, 100vw`}
              />
              {slide.caption && (
                <figcaption className="image-gallery__caption">
                  {slide.caption}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="image-gallery__progress" aria-hidden="true">
        <span
          className="image-gallery__progress-fill"
          ref={progressFillRef}
          style={{ transform: `scaleX(${1 / slideCount})` }}
        />
      </div>
    </div>
  );
}
