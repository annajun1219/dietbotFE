import React from 'react';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 상단 로고와 내비게이션 */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-bold text-green-600">박용우봇</h1>
            <p className="text-sm text-gray-500">목표를 위한 여정</p>
          </div>
        </div>
        <nav className="flex space-x-4">
          <button className="text-gray-700 hover:text-green-600">My</button>
          <button className="text-gray-700 hover:text-green-600">Chat</button>
        </nav>
      </header>

      {/* 사용자 목표 정보 */}
      <section className="mt-6 bg-green-100 p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-600">목표 체중: <strong>55kg</strong></p>
        <p className="text-sm text-gray-600">현재 2단계 4일차 진행 중</p>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white text-sm rounded-lg shadow-md hover:bg-green-600">
          오늘의 정보 입력
        </button>
      </section>

      {/* 기록 정보 */}
      <section className="mt-6 space-y-4">
        {[{ date: '11월 11일', weight: '69.7kg', muscle: '24.6kg', fat: '25.3kg' },
          { date: '11월 15일', weight: '69.2kg', muscle: '24.5kg', fat: '25.2kg' },
          { date: '11월 18일', weight: '68.8kg', muscle: '24.5kg', fat: '24.2kg' }].map((entry, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow-md"
          >
            <div>
              <p className="text-sm text-gray-600">{entry.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                현재 체중: <strong>{entry.weight}</strong>
              </p>
              <p className="text-sm text-gray-700">
                골격근량: <strong>{entry.muscle}</strong>
              </p>
              <p className="text-sm text-gray-700">
                체지방량: <strong>{entry.fat}</strong>
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 그래프 영역 */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-center text-gray-700">체중 (kg)</h2>
        <div className="mt-4">
          {/* 차트 이미지 placeholder */}
          <img
            src="/path/to/weight-chart-placeholder.png"
            alt="체중 변화 차트"
            className="w-full h-40 object-contain"
          />
        </div>

        <div className="mt-6 flex justify-between">
          <div className="w-1/3 text-center">
            <h3 className="text-sm font-bold text-gray-600">골격근량 (kg)</h3>
            <img
              src="/path/to/muscle-chart-placeholder.png"
              alt="골격근량 변화 차트"
              className="w-full h-24 object-contain"
            />
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-sm font-bold text-gray-600">체지방량 (kg)</h3>
            <img
              src="/path/to/fat-chart-placeholder.png"
              alt="체지방량 변화 차트"
              className="w-full h-24 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
