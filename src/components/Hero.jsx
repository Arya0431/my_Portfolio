import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Hi, I'm Aditya Kumar Chaudhary</h1>
                        <h2>Full Stack Web Developer</h2>
                        <p>
                            Passionate about learning and building innovative web solutions to solve real-world problems
                            and enhance user experiences through modern development practices.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn" onClick={() => scrollToSection('projects')}>
                                View My Work
                            </button>
                            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-avatar">
                            <img
                                src="/src/assets/images/profile.png"
                                alt="Aditya Kumar Chaudhary"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat">
                        <h3>1+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat">
                        <h3>5+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                        <h3>10+</h3>
                        <p>Technologies</p>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <p>Scroll Down</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
