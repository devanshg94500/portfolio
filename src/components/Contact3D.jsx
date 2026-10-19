import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Send, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Contact3D() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#8a2be2', '#00ff88']
    });
  };

  const copyLinkedIn = () => {
    navigator.clipboard.writeText(personal.linkedin);
    sound.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 bg-[#040714]/90">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // TRANSMISSION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Build Something <br />
            <span className="gradient-text-cyber">Extraordinary Together</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            I am currently working as a <strong className="text-cyan-400">Salesforce Developer at Plus91Labs</strong>. Reach out directly for cloud architecture discussions, CRM engineering, or connect on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Profile info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LinkedIn Spotlight Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <LinkedinIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">LinkedIn Profile</h3>
                  <span className="text-xs text-cyan-400 font-mono">500+ Connections</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Connect with Devansh Gupta to view real-time technical updates, MongoDB immersion takeaways, and software engineering posts.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
                >
                  <span>Open LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={copyLinkedIn}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy URL'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/60 hover:border-slate-400 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                  <GithubIcon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">GitHub Repositories</h3>
                  <span className="text-xs text-slate-400 font-mono">devanshg94500 &bull; Open Source</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Explore Devansh's repositories including <strong className="text-white">GymFit-Salesforce</strong> (Apex, SObjects, Flows) and <strong className="text-white">java-servlets-core-concepts</strong> (Tomcat, Servlets, JSP).
              </p>

              <div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-400 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>Open github.com/devanshg94500</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">CURRENT LOCATION</div>
                  <div className="text-white font-semibold">Jhansi, Uttar Pradesh, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">CURRENT ROLE &amp; ORG</div>
                  <div className="text-white font-semibold">Salesforce Developer @ Plus91Labs</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Devansh has received your message and will connect with you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">SUBJECT</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Backend Discussion"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Devansh, I reviewed your LinkedIn profile and projects..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 hover:text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-cyan-500/20 hover:scale-[1.01] flex items-center justify-center gap-2 group"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
