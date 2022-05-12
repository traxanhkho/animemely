import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../common/Heading";
import CardMovie from "../common/CardMovie";
import Loading from "../Loading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../style/slide.css";

const Slide = ({ slides }) => {

  if (slides.length === 0) {
    return <Loading />
  }

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
        {slides.map((item) => (
          <SwiperSlide key={item._id}>
            <CardMovie movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default Slide;
