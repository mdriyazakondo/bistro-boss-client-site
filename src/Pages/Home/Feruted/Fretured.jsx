import React from "react";
import SectionTtile from "../../../components/SectionTitle/SectionTtile";
import freturedImage from "../../../assets/home/featured.jpg";

const Fretured = () => {
  return (
    <section className="relative my-12  border rounded-md border-gray-400">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-fixed  bg-no-repeat filter blur-md"
        style={{ backgroundImage: `url(${freturedImage})` }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 mx-4
       md:mx-0"
      >
        <SectionTtile headding={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="md:flex items-center justify-center gap-10 max-w-5xl mx-auto py-8 md:py-20">
          <img className="w-[500px] rounded-md" src={freturedImage} alt="" />
          <div className="text-white space-y-4 mt-6 md:mt-0 ">
            <h3 className="text-xl ">March 20, 2025</h3>
            <p>
              Discover the perfect blend of taste and freshness with our chef’s
              special creations. Each dish is carefully crafted with premium
              ingredients to bring you an unforgettable dining experience. From
              appetizers to mains, every bite is a celebration of flavor made
              just for you.
            </p>
            <button className="px-8 mt-0 md:mt-8 bg-gray-400 cursor-pointer py-1.5 border-b-2 text-white rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fretured;
