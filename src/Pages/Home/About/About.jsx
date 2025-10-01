import React from "react";
import bgImg from "../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-[400px] flex items-center justify-center my-12 mx-4 md:mx-0"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

      <div className="relative z-10 text-center max-w-3xl mx-4 bg-white p-12 rounded-md text-black">
        <h2 className="uppercase text-4xl   font-semibold mb-4">Bistro Boss</h2>
        <p className=" ">
          Bistro Boss Restaurant brings you a modern dining experience where
          taste meets elegance. Our menu features fresh, healthy, and flavorful
          dishes inspired by cuisines from around the world. With a cozy
          ambiance and quality service, we aim to make every moment
          unforgettable.
        </p>
      </div>
    </div>
  );
};

export default About;
