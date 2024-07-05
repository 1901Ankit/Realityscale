import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Pagination } from "swiper";
import "./index.css";

const Wipper = ({ data }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column justify-content-end">
        <div className="col">
          <div className="backgroundvlack">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper p-0"
            >
              {data &&
                data.map((val, i) => (
                  <SwiperSlide key={i}>
                    <img src={val.img} alt={`Slide ${i}`} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wipper;
