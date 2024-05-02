import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import Swiper from "swiper";
import 'swiper/swiper-bundle.min.css';
import Testilogo from "../testilogo";

const Multicarousel = () => {
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
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place"
                  onClick={handlePrev}
                >
                  <path
                    d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
                    fill="#000000"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-slider-arrow mil-revi-next mil-arrow-place "
                  onClick={handleNext}
                >
                  <path
                    d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
                    fill="#000000"
                  />
                </svg>
              </div>

              <div className="swiper-container mil-reviews-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="mil-review-frame mil-center"
                      data-swiper-parallax="-200"
                      data-swiper-parallax-opacity="0"
                    >
                      <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                      <p className="mil-mb-5 mil-upper mil-up mil-mb-30">
                        Envato market
                      </p>
                      <p className="mil-text-xl mil-up">
                        I had the pleasure of working with this creative agency,
                        and I must say, they truly impressed me. They
                        consistently think outside the box, resulting in
                        impressive and impactful work. I highly recommend this
                        agency for their consistent delivery of exceptional
                        creative solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
  <Testilogo/>
    </>
  );
};

export default Multicarousel;
