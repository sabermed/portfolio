import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
    wordSlideUp, 
    buttonReveal, 
    curtainReveal, 
    imageScale, 
    experienceItemReveal 
} from "./animate";
import { useOneWayAnimation } from "../../../hooks/useOneWayAnimation";
import AnimatedLineButton from "../../../components/AnimatedLineButton/AnimatedLineButton";
import CircularButton from "../../../components/CircularButton/CircularButton";
import { useNavigate } from "react-router-dom";
import meImg from "../../../assets/me.png";
import styles from './AboutMeSection.module.scss';

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
  
  // Simple one-way animation triggers
  const aboutAnimated = useOneWayAnimation(aboutRef, { threshold: 0.1, margin: "0px 0px -200px 0px" });
  const experienceAnimated = useOneWayAnimation(experienceRef, { threshold: 0.1, margin: "0px 0px -100px 0px" });
  
  const onGetInTouchClick = () => {
    navigate("/contact");
  };
  
  const mainDescriptionText = "Over the past 3+ years I've worked on projects ranging from eCommerce, CMS, SEO..., Whether I'm improving website performance, setting up APIs, or building interactive frontends, my goal is simple: create digital experiences that people enjoy and businesses rely on.";
  const resumeText = "My resume (pdf ~90kb) : [EN] [FR]";
  const imageCaptionText = "*Raised and based in Tunisia - working with teams and clients worldwide.";
  const experienceTitleText = "Work Experience";
  
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.containerLayout}`}>
        <div className={styles.aboutContent} ref={aboutRef}>
          <div className={styles.aboutText}>
            <p className={styles.mainDescription}>
              {mainDescriptionText.split(" ").map((word, index) => (
                <span key={index} className={styles.mask}>
                  <motion.span 
                    variants={wordSlideUp} 
                    custom={index} 
                    animate={aboutAnimated ? "open" : "initial"}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </p>

            <div className={styles.resumeLinks}>
              {resumeText.split(" ").map((word, index) => {
                if (word.includes("[EN]") || word.includes("[FR]")) {
                  const linkText = word.includes("[EN]") ? "[EN]" : "[FR]";
                  const href = word.includes("[EN]") 
                    ? "https://saber.dev/cv-saber-en.pdf" 
                    : "https://saber.dev/cv-saber-fr.pdf";
                  
                  return (
                    <span key={index} className={styles.mask}>
                      <motion.a
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                        variants={wordSlideUp}
                        custom={index + 25}
                        animate={aboutAnimated ? "open" : "initial"}
                      >
                        {linkText}
                      </motion.a>
                    </span>
                  );
                }
                
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span 
                      variants={wordSlideUp}
                      custom={index + 25}
                      animate={aboutAnimated ? "open" : "initial"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </div>
            
            <motion.div 
              className={styles.buttonContainer}
              variants={buttonReveal}
              animate={aboutAnimated ? "open" : "initial"}
            >
              <AnimatedLineButton buttonSize={250} lineColor="#D0D0D0">
                <CircularButton 
                  onClick={onGetInTouchClick}
                  variant="dark"
                  size={250}
                >
                  Get in Touch
                </CircularButton>
              </AnimatedLineButton>
            </motion.div>
          </div>

          <div className={styles.aboutImage}>
            <div className={styles.imageCaption}>
              {imageCaptionText.split(" ").map((word, index) => (
                <span key={index} className={styles.mask}>
                  <motion.span 
                    variants={wordSlideUp}
                    custom={index + 35}
                    animate={aboutAnimated ? "open" : "initial"}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>
            
            <div className={styles.imageContainer}>
              <motion.img
                src={meImg}
                alt="Saber Mohamed"
                className={styles.profileImage}
                variants={imageScale}
                animate={aboutAnimated ? "open" : "initial"}
              />
              <motion.div 
                className={styles.curtain}
                variants={curtainReveal}
                animate={aboutAnimated ? "open" : "initial"}
              />
            </div>
          </div>
        </div>

        <div className={styles.experienceSection} id="experience" ref={experienceRef}>
          <h2 className={styles.experienceTitle}>
            {experienceTitleText.split(" ").map((word, index) => (
              <span key={index} className={styles.mask}>
                <motion.span 
                  variants={wordSlideUp}
                  custom={index}
                  animate={experienceAnimated ? "open" : "initial"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className={styles.experienceList}>
            {workExperience.map((job, index) => (
              <motion.div 
                key={index} 
                className={styles.experienceItem}
                variants={experienceItemReveal}
                custom={index}
                animate={experienceAnimated ? "open" : "initial"}
              >
                <div className={styles.companyInfo}>
                  <h3>{job.company}</h3>
                  <div className={styles.period}>
                    <span className={styles.dot}></span>
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className={styles.position}>
                  {job.position}
                </div>

                <div className={styles.jobType}>
                  <span className={styles.badge}>{job.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};