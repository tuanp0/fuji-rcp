'use client'
import { useEffect, useState } from 'react'
import Link from "next/link";
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCards } from 'swiper/modules';

import styles from './Card.module.scss'

const Card = ({link, title, images}) => {
  const [swiperInstance, setSwiperInstance] = useState(null)

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update()
      swiperInstance.updateSlides()
    }
  }, [swiperInstance])

  return (
    <div className={styles.card}>
      <Link href={link} className={styles.cardLink}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className={`cardSwiper ${styles.cardSwiper}`}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide className={styles.cardSlide} key={index}>
                <Image src={item.src} width={640} height={427} alt="" className={styles.cardImg}/>
            </SwiperSlide>
          )
        })}
      </Swiper>

          <p className={styles.cardName}>
            {title}
          </p>
      </Link>
    </div>
  )
}

export default Card