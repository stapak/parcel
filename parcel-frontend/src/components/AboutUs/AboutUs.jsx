import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate=useNavigate();

    return (
    <section className="about">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Parcel</h1>
        <p>
          Simplifying parcel tracking with speed, accuracy, and reliability.
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Parcel is a modern parcel tracking platform designed to help users
          easily monitor their shipments in real-time. We focus on providing
          a seamless and intuitive experience for both individuals and businesses.
        </p>
      </div>

      {/* FEATURES */}
      <div className="about-features">

        <div className="feature-card">
          <h3>⚡ Fast Tracking</h3>
          <p>Get real-time updates instantly without delays.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>Your data is protected with modern security practices.</p>
        </div>

        <div className="feature-card">
          <h3>🌍 Reliable</h3>
          <p>Track parcels across multiple services in one place.</p>
        </div>

      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Start Tracking Now</h2>
        <button onClick={()=>{
            navigate('/track')
        }}>Track Parcel</button>
      </div>

    </section>
  );
}

export default AboutUs;