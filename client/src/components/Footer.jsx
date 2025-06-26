import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Vasu Rastogi</h3>
            <p className="footer-description">
              Passionate Full Stack Developer specializing in creating beautiful, functional, 
              and user-friendly applications. Let's turn your ideas into reality.
            </p>
            <div className="footer-social">
              <a href="https://github.com/TheGreatVasu" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/vasurastogi/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <Link to="/services" className="footer-link">Web Development</Link>
              <Link to="/services" className="footer-link">Mobile Development</Link>
              <Link to="/services" className="footer-link">UI/UX Design</Link>
              <Link to="/services" className="footer-link">Tech Consulting</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Vasu Rastogi | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
