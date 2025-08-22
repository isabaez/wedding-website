import Image from "next/image";
import Link from "next/link";
import styles from "@components/home/home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Uri & Brianna Are Getting Married!</h1>
        <p className={styles.subheading}>May 2, 2026</p>
        <p className={styles.subheading}>Dallas, Texas</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
