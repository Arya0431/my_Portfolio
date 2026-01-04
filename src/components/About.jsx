import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Web Developer currently pursuing my Bachelor of Technology
              in Information Technology at Arya College of Engineering & I.T., Jaipur. With a strong
              foundation in modern web technologies, I love creating innovative solutions that solve
              real-world problems and enhance user experiences.
            </p>
            <p>
              My journey in web development has equipped me with expertise in both frontend and
              backend technologies, allowing me to build complete, scalable applications. I'm
              always eager to learn new technologies and take on challenging projects that push
              my boundaries.
            </p>
            <div className="resume-section">
              <a href="https://drive.google.com/uc?export=download&id=1CBDVVPHD-trU7CoEdt0pDketpfJHCnbM" target="_blank" rel="noopener noreferrer" className="resume-btn">
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-birthday-cake"></i>
                <span>12th August 2004</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-language"></i>
                <span>English, Hindi</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Tech in Information Technology</h4>
                <p>Arya College of Engineering & I.T., Jaipur</p>
                <p>Current CGPA: 7.0</p>
                <span className="year">2022 - Present</span>
              </div>
              <div className="education-item">
                <h4>Senior Secondary Education</h4>
                <p>B.R.N.K.S College, Kalyanpur</p>
                <p>Percentage: 67%</p>
                <span className="year">2022</span>
              </div>
              <div className="education-item">
                <h4>Secondary Education</h4>
                <p>Raghopur High School</p>
                <p>Percentage: 75%</p>
                <span className="year">2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
