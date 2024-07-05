import React from "react";
import "./index.css";
import "./index.css";
import image1 from "../../assests/images/Welcome to Reality Scale/Welcome_to_Reality_Scale.webp";
import Aos from "aos";
import MilLinesSVG from "../../components/aboutsvg";
import { aboutfile } from "../../assests/data/componentdata";
const About = () => {
  Aos.init();

  return (
    <div className="container mil-p-120-30 " id="about">
      <div className="row justify-content-between align-items-center">
        <div
          className="col-lg-6 col-xl-5 mil-mb-90"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <h2
            className="mil-up mil-mb-30"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
              opacity: "1",
            }}
          >
            Welcome <br />
            to{" "}
            <span className="mil-thin" style={{ fontWeight: "100" }}>
              Reality Scale
            </span>
          </h2>
          <p className="fw-300">{aboutfile.subtitle}</p>
          {aboutfile.paragraphs.map((paragraph, index) => (
            <p key={index} className="mil-up mil-mb-10">
              <span className="fw-bold">{paragraph.heading}</span>
              <span className="mx-1 fw-300">{paragraph.content}</span>
            </p>
          ))}
          <div className="mil-about-quote mt-5">
            <div className="mil-avatar mil-up">
              <img src={aboutfile.quote.avatar} alt="Founder" />
            </div>
            {/* <h6 className="mil-quote mil-up text-black">
              {aboutfile.quote.quoteText}
            </h6> */}
            <h6 className="mil-quote mil-up text-black">
              Passionately Creating{" "}
              <span className="mil-thin">Design Wonders:</span> Unleashing{" "}
              <span className="mil-thin">Boundless Creativity</span>
            </h6>
          </div>
        </div>
        <div
          className="col-lg-5"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="mil-about-photo mil-mb-90">
            <div className="mil-lines-place">
              <MilLinesSVG />
            </div>
            <div
              className="mil-up mil-img-frame"
              style={{ paddingBottom: "160%" }}
            >
              <img
                src={image1}
                alt="img"
                className="mil-scale"
                data-value-1="1"
                data-value-2="1.2"
                style={{
                  transform: "translate3d(0px, 0px, 0px) scale(1.1353, 1.1353)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
