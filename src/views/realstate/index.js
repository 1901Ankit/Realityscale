import React from "react";
import "./index.css";
import Button from "././../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/banner/Picture1.png";
const Realstate = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="bgrealstate">
          <div className="overlay">
            <div>
              <p className="imagination text-center">Real State</p>
            </div>
          </div>
        </div>
      </div>
     
      
      <div className="wrap">
        <div className="container warps">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={image1}
                width="90%"
                className="rounded process_hover"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="">
                <h2 className="onbord mb-4"> Lorem Ipsum</h2>
                <p className="skills_para">
                Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                </p>

                <Button className="onbords">
                  READ MORE <FaArrowRight size={35} className="mx-3" />
                </Button>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2 className="onbord mb-4"> Lorem Ipsum</h2>
              <p className="skills_para  ">
              Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
              </p>
              <Button className="onbords">
                READ MORE <FaArrowRight />
              </Button>
            </div>
            <div className="col-sm-6">
              <div className="">
                <img
                  src={image1}
                  width="90%"
                  className="rounded process_hover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={image1}
                width="90%"
                className="rounded process_hover"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="">
                <h2 className="onbord mb-4"> Lorem Ipsum</h2>
                <p className="skills_para  ">
                Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                </p>
                <Button className="onbords">
                  READ MORE <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2 className="onbord mb-4"> Lorem Ipsum</h2>
              <p className="skills_para  ">
              Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
              </p>
              <Button className="onbords">
                READ MORE <FaArrowRight />
              </Button>
            </div>
            <div className="col-sm-6">
              <div className="">
                <img
                  src={image1}
                  width="90%"
                  className="rounded process_hover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={image1}
                width="90%"
                className="rounded process_hover"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="">
                <h2 className="onbord mb-4"> Lorem Ipsum</h2>
                <p className="skills_para  ">
                Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                </p>
                <Button className="onbords">
                  READ MORE <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2 className="onbord mb-4"> Lorem Ipsum</h2>
              <p className="skills_para  ">
              Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
              </p>
              <Button className="onbords">
                READ MORE <FaArrowRight />
              </Button>
            </div>
            <div className="col-sm-6">
              <div className="">
                <img
                  src={image1}
                  width="90%"
                  className="rounded process_hover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={image1}
                width="90%"
                className="rounded process_hover"
                alt=""
              />
            </div>
            <div className="col-sm-6">
              <div className="">
                <h2 className="onbord mb-4"> Lorem Ipsum</h2>
                <p className="skills_para  ">
                Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                </p>
                <Button className="onbords">
                  READ MORE <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Realstate;
