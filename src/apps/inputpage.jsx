import React from "react";

const InputPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-green-600">정보 입력</h1>
      </header>

      <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600"
          >
            저장하기
          </button>
        </form>
      </section>
    </div>
  );
};

export default InputPage;
