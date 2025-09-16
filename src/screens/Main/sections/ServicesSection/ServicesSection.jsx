import React from "react";
import "./ServicesSection.scss";
import ai_local_seo from "../../../../assets/ai_local_seo.svg"
import ai_local_responsive from "../../../../assets/ai_local_responsive.svg"
import ai_local_motion from "../../../../assets/ai_local_motion.svg"
import ai_local_refactoring from "../../../../assets/ai_local_refactoring.svg"
import ai_local_ecommerce from "../../../../assets/ai_local_e-commerce.svg"


const servicesData = [
  {
    icon: ai_local_ecommerce,
    title: "Custom Web & App Development",
    description:
      "I design and build complete web solutions — from user-friendly frontends to reliable backends that scale with your needs.",
  },
  {
    icon: ai_local_seo,
    title: "Performance & Optimization",
    description:
      "Slow websites lose users. I focus on speed, accessibility, and Core Web Vitals to make sure your app runs fast on any device.",
  },
  {
    icon: ai_local_responsive,
    title: "Responsive & Cross-Browser Design",
    description:
      "I ensure websites adapt perfectly across all screen sizes and browsers, so everyone has the same smooth experience.",
  },
  {
    icon: ai_local_motion,
    title: "Interactive Experiences",
    description:
      "Enhance websites with captivating motions using cutting-edge technologies like Three.js and GSAP, incorporating dynamic and interactive elements to boost user engagement.",
  },
  {
    icon: ai_local_refactoring,
    title: "Deployment & Maintenance",
    description:
      "From Docker to cloud hosting, I help deploy, monitor, and maintain projects so they stay stable and secure long after launch.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="header-text">
            <span className="subtitle">What I Offer</span>
            <h2>Services</h2>
            <p>Explore My Web Development Services.</p>
          </div>
        </div>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service-item">
              <img
                src={service.icon}
                alt="Service icon"
                className="service-icon"
              />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};