import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'C', level: 80 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      title: 'Full Stack Web Development',
      icon: 'fas fa-globe',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'React.js', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Visual Studio Code', level: 90 },
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Foundations of Cybersecurity',
      provider: 'Coursera (Google)',
      description: 'Certificate of Completion',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Introduction to MongoDB',
      provider: 'MongoDB University',
      description: 'Certificate of Completion',
      icon: 'fas fa-database'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <p className="cert-provider">{cert.provider}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
