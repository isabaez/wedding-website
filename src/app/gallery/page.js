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
            onSlideChange={(swiper) => {
              const $captions = document.querySelectorAll('.Gallery__caption');
              $captions.forEach(($caption) => {
                const { captionIndex } = $caption.dataset
                if (captionIndex === swiper.realIndex.toString()) {
                  $caption.classList.add('is-active');
                } else {
                  $caption.classList.remove('is-active');
                }
              });
            }}
          >
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/0.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/1.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/2.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/3.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/4.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/5.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/6.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/7.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/8.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/9.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/10.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/11.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/12.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/13.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/14.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/15.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/16.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/17.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/18.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/19.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
                src='/20.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="Gallery__slider-image"
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
        <div className="Gallery__captions-container">
          <div 
            className="Gallery__caption"
            data-caption-index={0}
          >
            Engaged on 2/15/2025
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={1}
          >
            Our first visit to Mexico, 2 months dating
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={2}
          >
            6 month anniversary in New York
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={3}
          >
            Starry-eyed long distance reunion in DC
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={4}
          >
            Wedding guests
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={5}
          >
            Coffee walks in New York
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={6}
          >
            more weddings!
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={7}
          >
            Long distance again--reuinted in Italy
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={8}
          >
            In love at the Boboli Gardens
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={9}
          >
            Our favorite city in the world, Firenze
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={10}
          >
            An unforgettable trip to Greece
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={11}
          >
            Coffee strolls in Spain
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={12}
          >
            Christmas in our first apartment
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={13}
          >
            Celebrating our engagement with our family
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={14}
          >
            Moments after he proposed
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={15}
          >
            Two love birds
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={16}
          >
            Perfect happiness
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={17}
          >
            Uri and Brianna
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={18}
          >
            A Dallas arboretum date
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={19}
          >
            An unforgettable hot air balloon ride in Mexico
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={20}
          >
            Our first ever performance -- a folklorico duet
          </div>
          <div 
            className="Gallery__caption"
            data-caption-index={21}
          >
            Performining at Latinidad in Dallas
          </div>
        </div>
      </div>
    </div>
  );
}