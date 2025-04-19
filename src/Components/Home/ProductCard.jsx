import React from 'react';
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

// Accept product data as a prop
const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Return null if no product data is provided
  }

  const { name, image, price } = product;

  return (
    // Keep original styles for the main card container
    <div className="group relative border border-none rounded-sm overflow-hidden duration-300">
      {/* Image Container - Keep aspect ratio */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          // Increase image size further
          className="object-contain h-[100%] w-[100%] group-hover:scale-110 transition-transform duration-500 ease-in-out" // Changed h-[90%] w-[90%] to h-[95%] w-[95%]
        />

        {/* Overlay with Action Icons - Keep original styles */}
        <div
          className="text-black absolute bottom-0 left-0 right-0 bg-white backdrop-blur-sm p-2
                     opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0
                     transition-all duration-300 ease-in-out m-4"
        >
          {/* Keep original text color */}
          <ul className="flex justify-around items-center text-[#535353]">
            {/* Add to Cart */}
            <li className="relative group/icon">
              <button
                // Keep original hover color, add padding for better hover area
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <LiaCartArrowDownSolid size={22} />
              </button>
              {/* Tooltip - Increased bottom margin */}
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap" // Changed mb-2 to mb-3
              >
                Add to Cart
              </span>
            </li>
            {/* Add to Wishlist */}
            <li className="relative group/icon">
              <button
                className='p-2  cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <CiHeart size={22} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap" // Changed mb-2 to mb-3
              >
                Add to Wishlist
              </span>
            </li>
            {/* Compare */}
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <IoIosGitCompare size={22} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap" // Changed mb-2 to mb-3
              >
                Compare
              </span>
            </li>
            {/* Quick View */}
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <FaRegEye size={20} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap" // Changed mb-2 to mb-3
              >
                Quick View
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Details - Keep original colors */}
      <div className="p-5 text-center">
        <h3 className="text-md font-medium cursor-pointer text-[#0D0E10] hover:text-[#fcb424] mb-1 truncate transition-colors duration-200" title={name}>
          {name}
        </h3>
        <p className="text-lg font-semibold text-[#535353]">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;