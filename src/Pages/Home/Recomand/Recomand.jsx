import React, { useEffect, useState } from "react";
import SectionTtile from "../../../components/SectionTitle/SectionTtile";
import RecomandItem from "../../../components/Recomandetion/RecomandItem";

const Recomand = () => {
  const [recomand, setRecomand] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recomandItem = data
          .filter((item) => item.category === "salad")
          .slice(0, 4);
        setRecomand(recomandItem);
      });
  }, []);
  return (
    <section className="my-12 mx-4 md:mx-0">
      <SectionTtile subHeading={"Should Try"} headding={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recomand.map((item) => (
          <RecomandItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Recomand;
