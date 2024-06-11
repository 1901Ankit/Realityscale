import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import logo from "../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import logos from "../../assests/images/logo/newlogo/Reality Scale Logo White 05.png";
import Mouse from "../../components/mouse";
import "./index.css";
import ArrowSVG from "../../components/arrow";
import Progressbar from "../../components/progressbar";
import Backtop from "../../components/backtop";
import image1 from "../../assests/images/work/1.webp";
import zoom from "../../assests/images/work/zoom.svg";

import Wipper from "../../components/swiper";
import Wippers from "../../components/wippers";
import data from "../../assests/data/data";

const Productdetails = () => {
  const location = useLocation();

  // console.log(location.state);

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    if (location.state) {
      setPageData(location.state.value);
    }
  }, [location.state]);
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
    window.scrollTo(0, 0);
    navigate("/");
  };
  const Member = () => {
    window.scrollTo(0, 0);
    navigate("/team");
  };
  const Contactus = () => {
    window.scrollTo(0, 0);
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
                          {data.projects.map((project, index) => (
                            <ProjectItem key={index} name={project} />
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-10">Useful links</h6>
                        <ul className="mil-menu-list" style={{ padding: "0" }}>
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
            {/* <span className="text-white">PRODUCT DETAIL'S</span> */}
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
                        <a href="/product">Product</a>
                      </li>
                      <li>
                        <a href="#">Detail's</a>
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
                      <br /> Detail's{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        {/* soon */}
                      </span>
                    </h1>
                    <a
                      href="#"
                      className="mil-link mil-accent mil-arrow-place mil-down-arrow"
                    >
                      <span className="text-white">READ MORE</span>
                      <ArrowSVG className=" mil-arrow" fill="#000000" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backgroundvlack">
        <section className="mil-p-120-120">
          <div
            className="mil-image-frame mil-fw mil-up"
            style={{ transform: "translate(0px, 0px)" }}
          >
            <img
              src={pageData && pageData.productDetails.bannerImage}
              alt="image"
            />
            <div
              data-fancybox="gallery"
              data-no-swup=""
              className="mil-zoom-btn"
            >
              <img src={zoom} alt="zoom" />
            </div>
          </div>
          <div className="container mt-3 mb-3">
            <div
              className="mil-info mil-up"
              style={{ transform: "translate(0px, 0px)" }}
            >
              <div className="text-white">
                Client: &nbsp;
                <span className="">
                  {pageData && pageData.productDetails.client}
                </span>
              </div>
              <div className="text-white">
                Date: &nbsp;
                <span className="">
                  {pageData && pageData.productDetails.date}
                </span>
              </div>
              <div className="text-white">
                Author: &nbsp;
                <span className="">
                  {pageData && pageData.productDetails.author}
                </span>
              </div>
            </div>
          </div>

          <Wipper data={pageData && pageData.productDetails.slider1Image} />

          <div className="container">
            <div className="mil-p-120-90">
              <div className="row justify-content-between">
                <div className="col-lg-5">
                  <h3 className="mil-up mil-mb-60">
                    {pageData && pageData.productDetails.paraHeading}
                  </h3>
                </div>
                <div className="col-lg-6 text-white">
                  <p className="mil-up mil-mb-30">
                    {pageData && pageData.productDetails.para1}
                  </p>
                  <p className="mil-up">
                    {pageData && pageData.productDetails.para2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Wippers data={pageData && pageData.productDetails.slider2} />
        </section>
      </div>
    </>
  );
};

export default Productdetails;
