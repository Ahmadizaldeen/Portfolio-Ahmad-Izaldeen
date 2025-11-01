import React from 'react';


import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.text}>تواصل معي عبر البريد أو LinkedIn</p>
      <a href="mailto:youremail@example.com" className={styles.contactLink}>
        Email Me
      </a>
    </section>
  );
}
