export const sendMessageToOllama = async (message) => {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: "ai",
      messages: [
        { role: "user", content: message }
      ],
      stream: false
    }),
  });

  if (!response.ok) {
    throw new Error("Ollama API Fehler");
  }

  const data = await response.json();
  return data?.message?.content;
};