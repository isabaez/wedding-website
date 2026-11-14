'use client';
import { useRef, useEffect, useId, useState } from "react";
import "@styles/accordion-item.scss";

// Follows the APG accordion pattern (https://www.w3.org/WAI/ARIA/apg/patterns/accordion/): the button sits inside
// the heading and owns aria-expanded / aria-controls. Panels aren't role="region": the information page has 8, and the
// APG advises against region landmarks past about 6 panels. Items with disableToggle are always open, so they render a
// plain heading and no button.
export default function AccordionItem({
  title,
  content,
  disableToggle = false
 }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  // Track the content's height, not just its height when opened, so an open panel follows reflow (zoom, rotation,
  // a narrower window) instead of clipping its content.
  useEffect(() => {
    const content = contentRef.current;
    setHeight(content.clientHeight);
    const observer = new ResizeObserver(() => setHeight(content.clientHeight));
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  const titleText = (
    <span className="accordion-item__title">
      {title}
    </span>
  );

  return (
    <div className="accordion-item">
      {/* An always-open item without a title (the first one on /italy) gets no empty heading. */}
      {!(disableToggle && !title) && (
      <h2 className="accordion-item__heading">
        {disableToggle ? titleText : (
          <button
            id={buttonId}
            type="button"
            className="accordion-item__toggle"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen(!isOpen)}
          >
            {titleText}
            <span className="accordion-item__icon">
              {/* Same path as public/caret-down.svg, filled with the text colour. */}
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        )}
      </h2>
      )}

      <div
        id={disableToggle ? undefined : panelId}
        className={disableToggle
          ? "accordion-item__content-wrapper accordion-item__content-wrapper--static"
          : "accordion-item__content-wrapper"}
        style={disableToggle ? undefined : { height: isOpen ? `${height}px` : '0px' }}
        // A collapsed panel is only hidden by height: inert keeps its links out of the tab order and the
        // accessibility tree.
        inert={!disableToggle && !isOpen}
      >
        <div
          className="accordion-item__content"
          ref={contentRef}
        >
          {content}
        </div>
      </div>
    </div>
  )
}
