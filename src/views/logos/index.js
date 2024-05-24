import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../assests/images/brand/honda.png";  
import image4 from "../../assests/images/brand/mahindra.png";
import image3 from "../../assests/images/brand/renault.png";
import "./index.css";

const Sliderlogo = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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

  let images = [
    {
      img: image3,
      key: "image3",
    },
    {
      img: image1,
      key: "image1",
    },
    {
      img: image4,
      key: "image4",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const itemsToShow = responsive.desktop.items;
    const middleIndex = Math.floor(itemsToShow / 2);

    const updateMiddleLogo = () => {
      const carouselItems = document.querySelectorAll(".react-multi-carousel-item");
      carouselItems.forEach((item, index) => {
        const img = item.querySelector("img");
        if (img) {
          if (index === (currentSlide + middleIndex) % carouselItems.length) {
            img.classList.add("middle-logo");
          } else {
            img.classList.remove("middle-logo");
          }
        }
      });
    };

    updateMiddleLogo();
  }, [currentSlide, responsive]);

  return (
    <div className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container logoclient mil-p-120-30">
          <Carousel
            responsive={responsive}
            arrows={false}
            className="text-center"
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={1800}
            infinite={true}
            beforeChange={handleBeforeChange}
          >
            {images.map((val) => (
              <img className="carousel-logo" key={val.key} src={val.img} alt="" height={100} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Sliderlogo;
