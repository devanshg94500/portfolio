import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, Code2, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { sound } from '../utils/audio';
import avatarImg from '../assets/avatar.jpg';

export default function Navbar({ activeSection, onOpenTerminal }) {
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const isEnabled = sound.toggle();
    setSoundActive(isEnabled);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border border-cyan-500/20 shadow-2xl shadow-cyan-950/40">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={avatarImg}
                  alt="Devansh Gupta"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                  Devansh Gupta
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                </span>
                <span className="text-[11px] text-cyan-400 font-mono block">Salesforce Developer @ Plus91Labs</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 -ml-3.5" />
              <span className="font-medium text-[11px]">Salesforce Dev @ Plus91Labs</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2.5">
            {/* Terminal Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              title="Open Interactive Cyber Terminal"
              className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 text-xs font-mono transition-all"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Terminal</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundActive ? "Mute futuristic audio" : "Enable futuristic sound FX"}
              className={`p-2 rounded-xl border transition-all ${
                soundActive
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              {soundActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* GitHub Profile Link */}
            <a
              href="https://github.com/devanshg94500"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              title="Devansh Gupta GitHub Profile"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-slate-400 text-slate-300 hover:text-white transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            {/* LinkedIn Quick Connect */}
            <a
              href="https://www.linkedin.com/in/devansh-gupta-423976226"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:text-white font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 glass-panel rounded-2xl border border-cyan-500/20 shadow-2xl flex flex-col gap-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
