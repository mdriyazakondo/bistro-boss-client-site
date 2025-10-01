import React from "react";

const PopulerMenu = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-center justify-between gap-2 md:gap-4 border-b-2  pb-4 border-gray-300 rounded-xl px-6">
      <img
        className="w-[80px] h-[80px] object-cover rounded-r-full rounded-b-full"
        src={image}
        alt={name}
      />{" "}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-500">
          {name} ------
        </h2>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default PopulerMenu;
