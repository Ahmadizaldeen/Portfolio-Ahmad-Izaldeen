import React from 'react';

import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    { name: "Project 1", desc: "صف مشروعك هنا", link: "#" },
    { name: "Project 2", desc: "صف مشروعك هنا", link: "#" },
    { name: "Project 3", desc: "صف مشروعك هنا", link: "#" },
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <div key={project.name} className={styles.projectCard}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <a href={project.link} className={styles.projectLink}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
