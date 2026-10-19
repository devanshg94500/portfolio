import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Code2, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Server, 
  Play, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Layers,
  Sparkles,
  Lock,
  Unlock,
  RefreshCw,
  Cloud,
  Zap,
  Activity,
  FileCode2,
  FileText
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects3D() {
  const { projects } = portfolioData;

  // 1. GymFit Salesforce App Interactive State
  const gymProject = projects.find(p => p.id === 'gymfit-salesforce') || projects[0];
  const [selectedGymEvent, setSelectedGymEvent] = useState(gymProject.interactiveData?.crmEvents[0]);
  const [gymExecuting, setGymExecuting] = useState(false);

  // 2. Java Servlets Interactive State
  const servletsProject = projects.find(p => p.id === 'java-servlets-core') || projects[1];
  const [selectedServletEvent, setSelectedServletEvent] = useState(servletsProject?.interactiveData?.servletEvents[0]);
  const [servletsExecuting, setServletsExecuting] = useState(false);

  // 3. State for REST API interactive demo
  const apiProject = projects.find(p => p.id === 'rest-api');
  const [selectedEndpoint, setSelectedEndpoint] = useState(apiProject?.interactiveData?.endpoints[0]);
  const [apiLoading, setApiLoading] = useState(false);

  // 4. State for JDBC SQL Injection demo
  const [sqlMode, setSqlMode] = useState('safe');

  // 5. State for Bank OOP Exception demo
  const [accountBalance, setAccountBalance] = useState(1000);
  const [withdrawAmount, setWithdrawAmount] = useState('1500');
  const [bankLog, setBankLog] = useState(null);

  // Run GymFit Salesforce Event
  const runGymEvent = (eventItem) => {
    sound.playClick();
    setSelectedGymEvent(eventItem);
    setGymExecuting(true);
    setTimeout(() => {
      setGymExecuting(false);
      sound.playSuccess();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 320);
  };

  // Run Servlet Event
  const runServletEvent = (eventItem) => {
    sound.playClick();
    setSelectedServletEvent(eventItem);
    setServletsExecuting(true);
    setTimeout(() => {
      setServletsExecuting(false);
      sound.playSuccess();
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 280);
  };

  // Run API Call
  const runApiCall = (endpoint) => {
    sound.playClick();
    setSelectedEndpoint(endpoint);
    setApiLoading(true);
    setTimeout(() => {
      setApiLoading(false);
      sound.playSuccess();
    }, 280);
  };

  // Handle Bank Withdrawal
  const handleBankWithdraw = () => {
    sound.playClick();
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt <= 0) {
      setBankLog({ status: 'error', message: 'Invalid transaction amount specified.' });
      return;
    }

    if (amt > accountBalance) {
      setBankLog({
        status: 'exception',
        type: 'com.devansh.bank.exceptions.InsufficientBalanceException',
        message: `Attempted to withdraw $${amt}, but available balance is only $${accountBalance}. Transaction aborted defensively.`
      });
    } else {
      const newBal = accountBalance - amt;
      setAccountBalance(newBal);
      sound.playSuccess();
      setBankLog({
        status: 'success',
        message: `Successfully debited $${amt}. Updated balance: $${newBal}. Atomic commit verified.`
      });
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cloud className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // OPEN SOURCE &amp; PRODUCTION PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Projects &amp; <br />
            <span className="gradient-text-cyber">Interactive 3D Simulators</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Real open-source repositories from Devansh's GitHub (<a href="https://github.com/devanshg94500" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono hover:text-cyan-300">github.com/devanshg94500</a>). Test live simulations of the GymFit Salesforce application and Java Servlets lifecycle.
          </p>
        </div>

        {/* Project 1: GymFit — Salesforce Gym Management App (From GitHub) */}
        <div className="mb-14 glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Info */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    GitHub &bull; Salesforce DX &bull; Apex
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                    Open Source
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {gymProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono mb-4">
                  {gymProject.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {gymProject.description}
                </p>

                <div className="space-y-2 mb-6">
                  {gymProject.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub Link */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={gymProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all shadow-md hover:shadow-cyan-500/20"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                  <span>View on GitHub: GymFit-Salesforce</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {gymProject.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive GymFit Salesforce Console */}
            <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-cyan-500/40 p-5 font-mono shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-bold">GymFit Operations &amp; Trigger Simulator</span>
                </div>
                <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Interactive
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-3">Simulate real GymFit operations and Apex execution:</p>

              {/* Event selector buttons */}
              <div className="space-y-2 mb-4">
                {gymProject.interactiveData?.crmEvents.map((ev, idx) => (
                  <button
                    key={idx}
                    onClick={() => runGymEvent(ev)}
                    onMouseEnter={() => sound.playHover()}
                    className={`w-full p-2.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                      selectedGymEvent.type === ev.type
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{ev.type}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{ev.sobject}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                      Run Operation
                    </span>
                  </button>
                ))}
              </div>

              {/* Live Execution Panel & Governor Limits */}
              <div className="bg-[#05070f] rounded-xl p-3 border border-slate-800">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/80 mb-2">
                  <span className="text-slate-400 text-[11px]">Governor Limits Monitor:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">
                    {selectedGymEvent.status}
                  </span>
                </div>

                <div className="px-2 py-1 rounded bg-slate-900/60 border border-slate-800 text-[10px] font-mono text-cyan-300 mb-2">
                  {selectedGymEvent.governorUsage}
                </div>

                <pre className="text-[11px] text-slate-200 overflow-x-auto max-h-36 p-2 rounded bg-slate-950 whitespace-pre-wrap font-mono">
                  {gymExecuting ? 'Processing transaction in GymFit Salesforce org...' : selectedGymEvent.log}
                </pre>
              </div>

            </div>

          </div>
        </div>

        {/* Project 2: Java Servlets — Core Web Concepts (From GitHub) */}
        {servletsProject && (
          <div className="mb-14 glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Info */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Java &bull; Servlets &bull; Tomcat &bull; JSP
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-900/60 text-purple-300 border border-purple-400/40">
                      GitHub Open Source
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {servletsProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400 font-mono mb-4">
                    {servletsProject.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {servletsProject.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {servletsProject.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: GitHub Link */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={servletsProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all shadow-md hover:shadow-purple-500/20"
                  >
                    <GithubIcon className="w-4 h-4 fill-current" />
                    <span>View on GitHub: java-servlets-core-concepts</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  {servletsProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Live Interactive Servlets Request & Session Console */}
              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-purple-500/40 p-5 font-mono shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-slate-300 font-bold">Servlet Request &amp; Session Inspector</span>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                    Interactive
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3">Inspect HttpServletRequest, Cookies, and HttpSession execution:</p>

                {/* Event selector buttons */}
                <div className="space-y-2 mb-4">
                  {servletsProject.interactiveData?.servletEvents.map((ev, idx) => (
                    <button
                      key={idx}
                      onClick={() => runServletEvent(ev)}
                      onMouseEnter={() => sound.playHover()}
                      className={`w-full p-2.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                        selectedServletEvent?.name === ev.name
                          ? 'bg-purple-500/20 border-purple-400 text-white shadow-md shadow-purple-500/20'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{ev.name}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-xs">{ev.action}</div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-950 text-purple-300 border border-slate-800">
                        Dispatch
                      </span>
                    </button>
                  ))}
                </div>

                {/* Live Execution Panel & Session Inspector */}
                <div className="bg-[#05070f] rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/80 mb-2">
                    <span className="text-slate-400 text-[11px]">Servlet Container Status:</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">
                      {selectedServletEvent?.status || '200 OK'}
                    </span>
                  </div>

                  <pre className="text-[11px] text-slate-200 overflow-x-auto max-h-40 p-2 rounded bg-slate-950 whitespace-pre-wrap font-mono">
                    {servletsExecuting ? 'Dispatching request to Apache Tomcat 9 servlet container...' : selectedServletEvent?.log}
                  </pre>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Project 3: Full-Stack REST API Engine */}
        {apiProject && (
          <div className="mb-14 glass-panel rounded-3xl p-6 sm:p-10 border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Info */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                      Java &bull; Jersey &bull; Tomcat &bull; MySQL
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Production Ready
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {apiProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono mb-4">
                    {apiProject.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {apiProject.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {apiProject.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {apiProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Live Interactive API Tester */}
              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-blue-500/40 p-5 font-mono shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 ml-2">REST API Console Tester</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    Interactive
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3">Click an endpoint to simulate live Java backend execution:</p>

                {/* Endpoint buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {apiProject.interactiveData?.endpoints.map((ep, idx) => (
                    <button
                      key={idx}
                      onClick={() => runApiCall(ep)}
                      onMouseEnter={() => sound.playHover()}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                        selectedEndpoint?.path === ep.path
                          ? 'bg-blue-500/20 border-cyan-400 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className={`font-bold ${ep.method === 'GET' ? 'text-emerald-400' : ep.method === 'POST' ? 'text-cyan-400' : ep.method === 'PUT' ? 'text-amber-400' : 'text-rose-400'}`}>
                        {ep.method}
                      </span>
                      <span className="text-[11px] text-slate-300 truncate max-w-[120px]">{ep.path}</span>
                    </button>
                  ))}
                </div>

                {/* Response Panel */}
                <div className="bg-[#05070f] rounded-xl p-3 border border-slate-800">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/80 mb-2">
                    <span className="text-slate-400">Response Status:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        HTTP {selectedEndpoint?.status || 200} OK
                      </span>
                      <span className="text-slate-400 text-[10px]">38ms</span>
                    </div>
                  </div>

                  <pre className="text-[11px] text-cyan-300 overflow-x-auto max-h-48 p-2 rounded bg-slate-950">
                    {apiLoading ? 'Processing request through Apache Tomcat & MySQL connection...' : JSON.stringify(selectedEndpoint?.res, null, 2)}
                  </pre>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Project 4 & 5: Two Column Grid for JDBC & Banking OOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card: Enterprise JDBC & DAO Security */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  JDBC &bull; DAO Pattern &bull; MySQL
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Zero-SQLi</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Enterprise JDBC &amp; DAO Pattern
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Built a clean architectural separation between business logic and database persistence. Enforced PreparedStatements to eliminate SQL injection vectors.
              </p>

              {/* Interactive SQL Injection Toggle */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span className="text-slate-400 text-[11px]">SQL Security Mode:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSqlMode('vulnerable')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] transition-all flex items-center gap-1 ${
                        sqlMode === 'vulnerable'
                          ? 'bg-rose-500 text-white font-bold'
                          : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      <Unlock className="w-3 h-3" />
                      <span>Vulnerable Concatenation</span>
                    </button>
                    <button
                      onClick={() => setSqlMode('safe')}
                      className={`px-2.5 py-1 rounded-lg text-[10px] transition-all flex items-center gap-1 ${
                        sqlMode === 'safe'
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      <Lock className="w-3 h-3" />
                      <span>PreparedStatement DAO</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">Generated Query:</div>
                  <code className={`block whitespace-pre-wrap text-[11px] ${sqlMode === 'safe' ? 'text-emerald-300' : 'text-rose-400'}`}>
                    {sqlMode === 'safe' ? "SELECT * FROM users WHERE email = ? -- SECURE (PreparedStatement binds parameterized literal)" : "SELECT * FROM users WHERE email = 'devansh@test.com' OR '1'='1' -- VULNERABLE"}
                  </code>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
              {["Java", "MySQL", "JDBC", "DAO Pattern", "PreparedStatements"].map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card: Bank Account OOP & Custom Exceptions */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Core Java &bull; OOP Architecture
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">Custom Exceptions</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Resilient Bank Account OOP System
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Object-Oriented financial ledger applying runtime polymorphism, clean interfaces, and custom checked exceptions (<code>InsufficientBalanceException</code>).
              </p>

              {/* Interactive Bank Simulator */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span className="text-slate-400 text-[11px]">Account Balance:</span>
                  <span className="text-emerald-400 font-bold text-sm">${accountBalance.toFixed(2)}</span>
                </div>

                <div className="flex gap-2 mb-3">
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="Enter amount..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={handleBankWithdraw}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
                  >
                    Withdraw
                  </button>
                  <button
                    onClick={() => {
                      setAccountBalance(1000);
                      setBankLog(null);
                    }}
                    title="Reset balance"
                    className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {bankLog && (
                  <div className={`p-2.5 rounded-xl border text-[11px] leading-relaxed ${
                    bankLog.status === 'success'
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/50 border-rose-500/40 text-rose-300'
                  }`}>
                    {bankLog.type && <div className="font-bold mb-0.5 text-rose-400 font-mono">{bankLog.type}</div>}
                    <div>{bankLog.message}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
              {["Core Java", "OOP Principles", "Custom Exceptions", "Runtime Polymorphism"].map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
