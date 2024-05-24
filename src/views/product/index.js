import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logos from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import Mouse from "../../components/mouse";
import "./index.css";
import ArrowSVG from "../../components/arrow";
import Progressbar from "../../components/progressbar";
import Backtop from "../../components/backtop";
const Product = () => {
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
  const Home = () => {
    navigate("/");
  };
  const Member = () => {
    navigate("/team");
  };
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

  const address =
    "2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh, 201307";
  const address2 = "   30 N Gould St Ste R, Sheridan, WY 82801";
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
      <Mouse />
      <Progressbar />
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
                    <li className="mil-has-children ">
                      <span className="" onClick={Home}>
                        Home
                      </span>
                    </li>
                    <li className="mil-has-children ">
                      <span className="" onClick={Member}>
                        Team
                      </span>
                    </li>
                    <li className="mil-has-children  mil-active">
                      <span>Product</span>
                    </li>
                    <li className="mil-has-children">
                      <span className="" onClick={Contactus}>
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
                      <Address2 address2={address2} />
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
          <div className="mil-current-page text-white">
            <span>CONTACT</span>
          </div>
          <Backtop />
        </div>
      </div>

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          <div className="mil-dark-bg">
            <div className="mil-inner-banner">
              <div className="mi-invert-fix">
                <div className="mil-banner-content mil-up">
                  <div className="mil-animation-frame">
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
                  <div className="container">
                    <ul
                      className="mil-breadcrumbs mil-light mil-mb-60"
                      style={{ padding: "0" }}
                    >
                      <li>
                        <a href="/">Homepage</a>
                      </li>
                      <li>
                        <a href="#">Product</a>
                      </li>
                    </ul>
                    <h1
                      className="mil-muted mil-mb-60"
                      style={{ color: "#ffd94a" }}
                    >
                      Our{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        Product
                      </span>
                      <br /> is coming{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        soon
                      </span>
                    </h1>
                    <a
                      href="#"
                      className="mil-link mil-accent mil-arrow-place mil-down-arrow"
                    >
                      <span className="text-white">Our Product</span>
                      <ArrowSVG className=" mil-arrow" fill="#000000" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
