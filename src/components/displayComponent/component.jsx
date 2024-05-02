import React from "react";
import Button from "../../components/button";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
import { IconButton } from "@mui/material";
const Component = ({ handleNext, handlePrev }) => {
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
            <h2 className="multiplyer mb-4 "> EMPOWER YOUR VISION</h2>
            <p className="skills_para">
              A multiplayer framework serves as the backbone for creating online
              multiplayer experiences across a wide range of applications,
              including video games, virtual worlds, collaborative platforms,
              and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
