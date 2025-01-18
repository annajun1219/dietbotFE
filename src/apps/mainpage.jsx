import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MainPage = () => {
  const [goalWeight, setGoalWeight] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [daysInPhase, setDaysInPhase] = useState(0);
  const [weightData, setWeightData] = useState([]);
  const userId = "user001"; // 사용자 ID

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 목표 체중, 단계, 진행 날짜 데이터 가져오기
        const userResponse = await axios.get(`/api/user/mypage/user-record/${userId}`);
        const userData = userResponse.data;
        setGoalWeight(userData.goal);
        setCurrentStep(`단계 ${userData.step}`);
        setDaysInPhase(userData.day);

        // 체중 그래프 데이터 가져오기
        const graphResponse = await axios.get(`/api/user/mypage/graph-records/${userId}`);
        const graphData = graphResponse.data.records.map((record) => ({
          date: record.date,
          weight: record.bodyMass, // 체중
          muscleMass: record.muscleMass, // 골격근량
          bodyMass: record.bodyMass, // 체지방량
        }));
        setWeightData(graphData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  // 체중 변화 차트 데이터
  const weightChartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: "체중 (kg)",
        data: weightData.map((entry) => entry.weight),
        borderColor: "rgb(163, 201, 120)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center p-6 space-y-8" >
      {/* 현재 체중 및 진행 상태 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-6 text-center" style={{ backgroundColor: "rgb(221,235,200)" }}>
        <p className="text-lg text-gray-700">
          목표 체중: <strong className="text-xl text-black">{goalWeight}kg</strong>
        </p>
        <p className="mt-2 text-gray-500">{currentStep}</p>
        <p className="mt-2 text-gray-500">진행 중: {daysInPhase}일</p>
      </section>

      {/* 체중 변화 차트 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-6 flex items-center justify-center" style={{ backgroundColor: "rgb(249,251,242)" }}>
        <div className="w-full">
          <h3 className="text-center text-lg font-bold mb-4 text-gray-700">체중 변화</h3>
          <Line data={weightChartData} />
        </div>
      </section>

      {/* My Page와 ChatBot 버튼 */}
      <section className="w-full max-w-md flex justify-around">
        <Link to="/mypage">
          <button className="px-6 py-2 text-black rounded-lg shadow-md hover:bg-green-600" style={{ backgroundColor: "rgb(221,235,200)" }}>
            My Page
          </button>
        </Link>
        <Link to="/chatbot">
          <button className="px-6 py-2 text-black rounded-lg shadow-md hover:bg-green-600" style={{ backgroundColor: "rgb(221,235,200)" }}>
            ChatBot
          </button>
        </Link>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="w-full max-w-md shadow-lg rounded-lg p-4 text-center" style={{ backgroundColor: "rgb(221,235,200)" }}>
        <p className="text-gray-700">
          “박용우 다이어트”에 대해 더 알고 싶다면?{" "}
          <a
            href="https://namu.wiki/w/%EC%8A%A4%EC%9C%84%EC%B9%98%EC%98%A8%20%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click!
          </a>
        </p>
      </section>
    </div>
  );
};

export default MainPage;

