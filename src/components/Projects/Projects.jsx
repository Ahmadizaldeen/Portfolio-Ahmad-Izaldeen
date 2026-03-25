import React from 'react';

import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { name: "Weather App", desc: "Web-App mit API, HTML, CSS, JavaScript", link: "https://github.com/Ahmadizaldeen/WeatherAI.git" },
    { name: "PCAP Training Tool", desc: "Python Projekt zu PCAP Prüfung", link: "https://github.com/Ahmadizaldeen/pcap_training_tool.git" },
    { name: "Listium", desc: "GUI Python Anwendung, Listenverwaltung", link: "https://github.com/Ahmadizaldeen/FlashMob.git" },
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <div key={project.name} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
            </div>
            <a href={project.link} className={styles.projectLink}>zu Git-Hub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
