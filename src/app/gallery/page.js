"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@components/gallery/gallery.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


export default function GalleryPage() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className="backLink"
        style={{color: '#000'}}
      >
        <Image
          className='backLink__image'
          src='/arrow.png'
          alt=""
          width={100}
          height={100}
        /> Home
      </Link>
      <h1 className={"h1 " + styles.header}>
        Gallery
      </h1>
      <Image 
        className={styles.backgroundMobile}
        src="/gallery-background-mobile.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />
      <Image 
        className={styles.backgroundDesktop}
        src="/gallery-background-desktop.png"
        alt=""
        priority={true}
        fill={true}
        sizes="100vw"
      />

      <div className={styles.frameContainer}>
        <Image 
          className={styles.frame}
          src="/gallery-frame.png"
          width={1289}
          height={1667}
          alt=""
          sizes="700px"
        />

        <div className={styles.sliderContainer}>
          <Swiper
            className="styles.slider"
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
                className={styles.sliderImage}
                src='/gallery1.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery2.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery3.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery4.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery5.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery6.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery7.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery8.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery9.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/gallery10.png'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className={`${styles.arrowPrev} ${styles.arrow}`}
          aria-label="Previous Slide"
        >
          <Image
            className={styles.arrowImage}
            src='/arrow.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className={`${styles.arrowNext} ${styles.arrow}`}
          aria-label="Next Slide"
        >
          <Image
            className={styles.arrowImage}
            src='/arrow.png'
            alt=""
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
}