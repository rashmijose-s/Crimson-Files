import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getClue, submitAnswer, solveMystery } from '../api';
import { useLayout } from '../LayoutContext';

export default function ActiveSession() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setNavStatus, setTimerText } = useLayout();
  
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState('');
  const [solution, setSolution] = useState('');
  const [error, setError] = useState('');
  
  const [elapsed, setElapsed] = useState(0);

  const fetchData = async () => {
    try {
      const res = await getClue(id);
      setData(res);
      if (res.isCompleted) {
        navigate('/leaderboard');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setNavStatus('ACTIVE');
    fetchData();
  }, [id, setNavStatus]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(prev => {
        const next = prev + 1;
        setTimerText(formatTime(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimerText]);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await submitAnswer(id, answer);
      if (res.correct) {
        setAnswer('');
        fetchData();
      } else {
        setError('INCORRECT DECRYPTION KEY.');
      }
    } catch (err) {
      setError('TRANSMISSION ERROR.');
    }
  };

  const handleSolutionSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await solveMystery(id, solution);
      if (res.correct) {
        navigate('/leaderboard');
      } else {
        setError('HYPOTHESIS REJECTED. INVESTIGATION CONTINUES.');
      }
    } catch (err) {
      setError('TRANSMISSION ERROR.');
    }
  };

  if (!data) return (
    <div className="flex items-center justify-center h-64">
      <div className="font-mono text-violet-500 animate-pulse">Establishing secure connection...</div>
    </div>
  );

  return (
    <div className="w-full pb-10">
      <div className="mb-8">
        <h3 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest mb-4 border-b border-violet-900/50 pb-2">Mission Briefing</h3>
        {data.mysteryDescription && (
          <div className="cyber-card mb-8 p-6 text-slate-300 whitespace-pre-wrap leading-relaxed">
            {data.mysteryDescription}
          </div>
        )}

        <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4 border-b border-cyan-900/50 pb-2">Decrypted Intel</h3>
        {data.previousClues.length === 0 ? (
          <p className="text-slate-500 italic font-mono text-sm">No intel decrypted yet.</p>
        ) : (
          <ul className="space-y-4">
            {data.previousClues.map(clue => (
              <li key={clue.seq} className="cyber-card p-5 border-l-4 border-l-cyan-500 text-slate-300 whitespace-pre-wrap">
                <span className="font-bold text-cyan-400 font-mono text-sm uppercase tracking-wider block mb-2">Intel {clue.seq}</span> 
                {clue.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {data.currentQuestion ? (
        <div className="cyber-card p-6 border-violet-500/50 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
          <h3 className="text-sm font-mono font-bold mb-4 text-violet-400 uppercase tracking-widest flex items-center">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-3"></span>
            Unlock Intel {data.currentQuestion.seq}
          </h3>
          <div className="mb-6 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-slate-950 rounded pointer-events-none border border-slate-800"></div>
             <pre className="relative z-10 text-emerald-400 bg-transparent p-5 font-mono text-sm whitespace-pre-wrap">
               {data.currentQuestion.question}
             </pre>
          </div>
          
          <form onSubmit={handleAnswerSubmit} className="flex flex-col gap-4">
            <textarea 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="cyber-input w-full"
              placeholder="Enter output or evaluation..."
              rows={4}
              required
              spellCheck="false"
            />
            <button type="submit" className="cyber-button self-end">
              Transmit Key
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-sm font-mono uppercase tracking-wider text-right">{error}</p>}
        </div>
      ) : (
        <div className="cyber-card p-8 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.15)] bg-red-950/10">
          <h3 className="text-lg font-mono font-bold mb-4 text-red-500 text-center uppercase tracking-widest">Final Deduction</h3>
          <p className="mb-8 text-slate-300 text-center text-sm">All intel acquired. Submit your final conclusion to close the case.</p>
          
          <form onSubmit={handleSolutionSubmit} className="max-w-2xl mx-auto">
            {data.finalOptions && data.finalOptions.length > 0 ? (
              <div className="flex flex-col gap-4 mb-8 text-left">
                {data.finalOptions.map((opt, idx) => (
                  <label key={idx} className={`flex items-start gap-4 border rounded p-5 cursor-pointer transition-all ${solution === ['A', 'B', 'C'][idx] ? 'bg-red-900/30 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'bg-slate-900 border-slate-800 hover:border-slate-600'}`}>
                    <input 
                      type="radio" 
                      name="solution" 
                      value={['A', 'B', 'C'][idx]} 
                      checked={solution === ['A', 'B', 'C'][idx]} 
                      onChange={(e) => setSolution(e.target.value)} 
                      className="mt-1 appearance-none w-4 h-4 border-2 border-slate-500 rounded-sm checked:bg-red-500 checked:border-red-500 transition-colors" 
                      required
                    />
                    <span className="leading-relaxed text-slate-300 text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input 
                type="text" 
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                className="cyber-input w-full mb-6 text-center text-lg"
                placeholder="Identify the target..."
                required
              />
            )}
            <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-mono uppercase tracking-widest py-3 px-4 rounded transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              Conclude Investigation
            </button>
            {error && <p className="text-red-500 mt-4 text-sm text-center font-mono uppercase">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}
