/*import React, { useState } from "react";
import { FaGithub , FaLinkedin, FaEnvelope} from "react-icons/fa";
import "./Footer.css";
//import modalStyles from "./LegalModal.module.css";
import Impressum from "../../pages/legal/Impressum";
import Datenschutz from "../../pages/legal/Datenschutz";

export default function Footer() {
  const [modal, setModal] = useState(null); 
  // null | "impressum" | "datenschutz"

  return (
    <>
      <footer className="footer">
        
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} Ahmad Izaldeen
        </span>

        <div className="footer-right">
          <a
            href="https://github.com/Ahmadizaldeen"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <FaGithub size={26} />
          </a>

          <div className="footer-links">
            <button onClick={() => setModal("impressum")}>
              Impressum
            </button>

            <button onClick={() => setModal("datenschutz")}>
              Datenschutz
            </button>
          </div>

          

        </div>
      </footer>

      {/* MODAL */
  /*    {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setModal(null)}>
              ✕
            </button>

            {modal === "impressum" && <Impressum />}
            {modal === "datenschutz" && <Datenschutz />}

          </div>

        </div>
      )}
    </>
  );
}
  */

// src/components/Footer/Footer.jsx

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import modalStyles from "./LegalModal.module.css";

import Impressum from "../../pages/legal/Impressum";
import Datenschutz from "../../pages/legal/Datenschutz";

export default function Footer() {
  const [modal, setModal] = useState(null);
  // null | "impressum" | "datenschutz"

  // ESC-Taste schließt das Modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModal(null);
    };
    if (modal) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [modal]);

  return (
    <>
      <footer className="footer">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} Ahmad Izaldeen
        </span>

        <div className="footer-right">
          <div className="footer-social-links">
            
             <a href="https://github.com/Ahmadizaldeen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            
            <a  href="https://www.linkedin.com/in/ahmad-izaldeen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            
            <a  href="mailto:ahmad@izaldeen.de"
              className="footer-social"
              aria-label="E-Mail"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <div className="footer-links">
            <button onClick={() => setModal("impressum")}>Impressum</button>
            <button onClick={() => setModal("datenschutz")}>Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modal && (
        <div
          className={modalStyles.overlay}
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={modalStyles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={modalStyles.closeBtn}
              onClick={() => setModal(null)}
              aria-label="Modal schließen"
            >
              ✕
            </button>

            {modal === "impressum" && <Impressum />}
            {modal === "datenschutz" && <Datenschutz />}
          </div>
        </div>
      )}
    </>
  );
}