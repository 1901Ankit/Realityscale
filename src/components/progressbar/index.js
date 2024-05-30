import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const Progressbar = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / totalHeight) * 100;
      gsap.to(progressBar, {
        height: `${scrollPercentage}%`,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    updateProgress();
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: updateProgress,
      onUpdateParams: ["{self}"],
      scrub: true,
      throttle: 50,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mil-progress-track">
      <div ref={progressBarRef} className="mil-progress"></div>
    </div>
  );
};

export default Progressbar;
