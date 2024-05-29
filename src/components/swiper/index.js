import React from "react";
import image5 from "../../assests/images/work/detail/5.jpg";
import image4 from "../../assests/images/work/detail/3.jpg";
import image3 from "../../assests/images/work/detail/4.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import imagegif from "../../assests/images/work/detail/2.gif";

import "./index.css";
import { Pagination } from "swiper";

const Wipper = () => {
  return (
    <div className="backgroundvlack">
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container p-0"
      >
        <SwiperSlide>
          <img src={imagegif} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Wipper;
