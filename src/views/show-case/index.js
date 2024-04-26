import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  faGlobe,
  faRocket,
  faBriefcase,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FaGoogle } from "react-icons/fa";
import image1 from "../../assests/images/landing/cube.jpg";
import image2 from "../../assests/images/showcase/grayscale.jpg";
import image3 from "../../assests/images/showcase/lava.jpg";
import image4 from "../../assests/images/showcase/monochrom.jpg";

const ShowCase = () => {
  const [timeRunning, setTimeRunning] = useState(1000);
  const [timeAutoNext, setTimeAutoNext] = useState(3000);

  let runNextAuto;

  useEffect(() => {
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [timeAutoNext]);

  const showSlider = (type) => {
    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");

    let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    let runTimeOut;

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);
  };

  return (
    <>
<div className="container-fluid p-0">
    <div className="showcasebanner">
      <div className="overlay">
      <div>
          <p className="imagination text-center">Show Case</p>
        </div>
    </div>
    </div>
    </div>

      <div className="carousel m-auto">
        <div className="list">
          <div className="item">
            <img src={image1}  className="" />

            <div className="content">
              <div className="title"> Lorem</div>
              <div className="topic">Ipsum</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image2} />

            <div className="content">
              <div className="title"> Lorem</div>
              <div className="topic">Ipsum</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image3} />

            <div className="content">
              <div className="title"> Lorem</div>
              <div className="topic">Ipsum</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
            </div>
          </div>
          <div className="item">
            <img src={image4} />

            <div className="content">
              <div className="title"> Lorem</div>
              <div className="topic">Ipsum</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
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
            <img src={image2} />
            <div className="content">
              <div className="title">Key Feature</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image3} />
            <div className="content">
              <div className="title">Key Feature</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={image4} />
            <div className="content">
              <div className="title">Key Feature</div>
              <div className="description">Description</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowCase;
