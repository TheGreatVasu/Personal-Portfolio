import { useState, useCallback } from 'react';

const useChatBot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Vasu's AI assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((message) => {
    setMessages(prev => [...prev, {
      ...message,
      timestamp: new Date()
    }]);
  }, []);

  const generateResponse = (input) => {
    const normalizedInput = input.toLowerCase();
    
    // Project-related queries
    if (normalizedInput.includes('project') || normalizedInput.includes('work')) {
      return "I've worked on several exciting projects! Some highlights include:\n\n" +
        "1. Personal Portfolio Website - A modern React-based portfolio\n" +
        "2. E-commerce Platform - Built with MERN stack\n" +
        "3. AI Chatbot Integration - That's me! 😊\n" +
        "4. Mobile Apps using React Native\n\n" +
        "Would you like to know more about any specific project?";
    }

    // Skills and technologies
    if (normalizedInput.includes('skill') || normalizedInput.includes('tech') || normalizedInput.includes('technology')) {
      return "Vasu is skilled in various technologies including:\n\n" +
        "💻 Frontend: React.js, JavaScript, TypeScript, HTML5, CSS3\n" +
        "🔧 Backend: Node.js, Express, Python, Java\n" +
        "🗄️ Databases: MongoDB, MySQL, PostgreSQL\n" +
        "🛠️ Tools: Git, Docker, AWS\n" +
        "📱 Mobile: React Native\n\n" +
        "Is there a specific technology you'd like to know more about?";
    }

    // Experience
    if (normalizedInput.includes('experience') || normalizedInput.includes('work')) {
      return "Vasu has extensive experience in software development, including:\n\n" +
        "• Full-stack web development\n" +
        "• Mobile app development\n" +
        "• Cloud computing and DevOps\n" +
        "• AI/ML integration\n\n" +
        "Would you like to know more about any specific area?";
    }

    // Education
    if (normalizedInput.includes('education') || normalizedInput.includes('study') || normalizedInput.includes('degree')) {
      return "Vasu's educational background includes:\n\n" +
        "🎓 Bachelor's in Computer Science\n" +
        "📚 Specialized certifications in:\n" +
        "  • Web Development\n" +
        "  • Cloud Computing\n" +
        "  • Machine Learning";
    }

    // Contact information
    if (normalizedInput.includes('contact') || normalizedInput.includes('email') || normalizedInput.includes('reach')) {
      return "You can reach out to Vasu through:\n\n" +
        "📧 Email: through the contact form\n" +
        "💼 LinkedIn: Check the social links\n" +
        "🌐 GitHub: Available in the footer\n\n" +
        "Would you like me to show you the contact form?";
    }

    // Availability
    if (normalizedInput.includes('available') || normalizedInput.includes('hire') || normalizedInput.includes('freelance')) {
      return "Vasu is currently open to:\n\n" +
        "• Full-time opportunities\n" +
        "• Freelance projects\n" +
        "• Technical consultations\n\n" +
        "Feel free to reach out through the contact form to discuss potential collaborations!";
    }

    // Location
    if (normalizedInput.includes('location') || normalizedInput.includes('based') || normalizedInput.includes('where')) {
      return "Vasu is based in Delhi, India, and is open to:\n\n" +
        "🌍 Remote work\n" +
        "🏢 On-site opportunities in Delhi NCR\n" +
        "✈️ Relocation for the right opportunity";
    }

    // Greetings
    if (normalizedInput.includes('hi') || normalizedInput.includes('hello') || normalizedInput.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm here to help you learn more about Vasu's work and experience. What would you like to know?";
    }

    // Thank you responses
    if (normalizedInput.includes('thank') || normalizedInput.includes('thanks')) {
      return "You're welcome! 😊 Let me know if you need anything else!";
    }

    // Goodbye responses
    if (normalizedInput.includes('bye') || normalizedInput.includes('goodbye')) {
      return "Goodbye! Thanks for chatting. Feel free to come back if you have more questions! 👋";
    }

    // Default response for other queries
    return "I understand you're asking about " + input + ". While I'm designed to help with information about Vasu's professional background, projects, and skills, I want to make sure I provide relevant information. Could you please rephrase your question or ask about specific aspects like projects, skills, experience, or contact information?";
  };

  const sendMessage = useCallback(async (content) => {
    // Add user message
    addMessage({
      type: 'user',
      content
    });

    setIsTyping(true);

    try {
      // Simulate network delay for more natural feeling
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = generateResponse(content);

      addMessage({
        type: 'bot',
        content: response
      });
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        type: 'bot',
        content: "I apologize, but I'm having trouble processing your request. Please try again later."
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage]);

  return {
    messages,
    isTyping,
    sendMessage
  };
};

export default useChatBot; 