import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa";
import data from "../../assests/data/data";
import "./index.css";
import imagectc from "../../assests/images/landing/cta-1-1.jpg";

const FAQ = () => {
  return (
    <div className="mil-dark-bg" id="service">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-09">
        <div className="row justify-content-between">
          <div className="col-lg-5 mil-relative mil-mb-90 px-5">

          <div class="">
                  <span class="mil-suptitle mil-upper mil-light mil-up mil-mb-30">
                    Our Core
                  </span>
                  <h1 class="mil-upper mil-lighter mil-up mil-mb-30">
                    Whole difference
                  </h1>
                  <p class="mil-light-soft mil-up mil-mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida.
                  </p>
                  <a
                    href="services.html"
                    class="mil-link mil-light mil-upper mil-up"
                  >
                    Read More{" "}
                    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="mil-arrow"
        >
          <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
        </svg>
                  </a>
                </div>
          </div>
          <div className="col-lg-6">
              <Accordion transition={{ duration: "1000ms" }}>
                {data.faq.map((val, i) => (
                  <AccordionItem key={i}>
                    {({ open }) => (
                      <>
                        <AccordionHeader className="accordion_head">
                          {!open ? (
                            <FaPlus className="" />
                          ) : (
                            <FaMinus className="" />
                          )}
                          <div className="px-4">

                          {val.title}{" "}
                          </div>
                        </AccordionHeader>
                        <AccordionBody
                          className={`${
                            open ? "accordion_body " : "accordion_body"
                          }`}
                        >
                          {val.message}
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </div>
      </div>

        {/* <section class="mil-dark-bg mil-relative mil-o-hidden">
          <img
            src="img/photo/3.jpg"
            class="mil-bg-img mil-scale"
            alt="image"
            // style="object-position: top;"
            style={{ objectPosition: "top" }}
            data-value-1="1"
            data-value-2="1.2"
          />
          <div class="mil-overlay"></div>
          <div class="container mil-p-120-90">
            <div class="mil-background-grid"></div>
            <div class="row justify-content-between">
              <div class="col-lg-5">
                <div class="mil-mb-90">
                  <span class="mil-suptitle mil-upper mil-light mil-up mil-mb-30">
                    Our Core
                  </span>
                  <h2 class="mil-upper mil-light mil-up mil-mb-30">
                    Whole difference
                  </h2>
                  <p class="mil-light-soft mil-up mil-mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida.
                  </p>
                  <a
                    href="services.html"
                    class="mil-link mil-light mil-upper mil-up"
                  >
                    Read More{" "}
                    <span class="mil-arrow">
                      <img src="img/icons/1.svg" alt="arrow" />
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mil-mt-suptitle-offset">
                <div class="mil-accordion-group mil-up">
                  <div class="mil-accordion-menu">
                    <div class="mil-symbol mil-light mil-thin mil-h3">
                      <div class="mil-plus">+</div>
                      <div class="mil-minus">-</div>
                    </div>

                    <h6 class="mil-upper mil-light">Team of Experts</h6>
                  </div>
                  <div class="mil-accordion-content">
                    <p class="mil-light-soft mil-mb-30">
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                  </div>
                </div>

                <div class="mil-accordion-group mil-up">
                  <div class="mil-accordion-menu">
                    <div class="mil-symbol mil-light mil-thin mil-h3">
                      <div class="mil-plus">+</div>
                      <div class="mil-minus">-</div>
                    </div>

                    <h6 class="mil-upper mil-light">
                      Creativity and Innovation
                    </h6>
                  </div>
                  <div class="mil-accordion-content">
                    <p class="mil-light-soft mil-mb-30">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                  </div>
                </div>

                <div class="mil-accordion-group mil-up">
                  <div class="mil-accordion-menu">
                    <div class="mil-symbol mil-light mil-thin mil-h3">
                      <div class="mil-plus">+</div>
                      <div class="mil-minus">-</div>
                    </div>

                    <h6 class="mil-upper mil-light">Technology</h6>
                  </div>
                  <div class="mil-accordion-content">
                    <p class="mil-light-soft mil-mb-30">
                      Netus et malesuada fames ac turpis egestas. Vestibulum
                      tortor quam, feugiat vitae, ultricies eget, tempor sit
                      amet, ante. Donec eu libero sit amet quam egestas semper.
                      Aenean ultricies mi vitae est. Mauris placerat eleifend
                      leo.
                    </p>
                  </div>
                </div>

                <div class="mil-accordion-group mil-up">
                  <div class="mil-accordion-menu">
                    <div class="mil-symbol mil-light mil-thin mil-h3">
                      <div class="mil-plus">+</div>
                      <div class="mil-minus">-</div>
                    </div>

                    <h6 class="mil-upper mil-light">Sustainability</h6>
                  </div>
                  <div class="mil-accordion-content">
                    <p class="mil-light-soft mil-mb-30">
                      Malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                  </div>
                </div>

                <div class="mil-accordion-group mil-up">
                  <div class="mil-accordion-menu">
                    <div class="mil-symbol mil-light mil-thin mil-h3">
                      <div class="mil-plus">+</div>
                      <div class="mil-minus">-</div>
                    </div>

                    <h6 class="mil-upper mil-light">
                      Honesty and Transparency
                    </h6>
                  </div>
                  <div class="mil-accordion-content">
                    <p class="mil-light-soft mil-mb-30">
                      Fames ac turpis egestas. Vestibulum tortor quam, feugiat
                      vitae, ultricies eget, tempor sit amet, ante. Donec eu
                      libero sit amet quam egestas semper. Aenean ultricies mi
                      vitae est. Mauris placerat eleifend leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* cta */}
        <section className="cta-one mt-5 pt-5  ">
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

export default FAQ;
