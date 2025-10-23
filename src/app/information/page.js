import Link from "next/link";
import Image from "next/image";
import styles from "@components/information/information.module.scss";
import Footer from "@components/global/footer/footer";

export default function InformationPage() {

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className="backLink"
        style={{color: "#fff"}}
      >
        <Image
          className="backLink__image"
          src="/spade-white.png"
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className={"h1 " + styles.header}>
        Information
      </h1>
      <div className={styles.content}>
        <h2 className={styles.subheader}>The Event</h2>
        <p className={styles.text}>
          We will be celebrating our legal marriage on Saturday, May 2, 2026 in Hutchins, Texas. The party will begin at 6:00pm with an open bar, followed by dinner and speeches, cake (!!!), dancing to our favorite DJ, and unlimited photobooth pics. We can&#39;t wait to celebrate with you!
        </p>
        <h2 className={styles.subheader}>The Venue</h2>
        <p className={styles.text}>
          The Kendall home is located 15 minutes south of downtown Dallas (roughly 40 minutes from DFW airport). The exact address can be found on your invitation, or by reaching out to us directly via text or email at <Link href="mailto:briurixo@gmail.com">briurixo@gmail.com</Link>.
          <br></br>
          <br></br>
          The garden is an intimate outdoor space, so parking will be available at a nearby lot (less than a 5 minute walk away).
        </p>
        <h2 className={styles.subheader}>Dress Code</h2>
        <p className={styles.text}>
           Cocktail attire/evening garden party. Please no shorts or denim. For inspiration, check out these Pinterest boards:
          <br></br>
          <Link href="/">Dress Code Examples / Inspiration</Link>
        </p>

        <h2 className={styles.subheader}>Food & Drink</h2>
        <p className={styles.text}>
           We&#39;ll have a variety of salads and appetizers. For dinner, a showcase of two favorites from our mixed heritage: pizza and tacos. Please note any dietary limitations while RSVPing.
          <br></br> 
          <br></br>
          The open bar will serve beer, wine, signature cocktails, and alcohol-free options.
          <br></br>
          <br></br>
          All food and drinks will be served buffet-style.
        </p>

        <h2 className={styles.subheader}>Our Registry</h2>
        <p className={styles.text}>
          Visit our <Link href="/registry">registry page here</Link>
        </p>

        <h2 className={styles.subheader}>Accommodations</h2>
        <p className={styles.text}>
          If you&#39;re visiting us from out of town, there are plenty of hotel options within driving distance. We don&#39;t have any room blocks, so you&#39;ll need to book directly with the hotel you choose.
          <br></br>
          Below are some recommendations to get you started!
        </p>
        
        <p className={styles.listHeader}>
          Closest to the venue (5 min drive):
        </p>
        <ul className={styles.list}>
          <li>
            <Link href="https://www.wyndhamhotels.com/laquinta/hutchins-texas/la-quinta-dallas-hutchins/overview">
              La Quinta Inn & Suites
            </Link>
          </li> 
          <li>
            <Link href="https://www.redroof.com/property/tx/hutchins/rri611">
              Red Roof Inn
            </Link>
          </li>
        </ul>

        <p className={styles.listHeader}>
          Closest to DFW Airport (DFW):
        </p>
        <ul className={styles.list}>
          <li>La Quinta Inn & Suites</li> 
          <li>Red Roof Inn</li>
        </ul>

        <p className={styles.listHeader}>
          Closest to Love Field Airport (DAL):
        </p>
        <ul className={styles.list}>
          <li>La Quinta Inn & Suites</li> 
          <li>Red Roof Inn</li>
        </ul>
        
        <p className={styles.listHeader}>
          Our Picks
        </p>
        <ul className={styles.list}>
          <li>
            <Link href="https://virginhotels.com/dallas/">
            The Virgin Hotel (Right across the street from our apartment!)
            </Link>
          </li> 
          <li>Omni Las Colinas (Beautiful hotel near DFW airport)</li>
          <li>The Westin Downtown Dallas (Located right in downtown amongst many attractions)</li>
        </ul>


        <h2 className={styles.subheader}>Dallas Tips</h2>
        <p className={styles.text}>
          Dallas is lovely in the spring. Check out some of our favorite attractions while you&#39;re here!
        </p>
        <p className={styles.listHeader}>
            Museums, Parks, and Attractions
          </p>
          <ul className={styles.list}>
            <li>
              <Link href="https://www.dallasarboretum.org/">
                Dallas Arboretum
              </Link>
            </li> 
            <li>
              <Link href="https://dma.org/">
                Dallas Museum of Art
              </Link>
            </li>
            <li>
              <Link href="https://www.fortworthstockyards.org/">
                Fort Worth Stockyards
              </Link>
            </li>
            <li>Klyde Warren Park</li>
            <li>Sixth Floor Museum</li>
          </ul>
          <p className={styles.listHeader}>
            Our fav local food options
          </p>
          <ul className={styles.list}>
            <li>Jimmy&#39;s Food Store</li> 
            <li>Tacos La Banqueta Puro DF</li>
            <li>Tacos El Si Hay</li>
          </ul>
          <p className={styles.listHeader}>
            World Famous BBQ & Steakhouses
          </p>
          <ul className={styles.list}>
            <li>Terry Black&#39;s BBQ</li> 
            <li>Al Biernat&#39;s</li>
            <li>Pappas Bros</li>
          </ul>
          <p className={styles.listHeader}>
            Bars
          </p>
          <ul className={styles.list}>
            <li>Bowen House</li> 
            <li>Katy Trail Ice House</li>
            <li>Double D&#39;s</li>
          </ul>
          <p className={styles.listHeader}>
            Coffee & Sweet Treats
          </p>
          <ul className={styles.list}>
            <li>Village Baking Co.</li>
            <li>LDU Coffee To Go</li>
            <li>Bottolino Gelato</li>
          </ul>
      </div>
      <Footer/>
    </div>
  );
}