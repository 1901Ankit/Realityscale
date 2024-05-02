import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logoe from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import Mouse from "../../components/mouse";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import "./index.css";
const Contactus = () => {
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
  function setupAnimations() {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    console.log("Effect is running!");

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
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const navigater = useNavigate();
  const Member = () => {
    navigate("/team");
  };

  let contact = [
    {
      icon: <BsFillTelephoneFill size={30} color="#f9a634" className="icon" />,
      name: "Contact Phone Number",
      value: "+444 555 666 777",
      value2: "+222 222 222 333",
    },
    {
      icon: <AiFillMail size={30} color="#f9a634" className="icon" />,
      name: "Our Email Address",
      value: "admin@gmail.com",
      value2: "example@gmail.com",
    },
    {
      icon: <HiLocationMarker size={30} color="#f9a634" className="icon" />,
      name: "Our Location",
      value:
        "2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh 201307",
    },
  ];
  return (
    <>
      {/* <Loader/> */}
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
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="">
                  <ul className="unlisted">
                    <li class="mil-has-children ">
                      <span className="" onClick={Home}>
                        Home
                      </span>
                    </li>
                    <li class="mil-has-children mil-active">
                      <span className="" onClick={Member}>
                        Team
                      </span>
                    </li>
                    <li class="mil-has-children">
                      <span>Services</span>
                    </li>
                    <li class="mil-has-children">
                      <span>Newsletter</span>
                    </li>
                    <li class="mil-has-children">
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
                          <li>
                            <a href="#" className="mil-light-soft">
                              Interior design studio
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Home Security Camera
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Kemia Honest Skincare
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Cascade of Lava
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Air Pro by Molekule
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Tony's Chocolonely
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-10">Useful links</h6>

                        <ul className="mil-menu-list" style={{ padding: "0" }}>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Terms and conditions
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Cookie Policy
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mil-light-soft">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                <div className="col-md-6 col-lg-6">
                      <h6 className="mil-muted mil-up mil-mb-10">Noida</h6>
      <p className="mil-light-soft mil-up">
      2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh, 201307
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

      <div class="mil-content">
        <div id="swupMain" class="mil-main-transition">
          <div class="mil-dark-bg">
            <div class="mil-inner-banner">
              <div class="mi-invert-fix">
                <div class="mil-banner-content mil-up">
                  <div class="mil-animation-frame">
                    <div
                      className="mil-animation mil-position-1 mil-scale"
                      data-value-1="7"
                      data-value-2="1.6"
                      style={{
                        transform: "translate3d(0px, 0px, 0px) scale(2, 2)",
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
                  <div class="container">
                    <ul class="mil-breadcrumbs mil-light mil-mb-60" style={{padding:"0"}}>
                      <li>
                        <a href="/">Homepage</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                    <h1 class="mil-muted mil-mb-60">
                      This is <span class="mil-thin">what</span>
                      <br /> we do <span class="mil-thin">best</span>
                    </h1>
                    <a
                      href="#services"
                      class="mil-link mil-accent mil-arrow-place mil-down-arrow"
                    >
                      <span className="text-white">Send Message</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="mil-arrow"
                      >
                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>



            
          </div>
        </div>
      </div>

      <section className="contact-information">
        <div
          className="container wow fadeInUp animated animated"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp",
          }}
        >
          <div className="container my-5">
            <div className="row">
              {contact.map((val) => (
                <div className="col-sm-4 p-4">
                  <div className="bord text-start p-4">
                    {val.icon}
                    <h5 className="text-white my-3">{val.name}</h5>
                    <p className="text-grey mb-0">{val.value}</p>
                    {val.value2 ? (
                      <p className="text-grey">{val.value2}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-two">
        <div
          className="container wow fadeInUp animated animated"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp",
          }}
        >
          <div className="section-title text-center">
            <h5 className="section-title__tagline section-title__tagline--has-dots text-grey">
              Let's Talk
            </h5>
            <h2 className="section-title__title text-white">
              Feel free to get in touch
              <br /> with Reality
            </h2>
          </div>
          <div className="contact-one__left text-center">
            <div className="contact-one__form-box">
              <form
                className="contact-one__form contact-form-validated"
                noValidate
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-one__input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-one__input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-one__input-box">
                      <input type="text" placeholder="Phone" name="phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-one__input-box">
                      <select name="casestudy">
                        <option
                          value=" 0
                    "
                        >
                          Please select options
                        </option>
                        <option
                          value="1
                      "
                        >
                          Select service 01
                        </option>
                        <option
                          value="2
                      "
                        >
                          Select service 02
                        </option>
                        <option
                          value="
                      3"
                        >
                          Select service 03
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-one__input-box">
                      <textarea
                        name="message"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="mil-services-button mil-button mil-arrow-place"
                    >
                      <span>Send Message</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="mil-arrow"
                      >
                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
