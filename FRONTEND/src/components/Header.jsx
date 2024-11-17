import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate(); 
  const handleShopClick = () => {
    navigate('/shop'); // Navigate to CartItems page
};
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="flex justify-between items-center h-[70px] shadow-md px-5">
      {/* Logo Section */}
      <div className="logoDiv">
        <Link
          to="/"
          className="text-2xl font-bold hover:underline text-blue-800 transition-opacity active:opacity-50"
        >
          Delhi Cricket Community
        </Link>
      </div>
      <div className="flex flex-row justify-between w-[550px] mr-5">
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Tournament Registration</p>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Chat</p>
        <div onClick={handleShopClick}><p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Shop</p></div>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">About us</p>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Login</p>
=======

      {/* Menu Links */}
      <div className="menu flex gap-8 pr-20">
        <Link
          to="/tournament-registration"
          className="menuList text-[#6f6f6f] hover:text-blue-800 font-bold transition-opacity active:opacity-50"
        >
          Tournament Registration
        </Link>
        <Link
          to="/shop"
          className="menuList text-[#6f6f6f] hover:text-blue-800 font-bold transition-opacity active:opacity-50"
        >
          Shop
        </Link>
        <Link
          to="/about-us"
          className="menuList text-[#6f6f6f] hover:text-blue-800 font-bold transition-opacity active:opacity-50"
        >
          About Us
        </Link>

        {/* Login/Logout Section */}
        <div className="relative">
          <li className="menuList text-[#6f6f6f] hover:text-blue-800 font-bold relative group">
            {isLoggedIn ? username : 'Login'}
            {/* Show dropdown for Google Login */}
            {!isLoggedIn && (
              <div className="absolute bg-white border border-gray-300 rounded-md p-2 hidden group-hover:block">
                <GoogleAuth
                  setIsLoggedIn={setIsLoggedIn}
                  setUsername={setUsername}
                  showLogin
                />
              </div>
            )}
            {/* Show dropdown for Logout */}
            {isLoggedIn && (
              <div className="absolute bg-white border border-gray-300 rounded-md p-2 hidden group-hover:block">
                <GoogleAuth
                  setIsLoggedIn={setIsLoggedIn}
                  setUsername={setUsername}
                  showLogout
                />
              </div>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
