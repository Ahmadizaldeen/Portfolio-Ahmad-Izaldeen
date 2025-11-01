import { useRef } from "react";
import "./ContactFormUncontrolled.css";

function ContactFormUncontrolled() {
  // useRef greift direkt auf die DOM-Elemente zu
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Werte direkt aus den Input-Feldern holen
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("Form submitted:", { name, email });
    alert(`Danke, ${name}! Wir melden uns bei ${email}.`);

    // Felder manuell leeren
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div className="contact-form">
      <h2>Kontaktformular (Uncontrolled)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            placeholder="Dein Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="deine@email.de"
            required
          />
        </div>

        <button type="submit">Abschicken</button>
      </form>
    </div>
  );
}

export default ContactFormUncontrolled;


// Aspekt	Controlled Component	Uncontrolled Component
// Datenquelle	React-State (useState)	DOM (ref.current.value)
// Kontrolle	React speichert und aktualisiert Werte	Browser speichert Werte
// Einfachheit	Mehr Code, aber stabil	Weniger Code, weniger Kontrolle
// Einsatz	Dynamische Formulare, Echtzeitvalidierung	Schnelle Formulare, externe Libs (z. B. File Uploads)