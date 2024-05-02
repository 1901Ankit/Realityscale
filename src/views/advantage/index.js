import React, { useState } from "react";
import "./index.css";
import imageflex from "../../assests/images/banner/story.jpg";
import Carousel from "react-multi-carousel";
const Advantage = () => {
  const [activeOption, setActiveOption] = useState(2);

  const optionData = [
    {
      backgroundUrl: imageflex,
      icon: "fas fa-walking",
      main: "Lorem Ipsum",
      sub: "Lorem ipsum dolor sit amet.",
    },
    {
      backgroundUrl: imageflex,
      icon: "fas fa-snowflake",
      main: "Lorem Ipsum",
      sub: "Lorem ipsum dolor sit amet.",
    },
    {
      backgroundUrl: imageflex,
      icon: "fas fa-tree",
      main: "Lorem Ipsum",
      sub: "Lorem ipsum dolor sit amet.",
    },
    {
      backgroundUrl: imageflex,
      icon: "fas fa-tint",
      main: "Lorem Ipsum",
      sub: "Lorem ipsum dolor sit amet.",
    },
    {
      backgroundUrl: imageflex,
      icon: "fas fa-sun",
      main: "Lorem Ipsum",
      sub: "Lorem ipsum dolor sit amet.",
    },
  ];

  const handleOptionHover = (index) => {
    setActiveOption(index);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="blck soks">
      <div>
        <p className="busines text-center">Business Advantage</p>
      </div>
      <div className="container-fluid  p-0 options mt-5 mb-5  ">
        {optionData.map((option, index) => (
          <div
            key={index}
            className={`option ${index === activeOption ? "active" : ""}`}
            style={{ "--optionBackground": `url(${option.backgroundUrl})` }}
            onMouseEnter={() => handleOptionHover(index)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className={option.icon}></i>
              </div>
              <div className="info">
                <div className="main">{option.main}</div>
                <div className="sub">{option.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*mobile view  */}
      <div className="mobileCarousel">
        <Carousel responsive={responsive} showArrows={false} showThumbs={false}>
          {optionData.map((val, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${val.backgroundUrl})`,
                height: "40vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "end",
                justifyContent: "start",
                width: "100%",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ffffff",
                  }}
                >
                  <i className={`ms-3 ${val.icon}`}></i>
                  <h5 className="mb-0 ms-2">{val.main}</h5>
                </div>
                <p className="text-white ms-3">{val.sub}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
      {/*mobile view  */}
    </div>
  );
};

export default Advantage;
