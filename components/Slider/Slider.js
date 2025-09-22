'use client'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from './Slider.module.scss'

const Slider = ({images}) => {

  return (
    <div className={`${styles.slider} ${styles.half}`}>
        <Swiper
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}     
          className={`imgSwiper ${styles.imgSwiper}`}
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={item.src} width={640} height={427} alt="" className={styles.sliderImg}/>
              </SwiperSlide>
            )
          })}
          <button className="swiper-button-prev">Prev</button>
          <button className="swiper-button-next">Next</button>
          <div className="swiper-pagination"></div>
        </Swiper>
        
    </div>
  )
}

export default Slider