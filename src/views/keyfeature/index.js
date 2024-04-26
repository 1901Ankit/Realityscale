import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import image1 from "../../assests/images/landing/door.jpg";
import image2 from "../../assests/images/landing/plane.jpg";
import image3 from "../../assests/images/landing/cube.jpg";
import image4 from "../../assests/images/landing/proche.jpg";
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
                  <div className="title"> Lorem</div>
                  <div className="topic">Ipsum</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    sequi, rem magnam nesciunt minima placeat, itaque eum neque
                    officiis unde, eaque optio ratione aliquid assumenda facere
                    ab et quasi ducimus aut doloribus non numquam. Explicabo,
                    laboriosam nisi reprehenderit tempora at laborum natus unde.
                    Ut, exercitationem eum aperiam illo illum laudantium?
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />

                <div className="content">
                  <div className="title"> Lorem</div>
                  <div className="topic">Ipsum</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    sequi, rem magnam nesciunt minima placeat, itaque eum neque
                    officiis unde, eaque optio ratione aliquid assumenda facere
                    ab et quasi ducimus aut doloribus non numquam. Explicabo,
                    laboriosam nisi reprehenderit tempora at laborum natus unde.
                    Ut, exercitationem eum aperiam illo illum laudantium?
                  </div>
                </div>
              </div>
              <div className="item">
                {" "}
                <img src={image3} className="" />{" "}
                <div className="content">
                  <div className="title"> Lorem</div>
                  <div className="topic">Ipsum</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    sequi, rem magnam nesciunt minima placeat, itaque eum neque
                    officiis unde, eaque optio ratione aliquid assumenda facere
                    ab et quasi ducimus aut doloribus non numquam. Explicabo,
                    laboriosam nisi reprehenderit tempora at laborum natus unde.
                    Ut, exercitationem eum aperiam illo illum laudantium?
                  </div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />

                <div className="content">
                  <div className="title"> Lorem</div>
                  <div className="topic">Ipsum</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    sequi, rem magnam nesciunt minima placeat, itaque eum neque
                    officiis unde, eaque optio ratione aliquid assumenda facere
                    ab et quasi ducimus aut doloribus non numquam. Explicabo,
                    laboriosam nisi reprehenderit tempora at laborum natus unde.
                    Ut, exercitationem eum aperiam illo illum laudantium?
                  </div>
                </div>
              </div>
            </div>

            <div className="thumbnail">
              <div className="item">
                <img src={image1} />
                <div className="content">
                  <div className="title">Key Feature</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image2} className="" />
                <div className="content">
                  <div className="title">Key Feature</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image3} className="" />
                <div className="content">
                  <div className="title">Key Feature</div>
                  <div className="description">Description</div>
                </div>
              </div>
              <div className="item">
                <img src={image4} className="" />
                <div className="content">
                  <div className="title">Key Feature</div>
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
