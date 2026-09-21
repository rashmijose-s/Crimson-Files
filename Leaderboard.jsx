import { useState, useEffect } from 'react';
import { getLeaderboard, deleteLeaderboardEntry, clearLeaderboard } from '../api';
import { useLayout } from '../LayoutContext';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setNavStatus, setTimerText } = useLayout();

  const fetchLeaderboard = () => {
    setLoading(true);
    getLeaderboard()
      .then(data => {
        setLeaders(data);
        setLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    setNavStatus('ARCHIVE');
    setTimerText('00:00');
    fetchLeaderboard();
  }, [setNavStatus, setTimerText]);

  const handleDelete = async (sessionId) => {
    if (window.confirm('Are you sure you want to delete this score?')) {
      await deleteLeaderboardEntry(sessionId);
      fetchLeaderboard();
    }
  };

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear the entire leaderboard? This cannot be undone.')) {
      await clearLeaderboard();
      fetchLeaderboard();
    }
  };

  const formatDuration = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="w-full flex flex-col h-full pb-10">
      <div className="mb-6 flex justify-between items-end border-b border-violet-900/50 pb-4">
        <div>
          <h2 className="text-3xl font-mono font-bold text-violet-500 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]">Operational Rankings</h2>
          <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-2">Classified Clearances Only</p>
        </div>
        <button onClick={handleClear} className="font-mono text-xs uppercase tracking-widest text-red-500 hover:text-white border border-red-900/50 hover:bg-red-900/50 px-4 py-2 rounded transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)]">
          Purge Database
        </button>
      </div>

      <div className="cyber-card overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-950/80 border-b border-violet-900/50 text-violet-400 font-mono text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold w-24">Rank</th>
              <th className="px-6 py-4 font-semibold">Agent Designation</th>
              <th className="px-6 py-4 font-semibold">Case File</th>
              <th className="px-6 py-4 font-semibold text-right">Time Logged</th>
              <th className="px-6 py-4 font-semibold text-center w-24">Modify</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-900/30">
            {loading ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-violet-500/50 font-mono uppercase tracking-widest animate-pulse">Accessing secure records...</td>
              </tr>
            ) : leaders.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-slate-500 font-mono uppercase tracking-widest">No operations on record.</td>
              </tr>
            ) : (
              leaders.map((entry, idx) => (
                <tr key={idx} className="hover:bg-violet-900/20 transition-colors text-slate-300 font-mono text-sm">
                  <td className="px-6 py-4">
                    {idx === 0 ? <span className="text-yellow-400 font-bold drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">01 [MVP]</span> : 
                     idx === 1 ? <span className="text-slate-400 font-bold">02 [ELITE]</span> : 
                     idx === 2 ? <span className="text-orange-500 font-bold drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">03 [VET]</span> : 
                     <span className="text-slate-500">{(idx + 1).toString().padStart(2, '0')}</span>}
                  </td>
                  <td className="px-6 py-4 font-bold text-cyan-400 tracking-wider">{entry.teamName}</td>
                  <td className="px-6 py-4 text-xs text-slate-400 truncate max-w-[200px]">{entry.mysteryTitle}</td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-400">{formatDuration(entry.duration_seconds)}</td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => handleDelete(entry.sessionId)}
                      className="text-slate-600 hover:text-red-500 transition-colors px-2 py-1 focus:outline-none"
                      title="Redact Record"
                    >
                      [X]
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
