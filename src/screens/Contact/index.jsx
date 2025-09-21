import React, { useState, useEffect } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import AnimatedLineButton from "../../components/AnimatedLineButton/AnimatedLineButton";
import CircularButton from "../../components/CircularButton/CircularButton";
import "./Contact.scss";
import ellipseImg from "../../assets/ellipse.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const navigationLinks = [
    { name: "about", url: "/#about" },
    { name: "experience", url: "/#experience" },
    { name: "services", url: "/#services" },
    { name: "works", url: "/works" },
    { name: "contact", url: "/contact" }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Tunis'
      });
      setCurrentTime(`${timeString} UTC+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const onSendEmailClick = () => {
    // Handle form submission here
    console.log("Form data:", formData);
    // Add email sending logic here
  };

  return (
    <div className="contact-page">
      <NavigationHeader background="black" textColor="white" />
      <div className="contact-header">
        <div className="avatar">
          <img src={ellipseImg} alt="Saber Mohamed" />
        </div>
        <h1 className="contact-title">LET'S WORK TOGETHER</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <div className="contact-form-item">
            <div className="form-number">01</div>
            <div className="form-field">
              <p className="form-label">What's your name?</p>
              <input 
                type="text"
                placeholder="John Doe *"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="contact-form-item">
            <div className="form-number">02</div>
            <div className="form-field">
              <p className="form-label">What's your email?</p>
              <input 
                type="email"
                placeholder="john.doe@gmail.com *"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="contact-form-item">
            <div className="form-number">03</div>
            <div className="form-field">
              <p className="form-label">Your Subject?</p>
              <input 
                type="text"
                placeholder="Web Development, Mobile App Development ..."
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="contact-form-item">
            <div className="form-number">04</div>
            <div className="form-field">
              <p className="form-label">Your message</p>
              <textarea 
                placeholder="Hello Saber can you help me with ... *"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="form-textarea"
                rows="4"
              />
            </div>
          </div>

          {/* Using the new components */}
          <AnimatedLineButton buttonSize={180}>
            <CircularButton 
              onClick={onSendEmailClick}
              variant="primary"
            >
              Send
            </CircularButton>
          </AnimatedLineButton>
        </div>
        
        <div className="contact-details">
          <div className="contact-details-arrow">
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
              <path d="M22.4983 28.9961C23.3224 29.0809 24.0592 28.4816 24.144 27.6575L25.5256 14.2284C25.6104 13.4043 25.0111 12.6676 24.187 12.5828C23.363 12.498 22.6262 13.0973 22.5414 13.9214L21.3132 25.8584L9.37625 24.6302C8.55217 24.5454 7.81539 25.1447 7.73061 25.9688C7.64582 26.7929 8.24513 27.5297 9.06921 27.6144L22.4983 28.9961ZM1.49996 1.50044L0.336319 2.44698L21.4882 28.4505L22.6518 27.504L23.8155 26.5575L2.66361 0.553909L1.49996 1.50044Z" fill="white"/>
            </svg>
          </div>
          <div className="contact-about-info">
            <h3>ABOUT ME</h3>
            <p className="name">Saber Mohamed</p>
            <p className="role">Role: Full Stack Developer</p>
            <p className="location">Location: Tunisia</p>
          </div>

          <div className="contact-details-info">
            <h3>CONTACT</h3>
            <p className="email">sabermed66@gmail.com</p>
            <p className="phone">+216 29 462 796</p>
          </div>

          <div className="contact-social-info">
            <h3>SOCIALS</h3>
            <a href="https://linkedin.com/in/sabermed" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/sabermed
            </a>
            <a href="https://github.com/sabermed" target="_blank" rel="noopener noreferrer">
              github.com/sabermed
            </a>
          </div>
        </div>
      </div>

      <div className="contact-page-footer">
        <div className="contact-page-footer-left">
          <div className="footer-info">
            <span className="footer-label">VERSION</span>
            <span className="footer-value">2025 Â© Edition</span>
          </div>
          <div className="footer-info">
            <span className="footer-label">LOCAL TIME</span>
            <span className="footer-value">{currentTime}</span>
          </div>
        </div>
        
        <div className="contact-page-footer-right">
          <span className="footer-label">LINKS</span>
          <div className="navigation-links">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="navigation-link"
                target="_self"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;