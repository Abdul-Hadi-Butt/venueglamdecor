import React from "react";
import "./Home.css";
import { FaPhoneAlt, FaInfoCircle, FaTools, FaBlog, FaEnvelope, FaRegSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">VenueGlam Décor</h2>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>🏠 Home</li>
          <li onClick={() => navigate("/services")}>🛠 Services</li>
          <li onClick={() => navigate("/blog")}>📰 Blog</li>
          <li onClick={() => navigate("/about")}>ℹ️ About Us</li>
          <li onClick={() => navigate("/contact")}>📞 Contact</li>
        </ul>
      </nav>

      {/* Center Text */}
      <div className="center-div">
        <h1>A Single Place for Multiple Décor</h1>
      </div>

      {/* Decor Sections */}
      <div className="decor-sections">
        <div className="decor-box birthday">🎂 Birthday Decor</div>
        <div className="decor-box office">🏢 Office Decor</div>
        <div className="decor-box engagement">💍 Engagement Decor</div>
      </div>

      {/* Party Icon at Bottom Right */}
      <FaRegSmileBeam className="party-icon" />
    </div>
  );
};

export default Home;
