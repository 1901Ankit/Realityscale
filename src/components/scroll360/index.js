import React, { useEffect, useRef, useState } from "react";
import ArrowSVG from "../arrow";
import "./index.css";
const Scroll = () => {
  return (
    <div className="mil-circle-text" style={{ position: "absolute" }}>
      <a href="#" className="mil-link mil-muted mil-arrow-place">
        <span>What we do</span>
        <ArrowSVG className="mil-arrow" fill="#000000" />
      </a>
    </div>
  );
};

export default Scroll;
