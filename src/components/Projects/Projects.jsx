import React from 'react';

import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { name: "Weather App", desc: "WetterAPP zeigt aktuelle Wetterdaten für jede Stadt, schnell und übersichtlich, mit Detailansicht per Klick.", link: "https://github.com/Ahmadizaldeen/WeatherAI.git" },
    { name: "Project 2", desc: "In Bearbeitung", link: "#" },
    { name: "Project 3", desc: "In Bearbeitung", link: "#" },
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <div key={project.name} className={styles.projectCard}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <a href={project.link} className={styles.projectLink}>zu GIt-Hub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
