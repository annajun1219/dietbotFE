import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale, 
  LinearScale,  
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyPage = () => {
  const weightData = [
    { date: '11월 11일', weight: 69.7, muscle: 24.6, fat: 25.3 },
    { date: '11월 15일', weight: 69.2, muscle: 24.5, fat: 24.5 },
    { date: '11월 18일', weight: 68.8, muscle: 24.5, fat: 24.2 },
  ];

  const dates = weightData.map((entry) => entry.date);
  const weights = weightData.map((entry) => entry.weight);
  const muscles = weightData.map((entry) => entry.muscle);
  const fats = weightData.map((entry) => entry.fat);

  const weightChartData = {
    labels: dates,
    datasets: [
      {
        label: '체중 (kg)',
        data: weights,
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const muscleChartData = {
    labels: dates,
    datasets: [
      {
        label: '골격근량 (kg)',
        data: muscles,
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const fatChartData = {
    labels: dates,
    datasets: [
      {
        label: '체지방량 (kg)',
        data: fats,
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 사용자 목표 정보 */}
      <section className="mt-6 p-4 rounded-lg shadow-md" style={{ backgroundColor: 'rgb(240, 253, 244)' }}>
        <p className="text-sm text-gray-600">목표 체중: <strong>55kg</strong></p>
        <p className="text-sm text-gray-600">현재 2단계 4일차 진행 중</p>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white text-sm rounded-lg shadow-md hover:bg-green-600">
          오늘의 정보 입력
        </button>
      </section>

      {/* 기록 정보 */}
      <section className="mt-6 space-y-4">
        {weightData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-start bg-white p-4 rounded-lg shadow-md space-x-10"
            style={{ backgroundColor: 'rgb(249, 251, 242)' }}
          >
            <div className="flex flex-col items-start space-y-4 space-x-4 pl-6">
              <p className="text-3xl font-extrabold" style={{ color: 'rgb(180, 202, 93)' }}>{entry.date}</p>
              <button className="px-4 p-2 rounded-lg py-1 text-sm shadow" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>
                수정하기 →
              </button>
            </div>

            <div className="p-4 rounded-lg w-2/3" style={{ backgroundColor: 'rgb(221, 235, 200)', textAlign: 'center' }}>
              <p className="text-m font-medium text-gray-700">
                현재 체중: <strong>{entry.weight}kg</strong>
              </p>
              <p className="text-m font-medium text-gray-700">
                골격근량: <strong>{entry.muscle}kg</strong>
              </p>
              <p className="text-m font-medium text-gray-700">
                체지방량: <strong>{entry.fat}kg</strong>
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 그래프 영역 */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-center text-gray-700">체중 (kg)</h2>
        <div className="mt-4">
          <Line data={weightChartData} />
        </div>

        <div className="mt-6 flex justify-between">
          <div className="w-1/2 text-center">
            <h3 className="text-sm font-bold text-gray-600">골격근량 (kg)</h3>
            <Line data={muscleChartData} />
          </div>
          <div className="w-1/2 text-center">
            <h3 className="text-sm font-bold text-gray-600">체지방량 (kg)</h3>
            <Line data={fatChartData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
