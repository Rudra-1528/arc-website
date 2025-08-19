
const PublicationsPage = () => {
    return (
        <section id="publications" className="page-section">
            <div className="page-container">
                <h2>Publications</h2>
                <p>A list of our recent publications and research papers.</p>
                <ul className="publication-list">
                    <li className="publication-item">
                        <h3>"A Novel Approach to AI-Driven Robotics"</h3>
                        <p>Published in the Journal of Autonomous Systems, 2024. <a href="#">Read More</a></p>
                    </li>
                    <li className="publication-item">
                        <h3>"Humanoid Robots and Their Impact on Modern Industry"</h3>
                        <p>Proceedings of the International Conference on Robotics and Automation, 2023. <a href="#">Read More</a></p>
                    </li>
                    <li className="publication-item">
                        <h3>"Enhanced Sensor Fusion for Drone Navigation"</h3>
                        <p>Published in Robotics and Autonomous Systems, 2023. <a href="#">Read More</a></p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default PublicationsPage;