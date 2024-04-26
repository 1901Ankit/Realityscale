import React, { useState } from "react";
import "./index.css";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
const Cube = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    setPosition({ x, y });
  };
  const navigate = useNavigate();

  const routeHomePage = () => {
    navigate("/home");
  };
  return (
    <>
    <Loader/>
      <div className="cubebanner">
        <div className="overlay">
          <div>
            <p className="imagination text-center">Your imagination</p>
            <h3 className="innovation text-center">meets our innovation</h3>
            <div className="" onMouseMove={handleMouseMove}>
              <Button
                className="d-flex align-items-center justify-content-center mt-5 text-uppercase buttonhov mx-auto"
                text="uppercash"
                bg="#ffffff"
                color="black"
                padding="10px 1.625em 10px 1.625em"
                rounded="20px"
                shadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                border="none"
                onClick={routeHomePage}
              >
                <span>Discover More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cube;
