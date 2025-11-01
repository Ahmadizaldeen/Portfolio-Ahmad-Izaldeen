import React from 'react';
import './Navbar.css'

export default function Navbar() {
  const sections = ["home", "about", "projects", "contact"];
  const handleClick = (e,id)=>{
    e.preventDefault();
    const element = document.getElementById(id);
    if(element) element.scrollIntoView({behavior:"smooth"})
  }
  return (
    <header className='header'>
      <h2><a href="#about" className="logo">Ahmad Izaldeen</a></h2>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a href={`#${section}`} onClick={(e) => handleClick(e,section)}>
              {section.charAt(0).toLocaleUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        {/* <li><a href="#home" >Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li> */}
      </ul>
      
    </header>
  );
}
