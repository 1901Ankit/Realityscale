import React from "react";
import Carousel from "react-multi-carousel";
import image1 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image2 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image3 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image5 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image4 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image6 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image7 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image8 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image9 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image10 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image11 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image12 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import image13 from"../../assests/images/logo/newlogo/Reality Scale Logo Black 05.png";
import "./index.css";

const Testilogo = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  let images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
    {
      img: image12,
    },
    {
      img: image13,
    },
  ];
  return (

      <div className="mil-softer-bg">
        <div className="container p-5 logoclient">
          <div className="row ">
            {/* <div className="col-sm-12 text-center">
              <h5>Our Clients</h5>
            </div> */}
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            className="text-center"
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            {images.map((val) => (
              <img src={val.img} alt="" height={100} />
            ))}
          </Carousel>
        </div>
      </div>

  );
};

export default Testilogo;
