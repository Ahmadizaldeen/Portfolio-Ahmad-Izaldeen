import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const sections = ["home", "about", "projects", "contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <h2>
        <a href="#about" className="logo">
          Ahmad Izaldeen
        </a>
      </h2>
      <button
        type="button"
        className="header-menu-btn"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
      <nav
        id="main-nav"
        className={`header-nav${menuOpen ? " header-nav--open" : ""}`}
      >
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
              >
                {section.charAt(0).toLocaleUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
