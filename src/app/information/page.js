import Link from "next/link";
import Image from "next/image";
import Footer from "@components/footer";
import AccordionItem from "@components/accordion-item";
import "@styles/information.scss";

export default function InformationPage() {

  return (
    <div className="Information">
      <Link
        href="/"
        className="back-link"
      >
        <Image
          className="back-link__image"
          src="/spade-white.png"
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className="Information__header h1">
        Information
      </h1>
      <div className="Information__content">
        <AccordionItem
          title="The Event"
          content={
            <p>
              We will be celebrating our legal marriage on Saturday, May 2, 2026 in Hutchins, Texas. The party will begin at 6:00pm with an open bar, followed by dinner and speeches, cake (!!!), dancing to our favorite DJ, and unlimited photobooth pics. We can&#39;t wait to celebrate with you!
            </p>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="The Venue"
          content={
            <p>
              The Kendall home is located 15 minutes south of downtown Dallas (roughly 40 minutes from DFW airport). The exact address can be found on your invitation, or by reaching out to us directly via text or email at <a href="mailto:briurixo@gmail.com">briurixo@gmail.com</a>.
              <br />
              <br />
              The garden is an intimate outdoor space, so parking will be available at a nearby lot (less than a 5 minute walk away).
            </p>
          }
        />
        <AccordionItem
          title="Dress Code"
          content={
            <p>
              Cocktail attire/evening garden party. Please no shorts or denim. For inspiration, check out these Pinterest boards:
              <br />
              <a href="https://pin.it/1IWvNsPhU" target="_blank">Dress Code Examples / Inspiration</a>
            </p>
          }
        />

        <AccordionItem
          title="Food & Drink"
          content={
            <p>
              We&#39;ll have a variety of salads and appetizers. For dinner, a showcase of two favorites from our mixed heritage: pizza and tacos. Please note any dietary limitations while RSVPing.
              <br></br>
              <br></br>
              The open bar will serve beer, wine, signature cocktails, and alcohol-free options.
              <br></br>
              <br></br>
              All food and drinks will be served buffet-style.
            </p>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Our Registry"
          content={
            <p>
              We are so grateful for your generosity and support. Your presence at our wedding is the greatest gift of all!
              <br></br>
              <br></br>
              For those who wish to honor us with a gift, we have created a registry that can be found on our <a href='/registry'>registry page</a>.
            </p>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Accommodations"
          content={
            <div>
              <p>
                If you&#39;re visiting us from out of town, there are plenty of hotel options within driving distance. We don&#39;t have any room blocks, so you&#39;ll need to book directly with the hotel you choose.
                <br></br>
                Below are some recommendations to get you started!
              </p>
              <h4>
                Closest to the venue (5 min drive):
              </h4>
              <ul >
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
              <h4>
                Our Picks
              </h4>
              <ul >
                <li>
                  <Link href="https://virginhotels.com/dallas/">
                    The Virgin Hotel (Right across the street from our apartment!)
                  </Link>
                </li>
                <li>Omni Las Colinas (Beautiful hotel near DFW airport)</li>
                <li>The Westin Downtown Dallas (Located right in downtown amongst many attractions)</li>
              </ul>
            </div>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Dallas Tips"
          content={
            <div>
              <p>
                Dallas is lovely in the spring. Check out some of our favorite attractions while you&#39;re here!
              </p>
              <h4>Museums, Parks, and Attractions</h4>
              <ul >
                <li>
                  <Link href="https://www.dallascontemporary.org/">
                    Dallas Contemporary (Free)
                  </Link>
                </li>
                <li>
                  <Link href="https://www.dallasarboretum.org/">
                    Dallas Arboretum
                  </Link>
                </li>
                <li>
                  <Link href="https://dma.org/">
                    Dallas Museum of Art (Free)
                  </Link>
                </li>
                <li>
                  <Link href="https://www.fortworthstockyards.org/">
                    Fort Worth Stockyards
                  </Link>
                </li>
                <li>
                  <Link href="https://thetexastheatre.com/">
                    Texas Theatre
                  </Link>
                </li>
                <li>Klyde Warren Park</li>
                <li>Dallas Bishop Arts District</li>
                <li>Lower Greenville Neighborhood</li>
                <li>Katy Trail</li>
              </ul>
              <h4 >
                Our fav local food options
              </h4>
              <ul>
                <li>Jimmy&#39;s Food Store</li>
                <li>Tacos La Banqueta Puro DF</li>
                <li>Spiral Diner in Fort Worth (vegan)</li>
                <li>
                  <Link href="https://www.royalchinadallas.com/">
                    Royal China
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elpalote.com/">
                    El Palote Panaderia (vegan)
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=100063604538415#">
                    Catrachito Restaurante
                  </Link>
                </li>
              </ul>
              <h4 >
                World Famous BBQ & Steakhouses
              </h4>
              <ul>
                <li>Terry Black&#39;s BBQ</li>
                <li>Hutchins BBQ</li>
                <li>Smokey Joe&#39;s BBQ</li>
                <li>Goldee&#39;s</li>
                <li>Al Biernat&#39;s</li>
                <li>Pappas Bros</li>
              </ul>
              <h4>
                Bars
              </h4>
              <ul>
                <li>Bowen House</li>
                <li>Katy Trail Ice House</li>
                <li>Double D&#39;s</li>
                <li>Reveler&#39;s Hall</li>
              </ul>
              <h4 >
                Coffee & Sweet Treats
              </h4>
              <ul >
                <li>
                  Del Norte Bakery #2
                </li>
                <li>Village Baking Co.</li>
                <li>LDU Coffee To Go</li>
                <li>Bottolino Gelato</li>
                <li>Cafe Momento</li>
                <li>85 Degree Bakery</li>
                <li>Emporium Pies</li>
                <li>Picolé Pops</li>
              </ul>
            </div>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Plus Ones"
          content={
            <p>
              Due to the intimate setting, please request any plus ones via the RSVP form and we will reach out to let you know if we can accomodate your guest.
            </p>
          }
        >
        </AccordionItem>
      </div>
      <Footer />
    </div>
  );
}