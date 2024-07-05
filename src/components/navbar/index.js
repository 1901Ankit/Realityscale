import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import logo from "../../assests/images/logo/Reality Scale Logo New.svg";
import logos from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import "./index.css";
import Backtop from "../../components/backtop";
import data from "../../assests/data/data";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuBtnHandler = () => {
    $(".mil-menu-btn, .mil-menu, .mil-menu-frame, body").toggleClass(
      "mil-active menu-open"
    );
    $("body").css(
      "overflow-y",
      $("body").hasClass("menu-open") ? "hidden" : "auto"
    );
  };

  const menuItemHandler = (event, path) => {
    event.preventDefault();
    $(".mil-menu-btn, .mil-menu, .mil-menu-frame, body").addClass(
      "mil-active menu-open"
    );
    $("body").css("overflow-y", "hidden");
    setTimeout(() => {
      navigate(path);
      $(".mil-menu-btn, .mil-menu, .mil-menu-frame, body").removeClass(
        "mil-active menu-open"
      );
      $("body").css("overflow-y", "auto");
    }, 300);
  };

  useEffect(() => {
    gsap.to(".element", { duration: 1, opacity: 0 });
    $(".mil-menu-btn").on("click", menuBtnHandler);
    $(".mil-main-menu li span").on("click", function (event) {
      menuItemHandler(event, $(this).attr("data-path"));
    });
    return () => {
      $(".mil-menu-btn, .mil-main-menu li span").off("click");
      $("body").css("overflow-y", "auto");
    };
  }, []);

  function ProjectItem({ name }) {
    return (
      <li>
        <a href="/product" className="mil-light-soft">
          {name}
        </a>
      </li>
    );
  }

  function UsefulLink({ name, url }) {
    return (
      <li>
        <a href={url} className="mil-light-soft">
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

  function Address2({ address2 }) {
    return (
      <div className="col-md-6 col-lg-6">
        <h6 className="mil-muted mil-up mil-mb-10">USA</h6>
        <p className="mil-light-soft mil-up">{address2}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid p-0">
        <div className="mil-menu-frame">
          <div className="mil-frame-top">
            <a href="/" className="mil-logo">
              <img src={logos} style={{ width: "20%" }} />
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
                      <li
                        className={`mil-has-children ${
                          location.pathname === "/" ? "mil-active" : ""
                        }`}
                      >
                        <span className="" data-path="/">
                          Home
                        </span>
                      </li>
                      <li
                        className={`mil-has-children ${
                          location.pathname === "/team" ? "mil-active" : ""
                        }`}
                      >
                        <span className="" data-path="/team">
                          Team
                        </span>
                      </li>
                      <li
                        className={`mil-has-children ${
                          location.pathname === "/product" ? "mil-active" : ""
                        }`}
                      >
                        <span className="" data-path="/product">
                          Product
                        </span>
                      </li>
                      <li
                        className={`mil-has-children ${
                          location.pathname === "/contact" ? "mil-active" : ""
                        }`}
                      >
                        <span className="" data-path="/contact">
                          Contact us
                        </span>
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
                          <div className="mil-dodecahedron">
                            {[...Array(12)].map((_, index) => (
                              <div key={index} className="mil-pentagon">
                                {[...Array(5)].map((_, index) => (
                                  <div key={index}></div>
                                ))}
                              </div>
                            ))}
                          </div>
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
                    </div>
                    <div className="mil-menu-right ">
                      <div className="row">
                        <div className="col-lg-8  mil-mb-20">
                          <h6 className="mil-muted mil-mb-10">Projects</h6>
                          <ul
                            className="mil-menu-list"
                            style={{ padding: "0" }}
                          >
                            {data.projects.map((project, index) => (
                              <ProjectItem key={index} name={project} />
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-4 mil-mb-60">
                          <h6 className="mil-muted mil-mb-10">Useful links</h6>
                          <ul
                            className="mil-menu-list"
                            style={{ padding: "0" }}
                          >
                            {data.usefulLinks.map((link, index) => (
                              <UsefulLink
                                key={index}
                                name={link.name}
                                url={link.url}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mil-divider mil-mb-60"></div>
                      <div className="row justify-content-between">
                        <Address address={data.address} />
                        <Address2 address2={data.address2} />
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
                style={{ width: "23%" }}
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
            <div className="mil-current-page text-white"></div>
            <Backtop />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
