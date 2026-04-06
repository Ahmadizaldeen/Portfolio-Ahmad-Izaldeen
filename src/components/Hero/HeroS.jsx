import { useRef, useEffect } from "react";
import './Hero.css';
import stars from '../../assets/stars1.webp';
import moon from '../../assets/moon2.webp';
import mountains3 from '../../assets/mountains3.webp';
import mountains4 from '../../assets/mountains4.webp';
import river5 from '../../assets/river5.webp';
import boat6 from '../../assets/boat6.webp';
import mountains7 from '../../assets/mountains7.webp';

function HeroS({ id = "home" }) {
  const starsRef = useRef(null);
  const moonRef = useRef(null);
  const heroTextRef = useRef(null);
  const mountains3Ref = useRef(null);
  const mountains4Ref = useRef(null);
  const riverRef = useRef(null);
  const boatRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const value = window.scrollY;

        if (starsRef.current) starsRef.current.style.left = value + "px";
        if (moonRef.current) moonRef.current.style.top = value * 3 + "px";
        if (heroTextRef.current) {
          heroTextRef.current.style.top = value * 3 + "px";
          heroTextRef.current.style.opacity = String(Math.max(0, 1 - value / 200));
        }
        if (mountains3Ref.current) mountains3Ref.current.style.top = value * 2 + "px";
        if (mountains4Ref.current) mountains4Ref.current.style.top = value * 1.5 + "px";
        if (riverRef.current) riverRef.current.style.top = value + "px";
        if (boatRef.current) {
          boatRef.current.style.top = value + "px";
          boatRef.current.style.left = value * 5 + "px";
        }

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
      <div className="hero-text-layer" ref={heroTextRef}>
        <p className="hero-name">Ahmad Izaldeen</p>
        <p className="hero-subtitle">
          Umschüler IT-Fachinformatiker · Hamburg
        </p>
        <h1 className="hero-title">Fullstack &amp; Cloud Entwicklung</h1>
      </div>
      <img src={mountains3} alt="" id="mountains3" ref={mountains3Ref} />
      <img src={mountains4} alt="" id="mountains4" ref={mountains4Ref} />
      <img src={river5} alt="" id="river" ref={riverRef} />
      <img src={boat6} alt="" id="boat" ref={boatRef} />
      <img src={mountains7} alt="" id="mountains7" />
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
