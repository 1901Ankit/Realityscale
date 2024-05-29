import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import Testilogo from "../testilogo";
import ArrowSVG from "../../components/arrow";
import data from "../../assests/data/data";
import Aos from "aos";
const Multicarousel = () => {
  Aos.init();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mySwiper = new Swiper(".mil-reviews-slider", {
      pagination: {
        el: ".mil-revi-pagination",
        clickable: true,
      },
      speed: 800,
      effect: "fade",
      parallax: true,
      navigation: {
        nextEl: ".mil-revi-next",
        prevEl: ".mil-revi-prev",
      },
      on: {
        slideChange: () => {
          setActiveIndex(mySwiper.activeIndex);
        },
      },
    });

    swiperRef.current = mySwiper;

    return () => {
      swiperRef.current.destroy(true, true);
    };
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const paginationBullets = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <section className="mil-softer-bg">
        <div className="container mil-p-120-30">
          <div className="row">
            <div className="col-lg-10" style={{ textAlign: "right" }}>
              <span
                className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                  textAlign: "right",
                }}
              >
                Customer reviews are a valuable source <br />
                of information for both businesses and consumers.
              </span>
            </div>
          </div>
          <h2 className="mil-center mil-up mil-mb-60">
            Customer <span className="mil-thin">Voices:</span> <br />
            Hear What <span className="mil-thin">They Say!</span>
          </h2>
          <div className="mil-revi-pagination mil-up mil-mb-60 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {paginationBullets.map((bullet, index) => (
              <span
                key={index}
                className={`swiper-pagination-bullet ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handlePaginationClick(index)}
              >
                <div className={`mil-custom-dot mil-slide-${bullet}`}></div>
              </span>
            ))}
          </div>
          <div className="row mil-relative justify-content-center">
            <div className="col-lg-8">
              <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
                <ArrowSVG
                  className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place "
                  onClick={handlePrev}
                />
                <ArrowSVG
                  className="mil-slider-arrow mil-revi-next mil-arrow-place "
                  onClick={handleNext}
                />
              </div>

              <div className="swiper-container mil-reviews-slider">
                <div className="swiper-wrapper">
                  {data.testimonial.map((val, id) => {
                    return (
                      <div className="swiper-slide" key={id}>
                        <div
                          className="mil-review-frame mil-center"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <h5 className="mil-up mil-mb-10 text-black">
                            {" "}
                            {val.testimonialheading}
                          </h5>
                          <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                            {val.testimonialsubheading}
                          </p>
                          <p className="mil-text-xl mil-up  fw-200">
                            {val.testimonialparagraph}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testilogo />
    </>
  );
};

export default Multicarousel;
