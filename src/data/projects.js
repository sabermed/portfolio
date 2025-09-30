// Real project data based on Saber's actual work and screenshots
import blueVoyant1 from "../assets/projects/bluevoyant/1.png"
import blueVoyant2 from "../assets/projects/bluevoyant/2.png"
import blueVoyant3 from "../assets/projects/bluevoyant/3.png"
import blueVoyant4 from "../assets/projects/bluevoyant/4.png"
import blueVoyant5 from "../assets/projects/bluevoyant/5.png"
import blueVoyant6 from "../assets/projects/bluevoyant/6.png"
import blueVoyant7 from "../assets/projects/bluevoyant/7.png"

import dashboard1 from "../assets/projects/dashboard/1.png"
import dashboard2 from "../assets/projects/dashboard/2.png"
import dashboard3 from "../assets/projects/dashboard/3.png"
import dashboard4 from "../assets/projects/dashboard/4.png"
import dashboard5 from "../assets/projects/dashboard/5.png"
import dashboard6 from "../assets/projects/dashboard/6.png"
import dashboard7 from "../assets/projects/dashboard/7.png"
import dashboard8 from "../assets/projects/dashboard/8.png"
import dashboard9 from "../assets/projects/dashboard/9.png"
import dashboard10 from "../assets/projects/dashboard/10.png"
import dashboard11 from "../assets/projects/dashboard/11.png"
import dashboard12 from "../assets/projects/dashboard/12.png"
import dashboard13 from "../assets/projects/dashboard/13.png"
import dashboard14 from "../assets/projects/dashboard/14.png"
import dashboard15 from "../assets/projects/dashboard/15.png"

import lms1 from "../assets/projects/lms/1.png"
import lms2 from "../assets/projects/lms/2.png"
import lms3 from "../assets/projects/lms/3.png"
import lms4 from "../assets/projects/lms/4.png"
import lms5 from "../assets/projects/lms/5.png"
import lms6 from "../assets/projects/lms/6.png"
import lms7 from "../assets/projects/lms/7.png"
import lms8 from "../assets/projects/lms/8.png"
import lms9 from "../assets/projects/lms/9.png"
import lms10 from "../assets/projects/lms/10.png"
import lms11 from "../assets/projects/lms/11.png"
import lms12 from "../assets/projects/lms/12.png"

import pawsNeeds1 from "../assets/projects/pawsNeeds/1.jpg"
import pawsNeeds2 from "../assets/projects/pawsNeeds/2.jpg"
import pawsNeeds3 from "../assets/projects/pawsNeeds/3.jpg"
import pawsNeeds4 from "../assets/projects/pawsNeeds/4.jpg"
import pawsNeeds5 from "../assets/projects/pawsNeeds/5.jpg"
import pawsNeeds6 from "../assets/projects/pawsNeeds/6.jpg"
import pawsNeeds7 from "../assets/projects/pawsNeeds/7.jpg"
import pawsNeeds8 from "../assets/projects/pawsNeeds/8.jpg"
import pawsNeeds9 from "../assets/projects/pawsNeeds/9.jpg"
import pawsNeeds10 from "../assets/projects/pawsNeeds/10.jpg"
import pawsNeeds11 from "../assets/projects/pawsNeeds/11.jpg"
import pawsNeeds12 from "../assets/projects/pawsNeeds/12.jpg"
import pawsNeeds13 from "../assets/projects/pawsNeeds/13.jpg"
import pawsNeeds14 from "../assets/projects/pawsNeeds/14.jpg"
import pawsNeeds15 from "../assets/projects/pawsNeeds/15.jpg"
import pawsNeeds16 from "../assets/projects/pawsNeeds/16.jpg"
import pawsNeeds17 from "../assets/projects/pawsNeeds/17.jpg"

import projectManager1 from "../assets/projects/project manager/1.png"
import projectManager2 from "../assets/projects/project manager/2.png"
import projectManager3 from "../assets/projects/project manager/3.png"
import projectManager4 from "../assets/projects/project manager/4.png"
import projectManager5 from "../assets/projects/project manager/5.png"
import projectManager6 from "../assets/projects/project manager/6.png"
import projectManager7 from "../assets/projects/project manager/7.png"

export const projects = [
  {
    id: 1,
    title: "1 / BlueVoyant M365 Security Analytics",
    image: blueVoyant1,
    alt: "BlueVoyant M365 Secure Score Analytics Platform",
    category: "Security Analytics",
    year: "2023",
    slug: "bluevoyant-m365-security-analytics",
    featured: true,
    
    description: "Privacy-first security analytics platform for Microsoft 365 Secure Score assessment. Enables BlueVoyant's clients to analyze their security data without sharing sensitive files.",
    
    longDescription: "A client-facing security analytics platform built for BlueVoyant (Microsoft Partner) to provide their enterprise clients with self-service M365 Secure Score analysis. The platform features a privacy-first architecture where sensitive security data never leaves the client's browser - files are processed entirely client-side while the backend handles only calculations. This approach allows organizations to analyze their Microsoft 365 security posture, track compliance recommendations, and generate reports without exposing confidential data to third parties.",
    
    mainImage: blueVoyant1,
    gallery: [
      blueVoyant1, blueVoyant2, blueVoyant3, blueVoyant4, 
      blueVoyant5, blueVoyant6, blueVoyant7
    ],
    
    technologies: [
      "React.js", "Context API", "Tailwind CSS", "Node.js", 
      "Express.js", "D3.js", "Chart.js", "Client-side CSV Processing"
    ],
    
    features: [
      "Privacy-first architecture - files never stored on backend servers",
      "Secure CSV upload and client-side processing for M365 Secure Score data",
      "Dual-panel analytics: Recommended Actions vs High Impact Recommended Actions",
      "Interactive data visualizations with gauge charts, donut charts, and bar graphs",
      "Advanced filtering system with multi-select options for recommendations",
      "Device risk analysis with breakdown by OS platform and management status",
      "Exposure analysis by security domain (High/Medium/Low risk levels)",
      "Client-side data export functionality for reports",
      "Real-time score calculations and category-based grouping",
      "Responsive data tables with sorting, pagination, and search",
      "Display toggle between individual client metrics and industry averages",
      "Color-coded status indicators matching Microsoft's security scoring system"
    ],
    
    challenges: [
      "Architecting secure data flow where sensitive files never touch the server",
      "Processing large M365 Secure Score CSV files entirely in the browser without performance issues",
      "Creating accurate filtering logic that properly categorizes recommended vs high-impact actions",
      "Building complex calculations in Node.js that operate on data structures without storing files",
      "Implementing color-coded status matching Microsoft's scoring system while handling inconsistent data",
      "Designing intuitive UI for non-technical users to analyze complex security data",
      "Debugging filtering issues (ensuring empty/non-color-coded rows excluded from high-impact counts)"
    ],
    
    results: [
      "Successfully deployed as client-facing tool for BlueVoyant's enterprise customers",
      "Zero data breaches - sensitive security data never exposed to BlueVoyant or servers",
      "Reduced security assessment report generation from hours to minutes",
      "Accurate processing and categorization of 190+ M365 security recommendations",
      "Enabled self-service analytics for multiple enterprise clients",
      "Client satisfaction with security model and functionality led to multi-phase engagement"
    ],
    
    client: "BlueVoyant (Microsoft Partner) - Client-Facing Tool",
    role: "Full Stack Developer (Freelance)",
    duration: "1 month (3 phases)",
    team: "Solo development with client collaboration via Zoom",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 2,
    title: "2 / Solar Panel Design Platform",
    image: dashboard1,
    alt: "Solar Panel Design and Estimation Tool",
    category: "Simulation Platform", 
    year: "2023",
    slug: "solar-panel-design-platform",
    featured: true,
    description: "OpenSolar-like tool for solar panel placement and energy estimation. Allows users to simulate panel placements, estimate energy production, and calculate cost efficiencies.",
    longDescription: "A comprehensive solar energy design platform that empowers users to create optimal solar installations. The tool combines 3D modeling, geographic data, and energy calculations to provide accurate estimates for solar projects. Used by solar installers and energy consultants across multiple markets.",
    mainImage: dashboard1,
    gallery: [
      dashboard1, dashboard2, dashboard3, dashboard4, dashboard5,
      dashboard6, dashboard7, dashboard8, dashboard9, dashboard10,
      dashboard11, dashboard12, dashboard13, dashboard14, dashboard15
    ],
    technologies: [
      "React.js", "Three.js", "Node.js", "MongoDB", 
      "Express.js", "Solar API", "Google Maps API", "PDF Generation"
    ],
    features: [
      "3D roof modeling and panel placement",
      "Shading analysis and optimization",
      "Energy production calculations", 
      "Cost-benefit analysis",
      "Weather data integration",
      "Automated proposal generation"
    ],
    challenges: [
      "Accurate 3D modeling of complex roof structures",
      "Real-time shading calculations",
      "Integration with multiple solar APIs",
      "Performance optimization for large installations"
    ],
    results: [
      "30% faster design process",
      "95% accuracy in energy predictions", 
      "50+ successful installations",
      "25% increase in conversion rates"
    ],
    client: "ENEFFIC",
    role: "Full Stack Developer", 
    duration: "6 months",
    team: "2 developers, 1 designer",
    status: "Production",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 3,
    title: "3 / Learning Management System",
    image: lms1,
    alt: "Developer Learning and Job Search Platform",
    category: "E-Learning Platform",
    year: "2021", 
    slug: "developer-lms-platform",
    featured: true,
    description: "Mobile learning and job search platform for new developers. Features real-time web scraping from 20+ websites with personalized recommendations and development tools.",
    longDescription: "A comprehensive learning ecosystem designed specifically for aspiring developers. The platform aggregates learning resources, job opportunities, and coding challenges from across the web, providing a one-stop solution for developer career growth. Features intelligent recommendations and progress tracking.",
    mainImage: lms1,
    gallery: [
      lms1, lms2, lms3, lms4, lms5, lms6,
      lms7, lms8, lms9, lms10, lms11, lms12
    ],
    technologies: [
      "Flutter", "Django", "Python", "BeautifulSoup", 
      "Selenium", "PostgreSQL", "Redis", "Celery"
    ],
    features: [
      "Real-time job scraping from 20+ sites",
      "Personalized learning recommendations",
      "Interactive coding challenges",
      "Progress tracking and analytics",
      "Resource bookmarking system", 
      "Community features and forums"
    ],
    challenges: [
      "Handling diverse website structures for scraping",
      "Building accurate recommendation algorithms",
      "Managing high-frequency data updates",
      "Creating engaging mobile learning experience"
    ],
    results: [
      "1000+ registered developers",
      "5000+ job listings scraped daily",
      "80% user engagement rate",
      "200+ successful job placements"
    ],
    client: "ATOMIC IT",
    role: "Full Stack Developer Intern",
    duration: "4 months", 
    team: "2 developers, 1 mentor",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 4,
    title: "4 / PawsNeeds Pet Services",
    image: pawsNeeds1,
    alt: "Cross-platform Pet Services Marketplace",
    category: "Mobile Application",
    year: "2022",
    slug: "pawsneeds-pet-services",
    featured: true,
    description: "Cross-platform pet services marketplace with geolocation, payment processing, and cloud integration. Comprehensive solution for pet care services.",
    longDescription: "A full-featured mobile marketplace connecting pet owners with service providers. The app handles everything from dog walking and grooming to veterinary appointments and pet boarding. Built with React Native for cross-platform compatibility and integrated with cloud services for scalability.",
    mainImage: pawsNeeds1,
    gallery: [
      pawsNeeds1, pawsNeeds2, pawsNeeds3, pawsNeeds4, pawsNeeds5,
      pawsNeeds6, pawsNeeds7, pawsNeeds8, pawsNeeds9, pawsNeeds10,
      pawsNeeds11, pawsNeeds12, pawsNeeds13, pawsNeeds14, pawsNeeds15,
      pawsNeeds16, pawsNeeds17
    ],
    technologies: [
      "React Native", "Expo", "Node.js", "MongoDB", 
      "Stripe API", "Google Maps API", "AWS S3", "Push Notifications"
    ],
    features: [
      "Service provider matching",
      "Real-time GPS tracking",
      "Secure payment processing",
      "Rating and review system",
      "Appointment scheduling",
      "Multi-service support (walking, grooming, boarding, etc.)"
    ],
    challenges: [
      "Building trust between users and providers",
      "Implementing reliable location tracking",
      "Managing complex booking workflows", 
      "Ensuring secure payment processing"
    ],
    results: [
      "500+ active service providers",
      "2000+ completed bookings",
      "4.8/5 average user rating",
      "95% booking completion rate"
    ],
    client: "Freelance Project",
    role: "Lead Mobile Developer",
    duration: "5 months",
    team: "Solo development",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 5,
    title: "5 / 3D Project Management System",
    image: projectManager1,
    alt: "3D IFC Viewer Project Management Platform",
    category: "Project Management",
    year: "2023",
    slug: "3d-project-management-system",
    featured: false,
    description: "Project management system with custom IFC viewer for viewing, editing, and measuring 3D plans exported from Revit. Features real-time collaboration and file management.",
    longDescription: "An advanced project management platform designed for architecture and construction teams. The system integrates 3D model viewing with traditional project management tools, allowing teams to collaborate on complex architectural projects with visual context. Features custom IFC viewer with annotation tools.",
    mainImage: projectManager1,
    gallery: [
      projectManager1, projectManager2, projectManager3, projectManager4,
      projectManager5, projectManager6, projectManager7
    ],
    technologies: [
      "React.js", "Three.js", "IFC.js", "NestJS", "TypeScript",
      "Socket.IO", "PostgreSQL", "Docker", "Nginx"
    ],
    features: [
      "3D IFC model viewer with 60fps performance",
      "Real-time collaboration tools",
      "Annotation and measurement tools",
      "Version control for 3D models",
      "Budget calculation system",
      "Role-based access control"
    ],
    challenges: [
      "Optimizing 3D rendering performance",
      "Handling large architectural files",
      "Implementing real-time collaboration",
      "Building intuitive 3D interaction tools"
    ],
    results: [
      "60fps performance with complex models",
      "50% faster project review cycles",
      "Real-time collaboration for 20+ users",
      "30% reduction in project coordination time"
    ],
    client: "ATOMIC IT",
    role: "Full Stack Developer",
    duration: "4 months",
    team: "3 developers, 1 designer",
    status: "Production",
    liveUrl: null,
    githubUrl: null
  }
];

// Featured projects for homepage
export const selected_projects = projects.filter(project => project.featured);

// Projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Get project by slug
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

// Get next project
export const getNextProject = (currentProjectId) => {
  const currentIndex = projects.findIndex(project => project.id === currentProjectId);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

// Project categories
export const projectCategories = [
  "Data Visualization",
  "Simulation Platform", 
  "E-Learning Platform",
  "Mobile Application",
  "Project Management"
];

// Project statistics
export const projectStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter(p => p.status === "Completed").length,
  productionProjects: projects.filter(p => p.status === "Production").length,
  totalClients: [...new Set(projects.map(p => p.client))].length
};