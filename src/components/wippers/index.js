import React from "react";
import image5 from "../../assests/images/work/detail/6.jpg";
import image4 from "../../assests/images/work/detail/7.jpg";
import image3 from "../../assests/images/work/detail/8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import { Pagination } from "swiper";

const Wippers = ({ data }) => {
  return (
    <div className="backgroundvlack">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container-fluid p-0"
      >
        {data &&
          data.map((val, i) => (
            <SwiperSlide key={i}>
              <img src={val.img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Wippers;
