import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // We will use Link for all navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import arcLogo from '../../assets/arc-logo.png';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    {/* <img src={arcLogo} alt="ARC Logo" className="logo-img" /> */}
                    <div className='logo-text'>
                        <div className="logo-maintext">ARC</div>
                        <div className="logo-subtext">Autonomous Robotics Center</div>
                    </div>
                </Link>
            </div>
            
            <nav className="main-nav">
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {/* All links are now <Link> components pointing to new pages */}
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link></li>
                    <li><Link to="/research" onClick={() => setIsMenuOpen(false)}>RESEARCH</Link></li>
                    <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link></li>
                    <li><Link to="/team" onClick={() => setIsMenuOpen(false)}>TEAM</Link></li>
                    <li><Link to="/publications" onClick={() => setIsMenuOpen(false)}>PUBLICATIONS</Link></li>

                    <button onClick={toggleTheme} className="theme-toggle-btn">
                        {currentTheme === 'dark' ? (
                            <><FontAwesomeIcon icon={faSun} /> Light</>
                        ) : (
                            <><FontAwesomeIcon icon={faMoon} /> Dark</>
                        )}
                    </button>
                </ul>
              

                <button className="hamburger-menu" onClick={handleMenuToggle}>
                    <div /><div /><div />
                </button>
            </nav>
        </header>
    );
};

export default Navbar;