import React, { useState } from "react";

const ChatBotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "어서오세요. 무엇을 도와드릴까요?", sender: "bot" },
    { id: 2, text: "아몬드가 몇 칼로리인지 알고싶어.", sender: "user" },
    { id: 3, text: "아몬드는 100g당 576칼로리입니다.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]);

    // 간단히 응답 추가 (예제용)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: "챗봇 응답 준비 중입니다.", sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "rgb(249,251,242)" }}>
      {/* 메시지 표시 영역 */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              textAlign: message.sender === "bot" ? "left" : "right",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor:
                  message.sender === "bot" ? "rgb(221,235,200)" : "rgb(249,251,242)",
                color: "#333",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* 메시지 입력 영역 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderTop: "1px solid #ddd",
          backgroundColor: "rgb(221,235,200)",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "20px",
            marginRight: "10px",
            backgroundColor: "rgb(249,251,242)",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 20px",
            backgroundColor: "rgb(221,235,200)",
            color: "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatBotPage;
