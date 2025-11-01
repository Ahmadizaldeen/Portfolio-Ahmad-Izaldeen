import { useState, useEffect } from "react";
import { FaHome, FaUser, FaLightbulb, FaBriefcase, FaPhone } from "react-icons/fa";
import "./SideNavbar.css";
import { useMemo } from "react";


export default function SideNavbar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");

const sections = useMemo(() => [
  { id: "home", icon: <FaHome /> },
  { id: "about", icon: <FaUser /> },
  { id: "skills", icon: <FaLightbulb /> },
  { id: "projects", icon: <FaBriefcase /> },
  { id: "contact", icon: <FaPhone /> },
], []); // [] = nur einmal beim Mount erstellen

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = 460;
      setShow(scrollY > navbarHeight);

      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollY + window.innerHeight / 2 >= offsetTop) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);  //[sections nur mit useMemo , sonst kommt warnung]

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`side-navbar ${show ? "visible" : ""}`}>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className={active === section.id ? "active-li" : ""}>
            <a href={`#${section.id}`} onClick={(e) => handleClick(e, section.id)}>
              {section.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
