import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import image1 from "../../assests/images/landing/door.jpg";
import image2 from "../../assests/images/landing/plane.jpg";
import image3 from "../../assests/images/landing/cube.jpg";
import image4 from "../../assests/images/landing/proche.jpg";
import description from "../../assests/data/constant";
const Keyfeature = () => {
  const showSlider = () => {
    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");

    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");

    setTimeout(() => {
      carouselDom.classList.remove("next");
    }, 1000);
  };

  const handleSliderClick = () => {
    showSlider();
  };
  return (
    <>
      <div className="waper">
        <div className="waper" onClick={handleSliderClick}>
          <div className="carousel m-auto">
            <div className="list">
              <div className="item">
                <img src={image1} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading1}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading1}
                  </div>
                  <div className="des mt-3">
                    {description.description.message1}{" "}
                  </div>
                  <br />
                  <div className="des">
                    {description.description.submessage1}
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading2}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading2}
                  </div>
                  <div className="des mt-3">
                    {description.description.message2}{" "}
                  </div>
                  <br />
                  <div className="des">
                    {description.description.submessage2}
                  </div>
                </div>
              </div>
              <div className="item">
                {" "}
                <img src={image3} className="" />{" "}
                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading3}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading3}
                  </div>
                  <div className="des mt-3">
                    {description.description.message3}{" "}
                  </div>
                  <br />
                  <div className="des">
                    {description.description.submessage3}
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />

                <div className="content">
                  <div className="title">
                    {" "}
                    {description.description.heading4}
                  </div>
                  <div className="topic">
                    {" "}
                    {description.description.Subheading4}
                  </div>
                  <div className="des mt-3">
                    {description.description.message4}{" "}
                  </div>
                  <br />
                  <div className="des">
                    {description.description.submessage4}
                  </div>
                </div>
              </div>
            </div>

            <div className="thumbnail">
              <div className="item">
                <img src={image1} />
                <div className="content">
                  <div className="title">Cloud</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />
                <div className="content">
                  <div className="title">
Reality </div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image3} className="" />
                <div className="content">
                  <div className="title">Business</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />
                <div className="content">
                  <div className="title">Adaptive</div>
                  <div className="description">Description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyfeature;
