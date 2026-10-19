import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack3D from './components/TechStack3D';
import Projects3D from './components/Projects3D';
import Certifications3D from './components/Certifications3D';
import Timeline3D from './components/Timeline3D';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';
import CyberTerminal from './components/CyberTerminal';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut: Backtick (`) or Ctrl+K opens terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#04060d] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      
      {/* 3D WebGL Three.js Particle & Hologram Canvas */}
      <ThreeCanvas />

      {/* Cyber Grid Background Overlay */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none z-[1] opacity-40" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col">
        <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
        
        <main>
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
          <About />
          <TechStack3D />
          <Projects3D />
          <Certifications3D />
          <Timeline3D />
          <Contact3D />
        </main>

        <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
      </div>

      {/* Interactive Cyber Terminal Modal */}
      <CyberTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}
