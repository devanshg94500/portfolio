import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Activity,
  Layers,
  Cloud
} from 'lucide-react';

export default function TechStack3D() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTag, setSelectedTag] = useState(null);

  const categories = [
    { id: 'all', name: 'All Arsenal', icon: Layers },
    { id: 'salesforce', name: 'Salesforce & Cloud', icon: Cloud },
    { id: 'backend', name: 'Java & Enterprise', icon: Code2 },
    { id: 'ai-tools', name: 'AI Agents & Tools', icon: Cpu },
  ];

  // Flatten or filter skills
  const filteredSkills = skills.categories
    .filter(cat => activeTab === 'all' || cat.id === activeTab)
    .flatMap(cat => cat.skills.map(s => ({ ...s, category: cat.name })))
    .filter(s => !selectedTag || s.tags.includes(selectedTag));

  // Orbital tech ring badges
  const orbitBadges = [
    { name: "Salesforce Apex", color: "from-cyan-400 to-blue-500" },
    { name: "Lightning Web Components", color: "from-sky-400 to-indigo-500" },
    { name: "SOQL & Flows", color: "from-teal-400 to-emerald-500" },
    { name: "Core Java 21", color: "from-amber-500 to-rose-500" },
    { name: "Spring Core", color: "from-emerald-500 to-teal-500" },
    { name: "MongoDB Vector Search", color: "from-green-500 to-emerald-600" },
    { name: "AI Multi-Tool Agents", color: "from-purple-500 to-fuchsia-600" },
    { name: "Salesforce DX & Git", color: "from-blue-500 to-cyan-500" }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 bg-[#03050b]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // SKILL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical Stack &amp; <br />
            <span className="gradient-text-neon">Core Competencies</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Hands-on architectural proficiencies verified through active project development, enterprise certifications, and industrial immersion.
          </p>
        </div>

        {/* 3D Orbiting Badges Carousel / Ribbon */}
        <div className="mb-14 overflow-hidden relative py-4">
          <div className="flex gap-4 animate-spin-slow-horizontal justify-center flex-wrap">
            {orbitBadges.map((badge, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-2 rounded-2xl glass-panel border border-cyan-500/20 hover:border-cyan-400/60 shadow-lg flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${badge.color} animate-pulse`} />
                <span className="text-xs font-mono font-bold text-white tracking-wider">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(cat.id);
                  setSelectedTag(null);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Optional Tag Filter Indicator */}
        {selectedTag && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xs text-slate-400 font-mono">Filtered by tag:</span>
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500 text-cyan-300 text-xs font-mono flex items-center gap-2">
              #{selectedTag}
              <button onClick={() => setSelectedTag(null)} className="hover:text-white font-bold">&times;</button>
            </span>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 relative group overflow-hidden"
            >
              {/* Radial subtle cursor glow effect */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-cyan-400">{skill.level}%</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-5 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => {
                      sound.playClick();
                      setSelectedTag(selectedTag === tag ? null : tag);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                      selectedTag === tag
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
