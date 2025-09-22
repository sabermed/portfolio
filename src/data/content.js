// Centralized content data for the entire portfolio
// This file contains all text content, personal info, and configuration

export const personalInfo = {
  fullName: "Saber Mohamed",
  firstName: "Saber", 
  lastName: "Mohamed",
  role: "Full Stack Developer",
  tagline: "FULL-STACK DEVELOPER & SOLUTION ARCHITECT",
  email: "sabermed66@gmail.com",
  phone: "+216 29 462 796",
  location: "Tunisia, TN",
  timezone: "Africa/Tunis",
  timezoneDisplay: "UTC+1",
  
  // Professional summary
  summary: "Over the past 3+ years I've worked on projects ranging from eCommerce, CMS, SEO..., Whether I'm improving website performance, setting up APIs, or building interactive frontends, my goal is simple: create digital experiences that people enjoy and businesses rely on.",
  
  // Hero section content
  heroDescription: "expert in pixel-perfect websites development & highly performance backend apis",
  
  // Image caption
  imageCaption: "*Raised and based in Tunisia - working with teams and clients worldwide.",
  
  // Resume links
  resumeLinks: {
    en: "https://saber.dev/cv-saber-en.pdf",
    fr: "https://saber.dev/cv-saber-fr.pdf"
  }
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sabermed',
    username: 'linkedin.com/in/sabermed'
  },
  {
    name: 'GitHub', 
    url: 'https://github.com/sabermed',
    username: 'github.com/sabermed'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/sabermed',
    username: 'facebook.com/sabermed'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@sabermed',
    username: 'youtube.com/@sabermed'
  }
];

export const navigationItems = [
  { name: "about", url: "/#about", hash: "#about" },
  { name: "experience", url: "/#experience", hash: "#experience" },
  { name: "services", url: "/#services", hash: "#services" },
  { name: "works", url: "/works", hash: null },
  { name: "contact", url: "/contact", hash: null }
];

export const workExperience = [
  {
    id: 1,
    company: "Eneffic",
    period: "June 2023 - Present",
    position: "Full Stack Developer",
    type: "Full-Time",
    location: "Tunis, Tunisia",
    description: "Rebuilt 4+ internal platforms with modern tech stacks, adding 20+ features and reducing save/load times by 30%. Developed solar panel design tools and integrated e-signature APIs.",
    achievements: [
      "Rebuilt 4+ internal platforms with modern tech stacks",
      "Added 20+ features and reduced save/load times by 30%",
      "Developed solar panel design and estimation tool",
      "Integrated Yousign e-signature API reducing validation time by 80%",
      "Dockerized services and deployed CI/CD pipelines"
    ]
  },
  {
    id: 2,
    company: "Atomic-IT",
    period: "February 2023 - June 2023", 
    position: "Full Stack Developer",
    type: "Part-Time",
    location: "Kelibia, Tunisia",
    description: "Created project management system with custom IFC viewer for 3D architectural plans. Implemented real-time collaboration and secure file storage.",
    achievements: [
      "Created project management system with custom IFC viewer",
      "Implemented secure file storage with role-based access",
      "Established real-time communication using Socket.IO",
      "Designed backend logic for project budget calculations",
      "Handled full deployment cycle with Docker and Nginx"
    ]
  },
  {
    id: 3,
    company: "Fiverr",
    period: "June 2022 - February 2023",
    position: "Full Stack Developer", 
    type: "Freelance",
    location: "Remote",
    description: "Completed 25+ projects across various industries including e-commerce, SaaS, and mobile applications. Achieved Level 2 Seller status with 5-star ratings.",
    achievements: [
      "Completed 25+ projects in various industries",
      "Achieved Level 2 Seller status with 5-star ratings",
      "Built interactive data visualization dashboards",
      "Developed React Native applications with payment integration",
      "Maintained 75% repeat business and referrals"
    ]
  },
  {
    id: 4,
    company: "Atomic-IT",
    period: "February 2021 - May 2021",
    position: "Full Stack Developer",
    type: "Internship", 
    location: "Kelibia, Tunisia",
    description: "Developed mobile learning/job search app for developers using Flutter & Django. Implemented web scraping from 20+ websites with personalized recommendations.",
    achievements: [
      "Developed mobile learning/job search app using Flutter & Django",
      "Implemented real-time web scraping from 20+ websites",
      "Built personalized recommendation system",
      "Created tools for finding tutorials, code, jobs, and solutions"
    ]
  }
];

export const services = [
  {
    id: 1,
    icon: "ai_local_ecommerce",
    title: "Full Stack Web Development",
    description: "End-to-end web applications using React.js, Vue.js, Node.js, and Python/Django. From interactive frontends to scalable APIs with real-time features (WebSocket, Socket.IO). Perfect for SaaS platforms, e-commerce, and enterprise tools.",
    technologies: ["React.js", "Vue.js", "Node.js", "Python", "Django", "WebSocket", "Socket.IO"]
  },
  {
    id: 2,
    icon: "ai_local_responsive", 
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android apps using React Native and Expo. Includes geolocation, payment integration (Stripe), cloud services (AWS), and native device features. Ideal for startups and businesses going mobile-first.",
    technologies: ["React Native", "Expo", "Stripe", "AWS", "Google Maps", "Push Notifications"]
  },
  {
    id: 3,
    icon: "ai_local_motion",
    title: "Specialized Solutions", 
    description: "Complex technical implementations: 3D model viewers (Three.js, IFC.js), data visualization dashboards (D3.js, Chart.js), video conferencing (WebRTC), and real-time collaboration tools. For industries requiring advanced technical solutions.",
    technologies: ["Three.js", "IFC.js", "D3.js", "Chart.js", "WebRTC", "Socket.IO"]
  },
  {
    id: 4,
    icon: "ai_local_seo",
    title: "Performance & DevOps",
    description: "Application optimization, CI/CD pipeline setup, Docker containerization, and cloud deployment (AWS, GCP). Achieve 90%+ Lighthouse scores and reduce deployment times by 60%. Essential for production-ready applications.",
    technologies: ["Docker", "AWS", "GCP", "GitHub Actions", "Nginx", "Performance Optimization"]
  },
  {
    id: 5,
    icon: "ai_local_refactoring",
    title: "Legacy System Modernization",
    description: "Transform outdated systems with modern tech stacks, add new features, and improve performance by 30%+. Includes API integration, database migration, and progressive enhancement. Perfect for established businesses needing technical upgrades.",
    technologies: ["System Migration", "API Integration", "Database Migration", "Progressive Enhancement"]
  }
];

export const technicalSkills = {
  frontend: [
    "React.js", "Vue.js", "React Native", "TypeScript", "JavaScript (ES6+)", 
    "Redux", "Vuex", "HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap", "jQuery"
  ],
  backend: [
    "Node.js", "Express.js", "Nest.js", "Python", "Django", 
    "WebSockets", "Socket.IO", "WebRTC", "OAuth 2.0"
  ],
  databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  devops: ["AWS (Lambda, S3)", "Google Cloud Platform (GCP)", "Docker", "Nginx", "GitHub Actions"],
  tools: [
    "Git", "Webpack", "Babel", "Chart.js", "D3.js", "IFC.js", 
    "Three.js", "PDFLib", "JSPDF", "Figma", "Jira"
  ]
};

export const pageContent = {
  // Hero Section
  hero: {
    title: ["SABER", "MOHAMED"],
    subtitle: "FULL-STACK DEVELOPER & SOLUTION ARCHITECT", 
    description: "expert in pixel-perfect websites development & highly performance backend apis"
  },
  
  // About Section
  about: {
    title: "About Me",
    mainDescription: personalInfo.summary,
    resumeText: "My resume (pdf ~90kb) : [EN] [FR]",
    imageCaption: personalInfo.imageCaption,
    experienceTitle: "Work Experience"
  },
  
  // Services Section
  servicesSection: {
    subtitle: "What I Offer",
    title: "Services", 
    description: "Explore My Full-Stack Development Services."
  },
  
  // Projects Section
  projects: {
    title: "Selected Work",
    subtitle: "[5]",
    moreWorkText: "More Work"
  },
  
  // Contact Section
  contact: {
    header: "YOU GOT SOMETHING IN MIND ?",
    title: "LET'S WORK TOGETHER",
    buttonText: "Get In Touch",
    
    // Contact page specific
    pageTitle: "LET'S WORK TOGETHER",
    form: {
      nameLabel: "What's your name?",
      namePlaceholder: "John Doe *",
      emailLabel: "What's your email?", 
      emailPlaceholder: "john.doe@gmail.com *",
      subjectLabel: "Your Subject?",
      subjectPlaceholder: "Web Development, Mobile App Development ...",
      messageLabel: "Your message",
      messagePlaceholder: "Hello Saber can you help me with ... *",
      sendButton: "Send"
    },
    
    details: {
      aboutTitle: "ABOUT ME",
      contactTitle: "CONTACT",
      socialsTitle: "SOCIALS"
    }
  },
  
  // Works Page
  works: {
    title: "WORKS",
    description: "A collection of projects I've worked on, spanning web development, e-commerce, and interactive applications."
  },
  
  // Footer
  footer: {
    version: "2025 © Edition",
    localTimeLabel: "LOCAL TIME",
    socialsLabel: "SOCIALS",
    linksLabel: "LINKS"
  },
  
  // Error pages
  notFound: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    homeButton: "Go Home",
    worksButton: "View Projects", 
    suggestionsTitle: "You might be looking for:",
    suggestions: [
      { text: "My Projects", url: "/works" },
      { text: "Contact Information", url: "/contact" },
      { text: "About Me", url: "/#about" },
      { text: "Services", url: "/#services" }
    ]
  },
  
  errorFallback: {
    title: "Something went wrong",
    description: "We apologize for the inconvenience. An unexpected error has occurred. Please try refreshing the page or contact us if the problem persists.",
    retryButton: "Try Again",
    homeButton: "Go Home"
  }
};

export const siteMetadata = {
  title: "Saber Mohamed - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, and modern web technologies. Expert in pixel-perfect websites, high-performance APIs, and e-commerce solutions. Based in Tunisia, working globally.",
  keywords: [
    "Full Stack Developer", "React Developer", "Node.js", "JavaScript", 
    "TypeScript", "Web Development", "Frontend Developer", "Backend Developer", 
    "API Development", "E-commerce", "Tunisia Developer", "Remote Developer", 
    "Modern Web Technologies", "Performance Optimization"
  ],
  author: "Saber Mohamed",
  siteUrl: "https://saber.dev",
  image: "https://saber.dev/og-image.jpg",
  twitterHandle: "@sabermed66"
};

// Contact information arrays for easy iteration
export const contactMethods = [
  {
    type: "email",
    label: "Email",
    value: personalInfo.email,
    url: `mailto:${personalInfo.email}`
  },
  {
    type: "phone", 
    label: "Phone",
    value: personalInfo.phone,
    url: `tel:${personalInfo.phone}`
  }
];

// Statistics for about section or homepage
export const stats = {
  experience: "3+",
  projectsCompleted: "25+",
  clientsSatisfied: "20+",
  technologiesUsed: "15+"
};

// Call-to-action texts
export const ctaTexts = {
  getInTouch: "Get In Touch",
  letsCollaborate: "Let's Collaborate — Get in Touch",
  moreWork: "More Work",
  nextProject: "Next Project",
  viewProject: "View Project",
  sendMessage: "Send Message"
};

export default {
  personalInfo,
  socialLinks,
  navigationItems,
  workExperience,
  services,
  technicalSkills,
  pageContent,
  siteMetadata,
  contactMethods,
  stats,
  ctaTexts
};