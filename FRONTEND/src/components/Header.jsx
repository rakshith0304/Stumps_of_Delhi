import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[70px] shadow-md">
      <div className="ml-5">
        <Link
          to="/"  // Navigate to home page
          className="text-2xl font-bold hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50"
        >
          Delhi Cricket Community
        </Link>
      </div>
      <div className="flex flex-row justify-between w-[550px] mr-5">
        <button className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">
          Tournament Registration
        </button>
        <button className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">
          Shop
        </button>
        <Link
          to="/about-us"  // Navigate to About Us page
          className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold"
        >
          About us
        </Link>
        <button className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
