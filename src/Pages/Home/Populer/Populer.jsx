import React, { useEffect, useState } from "react";
import SectionTtile from "../../../components/SectionTitle/SectionTtile";
import PopulerMenu from "../../../components/PopulerMenu/PopulerMenu";

const Populer = () => {
  const [populerMenu, setPopulerMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuItems = data.filter((item) => item.category === "popular");
        setPopulerMenu(menuItems);
      });
  }, []);
  return (
    <section className="my-12 md:mx-0 mx-4">
      <SectionTtile headding={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid grid-rows-1 md:grid-cols-2 gap-6">
        {populerMenu.map((item) => {
          return <PopulerMenu key={item._id} item={item} />;
        })}
      </div>
      <div className="w-[400px] mx-auto text-center border-b-4 rounded-2xl mt-6 border-gray-600 ">
        <button className="text-xl font-semibold text-gray-600 py-1.5 cursor-pointer">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Populer;
