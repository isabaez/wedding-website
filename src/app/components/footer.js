import Image from "next/image";
import styles from "@styles/footer.scss";

export default function Footer({
  invert = false
 }) {

  return (
    <footer className={invert ? "footer footer--inverted" : "footer"}>
      <Image
        className="footer__crest"
        src={invert ? '/crest-black.png' : '/crest-white.png'}
        alt=""
        width={200}
        height={200}
      />
    </footer>
  )
}