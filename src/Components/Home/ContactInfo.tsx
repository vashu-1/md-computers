import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

// Renamed component
const ContactInfo = () => {
  return (
    // Container with background image and overlay
    // Adjusted padding for responsiveness
    <div
      className="relative bg-cover bg-center text-white flex items-start justify-end px-4 sm:px-8 md:px-12 py-10 sm:py-16"
      style={{ backgroundImage: "url('/home/banner1.jpeg')" }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content container - Adjusted padding, margins, removed fixed width */}
      <div className="relative rounded-sm bg-[#FFCD05] text-black z-10 flex flex-col text-start
                     max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  /* Responsive max-width */
                     mx-4 my-12 sm:my-16 md:my-20 lg:my-24 /* Responsive margins */
                     px-6 py-8 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-20 lg:py-16 /* Responsive padding */
                     ">
        {/* Main Heading - Responsive size and margin */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
          Have Questions?
        </h1>
        {/* Sub Heading - Responsive size and margin */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
          We're here to help. Feel free to reach out.
        </h2>
        {/* Paragraph - Responsive size and margin */}
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-7 md:mb-8">
          Our dedicated team is ready to assist you with product details, order inquiries, or any technical support you might need.
        </p>

        {/* Styled Button wrapped in React Router Link - Responsive padding */}
        <Link to="/contact" className='self-start'> {/* Align button to start within flex-col */}
          <button
            className="inline-flex items-center cursor-pointer gap-2
                       px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 /* Responsive padding */
                       bg-[#0d0e10] text-white font-semibold rounded-md shadow-md
                       hover:bg-white focus:outline-none
                       transition duration-300 ease-in-out transform hover:text-black"
          >
            <span>Contact Info</span>
            <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" /> {/* Responsive icon size */}
          </button>
        </Link>

      </div>
    </div>
  );
};

// Export the renamed component
export default ContactInfo;