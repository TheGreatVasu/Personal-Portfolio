import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCode, FaServer, FaMobileAlt, FaPalette, FaChartLine, FaCloud } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const { currentLang } = useLanguage();

  const content = {
    en: {
      title: "Services",
      subtitle: "Expert Solutions for Your Digital Needs",
      description: "Delivering cutting-edge solutions with a focus on quality, scalability, and user experience. Each service is tailored to meet your specific requirements and business goals.",
      services: [
        {
          icon: <FaCode />,
          title: "Frontend Development",
          description: "Creating responsive and interactive user interfaces using modern frameworks and best practices.",
          features: ["React/Next.js", "Modern UI/UX", "Performance Optimization", "SEO-friendly"],
          color: "var(--color-primary)"
        },
        {
          icon: <FaServer />,
          title: "Backend Development",
          description: "Building robust and scalable server-side applications with secure API architectures.",
          features: ["Node.js/Express", "API Development", "Database Design", "Authentication"],
          color: "var(--color-secondary)"
        },
        {
          icon: <FaMobileAlt />,
          title: "Mobile Development",
          description: "Developing cross-platform mobile applications with native-like performance.",
          features: ["React Native", "iOS/Android", "Push Notifications", "Offline Support"],
          color: "var(--color-accent)"
        },
        {
          icon: <FaPalette />,
          title: "UI/UX Design",
          description: "Designing intuitive and engaging user experiences that drive conversion.",
          features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
          color: "var(--color-success)"
        },
        {
          icon: <FaChartLine />,
          title: "Performance Optimization",
          description: "Enhancing application performance for better user experience and SEO.",
          features: ["Load Time", "Core Web Vitals", "Code Splitting", "Caching"],
          color: "var(--color-warning)"
        },
        {
          icon: <FaCloud />,
          title: "Cloud Solutions",
          description: "Implementing and managing cloud infrastructure for scalable applications.",
          features: ["AWS/GCP", "DevOps", "CI/CD", "Monitoring"],
          color: "var(--color-info)"
        }
      ]
    },
    es: {
      title: "Servicios",
      subtitle: "Soluciones Expertas para tus Necesidades Digitales",
      description: "Entregando soluciones de vanguardia con enfoque en calidad, escalabilidad y experiencia de usuario. Cada servicio está adaptado para cumplir con sus requisitos específicos y objetivos comerciales.",
      services: [
        {
          icon: <FaCode />,
          title: "Desarrollo Frontend",
          description: "Creación de interfaces de usuario responsivas e interactivas utilizando frameworks modernos y mejores prácticas.",
          features: ["React/Next.js", "UI/UX Moderno", "Optimización de Rendimiento", "SEO-friendly"],
          color: "var(--color-primary)"
        },
        {
          icon: <FaServer />,
          title: "Desarrollo Backend",
          description: "Construcción de aplicaciones robustas y escalables del lado del servidor con arquitecturas API seguras.",
          features: ["Node.js/Express", "Desarrollo API", "Diseño de Base de Datos", "Autenticación"],
          color: "var(--color-secondary)"
        },
        {
          icon: <FaMobileAlt />,
          title: "Desarrollo Móvil",
          description: "Desarrollo de aplicaciones móviles multiplataforma con rendimiento similar al nativo.",
          features: ["React Native", "iOS/Android", "Notificaciones Push", "Soporte Offline"],
          color: "var(--color-accent)"
        },
        {
          icon: <FaPalette />,
          title: "Diseño UI/UX",
          description: "Diseño de experiencias de usuario intuitivas y atractivas que impulsan la conversión.",
          features: ["Investigación de Usuario", "Wireframing", "Prototipado", "Sistemas de Diseño"],
          color: "var(--color-success)"
        },
        {
          icon: <FaChartLine />,
          title: "Optimización de Rendimiento",
          description: "Mejora del rendimiento de aplicaciones para una mejor experiencia de usuario y SEO.",
          features: ["Tiempo de Carga", "Core Web Vitals", "Code Splitting", "Caché"],
          color: "var(--color-warning)"
        },
        {
          icon: <FaCloud />,
          title: "Soluciones Cloud",
          description: "Implementación y gestión de infraestructura en la nube para aplicaciones escalables.",
          features: ["AWS/GCP", "DevOps", "CI/CD", "Monitoreo"],
          color: "var(--color-info)"
        }
      ]
    },
    hi: {
      title: "सेवाएं",
      subtitle: "आपकी डिजिटल जरूरतों के लिए विशेषज्ञ समाधान",
      description: "गुणवत्ता, स्केलेबिलिटी और उपयोगकर्ता अनुभव पर ध्यान केंद्रित करते हुए अत्याधुनिक समाधान प्रदान करना। प्रत्येक सेवा आपकी विशिष्ट आवश्यकताओं और व्यावसायिक लक्ष्यों को पूरा करने के लिए अनुकूलित है।",
      services: [
        {
          icon: <FaCode />,
          title: "फ्रंटएंड विकास",
          description: "आधुनिक फ्रेमवर्क और सर्वोत्तम प्रथाओं का उपयोग करके रेस्पॉन्सिव और इंटरैक्टिव यूजर इंटरफेस बनाना।",
          features: ["React/Next.js", "आधुनिक UI/UX", "प्रदर्शन अनुकूलन", "SEO-फ्रेंडली"],
          color: "var(--color-primary)"
        },
        {
          icon: <FaServer />,
          title: "बैकएंड विकास",
          description: "सुरक्षित API आर्किटेक्चर के साथ मजबूत और स्केलेबल सर्वर-साइड एप्लिकेशन बनाना।",
          features: ["Node.js/Express", "API विकास", "डेटाबेस डिजाइन", "प्रमाणीकरण"],
          color: "var(--color-secondary)"
        },
        {
          icon: <FaMobileAlt />,
          title: "मोबाइल विकास",
          description: "नेटिव जैसे प्रदर्शन के साथ क्रॉस-प्लेटफॉर्म मोबाइल एप्लिकेशन विकसित करना।",
          features: ["React Native", "iOS/Android", "पुश नोटिफिकेशन", "ऑफलाइन समर्थन"],
          color: "var(--color-accent)"
        },
        {
          icon: <FaPalette />,
          title: "UI/UX डिजाइन",
          description: "कन्वर्जन को बढ़ावा देने वाले सहज और आकर्षक उपयोगकर्ता अनुभव डिजाइन करना।",
          features: ["उपयोगकर्ता शोध", "वायरफ्रेमिंग", "प्रोटोटाइपिंग", "डिजाइन सिस्टम"],
          color: "var(--color-success)"
        },
        {
          icon: <FaChartLine />,
          title: "प्रदर्शन अनुकूलन",
          description: "बेहतर उपयोगकर्ता अनुभव और SEO के लिए एप्लिकेशन प्रदर्शन में वृद्धि।",
          features: ["लोड टाइम", "कोर वेब वाइटल्स", "कोड स्प्लिटिंग", "कैशिंग"],
          color: "var(--color-warning)"
        },
        {
          icon: <FaCloud />,
          title: "क्लाउड समाधान",
          description: "स्केलेबल एप्लिकेशन के लिए क्लाउड इंफ्रास्ट्रक्चर का कार्यान्वयन और प्रबंधन।",
          features: ["AWS/GCP", "DevOps", "CI/CD", "मॉनिटरिंग"],
          color: "var(--color-info)"
        }
      ]
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">{content[currentLang].title}</h2>
          <h3 className="section-subtitle">{content[currentLang].subtitle}</h3>
          <p className="section-description">{content[currentLang].description}</p>
        </div>

        <div className="services-grid">
          {content[currentLang].services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                '--card-color': service.color
              }}
            >
              <div className="service-icon">
                {service.icon}
                <div className="icon-background"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
