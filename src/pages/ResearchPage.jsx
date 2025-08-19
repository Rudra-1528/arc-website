
const ResearchPage = () => {
    return (
        <section id="research" className="page-section">
            <div className="page-container">
                <h2>Our Research Areas</h2>
                <p>Our research spans a variety of critical fields, addressing complex problems with innovative robotic solutions.</p>
                <div className="research-grid">
                    <div className="research-item">
                        <h3>Autonomous Navigation</h3>
                        <p>Developing intelligent systems that can navigate complex and dynamic environments without human intervention.</p>
                    </div>
                    <div className="research-item">
                        <h3>Human-Robot Interaction</h3>
                        <p>Creating intuitive and safe interaction methods for seamless collaboration between people and robots.</p>
                    </div>
                    <div className="research-item">
                        <h3>AI & Machine Learning</h3>
                        <p>Leveraging artificial intelligence to enable robots to learn, adapt, and make decisions in real-time.</p>
                    </div>
                    <div className="research-item">
                        <h3>Robotics in Medicine</h3>
                        <p>Innovating robotic solutions for surgical assistance, diagnostics, and patient care.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchPage;