import React, { useState, useEffect } from "react";
import { NavigationHeader } from "../../components/NavigationHeader/NavigationHeader";
import { ContactFooter } from "../../components/ContactFooter/ContactFooter";
import "./Contact.scss";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Africa/Tunis'
      });
      setCurrentTime(`${timeString} PM (UTC+1)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const contactMethods = [
    {
      title: "Email",
      value: "sabermed66@gmail.com",
      link: "mailto:sabermed66@gmail.com",
      description: "Drop me a line for project inquiries or collaborations"
    },
    {
      title: "Phone",
      value: "+216 29 462 796",
      link: "tel:+21629462796",
      description: "Available for calls during business hours (UTC+1)"
    },
    {
      title: "Location",
      value: "Tunisia, TN",
      link: null,
      description: "Based in Tunisia, working with clients worldwide"
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sabermed' },
    { name: 'GitHub', url: 'https://github.com/sabermed' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'YouTube', url: 'https://youtube.com' }
  ];

  return (
    <div className="contact-page">
      <NavigationHeader background="white" textColor="black" />
      
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="hero-content">
              <h1>LET'S WORK TOGETHER</h1>
              <p>
                Ready to bring your ideas to life? I'm available for new projects 
                and collaborations. Let's discuss how we can create something amazing together.
              </p>
            </div>
            
            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for new projects</span>
              </div>
              <div className="local-time">
                <span>Local time in Tunisia: {currentTime}</span>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="contact-methods">
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-header">
                    <h3>{method.title}</h3>
                  </div>
                  <div className="method-content">
                    {method.link ? (
                      <a href={method.link} className="method-value">
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-value">{method.value}</span>
                    )}
                    <p className="method-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Overview */}
          <section className="services-overview">
            <div className="services-content">
              <h2>What I Can Help You With</h2>
              <div className="services-list">
                <div className="service-item">
                  <h4>Web Development</h4>
                  <p>Full-stack web applications, responsive websites, and e-commerce platforms</p>
                </div>
                <div className="service-item">
                  <h4>Performance Optimization</h4>
                  <p>Speed improvements, Core Web Vitals optimization, and accessibility enhancements</p>
                </div>
                <div className="service-item">
                  <h4>Technical Consulting</h4>
                  <p>Architecture planning, code reviews, and technology recommendations</p>
                </div>
                <div className="service-item">
                  <h4>Maintenance & Support</h4>
                  <p>Ongoing support, updates, and troubleshooting for existing projects</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="social-section">
            <h2>Connect With Me</h2>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.name}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default Contact;