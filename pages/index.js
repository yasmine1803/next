
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a description of project one.',
      image: '/images/project1.png',
      link: '',
    },
    {
      title: 'Project three',
      description: 'This is a description of project two.',
      image: '/images/project1.png',
      link: '',
    },
    {
      title: 'Project four',
      description: 'This is a description of project two.',
      image: '/images/project1.png',
      link: '',
    },
    {
      title: 'Project five',
      description: 'This is a description of project two.',
      image: '/images/project1.png',
      link: '',
    },
    {
      title: 'Project six',
      description: 'This is a description of project two.',
      image: '/images/project1.png',
      link: '',
    },
    
  ];

  return (
    <div className={styles.container}>
       <Navbar />
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>Explore my projects and skills</p>
      </header>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}