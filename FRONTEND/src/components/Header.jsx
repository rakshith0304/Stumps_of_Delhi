import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate(); 
  const handleShopClick = () => {
    navigate('/shop'); // Navigate to CartItems page
};

  return (
    <div className="flex flex-row justify-between items-center h-[70px] shadow-md">
      <div className="ml-5">
        <p className="text-2xl font-bold">Delhi Cricket Community</p>
      </div>
      <div className="flex flex-row justify-between w-[550px] mr-5">
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Tournament Registration</p>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Chat</p>
        <div onClick={handleShopClick}><p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Shop</p></div>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">About us</p>
        <p className="hover:underline cursor-pointer text-blue-800 transition-opacity active:opacity-50 font-bold">Login</p>
      </div>
    </div>
  );
};

export default Header;
