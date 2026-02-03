// components/AboutMe.js
import Navbar from '@/components/Navbar';
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
        <Navbar/>
      <img
        src="./images/profile.jpg" 
        alt="Profile"
        className={styles.profilePicture}
      />
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        Hello! I'm a passionate web developer with a love for creating dynamic and responsive web applications. 
        I enjoy working with modern technologies and continuously learning new skills to improve my craft.
      </p>
      <p className={styles.description}>
        In my free time, I love exploring new places, reading books, and contributing to open-source projects.
      </p>
    </div>
  );
}