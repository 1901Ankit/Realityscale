import React, { useEffect } from "react";
import "./index.css";
const Progressbar = () => {
  useEffect(() => {
    const progressBar = document.querySelector(".mil-progress");
    if (progressBar) {
      const handleScroll = () => {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        progressBar.style.height = scrollPercentage + "%";
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="mil-progress-track">
      <div className="mil-progress"></div>
    </div>
  );
};

export default Progressbar;
