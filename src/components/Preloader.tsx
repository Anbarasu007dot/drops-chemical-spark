
import { useState, useEffect } from 'react';
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  useEffect(() => {
    // Disable scrolling and interaction during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Simple timer for preloader duration
    const completeTimer = setTimeout(() => {
      // Re-enable interaction
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
      onComplete();
    }, 2700); // Total duration

    return () => {
      clearTimeout(completeTimer);
      // Cleanup styles
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [onComplete]);

  return (
    <div className="preloader-container">
      {/* Spinning atom animation */}
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
