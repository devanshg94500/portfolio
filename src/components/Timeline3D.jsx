import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Compass,
  ArrowUpRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Timeline3D() {
  const { timeline } = portfolioData;
  const [filter, setFilter] = useState('all'); // 'all', 'experience', 'education'

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      case 'milestone':
        return Award;
      default:
        return Compass;
    }
  };

  const getAccentColor = (accent) => {
    switch (accent) {
      case 'cyan':
        return { 
          border: 'border-cyan-500/40', 
          text: 'text-cyan-400', 
          bg: 'bg-cyan-500/10', 
          glow: 'shadow-cyan-500/20',
          bulletIcon: 'text-cyan-400',
          dotBg: 'bg-cyan-400'
        };
      case 'emerald':
        return { 
          border: 'border-emerald-500/40', 
          text: 'text-emerald-400', 
          bg: 'bg-emerald-500/10', 
          glow: 'shadow-emerald-500/20',
          bulletIcon: 'text-emerald-400',
          dotBg: 'bg-emerald-400'
        };
      case 'amber':
        return { 
          border: 'border-amber-500/40', 
          text: 'text-amber-400', 
          bg: 'bg-amber-500/10', 
          glow: 'shadow-amber-500/20',
          bulletIcon: 'text-amber-400',
          dotBg: 'bg-amber-400'
        };
      case 'purple':
        return { 
          border: 'border-purple-500/40', 
          text: 'text-purple-400', 
          bg: 'bg-purple-500/10', 
          glow: 'shadow-purple-500/20',
          bulletIcon: 'text-purple-400',
          dotBg: 'bg-purple-400'
        };
      default:
        return { 
          border: 'border-sky-500/40', 
          text: 'text-sky-400', 
          bg: 'bg-sky-500/10', 
          glow: 'shadow-sky-500/20',
          bulletIcon: 'text-sky-400',
          dotBg: 'bg-sky-400'
        };
    }
  };

  const filteredTimeline = timeline.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'experience') return item.type === 'experience';
    if (filter === 'education') return item.type === 'education' || item.type === 'milestone';
    return true;
  });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // PROFESSIONAL TRACK &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Experience &amp; <br />
            <span className="gradient-text-neon">Career Milestones</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            The progression of enterprise development at Plus91Labs, customer resolution excellence at Amazon, talent operations at Spectraforce, and academic achievements.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => {
                sound.playClick();
                setFilter('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Milestones ({timeline.length})
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setFilter('experience');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === 'experience'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience (Plus91Labs, Amazon, Spectraforce)</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setFilter('education');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                filter === 'education'
                  ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education &amp; Training</span>
            </button>
          </div>
        </div>

        {/* Timeline Circuit Track */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 md:ml-32 space-y-10">
          {filteredTimeline.map((item, idx) => {
            const Icon = getIcon(item.type);
            const style = getAccentColor(item.accent);

            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Circuit Node on Track */}
                <div className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-slate-950 border-2 ${style.border} flex items-center justify-center shadow-lg ${style.glow} group-hover:scale-125 transition-transform duration-300`}>
                  <Icon className={`w-4 h-4 ${style.text}`} />
                </div>

                {/* Left Year Callout (Visible on desktop) */}
                <div className="hidden md:block absolute -left-36 top-3 text-right w-24">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-cyan-300 transition-colors">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className={`glass-panel p-6 sm:p-8 rounded-3xl border ${style.border} hover:scale-[1.01] transition-all duration-300 shadow-xl bg-slate-900/50 backdrop-blur-xl`}>
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="md:hidden text-xs font-mono text-cyan-400 font-bold">
                      {item.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${style.bg} ${style.text} border ${style.border}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-mono text-slate-300 mb-4 flex items-center gap-2">
                    <Building2 className={`w-3.5 h-3.5 ${style.text}`} />
                    <span className="font-semibold text-white">{item.institution}</span>
                    <span className="text-slate-500">&bull;</span>
                    <span className="text-slate-400">{item.year}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Highlights from Resume if present */}
                  {item.bullets && item.bullets.length > 0 && (
                    <div className="pt-3 border-t border-slate-800/80 space-y-2 mt-3">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Key Responsibilities &amp; Impact:
                      </div>
                      <ul className="space-y-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 ${style.bulletIcon} flex-shrink-0 mt-0.5`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
