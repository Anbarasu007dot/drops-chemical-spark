
import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [animationPhase, setAnimationPhase] = useState('initial');

  useEffect(() => {
    // Check if preloader should run (only once per session)
    const hasSeenPreloader = sessionStorage.getItem('preloader-shown');
    
    if (hasSeenPreloader) {
      // Skip animation if already shown this session
      onComplete();
      return;
    }

    // Mark preloader as shown for this session
    sessionStorage.setItem('preloader-shown', 'true');

    // Disable scrolling and interaction during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Animation sequence inspired by reference website
    const fadeInTimer = setTimeout(() => {
      setAnimationPhase('line-visible');
    }, 300);

    const expandTimer = setTimeout(() => {
      setAnimationPhase('expanding');
    }, 1000); // Line visible for 700ms

    const splitTimer = setTimeout(() => {
      setAnimationPhase('splitting');
    }, 1500); // Expand for 500ms

    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
      // Re-enable interaction
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
      onComplete();
    }, 3000); // Total duration

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

      {/* Overlay for smooth transition */}
      <div 
        className={`preloader-overlay ${
          animationPhase === 'splitting' ? 'overlay-fade' : ''
        }`}
      />
    </div>
  );
};
