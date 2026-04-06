import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">
        &copy; {new Date().getFullYear()} Ahmad Izaldeen. All rights reserved.
      </span>
      <a
        href="https://github.com/Ahmadizaldeen"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social"
        aria-label="GitHub Profil"
      >
        <FaGithub size={26} />
      </a>
    </footer>
  );
}
