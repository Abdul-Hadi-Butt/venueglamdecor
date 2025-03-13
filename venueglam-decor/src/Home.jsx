import React from "react";
import "./Home.css";
import { FaRegSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/logo.jpg" alt="VenueGlam Decor Logo" className="logo-img" />
          <h2 className="logo-text">VenueGlam Decor</h2>
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>🏠 Home</li>
          <li onClick={() => navigate("/services")}>🛠 Services</li>
          <li onClick={() => navigate("/about")}>ℹ️ About Us</li>
          <li onClick={() => navigate("/contact")}>📞 Contact Us</li>
        </ul>
      </nav>

      {/* Center Text */}
      <div className="center-div">
        <h1>A Single Place for Multiple Decor</h1>
      </div>

      {/* Decor Sections */}
      <div className="decor-sections">
        <div className="decor-box birthday" onClick={() => navigate("/birthday-decor")}>
          🎂 Birthday Decor
        </div>
        <div className="decor-box engagement" onClick={()=> navigate("/engagment-decor")}>💍 Engagement Decor</div>
        <div className="decor-box party" onClick={()=> navigate("/party-decor")}>🎉 Party Decor</div>
        <div className="decor-box graduation" onClick={()=> navigate("/graduation-decor")}>🎓 Graduation Decor</div>
        <div className="decor-box anniversary" onClick={()=> navigate("/anniversary-decor")}>❤️ Anniversaries Decor</div>
        <div className="decor-box home" onClick={()=> navigate("/home-decor")}>🏠 Home Decor</div>
        <div className="decor-box others">🏢 Others</div>
      </div>

      {/* Party Icon at Bottom Right */}
      <FaRegSmileBeam className="party-icon" />
    </div>
  );
};

export default Home;
