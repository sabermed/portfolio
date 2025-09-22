import React, { useEffect, useState } from "react";
import "./ContactFooter.scss";
import AnimatedLineButton from "../AnimatedLineButton/AnimatedLineButton";
import CircularButton from "../CircularButton/CircularButton";
import ellipseImg from "../../assets/ellipse.png";
import { useNavigate } from "react-router-dom";
import { 
  personalInfo, 
  socialLinks, 
  contactMethods, 
  pageContent,
  ctaTexts 
} from "../../data/content";

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
        timeZone: personalInfo.timezone
      });
      setCurrentTime(`${timeString} PM (${personalInfo.timezoneDisplay})`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-footer">
      <h4 className="contact-header">{pageContent.contact.header}</h4>
      <h1 className="contact-title">{pageContent.contact.title}</h1>

      <div className="contact-content">
        <svg className="arrow-icon" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.500156 26.359C0.51235 27.1874 1.19373 27.849 2.02207 27.8368L15.5206 27.6381C16.3489 27.6259 17.0106 26.9445 16.9984 26.1162C16.9862 25.2878 16.3048 24.6262 15.4765 24.6384L3.47775 24.815L3.30113 12.8163C3.28894 11.988 2.60756 11.3264 1.77922 11.3386C0.950881 11.3508 0.289266 12.0321 0.301459 12.8605L0.500156 26.359ZM25.6309 2L24.5547 0.955066L0.923838 25.292L1.99999 26.3369L3.07615 27.3819L26.707 3.04493L25.6309 2Z" fill="white"/>
        </svg>

        <div className="profile-info">
          <div className="avatar">
            <img src={ellipseImg} alt={personalInfo.fullName} />
          </div>

          <div className="profile-text">
            <h2>{personalInfo.fullName}</h2>
            <p>{personalInfo.role}</p>
          </div>
        </div>

        {/* Using the new components */}
        <AnimatedLineButton buttonSize={180}>
          <CircularButton 
            onClick={onGetInTouchClick}
            variant="primary"
          >
            {ctaTexts.getInTouch}
          </CircularButton>
        </AnimatedLineButton>

        <div className="contact-buttons">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className="contact-btn"
            >
              {contact.value}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
          <div className="footer-left">
            <div className="footer-info">
              <span className="footer-label">VERSION</span>
              <span className="footer-value">{pageContent.footer.version}</span>
            </div>
            <div className="footer-info">
              <span className="footer-label">{pageContent.footer.localTimeLabel}</span>
              <span className="footer-value">{currentTime}</span>
            </div>
          </div>
          
          <div className="footer-right">
            <span className="footer-label">{pageContent.footer.socialsLabel}</span>
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