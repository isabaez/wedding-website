import Link from "next/link";
import Image from "next/image";
import Navigation from "@components/navigation";
import "@styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <header>
        <Navigation />
      </header>
      <main className="home__main">
        <h1 className="home__heading">
          Brianna & Uriel <br />Are Getting Married
        </h1>
        <p className="home__subheading">May 2, 2026</p>
        <Image
          className="home__photobooth-image"
          src='/photobooth-3.png'
          alt=""
          width={600}
          height={200}
        />
        <div className="home__cta-container">
          <Link 
            href="/registry" 
            className="cta"
          >
            Registry
          </Link>
        </div>
        <Image
          className="home__cherub"
          src='/cherub-white.png'
          alt=""
          width={100}
          height={200}
        />
      </main>
    </div>
  );
}
