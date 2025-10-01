import React from "react";

const SectionTtile = ({ headding, subHeading }) => {
  return (
    <div className="flex items-center justify-center my-12 text-center">
      <div className="md:w-4/12 mx-auto">
        <p className="text-yellow-400 font-medium ">---{subHeading}---</p>
        <p className="text-4xl uppercase border-y-4 font-semibold text-gray-600 border-gray-200  py-4 mt-2">
          {headding}
        </p>
      </div>
    </div>
  );
};

export default SectionTtile;
