import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Card from './Card';
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function SliderSlider(props: any) {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          841: {
            slidesPerView: 4,
            spaceBetween: 70,
          },
          1105: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1379: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.children}
      </Swiper>
    </div>
  );
}
