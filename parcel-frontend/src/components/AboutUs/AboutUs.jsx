import "./AboutUs.css";
 
function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>
            Delivering parcels faster, safer, and smarter across cities.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a modern parcel and logistics platform focused on making
              shipment tracking and delivery management simple for everyone.
              Our mission is to provide transparent, reliable, and efficient
              parcel services with real-time tracking and secure delivery.
            </p>
            <p>
              From local shipments to inter-city logistics, we help businesses
              and individuals move packages with confidence.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
              alt="Parcel Delivery"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Secure Packaging</h3>
            <p>
              Every parcel is handled carefully to ensure safe and damage-free
              delivery.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Optimized logistics network for quick and efficient parcel
              movement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Live Tracking</h3>
            <p>
              Track shipments in real time and stay updated at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Vision</h2>
        <p>
          We aim to simplify logistics with technology-driven solutions that
          improve customer experience and operational efficiency.
        </p>
      </section>

      {/* Footer CTA */}
      <section className="cta-section">
        <h2>Ready to Ship With Us?</h2>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default AboutUs;