import React from 'react';
import './ErrorFallback.scss';

/**
 * Error Fallback component for React Error Boundary
 * Displays when an unexpected error occurs in the app
 */
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback">
      <div className="container">
        <div className="error-content">
          <h1>Something went wrong</h1>
          <p>
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try refreshing the page or contact us if the problem persists.
          </p>
          
          {/* Show error details in development */}
          {process.env.NODE_ENV === 'development' && (
            <details className="error-details">
              <summary>Error Details (Development)</summary>
              <pre>{error.message}</pre>
              <pre>{error.stack}</pre>
            </details>
          )}
          
          <div className="error-actions">
            <button 
              onClick={resetErrorBoundary}
              className="retry-button"
            >
              Try Again
            </button>
            <a href="/" className="home-button">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;