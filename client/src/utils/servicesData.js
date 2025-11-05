import { FaCode, FaServer, FaChartLine, FaMobileAlt } from 'react-icons/fa';

export const services = [
  {
    id: 'website-development',
    icon: <FaCode />,
    title: "Website Development",
    description: "High-performance websites tailored to your brand with modern UX and SEO. Build your own custom website solutions.",
    fullDescription: "I create stunning, high-performance websites that not only look great but also deliver exceptional user experiences. Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, I deliver solutions that drive results and engage your audience.",
    features: [
      "Landing pages & marketing sites",
      "E-commerce stores (Stripe/Razorpay)",
      "Portfolios, blogs & CMS (Headless)",
      "Admin dashboards & internal tools",
      "Responsive, accessible, SEO‑friendly",
      "Performance, analytics & A/B testing",
      "Hosting, domain & deployment setup",
      "Ongoing maintenance & updates"
    ],
    technologies: ["React", "Next.js", "Vue.js", "WordPress", "Shopify", "HTML/CSS", "JavaScript", "TypeScript"],
    benefits: [
      "Improved user engagement and conversion rates",
      "Mobile-first responsive design",
      "Fast loading times and optimized performance",
      "SEO-friendly structure for better search rankings",
      "Secure and scalable architecture"
    ]
  },
  {
    id: 'software-development',
    icon: <FaServer />,
    title: "Software Development",
    description: "Robust backends, APIs and scalable systems designed for reliability. Build your own custom software solutions.",
    fullDescription: "I build robust, scalable backend systems and APIs that power your applications. From RESTful APIs to microservices architecture, I create solutions that are secure, performant, and ready to scale with your business needs.",
    features: [
      "REST/GraphQL APIs & microservices",
      "Auth, roles & security best practices",
      "Relational/NoSQL database design",
      "Third‑party integrations (payments, email, storage)",
      "Automated testing & CI/CD",
      "Cloud deployments & monitoring",
      "Performance Optimization & Scalability",
      "DevOps & Infrastructure Automation"
    ],
    technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"],
    benefits: [
      "Scalable architecture that grows with your business",
      "Secure authentication and authorization",
      "High availability and reliability",
      "Automated deployment and monitoring",
      "Cost-effective cloud solutions"
    ]
  },
  {
    id: 'Tech consulting & Project Management',
    icon: <FaChartLine />,
    title: "Consulting",
    description: "Hands‑on guidance to plan, audit and accelerate your product roadmap. Get expert guidance on your technology strategy and project management.",
    fullDescription: "Get expert guidance on your technology strategy, architecture, and development processes. I provide hands-on consulting to help you make informed decisions, optimize your current systems, and accelerate your product development.",
    features: [
      "Tech strategy & roadmap",
      "Architecture reviews & code audits",
      "MVP scoping & cost optimization",
      "Team mentoring & best practices",
      "Hiring support & review",
      "Project rescue & performance tuning",
      "Scaling & Infrastructure Optimization",
      "Quality Assurance & Performance Testing"
    ],
    technologies: ["Architecture Design", "Code Review", "Performance Analysis", "Security Audits", "Best Practices"],
    benefits: [
      "Expert insights and recommendations",
      "Cost-effective technology solutions",
      "Improved team productivity",
      "Reduced technical debt",
      "Faster time to market"
    ]
  },
  {
    id: 'app-dashboard-development',
    icon: <FaMobileAlt />,
    title: "App & Dashboard Development",
    description: "Custom mobile applications and powerful dashboard solutions for data visualization and management.",
    fullDescription: "I develop custom mobile applications for iOS and Android, as well as powerful dashboard solutions that help you visualize data, monitor performance, and manage your business operations efficiently. From concept to deployment, I deliver complete solutions.",
    features: [
      "iOS & Android mobile apps (React Native/Flutter)",
      "Cross-platform app development",
      "Interactive data dashboards & analytics",
      "Real-time monitoring & reporting systems",
      "Admin panels & control centers",
      "Custom UI/UX for mobile & web apps",
      "API integration & backend connectivity",
      "App store deployment & maintenance"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "D3.js", "Chart.js", "Tableau", "Power BI"],
    benefits: [
      "Cross-platform apps reducing development costs",
      "Real-time data visualization and insights",
      "Intuitive user interfaces",
      "Seamless API integration",
      "App store optimization and deployment"
    ]
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

