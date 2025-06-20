import React from 'react';
import './About.css';

const About = () => {

  const experiences = [
    {
      company: "Eneffic",
      position: "Full Stack Developer",
      duration: "June 2023 - Present",
      type: "Full-Time"
    },
    {
      company: "Atomic-IT",
      position: "Full Stack Developer",
      duration: "February 2023 - June 2023",
      type: "Part-Time"
    },
    {
      company: "Fiverr",
      position: "Full Stack Developer, Web & Mobile Developer, Figma-to-code",
      duration: "June 2022 - February 2023",
      type: "Freelancer"
    },
    {
      company: "Atomic-IT",
      position: "Full Stack Developer",
      duration: "February 2021 - May 2021",
      type: "Internship"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__left">
            <div className="about__header">
              <span className="about__label">🔴 Experiences</span>
              <h2 className="about__title">
                Explore My Professional<br />
                Work Journey
              </h2>
            </div>
          </div>
          
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

        <div className="about__experiences">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-item"
            >
              <div className="experience-item__left">
                <h3 className="experience-item__company">{exp.company}</h3>
                <span className="experience-item__duration">🔴 {exp.duration}</span>
              </div>
              
              <div className="experience-item__center">
                <p className="experience-item__position">{exp.position}</p>
              </div>
              
              <div className="experience-item__right">
                <span className="experience-item__type">{exp.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;