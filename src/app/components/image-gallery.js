'use client';
import { useId, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import "@styles/image-gallery.scss";
import usePrefersReducedMotion from "@hooks/use-prefers-reduced-motion";
import LiveRegion from "@components/live-region";

// Swiper's loop needs more slides than are in view (3 above 1024px, plus one on each side to loop into), so a
// shorter list is repeated until it has at least this many.
const MIN_LOOP_SLIDES = 6;

// The gap between slides, in px. Keep in step with --gap in image-gallery.scss (Swiper's spaceBetween takes a number,
// not a CSS variable); the breakpoint matches its media query.
const GAP_SMALL = 20;
const GAP_LARGE = 20;
const LARGE_BREAKPOINT = 1025;
const BREAKPOINTS = { [LARGE_BREAKPOINT]: { spaceBetween: GAP_LARGE } };

// A full-width carousel of 4:3 images that always loops, with an optional centred caption under each image and a
// thin progress bar under the slides. Up to 1024px one slide is in view with its neighbours peeking at the sides;
// above that, three. Swiping, clicking a side slide, and the left and right arrow keys while the carousel has focus
// move it; there are no previous/next buttons and no autoplay.
// slides: [{ src, alt, caption? }]. label: the carousel's accessible name (don't include the word "carousel").
export default function ImageGallery({ slides, label }) {
  const progressFillRef = useRef(null);
  const swiperRef = useRef(null);
  const announcementRef = useRef(null);
  const hintId = useId();
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
    const position = swiper.realIndex % slideCount;
    progressFillRef.current.style.transform = `scaleX(${(position + 1) / slideCount})`;
    // Announce the slide now in the centre. Swiper's own aria-live on the slide wrapper is turned off (onSwiper): in
    // loop mode it moves a slide from one end to the other on every change, and screen readers would read that one.
    announcementRef.current.textContent = `${position + 1} of ${slideCount}: ${slides[position].alt}`;
  };

  // Arrow keys move only the carousel that has focus (Tab reaches it), not every carousel in view as Swiper's Keyboard
  // module would: /italy has several, often two on screen at once. Other keys, Page Up / Down included, stay with the
  // page.
  const handleKeyDown = (event) => {
    // Leave modified arrows to the browser: Alt+Left and Cmd+Left are Back, the only way off /italy.
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      swiperRef.current?.slidePrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="image-gallery" onKeyDown={handleKeyDown}>
      <Swiper
        className="image-gallery__slider"
        modules={[A11y]}
        // Focusable, so a keyboard user can Tab to it and use the arrow keys (handleKeyDown above).
        tabIndex={0}
        aria-describedby={hintId}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.wrapperEl.setAttribute("aria-live", "off");
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={GAP_SMALL}
        breakpoints={BREAKPOINTS}
        // base.scss's reduced-motion rule already cuts Swiper's inline transition-duration; speed 0 also makes Swiper
        // switch slides at once instead of waiting for transitionend. 300 is Swiper's default.
        speed={prefersReducedMotion ? 0 : 300}
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
                width={1200}
                height={900}
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
      <p id={hintId} className="image-gallery__hint">
        Use the left and right arrow keys to see more photos.
      </p>
      <LiveRegion className="image-gallery__announcement" ref={announcementRef} />
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
