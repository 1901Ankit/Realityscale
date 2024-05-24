import React from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../assests/images/brand/mahindra.png";
import image2 from "../../assests/images/brand/renault.png";
import image3 from "../../assests/images/brand/honda.png";
import image4 from "../../assests/images/brand/mahindra.png";
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
  ];
  return (
    <div className="mil-softer-bg">
      <div className="container p-7 logoclients">
        <Carousel
          responsive={responsive}
          arrows={false}
          className="text-center caris"
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {images.map((val, index) => (
            <img key={index} src={val.img} alt="" height={100} />
          ))}
        </Carousel> 
      </div>
    </div>
  );
};

export default Testilogo;
