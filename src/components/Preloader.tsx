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

    // Set preloader duration - reduced for faster transition
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Start fade out immediately
      setTimeout(() => {
        // Restore body styles
        document.body.style.overflow = originalOverflow;
        document.body.style.pointerEvents = originalPointerEvents;
        onComplete();
      }, 300); // Reduced from 500 to 300ms for faster transition
    }, 1800); // Reduced from 2200 to 1800ms

    return () => {
      clearTimeout(timer);
      // Cleanup styles in case component unmounts early
      document.body.style.overflow = originalOverflow;
      document.body.style.pointerEvents = originalPointerEvents;
    };
  }, [onComplete]);

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