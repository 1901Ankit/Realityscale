import React, { useEffect } from "react";
import "./index.css";
import memberimage from "../../assests/images/human/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import ArrowSVG from "../../components/arrow";
import TeamMembercontent from "../../components/member";
const Member = () => {
  const teamMembers = [
    {
      name: "Anna Oldman",
      role: "Art Director",
      image: memberimage,
      socialMedia: {
        instagram: "#",
        youtube: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <>
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition" data-swup="0">
          <div className="mil-inner-banner">
            <div
              className="mil-banner-content mil-up"
              style={{
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                translate: "none",
              }}
            >
              <div className="mil-animation-frame">
                <div
                  className="mil-animation mil-position-4 mil-dark mil-scale"
                  data-value-1="6"
                  data-value-2="1.4"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale(1.9613, 1.9613)",
                    WebkitTransform:
                      "translate3d(0px, 0px, 0px) scale(1.9613, 1.9613)",
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
                  className="mil-breadcrumbs mil-mb-60"
                  style={{ padding: "0" }}
                >
                  <li>
                    <a href="/">Homepage</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
                <h1 className="mil-mb-60" style={{ padding: "0" }}>
                  Meet <span className="mil-thin">Our</span>
                  <br /> Creative <span className="mil-thin">Team</span>
                </h1>
                <div className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                  <span>Our team</span>
                  <ArrowSVG className="mil-arrow" fill="#000000" />
                </div>
              </div>
            </div>
          </div>

          <section id="team">
            <div className="container mil-p-120-90">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div>
                    {teamMembers.map((member, index) => (
                      <TeamMembercontent key={index} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
              <div className="row">
                <div className="col-lg-10">
                  <span
                    className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up"
                    style={{
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 40px)",
                      opacity: 1,
                      translate: "none",
                    }}
                  >
                    Looking to make your mark? We'll help you turn <br /> your
                    project into a success story.
                  </span>
                </div>
              </div>
              <div className="mil-center">
                <h2
                  className="mil-up mil-mb-60"
                  style={{
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 40px)",
                    opacity: 1,
                    translate: "none",
                  }}
                >
                  Ready to bring your <span className="mil-thin">ideas to</span>{" "}
                  life? <br /> We're{" "}
                  <span className="mil-thin">here to help</span>
                </h2>
                <div
                  className="mil-up"
                  style={{
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 40px)",
                    opacity: 1,
                    translate: "none",
                  }}
                >
                  <a href="/contact" className="mil-button mil-arrow-place">
                    <span>Contact us</span>
                    <ArrowSVG className="mil-arrow" fill="#000000" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};  

export default Member;
