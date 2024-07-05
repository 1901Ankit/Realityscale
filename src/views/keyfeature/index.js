import React, { useRef } from "react";
import "./index.css";
import image1 from "../../assests/images/Features/cloud.webp";
import image2 from "../../assests/images/Features/realit.webp";
import image3 from "../../assests/images/Features/business.webp";
import image4 from "../../assests/images/Features/adaptive.webp";
import image5 from "../../assests/images/Features/content.webp";
import description from "../../assests/data/constant";
import Aos from "aos";

Aos.init();

const Keyfeature = () => {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const showSlider = () => {
    const carouselDom = carouselRef.current;
    const SliderDom = carouselDom.querySelector(".list");
    const thumbnailBorderDom = carouselDom.querySelector(".thumbnail");
    const SliderItemsDom = SliderDom.querySelectorAll(".item");
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
    setTimeout(() => {
      carouselDom.classList.remove("next");
    }, 1000);
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    showSlider();
  };

  return (
    <div className="container-fluid p-0" id="keyfeature's">
      <div className="waper">
        <div className="carousel m-auto" ref={carouselRef}>
          <div className="list">
            {[image1, image2, image3, image4, image5].map((image, index) => (
              <div className="item" key={index}>
                <img src={image} alt={`feature-${index}`} />
                <div className="content">
                  <div className="title">
                    {description.description[`heading${index + 1}`]}
                  </div>
                  <div className="topic">
                    {description.description[`Subheading${index + 1}`]}
                  </div>
                  <div className="des mt-3">
                    <span className="fw-bold mx-1">
                      {description.description[`span${index + 1}`]}
                    </span>
                    {description.description[`message${index + 1}`]}
                  </div>
                  <br />
                  <div className="des">
                    <span className="fw-bold mx-1">
                      {description.description[`subspan${index + 1}`]}
                    </span>
                    {description.description[`submessage${index + 1}`]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="thumbnail mil-p-120-30">
            {[image1, image2, image3, image4, image5].map((image, index) => (
              <div
                className={`item ${selectedIndex === index ? "selected" : ""}`}
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <img src={image} alt={`thumbnail-${index}`} />
                <div className="content">
                  <div className="description" style={{ color: "#ffd94a" }}>
                    {description.description[`heading${index + 1}`]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyfeature;
