import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');

  // Update time every second
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

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__left">
            <h2 className="contact__title">
              Let's work together
            </h2>
            
            <div className="contact__info">
              <a href="mailto:sabermed66@gmail.com" className="contact__email">
                sabermed66@gmail.com
              </a>
              <a href="tel:+21629462796" className="contact__phone">
                +216 29 462 796
              </a>
            </div>
          </div>
          
          <div className="contact__right">
            <button 
              className="contact__button" 
              onClick={() => window.location.href = 'mailto:sabermed66@gmail.com'}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="contact__footer">
          <div className="contact__footer-left">
            <div className="footer__info">
              <span className="footer__label">VERSION</span>
              <span className="footer__value">2024 © Edition</span>
            </div>
            <div className="footer__info">
              <span className="footer__label">LOCAL TIME</span>
              <span className="footer__value">{currentTime}</span>
            </div>
          </div>
          
          <div className="contact__footer-right">
            <span className="footer__label">SOCIALS</span>
            <div className="social__links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;