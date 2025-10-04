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

import lmsEnglish1 from "../assets/projects/lms-english/1.png"
import lmsEnglish2 from "../assets/projects/lms-english/2.png"
import lmsEnglish3 from "../assets/projects/lms-english/3.png"
import lmsEnglish4 from "../assets/projects/lms-english/4.png"
import lmsEnglish5 from "../assets/projects/lms-english/5.png"
import lmsEnglish6 from "../assets/projects/lms-english/6.png"
import lmsEnglish7 from "../assets/projects/lms-english/7.png"
import lmsEnglish8 from "../assets/projects/lms-english/8.png"
import lmsEnglish9 from "../assets/projects/lms-english/9.png"
import lmsEnglish10 from "../assets/projects/lms-english/10.png"
import lmsEnglish11 from "../assets/projects/lms-english/11.png"
import lmsEnglish12 from "../assets/projects/lms-english/12.png"
import lmsEnglish13 from "../assets/projects/lms-english/13.png"
import lmsEnglish14 from "../assets/projects/lms-english/14.png"
import lmsEnglish15 from "../assets/projects/lms-english/15.png"

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
    title: "1 / Event Gamification & Engagement Platform",
    image: dashboard1,
    alt: "Dual-Sided Event Gamification Platform - Admin & User Portals",
    category: "Enterprise Software", 
    year: "2022",
    slug: "event-gamification-platform",
    featured: true,
    
    description: "Complete event gamification ecosystem with dual portals: admin dashboard for event organizers to manage activities/badges/rewards, and user portal for participants to track progress, earn achievements, and redeem rewards.",
    
    longDescription: "A comprehensive dual-sided event gamification platform built for a Saudi Arabian IT company and their client to maximize participation and engagement at organizational events. The platform consists of two distinct interfaces: an advanced admin dashboard where event organizers create activities, design badge systems, manage rewards, and track analytics; and a polished user portal where participants view upcoming events, track their achievements, compete on leaderboards, and redeem rewards. The system bridges event management with gamification psychology, driving measurable increases in attendance and engagement through points, badges, tiered progression, and tangible rewards.",
    
    mainImage: dashboard1,
    gallery: [
      dashboard1, dashboard1, dashboard2, dashboard3, dashboard4, dashboard5,
      dashboard6, dashboard7, dashboard8, dashboard9, dashboard10,
      dashboard11, dashboard12, dashboard13, dashboard14, dashboard15,
    ],
    
    technologies: [
      "React.js", "Node.js", "MongoDB", "Express.js",
      "Chart.js", "D3.js", "Socket.IO", "Redux", "JWT Authentication",
      "CSV Processing", "Image Upload", "Real-time Notifications",
      "Responsive Design", "GSAP Animations"
    ],
    
    features: [
      "Comprehensive admin dashboard with real-time statistics and data visualizations",
      "Activities management - create point-earning activities tied to specific events",
      "Custom badge system with image upload, point thresholds, tier progression, and status controls",
      "Rewards catalog with product images, descriptions, and point-based redemption",
      "Advanced user management with persona categorization (Student, Teacher, Artist, Writer, etc.)",
      "Multi-tier leaderboard showing top performers by points, badges, and rewards earned",
      "Detailed user profiles with activity history, badge collections, and admin comment threads",
      "Bulk user import/export via CSV with validation and error handling",
      "User access control with blacklisting and suspension capabilities",
      "Integrated support ticket system (Points, Rewards, Complaints, Suggestions categories)",
      "Clean user dashboard showing personal stats (rank, badges, points, rewards)",
      "Interactive leaderboard with current placement and top performers",
      "Badge progression tracker with tier visualization and requirements",
      "Events browser with filtering by type, date, and city",
      "Personal notification preferences and profile management",
      "Smooth animations and micro-interactions throughout the UI",
      "Mobile-responsive design for on-site event access"
    ],
    
    challenges: [
      "Translating complex Figma designs into pixel-perfect React components across two distinct portals",
      "Implementing smooth animations and micro-interactions without impacting performance",
      "Building reusable component library to maintain consistency across admin and user interfaces",
      "Ensuring responsive behavior across desktop, tablet, and mobile devices",
      "Coordinating with backend team to define and implement API contracts",
      "Handling complex state management for real-time leaderboards and notifications",
      "Optimizing rendering performance for data-heavy admin dashboard tables and charts",
      "Implementing CSV upload UI with progress indicators and error feedback",
      "Creating intuitive form validation and error handling across numerous admin forms",
      "Meeting tight deadline while maintaining code quality and documentation"
    ],
    
    results: [
      "Successfully delivered complete frontend on schedule, enabling project launch on time",
      "Achieved 90%+ Google Lighthouse performance scores on both portals",
      "Pixel-perfect implementation matching Figma designs across all 50+ screens",
      "Smooth animations and transitions enhancing user experience without performance impact",
      "Helped backend team complete remaining API endpoints to meet project deadline",
      "Zero critical bugs reported in production frontend after launch",
      "Mobile-responsive design supporting seamless on-site event participation",
      "Deployed platform now managing 12,000+ active users across multiple events"
    ],
    
    client: "IT Company (Saudi Arabia) - B2B Project",
    role: "Frontend Developer + Backend Support", 
    duration: "6 months",
    team: "Frontend lead + Backend team (3-4 developers) + 1 designer",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 2,
    title: "2 / Learning Management System",
    image: lms1,
    alt: "E-Learning Platform with Course Management",
    category: "E-Learning Platform",
    year: "2022", 
    slug: "learning-management-system",
    featured: true,
    
    description: "Full-featured learning platform enabling instructors to create courses with mixed content types (videos, articles, quizzes, external resources) and students to enroll, track progress, and earn certificates.",
    
    longDescription: "A comprehensive e-learning platform built for educational content delivery. The system allows instructors to create structured courses with multiple content types including video lectures, reading materials, interactive quizzes, and embedded external resources. Students can browse courses, enroll, track their learning progress, take assessments, and earn completion certificates. Features responsive design for mobile learning and real-time progress tracking.",
    
    mainImage: lms1,
    gallery: [
      lms1, lms2, lms3, lms4, lms5, lms6,
      lms7, lms8, lms9, lms10, lms11, lms12
    ],
    
    technologies: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js",
      "MongoDB", "JWT Authentication", "Video Streaming", "PDF Generation"
    ],
    
    features: [
      "Multiple content types: video lessons, articles, quizzes, external resources (iframe embeds)",
      "Student enrollment and course access management",
      "Interactive quiz system with multiple question types and instant feedback",
      "Progress tracking showing completion percentage per course and lesson",
      "Certificate generation upon course completion with PDF download",
      "Course browsing with filtering by category, difficulty level, and rating",
      "Responsive video player with playback controls and quality selection",
    ],
    
    challenges: [
      "Implementing flexible content playlist supporting videos, text, quizzes, and iframe embeds",
      "Building reliable video streaming with progress tracking and resume functionality",
      "Creating quiz engine handling multiple question types with randomization",
      "Designing efficient database schema for complex course structures",
      "Implementing certificate generation with custom templates and user data",
      "Optimizing video delivery and bandwidth usage for mobile users"
    ],
    
    results: [
      "Successfully deployed with 50+ courses across multiple categories",
      "500+ active students with average 70% course completion rate",
      "Smooth video streaming with minimal buffering issues",
      "4.5/5 average platform rating from user feedback",
      "Mobile-responsive design supporting learning on any device"
    ],
    
    client: "IT Company (Saudi Arabia) - B2B Project",
    role: "Full Stack Developer",
    duration: "3 months",
    team: "Solo development with client collaboration",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 3,
    title: "3 / Learning Management System v2",
    image: lmsEnglish1,
    alt: "Modern E-Learning Platform - English Version",
    category: "E-Learning Platform",
    year: "2022", 
    slug: "learning-management-system-v2",
    featured: true,
    
    description: "Redesigned English version of the learning platform with modern UI/UX, featuring course management, interactive quizzes, video streaming, and student progress tracking.",
    
    longDescription: "An enhanced version of the learning management system, completely redesigned with a modern purple-gradient interface and English localization. Built for a different client with improved user experience, this platform offers comprehensive course creation tools, student enrollment management, and interactive learning features. The system supports multiple content types including video lectures, text articles, quizzes, and external resources, providing a complete digital learning solution.",
    
    mainImage: lmsEnglish1,
    gallery: [
      lmsEnglish1, lmsEnglish2, lmsEnglish3, lmsEnglish4, lmsEnglish5, lmsEnglish6,
      lmsEnglish7, lmsEnglish8, lmsEnglish9, lmsEnglish10, lmsEnglish11, lmsEnglish12, 
      lmsEnglish13, lmsEnglish14, lmsEnglish15
    ],
    
    technologies: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js",
      "MongoDB", "JWT Authentication", "Video Streaming", "Responsive Design"
    ],
    
    features: [
      "Modern gradient UI design with purple/blue color scheme",
      "Complete authentication system (Login, Sign Up, Password Reset)",
      "Course browsing with category filtering (Innovation, Design Thinking, User Experience Design)",
      "Detailed course pages with introduction, content, and FAQ sections",
      "Course enrollment system with registration confirmation",
      "Structured course curriculum with expandable sections and lessons",
      "Interactive quiz system with multiple-choice questions and instant feedback",
      "Progress tracking showing completion percentage per course",
      "Video player integration with course preview functionality",
      "Student dashboard showing enrolled courses and learning progress",
      "Course statistics display (1000+ Students, 15+ Available Courses, 5+ Categories)",
      "Skills tagging system showing competencies gained from courses",
      "Contact form for student support inquiries",
      "Responsive design optimized for desktop and mobile learning",
      "FAQ accordion sections for common course questions"
    ],
    
    challenges: [
      "Redesigning the entire UI while maintaining familiar LMS functionality",
      "Implementing smooth transitions and micro-interactions for better UX",
      "Creating a flexible course structure supporting various content types",
      "Building an intuitive quiz interface with real-time validation",
      "Optimizing video delivery for different bandwidth conditions",
      "Ensuring responsive design works seamlessly across all devices",
      "Localizing all content from Arabic to English for international audience"
    ],
    
    results: [
      "Successfully delivered redesigned platform with modern, appealing interface",
      "Improved user engagement through enhanced UI/UX design",
      "Clean, professional design suitable for corporate training programs",
      "Positive client feedback on design modernization",
      "Smooth course enrollment and learning experience",
      "Mobile-responsive platform supporting learning on any device"
    ],
    
    client: "IT Company (Saudi Arabia) - B2B Project (v2 for international client)",
    role: "Full Stack Developer",
    duration: "1 month",
    team: "Solo development with client collaboration",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 4,
    title: "4 / Multi-Platform Management Dashboard",
    image: projectManager1,
    alt: "Centralized Platform Management Dashboard",
    category: "Management Platform",
    year: "2022",
    slug: "multi-platform-management-dashboard",
    featured: true,
    
    description: "Centralized dashboard providing unified access to multiple client platforms (CMS, LMS, and custom modules) with aggregated analytics and single sign-on functionality.",
    
    longDescription: "A unified management dashboard built as a wrapper/portal for the Saudi IT company's multiple client platforms. This central hub allows the client to access their Event Gamification Platform, Learning Management Systems, and other modules from a single interface. The dashboard aggregates key metrics across all platforms, showing total clients, projects, and users, while providing seamless navigation between different systems with single sign-on capabilities.",
    
    mainImage: projectManager1,
    gallery: [
      projectManager1, projectManager2, projectManager3, projectManager4, projectManager5, projectManager6, projectManager7
    ],
    
    technologies: [
      "React.js", "Node.js", "MongoDB", "Express.js",
      "JWT Authentication", "Chart.js", "Redux", 
      "Single Sign-On (SSO)", "Responsive Design"
    ],
    
    features: [
      "Unified dashboard showing all available platforms (CMS, LMS, Modules 3-6)",
      "Platform selection interface with visual cards and key statistics per platform",
      "Aggregated analytics showing total clients, projects, and users across all systems",
      "Single sign-on (SSO) functionality for seamless platform switching",
      "Centralized authentication managing access to multiple platforms",
      "Real-time statistics with growth indicators and trend visualizations",
      "Platform filtering and search capabilities",
      "Consistent navigation between integrated platforms",
      "Client profile management accessible from central dashboard",
      "Empty state screens prompting platform creation",
      "Responsive design for desktop and tablet access",
      "Visual consistency with the Event Gamification and LMS platforms"
    ],
    
    challenges: [
      "Implementing secure single sign-on across multiple separate platforms",
      "Aggregating statistics from different databases and systems in real-time",
      "Maintaining consistent UI/UX across the wrapper and all integrated platforms",
      "Handling session management when users switch between platforms",
      "Building flexible architecture to accommodate future platform additions",
      "Ensuring seamless navigation without repeated authentication",
      "Creating intuitive platform selection interface for non-technical users"
    ],
    
    results: [
      "Successfully deployed as centralized access point for all client platforms",
      "Reduced platform switching friction with single sign-on implementation",
      "Client can monitor all platform metrics from one dashboard",
      "Consistent branding and navigation across all integrated systems",
      "Streamlined user management across multiple platforms",
      "Easy scalability for adding new platforms to the dashboard"
    ],
    
    client: "IT Company (Saudi Arabia) - B2B Project",
    role: "Full Stack Developer",
    duration: "2 months",
    team: "Solo development with client collaboration",
    status: "Completed",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 5,
    title: "5 / PawsNeeds Pet Services",
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
    id: 6,
    title: "6 / BlueVoyant M365 Security Analytics",
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
  // {
  //   id: 6,
  //   title: "2 / Solar Panel Design Platform",
  //   image: dashboard1,
  //   alt: "Solar Panel Design and Estimation Tool",
  //   category: "Simulation Platform", 
  //   year: "2023",
  //   slug: "solar-panel-design-platform",
  //   featured: true,
  //   description: "OpenSolar-like tool for solar panel placement and energy estimation. Allows users to simulate panel placements, estimate energy production, and calculate cost efficiencies.",
  //   longDescription: "A comprehensive solar energy design platform that empowers users to create optimal solar installations. The tool combines 3D modeling, geographic data, and energy calculations to provide accurate estimates for solar projects. Used by solar installers and energy consultants across multiple markets.",
  //   mainImage: dashboard1,
  //   gallery: [
  //     dashboard1, dashboard2, dashboard3, dashboard4, dashboard5,
  //     dashboard6, dashboard7, dashboard8, dashboard9, dashboard10,
  //     dashboard11, dashboard12, dashboard13, dashboard14, dashboard15
  //   ],
  //   technologies: [
  //     "React.js", "Three.js", "Node.js", "MongoDB", 
  //     "Express.js", "Solar API", "Google Maps API", "PDF Generation"
  //   ],
  //   features: [
  //     "3D roof modeling and panel placement",
  //     "Shading analysis and optimization",
  //     "Energy production calculations", 
  //     "Cost-benefit analysis",
  //     "Weather data integration",
  //     "Automated proposal generation"
  //   ],
  //   challenges: [
  //     "Accurate 3D modeling of complex roof structures",
  //     "Real-time shading calculations",
  //     "Integration with multiple solar APIs",
  //     "Performance optimization for large installations"
  //   ],
  //   results: [
  //     "30% faster design process",
  //     "95% accuracy in energy predictions", 
  //     "50+ successful installations",
  //     "25% increase in conversion rates"
  //   ],
  //   client: "Eneffic",
  //   role: "Full Stack Developer", 
  //   duration: "6 months",
  //   team: "2 developers, 1 designer",
  //   status: "Production",
  //   liveUrl: null,
  //   githubUrl: null
  // },
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