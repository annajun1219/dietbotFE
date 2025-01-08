import React, { useContext } from 'react';
import { DataContext } from '../App';
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
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyPage = () => {
  const navigate = useNavigate();
  const { weightData } = useContext(DataContext); // Context에서 데이터 가져오기

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
        borderWidth: 1,
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
      <section className="p-4 rounded-lg flex items-center justify-between">
        {/* 왼쪽 사용자 정보 */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full flex justify-center items-center" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-700" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fillRule="evenodd" d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z" />
            </svg>
          </div>
          <div>
            <p className="text-l">목표 체중: <strong>55kg</strong></p>
            <p className="text-l">현재 2단계 4일차 진행 중</p>
          </div>
        </div>

        {/* 오른쪽 버튼 */}
        <button
          onClick={() => navigate('/inputpage')}
          className="px-4 py-2 text-sm rounded-full shadow-md hover:bg-green-300 flex items-center space-x-2"
          style={{ backgroundColor: 'rgb(221, 235, 200)' }}
        >
          <span>오늘의 정보 입력</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </button>
      </section>

      {/* 기록 정보 */}
      <section className="mt-6 space-y-4">
        {weightData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'rgb(249, 251, 242)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="text-3xl font-extrabold text-center" style={{ color: 'rgb(180, 202, 93)' }}>{entry.date}</p>
              <button className="mt-4 px-4 py-2 rounded-lg text-sm shadow text-center" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>
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
        <h2 className="text-lg font-bold py-2 px-4 rounded-full w-40 mx-auto text-center text-gray-700" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>체중 (kg)</h2>
        <div className="mt-4">
          <Line data={weightChartData} />
        </div>
        <div className="mt-6 flex justify-between">
          <div className="w-1/2 text-center">
            <h3 className="text-sm font-bold py-2 px-4 rounded-full w-40 mx-auto text-gray-600 mb-4" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>골격근량 (kg)</h3>
            <Line data={muscleChartData} />
          </div>
          <div className="w-1/2 text-center">
            <h3 className="text-sm font-bold py-2 px-4 rounded-full w-40 mx-auto text-gray-600 mb-4" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>체지방량 (kg)</h3>
            <Line data={fatChartData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;

