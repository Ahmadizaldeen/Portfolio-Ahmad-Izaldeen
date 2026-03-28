import { useState } from "react";

function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sende Nachricht...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mjgpybvr", { // ormspree Endpoint
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
if (response.ok) {
        setStatus("Nachricht erfolgreich gesendet!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Fehler beim Senden. Bitte erneut versuchen.");
      }
    } catch (error) {
      setStatus("Fehler beim Senden. Bitte erneut versuchen.");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    handleSubmit,
  };
}

export default useContactForm;
