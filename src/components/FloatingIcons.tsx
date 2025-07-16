import React from 'react';
import { Code, Coffee, WholeWord as Wordpress, Brain, Camera, Dumbbell, Database, Palette } from 'lucide-react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Code, color: 'text-cyan-400', tooltip: 'Python Whisperer', delay: 0 },
    { Icon: Coffee, color: 'text-orange-400', tooltip: 'Java Artisan', delay: 0.5 },
    { Icon: Wordpress, color: 'text-blue-400', tooltip: 'WordPress Wizard', delay: 1 },
    { Icon: Brain, color: 'text-purple-400', tooltip: 'AI Dreamer', delay: 1.5 },
    { Icon: Camera, color: 'text-pink-400', tooltip: 'Visual Storyteller', delay: 2 },
    { Icon: Dumbbell, color: 'text-green-400', tooltip: 'Strength Seeker', delay: 2.5 },
    { Icon: Database, color: 'text-yellow-400', tooltip: 'Data Architect', delay: 3 },
    { Icon: Palette, color: 'text-red-400', tooltip: 'Design Dreamer', delay: 3.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {icons.map(({ Icon, color, tooltip, delay }, index) => (
        <div
          key={index}
          className="absolute pointer-events-auto group"
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index * 8)}%`,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        >
          <div className={`${color} opacity-30 hover:opacity-80 transition-all duration-300 cursor-pointer transform hover:scale-110`}>
            <Icon size={24} />
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {tooltip}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;