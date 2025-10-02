'use client';
import Link from "next/link";
import Image from "next/image";
import styles from "@components/dallas-rsvp/dallas-rsvp.module.scss";
import DallasRsvpForm from "@/app/components/dallas-rsvp-form/dallas-rsvp-form";

export default function DallasRsvpPage() {

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className="backLink"
        style={{color: '#fff'}}
      >
        <Image
          className='backLink__image'
          src='/spade-white.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className={"h1 " + styles.header}>
        R<span className={styles.headerLine}>SVP</span>
      </h1>
      <DallasRsvpForm/>
    </div>
  );
}