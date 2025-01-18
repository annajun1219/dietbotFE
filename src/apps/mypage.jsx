import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { setWeightData } = useContext(DataContext);
  const [goalWeight, setGoalWeight] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('');
  const [dayInPhase, setDayInPhase] = useState(0);
  const [weightData, setWeightDataLocal] = useState([]);

  const userId = 'user001'; // 사용자 ID

  useEffect(() => {
    const fetchUserRecord = async () => {
      try {
        const response = await axios.get(`/api/user/mypage/user-record/${userId}`);
        const data = response.data;
        setGoalWeight(data.goal); // 목표 몸무게 설정
        setCurrentPhase(`단계 ${data.step}`); // 현재 단계 설정
        setDayInPhase(data.day); // 진행 중인 일수 설정
      } catch (error) {
        console.error('Error fetching user record:', error);
      }
    };

    const fetchGraphRecords = async () => {
      try {
        const response = await axios.get(`/api/user/mypage/graph-records/${userId}`);
        const transformedData = (response.data || []).map((record) => ({
          id: record.id, // ID를 포함
          date: record.date || 'N/A',
          weight: record.weight || 0,
          muscleMass: record.muscleMass || 0, // 일관된 키 이름 사용
          bodyMass: record.bodyMass || 0,    // 일관된 키 이름 사용
        }));
        setWeightDataLocal(transformedData);
        setWeightData(transformedData);
      } catch (error) {
        console.error('Error fetching graph records:', error);
      }
    };

    fetchUserRecord();
    fetchGraphRecords();
  }, [userId, setWeightData]);

  const weightChartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: '체중 (kg)',
        data: weightData.map((entry) => entry.weight),
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const muscleChartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: '골격근량 (kg)',
        data: weightData.map((entry) => entry.muscleMass), // muscleMass 사용
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const fatChartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: '체지방량 (kg)',
        data: weightData.map((entry) => entry.bodyMass), // bodyMass 사용
        borderColor: 'rgb(163, 201, 120)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full flex justify-center items-center" style={{ backgroundColor: 'rgb(221, 235, 200)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-700" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 9a5 5 0 0 0-5 5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14a5 5 0 0 0-5-5z"
              />
            </svg>
          </div>
          <div>
            <p className="text-l">목표 체중: <strong>{goalWeight}kg</strong></p>
            <p className="text-l">현재 단계: <strong>{currentPhase}</strong></p>
            <p className="text-l">진행 중인 일수: <strong>{dayInPhase}일</strong></p>
          </div>
        </div>
        <button
          onClick={() => navigate('/inputpage')}
          className="px-4 py-2 text-sm rounded-full shadow-md hover:bg-green-300 flex items-center space-x-2"
          style={{ backgroundColor: 'rgb(221, 235, 200)' }}
        >
          <span>오늘의 정보 입력</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </section>

      <section className="mt-6 space-y-4">
        {weightData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'rgb(249, 251, 242)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="text-3xl font-extrabold text-center" style={{ color: 'rgb(180, 202, 93)' }}>{entry.date}</p>
              <button
                onClick={() => navigate('/editpage', { state: entry })}
                className="mt-4 px-4 py-2 rounded-lg text-sm shadow text-center"
                style={{ backgroundColor: 'rgb(221, 235, 200)' }}
              >
                수정하기 →
              </button>
            </div>

            <div className="p-4 rounded-lg w-2/3" style={{ backgroundColor: 'rgb(221, 235, 200)', textAlign: 'center' }}>
              <p className="text-m font-medium text-gray-700">
                현재 체중: <strong>{entry.weight}kg</strong>
              </p>
              <p className="text-m font-medium text-gray-700">
                골격근량: <strong>{entry.muscleMass}kg</strong>
              </p>
              <p className="text-m font-medium text-gray-700">
                체지방량: <strong>{entry.bodyMass}kg</strong>
              </p>
            </div>
          </div>
        ))}
      </section>

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
