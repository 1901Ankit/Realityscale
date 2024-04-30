import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenMax, Power3 } from "gsap";
import Keyfeature from "../keyfeature";
import About from "../about";
import Business from "../unique";
import Production from "../production";
import TeamSection from "../team";
import FAQ from "../faq";
import Range from "../../components/rngecaroul";
import Multicarousel from "../testimonal";
import Sliderlogo from "../logos";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import GameCollection from "../game";
import Game from "../game";
import { Container, Grid, Typography } from "@mui/material";
import data from "../../assests/data/data";
import Loader from "../../components/loader";
import $ from "jquery";
import Swup from "swup";
import Mouse from "../../components/mouse";
const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cloneAndAppend = (sourceSelector, targetSelector) => {
      const sourceElement = document.querySelector(sourceSelector);
      const targetElement = document.querySelector(targetSelector);

      if (sourceElement && targetElement) {
        const clone = sourceElement.cloneNode(true);
        targetElement.appendChild(clone);
      }
    };

    // cloneAndAppend('.mil-arrow', '.mil-arrow-place');
    cloneAndAppend(".mil-dodecahedron", ".mil-animation");
    cloneAndAppend(".mil-lines", ".mil-lines-place");
    cloneAndAppend(".mil-main-menu ul li.mil-active > a", ".mil-current-page");
  }, []);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  //----scrolldown----//
  // Wrap the animation setup in a function
function setupAnimations() {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Debugging log to ensure the setup function is running
  console.log("Effect setup is running!");

  try {
      // Animation for elements with class "mil-up"
      const appearances = document.querySelectorAll(".mil-up");
      console.log("Appearances found:", appearances.length);
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

      // Animation for elements with class "mil-scale"
      const scaleImages = document.querySelectorAll(".mil-scale");
      console.log("Scale images found:", scaleImages.length);
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

      // Animation for elements with class "mil-parallax" (if applicable)
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

          // Animation for elements with class "mil-rotate" (if applicable)
          const rotateSections = document.querySelectorAll(".mil-rotate");
          rotateSections.forEach((section) => {
              const value = parseFloat(section.getAttribute("data-value"));
              gsap.to(section, {
                  rotation: value,
                  ease: "sine",
                  scrollTrigger: {
                      trigger: section,
                      scrub: true,
                      toggleActions: "play none none reverse",
                  },
              });
          });
      }
  } catch (error) {
      // Log any errors to the console for debugging
      console.error("Error occurred:", error);
  }
}

// Call the setupAnimations function when the window loads
window.addEventListener("load", setupAnimations);

  //------endscrolldown-----//

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: {
        scrub: 0.3,
      },
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
      x: -30,
      opacity: 0,
    });

    gsap.to(btt, {
      x: 0,
      opacity: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: "body",
        start: "top -40%",
        end: "top -40%",
        toggleActions: "play none reverse none",
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const arrowPlace = document.querySelector(".mil-arrow-place");
    if (arrowPlace) {
      const arrow = arrowPlace.querySelector(".mil-arrow");
      if (arrow) {
        arrowPlace.appendChild(arrow.cloneNode(true));
      }
    }

    const animation = document.querySelector(".mil-animation");
    if (animation) {
      const dodecahedron = animation.querySelector(".mil-dodecahedron");
      if (dodecahedron) {
        animation.appendChild(dodecahedron.cloneNode(true));
      }
    }

    const linesPlace = document.querySelector(".mil-lines-place");
    if (linesPlace) {
      const lines = linesPlace.querySelector(".mil-lines");
      if (lines) {
        linesPlace.appendChild(lines.cloneNode(true));
      }
    }

    const currentPage = document.querySelector(".mil-current-page");
    if (currentPage) {
      const activeLink = document.querySelector(
        ".mil-main-menu ul li.mil-active > a"
      );
      if (activeLink) {
        currentPage.appendChild(activeLink.cloneNode(true));
      }
    }
  }, []);

  //---------- mainmenu-------//
  useEffect(() => {
    function toggleMenu() {
      $(".mil-menu-btn").toggleClass("mil-active");
      $(".mil-menu").toggleClass("mil-active");
      $(".mil-menu-frame").toggleClass("mil-active");
      $("body").toggleClass("menu-open");
      if ($("body").hasClass("menu-open")) {
        $("body").css("overflow-y", "hidden");
      } else {
        $("body").css("overflow-y", "auto");
      }
    }
    $(".mil-main-menu li").on("click", function (event) {
      const link = $(this).find("a").attr("href");
      if (link) {
        event.preventDefault();
        toggleMenu();
        window.location.href = link;
      }
    });
    $(".mil-menu-btn").on("click", toggleMenu);
    return () => {
      $(".mil-menu-btn").off("click", toggleMenu);
      $(".mil-main-menu li").off("click");
      $("body").css("overflow-y", "auto");
    };
  }, []);

  //---- end mainmenu-------//
  return (
    <>
      <Loader />
      <Mouse />
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>
      <div className="mil-menu-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            <img src={logo} style={{ width: "20%" }} />
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>

        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    <li class="mil-has-children">
                      <a href="#">HomePage</a>
                    </li>
                    <li class="mil-has-children">
                      <a href="#">Portfolio</a>
                    </li>
                    <li class="mil-has-children">
                      <a href="#">Services</a>
                    </li>
                    <li class="mil-has-children">
                      <a href="#">Newsletter</a>
                    </li>
                    <li class="mil-has-children">
                      <a href="#">Other pages</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div
                        className="mil-animation mil-position-1 mil-scale"
                        data-value-1="2"
                        data-value-2="2"
                      ></div>
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Projects</h6>

                        <ul className="mil-menu-list">
                          <li>
                            <a href="project-1.html" className="mil-light-soft">
                              Interior design studio
                            </a>
                          </li>
                          <li>
                            <a href="project-2.html" className="mil-light-soft">
                              Home Security Camera
                            </a>
                          </li>
                          <li>
                            <a href="project-3.html" className="mil-light-soft">
                              Kemia Honest Skincare
                            </a>
                          </li>
                          <li>
                            <a href="project-4.html" className="mil-light-soft">
                              Cascade of Lava
                            </a>
                          </li>
                          <li>
                            <a href="project-5.html" className="mil-light-soft">
                              Air Pro by Molekule
                            </a>
                          </li>
                          <li>
                            <a href="project-6.html" className="mil-light-soft">
                              Tony's Chocolonely
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>

                        <ul className="mil-menu-list">
                          <li>
                            <a href="#." className="mil-light-soft">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Terms and conditions
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Cookie Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Canada</h6>

                        <p className="mil-light-soft mil-up">
                          71 South Los Carneros Road, California
                          <span className="mil-no-wrap">+51 174 705 812</span>
                        </p>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Germany</h6>

                        <p className="mil-light-soft">
                          Leehove 40, 2678 MC De Lier, Netherlands{" "}
                          <span className="mil-no-wrap">+31 174 705 811</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-curtain"></div>
      <div className="mil-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            <img src={logo} style={{ width: "20%" }} />
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-arrow-place">
              <span className="text-grey">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mil-slider-arrow mil-revi-next mil-arrow-place"
              >
                <path
                  d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
                  fill="#000000"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="7"
              data-value-2="1.6"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(2.5178, 2.5178)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="mil-pentagon">
                    {[...Array(5)].map((_, index) => (
                      <div key={index}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="4"
              data-value-2="1"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(1.2836, 1.2836)",
              }}
            >
              <div className="mil-dodecahedron">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="mil-pentagon">
                    {[...Array(5)].map((_, index) => (
                      <div key={index}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mil-animation mil-position-3 mil-scale"
              data-value-1="1.2"
              data-value-2=".1"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(0.4716, 0.4716)",
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

          <div className="mil-gradient"></div>

          <div className="container">
            <div
              className="mil-banner-content mil-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <h1 className="mil-muted mil-mb-10">
                Designing <span className="mil-thin">a Better</span>
                <br /> World <span className="mil-thin">Today</span>
              </h1>
              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <p className="mil-light-soft mil-mb-60">
                    Welcome to our world of endless imagination and boundless
                    creativity. Together, let's embark on a remarkable journey
                    where dreams become tangible realities.
                  </p>
                </div>
              </div>
              <a href="#" className="mil-button mil-arrow-place mil-btn-space">
                <span> Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </a>
              <a href="#" className="mil-link mil-muted mil-arrow-place">
                <span>What we do</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </a>
              <div className="mil-circle-text">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                  className="mil-ct-svg mil-rotate"
                  data-value="360"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform:
                      "translate3d(0px, 0px, 0px) rotate(159.782deg) scale(2, 2)",
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    ></path>
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none"></circle>
                  <g>
                    <use xlinkHref="#circlePath" fill="none"></use>
                    <text style={{ letterSpacing: "6.5px" }}>
                      <textPath xlinkHref="#circlePath">
                        Scroll down - Scroll down -{" "}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <a
                  href="#about"
                  className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mil-arrow"
                  >
                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sliderlogo />
      <About />
      <Keyfeature />
      <Range />
      <div className="contactus_parallax">
        <div className="paralaxoverlay">
          <Container sx={{ p: 10, paddingBottom: 15 }}>
            <div>
              <p className="keyfetR text-center">OUR WORK SHOWCASE</p>
              <p className="keyfet text-center"> Every Our Best</p>
            </div>
            <Grid container spacing={5} marginTop={0}>
              {data.gameData.map((val, i) => (
                <Grid item lg={3} key={i}>
                  <Game
                    image={val.image}
                    heading={val.heading}
                    // subHeading={val.subHeading}
                    price={val.price}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={5} marginTop={0}>
              {data.gameData.map((val, i) => (
                <Grid item lg={3} key={i}>
                  <Game
                    image={val.image}
                    heading={val.heading}
                    // subHeading={val.subHeading}
                    // price={val.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
      <Business />
      {/* <TeamSection /> */}
      <Multicarousel />

      <Production />
      <FAQ />
    </>
  );
};
export default Home;
