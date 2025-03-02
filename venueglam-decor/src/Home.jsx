import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import "./home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="home-container">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <h2 className="logo">VenueGlam Décor</h2>
        <ul className="nav-links">
          <li>📞 Contact Us</li>
          <li>🏠 Our Domain</li>
          <li onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>ℹ️ About Us</li>
        </ul>
      </nav>

      {/* 🔹 Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      {/* 🔹 Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>🎂 Birthday Decor</li>
          <li>🏢 Office Decor</li>
          <li>💍 Engagement Decor</li>
          <li>🎊 Event Decor</li>
        </ul>
      </div>

      {/* 🔹 Center Text */}
      <div className="center-div">
        <h1>A Single Place for Multiple Decor</h1>
      </div>

      {/* 🔹 Decor Sections */}
      <div className="decor-sections">
        <div className="decor-box birthday">
          <h2>Birthday Decor</h2>
        </div>
        <div className="decor-box office">
          <h2>Office Decor</h2>
        </div>
        <div className="decor-box engagement">
          <h2>Engagement Decor</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
