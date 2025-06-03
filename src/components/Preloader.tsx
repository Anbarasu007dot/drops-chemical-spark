
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

    // Animation sequence - slower timing
    const fadeInTimer = setTimeout(() => {
      setAnimationPhase('line-visible');
    }, 200);

    const pauseTimer = setTimeout(() => {
      setAnimationPhase('splitting');
    }, 1200); // Longer pause: 200ms fade + 800ms pause + 200ms buffer

    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
      // Re-enable interaction
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
      onComplete();
    }, 3500); // Total animation duration - much slower

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(pauseTimer);
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
      {/* Central vertical line */}
      <div 
        className={`preloader-line ${
          animationPhase === 'line-visible' || animationPhase === 'splitting' 
            ? 'line-fade-in' : ''
        } ${
          animationPhase === 'splitting' ? 'line-split' : ''
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
