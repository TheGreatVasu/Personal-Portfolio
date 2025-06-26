import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiPython,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiGit
} from 'react-icons/si';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/Hero.css';

const Hero = () => {
  const { currentLang } = useContext(LanguageContext);

  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Vasu Rastogi",
      title: "AI Integrated Full Stack Developer",
      description: "Crafting digital experiences that merge innovation with functionality. Specialized in building scalable web applications with cutting-edge technologies.",
      skills: ["React", "Node.js", "Java", "Cloud Architecture", "UI/UX Design"],
      cta: "Explore My Work",
      availability: "Open to: Full-time Roles • Internships • Freelance Projects"
    },
    es: {
      greeting: "Hola, soy",
      name: "Vasu Rastogi",
      title: "Desarrollador Full Stack AI Integrado",
      description: "Creando experiencias digitales que fusionan innovación y funcionalidad. Especializado en construir aplicaciones web escalables con tecnologías de vanguardia.",
      skills: ["React", "Node.js", "Java", "Arquitectura Cloud", "Diseño UI/UX"],
      cta: "Explorar mi trabajo",
      availability: "Disponible para: Roles de tiempo completo • Pasantías • Proyectos freelance"
    },
    hi: {
      greeting: "नमस्ते, मैं हूं",
      name: "वसु रस्तोगी",
      title: "एआई इंटीग्रेटेड फुल स्टैक डेवलपर",
      description: "नवीनता और कार्यक्षमता को जोड़ने वाले डिजिटल अनुभव बनाता हूं। आधुनिक तकनीकों के साथ स्केलेबल वेब एप्लिकेशन बनाने में विशेषज्ञ।",
      skills: ["रिएक्ट", "नोड.जेएस", "जावा", "क्लाउड आर्किटेक्चर", "यूआई/यूएक्स डिज़ाइन"],
      cta: "मेरा काम देखें",
      availability: "उपलब्ध: पूर्णकालिक भूमिकाएं • इंटर्नशिप • फ्रीलांस प्रोजेक्ट्स"
    }
  };

  const text = content[currentLang];

  return (
    <section className="hero">
      <div className="floating-icons">
        <IoRocketSharp className="floating-icon rocket-icon" />
        <SiReact className="floating-icon react-icon" />
        <SiNodedotjs className="floating-icon node-icon" />
        <SiJavascript className="floating-icon js-icon" />
        <SiPython className="floating-icon python-icon" />
        <SiDocker className="floating-icon docker-icon" />
        <SiMongodb className="floating-icon mongodb-icon" />
        <SiPostgresql className="floating-icon postgresql-icon" />
        <SiAmazonaws className="floating-icon aws-icon" />
        <SiTailwindcss className="floating-icon tailwind-icon" />
        <SiTypescript className="floating-icon typescript-icon" />
        <SiRedux className="floating-icon redux-icon" />
        <SiGit className="floating-icon git-icon" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="greeting-text">{text.greeting}</span>
            <div className="name-wrapper">
              <h1 className="name">{text.name}</h1>
              <div className="name-bg"></div>
            </div>
          </div>
          
          <div className="title">
            <h2 className="title-text">
              {text.title}
              <span className="title-decoration"></span>
            </h2>
          </div>

          <p className="description">{text.description}</p>

          <div className="skills-cloud">
            {text.skills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="cta-group">
            <Link to="/projects" className="cta-primary">
              {text.cta}
            </Link>
            <div className="availability">
              <span className="pulse"></span>
              {text.availability}
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
