import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationHeader.scss";
import Logo from "./Logo";
import { personalInfo, navigationItems, ctaTexts } from "../../data/content";

export const NavigationHeader = ({background, textColor}) => {
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

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

  // Helper function to check if link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleContactClick = () => {
    // If we're on the home page, scroll to contact section
    if (location.pathname === '/') {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to contact page
      window.location.href = '/contact';
    }
  };

  const handleSectionClick = (sectionHash) => (e) => {
    e.preventDefault();
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      const section = document.querySelector(sectionHash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${sectionHash}`;
    }
  };

  return (
    <header>
      <div
        className="menu"
        style={{
          '--bg-navigation': background,
          '--text-navigation': textColor
        }}
      >
        <div className="logo">
          <Link to="/" aria-label={personalInfo.fullName}>
            <Logo style={{color: textColor}} />
          </Link>
        </div>
        
        <nav aria-label="Main navigation desktop" className="navigation">
          <ul>
            {navigationItems.map((item, index) => (
              <li key={index} className="menu-item">
                {item.hash ? (
                  <a 
                    href={item.hash} 
                    onClick={handleSectionClick(item.hash)}
                    data-label={item.name}
                    className={isActiveLink('/') && location.hash === item.hash ? 'active' : ''}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.url} 
                    data-label={item.name}
                    className={isActiveLink(item.url) ? 'active' : ''}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="info">
          <ul className="coordinate">
            <li>
              <button onClick={handleContactClick}>
                {ctaTexts.letsCollaborate}
              </button>
            </li>
            <li>
              <p>{personalInfo.location} <time>{currentTime}</time></p>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <Link to="/contact" target="_self">
                {personalInfo.email}
              </Link>
              <i></i>
            </li>
            <li>
              <Link to="/contact" target="_self">
                tel: {personalInfo.phone}
              </Link>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};