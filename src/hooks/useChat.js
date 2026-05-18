import { useState } from "react";
import { sendMessageToOllama } from "../services/ollamaClient.js";

export const useChat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Ich bin Ahmad Assistant. Wie kann ich helfen?" }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages(prev => [
      ...prev,
      { role: "user", text: userMessage }
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessageToOllama(userMessage);

      setMessages(prev => [
        ...prev,
        { role: "assistant", text: response }
      ]);

    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", text: "Fehler: API nicht erreichbar" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading
  };
};