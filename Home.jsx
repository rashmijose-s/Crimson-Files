import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMysteries, startSession } from '../api';
import { useLayout } from '../LayoutContext';

export default function Home() {
  const [searchParams] = useSearchParams();
  const selectedMysteryId = searchParams.get('mystery');
  
  const [mysteries, setMysteries] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { setNavStatus, setTimerText } = useLayout();

  useEffect(() => {
    setNavStatus('STANDBY');
    setTimerText('00:00');
    getMysteries().then(setMysteries).catch(console.error);
  }, [setNavStatus, setTimerText]);

  const selectedMystery = mysteries.find(m => m.id === parseInt(selectedMysteryId));

  const handleStart = async (e) => {
    e.preventDefault();
    if (!teamName.trim() || !selectedMystery) return;
    setError('');
    try {
      const res = await startSession(teamName, selectedMystery.id);
      navigate(`/session/${res.sessionId}`);
    } catch (err) {
      setError('Failed to initiate operation.');
    }
  };

  if (!selectedMysteryId) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <div className="cyber-card p-12 text-center max-w-lg w-full">
          <div className="w-16 h-16 rounded-full border-2 border-violet-500/50 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            <span className="text-violet-400 font-mono text-2xl">?</span>
          </div>
          <h2 className="text-xl font-mono text-slate-300 uppercase tracking-widest mb-4">Awaiting Objective</h2>
          <p className="text-slate-500 text-sm">Please select a case file from the sidebar to review the briefing and initiate your operation.</p>
        </div>
      </div>
    );
  }

  if (!selectedMystery && mysteries.length > 0) {
    return <div className="text-center font-mono text-slate-500 mt-20">Case file not found.</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="cyber-card p-8 mb-8">
        <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-violet-900/50 pb-2">Briefing: Case #{selectedMystery?.id}</h2>
        <h3 className="font-mono text-2xl text-slate-200 mb-4">{selectedMystery?.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-wrap">{selectedMystery?.description}</p>
      </div>

      <form onSubmit={handleStart} className="cyber-card p-8">
        <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-6">Agent Registration</h2>
        
        <div className="mb-6">
          <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">Operation Team Name</label>
          <input 
            type="text" 
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="cyber-input w-full"
            placeholder="Enter designation..."
            required
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        <button 
          type="submit" 
          disabled={!teamName.trim()}
          className="cyber-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Initiate Operation
        </button>
        {error && <p className="text-red-500 font-mono text-sm mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
}
