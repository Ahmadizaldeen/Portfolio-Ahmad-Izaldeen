import React from 'react';

import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { name: "Weather App", desc: "HTML - CSS - Java Script APP wiht API, Debounce, cach Data, async Funktion, fetch URL, response json and more ..", link: "https://github.com/Ahmadizaldeen/WeatherAI.git" },
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
            <a href={project.link} className={styles.projectLink}>zu Git-Hub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
