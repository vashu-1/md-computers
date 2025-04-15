import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="bg-secondary bg-sticky p-4">
      <div className=" container h-full flex justify-between items-center">
        <Link to="/" className="text-white px-12 text-xl font-bold">
          Brand
        </Link>

        <div className="flex text-white border bg-gray-900 px-3 py-1 rounded-lg items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-136"
          />
          <button className="bg-gray-900 cursor-pointer text-white px-2 py-1 rounded-full">
            <IoMdSearch />
          </button>
        </div>

        <ul className=" flex px-4 gap-2 text-xl space-x-4">
          <li>
            <Link to="/login" className="text-gray-300 hover:text-white">
              <PiSignIn />
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              <FaRegHeart />
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              <TbArrowsCross />
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              <HiOutlineShoppingBag />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
