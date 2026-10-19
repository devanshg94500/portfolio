import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import avatarImg from '../assets/avatar.jpg';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Award, 
  GraduationCap, 
  Globe2, 
  Briefcase, 
  CheckCircle, 
  Flame,
  ArrowUpRight
} from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Layers,
      title: "Salesforce Apex & Cloud Core",
      desc: "Engineering scalable CRM solutions at Plus91Labs. Bulkified Apex Trigger Handlers, Asynchronous Batch Apex, SOQL query optimization, and strict governor limit defense across enterprise data pipelines.",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: Cpu,
      title: "Lightning Web Components (LWC)",
      desc: "Crafting modern, reactive user interfaces with LWC, Apex wire adapters, Lightning Message Service (LMS), custom event buses, and responsive Lightning App Builder integrations.",
      color: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Database,
      title: "Enterprise Java & Data Security",
      desc: "Deep architectural grounding in Core Java (OOP, Collections, Exception Architectures) and Spring Core. Translates directly into robust Apex patterns, OWD, and criteria-based data sharing.",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Briefcase,
      title: "Plus91Labs & Amazon Experience",
      desc: "Applying industry-tested rigor from Amazon (Resolution Specialist), Spectraforce, and current enterprise engineering at Plus91Labs. Certified in AI Agents with MongoDB, exploring next-gen Agentforce and CRM cloud automation.",
      color: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // ARCHITECTURAL DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Identity &amp; <br />
            <span className="gradient-text-cyber">Technical Vision</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            I am a software engineer committed to writing maintainable, resilient, and enterprise-grade software. I believe in understanding the fundamental mechanics beneath the abstraction.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className={`glass-panel p-6 rounded-3xl border ${p.border} bg-gradient-to-b ${p.color} hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center mb-5 shadow-lg">
                    <Icon className={`w-6 h-6 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Production Oriented</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote / Highlight Box */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/20 via-slate-900/40 to-cyan-950/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>CORE PHILOSOPHY SHARED ON LINKEDIN</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                "Build projects instead of just collecting certificates. One of the most valuable experiences is understanding how real-world software projects are built, how engineering teams collaborate, and how bugs are identified, debugged, tested, and deployed in production environments."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 flex-shrink-0 shadow-md">
                  <img
                    src={avatarImg}
                    alt={personal.name}
                    onError={(e) => {
                      if (e.currentTarget.src !== personal.avatarFallback) {
                        e.currentTarget.src = personal.avatarFallback;
                      }
                    }}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Devansh Gupta</div>
                  <div className="text-xs text-cyan-400 font-mono">Salesforce Developer @ Plus91Labs &bull; MongoDB Immersion</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Read on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 text-center">
                Spoken: <span className="text-white">English (Proficient)</span> &bull; <span className="text-white">Hindi (Native)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
