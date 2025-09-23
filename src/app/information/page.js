import Link from "next/link";
import styles from "@components/information/information.module.scss";

export default function InformationPage() {

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className="backLink"
        style={{color: '#fff'}}
      >
        &lt; Back Home
      </Link>
      <h1 className={"h1 " + styles.header}>
        Information
      </h1>
      <div className={styles.content}>
        <h2 className={styles.subheader}>The Event</h2>
        <p className={styles.text}>
          We will be hosting a celebration of our marriage on Saturday, May 2, 2026 in Hutchins, Texas 
          at the garden of the Kendall family home. The party will begin at 6:00pm with an open bar and appetizers,
          followed by dinner, speeches, cake cutting, dancing to the tunes of our favorite DJ, 
          and unlimited photobooth pics. We can&#39;t wait to celebrate with you!
        </p>
        <h2 className={styles.subheader}>The Venue</h2>
        <p className={styles.text}>
          The Kendall family home is located 20 minutes south of downtown Dallas (roughly 45 minutes from DFW airport). 
          The exact address can be found on your invitation, or by reaching out to us directly via text or email at <Link href="mailto:briurixo@gmail.com">briurixo@gmail.com</Link>.
          Parking will be available at a nearby lot, only a 5 minute walk away from the venue.
          The garden is an intimate outdoor space, we will have a variety of seating options available to encourage mingling and dancing.
        </p>
        <h2 className={styles.subheader}>Dress Code</h2>
        <p className={styles.text}>
        </p>

        <h2 className={styles.subheader}>Food & Drink</h2>
        <p className={styles.text}>
          
        </p>

        <h2 className={styles.subheader}>Our Registry</h2>
        <p className={styles.text}>
          
        </p>

        <h2 className={styles.subheader}>Accommodations</h2>
        <p className={styles.text}>
          
        </p>

        <h2 className={styles.subheader}>Dallas Tips</h2>
        <p className={styles.text}>
          
        </p>
      </div>
    </div>
  );
}