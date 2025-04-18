import React from "react";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="bg-secondary bg-cover bg-center h-screen flex items-center justify-center text-white relative">
          <img
            src="https://startersites.io/blocksy/e-bike/wp-content/uploads/2024/05/background-pattern-2.svg"
            alt="Background SVG"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h1 className="text-4xl font-bold z-10">Welcome to Our Website</h1>
          <p className="mt-4 text-lg z-10">Your journey starts here</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
