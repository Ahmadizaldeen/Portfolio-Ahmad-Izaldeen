import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

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

      {/* MODAL */}
      {modal && (
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