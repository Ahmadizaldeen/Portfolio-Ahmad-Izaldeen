import { useState } from "react";

function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email });
    alert(`Danke, ${name}! Wir melden uns bei ${email}.`);
    setName("");
    setEmail("");
  };

  return {
    name,
    email,
    setName,
    setEmail,
    handleSubmit,
  };
}

export default useContactForm;
