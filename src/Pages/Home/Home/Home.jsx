import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import Populer from "../Populer/Populer";
import Recomand from "../Recomand/Recomand";
import Fretured from "../Feruted/Fretured";
import Tastimonial from "../Tastimonials/Tastimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <About />
      <Populer />
      <Recomand />
      <Fretured />
      <Tastimonial />
    </div>
  );
};

export default Home;
