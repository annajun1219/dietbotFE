import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center">
        {/* 로고 */}
        <img
          src="./diet_logo.png"
          alt="Diet Logo"
          className="w-40 h-40 mb-6"
        />
        {/* 로고 아래 텍스트 */}
        <h1 className="text-2xl font-bold text-green-600 mb-2">박용우봇</h1>
        <p className="text-gray-600 mb-8">다이어트를 더욱 쉽게</p>

        {/* 버튼들 */}
        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
            className="w-40 bg-green-400 text-white font-medium py-2 rounded-lg hover:bg-green-500 transition"
          >
            로그인
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-40 bg-green-100 text-green-600 font-medium py-2 rounded-lg hover:bg-green-200 transition"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
