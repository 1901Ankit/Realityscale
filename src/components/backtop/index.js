import React, { useEffect } from "react";
import "./index.css";
import ArrowSVG from "../arrow";
const Backtop = () => {
  useEffect(() => {
    const btt = document.querySelector(".mil-back-to-top .mil-link");
    btt.style.transform = "translateX(-30px)";
    btt.style.opacity = 0;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        btt.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        btt.style.transform = "translateX(0)";
        btt.style.opacity = 1;
      } else {
        btt.style.transition = "none";
        btt.style.transform = "translateX(-30px)";
        btt.style.opacity = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="mil-back-to-top">
      <a href="#top" className="mil-link mil-dark mil-arrow-place">
        <span className="text-grey">Back to top</span>
        <ArrowSVG
          className="mil-slider-arrow mil-revi-next mil-arrow-place"
          fill="#000000"
        />
      </a>
    </div>
  );
};

export default Backtop;
