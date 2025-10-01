import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import Populer from "../Populer/Populer";
import Recomand from "../Recomand/Recomand";
import Fretured from "../Feruted/Fretured";
import Tastimonial from "../Tastimonials/Tastimonial";
import Calls from "../Calls/Calls";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <About />
      <Populer />
      <Calls />
      <Recomand />
      <Fretured />
      <Tastimonial />
    </div>
  );
};

export default Home;
