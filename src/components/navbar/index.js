import { useEffect, useState } from "react";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logoe from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
import Swup from "swup";
function Navbar() {
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
  const Member = () => {
    navigate("/team");
  };
  return (
    <>
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
                    <li class="mil-has-children mil-active">
                      <span>HomePage</span>
                    </li>
                    <li class="mil-has-children">
                      {/* <a href="/team"> */}
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
                      <span>Other pages</span>
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

                        <ul className="mil-menu-list"style={{padding:"0"}}>
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
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>

                       
                        <ul className="mil-menu-list"style={{padding:"0"}}>
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
    </>
  );
}

export default Navbar;
