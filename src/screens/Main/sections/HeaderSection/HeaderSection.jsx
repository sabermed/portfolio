import React from "react";
import "./HeaderSection.scss";
import svgLogo from "../../../../assets/logo.svg"

export const HeaderSection = () => {

  return (
    <header className="header-section">
      <div class="menu">
        <div class="logo">
          <a href="/" aria-label="Saber Mohamed">
            <svgLogo />
          </a>
        </div>
        <nav aria-label="Main navigation desktop" className="navigation">
          <ul>
            <li className="menu-item">
              <a href="/#about" data-label="about">
                about
              </a>
            </li>
            <li className="menu-item">
              <a href="/#experience" data-label="experience">
                experience
              </a>
            </li>
            <li className="menu-item">
              <a href="/#services" data-label="services">
                services
              </a>
            </li>
            <li className="menu-item">
              <a href="/#works" data-label="works">
                works
              </a>
            </li>
            <li className="menu-item">
              <a href="/#contact" data-label="contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div class="info">
          <ul class="coordinate">
            <li><button>Let's Collaborate – Get in Touch</button></li>
            <li><p>Tunisia, TN <time id="CurrentTime">11:00 PM</time></p></li>
          </ul>
          <ul class="contact">
            <li><a href="mailto:sabermed66@gmail.com" target="_self">sabermed66@gmail.com</a><i></i></li>
            <li><a href="sms:+21629462796" target="_self">tel: (+216) 29-462-796</a><i></i></li>
          </ul>
        </div>
      </div>

      <div className="header-content">
        <h1 className="main-title">SABER MOHAMED</h1>
        <div className="header-content-sub">
          <div className="subtitle">
            FULL-STACK DEVELOPER &
            FRONTEND SPECIALIST
          </div>
          <div className="description">
            expert in pixel-perfect websites
            <br />
            development & highly performance
            <br />
            backend apis
          </div>
        </div>
      </div>
    </header>
  );
};
