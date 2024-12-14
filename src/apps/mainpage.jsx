import React from "react";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 space-y-8">
      {/* 현재 체중 및 진행 상태 */}
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-lg text-gray-700">
          현재 체중: <strong className="text-xl text-blue-600">95kg</strong>
        </p>
        <p className="mt-2 text-gray-500">현재 2단계 4일차 진행중</p>
      </section>

      {/* 메인 카드 */}
      <section className="w-full max-w-md bg-green-100 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">희재 님</h2>
        <p className="text-lg font-medium text-gray-700 mt-2">D + 12</p>
        <p className="text-sm text-gray-500 mt-1">2단계 4일차 진행중</p>
      </section>

      {/* 차트 영역 */}
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
        <img
          src="/path/to/chart-placeholder.png"
          alt="체중 변화 차트"
          className="w-full h-40 object-cover rounded-md"
        />
      </section>

      {/* My Page와 ChatBot 버튼 */}
      <section className="w-full max-w-md flex justify-around">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          My Page
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          ChatBot
        </button>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="w-full max-w-md bg-yellow-100 shadow-lg rounded-lg p-4 text-center">
        <p className="text-gray-700">
          “박용우 다이어트”에 대해 더 알고 싶다면?{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700">
            Click!
          </a>
        </p>
      </section>
    </div>
  );
};

export default MainPage;
