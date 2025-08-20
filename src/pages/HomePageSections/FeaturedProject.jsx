import React from 'react';
import { Link } from 'react-router-dom';
// import featuredProjectImage from '../../assets/featured-project.jpg'; // Add a cool project image here

const FeaturedProject = () => {
    return (
        <section className="home-section featured-project-section">
            <div className="page-container">
                 <h2>Project Spotlight</h2>
                {/* <div className="featured-project-grid">
                    <div className="featured-project-image">
                        <img src={featuredProjectImage} alt="Featured Project" />
                    </div>
                    <div className="featured-project-content">
                        <h3>Search & Rescue Drones</h3>
                        <p>Our latest initiative involves developing autonomous drones equipped with thermal sensors and AI-powered pathfinding to drastically improve success rates in search and rescue missions over difficult terrain.</p>
                        <Link to="/projects" className="cta-button">See All Projects</Link>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default FeaturedProject;