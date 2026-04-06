import { useState } from "react";
import "./AboutMe.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { texts } from "./aboutText";

export default function AboutMe({ id = "about" }) {
  const [language, setLanguage] = useState("de");
  const [fade, setFade] = useState(false);
  // Sprache wechseln mit sanfter Animation
  const changeLanguage = (lang) => {
    if (lang === language) return; // verhindert unnötiges Blinken
    setFade(true);
    setTimeout(() => {
      setLanguage(lang);
      setFade(false);
    }, 50);
  };

  return (
    <div className="about-container" id={id}>
      <ProfilePhoto />

      <div className="button-group">
        {["de", "ar", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={language === lang ? "active" : ""}
          >
            {lang === "de"
              ? "🇩🇪 Deutsch"
              : lang === "ar"
              ? "🇸🇾 العربية"
              : "🇬🇧 English"}
          </button>
        ))}
      </div>

      <p
        className={`about-text ${language === "ar" ? "rtl" : ""}  ${
          fade ? "fade" : ""
        }`}
      >
        {texts[language]}
      </p>
    </div>
  );
}


// Verbesserung :=> Struktur bearbeiten um barrierefreier und SEO-freundlicher zu machen (mit <section>-Tags, aria-label und semantischen Strukturen).