import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We offer a variety of décor services to make your events special.</p>

      <div className="services-grid">
        <div className="decor-box birthday">
           <h2>Birthday Decor</h2>
          <p>Make birthdays extra special with our creative decorations.</p>
        </div>

        <div className="decor-box engagement">
          <h2>Engagement Decor</h2>
          <p>Elegant decorations to celebrate your love and engagement.</p>
        </div>

        <div className="decor-box party">
           <h2>Party Decor</h2>
          <p>Turn any gathering into a vibrant and exciting event.</p>
        </div>

        <div className="decor-box graduation">
           <h2>Graduation Decor</h2>
          <p>Celebrate achievements with themed graduation decorations.</p>
        </div>

        <div className="decor-box anniversary">
           <h2>Anniversaries Decor</h2>
          <p>Beautiful decorations for a romantic and memorable celebration.</p>
        </div>

        <div className="decor-box home">
           <h2>Home Decor</h2>
          <p>Transform your living space with our stylish home décor.</p>
        </div>

        <div className="decor-box others">
           <h2>Others</h2>
          <p>We provide décor services for corporate events and more.</p>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Services;
