import Link from "next/link";
import Image from "next/image";
import Footer from "@components/footer";
import AccordionItem from "@components/accordion-item";
import "@styles/italy.scss";

export default function ItalyPage() {

  return (
    <div className="Italy">
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
      <h1 className="Italy__header h1">
        What is Happening in Italy?
      </h1>
      <div className="Italy__content">
        <AccordionItem
          disableToggle={true}
          content={
            <div>
              <p>
                We are hosting a very intimate, 3-night wedding in a Tuscan villa. It will be a traditional ceremony with a full day after to recover and enjoy. As a very close friend of ours, you are invited to spend all 3 nights with us.
              </p>
              <h4>
                Where
              </h4>
              <p>
                The villas are located 10 minutes outside of Lucca, Italy. About 1.5 hours from Florence airport (FLR)
              </p>
              <h4>
                When
              </h4>
              <p>
                May 26 - 29, 2027
              </p>
            </div>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Tentative Itinerary"
          disableToggle={true}
          content={
            <div>
              <h4>
                May 26, 2027: Arrival
              </h4>
              <p>
                Welcome aperitivo at the villa. We will have a light dinner and drinks, and a chance to catch up with everyone before the big day.
              </p>
              <h4>
                May 27, 2027: Wedding Day
              </h4>
              <p>
                Breakfast provided at the villa. Wedding ceremony in the afternoon, followed by reception dinner and open bar + party at night.
              </p>
              <h4>
                May 28, 2027: Recovery Day
              </h4>
              <p>
                Breakfast provided at the villa. Poolside recovery and relaxation. Optional group excursion to Pisa and/or Lucca.
              </p>
              <h4>
                May 29, 2027: Farewell Day
              </h4>
              <p>
                Check-out & honeymoon sendoff
              </p>
            </div>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="The Villa"
          disableToggle={true}
          content={
            <div>
              <p>19 total bedrooms each with private bathroom.</p>
              <h4>
                <Link 
                  href="https://www.coselli.com/villas/villa-lenka/"
                  target="_blank"
                >
                  Villa Lenka
                </Link>
              </h4>
              <p>
                <Link 
                  href="https://www.coselli.com/villas/villa-lenka/"
                  target="_blank"
                >
                  <Image
                    className="Italy__image"
                    src="/lenka.webp"
                    alt=""
                    width={1000}
                    height={600}
                  />
                </Link>
              </p>
              <h4>
                <Link 
                  href="https://www.coselli.com/villas/borgo-bernardini/"
                  target="_blank"
                >
                  Borgo Bernardini
                </Link>
              </h4>
              <p>
                <Link 
                  href="https://www.coselli.com/villas/borgo-bernardini/"
                  target="_blank"
                >
                  <Image
                    className="Italy__image"
                    src="/bernardini.webp"
                    alt=""
                    width={1000}
                    height={600}
                  />
                </Link>
              </p>
            </div>
          }
        >
        </AccordionItem>

        <AccordionItem
          title="Dress Code"
          disableToggle={true}
          content={
            <div>
              <p>
                Dress code for the wedding ceremony and reception dinner will be black tie / formal. For the welcome aperitivo and recovery day, dress code is casual.
              </p>
              <h4>Women</h4>
              <p>Full length evening dress</p>
              <h4>Men</h4>
              <p>Tuxedo or dark suit with tie and dress shoes</p>
            </div>
          }
        >
        </AccordionItem>

      </div>
      <Footer />
    </div>
  );
}