import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.css";
import ArrowSVG from "../../components/arrow";
import zoom from "../../assests/images/work/zoom.svg";
import Wipper from "../../components/swiper";
import Wippers from "../../components/wippers";
const Productdetails = () => {
  const location = useLocation();
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    if (location.state) {
      setPageData(location.state.value);
    }
  }, [location.state]);

  return (
    <>
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
        <div className="bg-black mil-dark-bg">
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
                {/* Date: &nbsp;
                <span className="">
                  {pageData && pageData.productDetails.date}
                </span> */}
              </div>
              <div className="text-white">
                Brand: &nbsp;
                <span className="">
                  {pageData && pageData.productDetails.brand}
                </span>
              </div>
            </div>
          </div>

          <Wipper data={pageData && pageData.productDetails.slider1Image} />

          <div className="container">
            <div className="mil-p-120-90">
              <div className="row justify-content-between">
                <div className="col-lg-5">
                  <h2 className="mil-up mil-mb-60">
                    {pageData && pageData.productDetails.paraHeading}
                  </h2>
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
