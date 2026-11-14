import ImageGallery from "@components/image-gallery";
import ParallaxBreak from "@components/parallax-break";
import {
  LENKA_SLIDES,
  BORGO_SLIDES,
  APERITIVO_SLIDES,
  RECEPTION_SLIDES,
  RECOVERY_SLIDES,
  AMENITIES_SLIDES,
} from "@/app/italy/galleries";
import "@styles/italy.scss";

// Text sits in .italy__content columns (700px wide at most); galleries and the parallax breaks go between them, as
// direct children of .italy, so they span the screen.
export default function ItalyPage() {
  return (
    <main className="italy">
      {/* Three lines up to 1023px, two from 1024px ("ITALY" on its own); the spaces between them keep the heading's
          text one sentence. */}
      <h1 className="italy__header">
        <span className="italy__header-line">You’re invited to</span>{" "}
        <span className="italy__header-line">our wedding in</span>{" "}
        <span className="italy__header-line italy__header-line--caps">ITALY</span>
      </h1>

      <div className="italy__content">
        <p>
          Nearly two years ago, I proposed to Brianna in New York. Before we started searching for venues, Brianna saw
          some photos of Villa Lenka in an online magazine, and we instantly knew that it would be the location of our
          wedding.
        </p>
        <p>
          When we learned that it had a two-year waitlist (!), we decided that we would enjoy a long and beautiful
          engagement while planning for the wedding of our dreams. Along the way, we threw a backyard party for our
          civil union to include extended family in our celebrations. But we’ve been counting down the days until the
          real thing.
        </p>
        <p>
          You’re invited to our very intimate three-night nuptial celebrations in the historic 17th-century Coselli
          villas. There’s only room for 35, and we’d love for you to spend all three days with us as one big family.
        </p>

        <h2 className="italy__section-heading">When:</h2>
        <p>May 26 - 29, 2027</p>

        <h2 className="italy__section-heading">Where:</h2>
        <p>
          All of our guests will be staying on-site at either Villa Lenka or Borgo Bernardini, where all the wedding
          events will be taking place. The Coselli Estate is located 10 minutes outside of Lucca, Italy, about 1 hour
          from Florence and 20 minutes from Pisa (yes, the leaning tower. More on that later…).
        </p>
      </div>

      <ParallaxBreak
        src="/parallax-1.webp"
        objectPosition="50% 45%"
      />

      <div className="italy__content italy__content--gallery-intro">
        <h2 className="italy__section-heading">The Villas</h2>
        <p>19 bedrooms total, each with a private bathroom, robe, and slippers.</p>

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
          We’re so excited to welcome friends from around the globe with a traditional Italian aperitivo. Light dinner
          (pasta) will also be served, and we’ll get to catch up with everyone before the big day. Check-in time is
          4pm.
        </p>
      </div>

      <ImageGallery slides={APERITIVO_SLIDES} label="Welcome aperitivo photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h3 className="italy__day">2nd day: The Wedding</h3>
        <p>
          You wake in your incredible guest room and make your way to the fountains for breakfast. The Wedding ceremony
          will take place in the afternoon, so you’ll have plenty of time to rest, explore the venue and all its
          amenities, take a dip in the pool, or even play tennis after breakfast. Following the ceremony, we’ll have an
          amazing reception dinner and afterparty.
        </p>
      </div>

      <ImageGallery slides={RECEPTION_SLIDES} label="Wedding day photos" />

      <div className="italy__content italy__content--gallery-intro">
        <h3 className="italy__day">3rd day: Recovery</h3>
        <p>
          Another glorious breakfast provided at the villa. We’ll gather by the pool to recap the wedding day and
          relax. In the late afternoon, we hope to take a group trip to the nearby town of Pisa for sightseeing and
          dinner. You’ll get your iconic leaning tower photo before heading back to the villas.
        </p>
      </div>

      <ImageGallery slides={RECOVERY_SLIDES} label="Recovery day photos" />

      <div className="italy__content">
        <h3 className="italy__day">4th day: Farewell and Honeymoon sendoff</h3>
        <p>
          After 3 days of celebrating, we’ll say arrivederci (see you later) to each other and the beautiful villas.
        </p>
        <p>Check-out time is 10am.</p>

        <h2 className="italy__section-heading">Dress Code</h2>
        <p>For the wedding ceremony and reception dinner, the dress code is black tie formal.</p>
        <p>
          <strong>Women:</strong> Full length evening dress
          <br />
          <strong>Men:</strong> Tuxedo or dark suit with tie and dress shoes
        </p>
        <p>For the welcome aperitivo, the dress code is cocktail or semi-formal.</p>
        <p>For the recovery day, the dress code is casual.</p>

        {/* The dress code gallery goes here once its photos are in public/. */}
      </div>

      <ParallaxBreak
        src="/parallax-2.webp"
        objectPosition="50% 40%"
      />

      <div className="italy__content italy__content--gallery-intro">
        <h2 className="italy__section-heading">What’s included</h2>
        <p>
          As our gift to you, we’re committed to providing the best and easiest vacation possible. This includes: a
          shuttle from Pisa Airport to the villas, a welcome gift, a kitchen stocked for 24-hour snacks and wine,
          breakfasts at the villa, the welcome aperitivo, the post-ceremony cocktail hour, the reception dinner,
          afterparty, and 80% of your stay at the villas.
        </p>
      </div>

      <ImageGallery slides={AMENITIES_SLIDES} label="Villa rooms and amenities photos" />

      <div className="italy__content">
        <h2 className="italy__section-heading">What you’ll need to cover:</h2>
        <p>
          Your flight to Italy, your meal during our excursion to Pisa, and 20% of your stay at the villas ($300 per
          person for all 3 nights). Please, no gifts!
        </p>

        <h2 className="italy__section-heading">RSVP / Questions?</h2>
        <p>
          To RSVP (or if you have any questions) please reach out to either of us directly. We’d love to help make this
          the most memorable trip for everyone.
        </p>

        <p className="italy__closing">See you in May!</p>
      </div>
    </main>
  );
}
