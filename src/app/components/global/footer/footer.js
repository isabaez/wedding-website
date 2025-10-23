import Image from "next/image";
import styles from "@components/global/footer/footer.module.scss";

export default function Footer({
  invert = false
 }) {

  return (
  <footer className={invert ? `${styles.footer} ${styles.inverted}` : styles.footer}>
      <Image
        className={styles.crest}
        src={invert ? '/crest-black.png' : '/crest-white.png'}
        alt=""
        width={200}
        height={200}
      />
    </footer>
  ) 
}