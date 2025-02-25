import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";

import "./slider.scss";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/html-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/css-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/tailwindcss-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/js-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/react-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/mongodb-logo.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/express-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/nodejs-ok.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/typescript-ok.svg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
