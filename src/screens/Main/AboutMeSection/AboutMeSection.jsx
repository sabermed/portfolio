import React, { useEffect, useRef, useState } from "react";
import "./AboutMeSection.scss";
import AnimatedLineButton from "../../../components/AnimatedLineButton/AnimatedLineButton";
import CircularButton from "../../../components/CircularButton/CircularButton";
import meImg from "../../../assets/me.png"
import { useNavigate } from "react-router-dom";

const workExperience = [
  {
    company: "Eneffic",
    period: "June 2023 - Present",
    position: "Full Stack Developer",
    type: "Full-Time",
  },
  {
    company: "Atomic-IT",
    period: "February 2023 - June 2023",
    position: "Full Stack Developer",
    type: "Part-Time",
  },
  {
    company: "Fiverr",
    period: "June 2022 - February 2023",
    position: "Full Stack Developer",
    type: "Freelance",
  },
  {
    company: "Atomic-IT",
    period: "February 2021 - May 2021",
    position: "Full Stack Developer",
    type: "InternShip",
  },
];

export const AboutMeSection = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);
  const [experienceInView, setExperienceInView] = useState(false);
  
  const onGetInTouchClick = () => {
    navigate("/contact")
  }
  
  // Text for word-by-word animation
  const mainDescriptionText = "Over the past 3+ years I've worked on projects ranging from eCommerce, CMS, SEO..., Whether I'm improving website performance, setting up APIs, or building interactive frontends, my goal is simple: create digital experiences that people enjoy and businesses rely on.";
  const resumeText = "My resume (pdf ~90kb) : [EN] [FR]";
  const imageCaptionText = "*Raised and based in Tunisia - working with teams and clients worldwide.";
  const experienceTitleText = "Work Experience";
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === aboutRef.current && entry.isIntersecting) {
          setAboutInView(true);
        }
        if (entry.target === experienceRef.current && entry.isIntersecting) {
          setExperienceInView(true);
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p className="main-description">
              {mainDescriptionText.split(" ").map((word, index) => (
                <span key={index} className="word-mask">
                  <span 
                    className={`word ${aboutInView ? 'animate' : ''}`}
                    style={{
                      animationDelay: `${index * 0.12}s`
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </p>

            <div className="resume-links">
              {resumeText.split(" ").map((word, index) => {
                if (word.includes("[EN]") || word.includes("[FR]")) {
                  const linkText = word.includes("[EN]") ? "[EN]" : "[FR]";
                  const href = word.includes("[EN]") 
                    ? "https://saber.dev/cv-saber-en.pdf" 
                    : "https://saber.dev/cv-saber-fr.pdf";
                  
                  return (
                    <span key={index} className="word-mask">
                      <a
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={`word ${aboutInView ? 'animate' : ''}`}
                        style={{
                          animationDelay: `${1.2 + (index * 0.12)}s`
                        }}
                      >
                        {linkText}
                      </a>
                    </span>
                  );
                }
                
                return (
                  <span key={index} className="word-mask">
                    <span 
                      className={`word ${aboutInView ? 'animate' : ''}`}
                      style={{
                        animationDelay: `${1.2 + (index * 0.03)}s`
                      }}
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </div>
            
            <div className={`button-container ${aboutInView ? 'animate' : ''}`}>
              <AnimatedLineButton buttonSize={250} lineColor="#D0D0D0">
                <CircularButton 
                  onClick={onGetInTouchClick}
                  variant="dark"
                  size={250}
                >
                  Get in Touch
                </CircularButton>
              </AnimatedLineButton>
            </div>
          </div>

          <div className="about-image">
            <div className="image-caption">
              {imageCaptionText.split(" ").map((word, index) => (
                <span key={index} className="word-mask">
                  <span 
                    className={`word ${aboutInView ? 'animate' : ''}`}
                    style={{
                      animationDelay: `${1.5 + (index * 0.12)}s`
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </div>
            <div className="image-container">
              <img
                src={meImg}
                alt="Saber Mohamed"
                className={`profile-image ${aboutInView ? 'animate' : ''}`}
              />
              <div className={`curtain ${aboutInView ? 'animate' : ''}`}></div>
            </div>
          </div>
        </div>

        <div className="experience-section" id="experience" ref={experienceRef}>
          <h2 className="experience-title">
            {experienceTitleText.split(" ").map((word, index) => (
              <span key={index} className="word-mask">
                <span 
                  className={`word ${experienceInView ? 'animate' : ''}`}
                  style={{
                    animationDelay: `${index * 0.12}s`
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <div className="experience-list">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className={`experience-item ${experienceInView ? 'animate' : ''}`}
                style={{ animationDelay: `${0.3 + (index * 0.15)}s` }}
              >
                <div className="company-info">
                  <h3>{job.company}</h3>
                  <div className="period">
                    <span className="dot"></span>
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className="position">
                  {job.position}
                </div>

                <div className="job-type">
                  <span className="badge">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};