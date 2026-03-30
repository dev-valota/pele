import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { stories } from '../data/stories';
import StoryCard from './StoryCard';
import ProgressBar from './ProgressBar';

const STORY_DURATION = 12000; // 12 seconds per story to give time to read

export default function StoriesViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgressKey(prev => prev + 1);
    }
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgressKey(prev => prev + 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused) return;
    
    // Don't auto-advance if we're on the last slide
    if (currentIndex === stories.length - 1) return;

    const timer = setTimeout(() => {
      goToNext();
    }, STORY_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, goToNext]);

  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-black flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-md h-full bg-neutral-900 shadow-2xl overflow-hidden md:h-[90dvh] md:rounded-xl md:border md:border-white/10">
        {/* Progress Bar Container */}
        <div className="absolute top-0 left-0 right-0 z-50 px-3 pt-5 pb-3 flex gap-1.5 bg-gradient-to-b from-black/80 to-transparent">
          {stories.map((_, index) => (
            <ProgressBar 
              key={`${index}-${progressKey}`}
              isActive={index === currentIndex}
              isCompleted={index < currentIndex}
              duration={STORY_DURATION}
              isPaused={isPaused}
            />
          ))}
        </div>

        {/* Story Card */}
        <AnimatePresence mode="wait">
          <StoryCard 
            key={currentIndex} 
            story={stories[currentIndex]} 
          />
        </AnimatePresence>

        {/* Navigation Overlays */}
        <div className="absolute inset-0 z-40 flex">
          <div 
            className="w-1/3 h-full cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            onPointerDown={() => setIsPaused(true)}
            onPointerUp={() => setIsPaused(false)}
            onPointerLeave={() => setIsPaused(false)}
          />
          <div 
            className="w-2/3 h-full cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            onPointerDown={() => setIsPaused(true)}
            onPointerUp={() => setIsPaused(false)}
            onPointerLeave={() => setIsPaused(false)}
          />
        </div>
      </div>
    </div>
  );
}
