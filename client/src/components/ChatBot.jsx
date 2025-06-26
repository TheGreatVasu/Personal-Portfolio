import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes, FaRegSmile, FaMicrophone } from 'react-icons/fa';
import { MdOutlineWavingHand } from 'react-icons/md';
import useChatBot from './ChatBot/hooks/useChatBot';
import '../styles/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { messages, isTyping, sendMessage } = useChatBot();

  const suggestions = [
    { text: "👋 Hi there!", value: "Hi there" },
    { text: "💼 Tell me about your projects", value: "Tell me about your projects" },
    { text: "🛠️ What are your skills?", value: "What are your skills?" },
    { text: "📫 How can I contact you?", value: "How can I contact you?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setShowSuggestions(false);
    await sendMessage(inputMessage.trim());
    setInputMessage('');
  };

  const handleSuggestionClick = async (suggestion) => {
    setShowSuggestions(false);
    setInputMessage(suggestion);
    await sendMessage(suggestion);
    setInputMessage('');
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className="toggle-btn-content">
          {isOpen ? (
            <FaTimes />
          ) : (
            <>
              <img 
                src="/assets/ai-assistant.png" 
                alt="AI Assistant" 
                className="ai-avatar"
              />
              <span className="toggle-text">Chat with AI</span>
            </>
          )}
        </div>
      </button>

      {/* Chat Interface */}
      <div className="chat-interface">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-content">
            <img 
              src="/assets/ai-assistant.png" 
              alt="AI Assistant" 
              className="header-avatar"
            />
            <div className="header-text">
              <h3>AI Assistant <MdOutlineWavingHand className="wave-icon" /></h3>
              <p>Ask me anything about Vasu's work</p>
            </div>
          </div>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.type}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="message-avatar">
                <img 
                  src={message.type === 'bot' ? '/assets/ai-assistant.png' : '/assets/user-avatar.png'} 
                  alt={message.type === 'bot' ? 'AI Assistant' : 'User'}
                />
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.content}</p>
                </div>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          {showSuggestions && messages.length === 1 && (
            <div className="suggestions">
              <p className="suggestions-title">Quick Questions</p>
              <div className="suggestions-grid">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="suggestion-btn"
                    onClick={() => handleSuggestionClick(suggestion.value)}
                  >
                    {suggestion.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          {isTyping && (
            <div className="typing-indicator">
              <div className="typing-avatar">
                <img 
                  src="/assets/ai-assistant.png" 
                  alt="AI Assistant typing" 
                />
              </div>
              <div className="typing-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="chat-input">
          <button
            type="button"
            className="emoji-btn"
            aria-label="Add emoji"
          >
            <FaRegSmile />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            aria-label="Chat message"
          />
          <button
            type="button"
            className="voice-btn"
            aria-label="Voice input"
          >
            <FaMicrophone />
          </button>
          <button 
            type="submit"
            className="send-btn"
            disabled={!inputMessage.trim() || isTyping}
            aria-label="Send message"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot; 