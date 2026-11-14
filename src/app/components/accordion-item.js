'use client';
import { useRef, useEffect, useState } from "react";
import "@styles/accordion-item.scss";

export default function AccordionItem({
  title,
  content,
  disableToggle = false
 }) {
  const [activeState, setActiveState] = useState(false);
  const contentHeight = useRef(null)
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(contentHeight.current.clientHeight)
  }, [contentHeight, activeState])

  const toggleActiveState = () => {
    if (!disableToggle) {
      setActiveState(!activeState);
    }
  };

  return (
    <div 
      className={activeState ? "accordion-item is-open" : "accordion-item"}
    >
      <button
        className="accordion-item__toggle"
        disabled={disableToggle}
        onClick={toggleActiveState}
      >
        <h2 className="accordion-item__title h3">
          {title}
        </h2>
        {!disableToggle && (
          <span className="accordion-item__icon">
            {/* rendder public/caret-down.svg here */}
            <svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.8１８２１L4.１８１７９ ６．８１８２１C４．００６０５ ６．６４２４７ ４．００６０５ ６．３５７５５ ４．１８１７９ ６．１８１８１Z"
                fill="#FFF"
              />
            </svg>
          </span>
        )}
      </button>

      <div 
        className="accordion-item__content-wrapper"
        style={ (disableToggle || activeState) ? { height: height + 'px' } : { height: '0px' } }
      >
        <div 
          className="accordion-item__content"
          ref={contentHeight}
        >
          {content}
        </div>
      </div>
    </div>
  )
}