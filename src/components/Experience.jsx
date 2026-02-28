// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Obentas Global Company",
      period: "2024 - 2025",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Implemented responsive designs and optimized performance"
      ],
      type: "Internship"
    },
    {
      id: 2,
      title: "IT/IM Intern",
      company: "The Gambia Red Cross Society",
      period: "2025 - Present",
      description: [
        "Assisted in managing IT infrastructure and support",
        "Maintained hardware and software systems",
        "Supported digital transformation initiatives",
        "Conducted training sessions for staff on new technologies"
      ],
      type: "Internship"
    },
    {
      id: 3,
      title: "Teacher",
      company: "Sheikh Mahguz Islamic School",
      period: "2023 - Present",
      description: [
        "Teach English Language, Mathematics, Science, and Social & Environmental Studies",
        "Developing lesson plans, managing classroom activities, and conducting assessments",
        "Demonstrating leadership, mentorship, and communication skills."
      ],
      type: "Job"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="experience-content">
                <span className="experience-type">{exp.type}</span>
                <h3 className="experience-position">{exp.title}</h3>
                <p className="experience-company">{exp.company} • {exp.period}</p>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;