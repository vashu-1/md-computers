import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://mdcomputers.in/image/catalog/Logo/08-03-25/mdcomputers-logo-08.png"
            alt=""
          />
        </div>
        <ul>
          <li>
            <link to="#Gaming Gear">GAMING GEARS</link>
          </li>
          <li>
            <link to="#Gaming Gear">STORE</link>
          </li>
          <li>
            <link to="#Gaming Gear">BUILD YOUR PC</link>
          </li>
          <li>
            <link to="#Gaming Gear">MERCHANDISE</link>
          </li>
        </ul>
        <div>
          <HiOutlineShoppingBag />
          <IoMdSearch />
          <IoLogInOutline />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
