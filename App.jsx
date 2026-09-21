import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ActiveSession from './components/ActiveSession';
import Leaderboard from './components/Leaderboard';
import DashboardLayout from './components/DashboardLayout';
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
