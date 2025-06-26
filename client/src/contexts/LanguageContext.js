import React, { createContext, useState, useContext } from 'react';

// Create language context
export const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const value = {
    currentLang,
    setCurrentLang,
    translations: {
      en: {
        nav: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          contact: 'Contact'
        }
      },
      es: {
        nav: {
          home: 'Inicio',
          about: 'Sobre Mí',
          services: 'Servicios',
          contact: 'Contacto'
        }
      },
      hi: {
        nav: {
          home: 'होम',
          about: 'मेरे बारे में',
          services: 'सेवाएं',
          contact: 'संपर्क'
        }
      }
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 