import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import Populer from "../Populer/Populer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <About />
      <Populer />
    </div>
  );
};

export default Home;
