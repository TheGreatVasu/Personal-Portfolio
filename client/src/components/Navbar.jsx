import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    link.href = '/assets/Vasu_Rastogi_Resume.pdf';
    link.download = 'Vasu_Rastogi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMobileMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="/" 
          className="navbar-brand"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="brand-text">Rastogi's Portfolio</span>
        </Link>

        <div className="navbar-right">
          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/tech-stack" 
              className={`nav-link ${location.pathname === '/tech-stack' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Tech Stack
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              to="/upcoming" 
              className={`nav-link ${location.pathname === '/upcoming' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Upcoming
            </Link>
            <Link 
              to="/subscription" 
              className={`nav-link ${location.pathname === '/subscription' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Subscription
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          <div className="navbar-actions">
            <button 
              className="resume-download-btn" 
              onClick={handleDownload}
              aria-label="Download Resume"
            >
              <FaDownload className="download-icon" />
              <span>Resume</span>
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
