import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import image1 from "../../assests/images/landing/plane.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Uniq_production from "../../components/uniq_prodution";
import unique from "../../assests/data/unique";
import ArrowSVG from "../../components/arrow";
import Aos from "aos";
import $ from "jquery";
const Business = () => {
  const appearance = document.querySelectorAll(".mil-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
  Aos.init();
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
    <div className=" mil-dark-bg ">
      <div className="mi-invert-fix">
        <div className="">
          <div className="mil-animation-frame">
            {/* <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="2"
              data-value-2="1"
              style={{
                top: "200px",
                right: "200px",
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
            </div> */}
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="2"
              data-value-2="1"
              style={{
                left: "20px",
                top: "60px",
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
        <div className="container mil-p-120-30">
          <div className="row">
            <div className="col-lg-7" style={{ textAlign: "right" }}>
              <span
                className="mil-suptitle mil-suptitle-right  mil-light-soft mil-up"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                  textAlign: "right",
                }}
              >
                Professionals focused on helping your brand <br />
                grow and move forward.
              </span>
            </div>
          </div>
          <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
            <span className="mil-text-image">
              <img src={image1} alt="team" />
            </span>
            <h2
              className="mil-h1 mil-muted mil-center uniidea"
              style={{ color: "#ffd94a" }}
            >
              Unique <span className="mil-thin">Ideas</span>
            </h2>
          </div>
          <div className="mil-complex-text justify-content-center mil-up">
            <h2
              className="mil-h1 mil-muted mil-center"
              style={{ color: "#ffd94a" }}
            >
              For Your <span className="mil-thin text-white">Business.</span>
            </h2>
            <div className="mil-services-button mil-button mil-arrow-place">
              <span>What we do</span>
              <ArrowSVG className="mil-arrow" />
            </div>
          </div>
          {/* </div> */}
          <div className="row mil-services-grid  mt-5">
            {data.map((val, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mil-services-grid-item p-0"
                // data-aos="fade-up"
                // data-aos-offset="20"
                // data-aos-delay={`${index * 100}`}
                // data-aos-duration="800" 
                // data-aos-easing="ease" 
                // data-aos-mirror="true"
                // data-aos-once="false"
                // data-aos-anchor-placement="top" 
              >
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
