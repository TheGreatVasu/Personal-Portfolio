import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/DownloadResume.css';

const DownloadResume = () => {
  const { currentLang } = useContext(LanguageContext);

  const content = {
    en: {
      buttonText: "Download Resume"
    },
    es: {
      buttonText: "Descargar CV"
    },
    hi: {
      buttonText: "रेज्यूमे डाउनलोड करें"
    }
  };

  const handleDownload = async () => {
    try {
      // The correct filename with space
      const resumePath = '/assets/Vasu_Rastogi _Resume.pdf';
      
      // Fetch the file first
      const response = await fetch(resumePath);
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create temporary link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Vasu_Rastogi_Resume.pdf'; // Name that will appear when downloaded
      
      // Append to body, click, and cleanup
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // You might want to show a user-friendly error message here
      alert('Failed to download resume. Please try again.');
    }
  };

  return (
    <button 
      className="download-resume-btn" 
      onClick={handleDownload}
      aria-label={content[currentLang].buttonText}
    >
      <FaDownload className="download-icon" />
      <span className="button-text">{content[currentLang].buttonText}</span>
    </button>
  );
};

export default DownloadResume; 