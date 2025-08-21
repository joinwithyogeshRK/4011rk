import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Home from './pages/Home';
import QuestDetails from './pages/QuestDetails';
import Inventory from './pages/Inventory';
import CharacterProfile from './pages/CharacterProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quest/:id" element={<QuestDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<CharacterProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
