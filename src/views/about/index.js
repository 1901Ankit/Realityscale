import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import image1 from "../../assests/images/Welcome to Reality Scale/Welcome_to_Reality_Scale.webp";
import Aos from "aos";
const About = () => {
  Aos.init();
  // function setupAnimations() {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const appearances = document.querySelectorAll(".mil-up");

  //   appearances.forEach((section) => {
  //     gsap.fromTo(
  //       section,
  //       {
  //         opacity: 0,
  //         y: 40,
  //         scale: 0.98,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.4,
  //         ease: "sine",
  //         scrollTrigger: {
  //           trigger: section,
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   const scaleImages = document.querySelectorAll(".mil-scale");

  //   scaleImages.forEach((section) => {
  //     const value1 = parseFloat(section.getAttribute("data-value-1"));
  //     const value2 = parseFloat(section.getAttribute("data-value-2"));
  //     gsap.fromTo(
  //       section,
  //       {
  //         scale: value1,
  //       },
  //       {
  //         scale: value2,
  //         ease: "sine",
  //         scrollTrigger: {
  //           trigger: section,
  //           scrub: true,
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   if (window.innerWidth > 960) {
  //     const parallaxImages = document.querySelectorAll(".mil-parallax");
  //     parallaxImages.forEach((section) => {
  //       const value1 = parseFloat(section.getAttribute("data-value-1"));
  //       const value2 = parseFloat(section.getAttribute("data-value-2"));
  //       gsap.fromTo(
  //         section,
  //         {
  //           y: value1,
  //         },
  //         {
  //           y: value2,
  //           ease: "sine",
  //           scrollTrigger: {
  //             trigger: section,
  //             scrub: true,
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       );
  //     });

  //     const rotateSections = document.querySelectorAll(".mil-rotate");
  //     rotateSections.forEach((section) => {
  //       const value = parseFloat(section.getAttribute("data-value"));
  //       gsap.to(section, {
  //         rotation: value,
  //         ease: "sine",
  //         scrollTrigger: {
  //           trigger: section,
  //           scrub: true,
  //           toggleActions: "play none none reverse",
  //         },
  //       });
  //     });
  //   }
  // }

  // window.addEventListener("load", setupAnimations);

  return (
    <div className="container mil-p-120-30" id="about">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-xl-5">
          <div
            className="mil-mb-90"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <h2 className="mil-up mil-mb-30">
              Welcome <br />
              to{" "}
              <span
                className="mil-thin"
                style={{ fontWeight: "100" }}
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                Reality Scale
              </span>
            </h2>{" "}
            <p className="fw-300">
              Where Innovation Bridges the Digital and Physical Realms.
            </p>
            <p className="mil-up mil-mb-10">
              <span className=" fw-bold">At Reality Scale,</span>
              <span
                className="mx-1 fw-300"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                we are driven by a vision to revolutionize digital presentations
                across industries. Our studio is at the forefront of creating
                interactive experiences that not only captivate but also
                seamlessly integrate with practical business applications.
              </span>
            </p>
            <p className="mil-up mil-mb-10">
              <span className=" fw-bold">Innovation is Our Passion:</span>
              <span
                className="mx-1 fw-300"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                it's the core of our mission. By continuously pushing the
                boundaries of immersive technology, we provide businesses with
                unique tools to enhance customer interaction.
              </span>
            </p>
            <p className="mil-up mil-mb-60">
              <span className=" fw-bold">Visualize the Future:</span>

              <span
                className="mx-1 fw-300"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
              >
                Imagine a world where digital interactions rival the depth and
                detail of the real world. Reality Scale makes it a reality,
                offering a suite of tools that bring unprecedented realism and
                interactivity to your digital products.
              </span>
            </p>
            <div
              className="mil-about-quote"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <div className="mil-avatar mil-up">
                <img src={image1} alt="Founder" />
              </div>
              <h6 className="mil-quote mil-up text-black">
                Passionately Creating{" "}
                <span className="mil-thin">Design Wonders:</span> Unleashing{" "}
                <span className="mil-thin">Boundless Creativity</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="mil-about-photo mil-mb-90">
            <div className="mil-lines-place">
              <svg
                width="250"
                viewBox="0 0 300 1404"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mil-lines"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                  className="mil-move"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                  className="mil-move"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                  className="mil-move"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M300 1175H0V1174H300V1175Z"
                  className="mil-move"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                  className="mil-move"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                  className="mil-move"
                ></path>
              </svg>
            </div>
            <div
              className="mil-up mil-img-frame"
              style={{ paddingBottom: "160%" }}
            >
              <img
                src={image1}
                alt="img"
                className="mil-scale"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-easing="ease"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top"
                data-value-1="1"
                data-value-2="1.2"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale(1.1353, 1.1353)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
