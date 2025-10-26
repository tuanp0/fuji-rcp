'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Title } from '@components/Title'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import styles from './RecipeSlider.module.scss'

const RecipeSlider = ({title, images}) => {
  const sliderTime = 3500
  const progressBar = useRef(null)
  const progressContent = useRef(null)
  
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressBar.current.style.setProperty('width', `${Math.min((1 - progress) * 100, 100)}%`)

  }

  return (
    <div className={`${styles.slider} ${styles.half}`}>
        <Title title={title} sticky />
        <Swiper
          autoplay={{
            delay: sliderTime,
            disableOnInteraction: false,
          }}
          speed={600}
          loop={true}
          spaceBetween={24}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className={`imgSwiper ${styles.imgSwiper}`}
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={item.src}
                  width={640}
                  height={427}
                  alt=""
                  className={styles.sliderImg}
                  style={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            )
          })}
          <div className={`autoplay-progress ${styles.progress}`}>
            <span
              className={styles.progressBar}
              ref={progressBar}
            />
          </div>
          <button className={`swiper-button-prev ${styles.swiperPrev}`}>Prev</button>
          <button className={`swiper-button-next ${styles.swiperNext}`}>Next</button>
          <div className="swiper-pagination"></div>
        </Swiper>
        
    </div>
  )
}

export default RecipeSlider