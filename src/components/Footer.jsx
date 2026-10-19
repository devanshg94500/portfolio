import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export default function Footer({ onOpenTerminal }) {
  const { personal } = portfolioData;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-slate-900 bg-[#020409]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20">
            DG
          </div>
          <div>
            <div className="text-sm font-bold text-white">Devansh Gupta</div>
            <div className="text-[11px] font-mono text-cyan-400">
              Salesforce Developer @ Plus91Labs &bull; MCA @ ITM Gwalior &bull; Jhansi, India
            </div>
          </div>
        </div>

        {/* Live Clock & Terminal Shortcut */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-200">{time}</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="hidden sm:flex items-center gap-1 hover:text-cyan-300 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal</span>
          </button>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile (GymFit, Servlets)"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
          >
            <GithubIcon className="w-4 h-4 fill-current" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all"
          >
            <LinkedinIcon className="w-4 h-4 fill-current" />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
