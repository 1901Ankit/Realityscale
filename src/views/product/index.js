import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.css";
import ArrowSVG from "../../components/arrow";
import { Tab, Tabs, Box, Stack, useMediaQuery } from "@mui/material";
import Aos from "aos";
import data from "../../assests/data/data";
const Product = () => {
  Aos.init();
  const navigate = useNavigate();
  const [value, setValue] = useState("All");
  const handleChange = (val) => {
    setValue(val);
  };
  const tabsSection = [
    {
      label: "All",
    },
    {
      label: "VR/AR",
    },
    {
      label: "Automotive",
    },
    {
      label: "Architectural",
    },
    {
      label: "Gaming",
    },
  ];
  

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const handleRoute = (value) => {
    window.scrollTo(0, 0);
    navigate("/productdetails", {
      state: { value },
    });
  };

  const phoneMatches = useMediaQuery("(max-width:600px)");
  
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
                      <br /> is finally{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        launched
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

      <div className="backgroundvlack">
        <div className="mil-p-120-30 ">
          <Box sx={{ width: "100%" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTab-root": { color: "grey !important", width: 200 },
                  "& .Mui-selected": { color: "#ffd94a !important" },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                {tabsSection.map((val, i) => (
                  <Tab
                    label={val.label}
                    key={i}
                    onClick={() => {
                      handleChange(val.label);
                    }}
                  />
                ))}
              </Tabs>
            </Stack>
          </Box>
          <div>
            {value === "All" ? (
              <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60">
                  <div className="row justify-content-between align-items-center">
                    {data.product.map((val, i) => (
                      <div
                        className="col-lg-6"
                        data-aos={val.dataAos}
                        data-aos-offset={val.dataAosOffset}
                        data-aos-delay={val.dataaosdelay}
                        data-aos-duration={val.dataaosduration}
                        data-aos-easing={val.dataaoseasing}
                        data-aos-mirror={val.dataaosmirror}
                        data-aos-once={val.dataaosonce}
                        data-aos-anchor-placement={val.dataaosanchorplacement}
                      >
                        <div
                          className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                          data-value-1="60"
                          data-value-2="-60"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, -32.0873px, 0px)",
                          }}
                        >
                          <div
                            className="mil-cover-frame mil-hori mil-up"
                            onClick={() => handleRoute(val)}
                          >
                            <div
                              className="mil-cover"
                              style={{ cursor: "pointer" }}
                            >
                              <img src={val.img} alt="cover" width={"100%"} />
                            </div>
                          </div>
                          <div className="mil-descr">
                            <div className="mil-labels mil-up mil-mb-15">
                              <div className="mil-label mil-upper mil-accent">
                                {val.type}
                              </div>
                            </div>
                            <h4 className="mil-up">{val.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>

          <div>
            {value === "VR/AR" ? (
              <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60 ">
                  <div className="row justify-content-between align-items-center">
                    {data.vr.map((val, i) => (
                      <div
                        className="col-lg-6"
                        data-aos={val.dataAos}
                        data-aos-offset={val.dataAosOffset}
                        data-aos-delay={val.dataaosdelay}
                        data-aos-duration={val.dataaosduration}
                        data-aos-easing={val.dataaoseasing}
                        data-aos-mirror={val.dataaosmirror}
                        data-aos-once={val.dataaosonce}
                        data-aos-anchor-placement={val.dataaosanchorplacement}
                      >
                        <div
                          className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                          data-value-1="60"
                          data-value-2="-60"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, -32.0873px, 0px)",
                          }}
                        >
                          <div
                            className="mil-cover-frame mil-hori mil-up"
                            onClick={() => handleRoute(val)}
                          >
                            <div
                              className="mil-cover"
                              style={{ cursor: "pointer" }}
                            >
                              <img src={val.img} alt="cover" width={"100%"} />
                            </div>
                          </div>
                          <div className="mil-descr">
                            <div className="mil-labels mil-up mil-mb-15">
                              <div className="mil-label mil-upper mil-accent">
                                {val.type}
                              </div>
                            </div>
                            <h4 className="mil-up">{val.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>

          <div>
            {value === "Automotive" ? (
              <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60 ">
                  <div className="row justify-content-between align-items-center">
                    {data.automative.map((val, i) => (
                      <div
                        className="col-lg-6"
                        data-aos={val.dataAos}
                        data-aos-offset={val.dataAosOffset}
                        data-aos-delay={val.dataaosdelay}
                        data-aos-duration={val.dataaosduration}
                        data-aos-easing={val.dataaoseasing}
                        data-aos-mirror={val.dataaosmirror}
                        data-aos-once={val.dataaosonce}
                        data-aos-anchor-placement={val.dataaosanchorplacement}
                      >
                        <div
                          className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                          data-value-1="60"
                          data-value-2="-60"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, -32.0873px, 0px)",
                          }}
                        >
                          <div
                            className="mil-cover-frame mil-hori mil-up"
                            onClick={() => handleRoute(val)}
                          >
                            <div
                              className="mil-cover"
                              style={{ cursor: "pointer" }}
                            >
                              <img src={val.img} alt="cover" width={"100%"} />
                            </div>
                          </div>
                          <div className="mil-descr">
                            <div className="mil-labels mil-up mil-mb-15">
                              <div className="mil-label mil-upper mil-accent">
                                {val.type}
                              </div>
                            </div>
                            <h4 className="mil-up">{val.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>

          <div>
            {value === "Architectural" ? (
              <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60 ">
                  <div className="row justify-content-between align-items-center">
                    {data.archite.map((val, i) => (
                      <div
                        className="col-lg-6"
                        data-aos={val.dataAos}
                        data-aos-offset={val.dataAosOffset}
                        data-aos-delay={val.dataaosdelay}
                        data-aos-duration={val.dataaosduration}
                        data-aos-easing={val.dataaoseasing}
                        data-aos-mirror={val.dataaosmirror}
                        data-aos-once={val.dataaosonce}
                        data-aos-anchor-placement={val.dataaosanchorplacement}
                      >
                        <div
                          className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                          data-value-1="60"
                          data-value-2="-60"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, -32.0873px, 0px)",
                          }}
                        >
                          <div
                            className="mil-cover-frame mil-hori mil-up"
                            onClick={() => handleRoute(val)}
                          >
                            <div
                              className="mil-cover"
                              style={{ cursor: "pointer" }}
                            >
                              <img src={val.img} alt="cover" width={"100%"} />
                            </div>
                          </div>
                          <div className="mil-descr">
                            <div className="mil-labels mil-up mil-mb-15">
                              <div className="mil-label mil-upper mil-accent">
                                {val.type}
                              </div>
                            </div>
                            <h4 className="mil-up">{val.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>

          <div>
            {value === "Gaming" ? (
              <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60 ">
                  <div className="row justify-content-between align-items-center">
                    {data.gaming.map((val, i) => (
                      <div
                        className="col-lg-6"
                        data-aos={val.dataAos}
                        data-aos-offset={val.dataAosOffset}
                        data-aos-delay={val.dataaosdelay}
                        data-aos-duration={val.dataaosduration}
                        data-aos-easing={val.dataaoseasing}
                        data-aos-mirror={val.dataaosmirror}
                        data-aos-once={val.dataaosonce}
                        data-aos-anchor-placement={val.dataaosanchorplacement}
                      >
                        <div
                          className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                          data-value-1="60"
                          data-value-2="-60"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, -32.0873px, 0px)",
                          }}
                        >
                          <div
                            className="mil-cover-frame mil-hori mil-up"
                            onClick={() => handleRoute(val)}
                          >
                            <div
                              className="mil-cover"
                              style={{ cursor: "pointer" }}
                            >
                              <img src={val.img} alt="cover" width={"100%"} />
                            </div>
                          </div>
                          <div className="mil-descr">
                            <div className="mil-labels mil-up mil-mb-15">
                              <div className="mil-label mil-upper mil-accent">
                                {val.type}
                              </div>
                            </div>
                            <h4 className="mil-up">{val.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
