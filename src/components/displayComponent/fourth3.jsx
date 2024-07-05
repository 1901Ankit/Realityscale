import React from "react";
import image1 from "../../assests/images/work/honda/kwid.png";
import Aos from "aos";
const Fourth3 = () => {
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
          {/* <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/u_Va60KhT88?si=2oF12gGQLghw-_bl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Fourth3;
