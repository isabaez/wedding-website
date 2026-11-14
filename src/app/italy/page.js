import Link from "next/link";
import Image from "next/image";
import AccordionItem from "@components/accordion-item";
import ImageGallery from "@components/image-gallery";
import ParallaxBreak from "@components/parallax-break";
import "@styles/italy.scss";

// The Italy page's photo gallery: 5:4 .webp files in public/, named italy-gallery-<n>.webp. Add a caption to a
// slide with caption: "…".
const GALLERY_SLIDES = [
  {
    src: "/italy-gallery-1.webp",
    alt: "Cannoli dusted with powdered sugar on plates over a green gingham tablecloth",
  },
  {
    src: "/italy-gallery-2.webp",
    alt: "Pasta being tossed inside a hollowed-out wheel of cheese",
  },
  {
    src: "/italy-gallery-3.webp",
    alt: "A long candlelit dinner table beside a villa at dusk, seen from above",
  },
  {
    src: "/italy-gallery-4.webp",
    alt: "The front of a Tuscan villa with a double staircase, lit at dusk",
  },
  {
    src: "/italy-gallery-5.webp",
    alt: "Guests seated at long tables in front of a pale yellow villa",
  },
  {
    src: "/italy-gallery-6.webp",
    alt: "A waiter setting out glasses on a white-clothed table in a garden",
  },
  {
    src: "/italy-gallery-7.webp",
    alt: "Guests in summer formal wear gathered on a lawn beside a pond",
  },
  {
    src: "/italy-gallery-8.webp",
    alt: "Plates of tortelli being served from a large pan",
  },
  {
    src: "/italy-gallery-9.webp",
    alt: "Sauce being poured over sliced steak",
  },
  {
    src: "/italy-gallery-10.webp",
    alt: "Guests at a long candlelit table, seen from above",
  },
  {
    src: "/italy-gallery-11.webp",
    alt: "A red pizza truck with a wood-fired oven on the lawn of a yellow villa",
  },
  {
    src: "/italy-gallery-12.webp",
    alt: "A slice of pizza on a plate on a pink toile tablecloth",
  },
  {
    src: "/italy-gallery-13.webp",
    alt: "Guests relaxing around a pool with inflatable rings",
  },
  {
    src: "/italy-gallery-14.webp",
    alt: "A gelato cart under a red awning in a garden",
  },
  {
    src: "/italy-gallery-15.webp",
    alt: "White hydrangeas above a buffet of pastries outside a villa",
  },
  {
    src: "/italy-gallery-16.webp",
    alt: "A hand holding a spritz over a pool",
  },
  {
    src: "/italy-gallery-17.webp",
    alt: "Swimmers in yellow-striped rings in a pool, seen from above",
  },
];

export default function ItalyPage() {
  return (
    <div className="italy">
      <h1 className="italy__header">
        What is Happening in Italy?
      </h1>
      <div className="italy__content">
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
      </div>

      <ParallaxBreak
        src="/parallax-2.webp"
        objectPosition="50% 40%"
      />

      <div className="italy__content">
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
      </div>

      <ParallaxBreak
        src="/parallax-1.webp"
        objectPosition="50% 45%"
      />

      <div className="italy__content">
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
                    className="italy__image"
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
                    className="italy__image"
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
      </div>

      <ImageGallery
        slides={GALLERY_SLIDES}
        label="Photos from Italy"
      />

      <div className="italy__content">
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
    </div>
  );
}