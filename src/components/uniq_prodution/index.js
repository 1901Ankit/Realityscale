import React from "react";
import "./index.css";
import Aos from "aos";
const Uniq_production = (props) => {
  Aos.init();
  return (
    <>
      <div
        className="mil-service-card-sm mil-up"
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top"
      >
        <h5 className="mil-muteded mil-mb-30 text-white">{props.head}</h5>
        <p className="mil-light-softer mil-mb-30 text-white fw-100">
          {props.para}
        </p>
        <div className="">
          <img
            src={props.img}
            className="mil-button mil-icon-button-sm mil-arrow-place"
          />
        </div>
      </div>
    </>
  );
};

export default Uniq_production;
