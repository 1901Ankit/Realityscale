import React, { useState, useEffect } from "react";
import "./index.css";
import video from "../../assests/video/Reality-video.mp4";
import { Link } from "react-router-dom";
import ArrowSVG from "../../components/arrow";


const DEMOREALITY = () => {
  const [showRotateMessage, setShowRotateMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRotateMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container-fluid p-0 videoroew">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="videos"
          style={{ pointerEvents: "none" }}
        >
          <source src={video} />
        </video>
        <div className="sidetopcon ">
          <Link
            to="/contact"
            className="mil-button mil-arrow-place mil-btn-space"
          >
            <span> GET IN TOUCH </span>
            <ArrowSVG className="mil-arrow" fill="#000000" />
          </Link>
        </div>
      </div>

      {showRotateMessage && (
        <div className="container-fluid bg-blacked demoa">
          <div className="phonerota">
            <div className="phone"></div>
            <div className="messagerota">Please rotate your device!</div>
          </div>
        </div>
      )}
      {!showRotateMessage && (
        <div className="container-fluid p-0">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="videos"
            style={{ pointerEvents: "none" }}
          >
            <source src={video} />
          </video>
          <div className="sidetopcon ">
            <Link
              to="/contact"
              className="mil-button mil-arrow-place mil-btn-space"
            >
              <span> GET IN TOUCH </span>
              <ArrowSVG className="mil-arrow" fill="#000000" />
            </Link>
          </div>
        </div>
      )}

     
    </>
  );
};

export default DEMOREALITY;
