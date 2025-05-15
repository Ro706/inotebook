import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Pagenotfound from './components/Pagenotfound';
import NoteState from './context/notes/NoteStates';
function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        </div>
      </Router>
      </NoteState>

    </>
  );
}

export default App;
