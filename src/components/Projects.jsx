import { FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DRAWN Lootbox Casino",
      tags: ["Java 21", "Spring Boot", "React", "MYSQL"],
      description: "DRAWN is a lootbox casino that allows users to buy lootboxes with crypto and open them to win rewards. Has deposit and withdrawal functionality. Solflare wallet integration." ,
      githubLink: "https://github.com/marinionroids/drawnjava"
    },
    {
      id: 2,
      title: "Cafeteria Management System",
      tags: ["Java 21", "Spring Boot", "Spring Security", "React + Vite", "MYSQL"],
      description: "A cafeteria management system that allows servers to manage orders and their daily earnings. Managers can oversee the daily operations of the cafeteria.",
      githubLink: "https://github.com/marinionroids/cafeteria"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;