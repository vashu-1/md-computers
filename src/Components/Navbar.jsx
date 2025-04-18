import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { BiGitCompare } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="bg-secondary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-primary">
          Brand
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-72 px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <IoMdSearch className="absolute top-2.5 right-4 text-gray-400" />
          </div>
          <Link
            to="/login"
            className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition"
          >
            Login
          </Link>
          <HiOutlineShoppingBag className="text-2xl cursor-pointer hover:text-primary transition" />
          <HiOutlineHeart className="text-2xl cursor-pointer hover:text-primary transition" />
          <BiGitCompare className="text-2xl cursor-pointer hover:text-primary transition" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
