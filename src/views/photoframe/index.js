import React from "react";
import "./index.css";
import two from "../../assests/images/side_image/3.jpg";
import Realstate from "../realstate";
const Frame = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="photbanner">
          <div className="overlay">
            <div>
              <p className="imagination text-center">Products</p>
            </div>
          </div>
        </div>
      </div>
      <section className="service-section">
        <div className="container">
          <div className="heading white-heading">
          <span className="text-white">What We Do</span> Great Services
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-block pd-r-30" >
                <div className="inner-box">
                  <div className="imageservice">
                    <a href="/realstate" className="anchortag">
                      <img src={two} alt=""  className="imgwid"/>
                    </a>
                    <div className="read-more">
                    <a href="/realstate" className="anchortag">
                        Read More <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                    <a href="/realstate" className="anchortag">
                        Real-Estate Showcase
                      </a>
                    </h3>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-block pd-l-30">
                <div className="inner-box">
               <div className="imageservice">
                    <a href="/" className="anchortag">
                       <img src={two} alt=""  className="imgwid"/>
                    </a>
                    <div className="read-more">
                      <a href="/" className="anchortag">
                        Read More <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="/" className="anchortag">
                        Automotive Solutions
                      </a>
                    </h3>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-block pd-r-30">
                <div className="inner-box">
               <div className="imageservice">
                    <a href="/" className="anchortag">
                       <img src={two} alt=""  className="imgwid"/>
                    </a>
                    <div className="read-more">
                      <a href="/" className="anchortag">
                        Read More <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="/" className="anchortag">
                        Sector Expansion
                      </a>
                    </h3>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-block pd-l-30">
                <div className="inner-box">
               <div className="imageservice">
                    <a href="/" className="anchortag">
                       <img src={two} alt=""  className="imgwid"/>
                    </a>
                    <div className="read-more">
                      <a href="/" className="anchortag">
                        Read More <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="/" className="anchortag">
                        R&D and AI Integration
                      </a>
                    </h3>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frame;
