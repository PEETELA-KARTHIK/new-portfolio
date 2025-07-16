import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const ActI: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-pulse-glow');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="act-i" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Glitch Effect Tagline */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-4 glitch-text">
            "Not built to fit in. Coded to stand out."
          </h1>
        </div>

        {/* Main Hero Card */}
        <div className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 shadow-2xl">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Karthik Peetela
            </h2>
            
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
              <p>
                "He crafts whispers into code and dreams into digital echoes — 
                a builder of unseen bridges, from Hyderabad's heart to the boundless web."
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium border border-cyan-500/30">
                Poetic Technologist
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium border border-purple-500/30">
                Dream Architect
              </span>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium border border-pink-500/30">
                Code Whisperer
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default ActI;