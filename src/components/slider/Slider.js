import React from 'react'

/* eslint-disable import/first */

// import { Swiper, SwiperSlide } from "swiper/react";
import Swiper from 'react-slider-swiper';
// import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "./Slider.css";
// import {
//   EffectCoverflow,
//   Pagination,
//   Navigation
// } from "swiper/core";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


import a from "../../images/earthLogo.jpg"

const Slider = () => {
  return (

    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src={a} />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );

  
}

export default Slider