import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMysteries } from './api';
import { useLayout } from './LayoutContext';

export default function DashboardLayout({ children }) {
  const { navStatus, timerText } = useLayout();
  const [mysteries, setMysteries] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMysteries().then(setMysteries).catch(console.error);
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="w-80 border-r border-violet-900/50 bg-slate-900 flex flex-col z-20">
        <div className="p-6 border-b border-violet-900/50">
          <Link to="/">
            <h1 className="text-2xl font-bold font-mono text-violet-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(124,58,237,0.8)]">Crimson Files</h1>
          </Link>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Tactical Database v2.1</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest mb-4">Available Case Files</h2>
          {mysteries.map((m) => (
            <Link 
              key={m.id}
              to={`/?mystery=${m.id}`}
              className={`block p-4 rounded border transition-all ${
                location.search.includes(`mystery=${m.id}`) 
                  ? 'bg-violet-900/30 border-violet-500 shadow-[0_0_8px_rgba(124,58,237,0.3)]' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-violet-700/50 hover:bg-violet-900/10'
              }`}
            >
              <h3 className="font-mono font-semibold text-violet-300 mb-2 truncate">{m.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{m.description}</p>
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-violet-900/50 bg-slate-950/30">
           <Link to="/leaderboard" className="block text-center w-full text-slate-400 hover:text-violet-400 font-mono text-sm uppercase transition-colors py-2">
              [ Operational Rankings ]
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Nav */}
        <header className="h-16 border-b border-violet-900/50 bg-slate-900/80 backdrop-blur flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-4">
            <span className={`font-mono text-sm font-bold uppercase tracking-wider px-3 py-1 rounded border ${
              navStatus === 'ACTIVE' 
                ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' 
                : 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
            }`}>
              STATUS: {navStatus}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="font-mono text-sm">
               <span className="text-slate-500 mr-2">SYS_TIME:</span>
               <span className="text-violet-400 font-semibold">{currentTime}</span>
            </div>
            {navStatus === 'ACTIVE' && (
              <div className="font-mono text-xl font-bold text-red-500 bg-red-950/30 px-4 py-1 rounded border border-red-900 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                {timerText}
              </div>
            )}
          </div>
        </header>

        {/* Workspace */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="absolute inset-0 bg-violet-900/5 pointer-events-none"></div>
          <div className="relative z-10 w-full max-w-4xl mx-auto h-full flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
