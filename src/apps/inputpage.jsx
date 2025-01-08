import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeightData((prevData) => [...prevData, { ...formData, date: formData.date.toLocaleDateString() }]);
    navigate('/mypage');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mt-6 p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgb(249, 251, 242)' }}>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">체중 (kg)</label>
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
            <label className="block text-sm font-medium text-gray-700">골격근량 (kg)</label>
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
            <label className="block text-sm font-medium text-gray-700">체지방량 (kg)</label>
            <input
              type="number"
              name="fat"
              value={formData.fat}
              onChange={(e) => handleChange('fat', e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="체지방량 입력"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-1/2 px-4 py-2 font-medium rounded-full shadow-md hover:bg-green-300"
              style={{ backgroundColor: 'rgb(221, 235, 200)' }}
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

