import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import image1 from "../../assests/images/landing/plane.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Uniq_production from "../../components/uniq_prodution";
import unique from "../../assests/data/unique";
const Business = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const appearances = document.querySelectorAll(".mil-up");
    appearances.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const scaleImages = document.querySelectorAll(".mil-scale");
    scaleImages.forEach((section) => {
      const value1 = parseFloat(section.getAttribute("data-value-1"));
      const value2 = parseFloat(section.getAttribute("data-value-2"));
      gsap.fromTo(
        section,
        {
          scale: value1,
        },
        {
          scale: value2,
          ease: "sine",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  let data = [
    {
      head: unique.head1,
      para: unique.para1,
      img: unique.img1,
    },
    {
      head: unique.head2,
      para: unique.para2,
      img: unique.img2,
    },
    {
      head: unique.head3,
      para: unique.para3,
      img: unique.img3,
    },
    {
      head: unique.head4,
      para: unique.para4,
      img: unique.img4,
    },
    {
      head: unique.head5,
      para: unique.para5,
      img: unique.img5,
    },
    {
      head: unique.head6,
      para: unique.para6,
      img: unique.img6,
    },
    {
      head: unique.head7,
      para: unique.para7,
      img: unique.img7,
    },
    {
      head: unique.head8,
      para: unique.para8,
      img: unique.img8,
    },
  ];
  return (
    <div className=" mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="2.4"
              data-value-2="1.4"
              style={{
                top: "200px",
                right: "100px",
                transform: "translate3d(0px, 0px, 0px) scale(0, 0)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div className="mil-pentagon" key={index}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="2"
              data-value-2="1"
              style={{
                left: "50px",
                top:"60px",
                transform: "translate3d(0px, 0px, 0px) scale(1.236, 1.236)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div className="mil-pentagon" key={index}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up text-grey">
                  Professionals focused on helping your brand
                  <br />
                  grow and move forward.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15 ">
              <span className="mil-text-image">
                <img src={image1} alt="team" />
              </span>
              <h2
                className="mil-h1 mil-muted mil-center"
                style={{ color: "white" }}
              >
                Unique <span className="mil-thin">Ideas</span>
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2
                className="mil-h1 mil-muted mil-center"
                style={{ color: "white" }}
              >
                For Your <span className="mil-thin">Business.</span>
              </h2>
              <div className="mil-services-button mil-button mil-arrow-place">
                <span>What we do</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            {data.map((val) => (
              <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                <Uniq_production
                  head={val.head}
                  para={val.para}
                  img={val.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;