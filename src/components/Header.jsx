import React from "react";
import { Link } from "react-router-dom";
import dietLogo from '../components/diet_logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* 로고 */}
        <div className="flex items-center ">
          <img
            src={dietLogo}
            alt="Logo"
            className="w-40 h-30"
          />
        </div>

        {/* 내비게이션 */}
        <nav className="flex space-x-6">
          <Link
            to="/mainpage"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/mypage"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            My Page
          </Link>
          <Link
            to="/chatbot"
            className="text-gray-700 hover:text-green-600 font-medium"
          >
            Chat
          </Link>
        </nav>
      </div>
    </header>
  );
  
};

export default Header;
