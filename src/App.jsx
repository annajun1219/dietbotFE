import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./apps/mainpage";
import ChatBotPage from "./apps/chatbot";
import MyPage from "./apps/mypage";
import InputPage from "./apps/inputpage";
import Header from "./components/Header";
import Home from "./apps/Home";
import Login from "./apps/Login";
import Signup from "./apps/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ChatBotPage" element={<ChatBotPage />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/InputPage" element={<InputPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
