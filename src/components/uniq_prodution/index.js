import React from "react";
import "./index.css";
import Aos from "aos";
const Uniq_production = (props) => {
  Aos.init();
  return (
    <>
      <div className="mil-service-card-sm mil-up">
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
