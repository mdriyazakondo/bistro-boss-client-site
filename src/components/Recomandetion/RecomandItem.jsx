import React from "react";

const RecomandItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="space-y-4 flex items-center justify-center flex-col shadow p-6 rounded-md">
      <img src={image} alt="" />
      <div className="space-y-2">
        <h3 className="text-xl text-gray-600 ">{name}</h3>
        <p className="text-gray-500">{recipe.slice(0, 40)}...</p>
        <p className="text-yellow-500">Price: ${price}</p>
      </div>
      <button className="bg-gray-100 cursor-pointer text-yellow-400 py-1.5 px-8 rounded-md border-b-2 hover:bg-gray-700 transition-all duration-400 border-yellow-300">Add To Cart</button>
    </div>
  );
};

export default RecomandItem;
