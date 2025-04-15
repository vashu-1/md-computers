import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="bg-[#0D0E10] p-4">
      <div className="container  mx-auto flex justify-between items-center">
        <Logo/>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <HiOutlineShoppingBag />
          <IoMdSearch />
          <IoLogInOutline />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
