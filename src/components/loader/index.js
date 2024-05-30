import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";
import videoed from "../../assests/video/Realityloop.mp4";

const Loader = () => {
  const [showVideo, setShowVideo] = useState(true);
  const bodyRef = useRef(document.body);

  useEffect(() => {
    bodyRef.current.classList.add("no-scroll");
    window.scrollTo(0, 0);
    const loaderTimeout = setTimeout(() => {
      setShowVideo(false);
      startLoaderAnimation();
    }, 4000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  useEffect(() => {
    const video = document.querySelector(".videoed");
    const fadeDuration = 5;

    video.addEventListener("timeupdate", handleTimeUpdate);

    function handleTimeUpdate() {
      const videoDuration = video.duration;
      const currentTime = video.currentTime;
      const fadeTimeThreshold = 3;
      if (videoDuration - currentTime <= fadeTimeThreshold) {
        const opacity = fadeTimeThreshold;
        gsap.to(video, {
          opacity: opacity,
          duration: fadeDuration,
          ease: "power1.inOut",
        });
      }
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const startLoaderAnimation = () => {
    const timeline = gsap.timeline();
    timeline.to(".mil-preloader-animation", {
      opacity: 1,
    });

    const animationDuration = 0.8;
    timeline.fromTo(
      ".mil-animation-1 .mil-h3",
      { y: "30px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: 0.4 }
    );
    timeline.to(".mil-animation-1 .mil-h3", { opacity: 0, y: "-30" }, "+=.3");
    timeline.fromTo(
      ".mil-reveal-box",
      0.1,
      { opacity: 0 },
      { opacity: 1, x: "-30" }
    );
    timeline.to(".mil-reveal-box", 0.45, { width: "100%", x: 0 }, "+=.1");
    timeline.to(".mil-reveal-box", { right: "0" });
    timeline.to(".mil-reveal-box", 0.3, { width: "0%" });
    timeline.fromTo(
      ".mil-animation-2 .mil-h3",
      { opacity: 0 },
      { opacity: 1 },
      "-=.5"
    );
    timeline.to(
      ".mil-animation-2 .mil-h3",
      0.6,
      { opacity: 0, y: "-30" },
      "+=.5"
    );
    timeline.to(".mil-preloader", animationDuration, {
      opacity: 0,
      ease: "sine",
    });
    timeline.fromTo(
      ".mil-up",
      animationDuration,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: "sine",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: () => {
          bodyRef.current.classList.remove("no-scroll");
          document.querySelector(".mil-preloader").classList.add("mil-hidden");
        },
      },
      "-=1"
    );
  };

  return (
    <div className="mil-preloader">
      {showVideo && (
        <video
          autoPlay
          playsInline
          loop
          muted
          className="videoed"
          style={{ pointerEvents: "none" }}
        >
          <source src={videoed} type="video/mp4" />
        </video>
      )}

      <div className={`mil-preloader-animation ${!showVideo ? "visible" : ""}`}>
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin text-white fw-100">Where</p>
          <p className="mil-h3 mil-muted fw-500" style={{ color: "#ffd94a" }}>
            Imagination Meets
          </p>
          <p className="mil-h3 mil-muted mil-thin text-white fw-100">Reality</p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box"></p>
            <p className="mil-h3 mil-muted mil-thin text-white reltiy">
              <span
                className="mil-h3 mil-muted fw-500"
                style={{ color: "#ffd94a" }}
              >
                r
              </span>
              eality
              <span
                className="mil-h3 mil-muted fw-500"
                style={{ color: "#ffd94a" }}
              >
                {" "}
                s
              </span>
              cale.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
