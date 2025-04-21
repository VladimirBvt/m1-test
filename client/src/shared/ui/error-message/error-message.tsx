import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
                                                            message = 'Something went wrong',
                                                            onRetry
                                                          }) => {
  return (
    <div className="error-message">
      <h2>Error</h2>
      <p>{message}</p>
      <div className="error-actions">
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            Try Again
          </button>
        )}
        <Link to="/" className="home-link">
          Back to List
        </Link>
      </div>
    </div>
  );
};
