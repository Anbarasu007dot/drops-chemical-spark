import { useState, useEffect } from 'react';
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Set preloader duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        // Re-enable interaction
        document.body.style.overflow = 'unset';
        document.body.style.pointerEvents = 'auto';
        onComplete();
      }, 500); // Match the CSS transition duration
    }, 2200); // Show preloader for 2.2 seconds

    return () => {
      clearTimeout(timer);
      // Cleanup styles
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`preloader-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className="atom-spinner">
        <div className="nucleus"></div>
        <div className="orbit orbit-1">
          <div className="electron"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="electron"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="electron"></div>
        </div>
      </div>
    </div>
  );
};