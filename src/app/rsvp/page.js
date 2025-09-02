'use client';
import Link from "next/link";
import styles from "@components/dallas-rsvp/dallas-rsvp.module.scss";
import DallasRsvpForm from "@/app/components/dallas-rsvp-form/dallas-rsvp-form";

export default function DallasRsvpPage() {

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={styles.backLink}
      >
        &lt; Back to Home
      </Link>
      <h1 className={styles.header}>
        RSVP
      </h1>
      <DallasRsvpForm/>
    </div>
  );
}