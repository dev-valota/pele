import React from 'react';
import { motion } from 'framer-motion';
import { Story } from '../data/stories';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`absolute inset-0 w-full h-full flex flex-col ${story.bgClass}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={story.bgImage}
          alt={story.title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col pt-16 px-7 pb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-auto"
        >
          <h2 className="text-white/60 uppercase tracking-[0.25em] text-[11px] font-medium mb-5 border-b border-white/10 pb-3 inline-block">
            {story.title}
          </h2>
          <h1 className="text-white font-serif text-[2.6rem] md:text-5xl font-bold leading-[1.1] drop-shadow-2xl">
            {story.headline}
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-auto"
        >
          {story.quote && (
            <p className="text-white/95 font-serif italic text-xl md:text-2xl mb-8 border-l-[3px] border-[#D4AF37] pl-5 py-1 drop-shadow-md">
              "{story.quote}"
            </p>
          )}

          <p className="text-white/85 text-[1rem] md:text-lg leading-[1.75] font-sans font-light drop-shadow-md tracking-wide">
            {story.content}
          </p>

          {story.statBadge && (
            <div className="mt-8 inline-flex items-center">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-semibold px-5 py-2.5 rounded-full text-sm shadow-[0_4px_20px_rgba(212,175,55,0.35)] tracking-wide">
                {story.statBadge}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
