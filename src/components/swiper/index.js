import React from "react";
import image5 from "../../assests/images/work/detail/5.jpg";
import image4 from "../../assests/images/work/detail/3.jpg";
import image3 from "../../assests/images/work/detail/4.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import imagegif from "../../assests/images/work/detail/2.gif";

import "./index.css";
import { Pagination } from "swiper";

const Wipper = ({ data }) => {
  console.log("datata", data);
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

export default Wipper;
