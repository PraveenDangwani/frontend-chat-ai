import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HistoryPage from './pages/HistoryPage';
import ThemeToggle from './components/ThemeToggle';
import './App.css'

const App = () => {
  return (
    <Router>
      {/* <ThemeToggle /> */}
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
