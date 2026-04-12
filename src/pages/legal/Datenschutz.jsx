import "../../styles/legal.css";
export default function Datenschutz() {
  return (
    <div className="legal-container">
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          Ahmad Izaldeen<br />
          Flebbestraße 7<br />
          Deutschland<br />
          E-Mail: info@izaldeen.de
        </p>
      </section>

      <section>
        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten
          werden nur verarbeitet, soweit dies technisch notwendig ist oder Sie uns diese
          freiwillig zur Verfügung stellen.
        </p>
      </section>

      <section>
        <h2>3. Verarbeitung von Daten im Kontaktformular</h2>
        <p>
          Für das Kontaktformular nutzen wir den Dienst Formspree (Formspree Inc.).
          Die eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) werden zur
          technischen Verarbeitung an Formspree übermittelt und anschließend an uns weitergeleitet.
        </p>

        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          (Vertrag bzw. vorvertragliche Kommunikation).
        </p>

        <p>
          Es erfolgt keine Nutzung der Daten zu anderen Zwecken.
        </p>
      </section>

      <section>
        <h2>4. Verarbeitung durch den Custom AI Agent</h2>
        <p>
          Bei Nutzung des integrierten Chatbots werden die eingegebenen Nachrichten
          zur Verarbeitung an ein lokales KI-System (z. B. Ollama) übermittelt.
        </p>

        <p>
          Die Inhalte können zur technischen Verbesserung und Analyse der Funktion
          verwendet werden. Eine dauerhafte Speicherung personenbezogener Daten erfolgt
          nur, soweit dies für den Betrieb erforderlich ist.
        </p>

        <p>
          Eine Weitergabe an Dritte findet nicht statt.
        </p>
      </section>

      <section>
        <h2>5. Server-Logfiles / Hosting</h2>
        <p>
          Beim Besuch dieser Website können automatisch technische Daten (z. B.
          IP-Adresse, Browsertyp, Uhrzeit) durch den Hosting-Anbieter erfasst werden.
          Diese Daten dienen der technischen Sicherheit und werden nicht zur Identifikation genutzt.
        </p>
      </section>

      <section>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
          der Verarbeitung Ihrer Daten gemäß DSGVO.
        </p>
      </section>
    </div>
  );
}