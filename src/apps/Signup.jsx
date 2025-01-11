import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router를 위한 import
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';

const Signup = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [password, setPassword] = useState(''); // 비밀번호 상태 추가
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 동작 방지

    // 비밀번호와 비밀번호 확인 일치 여부 확인
    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    // 비밀번호가 일치하면 mainpage로 이동
    navigate('/mainpage');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">회원가입</h2>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-600 font-medium mb-1"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // 비밀번호 확인 상태 업데이트
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="start-date"
                className="block text-gray-600 font-medium mb-1"
              >
                시작일을 선택하세요
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholderText="날짜 선택"
              />
            </div>
            <button
              type="submit"
              className="w-full text-black font-medium py-2 rounded-lg transition"
              style={{
                backgroundColor: 'rgb(221,235,200)',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = 'rgb(200,220,180)')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = 'rgb(221,235,200)')
              }
            >
              회원가입하기 →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
