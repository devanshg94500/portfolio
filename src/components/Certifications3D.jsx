import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Database,
  Building,
  GraduationCap
} from 'lucide-react';

export default function Certifications3D() {
  const { certifications } = portfolioData;

  const triggerCelebrate = (url) => {
    sound.playSuccess();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#00f2fe', '#10b981', '#f59e0b']
    });
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="credentials" className="relative py-24 px-4 sm:px-6 bg-[#03060f]/90">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>04 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Licenses, Certifications &amp; <br />
            <span className="gradient-text-cyber">Industry Recognitions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Officially verified digital credentials and industry immersion certificates validating software engineering, AI agent architectures, and backend design.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const isHighlight = cert.highlight;
            return (
              <div
                key={index}
                onMouseEnter={() => sound.playHover()}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative group ${
                  isHighlight
                    ? 'border-purple-500/40 hover:border-purple-400/80 shadow-2xl shadow-purple-950/40'
                    : 'border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                {/* Glow accent */}
                {isHighlight && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />
                )}

                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {cert.badgeImage ? (
                        <div className="relative">
                          <img
                            src={cert.badgeImage}
                            alt={cert.title}
                            className="w-16 h-16 rounded-2xl object-contain bg-slate-950 p-1 border border-purple-500/40 shadow-lg group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-slate-950">
                            <CheckCircle2 className="w-3 h-3 text-slate-950 fill-emerald-300" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center">
                          <Award className="w-7 h-7 text-cyan-400" />
                        </div>
                      )}
                      <div>
                        <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <div className="text-xs text-slate-400 font-mono">Issued {cert.issuedDate}</div>
                      </div>
                    </div>

                    {cert.credlyId && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800">
                        Credly Verified
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {cert.credlyUrl ? (
                    <button
                      onClick={() => triggerCelebrate(cert.credlyUrl)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide flex items-center gap-2 shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">Verified via Coursework</span>
                  )}

                  {cert.credlyId && (
                    <span className="text-[11px] font-mono text-slate-500 truncate max-w-[150px]">
                      ID: {cert.credlyId.slice(0, 12)}...
                    </span>
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
