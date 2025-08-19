import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content-grid">
                
                {/* Column 1: Brand and Socials */}
                <div className="footer-column">
                    <h3 className="footer-brand-name">TRINNOVATE</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#people">Team</a></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-column">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-contact-info">
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>123 Innovation Drive, Tech City</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>contact@trinnovate.dev</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>(123) 456-7890</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 ARC - Trinnovate. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;