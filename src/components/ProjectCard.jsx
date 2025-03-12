import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, tags, description, githubLink, liveDemo } = project;

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {liveDemo && (
          <a href={liveDemo} className="live-demo-link" target="_blank" rel="noopener noreferrer"> 
            <FaExternalLinkAlt size={24} />
          </a>
        )}
        <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;