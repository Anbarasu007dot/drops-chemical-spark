
import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [animationPhase, setAnimationPhase] = useState('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('splitting');
    }, 500);

    const timer2 = setTimeout(() => {
      setAnimationPhase('complete');
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (animationPhase === 'complete') {
    return null;
  }

  return (
    <div className="preloader-container">
      <div 
        className={`preloader-line ${animationPhase === 'splitting' ? 'split' : ''}`}
      />
      <div 
        className={`preloader-panel preloader-panel-left ${animationPhase === 'splitting' ? 'slide-left' : ''}`}
      />
      <div 
        className={`preloader-panel preloader-panel-right ${animationPhase === 'splitting' ? 'slide-right' : ''}`}
      />
    </div>
  );
};
