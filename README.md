# Saber Mohamed - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer specializing in React, Node.js, and 3D visualization technologies.

## Live Demo

🔗 **[View Live Portfolio](https://saber.dev)**

## About

This portfolio represents my journey as a Full Stack Developer with expertise in building complex, high-performance UIs and scalable APIs. The site features a clean, modern design with smooth animations and optimal performance across all devices.

### Key Highlights
- **Modern Tech Stack**: Built with React 18, Vite, and SCSS
- **Professional Routing**: Enterprise-level React Router implementation
- **SEO Optimized**: Complete meta tags, structured data, and social media optimization
- **Performance Focused**: Optimized for Core Web Vitals and accessibility
- **Responsive Design**: Mobile-first approach with smooth animations
- **Error Handling**: Comprehensive error boundaries and 404 pages

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **React Router 6** - Client-side routing with advanced patterns
- **SCSS** - Modular styling with CSS custom properties
- **Vite** - Fast build tool and development server

### Development Tools
- **ESLint** - Code quality and consistency
- **React Error Boundary** - Graceful error handling
- **React Helmet Async** - Dynamic SEO meta tag management

### Design & UX
- **Custom animations** - Smooth transitions and micro-interactions
- **Typography** - Carefully selected font combinations (Roxie Rossa, Inter, Roboto)
- **Responsive grid** - CSS Grid and Flexbox for optimal layouts
- **Dark/Light contrast** - Professional black and white theme

## Project Structure

```
├── public/                 # Static assets and SEO files
│   ├── favicon.ico
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Reusable components
│   │   ├── NavigationHeader/
│   │   ├── ContactFooter/
│   │   ├── ErrorFallback/
│   │   └── ScrollToTop/
│   ├── screens/           # Page components
│   │   ├── Main/          # Homepage with all sections
│   │   ├── ProjectList/   # Portfolio grid
│   │   ├── ProjectDetail/ # Individual project pages
│   │   ├── Contact/       # Contact page
│   │   └── NotFound/      # 404 page
│   ├── styles/
│   │   └── global.scss    # Global styles and variables
│   ├── App.jsx           # Main router configuration
│   └── index.jsx         # Application entry point
└── package.json
```

## Features

### Homepage
- **Hero Section**: Large typography with animated logo
- **About Section**: Professional summary and work experience timeline
- **Services**: Technical capabilities and expertise areas
- **Projects**: Featured work with hover effects
- **Contact**: Direct contact information and social links

### Project Pages
- **Portfolio Grid**: Responsive project showcase with filtering
- **Project Details**: In-depth case studies with galleries
- **Navigation**: Smooth transitions between projects

### Technical Features
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks
- **Scroll Management**: Auto-scroll to top on route changes
- **SEO Optimization**: Complete meta tags, Open Graph, and structured data
- **Performance**: Optimized images, fonts, and lazy loading
- **Accessibility**: Semantic HTML, proper contrast, and keyboard navigation

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sabermed/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Loading Speed**: Fast initial load with strategic preloading

## SEO & Analytics

- **Structured Data**: JSON-LD schema for rich snippets
- **Social Media**: Optimized Open Graph and Twitter Card meta tags
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Proper crawler instructions
- **Google Analytics**: Ready for tracking integration

## Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile**: iOS Safari 13+, Chrome Mobile 80+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Deployment

The site is optimized for deployment on modern hosting platforms:

- **Vercel** (recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**

### Build Configuration

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Commit changes** (`git commit -am 'Add improvement'`)
4. **Push to branch** (`git push origin feature/improvement`)
5. **Open a Pull Request**

## License

This project is for personal portfolio use. The code structure and components can be used as reference, but please don't copy the content or design directly.

## Contact

**Saber Mohamed**
- **Email**: sabermed66@gmail.com
- **Phone**: (+216) 29-462-796
- **Location**: Mahdia, Tunisia
- **LinkedIn**: [linkedin.com/in/sabermed](https://linkedin.com/in/sabermed)
- **GitHub**: [github.com/sabermed](https://github.com/sabermed)

---

**Built with passion by Saber Mohamed** - Full Stack Developer specializing in React, Node.js, and modern web technologies.