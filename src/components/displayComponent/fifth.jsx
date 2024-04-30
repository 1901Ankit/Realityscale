import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const Fifth = () => {
  Aos.init();
  return (
    <div className="container p-0 events-content">
    <div className="row align-items-center mt-3">
      <div className="col-sm-6 ">
      <img
            src={image1}
            width="400px"
            className="image22 process_hover  "
            height="450px"
          />
      </div>
      <div className="col-sm-6 lormips"
  
      >
        <div className="pl-left">
          <h2 className="onbord mb-4">BOOST SALES ENGAGEMENT</h2>
          <p className="skills_para">
          MetaHuman is a cutting-edge technology developed by Epic Games, designed to revolutionize the process of creating digital human characters for games, film, and virtual experiences. This innovative toolset leverages advanced machine learning algorithms and real-time rendering techniques to generate highly realistic and customizable human characters with unprecedented speed and fidelity.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Fifth;
