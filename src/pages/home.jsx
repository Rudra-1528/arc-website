import '../assets/style.css'; // Import partner's CSS

function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <h1 className="banner-title">Where Learning Meets Innovation</h1>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Robotics</h2>
        </div>
        <div className="hero-image-container"></div>
      </section>
    </main>
  );
}

export default Home;
