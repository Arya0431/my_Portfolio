import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TO-DO App',
      description: 'Developed a task management app to add, update, mark complete, and delete daily tasks or reminders. A comprehensive solution for personal productivity and organization.',
      technologies: ['HTML', 'CSS', 'React.js', 'Angular', 'npm'],
      icon: 'fas fa-tasks',
      github: 'https://github.com/Arya0431'
    },
    {
      title: 'React-Based Music Player App',
      description: 'A sophisticated music streaming application that enables users to browse, search, and play songs, discover trending music, and explore top artists.',
      technologies: ['React.js', 'Vite', 'Tailwind', 'Redux Toolkit', 'ESLint', 'PostCSS', '.env'],
      icon: 'fas fa-music',
      github: 'https://github.com/Arya0431'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
