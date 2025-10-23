"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "@styles/gallery.scss";


export default function GalleryPage() {
  const swiperRef = useRef(null);

  return (
    <div className="Gallery">
      <Link
        href="/"
        className="backLink"
        style={{color: '#000'}}
      >
        <Image
          className='backLink__image'
          src='/spade-black.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className="Gallery__header h1">
        Gallery
      </h1>
      <Image 
        className="Gallery__background-mobile"
        src="/gallery-background-mobile.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />
      <Image 
        className="Gallery__background-desktop"
        src="/gallery-background-desktop.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />

      <div className="Gallery__frame-container">
        <Image 
          className="Gallery__frame"
          src="/gallery-frame.png"
          width={1289}
          height={1667}
          alt=""
          sizes="700px"
        />

        <div className="Gallery__slider-wrapper">
          <Swiper
            className="Gallery__slider"
            slidesPerView={1}
            modules={[EffectFade]}
            loop={true}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery1.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery2.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery3.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery4.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery5.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery6.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery7.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery8.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery9.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery10.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery12.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery13.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery14.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery15.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery16.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery17.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery18.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery19.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/gallery20.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="Gallery__arrow Gallery__arrow--prev"
          aria-label="Previous Slide"
        >
          <Image
            className="Gallery__arrow-image"
            src='/spade-black.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="Gallery__arrow Gallery__arrow--next"
          aria-label="Next Slide"
        >
          <Image
            className="Gallery__arrow-image"
            src='/spade-black.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
}