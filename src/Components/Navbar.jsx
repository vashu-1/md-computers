import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { BiGitCompare } from "react-icons/bi";

function Navbar() {
  return (
    <div className=" text-white shadow-md">
      <div className="container z-99 absolute mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-primary">
          Brand
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-72 px-4 py-1 rounded-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <IoMdSearch className="absolute top-2.5 right-4 text-gray-400" />
          </div>
          <IoLogInOutline className="text-2xl cursor-pointer hover:text-primary transition" />
          <HiOutlineShoppingBag className="text-2xl cursor-pointer hover:text-primary transition" />
          <HiOutlineHeart className="text-2xl cursor-pointer hover:text-primary transition" />
          <BiGitCompare className="text-2xl cursor-pointer hover:text-primary transition" />
        </div>
      </div>
      <div className="">
        <div className="bg-secondary relative bg-cover bg-center h-screen flex items-center justify-center text-white ">
          <img
            src="https://startersites.io/blocksy/e-bike/wp-content/uploads/2024/05/background-pattern-2.svg"
            alt="Background SVG"
            className="absolute inset-0 w-full h-full object-cover opacity-8"
          />
          <h1 className="text-4xl font-bold z-10">Welcome to Our Website</h1>
          <p className="mt-4 text-lg z-10">Your journey starts here</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
