import React from 'react';


import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact1" className={styles.section}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.text}>تواصل معي عبر البريد  </p>
      <a href="mailto:ahmad.izaldeen@gmx.de" className={styles.contactLink}>
        Email Me
      </a>
    </section>
  );
}
