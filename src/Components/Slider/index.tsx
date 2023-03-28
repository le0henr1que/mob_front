import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Card from './Card';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function SliderSlider(props:any){
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
            // cssMode: true 
            
        }}

        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 100,
            },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

          {props.children}
         
      </Swiper>
    </div>
  );
};

