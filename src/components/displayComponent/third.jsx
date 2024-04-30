import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const Third = () => {
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
          <h2 className="onbord mb-4">INTELLIGENT AI ASSISTANCE</h2>
          <p className="skills_para">
          The provided C++ source code implements a basic multiplayer game server using sockets for communication. Upon execution, the server initializes a socket and binds it to a specified port, enabling it to listen for incoming connections from clients.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Third;
