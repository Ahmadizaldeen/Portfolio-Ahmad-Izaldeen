import { useRef, useEffect } from "react";
import './Hero.css';
import stars from '../../assets/stars1.webp';
import moon from '../../assets/moon2.webp';
import mountains3 from '../../assets/mountains3.webp';
import mountains4 from '../../assets/mountains4.webp';
import river5 from '../../assets/river5.webp';
import boat6 from '../../assets/boat6.webp';
import mountains7 from '../../assets/mountains7.webp';

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
        {/* <img src={`${process.env.PUBLIC_URL}/images/stars1.webp`} alt="Stars" />
<img src={`${process.env.PUBLIC_URL}/images/moon2.webp`} alt="Stars" />

<img src={`${process.env.PUBLIC_URL}/images/mountains3.webp`} alt="Stars" />
<img src={`${process.env.PUBLIC_URL}/images/mountains4.webp`} alt="Stars" />
<img src={`${process.env.PUBLIC_URL}/images/river5.webp`} alt="Stars" />
<img src={`${process.env.PUBLIC_URL}/images/boat6.webp`} alt="Stars" />
<img src={`${process.env.PUBLIC_URL}/images/mountains7.webp`} alt="Stars" /> */}

  <img src={stars} alt="stars" id="stars" ref={starsRef} />
  <img src={moon} alt="moon" id="moon" ref={moonRef} />
        <h2 className="ahmad" ref={ahmadRef}>MOIN!</h2>
  <img src={mountains3} alt="" id="mountains3" ref={mountains3Ref} />
  <img src={mountains4} alt="" id="mountains4" ref={mountains4Ref} />
  <img src={river5} alt="" id="river" ref={riverRef} />
  <img src={boat6} alt="" id="boat" ref={boatRef} />
  <img src={mountains7} alt="" id="mountains7" />
      </section>
      
    </>
  );
}

export default HeroS;
