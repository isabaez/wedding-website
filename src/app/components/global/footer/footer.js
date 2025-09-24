import Image from "next/image";
import styles from "@components/global/footer/footer.module.scss";

export default function Footer({
  transparent = false
 }) {

  return (
    <footer className={styles.footer }>
      <Image
        className={styles.footerLogo}
        src='/cherub-white.png'
        alt=""
        width={30}
        height={50}
      />
    </footer>
  )
}