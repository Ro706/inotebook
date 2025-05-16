import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Pagenotfound from './components/Pagenotfound';
import NoteState from './context/notes/NoteStates';
import Signup from './components/Signup';
import Login from './components/Login';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem("token"); // ✅ Check if user is logged in
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ProtectedRoute element={<Home />} />} />
              <Route path="/about" element={<ProtectedRoute element={<About />} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;