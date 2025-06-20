import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#" className="header__logo-link">
            © Saber.
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">About</a>
            </li>
            <li className="header__nav-item">
              <a href="#experience" className="header__nav-link">Experience</a>
            </li>
            <li className="header__nav-item">
              <a href="#skills" className="header__nav-link">Projects</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__cta">
          <a href="#contact" className="header__cta-button">Download Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;