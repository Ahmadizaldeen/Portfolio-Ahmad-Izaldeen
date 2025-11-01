import "./ContactForm.css";
import useContactForm from "../../hooks/useContactForm";

function ContactForm() {
  const { name, email, setName, setEmail, handleSubmit } = useContactForm();

  return (
    <div className="contact-form">
      <h2>Kontaktformular</h2>
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
            placeholder="deine@email.de"
            required
          />
        </div>
        <div>
            <input type="textarea" style={{display:"none"}}/> {/**/}
        </div>
        <button type="submit">Abschicken</button>
      </form>
    </div>
  );
}

export default ContactForm;
