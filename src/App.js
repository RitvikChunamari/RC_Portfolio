import './App.css';
import Homecontent from './components/Homecontent';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Shader from './components/Shader';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="homepage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
        <Homepage></Homepage>
      </div>

    </div>
  );
}

export default App;
