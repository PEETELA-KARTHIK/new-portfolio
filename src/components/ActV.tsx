import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ActV: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/PEETELA-KARTHIK', label: 'GitHub', color: 'hover:text-white' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/peetela-karthik', label: 'LinkedIn', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="act-v" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            The Digital Handshake
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where bytes meet hearts, and conversations begin. Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm font-mono">karthik@terminal:~$</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
              <p className="text-gray-400 font-mono text-sm">Initiating secure connection...</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  &gt; Enter your name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Your name here..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  &gt; Enter your email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  &gt; Enter your message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Execute Send
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">peetelakarthik@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400">+91 6305524350</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-400">Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Digital Presence</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`flex items-center space-x-3 p-4 bg-black/50 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-gray-400 ${link.color}`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-black/40 to-gray-900/40 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Current Status</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for Projects</span>
              </div>
              <p className="text-gray-400">
                Currently seeking opportunities in AI, web development, and creative tech projects. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-gray-700/50 pt-8">
          <p className="text-gray-400 italic">
            "In the symphony of code and creativity, every connection writes a new verse."
          </p>
          <p className="text-gray-500 mt-2">
            © 2024 Karthik Peetela. Crafted with code and dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActV;