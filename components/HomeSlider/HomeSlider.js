'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {Container} from '@components/Container'


import styles from './HomeSlider.module.scss'

const HomeSlider = () => {
    const images = [
        {
            src: "/homeslider/homeslider-1.png",
            recipe: "Kodak Gold 200",
            link:"/kodak-gold-200"
        },
        {
            src: "/homeslider/homeslider-2.png",
            recipe: "Fujicolor C200",
            link:"/fujicolor-c200"
        },
        {
            src: "/homeslider/homeslider-3.png",
            recipe: "Kodak Portra 400",
            link:"/kodak-portra-400"
        },
        {
            src: "/homeslider/homeslider-4.png",
            recipe: "Kodak Gold 200",
            link:"/kodak-gold-200"
        },
        {
            src: "/homeslider/homeslider-5.png",
            recipe: "Kodak T-Max P3200",
            link:"/kodak-tmax-p3200"
        },
    ]
  return (
    <section className={styles.homeslider}>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className={`homeslider ${styles.homeswiper}`}
        >
            {images.map((item, index) => {
                return (
                    <SwiperSlide
                        className={styles.homeswiperSlide}
                        key={index}
                    >
                        <Image
                            src={item.src}
                            width={1500}
                            height={1000}
                            alt=""
                            className={styles.homeswiperImg}
                            style={{ width: "100%", height: "100%" }}
                            quality={100}
                        />
                        <Link href={item.link} className={styles.homeswiperLink}>
                            <div className={styles.homeswiperContent}>
                                <h2 className={styles.homeswiperRecipe}>{item.recipe}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default HomeSlider