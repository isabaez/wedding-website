import ImageGallery from "@components/image-gallery";
import ParallaxBreak from "@components/parallax-break";
import Image, { getImageProps } from "next/image";
import {
  LENKA_SLIDES,
  BORGO_SLIDES,
  APERITIVO_SLIDES,
  RECEPTION_SLIDES,
  RECOVERY_SLIDES,
  AMENITIES_SLIDES,
} from "@/app/italy/galleries";
import "@styles/italy.scss";

// The dress code's recommended colours, shown as swatches in two rows of four, sampled from the palette image.
const PALETTE_COLORS = [
  "#708289",
  "#50461b",
  "#4f2608",
  "#320605",
  "#b88c8c",
  "#6f2332",
  "#9d5a22",
  "#262626",
];

// The banner above the title, shown below 768px only (italy.scss). From 768px the <picture> swaps in a 1×1 transparent
// GIF, so wider screens never download the photo. Decorative: the title right below it says where we are.
// mobile-banner-2.webp is a backup photo for the same spot.
const BANNER_HIDDEN_SOURCE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const { props: bannerProps } = getImageProps({
  src: "/mobile-banner.webp",
  alt: "",
  width: 1600,
  height: 900,
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
});

// Text sits in .italy__content columns (700px wide at most); galleries and the parallax breaks go between them, as
// direct children of .italy, so they span the screen.
export default function ItalyPage() {
  return (
    <main className="italy">
      <picture className="italy__banner">
        <source media="(min-width: 768px)" srcSet={BANNER_HIDDEN_SOURCE} />
        <img {...bannerProps} alt="" className="italy__banner-image" />
      </picture>

      {/* Three lines up to 1023px, two from 1024px ("ITALY" on its own); the spaces between them keep the heading's
          text one sentence. */}
      <h1 className="italy__header">
        <span className="italy__header-line">You&apos;re invited to</span>{" "}
        <span className="italy__header-line">our wedding in</span>{" "}
        <span className="italy__header-line italy__header-line--caps">ITALY!</span>
      </h1>

      <div className="italy__content">
        <p>
          Nearly two years ago, I proposed to Brianna in New York. Before we had even started searching for venues, Brianna 
          came across photos of Villa Lenka in an online magazine, and we instantly knew it would to be the location of 
          our wedding.
        </p>
        <p>
          When we learned that it had a two-year waitlist (!), we decided that we would enjoy a long and beautiful
          engagement while planning the wedding of our dreams. Along the way, we threw a backyard party for our
          civil union to include extended family in our celebrations, but we&apos;ve always been counting down the days until 
          the real deal.
        </p>
        <p>
          You&apos;re invited to our very intimate three-night nuptial celebrations in the historic 17th-century Coselli
          villas. There&apos;s only room for 35, and we&apos;d love for you to spend all three days with us as one big family.
        </p>

        <h2 className="italy__section-heading">When:</h2>
        <p>May 26 - 29, 2027</p>

        <h2 className="italy__section-heading">Where:</h2>
        <p>
          All of our guests will be staying on-site at either Villa Lenka or Borgo Bernardini, where all the wedding
          events will be taking place. The Coselli Estate is located 10 minutes outside of Lucca, Italy, about 1 hour
          from Florence and 20 minutes from Pisa (yes, The Leaning Tower. More on that later...).
        </p>
        <p>
          We recommend flying into Pisa International Airport (PSA): it&apos;s the closest airport to the villas, and our
          shuttle will pick you up there.
        </p>
      </div>

      <ParallaxBreak
        src="/parallax-1.webp"
        objectPosition="50% 45%"
      />

      <div className="italy__content italy__content--gallery-intro">
        <h2 className="italy__section-heading">The Villas</h2>
        <p>
          19 luxurious guestrooms total, each with a private bathroom and complimentary toiletries, robe, and slippers. 
          Other amenities include: <br/>
          Pool with pool service <br/>
          Beautiful grounds with ponds and gazebo<br/>
          Daily maid service <br/>
          Air conditioning and Wi-Fi in every room<br/>
          Access to tennis court, soccer, and volleyball fields with equipment 
          provided<br/>
          Billiards table<br/>
          Satellite TV<br/>
          Fitness room
        </p>

        <h3 className="italy__subheading">Villa Lenka</h3>
      </div>

      <ImageGallery slides={LENKA_SLIDES} label="Villa Lenka photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h3 className="italy__subheading">Borgo Bernardini</h3>
      </div>

      <ImageGallery slides={BORGO_SLIDES} label="Borgo Bernardini photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h2 className="italy__section-heading">Itinerary</h2>

        <h3 className="italy__day">1st day: Welcome Aperitivo</h3>
        <p>
          We&apos;re so excited to welcome friends from around the globe with a traditional Italian aperitivo. Light dinner
          (pasta) will also be served, and we&apos;ll get to catch up with everyone before the big day. Check-in time is
          4pm.
        </p>
      </div>

      <ImageGallery slides={APERITIVO_SLIDES} label="Welcome aperitivo photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h3 className="italy__day">2nd day: The Wedding</h3>
        <p>
          You wake in your incredible guest room and make your way to the fountains for breakfast. The Wedding ceremony
          will take place in the late afternoon, so you&apos;ll have plenty of time to lounge, explore the grounds, take a 
          dip in the pool, or even get a round of tennis in. Following the ceremony, we&apos;ll have an
          amazing reception dinner and afterparty.
        </p>
      </div>

      <ImageGallery slides={RECEPTION_SLIDES} label="Wedding day photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h3 className="italy__day">3rd day: Recovery</h3>
        <p>
          Another glorious breakfast provided at the villas. We&apos;ll gather by the pool to recap the wedding day and
          catch some sun while eating gelato. In the late afternoon, we&apos;ll take a group trip to the nearby town
          of Pisa for sightseeing and dinner. You&apos;ll get your iconic leaning tower photo before heading back to the 
          villas for another night of being amongst the best of friends.
        </p>
      </div>

      <ImageGallery slides={RECOVERY_SLIDES} label="Recovery day photos" />

      <div className="italy__content">
        <h3 className="italy__day">4th day: Farewell and Honeymoon sendoff</h3>
        <p>
          After 3 days of celebrating, we&apos;ll unfortunately have to say arrivederci to you and the beautiful villas.
          Words won&apos;t be able to express how grateful we are that you&apos;ve joined us for our wedding, but 
          we&apos;ll try nonetheless. Our adventure will continue as we head off on our honeymoon, and we hope 
          you have a safe trip to your next destination.
        </p>
        <p>Check-out time is 10am, so set your alarm.</p>

        <h2 className="italy__section-heading">Dress Code</h2>
        <p>For the welcome aperitivo, the dress code is cocktail or semi-formal.</p>
        <p>
          For the wedding ceremony and reception dinner, the dress code is black tie formal. Women may wear full 
          length evening dress. Men may wear a tuxedo or dark suit with tie and dress shoes.</p>
        <p>For the recovery day, the dress code is casual.</p>
        <p>Recommended color pallete:</p>
        <ul className="italy__palette" aria-label="Recommended colors">
          {PALETTE_COLORS.map((hex, index) => (
            <li key={index} className="italy__swatch" style={{ backgroundColor: hex }}>
              <span className="italy__swatch-label">{hex}</span>
            </li>
          ))}
        </ul>
      </div>

      <ParallaxBreak
        src="/parallax-2.webp"
        objectPosition="50% 40%"
      />

      <div className="italy__content italy__content--gallery-intro">
        <h2 className="italy__section-heading">What&apos;s included</h2>
        <p>
          As our gift to you, we&apos;re committed to providing the best and easiest vacation possible. This includes: a
          shuttle from Pisa Airport to the villas, a welcome gift, a kitchen stocked for 24-hour snacks and wine,
          breakfasts at the villa, the welcome aperitivo, the post-ceremony cocktail hour, the reception dinner,
          afterparty, an optional nanny during the ceremony, and 70% of your stay at the villas.
        </p>
      </div>

      <ImageGallery slides={AMENITIES_SLIDES} label="Villa rooms and amenities photos" />

      <div className="italy__content">
        <h2 className="italy__section-heading">What you&apos;ll need to cover</h2>
        <p>
          Your flight to Italy, your meal during our excursion to Pisa, and 30% of your stay at the villas ($300 per
          person for all 3 nights). <br/> Please, <strong>no gifts!</strong>
        </p>

        <h2 className="italy__section-heading">RSVP / Questions?</h2>
        <p>
          To RSVP (or if you have any questions) please reach out to either of us directly. We&apos;d love to help make this
          the most memorable trip for everyone.
        </p>

        <p className="italy__closing">See you in May!</p>
      </div>
    </main>
  );
}
