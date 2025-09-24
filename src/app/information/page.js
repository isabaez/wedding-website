import Link from "next/link";
import Image from "next/image";
import styles from "@components/information/information.module.scss";

export default function InformationPage() {

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
          <br></br>
          <br></br>
          The garden is an intimate outdoor space, we will have a variety of seating options available to encourage mingling and dancing.
          <br></br>
          <br></br>
          Parking will be available at a nearby lot, only a 5 minute walk away from the venue.
        </p>
        <h2 className={styles.subheader}>Dress Code</h2>
        <p className={styles.text}>
          The dress code is evening garden party / cocktail attire. Please no shorts or denim.<br></br>
          <Link href="/">Dress Code Examples / Inspiration</Link>
        </p>

        <h2 className={styles.subheader}>Food & Drink</h2>
        <p className={styles.text}>
          Our appetizer table will feature bread, cheese, salad, and a variety of other snacks to pick at.
          For dinner, a showcase of two favorites of our Italian and Mexican heritage: <strong>pizza and tacos</strong>. Please note any dietary limitations while RSVPing.
          <br></br> 
          <br></br>
          The <strong>open bar</strong> will serve wine, beer, and a few signature cocktails, along with several alcohol-free options.
          <br></br>
          <br></br>
          All food and drinks will be served on a <strong>first come, first serve</strong> basis in a relaxed environment. There will be no assigned seating or wait staff.
        </p>

        <h2 className={styles.subheader}>Our Registry</h2>
        <p className={styles.text}>
          Visit our registry page <Link href='/registry'>here</Link>
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
          <li>La Quinta Inn & Suites</li> 
          <li>Red Roof Inn</li>
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
          <li>The Virgin Hotel (Right across the street from our apartment!)</li> 
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
    </div>
  );
}