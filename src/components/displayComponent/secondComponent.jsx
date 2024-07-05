import React from "react";
import image1 from "../../assests/images/work/mahindra/mahindra.png";
const SecondComponent = () => {
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
          {/* <div id="video" class="hidden-xs loaded">
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/cvdP6SaY1qI?si=Mr9Ah_9W4eqwL5rO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
