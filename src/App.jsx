import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Import pages/screens
import Main from './screens/Main';
import ProjectList from './screens/ProjectList';
import ProjectDetail from './screens/ProjectDetail';
import Contact from './screens/Contact';

// Import components
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound from './screens/NotFound';

// Import global styles
import './styles/global.scss';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          // Log error to monitoring service (e.g., Sentry)
          console.error('Application Error:', error, errorInfo);
        }}
      >
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Main />} />
            
            {/* Works/Projects routes */}
            <Route path="/works" element={<ProjectList />} />
            <Route path="/projects" element={<Navigate to="/works" replace />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            
            {/* Contact route */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Legacy redirects - maintain SEO if you had old URLs */}
            <Route path="/portfolio" element={<Navigate to="/works" replace />} />
            <Route path="/work/:slug" element={<Navigate to="/project/$1" replace />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;