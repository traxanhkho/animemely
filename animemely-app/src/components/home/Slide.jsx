import React, { useContext } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../common/Heading";
import CardMovie from "../common/CardMovie";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../style/slide.css";
import MovieContext from "../../context/movieContext";

const Slide = () => {
  const { slide } = useContext(MovieContext);

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
        {slide.map((item) => (
          <SwiperSlide key={item._id}>
            <CardMovie movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default Slide;
