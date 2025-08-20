import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faRobot, faHandshake, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';

const KeyResearch = () => {
    return (
        <section className="home-section">
            <div className="page-container">
                <h2>Key Research Areas</h2>
                <div className="research-highlights-grid">
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faRobot} className="feature-icon" />
                        <h3>Autonomous Navigation</h3>
                        <p>Intelligent systems that navigate complex environments without human intervention.</p>
                    </div>
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
                        <h3>Human-Robot Interaction</h3>
                        <p>Creating intuitive and safe methods for seamless collaboration between people and robots.</p>
                    </div>
                    <div className="feature-card">
                        <FontAwesomeIcon icon={faBrain} className="feature-icon" />
                        <h3>AI & Machine Learning</h3>
                        <p>Leveraging AI to enable robots to learn, adapt, and make decisions in real-time.</p>
                    </div>
                </div>
                <Link to="/research" className="cta-button">Explore Our Research</Link>
            </div>
        </section>
    );
};

export default KeyResearch;