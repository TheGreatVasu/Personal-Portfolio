import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      subtitle: "Passionate Full Stack Developer & Problem Solver",
      bio: "With over 2 years of experience in web development, I specialize in creating scalable and efficient solutions that drive business growth. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.",
      experience: "Professional Journey",
      timeline: [
        {
          year: "2023 - Present",
          role: "Bachelor of Technology in Computer Science and Engineering",
          company: "Lovely Professional University",
          description: "Pursuing B.Tech in Computer Science and Engineering the Lovely Professional University, Punjab, India."
        },
        {
          year: "2024 - 2025",
          role: "Freelance Full Stack Web Developer",
          company: "Rastogi & Associates",
          description: "Worked on Full Stack Web Development Project for a client.",
          link: "https://rastogiassociates.com/"
        },
        {
          year: "2025 - Present",
          role: "Full Stack Web Developer",
          company: "Aniyah",
          description: "Working with a Brand to develop their visibile presence on the web."
        },
        {
          year: "2025 - Present",
          role: "Available For New Oppurnities",
          company: "Open to New Opportunities",
          description: "I am open to new opportunities and always looking for new challenges."
        }
      ],
      skills: {
        frontend: {
          title: "Frontend Development",
          icon: <FaCode />,
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
        },
        backend: {
          title: "Backend Development",
          icon: <FaServer />,
          items: ["Node.js", "Express", "Python", "Django"]
        },
        mobile: {
          title: "Mobile Development",
          icon: <FaMobileAlt />,
          items: ["React Native", "Flutter", "Mobile-First Design"]
        },
        database: {
          title: "Database Management",
          icon: <FaDatabase />,
          items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
        },
        cloud: {
          title: "Cloud Services Exploring",
          icon: <FaCloud />,
          items: ["AWS", "Google Cloud", "Azure", "DevOps", "Docker", "CI/CD"]
        },
        tools: {
          title: "Development Tools",
          icon: <FaTools />,
          items: ["Git", "Docker", "CI/CD", "Agile/Scrum"]
        }
      },
      stats: [
        { number: "10+", label: "Projects Completed" },
        { number: "5+", label: "Happy Clients" },
        { number: "2+", label: "Years Experience" },
        { number: "10+", label: "Technologies Mastered" }
      ]
    },
    es: {
      title: "Sobre Mí",
      subtitle: "Desarrollador Full Stack Apasionado & Solucionador de Problemas",
      bio: "Con más de 5 años de experiencia en desarrollo web, me especializo en crear soluciones escalables y eficientes que impulsan el crecimiento empresarial. Mi enfoque combina experiencia técnica con resolución creativa de problemas para ofrecer experiencias digitales excepcionales.",
      experience: "Trayectoria Profesional",
      timeline: [
        {
          year: "2023 - Presente",
          role: "Desarrollador Full Stack Senior",
          company: "Tech Innovations Inc.",
          description: "Liderando el desarrollo de aplicaciones empresariales usando tecnologías modernas."
        },
        {
          year: "2021 - 2023",
          role: "Desarrollador Full Stack",
          company: "Digital Solutions Ltd.",
          description: "Desarrollé y mantuve múltiples proyectos de clientes usando React y Node.js."
        },
        {
          year: "2019 - 2021",
          role: "Desarrollador Frontend",
          company: "Creative Web Agency",
          description: "Especializado en crear interfaces de usuario responsivas e interactivas."
        }
      ],
      skills: {
        frontend: {
          title: "Desarrollo Frontend",
          icon: <FaCode />,
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
        },
        backend: {
          title: "Desarrollo Backend",
          icon: <FaServer />,
          items: ["Node.js", "Express", "Python", "Django"]
        },
        mobile: {
          title: "Desarrollo Móvil",
          icon: <FaMobileAlt />,
          items: ["React Native", "Flutter", "Diseño Mobile-First"]
        },
        database: {
          title: "Gestión de Bases de Datos",
          icon: <FaDatabase />,
          items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
        },
        cloud: {
          title: "Servicios Cloud",
          icon: <FaCloud />,
          items: ["AWS", "Google Cloud", "Azure", "DevOps"]
        },
        tools: {
          title: "Herramientas de Desarrollo",
          icon: <FaTools />,
          items: ["Git", "Docker", "CI/CD", "Agile/Scrum"]
        }
      },
      stats: [
        { number: "50+", label: "Proyectos Completados" },
        { number: "30+", label: "Clientes Satisfechos" },
        { number: "5+", label: "Años de Experiencia" },
        { number: "20+", label: "Tecnologías Dominadas" }
      ]
    },
    hi: {
      title: "मेरे बारे में",
      subtitle: "उत्साही फुल स्टैक डेवलपर और समस्या समाधानकर्ता",
      bio: "वेब डेवलपमेंट में 5+ वर्षों के अनुभव के साथ, मैं व्यवसाय विकास को बढ़ावा देने वाले स्केलेबल और कुशल समाधान बनाने में विशेषज्ञ हूं। मेरा दृष्टिकोण असाधारण डिजिटल अनुभव प्रदान करने के लिए तकनीकी विशेषज्ञता को रचनात्मक समस्या समाधान के साथ जोड़ता है।",
      experience: "पेशेवर यात्रा",
      timeline: [
        {
          year: "2023 - वर्तमान",
          role: "सीनियर फुल स्टैक डेवलपर",
          company: "टेक इनोवेशंस इंक.",
          description: "आधुनिक तकनीकों का उपयोग करके एंटरप्राइज-स्केल एप्लिकेशन का विकास।"
        },
        {
          year: "2021 - 2023",
          role: "फुल स्टैक डेवलपर",
          company: "डिजिटल सॉल्यूशंस लिमिटेड",
          description: "React और Node.js का उपयोग करके कई क्लाइंट प्रोजेक्ट्स का विकास और रखरखाव।"
        },
        {
          year: "2019 - 2021",
          role: "फ्रंटएंड डेवलपर",
          company: "क्रिएटिव वेब एजेंसी",
          description: "रेस्पॉन्सिव और इंटरैक्टिव यूजर इंटरफेस बनाने में विशेषज्ञता।"
        }
      ],
      skills: {
        frontend: {
          title: "फ्रंटएंड डेवलपमेंट",
          icon: <FaCode />,
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
        },
        backend: {
          title: "बैकएंड डेवलपमेंट",
          icon: <FaServer />,
          items: ["Node.js", "Express", "Python", "Django"]
        },
        mobile: {
          title: "मोबाइल डेवलपमेंट",
          icon: <FaMobileAlt />,
          items: ["React Native", "Flutter", "मोबाइल-फर्स्ट डिज़ाइन"]
        },
        database: {
          title: "डेटाबेस प्रबंधन",
          icon: <FaDatabase />,
          items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
        },
        cloud: {
          title: "क्लाउड सेवाएं",
          icon: <FaCloud />,
          items: ["AWS", "Google Cloud", "Azure", "DevOps"]
        },
        tools: {
          title: "डेवलपमेंट टूल्स",
          icon: <FaTools />,
          items: ["Git", "Docker", "CI/CD", "Agile/Scrum"]
        }
      },
      stats: [
        { number: "50+", label: "पूरे किए गए प्रोजेक्ट" },
        { number: "30+", label: "संतुष्ट ग्राहक" },
        { number: "5+", label: "वर्षों का अनुभव" },
        { number: "20+", label: "विशेषज्ञता प्राप्त तकनीकें" }
      ]
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h2 className="section-title">{content[currentLang].title}</h2>
          <h3 className="section-subtitle">{content[currentLang].subtitle}</h3>
          <p className="bio">{content[currentLang].bio}</p>
        </div>

        <div className="stats-grid" data-aos="fade-up" data-aos-delay="200">
          {content[currentLang].stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="experience-section" data-aos="fade-up" data-aos-delay="300">
          <h3 className="experience-title">{content[currentLang].experience}</h3>
          <div className="timeline">
            {content[currentLang].timeline.map((item, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={400 + index * 100}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-role">{item.role}</h4>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid" data-aos="fade-up" data-aos-delay="500">
          {Object.values(content[currentLang].skills).map((skill, index) => (
            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={600 + index * 100}>
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-title">{skill.title}</h4>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
