import React from "react";
import { motion } from "framer-motion";
import { serviceHeaderReveal, serviceItemReveal } from "./animate";
import ai_local_seo from "../../../assets/ai_local_seo.svg";
import ai_local_responsive from "../../../assets/ai_local_responsive.svg";
import ai_local_motion from "../../../assets/ai_local_motion.svg";
import ai_local_refactoring from "../../../assets/ai_local_refactoring.svg";
import ai_local_ecommerce from "../../../assets/ai_local_e-commerce.svg";
import styles from './ServicesSection.module.scss';

const servicesData = [
  {
    icon: ai_local_ecommerce,
    title: "Custom Web & App Development",
    description: "I design and build complete web solutions — from user-friendly frontends to reliable backends that scale with your needs.",
  },
  {
    icon: ai_local_seo,
    title: "Performance & Optimization",
    description: "Slow websites lose users. I focus on speed, accessibility, and Core Web Vitals to make sure your app runs fast on any device.",
  },
  {
    icon: ai_local_responsive,
    title: "Responsive & Cross-Browser Design",
    description: "I ensure websites adapt perfectly across all screen sizes and browsers, so everyone has the same smooth experience.",
  },
  {
    icon: ai_local_motion,
    title: "Interactive Experiences",
    description: "Enhance websites with captivating motions using cutting-edge technologies like Three.js and GSAP, incorporating dynamic and interactive elements to boost user engagement.",
  },
  {
    icon: ai_local_refactoring,
    title: "Deployment & Maintenance",
    description: "From Docker to cloud hosting, I help deploy, monitor, and maintain projects so they stay stable and secure long after launch.",
  },
];

export const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={`container ${styles.containerLayout}`}>
        
        <motion.div 
          className={styles.servicesHeader}
          variants={serviceHeaderReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-200px" }}
        >
          <span className={styles.subtitle}>What I Offer</span>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.description}>Explore My Web Development Services.</p>
        </motion.div>

        <div className={styles.servicesList}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.serviceItem}
              variants={serviceItemReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={service.icon}
                alt="Service icon"
                className={styles.serviceIcon}
              />

              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};