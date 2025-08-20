import KeyResearch from './HomePageSections/KeyResearch';
import FeaturedProject from './HomePageSections/FeaturedProject';
import LatestNews from './HomePageSections/LatestNews';
import OurPartners from './HomePageSections/OurPartners';

const HomePage = () => {
    return (
        <>
            <section id="home" className="page-section">
                <div className="hero-content">
                    <h1 className="hero-title">Where Innovation Meets Robotics</h1>
                    <p className="hero-subtitle">Exploring the future, one byte at a time.</p>
                </div>
                <div className="hero-image-container">
                    <div className="overlay"></div>
                </div>
            </section>
            
            {/* Add your new sections here in order */}
            <KeyResearch />
            <FeaturedProject />
            <LatestNews />
            <OurPartners />
        </>
    );
};

export default HomePage;