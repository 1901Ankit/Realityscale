import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import image1 from "../../assests/images/landing/plane.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

    if (window.innerWidth > 960) {
      const parallaxImages = document.querySelectorAll(".mil-parallax");
      parallaxImages.forEach((section) => {
        const value1 = parseFloat(section.getAttribute("data-value-1"));
        const value2 = parseFloat(section.getAttribute("data-value-2"));
        gsap.fromTo(
          section,
          {
            y: value1,
          },
          {
            y: value2,
            ease: "sine",
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    const rotateSections = document.querySelectorAll(".mil-rotate");
    rotateSections.forEach((section) => {
      const value = parseFloat(section.getAttribute("data-value"));
      gsap.fromTo(
        section,
        {
          rotate: 0,
        },
        {
          rotate: value,
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
  return (
    <section className="mil-soft-bger">
      <div className="">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="2.4"
            data-value-2="1.4"
            style={{
              top: "300px",
              right: "-100px",
              transform: "translate3d(0px, 0px, 0px) scale(2.5178, 2.5178)",
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
              left: "150px",
              transform: "translate3d(0px, 0px, 0px) scale(1.2836, 1.2836)",
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
          <div className="mil-complex-text justify-content-center mil-up mil-mb-15 " >
            <span className="mil-text-image">
              <img src={image1} alt="team" />
            </span>
            <h2 className="mil-h1 mil-muted mil-center" style={{color:"white"}}>
              Unique <span className="mil-thin">Ideas</span>
            </h2>
          </div>
          <div className="mil-complex-text justify-content-center mil-up" >
            <h2 className="mil-h1 mil-muted mil-center"  style={{color:"white"}}>
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
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 ">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
        </div>
        <div className="row mil-services-grid m-0">
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
          <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
          <div className="mil-service-card-sm mil-up">
              <h5 className="mil-muteded mil-mb-30 text-white">
                Branding and <br />
                Identity Design
              </h5>
              <p className="mil-light-softer mil-mb-30 text-white">
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </p>
              <div className="mil-button mil-icon-button-sm mil-arrow-place">
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
        </div>
      </div>
    </section>
  );
};

export default Business;
