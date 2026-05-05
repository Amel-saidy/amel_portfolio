// src/components/Projects.jsx - ENHANCED
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wudy App",
      description: "A dynamic web application designed to streamline workflow and productivity. Built with modern technologies for an intuitive user experience.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Amel-saidy/wudy_app",
      live: "https://wudy-app.vercel.app/"
    },
    {
      id: 2,
      title: "Email Spam Detection",
      description: "A Python + Flask application that classifies incoming emails as spam or not using machine learning (scikit-learn). Includes pre-processing, model training, and a lightweight REST API for integration.",
      tech: ["Python", "Flask", "scikit-learn", "pandas", "sklearn"],
      github: "https://github.com/Amel-saidy/email-spam-detection",
      live: "https://email-spam-detection-u7p4.onrender.com"
    },
    {
      id: 3,
      title: "Attendance Tracking System",
      description: "An internship project built with React and Node.js — real-time attendance tracking, user roles, secure APIs, and a small admin dashboard to manage records.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Amel-saidy/attendance-tracker",
      live: "https://attendance-tracker-nu-dun.vercel.app/"
    },
    {
      id: 4,
      title: "Filed Data Collection",
      description: "A comprehensive data collection system with admin and agent functionality. The admin dashboard enables creation and management of agents, while agents collect and submit field data efficiently.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Amel-saidy/Data-Collection",
      live: "https://data-collection-beryl.vercel.app"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="about-text" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image"></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.live} className="project-link primary" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
