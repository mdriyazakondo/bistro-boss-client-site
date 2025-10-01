import React, { useEffect, useState } from "react";
import SectionTtile from "../../../components/SectionTitle/SectionTtile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Tastimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-12 max-w-7xl mx-auto">
      <SectionTtile
        subHeading={"What Our Clients Say"}
        headding={"TESTIMONIALS"}
      />
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="max-w-6xl mx-auto flex items-center justify-center flex-col  space-y-3">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <div className="flex items-center my-3 gap-2">
                  <img className="w-6" src={review.img} alt="" />
                  <img className="w-6" src={review.img} alt="" />
                </div>
                <p className="text-center text-gray-500">{review.details}</p>
                <h2 className="text-center text-2xl  text-yellow-500">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tastimonial;
