import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationHeader.scss";
import Logo from "./Logo";

export const NavigationHeader = ({background, textColor}) => {
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

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

  const handleAboutClick = (e) => {
    e.preventDefault();
    // If we're on the home page, scroll to about section
    if (location.pathname === '/') {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = '/#about';
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    // If we're on the home page, scroll to services section
    if (location.pathname === '/') {
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = '/#services';
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
          <Link to="/" aria-label="Saber Mohamed">
            <Logo style={{color: textColor}} />
          </Link>
        </div>
        
        <nav aria-label="Main navigation desktop" className="navigation">
          <ul>
            <li className="menu-item">
              <a 
                href="#about" 
                onClick={handleAboutClick}
                data-label="about"
                className={isActiveLink('/') && location.hash === '#about' ? 'active' : ''}
              >
                about
              </a>
            </li>
            <li className="menu-item">
              <a 
                href="/#experience" 
                data-label="experience"
                className={isActiveLink('/') && location.hash === '/#experience' ? 'active' : ''}
              >
                experience
              </a>
            </li>
            <li className="menu-item">
              <a 
                href="#services" 
                onClick={handleServicesClick}
                data-label="services"
                className={isActiveLink('/') && location.hash === '#services' ? 'active' : ''}
              >
                services
              </a>
            </li>
            <li className="menu-item">
              <Link 
                to="/works" 
                data-label="works"
                className={isActiveLink('/works') ? 'active' : ''}
              >
                works
              </Link>
            </li>
            <li className="menu-item">
              <Link 
                to="/contact" 
                data-label="contact"
                className={isActiveLink('/contact') ? 'active' : ''}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="info">
          <ul className="coordinate">
            <li>
              <button onClick={handleContactClick}>
                Let's Collaborate — Get in Touch
              </button>
            </li>
            <li>
              <p>Tunisia, TN <time>{currentTime}</time></p>
            </li>
          </ul>
          <ul className="contact">
            <li>
              <Link to="/contact" target="_self">
                sabermed66@gmail.com
              </Link>
              <i></i>
            </li>
            <li>
              <Link to="/contact" target="_self">
                tel: (+216) 29-462-796
              </Link>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};