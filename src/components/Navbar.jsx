import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div
      className="max-w-[1640px] mx-auto flex justify-between 
        items-center p-3"
    >
      {/* Left Menu */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl">
          Smudger <span className="font-bold text-orange-600">Food</span>
        </h1>
        <div
          className="hidden md:flex bg-gray-200 rounded-full
            p-1 text-sm"
        >
          <p className="bg-black p-2 text-white rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div
        className="flex items-center bg-gray-200 rounded-full
            px-2 w-[200px] sm:w-[300px] lg:w-[400px]"
      >
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="p-2 bg-transparent w-full focus:outline-none"
        />
      </div>

      {/* Cart Button */}
      <button
        className="hidden md:flex items-center bg-black 
        text-white py-2 rounded-full"
      >
        <BsFillCartFill className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu */}

      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}
      <div
        className={
          nav
            ? "fixed w-[300px] left-0 top-0 z-10 bg-white h-screen transition-all duration-300"
            : "fixed left-[-100%] top-0 h-screen transition-all duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Smudger <span className="font-bold text-orange-600">Food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <TbTruckDelivery size={25} className="mx-4" /> Orders
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <MdFavorite size={25} className="mx-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <FaWallet size={25} className="mx-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <MdHelp size={25} className="mx-4" /> Help
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <AiFillTag size={25} className="mx-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <BsFillSaveFill size={25} className="mx-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex hover:bg-gray-100 cursor-pointer">
              <FaUserFriends size={25} className="mx-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
