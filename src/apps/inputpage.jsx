import React from "react";

const InputPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 사용자 목표 정보 */}
      <header className="flex items-center space-x-4 p-4">
        <div className="w-16 h-16 rounded-full flex justify-center items-center" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-700" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path fillRule="evenodd" d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z" />
        </svg>
        </div>
        <h2 className="text-xl font-bold text-green-600">목표 체중 :</h2>
        <input
          type="number"
          className="w-24 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="kg"
        />
      </header>

      {/* 입력 폼 */}
      <section className="mt-6 p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgb(249, 251, 242)' }}>
        <h3 className="text-center text-lg font-bold text-green-700 mb-4">날짜를 입력해주세요</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">체중 (kg)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="체중 입력"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">골격근량 (kg)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="골격근량 입력"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">체지방량 (kg)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="체지방량 입력"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-1/2 px-4 py-2 font-medium rounded-full shadow-md hover:bg-green-300" style={{ backgroundColor: 'rgb(221, 235, 200)'}}
            >
              입력하기
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default InputPage;
