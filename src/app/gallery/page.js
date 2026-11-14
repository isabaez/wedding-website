"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "@styles/gallery.scss";
import usePrefersReducedMotion from "@hooks/use-prefers-reduced-motion";


// One caption per slide, in slide order; the caption whose index matches the active slide is shown.
const CAPTIONS = [
  "Engaged on 2/15/2025",
  "Our first visit to Mexico, 2 months dating",
  "6 month anniversary in New York",
  "Starry-eyed long distance reunion in DC",
  "Wedding guests",
  "Coffee walks in New York",
  "more weddings!",
  "Long distance again--reuinted in Italy",
  "In love at the Boboli Gardens",
  "Our favorite city in the world, Firenze",
  "An unforgettable trip to Greece",
  "Coffee strolls in Spain",
  "Christmas in our first apartment",
  "Celebrating our engagement with our family",
  "Moments after he proposed",
  "Two love birds",
  "Perfect happiness",
  "Uri and Brianna",
  "A Dallas arboretum date",
  "An unforgettable hot air balloon ride in Mexico",
  "Our first ever performance -- a folklorico duet",
  "Performining at Latinidad in Dallas",
];

export default function GalleryPage() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="gallery">
      <Link
        href="/"
        className="back-link back-link--transparent"
      >
        <Image
          className='back-link__image'
          src='/spade-white.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className="gallery__header">
        Gallery
      </h1>
      <Image 
        className="gallery__background-mobile"
        src="/gallery-background-mobile.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />
      <Image 
        className="gallery__background-desktop"
        src="/gallery-background-desktop.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />

      <div className="gallery__frame-container">
        <Image 
          className="gallery__frame"
          src="/gallery-frame.png"
          width={1289}
          height={1667}
          alt=""
          sizes="700px"
        />

        <div className="gallery__slider-wrapper">
          <Swiper
            className="gallery__slider"
            slidesPerView={1}
            modules={[EffectFade]}
            loop={true}
            effect={'fade'}
            // base.scss's reduced-motion rule already shortens Swiper's inline transition-duration (stylesheet
            // !important beats inline); speed 0 also makes Swiper switch slides at once instead of waiting for
            // transitionend. 300 is Swiper's default.
            speed={prefersReducedMotion ? 0 : 300}
            fadeEffect={{ crossFade: true }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/0.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/1.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/2.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/3.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/4.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/5.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/6.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/7.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/8.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/9.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/10.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/11.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/12.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/13.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/14.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/15.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/16.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/17.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/18.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/19.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/20.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="gallery__slider-image"
                src='/21.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="gallery__arrow gallery__arrow--prev"
          aria-label="Previous Slide"
        >
          <Image
            className="gallery__arrow-image"
            src='/spade-black.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="gallery__arrow gallery__arrow--next"
          aria-label="Next Slide"
        >
          <Image
            className="gallery__arrow-image"
            src='/spade-black.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
        <div className="gallery__captions-container">
          {CAPTIONS.map((caption, index) => (
            <div
              key={index}
              className={index === activeIndex ? "gallery__caption gallery__caption--active" : "gallery__caption"}
            >
              {caption}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}