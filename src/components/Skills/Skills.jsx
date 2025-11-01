import React, { useRef, useEffect } from "react";
import styles from "./Skills.module.css";

// Skills außerhalb der Komponente, konstant
const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "Python", level: 50 },
  { name: "C/C++", level: 40 }
];

export default function Skills() {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            progressRefs.current[index].style.width = `${skills[index].level}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // leer, weil skills konstant

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillContainer}>
        {skills.map((skill, index) => (
          <div key={skill.name} className={styles.skill}>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <div className={styles.progressBar}>
              <div
                ref={el => progressRefs.current[index] = el}
                data-index={index}
                className={styles.progress}
                style={{ width: 0 }} // Start bei 0, Animation beim Scrollen
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
