import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="glitch-text" data-text="404 - Page Not Found">
          404 - Page Not Found
        </div>
        <p className="not-found-description">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      
      <div className="not-found-background">
        <div className="grid-lines"></div>
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
      </div>
    </div>
  );
};

export default NotFound;
