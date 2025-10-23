import Link from "next/link";
import Image from "next/image";
import Navigation from "@components/navigation";
import "@styles/home.scss";

export default function Home() {
  return (
    <div className="Home">
      <header>
        <Navigation />
      </header>
      <main className="Home__main">
        <h1 className="Home__heading h1">
          Brianna & Uriel <br />Are Getting Married
        </h1>
        <p className="Home__subheading">May 2, 2026</p>
        <p className="Home__subheading">Dallas, Texas</p>
        <div className="Home__cta-container">
          <Link 
            href="/rsvp" 
            className="cta"
          >
            RSVP
          </Link>
        </div>
        <Image
          className="Home__cherub"
          src='/cherub-white.png'
          alt=""
          width={100}
          height={200}
        />
      </main>
    </div>
  );
}
