import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function CyberTerminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Quantum Cyber Terminal [Version 2.4.0]' },
    { type: 'sys', text: 'Devansh Gupta Architecture Environment. Type "help" to view commands.' },
    { type: 'cmd', text: 'status' },
    { type: 'res', text: portfolioData.terminalCommands.status }
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [savedCommands, setSavedCommands] = useState(['status']);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    sound.playClick();

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    setSavedCommands((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    let response = '';

    if (portfolioData.terminalCommands[cmd]) {
      response = portfolioData.terminalCommands[cmd];
    } else if (cmd === 'sudo' || cmd.startsWith('sudo rm')) {
      response = 'PERMISSION DENIED: You cannot delete Devansh’s production backend infrastructure!';
    } else if (cmd === 'matrix' || cmd === '3d') {
      response = '3D WebGL Matrix activated. Background particles reacting to your presence.';
    } else if (cmd === 'easteregg') {
      response = '🎉 You found the secret terminal Easter egg! Devansh loves building high-performance Java APIs!';
    } else {
      response = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'cmd', text: rawCmd },
      { type: 'res', text: response }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (savedCommands.length > 0) {
        const nextIdx = cmdIndex === -1 ? savedCommands.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(savedCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= savedCommands.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIdx);
          setInputVal(savedCommands[nextIdx]);
        }
      }
    }
  };

  const quickPills = ['help', 'role', 'about', 'skills', 'projects', 'certs', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl glass-panel rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden max-h-[85vh] bg-[#070b18]/95 font-mono text-sm">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-300 font-bold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              devansh@quantum-core:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800">
              Interactive Shell
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 font-mono text-xs sm:text-sm">
          {history.map((entry, index) => (
            <div key={index} className="leading-relaxed">
              {entry.type === 'sys' && (
                <div className="text-slate-400 italic">{entry.text}</div>
              )}
              {entry.type === 'cmd' && (
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-emerald-400 font-bold">devansh@core:~$</span>
                  <span className="text-white">{entry.text}</span>
                </div>
              )}
              {entry.type === 'res' && (
                <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-cyan-500/40 my-1 font-mono text-xs">
                  {entry.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 text-[11px] font-mono whitespace-nowrap">Presets:</span>
          {quickPills.map((p) => (
            <button
              key={p}
              onClick={() => handleCommand(p)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-cyan-950 border border-slate-700/80 hover:border-cyan-500/50 text-cyan-300 hover:text-white text-[11px] font-mono transition-all whitespace-nowrap"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Line */}
        <div className="p-3 bg-slate-950/90 border-t border-cyan-500/30 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs sm:text-sm">devansh@core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (try 'projects' or 'certs')..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-slate-500"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
