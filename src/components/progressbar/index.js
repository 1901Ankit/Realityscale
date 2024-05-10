import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Progressbar = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / totalHeight) * 100;

      // Use GSAP's smooth animation with ease-out easing function
      gsap.to(progressBar, { height: `${scrollPercentage}%`, duration: 0.8, ease: "power3.out" });
    };

    updateProgress();

    // Create ScrollTrigger to smoothly update progress bar
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: updateProgress,
      onUpdateParams: ["{self}"],
      // Enable smoothing during scrolling
      scrub: true,
      // Adjust the throttle to control the smoothness of updates
      throttle: 50, // Adjust this value as needed
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
