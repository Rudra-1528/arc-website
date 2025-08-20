import { useState } from 'react'; // 1. Import useState

// Import the full-size images for each team member
// import janeDoeImg from '../assets/team/jane-doe.jpg'; // Replace with your actual image file
// import johnSmithImg from '../assets/team/john-smith.jpg'; // Replace with your actual image file
// import emilyWhiteImg from '../assets/team/emily-white.jpg'; // Replace with your actual image file
// import alanTuringImg from '../assets/team/alan-turing.jpg'; // Replace with your actual image file

const TeamPage = () => {
    // 2. State to hold the URL of the image to show in the popup. null means the popup is closed.
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section id="people" className="page-section">
                <div className="page-container">
                    <h2>Our Team</h2>
                    <p>Meet the dedicated team of researchers, students, and faculty who drive our innovative projects.</p>
                    <div className="people-grid">
                        
                        {/* 3. Update each person-card to be clickable */}
                        <div className="person-card">
                            {/* <img src={janeDoeImg} alt="Jane Doe" className="person-image clickable" onClick={() => setSelectedImage(janeDoeImg)} /> */}
                            <h4>Jane Doe</h4>
                            <p>Lead Researcher</p>
                        </div>

                        <div className="person-card">
                            {/* <img src={johnSmithImg} alt="John Smith" className="person-image clickable" onClick={() => setSelectedImage(johnSmithImg)} /> */}
                            <h4>John Smith</h4>
                            <p>Robotics Engineer</p>
                        </div>

                        <div className="person-card">
                            {/* <img src={emilyWhiteImg} alt="Emily White" className="person-image clickable" onClick={() => setSelectedImage(emilyWhiteImg)} /> */}
                            <h4>Emily White</h4>
                            <p>PhD Candidate</p>
                        </div>
                        
                        <div className="person-card">
                            {/* <img src={alanTuringImg} alt="Dr. Alan Turing" className="person-image clickable" onClick={() => setSelectedImage(alanTuringImg)} /> */}
                            <h4 style={{ color: '' }}>Dr. Alan Turing</h4>
                            <p style={{ color: '' }}>Faculty Advisor</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. This is the JSX for the Modal Popup */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <span className="modal-close-btn">&times;</span>
                        <img src={selectedImage} alt="Enlarged view" className="modal-image" />
                    </div>
                </div>
            )}
        </>
    );
};

export default TeamPage;