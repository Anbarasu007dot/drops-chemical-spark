
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
    const timer = setTimeout(() => {
      // Re-enable interaction
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(timer);
      // Cleanup styles
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [onComplete]);

  return (
    <div className="preloader-container">
      {/* Atom spin animation */}
      <div className="atom-spinner">
        <div className="atom-nucleus"></div>
        <div className="atom-orbit atom-orbit-1"></div>
        <div className="atom-orbit atom-orbit-2"></div>
        <div className="atom-orbit atom-orbit-3"></div>
      </div>
    </div>
  );
};
