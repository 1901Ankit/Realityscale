import React from "react";
import image5 from "../../assests/images/work/detail/6.jpg";
import image4 from "../../assests/images/work/detail/7.jpg";
import image3 from "../../assests/images/work/detail/8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import { Pagination } from "swiper";

const Wippers = () => {
  return (
    <div className="backgroundvlack">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container p-0"
      >
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

export default Wippers;
