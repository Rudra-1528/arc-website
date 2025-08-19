
const TeamPage = () => {
    return (
        <section id="people" className="page-section">
            <div className="page-container">
                <h2>Our Team</h2>
                <p>Meet the dedicated team of researchers, students, and faculty who drive our innovative projects.</p>
                <div className="people-grid">
                    <div className="person-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="person-image" />
                        <h4>Jane Doe</h4>
                        <p>Lead Researcher</p>
                    </div>
                    <div className="person-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="person-image" />
                        <h4>John Smith</h4>
                        <p>Robotics Engineer</p>
                    </div>
                    <div className="person-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="person-image" />
                        <h4>Emily White</h4>
                        <p>PhD Candidate</p>
                    </div>
                    <div className="person-card">
                        <img src="https://via.placeholder.com/150" alt="Team Member 4" className="person-image" />
                        <h4 style={{ color: '' }}>Dr. Alan Turing</h4>
                        <p style={{ color: '' }}>Faculty Advisor</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamPage;