import React, { useEffect, useRef, useState } from "react";
import ArrowSVG from "../arrow";
import "./index.css";
const Scroll = () => {
  return (
    <div className="mil-circle-text">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        className="mil-ct-svg mil-rotate "
        data-value="360"
        // ref={circleRef}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          ></path>
        </defs>
        <circle cx="150" cy="100" r="75" fill="none"></circle>
        <g>
          <use xlinkHref="#circlePath" fill="none"></use>
          <text style={{ letterSpacing: "6.5px" }}>
            <textPath xlinkHref="#circlePath">
              Scroll down - Scroll down -{" "}
            </textPath>
          </text>
        </g>
      </svg>
      <a
        href="#keyfeature's"
        className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
      >
        <ArrowSVG className="mil-arrow" fill="#000000" />
      </a>
    </div>
  );
};

export default Scroll;
