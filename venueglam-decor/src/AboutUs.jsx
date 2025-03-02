import React from "react";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About VenueGlam Décor</h1>
        <p>
          Welcome to <strong>VenueGlam Décor</strong> – your one-stop destination for premium event 
          decorations! Whether you're planning a birthday, office gathering, engagement, or 
          any special event, we provide stunning décor solutions to make your occasion 
          unforgettable.
        </p>
        <p>
          Our platform allows customers to discover and book beautifully decorated venues, 
          while venue owners can list their spaces with ease. With a user-friendly experience, 
          secure payments, and a variety of themes, VenueGlam Décor ensures your events 
          shine with elegance and charm.
        </p>
        <p>
          Our mission is to bring creativity, affordability, and convenience to event 
          planning, offering the best ambiance for your celebrations.
        </p>
        <button className="back-btn" onClick={() => navigate("/Home")}>⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default AboutUs;
