import React, { useContext, useState } from 'react';
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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // 날짜 선택기 열림 여부
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const userId = 'user001'; // 사용자 ID

  const handleChange = (name, value) => {
    if (value < 0) {
      alert('오류발생');
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 로딩 상태 활성화
    try {
      const payload = {
        date: formData.date.toISOString().split('T')[0], // yyyy-MM-dd 형식
        weight: formData.weight,
        bodyMass: formData.fat,
        muscleMass: formData.muscle,
        user: { userId: userId },
      };

      const response = await axios.post(`/api/user/set/record`, payload); // 새로운 데이터 추가
      setWeightData((prevData) => [...prevData, { ...response.data }]); // 상태 업데이트
      alert('정보가 성공적으로 입력되었습니다.');
      navigate('/mypage'); // MyPage로 이동
    } catch (error) {
      console.error('Error submitting weight data:', error);
      alert('정보 입력 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false); // 로딩 상태 비활성화
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="space-y-8">
        {/* 체중 정보 입력 */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgb(249, 251, 242)' }}>
          <div>
            <h3 className="text-center text-lg font-bold text-green-700 mb-4 cursor-pointer" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
              날짜를 선택해주세요
            </h3>
            <p className="text-center text-gray-700">{formData.date.toLocaleDateString('ko-KR')}</p>
            {isDatePickerOpen && (
              <div className="flex justify-center mb-4">
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => {
                    handleChange('date', date);
                    setIsDatePickerOpen(false); // 날짜 선택 후 닫기
                  }}
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
            type="submit"
            className="w-1/2 px-4 py-2 font-medium rounded-full shadow-md hover:bg-green-300"
            style={{ backgroundColor: 'rgb(221, 235, 200)' }}
            disabled={isLoading}
          >
            {isLoading ? '저장 중...' : '입력하기'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default InputPage;
