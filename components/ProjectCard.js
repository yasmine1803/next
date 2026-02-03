
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Image 
        src={project.image} 
        alt={project.title} 
        width={300} 
        height={200} 
        className={styles.image} 
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <a href={project.link} className={styles.button} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}