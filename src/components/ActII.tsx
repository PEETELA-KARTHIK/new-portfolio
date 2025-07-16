import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Camera, Code, Network, TrendingUp } from 'lucide-react';

const ActII: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      title: "My Dreams",
      description: "AI for humanity • Building immersive worlds • Impact through clean code • Creative tech • Emotional design",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-400",
      year: "∞"
    },
    {
      title: "BE - Vasavi College of Engineering",
      description: "Computer Science Engineering • CGPA: 7.68 • Where algorithms met imagination",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      year: "2024"
    },
    {
      title: "Diploma - TRR College of Technology",
      description: "Computer Science • CGPA: 8.67 • The foundation stones of my digital dreams",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-400 to-teal-400",
      year: "2021"
    },
    {
      title: "St. Aloysius High School",
      description: "CGPA: 9.7 • Where curiosity first sparked into flame",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-orange-400 to-red-400",
      year: "2018"
    }
  ];

  const achievements = [
    {
      text: "A lens capturing stories beyond pixels – Photography Club soul.",
      icon: <Camera className="w-5 h-5" />
    },
    {
      text: "A digital bard — videographer for 50+ college tales.",
      icon: <Camera className="w-5 h-5" />
    },
    {
      text: "The Joy of Python – when syntax met soul.",
      icon: <Code className="w-5 h-5" />
    },
    {
      text: "A network warrior, trained by Cisco – mapping unseen paths.",
      icon: <Network className="w-5 h-5" />
    }
  ];

  return (
    <section id="act-ii" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Echoes of Becoming
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A reverse journey through time, where dreams cascade backward into the moments that shaped them.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>
          
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                <div className="glass-card p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} mr-3`}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black"></div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Whimsical Echoes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="text-pink-400 mr-3 mt-1">
                    {achievement.icon}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed typewriter-text">
                    {achievement.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActII;