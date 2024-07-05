
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import "./index.css";
import ArrowSVG from "../../components/arrow";
const Contactus = () => {


  let contact = [
    {
      icon: <BsFillTelephoneFill size={30} color="#ffd94a" className="icon" />,
      name: "Contact Phone Number",
      value: "+444 555 666 777",
      value2: "+222 222 222 333",
    },
    {
      icon: <AiFillMail size={30} color="#ffd94a" className="icon" />,
      name: "Our Email Address",
      value: "admin@gmail.com",
      value2: "example@gmail.com",
    },
    {
      icon: <HiLocationMarker size={30} color="#ffd94a" className="icon" />,
      name: "Our Location",
      value:
        "2nd Floor, D-320, Sector 63 Rd, Sector 63, Noida, Uttar Pradesh 201307",
    },
  ];


  return (
    <>
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
        <div className="bg-black mil-dark-bg">
        <div className="mil-inner-banner">
              <div className="mi-invert-fix">
                <div className="mil-banner-content mil-up">
                  <div className="mil-animation-frame">
                    <div
                      className="mil-animation mil-position-1 mil-scale"
                      data-value-1="7"
                      data-value-2="1.6"
                      style={{
                        transform: "translate3d(0px, 0px, 0px) scale(2, 2)",
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
                      className="mil-breadcrumbs mil-light mil-mb-60"
                      style={{ padding: "0" }}
                    >
                      <li>
                        <a href="/">Homepage</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                    <h1
                      className="mil-muted mil-mb-60"
                      style={{ color: "#ffd94a" }}
                    >
                      This is{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        what
                      </span>
                      <br /> we do{" "}
                      <span className="mil-thins" style={{ color: "white" }}>
                        best
                      </span>
                    </h1>
                    <div
                      className="mil-link mil-accent mil-arrow-place mil-down-arrow"
                    >
                      <span className="text-white">Send Message</span>
                      <ArrowSVG className=" mil-arrow" fill="#000000" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-information">
        <div
          className="container wow fadeInUp animated animated"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp",
          }}
        >
          <div className="container">
            <div className="row">
              {contact.map((val) => (
                <div className="col-sm-4 p-4">
                  <div className="bord text-start p-4">
                    {val.icon}
                    <h5 className="text-white my-3">{val.name}</h5>
                    <p className="text-white mb-0 vlaue">{val.value}</p>
                    {val.value2 ? (
                      <p className="text-white vlaue">{val.value2}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black mil-dark-bg">
            <div className="mil-inner-banner">
          <div
            className="container wow fadeInUp animated animated"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInUp",
            }}
          >
            <div className="section-title ">
              <h5 className="section-title__tagline section-title__tagline--has-dots text-grey text-center">
                Let's Talk
              </h5>
              <h2 className="section-title__title text-white text-center">
                Feel free to get in touch
                <br /> with Reality
              </h2>
            </div>
            <div className="contact-one__left text-center">
              <div className="contact-one__form-box">
                <form
                  className="contact-one__form contact-form-validated"
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <select name="casestudy">
                          <option
                            value=" 0
                    "
                          >
                            Please select options
                          </option>
                          <option
                            value="1
                      "
                          >
                            Select service 01
                          </option>
                          <option
                            value="2
                      "
                          >
                            Select service 02
                          </option>
                          <option
                            value="
                      3"
                          >
                            Select service 03
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-one__input-box">
                        <textarea
                          name="message"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="mil-services-button mil-button mil-arrow-place"
                      >
                        <span>Send Message</span>
                        <ArrowSVG className=" mil-arrow" fill="#000000" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
