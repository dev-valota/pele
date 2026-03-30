import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  isActive: boolean;
  isCompleted: boolean;
  duration: number;
  isPaused: boolean;
}

export default function ProgressBar({ isActive, isCompleted, duration, isPaused }: ProgressBarProps) {
  const [progress, setProgress] = useState(isCompleted ? 100 : 0);

  useEffect(() => {
    if (isCompleted) {
      setProgress(100);
      return;
    }
    
    if (!isActive) {
      setProgress(0);
      return;
    }

    // Active state - animate progress
    let start = Date.now();
    let animationFrame: number;
    let currentProgress = 0;

    const animate = () => {
      if (isPaused) {
        // Just update start time so it resumes smoothly from where it paused
        start = Date.now() - (currentProgress / 100) * duration;
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const elapsed = Date.now() - start;
      currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isActive, isCompleted, duration, isPaused]);

  return (
    <div className="h-[2px] flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
      <div 
        className="h-full bg-white rounded-full transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
