import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Page2 from './components/Explore/Page2';
import Landing from './components/Explore/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route className="homepage" path="/" element={<Homepage />} />
        <Route path="/landingpage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }} element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
