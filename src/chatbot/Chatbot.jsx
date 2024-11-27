// src/chatbot/Chatbot.js
import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!input) return;

    // Add user message to chat
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Send the message to the chatbot API (e.g., OpenAI API)
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        { prompt: input, max_tokens: 100, temperature: 0.5 },
        { headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` } }
      );

      const botMessage = response.data.choices[0].text.trim();
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry, I'm having trouble right now." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        🤖 Chat with us
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <span>RentHub Assistant</span>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === "bot" && (
                  <span className="robot-avatar">🤖</span>
                )}
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
