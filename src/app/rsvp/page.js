'use client';
import Link from "next/link";
import Image from "next/image";
import "@styles/rsvp-page.scss";
import RsvpForm from "@/app/components/rsvp-form";

export default function DallasRsvpPage() {

  return (
    <div className="rsvp-page">
      <Link
        href="/"
        className="back-link"
      >
        <Image
          className='back-link__image'
          src='/spade-white.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className="rsvp-page__header h1">
        R<span className="rsvp-page__header-space">SVP</span>
      </h1>
      <div className="rsvp-page__info-text">
        Please visit our <a href="/information">information page</a> before submitting your RSVP
      </div>
      <RsvpForm/>
    </div>
  );
}