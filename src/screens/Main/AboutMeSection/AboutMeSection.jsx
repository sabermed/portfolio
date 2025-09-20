import React from "react";
import "./AboutMeSection.scss";
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
  
  const onGetInTouchClick = () => {
    navigate("/contact")
  }
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="main-description">
              Over the past 3+ years I've worked on projects ranging from
              eCommerce, CMS, SEO..., Whether I'm improving website
              performance, setting up APIs, or building interactive frontends,
              my goal is simple: create digital experiences that people enjoy
              and businesses rely on.
            </p>

            <div className="resume-links">
              <span>My resume (pdf ~90kb) : </span>
              <a
                href="https://saber.dev/cv-saber-en.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                [EN]
              </a>
              <span> </span>
              <a
                href="https://saber.dev/cv-saber-fr.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                [FR]
              </a>
            </div>
            <div className="cta-section">
              <div className="line"></div>
              <button className="cta-button" onClick={onGetInTouchClick}>
                Get in Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <p className="image-caption">
              *Raised and based in Tunisia — working with teams and clients
              worldwide.
            </p>
            <img
              src={meImg}
              alt="Saber Mohamed"
            />
          </div>
        </div>

        <div className="experience-section">
          <h2>Work Experience</h2>

          <div className="experience-list">
            {workExperience.map((job, index) => (
              <div key={index} className="experience-item">
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