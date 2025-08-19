
// Receive toggleTheme and currentTheme as props
import { Link } from 'react-router-dom'; // 1. Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import arcLogo from '../../assets/arc-logo.png';

const Navbar = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/"> 
                    {/* <img src={arcLogo} alt="ARC Logo" className="logo-img" /> */}
                    <span className="logo-text">ARC</span>
                </Link>
            </div>
            <nav className="main-nav">
                <ul className="nav-links">
                    
                    <li><a href="/#home">HOME</a></li>
                    <li><a href="/#about">ABOUT US</a></li>
                    <li><a href="/#research">RESEARCH</a></li>
                    <li><a href="/#projects">PROJECTS</a></li>
                    <li><a href="/#people">TEAM</a></li>
                    <li><a href="/#publications">PUBLICATIONS</a></li>

                    {/* 3. Change these to Link for separate pages */}
                    <li><Link to="/login">LOGIN</Link></li>
                     
                </ul>
                <button onClick={toggleTheme} className="theme-toggle-btn">
                    {currentTheme === 'dark' ? (
                        <>
                            <FontAwesomeIcon icon={faSun} /> Light
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faMoon} /> Dark
                        </>
                    )}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;