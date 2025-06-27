import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLang } = useContext(LanguageContext);
  const location = useLocation();

  const content = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume"
    },
    es: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "CV"
    },
    hi: {
      home: "होम",
      about: "परिचय",
      services: "सेवाएं",
      projects: "परियोजनाएं",
      contact: "संपर्क",
      resume: "रेज्यूमे"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Vasu_Rastogi_Updated_Resume_2025.pdf';
    link.download = 'Vasu_Rastogi_Updated_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMobileMenu();
  };

  const text = content[currentLang];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">Rastogi's Portfolio</span>
        </Link>

        <div className="navbar-right">
          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {text.home}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {text.about}
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {text.services}
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {text.projects}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {text.contact}
            </Link>
          </div>

          <div className="navbar-actions">
            <button 
              className="resume-download-btn" 
              onClick={handleDownload}
              aria-label={`Download ${text.resume}`}
            >
              <FaDownload className="download-icon" />
              <span>{text.resume}</span>
            </button>

            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
