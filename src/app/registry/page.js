import Link from "next/link";
import Image from "next/image";
import "@styles/registry.scss";

export default function RegistryPage() {

  return (
    <div className="Registry">
      <Link
        href="/"
        className="backLink"
        style={{ color: '#fff' }}
      >
        <Image
          className='backLink__image'
          src='/spade-white.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className="Registry__header h1">
        Registry
      </h1>
      <div className="Registry__envelope-wrapper">
        <Image
          className="Registry__envelope-image"
          src='/envelope.png'
          alt=""
          width={600}
          height={700}
        />
        <Image
          className="Registry__crest-image"
          src='/crest-black.png'
          alt=""
          width={200}
          height={200}
        />
        <div className="Registry__envelope-text">
          Thank you so much for thinking of us.
          <br></br>
          <br></br>
          While we prefer contributions to our honeymoon fund, we have selected a curated list of items that we love for those who prefer to buy physical gifts.
          <br></br>
          <br></br>
          We can&#39;t wait to celebrate with you.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="Registry__cta-wrapper">
            <Link
              className="Registry__cta"
              href='https://www.myregistry.com/giftlist/brianna-and-uri'
              target="_blank"
            >
              <Image
                className="Registry__cta-decoration"
                src='/flower-left.png'
                alt=""
                width={100}
                height={100}
              />
              <span className="Registry__cta-text h2">
                Our Registry
              </span>
              <Image
                className="Registry__cta-decoration"
                src='/flower-right.png'
                alt=""
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}