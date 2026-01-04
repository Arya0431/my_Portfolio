import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'adkumar0431@gmail.com',
      link: 'mailto:adkumar0431@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 7970816032',
      link: 'tel:+917970816032'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aditya-chaudhary-457286289'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      link: 'https://github.com/Arya0431'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out if you'd like to work together or just say hello!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <p>Ready to start a conversation?</p>
          <a href="mailto:adkumar0431@gmail.com" className="btn">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
