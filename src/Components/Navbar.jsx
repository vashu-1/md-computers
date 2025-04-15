import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0D0E10] p-4">
      <div className="container  mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Brand
        </Link>
        <ul className="flex space-x-4">
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
