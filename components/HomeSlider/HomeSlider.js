'use client'
import imagesSlider from '@/data/imagesSlider'

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

  if (!imagesSlider) {
    return
  }

  return (
    <div className={styles.homeslider}>
        <Swiper
            // effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            // coverflowEffect={{
            //     rotate: 50,
            //     stretch: 0,
            //     depth: 300,
            //     modifier: 1,
            //     slideShadows: true,
            // }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className={`homeslider ${styles.homeswiper}`}
        >
            {imagesSlider.map((item, index) => {
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
                            priority={true}
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
    </div>
  )
}

export default HomeSlider