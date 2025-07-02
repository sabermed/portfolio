import React from 'react';
import './About.css';

const About = () => {

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          
          <div className="about__right">
            <p className="about__description">
              Over the past 4+ years, I've had the opportunity to work on a 
              range of design projects, collaborating with diverse teams 
              and clients to bring creative visions to life
            </p>
            <a href="#contact" className="about__contact-link">
              Contact me ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;