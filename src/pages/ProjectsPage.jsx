import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

const ProjectsPage = () => {
    return (
        <section id="projects" className="page-section">
            <div className="page-container">
                <h2>Projects & Portfolio</h2>
                <p>Our portfolio showcases the practical application of our research through various projects and products.</p>
                <div className="project-grid">
                    <div className="project-card">
                        {/* 2. Wrap the image with a Link */}
                        <Link to="/projects">
                            <img src="https://images.unsplash.com/photo-1620712948283-f32f05d59074?w=800&q=80&fm=jpg&crop=entropy&cs=srgb" alt="Robotics arm in a factory" className="project-image" />
                        </Link>
                        <div className="project-content">
                            <h3>Automated Manufacturing Arm</h3>
                            <p>A high-precision robotic arm designed to enhance efficiency and safety in industrial settings.</p>
                        </div>
                    </div>
                    <div className="project-card">
                        {/* 2. Wrap the image with a Link */}
                        <Link to="/projects">
                            <img src="https://images.unsplash.com/photo-1620712948283-f32f05d59074?w=800&q=80&fm=jpg&crop=entropy&cs=srgb" alt="Robotics dog" className="project-image" />
                        </Link>
                        <div className="project-content">
                            <h3>Search & Rescue Drones</h3>
                            <p>Autonomous drones equipped with thermal sensors to assist in search and rescue missions.</p>
                        </div>
                    </div>
                    <div className="project-card">
                        {/* 2. Wrap the image with a Link */}
                        <Link to="/projects">
                            <img src="https://images.unsplash.com/photo-1620712948283-f32f05d59074?w=800&q=80&fm=jpg&crop=entropy&cs=srgb" alt="Self-driving car" className="project-image" />
                        </Link>
                        <div className="project-content">
                            <h3>Urban Mobility Bot</h3>
                            <p>A compact, self-driving vehicle designed for last-mile delivery and urban transport.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;