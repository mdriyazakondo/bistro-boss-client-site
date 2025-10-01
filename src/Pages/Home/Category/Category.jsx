import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";
import SectionTtile from "../../../components/SectionTitle/SectionTtile";

const Category = () => {
  return (
    <section className="max-w-6xl mx-auto my-12">
      <SectionTtile
        subHeading={"From 11:00AM to 10:00PM"}
        headding={"Order Online"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-[400px] " src={image1} alt="" />
          <h2 className="absolute  text-4xl uppercase bottom-12 right-0 left-0 text-center text-white ">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-[400px]" src={image2} alt="" />
          <h2 className="absolute  text-4xl uppercase bottom-12 right-0 left-0 text-center text-white ">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-[400px]" src={image3} alt="" />
          <h2 className="absolute  text-4xl uppercase bottom-12 right-0 left-0 text-center text-white ">
            pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-[400px]" src={image4} alt="" />
          <h2 className="absolute  text-4xl uppercase bottom-12 right-0 left-0 text-center text-white ">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-[400px]" src={image5} alt="" />
          <h2 className="absolute  text-4xl uppercase bottom-12 right-0 left-0 text-center text-white ">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
