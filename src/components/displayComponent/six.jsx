import React from "react";
import image1 from "../../assests/images/work/disneyslider/disneyslide.png";
const Sixth = () => {
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
            src="https://www.youtube.com/embed/HdZ0Q0LxjG4?si=qcmIpZzgUcppaCcM"
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

export default Sixth;
