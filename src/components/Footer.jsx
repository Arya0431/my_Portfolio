import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Aditya Kumar Chaudhary. All rights reserved.</p>
          <p>Made with <span className="heart">♥</span> using React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
