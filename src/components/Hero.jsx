import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  MapPin, 
  Database, 
  Cpu, 
  Server, 
  ExternalLink,
  Terminal,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import avatarImg from '../assets/avatar.jpg';

export default function Hero({ onOpenTerminal }) {
  const { personal } = portfolioData;

  // Typing effect phrases
  const titles = [
    "Salesforce Developer @ Plus91Labs",
    "Apex & Lightning Web Components (LWC) Specialist",
    "Ex-Amazon Resolution Specialist",
    "Enterprise Java & Cloud Architecture",
    "Building AI Agents with MongoDB & Vector Search"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Tilt state for Avatar Centerpiece
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const current = titles[textIndex];
    let timer;

    if (!isDeleting && displayText.length < current.length) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 55);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 25);
    } else if (!isDeleting && displayText.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const triggerCelebrate = () => {
    sound.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#c084fc']
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
      
      {/* Main Grid: Headline on Left, Luxury Avatar Centerpiece on Right */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 -ml-3" />
            <span className="font-medium">Salesforce Developer @ Plus91Labs &bull; Ex-Amazon &bull; MCA Scholar</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
            Hi, I'm <br />
            <span className="gradient-text-cyber font-sans">
              {personal.name}
            </span>
          </h1>

          {/* Dynamic Animated Subtitle */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className="text-lg sm:text-2xl font-mono text-cyan-300 font-semibold flex items-center">
              &gt; {displayText}
              <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse" />
            </span>
          </div>

          {/* Bio text */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-light">
            <strong className="text-cyan-400 font-medium">Salesforce Developer at Plus91Labs</strong>, focused on engineering scalable enterprise cloud architectures, <strong className="text-sky-300 font-medium">Apex Triggers, Lightning Web Components (LWC), and automated flow orchestration</strong>. Grounded in robust <strong className="text-emerald-400 font-medium">Core Java, RESTful Web Services, and operational rigor from Amazon</strong>, with verified credentials in <strong className="text-purple-400 font-medium">Multi-Tool AI Agents with MongoDB Vector Search</strong>.
          </p>

          {/* Key Attribute Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              <span>Plus91Labs &bull; Salesforce Dev</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Ex-Amazon Resolution Specialist</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-emerald-300">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Apex &bull; LWC &bull; Flows</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>AI Agents &bull; Credly Verified</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Jhansi, UP, India</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 hover:text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore 3D Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personal.credlyBadge}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => triggerCelebrate()}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-500/70 text-purple-300 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10"
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span>Credly Verified Badge</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-white/40 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 font-mono text-xs transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>$ run terminal</span>
            </button>
          </div>
        </div>

        {/* Right Column: Clean, Luxury 3D Avatar Centerpiece with ZERO Overlapping */}
        <div className="lg:col-span-5 flex justify-center items-center z-10">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
            }}
            className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center"
          >
            
            {/* Ambient Multi-Layer Aura Glows Behind Avatar */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/25 via-indigo-600/20 to-purple-500/25 rounded-[3rem] blur-3xl opacity-75 animate-soft-pulse pointer-events-none" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-sky-500/20 to-indigo-500/20 rounded-[2.5rem] blur-xl opacity-40 pointer-events-none" />

            {/* Top Status Pill - Cleanly Positioned Above the Portrait */}
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-400/30 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Salesforce Developer</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-cyan-400">Plus91Labs</span>
            </div>

            {/* Clean Portrait Portal - Given Proper Portrait Ratio and Unobstructed View */}
            <div className="relative group w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-[2.5rem] p-1 bg-gradient-to-b from-cyan-400/40 via-indigo-500/30 to-purple-500/40 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-slate-950 relative shadow-inner">
                <img
                  src={avatarImg}
                  alt={personal.name}
                  onError={(e) => {
                    if (e.currentTarget.src !== personal.avatarFallback) {
                      e.currentTarget.src = personal.avatarFallback;
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient fade at the very bottom of the photo */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
              </div>

              {/* Floating Orbit Satellite 1: Top-Right (Safely outside the photo, visible on sm+) */}
              <div className="hidden sm:flex absolute -top-3 -right-6 px-3.5 py-1.5 rounded-xl glass-card border border-cyan-400/40 shadow-xl items-center gap-2 text-xs font-medium text-cyan-200 animate-soft-float-reverse pointer-events-none">
                <Zap className="w-3.5 h-3.5 text-cyan-400 fill-current" />
                <span>Apex &amp; LWC</span>
              </div>

              {/* Floating Orbit Satellite 2: Bottom-Left (Safely outside the photo, visible on sm+) */}
              <div className="hidden sm:flex absolute -bottom-3 -left-6 px-3.5 py-1.5 rounded-xl glass-card border border-amber-400/40 shadow-xl items-center gap-2 text-xs font-medium text-amber-200 animate-soft-float pointer-events-none">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Ex-Amazon</span>
              </div>
            </div>

            {/* Profile Information Below Portrait - Clean & Uncluttered */}
            <div className="w-full text-center mt-5">
              <div className="flex items-center justify-center gap-1.5">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {personal.name}
                </h3>
                <CheckCircle2 className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
              </div>

              <p className="text-xs font-mono text-cyan-300 font-semibold mt-1">
                Salesforce Developer &bull; Plus91Labs
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Ex-Amazon Resolution Specialist &bull; MCA Scholar
              </p>

              {/* Soft Skill Badges Array Below Name */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                  Apex Triggers
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-300 text-[11px] font-mono">
                  LWC &amp; Flows
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                  Amazon Operations
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                  MongoDB AI Agents
                </span>
              </div>

              {/* Direct Social Links: GitHub & LinkedIn */}
              <div className="mt-4 flex items-center justify-center gap-2.5 flex-wrap">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-400 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-md"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-medium transition-all shadow-md hover:shadow-cyan-500/20"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400 fill-current" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Verified Floating Metrics Ribbon - In Document Flow to Eliminate Any Overlap */}
      <div className="mt-14 lg:mt-16 max-w-7xl mx-auto w-full">
        <div className="glass-panel rounded-2xl py-5 px-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border border-white/10 shadow-2xl">
          {personal.stats.map((stat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-3.5 group transition-transform hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="border-l border-slate-700/60 pl-3">
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">{stat.label}</div>
                <div className="text-[11px] text-slate-400 font-mono">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
