import React from "react";
import "./index.css";
import imagectc from "../../assests/images/landing/cta-1-1.jpg";
import CTAsvg from "../ctasvg";
const CTA = () => {
  return (
    <div className="bg-black">
        <div className="">
        <section className="cta-one  py-5">
          <div
            className="container text-center wow fadeInUp animated animated"
            data-wow-delay="200ms"
            style={{
              visibility: "visible",
              animationDelay: "200ms",
              animationName: "fadeInUp",
            }}
          >
            <div className="cta-one__author">
              <div className="cta-one__author--wrap">
                <img src={imagectc} alt="ogency" />
              </div>
              <div className="cta-one__icon">
                <span className="icon-arrow-long">
                  <CTAsvg />
                </span>
              </div>
            </div>
            <div className="section-title">
              <h2 className="section-title__title">
                Have any projects in mind?
                <br /> Get in touch with us!
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTA;
