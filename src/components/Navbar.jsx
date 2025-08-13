import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'; // your custom styles

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.1edtech.org/sites/default/files/1EdTech-logo-header.png"
            alt="Logo"
            height="40"
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link" to="/areas-of-focus">AREAS OF FOCUS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/standards">OUR STANDARDS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certifications">CERTIFICATIONS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">EVENTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">ABOUT US</Link></li>
          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-2">
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
            <Link to="/membership" className="btn btn-success btn-sm">Explore Membership</Link>
            <button onClick={toggleTheme} className="btn theme-toggle-btn">
              {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
