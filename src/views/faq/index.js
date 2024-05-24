import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaMinus, FaPlus } from "react-icons/fa";
import data from "../../assests/data/data";
import ArrowSVG from "../../components/arrow";
import "./index.css";
import Aos from "aos";
const FAQ = () => {
  Aos.init();
  return (
    <>
      <div className="mil-dark-back">
        <div className="mi-inverter-fix">
          <div className="container mil-p-120-09">
            <div className="row justify-content-between">
              <div className="col-lg-5 mil-relative mil-mb-90">
                <div
                  className=""
                  // data-aos="fade-up"
                  // data-aos-offset="20"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  // data-aos-easing="ease-in-out"
                  // data-aos-mirror="true"
                  // data-aos-once="false"
                  // data-aos-anchor-placement="top"
                >
                  <span className="ourcors mil-upper mil-light mil-up mil-mb-30">
                    FAQ
                  </span>
                  <h1
                    className="mil-lighter mil-mb-30 mil-up mil-mb-30"
                    style={{
                      color: "#ffd94a",
                    }}
                  >
                    Got a question? <br />
                    <span
                      className="mil-thin text-white"
                      style={{ fontWeight: "100px" }}
                    >
                      Get your answer
                    </span>
                  </h1>
                  <p className="mil-light-soft mil-up mil-mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida.
                  </p>
                  <div className="mil-services-button mil-button mil-arrow-place mt-2">
                    <span>Read More</span>
                    <ArrowSVG className="mil-arrow" fill="#000000" />
                  </div>
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
                            <div className="px-4">{val.title} </div>
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
        </div>
      </div>

      {/* {/ cta /} */}
    </>
  );
};

export default FAQ;
