import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./apps/mainpage";
import ChatBotPage from "./apps/chatbot"; 
import InputPage from './apps/inputpage';
import MyPage from "./apps/mypage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20"></div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chatbot" element={<ChatBotPage />} /> {/* ChatBot 경로 추가 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/inputpage" element={<InputPage />} />
      </Routes>
    </Router>
  );
};

export default App;
