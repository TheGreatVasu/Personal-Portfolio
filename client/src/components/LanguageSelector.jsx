import React, { useState, useContext } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, setCurrentLang } = useContext(LanguageContext);

  const languages = {
    en: {
      name: 'English',
      flag: '🇺🇸'
    },
    es: {
      name: 'Español',
      flag: '🇪🇸'
    },
    hi: {
      name: 'हिंदी',
      flag: '🇮🇳'
    }
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div className={`language-selector-floating ${isOpen ? 'active' : ''}`}>
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language selection"
      >
        <IoLanguage className="language-icon" />
        <span className="current-language">
          {languages[currentLang].flag} {languages[currentLang].name}
        </span>
      </button>
      
      <div className="language-options">
        {Object.entries(languages).map(([code, lang]) => (
          <button
            key={code}
            className={`language-option ${currentLang === code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(code)}
          >
            <span className="language-flag">{lang.flag}</span>
            <span className="language-name">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector; 