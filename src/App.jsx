
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home';
// import About from './pages/About'; // Create these later
// import Events from './pages/Events';
// import Standards from './pages/Standards';
// import Certifications from './pages/Certifications';
// import AreasOfFocus from './pages/AreasOfFocus';
// import Membership from './pages/Membership';
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/standards" element={<Standards />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/areas-of-focus" element={<AreasOfFocus />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
