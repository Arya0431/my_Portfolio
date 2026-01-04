import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Selected Intern - MERN Stack Developer',
      company: 'DMV CoreTech',
      period: '2025 – Present',
      description: 'Currently working as a MERN Stack Developer intern, developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      type: 'internship'
    },
    {
      title: 'React.js Summer Intern',
      company: 'Celebal Technologies',
      period: 'May 2025 – July 2025',
      description: 'Worked on real-time projects including File Transfer Application with Socket.io and Music Player App (Spotify Clone). Gained hands-on experience in React.js, Tailwind CSS, API integration, and responsive UI development.',
      type: 'internship'
    },
    {
      title: 'Fundamentals of Salesforce',
      company: 'TechForce Academy, Australia',
      period: 'Aug 2024 – Sep 2024',
      description: 'Completed comprehensive training in Salesforce fundamentals and platform capabilities.',
      type: 'training'
    }
  ];

  const achievements = [
    'Winner of Elementa - Scintillation 2023',
    'Participated in Hack Arya Verse Hackathon 2025 (ACEIT)'
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Achievements</h2>

        <div className="experience-content">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <span className={`experience-type ${exp.type}`}>
                    {exp.type === 'internship' ? 'Internship' : 'Training'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <i className="fas fa-trophy"></i>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
