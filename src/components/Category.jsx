import React from "react";

import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            >
              <h1>{item.name}</h1>
              <img src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
