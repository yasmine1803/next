import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
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
    <Layout>
      <div className={styles.projectsContainer}>
        <h1>My Projects</h1>
        <div className={styles.projectGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}