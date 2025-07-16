import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import ActI from './components/ActI';
import ActII from './components/ActII';
import ActIII from './components/ActIII';
import ActIV from './components/ActIV';
import ActV from './components/ActV';
import CosmicBackground from './components/CosmicBackground';
import FloatingIcons from './components/FloatingIcons';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling for navigation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CosmicBackground />
      <Header />
      <FloatingIcons />
      
      <main className="relative z-10">
        <ActI />
        <ActII />
        <ActIII />
        <ActIV />
        <ActV />
      </main>
    </div>
  );
}

export default App;