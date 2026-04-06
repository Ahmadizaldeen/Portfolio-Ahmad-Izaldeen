import React from 'react';

import styles from "./Projects.module.css";

export default function Projects({ id = "projects" }) {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Diese Portfolio-Seite mit Parallax-Hero, Skills und Kontaktformular.",
      link: "https://github.com/Ahmadizaldeen/Portfolio-Ahmad-Izaldeen",
      tags: ["React", "CSS Modules", "Formspree", "react-icons"],
    },
    {
      name: "Weather App",
      desc: "Web-App mit API, HTML, CSS, JavaScript",
      link: "https://github.com/Ahmadizaldeen/WeatherAI.git",
      tags: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      name: "PCAP Training Tool",
      desc: "Python Projekt zu PCAP Prüfung",
      link: "https://github.com/Ahmadizaldeen/pcap_training_tool.git",
      tags: ["Python"],
    },
    {
      name: "Listium",
      desc: "GUI Python Anwendung, Listenverwaltung",
      link: "https://github.com/Ahmadizaldeen/FlashMob.git",
      tags: ["Python", "GUI"],
    },
  ];

  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <div key={project.name} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
              <ul className={styles.tagList} aria-label="Tech-Stack">
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
