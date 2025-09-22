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
    title: "Full Stack Web Development",
    description: "End-to-end web applications using React.js, Vue.js, Node.js, and Python/Django. From interactive frontends to scalable APIs with real-time features (WebSocket, Socket.IO). Perfect for SaaS platforms, e-commerce, and enterprise tools.",
  },
  {
    icon: ai_local_responsive,
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android apps using React Native and Expo. Includes geolocation, payment integration (Stripe), cloud services (AWS), and native device features. Ideal for startups and businesses going mobile-first.",
  },
  {
    icon: ai_local_motion,
    title: "Specialized Solutions",
    description: "Complex technical implementations: 3D model viewers (Three.js, IFC.js), data visualization dashboards (D3.js, Chart.js), video conferencing (WebRTC), and real-time collaboration tools. For industries requiring advanced technical solutions.",
  },
  {
    icon: ai_local_seo,
    title: "Performance & DevOps",
    description: "Application optimization, CI/CD pipeline setup, Docker containerization, and cloud deployment (AWS, GCP). Achieve 90%+ Lighthouse scores and reduce deployment times by 60%. Essential for production-ready applications.",
  },
  {
    icon: ai_local_refactoring,
    title: "Legacy System Modernization",
    description: "Transform outdated systems with modern tech stacks, add new features, and improve performance by 30%+. Includes API integration, database migration, and progressive enhancement. Perfect for established businesses needing technical upgrades.",
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
          <p className={styles.description}>Explore My Full-Stack Development Services.</p>
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