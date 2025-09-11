import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { 
  FiCode, 
  FiCloud, 
  FiZap, 
  FiCpu, 
  FiHexagon, 
  FiAperture, 
  FiActivity 
} from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="floating-icons">
        <FiCode className="floating-icon code-icon" />
        <FiCloud className="floating-icon cloud-icon" />
        <FiZap className="floating-icon zap-icon" />
        <FiCpu className="floating-icon cpu-icon" />
        <FiHexagon className="floating-icon hexagon-icon" />
        <FiAperture className="floating-icon aperture-icon" />
        <FiActivity className="floating-icon activity-icon" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="greeting-text">Hello, I'm</span>
            <div className="name-wrapper">
              <h1 className="name">Vasu Rastogi <span className="role-short">A Software Engineer</span></h1>
              <div className="name-bg"></div>
            </div>
          </div>
          
          <div className="title">
            <h2 className="title-text">
              CEO @Rastogi Coders
              <span className="title-decoration"></span>
            </h2>
          </div>

          <p className="description">
          Building Own Empire From Scratch. I design and develop software that reflects your brand's personality — no generic templates, only unique solutions.
          </p>

          <div className="skills-cloud">
            <span className="skill-tag" style={{ animationDelay: '0.8s' }}>React</span>
            <span className="skill-tag" style={{ animationDelay: '0.9s' }}>Node.js</span>
            <span className="skill-tag" style={{ animationDelay: '1.0s' }}>Java</span>
            <span className="skill-tag" style={{ animationDelay: '1.1s' }}>Cloud Architecture</span>
            <span className="skill-tag" style={{ animationDelay: '1.2s' }}>UI/UX Design</span>
          </div>

          <div className="cta-group">
            <Link to="/projects" className="cta-primary">
              Explore My Work
            </Link>
            <div className="availability">
              <span className="pulse"></span>
              Open to: Full-time Roles • Internships • Freelance Projects
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/TheGreatVasu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ animationDelay: '1.2s' }}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/vasurastogi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ animationDelay: '1.3s' }}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-img-container">
            <img
              src="/assets/profile.jpg"
              alt="Vasu Rastogi"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
