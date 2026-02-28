// src/components/Skills.js - ENHANCED WITH MODERN FEATURES
import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGit, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
      ]
    },
    {
      title: "Backend",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 70 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 75 },
        { name: "MySQL", icon: <SiMysql />, level: 72 },
        { name: "Git", icon: <FaGit />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          A showcase of my technical expertise and the tools I use to create 
          innovative solutions and deliver exceptional results.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview Section */}
        <div className="skills-overview">
          <div className="overview-item">
            <span className="overview-number">2+</span>
            <span className="overview-label">Years Experience</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">7+</span>
            <span className="overview-label">Technologies</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">2+</span>
            <span className="overview-label">Projects Built</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">100%</span>
            <span className="overview-label">Dedication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;