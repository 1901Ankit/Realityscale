import React from "react";
import image1 from "../../assests/images/landing/door.jpg";
import ArrowSVG from "../../components/arrow";
import data from "../../assests/data/data";
import "./index.css";
import Aos from "aos";
const Production = () => {
  Aos.init();
  return (
    <div>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">
              Popular
              <span className="mx-1 mil-thin">Publications:</span>
            </h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <a href="#" className="mil-link mil-dark mil-arrow-place">
                <span>View all</span>
                <ArrowSVG className="mil-arrow" fill="#000000" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {data.blogPosts.map((val, id) => {
            return (
              <div className="col-lg-6" key={id}>
                <a href="#" className="mil-blog-card mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <img src={image1} alt="cover" />
                  </div>
                  <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                      <div className="mil-label mil-upper mil-accent text-black">
                        {val.category}
                      </div>
                      <div
                        className="mil-label mil-upper"
                        style={{ color: "grey" }}
                      >
                        {val.date}
                      </div>
                    </div>
                    <h4 className="mil-up mil-mb-30  text-black">
                      {val.title}
                    </h4>
                    <p className="mil-post-text mil-up mil-mb-30 fw-200">
                      {val.content}
                    </p>
                    <div className="mil-links mil-dark mil-arrow-place mil-up">
                      <span className="mil-label mil-upper mil-accent text-black">
                        Read more
                      </span>
                      <ArrowSVG className="mil-arrow" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Production;
