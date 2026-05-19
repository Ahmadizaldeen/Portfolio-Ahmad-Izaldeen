import { useRef, useEffect } from "react";
import "./Hero.css";
import stars from "../../assets/stars1.webp";
import moon from "../../assets/moon2.webp";
import TechIcons from "../TechIcons/TechIcons";

function HeroS({ id = "home" }) {
  const starsRef    = useRef(null);
  const moonRef     = useRef(null);
  const heroTextRef = useRef(null);
  const mainRef     = useRef(null);

  // Parallax-Scroll-Logik für Mond und Sternenhintergrund
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
      rafId = null;
      const value = window.scrollY;

      // Sterne leicht nach links bewegen
      if (starsRef.current) {
        starsRef.current.style.left = value * 0.3 + "px";
      }

      if (moonRef.current) {
        const moonTop = -80 + value;
        moonRef.current.style.top = `${moonTop}px`;

        // Ab 350px scrollen → Mond wird unsichtbar
        const opacity = Math.max(0, 1 - (value - 350) / 250);
        moonRef.current.style.opacity = String(opacity);
}

      // Hintergrund: nur zwischen zwei dunklen lila Tönen wechseln
      if (mainRef.current) {
        mainRef.current.style.background =
          value >= 203
            ? "linear-gradient(#376281,#10001f)"
            : "linear-gradient(#200016,#10001f)";
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (rafId !== null) cancelAnimationFrame(rafId);
  };
}, []);

  return (
    <>
      <section className="main" ref={mainRef} id={id}>
        <img src={stars} alt="stars" id="stars" ref={starsRef} />
        <img src={moon} alt="moon" id="moon" ref={moonRef} />
        <TechIcons />
        <div className="hero-text-layer" ref={heroTextRef}>
          <p className="hero-name">Ahmad Izaldeen</p>
          <p className="hero-subtitle">
            IT-Fachinformatiker · Hamburg
          </p>
          <h1 className="hero-title">Fullstack &amp; Cloud Entwicklung</h1>
        </div>
        <a
          href="#about"
          className="hero-scroll-cta"
          aria-label="Weiter zum Abschnitt Über mich"
        >
          <span className="hero-scroll-cta__arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>
    </>
  );
}

export default HeroS;
