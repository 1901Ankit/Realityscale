import React from "react";
import image1 from "../../assests/images/landing/proche.jpg";
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
    </div>
  );
};

export default Fourth;
