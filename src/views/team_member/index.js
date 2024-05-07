import React, { useState, useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./index.css";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logos from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import memberimage from "../../assests/images/human/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import Mouse from "../../components/mouse";
import ArrowSVG from "../../components/arrow";
import TeamMembercontent from "../../components/member";
import Progressbar from "../../components/progressbar";
import Backtop from "../../components/backtop";
const Member = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  //----scrolldown----//
  function setupAnimations() {
    // Register the ScrollTrigger plugin
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
  }

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
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const navigater = useNavigate();
  const Contactus = () => {
    navigate("/contact");
  };
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

  const address = {
    line1: "2nd Floor, D-320, Sector 63 Rd,",
    line2: "Sector 63, Noida, Uttar Pradesh, 201307",
  };
  const teamMembers = [
    {
      name: "Anna Oldman",
      role: "Art Director",
      image: memberimage,
      socialMedia: {
        instagram: "#",
        youtube: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];
  return (
    <>
      <Mouse />
      <Progressbar />
      <div className="mil-menu-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            <img src={logos} style={{ width: "20%" }} />
            {/* <img src={logoe} style={{ width: "20%" }} /> */}
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>

        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="">
                  <ul className="unlisted">
                    <li className="mil-has-children ">
                      <span className="" onClick={Home}>
                        Home
                      </span>
                    </li>
                    <li className="mil-has-children mil-active">
                      <span className="">Team</span>
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
                            <li key={index}>
                              <a href="#" className="mil-light-soft">
                                {project}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-10">Useful links</h6>
                        <ul className="mil-menu-list" style={{ padding: "0" }}>
                          {usefulLinks.map((link, index) => (
                            <li key={index}>
                              <a href="#" className="mil-light-soft">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-md-6 col-lg-6">
                        <h6 className="mil-muted mil-up mil-mb-10">Noida</h6>
                        <p className="mil-light-soft mil-up">
                          {address.line1},<br />
                          {address.line2}
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
            <img
              src={logo}
              style={{ width: "20%" }}
              className="logoimagesystm"
            />
          </a>
          <a href="/" className="mil-logo">
            <img
              src={logos}
              style={{ width: "20%" }}
              className="logoimagemobile"
            />
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page">
            <span>TEAM</span>
          </div>
          <Backtop />
        </div>
      </div>

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition" data-swup="0">
          <div className="mil-inner-banner">
            <div
              className="mil-banner-content mil-up"
              style={{
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                translate: "none",
              }}
            >
              <div className="mil-animation-frame">
                <div
                  className="mil-animation mil-position-4 mil-dark mil-scale"
                  data-value-1="6"
                  data-value-2="1.4"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale(1.9613, 1.9613)",
                    WebkitTransform:
                      "translate3d(0px, 0px, 0px) scale(1.9613, 1.9613)",
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
              <div className="container">
                <ul
                  className="mil-breadcrumbs mil-mb-60"
                  style={{ padding: "0" }}
                >
                  <li>
                    <a href="/">Homepage</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
                <h1 className="mil-mb-60" style={{ padding: "0" }}>
                  Meet <span className="mil-thin">Our</span>
                  <br /> Creative <span className="mil-thin">Team</span>
                </h1>
                <a
                  href="#team"
                  className="mil-link mil-dark mil-arrow-place mil-down-arrow"
                >
                  <span>Our team</span>
                  <ArrowSVG className="mil-arrow" fill="#000000" />
                </a>
              </div>
            </div>
          </div>

          <section id="team">
            <div className="container mil-p-120-90">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
              <div className="row">
                <div className="col-lg-10">
                  <span
                    className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up"
                    style={{
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 40px)",
                      opacity: 1,
                      translate: "none",
                    }}
                  >
                    Looking to make your mark? We'll help you turn <br /> your
                    project into a success story.
                  </span>
                </div>
              </div>
              <div className="mil-center">
                <h2
                  className="mil-up mil-mb-60"
                  style={{
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 40px)",
                    opacity: 1,
                    translate: "none",
                  }}
                >
                  Ready to bring your <span className="mil-thin">ideas to</span>{" "}
                  life? <br /> We're{" "}
                  <span className="mil-thin">here to help</span>
                </h2>
                <div
                  className="mil-up"
                  style={{
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 40px)",
                    opacity: 1,
                    translate: "none",
                  }}
                >
                  <a href="#" className="mil-button mil-arrow-place">
                    <span>Contact us</span>
                    <ArrowSVG className="mil-arrow" fill="#000000" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Member;
