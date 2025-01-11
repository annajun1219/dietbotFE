import React from "react";
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-8" style={{ backgroundColor: 'rgb(249, 251, 242)' }}>
      {/* 현재 체중 및 진행 상태 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-6 text-center" style={{ backgroundColor: 'rgb(249,251,242)' }}>
        <p className="text-lg text-gray-700">
          현재 체중: <strong className="text-xl text-black">50kg</strong>
        </p>
        <p className="mt-2 text-gray-500">현재 2단계 4일차 진행중</p>
      </section>

      {/* 메인 카드 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-6 text-center" style={{ backgroundColor: 'rgb(221,235,200)' }}>
        <h2 className="text-2xl font-bold text-green-600">희재 님</h2>
        <p className="text-lg font-medium text-gray-700 mt-2">D + 12</p>
        <p className="text-sm text-gray-500 mt-1">2단계 4일차 진행중</p>
      </section>

      {/* 차트 영역 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-6 flex items-center justify-center" style={{ backgroundColor: 'rgb(249,251,242)' }}>
        <img
          src="/path/to/chart-placeholder.png"
          alt="체중 변화 차트"
          className="w-full h-40 object-cover rounded-md"
        />
      </section>

      {/* My Page와 ChatBot 버튼 */}
      <section className="w-full max-w-md flex justify-around">
        <Link to="/mypage">
          <button className="px-6 py-2 text-black rounded-lg shadow-md hover:bg-green-600" style={{ backgroundColor: 'rgb(221,235,200)' }}>
            My Page
          </button>
        </Link>
        <Link to="/chatbot">
          <button className="px-6 py-2 text-black rounded-lg shadow-md hover:bg-green-600" style={{ backgroundColor: 'rgb(221,235,200)' }}>
            ChatBot
          </button>
        </Link>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-4 text-center" style={{ backgroundColor: 'rgb(221,235,200)' }}>
        <p className="text-gray-700">
          “박용우 다이어트”에 대해 더 알고 싶다면?{" "}
          <a 
            href="https://namu.wiki/w/%EC%8A%A4%EC%9C%84%EC%B9%98%EC%98%A8%20%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8" 
            className="text-blue-500 underline hover:text-blue-700" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click!
          </a>
        </p>
      </section>
    </div>
  );
};

export default MainPage;
