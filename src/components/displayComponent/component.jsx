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
        {/* <div className="col-sm-1">
          <IconButton onClick={handlePrev}>
            <FaChevronLeft color="#fff" />
          </IconButton>
        </div> */}
        <div className="col-sm-6 ">
          <img
            src={image1}
            width="450px"
            className="image22 process_hover  "
            height="450px"
          />
        </div>
        <div className="col-sm-6 lormips">
          <div className="pl-left">
            <h2 className="multiplyer mb-4"> EMPOWER YOUR VISION</h2>
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
