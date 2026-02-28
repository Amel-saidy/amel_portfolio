// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University OF The GAMBIA",
      period: "2021 - 2025",
      achievements: [
        "GPA: 3.58/4.30",
        "Dean's List",
        "Relevant coursework: Data Structures, Algorithms, Web Development"
      ]
    },
    {
      id: 2,
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Coding Bootcamp",
      period: "2022",
      achievements: [
        "Completed intensive 6-month program",
        "Built 10+ projects using MERN stack",
        "Awarded top performer"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-period">{edu.period}</p>
              <ul className="education-achievements">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;