import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./apps/mainpage";
import ChatBotPage from "./apps/chatbot"; 
import InputPage from './apps/inputpage';
import MyPage from "./apps/mypage";
import Header from "./components/Header";
import EditPage from "./apps/editpage";

// Context 생성
export const DataContext = createContext();

const App = () => {
  // 전역 상태 관리 (입력 데이터)
  const [weightData, setWeightData] = useState([
    { date: '2024. 11. 11 ' , weight: 69.7, muscle: 24.6, fat: 25.3 },
    { date: '2024. 11. 15', weight: 69.2, muscle: 24.5, fat: 24.5 },
    { date: '2024. 11. 18', weight: 68.8, muscle: 24.5, fat: 24.2 },
  ]);

  return (
    <DataContext.Provider value={{ weightData, setWeightData }}>
      <Router>
        <Header />
        <div className="pt-20"></div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} /> 
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/inputpage" element={<InputPage />} />
          <Route path="/editpage" element={<EditPage/>} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
