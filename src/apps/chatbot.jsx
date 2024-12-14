import React, { useState } from "react";
//주석 추가 커밋하려고!

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
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* 메시지 표시 영역 */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#f8f8f8",
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
                  message.sender === "bot" ? "#d9f7be" : "#e6f7ff",
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
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6aa84f",
            color: "white",
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
