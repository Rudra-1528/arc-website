import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Import Routes and Route

// Import Components
import Navbar from './components/Navbar';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import PublicationsPage from './pages/PublicationsPage';
import LoginPage from './pages/LoginPage';

// This component will hold our main scrolling page
const MainPage = () => {
  return (
    <main className="main-content">
      <HomePage />
      <AboutPage />
      <ResearchPage />
      <ProjectsPage />
      <TeamPage />
      <PublicationsPage />
    </main>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = '';
    if (theme === 'light') document.body.classList.add('light-mode');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      
      {/* Login page*/}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;