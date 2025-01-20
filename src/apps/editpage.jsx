import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditPage = () => {
  const { state: initialData } = useLocation(); // 전달받은 데이터
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: initialData?.date ? new Date(initialData.date) : new Date(),
    weight: initialData?.weight || '',
    muscle: initialData?.muscleMass || '',
    fat: initialData?.bodyMass || '',
  });
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const recordId = initialData?.id; // 수정 대상 ID

  const handleChange = (name, value) => {
    if (value === "" || value === null) {
      setFormData({ ...formData, [name]: "" });
      return;
    }

    if (value < 0) {
      alert("값은 음수일 수 없습니다.");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        id: recordId,
        date: formData.date.toISOString().split('T')[0], // yyyy-MM-dd 형식
        weight: formData.weight || 0,
        bodyMass: formData.fat || 0,
        muscleMass: formData.muscle || 0,
      };

      const response = await axios.put(`/api/user/modify/record/${recordId}`, payload);

      alert("수정이 성공적으로 완료되었습니다.");
      navigate("/mypage"); // MyPage로 이동
    } catch (error) {
      console.error("Error updating record:", error);
      alert("정보 수정 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="space-y-8">
        <div
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgb(249, 251, 242)" }}
        >
      <div className="flex flex-col items-center mb-4">
        <p className="text-center text-gray-700 mb-2">{formData.date.toLocaleDateString("ko-KR")}</p>
        <DatePicker
          selected={formData.date}
          onChange={(date) => handleChange("date", date)}
          dateFormat="yyyy-MM-dd"
          inline
          className="rounded-lg border border-gray-300 shadow-sm"
        />
      </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">체중 (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              placeholder={`현재 체중: ${initialData?.weight || ""}`}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">골격근량 (kg)</label>
            <input
              type="number"
              name="muscle"
              value={formData.muscle}
              onChange={(e) => handleChange("muscle", e.target.value)}
              placeholder={`현재 골격근량: ${initialData?.muscleMass || ""}`}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">체지방량 (kg)</label>
            <input
              type="number"
              name="fat"
              value={formData.fat}
              onChange={(e) => handleChange("fat", e.target.value)}
              placeholder={`현재 체지방량: ${initialData?.bodyMass || ""}`}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-1/2 px-4 py-2 font-medium rounded-full shadow-md hover:bg-green-300"
            style={{ backgroundColor: "rgb(221, 235, 200)" }}
            disabled={isLoading}
          >
            {isLoading ? "수정 중..." : "수정하기"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditPage;


