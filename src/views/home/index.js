import React, { useEffect, useRef } from "react";
import "./index.css";
import Keyfeature from "../keyfeature";
import About from "../about";
import Business from "../unique";
import Production from "../production";
import FAQ from "../faq";
import Range from "../../components/rngecaroul";
import Multicarousel from "../testimonal";
import Sliderlogo from "../logos";
import Game from "../game";
import { Container, Grid } from "@mui/material";
import data from "../../assests/data/data";
import Loader from "../../components/loader";
import { Link, useNavigate } from "react-router-dom";
import video from "../../assests/video/Reality-video.mp4";
import ArrowSVG from "../../components/arrow";
import Aos from "aos";

const Home = () => {
  Aos.init();

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${
          scrollPosition * 1
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Loader />
      <div className="bg-black mil-banner mil-dark-bg">
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
                <div className="row align-items-center d-flex justify-content-center">
                  <div
                    className=""
                    style={{ position: "absolute", padding: "0" }}
                  >
                    <div className="col-md-6 col-lg-6">
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
                      <Link
                        to="/contact"
                        className="mil-link mil-muted mil-arrow-place"
                      >
                        <span> Contact Us</span>
                        <ArrowSVG className="mil-arrow" fill="#000000" />
                      </Link>
                      <Link
                        to="/demoreality"
                        className="mil-button mil-arrow-place mil-btn-space mx-3"
                      >
                        <span>Demo Reality</span>
                        <ArrowSVG className="mil-arrow" fill="#000000" />
                      </Link>

                      {/* <div className="mil-button mil-arrow-place">
                        <Link to="/demoreality" className="text-black">
                          <span className="">Demo Reality</span>
                          <ArrowSVG className="mil-arrow" fill="#000000" />
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6">
                    <video autoPlay playsInline loop muted className="video">
                      <source src={video} type="video/mp4" />
                    </video>
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
                    style={{ marginTop: "0px" }}
                  >
                    <h1 className="mil-mutede mt-5">
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
                    <Link to="/demoreality">
                      <div className="mil-button mil-arrow-place mil-btn-space">
                        <span className="">Demo Reality</span>
                        <ArrowSVG className="mil-arrow" fill="#000000" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Keyfeature />
      <Sliderlogo />
      <Range />
      <About />

      <div className="contactus_parallax" ref={parallaxRef}>
        <div className="paralaxoverlay">
          <Container sx={{ p: { lg: 2, xs: 2 }, paddingBottom: 25 }}>
            <div
              className="mil-muteded mil-mb-30 mil-center mt-5"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
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
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {data.gameData.map((val, i) => (
                <Grid item lg={4} xs={12} key={i}>
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
      <Multicarousel />

      <Production />
      <FAQ />
    </>
  );
};
export default Home;
