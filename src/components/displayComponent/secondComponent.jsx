import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const SecondComponent = () => {
  Aos.init();
  return (
    <div class="container p-0 events-content">
    <div className="row align-items-center mt-3">
      <div className="col-sm-6 ">
        <img
            src={image1}
            width="550px"
            className="image22 process_hover  "
            height="600px"
            

        />
      </div>
      <div className="col-sm-6 lormips"
      
      >
        <div className="pl-left">
          <h2 className="onbord mb-4">SEAMLESS ACCESS</h2>
          <p className="skills_para">
      
When it comes to industry-leading graphics, there's a select group of companies and technologies that stand out for their cutting-edge advancements and innovative approaches. These graphics solutions not only push the boundaries of visual fidelity but also redefine the immersive experiences across various sectors, including gaming, film, design, and simulation.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SecondComponent;
