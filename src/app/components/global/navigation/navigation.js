import Link from "next/link";
import styles from "@components/global/navigation/navigation.module.scss";

export default function Navigation() {

  return (
    <nav className={styles.siteNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/information">Information</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/registry">Registry</Link>
        </li>
      </ul>
    </nav>
  )
}