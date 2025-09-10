"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@components/gallery/gallery.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function GalleryPage() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={styles.backLink}
      >
        &lt; Back to Home
      </Link>
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
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            direction={'vertical'}
            height={700}
          >
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/test2.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website1.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website2.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website3.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website4.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website5.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website6.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website7.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website8.jpg'
                alt=""
                width={800}
                height={1000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={styles.sliderImage}
                src='/website9.jpg'
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
          &lt;
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className={`${styles.arrowNext} ${styles.arrow}`}
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}