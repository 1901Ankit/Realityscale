import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const Sixth = () => {
  Aos.init();
  return (
    <div class="container p-0 events-content">
    <div className="row align-items-center mt-3">
      <div className="col-sm-6 ">
        <img
          src={image1}
          width="100%"
          height={500}
          className="rounded process_hover pr-right "
   
        />
      </div>
      <div className="col-sm-6 lormips
      ">
        <div className="pl-left">
          <h2 className="onbord mb-4"> Lorem Ipsum</h2>
          <p className="skills_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            sequi, rem magnam nesciunt minima placeat, itaque eum neque
            officiis unde, eaque optio ratione aliquid assumenda facere ab et
            quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
            nisi reprehenderit tempora at laborum natus unde. Ut,
            exercitationem eum aperiam illo illum laudantium?
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sixth;
