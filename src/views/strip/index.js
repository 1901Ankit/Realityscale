import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
const Strip = () => {
  return (
    <div className="">
      <div className="subscribe_bg ">
        <div className="subscribe_bg_overlay">
          <div className="container updn">
            <div className="row">
              <div className="col-sm-10 m-auto">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <h6 className="striplor text-white">lorem</h6>
                      <h1 className="sofar text-white">   Production is no longer &</h1>
                      <h1 className="sofar text-white"> awaiting game.</h1>
                    </div>
                  </div>
                  <div className="col-sm-6  sidehojao">
                    <div className="d-flex align-items-center  justify-content-center  pt-5 ">
                    <Link to={"/"}>
                  <Button
                    text="uppercase"
                    padding="12px"
                    width="150px"
        
                    className="button "
                    bb="none"
                  >
                    GET DEMO
                  </Button>
                </Link>
                <Link to={"/"}>
                  <Button
                    text="uppercase"
                    padding="12px"
                    width="150px"
               
                    className="buttonsabout ms-3 "
                    bb="none"
                  >
                    About
                  </Button>
                </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strip;
