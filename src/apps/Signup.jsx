import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';

const Signup = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    try {
      // 회원가입 API 호출
      const signupResponse = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          password,
          startDate: startDate.toISOString().split('T')[0],
        }),
      });

      const signupData = await signupResponse.json();
      if (!signupResponse.ok) {
        throw new Error(signupData.message || '회원가입 실패');
      }

      // 시작일 저장 API 호출
      const setDateResponse = await fetch('/api/user/set-startDate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          date: startDate.toISOString().split('T')[0],
        }),
      });

      const setDateData = await setDateResponse.json();
      if (!setDateResponse.ok) {
        throw new Error(setDateData.message || '시작일 저장 실패');
      }

      alert('회원가입이 완료되었습니다!');
      navigate('/mainpage');
    } catch (error) {
      alert(`에러 발생: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">회원가입</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userId"
                className="block text-gray-600 font-medium mb-1"
              >
                아이디
              </label>
              <input
                type="text"
                id="userId"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="아이디 입력"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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
