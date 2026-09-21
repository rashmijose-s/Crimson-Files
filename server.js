const express = require('express');
const cors = require('cors');
const { setupDatabase } = require('./database');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let db;

async function init() {
  db = await setupDatabase();

  // Get all mysteries
  app.get('/api/mysteries', async (req, res) => {
    try {
      const mysteries = await db.all('SELECT id, title, description FROM mysteries');
      res.json(mysteries);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Start a session
  app.post('/api/sessions/start', async (req, res) => {
    const { teamName, mysteryId } = req.body;
    try {
      // Get or create team
      let team = await db.get('SELECT id FROM teams WHERE name = ?', teamName);
      if (!team) {
        const result = await db.run('INSERT INTO teams (name) VALUES (?)', teamName);
        team = { id: result.lastID };
      }

      const startTime = new Date().toISOString();
      const result = await db.run(
        'INSERT INTO sessions (team_id, mystery_id, start_time, current_clue) VALUES (?, ?, ?, 1)',
        team.id, mysteryId, startTime
      );
      
      res.json({ sessionId: result.lastID, startTime });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get current clue
  app.get('/api/sessions/:id/clue', async (req, res) => {
    const { id } = req.params;
    try {
      const session = await db.get('SELECT mystery_id, current_clue, end_time FROM sessions WHERE id = ?', id);
      if (!session) return res.status(404).json({ error: 'Session not found' });
      
      const mystery = await db.get('SELECT description, final_options FROM mysteries WHERE id = ?', session.mystery_id);

      // Get all previous clues
      const previousClues = await db.all(
        'SELECT sequence_number as seq, clue_text as text FROM clues WHERE mystery_id = ? AND sequence_number < ? ORDER BY sequence_number ASC',
        session.mystery_id, session.current_clue
      );

      // Get current question
      let currentQuestion = null;
      if (session.current_clue <= 5 && !session.end_time) {
         currentQuestion = await db.get(
          'SELECT sequence_number as seq, question FROM clues WHERE mystery_id = ? AND sequence_number = ?',
          session.mystery_id, session.current_clue
        );
      }

      res.json({
        previousClues,
        currentQuestion,
        isCompleted: !!session.end_time,
        currentClueNumber: session.current_clue,
        mysteryDescription: mystery.description,
        finalOptions: JSON.parse(mystery.final_options || '[]')
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Submit answer for clue
  app.post('/api/sessions/:id/submit-answer', async (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    try {
      const session = await db.get('SELECT mystery_id, current_clue FROM sessions WHERE id = ?', id);
      if (!session) return res.status(404).json({ error: 'Session not found' });

      if (session.current_clue > 5) {
        return res.status(400).json({ error: 'All clues unlocked' });
      }

      const clue = await db.get(
        'SELECT answer FROM clues WHERE mystery_id = ? AND sequence_number = ?',
        session.mystery_id, session.current_clue
      );

      const normalizedClueAnswer = clue.answer.replace(/\r/g, '').trim().toLowerCase();
      const normalizedUserAnswer = answer.replace(/\r/g, '').trim().toLowerCase();

      if (normalizedClueAnswer === normalizedUserAnswer) {
        await db.run('UPDATE sessions SET current_clue = current_clue + 1 WHERE id = ?', id);
        res.json({ correct: true });
      } else {
        res.json({ correct: false });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Submit final solution
  app.post('/api/sessions/:id/solve', async (req, res) => {
    const { id } = req.params;
    const { solution } = req.body;
    try {
      const session = await db.get('SELECT mystery_id, end_time, current_clue FROM sessions WHERE id = ?', id);
      if (!session) return res.status(404).json({ error: 'Session not found' });
      
      if (session.current_clue <= 5) return res.status(400).json({ error: 'Not all clues unlocked' });
      if (session.end_time) return res.status(400).json({ error: 'Already solved' });

      const mystery = await db.get('SELECT final_solution FROM mysteries WHERE id = ?', session.mystery_id);
      
      if (mystery.final_solution.toLowerCase() === solution.trim().toLowerCase()) {
        const endTime = new Date().toISOString();
        await db.run('UPDATE sessions SET end_time = ? WHERE id = ?', endTime, id);
        res.json({ correct: true, endTime });
      } else {
        res.json({ correct: false });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get leaderboard
  app.get('/api/leaderboard', async (req, res) => {
    try {
      // Calculate duration in seconds for completed sessions
      const leaderboard = await db.all(`
        SELECT 
          sessions.id as sessionId,
          teams.name as teamName, 
          mysteries.title as mysteryTitle, 
          sessions.start_time, 
          sessions.end_time,
          (julianday(sessions.end_time) - julianday(sessions.start_time)) * 86400.0 AS duration_seconds
        FROM sessions
        JOIN teams ON sessions.team_id = teams.id
        JOIN mysteries ON sessions.mystery_id = mysteries.id
        WHERE sessions.end_time IS NOT NULL
        ORDER BY duration_seconds ASC
        LIMIT 10
      `);
      res.json(leaderboard);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Delete specific leaderboard entry
  app.delete('/api/leaderboard/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await db.run('DELETE FROM sessions WHERE id = ?', id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Clear entire leaderboard
  app.delete('/api/leaderboard', async (req, res) => {
    try {
      await db.run('DELETE FROM sessions WHERE end_time IS NOT NULL');
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

init();
