import { useState, useEffect } from "react";

function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sende Nachricht...");
    setStatusType("sending")

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mjgpybvr", { 
        method: "POST",
        body: formData,
        headers: {Accept: "application/json"},
      });

if (response.ok) {
        setStatus("Nachricht erfolgreich gesendet!");
        setStatusType("success")
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Fehler beim Senden. Bitte erneut versuchen.");
        setStatusType("error")
      }
    } catch (error) {
      setStatus("Fehler beim Senden. Bitte erneut versuchen.");
      setStatusType("error")
    }
  };

  useEffect(() => {
    if (statusType === "success" || statusType ==="error"){
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer)
    }
  },[statusType])

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    statusType,
    handleSubmit,
  };
}

export default useContactForm;
