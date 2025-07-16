import React, { useState } from 'react';
import { Camera, Video, Palette, Eye, Download } from 'lucide-react';

const ActIV: React.FC = () => {
  const [activeTab, setActiveTab] = useState('photography');

  const tabs = [
    { id: 'photography', label: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'videos', label: 'Videos', icon: <Video className="w-5 h-5" /> },
    { id: 'designs', label: 'Designs', icon: <Palette className="w-5 h-5" /> }
  ];

  const galleryItems = {
    photography: [
      {
        title: "Stolen Light",
        description: "From a forgotten frame",
        image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "portrait"
      },
      {
        title: "Digital Dreams",
        description: "Where reality meets code",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "tech"
      },
      {
        title: "Hyderabad Nights",
        description: "The city that never sleeps",
        image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "cityscape"
      },
      {
        title: "Code & Coffee",
        description: "The perfect blend",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "lifestyle"
      },
      {
        title: "Neural Networks",
        description: "Visualizing the invisible",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "abstract"
      },
      {
        title: "Digital Horizon",
        description: "Where bytes meet beauty",
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "landscape"
      }
    ],
    videos: [
      {
        title: "College Chronicles",
        description: "50+ stories told through lens",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "documentary"
      },
      {
        title: "Tech Talks",
        description: "Capturing innovation",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "educational"
      },
      {
        title: "Event Highlights",
        description: "Moments that matter",
        image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "events"
      }
    ],
    designs: [
      {
        title: "UI Dreams",
        description: "Interfaces that inspire",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "ui"
      },
      {
        title: "Brand Identity",
        description: "Visual storytelling",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "branding"
      },
      {
        title: "Digital Art",
        description: "Pixels as paint",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "art"
      }
    ]
  };

  return (
    <section id="act-iv" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            The World Through My Lens
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual tapestry woven from captured moments, digital dreams, and creative visions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 rounded-full bg-black/40 backdrop-blur-lg p-1 border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems[activeTab as keyof typeof galleryItems].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 italic mb-4">{item.description}</p>
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      <Eye size={16} />
                      <span>View</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                      <Download size={16} />
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center glass-card p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-300">Photos Captured</div>
          </div>
          <div className="text-center glass-card p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Videos Edited</div>
          </div>
          <div className="text-center glass-card p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
            <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
            <div className="text-gray-300">Designs Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActIV;