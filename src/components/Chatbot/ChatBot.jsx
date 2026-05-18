import React, { useState } from "react";
import styles from "./ChatBot.module.css";
import { useChat } from "../../hooks/useChat";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading
  } = useChat();

  return (
    <div className={styles.container}>

      {isOpen && (
        <div className={styles.chatWindow}>

          {/* Header */}
          <div className={styles.header}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <span className={styles.status}></span>
              <span>Ahmad AI</span>
            </div>

            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.message} ${
                  m.role === "user" ? styles.user : styles.assistant
                }`}
              >
                {m.text}
              </div>
            ))}

            {isLoading && (
              <div className={styles.message}>
                Denke nach...
              </div>
            )}
          </div>

          {/* Input */}
          <div className={styles.inputArea}>
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              className={styles.button}
              onClick={sendMessage}
              disabled={isLoading}
            >
              ➤
            </button>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "🤖"}
      </button>

    </div>
  );
};

export default ChatBot;