import Image from "next/image";
import "@styles/parallax-break.scss";

const HEADING_TAGS = { 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" };

// A full-screen break in the page: the image sits fixed behind it, shows at full screen height while the break is in
// view, and the content around it slides back over it on scroll. Place it outside any narrow content column so it
// spans the screen. No JavaScript: the window is CSS (a fixed layer clipped to the section, see parallax-break.scss).
// src: the image in public/ (a compressed .webp about 2400px wide). alt: "" by default (decorative).
// objectPosition: which part of the image stays in view when the screen's shape crops it (CSS object-position).
// heading: optional text centred over the image in the script font, over a dark underlay so white text stays readable;
// without it there's no underlay. headingLevel: 2–6, to fit the page's outline. underlayOpacity: 0–1, default 0.45,
// the lowest that keeps white text at 3:1 over a white area of a photo; go lower only for dark images.
export default function ParallaxBreak({
  src,
  alt = "",
  objectPosition = "center",
  heading,
  headingLevel = 2,
  underlayOpacity = 0.45,
}) {
  const HeadingTag = HEADING_TAGS[headingLevel] ?? "h2";

  return (
    // A <div>, not a <section>: the break carries no content of its own, so it shouldn't risk being a landmark.
    <div
      className="parallax-break"
      style={heading ? { "--underlay-opacity": underlayOpacity } : undefined}
    >
      <div className="parallax-break__layer">
        <Image
          className="parallax-break__image"
          src={src}
          alt={alt}
          fill={true}
          sizes="100vw"
          style={{ objectPosition }}
        />
        {heading && <div className="parallax-break__underlay" />}
      </div>
      {heading && (
        <HeadingTag className="parallax-break__heading">
          {heading}
        </HeadingTag>
      )}
    </div>
  );
}
