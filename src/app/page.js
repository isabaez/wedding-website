import Link from "next/link";
import Image from "next/image";
import styles from "@components/home/home.module.scss";
import Footer from "@components/global/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={"h1 " + styles.heading}>
          Brianna & Uriel <br />Are Getting Married
        </h1>
        <p className={styles.subheading}>May 2, 2026</p>
        <p className={styles.subheading}>Dallas, Texas</p>
        <div className={styles.ctaContainer}>
          <Link 
            href="/rsvp" 
            className="cta"
          >
            RSVP
          </Link>
        </div>
        <Image
          className={styles.cherub}
          src='/cherub-white.png'
          alt=""
          width={100}
          height={200}
        />
      </main>
      {/* <Footer 
        transparent={false}
      ></Footer> */}
    </div>
  );
}
