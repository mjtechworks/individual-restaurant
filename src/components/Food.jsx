import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl sm:text-center">
        Top Rated Menu Items
      </h1>

      <div className="grid md:grid-cols-2">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex w-full max-w-fit flex-wrap">
            <button
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("burger")}
            >
              Burgers
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("salad")}
            >
              Salads
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex w-full md:max-w-[390px]">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white flex-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white flex-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white flex-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600
           hover:bg-orange-600 hover:text-white flex-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                className="h-[200px] w-full object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-500 text-white py-1 px-3 rounded-xl">
                  {item.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
