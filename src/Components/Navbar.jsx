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

      <div className="bg-secondary bg-cover bg-center h-screen text-white relative flex items-center">
        <img
          src="https://startersites.io/blocksy/e-bike/wp-content/uploads/2024/05/background-pattern-2.svg"
          alt="Background SVG"
          className="absolute inset-0 w-full h-full object-cover opacity-8"
        />
        <div className="flex w-full px-10 z-10">
          <div className="w-1/2 flex flex-col justify-center pl-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-0.5 bg-primary"></div>
              <div className="uppercase tracking-wider text-2xl">
                <p>Empowering Your Digital World</p>
              </div>
            </div>
            <h1 className="text-6xl uppercase font-bold mt-3">
              Delivering Power Where Performance Begins
            </h1>

            <div className="flex gap-8 mt-10">
              <button className="px-6 py-4 text-xl bg-primary text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 1v10c0 .55-.45 1-1 1s-1-.45-1-1V3.41l-8.29 8.3c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L8.59 2H1c-.55 0-1-.45-1-1s.45-1 1-1h10a1.019 1.019 0 0 1 1 1Z" />
                </svg>
              </button>

              <button className="px-6 py-4 text-xl bg-transparent text-white font-semibold rounded-md shadow-md hover:text-primary transition flex items-center gap-2">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 1v10c0 .55-.45 1-1 1s-1-.45-1-1V3.41l-8.29 8.3c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L8.59 2H1c-.55 0-1-.45-1-1s.45-1 1-1h10a1.019 1.019 0 0 1 1 1Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex w-2/5 mx-auto gap-1 absolute left-[54%] top-[8%]">
            <img
              src="../../banner/andras-vas-Bd7gNnWJBkU-unsplash.jpg"
              alt="Background SVG"
              className="inset-0 w-6/9 object-cover"
            />

            <div className="w-full flex flex-col absolute left-[64%] top-[18%] gap-1 ">
              <img
                src="/banner/seyed-sina-fazeli-XP9JF6jyRGc-unsplash.jpg"
                alt="Create Account Image"
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
              <img
                src="/public/footer/payment-method.svg"
                alt="Payment Methods"
                className="w-1/3 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
