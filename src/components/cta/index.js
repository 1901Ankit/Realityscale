import React from "react";
import "./index.css";
import imagectc from "../../assests/images/landing/cta-1-1.jpg";
const CTA = () => {
  return (
    <div className="blacked">
      <div className="overlayed">
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
              <a href="#" className="cta-one__icon">
                <span className="icon-arrow-long">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="1 4.2 22 22"
                    className="mil-slider-arrow mil-revi-next mil-arrow-place "
                  >
                    <path
                      d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </a>
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
