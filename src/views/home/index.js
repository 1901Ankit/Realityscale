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
import video from "../../assests/video/Reality-video.mp4";
import ArrowSVG from "../../components/arrow";
import Scroll from "../../components/scroll360";
import Backtop from "../../components/backtop";
import Progressbar from "../../components/progressbar";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
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

  Aos.init();
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

  // const appearances = document.querySelectorAll(".mil-up");

  // appearances.forEach((section) => {
  //   section.style.opacity = 0;
  //   section.style.transform = "tra nslateY(40px) scale(0.98)";
  //   section.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  //   const sectionObserver = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           section.style.opacity = 1;
  //           section.style.transform = "translateY(0) scale(1)";
  //           observer.unobserve(section);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sectionObserver.observe(section);
  // });

  // const scaleImages = document.querySelectorAll(".mil-scale");

  // scaleImages.forEach((section) => {
  //   const value1 = parseFloat(section.dataset.value1);
  //   const value2 = parseFloat(section.dataset.value2);
  //   const sectionObserver = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           section.style.transform = `scale(${value2})`;
  //           observer.unobserve(section);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sectionObserver.observe(section);
  // });

  // const parallaxImages = document.querySelectorAll(".mil-parallax");

  // if (window.innerWidth > 960) {
  //   parallaxImages.forEach((section) => {
  //     const value1 = parseFloat(section.dataset.value1);
  //     const value2 = parseFloat(section.dataset.value2);
  //     const sectionObserver = new IntersectionObserver(
  //       (entries, observer) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             section.style.transform = `translateY(${value2}px)`;
  //             observer.unobserve(section);
  //           }
  //         });
  //       },
  //       { threshold: 0.5 }
  //     );

  //     sectionObserver.observe(section);
  //   });
  // }

  return (
    <>
      <Loader />
      <Mouse />
      <Progressbar />

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
                      <div className="col-lg-8">
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
              className="logoimagesystm"
              style={{ width: "20%" }}
            />
          </a>
          <a href="/" className="mil-logo">
            <img
              src={logoe}
              className="logoimagemobile"
              style={{ width: "20%" }}
            />
          </a>
          {/* <nav className="mil-navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav> */}
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>

        <div className="mil-frame-bottom">
          <div class="mil-current-page">
            <span>Homepage</span>
          </div>

          <Backtop />
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
                transform: "translate3d(0px, 0px, 0px) scale(2.5044,2.5044)",
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
          </div>

          <div className="mil-gradient"></div>

          <div className="container mil-mb-10">
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
                          className="mil-thins"
                          style={{ fontWeight: "100px" }}
                        >
                          Digital
                        </span>
                        <br /> Innovation{" "}
                        <span className="mil-thins">Partner</span>
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
                    <h1 className="mil-mutede mil-mb-30">
                      Your{" "}
                      <span
                        className="mil-thins"
                        style={{ fontWeight: "100px" }}
                      >
                        Digital
                      </span>
                      <br /> Innovation{" "}
                      <span className="mil-thins">Partner</span>
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
                    <a href="#" className="mil-link mil-muted mil-arrow-place">
                      <span>What we do</span>
                      <ArrowSVG className="mil-arrow" fill="#000000" />
                    </a>
                  </div>
                </div>
              </div>
              <Scroll />
            </div>
          </div>
        </div>
      </div>

      <Keyfeature />
      <Sliderlogo />
      <Range />
      <About />

      <div className="contactus_parallax">
  <div className="paralaxoverlay">
    <Container sx={{ p: { lg: 2, xs: 2 }, paddingBottom: 15 }}>
      <div
        className="mil-muteded mil-mb-30 mil-center mt-5"
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-delay="100"
        data-aos-duration="1200"
        data-aos-easing="ease" 
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        {" "}
        LET REALITY SCALE <br />{" "}
        <h1 className="helpyou mt-3">
          Help You
          <span className="mil-thin text-white"> Transform</span>
        </h1>
      </div>

      <p className="keyfetE mil-light-soft mil-center">
        how you showcase your products and engage with your customers!
      </p>

      <Grid
        container
        spacing={{ lg: 5, xs: 2 }}
        marginTop={0}
        marginBottom={4}
        className="mt-2"
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-delay="1000"
        data-aos-duration="1500"
        data-aos-easing="ease" 
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        {data.gameData.map((val, i) => (
          <Grid
            item
            lg={4}
            xs={12}
            key={i}
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="1000"
            data-aos-duration="1500"
            data-aos-easing="ease" 
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
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
