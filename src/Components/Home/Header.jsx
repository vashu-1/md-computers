import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="bg-primary flex justify-between px-24 items-center font-serif w-full h-10">
        <div className="flex gap-7 h-full">
          <div className="flex justify-center items-center h-full gap-2 text-sm">
            <HiAtSymbol className="text-lg font-bold" />
            <span className="font-semibold">email@business.com</span>
          </div>
          <div className="flex justify-center items-center h-full gap-2 text-sm">
            <FiPhoneCall className="text-lg font-bold" />
            <span className="font-semibold">123-456-7890</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-full gap-2 text-sm">
          <IoLocationOutline className="text-lg font-bold" />
          <span className="font-semibold">Sindri Road, Dhanbad</span>
        </div>
      </div>
    </>
  );
};

export default Header;
