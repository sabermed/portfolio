import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader';
import './NotFound.scss';

/**
 * 404 Not Found page component
 * Displays when user navigates to a non-existent route
 */
function NotFound() {
  return (
    <div className="not-found-page">
      <NavigationHeader />
      
      <main className="main-content">
        <div className="container">
          <div className="not-found-content">
            <div className="error-code">404</div>
            <h1>Page Not Found</h1>
            <p>
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            <div className="not-found-actions">
              <Link to="/" className="home-button">
                Go Home
              </Link>
              <Link to="/works" className="works-button">
                View Projects
              </Link>
            </div>
            
            <div className="suggestions">
              <h3>You might be looking for:</h3>
              <ul>
                <li><Link to="/works">My Projects</Link></li>
                <li><Link to="/contact">Contact Information</Link></li>
                <li><Link to="/#about">About Me</Link></li>
                <li><Link to="/#services">Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;