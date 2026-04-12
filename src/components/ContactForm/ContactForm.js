import "./ContactForm.css";
import useContactForm from "../../hooks/useContactForm";

function ContactForm({ id = "contact" }) {
  const { name, email, setName, setEmail, message, setMessage, handleSubmit, status, statusType } =
    useContactForm();

  return (
    <div className="contact-form" id={id}>
      <h2>Kontakt</h2>
      <p className="contact-email">
        <a href="mailto:ahmad@izaldeen.de">ahmad@izaldeen.de</a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Deine Nachricht"
            required
          />
        </div>
        <button type="submit">Abschicken</button>
      </form>
      {status && (
        <p className={`contact-status ${statusType}`}>
          {status}
        </p>
      )}
    </div>
  );
}

export default ContactForm;
