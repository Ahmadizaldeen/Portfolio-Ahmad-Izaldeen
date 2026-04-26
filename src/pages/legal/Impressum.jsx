import "../../styles/legal.css";
export default function Impressum() {
  return (
    <div className="legal-container">
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Ahmad Izaldeen<br />
          Flebbestraße 7<br />
          21077 Hamburg<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail: ahmad@izaldeen.de
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Ahmad Izaldeen<br />
          gleiche Adresse wie oben
        </p>
      </section>
    </div>
  );
}