import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* 로고 */}
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <h1 className="text-xl font-bold text-green-600">박용우봇</h1>
        </div>

        {/* 내비게이션 */}
        <nav className="flex space-x-6">
          <Link
            to="/"
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
