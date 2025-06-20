import React from 'react';
import './Expertise.css';

const Expertise = () => {

  const skills = [
    {
      title: "Frontend Development",
      description: "Creating engaging and interactive user interfaces with modern frameworks and libraries. Specializing in React, Vue.js, and responsive design to deliver seamless user experiences across all devices.",
      icon: "→"
    },
    {
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs using Node.js, Python, and PHP. Implementing scalable architectures, authentication systems, and efficient data processing solutions.",
      icon: "→"
    },
    {
      title: "Databases",
      description: "Designing and managing efficient database systems including MySQL, PostgreSQL, and MongoDB. Optimizing queries, ensuring data integrity, and implementing backup strategies for reliable data management.",
      icon: "→"
    }
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="expertise__container">
        <div className="expertise__content">
          <div className="expertise__left">
            <h2 className="expertise__title">
              Expertise
            </h2>
            <p className="expertise__description">
              I create solutions characterized by their 
              own technical and architectural identity, 
              expressed through the simplicity of 
              the code and the expansion of the 
              concept, placing the user experience 
              and interaction at the center of 
              development.
            </p>
          </div>
          
          <div className="expertise__right">
            <div className="expertise__skills">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                >
                  <div className="skill-item__header">
                    <h3 className="skill-item__title">{skill.title}</h3>
                    <span className="skill-item__icon">{skill.icon}</span>
                  </div>
                  <p className="skill-item__description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;