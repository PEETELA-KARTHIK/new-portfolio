import React from 'react';
import { ExternalLink, Github, Eye, Shield, Scale, MessageCircle } from 'lucide-react';

const ActIII: React.FC = () => {
  const projects = [
    {
      title: "Criminal Detection System",
      subtitle: "To empower justice with the eye of machine vision.",
      description: "Achieved 95% detection accuracy via OpenCV and Python. A digital guardian that never sleeps, watching over the innocent.",
      techStack: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-400 to-pink-400",
      metrics: "95% Accuracy"
    },
    {
      title: "E-Justice: Digital Courtroom",
      subtitle: "To dismantle walls of delay. To code a quicker justice.",
      description: "MongoDB-powered, role-based digital courtroom interface. Where law meets code, and justice flows like data streams.",
      techStack: ["MongoDB", "React", "Node.js", "Express", "Role-based Auth"],
      icon: <Scale className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-400",
      metrics: "Multi-Role System"
    },
    {
      title: "Sign Language Conversation System",
      subtitle: "To bridge silence with signal, to translate empathy in code.",
      description: "TensorFlow and CV turned signs into speech — 90% accuracy. Breaking barriers, one gesture at a time.",
      techStack: ["TensorFlow", "Computer Vision", "Python", "Real-time Processing"],
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-green-400 to-teal-400",
      metrics: "90% Accuracy"
    }
  ];

  return (
    <section id="act-iii" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            The Architect's Codex
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where dreams crystallize into code, and imagination becomes reality through the alchemy of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="text-sm text-cyan-400 font-medium">{project.metrics}</div>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Eye size={16} />
                    <span>Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Tales in the Making
            </h3>
            <p className="text-gray-300 mb-6">
              Each project is a chapter in an ongoing story. The repository holds more secrets, more dreams awaiting their digital birth.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ExternalLink className="mr-2" size={18} />
              Explore Full Repository
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActIII;