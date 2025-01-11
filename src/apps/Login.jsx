import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">로그인</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 font-medium mb-1"
              >
                아이디
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="아이디 입력"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-1"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="비밀번호 입력"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-white font-medium py-2 rounded-lg hover:bg-green-500 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
