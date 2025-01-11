import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router를 위한 import
import Header from '../components/Header';

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrorMessage(""); // 오류 메시지 초기화
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 동작 방지

    if (!formData.username || !formData.password) {
      setErrorMessage("모두 입력해 주세요.");
      return;
    }

    navigate('/mainpage'); // mainpage.jsx로 이동
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="p-8 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">로그인</h2>
          {errorMessage && (
            <p className="text-center text-red-500 mb-4">{errorMessage}</p>
          )}
          <form onSubmit={handleSubmit}> {/* handleSubmit 함수 연결 */}
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
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="아이디 입력"
                style={{ backgroundColor: 'rgb(249,251,242)' }}
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
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="비밀번호 입력"
                style={{ backgroundColor: 'rgb(249,251,242)' }}
              />
            </div>
            <div className="mt-6"> {/* 버튼 위치 조정을 위해 추가 */}
              <button
                type="submit"
                className="w-full text-black font-medium py-2 rounded-lg hover:bg-green-500 transition"
                style={{ backgroundColor: 'rgb(221,235,200)' }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
