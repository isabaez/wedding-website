import { useSyncExternalStore } from "react";

// True while the visitor's OS asks for reduced motion. CSS transitions, even ones set inline from JavaScript, are
// already cut by the rule in base.scss; use this for motion CSS can't reach, or to change behaviour (the gallery
// sets Swiper's speed to 0 so slides switch at once instead of waiting for transitionend).
// The server render (static export) assumes false, and React re-renders with the real value after hydration.
const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener("change", onChange);
  return () => mediaQueryList.removeEventListener("change", onChange);
}

export default function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
