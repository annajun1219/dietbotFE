import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataContext } from '../App';

const InputPage = () => {
  const { setWeightData } = useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: new Date(),
    weight: '',
    muscle: '',
    fat: '',
  });
  const [goalWeight, setGoalWeight] = useState(''); // 목표 체중 입력 및 조회를 위한 state
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const userId = 'user001'; // 실제 사용자 ID 사용

  // 목표 체중 조회 API 호출
  useEffect(() => {
    const fetchGoalWeight = async () => {
      try {
        const response = await axios.get(`/api/user/set/goal`);
        setGoalWeight(response.data.goalWeight || ''); // 목표 체중이 없으면 빈 값
      } catch (error) {
        console.error('Error fetching goal weight:', error);
      }
    };
    fetchGoalWeight();
  }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleGoalWeightChange = (value) => {
    setGoalWeight(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        date: formData.date.toISOString().split('T')[0], // yyyy-MM-dd 형식으로 변환
        weight: formData.weight,
        bodyMass: formData.fat,
        muscleMass: formData.muscle,
        user: { userId: userId },
      };

      await axios.post('/api/user/set/record', payload);
      setWeightData((prevData) => [...prevData, { ...payload, date: formData.date.toLocaleDateString() }]);
      alert('체중 정보가 성공적으로 입력되었습니다.');
      navigate('/mypage');
    } catch (error) {
      console.error('Error submitting weight data:', error);
      alert('정보 입력 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="space-y-8">
        {/* 목표 체중 입력 부분 */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div
            className="w-16 h-16 rounded-full flex justify-center items-center"
            style={{ backgroundColor: 'rgb(221, 235, 200)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-10 h-10 text-green-700"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-700 text-center mr-6">목표 체중 (kg) : </label>
            <input
              type="number"
              value={goalWeight}
              onChange={(e) => handleGoalWeightChange(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              style={{ backgroundColor: 'rgb(249, 251, 242)' }}
            />
          </div>
        </div>

        {/* 체중 정보 입력 */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgb(249, 251, 242)' }}>
          <div>
            {/* 날짜 선택 */}
        <h3
          className="text-center text-lg font-bold text-green-700 mb-4 cursor-pointer"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          날짜를 선택해주세요
        </h3>
        {isDatePickerOpen && (
          <div className="flex justify-center mb-4">
            <DatePicker
              selected={formData.date}
              onChange={(date) => handleChange('date', date)}
              dateFormat="yyyy-MM-dd"
              inline
              className="rounded-lg border border-gray-300 shadow-sm"
            />
          </div>
        )}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">체중 (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={(e) => handleChange('weight', e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="체중 입력"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">골격근량 (kg)</label>
            <input
              type="number"
              name="muscle"
              value={formData.muscle}
              onChange={(e) => handleChange('muscle', e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="골격근량 입력"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">체지방량 (kg)</label>
            <input
              type="number"
              name="fat"
              value={formData.fat}
              onChange={(e) => handleChange('fat', e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="체지방량 입력"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center mt-6">
          <button
            type="submit" // submit 타입이 중요!
            className="w-1/2 px-4 py-2 font-medium rounded-full shadow-md hover:bg-green-300"
            style={{ backgroundColor: 'rgb(221, 235, 200)' }}
          >
            입력하기
          </button>
        </form>
      </section>
    </div>
  );
};

export default InputPage;

