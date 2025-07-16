import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Globe, Shield, Cloud, Code, Database, BookOpen, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'GulMahal',
    role: 'Web Developer Intern',
    duration: 'July 2024 – Sep 2024',
    location: 'Remote',
    logo: 'GM',
    description: 'Led the maintenance and optimization of a WordPress site, boosting SEO, fixing technical issues, and elevating Google PageSpeed scores — resulting in better user experience, traffic, and performance.',
    skills: ['WordPress', 'SEO', 'Notion', 'Analytics'],
    icons: [<Globe size={18} />, <Code size={18} />, <Database size={18} />],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    company: 'NSIC Technical Services Centre',
    role: 'Industrial Training',
    duration: 'Sep 2022 – Jan 2023',
    location: 'Hyderabad',
    logo: 'NSIC',
    description: 'Hands-on training in Java and Python fundamentals. Learned structured coding practices, problem-solving, and real-time application building.',
    skills: ['Java', 'Python', 'Networking'],
    icons: [<Code size={18} />, <Globe size={18} />],
    color: 'from-purple-500 to-pink-400'
  }
];

const certifications = [
  // Programming & Dev
  {
    cluster: 'Programming & Dev',
    items: [
      { title: 'The Joy of Computing Using Python', platform: 'NPTEL', date: 'Oct 2024', skills: ['Python'], link: '', icon: <Code size={18} /> },
      { title: 'Programming in Java', platform: 'NPTEL', date: 'Apr 2024', skills: ['Java'], link: '', icon: <Code size={18} /> },
      { title: 'WordPress', platform: 'Coursera', date: '', skills: ['WordPress'], link: '', icon: <Globe size={18} /> },
      { title: 'Oracle DB for Developers', platform: 'Oracle', date: 'Jun 2024', skills: ['Oracle', 'DB'], link: '', icon: <Database size={18} /> },
    ]
  },
  // Networking
  {
    cluster: 'Networking (Cisco Academy)',
    items: [
      { title: 'CCNA: Switching, Routing & Wireless Essentials', platform: 'Cisco', date: 'Jun 2024', skills: ['CCNA'], link: '', icon: <Globe size={18} /> },
      { title: 'Networking Essentials', platform: 'Cisco', date: 'Jun 2024', skills: ['Networking'], link: '', icon: <Globe size={18} /> },
      { title: 'Introduction to Packet Tracer', platform: 'Cisco', date: 'Jul 2024', skills: ['Packet Tracer'], link: '', icon: <Globe size={18} /> },
      { title: 'Introduction to Networks', platform: 'Cisco', date: '', skills: ['Networks'], link: '', icon: <Globe size={18} /> },
    ]
  },
  // Cybersecurity & AI
  {
    cluster: 'Cybersecurity & AI',
    items: [
      { title: 'Cybersecurity', platform: 'Infosys Springboard', date: '', skills: ['Cybersecurity'], link: '', icon: <Shield size={18} /> },
      { title: 'Fundamentals of AI & ML', platform: 'Infosys', date: '', skills: ['AI', 'ML'], link: '', icon: <BookOpen size={18} /> },
      { title: 'Introduction to Ethical Hacking', platform: 'Great Learning', date: '', skills: ['Ethical Hacking'], link: '', icon: <Shield size={18} /> },
    ]
  },
  // Cloud & Tech Experience
  {
    cluster: 'Cloud & Tech Experience',
    items: [
      { title: 'Google Cloud Career Essentials', platform: 'Google Cloud Skills Boost', date: '', skills: ['Google Cloud'], link: '', icon: <Cloud size={18} /> },
      { title: 'JPMorgan Software Engg Virtual Experience', platform: 'Forage', date: '', skills: ['Software Engg'], link: '', icon: <Briefcase size={18} /> },
      { title: 'Deloitte Virtual Tech Program', platform: 'Forage', date: '', skills: ['Tech Program'], link: '', icon: <Briefcase size={18} /> },
      { title: 'VISA Token Tech Virtual Experience', platform: 'Forage', date: '', skills: ['Token Tech'], link: '', icon: <Briefcase size={18} /> },
      { title: 'Data Science Foundation', platform: 'Great Learning', date: '', skills: ['Data Science'], link: '', icon: <Database size={18} /> },
    ]
  }
];

const photography = [
  {
    title: "Captured Moment 1",
    description: "A unique perspective from my personal gallery.",
    image: "https://photos.app.goo.gl/oSUUbCMFgwjGcz4s8",
    category: "personal"
  },
  {
    title: "Captured Moment 2",
    description: "A story told through the lens.",
    image: "https://photos.app.goo.gl/mYcMXy978BpjNmTB7",
    category: "personal"
  },
  {
    title: "Captured Moment 3",
    description: "Emotion and light in perfect harmony.",
    image: "https://photos.app.goo.gl/P4CXmhpq2sjFaz3X7",
    category: "personal"
  }
];

const ActIV: React.FC = () => {
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
      const items = timelineRef.current.querySelectorAll('.timeline-exp-item');
      items.forEach(item => observer.observe(item));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="act-iv" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            🎖️ Act IV: Chronicles of Growth – Experience & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Design your journey like a digital museum of personal evolution. Each badge a battle. Each skill a scar turned star.
          </p>
        </div>

        {/* Section 1: Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
            🛠 Field Logs – Experience
          </h3>
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-exp-item relative flex items-center mb-16 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className={`glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br ${exp.color} border border-cyan-400/30 shadow-2xl neon-glow-card hover:scale-105 transition-all duration-300`}> 
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold text-lg shadow-lg mr-4 border-2 border-white/20">
                        {exp.logo}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">{exp.role}</div>
                        <div className="text-cyan-200 text-sm">{exp.company}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-3 py-1 rounded-full bg-black/30 text-cyan-300 text-xs font-mono border border-cyan-400/30">{exp.duration}</span>
                          <span className="px-3 py-1 rounded-full bg-black/30 text-purple-300 text-xs font-mono border border-purple-400/30">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-100 italic mb-3">{exp.description}</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-black/40 text-cyan-200 border border-cyan-400/30">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Certifications Grid */}
        <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent text-center">
          📜 The Scrolls of Mastery – Certifications
        </h3>
        <div className="mb-8 text-center text-gray-400 italic">
          <span>“Each badge a battle. Each skill a scar turned star.”</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cluster, idx) => (
            <div key={idx} className="col-span-1">
              <div className="mb-4 text-lg font-bold text-cyan-300 flex items-center gap-2">
                {cluster.items[0].icon}
                {cluster.cluster}
              </div>
              <div className="flex flex-col gap-4">
                {cluster.items.map((cert, i) => (
                  <div
                    key={i}
                    className="badge-card group p-5 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/60 border border-cyan-400/20 shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer relative overflow-hidden hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-cyan-400">{cert.icon}</span>
                      <span className="font-semibold text-white text-base">{cert.title}</span>
                    </div>
                    <div className="text-sm text-gray-300 mb-1">{cert.platform}{cert.date && ` • ${cert.date}`}</div>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {cert.skills.map((skill, j) => (
                        <span key={j} className="px-2 py-0.5 text-xs rounded-full bg-cyan-900/40 text-cyan-200 border border-cyan-400/20">{skill}</span>
                      ))}
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-cyan-300 hover:text-cyan-400">
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {/* Ripple/Glow effect */}
                    <div className="absolute inset-0 pointer-events-none group-hover:bg-cyan-400/10 group-hover:backdrop-blur-sm transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActIV;