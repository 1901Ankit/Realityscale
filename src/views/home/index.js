import React, { useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Keyfeature from "../keyfeature";
import About from "../about";
import Business from "../unique";
import Production from "../production";
import FAQ from "../faq";
import Range from "../../components/rngecaroul";
import Multicarousel from "../testimonal";
import Sliderlogo from "../logos";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logoe from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import Game from "../game";
import { Container, Grid, Typography } from "@mui/material";
import data from "../../assests/data/data";
import Loader from "../../components/loader";
import $ from "jquery";
import Mouse from "../../components/mouse";
import { useNavigate } from "react-router-dom";
import video from "../../assests/video/police.mp4";
import ArrowSVG from "../../components/arrow";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.to(".element", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".trigger-element",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  const projects = [
    "Interior design studio",
    "Home Security Camera",
    "Kemia Honest Skincare",
    "Cascade of Lava",
    "Air Pro by Molekule",
    "Tony's Chocolonely",
  ];

  const usefulLinks = [
    "Privacy Policy",
    "Terms and conditions",
    "Cookie Policy",
    "Careers",
  ];

  const address =
    "2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh, 201307";

  const cloneAndAppend = (sourceSelector, targetSelector) => {
    const source = document.querySelector(sourceSelector);
    const target = document.querySelector(targetSelector);
    if (source && target) target.appendChild(source.cloneNode(true));
  };

  const menuBtnHandler = () => {
    $(".mil-menu-btn, .mil-menu, .mil-menu-frame, body").toggleClass(
      "mil-active menu-open"
    );
    $("body").css(
      "overflow-y",
      $("body").hasClass("menu-open") ? "hidden" : "auto"
    );
  };

  const menuItemHandler = (event) => {
    const link = $(event.currentTarget).find("a").attr("href");
    if (link) {
      event.preventDefault();
      $(".mil-menu-btn, .mil-menu, .mil-menu-frame, body").removeClass(
        "mil-active menu-open"
      );
      $("body").css("overflow-y", "auto");
      setTimeout(() => (window.location.href = link), 300);
    }
  };

  useEffect(() => {
    gsap.to(".element", { duration: 1, opacity: 0 });
    const sections = [
      ".mil-dodecahedron",
      ".mil-lines",
      ".mil-main-menu ul li.mil-active > a",
    ];
    sections.forEach((section) =>
      cloneAndAppend(
        section,
        section.endsWith("a") ? ".mil-current-page" : ".mil-animation"
      )
    );
  }, []);

  useEffect(() => {
    gsap.to(".element", { duration: 1, opacity: 0 });
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: {
        trigger: document.body,
        start: "top 0",
        end: "bottom 0",
        scrub: 0.3,
      },
    });

    const btt = document.querySelector(".mil-back-to-top .mil-link");
    if (btt) {
      gsap.set(btt, { x: -30, opacity: 0 });
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
    }
  }, []);

  useEffect(() => {
    gsap.to(".element", { duration: 1, opacity: 0 });
    $(".mil-menu-btn").on("click", menuBtnHandler);
    $(".mil-main-menu li").on("click", menuItemHandler);
    return () => {
      $(".mil-menu-btn, .mil-main-menu li").off("click");
      $("body").css("overflow-y", "auto");
    };
  }, []);

  const navigate = useNavigate();
  const Member = () => {
    navigate("/team");
  };
  const navigater = useNavigate();
  const Contactus = () => {
    navigate("/contact");
  };

  function ProjectItem({ name }) {
    return (
      <li>
        <a href="#" className="mil-light-soft">
          {name}
        </a>
      </li>
    );
  }

  function UsefulLink({ name }) {
    return (
      <li>
        <a href="#" className="mil-light-soft">
          {name}
        </a>
      </li>
    );
  }

  function Address({ address }) {
    return (
      <div className="col-md-6 col-lg-6">
        <h6 className="mil-muted mil-up mil-mb-10">Noida</h6>
        <p className="mil-light-soft mil-up">{address}</p>
      </div>
    );
  }

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
            <img src={logoe} style={{ width: "20%" }} />
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>

        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5 mt-5">
                <nav className="mil-main-menu" id="">
                  <ul className="unlisted">
                    <li className="mil-has-children mil-active">
                      <span>Home</span>
                    </li>
                    <li className="mil-has-children">
                      <span className="" onClick={Member}>
                        Team
                      </span>
                    </li>
                    <li className="mil-has-children">
                      <span className="" onClick={Contactus}>
                        Contact us
                      </span>
                    </li>
                    <li className="mil-has-children">
                      <span>Newsletter</span>
                    </li>
                    <li className="mil-has-children">
                      <span>Other's</span>
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
                        <h6 className="mil-muted mil-mb-10">Projects</h6>
                        <ul className="mil-menu-list" style={{ padding: "0" }}>
                          {projects.map((project, index) => (
                            <ProjectItem key={index} name={project} />
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-10">Useful links</h6>
                        <ul className="mil-menu-list" style={{ padding: "0" }}>
                          {usefulLinks.map((link, index) => (
                            <UsefulLink key={index} name={link} />
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <Address address={address} />
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
            <img
              src={logo}
              style={{ width: "20%" }}
              className="logoimagesystm"
            />
          </a>
          <a href="/" className="mil-logo">
            <img
              src={logoe}
              style={{ width: "20%" }}
              className="logoimagemobile"
            />
          </a>

          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div class="mil-current-page">
            <span>Homepage</span>
          </div>
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-arrow-place">
              <span className="text-grey">Back to top</span>

              <ArrowSVG
                className="mil-slider-arrow mil-revi-next mil-arrow-place"
                fill="#000000"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="6"
              data-value-2="1.3"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale(1.6454,1.6454)",
                translate: "none",
                rotate: "none",
                scale: "none",
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

          <div className="container mil-p-120-30">
            <div
              className=" mil-up"
              style={{
                opacity: 1,
              }}
            >
              <div className="systemvideo">
                <div className="row align-items-center d-flex justify-content-center ">
                  <div className="" style={{ position: "absolute" }}>
                    <div className="col-md-7 col-lg-6">
                      <h1 className="mil-mutede mil-mb-30">
                        Your{" "}
                        <span
                          className="mil-thin"
                          style={{ fontWeight: "100px" }}
                        >
                          Digital
                        </span>
                        <br /> Innovation{" "}
                        <span className="mil-thin">Partner</span>
                      </h1>

                      <p className="mil-light-soft mil-mb-60 text-white">
                        We craft solutions that elevate your business
                        <br />
                        interactions and customer engagements
                        <br /> to new realities
                      </p>
                      <a
                        href="/contact"
                        className="mil-button mil-arrow-place mil-btn-space"
                      >
                        <span> Contact Us</span>
                        <ArrowSVG className="mil-arrow" fill="#000000" />
                      </a>
                      <a
                        href="#"
                        className="mil-link mil-muted mil-arrow-place"
                      >
                        <span>What we do</span>
                        <ArrowSVG className="mil-arrow" fill="#000000" />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-7 col-lg-6">
                    <div className="jiskaksia">
                      <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="video"
                        style={{ pointerEvents: "none" }}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobilevideo">
                <div className="row ">
                  <div className="col-md-6 col-lg-6">
                    <div className="">
                      <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="video"
                        style={{ pointerEvents: "none" }}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div
                    className="col-md-6  col-lg-6"
                    style={{ marginTop: "35px" }}
                  >
                    <h1 className="mil-mutede">
                      Your{" "}
                      <span
                        className="mil-thin"
                        style={{ fontWeight: "100px" }}
                      >
                        Imagination
                      </span>
                      <br /> Meets{" "}
                      <span className="mil-thin">Our Innovation</span>
                    </h1>

                    <p
                      className="mil-light-soft mil-mb-30 text-white"
                      style={{ fontSize: "12px" }}
                    >
                      Welcome to our world of endless imagination and boundless
                      creativity. Together, let's embark on a remarkable journey
                      where dreams become tangible realities.
                    </p>
                    <a
                      href="/contact"
                      className="mil-button mil-arrow-place mil-btn-space"
                    >
                      <span> Contact Us</span>
                      <ArrowSVG className="mil-arrow" fill="#000000" />
                    </a>
                    <a href="#" className="mil-link mil-muted mil-arrow-place">
                      <span>What we do</span>
                      <ArrowSVG className="mil-arrow" fill="#000000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mil-circle-text ">
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
                  <ArrowSVG className="mil-arrow" fill="#000000" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sliderlogo />
      <Range />
      <About />
      <Keyfeature />

      <div className="contactus_parallax">
        <div className="paralaxoverlay">
          <Container sx={{ p: { lg: 5, xs: 5 }, paddingBottom: 15 }}>
            <div>
              <p className="keyfetR text-center mt-5">
                LET REALITY SCALE HELP YOU
              </p>
              <h2
                className="mil-h3 mil-muted mil-center"
                style={{ color: "white", fontSize:"58px" }}
              >
                Transform
              </h2>
              <p className="keyfetE text-center mt-3">
                {" "}
                how you showcase your products and engage with your customers!
              </p>
            </div>
            <Grid
              container
              spacing={{ lg: 5, xs: 2 }}
              marginTop={0}
              marginBottom={4}
              className="mt-2"
            >
              {data.gameData.map((val, i) => (
                <Grid item lg={4} xs={12} key={i}>
                  <Game
                    image={val.image}
                    heading={val.heading}
                    subHeading={val.subHeading}
                    price={val.price}
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
