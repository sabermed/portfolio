import React, { useRef } from "react";
import { motion } from "framer-motion";
import { headerReveal, projectCardReveal, ctaButtonReveal } from "./animate";
import { useOneWayAnimation } from "../../../hooks/useOneWayAnimation";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import { selected_projects } from "../../../data/projects";
import styles from './ProjectsSection.module.scss';

export const ProjectsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const shouldAnimate = useOneWayAnimation(sectionRef, { threshold: 0.1, margin: "0px 0px -100px 0px" });

  const onMoreWorkClick = () => {
    navigate("/works");
  };

  return (
    <section className={styles.projectsSection} ref={sectionRef}>
      <div className={`container ${styles.containerLayout}`}>
        <motion.header 
          className={styles.projectsHeader}
          variants={headerReveal}
          animate={shouldAnimate ? "open" : "initial"}
        >
          <h2>Selected Work<sup className={styles.projectCount}>[6]</sup></h2>
        </motion.header>

        <div className={styles.projectsGrid}>
          {selected_projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardReveal}
              custom={index}
              animate={shouldAnimate ? "open" : "initial"}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                image={project.image}
                alt={project.alt}
                slug={project.slug}
                category={project.category}
                year={project.year}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.projectsCta}
          variants={ctaButtonReveal}
          animate={shouldAnimate ? "open" : "initial"}
        >
          <button className={styles.moreWorkBtn} onClick={onMoreWorkClick}>
            More Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};