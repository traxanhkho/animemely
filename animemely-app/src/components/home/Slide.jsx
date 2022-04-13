import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../common/Heading";
import CardMovie from "../common/CardMovie";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../style/slide.css"

const Slide = () => {
  return (
    <React.Fragment>
      <Heading name="phim đề cử" />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={8}
        slidesPerView={5}
        autoplay={{ delay: 1600, disableOnInteraction: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3487.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3484.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3487.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3465.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3465.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3487.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3484.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3433.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3465.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMovie urlImg="https://animehay.club//upload/poster/3405.jpeg" />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default Slide;
