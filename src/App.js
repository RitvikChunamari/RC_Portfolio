import './App.css';
// import Homecontent from './components/Homecontent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Page2 from './components/Explore/Page2';
import Landing from './components/Explore/Landing';


function App() {
  return (
    // <div className="App">
    //   <Navbar></Navbar>
    //   <div className="homepage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
    //     <Homepage></Homepage>
    //   </div>

    // </div>
    <Router>
      <Routes>
        <Route className="homepage" path="/" element={<Homepage />} />
        <Route path="/landingpage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }} element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
