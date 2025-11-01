import { useRef, useEffect } from "react";
import './Hero.css';

function HeroS() {
  const starsRef = useRef(null);
  const moonRef = useRef(null);
  const mountains3Ref = useRef(null);
  const mountains4Ref = useRef(null);
  const riverRef = useRef(null);
  const boatRef = useRef(null);
  const ahmadRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (starsRef.current) starsRef.current.style.left = value + "px";
      if (moonRef.current) moonRef.current.style.top = value * 3 + "px";
      if (mountains3Ref.current) mountains3Ref.current.style.top = value * 2 + "px";
      if (mountains4Ref.current) mountains4Ref.current.style.top = value * 1.5 + "px";
      if (riverRef.current) riverRef.current.style.top = value + "px";
      if (boatRef.current) {
        boatRef.current.style.top = value + "px";
        boatRef.current.style.left = value * 5 + "px";
      }
      if (ahmadRef.current) {
        ahmadRef.current.style.fontSize = value + "px";
        if (value >= 90) {
          ahmadRef.current.style.fontSize = "90px";
          ahmadRef.current.style.position = "fixed";
          ahmadRef.current.style.display = value >= 478 ? "none" : "block";
        }
      }
      if (mainRef.current) {
        mainRef.current.style.background =
          value >= 203
            ? "linear-gradient(#376281,#10001f)"
            : "linear-gradient(#200016,#10001f)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="main" ref={mainRef} id="home">
        <img src="/img/stars1.webp" alt="stars" id="stars" ref={starsRef} />
        <img src="/img/moon2.webp" alt="moon" id="moon" ref={moonRef} />
        <h2 className="ahmad" ref={ahmadRef}>MOIN!</h2>
        <img src="/img/mountains3.webp" alt="" id="mountains3" ref={mountains3Ref} />
        <img src="/img/mountains4.webp" alt="" id="mountains4" ref={mountains4Ref} />
        <img src="/img/river5.webp" alt="" id="river" ref={riverRef} />
        <img src="/img/boat6.webp" alt="" id="boat" ref={boatRef} />
        <img src="/img/mountains7.webp" alt="" id="mountains7" />
      </section>
      
    </>
  );
}

export default HeroS;
