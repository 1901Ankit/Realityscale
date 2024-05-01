import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const Fourth = () => {
  Aos.init();
  return (
    <div className="container p-0 events-content">
    <div className="row align-items-center mt-3">
        <div className="col-sm-12 ">
          <img
            src={image1}
            width="100%"
            className="image22 process_hover  "
            height="500px"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 lormips">
        <div className="pl-left">
          <h2 className="onbord mb-4">STREAMLINED MARKETING</h2>
          <p className="skills_para">
          The blueprint for a multiplayer game lobby system entails several key components designed to facilitate player interaction and game setup. At its core lies the main lobby scene, serving as the gateway for players to initiate various actions such as creating or joining game rooms, adjusting settings, and connecting with friends online.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Fourth;
