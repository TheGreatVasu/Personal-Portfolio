import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/NotFound.css';

const NotFound = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: '404 - Page Not Found',
      description: 'Oops! The page you are looking for does not exist.',
      button: 'Back to Home'
    },
    es: {
      title: '404 - Página No Encontrada',
      description: '¡Ups! La página que buscas no existe.',
      button: 'Volver al Inicio'
    },
    hi: {
      title: '404 - पृष्ठ नहीं मिला',
      description: 'उफ़! आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।',
      button: 'होम पर वापस जाएं'
    }
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="glitch-text" data-text={content[currentLang].title}>
          {content[currentLang].title}
        </div>
        <p className="not-found-description">
          {content[currentLang].description}
        </p>
        <Link to="/" className="btn btn-primary">
          {content[currentLang].button}
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
