// A live region for status and error messages that appear after the page loads. Screen readers only announce
// changes to a live region that was already in the page, so render <LiveRegion> unconditionally and put the message
// inside it when there is one (https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22,
// https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19).
//   urgent={false} (default): role="status", announced politely after what is being read (confirmations, progress).
//   urgent: role="alert", announced at once (errors that stop the user).
//   ref: the region's element, for a caller that sets its text directly instead of through children (ImageGallery,
//   which must not re-render mid-slide).
export default function LiveRegion({
  urgent = false,
  className,
  children,
  ref
 }) {
  return (
    <div
      ref={ref}
      role={urgent ? "alert" : "status"}
      className={className}
    >
      {children}
    </div>
  );
}
