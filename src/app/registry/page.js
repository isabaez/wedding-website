import Link from "next/link";
import Image from "next/image";
import styles from "@components/registry/registry.module.scss";

export default function RegistryPage() {

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className="backLink"
        style={{color: '#fff'}}
      >
        <Image
          className='backLink__image'
          src='/arrow.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className={"h1 " + styles.header}>
        Registry
      </h1>
      <div className={styles.envelopeWrapper}>
        <Image
          className={styles.envelopeImage}
          src='/envelope.png'
          alt=""
          width={600}
          height={700}
        />
        <div className={styles.envelopeText}>
          Thank you so much for thinking of us.
          <br></br>
          <br></br>
          While we prefer contributions to our honeymoon fund, we have selected a curated list of items that we love for those who prefer to buy physical gifts.
          <br></br>
          <br></br>
          We can&#39;t wait to celebrate with you.
          <br></br>
          <br></br>
          <Link href='https://www.myregistry.com/giftlist/brianna-and-uri'>View Registry</Link>
        </div>
      </div>
    </div>
  );
}