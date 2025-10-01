import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../../assets/home/01.jpg";
import image2 from "../../../assets/home/02.jpg";
import image3 from "../../../assets/home/03.png";
import image4 from "../../../assets/home/04.jpg";
import image5 from "../../../assets/home/05.png";
import image6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="w-full  mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        showStatus={false}
      >
        <div>
          <img className="h-[600px]" src={image1} alt="Slide 1" />
        </div>
        <div>
          <img className="h-[600px]" src={image2} alt="Slide 1" />
        </div>
        <div>
          <img className="h-[600px]" src={image3} alt="Slide 1" />
        </div>
        <div>
          <img className="h-[600px]" src={image4} alt="Slide 1" />
        </div>
        <div>
          <img className="h-[600px]" src={image5} alt="Slide 1" />
        </div>
        <div>
          <img className="h-[600px]" src={image6} alt="Slide 1" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
