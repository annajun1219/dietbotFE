import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./apps/mainpage";
import ChatBotPage from "./apps/chatbot"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chatbot" element={<ChatBotPage />} /> {/* ChatBot 경로 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
