import React from "react";
import "./index.css";
import image1 from "../../assests/images/landing/1.9f88f939.webp";
import Uniq_production from "../../components/uniq_prodution";
import unique from "../../assests/data/unique";
import ArrowSVG from "../../components/arrow";
import Aos from "aos";
import { Link } from "react-router-dom";

const Business = () => {
  Aos.init();
  let data = [
    {
      head: unique.head1,
      para: unique.para1,
      img: unique.img1,
    },
    {
      head: unique.head2,
      para: unique.para2,
      img: unique.img2,
    },
    {
      head: unique.head3,
      para: unique.para3,
      img: unique.img3,
    },
    {
      head: unique.head4,
      para: unique.para4,
      img: unique.img4,
    },
  ];
  return (
    <div className=" bg-black ">
      <div className="">
        <div className="container mil-p-120-30">
          <div className="row">
            <div className="col-lg-7" style={{ textAlign: "right" }}>
              <span
                className="mil-suptitle mil-suptitle-right  mil-light-soft mil-up"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                  textAlign: "right",
                }}
              >
                Professionals focused on helping your brand <br />
                grow and move forward.
              </span>
            </div>
          </div>
          <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
            <span className="mil-text-image">
              <img src={image1} alt="team" />
            </span>
            <h2
              className="mil-h1 mil-muted mil-center uniidea"
              style={{ color: "#ffd94a" }}
            >
              Unique <span className="mil-thin">Ideas</span>
            </h2>
          </div>
          <div className="mil-complex-text justify-content-center mil-up">
            <h2
              className="mil-h1 mil-muted mil-center"
              style={{ color: "#ffd94a" }}
            >
              For Your <span className="mil-thin text-white">Business.</span>
            </h2>
            <div className="mil-services-button mil-button mil-arrow-place">
              <Link to="/contact" className="text-black p-0">
                <span>What we do</span>
                <ArrowSVG className="mil-arrow" />
              </Link>
            </div>
          </div>
          <div className="row mil-services-grid  mt-5">
            {data.map((val, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mil-services-grid-item p-0"
              >
                <Uniq_production
                  head={val.head}
                  para={val.para}
                  img={val.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
