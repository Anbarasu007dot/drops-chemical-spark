
import { useState, useEffect } from 'react';
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [animationPhase, setAnimationPhase] = useState('initial');

  useEffect(() => {
    // Disable scrolling and interaction during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Animation sequence matching reference website
    const fadeInTimer = setTimeout(() => {
      setAnimationPhase('line-visible');
    }, 500);

    const expandTimer = setTimeout(() => {
      setAnimationPhase('expanding');
    }, 1500); // Line visible for 1000ms

    const splitTimer = setTimeout(() => {
      setAnimationPhase('splitting');
    }, 2500); // Expand for 1000ms

    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
      // Re-enable interaction
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
      onComplete();
    }, 2700); // Total duration

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(expandTimer);
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
      // Cleanup styles
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [onComplete]);

  if (animationPhase === 'complete') {
    return null;
  }

  return (
    <div className="preloader-container">
      {/* Central element that grows and splits */}
      <div 
        className={`preloader-core ${
          animationPhase === 'line-visible' ? 'core-fade-in' : ''
        } ${
          animationPhase === 'expanding' ? 'core-expand' : ''
        } ${
          animationPhase === 'splitting' ? 'core-split' : ''
        }`}
      />
      
      {/* Left sliding panel */}
      <div 
        className={`preloader-panel preloader-panel-left ${
          animationPhase === 'splitting' ? 'slide-left' : ''
        }`}
      />
      
      {/* Right sliding panel */}
      <div 
        className={`preloader-panel preloader-panel-right ${
          animationPhase === 'splitting' ? 'slide-right' : ''
        }`}
      />
    </div>
  );
};
