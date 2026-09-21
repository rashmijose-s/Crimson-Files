import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ActiveSession from './ActiveSession';
import Leaderboard from './Leaderboard';
import DashboardLayout from './DashboardLayout';
import { LayoutProvider } from './LayoutContext';

function App() {
  return (
    <Router>
      <LayoutProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/session/:id" element={<ActiveSession />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </DashboardLayout>
      </LayoutProvider>
    </Router>
  );
}

export default App;
