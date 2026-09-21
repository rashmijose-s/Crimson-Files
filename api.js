const API_URL = 'http://localhost:3001/api';

export const getMysteries = async () => {
  const res = await fetch(`${API_URL}/mysteries`);
  return res.json();
};

export const startSession = async (teamName, mysteryId) => {
  const res = await fetch(`${API_URL}/sessions/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ teamName, mysteryId })
  });
  return res.json();
};

export const getClue = async (sessionId) => {
  const res = await fetch(`${API_URL}/sessions/${sessionId}/clue`);
  return res.json();
};

export const submitAnswer = async (sessionId, answer) => {
  const res = await fetch(`${API_URL}/sessions/${sessionId}/submit-answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer })
  });
  return res.json();
};

export const solveMystery = async (sessionId, solution) => {
  const res = await fetch(`${API_URL}/sessions/${sessionId}/solve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ solution })
  });
  return res.json();
};

export const getLeaderboard = async () => {
  const res = await fetch(`${API_URL}/leaderboard`);
  return res.json();
};

export const deleteLeaderboardEntry = async (sessionId) => {
  const res = await fetch(`${API_URL}/leaderboard/${sessionId}`, {
    method: 'DELETE'
  });
  return res.json();
};

export const clearLeaderboard = async () => {
  const res = await fetch(`${API_URL}/leaderboard`, {
    method: 'DELETE'
  });
  return res.json();
};
