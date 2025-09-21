import React, { useEffect, useState } from "react";
import "./ContactFooter.scss";
import AnimatedLineButton from "../AnimatedLineButton/AnimatedLineButton";
import CircularButton from "../CircularButton/CircularButton";
import ellipseImg from "../../assets/ellipse.png";
import { useNavigate } from "react-router-dom";

export const ContactFooter = () => {
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();
    
  const onGetInTouchClick = () => {
    navigate("/contact")
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Africa/Tunis'
      });
      setCurrentTime(`${timeString} PM (UTC+1)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      text: "sabermed66@gmail.com",
    },
    {
      text: "+216 29 462 796",
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ];

  return (
    <section className="contact-footer">
      <h4 className="contact-header">YOU GOT SOMETHING IN MIND ?</h4>
      <h1 className="contact-title">LET'S WORK TOGETHER</h1>

      <div className="contact-content">
        <svg className="arrow-icon" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.500156 26.359C0.51235 27.1874 1.19373 27.849 2.02207 27.8368L15.5206 27.6381C16.3489 27.6259 17.0106 26.9445 16.9984 26.1162C16.9862 25.2878 16.3048 24.6262 15.4765 24.6384L3.47775 24.815L3.30113 12.8163C3.28894 11.988 2.60756 11.3264 1.77922 11.3386C0.950881 11.3508 0.289266 12.0321 0.301459 12.8605L0.500156 26.359ZM25.6309 2L24.5547 0.955066L0.923838 25.292L1.99999 26.3369L3.07615 27.3819L26.707 3.04493L25.6309 2Z" fill="white"/>
        </svg>

        <div className="profile-info">
          <div className="avatar">
            <img src={ellipseImg} alt="Saber Mohamed" />
          </div>

          <div className="profile-text">
            <h2>Saber Mohamed</h2>
            <p>Full-Stack Developer</p>
          </div>
        </div>

        {/* Using the new components */}
        <AnimatedLineButton buttonSize={180}>
          <CircularButton 
            onClick={onGetInTouchClick}
            variant="primary"
          >
            Get In Touch
          </CircularButton>
        </AnimatedLineButton>

        <div className="contact-buttons">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="contact-btn"
            >
              {contact.text}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
          <div className="footer-left">
            <div className="footer-info">
              <span className="footer-label">VERSION</span>
              <span className="footer-value">2025 © Edition</span>
            </div>
            <div className="footer-info">
              <span className="footer-label">LOCAL TIME</span>
              <span className="footer-value">{currentTime}</span>
            </div>
          </div>
          
          <div className="footer-right">
            <span className="footer-label">SOCIALS</span>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};