import { useState, useEffect } from 'react';
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling and interaction during preloader
    const originalOverflow = document.body.style.overflow;
    const originalPointerEvents = document.body.style.pointerEvents;
    
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Set preloader duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        // Restore body styles
        document.body.style.overflow = originalOverflow;
        document.body.style.pointerEvents = originalPointerEvents;
        onComplete();
      }, 500); // Match the CSS transition duration
    }, 2200); // Show preloader for 2.2 seconds

    return () => {
      clearTimeout(timer);
      // Cleanup styles in case component unmounts early
      document.body.style.overflow = originalOverflow;
      document.body.style.pointerEvents = originalPointerEvents;
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